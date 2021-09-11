"use strict";
// Las variables estan tipadas
let myBoolean = true;
let myNumber = 1234;
let myStringArray = [`first`, `second`, `third`];
let flag = false;
let dato = "dato cadena";
console.log(dato);
dato = 1000;
console.log(dato);
dato = true;
console.log(dato);
const prueba = "Turtle";
var Brands;
(function (Brands) {
    Brands[Brands["chebrolet"] = 0] = "chebrolet";
    Brands[Brands["Cadillac"] = 1] = "Cadillac";
    Brands[Brands["Ford"] = 2] = "Ford";
    Brands[Brands["Buick"] = 3] = "Buick";
    Brands[Brands["chrysler"] = 4] = "chrysler";
    Brands[Brands["Dodge"] = 5] = "Dodge";
})(Brands || (Brands = {}));
let carro = Brands.Ford;
function SaludaAlUsuario() {
    console.log("Hola usuario");
}
let marca = "Bachoco";
function SumaDeNumeros(num1, num2) {
    let suma = 0;
    if (Array.isArray(num1)) {
    }
    return suma;
}
function hello(names, greeting) {
    let namesArray;
    if (Array.isArray(names)) {
        namesArray = names;
    }
    else {
        namesArray = [names];
    }
    if (!greeting) {
        greeting = "Hello";
    }
    return greeting + ", " + namesArray.join(" and ") + "!";
}
class Persona {
    constructor(n, ap, am, mayorDeEdad) {
        this.mayorDeEdad = mayorDeEdad;
        this.nombre = "";
        this.apellidoPaterno = "";
        this.apellidoMaterno = "";
        this.nombre = n;
        this.apellidoPaterno = ap;
        this.apellidoMaterno = am;
    }
    getINE() {
        return this.mayorDeEdad
            ? "Puede tramitar el INE"
            : "No puede asignarle INE";
    }
}
class Rectangulo {
    constructor() {
        this.base = 0;
        this.altura = 0;
        this.color = "Rojo";
    }
    calculaArea() {
        return this.base * this.altura;
    }
}
class Triangulo {
    constructor() {
        this.base = 0;
        this.altura = 0;
        this.color = "Verde";
    }
    calculaArea() {
        return ((this.base * this.altura) / 2);
    }
}
class TrianguloIsoceles extends Triangulo {
}
class TrianguloEscaleno extends Triangulo {
}
class Circulo {
    constructor() {
        this.color = "Azul";
        this.diametro = 10;
    }
    calculaArea() {
        return Math.PI * Math.pow(this.diametro / 2, 2);
    }
}
// mi triangulo es un tipo de triangulo escaleno podemos indicar el tipo de dato como FiguraGeometrica la definimos
let miTriangulo = new TrianguloEscaleno(); // aqui estoy instanciando el TrianguloEscaleno que a su vez
// puede tiparse ^
// tiene una herencia de la clase triangulo
miTriangulo.color = "verde";
miTriangulo.calculaArea();
// definir una interfaz llamada ICuenta que defina las operaciones deposito,retiro y consultarSaldo
// Crear las clases CuentaPersonal y CuentaEmpresarial relacionadas con ICuenta
