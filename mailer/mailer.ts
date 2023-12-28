import nodemailer from 'nodemailer';

// Configura el transporte de Nodemailer para utilizar Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nucbazappiback@gmail.com',
    pass: 'jatqigxbakftgqxb',
  },
  from: 'nucbazappiback@gmail.com'

});

// Función para enviar un correo electrónico
export const sendEmail = async (to: string, code: string): Promise<void> => {
  try {
    // Configura los detalles del correo electrónico
    const mailOptions = {
      from: '"NucbaZappi" nucbazappiback@gmail.com',
      to,
      subject: "Código de verificación para tu cuenta",
      text:`
        Llegó tu código para Nucbazappi.
        El código para verificarte es: ${code}.
      `
    };

    // Envía el correo electrónico
    await transporter.sendMail(mailOptions);
    console.log('Correo electrónico enviado');
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
  }
};
