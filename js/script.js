$(document).ready(function() {
//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



//FUNCTIONS



// DOCUMENT READY FUNCTION
var userChoice = "";

var computerChoice = null;

var result = null;

function getRandomChoice() {

var choices = ["rock", "paper", "scissors"];

var randomIndex = Math.floor(Math.random() * choices.length);

var randomChoices = choices[randomIndex];
    
return randomChoices;
}


$("#button").click(function() {
    userChoice = $("#inp").val();
    $("#inputBox1").text(userChoice);
    computerChoice = getRandomChoice();
    $("#inputBox2").text(computerChoice);
    result = selectWinner(userChoice, computerChoice);
    $("#resultBox").text(result);
});

function selectWinner(userChoice, computerChoice) {
    if (userChoice === "rock") {
        if (computerChoice === "rock") {
            return "Computer wins!";
        } else if (computerChoice === "paper") {
            return "User wins!";
        } else {
            return "It's a tie!";
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return "User wins!";
        }else if (computerChoice === "paper") {
            return "It's a tie!";
        }else {
            return "Computer wins!";
        }
    }
    if (userChoice === "scissors"){
        if (computerChoice === "rock"){
            return "Computer wins!";
        }else if (computerChoice === "paper") {
            return "User wins!";
        }else {
            return "It's a tie!";
        }
    }
}

});