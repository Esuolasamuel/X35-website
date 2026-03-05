export function adminNotificationEmail(data) {
  const { name, email, projectType, budget, timeline, description } = data;

  return {
    subject: `New Project Inquiry — ${name}`,

    html: `
<!DOCTYPE html>
<html>
<body style="margin:0;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;">

<!-- Preview text -->
<div style="display:none;max-height:0;overflow:hidden;">
New project inquiry from ${name}
</div>

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
<tr>
<td align="center">

<table width="600" style="background:#ffffff;border-radius:8px;overflow:hidden">

<tr>
<td style="background:#0a0e1c;padding:30px;text-align:center">
<h1 style="color:rgb(255,215,0);margin:0">
X35 PROJECTS
</h1>
<p style="color:#ffffff;margin-top:8px">
New Client Inquiry
</p>
</td>
</tr>

<tr>
<td style="padding:30px">

<table width="100%" style="border-collapse:collapse">

<tr>
<td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold">Name</td>
<td style="padding:10px;border-bottom:1px solid #eee">${name}</td>
</tr>

<tr>
<td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold">Email</td>
<td style="padding:10px;border-bottom:1px solid #eee">${email}</td>
</tr>

<tr>
<td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold">Project Type</td>
<td style="padding:10px;border-bottom:1px solid #eee">${projectType || "N/A"}</td>
</tr>

<tr>
<td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold">Budget</td>
<td style="padding:10px;border-bottom:1px solid #eee">${budget || "N/A"}</td>
</tr>

<tr>
<td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold">Timeline</td>
<td style="padding:10px;border-bottom:1px solid #eee">${timeline || "N/A"}</td>
</tr>

</table>

<h3 style="margin-top:25px;color:#0a0e1c">Project Description</h3>

<div style="background:#f8f9fb;padding:16px;border-radius:6px">
${description}
</div>

</td>
</tr>

<tr>
<td style="padding:20px;text-align:center;font-size:12px;color:#777">
© ${new Date().getFullYear()} X35 Projects
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`,

    text: `
New Project Inquiry

Name: ${name}
Email: ${email}
Project Type: ${projectType}
Budget: ${budget}
Timeline: ${timeline}

Description:
${description}
`,
  };
}

export function clientConfirmationEmail(name) {
  return {
    subject: "We received your project inquiry — X35 Projects",

    html: `
<!DOCTYPE html>
<html>
<body style="font-family:Arial;background:#f4f6f9;padding:40px">

<table width="600" align="center" style="background:white;border-radius:8px">

<tr>
<td style="background:#0a0e1c;padding:30px;text-align:center">

<h1 style="color:rgb(255,215,0);margin:0">
X35 PROJECTS
</h1>

</td>
</tr>

<tr>
<td style="padding:30px">

<h2>Hello ${name},</h2>

<p>
Thank you for reaching out to <strong>X35 Projects</strong>.
</p>

<p>
We have received your project inquiry and our team will review the details shortly.
</p>

<p>
You can expect a response within <strong>24–48 hours</strong>.
</p>

<p>
Best regards,<br/>
X35 Projects Team
</p>

</td>
</tr>

</table>

</body>
</html>
`,

    text: `
Hello ${name},

Thank you for contacting X35 Projects.

We received your project inquiry and will respond within 24–48 hours.

Best regards,
X35 Projects
`,
  };
}
