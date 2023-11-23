import Usuario, {IUser} from "../models/usuario";
import { sendEmail } from "../mailer/mailer";

export const existeEmail =async (email:string): Promise<void> => {
    const existeEmail: IUser | null = await Usuario.findOne({email})

    if(existeEmail  && existeEmail.verified){
        throw new Error(`El correo ${email} ya está registrado`);
    }

    if(existeEmail && !existeEmail.verified){
        await sendEmail(email, existeEmail.code as string)
        throw new Error(`El usuario ya está registrado. Se envió el codigo de verificación a ${email}`)
    }
}