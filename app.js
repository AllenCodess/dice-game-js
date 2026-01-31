// Select neccessary elements and save them to variables

const diceOneEl = document.getElementById("diceone");
const diceTwoEl = document.getElementById("dicetwo");
const totalRolledEl = document.getElementById("total-rolled");
const btnEl = document.getElementById("btn");

// add a eventlisetner on the button

btnEl.addEventListener("click", rollDice);

// functions

function rollDiceOne() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollDiceTwo() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
  let diceOneTotal = rollDiceOne();
  let diceTwoTotal = rollDiceTwo();
  let sum = diceOneTotal + diceTwoTotal;
  diceOneEl.textContent = "Dice One: " + diceOneTotal;
  diceTwoEl.textContent = "Dice Two: " + diceTwoTotal;
  totalRolledEl.textContent = "You Rolled: " + sum;
}
