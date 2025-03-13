const nodemailer = require("nodemailer")
const sendmail = (sendemail, otp) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL, // Your email
            pass: process.env.PASSWORD, // App password (not your real password)
        },


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
            <strong>[Your Company Name]</strong><br>
            [Your Support Email] | [Your Website URL]</p>
        </div>
    </div>
</body>
</html>
`;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: sendemail,
        subject: "OTP Verification Code",
        // text: `Let's connect with us 🔥. Your Verification Code: ${otp}`,
        html: otpEmailTemplateHTML(otp),
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error sending email:", error);
        } else {
            console.log("Email sent:", info.response);
        }
    });
}
module.exports = sendmail;
