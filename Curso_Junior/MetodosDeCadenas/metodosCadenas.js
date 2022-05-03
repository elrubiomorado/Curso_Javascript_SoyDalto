let cadena = "cadena de prueba hola hola";
let cadena2 = "cadena";
let numeros = [1, 2,3,4, 1293];
//concant()    
let resultado = cadena.concat("hola"); //Concatena 2 cadenas de texto
console.log(resultado);

//startsWith()
resultado = cadena.startsWith(cadena2);//Si la cadena2 empieza en la cadena1
console.log(resultado);

//endsWith()
resultado = cadena.endsWith("hola");//Es lo mismo que startsWith pero verifica el final
console.log(resultado);

//Includes()
resultado = cadena.includes("hola")//Verifica si una cadena se encuentra dentro de otra en cualquier parte, como si presionaramos ctrl + f y buscamos en todo el documento
console.log(resultado);

//indexOf()
resultado = cadena.indexOf("hola");//Igualmente busca si una cadena se encuentra dentro de otra, pero esta devuelve la posicion en la que se encuentra la primera letra de la coincidencia
console.log(resultado);

//lastIndexOf()
resultado = cadena.lastIndexOf("hola");//Nos muestra el index de la ultima coincidencia que encuentre
console.log(resultado);

//padStart()
resultado = cadena.padStart(51, "hola");//Rellena una cadena hasta llegar a los caracteres deseados que queramos que tenga y la rellena con la frase o lo que le pongamos
console.log(resultado);

//padEnd()
resultado = cadena.padEnd(51, "hola");//Igual que el padStarts pero al reves
console.log(resultado);

//repeat()
resultado = cadena2.repeat(5);//Repite las veces que le indicamos la cadena
console.log(resultado);

cadena = "Hola Como Estas?        ";
let numero = 20;
//split()
resultado = cadena.split(" "); //Divide la cadena cada que encuentre el caracter que le indiquemos y lo guarda en un array
console.log(resultado);

//substring()
resultado = cadena.substring(0, 4); //Recorta una cadena apartir de indice de inicio indicado y final que le indiquemos
console.log(resultado);

//toLowerCase()
resultado = cadena.toLowerCase();//Convierte a minusculas una cadena
console.log(resultado);

//toUpperCase()
resultado = cadena.toUpperCase();//Convierte a mayusculas una cadena
console.log(resultado);

//toString()
resultado = numero.toString();//convierte a string
console.log(resultado);

//trim()
resultado = cadena.trim();//Lo que hace es eliminar los espacios en blanco
console.log(resultado);

//trimEnd()
resultado = cadena.trimEnd();//Lo que hace es eliminar los espacios en blanco del final
console.log(resultado);

//trimStart()
resultado = cadena.trimStart();//Lo que hace es eliminar los espacios en blanco en el inicio
console.log(resultado);

//Metodos de arrays
let nombres = ["djsnake","Edgar", "Jenni", "Lisa", "Jisoo", "Rosé 🧡", "f"];

//Transformadores
//pop()
resultado = nombres.pop();//Elimina el ultimo elemento del array y lo devuelve
console.log(resultado);

//shift()
resultado = nombres.shift();//Elimina el primer elemento de un array y lo devuelve
console.log(resultado);

//push()
nombres.push("Emiliano");//Agrega un elemento al final del array
console.log(nombres);

//reverse()
console.log(nombres.reverse());//Invierte el orden de los elementos de un array

//unshift()
resultado = nombres.unshift("Suna", "Rosa");//Agrega elementos al inicio de un array y devuelve la cantidad de elementos que contiene el array
console.log(resultado);
console.log(nombres);

//sort()
console.log(nombres.sort());//Acomoda los elementos de un array y devuelve el string en orden

//splice()
nombres.splice(1,1);//Este metodo recibe 2 parametros, el primero es la posicion desde la cual va a empezar y el segundo la cantidad de elementos que va a borrar a partir de donde le dijimos que empezara
console.log(nombres);

//Tambien agrega y reemplaza
nombres.splice(-1, 0, "Edgar");//Con -1 nos referimos al final de un array
console.log(nombres);

//Accesores
//join()
console.log(nombres.join(" - "));//Convierte el array en una cadena, podemos indicar como se separaran los elementos 

//slice()
console.log(nombres.slice(0, 2));//Lo que hacemos en devolver cierta parte que queramos, el primer parametro es donde iniciara y el segundo los elementos que se mostran

//De repeticion
//filter()
resultado = nombres.filter(resultado => numero.length > 4);//Itera en todos los elementos y obtiene el valor del elemento actual, ademas que su culidad especial es que le puedes poner conficiones
console.log(resultado);

//foreach()
nombres.forEach(nombre => console.log(nombre));//Funcion igual que el filter pero con diferencia de que este no puede tener condiciones

//Objeto math
//sqrt() sirve para obtener raices cuadradas
//cbrt() sirve para raices cubicas de un numero
//max() devuelve el mayor de cero o mas numeros
//min() devuelve el menor de entre 0 o mas numeros
//random() devuelve un numero aleatorio
//round() redondea un numero al numero entero mas cercano
//fround() devuelve la representacion flotante de presicion simple mas cercano
//floor() Devuelve el máximo entero menor o igual a un número.
//trunc() La función Math.trunc() devuelve la parte entera de un numero removiendo cualquier dígito decimal (dígitos situados después de la coma).
let random = Math.random() * 100;
console.log(Math.trunc(random));
//Math.PI; pi
//Math.SQRT1_2 raiz cuadrada de 1/2
//Math.SQRT2  raiz cuadrada de 2
//Math.E constante de euler
//Math.LN2 loraritmo natural de 2
//Math.LOG2E logaritmo de e con base 2
//Math.LOG10E logaritmo de E con base de 10

