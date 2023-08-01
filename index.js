var score = 1;
var score2 = 1;
document.querySelector(".start").addEventListener("click", function () {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var randomDice = "dice" + randomNumber + ".png";
  var randomDiceSource = "Assets/" + randomDice;

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDice2 = "dice" + randomNumber2 + ".png";
  var randomDiceSource2 = "Assets/" + randomDice2;

  document.querySelector(".img1").setAttribute("src", randomDiceSource);
  document.querySelector(".img2").setAttribute("src", randomDiceSource2);

  if (randomNumber === randomNumber2) {
    document.querySelector(".ref").innerHTML = "It's a draw";
  } else if (randomNumber > randomNumber2) {
    document.querySelector(".ref").innerHTML = "Player 1 Wins";
    document.querySelector(".score1").innerHTML = score;
    score++;
  } else if (randomNumber < randomNumber2) {
    document.querySelector(".ref").innerHTML = "Player 2 Wins";
    document.querySelector(".score2").innerHTML = score2;
    score2++;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 1;
  score2 = 1;
  document.querySelector(".ref").innerHTML = "Click Start";
  document.querySelector(".img1").setAttribute("src", "/Assets/dice6.png");
  document.querySelector(".img2").setAttribute("src", "/Assets/dice6.png");
  document.querySelector(".score1").innerHTML = 0;
  document.querySelector(".score2").innerHTML = 0;
});
