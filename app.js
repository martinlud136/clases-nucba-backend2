"use strict";
// import http from "http";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 8080;
app.use(express_1.default.static("public"));
app.get("/", (req, res) => {
    console.log({ method: req.method, url: req.url });
    res.send("Hola soy el home");
});
app.get("/paginaDePrueba", (req, res) => {
    console.log({ dirname: __dirname });
    res.sendFile(__dirname + "/public/paginaDePrueba.html");
});
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
app.get("/generic", (req, res) => {
    res.sendFile(__dirname + "/public/generic.html");
});
app.get("/elements", (req, res) => {
    res.sendFile(__dirname + "/public/elements.html");
});
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/404.html");
});
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
