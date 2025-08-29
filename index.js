//left dice images
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceNumber = `images/dice${randomNumber1}.png`;

document.querySelector("img").setAttribute("src", randomDiceNumber);

//right dice images
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomRightNumber = `images/dice${randomNumber2}.png`;

document.querySelectorAll("img")[1].setAttribute("src", randomRightNumber);

//deciding the winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} 
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} 
else {
  document.querySelector("h1").innerHTML = "It's a Draw!";
}
