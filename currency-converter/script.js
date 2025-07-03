const exchangeRates = {
  USD: {
    INR: 85.75,
    USD: 1,
  },
  INR: {
    USD: 0.012,
    INR: 1,
  },
};

// const input = document.querySelector("#userInput");
// const btn = document.querySelector("#btn");

let convert = document.querySelector(".converter").addEventListener("click", (event) => {
  event.preventDefault();
  const input = parseFloat(document.querySelector("input").value);
  const from = document.querySelector("#from").value;
  const to = document.querySelector("#to").value;

  if (isNaN(input) || input <= 0) {
    alert("Please enter a valid input!");
    return;
  }

  const convertedValue = input * exchangeRates[from][to];
  document.querySelector("#msg").innerText = `${convertedValue} ${to}`;
});


