/**
 * Serverless Contact Handler for Vercel / Netlify:
 * Dispatches contact inquiries directly to Jison's verified inbox using Resend API.
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide your name, email, and message.' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Mail dispatch service not configured on server.' });
    }
    const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';
    const receiverEmail = process.env.RECEIVER_EMAIL || 'jisonjosephsebastian7007@gmail.com';

    const payload = {
      from: `Portfolio Contact <${senderEmail}>`,
      to: [receiverEmail],
      reply_to: email,
      subject: subject 
        ? `📧 [Portfolio] ${subject} - from ${name}` 
        : `📧 New Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: auto; padding: 28px; border: 1px solid #D4AF37; border-radius: 12px; background: #050507; color: #F5F0EB;">
          <div style="border-bottom: 2px solid #D4AF37; padding-bottom: 14px; margin-bottom: 22px;">
            <h2 style="color: #D4AF37; margin: 0; font-size: 24px; font-weight: 700;">New Portfolio Contact</h2>
            <p style="color: #888888; font-size: 13px; margin: 5px 0 0 0;">Received from Jison Joseph Sebastian's Dynamic Portfolio</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 9px 0; color: #888888; width: 130px; font-size: 14px;"><strong>Sender Name:</strong></td>
              <td style="padding: 9px 0; color: #FFFFFF; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 9px 0; color: #888888; font-size: 14px;"><strong>Sender Email:</strong></td>
              <td style="padding: 9px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #D4AF37; text-decoration: none; font-weight: 600;">${email}</a></td>
            </tr>
            ${subject ? `
            <tr>
              <td style="padding: 9px 0; color: #888888; font-size: 14px;"><strong>Subject:</strong></td>
              <td style="padding: 9px 0; color: #FFFFFF; font-size: 14px;">${subject}</td>
            </tr>
            ` : ''}
          </table>

          <div style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-left: 4px solid #D4AF37; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #E5E7EB; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 16px; margin-top: 26px; font-size: 12px; color: #666666; text-align: center;">
            Direct transmission from Portfolio Website · Reply directly to this email to respond to ${name}.
          </div>
        </div>
      `
    };

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true, id: data.id });
    } else {
      return res.status(response.status || 500).json({ error: data.message || 'Dispatch service rejected transmission.' });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Server error while dispatching email.' });
  }
}
