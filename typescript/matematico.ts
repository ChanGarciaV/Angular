function suma(num1:number, num2:number): number{
    return num1+num2;
}
function resta(num1:number,num2:number): number{
    return num1-num2;
}

function multiplica(num1:number,num2:number): number{
    return num1-num2;
}

function divide(num1:number,num2:number): number{
    return num1/num2;
}

let mayor = (num1: number, num2:number): string =>{
    if(num1>num2)
    {
        return `El ${num1} es mayor que ${num2}`;
    }
    else{
        return `El ${num2} es mayor que ${num1}`;
    }
}

enum Rol {'Admin','User','SuperUser'}; // enumeracion de los usuarios
type Department = 'MKT' | 'Finanzas' | 'HR'; // tipo de dato

// let AgregarUsuario2 = (usuario:string,rol:Rol):string =>{
//     return "blabla";
// }
function AgregarUsuario(nombre:string,rol:Rol,depto: Department):void{
    console.log('usuario agregado');
}

AgregarUsuario('Chayanne',Rol.SuperUser, 'HR');