// First Player
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var diceImage1 = 'dice' + randomNumber1 + '.png';
var randomImageSource1 = 'images/' + diceImage1;

var image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomImageSource1);

// 2nd Player
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceImage2 = 'dice' + randomNumber2 + '.png';
var randomImageSource2 = 'images/' + diceImage2;

var image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src', randomImageSource2);

// who wins
if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerText = 'Player 1 wins';
} else if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerText = 'Player 2 wins';
} else {
  document.querySelector('h1').innerText = `It's a tie`;
}
