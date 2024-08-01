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




getComputerChoice();

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 10);

  let result = ''

  if(computerChoice >= 0 && computerChoice <= 3) {
    console.log("Computer move: rock");
  } else if(computerChoice >= 4 && computerChoice <= 6) {
    console.log("Computer move: paper");
  } else if(computerChoice >= 5 && computerChoice <= 9) {
    console.log("Computer move: scissor");
  }

}

//

getHumanChoice();
function getHumanChoice() {
  let inputMove = prompt("Input your move rock? paper? scissor?");
  const rock = "rock";
  const paper = "paper";
  const scissor = "scissor";


  if(inputMove === rock || inputMove === paper || inputMove === scissor ) {
      console.log("You move:" + " " + inputMove);
  }else {
    console.log("Input valid move")
  }

}