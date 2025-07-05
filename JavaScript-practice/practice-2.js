
const form = document.querySelector("form");

form.addEventListener('submit',(evt)=>{
    evt.preventDefault();

    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    const result = document.querySelector("#result");
    
    if(height===""||height<=0||isNaN(height)){
        alert("Please enter a valid Height in the Input!")
    }else if(weight===""||weight<=0||isNaN(weight)){
        alert("Please enter a valid weight in the Input!")
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        result.innerHTML = `<p>Your BMI is <span>${bmi}</span></p>`;
        if(bmi<=18.6){
            result.innerHTML = `<p>Your BMI is <span>${bmi}</span> - 
            You are Under Weight!</p>`;
        }else if(bmi>=18.6 && bmi<=24.9){
            result.innerHTML = `<p>Your BMI is <span>${bmi}</span> - You fall in the normal range </p>`;
        }else{
            result.innerHTML = `<p>Your BMI is <span>${bmi}</span> - You are an Overweight </p>`
        }
    }

})