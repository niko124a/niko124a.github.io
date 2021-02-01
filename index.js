let triesLeft = 3;
let lowerHigher = 'lower';
const correctNumber = Math.floor(Math.random() * 10);
console.log(correctNumber);
const textbox = document.getElementById('inputtext');
const guessButton = document.getElementById('inputbutton');
const descriptionLabel = document.getElementById('description');

function checkForCorrectNumber(guess){
    guess = textbox.value;

    if (triesLeft == 0) {
        descriptionLabel.innerText = `You cannot guess anymore. The correct number is ${correctNumber}`;
        return;
    }
    if (isNaN(guess)) {
        alert('Please insert a valid number.');
        return;
    }

    if (guess < 0 || guess > 10) {
        alert('Please insert a number between 0 and 10');
        return;
    }

    if (guess == correctNumber) {
        descriptionLabel.innerText = `You won! The correct number was ${correctNumber}`;
    }
    else{
        triesLeft--;
        if (guess < correctNumber) {
            descriptionLabel.innerText = `The number is higher than ${guess}, you can guess ${triesLeft} times`;
        }
        else{
            descriptionLabel.innerText = `The number is lower than ${guess}, you can guess ${triesLeft} times`;
        }
    }
}