// Las variables estan tipadas
let myBoolean: boolean = true;
let myNumber: number = 1234;
let myStringArray: string[] = [`first`, `second`, `third`];
let flag: boolean = false;
let dato: any = "dato cadena";
console.log(dato);
dato = 1000;
console.log(dato);
dato = true;
console.log(dato);
type Animal = "cheetah" | "Lion" | "Turtle"; // se pasan los comentario?
const prueba: Animal = "Turtle";
enum Brands {
  chebrolet,
  Cadillac,
  Ford,
  Buick,
  chrysler,
  Dodge,
}
let carro: Brands = Brands.Ford;

function SaludaAlUsuario(): void {
  console.log("Hola usuario");
}

let marca = "Bachoco";
//marca = 5000; // una vez que ve que se esta metiendo un number a una cadena marca el error
//function SumaDeNumeros(num1: number, num2?: number): number {
// cuando se especiica el tipo de dato que regresa
//return num1 + num2; // necesita afuerzas el return
//}

// sobre carga de funciones

function SumaDeNumeros(num1: number, num2?: number): number;
function SumaDeNumeros(num1: number[]): number;
function SumaDeNumeros(num1: any, num2?: number): number {
  let suma = 0;
  if (Array.isArray(num1)) {
  }
  return suma;
}

// ejemplo del libro

function hello(names: string): string;
function hello(names: string[]): string;

function hello(names: any, greeting?: string): string {
  let namesArray: string[];
  if (Array.isArray(names)) {
    namesArray = names;
  } else {
    namesArray = [names];
  }
  if (!greeting) {
    greeting = "Hello";
  }
  return greeting + ", " + namesArray.join(" and ") + "!";
}

class Persona {
  private nombre: string = "";
  private apellidoPaterno: string = "";
  private apellidoMaterno: string = "";

  constructor(n: string, ap: string, am: string, private mayorDeEdad: boolean) {
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

interface IFiguraGeometrica {
  color: string;
  diametro?:number; // el signo ? quiere decir que es opcional
  calculaArea():number; // obligo que en las demas clases el nombre de la funcion sea calculaArea y que siempre
  // regrege un tipo de dato number
}

class Rectangulo implements IFiguraGeometrica { // implements es para la interfase extences es para herencia
    private base:number=0;
    private altura:number =0;
    color: string = "Rojo";
    calculaArea(){
        return this.base*this.altura;
    }
}

class Triangulo implements IFiguraGeometrica {
    private base:number=0;
    private altura:number=0;
    color: string ="Verde";
    calculaArea(){
        return ((this.base*this.altura)/2)
    }
    
}

class TrianguloIsoceles extends Triangulo{

    
}

class TrianguloEscaleno extends Triangulo{
    
}

class Circulo implements IFiguraGeometrica {
    color:string = "Azul";
    diametro:number=10;
    calculaArea(){
        return Math.PI * Math.pow(this.diametro/2,2);

    }
}

// mi triangulo es un tipo de triangulo escaleno podemos indicar el tipo de dato como FiguraGeometrica la definimos
let miTriangulo:IFiguraGeometrica = new TrianguloEscaleno(); // aqui estoy instanciando el TrianguloEscaleno que a su vez
// puede tiparse ^
// tiene una herencia de la clase triangulo
miTriangulo.color="verde";
miTriangulo.calculaArea();

// definir una interfaz llamada ICuenta que defina las operaciones deposito,retiro y consultarSaldo

// Crear las clases CuentaPersonal y CuentaEmpresarial relacionadas con ICuenta