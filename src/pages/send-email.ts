import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const post: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const { name, email, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Eksik alanlar var.' }), {
        status: 400,
      });
    }

    // Nodemailer transporter ayarları
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com',    // SMTP sunucunuz
      port: 587,                   // SMTP port (genellikle 587 veya 465)
      secure: false,               // TLS için false (587), SSL için true (465)
      auth: {
        user: 'your-email@example.com',    // SMTP kullanıcı adı
        pass: 'your-email-password',       // SMTP şifresi
      },
    });

    // Mail içeriği
    const mailOptions = {
      from: `"${name}" <${email}>`,  // Gönderen
      to: 'support@yourdomain.com',  // Alıcı (destek ekibi maili)
      subject: 'Yeni İletişim Formu Mesajı',
      text: `
        İsim: ${name}
        E-posta: ${email}
        Mesaj: ${message}
      `,
    };

    // Mail gönderimi
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error('Email gönderim hatası:', error);
    return new Response(JSON.stringify({ error: 'Sunucu hatası.' }), {
      status: 500,
    });
  }
};
