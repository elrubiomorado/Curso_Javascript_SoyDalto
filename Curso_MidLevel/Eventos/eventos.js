//Eventos en javascript son los cambias que suceden en la pagina
//Para usar eventos necesitamos el event handler
const button = document.querySelector(".button");
//Evento click, los eventos llevan el on antes del nombre del evento, en este caso es el click, cuando
//que significa cuando se precione el elemento
//button.onclick = ()=>{//Esta no es la mejor manera de meter eventos, porque puede generar errores en las pagina
  //  alert("HOla, soy un evento onclick");
//};
//La mejor manera es con addEventListener()
button.addEventListener("click", ()=>{
    alert("Hola")
    //button.removeEventListener("click", saludar);//Asi se elimina un evento, pero no se puede hacer asi,
    //ya que no funcionara, para hacer esto debemos de crear una funcion y asociarla, en lugar de hacerlo  con funcion flecha
});//Esta es la manera correcta de crear un evento
button.addEventListener("click", saludar);
//De esta manera si podremos eliminar un evento
function saludar(){
    alert("hola");
    button.removeEventListener("click", saludar);
};

//Objeto event
const button2 = document.querySelector(".button2");
button2.addEventListener("click", (e)=>{//solo ese parametro se puede recibir en un evento, este parametro es como si pusieramos this en un objeto
    console.log(e);//De esta manera podemos acceder a las propiedades del evento
    console.log(e.target);//Con target accedemos al elemento a al se le asigno el evento
});

//Flujo de eventos
//Event bubling - el elemento mas especifico sera el que se ejecute primero, pero eso puede cambiar
const button6 = document.querySelector(".button6");
const contenedor = document.querySelector(".contenedor");
//Si presionamos el boton  se ejecuta esta funcion, pero ademas se ejecuta tambien la funcion del contenedor
button6.addEventListener("click",(event)=>{
    alert("Di click en un boton");
    event.stopPropagation();//Asi ya no se ejecutara el contenedor
});

contenedor.addEventListener("click",()=>{
    alert("Di click en el contenedor");
},/*true*/);//Asi cambiamos la especifidad
//Tambien podemos evitar que se propague, es decir que se ejecute en otros elementos padres del elemento, para que solo que ejecute en el boton

//Eventos del mouse
//click - ocurre cuando damos un click

//dblclick - ocurre cuando damos un boble click, si se da un solo click no sucede nada, el tiempo para doble click es de medio segundo o 0.5 segundos
const button5 = document.querySelector(".button5");
button5.addEventListener("dblclick",()=>{alert("HOla")});

//mouseover - cuando el mouse se encuentra sobre un elemento
button5.addEventListener("mouseover", ()=>{
    alert("pinche perro");
});

//mouseout - cuando sales de un elemento se ejecuta
const button3 = document.querySelector(".button3");
button3.addEventListener("mouseout", ()=>{
    alert("hola")
});

//contextmenu - cuado hacer click derecho en el elemento
button.addEventListener("contextmenu", ()=>{
    alert("hola");
});

//mouseleave - es como el mouseover pero con la diferencia de que no para de ejecutarse mientras este dentro
button.addEventListener("mouseleave", ()=>{
    alert("no paro de ejecutarme goku aaaaaa");
});

//mousedown - cuando das click en un elemento, la diferencia a click es que click se ejecuta hasta que sueltes el boton y mousedown en cuanto presionas se ejecuta

//mouseup - Solamente cuando soltamos dentro de un elemento se ejecuta, podemos presionar fuera del elemento y mientras mantenemos presionado el boton nos dirijimos al elemento
//con mouseup y soltamos este elemento se ejecutara, ya que mouseup se ejecuta cuando se suelta el boton, no hace falta dar click en el

//Eventos de teclado
const contenedor1 = document.querySelector(".contenedor1");
const input = document.querySelector(".input-prueba");

//keydown unicamente registra cuando la tecla se presiona
input.addEventListener("keydown", (e)=>{
    console.log("La tecla fue presionada");
});

//keypress es parecida al keydown, con la diferencia que se activa cuando el usuario presiona y suelta una tecla
input.addEventListener("keypress", (e)=>{
    console.log("Un usuario presiono una tecla y la solto");
});

//keyup cuando se suenta una tecla
input.addEventListener("keyup", (e)=>{
    console.log("La tecla fue soltada");
});

//Eventos de la interfaz
const img = document.querySelector(".img");

//Evento error - este se ejecuta cuando sucede un error en el elemento, por ejemplo si es una imagen y dicha imagen no carga se conciderara un error y entrara este evento
img.addEventListener("error", (e)=>{
    console.log("A sucedido un error");
});

//load cuando el window carga
window.addEventListener("load", (e)=>{
    console.log("Se ejecuta cuando el windows carga");
});

//beforeload cuando te estas por ir del sitio
addEventListener("beferoload", (e)=>{
    console.log("Cuando se esta por cambiar de pagina se ejecuta");

});

//unload cuando te vas del sitio
addEventListener("unload",(e)=>{
    console.log("Te juites del juitio");
});

//resize - cuando el tamaño de la pantalla cambia
addEventListener("resize", (e)=>{
    console.log("Cuando mueves el tamaño o resolucion de la pantalla");
});

//scroll - cuando se escrolea en la pagina
addEventListener("scroll", (e)=>{
    console.log("no hagas scroll te lo dice tu papi");
});

//select - cuando se selecciona un elemento, ademas  es util para saber que fue lo que el usuario selecciono
input.addEventListener("select", (e)=>{
    console.log("Cuando se selecciona");
    console.log(e.target.selectionEnd);
});

//timers

//setTimeout - establece un temporizador, recibe 2 parametros, en el cual el primero es una funcion y le segundo el tiempo que pasara para ejecutarse en milisegundos
setTimeout(()=>{
    alert("hola");
}, 2000);

//Para hacer que no se ejecute un setTimeout nunca hacemos lo siguiente
const temporizador = setTimeout(()=>{
    alert("cola xdddd");
}, 2000);

clearTimeout(temporizador);//Asi eliminamos el temporizador

//setInterval - ejecuta una funcion constantemente
const intervalo = setInterval(()=>{
    var hoy = new Date();
    var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    console.log(hora);
}, 1000);

//eliminar un intervalo
clearInterval(intervalo);