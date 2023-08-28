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
const changeColor = function() {
  const colors = [redButton.id, 'white'];
  let currentColorIndex = 0;

  const toggleColors = function() {
    redButton.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  }
  const interval = setInterval(toggleColors, 150);
  setTimeout(() => {
    clearInterval(interval);
  }, 500)
}
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





// run functions here 
userLightWork();
console.log(typeof redButton.id)
// console.log(colors);
// changeColor()