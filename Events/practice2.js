//Create a JavaScript Program that has two simple images of bulbs on and off running over a button. 
// If the button is clicked by the user, the bulb on image will appear, and the bulb off image will disappear.

const bulbOnImg = document.getElementById("bulbOn");
const bulbOffImg = document.getElementById("bulbOff");
const button = document.getElementById("toggleButton");

let isBulbOn = false;

button.addEventListener("click", () => {
  if (isBulbOn) {
    // Turn it OFF
    bulbOnImg.style.display = "none";
    bulbOffImg.style.display = "block";
    button.textContent = "Turn ON";
    isBulbOn = false;
  } else {
    // Turn it ON
    bulbOnImg.style.display = "block";
    bulbOffImg.style.display = "none";
    button.textContent = "Turn OFF";
    isBulbOn = true;
  }
});


//Create a glowing bulb effect using classlist toggle method in javascript

let div = document.getElementById("div");

setInterval(async function () {
    document.getElementById("div").classList.toggle("div-bg");
},1000);