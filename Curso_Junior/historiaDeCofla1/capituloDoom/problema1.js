//Historia de cofla
//Capitulo doom
/**
 * Cofla se quedo encerrado en su casa porque se le rompio la llave, pero necesita ir urgentemente a la facultad porque no puede faltar ni una sola vez si quiere
 * aprobar las materias que faltan, ya que enta al limite de asistencias, entonces tiene que llamar un cerrajero y pedirle que traiga la llave indicada, no hay tiempo suficiente
 * como para que el cerrajero vea cual es la llave indicada, solo puede traer una y probar, entonces cofla se da cuenta que es una llave antigua, por ende no hace falta afilarla,
 * solo necesita decirle el modelo de la llave para que el cerrajero venga, pero cofla tiene tanta mala suerte que nisiquiera tiene internet para poder buscar , lo que si
 * tiene es a un programador que le hara un sistema para mostrarle las llaves posibles y determinar cual es la indicada, hay solo 20 modelos posibles, permitir que cofla seleccione el indicado.
 * 
 */
const botton = document.querySelector(".sent-button");
botton.value = botton.value.toUpperCase();
const contenedor = document.querySelector(".flex-container");
let contador = 0;
//Rellenamos dinamicamente
function crearLlave(nombre,modelo,precio){
    contador++;
    img = `<img class="llave-img" src="llave.png">`;
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p><b>Precio $${precio}</b></p>`;
    return [img,nombre,modelo,precio];
}
const changeHiden = (number)=>{
    document.querySelector(".key-data").value = number
}
let documenFragment = document.createDocumentFragment();
for(let i = 0; i<20;i++){
    let modeloRandom = Math.round(Math.random() * 10000);
    let precioRandom = Math.round(Math.random() * 10+30);
    let llave = crearLlave(`Llave ${i+1}`, `Modelo ${modeloRandom}`,`${precioRandom}`);
    let div = document.createElement("DIV");
    div.addEventListener("click", ()=>{changeHiden(modeloRandom)});
    div.tabIndex = i;
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML = llave[0]+llave[1]+llave[2]+llave[3];
    documenFragment.appendChild(div);
}
contenedor.appendChild(documenFragment);