interface Calculadora {
    sumar(a: number, b: number): number;
    restar(a: number, b: number): number;
}

let calculadora: Calculadora = {
    sumar(a, b) {
        return a+b
    },
    restar(a, b) {
        return a - b
    },
}

console.log(calculadora.sumar(5,3))
console.log(calculadora.restar(5,3))

//extension de interfaces

interface Animal {
    nombre: string;
    sonido():void;
}

interface Perro extends Animal {
    ladrar(): void;
}

class GoldenRetriver implements Perro {
    nombre: string;
    constructor(nombre: string){
        this.nombre = nombre
    }

    sonido(): void {
        console.log("Woof")
    }

    ladrar(): void {
        console.log("guau, guau")
    }
}

let perro: Perro = new GoldenRetriver("Max")

perro.sonido()
perro.ladrar()
console.log(perro.nombre)
