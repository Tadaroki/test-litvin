const prompt = require("prompt-sync")();

function convertKmToMi() {
  let km = prompt("Input value in kilometers: ");
  return km > 0 // ternary operator
    ? console.log(`${km} km = ${km * 0.62137119224} mi `) // condition 1
    : console.log("Value should be positive!"); // condition 2
}

convertKmToMi();
