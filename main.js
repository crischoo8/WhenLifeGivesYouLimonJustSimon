// import './style.css'

// make Object containing Audio required
// const sounds = {
//   red: 'https://freesound.org/people/NoiseCollector/sounds/43793',
// }

// access HTML elements
const redButton = document.getElementById('red');
const blueButton = document.getElementById('blue');
const yellowButton = document.getElementById('yellow');
const greenButton = document.getElementById('green');
const gameButtons = document.getElementsByClassName('button');

// function that changes backgroundColor to 'white' when mousedown

const lightOn = function(event) {
  event.target.style.backgroundColor = 'white';
}
const lightOff = function(event) {
  event.target.style.backgroundColor = '';
}

// testing lightOn and lightOff - they work!

// redButton.addEventListener('mousedown', lightOn);
// redButton.addEventListener('mouseup', lightOff);

// combining the functions together, lightOn and lightOff, apply to all game buttons
// for (let i = 0; i < gameButtons.length; i++) {
//   gameButtons[i].addEventListener('mousedown', lightOn);
//   gameButtons[i].addEventListener('mouseup', lightOff);
// }
// write it as a function that refers to the lighting aspect 
const lightWork = function() {
  for (let i = 0; i < gameButtons.length; i++) {
    gameButtons[i].addEventListener('mousedown', lightOn);
    gameButtons[i].addEventListener('mouseup', lightOff);
  }  
}

lightWork();