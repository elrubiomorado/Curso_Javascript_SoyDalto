//Condicionales
/*
    Es una sentencia de bloque de codigo que nos permite ejecutar codigo si la condicion se cumple
*/

//Un condicional es el if, que siempre que sea true su condicion se ejecutara el bloque que le corresponda
if(true){
    console.log("Hola");
}
//En cambio el condicional else solo se ejecutara si el if es falso, es como un plan b si el plan a que es el if es falso
else{
    console.log("No hola");
}
if(false){
    console.log("Soy falso");
}
else{
    console.log("Ahora me toca ejecutarme");
}

//Tambien existe otro condicional que es el else if
if(false){
    console.log("No soy verdadero muajajaj");
}else if (true) { //El else if funciona como un segundo if que se ejecutara solo si el if es falso
    console.log("Si soy verdadero");
} else {
    console.log("Chale ya no me toco ejecutarme");
}
//Nota solo puede haber un if y un else, al contrario puede haber muchos else if, si puede haber varios if, pero no estaran relacionados entre si