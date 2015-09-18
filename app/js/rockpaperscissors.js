////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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

var playerMove;
var computerMove;

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
  var move = getInput();
    if (move === null) {
        return getInput();
}  else {
        console.log("player chooses " + move);
        playerMove = move;
        getComputerMove();
    } 
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var move = randomPlay(); 
 if (move === null) {
     return randomPlay();
    } else {
        console.log("computer chooses " + move);
        computerMove = move;
        getWinner(playerMove, computerMove);
    }
}

var winner;
function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
if (playerMove === computerMove) {
        winner = "tie";
   console.log("Looks like we have a tie!");
        return winner;
    } 
    else if (playerMove === "rock") {
        if (computerMove === "paper") {
            winner = "computer";
        } else {
            winner = "player";
        }
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
            winner = "player";
        } else {
            winner = "computer";
        }
    } else if (playerMove === "scissors") {
        if (computerMove === "rock") {
            winner = "computer";
        } else {
            winner = "player";
        }  else {
            winner = "player";
        }
  } else {
        getInput();
    }
    console.log(“The winner in this round is " + winner + " !");
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
for (var i=0; i<25; i++) {
        if (playerWins === 5 || computerWins === 5) {
            console.log(“Final Score: Player Wins : " + playerWins + "  Computer Wins : " + computerWins);
            break;
        } 
        else 
        {
            if (winner === "player") 
            {
             playerWins ++;
             console.log(“Current Player Wins: " + playerWins + "   Current Computer Wins : " + computerWins);
            } 
            else if (winner === "computer") 
            {
             computerWins ++;
             console.log(“Current Player Wins : " + playerWins + "  Current Computer Wins : " + computerWins);
            }
            getPlayerMove();
            getComputerMove();
        }
    }
}

//Call function playToFive right at the top to make it all work
//Adjustments are not original

