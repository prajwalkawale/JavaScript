// Create a toggle button that changes the screen to dark-mode when clicked and ligh-mode when clicked again.

// let btn = document.getElementById("btn");
let btn = document.querySelector("#btn");
let body = document.querySelector("body");
let currentMode = "light";
btn.addEventListener("click",()=>{
    if(currentMode=="light"){
        currentMode = "dark"
        document.body.style.backgroundColor = "black";
    }else{
        currentMode="light";
        document.body.style.backgroundColor = "white";
    }
    console.log(currentMode);
})

// 
// btn.addEventListener("click",()=>{
//     if(currentMode=="light"){
//         currentMode= "dark";
//         body.classList.add("darkmode");
//         body.classList.remove("brightmode")
//     }else{
//         currentMode = "light"
//         body.classList.add("brightmode");
//         body.classList.remove("darkmode");
//     }
//     console.log(currentMode);
// })


let dbclick = document.getElementById("newButton");

// dbclick.addEventListener("dblclick",()=>{
//     console.log("Double Clicked!!");
// })


// Event Object
// It is a special object that has details about the event.
// All event handlers have access to the Event object's properties and methods
 
// event properties

dbclick.onclick=(evt)=>{
    console.log("Details about Event: ",evt);
    console.log("Event Type: ",evt.type);
    console.log("Event Targate: ",evt.target);
    console.log("Event Position X-axis: ",evt.clientX);
    console.log("Event Position Y-axis: ",evt.clientY);
}

dbclick.onclick=()=>{
console.log("Override!!");   // The above block of code will not execute, this block of code will override the previous one
}