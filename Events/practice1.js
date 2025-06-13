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

