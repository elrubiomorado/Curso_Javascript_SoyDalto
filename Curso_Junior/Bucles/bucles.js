//Bucles de iteracion

//While
//While es un bucle que se repite hasta que la condicion que se le de sea falsa, mientras sea verdadera se repetira, debemos tener cuido por que podemos causar un bucle infinito
//Si la condicion nunca es verdadera no se entrara al bucle
let i = 0;
while(i < 10){
    console.log(i);    
    i++;
};

//Do while
//Es un bucle que funciona como el while pero tiene algo diferente, primero ejecuta y luego pregunta si la condicion es correcta, por lo que siempre se ejecutara al menos una vez aunque la condicion sea falsa
let x = 0;
do{
    console.log(x);
    x++;
}while(x > 10);
//Como podemos ver solo imprimio una vez el valor de x, la condicion era falsa, asi que no pudo ejecutarse mas veces

//For
//Este es un bucle que se repite la cantidad de veces que le indiquemos
for(let z = 0; z < 10; z++){
    console.log(z);
};
//Con el for tenemos mas control de las veces que se repetira

//Sentencia Break
//Sirve para detener la ejecucion de un bucle
for(let contador = 0; contador < 10; contador++){
    console.log(contador);
    if(contador == 2){
        break;
    }
};
//En este caso lo utlilizamos para terminar el bucle cuando el contador sea igual a 2, asi el bucle no termina hasta que valga 9

//Sentencia Continue
//Esta sentencia sirve para saltar una iteracion y seguir con la siguiente
for(let contador = 0; contador < 10; contador++){
    if(contador == 6 || contador == 0){
        continue;
    };
    console.log(contador);//Aqui funciona todo bien pero si nos damos cuenta no esta el 6 
    //Esto es por el if en el que el contador es igual a 6, al entrar hay se ejecuta el continue y continua a la siguiente iteracion sin ejecutar lo que siga despues de el
};

//For in
//El for in sirve para iterar sobre un los elementos de un array y devuelve la posicion de los datos, tambien si es un array asociativo nos devuelve su asociacion
let animales = ["gato", "perro", "perro", "perro", "Hoy es el mejor dia de mi vida"];
animales.edad = 20;//Agregamos un elemento al array
for (animal in animales){
    console.log(animal);
    //Tambien con esto podemos imprimir los animales dentro del array de la siguiente manera
    console.log(animales[animal]);
}
//For of
//El for of es muy similar al for in pero con la diferencia de que este devuelve los datos y no las posiciones de ellos
for(animal of animales){
    console.log(animal);
}

//For each
let array1 = ["Edgar", "Avila", "Gonzalez"];
let array2 = ["Emiliano", "Perex", array1];
forRancio://Label, le pusimos nombre al for para poder usarlo
for(let array in array2){
    if(array == 2){
        for(let array of array1){//Este es un for anidado
            console.log(array);
            break forRancio;  
        }
    }else{
        console.log(array2[array]);
    }
}