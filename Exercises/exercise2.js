// Create Snake, Water & Gun game in JavaScript.
// The game should ask you to enter S,W or G. The computer should be able to randomly
// generate S, W or G and declare win or loss using alert
// Use alert, prompt and confirm whatever required!

console.log(`Let's play "Snake","Water","Gun" Game \n 
    Computer will choose "W" for Water \n
    Computer will choose "S" for Snake \n
    Computer will chose "G" for Gun`);
    console.log("\n");
    console.log("\n");
let userInput = prompt("Enter S, W, or G: ");
userInput = userInput.toUpperCase();
let cpuGenerated = Math.floor(Math.random() * 3); // it will generate numbers in between 0,1,2

let cpuAnduserInput = {
  0: "S",
  1: "W",
  2: "G",
};

let systemrandom = cpuAnduserInput[cpuGenerated];

const match = (userInput, cpuAnduserInput) => {
  if (userInput === cpuAnduserInput) {
    return "Nobody win!";
  } else if (userInput === "S" && cpuAnduserInput === "W") {
    return "Snake";
  } else if (userInput === "S" && cpuAnduserInput === "G") {
    return "Gun";
  } else if (userInput === "W" && cpuAnduserInput === "S") {
    return "Snake";
  } else if (userInput === "W" && cpuAnduserInput === "G") {
    return "Water";
  } else if (userInput === "G" && cpuAnduserInput === "S") {
    return "Gun";
  } else if (userInput === "G" && cpuAnduserInput === "W") {
    return "Water";
  }
};

let result = match(userInput, systemrandom);
console.log(
  `You have entered ${userInput} and system has generated ${systemrandom} and the winner is ${result}`
);
