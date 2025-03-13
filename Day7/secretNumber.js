console.log("Day 07");

function secretNumberGame(){
    console.log("Secret Number Guessing Game");

    const MIN_NUMBER = 1;
    const MAX_NUMBER = 5;

    console.log(`Try to guess a number between ${MIN_NUMBER} and ${MAX_NUMBER}.`);

    const secretNumber = Math.floor(Math.random()* MAX_NUMBER) + 1;

    let attempts = 0;
    let guess = null;

    while (guess !== secretNumber) {
        const userChoicePrompt = prompt("Enter your guess: ");
        guess = parseInt(userChoicePrompt);

        if (isNaN(guess) || guess < MIN_NUMBER || guess > MAX_NUMBER) {
            console.log(`Invalid input! Please enter a number between ${MIN_NUMBER} and ${MAX_NUMBER}.`);
            continue;
        }

        attempts++;

        if (guess < secretNumber) {
            console.log("Too Low! Try again.");
        } else if (guess > secretNumber) {
            console.log("Too High! Try again.");
        } else {
            console.log(`🎉 Congrats! You guessed the number in ${attempts} attempts.`);
            break;
        }
    }

    
    const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
    const playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : 
    "no";

    if (playAgain === "yes"){
        secretNumberGame();
    }else{
        console.log("Thank you for playing. See you soon!")
    }
}

secretNumberGame();




    