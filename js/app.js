console.log("Tamagotchi Mini Project")

//link all of my buttons to their variable that i will be using to alter them with 
const hungerBar = document.querySelector("#hunger")
const sleepBar = document.querySelector("#sleepiness")
const boredBar = document.querySelector("#boredom")
const dayOrNight = document.querySelector("#gameArea")
const resetBtn = document.querySelector(".resetBtn")
const eatBtn = document.querySelector(".hungry")
const sleepBtn = document.querySelector(".sleepy")
const playBtn = document.querySelector(".bored")
const infoBtn = document.querySelector(".open-instruction")
const closeInfo = document.querySelector(".close-instructions")

//set up prompt for user to input their tama name and update it inside of the game!
const mainPrompt = () => {
    let promptName= prompt ("Welcome to the world of Tamagotchi! What would you like to name your new friend?","")
    document.querySelector(".tamagotchiName").innerHTML= promptName;
    return promptName
}


//set up class for future pets
class Tamagotchi{
    constructor(name, hunger,sleepiness,boredom, age){
        this.name = name = mainPrompt()
        this.hunger = hunger //= hungerBar.value
        this.sleepiness = sleepiness //= sleepBar.value
        this.boredom = boredom //= boredBar.value
        this.age = age
        console.log(this.hunger)
    }  
}
const tamatomo = new Tamagotchi ("",1 ,1 ,1 ,0)
console.log(tamatomo)

// let tama = []
// let ageLevel = 

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
// Hunger -3  Sleepiness +2  Boredom +1 //For Feed action
// Sleepiness -3 Hunger +2 Boredom +1 //Sleep action
// Bordemon -2 Hunger +3 Sleepiness +1 //Play action 
//feed tamagotchi function
    const feedTama = ()=> {
    dayOrNight.setAttribute("class","lightMode")
    if(hungerBar.value >= 0){
    hungerBar.value -=3
    sleepBar.value += 2
    boredBar.value += 1
   } if(boredBar.value == 10 || sleepBar.value == 10 || hungerBar.value == 10){
       alert(`Your little buddy is dead! Do better! Your buddies stats: hunger = ${hungerBar.value}, sleepiness = ${sleepBar.value}, and boredom = ${boredBar.value}.`)
        resetGame()
    }
}
eatBtn.addEventListener("click",feedTama)

//put tamagotchi to sleep function
const sleepyTama = () => {
dayOrNight.setAttribute("class", "darkMode")
if(sleepBar.value >= 0){
    sleepBar.value -= 3
    hungerBar.value += 2
    boredBar.value += 1
    }if(hungerBar.value == 10 || boredBar.value == 10 || sleepBar.value == 10 ){
        alert(`Your little buddy ran away! Do better! Your buddies stats: hunger = ${hungerBar.value}, sleepiness = ${sleepBar.value}, and boredom = ${boredBar.value}.`)
        resetGame()
    }
}
sleepBtn.addEventListener("click", sleepyTama)

//play with tamagotchi function
const playTama = () => {
    dayOrNight.setAttribute("class","lightMode")
    if (boredBar.value >= 0){
        boredBar.value -=1
        hungerBar.value += 1
        sleepBar.value +=2
    }if(hungerBar.value == 10 || sleepBar.value == 10 || boredBar.value == 10){
        alert(`Your little buddy decided to find a better parent! Do better! Your buddies stats: hunger = ${hungerBar.value}, sleepiness = ${sleepBar.value}, and boredom = ${boredBar.value}.`)
        resetGame()
    }
}
playBtn.addEventListener("click", playTama)

//reset the stats
const resetStats = () => {
hungerBar.value = 1;
sleepBar.value= 1;
boredBar.value= 1;
}
//reset the game
const resetGame = () => {
        resetStats()
        mainPrompt()
}
resetBtn.addEventListener("click", resetGame)

