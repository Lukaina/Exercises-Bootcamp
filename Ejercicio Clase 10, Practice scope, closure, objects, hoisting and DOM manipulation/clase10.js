//SCOPE

//Global y de función:

const name = 'Vero';

function scopeFunction() {
    // const name = 'Verónica'; //Si vuelvo a declarar la variable (name), salé lo que está dentro de las llaves, porque se mirá si hay algo que se llama name, sino estuviera acá dentro, se va al valor 'Vero'. Es decir, se va desde lo más específico (mi función) hasta lo que lo engloba.
    const lastName = 'Alcaraz';
    console.log("function", name, lastName);
}

// console.log(lastName); //Dirá que no está declarada, eso es porque el Scope de función. Encierra todo lo que está dentro de las llaves y no lo deja salir, así que no se podrá acceder desde fuera de la función.
scopeFunction();
// console.log(name); //Este console.log está de forma global.

//------------------------------

//De bloque: Que es para condicionales. 

if (1 === 1) {
    const number = true; //Siempre se mantendrá la variable dentro del bloque del condicional.
    console.log(number);
}

//console.log(number);

//------------------------------

//Léxico: Importa dónde están definidas esas funciones y no dónde están ejecutadas.

// const cat = "Mota"; //Mi variable está definida como scope global y eso es lo que importa.

// function meowCat() {
//     console.log(cat);
// }

// function go() {
//     const cat = "Estrella"; //Se vuelve y crea la variable dentro de este alcance de scope y se llama a la función definida antes.
//     meowCat();
// }

// go();

//------------------------------

//Función anidada: función dentro de otra función. 

const cat = "Mota";

function go() {
    const cat = "Estrella"; 

    function meowCat() { //Función cuyo scope es la función go.
        console.log(cat); //Aquí el valor de cat ya no será Mota sino Estrella. 
    }
    meowCat();
}  

go();

//------------------------------

//HOISTING (ELEVAR, IZAR): Sucede con variables y funciones.

window.onload = function() {

    hoistingExample();
    //Se sube a este punto.
    function hoistingExample() {
        console.log("Console 1 valor x:", x);
        x=10;
        console.log("Console 2 valor x:", x);
        var x; //Se sube al momento de ejecutar la función.
    }
};

//------------------------------

//CLOSURE: También caben las funciones anidadas. Función dentro de otra->Función interna. Las variables se limpian cuando no son retornadas. Permite a acceder desde una función externa a una interna gracias al return.

function closureExt() {
    var externalVar = "¡Hola! Soy una variable EXTERNA";
    console.log(externalVar);

    function closureInt() {
        var internalVar = "¡Hola! Soy una variable INTERNA";
        console.log(internalVar); //No puedo tener acceso a ella desde afuera.
    }
    return closureInt; //Función externa tendrá como retorno la interna. 
}

const callingClosureInt = closureExt(); //La variable termina siendo una función. La función externa asignada a una variable externa. 
callingClosureInt();

//------------------------------

//OBJETOS

const dog = {
    name: "Terry",
    color: "Black",
    age: 10,
    description: "¡He is a loving dog!",
    "favorite foods": ["fruits", "cookies"],
    activity: {
        night: "sleep",
        day: "play",
    },
}

//MÉTODO: Acciones que pueden hacer esos objetos. 
//Para agregar propiedades a un objeto:
dog.race = "Labrador";
dog.size = "Big";
dog.loving = true;
//Para modificar propiedades:
dog.color = "Brown";
//Otra forma de acceder a propiedades:
dog["description"];
//Acceder a un segundo nivel:
dog.activity.day;


//THIS KEYWORD: Lo que tengo a la izquierda del punto. Contexto en el cual se está ejecutando el código actual. Yendome un nivel hacia atrás o arriba.

const meetup = {
    name: "Meetup mensual de Pioneras",
    attendees: 150,

    confirmation: function(person = "") {
        return `${person} ${"te has inscrito al"} ${this.name}`  //this.name = meetup.name
    }
}

//NEW KEYWORD: Crear un objeto nuevo, a partir de uno ya definido.

function Food() {
    console.log("Preparing food");
}
const sweet = new Food();
console.log(sweet); //Dentro de la definición de sweet está la de food. Prototypal inheritance (herencia): Dos objetos diferentes que comparten código.
console.log(sweet.constructor);

//OBJECT.CREATE

const food = {
    isCold: false,
    printPreparation: function() {
        console.log(`What a nice ${this.foodType}. Is it cold? ${this.isCold}`);
    }
};

const myFood = Object.create(food);

myFood.foodType = "sweet";
myFood.isCold = true;

myFood.printPreparation();

//------------------------------

//BIND: Acceso a contextos por fuera de nuestro alcance.

const person = {
    name: 'Bruce',
    lastname: 'Wayne',
    fullname: function() {
    return this.name + ' ' + this.lastname;
    }
}


    const print = function(greet, adj) {
        console.log(greet, this.fullname(), 'you are', adj); //Cuando se ejecuta este fullname es otro contexto, el de la function print. No va ser el contexto que previamente definí con person. 
}

// print('hello', 'special');

const printBinded = print.bind(person); //Uso de la palabra reservada bind y del contexto que quiero hacer referencia. 
printBinded('hello', 'special');


//APPLY: Similar al BIND. 

print.apply(person, ['hello', 'special']); //También mando como parámetro el contexto y los argumentos se envían en un array.

//------------------------------

//DOM

var elementsP = document.getElementsByTagName("p"); //Acceder a todos los elementos p. Escribir en consola elementsP y elementsP[0]. Para acceder a todo el contenido dentro de estos elementos escribir elementsP[0].innerHTML.

// var titleId = document.getElementById("title"); //Es la más utilizada.
var titleId = document.querySelector("title"); 

//AGREGAR ELEMENTO O NODO:

//1. Crear un elemento
var element = document.createElement("h2");
//2. Crear un nodo de texto
var content = document.createTextNode("Agregamos un nodo");
//3. Añadir el nodo de texto al elemento
element.appendChild(content);
//4. Agregar atributos al elemento
element.setAttribute("align", "center");
//5. Agregar el elemento al documento
document.getElementById("subtitle").appendChild(element);














