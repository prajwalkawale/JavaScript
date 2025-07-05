
const div = document.querySelectorAll(".div-bg");
console.log(div);

const body = document.querySelector('body');


div.forEach((ent)=>{
    ent.addEventListener('click',(evt)=>{
        // console.log(evt);
        console.log(evt.target.id);

        if(evt.target.id === "crimson"){
            body.style.backgroundColor = evt.target.id;
            body.style.color = 'white';
        }

        if(evt.target.id === "cadetblue"){
            body.style.backgroundColor = evt.target.id;
            body.style.color = 'white';
        }

        if(evt.target.id === "chocolate"){
            body.style.backgroundColor = evt.target.id;
            body.style.color = 'white';
        }

        if(evt.target.id === "coral"){
            body.style.backgroundColor = evt.target.id;
             body.style.color = 'white';
        }

        
    })
})
