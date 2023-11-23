import { Router } from 'express';
import { login, register, verifyUser } from '../controllers/auth';
import { check } from "express-validator";
import { existeEmail } from '../helpers/validacionesDB';

import { recolectarErrores } from '../middlewares/recolectarErrores';

const router = Router();

router.post('/register',[
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe ser de 6 caracteres").isLength({min: 6}),
    //validacion custom
    check("email").custom(existeEmail),
    //middleware custom
    recolectarErrores,
] ,register)

router.post("/login",[
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe ser de 6 caracteres").isLength({
        min: 6
    }),
    recolectarErrores
],
login
)

router.patch(
    "/verify",
    [
        check("email", "El email es requerido").not().isEmpty(),
        check("code", "El codigo de verificacion es requerido").not().isEmpty(),
        recolectarErrores
    ], 
    verifyUser
)

export default router