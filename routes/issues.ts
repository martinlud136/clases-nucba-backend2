import { Router } from "express";

import validarJWT from "../middlewares/validarJWT";
import { postNewIssue } from "../controllers/issues";
import { isAdmin } from "../middlewares/validarRol";
import { check } from "express-validator";
import { recolectarErrores } from "../middlewares/recolectarErrores";

const router = Router()

router.post("/",[
    validarJWT,
    isAdmin,
    check("title", "El título es obligatorio").not().isEmpty(),
    check("description", "La descripción es obligatoria").not().isEmpty(),
    check("priority", "La prioridad es obligatoria").not().isEmpty(),
    recolectarErrores
], postNewIssue)

export default router