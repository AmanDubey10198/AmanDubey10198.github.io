// different door path
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

// keep a count of closed doors
let numClosedDoors = 3;

//globally declared openDoor for randomly assinging them different door paths
let openDoor1, openDoor2, openDoor3;

// closed Door path to compare with the closed doors
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

// for on going game
let currentlyPlaying = true;

// random assign the robot to a door
let randomChoreDoorGenerator = ()=>{
  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if (choreDoor === 1){
    openDoor1 = spaceDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
  }
  else{
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
}

let isBot = door=>{
  if (door.src === botDoorPath){
    return true;
  }
  return false;
}

// check if the door is clicked
let isClicked = door=>{
  if(door.src === closedDoorPath){
    return false;
  }
  return true;
}

// function when game over
let gameOver = (status)=>{
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  }
  else{
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
}

// decrement the numClosdeDoors 
function playDoor(door){
  numClosedDoors--;
  if (numClosedDoors === 0){
    gameOver('win');
  }
  else if(isBot(door)){
    gameOver();
  }
}

// DOM for door 1
let doorImage1 = document.getElementById('door1');

doorImage1.onclick = ()=>{
  if(currentlyPlaying && !isClicked(doorImage1)){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

// DOM for door 2
let doorImage2 = document.getElementById('door2');

doorImage2.onclick = ()=>{
  if(currentlyPlaying && !isClicked(doorImage2)){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}
// DOM for door 3
let doorImage3 = document.getElementById('door3');

doorImage3.onclick = ()=>{
  if(currentlyPlaying && !isClicked(doorImage3)){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

// DOM for start button
let startButton = document.getElementById('start');

// start round function for resetting the global variables
function startRound(){
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = "Good Luck!";
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

// startbutton onclick reset only after game is over
startButton.onclick = ()=>{
  if (!currentlyPlaying){
  startRound();    
  }
}
startRound();

//randomChoreDoorGenerator();

