// console.log(document);
// console.log(document.body.firstElementChild);

// Create a H2 heading element with text- "Hello JavaScript".Append "from developer" to this text using JS.
let str = document.querySelector("h2");
console.log(str.innerHTML);

// h2.innerHTML = "from Developer!";
// console.log(h2.innerHTML);
str.innerText = str.innerHTML + " from Fullstack developer!";
str.append(" ~ from developer!!");
console.log(str.innerHTML);

console.log(document);
console.dir(document.body);
console.dir(document.body.children); 

// Create 3 divs with common class name "box" Access them and add some uique text to each of them.

console.log(document.body);
console.log(document.body.children);

let str2 = document.querySelectorAll(".box");
console.log(str2);
console.log(str2[0]);
console.log(str2[1]);
console.log(str2[2]);
let index =1;
for(let i of str2){
    i.innerText = "New"+index;
    index++;
}


// Access attributes

let attributesAccess = document.querySelector("div");
console.log(attributesAccess.getAttribute("class"));

console.log(attributesAccess.setAttribute("class","NewClass"));

