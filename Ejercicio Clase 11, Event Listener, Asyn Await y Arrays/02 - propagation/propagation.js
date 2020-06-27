// Events - targets, bubbling, propagation and capture
//PASO 1: Seleccionar el elemento:
const superPowerButtons = document.querySelectorAll('button.enable'); // Botones con la clase "enable"
console.log(superPowerButtons);

//PASO 2: Poner a escuchar el elemento.
// superPowerButtons.addEventListener('click', function(){//Le paso el evento y la función.
//     //PASO 3: Le paso algo:
//     console.log('blabla');
// });

function handleSuperPowerButtonClick(event) { //Callback sólo recibe un argumento.
    // console.log(event.target.dataset.heart);//dir trae los valores de ese elemento.
    // console.log(event.target, currentTarget);
    // console.log(event.target);//Trae la etiqueta Strong.
    // console.log(event.currentTarget);//Trae el botón como tal.
    // console.log(event.target.textContent);
    console.log('Superpoder Activado! 👊');
    // event.stopPropagation();

    // const power = event.target.textContent;
    // console.log('Superpoder ${power} Activado! 👊');
}

//Nodelist: Elementos del DOM. Aparecé en consola  el _proto_ y no está EventListener pero sí forEach.
superPowerButtons.forEach(function(superPowerButtons){
    console.log(superPowerButtons); //Imprimer cada uno de los elementos dados por el forEach.
superPowerButtons.addEventListener('click', handleSuperPowerButtonClick); //evento y la función callback.
});

// //Arrow.
// superPowerButtons.forEach(superPowerButtons => {
// superPowerButtons.removeEventListener('click', handleSuperPowerButtonClick);
// });


//Bubbling:
// window.addEventListener('click', function(event){
    // console.log('CLICK EN WINDOW');
//si no se quiere que ese efecto propagación pase:
    // event.stopPropagation();
// });

// //EJERCICIO!!!

const image = document.querySelector('.image img');

image.addEventListener('mousemove', function(event) {
    image.style.height = '236px';
    console.log(event.currentTarget);
});

image.addEventListener('mouseleave', function(event) {
    image.style.height = '160px';
    console.log(event.currentTarget)
});

image.addEventListener('mouseenter', function(event) {
    window.open('https://www.youtube.com/watch?v=u1WKUDJVGhA', '_blank');
    console.log(event.currentTarget);
    console.log('Event video');
});






