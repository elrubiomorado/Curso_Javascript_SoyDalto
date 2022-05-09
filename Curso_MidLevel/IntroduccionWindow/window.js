//Window object
//open() - Carga un recurso en el contexto de un nuevo navegador o una ya existente,en pocos abre una ventana emergente en un a nueva pestaña, tambien con close() se puede cerrar dicha ventana
let youtubeUrl = "https://youtube.com";
//let ventana = window.open(youtubeUrl);
//ventana.close();//Cierra la ventana emergente
//ventana.closed();//Verifica que dicha ventana se haya cerrado, devuelve true or false
//stop() - Detiene la carga del sitio web, como si apretaramos la tachita para abortar la carga
//alert() - Nos muestra un mensaje en pantalla
//print() - Sirve para imprimir en impresora xd, como si fueramos a mandar a imprimir la pagina web
//prompt - Nos manda un mensaje y  nos pide que le pasemos un dato, lo guarda como string
//confirm("Si");//Mensaje de aceptar o cancelar que se muestra en pantalla, devuelva true or false

//screen - devuelve una referencia al objeto en pantalla asociado con la ventana.
//const screen = window.screen;
//console.log(screen);

//screenLeft, screenTop - Nos devuelven valores, que indican la posicion en la que se encuentra la ventana de la pagina respecto a nuestro pantalla del sistema operativo
//scrollx - devuelve el numero de pixeles qeu el documento se desplaza actualmente horizontalmente
//scrolly - devuelve el numero de pixeles qeu el documento se desplaza actualmente verticalmente
//const scrollx = window.scrollX;
//alert(scrollx); 
//const scrolly = window.scrollY;
//alert(scrolly); 
//Es similiar al screen top y left, pero este hace referencia al movimiento del scroll de la pestaña

//scroll(parametro1, parametro2); scrollea la pestaña a una parte que definamos en sus parametros

//minimize() - Ya no sirve esta chingadera

//resizeBy() - Redimenciona el tamaño de la ventana actual
//resizeTo() - redimensiona el tamaño de la pantalla actual

//moveTo() - Mueve la ventana a una posicion
//ventana.moveBy - Mueve la ventana a una posicion

//Location
const href = window.location.href;//Nos devulve el url de la pagina actual
document.write(href);

//Hostname - Nos devuelve el nombre de dominio del sitio web
const hostname = window.location.hostname;
document.write("<br>" + hostname);
//pathname - Nos dice en que directorio se encuentra el sitio

//protocol - nos devuelve el protocolo del sitio, como ejemplo https

//assing() - carga un documento