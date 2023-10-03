/* Casteo mediante el operador as: */


let mensaje: any = "Hola, mundo!";
let longitud: number = (mensaje as string).length;

console.log(longitud); // Salida: 13


/* Casteo mediante el operador <tipo>:*/


let valor: any = "100";
let numero: number = <number>valor;

console.log(numero); // Salida: 100
