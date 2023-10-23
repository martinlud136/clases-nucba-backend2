// import http from "http";

// const PORT: number = 8080;

// const server = http.createServer(async (req: any, res: any)=>{

//     console.log({url: req.url, method: req.method})

//     if(req.url === "/" && req.method === "GET"){
//         res.writeHead(200, {"Content-Type": "application/json" })
//         res.write(JSON.stringify({msj: "Hola! Soy el home!"}))
//         res.end()
//         return
//     }
//     if(req.url === "/anidado" && req.method === "GET"){
//         res.writeHead(200, {"Content-Type": "application/json" })
//         res.write(JSON.stringify({msj: "Hola! Soy una ruta anidada!"}))
//         res.end()
//         return
//     }
//     if(req.url === "/" && req.method === "POST"){
//         res.writeHead(200, {"Content-Type": "application/json" })
//         res.write(JSON.stringify({msj: "Hola! Soy un Post!"}))
//         res.end()
//         return
//     }

//     res.writeHead(404, {"Content-Type": "application/json" })
//     res.write(JSON.stringify({msj: "Che, acá no hay nada!"}))
//     res.end()
//     return
// });

// server.listen(PORT, ()=>{
//     console.log(`Servidor corriendo en puerto ${PORT}`)
// })

//---------------------------------------------------------//

import express, {Express, Request, Response} from "express";

const app: Express = express()
const PORT: number = 8080;

app.use(express.static("public"))

app.get("/", (req: Request, res: Response): void =>{
    console.log({method: req.method, url: req.url})
    res.send("Hola soy el home")
})

app.get("/paginaDePrueba", (req: Request, res: Response): void =>{
  console.log({dirname: __dirname})
  res.sendFile(__dirname + "/public/paginaDePrueba.html")
})

app.get("/", (req: Request, res: Response): void =>{
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/generic", (req: Request, res: Response): void =>{
    res.sendFile(__dirname + "/public/generic.html")
})

app.get("/elements", (req: Request, res: Response): void =>{
    res.sendFile(__dirname + "/public/elements.html")
})

app.get("*", (req: Request, res: Response): void =>{
    res.sendFile(__dirname + "/public/404.html")
})


app.listen(PORT, ():void =>{
    console.log(`Servidor corriendo en puerto ${PORT}`)
})