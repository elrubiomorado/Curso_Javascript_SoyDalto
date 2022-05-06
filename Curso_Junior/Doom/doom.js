//Nodos - Es cualquier etiqueta del cuerpo, es un parrafo,m en el mismo body

//document : el nodo document es el nodo raiz, a partir del cual derivan el resto de nodos
//element: nodos definidos por etiquetas html ejem.b, h1,h2 , etc
//text: el texto dentro de un nodo
//attribute : los atributos de las etiquetas definen nodos

//documento - Metodos de seleccion de elementos
/**
 * getElementById() - Selecciona un elemento por id
 * getElementByTagName() - Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada
 * querySelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores
 * querySelectorAll() - devuelve todos los elementos que coincidan con el grupo especificado de selectores
 */
let resultado;
resultado = document.getElementById("parrafo");
document.write(resultado + "<br/>");
resultado = document.getElementsByTagName("p");
document.write(resultado + "<br/>");
resultado = document.querySelector("#parrafo");//El primer elemento que coincida con lo que le demos
document.write(resultado + "<br/>");
resultado = document.querySelectorAll("#parrafo");//Igual al de arriba pero selecciona todos y no solo la primer coincidencia

//metodos para definir, obtener y eliminar valores de atributos
const rango = document.querySelector(".rango");
rango.setAttribute("type", "color");//Asi modificamos un atributo, el primer parametro es el rango que queremos cambiar, el segundo es lo que queremos agregar, ademas que si el primer parametro no lo tiene se le agrega
let valorAtributo = rango.getAttribute("type");
document.write(valorAtributo + "<br/>");//Asi obtenemos el valor de un atributo
valorAtributo = rango.setAttribute("type", "");//Dejamos el atributo type pero si valor
rango.removeAttribute("type");//Asi eliminamos un atributo

//Atributos globales
//class
//id
const titulo = document.querySelector(".titulo");
titulo.setAttribute("contentEditable", "false");//Este atributo acepta valores boolenos, false or true, lo que quiere decir el atributo contentEditable, es que el contenido de esa etiqueta se va a poder editar o no
titulo.setAttribute("dir", "rtl");//Modifica la posicion del texto, por ejemplo para que inicia desde la derecha como escriben los japonesees o como esta por defecto
titulo.setAttribute("hidden", "false");//oculta la etiqueta, siempre la ocultara aunque pongamos false or true
titulo.removeAttribute("hidden");
titulo.setAttribute("tabindex", "1");//Esto se selecciona cuando presionas tab
titulo.setAttribute("title", "titulo normal");//Es cuando pasas el mouse por encima y muestra informacion 

//Atributos de inputs
const pruebaInput = document.querySelector(".pruebas");
document.write(pruebaInput.className);//Asi accedemos directamente al elemento, con el className accedemos al valor de la clase
document.write("<br/>"+pruebaInput.value );
//Una forma mas facion de modificar elementos es haciendolo directamente con los atributos, sin le sett atribute
pruebaInput.value = "Edgar y Rosita se aman";//Modificamos directamente el valor
pruebaInput.type = "file";
pruebaInput.accept = "image/gif";//En este caso como es un input tipo file, lo que hacemos es que solo acepte el tipo de archiov que le indiquemos
pruebaInput.type = "text";
pruebaInput.minLength = "100"; //Es la cantidad minima de caracteres que aceptara el input, si tiene menos no lo enviara al servidor
pruebaInput.placeholder = "rosita i love u";//Es el texto que se encuentra cuando no este escrito nada, pero casi no se ve,esta difuminado
pruebaInput.required = "required";//Con esta hacemos que un campo sea obligatorio de llenar

//Atributo style
titulo.style.padding = "30px";//Modificamos el estilo css de un elemento
titulo.style.color = "#ff0080";
titulo.style.backgroundColor = "Black";

//clases, classlist y metodos list
titulo.classList.add("grande");//el metodo add agrega una clase al elemento
titulo.classList.remove("grande");//remueve clases
document.write(titulo.classList.item(0));//Devuelve una clase en especifico, accedemos a ella atraves de su posicion de como fue declarada la clase, como si fuera un array
document.write(titulo.classList.contains("titulo"));//Devuelve true or false, si la clase de referencia que le pasamos se encuentra dentro del elemento
titulo.classList.toggle("grande", true);//este metodo agrega o elimina una clase, si la clase se encuentra la elimina y si no la agrega, el segundo parametro es opcional, si se encuentra en true aunque la clase se encuentre en el elemento la deja y si esta false si la elimina
titulo.classList.replace("grande", "hola");//Remplaza el nombre de una clase por otro

//obtencion y creacion de elementos
resultado = titulo.textContent;//Con este obtenemos el valor de texto del elemento, solo texto y no el contenido html
document.write("<br/>"+resultado);
resultado = titulo.innerText;//NO se utiliza actualmente
document.write("<br/>"+resultado);//Tiene la misma funcion de textContent
////NO se usa actualmente
document.write("<br/>"+resultado);//Igualmente tiene la misma funcion de textContent y innerText
//La diferencia radica en que textContent nos devuelve todo el contenido de texto aunque este se encuentre invisible mediante estilo y innerText no lo muestra si esta invisible o mediante algun estilo que blockie el texto

resultado = titulo.innerHTML;//Este metodo si devuelve todo lo que se encuentre dentro de la etiqueta
document.write("<br/>"+resultado);
//resultado = titulo.outerHTML();//Nos debuelve toda la etiqueta desde que se creo
document.write("<br/>"+resultado);

//Creacion de elementos
const contenedor = document.querySelector(".contenedor");
const item = document.createElement("LI");//Se crea un elemento
const textodelitem = document.createTextNode("Este es un item de la lista");//Crea un nodo de texto
console.log(textodelitem);
item.innerHTML = textodelitem;
console.log(item);

item.appendChild(textodelitem);
contenedor.appendChild(item);

//Esto nos permite crear muchos elementos sin afectar tanto el rendimiento
const fragmento = document.createDocumentFragment();
const item2 = document.createElement("LI");
item2.innerHTML = "Este es fragmento de elemento";
fragmento.appendChild(item2);
contenedor.appendChild(fragmento);

//Obtencion y modificacion de childs
const primerHijo = contenedor.firstChild; //Esta last que es el ultimo, obtiene el primer elemento y el ultimo si usamnos lastChield, aunque debemos de tener cuidado, por que si hay espacion en el div lo va a marcar como texto, ya que tambien es elemento
console.log(primerHijo);
const primerElementoHijo = contenedor.firstElementChild;//Igualmente tiene su version last
console.log(primerElementoHijo);//Este muestra lo mismo que el primero, solo que no toma los espacion como elementos, sino que va directo a buscar elementos
let hijos = contenedor.childNodes;//Nos devuelve todos los elementos
console.log(hijos);
//children solo devuelve las etiquetas html
hijos = contenedor.children;
console.log(hijos);

//metodos de childs
let parrado = document.createElement("P").innerHTML = "Parrafo";
let h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Te amo rosé";
let h2_antiguo = document.querySelector(".h2");
contenedor.replaceChild(h2_nuevo,h2_antiguo);//Renplaza un hijo
let h4 = document.querySelector(".h4");
contenedor.removeChild(h4);//Elimina un hijo, remueve mas bien dicho

let respuesta = contenedor.hasChildNodes();//Lo que verifica es si el elemento tiene hijos
console.log(respuesta);

//Propiedades de los padres
console.log(contenedor.parentElement);//Nos dice cual es su padre(contenedor)

//Propiedades de siblings
console.log(h2_nuevo.nextSibling);//Nos indica cual es su siguiente hermano
console.log(h2_nuevo.previousSibling);//Nos muestra cual es el hermano anterior a el
console.log(h2_nuevo.nextElementSibling);//Nos indica cual es el siguiente elemento hermano que le sigue
console.log(h2_nuevo.previousElementSibling);//NOs indica el elemento hermano anterior a el

//Nodos extras
//closest() nos devuelve el nodo con la clase qeu le indiquemos mas cercano, los busca de manera ascendente