let randomNumber = Math.floor(Math.random()*100+1);
console.log(randomNumber);

const guessInput = document.getElementById("guessField");
const submitBtn = document.getElementById("submt");
const previousGuess = document.querySelector(".guesses");
const result = document.querySelector(".lastResult");
const lowOrhi = document.querySelector(".lowOrhi");
const resultparas = document.querySelector(".resultparas");

let gameStart = true;
let numberOfguess = [];
let noOfchances = 1;
let p = document.createElement("p");
if(gameStart){
    submitBtn.addEventListener('click',(evt)=>{
        evt.preventDefault();
        let inputvalue = parseInt(guessInput.value);
        validGuess(inputvalue)
    })
}

function validGuess(inputvalue){
    if(isNaN(inputvalue)){
        alert("Please enter a valid number!");
    }else if(inputvalue<1){
        alert("Please enter a number greater than 0!")
    }else if(inputvalue>100){
        alert("Please enter a number less than 100!")
    }else{
        numberOfguess.push(inputvalue);
        if(noOfchances==11){
            cleanupGuess(inputvalue);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }else{
            cleanupGuess(inputvalue)
            checkGuess(inputvalue);
        }
    }
}

function checkGuess(guess){
    if(guess==randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`You guessed lower number than  actual`)
    }else if(guess>randomNumber){
        displayMessage(`You guessed higher number than actual`)
    }

}
function cleanupGuess(guess){
    guessInput.value = "";
    previousGuess.innerHTML+=`${guess},`
    noOfchances++;
    result.innerHTML = `${11-noOfchances}`
}

function displayMessage(msg){
    lowOrhi.innerHTML = `<h2>${msg}</h2>`
}

function newGame(){
   const newGamebtn = document.querySelector("#newGame");
   newGamebtn.addEventListener('click',(evt)=>{
   randomNumber = Math.floor(Math.random()*100+1);
   numberOfguess = [];
   noOfchances = 1;
   previousGuess.innerHTML='';
   guessInput.removeAttribute('disabled');
   result.removeChild(p);
   gameStart = true;
   })
}

function endGame(){
     guessInput.value ="";
     guessInput.setAttribute('disabled');
     p.classList.add('button');
     p.innerHTML = '<h2 id="newGame"></h2>'
     resultparas.appendChild(p);
     gameStart=false 
     newGame()
}

