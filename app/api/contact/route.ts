import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const { name, email, phone, subject, message } = await request.json();

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
            console.error('Missing email configuration');
            return NextResponse.json(
                { error: 'Email service not configured' },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        const mailOptionsToYou = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            subject: `Portfolio Contact: ${subject}`,
            html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); overflow: hidden; margin-top: 20px; margin-bottom: 20px;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #00e0ff 0%, #8b5cf6 100%); padding: 32px 40px; text-align: center;">
          <div style="background: white; width: 60px; height: 60px; border-radius: 12px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
            <span style="color: #00e0ff; font-size: 24px; font-weight: bold;">💼</span>
          </div>
          <h1 style="color: white; font-size: 24px; font-weight: 700; margin: 0; letter-spacing: -0.025em;">
            New Contact Request
          </h1>
          <p style="color: rgba(255, 255, 255, 0.9); font-size: 14px; margin: 8px 0 0 0; font-weight: 500;">
            Portfolio Website Notification
          </p>
        </div>

        <!-- Content -->
        <div style="padding: 40px;">
          <!-- Contact Details Card -->
          <div style="background: #f8fafc; border-radius: 8px; padding: 24px; margin-bottom: 24px; border: 1px solid #e2e8f0;">
            <h2 style="color: #1e293b; font-size: 18px; font-weight: 600; margin: 0 0 20px 0; display: flex; align-items: center;">
              <span style="background: linear-gradient(135deg, #00e0ff, #8b5cf6); width: 4px; height: 20px; display: inline-block; margin-right: 12px; border-radius: 2px;"></span>
              Contact Information
            </h2>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div>
                <p style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 6px 0;">Name</p>
                <p style="color: #1e293b; font-size: 16px; font-weight: 600; margin: 0; background: white; padding: 8px 12px; border-radius: 6px; border: 1px solid #e2e8f0;">${name}</p>
              </div>
              
              <div>
                <p style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 6px 0;">Email</p>
                <p style="color: #00e0ff; font-size: 16px; font-weight: 600; margin: 0; background: white; padding: 8px 12px; border-radius: 6px; border: 1px solid #e2e8f0;">${email}</p>
              </div>
              
              <div>
                <p style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 6px 0;">Phone</p>
                <p style="color: #1e293b; font-size: 16px; font-weight: 600; margin: 0; background: white; padding: 8px 12px; border-radius: 6px; border: 1px solid #e2e8f0;">${phone || 'Not provided'}</p>
              </div>
              
              <div>
                <p style="color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 6px 0;">Subject</p>
                <p style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0; background: white; padding: 8px 12px; border-radius: 6px; border: 1px solid #e2e8f0;">${subject}</p>
              </div>
            </div>
          </div>

          <!-- Message Card -->
          <div style="background: #f0f9ff; border-radius: 8px; padding: 24px; border: 1px solid #bae6fd;">
            <h2 style="color: #0c4a6e; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
              <span style="background: #00e0ff; width: 4px; height: 20px; display: inline-block; margin-right: 12px; border-radius: 2px;"></span>
              Message Content
            </h2>
            <div style="background: white; padding: 20px; border-radius: 6px; border: 1px solid #bae6fd;">
              <p style="color: #1e293b; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap; font-weight: 500;">${message}</p>
            </div>
          </div>

          <!-- Footer -->
          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e2e8f0; text-align: center;">
            <p style="color: #64748b; font-size: 12px; margin: 0;">
              This email was automatically generated from your portfolio contact form.
            </p>
            <p style="color: #94a3b8; font-size: 11px; margin: 8px 0 0 0;">
              Received at ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `,
        };

        await transporter.sendMail(mailOptionsToYou);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}