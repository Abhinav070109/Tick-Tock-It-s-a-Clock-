var seconds, minutes, hours;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255,255,255);  
  hours = hour();
  minutes = minute();
  seconds = second();
  angleMode(DEGREES);
  secondsAngle = map(seconds, 0, 60, 0, 360);
  minutesAngle = map(minutes, 0, 60, 0, 360);
  hoursAngle = map("0" + hours, 0, 12, 0, 360);
  textSize(15);
  fill("red");
  text("Red circle = SECONDS", 180, 30);
  fill("green");
  text("Green circle = MINUTES", 180, 44);
  fill("blue");
  text("Blue circle = HOURS", 180, 58);
  noFill();
  strokeWeight(2);
  stroke("red");
  arc(225, 240, secondsAngle, secondsAngle, secondsAngle, secondsAngle,);
  stroke("green");
  arc(225, 240, minutesAngle, minutesAngle, minutesAngle, minutesAngle,);
  stroke("blue");
  arc(225, 240, hoursAngle, hoursAngle, hoursAngle, hoursAngle,);
  textSize(30);
  fill("black");
  text(hours , 170,250);
  text(minutes , 210,250);
  text(seconds , 250,250);
}

function hour(){

}