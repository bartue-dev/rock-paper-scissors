// get computer choice
// get human choice
// displays score and
// displays winner after winning 5 rounds


// divide the result of random number into 3 
// using the result of random number the computer could choose random move using random numbers
// if random number === 1 or 2 or 3 then it will return rock
// if random number === 4 or 5 or 6 then it will return paper
// if random number === 7 or 8 or 9 then it will return scissor

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 10);
  console.log(computerChoice);

  let result = ''

  if(computerChoice >= 0 && computerChoice <= 3) {
    console.log("rock");
  } else if(computerChoice >= 4 && computerChoice <= 6) {
    console.log("paper");
  } else if(computerChoice >= 5 && computerChoice <= 9) {
    console.log("scissor");
  }

}
getComputerChoice();