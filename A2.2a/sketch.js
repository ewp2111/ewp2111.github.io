
function setup() {
  createCanvas(1000, 1000);
  background (100);
}

function draw() {
  noStroke();
  fill(255, 150);
  rect(300, 100, 300, 300);
  var s = second();
  var m = minute();
  var h = hour();
  noStroke();
  fill(100,0, 0, 50);
  if (h>18){
    var xh = 900-map(h, 18, 24, 300, 600);
    var yh = 100
  } else if (h>12){
    xh = 600;
    yh = 500-map(h, 12, 18, 100, 400);
  } else if (h>6){
    xh = map(h, 6, 12, 300, 600);
    yh = 400
  } else {
    xh = 300;
    yh = map(h, 0, 6, 100, 400)
  }


  if (m>45){
    var xm = 900-map(m, 45, 60, 300, 600);
    var ym = 100
  } else if (m>30){
    xm = 600;
    ym = 500-map(m, 30, 45, 100, 400);
  } else if (m>15){
    xm = map(m, 15, 30, 300, 600);
    ym = 400
  } else {
    xm = 300;
    ym = map(m, 0, 15, 100, 400)
  }


  if (s>45){
  triangle (xh, yh, xm, ym, (900-map(s, 45, 60, 300, 600)), 100);
  } else if (s>30){
  triangle(xh, yh, xm, ym, 600, (500-map(s, 30, 45, 100, 400)));
  } else if (s>15){
  triangle(xh, yh, xm, ym, map(s, 15, 30, 300, 600), 400);
  } else {
  triangle(xh, yh, xm, ym, 300, map(s, 0, 15, 100, 400))
  }

}
