const emailTemplate = (recipient_name) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Thank you for contacting</title>
<style>
body {
    font-family: "system-ui", -apple-system, "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
}
.container {
    max-width: 650px;
    margin: 50px auto;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    overflow: hidden;
}
.header {
    background-color: #FF6E58;
    color: white;
    text-align: center;
    padding: 20px 0;
}
.header h1 {
    margin: 0;
    font-size: 24px;
}
.content {
    padding: 30px;
    color: #333;
}
.content p {
    line-height: 1.6;
    margin: 10px 0;
}
.footer {
    background-color: #f1f1f1;
    text-align: center;
    padding: 20px 10px;
    font-size: 14px;
    color: #777;
}
.footer a {
    color: #FF6E58;
    text-decoration: none;
}
.footer a:hover {
    text-decoration: underline;
}
a {
    color: #FF6E58;
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
.profile-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid #FF6E58;
    object-fit: cover;
}
.icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    vertical-align: middle;
}

/* Responsive Styles */
@media only screen and (max-width: 600px) {
    .footer-table, .footer-table tr, .footer-table td {
        display: block;
        width: 100% !important;
        text-align: center !important; /* center horizontally */
        padding: 10px 0 !important;
        border-left: none !important;
    }
    .footer-table td p, .social-icons {
        display: inline-block; /* center the contents */
        margin: 5px auto;
    }
}
</style>
</head>
<body>
<div class="container">
    <div class="header">
        <h1>Thank You for Contacting!</h1>
    </div>
    <div class="content">
        <p>Dear ${recipient_name},</p>
        <p>
            Thank you for reaching out. I have received your message and
            will get back to you as soon as possible.
        </p>
        <p>
            I appreciate your interest and patience. If your inquiry is
            urgent, please use the contact details provided below
            for immediate assistance.
        </p>
        <p>Best regards,</p>
        <p>Shivam Bhandari </p>
    </div>
    <div class="footer">
        <table class="footer-table" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;margin:0 auto;">
            <tbody>
                <tr>
                    <td>
                        <img class="profile-img" src="https://media.licdn.com/dms/image/v2/D4D35AQE0N_B0n-zqMQ/profile-framedphoto-shrink_800_800/B4DZZalMcZHAAo-/0/1745276422264?e=1765738800&v=beta&t=aW8RIFDHMeKnN8LPQqhf9mP26v8KNMrUt0bWBmaFR-w" alt="Shivam B">
                    </td>
                    <td class="social-icons">
                        <a href="https://www.linkedin.com/in/shivambhandari-" target="_blank">
                            <img class="icon" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn">
                        </a>
                        <a href="https://github.com/" target="_blank">
                            <img class="icon" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub">
                        </a>
                        <a href="https://x.com/ShivamB10128702" target="_blank">
                            <img class="icon" src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter">
                        </a>
                    </td>
                    <td>
                        <p style="margin:4px 0"><a href="mailto:shivam.product.iitr@gmail.com">shivam.product.iitr@gmail.com</a></p>
                        <p style="margin:4px 0"><a href="tel:+918319198379">+91 8319198379</a></p>
                        <p style="margin:4px 0">Indore, Madhya Pradesh</p>
                    </td>
                </tr>
            </tbody>
        </table>
        <p>&copy; 2026 Shivam Bhandari. All rights reserved.</p>
    </div>
</div>
</body>
</html>
    `;
}

export default emailTemplate;
