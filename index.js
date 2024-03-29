
var images = ['./images/dice1.png', "./images/dice2.png", "./images/dice3.png",
    "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

function randomImg() {

    var picRandom = Math.floor(Math.random() * images.length);
    return images[picRandom];
}

function playerOneValue() {
    var firstDice = randomImg();
    document.querySelector('.img1').setAttribute('src', firstDice);
    console.log(firstDice);

    if (firstDice === './images/dice1.png') {
        playerOne = 1;
    }
    if (firstDice === './images/dice2.png') {
        playerOne = 2;
    }
    if (firstDice === './images/dice3.png') {
        playerOne = 3;
    }
    if (firstDice === './images/dice4.png') {
        playerOne = 4;
    }
    if (firstDice === './images/dice5.png') {
        playerOne = 5;
    }
    if (firstDice === './images/dice6.png') {
        playerOne = 6;
    }
    return playerOne;
}

playerOneValue();

function playerTwoValue() {
    var secondDice = randomImg();
    document.querySelector('.img2').setAttribute('src', secondDice);
    console.log(secondDice);

    if (secondDice === './images/dice1.png') {
        playerTwo = 1;
    }
    if (secondDice === './images/dice2.png') {
        playerTwo = 2;
    }
    if (secondDice === './images/dice3.png') {
        playerTwo = 3;
    }
    if (secondDice === './images/dice4.png') {
        playerTwo = 4;
    }
    if (secondDice === './images/dice5.png') {
        playerTwo = 5;
    }
    if (secondDice === './images/dice6.png') {
        playerTwo = 6;
    }
    return playerTwo;
}

playerTwoValue();

function winner() {
    var p1 = playerOneValue();
    var p2 = playerTwoValue();

    if (p1 > p2) {
        document.querySelector('#winnerOutput').innerHTML = "Plaer One Wins!";
        return p1;
    }
    else if (p1 === p2) {
        document.querySelector('#winnerOutput').innerHTML = "Draw!";
    }
    else {
        document.querySelector('#winnerOutput').innerHTML = "Plaer Two Wins!";
        return p2;
    }

}

winner();
