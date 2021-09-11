"use strict";
// definir una interfaz llamada ICuenta que defina las operaciones deposito,retiro y consultarSaldo
class CuentaPersonal {
    deposito(dep) {
        return 5;
    }
    retiro(ret) {
        return 5;
    }
    consultarSaldo() {
        return "saldo";
    }
}
class CuentaEmpresarial {
    deposito(dep) {
        return 5;
    }
    retiro(ret) {
        return 5;
    }
    consultarSaldo() {
        return "saldo";
    }
}
class TarjetaDeCredito {
    deposito(dep) {
        return 5;
    }
    retiro(ret) {
        return 5;
    }
    consultarSaldo() {
        return "saldo";
    }
    calcularIntereses(deu) {
        return 5;
    }
}
// Crear el objeto de la clase CuentaPersonal
let miCuentaPersonal = new CuentaPersonal();
miCuentaPersonal.deposito(1000);
miCuentaPersonal.retiro(100);
miCuentaPersonal.consultarSaldo();
//Crear el objeto de la clase CuentaEmpresarial
let miCuentaEmpresarial = new CuentaEmpresarial();
miCuentaEmpresarial.deposito(10000);
miCuentaEmpresarial.retiro(1000);
miCuentaEmpresarial.consultarSaldo();
//Crear el objet de la clase TarjetaDeCredito
let miTarjetaDeCredito = new TarjetaDeCredito();
miTarjetaDeCredito.deposito(500);
miTarjetaDeCredito.retiro(100);
miTarjetaDeCredito.calcularIntereses(2000);
miTarjetaDeCredito.consultarSaldo();
