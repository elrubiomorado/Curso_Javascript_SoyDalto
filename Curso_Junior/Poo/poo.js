//Programacion orientada a objetos
class Animal{//Asi definimos una clase, por lo regular las clases comienzan con mayusculas
    constructor(especie, edad, color){//Estos son los parametros que recibira la clase, esto va en el constructor
        //Aqui creamos los atributos dentro del objeto y lo inicializamos con los parametros definidos
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        //this es para indicar que hablamos de la propiedad de la clase
    }
    //Esto es lo que llamamos como metodo
    verInformacion(){
        return `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
}
//Asi creamos un objeto, creando una variable y diciendole que es igual new Animal(parametros)
let perro = new Animal("Perro", 4, "Negro");
//Asi imprimimos el objeto como si fuera una simple variable
console.log(perro);
//Si queremos acceder a una propiedad especifica, le hacemos asi
console.log(perro.especie);
console.log(perro.edad);
console.log(perro.color);
console.log(perro.verInformacion());

//Pero no solo podemos crear un objeto, podemos crear los que queramos
let gato = new Animal("Gato", 2, "White");
let tigre = new Animal("Gatito grande", 7, "Yellow with black");

//Abstraccion
/**
 *  Con abstraccion lo que queremos es resumir un objeto a sus elementos mas importantes
 */
//Modularidad
/**
 *  Lo que queremos con esto es separar trabajos pesados en partes pequeñas para no complicarse tanto en hacer el trabajo pesado de golpe
 */
//Encapsulamiento
/**
 *  Consiste en hacer los datos privados, para que el usuario no pueda acceder facilmente a los datos
 */
//Polimorfismo
/**
 *  Es la capacidad que tiene un objeto para que con un mismo metodo que comparta con otros objetos creado, funcianar diferente debido a sus propiedades
 *  Por ejemplo un gato y un perro pueden tener un mismo metodo que es el caminar
 *  pero sabemos que el gato y el perro caminan diferente ya que son diferentes animales.
 */
class Persona{
    constructor(nombre, edad, sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    verInformacion(){
        return `Mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.sexo}`;
    }
}
//Herencia
/**
 *  Son clases que heredan metodos y propiedades de una clase padre, se utiliza la palabra extends para decir que heredara de una clase
 */
class Empleado extends Persona{//Asi indicamos que heredaremos de una clase
    constructor(nombre, edad, sexo, sueldo){
        super(nombre, edad, sexo);//Aqui indicamos las propiedades que queremos heredar del padre
        this.sueldo = sueldo;
    }
    verInformacion(){//Sobre escribimos el metodo del padre
        return `Mi nombre es ${this.nombre}, tengo ${this.edad} años, soy ${this.sexo} y tengo un sueldo de ${this.sueldo} dolares`;
    }
}
let empleado = new Empleado("Edgar", 20, "Helicoptero Apache creado en vietnam", 50000);
console.log(empleado);
console.log(empleado.verInformacion());

//Metodos estaticos
//Metodos getters and setter
//Getter son para obtener un valor y setter para establecer un valor
class Gerente extends Persona{
    constructor(nombre, edad, sexo, puesto){
        super(nombre, edad, sexo);
        this.puesto = null;
    }
    //Los get son para establecer valores de manera correcta
    set modificarPuesto(puesto){
        this.puesto = puesto;
    }
    //Los get son para retornar valore de manera correcta
    get obtenerNombre(){
        return this.nombre;
    }
    static saludar(){
        console.log("Hola a todos");
    }
}
//Aun que no creemos un objeto podemos hacer uso del metodo static ya que no hace uso de sus propiedades, para llamarlo necesitamos el nombre de la clase
Gerente.saludar();
//Para hacer uso del set lo hacemos como si fuera una variable y no como le pasariamos un parametro a una funcion
const gerente = new Gerente("Edogaru", 20, "Hombre");
console.log(gerente);
gerente.modificarPuesto = "Director de programacion en google"; //Asi establecemos el valor
console.log(gerente);
console.log(gerente.obtenerNombre);//Asi ob