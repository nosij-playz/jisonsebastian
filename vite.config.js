import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Resend Contact API Middleware for Vite dev server:
 * Intercepts POST /api/contact, dispatches email via Resend API to jisonjosephsebastian7007@gmail.com,
 * and responds with JSON status.
 */
function resendContactPlugin(env) {
  return {
    name: 'resend-contact-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Method Not Allowed' }));
          return;
        }

        let body = '';
        req.on('data', chunk => {
          body += chunk;
        });

        req.on('end', async () => {
          try {
            const { name, email, subject, message } = JSON.parse(body || '{}');

            if (!name || !email || !message) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Please provide your name, email, and message.' }));
              return;
            }

            const apiKey = env.RESEND_API_KEY;
            if (!apiKey) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Mail dispatch service not configured in .env file.' }));
              return;
            }
            const senderEmail = env.SENDER_EMAIL || 'onboarding@resend.dev';
            const receiverEmail = env.RECEIVER_EMAIL || 'jisonjosephsebastian7007@gmail.com';

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
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, id: data.id }));
            } else {
              res.statusCode = response.status || 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: data.message || 'Dispatch service rejected transmission.' }));
            }
          } catch (err) {
            console.error('Contact API Error:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: err.message || 'Server error while dispatching email.' }));
          }
        });
      });
    }
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), resendContactPlugin(env)],
  };
});
