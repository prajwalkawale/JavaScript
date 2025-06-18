let userwin = 0;
let comwin = 0;

let userchoice = document.querySelectorAll(".choice-images");
let userscore = document.getElementById("userscore");
let compscore = document.getElementById("compscore");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.getElementById("msg");


// User choice
userchoice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const playerchoice = choice.getAttribute("id");
        playGame(playerchoice);
    })
})


// computer choice
const compChoice=()=>{
    const choiceArray = ["rock","paper","scissors"]
    const randomnumber = Math.floor(Math.random()*3);
     return choiceArray[randomnumber];
}


// Game

const playGame=(playerchoice)=>{
    const computerChoice = compChoice();
    const userChoice = playerchoice;

    if(computerChoice===userChoice){
        draw();
    }else{
        let userwin= true;
        if(userChoice=="rock"){
            userwin = computerChoice=="paper"?false:true;
        }else if(userChoice=="paper"){
            userwin = computerChoice=="scissors"?false:true
        }else{
            userwin = computerChoice=="rock"?false:true;
        }
        showWinner(userwin,userChoice,computerChoice);
    }
}


// for draw match message

const draw = ()=>{
    document.getElementById("msg").innerText = "The match is a draw!"
    msg.style.backgroundColor="#081b32"
}

// show winner

const showWinner=(userwin,userChoice,computerChoice)=>{
    userscore++;
    if(userwin){
        msg.innerText=`You win! You have chosen ${userChoice} and the computer has chosen ${computerChoice}`
        msg.style.backgroundColor="green"
        
    }else{
        msg.innerText=`You lose! You have chosen ${userChoice} and the computer has chosen ${computerChoice}`
        msg.style.backgroundColor="red";
    }
}