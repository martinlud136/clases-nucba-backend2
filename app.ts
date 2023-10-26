import express, { Express } from "express";
import { getPokemonById, getSimplePokemonById, getMultiplePokemon } from "./controllers/pokemon";

const app: Express = express();
const PORT: number = 8080;

//Middleware que va a leer y parsear el body
app.use(express.json())

app.get("/pokemon/full/:id", getPokemonById)

app.get("/pokemon/simple/:id", getSimplePokemonById)

app.get("/pokemon/multiple/", getMultiplePokemon)

app.listen(PORT,():void =>{
    console.log(`Servidor corriendo en puerto ${PORT}`)
})

