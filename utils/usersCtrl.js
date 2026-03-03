const emailToSend = require("./emailToSend");

const sendAcctVerificationEmailCtrl = expressAsyncHandler(
	async (req, res) => {
		let mailDetails = {
			from: "pascalazubike003@gmail.com",
			to: `companyEmail`,
			subject: "subject of the mail",
			html: emailToSend,
			attachments: [
				{
					filename: "pascal-resumeP.pdf",
					path: ".",
					contentType: "application/pdf",
				},
			],
		};

		mailTransporter.sendMail(mailDetails, function (err, data) {
			if (err) {
				console.log("sending email failed try again", mailDetails);
				return;
			} else {
				console.log("email sent successfully", mailDetails);
				return;
			}
		});
	}
);

module.exports = sendAcctVerificationEmailCtrl;
