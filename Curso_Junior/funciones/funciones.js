//Funciones
//Son bloques de codigo que ejecutan cierto codigo y que se puede repetir con el simple hecho de llamarlas
//Nos ayudan a ahorrar codigo y a no repetir codigo

//Una manera de declararlas es con la palabra reservada function
function saluda(){//Asi la creamos
    let respuesta = "edgar";
    console.log(`Un gusto tener aqui ${respuesta}`);
}

//Con este for podemos llamar varias veces a la funcion
for(let i = 0; i < 3; i++){
    saluda(); //Asi la llamamos, 
}

//Funcion tipo flecha 
const saluda2 = ()=>{
    let respuesta = "edgar";
    console.log(`Un gusto tener aqui ${respuesta}`);
}
saluda2();
//Si la funcion flecha tiene solo un parametro y abarca una sola linea lo podemos simplificar de la siguiente manera
const saluda5 = nombre => console.log(`Hola ${nombre}`);
saluda5("edgar");
//Funcion guardada como variable
let saluda3 = function(){
    let respuesta = "edgar";
    console.log(`Un gusto tener aqui ${respuesta}`);
}
saluda3();

//Return y parametros
function sumar(a, b){//Esta funcion recibe 2 parametro que al momento de llamar a la funcion se le dan
    return a + b;//Devuelve el valor de a + b que son los parametros que le daran cuando se le llame
}
resultado = sumar(5, 5);//Aqui llamamos a la funcion y le damos los dos parametros que pide, en este caso 5 y 5, y lo que devuelva la funcion se lo vamos a dar a la variable resultado
console.log(resultado);//Imprimimos el valor de resultado y asi vemos que si se le asigno a la variable resultado el valor de la suma de 5 + 5