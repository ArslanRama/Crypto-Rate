
// HTML Elements
const entryField = document.querySelector(".entryField");
let cryptoInput = document.querySelector("#cryptoInput");
const outputField = document.querySelector(".outputField");
let cryptoOutput = document.querySelector("#cryptoOutput");
const convertBtn = document.querySelector("button");

const apiUrl = "https://api.cryptonator.com/api/ticker/";
convertBtn.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(`${apiUrl}${entryField.value}-${outputField.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let ratio = data.ticker.price;
      let convertedValue = cryptoInput.value * ratio;
      cryptoOutput.value = convertedValue.toLocaleString();
    });
});

