////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move === null) {
      return getInput();
    } 
    else {
      return move;
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move === null) {
      return randomPlay();
    } 
    else {
        return move;
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    // pull the variables from above functions for 'move'


    if (playerMove === computerMove) {
        winner = "tie";
    }
    /* when player choses rock*/
    else if (playerMove === "rock" && computerMove === "paper") {
        winner = "computer";
    }
    else if (playerMove ==="rock" && computerMove ==="scissors") {
        winner = "player";
    }
    /* when player chooses paper*/
    else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    }
    else if (playerMove === "paper" && computerMove === "scissors") {
        winner = "computer";
    }
    /* when player choses scissors */
    else if (playerMove === "scissors" && computerMove === "rock"){
        winner = "computer";
    }
    else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    
    while ((playerWins < 5) && (computerWins < 5)){
    var playerMove = getPlayerMove(getInput());
    var computerMove = getComputerMove(randomPlay());
    var roundWinner = getWinner(playerMove, computerMove); 
        if (roundWinner === "player"){
            playerWins ++;
            console.log ("Player Wins!");
        }
        else if (roundWinner === "computer"){
            computerWins ++;
            console.log ("Computer Wins");
        }
        else if (roundWinner === "tie"){
            console.log ("its a tie no winner");
        }
       
    /* message after each round who played what and score*/
    console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    console.log('The score is currently Player: ' + playerWins + ' to Computer: ' + computerWins)}
     return [playerWins, computerWins];
}
console.log ("Game over" );
/* call */
playToFive();

