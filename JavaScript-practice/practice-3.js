
const clock = document.getElementById("digital-clock");
setInterval(()=>{
    const digitalTime = new Date().toLocaleTimeString();
    clock.innerHTML = digitalTime;
},1000)
