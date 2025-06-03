
// create a function using the "Function" keyword that takes a String as an argument and returns the number of vowels in the string.
let msg = "aaaa"; //prompt("Type any string:");
function lengthOFstring(msg) {
let sum = 0;
  for (const i of msg) {
    if (i === "a" || i === "u" || i === "e" || i === "i" || i === "o") {
      sum = sum + 1;
    }
  }
 return sum;
}

const value2 = lengthOFstring(msg);
console.log(value2);

console.log("\n");
console.log("\n");

// Create an arrow function to perform the same task.

let msg2 = "aaaa"; //prompt("Enter any string:");

const myFunction = (msg2)=>{
    let count=0;
    for(const i of msg2){
        if(i==='a'||i==='o'||i==='u'||i==='e'||i==='i'){
            count = count+1;
        }
    }
    return count;
}

const finalOutput = myFunction(msg2);
console.log(finalOutput);



// We are given array of marks of students. Filter out of the marks of students that scored 90+

const studentArray = [87,93,99,64,86];

const above90Marks = studentArray.filter((marks)=>{
  return marks>=90;
})

console.log("Students marks : ",above90Marks);
console.log(above90Marks.toString());


// Take a number n as input from user. Create an array of numbers from 1 to n

const userInput = 5; //prompt("type number"); 

const arr = [];

for(let i=0;i<userInput;i++){
  arr[i]= i+1;
}
console.log(arr);

// Use the reduce method to calculate sum of all numbers in the array.
const reduceMethod = arr.reduce((previous,current)=>{
  return previous+current;
})

console.log("Sum of all numbers: ",reduceMethod);

// Use the reduce method to calculate product of all numbers in the array (factorial)

const reduceMethod2 = arr.reduce((previous,current)=>{
  return previous*current;
})

console.log("Factorial of number: ",reduceMethod2);


