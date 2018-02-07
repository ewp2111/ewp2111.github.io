
function setup() {
  createCanvas(3000, 2000);
  background (0);
}

function draw() {
  translate(300,300);
  angleMode(DEGREES);
  push();
  stroke(255);
  strokeWeight(0.1);
  for (var i = 0; i <30 ; i++) {
    rotate(6);
    line(-190, 0, 190, 0)
  };
  stroke(255);
  strokeWeight(1);
  for (var i = 0; i <30 ; i++) {
  rotate(30);
  line(-200, 0, 200, 0)
  };
  fill(0);
  noStroke();
  ellipse(0,0,340,340);
  var s= second();
  rotate(map(s, 0, 60, 0, 360));
  stroke(0);
  strokeWeight(5);
  line(0, 0, 0, -200);
  pop();

  var m= minute();
  rotate(map(m,0,60,0,360));
  stroke(150);
  strokeWeight(3);
  line(0,0,0,-150);
  fill(0);
  noStroke();
  ellipse(0,0,250,250);

  var h= hour();
  rotate(map(h,0,12,0,360));
  stroke(60);
  strokeWeight(5);
  line(0,0,0,-100);
  fill(0);
  noStroke();
  ellipse(0,0,100,100);
}
