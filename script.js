// Esta forma solo selecciona el boton que tiene ese id

// const button = document.querySelector('#boton-importante');

// button.addEventListener('click', () => {
//     button.textContent = '¡Aplicado!';
//     button.classList.add('is-applied');
//     button.disabled = true;
// });

// Esta forma selecciona todos los botones con la clase button-apply-job

// const buttons = document.querySelectorAll('.button-apply-job');
// querySelectorAll devuelve una NodeList, que es similar a un array
// no importa si está vacío o tiene un solo elemento, siempre devuelve una NodeList
// console.log(buttons);
// vamos a hacer una condición que nos diga si la NodeList tiene al menos un elemento
// if (buttons.length >= 2) {
//     buttons.forEach((button) => {
//         button.addEventListener('click', () => {
//             button.textContent = '¡Aplicado!';
//             button.classList.add('is-applied');
//             button.disabled = true;
//         })
//     });
// };

// if (buttons.length == 0) {
//     console.log('No hay al menos un botón de aplicar trabajo');
// };

// Esta forma ayuda al rendimiento y es dinámica

const jobListingsSection = document.querySelector('.job-listings');

jobListingsSection?.addEventListener('click', function(event) {
    const element = event.target;

    if (element.classList.contains('button-apply-job')) {
        element.textContent = '¡Aplicado!';
        element.classList.add('is-applied');
        element.disabled = true;
    }
});

//* OTROS EVENTOS: input, blur, submit, preventDefault

// Obtener el valor del input de búsqueda
// const searchInput = document.querySelector("#empleos-search-input");

// searchInput.addEventListener('input', () => {
//     console.log(searchInput.value);
// });

// Evento blur: se activa cuando el elemento pierde el foco
// searchInput.addEventListener('blur', () => {
//     console.log("Se pierde el foco cuando ya no estás en el elemento");
// });

// Evento submit: se activa cuando se envía un formulario
// const searchForm = document.querySelector('#empleos-search-form');

// searchForm.addEventListener('submit', (event) => {
//     event.preventDefault(); // Evita que se recargue la página
//     console.log("submit");
// });

// Evento keydown: se activa cuando se presiona una tecla
// document.addEventListener('keydown', (event) => {
//     console.log(`tecla presionada: ${event.key}`);
//     console.log(`esta presionada la tecla shift? ${event.shiftKey}`);
//     console.log(`esta presionada la tecla ctrl? ${event.ctrlKey}`);
//     console.log(`esta presionada la tecla alt? ${event.altKey}`);
// });

//* Obtener la ubicación seleccionada
const filter = document.querySelector('#filter-location');
const message = document.querySelector('#filter-selected-value');

filter.addEventListener('change', () => {
    const selectedValue = filter.value;

    if (selectedValue) {
        message.textContent = `Has seleccionado: ${selectedValue}`;
    } else {
        message.textContent = '';
    }
});