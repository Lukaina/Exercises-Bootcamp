//AUTO-EJERCICIOS

//1) Write a JavaScript function to get the first element of an array.

// ARROW FUNCTION
// const frutas = array => array[0];

// function fruits(array) {
//        return array[0];
//        //console.log(array[0]);
// }

// const vegetables = ['Tomato', 'Lettuce', 'Carrot', 'Onion'];
// console.log(vegetables[0]);
// console.log(fruits(vegetables));

// // ---------------

// //2) Write a JavaScript program which prints the elements of the following array [7, 0, 7, 27]

// const num = [7, 0, 7, 27];
// num.forEach(element => console.log(element));

// // ---------------

// //3) Write a JavaScript program which prints the elements of the following array [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]

// const numeros = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// numeros.forEach(elements => console.log(elements));
// /*function numeros(array) {
// array.forEach(elements => console.log(elements));
// }*/

// // ---------------

// //4) Write a JavaScript function to remove. 'null', '0', '', 'false' from this array:
// //[1,2,3,'', false, null, 3, true, '']

// const arrayToRemove = [1, 2, 3, '', false, null, 3, true, ''];
// function removeValuesFromArray(array) {
//        const valuesToRemove = [null, 0, '', false];
//        return array.filter(item => !valuesToRemove.includes(item));
// }

// // ---------------

// //length of numbers.
// const numbers = [7, 0, 7, 27];
// console.log(numbers.length);


// ---------------
// EJERCICIO 01 (mix)
// ---------------
//Array de objetos, con las mismas propiedades.
// const patients = [
//     {name: 'Andrea', age: 26, gender: 'F'},
//     {name: 'Adriana', age: 24, gender: 'F'},
//     {name: 'Carlos', age: 35, gender: 'M'},
//     {name: 'Christian', age: 24, gender: 'M'},
//     {name: 'Laura', age: 24, gender: 'F'},
// ]

// console.log( patients[0] );
// console.log( patients[1].name );
// //Aparecerá la edad de Carlos.
// console.log( patients[2].age );
// //Aparecerá el género de Christian.
// console.log( patients [3].gender );
// //Aparecerá el género de Laura.
// console.log ( patients [4].gender);
// Ahora deseo obtener el nombre del segundo paciente


// ---------------
// EJERCICIO 02 (mix)
// ---------------
//FOR: HACE VARIAS VECES LA MISMA TAREA. CON I RECORRO TODO EL ARRAY.
// const patients = [
//     {name: 'Andrea', age: 26, gender: 'F'},
//     {name: 'Adriana', age: 24, gender: 'F'},
//     {name: 'Carlos', age: 35, gender: 'M'},
//     {name: 'Christian', age: 24, gender: 'M'},
//     {name: 'Laura', age: 24, gender: 'F'},
// ]

// for ( let i = 0; i < patients.length; i++ ) {

//     const patient = patients[i];
//     const patientNumber = i + 1;
//     const message = 'Nombre del paciente ' + patientNumber + ': ' + patient.name;
//     console.log( message );
// }
// for (let i=0; i < patients.length; i++) {

//     const patient = patients[i];
//     const patientNumber = i + 3;
//     const message = 'Edad del paciente ' + patientNumber + ': ' + patient.age;
//     console.log (message);
// }
// for (let i=0; i < patients.length; i++) {

//     const patient = patients[i];
//     const patientNumber = i + 5;
//     const message = 'Género del paciente ' + patientNumber + ': ' + patient.;
//     console.log (message);
// }

// ---------------
// EJERCICIO 03 (loop)
// ---------------

// const patients = [
//     {name: 'Andrea', age: 10, gender: 'F'},
//     {name: 'Adriana', age: 24, gender: 'F'},
//     {name: 'Carlos', age: 17, gender: 'M'},
//     {name: 'Christian', age: 24, gender: 'M'},
//     {name: 'Laura', age: 24, gender: 'F'},
// ]
// // // Se declara una variable patientToRemit.
// // let patientToRemit = patients[0];

// // if ( patientToRemit.age < 18 ) {
// //     console.log( patientToRemit.name + ' remitido a pediatría');
// // } else {
// //     console.log( patientToRemit.name + ' remitido a medicina general'); 
// // // }

// // Aquí el paciente remitido es Christian.
// // let patientToRemit = patients[3];

// // if ( patientToRemit.age < 18 ) {
// //     console.log( patientToRemit.name + ' remitido a pediatría');
// // } else {
// //     console.log( patientToRemit.name + ' remitido a medicina general'); 
// // }

// //Aquí el paciente remitido es Laura.
// let patientToRemit2 = patients[4];

// if ( patientToRemit2.age < 18 ) {
//     console.log( patientToRemit2.name + ' remitido a pediatría');
// } else {
//     console.log( patientToRemit2.name + ' remitido a medicina general'); 
// }

// ---------------
// EJERCICIO 04 (funciones)
// ---------------

// const patients = [
//     {name: 'Andrea', age: 10, gender: 'F'},
//     {name: 'Adriana', age: 24, gender: 'F'},
//     {name: 'Carlos', age: 17, gender: 'M'},
//     {name: 'Christian', age: 24, gender: 'M'},
//     {name: 'Laura', age: 24, gender: 'F'},
// ]

// let patientToRemit = patients[0];

// remitir();//En las funciones puedo llamarlas antes de definirlas. Diferente a las variables, que no puedo llamarla antes de definirla. 

// function remitir() {
//     if ( patientToRemit.age < 18 ) {
//         console.log( patientToRemit.name + ' remitido a pediatría');
//     } else {
//         console.log( patientToRemit.name + ' remitido a medicina general'); 
//     }
// }

// remitir();

// ---------------
// EJERCICIO 05
// ---------------

// const patients = [
//     {name: 'Andrea', age: 10, gender: 'F'},
//     {name: 'Adriana', age: 24, gender: 'F'},
//     {name: 'Carlos', age: 17, gender: 'M'},
//     {name: 'Christian', age: 24, gender: 'M'},
//     {name: 'Laura', age: 24, gender: 'F'},
// ]

// let patientToRemit = patients[0];
// remitir();
// patientToRemit = patients[1];
// remitir();
// patientToRemit = patients[2];
// remitir();
// patientToRemit = patients[3];
// remitir();

// function remitir() {
//     if ( patientToRemit.age < 18 ) {
//         console.log( patientToRemit.name + ' remitido a pediatría');
//     } else {
//         console.log( patientToRemit.name + ' remitido a medicina general'); 
//     }
// }

// ---------------
// EJERCICIO 06 (funciones con argumentos)
// ---------------

// const patients = [
//     {name: 'Andrea', age: 10, gender: 'F'},
//     {name: 'Adriana', age: 24, gender: 'F'},
//     {name: 'Carlos', age: 17, gender: 'M'},
//     {name: 'Christian', age: 24, gender: 'M'},
//     {name: 'Laura', age: 24, gender: 'F'},
// ]

// remitir( patients[0] );
// remitir( patients[1] );
// remitir( patients[2] );
// remitir( patients[4] );

// function remitir( patient ) {
//     if ( patient.age < 18 ) {
//         console.log( patient.name + ' remitido a pediatría');
//     } else {
//         console.log( patient.name + ' remitido a medicina general'); 
//     }
// }

// ---------------
// EJERCICIO 07 (funciones con argumentos)
// ---------------

// const patients = [
//     {name: 'Andrea', age: 10, gender: 'F'},
//     {name: 'Adriana', age: 24, gender: 'F'},
//     {name: 'Carlos', age: 17, gender: 'M'},
//     {name: 'Christian', age: 24, gender: 'T'},
//     {name: 'Laura', age: 24, gender: 'F'},
// ]

// for ( let i = 0; i < patients.length; i++ ) {
//     remitir( patients[i] );
// }

// function remitir( patient ) {
//     let room, genderEnd;

//     if ( patient.age < 18 ) {
//         room = 'pediatría';
//     } else {
//         room = 'medicina general'; 
//     }

//     if ( patient.gender === 'M') {
//         genderEnd = 'o';
//     } else if (patient.gender === 'F') {
//         genderEnd = 'a';
//     } else {
//         genderEnd = 'e';
//     }
//     // $TEMPLATES LITERALES: TEMPLATE CON STRINGS. LAS COMILLAS INVERTIDAS, COMO UN STRING NORMAL, PERO LO QUE PONGA DENTRO DEL ${} SE REEMPLAZA POR VARIABLES. 
//     console.log( patient.name + ` remitid${genderEnd} a ` + room );  
// }


// ---------------
// EJERCICIO 08 (funciones que retornan valores)
// ---------------

// const patients = [
//     {name: 'Andrea', age: 10, gender: 'F'},
//     {name: 'Adriana', age: 24, gender: 'F'},
//     {name: 'Carlos', age: 17, gender: 'M'},
//     {name: 'Christian', age: 24, gender: 'M'}
// ]

// for ( let i = 0; i < patients.length; i++ ) {
//     remitir( patients[i] );
// }

// function remitir( patient ) {
//     const room = selectRoom( patient.age );
//     let genderEnd = selectGenderEnd( patient.gender)

//     // if ( patient.gender === 'M') {
//     //     genderEnd = 'o';
//     // } else if (patient.gender === 'F') {
//     //     genderEnd = 'a';
//     // } else {
//     //     genderEnd = 'e';
//     // }

//     console.log( patient.name + ` remitid${genderEnd} a ` + room ); 
// }

// function selectRoom( patientAge ) {
//     let room = 'pediatría';
//     if ( patientAge >= 18 ) {
//         room = 'medicina general'; 
//     }
//     return room;
// }

// // Crear una función que retorne el genderEnd

// function selectGenderEnd(genderPatient){
//     let genderEnd;
//     if ( genderPatient === 'M') {
//         genderEnd = 'o';
//     } else if ( genderPatient === 'F') {
//         genderEnd = 'a';
//     } else {
//         genderEnd = 'e';
//     }

//     return genderEnd;

// }

// ---------------
// EJERCICIO 09 ( objeto arguments de las funciones )
// ---------------

// const sumaDigitos = sumar(1, 2, 3, 4, 5, 6, 7, 8, 9);

// function sumar() {
//     let suma = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         suma += arguments[i];
//     }
//     console.log(suma)
// }

// console.log( suma )

// Completar la función para que retorne el valor deseado 

// ---------------
// EJERCICIO 10 ( Scope ) Alcance de una variable.
// ---------------
//  let apellido;
// // function alcance(edad) {
//        var nombre; 
// //     if (true) {
       //     nombre
//         var nombre = "Carlos"; //funcion scope.
//         const apellido = "Angulo"; //bloque scope. //sólo existen dentro de las llaves.
//         let genero = "Masculino"; //bloque scope.
//     }
//     console.log(1, edad);
//     console.log(2, nombre);
//     console.log(3, apellido);
//     console.log(4, genero);
// }

// alcance(34);

// ---------------
// EJERCICIO 11 ( hoisting ) Mecanismo en donde js reserva espacio para las variables y funciones. Pone las variables indefinidas pero una funcion es más importante. 
// ---------------
// var a;
// console.log( 1, a );
// // console.log( 2, b );
// console.log( 2, myFunction );

// var a = "Hola"; // No funciona con const ni con let
// function myFunction() { //Se sube la declaración de la variable(var) pero no los valores.
//     return;
// }

// ---------------
// EJERCICIO 12 ( asignación a variables )
// ---------------

// console.log( 1, a );
// console.log( 2, myFunction );

// var a = "Hola"; // No funciona con const ni con let
// var myFunction = function () {
//     return;
// }

// ---------------
// EJERCICIO 13 ( asignación a variables )
// ---------------

// const writeMessage = myFunction;

// function myFunction() {
//     return 'hola mundo';
// }

// console.log( writeMessage );
// console.log( writeMessage() );


// ---------------
// EJERCICIO 14 ( son pasadas por valor )
// ---------------

// let writeMessage = myFunction;//Cuando hay parentesis se ejecuta el código adentro.

// function myFunction() {
//     console.log('hola mundo')
// //     return 7;
// }

// writeMessage = "a";

// console.log( writeMessage );
// // writeMessage();

// ---------------
// EJERCICIO 15 ( callbacks: funciones como parámetro de otras funciones )
// ---------------

// function imprimir( ejecutar, argumento1, argumento2 ) {
//     console.log( ejecutar( argumento1, argumento2 ) );
// }

// function sumar (x, y) {
//     return x + y;
// }

// function multiplicar (x, y) {
//     return x * y;
// }

// // imprimir( sumar, 5, 3);
// // imprimir( multiplicar, 5, 3);

// imprimir( function(x, y) { return y - x }, 5, 3 ); //Será -2


// ---------------
// EJERCICIO 16 ( Funciones Anónimas )
// ---------------

// function (argument) { //Acá es anónima.
//     console.log(argument);
// }

// function fruit(apple) {
//     console.log(apple);
// }

// Uncaught SyntaxError: Function statements require a function name

// ---------------
// EJERCICIO 16 ( asignación a variables )
// ---------------
// Es como el ejercicio 12
// const myFunction = function () {
//     console.log('hola mundo')
// }

// const writeMessage = myFunction;

// console.log( writeMessage );
// console.log( writeMessage() );

// ---------------
// EJERCICIO 16 ( Arrow Functions )
// ---------------

// const traditionalSum = function  ( x , y ) {
//     return x + y; 
// }

// const arrowFunctionSum = (x, y) => { 
//     const sum = x + y;
//     return sum;
// }

// const shortArrowFunctionSum = (x, y) => x + y; //Aquí no hay return pero la sintaxis con flecha tiene que ver.


// console.log( traditionalSum ( 3, 5 ));
// console.log( arrowFunctionSum ( 3, 5 ));
// console.log( shortArrowFunctionSum ( 3, 5 ));

// //Todas daran el mismo resultado, 8

// ---------------
// EJERCICIO 17 ( Funciones anónimas autoejecutables )
// ---------------

// const sequence = [1, 2, 3, 4, 5];

// // sequence.forEach( function(item) {console.log(item)} ); 
// // sequence.forEach( item => console.log(item) );
// // sequence.forEach( console.log );

// sequence((item) => { console.log(item)});

// sequence.forEach((item, index, array) => console.log(item, index, array)) //con el map, filter es lo mismo.


// ---------------
// EJERCICIO 18 ( palabra reservada this )
// ---------------

// Es el objeto que posee el código

// console.log(this);

// // No es una variable, es una palabra reservada, por lo que no se puede reasignar
// this = "Hola mundo";

// function myFunction() {
//     return this;
// }

// console.log( myFunction() );


// ---------------
// EJERCICIO 19 ( funciones como métodos )
// ---------------

// var person = {
//     firstName:"Adriana", //Key and value.
//     lastName: "Maguea",
//     fullName: function () { //No es recomensable arrow function.
//         return this.firstName + " " + this.lastName; 
//     }
// }

// person.fullName();
// // console.log(person.fullName());

// ---------------
// EJERCICIO 20 ( closure )
// ---------------

// let name = "Carlos";

// function getFullName( surename ) {
//     let middleName = "Alberto";
//     function innerFunction() {
//         const fullName = name + " " + middleName + " " + surename;
//         console.log( fullName );
//     }
//     innerFunction();
// }

// getFullName("Angulo");

// ---------------
// EJERCICIO 21 ( closure )
// ---------------

// var myObject = {
//     firstName:"Adriana",
//     lastName: "Maguea",
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }

// myObject.fullName();
// }
