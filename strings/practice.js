// Explore the includes, startwith and endwith functions of a string


// include function returns true or false

let str = "Front-end developer";
let start = "Front";
let end = "developer"


console.log(`The line start with ${str.startsWith(start)} and ${str.endsWith(end)}`);

// include function

console.log(str.includes(start));

console.log(`The line start with ${start} ${str.includes(start)}`);

console.log(`The word ${start} ${str.includes(start)? 'is in the sentence' : 'No it is not in sentence'} `);


// Extract the amount out of the string "Please give Rs1000"

let extractAmount ="Please give Rs1000";
console.log(extractAmount.slice(12));

let amount ="Please give";
console.log(extractAmount.slice(amount.length));


let friendName = "clay Jenson";
console.log(friendName.replaceAll("Jenson","Parker"));
