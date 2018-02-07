

function preload() {
  i1= loadImage('i1.png');
  i2= loadImage('i2.png');
  i3= loadImage('i3.png');

}

function setup() {
  createCanvas(1200, 1000);
}


function draw() {
  push();
  var sun=map(second(),0,60,0,800);
  fill(255);
  noStroke();
  ellipse(sun,100,200,200);
  fill(247,247,160);
  noStroke();
  ellipse(sun,100,100,100);
  angleMode(DEGREES);
  fill(180);
  arc(sun-15,85,40,40,0,180);
  arc(sun+25,85,40,40,0,180);
  noFill();
  stroke(150);
  strokeWeight(2);
  arc(sun,120,20,20,10,170);
  pop();

  var min = -100; 
  for (var i = 0; i < minute(); i++) {
    push();
    scale(0.3,0.3);
    translate(min,100);
    drawFace();
    min += 50;
    pop();
  }

  var hr = -100; 
  for (var i = 0; i < hour(); i++) {
    push();
    scale(0.3,0.3);
    translate(hr,150);
    drawHeart();
    hr += 150;
    pop();
  }


  var s = second();
  var t1 = map(s,0,30,0,255);
  var t2 = map(s,30,60,0,255);
  if (s>30){
  fill(255);
  noStroke();
  rect(50,200,300,300);
  tint (255,t2);
  image(i3,50,200,300,300);
  tint (255,255-t2);
  image (i2,50,200,300,300);
  } else {
  fill(255);
  noStroke();
  rect(10,200,300,300);
  tint(255,255-t1);
  image(i1,50,200,300,300);
  tint(255,t1);
  image(i2,50,200,300,300)
  }

}

function drawHeart(){
  noStroke();
  fill(205,50,50);
  ellipse(200, 1800, 50, 50); 
  ellipse(240, 1800, 50, 50); 
  triangle(176,1808,264,1808,220,1860);
  stroke(255);
  strokeWeight(5);
  line(220,1780,230,1808);
  line(230,1808,210,1820);
  line(210,1820,220,1860);

}


function drawFace() {
  noStroke();
  fill(100);
  ellipse(200, 2000, 8, 8); 
  ellipse(220, 2000, 8, 8); 
  fill(100);
  angleMode(DEGREES);
  arc(210,2040,30,40,180,360)
}
