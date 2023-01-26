console.log("Tamagotchi Mini Project")

//link all of my buttons to their variable that i will be using to alter them with 
const dayOrNight = document.querySelector("#gameArea")
const resetBtn = document.querySelector(".resetBtn")
const eatBtn = document.querySelector(".hungry")
const sleepBtn = document.querySelector(".sleepy")
const playBtn = document.querySelector(".bored")
const infoBtn = document.querySelector(".open-instruction")
const closeInfo = document.querySelector(".close-instructions")
const age = document.querySelector(".value")
// console.log(age.innerHTML)

//set up prompt for user to input their tama name and update it inside of the game!
const mainPrompt = () => {
    let promptAnswer= prompt ("Welcome to the world of Tamagotchi! What would you like to name your new friend?","")
    document.querySelector(".tamagotchiName").innerHTML= promptAnswer;
    return promptAnswer
}
    //allow player to feed their tamagotchi, play with their tamagotchu, and make their tamagotchi sleep
    // Hunger -3  Sleepiness +2  Boredom +1 //For Feed action
    // Sleepiness -3 Hunger +2 Boredom +1 //Sleep action
    // Bordemon -2 Hunger +3 Sleepiness +1 //Play action 

//set up class 
class Tamagotchi{
    constructor() {
        this.name = mainPrompt()
        this.hunger = document.querySelector("#hunger")
        this.sleepiness = document.querySelector("#sleepiness")
        this.boredom = document.querySelector("#boredom")
        this.age = document.querySelector(".value")
        this.image1 = document.querySelector(".first")
        this.image2 = document.querySelector(".second")
        this.image3 = document.querySelector(".third")
    }  
    //feed tamagotchi function
     feedTama () {
        dayOrNight.setAttribute("class","lightMode")
        if(this.hunger.value >= 0){
            this.hunger.value -=3
            this.sleepiness.value += 2
            this.boredom.value += 1
            } if(this.boredom.value == 10 || this.sleepiness.value == 10 || this.hunger.value == 10){
                alert(`Your little buddy is dead! Do better! Your buddies stats: Hunger = ${this.hunger.value}, Sleepiness = ${this.sleepiness.value}, and Boredom = ${this.boredom.value}.`);
               this.resetGame()
            }
        }//put tamagotchi to sleep function
     sleepyTama () {
        dayOrNight.setAttribute("class", "darkMode")
        if(this.sleepiness.value >= 0){
            this.sleepiness.value -= 3
            this.hunger.value += 2
            this.boredom.value += 1
            }if(this.hunger.value == 10 || this.boredom.value == 10 || this.sleepiness.value == 10 ){
                alert(`Your little buddy ran away! Do better! Your buddies stats: Hunger = ${this.hunger.value}, Sleepiness = ${this.sleepiness.value}, and Boredom = ${this.boredom.value}.`);
               this.resetGame()
            }
        }//play with your tamagotchi function
     playTama() {
        dayOrNight.setAttribute("class","lightMode")
        if (this.boredom.value >= 0){
            this.boredom.value -=1
            this.hunger.value += 1
            this.sleepiness.value +=2
            }if(this.hunger.value == 10 || this.sleepiness.value == 10 || this.boredom.value == 10){
                alert(`Your little buddy decided to find a better parent! Do better! Your buddies stats: Hunger = ${this.hunger.value}, Sleepiness = ${this.sleepiness.value}, and Boredom = ${this.boredom.value}.`);
               this.resetGame()
            }
         }//function to age your tamagotchi up by 1
     ageUp() {
        this.age.innerHTML = parseInt(this.age.innerHTML) + 1;
    }
     changeTamaImg(){
        //if age is less than 4 set first image to block and others to none so they dont show up with the first one
        if(this.age.innerHTML < 4){
            this.image1.style.display= "block"
            this.image2.style.display= "none"
            this.image3.style.display= "none"
            //if tamagotchi is older than 5 but younger than/ equal to 8 change to 2nd pic
        }else if(this.age.innerHTML > 5 && this.age.innerHTML <=8){
            this.image2.style.display= "block"
            this.image1.style.display= "none"
            this.image3.style.display= "none"
            //if tamagotchi is older than 9 change to third pic
        }else if(this.age.innerHTML > 9){
            this.image3.style.display = "block"
            this.image2.style.display = "none"
            this.image1.style.display = "none"
            }
        }
    resetStats() {//reset the stats
        this.hunger.value = 1;
        this.sleepiness.value = 1;
        this.boredom.value = 1;
        this.age.innerHTML = 0;
        }//reset the game
    resetGame() {
        this.resetStats();
        mainPrompt();
        }
}
//new instance of our tamagotchi
const tamatomo = new Tamagotchi ()
console.log(tamatomo)

 
//open info button
const openInfo = () => {
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

resetBtn.addEventListener("click", function(){tamatomo.resetGame()


    //timer for age 
let interval = setInterval(function(){
    tamatomo.ageUp()
    tamatomo.changeTamaImg() //picture change set in here
if ((tamatomo.hunger.value == 10)|| (tamatomo.boredom.value == 10)||  (tamatomo.sleepiness.value == 10)){
        clearInterval(interval)
        console.log(tamatomo)
     }
}, 4000) 
})



 

