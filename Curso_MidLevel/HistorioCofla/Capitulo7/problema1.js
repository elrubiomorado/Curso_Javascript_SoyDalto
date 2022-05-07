//Historio de cofla
//Capitulo 7
//Problema 1
/**
 * Despues de aprobar, cofla se compra una mejor computadora para poder programar mejor y hacer todo de una forma mas optima pero necesita una resolucion optima para poder trabajarla
 * 
 * -Debe ser almenos full hd
 * -Cuado la este por comprar, preguntar si esta seguro de eso
 */
let alto = window.screen.height;
let ancho = window.screen.width;
comprar = confirm(`El alto es de ${alto} y el ancho es de ${ancho}`);
if(comprar){
    alert("Comprar realizada correctamente");
}else{
    alert("Compra cancelada");
}