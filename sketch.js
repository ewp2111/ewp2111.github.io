
function setup() {
  createCanvas(1000, 500);
  background (0);
}

function draw() {
  background(100);
  noStroke();
  textSize(100);
  fill(255);
  textFont('Futura PT');
  text('mily Po', 300, 190);
  fill(255);
  textSize(10);
  textFont('Futura PT');
  text('DataViz SP18', 900, 50);
  push();
  var m = minute();
  translate(m, m);
  stroke(216, 163, 163);
  strokeWeight(1);
  line(50, 0, 50, 1000);
  pop();
  fill(255);
  rect(250, 180, 40, 8);
  fill(255);
  rect(250, 150, 40, 8);
  fill(255);
  rect(250, 120, 40, 8);
  push();
  scale(hour(), hour());
  rect(0, 0, 5, 5);
  pop();
  translate(250,120);
  angleMode(DEGREES);
  rotate(map(second(), 0, 60, 0, 90));
  fill(255);
  rect(0, 0, 8, 60);
}
