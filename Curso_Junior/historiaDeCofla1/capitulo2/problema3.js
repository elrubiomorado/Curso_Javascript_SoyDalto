//Capitulo 2
//Problema 3
/*
Cofla feliz por haber empezado las clases volvio a su casa y ya tiene tarea basica de calculo; tiene que hacer un par de ejercicios matematicos que incluyen 
suma, resta , division y multiplicacion, realizar esto con una calculadora puede ser mucho mas especifico
*/


opc = prompt(`Bienvenido a la calculadora de cofla
    Selecciona la opcion de la operacion que quieras hacer, solo tienes que ingresar el numero correspondiente a la operacion
    1- Suma
    2- Resta
    3- Multiplicacion
    4- Division`);
if (opc == 1) {
    digitos = prompt(`Cuantos digitos procesara tu calculadora?`);
    let resultado = 0;
    for (let i = 0; i < digitos; i++) {
        numeros = [];
        numeros[i] = parseInt(prompt(`Ingresa el digito: `));
        resultado += numeros[i];
    }
    alert(`El resultado de la suma es : ${resultado}`);
}else if (opc == 2) {
    digitos = prompt(`Cuantos digitos procesara tu calculadora?`);
    let resultado;
    for (let i = 0; i < digitos; i++) {
        numeros = [];
        numeros[i] = parseInt(prompt(`Ingresa el digito: `));
        if(i == 1){
            resultado = numeros[i];
        }
        else{
            resultado -= numeros[i];
        }
    }
    alert(`El resultado de la resta es : ${resultado}`);
}else if (opc == 3) {
    digitos = prompt(`Cuantos digitos procesara tu calculadora?`);
    let resultado = 1;
    for (let i = 0; i < digitos; i++) {
        numeros = [];
        numeros[i] = parseInt(prompt(`Ingresa el digito: `));
        resultado = resultado * numeros[i];
        console.log(numeros[i]);
    }
    alert(`El resultado de la multiplicacion es : ${resultado}`);
}else if (opc == 4) {
    digitos = prompt(`Cuantos digitos procesara tu calculadora?`);
    let resultado = 0;
    for (let i = 1; i < digitos; i++) {
        numeros = [];
        numeros[i] = parseInt(prompt(`Ingresa el digito: `));
        if(i == 1){
            resultado = numeros[i];
        }
        else{
            resultado /= numeros[i];
        }
    }
    alert(`El resultado de la division es : ${resultado}`);
}else{
    alert("Usted esta tonto?, o porque pone una opcion que no existe?");
}
