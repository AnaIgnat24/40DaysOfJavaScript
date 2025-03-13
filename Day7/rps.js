console.log("Day 07");

function rockPaperScissorsGame(){
    console.log("Getting Started With the Rock, Paper or Scissors Game");

    const userChoicePrompt = prompt("Enter Rock, Paper or Scissors");
    const userChoice = userChoicePrompt.toLowerCase();

    let computerChoice;
    const randomNumber = Math.floor(Math.random()*3)+1;
    

    switch(randomNumber){
        case "1":
         computerChoice = "rock";
        break; 
        case "2":
         computerChoice = "paper";
        break;
        default:
         computerChoice = "scissors";
    }

   console.log("User selected", userChoice);
   console.log("Computer selected", computerChoice);


   switch(true){
      case (userChoice === "rock" && computerChoice === "scissors"):
      case (userChoice === "paper" && computerChoice === "rock"):
      case (userChoice === "scissors" && computerChoice === "paper"):
        console.log("You, the user, win!");
      break;
      case (userChoice === computerChoice):
        console.log("The game is a tie!");
      break;
      case (userChoice === "rock" && computerChoice === "paper"):
      case (userChoice === "paper" && computerChoice === "scissors"):
      case (userChoice === "scissors" && computerChoice === "rock"):
        console.log("The computer wins!");
      break;
      default:
        console.log("Please check the input!");
    }


    /*if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
   ){
     console.log("You, the user, win!")
    }else if (userChoice === computerChoice){
       console.log("The game is a tie!")
    }else if (
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock")
    ){
    }else{
     console.log("Please check the input!")
    }*/

    const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
    const playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : 
    "no";

    if (playAgain === "yes"){
        rockPaperScissorsGame();
    }else{
        console.log("Thank you for playing. See you soon!")
    }
}

rockPaperScissorsGame();