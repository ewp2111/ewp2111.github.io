var img;

function preload() {
  sun = loadImage('sun.png');
  i1= loadImage('i1.png');
  i2= loadImage('i2.png');
  i3= loadImage('i3.png');
  l1= loadImage('l1.png');
  l2= loadImage('l2.png');
  l3= loadImage('l3.png');

}

function setup() {
  createCanvas(5000, 5000);
  frameRate(1);
}

function draw() {
 	var t = map(second(),0,60,0,255);
	tint(255,t);
	image(i1,10,200,200,200);


}

 console.log(t)

