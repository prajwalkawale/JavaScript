// Print all even numbers from 0 to 50

// solution 1
let num=0;

for(let i = 1; i<=50;i++){
    if(num%2==0){
        console.log("Even Number :",num);
    }
    num++;
}

// Solution 2

for(let i=0;i<=50;i++){
    if(i%2==0){
        console.log("number : ",i)
    }
}


// switch statement


let today ="Monday";
switch(today){
    case 'Sunday':
    console.log("Today is sunday!");
    break;
    case 'Saturday':
    console.log("Today is Saturday");
    break;
    case 'Monday':
    console.log("Today is Monday");
    break;
    default :
    console.log("Today is Wednesday");
}

let marks = 90;

switch(marks){
    case 45:
        console.log("Grade C");
        break;
    case 60 :
        console.log("Grade B");
        break;
    case 80:
        console.log("Grade A");
        break;
    case 90:
        console.log("Greade A+");
        break;
    default :
    console.log("Wrong input!");
}


// Write a JavaScript program to find whether a number is divisible by 2 and 3

let userInput = prompt("Enter a number: ");
userInput = Number.parseInt(userInput);

if(userInput%2==0 && userInput%3==0){
    console.log(userInput +" This input number is Divisible by 2 and 3");
}else{
    console.log(userInput +" This Input number is not divisible by 2 and 3");
}