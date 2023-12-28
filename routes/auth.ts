import { Router } from "express";
import { check } from "express-validator";
import { existeEmail } from "../helpers/validacionesDB";
import { recolectarErrores } from "../middlewares/recolectarErrores";
import { login, register, verifyUser } from "../controllers/auth";

const router = Router();

router.post(
    "/register",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("email", "El email es obligatorio").isEmail(),
		check("password", "El password debe ser de 6 caracteres").isLength({
			min: 6,
		}),
		//validacion custom
        check("email").custom(existeEmail),
		//middleware custom
        recolectarErrores,
    ],
    register
);

router.post(
	"/login",
	[
		check("email", "El email es obligatorio").isEmail(),
		check("password", "El password debe ser de 6 caracteres").isLength({
			min: 6,
		}),
		recolectarErrores,
	],
	login
);

router.patch(
	"/verify",
	[
		check("email", "El email es requerido").not().isEmpty(),
		check("code", "El código de verificación es requerido").not().isEmpty()
	],
	verifyUser
)

export default router;