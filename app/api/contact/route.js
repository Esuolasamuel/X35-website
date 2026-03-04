import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* ---------------- SMTP ---------------- */
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/* ---------------- Rate Limit ---------------- */
// Simple in-memory rate limit (per server instance)
const RATE_LIMIT = {
  windowMs: 60_000, // 1 minute
  max: 5,           // 5 requests per IP per minute
};

const ipRequests = new Map();

function rateLimit(ip) {
  const now = Date.now();
  const record = ipRequests.get(ip) || { count: 0, start: now };

  if (now - record.start > RATE_LIMIT.windowMs) {
    ipRequests.set(ip, { count: 1, start: now });
    return false;
  }

  record.count += 1;
  ipRequests.set(ip, record);

  return record.count > RATE_LIMIT.max;
}

/* ---------------- Handler ---------------- */
export async function POST(request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    /* Rate limit */
    if (rateLimit(ip)) {  
      return NextResponse.json(
        { success: false, message: "Too many requests" },
        { status: 429 }
      );
    }

    const body = await request.json();

    /* Honeypot check */
    if (body.company) {
      return NextResponse.json({ success: true }); // silently succeed
    }

    /* Payload size protection */
    if (JSON.stringify(body).length > 10_000) {
      return NextResponse.json(
        { success: false, message: "Payload too large" },
        { status: 413 }
      );
    }

    const sanitize = (v) =>
      typeof v === "string" ? v.trim().replace(/[<>]/g, "") : "";

    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const projectType = sanitize(body.projectType);
    const budget = sanitize(body.budget);
    const timeline = sanitize(body.timeline);
    const description = sanitize(body.description);

    if (!name || !email || !description) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email" },
        { status: 400 }
      );
    }

    const escapeHtml = (str) =>
      str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const html = `
      <h2>New Project Inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Project Type:</strong> ${escapeHtml(projectType || "N/A")}</p>
      <p><strong>Budget:</strong> ${escapeHtml(budget || "N/A")}</p>
      <p><strong>Timeline:</strong> ${escapeHtml(timeline || "N/A")}</p>
      <p><strong>Description:</strong><br/>${escapeHtml(description)}</p>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `New Project Inquiry — ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, message: "Email failed" },
      { status: 500 }
    );
  }
}