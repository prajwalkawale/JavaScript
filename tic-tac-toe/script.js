let box = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let container = document.querySelector(".msg-container");
// winning paterns
let winner = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let turn = true;

// Accessing Each buttons
box.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turn) {
      btn.innerText = "O";
      turn = false
      btn.disabled =true;
    } else {
      btn.innerText = "X";
      turn = true
    }
    btn.disabled =true;

    winningfunction();
  });
});

// winning patterns

let winningfunction=()=>{
    for(let patterns of winner){
        let position1 = box[patterns[0]].innerText;
        let position2 = box[patterns[1]].innerText;
        let position3 = box[patterns[2]].innerText;

        if(position1!=""&&position2!=""&&position3!=""){
            if(position1===position2&&position2===position3){
                console.log("Congratulation, You Win!",position1);
                showWinner(position1);
            }
        }
    }
}

// Winning message display

let showWinner = (winner)=>{
    msg.innerText =`Congratulations! the Winner is ${winner}`
    container.classList.remove("hide");
    boxdiable();
}

// all boxes disabled after winning the game.

let boxdiable = ()=>{
    for(let boxes of box){
        boxes.disabled= true;
    }
}

// For resetting the game

let enabled =()=>{
    for(let boxes of box){
        boxes.disabled = false;
        boxes.innerText="";
    }
}

const resetGame = ()=>{
    turn = true;
    container.classList.add("hide");
    enabled();
}

// reset button
reset.addEventListener("click",resetGame);