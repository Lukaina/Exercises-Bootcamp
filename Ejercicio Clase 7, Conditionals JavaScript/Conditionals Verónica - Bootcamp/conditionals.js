// EXERCISE
const number = 22 ;
let result;

if (number === 0) {
    result = 'El número es 0';
    console.log(result);
} else if (number < 0) {
    result = 'El número es negativo';
    console.log(result);
    // Se da esta condición si el valor de la variable es 20
} else if (number + 2 > 13 && number <= 20) {
    result = 'El número más 2 es mayor que 13';
    console.log(result);
} else if (number > 20 && number < 50) {
    result = 'El número es mayor que 20 pero menor que 50';
    console.log(result);
} else {
    result = 'el número no es 123123125';
    console.log(result);
}

// Mostrar el resultado en el ID result
//Acceder al elemento donde quiero mostrar el resultado, o "coger algo de la pantalla (DOM o html)"
const pResult = document.querySelector("#result");
//Definir lo que se va agregar al elemento <p>
const text = document.createTextNode(result);
//Agregar el texto al elemento <p>
pResult.appendChild(text);



