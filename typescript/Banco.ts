// definir una interfaz llamada ICuenta que defina las operaciones deposito,retiro y consultarSaldo

// Crear las clases CuentaPersonal y CuentaEmpresarial relacionadas con ICuenta

// Crear la interfaz ICuentaDeCredito que herede de ICuenta 
//agrega la operacion calculaIntereses
//Crear la clase TarjetaDeCredito relacionada con ICuentaDeCredito
//Crear un objeto de cada clase y ver que se puedan los metodos que correspondan al tipo de objeto

interface ICuenta {
    // Operaciones
    deposito(dep:number):number;
    retiro(ret:number):number;
    consultarSaldo():string;
  
  }


  class CuentaPersonal implements ICuenta { // implements es para la interfase extences es para herencia
    deposito(dep:number){
        return 5;
    }
    retiro(ret:number){
        return 5;
    }

    consultarSaldo(){
        return "saldo";
    }
 
}

class CuentaEmpresarial implements ICuenta { // implements es para la interfase extences es para herencia
    deposito(dep:number){
        return 5;
    }
    retiro(ret:number){
        return 5;
    }

    consultarSaldo(){
        return "saldo";
    }
   
}

interface ICuentaDeCredito extends ICuenta{
    calcularIntereses(deu:number):number;
}

class TarjetaDeCredito implements ICuentaDeCredito{
    deposito(dep:number){
        return 5;
    }
    retiro(ret:number){
        return 5;
    }

    consultarSaldo(){
        return "saldo";
    }

    calcularIntereses(deu:number){
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



