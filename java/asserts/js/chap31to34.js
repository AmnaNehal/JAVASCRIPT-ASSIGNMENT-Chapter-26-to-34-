                                 //QUESTION NO: 01


var datetoday = new Date();
document.write(datetoday);
                                 //QUESTION NO: 02


var datetoday = new Date();
var monthList=["January","Febrary","March","April","May","June","July","Auguest","September","October","November","December"]
var month= datetoday.getMonth();
alert("Current month: "+monthList[month]);
                                 //QUESTION NO: 03


var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
alert("Today is "+dayNames[theDay]);
                                 //QUESTION NO: 04


var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
if(theDay===0||theDay===6){
    document.write("It's Fun Day")
}
                                 //QUESTION NO: 05


var now = new Date();
var theDate = now.getDate();
if(theDate<=15){
    document.write("First fifteen days of the month")
}
else{
    document.write("Last days of the month")
}
                                 //QUESTION NO: 06


var now = new Date();
document.write("Current date : "+now+"<br>")
var theTime = now.getTime();  
document.write("Elapsed milliseconds since january 1 1970: "+theTime+"<br>")
var seconds=theTime/(1000*60);  
document.write("Elapsed minutes since january 1 1970: "+seconds)                     
                                 //QUESTION NO: 07


var now = new Date();
var theHOURS = now.getHours();
if(theHOURS<=12)
    alert("It's AM")
else
    alert("It's PM")
                                 //QUESTION NO: 08


var laterDate = new Date(2020,11,31);
document.write("Later Date: "+laterDate);
                                 //QUESTION NO: 09


var diff=new Date().getTime() - new Date("June 18, 2015").getTime() ;
var Ddiff=Math.floor(diff/(1000*60*60*24));
document.write(Ddiff+" days have passed since 1st Ramadan,2015")
                                 //QUESTION NO: 10


var neWest=new Date();
document.write("Reference date: "+neWest+"<br>")
var diff=new Date().getTime() - new Date("January 1, 2015").getTime() ;//(2015,0,1)
var Ddiff=Math.floor((diff/1000));
document.write(Ddiff+" seconds had passed since beginning of 2015")
                                 //QUESTION NO: 11


var currentDate=new Date();
document.write("Reference date: "+currentDate+"<br>")
var currentHour=currentDate.getHours(); 
currentDate.setHours(currentHour - 1);
document.write("1 hour ago, it was "+currentDate)
                                 //QUESTION NO: 12


var currentDate=new Date();
alert("Reference date: "+currentDate)
var currentyear=currentDate.getFullYear(); 
currentDate.setFullYear(currentyear - 100);
alert("100 years back, it was "+currentDate)
                                 //QUESTION NO: 13


var userAge=prompt("Enter your age");
document.write("Your age is "+userAge+"<br>");
var currentDate=new Date();
var currentyear=currentDate.getFullYear(); 
var birthYear=(currentyear - userAge);
document.write("Your birth year is "+birthYear);
                                 //QUESTION NO: 14


document.write("ELECTRICITY BILL"+"<br>"+"<br>")
var customerName=prompt("Enter your name");
document.write("Customer Name: "+customerName+"<br>")
var monthList=["January","Febrary","March","April","May","June","July","Auguest","September","October","November","December"]
var currentMonth=new Date().getMonth();
document.write("Month: "+monthList[currentMonth]+"<br>")
var numOfUnit=prompt("Enter your number of unit");
document.write("Number of units: "+numOfUnit+"<br>")
var chargesPerUnit=prompt("Enter your charges per unit");
document.write("Charges per unit: "+chargesPerUnit+"<br>"+"<br>")
var netAmount=numOfUnit*chargesPerUnit
document.write("Net Amount Payable (within due date): "+netAmount+"<br>");
var latePaymentSurcharge=350
document.write("Late Payment Surcharg: "+latePaymentSurcharge+"<br>");
var grossAmountPayable=latePaymentSurcharge+netAmount;
document.write("Gross Amount Payable (after Due Date): "+grossAmountPayable);






