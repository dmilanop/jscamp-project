const button = document.querySelector('#boton-importante');

button.addEventListener('click', () => {
    button.textContent = '¡Aplicado!';
    button.style.backgroundColor = 'green';
    button.disabled = true;
});