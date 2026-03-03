const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Send contact form email
 * @param {Object} formData - Form data object
 * @param {string} formData.name - Sender's full name
 * @param {string} formData.email - Sender's email address
 * @param {string} formData.projectType - Type of project
 * @param {string} formData.budget - Budget range
 * @param {string} formData.timeline - Project timeline
 * @param {string} formData.description - Project description
 * @returns {Promise<{success: boolean, message: string}>}
 */
async function sendContactEmail(formData) {
  const { name, email, projectType, budget, timeline, description } = formData;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0C0C1C;">New Project Inquiry</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Project Type:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${projectType}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Budget:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${budget}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Timeline:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${timeline}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Description:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${description}</td>
        </tr>
      </table>
    </div>
  `;

  const mailDetails = {
    from: process.env.SMTP_FROM || "hello@pascal-azubike.dev",
    to: process.env.CONTACT_EMAIL || "odixcityconsulting@gmail.com",
    subject: `New Project Inquiry - ${projectType} - ${name}`,
    html: htmlContent,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailDetails, (err, data) => {
      if (err) {
        console.error("Error sending email:", err);
        resolve({ success: false, message: "Failed to send email. Please try again." });
      } else {
        console.log("Email sent successfully");
        resolve({ success: true, message: "Email sent successfully!" });
      }
    });
  });
}

module.exports = { sendContactEmail };
