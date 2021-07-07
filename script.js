const computerPlay = () => {
  const moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * moves.length)];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You Lose! Paper beats Rock";
    } else if (computerSelection === "scissors") {
      return "You Win! Rock beats Scissors";
    } else {
      return "It's a draw!";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "paper") {
      return "You Win! Scissors beat paper";
    } else {
      return "It's a draw!";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "You Lose! Scissors beat Paper";
    } else if (computerSelection === "rock") {
      return "You Win! Paper beats Rock";
    } else {
      return "It's a draw!";
    }
  }
};

const buttons = document.querySelectorAll("button");

const resultsDiv = document.querySelector("#results");
const choicesDiv = document.querySelector("#choices");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    game(button.id);
  });
});

let playerCounter = 0;
let computerCounter = 0;

const game = (chosen) => {
  const computerSel = computerPlay();
  const playerSel = chosen;
  console.log(playerSel);
  console.log(computerSel);
  let result = playRound(playerSel, computerSel);
  if (result[4] === "L") {
    computerCounter += 1;
    resultsDiv.innerHTML = `<p style='color:red;'>Computer chose ${computerSel}. You lose!</p>Current score: ${playerCounter} to ${computerCounter}`;
    resultsDiv.style.cssText = "display: block";
    choicesDiv.innerHTML = `<img id="lose" src="images/${playerSel}.png">` + `<img id="win" src="images/${computerSel}.png">`
  } else if (result[4] === "W") {
    playerCounter += 1;
    resultsDiv.innerHTML = `<p style='color:green;'>Computer chose ${computerSel}. You win!</p>Current score: ${playerCounter} to ${computerCounter}`;
    resultsDiv.style.cssText = "display: block";
    choicesDiv.innerHTML = `<img id="win" src="images/${playerSel}.png">` + `<img id="lose" src="images/${computerSel}.png">`
  } else {
    resultsDiv.innerHTML = `<p style='color: blue;'>Computer chose ${computerSel}. It's a draw!</p>Current score: ${playerCounter} to ${computerCounter}`;
    resultsDiv.style.cssText = "display: block";
    choicesDiv.innerHTML = `<img id="draw" src="images/${playerSel}.png">` + `<img id="draw" src="images/${computerSel}.png">`
  }

  console.log(result);
  console.log(playerCounter, computerCounter);

  // if (playerCounter > computerCounter) {
  //     console.log("You win! The score is " + playerCounter + " to " + computerCounter)
  // } else if (playerCounter < computerCounter) {
  //     console.log("You lose! The score is " + playerCounter + " to " + computerCounter)
  // } else {
  //     console.log("It's a draw! The score is " + playerCounter + " to " + computerCounter)
  // }
};
