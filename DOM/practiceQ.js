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


let flag = 0;
let newDiv = document.querySelector("div");
let button = document.querySelector("#btn");
button.addEventListener("click",function(){
    if(flag==0){
    newDiv.style.backgroundColor="Yellow";
    flag=1;
    }else{
        newDiv.style.backgroundColor="Orange";
        flag=0;
    }
})


// Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can dirve

// In this Q use confirm to ask the user if he wants to see the prompt again.

// In this Q use console.error to log the error if the age entered is negative

let confirmPrompt = true;

const canDrive = (userAge)=>{
    return userAge>=18 ? true : false;
}

while(confirmPrompt){

let userAge = prompt("Enter your age: ");
userAge = Number.parseInt(userAge);

if(userAge<0){
    console.error("Please enter a valid age!");
    break;
}

if(canDrive(userAge)){
    alert("Yes, You can drive!");
}else{
    alert("You, Can't drive!");
}

// ask user if he wants to see the prompt again.
confirmPrompt = confirm("Do you want to check again if you can drive?");
}



// Write a program to change the url to google.com (redirection) if user enters a number greater than 4

// let userNumber = prompt("Enter a number: ");
// userNumber = Number.parseInt(userNumber);

// if(userNumber>4){
//     location.href = "https://google.com";
// }


// Change the background of the page to yellow,red or any other color based on user input through prompt

let color = prompt("Enter a color you want to change");
// if(color==="orange"||color==="Orange"){
//     document.body.style.backgroundColor="orange";
// }else if(color==="yellow"||color==="Yellow"){
//     document.body.style.backgroundColor="Yellow";
// }else if(color==="Red"||color==="Red"){
//     document.body.style.backgroundColor="Red";
// }else{
//     alert("Sorry we can't change the background color");
// }


// or for any other color we can simply write the solution in this way.

color = document.body.style.backgroundColor = color;