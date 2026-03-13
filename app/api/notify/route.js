import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USERN,
    pass: process.env.SMTP_PASSN,
  },
});

export async function POST(request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid request body" },
        { status: 400 }
      );
    }

    const email = body?.email?.trim();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    /* Send admin notification about new subscriber */

    await transporter.sendMail({
      from: `"X35 Projects" <${process.env.SMTP_FROMN}>`,
      to: process.env.CONTACT_EMAILN,
      replyTo: email,
      subject: "New Website Subscriber",
      html: `
        <h2>New Subscriber</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
      `,
      text: `New Subscriber - Email: ${email}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, message: "Email failed" },
      { status: 500 }
    );
  }
}
