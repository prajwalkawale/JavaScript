// Strings 

// Calculate the length of the string without using the length property of the string.

let str = "Computer Science";

let size = 0;

for(let i of str){
    size++;
}
console.log("The length of the string is : ",size);

// The Length is a property of string

let studentName = "Wednesday Adom";
console.log("Student Name is : ",studentName);
console.log("The Length of the name is : ",studentName.length);

// The length example 
const browserType = "Chrome";
const result = browserType[browserType.length - 1];
console.log(result);

// Strings act like a objects
// For example 
console.log(studentName[0]);
console.log(studentName[1]);
console.log(studentName[2]);
console.log(studentName[3]);

// Tamplete Lieterals

const studentInfo = {
    nameOfstudent : "Hanha Bekar",
    residencyOfstudent : "swedny",
    CGPA : 7.78
};

const output = `The student information is ${studentInfo.nameOfstudent} and she live in ${studentInfo.residencyOfstudent}`;
console.log(output);

// Escape character ' n/ ' 

console.log(`Hello I am a learner and currently \nI am learning JavaScript Programming Language.`);

// Tab space '/t'

console.log(`Computer\tScience`);


const csStudent = "Computer\tScience"; // By default it will count as 1
console.log(csStudent.length);

// Methods of Strings - "Methods are known as funtions"
// These are buil-in Functions to manipulate a string

let methodsstr = "computer science";
methodsstr = methodsstr.toUpperCase();
console.log(methodsstr);

let methodstr2 = "COMPUTER SCIENCE";
console.log(methodsstr.toLowerCase());

let methodsstr3 ="   Computer Science    ";
console.log(methodsstr3.trim());

// Replace method

let newString = "Computer Science";
console.log(newString.replace("Computer","Crop"));

// Slice method 
let string2 = "ABCDEF";
console.log(string2.slice(0,4)); // In slice method the last index is always non-inclusive

// Concatinate method

let string3 = methodsstr.concat(methodstr2);
console.log(string3);

// CharAt Index

console.log(string2.charAt(2));


// Convert String to Number 

const myString = "1234";
console.log(typeof myString);
const myNum = Number(myString);
console.log(myNum);
console.log(typeof myNum);

// Convert Number to String

const myN = 124;
console.log(typeof myN);

const mystr = String(myN);
console.log(typeof mystr);
console.log(mystr);

console.log("\n")
console.log("\n")
console.log("\n")
console.log("\n")
console.log("\n")


// Include Method

const defaultBrowser = "Microsoft Edge";

if(defaultBrowser.includes("Edge")){
    console.log("The defualt browser is Microsoft Edge!!");
}else{
    console.log("Can't say about default browser.");
}

// startWith sub string

if(defaultBrowser.startsWith("Microsoft")){
    console.log("We found microsoft!");
}else{
    console.log("We didn't find microsoft");
}

// endWith sub string 

if(defaultBrowser.endsWith("Edge")){
    console.log("We found Edge!");
}else{
    console.log("We didn't find Edge");
}

console.log("\n")
console.log("\n")
console.log(defaultBrowser.indexOf("Edge"));
// IF we enter a string that is not present in the declared string, then it will return -1