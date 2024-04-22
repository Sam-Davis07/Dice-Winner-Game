var randomNumber1 = Math.floor((Math.random())*6);
document.querySelector(".img1").setAttribute("src","/images/dice"+(randomNumber1+1)+".png");

var randomNumber2 = Math.floor((Math.random()*6));
document.querySelector(".img2").setAttribute("src","/images/dice"+(randomNumber2+1)+".png");


if(randomNumber1 === randomNumber2){
    document.querySelector(".container").firstElementChild.textContent = "Draw!";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector(".container").firstElementChild.textContent = "🚩Player 1 Wins!";
}
else{
    document.querySelector(".container").firstElementChild.textContent = "Player 2 Wins! 🚩";
}