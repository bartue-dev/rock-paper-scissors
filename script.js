// get computer choice
  // divide the result of random number into 3 
  // using the result of random number the computer could choose random move using random numbers
  // if random number === 1 or 2 or 3 then it will return rock
  // if random number === 4 or 5 or 6 then it will return paper
  // if random number === 7 or 8 or 9 then it will return scissor
// get human choice
  //use prompt to get the human choice
  //if input value is not equal to any of the move (rock,paper,scissors) console invalid message
  //if input value is equal to rock, paper or scissors return the value
// displays score and
// displays winner after winning 5 rounds
  //if humanChoice equals to rock and computerChoice is equal to paper return computer win
    //computerScore increment
  //if humanChoice equals to rock and computerChoice is equal to scissor return human win
    //humanScore increment
  //if humanChoice equals to rock and computerChoice is equal to rock return Tie
    // score remains

  //if humanChoice equals to paper and computerChoice is equal to paper return Tie
    //score remains
  //if humanChoice equals to paper and computerChoice is equal to scissor return computer win
    //computerScore increment
  //if humanChoice equals to paper and computerChoice is equal to rock return human win
    //humanScore increment

  //if humanChoice equals to scissor and computerChoice is equal to paper return human win
    //humanScore increment
  //if humanChoice equals to scissor and computerChoice is equal to scissor return Tie
    //score remains
  //if humanChoice equals to scissor and computerChoice is equal to rock return computer win 
    //computerScore increment
const rock = "rock";
const paper = "paper";
const scissor = "scissor";

let score = {
  humanScore: 0,
  computerScore: 0
}

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissor = document.querySelector(".scissor");
const playerMove = document.querySelector(".player-move")

btnRock.addEventListener("click", () => {
  playRound("rock");
});

btnPaper.addEventListener("click", () => {
  playRound("paper");
});

btnScissor.addEventListener("click", () => {
  playRound("scissor");
})


function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 10);

  let computerMove = "";

  if(computerChoice >= 0 && computerChoice <= 3) {
    computerMove = rock;
  } else if(computerChoice >= 4 && computerChoice <= 6) {
    computerMove = paper;
  } else if(computerChoice >= 5 && computerChoice <= 9) {
   computerMove = scissor;
  }

  return computerMove;

}

function playRound(humanMove) {
  const computerMove = getComputerChoice();

  let result = ''

  if(humanMove === rock && computerMove === rock){
    result = "Tie";
  }else if(humanMove === rock && computerMove === paper){
    result = "Computer Win";
    score.computerScore++
  }else if(humanMove === rock && computerMove === scissor){
    result = "Human Win";
    score.humanScore++
  }

  if(humanMove === paper){
    if(computerMove === paper){
      result = "Tie";
    }else if(computerMove === rock){
      result = "Human Win";
      score.computerScore++
    }else if(computerMove === scissor){
      result = "Computer Win";
      score.computerScore++
    }
    }

  if(humanMove === scissor){
    if(computerMove === scissor){
      result = "Tie";
    }if(computerMove === paper){
      result = "Human win";
      score.computerScore++;
    }if(computerMove === rock){
      result = "Computer Win";
      score.computerScore++
    }
  }

  document.querySelector(".moves").textContent = `${humanMove} vs ${computerMove}`
  document.querySelector(".stats").textContent = `Player score: ${score.humanScore} | Computer score: ${score.computerScore}`

  if(score.humanScore === 5 || score.computerScore === 5){
    /* document.querySelector(".moves").textContent = ""
    document.querySelector(".stats").textContent = "" */
    score.humanScore = 0;
    score.computerScore = 0;

    document.querySelector(".winner").textContent = result
  }



  console.log(`${humanMove} vs ${computerMove} \n${result}`);

}

