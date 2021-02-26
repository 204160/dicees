var randomNumber1=Math.ceil(Math.random()*6)
var randomNumber2=Math.ceil(Math.random()*6)
document.querySelectorAll(".dice img")[0].setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelectorAll(".dice img")[1].setAttribute("src","images/dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="player1 wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="player2 wins";
}
else if(randomNumber1=randomNumber2){
  document.querySelector("h1").innerHTML="draw";
}
