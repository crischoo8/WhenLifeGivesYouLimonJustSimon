// import './style.css'

// make Object containing Audio required
// const sounds = {
//   red: 'https://freesound.org/people/NoiseCollector/sounds/43793',
// }

// access HTML elements/ define them here!
const redButton = document.getElementById('red');
const blueButton = document.getElementById('blue');
const yellowButton = document.getElementById('yellow');
const greenButton = document.getElementById('green');
const gameButtons = document.getElementsByClassName('button');

// define variables here!

// define functions here! 

// writing a function that toggles the color of a particular button that's chosen
// chatgpt ref: javascript toggle color of button automatically

// function that changes backgroundColor to 'white' when mousedown

const lightOn = function(event) {
  event.target.style.backgroundColor = 'white';
}
const lightOff = function(event) {
  event.target.style.backgroundColor = '';
}
// write function to click button automatically
// referenced: https://www.geeksforgeeks.org/how-to-simulate-a-click-with-javascript/
// const clickButton = function() {
  

// testing lightOn and lightOff - they work!

// redButton.addEventListener('mousedown', lightOn);
// redButton.addEventListener('mouseup', lightOff);

// combining the functions together, lightOn and lightOff, apply to all game buttons
// for (let i = 0; i < gameButtons.length; i++) {
//   gameButtons[i].addEventListener('mousedown', lightOn);
//   gameButtons[i].addEventListener('mouseup', lightOff);
// }

// define funcions here / functions that reference other functions here!
// write it as a function that refers to the lighting aspect 
const userLightWork = function() {
  for (let i = 0; i < gameButtons.length; i++) {
    gameButtons[i].addEventListener('mousedown', lightOn);
    gameButtons[i].addEventListener('mouseup', lightOff);
  }  
}
// writing a function that toggles the color of a particular button that's chosen
// chatgpt ref: javascript toggle color of button automatically
const changeColor = function(assignedButt) {
  // const colorOption = assigned.id;
  const colors = [assignedButt.id, 'white'];
  console.log(assignedButt.id);
  let currentColorIndex = 0;
  // console.log(assigned);

  const toggleColors = function() {
    // console.log(assigned)
    assignedButt.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  }
  const interval = setInterval(toggleColors, 150);
  setTimeout(() => {
    clearInterval(interval);
  }, 450)
}

// const intervalGame = setInterval(changeColor, 500);
//   setTimeout(() => {
//     clearInterval(intervalGame);
//   }, 3000)

// randomise a sequence! (and eventually work your way to 3 rounds of the game/sequences)
// const randomOrder = function() {
//   const emptyArray = []
//  const randomNaur = Math.floor(Math.random()*4)
//  console.log(randomNaur)
//  console.log(gameButtons[randomNaur])
// console.log(gameButtons[randomNaur].innerHTML)
// emptyArray.push(gameButtons[randomNaur])
// console.log(emptyArray)
// }

// rewrite the randomise function
let currentRound = 1;
let sequence = [];
let checkingSequence = [];
const randomOrder = function(round) {
  for (let i=0; i < round; i++) {
    let randomNaur = Math.floor(Math.random()*4);
    // console.log(randomNaur)
    sequence.push(randomNaur);
    checkingSequence.push(gameButtons[randomNaur])
    // shld i put the color change function here?
  }
return sequence;
return checkingSequence;
}


// write function to accept user input and push into an array for comparison
// rewrite this function....
// let playerClicked = []
// const gameElements = document.querySelectorAll('.button')
// gameElements.forEach(function(element) {
//   element.addEventListener('click', function(event) {
//     const clickedElement = event.target;
//     playerClicked.push(clickedElement)
//     console.log("clicked", clickedElement);
//     console.log("playerclicked", playerClicked);
    
//   })
// })
// let playerClicked = []
const playerInput = function() {
  let playerClicked = []
  const gameElements = document.querySelectorAll('.button')
gameElements.forEach(function(element) {
  element.addEventListener('click', function(event) {
    const clickedElement = event.target;
    playerClicked.push(clickedElement)
    console.log("clicked", clickedElement);
    console.log("playerclicked", playerClicked);
  }) 
}) 
}
// console.log("playerclicked", playerClicked);



// original gameSequence
// const gameSequence = function(array) {
//   for (let i=0; i<array.length; i++) {
//     const gameButtonIndex = array[i];
//     changeColor(gameButtons[gameButtonIndex])
//   }
//   }

// gameSequenceWDelay
 const gameSequenceWDelay = function(array, delay) {
  for (let i=0; i<array.length; i++) {
        setTimeout(function() {
          const gameButtonIndex = array[i];
        changeColor(gameButtons[gameButtonIndex])
        }, i*delay)
      }
  };
  const delayMilliseconds = 2000
// 3rd try for gameSequence
// const gameSequence2 = function(array,delay) {
//   setTimeout(function() {
//     for (let i=0; i<array.length; i++) {
//           const gameButtonIndex = array[i];
//           changeColor(gameButtons[gameButtonIndex])
//         }
//   }, delay)
// }

  
 

    // console.log(gameButtons[i])
    // need a PAUSE/LAG between the changing of colors !


  

  // create playAgain()/playGame() function 
// e.g. 
// first line: randomOrder()
// second line: gameSequenceWDelay()

// const playGame = function() {
//   randomOrder(currentRound);
//   gameSequenceWDelay(sequence, delayMilliseconds);
//   // console.log(sequence);
// }

// trial game function. is this the function to run for each new round ?
// const trialGame = function() {
//   randomOrder(currentRound);
//   gameSequenceWDelay(sequence, delayMilliseconds);
//   let playerClicked = []
//   const gameElements = document.querySelectorAll('.button')
// gameElements.forEach(function(element) {
//   element.addEventListener('click', function(event) {
//     const clickedElement = event.target;
//     playerClicked.push(clickedElement)
//     console.log("clicked", clickedElement);
//     console.log("playerclicked", playerClicked);
//   console.log(checkingSequence[0])
//   console.log(playerClicked[0])
//   // console.log(checkingSequence[0] === playerClicked[0])
//   // console.log(CompUserSame(checkingSequence, playerClicked));
//   if (CompUserSame(checkingSequence, playerClicked)) {
//     currentRound +=1
//   } 
//   // what to put as an else function.....
//   console.log(currentRound)
//   // if (checkingSequence.id === playerClicked.id) {
//   //   currentRound += 1
//   //   console.log(currentRound)
//   // } else { 
//   //   return}
//   // console.log(playerClicked)
//   })
// })
// }
let playerClicked = [];
const gameRound = function() {
  randomOrder(currentRound);
  gameSequenceWDelay(sequence, delayMilliseconds);
  // let playerClicked = []
  const gameElements = document.querySelectorAll('.button')
gameElements.forEach(function(element) {
  element.addEventListener('click', function(event) {
    const clickedElement = event.target;
    playerClicked.push(clickedElement)
    console.log("clicked", clickedElement);
    console.log("playerclicked", playerClicked);
  console.log(checkingSequence[0])
  console.log(playerClicked[0])
})
})
}
//  function to check conditional 
const CompUserSame = function(compInput, userInput) {
  if (compInput.length !== userInput.length) {
    return false;
  }
  for (let i=0; i < compInput.length; i++) {
    if (compInput[i] !== userInput[i]) {
      return false;
    }
  }
  return true;
}
// try to make things work....review all the functions u built
const letsPlay = function() {
  gameRound();
  if  (CompUserSame(checkingSequence, playerClicked)) {
        currentRound +=1
        gameRound()
      } 
  else {
    gameRound()
  }
}
// testing
// letsPlay();
// trialGame();
// console.log(checkingSequence);
// console.log(playerClicked)
// console.log(checkingSequence === playerClicked)
// console.log(playerClicked)
// randomOrder(currentRound)
// console.log(sequence)
// gameSequenceWDelay(sequence, delayMilliseconds)

// gameSequence2(sequence, delayMilliseconds)

// gameSequence(sequence)

// run functions here 
userLightWork();
// randomOrder(currentRound)
// console.log(sequence)
// gameSequenceWDelay(sequence, delayMilliseconds)


// console.log(typeof redButton.id)
// console.log(colors);

// this works?!
// changeColor(gameButtons[randomNaur]);


// changeColor(blueButton);
// changeColor(yellowButton);
// changeColor(greenButton);
// console.log(gameButtons[0].id)
// console.log(gameButtons[1])
// console.log(gameButtons[2])
// console.log(gameButtons[3])
// randomOrder()