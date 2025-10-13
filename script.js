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
})