"use strict";
let calculadora = {
    sumar(a, b) {
        return a + b;
    },
    restar(a, b) {
        return a - b;
    },
};
console.log(calculadora.sumar(5, 3));
console.log(calculadora.restar(5, 3));
class GoldenRetriver {
    constructor(nombre) {
        this.nombre = nombre;
    }
    sonido() {
        console.log("Woof");
    }
    ladrar() {
        console.log("guau, guau");
    }
}
let perro = new GoldenRetriver("Max");
perro.sonido();
perro.ladrar();
console.log(perro.nombre);
//# sourceMappingURL=3interfaces.js.map