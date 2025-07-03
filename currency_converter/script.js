
const exchangeRates = {
    USD : {
        USD :1,
        INR : 85,
    },
    INR : {
        INR : 1,
        USD : 0.012,
        
    }
}

const convert = document.querySelector(".convert").addEventListener("click",()=>{
    const input = parseFloat(document.querySelector("input").value);
    const from = document.querySelector("#from").value
    const to = document.querySelector("#to").value

    if(isNaN(input) || input <=0){
        alert("Please Enter a Valid Input!");
    }

    const converted = input * exchangeRates[from][to];
    document.querySelector("p").innerHTML= `${converted} ${to}`
})