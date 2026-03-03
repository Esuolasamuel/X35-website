import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Server-side sanitization (defense in depth)
    const sanitize = (value) => {
      if (typeof value !== "string") return "";
      return value
        .trim()
        .replace(/[<>]/g, "")
    };

    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const projectType = sanitize(body.projectType);
    const budget = sanitize(body.budget);
    const timeline = sanitize(body.timeline);
    const description = sanitize(body.description);

    // Validate required fields
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !description || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid or missing required fields" },
        { status: 400 }
      );
    }

    // Escape HTML to prevent XSS in email
    const escapeHtml = (str) =>
      str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0C0C1C;">New Project Inquiry</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${escapeHtml(email)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Project Type:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${projectType ? escapeHtml(projectType) : "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Budget:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${budget ? escapeHtml(budget) : "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Timeline:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${timeline ? escapeHtml(timeline) : "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Description:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${escapeHtml(description)}</td>
          </tr>
        </table>
      </div>
    `;

    const mailDetails = {
      from: process.env.SMTP_FROM || "X35 Projects <your-email@gmail.com>",
      to: process.env.CONTACT_EMAIL || "odixcityconsulting@gmail.com",
      subject: `New Project Inquiry - ${projectType || "General"} - ${name}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailDetails);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
