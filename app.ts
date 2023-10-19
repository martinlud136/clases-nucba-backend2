import express, { Application } from "express";
import { logController, postController, newRouteController } from './controllers/controller';

const app: Application = express();

app.use(express.json())

app.get('/log',logController)
app.delete('/log',logController)
app.patch('/log',logController)
app.post('/log', postController)
app.post('/new-route', newRouteController)


app.listen(3000, ()=>{
    console.log('El servidor está escuchando en el puerto 3000')
})