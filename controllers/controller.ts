import { Request, Response } from "express";


const logController = (req: Request, res: Response): void =>{
    const method = req.method;
    const timestamp = new Date().toLocaleString()

    console.log(`[${timestamp}] Método ${method} ejecutado en el controlador LOG`)
    res.json({
        message: '!Hola, este es un mensaje desde el controlador LOG!',
        method,
        timestamp
    })

}

const postController = (req: Request, res: Response): void =>{
    const method = req.method;
    const timestamp = new Date().toLocaleString()

    console.log(`[${timestamp}] Método ${method} ejecutado en el controlador postController`);

    const saludo = req.body.saludo;

    console.log({saludo})
    if(!saludo) {
        console.error(`[${timestamp}] !Falta el campo saludo en la solicitud`);
        res.status(400).json({
            error: "Campo faltante",
            message: "Falta el campo saludo en la solicitud"
        })
        return;
    }
    res.json({
        message: '!Hola, este es un mensaje desde el controlador postController!',
        method,
        timestamp
    })
}

const newRouteController = (req: Request, res: Response): void=>{
    const method = req.method;
    const timestamp = new Date().toLocaleString()

    console.log(`[${timestamp}] Método ${method} ejecutado en una nueva ruta`)

    const saludo= req.body.saludo;

    res.json({
        message: '!Hola, esta es una nueva ruta!!!',
        recivedSaludo: saludo,
        method,
        timestamp
    })
}


export { logController, postController, newRouteController };