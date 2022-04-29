//Concatenacion
//Concatenacion quiere decir que vamos a poder unir cadenas de texto, numeros, etc
//Ejemplo
let saludo = "Hola Edgar";
let pregunta = "Como estas?";

//Aqui concatenamos 2 variables y un espacio, no es necesario que sean variables para concatenar texto o valores
frase = saludo + " " + pregunta;
console.log(frase);

//Una de las partes donde mas se usa la concatenacion es cuando se le pide al usuario que ingrese algo y lo concatenamos con alguna frase
//Por ejemplo, le vamos a pedir al usuario su nombre para despues concatenarle un saludo con su nombre
let nombre = prompt("Como te llamas?");
alert("Hola " + nombre + " es un gusto tenerte aqui");

//Otra manera de concatenar que puede ser mejor ya que tienes mas margen para personalizar la forma en que se mostrara el mensaje
console.log(`Hola ${nombre}`);

//Usar los backtiks tambien nos sirve para tener el codigo en varias lineas, asi podemos hacer saltos de linea sin el \n
console.log(`
Hola
${nombre}
`);

//Casi siempre nuestra mejor opcion sera usar backtiks al concatenar
