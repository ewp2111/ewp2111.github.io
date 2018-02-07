

function setup() {
  createCanvas(1200, 700);
}


function draw() {
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
    scale(0.5,0.5);
    translate(hr,100);
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
  rect(50,200,400,400);
  tint (255,t2);
  image(i3,50,200,400,400);
  tint (255,255-t2);
  image (i2,50,200,400,400);
  } else {
  fill(255);
  noStroke();
  rect(10,200,400,400);
  tint(255,255-t1);
  image(i1,50,200,400,400);
  tint(255,t1);
  image(i2,50,200,400,400)
  }
}

}

function drawHeart(){
  noStroke();
  fill(205,50,50);
  ellipse(200, 1000, 50, 50); 
  ellipse(240, 1000, 50, 50); 
  triangle(176,1008,264,1008,220,1060);
  stroke(255);
  strokeWeight(5);
  line(220,980,230,1008);
  line(230,1008,210,1020);
  line(210,1020,220,1060);

}


function drawFace() {
  noStroke();
  fill(100);
  ellipse(200, 1500, 8, 8); 
  ellipse(220, 1500, 8, 8); 
  fill(100);
  angleMode(DEGREES);
  arc(210,1540,30,40,180,360)
}






