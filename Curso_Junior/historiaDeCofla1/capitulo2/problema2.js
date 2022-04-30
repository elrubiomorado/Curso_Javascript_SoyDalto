//Capitulo 2
//Problema 2
/*
Cofla vuelve de la comisaria exausto y por lo cansado que estaba se fue a dormir...
Al otro dia comienzan las clases del ciclo basico de la universidad (porque cofla quiere ser programador y se inscribio en la
facultad de ingenieria para estudiar desarrollo de software).
En su curso en total son 19 alumnos, pero surgio un problema que complico un poco a la facultad:
se rompio el sistema de registro de asistencias y durante los proximos 30 dias no se podran hacer registros de datos de
ningun tipo, por ende las clases no podran comenzar hasta que esto se solucione.

    -Crear mini-sistema que nos permita registrar a los alumnos que estan presentes (P) y ausentes (A) en la clase.
    -Pasados los 30 dias mostrar la situacion final de todos los alumnos (Nro total de presentes y ausentes).
    -Se puede tener un maximo de 10% de ausencias por semestre, si se tienen mas aclarar que esta reprobado
*/

//Sistema de asistencia
/*let alumnos = ["Edgar", "Emiliano", "David", "Jaime", "Jimena", "Lizelby", "Fernanda", "Alan", "Christofer", "Eduardo", "Gerson", "Teresa", "Lizeth", "Carlos", "David", "Paola", "Rosé", "Lisa", "Jenny"];
let arrayAsistencia = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

for(let dia = 1; dia <= 30; dia++){
    console.log(`Hoy es el dia ${dia} de clases y vamos a tomar la lista de asistencia de hoy`);
    for(let alumno in alumnos){
        let asistio = prompt(`El alumno ${alumnos[alumno]} esta presente? (Para si asistio responda con 1 y para no con 0)`);
        if(asistio == 1){
            arrayAsistencia[alumno] += 1;
        }
    }
}
for(let alumno in alumnos){
    if(arrayAsistencia[alumno] <= 27){
        console.log(`Lo sentimos ${alumnos[alumno]} te encuentras reprobado por tener mas del 10% de faltas`);
    }else{
        console.log(`Felicidades ${alumnos[alumno]} pasaste el semestre, tienes una excelente asistencia`);
    }
}
*/
let cantidadAlumnos = prompt("Cuantos alumnos tienes?");
let alumnos = [];

for(let i = 0; i < cantidadAlumnos; i++){
    alumnos[i] = [prompt`Ingresa el nombre del alumno ${i+1}:`, 0];
}
for(let dia = 1; dia <= 2; dia++){
    console.log(`Lista de asistencia del dia ${dia}`);
    for(let i = 0; i < cantidadAlumnos; i++){
        let asistio = prompt(`El alumno ${alumnos[i][0]} se encuentra presente? (Si se encuentra presente marquelo con 1 y si no con 0)`);
        if(asistio == 1){
            alumnos[i][1] += 1;
        }
    }
}
for(let i = 0; i < cantidadAlumnos; i++){
    let promedioAsistencia = alumnos[i][1] * 100 / 2;
    if(promedioAsistencia >= 90){
        console.log(`Felicidades ${alumnos[i][0]} aprobaste el semestre debido a tu excelente asistencia`);
    }
    else{
        console.log(`Estimad@ ${alumnos[i][0]} reprobaste el curso debido a tu excesiva cantidad de faltas`);
    }
}
