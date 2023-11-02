import mongoose from "mongoose";

export const conectarDB = async ():Promise<void> => {
    try{
        await mongoose.connect('mongodb+srv://nucba:gfggG72WYn2zukrs@nombrecluster.pkh3vj6.mongodb.net/')
        console.log('Base de datos online')
    }catch(error){
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos')
    }
}