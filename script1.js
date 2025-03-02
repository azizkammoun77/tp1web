// script.js
document.addEventListener('DOMContentLoaded', () => {
    const difficultySelector = document.getElementById('difficulty');
    const startGameButton = document.getElementById('start-game');
    const gameArea = document.querySelector('.game-area');
    const instructions = document.getElementById('instructions');
    const guessInput = document.getElementById('guess-input');
    const submitGuessButton = document.getElementById('submit-guess');
    const feedback = document.getElementById('feedback');
    const attemptsLeft = document.getElementById('attempts-left');
    const resultArea = document.querySelector('.result');
    const resultMessage = document.getElementById('result-message');
    const playAgainButton = document.getElementById('play-again');

    let targetNumber, min, max, remainingAttempts;

    // Function to generate a random number
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to initialize game parameters
    function initializeGame(difficulty) {
        switch (difficulty) {
            case 'facile':
                min = 1;
                max = 50;
                remainingAttempts = 10;
                break;
            case 'intermédiaire':
                min = 1;
                max = 100;
                remainingAttempts = 7;
                break;
            case 'difficile':
                min = 1;
                max = 200;
                remainingAttempts = 5;
                break;
            default:
                min = 1;
                max = 50;
                remainingAttempts = 10;
        }
        targetNumber = getRandomNumber(min, max);
    }

    // Function to start the game
    function startGame() {
        const difficulty = difficultySelector.value;
        initializeGame(difficulty);

        instructions.textContent = `Guess a number between ${min} and ${max}.`;
        attemptsLeft.textContent = `Attempts left: ${remainingAttempts}`;

        gameArea.classList.remove('hidden');
        resultArea.classList.add('hidden');
        feedback.textContent = '';
        guessInput.value = '';
    }

    // Function to handle guess submission
    function submitGuess() {
        const guess = parseInt(guessInput.value, 10);

        if (isNaN(guess) || guess < min || guess > max) {
            feedback.textContent = `Please enter a valid number between ${min} and ${max}.`;
            return;
        }

        remainingAttempts--;

        if (guess < targetNumber) {
            feedback.textContent = 'Too low!';
        } else if (guess > targetNumber) {
            feedback.textContent = 'Too high!';
        } else {
            feedback.textContent = `Congratulations! You guessed the number ${targetNumber} correctly!`;
            endGame();
            return;
        }

        attemptsLeft.textContent = `Attempts left: ${remainingAttempts}`;

        if (remainingAttempts === 0) {
            feedback.textContent = `Game over! The number was ${targetNumber}.`;
            endGame();
        }
    }

    // Function to end the game
    function endGame() {
        gameArea.classList.add('hidden');
        resultArea.classList.remove('hidden');
        resultMessage.textContent = feedback.textContent;
    }

    // Event listeners
    startGameButton.addEventListener('click', startGame);
    submitGuessButton.addEventListener('click', submitGuess);
    playAgainButton.addEventListener('click', () => {
        resultArea.classList.add('hidden');
        startGame();
    });
});