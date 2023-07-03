                                  //QUESTION NO: 01
var posInterger=+prompt("Write a positive floating point number: ")
document.write("Number: "+posInterger+"<br>")
document.write("Round off value: "+Math.round(posInterger)+"<br>");
document.write("Floor value: "+Math.floor(posInterger)+"<br>");
document.write("Ceil value: "+Math.ceil(posInterger)+"<br>");


                                  //QUESTION NO: 02
var negInterger=+prompt("Write a negative floating point number: ")
document.write("Number: "+negInterger+"<br>")
document.write("Round off value: "+Math.round(negInterger)+"<br>");
document.write("Floor value: "+Math.floor(negInterger)+"<br>");
document.write("Ceil value: "+Math.ceil(negInterger)+"<br>");


                                  //QUESTION NO: 03
var Interger=+prompt("Write a integer number: ");
document.write("The absolute value is "+Interger+" is "+Math.abs(Interger)+"<br>");


                                  //QUESTION NO: 04
var diceGame=Math.round(Math.ceil((Math.random()*6)));
var gameDice=Math.round(Math.ceil((Math.random()*6)));
document.write("random dice value is: "+diceGame+"<br>"+"random dice value is: "+gameDice);


                                  //QUESTION NO: 05
var coinRan=Math.round(Math.ceil((Math.random()*6)));
var randCoin=Math.round(Math.ceil((Math.random()*6)));
document.write(coinRan+"<br>"+" random coin value is: Heads"+"<br>"+randCoin+"<br>"+"random coin value is: Tails");


                                  //QUESTION NO: 06
var randNum=Math.round(Math.ceil((Math.random()*100)));
document.write("Random number between 1 to 100: "+randNum)


                                  //QUESTION NO: 07
var weight=prompt("Enter your weight in kilogram");
document.write("The weight of user is: "+weight);


                                  //QUESTION NO: 08
var kimLi=+prompt("Enter the number between 1 and 10");
var randNum=Math.round(Math.ceil((Math.random()*10)));
if(randNum===kimLi){
    alert("Congratulations!")
}
else{
    alert("Try again!")
}












