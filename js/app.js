console.log("Tamagotchi Mini Project")

//link all of my buttons to their variable that i will be using to alter them with 
const hungerBar = document.querySelector("#hunger")
console.log(hungerBar)
const energyBar = document.querySelector("#energy")
console.log(energyBar)
const boredBar = document.querySelector("#boredom")
console.log(boredBar)
const dayOrNight = document.querySelector("#gameArea")
console.log(dayOrNight) 
const resetBtn = document.querySelector(".resetBtn")
console.log(resetBtn)
const eatBtn = document.querySelector(".hungry")
console.log(eatBtn)
const sleepBtn = document.querySelector(".sleepy")
console.log(sleepBtn)
const playBtn = document.querySelector(".bored")
console.log(playBtn)
const infoBtn = document.querySelector(".open-instruction")
console.log(infoBtn)
const closeInfo = document.querySelector(".close-instructions")
console.log(closeInfo)

// startGame(){
    //this will trigger the game to play and make all the buttons work
//     //code here
// }

//set up prompt for user to input their tama name and update it inside of the game!
const tamaName = prompt ("Welcome to the world of Tamagotchi! What would you like to name your new friend?","")
document.querySelector(".tamagotchiName").innerHTML= tamaName;

 


