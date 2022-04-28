//variables en javascript

//Tipos de datos
string = "Papel";
number = 10; 
flotante = 10.5;
booleano = false;
booleano2 = true;
no_definido = undefined;
no_es_un_numero = NaN;
valorNulo = null;

//Para declearar una variable debemos usar var, let o const dependiendo la situacion
var numero = 15; //Declaramos una variable como lo que conozco como global
let numero2 = 15; //Solo donde la declaremos la podremos utilizar
const constante = "Edgar"; //Esta es una variable que no cambia de valor, si le cambiamos de valor generara error, solo la debemos inicializar 1 vez

//No es necesario que la inicialicemos al crearla
let nombre; //En este momento no tiene valor, estara undefined
nombre = "Edgar"; //En este momento la inicializamos

//Las variables creadas con let y var pueden modificar su valor, al contrario de const que no puede modificar su valor una vez inicializada
let modificame = 10;
modificame = 20;
console.log(modificame); //El valor de modificame cambio por que lo modificamos despues de haberle asignado ya un valor

