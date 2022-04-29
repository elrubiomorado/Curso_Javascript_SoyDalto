//Operadores de asignación
/*
 Asignacion - =
 Asignacion de adiccion - +=
 Asignacion de sustraccion - -=
 Asignacion de multiplicacion - *=
 Asignacion de division - /=
 Asignacion de resto - %=
 Asignacion de exponencial - **=
 Asignacion de desplazamiento a la izquierda - <<=
 Asignacion de desplazamiento a la derecha - >>=
Asignacion sin signo de desplazamiento a la derecha - >>>=
Asignacion AND - &=
Asignacion XOR - ^=
Asignacion Or |=
*/

//Operadores Aritmeticos
/*
Suma - +
Resta - -
Negacion - -
Multiplicacion - *
Division - /
Resto - %
Exponencial - ^
Decremento - --
Exponenciacion - **
Incremento - ++

*/

let suma = 1 + 2;
let resta = 1 - 2;
let negacion = -1;
let multiplicacion = 1 * 2;
let division = 1 / 2;
let resto = 1 % 2;
let exponencial = 1 ^ 2;
let decremento = 2;
decremento--;
console.log(decremento);
let incremento = 1;
incremento++;
console.log(incremento);
let exponencial2 = 2**2;
console.log(exponencial2);

//Operadores intermedios

//Operadores Logicos
//Los operadores logicos nos devuelven un resultado a partir de que se cumpla o no una condicion, su resultado es booleano, y sus operandos son valores lógicos o asimilables a ellos
/*
Para utilizar estos operadores es necesario hacer una comparacion entre dos expresiones
AND(&&) - Esta comparacion nos regresa true solo cuando las dos expresiones son verdaderas y en los demas casos nos regresa false
OR(||) - Esta comparacion nos regresa true siempre que 1 de las dos expresiones sea verdadera o cuando las dos expresiones sean verdaderas, solo regresara false cuando ambas expresiones sean falsas
NOT(!) - Nos regresa lo contrario del resultado de la comparacion
*/
let and = 10 > 5 && 5 > 1;
console.log(and);
//Nos devuelve true por que ambas expresiones son verdaderas, es la unica manera de que nos devuelva true, en ningun otro caso nos devolvera true

let or = 10 > 5 || 5 > 10;
console.log(or);
//Nos devuelve true por que se cumplio una de las condiciones, no es necesario que ambas sean verdaderas para que regrese true, solo nos devolvera false en caso de que ambas sean falsas

let not = ! 10 > 5;
console.log(not);
//Nos devuelve lo contrario, en este caso 10 si es mayor que 5 por lo cual deveria devolver true, pero tiene la negacion asi que lo convierte en false

//Operadores de comparacion
//Nos sirve para hacer comparaciones de expresiones, el resultado nos devuelve un valor voleano que representa la relacion de sus valores
/*
Igualdad - a == b
Inigualdad - a != b
identidad - a === b
no identicos - a !== b
Mas mayor que - a > b
Menor que - a < b
Mayor o igual que - a >= b
Menor o igual que - a <= b
*/

let resultado = 10 > 5;
console.log(resultado);
//Como vemos si la comparacion es verdad nos devuelve true, en caso contrario nos devuelve false

resultado = 10 < 5;
console.log(resultado);
//Como vemos nos devolvio falso
//La todos los operadores de comparacion funcionan igual, solo que hay 2 que son un poco mas especiales
//Los cuales son el de identidad (a === b) y el de no identidad ( a !== b), estos comparan hasta el tipo de dato que se le pasa, veamos un ejemplo
resultado = 10 === 10;
console.log(resultado);
//Nos devuelve true por que 10 es igual a 10, tanto en valor como en tipo
//Veamos que sucede si son iguales en valor pero no del mismo tipo
resultado = 10 === "10"; //Uno es de tipo number y el otro es un string
console.log(resultado);
//Devulve false por que no son iguales en tipo
resultado = 10 == "10";
console.log(resultado);
//En cambio el igual que si devuelve true aunque no sean del mismo tipo, solo se fija en si son iguales
//El de no identidad funciona igual

