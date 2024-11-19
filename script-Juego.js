document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guessForm');
    const guessInput = document.getElementById('guess');
    const resultMessage = document.getElementById('resultMessage');
    const randomNumber = Math.floor(Math.random() * 200) + 1;
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const userGuess = parseInt(guessInput.value, 10);

        if (userGuess === randomNumber) {
            resultMessage.innerHTML = `<div class="alert alert-success">¡Felicidades! Adivinaste el número correcto: ${randomNumber}</div>`;
        } else if (userGuess < randomNumber) {
            resultMessage.innerHTML = `<div class="alert alert-warning">Demasiado bajo. ¡Intenta nuevamente!</div>`;
        } else {
            resultMessage.innerHTML = `<div class="alert alert-warning">Demasiado alto. ¡Intenta nuevamente!</div>`;
        }

        guessInput.value = '';
        guessInput.focus();
    });
});
