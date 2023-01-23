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

//set up prompt for user to input their tama name and update it inside of the game!
const mainPrompt = () => {
    let tamaName = prompt ("Welcome to the world of Tamagotchi! What would you like to name your new friend?","")
    document.querySelector(".tamagotchiName").innerHTML= tamaName;

}
//open info button
function openInfo() {
    document.getElementById("info-popup").style.visibility = "visible"
}
infoBtn.addEventListener("click", openInfo)

//close popup info page
const closePopup = () => {
    document.getElementById('info-popup').style.visibility = "hidden";
}
closeInfo.addEventListener("click", closePopup)

//allow player to feed their tamagotchi, play with their tamagotchu, and make their tamagotchi sleep
// Hunger -10  Energy -5  Boredom +10 //For Feed action
// Energy +10 Hunger +10 Boredom +5 //Sleep action
// Bordemon -10 Hunger +15 Energy -15 //Play actio 

//feed tamagotchi function
const feedTama = () => {
    dayOrNight.setAttribute("class","lightMode")
    if(hungerBar.value >= 0){
    hungerBar.value -=10
    energyBar.value -= 5
    boredBar.value += 10
    }else if (boredBar.value == 100){
        alert(`${tamaName} died of boredom!`)
        resetGame()
    }else if (energyBar.value == 100){
        alert(`${tamaName} died from lack of energy!`)
        resetGame()
    }
}
eatBtn.addEventListener("click",feedTama)

//put tamagotchi to sleep function
const sleepyTama = () => {
dayOrNight.setAttribute("class", "darkMode")
if(energyBar.value > 0){
    energyBar.value +=10
    hungerBar.value += 10
    boredBar.value += 10
    }else if(hungerBar.value == 100){
        alert(`${tamaName} died of hunger!`)
        resetGame()
    }else if(boredBar.value == 100){
        alert(`${tamaName} died of boredom!`)
        resetGame()
    }
}
sleepBtn.addEventListener("click", sleepyTama)

//play with tamagotchi function
const playTama = () => {
    dayOrNight.setAttribute("class","lightMode")
    if (boredBar.value >= 0){
        boredBar.value -=10
        hungerBar.value += 10
        energyBar.value -=15
    console.log(energyBar.value)
    } else if (energyBar.value == 0){
        alert(`${tamaName} died from lack of energy!`)
        resetGame()
    }else if (hungerBar.value == 0){
        alert(`${tamaName} died of hunger!`)
        resetGame()
    }
}
playBtn.addEventListener("click", playTama)

//reset the stats
const resetStats = () => {
hungerBar.value = 10;
energyBar.value= 100;
boredBar.value= 20;
}
//reset the game
const resetGame = () => {
    resetStats()
    mainPrompt()
    console.log("Game Reset", "Stats are " +hungerBar.value + ","+ energyBar.value +","+ boredBar.value+ "!")
}
resetBtn.addEventListener("click", resetGame)

