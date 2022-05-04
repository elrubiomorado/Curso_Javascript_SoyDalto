console.assert(1>3);//Aparece una afirmacion en la consola si la afirmacion es falsa
console.clear();//Limpia la consola
console.error("Che capo que hiciste");//Muestra un mensaje de error cuando sucede un error
console.info("Che muy bien tu trabajo, pero no se usa mas");//Muestra un mensaje informativo
console.table(["Edgar", "Avila", "Gonzalez"]);//Crea una tabla, esta recibe como parametro un objeto o un array
console.warn("Advertencia");//Muestra una advertencia
console.dir([2,3,4,5]);//Nos muestra toda la informacion de un objeto


//Funciones de conteo
console.count();//Cuenta todas las veces que se utlilizo esa funcion
console.countReset();//Resetea la cuenta del count

//Funciones de agrupacion
console.group("nombre");//Crea un grupo
console.groupEnd();//Sale de un grupo
console.groupCollapsed();//crea un grupo pero lo muestra cerrado


//Funciones de temporizacion
console.time();//Inicia un temporizador
console.timeLog();//Nos muestra el tiempo que paso desde que iniciamos el temporizador
console.timeEnd();//Termina el temporizaodor 

console.log("%cRancio", "color:red;background:black");//Con el %c nos permite darle propiedades como si fuera ccs