let player = {
    name: "Mr Pandit",
    chips: 500
}

let cards = []
let sum = 0;
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEL = document.getElementById("message-el")
//let sumEL = document.querySelector("#sum-el")
let sumEL = document.querySelector(".sum-el")
let cardEL = document.getElementById("cards-el")
let palyerEL = document.getElementById("player-el")

//Render the player's name and chips in playerEL
palyerEL.textContent = player.name + ": $" + player.chips


// 1. Create a function, getRandomCard(), that retun no 5
function getRandomCard(){
    let randomCardNo = Math.floor(Math.random()*13) + 1
     if(randomCardNo > 10){
         return 10
     } else if(randomCardNo === 1){
         return 11
     }else{
         return randomCardNo
     }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    console.log("Game Started")
    cardEL.textContent ="Cards: "
    sumEL.textContent = "Sum: " + sum
    // Create a for loop that renders out all cards insted of just two
    for(let i = 0; i < cards.length; i++){
        cardEL.textContent += cards[i] + " - " 
    }

    if(sum < 21){
        message = ("Do you want to draw a new card?")
        
    } else if(sum === 21){
        message = ("Wohoo! you' ve got BlackJack...!")
        hasBlackJack = true
    } else{
        message = ("You are out from the game")
        isAlive = false
    }
    //Display the message in the messageEL
    messageEL.textContent = message  
}

function newCard(){
// only allow the player to get a new card if he/she Is alive and doest NOT have blackjack
    if(isAlive && !hasBlackJack){
        let card = getRandomCard()
        sum = sum + card
        cards.push(card)
        console.log(cards)
        renderGame()
    }

    
}

