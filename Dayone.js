console.log("Hello JavaScript!!");

// let num = prompt("Enter any input value to check if it multiple by 5 : ");

// if(num%5==0){
//     console.log("The input value you have entered is multiple of 5!");
// }else{
//     console.log("This input value is not multiple of 5")
// }

/*  Write a code which can give grades to students according to their scores:

80-100, A | 70-89,B | 60-69,C | 50-59,D | 0-49, F */

let score = prompt("Enter your score : ");

if(score>=80 && score<=100){
    console.log(" Congratulations!! You have secured A grade!!");
}else if(score>=70 && score<=89){
    console.log(" Congratulations!! You have secured with B grade");
}else if(score>=60 && score<=69){
    console.log("Congratulations!! You have secured with C grade");
}else if(score>=50 && score<=59){
    console.log("Congratulations!! You have secured with D grade");
}else if(score>=0 && score<=49){
    console.log("Sorry to say but you are Failed.");
}else{
    console.log("You have entered wrong input!!");
}

// Switch statement
const mode = "dark";

switch(mode){
    case "dark":
        console.log("You are on Dark mode!!");
        break;
    case "Light":
        console.log("You are on Light mode!!");
        break;
    default:
        console.log("You are on Default mode!!");
}


// Ternary operator 

const age = 19;

const canVot = age>=18 ? "Yes, You can vote!" : "No, You can't vote!";

console.log(canVot);