/* Declaración de una letiable con una unión de tipos: */

let edad: number | string;

edad = 25; // válido
console.log(edad); // Salida: 25

edad = "treinta"; // válido
console.log(edad); // Salida: treinta


/* Parámetros de función con uniones: */

function imprimirId(id: number | string) {
    console.log(`ID: ${id}`);
}

imprimirId(100); // Salida: ID: 100
imprimirId("ABC"); // Salida: ID: ABC


/* Uso de uniones en tipos de retorno: */

function obtenerResultado(): number | string {
    // lógica para obtener el resultado
    return Math.random() < 0.5 ? 10 : "error";
}

let resultado: number | string = obtenerResultado();
console.log(resultado); // puede ser un número o una cadena de texto
