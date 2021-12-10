var dice1= Math.floor(Math.random()*6)+1;
var dice2= Math.floor(Math.random()*6)+1;

var randomSource1="images/dice"+dice1+".png";
var randomSource2="images/dice"+dice2+".png";

document.querySelector(".img1").setAttribute("src",randomSource1);
document.querySelector(".img2").setAttribute("src",randomSource2);

if(dice1>dice2) 
{
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(dice1===dice2)
{
    document.querySelector("h1").innerHTML="Its a tie!";
}
else {
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
