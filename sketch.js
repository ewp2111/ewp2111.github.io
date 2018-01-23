
function setup() {
  createCanvas(1000, 500);
  background (0);
}

function draw() {
  background(100);
  stroke(255);
  strokeWeight(1);
  line(50, 0, 50, 1000);
  textSize(20);
  fill(255);
  textFont('Futura PT');
  text('Emily Po', 150, 100);
  fill(255);
  textSize(10);
  textFont('Futura PT');
  text('DataViz SP18', 900, 50);
  rect(70, 50, 50, 50);
  translate(10 ,10);
  rect(70, 50, 50, 50);
}

