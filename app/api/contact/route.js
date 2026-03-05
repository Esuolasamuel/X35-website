import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  adminNotificationEmail,
  clientConfirmationEmail,
} from "@/lib/emailTemplates";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_FROM,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request) {
  try {
    const body = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const projectType = body.projectType;
    const budget = body.budget;
    const timeline = body.timeline;
    const description = body.description?.trim();

    if (!name || !email || !description) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = {
      name,
      email,
      projectType,
      budget,
      timeline,
      description,
    };

    const adminEmail = adminNotificationEmail(data);
    const clientEmail = clientConfirmationEmail(name);

    /* Send admin notification */

    await transporter.sendMail({
      from: `"X35 Projects" <${process.env.SMTP_FROM}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: adminEmail.subject,
      html: adminEmail.html,
      text: adminEmail.text,
    });

    /* Send client confirmation */

    await transporter.sendMail({
      from: `"X35 Projects" <${process.env.SMTP_FROM}>`,
      to: email,
      subject: clientEmail.subject,
      html: clientEmail.html,
      text: clientEmail.text,
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