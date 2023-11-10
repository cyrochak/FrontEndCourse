var randomNumber1, randomNumber2;
randomNumber1 = Math.floor((Math.random() * 6) + 1);
var dice = document.querySelector(".dice .img1");
var imgSrc = "./images/dice" + randomNumber1 + ".png";
dice.setAttribute("src", imgSrc);

randomNumber2 = Math.floor((Math.random() * 6) + 1);
var dice2 = document.querySelector(".dice .img2");
var imgSrc2 = "./images/dice" + randomNumber2 + ".png";
dice2.setAttribute("src", imgSrc2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerText = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerText = "Draw!";
}
