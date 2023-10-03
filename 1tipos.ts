/* Números (number) */


let edad: number = 25;
let precio: number = 10.99;
let cantidad: number = 3;

let resultado: number = precio * cantidad;
console.log(resultado); // Salida: 32.97


/* Cadenas de texto (string) */


let nombre: string = "Nucba";
let mensaje: string = `Hola, mi nombre es ${nombre}.`;

console.log(mensaje); // Salida: Hola, mi nombre es Nucba.


/* Valores booleanos (boolean) */


let esMayorDeEdad: boolean = true;
let tienePermiso: boolean = false;

if (esMayorDeEdad) {
    console.log("Puede ingresar al sitio.");
} else {
    console.log("Debe ser mayor de edad para ingresar.");
}


/* Any = cualquier tipo de dato */


let dato: any = "Hola";

console.log(dato); // Salida: Hola

dato = 10;
console.log(dato); // Salida: 10

dato = true;
console.log(dato); // Salida: true
