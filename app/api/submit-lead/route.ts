/*import { NextRequest, NextResponse } from 'next/server';
//import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json(
      { error: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
    const body = await req.json();
    const { name, phone, email, zipCode, message, preferredContact } = body;

    // Validate required fields
    if (!name || !phone || !email || !zipCode) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Service area validation
    const serviceZips = ['48316', '48371', '48309']; // Shelby, Washington, Rochester Hills
    if (!serviceZips.includes(zipCode)) {
      // Check if it's a nearby area (just a loose check)
      if (!zipCode.match(/^48\d{3}$/)) {
        return NextResponse.json(
          { error: 'We currently serve Shelby Township, Washington Township, and Rochester Hills. Please contact us to discuss your area.' },
          { status: 400 }
        );
      }
    }

    /*
    // Setup email transporter
    // Using Gmail SMTP - Natalie will need to use an app password if 2FA is enabled
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    

    // Email to Natalie
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'harleywal1980@gmail.com',
      subject: `New Lead: ${name}`,
      html: `
        <h2>New Schedule Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>ZIP Code:</strong> ${zipCode}</p>
        <p><strong>Preferred Contact:</strong> ${preferredContact}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
      `,
    });
    

    // Confirmation email to lead
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We\'ll be in touch soon',
      html: `
        <h2>Thank you for reaching out to Good Company!</h2>
        <p>Hi ${name},</p>
        <p>We received your request to schedule a free visit. We'll be in touch shortly to confirm a time that works for you.</p>
        <p>If you have any questions in the meantime, feel free to reach out.</p>
        <p>You're in good company,<br />Natalie & Team</p>
      `,
    });
    */
    

   import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json(
      { error: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
    const body = await req.json();
    const { name, phone, email, zipCode, message, preferredContact } = body;

    // Validate required fields
    if (!name || !phone || !email || !zipCode) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Service area validation
    const serviceZips = ['48316', '48371', '48309'];
    if (!serviceZips.includes(zipCode)) {
      if (!zipCode.match(/^48\d{3}$/)) {
        return NextResponse.json(
          { error: 'We currently serve Shelby Township, Washington Township, and Rochester Hills. Please contact us to discuss your area.' },
          { status: 400 }
        );
      }
    }

    // Send email to Natalie using Resend
    await resend.emails.send({
      from: 'Good Company <hello@goodcompanyscs.com>',
      to: 'hello@goodcompanyscs.com',
      subject: `New Lead: ${name}`,
      html: `<h2>New Schedule Request</h2><p><strong>Name:</strong> ${name}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Email:</strong> ${email}</p><p><strong>ZIP Code:</strong> ${zipCode}</p><p><strong>Preferred Contact:</strong> ${preferredContact}</p><p><strong>Message:</strong></p><p>${message || 'No message provided'}</p>`,
    });

    // Send confirmation email to lead
    await resend.emails.send({
      from: 'Good Company <hello@goodcompanyscs.com>',
      to: email,
      subject: 'We\'ll be in touch soon',
      html: `<h2>Thank you for reaching out to Good Company!</h2><p>Hi ${name},</p><p>We received your request to schedule a free visit. We'll be in touch shortly to confirm a time that works for you.</p><p>If you have any questions in the meantime, feel free to reach out.</p><p>You're in good company,<br />Natalie & Team</p>`,
    });

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Error processing request' },
      { status: 500 }
    );
  }
}
