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
const changeColor = function(assigned) {
  const colors = [assigned.id, 'white'];
  // console.log(assigned.id);
  let currentColorIndex = 0;
  // console.log(assigned);

  const toggleColors = function() {
    // console.log(assigned)
    assigned.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  }
  const interval = setInterval(toggleColors, 150);
  setTimeout(() => {
    clearInterval(interval);
  }, 500)
}

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
let roundCounter = 3;
let seqArray = [];
const randomOrder2 = function(roundCounter) {
  for (let i=0; i < roundCounter; i++) {
    let randomNaur = Math.floor(Math.random()*4);
    // console.log(randomNaur)
    seqArray.push(randomNaur);
    // shld i put the color change function here?
  }
return seqArray;
}


const gameSequence = function(array) {
  for (let i=0; i < array.length; i++) {
    // console.log(gameButtons[i])
    // need a PAUSE/LAG between the changing of colors !
    changeColor(gameButtons[i]);
  }
}
// testing

// randomOrder2(roundCounter);
// console.log(seqArray)
// gameSequence(seqArray)

// run functions here 
userLightWork();
// console.log(typeof redButton.id)
// console.log(colors);

// this works?!
// changeColor(gameButtons[randomNaur]);


// changeColor(blueButton);
// changeColor(yellowButton);
// changeColor(greenButton);
// console.log(gameButtons[0])
// console.log(gameButtons[1])
// console.log(gameButtons[2])
// console.log(gameButtons[3])
// randomOrder()