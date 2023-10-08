//anotacion para variables

let edad: number = 25;
let nombre: string = "juan";
let esMayorDeEdad: boolean = true;

console.log(edad)
console.log(nombre)
console.log(esMayorDeEdad)

//anotaciones de tipo para parametro de funcion

let saludar = (nombre: string):void =>{
    console.log(`Hola, ${nombre}`)
}

saludar("Nucba")

//para valor de retorno de una funcion

function sumar(a: number, b: number): number{
    return a + b
}

let resultado: number = sumar(5,3)
console.log(resultado)

//anotacion para arreglos

let numeros: number[] = [1,2,3,4,5];
let nombres: string[] = ["Messi", "Scaloni", "Dibu"]

console.log(numeros)
console.log(nombres)

//anotacion de tipo para una propiedad de objeto

interface Persona {
    nombre: string;
    edad: number;
}

// let persona: Persona = {
//     edad: 33,
//     nombre: "Messi"
// }

// console.log(persona.edad)
// console.log(persona.nombre)
