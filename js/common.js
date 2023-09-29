function logText(text) {
    console.log(text);
}

function firstFunc(event) {
    const buttonText = event.target.innerText;
    logText(`First func for ${buttonText}`);
    // Видаляємо обробник події першої кнопки та додаємо для другої кнопки
    event.target.removeEventListener('click', firstFunc);
    event.target.addEventListener('click', secondFunc);
}

function secondFunc(event) {
    const buttonText = event.target.innerText;
    logText(`Second func for ${buttonText}`);
    event.target.removeEventListener('click', secondFunc);
    event.target.addEventListener('click', lastFunc);
}

function lastFunc(event) {
    const buttonText = event.target.innerText;
    logText(`The last func for ${buttonText}`);
}

const buttons = document.querySelectorAll('button[data-btn="action"]');
buttons.forEach(button => {
    button.addEventListener('click', firstFunc);
});