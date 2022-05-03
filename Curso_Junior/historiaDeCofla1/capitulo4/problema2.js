//Historia de cofla
//capitulo 4
//Problema 2
/**
 * La facultad de cofla esta por comenzar y ya las 12 materias de la carrera tienen asignado un profesor y
 * todos los alumnos que se anotaron a dichas clases, pero necesitamos ver esto mas ordenadamente.
 *      Crear soluciones
 *      -Crear una funcion que al pasarle como parametro la materia nos devuelva:
 *              *Profesor
 *              *El nombre de todos los alumnos
 *      -Crear funcion que nos diga en cuantas clases esta cofla
 *      -Nombrar las clases en las que esta y los profesores de cada una
 */
const materias = (materia)=>{
    materias = {
        fisica: ["Alan", "Jisoo", "Rosé", "Lisa", "Jenny"],
        español: ["Gerarardo", "Jisoo", "Rosé", "Lisa", "Jenny"],
        matematicas: ["Javiar",  "Jisoo", "Rosé", "Lisa", "Jenny"],
        japones: ["Naka", "Rosé", "Lisa"]
    }
    if(materias[materia] !== undefined){
        return [materias[materia], materia];
    }
    else{
        return false;
    }
}
let mostrarInformacion = (materia) =>{
    let informacion = materia;
    if(informacion !== false){
        let profesor = materias(materia)[0][0];
        alumnos = materias("fisica")[0];
        alumnos.shift();
        console.log(`Profesor de la materia ${profesor}, los alumnos son: ${alumnos}`);
    }
}

mostrarInformacion("fisica");