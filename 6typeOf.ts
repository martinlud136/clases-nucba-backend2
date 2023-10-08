function imprimirInformacion(valor: string | number){
    if(typeof valor === "string"){
        console.log("El valor es una cadena de texto: " + valor)
    }else if(typeof valor === "number"){
        console.log("El valor es un mumero: " + valor)
    }else{
        console.log("El valor es de un tipo desconocido")
    }
}

imprimirInformacion("Hola")
imprimirInformacion(10)
imprimirInformacion(true)