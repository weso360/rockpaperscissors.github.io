let userName = 'Wesley'
let humanUser = userName || 'Human Player';
console.log(`Hi ${humanUser}. Rock, Paper Or Scissors?`);

{}

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb'){
  return userInput
}
else{
  console.log('invalid inputer entered');
}
}


const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
  case 0:
  return 'rock';
  break;
  case 1:
  return 'scissors';
  break;  
  case 2:
  return 'paper';
  break;
  
}
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return 'Game was an tie';
  }
   if(userChoice === 'rock'){
     if(computerChoice === 'paper'){
      return 'Computer Wins! Tryna again?';
    } 
    else{
      return`${humanUser} - You have won!`;
    }
   }
   if(userChoice === 'paper'){
     if(computerChoice === 'scissors'){
       return 'Computer Wins! Tryna again?'
     }
   }
   if(userChoice === 'scissors'){
     if(computerChoice === 'rock'){
       return 'Computer Wins! Tryna again?'
     }
   }
if(userChoice === 'bomb'){
  return `Congratulations ${userName}, You have won!`
}

}

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();

  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);

console.log(determineWinner(userChoice, computerChoice))
};

playGame()



