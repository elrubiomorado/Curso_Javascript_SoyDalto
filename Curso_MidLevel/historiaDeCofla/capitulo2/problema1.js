const materia = document.getElementById("materia");
const email = document.getElementById("email");
const nombre = document.getElementById("nombre");
const btn = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    let error = validarCampos();
    if(error[1]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red")
    }else{
        resultado.innerHTML = "Solicitud enviada correctamete";
        resultado.classList.add("green");
    }
    

});
const validarCampos = ()=>{
    let error = [];
    if(nombre.value.length < 5){
        error[0] = true;
        error[1] = "El nombre no puede tener menos de 5 caracteres";
        return error;
    }else if(nombre.value.length > 40){
        error[0] = true;
        error[1] = "El nombre no puede contener mas de 40 caracteres";
        return error;
    }
    error[0] = false;
    return error;

}