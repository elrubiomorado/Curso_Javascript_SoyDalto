//La historia de Cofla
//Capitulo 4
/**
 * Cofla ya esta terminando el primer semestre del primer ciclo, la tarea que le debe realizar es mucho mas avanzada que antes, 
 * ademas de suma, rsta , multiplicacion y division ahora tambien necesita calcular potencias, raices cuadradas y cubicas
 * 
 *              CREAR SOLUCIONES
 *              -Perfeccionar calculadora para poder implementar las nuevas funciones
 */
//funciones
const sumar = (a, b)=>{
    return a + b;
}
const restar = (a, b)=>{
    return a - b;
}
const multiplicar = (a, b)=>{
    return a * b;
}
const dividir = (a, b)=>{
    return a/b;
}
const potencia = (a, b)=>{
    return a ** b;
}
const raizCuadrada = (a)=>{
    return Math.sqrt(a);
}
const raizCubica = (a)=>{
    return Math.cbrt(a);
}

let opc;
let condicion = true;
let continuar;
while(condicion == true){
    alert("Hola bienvenido a la calculadora de cofla");
    opc = parseInt(prompt(`Esta calculadora puede hacer distitos tipos de operaciones, elige la que necesites hacer:
                1-Sumar
                2-Restar
                3-Multiplicar
                4-Dividir
                5-Potencias
                6-Raiz Cuadrada
                7-Raiz Cubica
                Solo necesitas presionar el número correspondiente a la operacion y presionar enter o aceptar`));
    if(opc == 1 |opc == 2|opc == 3|opc == 4|opc == 5){
        var a = parseInt(prompt("Digita el primer numero a operar"));
        var b = parseInt(prompt("Digita el segundo numero a operar"));
    }else if(opc == 6|opc == 7){
        var c = parseInt(prompt("Digita el numero a sacar raiz"));
    }else{
        alert("Error, esa opcion no existe");
        continue;
    }
    switch(opc){
        case 1:
            alert(`El resultado es : ${sumar(a, b)}`);
            break;
        case 2:
            alert(`El resultado es : ${restar(a, b)}`);
            break;
        case 3:
            alert(`El resultado es : ${multiplicar(a, b)}`);
            break;
        case 4:
            alert(`El resultado es : ${dividir(a, b)}`);
            break;
        case 5:
            alert(`El resultado es : ${potencia(a, b)}`);
            break;
        case 6:
            alert(`El resultado es : ${raizCuadrada(c)}`);
            break;
        case 7:
            alert(`El resultado es : ${raizCubica(c)}`);
            break;
        default:
            alert("Error desconocido");
            break;
    }
    continuar = prompt(`Necesitas hacer otra operacion?
                        1- Si
                        2- NO
                        Presiona el numero correspondiente`);
    if(continuar == 2){
        alert("Gracias por usar esta calculadora, gracias vuelva pronto");
        condicion = false;
    }
}