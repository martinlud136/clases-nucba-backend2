/* Definición de una interfaz: */


interface Persona {
    nombre: string;
    edad: number;
}

let persona: Persona = {
    nombre: "Messi",
    edad: 35,
};

console.log(persona.nombre); // Salida: Messi
console.log(persona.edad); // Salida: 35
 

/* Uso de interfaces en funciones: */


interface Calculadora {
    sumar(a: number, b: number): number;
    restar(a: number, b: number): number;
}

let calculadora: Calculadora = {
    sumar(a, b) {
        return a + b;
    },
    restar(a, b) {
        return a - b;
    },
};

console.log(calculadora.sumar(5, 3)); // Salida: 8
console.log(calculadora.restar(5, 3)); // Salida: 2


/* Extensión de interfaces: */


interface Animal {
    nombre: string;
    sonido(): void;
}

interface Perro extends Animal {
    ladrar(): void;
}

class GoldenRetriever implements Perro {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    sonido() {
        console.log("Woof");
    }

    ladrar() {
        console.log("¡Guau! ¡Guau!");
    }
}

let perro: Perro = new GoldenRetriever("Max");
perro.sonido(); // Salida: Woof
perro.ladrar(); // Salida: ¡Guau! ¡Guau!


/* Uso de interfaces en arreglos: */


interface Punto {
    x: number;
    y: number;
}

let puntos: Punto[] = [
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: -1, y: 3 },
];

console.log(puntos); // Salida: [{x: 0, y: 0}, {x: 1, y: 2}, {x: -1, y: 3}]
