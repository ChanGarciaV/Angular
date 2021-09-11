"use strict";
function suma(num1, num2) {
    return num1 + num2;
}
function resta(num1, num2) {
    return num1 - num2;
}
function multiplica(num1, num2) {
    return num1 - num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
let mayor = (num1, num2) => {
    if (num1 > num2) {
        return `El ${num1} es mayor que ${num2}`;
    }
    else {
        return `El ${num2} es mayor que ${num1}`;
    }
};
var Rol;
(function (Rol) {
    Rol[Rol["Admin"] = 0] = "Admin";
    Rol[Rol["User"] = 1] = "User";
    Rol[Rol["SuperUser"] = 2] = "SuperUser";
})(Rol || (Rol = {}));
; // enumeracion de los usuarios
// let AgregarUsuario2 = (usuario:string,rol:Rol):string =>{
//     return "blabla";
// }
function AgregarUsuario(nombre, rol, depto) {
    console.log('usuario agregado');
}
AgregarUsuario('Chayanne', Rol.SuperUser, 'HR');
