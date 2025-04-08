var random1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice"+random1+".png";
var randomImageSource = "images/"+randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var random2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(random1>random2) {
    var audio = document.querySelector("h1").innerHTML="Player 1 wins";
    audio.addEventListener("click", sound);
    function sound(){
        var s1= new audio("player1.mp3");
        s1.play();
    }
   
    
}
else if (random1<random2) 
{
    document.querySelector("h1").innerHTML="player 2 wins";
    
}
else{
    document.querySelector("h1").innerHTML="DRAW!";
    
}