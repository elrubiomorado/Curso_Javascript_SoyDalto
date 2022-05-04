//Capitulo 6
//Problema 1
/**
 * Termino el primer semestre y cofla no sabe aprobara o no las materias, para lograrlo necesitara:
 * Contar con al menos el 90% de asistencia.
 * El promedio por materia debe ser de al menos 7/10
 * Debe tener al menos del 75% de los trabajos practicos entregados
 * 
 *      -Solicitar los datos y decirle si aprueba o no
 *      -Mostrar todo esto con colores representativos en consola
 *      -Todo esto estructurado en una table
 */
const materias = {
    Español:[90,6,3,"Español"],
    Matematicas:[80,9,2,"Matematicas"],
    Logica:[40,4,5,"Logica"],
    Geografica:[90,10,54,"Geografia"],
    Programacion:[100,10,12,"Programacion"]
}
//3751005511

const aprobo = ()=>{
    for(materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);
        if(asistencias >= 90){
            console.log("Asistencias en orden");
            if(promedio >= 7){
                console.log("Buen promedio");
                if(trabajos => 2){
                    console.log("Entregastes mas del 75% de practicas")
                    console.log("%c   Aprobado", "color:green");
                }
                else{
                    console.log("%c   Reprodaba por falta de trabajos entregados", "color:red");
                }
            }
            else{
                console.log("%c   Reprodaba por promedio", "color:red");
            }
        }
        else{
            console.log("%c   Reprodaba por faltas", "color:red");
        }
    }
}
aprobo();