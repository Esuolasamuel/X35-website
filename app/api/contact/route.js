import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  adminNotificationEmail,
  clientConfirmationEmail,
} from "@/lib/emailTemplates";

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
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

    const data = { name, email, projectType, budget, timeline, description };

    const adminEmail = adminNotificationEmail(data);
    const clientEmail = clientConfirmationEmail(name);

    await Promise.all([
      /* Admin notification */
      resend.emails.send({
        from: "X35 Projects <hello@x35projects.com>",
        to: process.env.CONTACT_EMAIL,
        reply_to: email,
        subject: adminEmail.subject,
        html: adminEmail.html,
        text: adminEmail.text,
      }),
      /* Client confirmation */
      resend.emails.send({
        from: "X35 Projects <hello@x35projects.com>",
        to: email,
        subject: clientEmail.subject,
        html: clientEmail.html,
        text: clientEmail.text,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Email failed" },
      { status: 500 }
    );
  }
}