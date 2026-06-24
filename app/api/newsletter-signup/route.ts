import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Good Company <hello@goodcompanyscs.com>',
      to: 'hello@goodcompanyscs.com',
      subject: 'New Newsletter Signup',
      html: `
        <h2>New Newsletter Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>This person signed up via the What's Happening page on goodcompanyscs.com.</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json({ error: 'Error processing request' }, { status: 500 });
  }
}
