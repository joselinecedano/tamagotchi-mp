console.log("Tamagotchi Mini Project")

//link all of my buttons to their variable that i will be using to alter them with 
const dayOrNight = document.querySelector("#gameArea")
const resetBtn = document.querySelector(".resetBtn")
const eatBtn = document.querySelector(".hungry")
const sleepBtn = document.querySelector(".sleepy")
const playBtn = document.querySelector(".bored")
const infoBtn = document.querySelector(".open-instruction")
const closeInfo = document.querySelector(".close-instructions")
// const age = document.querySelector(".value")
// console.log(age.innerHTML)
//set up prompt for user to input their tama name and update it inside of the game!
const mainPrompt = () => {
    let promptName= prompt ("Welcome to the world of Tamagotchi! What would you like to name your new friend?","")
    document.querySelector(".tamagotchiName").innerHTML= promptName;
    return promptName
}

//set up class 
class Tamagotchi{
    constructor(){
        this.name = mainPrompt()
        this.hunger = document.querySelector("#hunger")
        this.sleepiness = document.querySelector("#sleepiness")
        this.boredom = document.querySelector("#boredom")
        this.age = document.querySelector(".value")
    }  //allow player to feed their tamagotchi, play with their tamagotchu, and make their tamagotchi sleep
    // Hunger -3  Sleepiness +2  Boredom +1 //For Feed action
    // Sleepiness -3 Hunger +2 Boredom +1 //Sleep action
    // Bordemon -2 Hunger +3 Sleepiness +1 //Play action 
    //feed tamagotchi function
     feedTama () {
        dayOrNight.setAttribute("class","lightMode")
        if(this.hunger.value >= 0){
        this.hunger.value -=3
        this.sleepiness.value += 2
        this.boredom.value += 1
            } if(this.boredom.value == 10 || this.sleepiness.value == 10 || this.hunger.value == 10){
                alert(`Your little buddy is dead! Do better! Your buddies stats: Hunger = ${this.hunger.value}, Sleepiness = ${this.sleepiness.value}, and Boredom = ${this.boredom.value}.`)
                resetGame()
            }
        }//put tamagotchi to sleep function
     sleepyTama () {
        dayOrNight.setAttribute("class", "darkMode")
        if(this.sleepiness.value >= 0){
            this.sleepiness.value -= 3
            this.hunger.value += 2
            this.boredom.value += 1
            }if(this.hunger.value == 10 || this.boredom.value == 10 || this.sleepiness.value == 10 ){
                alert(`Your little buddy ran away! Do better! Your buddies stats: Hunger = ${this.hunger.value}, Sleepiness = ${this.sleepiness.value}, and Boredom = ${this.boredom.value}.`)
                resetGame()
            }
        }//play with you tamagotchi function
         playTama() {
            dayOrNight.setAttribute("class","lightMode")
            if (this.boredom.value >= 0){
                this.boredom.value -=1
                this.hunger.value += 1
                this.sleepiness.value +=2
            }if(this.hunger.value == 10 || this.sleepiness.value == 10 || this.boredom.value == 10){
                alert(`Your little buddy decided to find a better parent! Do better! Your buddies stats: Hunger = ${this.hunger.value}, Sleepiness = ${this.sleepiness.value}, and Boredom = ${this.boredom.value}.`)
                resetGame()
            }
         }//function to age your tamagotchi up by 1
         ageUp(){
            let tamAge= 1
            let sum = 0
            sum = sum + tamAge 
           
            console.log(sum)
               
         }//reset the stats
        resetStats () {
            this.hunger.value = 1;
            this.sleepiness.value= 1;
            this.boredom.value= 1;
        
            }//reset the game
        resetGame () {
            resetStats()
            mainPrompt()
    }
}
const tamatomo = new Tamagotchi ()
console.log(tamatomo)


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




//EVENT LISTENERS //Later gonna be placed inside of a startGame function and a part of a start button pop up screen maybe
eatBtn.addEventListener("click",function(){tamatomo.feedTama()})

sleepBtn.addEventListener("click", function(){tamatomo.sleepyTama()})

playBtn.addEventListener("click", function(){tamatomo.playTama()})

resetBtn.addEventListener("click", function(){tamatomo.resetGame()})

// let interval = setInterval(function(){tamatomo.ageUp()
//     if (tamatomo.age == 10){
//         clearInterval(interval)
//         console.log(tamatomo)
//  }}, 3000)
 
//tamatomo.ageUp()
//timer for age function
//let tamaInterval = setInterval(ageUp(),3000)
