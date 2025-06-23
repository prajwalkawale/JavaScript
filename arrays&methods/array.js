let students = [96,45,66,25,55,45];
console.log("student marks :",students[3]);
console.log("student marks :",students[2]);
console.log("student marks :",students[1]);
console.log("student marks :",students[0]);

students[3]=56;
console.log("Updated marks :",students[3]);

const cities = ["Pune","Mumbai","Delhi","Banglore","Hydrabad"];
console.log(cities["City name :",2]);
console.log(cities["City name :",1]);
console.log(cities["City name :",0]);

cities[2]= "Nashik";
console.log("Updated city name :",cities[2]);

// Printing all cities name using for loop
for(let i=0;i<cities.length;i++){
    console.log(cities[i]);
}
console.log("\n")
console.log("\n")
console.log("\n")
// Printing all cities name using for of loop

for(let i of cities){
    console.log("i is :",i);
}

console.log("\n")
console.log("\n")

// Printing all city names using for in loop "Here for in loop will print index numbers of cities"
for(let i in cities){
    console.log( cities[i],"is at:",i);
}

console.log("\n");
console.log("\n");


// Spread out method in array ( It will work like the concat method)

let spreadArray = ["thor","Ironman","Antman"];
let spreadArray2 = ["Hulk","Batman"];

let spreadArrayResult = [...spreadArray,...spreadArray2];
console.log("Spread Array Method: ",spreadArrayResult);

// flat method

let flatArray = [1,2,3,4,[5,6,7,[8,9,10],11,12]];

console.log("Flat method : ",flatArray.flat(Infinity));

// for search purpose 

console.log(Array.isArray("Developer"));

// for creation of new array 

let newArray = Array.from("Developer");
console.log("New array: ",newArray);

// creating new Array from set of elements

let score = 100;
let score2 = 95;
let score3 = 44;
let score4 = 66;

console.log("New array of Score: ",Array.of(score,score2,score3,score4));