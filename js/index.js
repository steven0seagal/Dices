//funtion for random number between 1 - 6
function randomDice() {
  var m = Math.random() * 6 ;
  m = Math.floor(m) + 1;
  return m ;
}

//based on random namber creates name for image
function pngDice(number) {
  var imgName = "images/dice" + number + ".png";
  return imgName;
}

var leftDice = randomDice();
var rightDice = randomDice();

var leftImage = pngDice(leftDice);
var rightImage = pngDice(rightDice);

var dices_images = document.querySelectorAll("img");
dices_images[0].setAttribute("src", leftImage);
dices_images[1].setAttribute("src", rightImage);


// var dice1 = document.getElementById("dice1");
// dice1.innerHTML = leftDice;
//
// var dice2 = document.getElementById("dice2");
//
// dice2.innerHTML = rightDice;

//conditions

if (leftDice > rightDice) {
  var winner = document.getElementById("winner");
  winner.innerHTML = "Player 1 wins !";
}

if (leftDice < rightDice) {
  var winner = document.getElementById("winner");
  winner.innerHTML = "Player 2 wins !";
}

if (leftDice === rightDice) {
  var winner = document.getElementById("winner");
  winner.innerHTML = "Tie !";
}
