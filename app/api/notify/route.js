import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USERN,
        pass: process.env.SMTP_PASSN,
      },
    });

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

    const logo = `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`;

    /* -------------------------
       EMAIL TO OWNER
    -------------------------- */

    await transporter.sendMail({
      from: `"X35 Projects" <${process.env.SMTP_FROMN}>`,
      to: process.env.CONTACT_EMAILN,
      replyTo: email,
      subject: "New Website Subscriber",
      html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto">

        <div style="text-align:center;padding:20px">
          <img src="${logo}" width="120"/>
        </div>

        <h2 style="color:#111">New Subscriber Notification</h2>

        <p>A new user has subscribed to the website newsletter.</p>

        <table style="width:100%;border-collapse:collapse;margin-top:20px">
          <tr>
            <td style="padding:10px;border:1px solid #ddd"><strong>Email</strong></td>
            <td style="padding:10px;border:1px solid #ddd">${email}</td>
          </tr>

          <tr>
            <td style="padding:10px;border:1px solid #ddd"><strong>Date</strong></td>
            <td style="padding:10px;border:1px solid #ddd">${new Date().toLocaleString()}</td>
          </tr>

          <tr>
            <td style="padding:10px;border:1px solid #ddd"><strong>Source</strong></td>
            <td style="padding:10px;border:1px solid #ddd">Website Newsletter Form</td>
          </tr>
        </table>

        <p style="margin-top:30px">
          This notification was generated automatically from the website subscription system.
        </p>

      </div>
      `,
    });

    /* -------------------------
       EMAIL TO SUBSCRIBER
    -------------------------- */

    await transporter.sendMail({
      from: `"X35 Projects" <${process.env.SMTP_FROMN}>`,
      to: email,
      subject: "Subscription Confirmation – X35 Projects",
      html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto">

        <div style="text-align:center;padding:30px">
          <img src="${logo}" width="140"/>
        </div>

        <h2 style="text-align:center">Thank You For Subscribing</h2>

        <p>Hello,</p>

        <p>
        Thank you for subscribing to updates from <strong>X35 Projects</strong>.
        You will now receive notifications about our latest projects,
        insights, and announcements.
        </p>

        <p>
        Our goal is to share valuable updates that help you stay informed
        about new developments, innovations, and opportunities within our ecosystem.
        </p>

        <p>
        If you did not subscribe to this newsletter, you can safely ignore this email.
        </p>

        <hr style="margin:40px 0"/>

        <p style="font-size:14px;color:#666">
        X35 Projects <br/>
        Official Communications Team
        </p>

      </div>
      `,
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