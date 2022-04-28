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

//Crear varias variables en una sola linea
let numero_1, numero_2, numero_3;
// o
let numero_uno = 1, numero_dos = 2, numero_tres = 3;

//Promp
//Sirve para pedirle datos al usuario
prompt("Como te llamas"); //Si lo hacemos de esta manera no lo guardamos en ningun lado, para guardarlo necesitamos guardarlo en una variable
let nombre_prompt = prompt("Cual es tu nombre");
alert(nombre_prompt);
//Tambien podemos concatenar el resulta escrito por el usuario a una cadena 
alert("Hola " + nombre_prompt);
