
let guess;
console.log(guess);
let output = "";

window.alert("Welcome!Please guess a number between 1-100");

do {
  guess = parseInt(window.prompt("Pick a number between 1-100"));
  if (randomNum === guess) {
    output = `You did it. You are such a smart cookie!`;
  } else {
    output = `Sorry..the random number was ${randomNum}, please play again`;
  }
  window.alert(output);
} while (randomNum !== guess);


