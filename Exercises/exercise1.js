// write a javsscript program to generate a random number and store it in a variable
// the program then takes an input from the user to tell them whether the gess was correct,greater or lesser than the original numbere
// 100- no. of guesses is the score of the user
// the program is expected to terminate once the number is guesed. Number should be between 1-100


let a = Math.floor(Math.random()*100);
let score = 100;
let userInput;
let attempt =0;
while(attempt!=10){
    userInput = prompt("Enter a number");
    userInput = Number.parseInt(userInput);
    attempt = attempt+1;
    if(userInput===a){
        console.log("You guessed the correct number!",userInput);
        console.log("number of attemps: ",attempt);
    }else if(userInput>a && userInput<100){
        alert("You have enter large number");
    }else if(userInput<a && userInput>0){
        alert("You have entered small number");
    }else if(attempt===9){
        alert("You are going to lost attemps.");
    }
}

console.log(score-attempt);

