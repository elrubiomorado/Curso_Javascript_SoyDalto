//Historia de cofla 
//Capitulo 6
/**
 * Cofla esta sufriendo un poco... ya que, a pesar de que cree contar con el 90% de asistencias y tener
 * un promedio mayor a 7/10, no cree entregar el 75% de trabajos practicos entregados ya que necesita 
 * dividir las tareas que hara semanalmente, cofla debe, trabajar 8 horas por dia durante 2 semanas entre las cuales tiene:
 * 24 horas estudias, 24 horas hacer trabajos practicos, 56 horas de trabajar , 8 horas de hacer las cosas de la casa.
 * 
 *      -Organizar las actividades diariamente
 *      -Utilizar la consola para organizar todo
 *      -El tiempo por tarea no debe superar las 4 horas
 * 
 * 30 minutos por dia para las cosas de la casa
 * 100 minutos para trabajos
 * 10 minutos descanso
 * 205 para estudiar
 * 240 trabajo
 */

let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos de hacer trabajos prácticos";
let homework = "30 minutos tareas del hogar";
let descanso = "10 minutos de descanso";


console.log("Tareas");
for(let i = 0; i < 14; i++){
    if (i == 0){
        console.group("Semana 1");
    }
console.groupCollapsed("Dia " + (i+1));
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework);
console.groupEnd();
    if(i == 7){
        console.groupEnd();
        console.groupCollapsed("Semana 2");
        
        
    }
}
console.groupEnd();
console.groupEnd();