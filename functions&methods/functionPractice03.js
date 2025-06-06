// Write a program to print the marks of a student in an object using for loop
// obj = {Clay:98,Broke:55,Roman:88,sam:88}

// Object.key() will print the keys of an object
let students = {
  clay: 98,
  broke: 55,
  Roman: 88,
  Sam: 88,
};

for (let i = 0; i < Object.keys(students).length; i++) {
  console.log(
    "The marks of the students: ",
    Object.keys(students)[i],
    " ",
    students[Object.keys(students)[i]]
  );
}

// Solving the same question by using for in loop

for (let i in students) {
  console.log("The marks of the students: ", i, ":", students[i]);
}

// Using for of loop

for(let key of Object.keys(students)){
    console.log("The name of student:",key,"and marks is",students[key]);
}


// Write a program to print "Try again" until the user enters the correct number.

// userInput = Number.parseInt(userInput);
// let correctNumber = 55;
// let userInput ;

// userInput = prompt("Enter the correct number: ");
// userInput = Number.parseInt(userInput);
// console.log(typeof userInput);


// while(true){
//     if(userInput == correctNumber){
//         console.log("Congratulations! You have entered the correct input number!");
//         break;
//     }else{
//         userInput = prompt("Try Again!");
//     }
// }



// Write a function to find mean of 5 numbers

const num = (a,b,c,d,e) =>{
    return (a+b+c+d+e)/5;
};

console.log(num(4,5,6,2,4));
