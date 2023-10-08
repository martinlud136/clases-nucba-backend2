let mensaje: any = "hola mundo"
let longitud: number = (mensaje as string).length

console.log(longitud)

let valor: any = "100"
let numero: number = <number>valor

console.log(numero)