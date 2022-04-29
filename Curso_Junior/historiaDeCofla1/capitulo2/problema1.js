//Historia de cofla
//Capitulo 2
//Problema 1
/*
Un joven muy afortunado logro ganar el primer premio de la loteria... exacto, estamos hablando del pobre al que cofla le dio una mano, este pobre decide hacer una
fiesta para festejar que salio de la pobreza como es tan millonario compro una maquina que deja pasar solo a los mayores de edad, entre otras cosas...

    -Dejar pasar solo a los mayores de edad
    -La primer persona que entre despues de las 2 AM, no paga
*/

//Personas que asistiran
let personas = ["Roberto", "Pedro", "Cofla"];
var bandera = false;
//Funcion para preguntar edad
const pasan = (nombre) =>{
    edad = prompt(`Cual es tu edad ${nombre}`);
    if(edad >= 18){
        console.log(`Tu si puedes pasar ${nombre}`);
        if(bandera == false){
            let hora = prompt("Que hora es?");
            if(hora >= 2){
                bandera = true;
                console.log(`Tu pasas gratis, eres la primer persona en llegar despues de las 2am`);
            }
        }
    }else{
        console.log(`Lo siento ${nombre} solo pueden pasar los mayores de edad`);
    }
}
//Recorrer las personas que asistiran y les preguntamos su edad
for (let persona of personas){
    pasan(persona);
}