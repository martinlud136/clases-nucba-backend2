import nodemailer from "nodemailer";

//Configuramos el transporte de nodemailer para utilizar Gmail
//no olvidarse de crear la cuenta con verificacion en dos pasos
//crear el pass para aplicaciones
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "nucbaapi@gmail.com",
        pass: "lwcinrqdryiidwhd"
    },
    from:  "nucbaapi@gmail.com"
})

export const sendEmail =async (to:string, code: string): Promise<void> => {
    try{
        //Configura los detalles del correo electronico
        const mailOptions = {
            form: '"NucbaZappi" nucbaapi@gmail.com"',
            to,
            subject: "Código de verificación para tu cuenta",
            text: `
            Llegó tu código para NucbaZappi.
            El código para verificarte es: ${code}
            `
        }

        //Envía el correo electrónico
        await transporter.sendMail(mailOptions);
        console.log('Correo electónico enviado')
    }catch(error){
        console.error('Error al enviar el correo electrónico')
    }
}

