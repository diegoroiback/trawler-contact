import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { first_name, last_name, email, company, message } = req.body;

  if (!first_name || !last_name || !email || !company || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const msg = {
    to: 'no-reply@trawler.io',
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
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error: any) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
    return res.status(500).json({ error: 'Failed to send email' });
  }
};

export default handler;
