import { NextResponse } from 'next/server';

export async function POST(req) {

  try {
    const body = await req.json();
    const { first_name, last_name, email, company, message } = body;

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(atob(process.env.SENDGRID_API_KEY));

    await sgMail.send({
      to: email,
      from: 'no-reply@trawler.io',
      subject: `New contact from ${first_name} ${last_name}`,
      text: `
        Name: ${first_name} ${last_name}
        Email: ${email}
        Company: ${company}
        Message: ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${first_name} ${last_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Correo enviado correctamente',
    });
  }
  catch (error) {
    console.error('Error al enviar correo:', error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
