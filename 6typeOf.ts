/* Comprobaciones de tipo basadas en el tipo de una variable */


function imprimirInformacion(valor: string | number) {
    if (typeof valor === "string") {
        console.log("El valor es una cadena de texto: " + valor);
    } else if (typeof valor === "number") {
        console.log("El valor es un número: " + valor);
    } else {
        console.log("El valor es de un tipo desconocido.");
    }
}

imprimirInformacion("Hola"); // Salida: El valor es una cadena de texto: Hola
imprimirInformacion(10); // Salida: El valor es un número: 10
imprimirInformacion(true); // Salida: El valor es de un tipo desconocido.
 