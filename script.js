const computerPlay = () => {
  const moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * moves.length)];
};


const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You Lose! Paper beats Rock";
    } else if (computerSelection === "scissors") {
        return "You Win! Rock beats Scissors"
    } else {
        return "It's a draw!"
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
        return "You Lose! Rock beats Scissors"
    } else if (computerSelection === "paper") {
        return "You Win! Scissors beat paper"
    } else {
        return "It's a draw!"
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
        return "You Lose! Scissors beat Paper"
    } else if (computerSelection === "rock") {
        return "You Win! Paper beats Rock"
    } else {
        return "It's a draw!"
    }
  } 
};


const game = () => {
    let playerCounter = 0;
    let computerCounter = 0;
    for (let i = 0; i < 5; i++) {
        const computerSel = computerPlay();
        const playerSel = prompt("podaj swój ruch: ").toLowerCase();
        let result = playRound(playerSel, computerSel);
        if (result[4] === "L") {
            computerCounter += 1;
        } else if (result[4] === "W") {
            playerCounter += 1;
        } 
        
        console.log(result)
        console.log(playerCounter, computerCounter)
    }
    if (playerCounter > computerCounter) {
        console.log("You win! The score is " + playerCounter + " to " + computerCounter)
    } else if (playerCounter < computerCounter) {
        console.log("You lose! The score is " + playerCounter + " to " + computerCounter)
    }else {
        console.log("It's a draw! The score is " + playerCounter + " to " + computerCounter)
    }
}

game()
