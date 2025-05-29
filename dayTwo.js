// Loop statements

let num = 5;

for (i = 1; i <= num; i++) {
  console.log("Print");
}

// Calculate sum of 1 to 5

let sum = 0;

for (i = 1; i <= 5; i++) {
  sum = sum + i;
}

console.log("The sum of 1 to 5 is = ", sum);

// While loop

let numBer = 1;
while ( numBer <= 5) {
  console.log(" number =",numBer);
  numBer++;
}

// For of loop

let str ="Computer Science";
for(let i of str){
    console.log("i = ",i);
}

// Calculate String Size

let size =0;

for(let i of str){
    console.log("i = ",i);
    size++;
}
console.log("size of string =",size);

// Example 2 

let studentName = "Clay Jenson";

for(let i of studentName){
    console.log("i =",i);
    i++;
}


// For in loop

const student = {
    studentName : "Clay jenson",
    studentAge : 25,
    studentCGPA : 7.78,
    studentCity :"Mumbai"
};

for(let key in student){
    console.log(key,"=",student[key]);
}

// Example 2 

const employeDetails={
    employeName : "Clay Jenson",
    employeID : 225,
    employeCity : "Hydrabad",
    employeRole : "Full-stack Developer"
};

for(let key in employeDetails){
    console.log(key,"=",employeDetails[key]);
}


