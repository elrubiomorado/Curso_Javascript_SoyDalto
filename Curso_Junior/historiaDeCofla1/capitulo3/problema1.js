//Historia de Cofla
//Capitulo 3 
/**
 * Problema 1
 * Cofla entro a una tienda que vende celulares porque le parecio bastante bueno comprarse un nuevo celular.
 * De todos lo modelos que hay disponibles en esa tienda, a cofla le llamaron la atencion 3 telefonos especificamente,
 * El problema es que ninigun vendedor sabe nada al respecto entonces no pueden recomendarle absolutamente nada... pero claro:
 * el antes de comprar esos celulares quiere ver las cualidades y comportamientos de cada uno para poder comprarlos, ahi 
 * entramos nosotros.
 * 
 * 
 *          -Crear un sistema para mostrarle a cofla las particularidades de los 3 celulares.
 *          -Cada celular debe tener color, peso, resolucion de pantalla, resolucion de camara y memoria ram
 *          -Cada celular debe poder prender, reinicar, apagar, tomar fotos y grabar
 */
//Clase para crear objetos telefono
class Celular{
    constructor(color, peso, resolucionPantalla, resolucionCamara, memoriaRam, procesador){
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.memoriaRam = memoriaRam;
        this.procesador = procesador;
    }
    set setColor(color){
        this.color = color;
    }
    get getColor(){
        return this.color;
    }
    set setPeso(peso){
        this.peso = peso;
    }
    get getPeso(){
        return this.peso;
    }
    set setResolucionPantalla(resolucionPantalla){
        this.resolucionPantalla = resolucionPantalla;
    }
    get getResolucionPantalla(){
        return this.resolucionPantalla;
    }
    set setResolucionCamara(resolucionCamara){
        this.resolucionCamara = resolucionCamara;
    }
    get getResolucionCamara(){
        return this.resolucionCamara;
    }
    set setMemoriaRam(memoriaRam){
        this.memoriaRam = memoriaRam;
    }
    get getMemoriaRam(){
        return this.memoriaRam; 
    }
    set setProcesador(procesador){
        this.procesador = procesador;
    }
    get getProcesador(){
        return this.procesador;
    }
    encender(){
        alert("Estoy encediento");
    }
    reiniciar(){
        alert("Estoy reiniciandome");
    }
    apagar(){
        alert("Me estoy apagando");
    }
    tomarFotos(){
        alert("Tome una foto");
    }
    grabar(){
        alert("Estoy tomando video");
    }
}
//Creando los tres celulares
const samsungS22Ultra = new Celular("Negro", "150 gramos", "3080x1440px a 120hz", "108 megapixeles", "12 gb de memoria ram", "Exynos 2200 a 2.80Ghz");
const iphone13ProMax = new Celular("Blanco", "140 gramos", "2778x1284px a 120hz", "12MP", "4gb de memoria ram", "Apple A15 Bionic");
const xiaomiRedmi9s = new Celular("Azul", "170 gramos", "1920x1080px", "46 megapixeles", "4gb de memoria ram", "Qualcomm snapdragon 750");

const mostrarCelular = (celular)=>{
    alert(`Hola, las caracteristicas principales son las siguientes
                 Color: ${celular.color}
                 Peso: ${celular.peso}
                 Resolucion de pantalla: ${celular.resolucionPantalla}
                 Resolucion de camara: ${celular.resolucionCamara}
                 Memoria Ram: ${celular.memoriaRam}
                 Procesador: ${celular.procesador}`);
}
let opc = true;
let modelo;
let seguir;
while(opc == true){
    modelo = prompt(`Hola, bienvenido al servicio de review de celulares, de que modelo deseas ver las caracteristicas principales?

    1 - Samsung s22 Ultra
    2 - Iphone 13 Pro Max
    3 - Chayomi redmi note 9s

    Introduce el número correspondiente del la opcion que deseas:`);
    if(modelo == 1){
        mostrarCelular(samsungS22Ultra);
    }
    else if(modelo == 2){
        mostrarCelular(iphone13ProMax);
    }
    else if(modelo == 3){
        mostrarCelular(xiaomiRedmi9s);
    }
    else{
        alert("No existe esa opcion");
    }
    seguir = prompt("Deseas saber de otro modelo? Escribe si para seguir y no para salir");
    if(seguir == "no" || seguir == "no"){
        console.log("Gracias por haber utilizado el servicio de reviews de celular")    ;
        opc = false;
    }
    else if(seguir != "si" && seguir != "Si" && seguir != "no"&& seguir != "No"){
        alert("Esa opcion no existe");
    }
}