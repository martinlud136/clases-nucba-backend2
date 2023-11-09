import jwt from "jsonwebtoken";

interface IOBjetoAGuardar {
    id: number,
    username: string,
    isAdmin: boolean
}

const objetoAGuardar: IOBjetoAGuardar ={
    id: 1234,
    isAdmin: false,
    username: "LioMessi"
}

const miClaveSecreta = "claveSecreta483293"

const tokenFirmado = jwt.sign(objetoAGuardar, miClaveSecreta)

// console.log({tokenFirmado})

const tokenFirmadoConExpiracion = jwt.sign(objetoAGuardar, miClaveSecreta, {
    expiresIn: "30m"
})

// console.log({tokenFirmadoConExpiracion})

const tokenConCasoDeError = jwt.sign(objetoAGuardar, miClaveSecreta, {
    expiresIn: "30"
},(err, token)=>{
    if(err){
        console.log("Se rompió todo")
        console.log(err)
    } else {
        console.log("Token generado correctamente")
        console.log(token)
    }
}
)

const generarJWT = (dataAGuardar: IOBjetoAGuardar)=>{
    return new Promise((res, rej)=>{
        jwt.sign(objetoAGuardar, miClaveSecreta, {
            expiresIn: "30"
        },(err, token)=>{
            if(err){
                console.log("Se rompióo todo")
                rej("Se rompió todo")
            } else {
                console.log("Token generado correctamente")
                res(token)
            }
        }
        )
    })
}

(async ()=>{
    const respuesta = await generarJWT(objetoAGuardar)
    // console.log({respuesta})
}
)()
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNCwiaXNBZG1pbiI6ZmFsc2UsInVzZXJuYW1lIjoiTGlvTWVzc2kiLCJpYXQiOjE2OTk0ODc4MDUsImV4cCI6MTY5OTQ4OTYwNX0.zlEcsW7FTykY8Y2ppEvKXysaMQz_hl74ebhBh32YM9s"
// const dataVerificada = jwt.verify(token, miClaveSecreta)
// console.log({dataVerificada})

import bcryptjs from "bcryptjs";

const contraseñaAEncriptar = "MiContraseñaSuperSegura";

const salt = bcryptjs.genSaltSync(15);

console.log({salt})

const contraseñaEncriptada = bcryptjs.hashSync(contraseñaAEncriptar, salt)

console.log("contraseña encriptada")
console.log(contraseñaEncriptada)

const contraseñaValida = bcryptjs.compareSync(contraseñaAEncriptar, contraseñaEncriptada)

console.log("Mi contraseña es valida?")
console.log(contraseñaValida);

(async ()=>{
    const asyncSalt = await bcryptjs.genSalt(15)
    console.log({asyncSalt})

    const asyncContraseñaEncriptada = await bcryptjs.hash(contraseñaAEncriptar, asyncSalt)

    console.log("async Contraseña encriptada")
    console.log(asyncContraseñaEncriptada)

    const asyncContraseñaValida = await bcryptjs.compare(contraseñaAEncriptar, asyncContraseñaEncriptada)

    console.log("Async mi contraseña es valida")
    console.log(asyncContraseñaValida)
}
)()
console.log("luego del async")