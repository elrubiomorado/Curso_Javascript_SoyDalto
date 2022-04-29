//Arrays
//Los Arrays son como cajas de cajas, o variables que pueden albergar distinta informacion de diferentes tipos en diferentes lugares dentro de ella

//Forma 1 de crear un array
let array = ["Platano", "Manzana", "Pera"]; //Debemos usar los corchetes y separar con comas los distintos datos

//Como podemos acceder a la informacion dentro del array
console.log(array); //Si hacemos esto nos muestra todo sus elementos
//Si queremos mostrar un elemento especifico lo podemos acceder con su index, el primer elemento empieza en 0 y para los demas se cuenta de 1 en 1
console.log(array[0]);//Accedemos al platano que se encuentra en el index 0
console.log(array[1]);//Ahora la manzana que esta en el index 1
console.log(array[2]);//Y al final pera que se encuentra en la posicion 2


//Arrays Asociativos
let arrayAsociativo = {//El array asociativo no se maneja por index, se maneja por su asociacion que le indiquemos
    nombre: "Edgar",
    apellido: "Avila",
    edad: 20,
    ciudad: "Ameca"
};

let persona = ["Edgar", "Avila", 20, "Ameca"];//Si lo hicieramos como un array normal asi lo hariamos y nos manejariamos por index
console.log(arrayAsociativo.nombre);//Para acceder a la informacion dentro de el usamos el . y su asociacion que le dimos, en este caso es arrayAsociativo.nombre para acceder al nombre
console.log(arrayAsociativo["nombre"]);//Tambien se puede poner entre corchetes y comillas la asociacion a la cual puede accder
console.log(arrayAsociativo);//Tambien podemos acceder a toda su información



