//Capitulo 2
//problema de cofla 2

/**
 * Los datos de cofla y de otros alumnos fueron recibidos y ya estan almacenados, ahora hay que crear un sistema que 
 * muestre esa informacion y se pueden asignar cuando rinde.
 * 
 *  - La interfaz debe de ser agradable y atractiva
 *  - Debe de contener todos los datos de manera estructurada
 *  - El profesor puede seleccionar en cual de las 2 semanas rinde el usuario
 *  - Si el profesor confirma, los datos se deben de actualizar y remplazar el espacio de seleccion de semana por la semana seleccionada
 */
let alumnos = [{
    nombre: "Edgar Avila",
    email: "avilaedgar2001@gmail.com",
    materia: "Teoria de control"
},{
    nombre: "Edgar Avila",
    email: "avilaedgar2001@gmail.com",
    materia: "Microcontroladorse"
},{
    nombre: "Emiliano Avila",
    email: "emiavila12345@gmail.com",
    materia: "Todo"
},{
    nombre: "abe Avila",
    email: "avilaabe2000@gmail.com",
    materia: "Todo"
},{
    nombre: "david noriega",
    email: "davicho@gmail.com",
    materia: "Teoria de control"
},{
    nombre: "Juan ortiz",
    email: "asdjfñkl@gmail.com",
    materia: "Teoria de control"
},{
    nombre: "Edgar Avila",
    email: "avilaedgar2001@gmail.com",
    materia: "Teoria de control"
}];
const boton = document.querySelector(".btn-confirmar");
const contenedor = document.querySelector(".grid-container");
for(alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
    </div>`;
    contenedor.innerHTML+=htmlCode;
}
boton.addEventListener("click",(e)=>{
    let confirmar = confirm("Realmente quieres confirmar?");
    if(confirmar){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for(elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }

});