const getRandomInt = (max) => Math.floor(Math.random() * max);

const getComputerChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[getRandomInt(choices.length)];
};

const getHumanChoice = () => {
  let humanChoice;
  do {
    humanChoice = prompt("Please insert rock, paper or scissors");
    humanChoice = humanChoice.toLowerCase();
  } while (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  );

  return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
};

let humanScore = 0;
let computerScore = 0;

const playRound = () => {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  if (humanChoice == computerChoice) {
    console.log(
      `Draw, the computer choose ${computerChoice} and you choose ${humanChoice}`
    );
    humanScore++;
    computerScore++;
  } else if (
    (humanChoice == "Scissors" && computerChoice == "Rock") ||
    (humanChoice == "Rock" && computerChoice == "Paper") ||
    (humanChoice == "Paper" && computerChoice == "Scissors")
  ) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  }
};

for (let i = 0; i < 5; i++) {
  playRound();
}

if (humanScore > computerScore) {
  console.log(
    `Congratulation! You are the winner, the final score is ${humanScore}:${computerScore}`
  );
} else if (humanScore < computerScore) {
  console.log(
    `Oh no! Computer are the winner, the final score is ${humanScore}:${computerScore}`
  );
} else {
  console.log(
    `This is a draw! The final score is ${humanScore}:${computerScore}`
  );
}
