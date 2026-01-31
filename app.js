// established variables

let diceOneSum = 3;
let diceTwoSum = 4;
let rolledTotal = diceOneSum + diceTwoSum;

// Select neccessary elements and save them to variables

const diceOneEl = document.getElementById("diceone");
const diceTwoEl = document.getElementById("dicetwo");
const totalRolledEl = document.getElementById("total-rolled");
const btnEl = document.getElementById("btn");

diceOneEl.textContent = "Dice One: " + diceOneSum;
diceTwoEl.textContent = "Dice Two: " + diceTwoSum;

// add a eventlisetner on the button

btnEl.addEventListener("click", rollDice);

// functions

function rollDice() {
  sum = diceOneSum + diceTwoSum;
  totalRolledEl.textContent = "You Rolled: " + sum;
}
