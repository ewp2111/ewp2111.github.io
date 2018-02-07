
function preload() {
  sun = loadImage('sun.png');
  i1= loadImage('i1.png');
  i2= loadImage('i2.png');
  i3= loadImage('i3.png');

}

function setup() {
  createCanvas(3000, 3000);
  frameRate(1);
}

function draw() {
  var s = second();
  var s1 = map(second(),0,60,0,800);
  noStroke();
  fill(255);
  ellipse(s1+100,100,400,400);
  image(sun,s1,0, 300,300);


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





