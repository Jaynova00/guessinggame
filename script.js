let secretNumber = Math.ceil(Math.random() * 100);
let guess = Number(prompt('Guess the secret number between 0 and 100'));
let guesses = 1;

while (guess !== secretNumber) {
    if (guess < secretNumber) {
        alert('Pick a bigger number.');
    } else {
        alert('Pick a smaller number.');
    }
    guess = Number(prompt('Guess the secret number between 0 and 100.'));
    guesses++;
}

alert('You guessed it! It took you ' +
            guesses + ' guesses!');








