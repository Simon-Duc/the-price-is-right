// - Ask the player's name
// - Store a random number between 1 and 100 : 
// const random = Math.floor(Math.random() * 100) + 1;
// - Ask a number to the player (between 1 and 100)
// - If the player's number is over the stored value, log "It is less"
// - If the player's number is under the stored value, log "It is more"
// - If the player's number equals the stored value, log "<player> wins" (where <player> is replaced by the player's name)
// - The game stops when the player wins

// const playerName = prompt("Enter your name");
// const randomNumber = Math.random();
// let playerNumber = parseInt(prompt("Write a number between 1 and 100"));


function thePriceIsRight(playerName, randomNumber) {
    let playerNumber = parseInt(prompt("Write a number between 1 and 100"));
    console.log(randomNumber);
    while (playerNumber !== randomNumber) {
        if (playerNumber < 1 || playerNumber > 100) {
            playerNumber = parseInt(prompt("It is not a number between 1 and 100, write a new number"));
        }
        else if (playerNumber > randomNumber) {
            playerNumber = parseInt(prompt("It is less, write a new number"));
        }
        else if (playerNumber < randomNumber) {
            playerNumber = parseInt(prompt("It is more, write a new number"));
        }
    }

    alert(`${playerName} wins`);
}

const playerNameOutsideTheFunction = prompt("Enter your name");
const randomNumberOutsideTheFunction = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

thePriceIsRight(playerNameOutsideTheFunction, randomNumberOutsideTheFunction);
