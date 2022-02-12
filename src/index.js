let player1Turn = true
let player1Winner = true
let player2Score = 0
let player1Score = 0
let player1Rolls = 0
let player2Rolls = 0

const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const player1Die = document.getElementById("player1Dice")
const player2Die = document.getElementById("player2Dice")
const rollButton = document.getElementById("rollBtn")
const resetButton = document.getElementById("resetBtn")
const message = document.getElementById("message")

console.log(message)

rollButton.addEventListener("click", function(){
    let rollNum = rollDice();
    if (player1Turn){
        player1Rolls += 1
        console.log(player1Rolls + ": Player 1 rolled " + rollNum)
        message.innerHTML = "Player 1 Turn"

        player1Die.innerHTML = rollNum

        player1Score = player1Score + rollNum
        player1Die.classList.add("active")
        player2Die.classList.remove("active")
        player1Scoreboard.innerHTML = player1Score
        
        
        if (player1Score>=20 || player2Score>=20){
            message.innerHTML ="😯 Player 2 last roll"
            if (player1Rolls === player2Rolls){
                if (player1Score > player2Score){
                    playerWin(player1Score)}
                
                else if (player2Score > player1Score){
                    player1Winner = false,
                    playerWin(player2Score)
                }
                else {
                    message.innerHTML = "Tie! Rock, paper scissors decides! 🪨 📃 ✂️"
                }}
            }

        player1Turn = !player1Turn

    }
    else{
        player2Rolls += 1
        console.log(player2Rolls + ": Player 2 rolled " + rollNum)
        message.innerHTML = "Player 2 Turn"
        player2Die.innerHTML = rollNum

        player2Die.classList.add("active")
        player1Die.classList.remove("active")
        player2Score = player2Score + rollNum
        player2Scoreboard.innerHTML = player2Score
        
        
        if (player2Score >= 20 || player1Score >= 20){
            if (player1Score > player2Score){
                playerWin(player1Score)}
            
            else if (player2Score > player1Score){
                player1Winner = false,
                playerWin(player2Score)
            }
            else {
                message.innerHTML = "💯 Tie! Play again!"
                rollButton.style.display = "none"
                resetButton.style.display = "block"
            }}
    
        player1Turn = !player1Turn

    }

})

resetButton.addEventListener("click", function(){
    player1Die.innerHTML = "0"
    player1Score = 0
    player1Scoreboard.innerHTML = "0"

    player2Die.innerHTML = "0"
    player2Score = 0
    player2Scoreboard.innerHTML = "0"

    message.innerHTML = "Player 1 Turn"
    player1Turn = true
    resetButton.style.display = "none"
    rollButton.style.display = "block"
    
})

function rollDice(){
    let num = Math.floor((Math.random()*6)+1);
    console.log(num);
    return num;
}


function playerWin(score){
        if (score >= 20){
            if (player1Winner){
                message.innerHTML = "Player 1 Won! 🎉"
                rollButton.style.display = "none"
                resetButton.style.display = "block"
            }
            else {
                message.innerHTML = "Player 2 Won! 🎉"
                rollButton.style.display = "none"
                resetButton.style.display = "block"
            }
        }
    }

        


    
