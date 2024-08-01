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

function playRound() {
  const computerMove = getComputerChoice();
  const humanMove = getHumanChoice();

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
      score.computerScore++}
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

    console.log(`${result}, Score: human: ${score.humanScore} computer: ${score.computerScore}`);

    const playAgain = confirm("Play again?");
    if(playAgain === true){
      playRound();
    }else {
      console.log("Thank you for playing");
    }
    
}
playRound();

/* function playRound(humanMove, computerMove){
  if(humanMove === rock && computerMove === rock){
    console.log("Tie")
  }else if(humanMove === rock && computerMove === paper){
    console.log("Computer Win");
  }else if(humanMove === rock && computerMove === scissor){
    console.log("Human Win");
  }
}
const humanMove = getHumanChoice();
const computerMove = getComputerChoice();
playRound(humanMove, computerMove); */



function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 10);

  let computerMove = "";

  if(computerChoice >= 0 && computerChoice <= 3) {
    console.log("Computer move:" + " " + rock);
    computerMove = rock;
  } else if(computerChoice >= 4 && computerChoice <= 6) {
    console.log("Computer move:" + " " + paper);
    computerMove = paper;
  } else if(computerChoice >= 5 && computerChoice <= 9) {
    console.log("Computer move:" + " " + scissor);
   computerMove = scissor;
  }

  return computerMove;

}


function getHumanChoice() {
  let inputMove = prompt("Input your move rock? paper? scissor?");
  let humanMove = "";

  if(inputMove === rock || inputMove === paper || inputMove === scissor ) {
      console.log("Your move:" + " " + inputMove);
      humanMove = inputMove;
  }else {
    console.log("Input valid move")
  }
  return humanMove
}

