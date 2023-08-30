// import './style.css'

// make Object containing Audio required
// const sounds = {
//   red: 'https://freesound.org/people/NoiseCollector/sounds/43793',
// }

// access HTML elements/ define them here!
const startButton = document.getElementById('start');
const clickables = document.getElementsByClassName('button');


let isPlaying = false;
let currentRound = 0;
let sequence = [];
let checkingSequence = [];
let playerClicked = [];

const lightOn = function(event) {
  event.target.style.backgroundColor = 'white';
}
const lightOff = function(event) {
  event.target.style.backgroundColor = '';
}


// define funcions here / functions that reference other functions here!
// write it as a function that refers to the lighting aspect 
const userLightWork = function() {
  for (let i = 0; i < clickables.length; i++) {
    clickables[i].addEventListener('mousedown', lightOn);
    clickables[i].addEventListener('mouseup', lightOff);
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


// part 1 of playGame()

const randomOrder = function(round) {
  for (let i=0; i < round; i++) {
    let randomNaur = Math.floor(Math.random()*4);
    sequence.push(randomNaur);
    checkingSequence.push(clickables[randomNaur])
  }
return sequence;
return checkingSequence;
}


// gameSequenceWDelay, plays the sequence with an interval between each key of a particular sequence
// part 2 of playGame()
const delayMilliseconds = 2000
 const gameSequenceWDelay = function(array, delay) {
  for (let i=0; i<array.length; i++) {
        setTimeout(function() {
          const gameButtonIndex = array[i];
        changeColor(clickables[gameButtonIndex])
        }, i*delay)
      }
  };

const toggleIsPlaying = function() {
   isPlaying = true;
}
const toggleTimeout = setTimeout(toggleIsPlaying, 2000);
const stopToggle = function() {
  clearTimeout(toggleTimeout);
}
  // function to initiate/flash a random sequence
  const playGame = function() {
    randomOrder(currentRound);
    gameSequenceWDelay(sequence, delayMilliseconds);
    // do i need to set timeout before toggling isPlaying === true?
    isPlaying = true;
    // toggleTimeout;
    // stopToggle();

  }
  


//  function to check conditional 





startButton.addEventListener('click', function(e) {
  currentRound = 1;
  startButton.innerHTML = currentRound;
  playGame();


})

  
  



for (let i=0; i<clickables.length; i++) {
    clickables[i].addEventListener('click', function(event) {
      const clickedElement = event.target;
      if (isPlaying === false) {
        console.log('haha')
        return;
      } 
      
      if (isPlaying === true) {
        console.log('hi');
        playerClicked.push(clickedElement);
      if (playerClicked[playerClicked.length - 1] !== checkingSequence[playerClicked.length - 1]) {
        // game over
        currentRound = 1 
        isPlaying = false;
        playerClicked = [];
        checkingSequence = [];
        sequence = [];
        playGame();
        startButton.innerHTML = 1;
        return 
      }
      if (playerClicked.length === checkingSequence.length) {
        // round passed
        currentRound += 1;
        isPlaying = false;
        playerClicked = [];
        checkingSequence = [];
        sequence = [];
        playGame();
        startButton.innerHTML = currentRound;
        return;

      }
    }
    })
  }





userLightWork();