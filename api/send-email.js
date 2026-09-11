const nodemailer = require('nodemailer');

// Credentials come from the deployment environment only. They are deliberately
// not defaulted in source: a committed password protects nothing and ends up in
// version control forever. If this throws, set the variables documented in
// SMTP_SETUP.md in the Vercel project settings and redeploy.
function smtpCredentials() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  if (!user || !pass) {
    throw new Error(
      'Email is not configured: SMTP_USER and SMTP_PASSWORD must be set as environment variables.',
    );
  }
  return { user, pass };
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, number, message } = req.body;

    if (!name || !email || !number || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const smtpConfig = {
      host: process.env.SMTP_HOST || 'smtp.zoho.in',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      requireTLS: true,
      auth: smtpCredentials(),
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
      }
    };

    const transporter = nodemailer.createTransport(smtpConfig);

    const mailOptions = {
      from: `"${name}" <${smtpCredentials().user}>`,
      to: 'info@talavishiraajgroups.com',
      replyTo: email,
      subject: `New Community Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            New Community Form Submission
          </h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Phone Number:</strong> ${number}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message/Interests:</h3>
            <p style="background-color: #ffffff; padding: 15px; border-left: 4px solid #4F46E5; border-radius: 4px; white-space: pre-wrap;">
              ${message}
            </p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            <p>You can reply directly to this email to contact ${name} at ${email}</p>
          </div>
        </div>
      `,
      text: `
New Community Form Submission

Name: ${name}
Email: ${email}
Phone Number: ${number}

Message/Interests:
${message}

Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email sent successfully', success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
};
