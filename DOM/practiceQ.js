// Create a new button element. Give it a text "click me", background color of red and text color of white.
// insert the button as the first element inside the body tag.

let newButton = document.createElement("button");
newButton.innerText = "Click me!";
newButton.style.background = "red";
newButton.style.color = "white";
document.querySelector("body").prepend(newButton);

let newPar = document.createElement("p");

document.querySelector("body").append(newPar);

newPar.className = "newClass";
newPar.style.background = "green";
newPar.style.color = "Black";
newPar.innerText = "This is a paragraph tag";
console.log(newPar);




