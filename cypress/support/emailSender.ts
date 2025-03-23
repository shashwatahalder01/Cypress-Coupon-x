import 'dotenv/config';
const fs = require('fs');
const path = require('path');
const nodemailer = require("nodemailer");
const statusData = require('../../test-Status.json');
const reportPath = path.join(__dirname, '..', '..', 'cypress', 'reports', 'mochawesome.html');



export async function sendEmail(status: string = 'pass'): Promise<void> {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  if (!fs.existsSync(reportPath)) {
    console.error('Report file not found:', reportPath);
    return;
  }

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: "contact+testqa5@premio.io",
    subject: `Cypress Test Execution - ${status}`,
    text: `The Cypress test run has ${status}. Check the report for details.`,
    attachments: [
      {
        filename: 'mochawesome.html', // Name of the attachment
        path: reportPath, // Path to the file
      },
    ],
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}

sendEmail(statusData.status)