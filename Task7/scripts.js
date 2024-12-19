// Selecting elements from the DOM
const lowerLimitInput = document.getElementById('lower-limit');
const upperLimitInput = document.getElementById('upper-limit');
const setRangeButton = document.getElementById('set-range');
const instructionText = document.getElementById('instruction');
const guessInput = document.getElementById('guess-input');
const submitGuessButton = document.getElementById('submit-guess');

// Variables to store the game state
let lowerLimit = null;
let upperLimit = null;
let randomNumber = null;
let attempts = 0;

// Function to set the range and generate the random number
setRangeButton.addEventListener('click', () => {
    lowerLimit = parseInt(lowerLimitInput.value);
    upperLimit = parseInt(upperLimitInput.value);

    if (isNaN(lowerLimit) || isNaN(upperLimit) || lowerLimit >= upperLimit) {
        instructionText.textContent = 'Please enter a valid range where the lower limit is less than the upper limit.';
        return;
    }

    // Generate random number within the range
    randomNumber = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
    attempts = 0; // Reset attempts

    // Update UI
    instructionText.textContent = `Range set! Guess a number between ${lowerLimit} and ${upperLimit}.`;
    guessInput.disabled = false;
    submitGuessButton.disabled = false;
});

// Function to handle the guess submission
submitGuessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    
    if (isNaN(userGuess)) {
        instructionText.textContent = 'Please enter a valid number.';
        return;
    }

    attempts++;

    if (userGuess < randomNumber) {
        instructionText.textContent = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        instructionText.textContent = 'Too high! Try again.';
    } else {
        instructionText.textContent = `Congratulations! You guessed it in ${attempts} attempts.`;
        guessInput.disabled = true;
        submitGuessButton.disabled = true;
    }

    // Clear the input field
    guessInput.value = '';
});
