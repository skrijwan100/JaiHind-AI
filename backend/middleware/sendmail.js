const nodemailer = require("nodemailer");
const util = require("util");  // Import util for promisify

const sendemail = async (sendemail, otp) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,      // Your email
            pass: process.env.PASSWORD    // App password (not your real password)
        }
    });

    const otpEmailTemplateHTML = (otp) => `
        <!DOCTYPE html>
        <html>
        <head>
        <style>
        .container {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            background-color: #f9f9f9;
        }
        .otp-code {
            font-size: 22px;
            font-weight: bold;
            color: #ff5733;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #555;
        }
        </style>
        </head>
        <body>
        <div class="container">
        <h2>Hello,</h2>
        <p>Your One-Time Password (OTP) for verification is:</p>
        <p class="otp-code">${otp}</p>
        <p>This OTP is valid for only 10 minutes. Do not share this code with anyone.</p>
        <p>If you did not request this, please ignore this email.</p>
        <div class="footer">
            <p>Best regards,<br>
            <strong>Undefine</strong><br>
            rijwansk329@gmail.com | https://skrijwan.vercel.app</p>
        </div>
        </div>
        </body>
        </html>
    `;

    const mailOptions = {
        from: process.env.EMAIL,    // Fixed the `from` field
        to: sendemail,
        subject: "OTP Verification Code",
        html: otpEmailTemplateHTML(otp),
    };

    // Convert sendMail to return a promise
    const sendMailAsync = util.promisify(transporter.sendMail.bind(transporter));

    try {
        const info = await sendMailAsync(mailOptions);
        console.log("✅ Email sent:", info.response);
        return info.response;  // Return the response
    } catch (error) {
        console.error("❌ Error sending email:", error);
        throw error;   // Throw error for proper handling
    }
};

module.exports = sendemail;
