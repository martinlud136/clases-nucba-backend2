"use strict";
//anotacion para variables
let edad = 25;
let nombre = "juan";
let esMayorDeEdad = true;
console.log(edad);
console.log(nombre);
console.log(esMayorDeEdad);
//anotaciones de tipo para parametro de funcion
let saludar = (nombre) => {
    console.log(`Hola, ${nombre}`);
};
saludar("Nucba");
//para valor de retorno de una funcion
function sumar(a, b) {
    return a + b;
}
let resultado = sumar(5, 3);
console.log(resultado);
//anotacion para arreglos
let numeros = [1, 2, 3, 4, 5];
let nombres = ["Messi", "Scaloni", "Dibu"];
console.log(numeros);
console.log(nombres);
// let persona: Persona = {
//     edad: 33,
//     nombre: "Messi"
// }
// console.log(persona.edad)
// console.log(persona.nombre)
//# sourceMappingURL=2anotaciones.js.map