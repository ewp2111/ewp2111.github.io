var state = 0;
var Width= 2200;
var Height = 3000;

function preload() {
  Aller_Lt = loadFont('Aller_Lt.ttf');
  Aller_Rg = loadFont('Aller_Rg.ttf');
  Aller_Bd = loadFont('Aller_Bd.ttf');
  b1= loadImage('beer logos-01.png');
  b2= loadImage('beer logos-02.png');
  b3= loadImage('beer logos-03.png');
  b4= loadImage('beer logos-04.png');
  b5= loadImage('beer logos-05.png');
  b6= loadImage('beer logos-06.png');
  b7= loadImage('beer logos-07.png');
  table = loadTable('data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(Width, Height);
  background (150);
  frameRate(30);
  noLoop();
}

function draw() {
  fill(0);
  textFont(Aller_Bd);
  textSize(30);
  //select fav beer//
  fill(255);
  text('Select Favorite Beer',80,100);
  noStroke();
  triangle(50,80,70,80,60,100);

  //hover
  if (mouseX >40
    && mouseX <390
    && mouseY>160
    && mouseY<200 ) {
    fill(150);
    rect(40,160,350,400);
    fill(100);
    rect(40,160,350,40)
  } else if (mouseX >40
    && mouseX <390
    && mouseY>200
    && mouseY<240 ) {
    fill(150);
    rect(40,160,350,400);
    fill(100);
    rect(40,200,350,40);
  } else if (mouseX >40
    && mouseX <390
    && mouseY>240
    && mouseY<280 ) {
    fill(150);
    rect(40,160,350,400);
    fill(100);
    rect(40,240,350,40);
  } else if (mouseX >40
    && mouseX <390
    && mouseY>280
    && mouseY<320 ) {
    fill(150);
    rect(40,160,350,400);
    fill(100);
    rect(40,280,350,40);
 } else if (mouseX >40
    && mouseX <390
    && mouseY>380
    && mouseY<420 ) {
    fill(150);
    rect(40,160,350,400);
    fill(100);
    rect(40,380,350,40);
 } else if (mouseX >40
    && mouseX <390
    && mouseY>420
    && mouseY<460 ) {
    fill(150);
    rect(40,160,350,400);
    fill(100);
    rect(40,420,350,40);
  } else if (mouseX >40
    && mouseX <390
    && mouseY>460
    && mouseY<500 ) {
    fill(150);
    rect(40,160,350,400);
    fill(100);
    rect(40,460,350,40);
  } else {
    fill(150);
    rect(40,160,350,400);
  };
  //text and image//
  fill(255);
  textSize(30);
  textFont(Aller_Rg);
  text('Ales',50,150);
  text('Lagers',50,370);
  textSize(25);
  textFont(Aller_Lt);
  text('IPA',90,190);
  text('Pale Ale',90,230);
  text('Amber',90,270);
  text('Stout',90,310);
  text('Pilsner',90,410);
  text('Light',90,450);
  text('Fruit/ Vegetable/ Spice',90,490);
  image(b1,40,160,40,40);
  image(b2,40,200,40,40);
  image(b3,40,240,40,40);
  image(b4,40,280,40,40);
  image(b5,40,380,40,40);
  image(b6,40,420,40,40);
  image(b7,40,460,40,40);

  //beer description window//

  var ipa= 'Extremely bitter and amber colored.\nABV: 5.5 - 7.5%\n\nMalt Level: 3\nHop Level: 5';
  var paleale= 'Malty and hoppy with fruity aromas.\nABV: 4.0-7.0%\n\nMalt Level: 3\nHop Level: 5';
  var amber= 'Sweet from excess malt and amber colored.\nABV: 4.0 - 7.0%\n\nMalt Level: 4\nHop Level: 2';
  var stout= 'Roasted not malted, sweet with carmel aromas.\nABV: 4.0-7.0%\n\nMalt Level: 1\nHop Level: 2';
  var pilsner= 'Straw colored, highly carbonated and low in alcohol.\nABV: 4.5-5.5%\n\nMalt Level: 2\nHop Level: 4';
  var light= 'Very low in malt with a light and dry body. Low hop character with no signs of flavor or aroma.\nABV: 2.5 - 3.5%\n\nMalt Level: 2\nHop Level: 2';
  var fruit= 'Infused with the flavors of fruits, vegetables or spices. Malt flavor is hidden with a low hop bitterness. \nABV: 2.5 - 3.5%\n\nMalt Level: 2\nHop Level: 1';
  //ipa
  if (state == 1){
      //selected turn bold//
    fill(200);
    noStroke();
    rect(520,50,700,400);
    fill(50);
    textFont(Aller_Bd);
    textSize(60);
    text('IPA',560,130);
    textFont(Aller_Lt);
    textSize(30);
    text(ipa, 700,160,500,300);
    image(b1,510,160,200,200);

  } else if (state ==2){
    fill(200);
    rect(520,50,700,400);
    fill(50);
    textFont(Aller_Bd);
    textSize(60);
    text('Pale Ale',560,130);
    textFont(Aller_Lt);
    textSize(30);
    text(paleale, 700,160,500,300);
    image(b2,510,160,200,200);
    } else if (state ==3){
    fill(200);
    rect(520,50,700,400);
    fill(50);
    textFont(Aller_Bd);
    textSize(60);
    text('Amber',560,130);
    textFont(Aller_Lt);
    textSize(30);
    text(amber, 700,160,500,300);
    image(b3,510,160,200,200);
  } else if (state ==4){
    fill(200);
    rect(520,50,700,400);
    fill(50);
    textFont(Aller_Bd);
    textSize(60);
    text('Stout',560,130);
    textFont(Aller_Lt);
    textSize(30);
    text(stout, 700,160,500,300);
    image(b4,510,160,200,200);
  } else if (state ==5){
    fill(200);
    rect(520,50,700,400);
    fill(50);
    textFont(Aller_Bd);
    textSize(60);
    text('Pilsner',560,130);
    textFont(Aller_Lt);
    textSize(30);
    text(pilsner, 700,160,500,300);
    image(b5,510,160,200,200);
  } else if (state ==6){
    fill(200);
    rect(520,50,700,400);
    fill(50);
    textFont(Aller_Bd);
    textSize(60);
    text('Light',560,130);
    textFont(Aller_Lt);
    textSize(30);
    text(light, 700,160,500,300);
    image(b6,510,160,200,200);
  } else if (state ==7){
    fill(200);
    rect(520,50,700,400);
    fill(50);
    textFont(Aller_Bd);
    textSize(60);
    text('Fruit/ Vegetable/ Spice',560,130);
    textFont(Aller_Lt);
    textSize(30);
    text(fruit, 700,160,500,300);
    image(b7,510,160,200,200)
  };

  fill(255);
  var noS = table.getColumn("noS");
  var noM = table.getColumn("noM");
  var noL = table.getColumn("noL");
  var noXL = table.getColumn("noXL");
  var year = table.getColumn("year");
  var malt = table.getColumn("malt");
  var rice = table.getColumn("rice");
  var hop = table.getColumn("hop");
  var hopextract = table.getColumn("hopextract");
  var hoprate = table.getColumn("hoprate");
  var hopacreage = table.getColumn("hopacreage");
  var aromahop = table.getColumn("aromahop");
  var hopvariety = table.getColumn("hopvariety");
  var hopincrease = table.getColumn("hopincrease");
  var year = table.getColumn("year");



//beer sales
  push();
  //title
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  text('Beer sales',350,680);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  
  var ystart= 700;
  var yend= 1000;
  var ytotal= ystart + yend;
  var xstart=150;
  var xend= 400;
  //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,(yend-ystart+250),yend);
  push();
  translate(90,850);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Milliion Pounds',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',350,1050);
  var Yaxis= [0,50,100,150,200,250,300,350];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],120,yend-(yend-ystart)/8*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+xend/12*(i+1)),yend+20)
  };
  stroke(255);
  fill(255);
  strokeWeight(2);
  var endvalue=400000000;
  var S0= ytotal-map(hop[0],0,endvalue,ystart,yend);
  var S1= ytotal-map(hop[1],0,endvalue,ystart,yend);
  var S2= ytotal-map(hop[2],0,endvalue,ystart,yend);
  var S3= ytotal-map(hop[3],0,endvalue,ystart,yend);
  var S4= ytotal-map(hop[4],0,endvalue,ystart,yend);
  var S5= ytotal-map(hop[5],0,endvalue,ystart,yend);
  var S6= ytotal-map(hop[6],0,endvalue,ystart,yend);
  var S7= ytotal-map(hop[7],0,endvalue,ystart,yend);
  var S8= ytotal-map(hop[8],0,endvalue,ystart,yend);
  var S9= ytotal-map(hop[9],0,endvalue,ystart,yend);
  var S10= ytotal-map(hop[10],0,endvalue,ystart,yend);
  var S = [S0,S1,S2,S3,S4,S5,S6,S7,S8,S9,S10];
  for (var i =0;i< S.length; i++) {
    line(xstart+xend/12*(i+1),S[i],xstart+xend/12*(i+2),S[i+1]);
    ellipse(xstart+xend/12*(i+1),S[i],5,5);
  };
  pop();


//Production 
//title
  push();
  translate(500,0);
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('Production',350,680);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  
  //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,(yend-ystart+250),yend);
  push();
  translate(90,850);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Number',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',350,1050);
  var Yaxis= [0,100];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],120,yend-(yend-ystart)/2*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+xend/12*(i+1)),yend+20)
  };
    stroke(255);
    fill(255);
  var M0= ytotal-map(noM[0],0,200,ystart,yend);
  var M1= ytotal-map(noM[1],0,200,ystart,yend);
  var M2= ytotal-map(noM[2],0,200,ystart,yend);
  var M3= ytotal-map(noM[3],0,200,ystart,yend);
  var M4= ytotal-map(noM[4],0,200,ystart,yend);
  var M5= ytotal-map(noM[5],0,200,ystart,yend);
  var M6= ytotal-map(noM[6],0,200,ystart,yend);
  var M7= ytotal-map(noM[7],0,200,ystart,yend);
  var M8= ytotal-map(noM[8],0,200,ystart,yend);
  var M9= ytotal-map(noM[9],0,200,ystart,yend);
  var M10= ytotal-map(noM[10],0,200,ystart,yend);
  var M = [M0,M1,M2,M3,M4,M5,M6,M7,M8,M9,M10];
  for (var i =0;i< M.length; i++) {
    line(xstart+xend/12*(i+1),M[i],xstart+xend/12*(i+2),M[i+1]);
    ellipse(xstart+xend/12*(i+1),M[i],5,5);
  };
  pop();



//Malt Consumption 
//title
  push();
  translate(1000,0);
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('Malt Consumption',350,680);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  
  //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,(yend-ystart+250),yend);
  push();
  translate(90,850);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Number',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',350,1050);
  var Yaxis= [0,100];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],120,yend-(yend-ystart)/2*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+xend/12*(i+1)),yend+20)
  };
    stroke(255);
    fill(255);
  var M0= ytotal-map(noM[0],0,200,ystart,yend);
  var M1= ytotal-map(noM[1],0,200,ystart,yend);
  var M2= ytotal-map(noM[2],0,200,ystart,yend);
  var M3= ytotal-map(noM[3],0,200,ystart,yend);
  var M4= ytotal-map(noM[4],0,200,ystart,yend);
  var M5= ytotal-map(noM[5],0,200,ystart,yend);
  var M6= ytotal-map(noM[6],0,200,ystart,yend);
  var M7= ytotal-map(noM[7],0,200,ystart,yend);
  var M8= ytotal-map(noM[8],0,200,ystart,yend);
  var M9= ytotal-map(noM[9],0,200,ystart,yend);
  var M10= ytotal-map(noM[10],0,200,ystart,yend);
  var M = [M0,M1,M2,M3,M4,M5,M6,M7,M8,M9,M10];
  for (var i =0;i< M.length; i++) {
    line(xstart+xend/12*(i+1),M[i],xstart+xend/12*(i+2),M[i+1]);
    ellipse(xstart+xend/12*(i+1),M[i],5,5);
  };
  pop();


  //Rice Consumption 
  //title
  push();
  translate(1500,0);
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('Rice Consumption',350,680);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  
  //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,(yend-ystart+250),yend);
  push();
  translate(90,850);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Number',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',350,1050);
  var Yaxis= [0,100];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],120,yend-(yend-ystart)/2*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+xend/12*(i+1)),yend+20)
  };
    stroke(255);
    fill(255);
  var M0= ytotal-map(noM[0],0,200,ystart,yend);
  var M1= ytotal-map(noM[1],0,200,ystart,yend);
  var M2= ytotal-map(noM[2],0,200,ystart,yend);
  var M3= ytotal-map(noM[3],0,200,ystart,yend);
  var M4= ytotal-map(noM[4],0,200,ystart,yend);
  var M5= ytotal-map(noM[5],0,200,ystart,yend);
  var M6= ytotal-map(noM[6],0,200,ystart,yend);
  var M7= ytotal-map(noM[7],0,200,ystart,yend);
  var M8= ytotal-map(noM[8],0,200,ystart,yend);
  var M9= ytotal-map(noM[9],0,200,ystart,yend);
  var M10= ytotal-map(noM[10],0,200,ystart,yend);
  var M = [M0,M1,M2,M3,M4,M5,M6,M7,M8,M9,M10];
  for (var i =0;i< M.length; i++) {
    line(xstart+xend/12*(i+1),M[i],xstart+xend/12*(i+2),M[i+1]);
    ellipse(xstart+xend/12*(i+1),M[i],5,5);
  };
  pop();




//hop consumption
  push();
  translate(0,500);
  //title
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  text('Hop Consumption',350,680);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  
  var ystart= 700;
  var yend= 1000;
  var ytotal= ystart + yend;
  var xstart=150;
  var xend= 400;
  //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,(yend-ystart+250),yend);
  push();
  translate(90,850);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Milliion Pounds',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',350,1050);
  var Yaxis= [0,50,100,150,200,250,300,350];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],120,yend-(yend-ystart)/8*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+xend/12*(i+1)),yend+20)
  };
  stroke(255);
  fill(255);
  strokeWeight(2);
  var endvalue=400000000;
  var S0= ytotal-map(hop[0],0,endvalue,ystart,yend);
  var S1= ytotal-map(hop[1],0,endvalue,ystart,yend);
  var S2= ytotal-map(hop[2],0,endvalue,ystart,yend);
  var S3= ytotal-map(hop[3],0,endvalue,ystart,yend);
  var S4= ytotal-map(hop[4],0,endvalue,ystart,yend);
  var S5= ytotal-map(hop[5],0,endvalue,ystart,yend);
  var S6= ytotal-map(hop[6],0,endvalue,ystart,yend);
  var S7= ytotal-map(hop[7],0,endvalue,ystart,yend);
  var S8= ytotal-map(hop[8],0,endvalue,ystart,yend);
  var S9= ytotal-map(hop[9],0,endvalue,ystart,yend);
  var S10= ytotal-map(hop[10],0,endvalue,ystart,yend);
  var S = [S0,S1,S2,S3,S4,S5,S6,S7,S8,S9,S10];
  for (var i =0;i< S.length; i++) {
    line(xstart+xend/12*(i+1),S[i],xstart+xend/12*(i+2),S[i+1]);
    ellipse(xstart+xend/12*(i+1),S[i],5,5);
  };
  pop();



//hop rate 
//title
  push();
  translate(500,500);
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('Hop Rate',350,680);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  
  //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,(yend-ystart+250),yend);
  push();
  translate(90,850);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Number',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',350,1050);
  var Yaxis= [0,100];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],120,yend-(yend-ystart)/2*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+xend/12*(i+1)),yend+20)
  };
    stroke(255);
    fill(255);
  var M0= ytotal-map(noM[0],0,200,ystart,yend);
  var M1= ytotal-map(noM[1],0,200,ystart,yend);
  var M2= ytotal-map(noM[2],0,200,ystart,yend);
  var M3= ytotal-map(noM[3],0,200,ystart,yend);
  var M4= ytotal-map(noM[4],0,200,ystart,yend);
  var M5= ytotal-map(noM[5],0,200,ystart,yend);
  var M6= ytotal-map(noM[6],0,200,ystart,yend);
  var M7= ytotal-map(noM[7],0,200,ystart,yend);
  var M8= ytotal-map(noM[8],0,200,ystart,yend);
  var M9= ytotal-map(noM[9],0,200,ystart,yend);
  var M10= ytotal-map(noM[10],0,200,ystart,yend);
  var M = [M0,M1,M2,M3,M4,M5,M6,M7,M8,M9,M10];
  for (var i =0;i< M.length; i++) {
    line(xstart+xend/12*(i+1),M[i],xstart+xend/12*(i+2),M[i+1]);
    ellipse(xstart+xend/12*(i+1),M[i],5,5);
  };
  pop();



//hop acreage 
//title
  push();
  translate(1000,500);
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('Hop Acreage',350,680);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  
  //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,(yend-ystart+250),yend);
  push();
  translate(90,850);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Number',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',350,1050);
  var Yaxis= [0,100];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],120,yend-(yend-ystart)/2*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+xend/12*(i+1)),yend+20)
  };
    stroke(255);
    fill(255);
  var M0= ytotal-map(noM[0],0,200,ystart,yend);
  var M1= ytotal-map(noM[1],0,200,ystart,yend);
  var M2= ytotal-map(noM[2],0,200,ystart,yend);
  var M3= ytotal-map(noM[3],0,200,ystart,yend);
  var M4= ytotal-map(noM[4],0,200,ystart,yend);
  var M5= ytotal-map(noM[5],0,200,ystart,yend);
  var M6= ytotal-map(noM[6],0,200,ystart,yend);
  var M7= ytotal-map(noM[7],0,200,ystart,yend);
  var M8= ytotal-map(noM[8],0,200,ystart,yend);
  var M9= ytotal-map(noM[9],0,200,ystart,yend);
  var M10= ytotal-map(noM[10],0,200,ystart,yend);
  var M = [M0,M1,M2,M3,M4,M5,M6,M7,M8,M9,M10];
  for (var i =0;i< M.length; i++) {
    line(xstart+xend/12*(i+1),M[i],xstart+xend/12*(i+2),M[i+1]);
    ellipse(xstart+xend/12*(i+1),M[i],5,5);
  };
  pop();


  //hop variety 
  //title
  push();
  translate(1500,500);
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('Hop Variety',350,680);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  
  //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,(yend-ystart+250),yend);
  push();
  translate(90,850);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Number',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',350,1050);
  var Yaxis= [0,100];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],120,yend-(yend-ystart)/2*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+xend/12*(i+1)),yend+20)
  };
    stroke(255);
    fill(255);
  var M0= ytotal-map(noM[0],0,200,ystart,yend);
  var M1= ytotal-map(noM[1],0,200,ystart,yend);
  var M2= ytotal-map(noM[2],0,200,ystart,yend);
  var M3= ytotal-map(noM[3],0,200,ystart,yend);
  var M4= ytotal-map(noM[4],0,200,ystart,yend);
  var M5= ytotal-map(noM[5],0,200,ystart,yend);
  var M6= ytotal-map(noM[6],0,200,ystart,yend);
  var M7= ytotal-map(noM[7],0,200,ystart,yend);
  var M8= ytotal-map(noM[8],0,200,ystart,yend);
  var M9= ytotal-map(noM[9],0,200,ystart,yend);
  var M10= ytotal-map(noM[10],0,200,ystart,yend);
  var M = [M0,M1,M2,M3,M4,M5,M6,M7,M8,M9,M10];
  for (var i =0;i< M.length; i++) {
    line(xstart+xend/12*(i+1),M[i],xstart+xend/12*(i+2),M[i+1]);
    ellipse(xstart+xend/12*(i+1),M[i],5,5);
  };
  pop();


  //no of breweries graph//
  push();
  translate(0,1000);
  //legend (S,M,L,XL)//
  fill(255);
  textFont(Aller_Bd);
  textAlign(LEFT);
  textSize(15);
  text('Size of Breweries',90,1120);
  textFont(Aller_Lt);
  text('XL: >6M Barrels\nL: 2M - 6M Barrels\nM: 60,000-2M Barrels\nS: <60,000 Barrels',90,1150);
  textSize(20);
  // console.log(year);
  //title
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  text('No. of S Breweries',350,680);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  
  var ystart= 700;
  var yend= 1000;
  var ytotal= ystart + yend;
  var xstart=150;
  var xend= 400;
  //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,(yend-ystart+250),yend);
  push();
  translate(90,850);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Number',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',350,1050);
  var Yaxis= [0,1000,2000,3000,4000,5000,6000];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],120,yend-(yend-ystart)/7*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+xend/12*(i+1)),yend+20)
  };
  //plot S//
  stroke(255);
  fill(255);
  strokeWeight(2);
  var S0= ytotal-map(noS[0],0,7000,ystart,yend);
  var S1= ytotal-map(noS[1],0,7000,ystart,yend);
  var S2= ytotal-map(noS[2],0,7000,ystart,yend);
  var S3= ytotal-map(noS[3],0,7000,ystart,yend);
  var S4= ytotal-map(noS[4],0,7000,ystart,yend);
  var S5= ytotal-map(noS[5],0,7000,ystart,yend);
  var S6= ytotal-map(noS[6],0,7000,ystart,yend);
  var S7= ytotal-map(noS[7],0,7000,ystart,yend);
  var S8= ytotal-map(noS[8],0,7000,ystart,yend);
  var S9= ytotal-map(noS[9],0,7000,ystart,yend);
  var S10= ytotal-map(noS[10],0,7000,ystart,yend);
  var S = [S0,S1,S2,S3,S4,S5,S6,S7,S8,S9,S10];
  for (var i =0;i< S.length; i++) {
    line(xstart+xend/12*(i+1),S[i],xstart+xend/12*(i+2),S[i+1]);
    ellipse(xstart+xend/12*(i+1),S[i],5,5);
  };

  //title
  push();
  translate(500,0);
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('No. of M Breweries',350,680);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  
  //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,(yend-ystart+250),yend);
  push();
  translate(90,850);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Number',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',350,1050);
  var Yaxis= [0,100];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],120,yend-(yend-ystart)/2*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+xend/12*(i+1)),yend+20)
  };
    stroke(255,0,0);
    fill(255,0,0);
  var M0= ytotal-map(noM[0],0,200,ystart,yend);
  var M1= ytotal-map(noM[1],0,200,ystart,yend);
  var M2= ytotal-map(noM[2],0,200,ystart,yend);
  var M3= ytotal-map(noM[3],0,200,ystart,yend);
  var M4= ytotal-map(noM[4],0,200,ystart,yend);
  var M5= ytotal-map(noM[5],0,200,ystart,yend);
  var M6= ytotal-map(noM[6],0,200,ystart,yend);
  var M7= ytotal-map(noM[7],0,200,ystart,yend);
  var M8= ytotal-map(noM[8],0,200,ystart,yend);
  var M9= ytotal-map(noM[9],0,200,ystart,yend);
  var M10= ytotal-map(noM[10],0,200,ystart,yend);
  var M = [M0,M1,M2,M3,M4,M5,M6,M7,M8,M9,M10];
  for (var i =0;i< M.length; i++) {
    line(xstart+xend/12*(i+1),M[i],xstart+xend/12*(i+2),M[i+1]);
    ellipse(xstart+xend/12*(i+1),M[i],5,5);
  };
  pop();

  //plot L//
   //title
  push();
  translate(1000,0);
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('No. of L Breweries',350,680);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  

    //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,(yend-ystart+250),yend);
  push();
  translate(90,850);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Number',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',350,1050);
  var Yaxis= [0,100];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],120,yend-(yend-ystart)/2*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+xend/12*(i+1)),yend+20)
  };
    stroke(0,255,0);
    fill(0,255,0);
  var L0= ytotal-map(noL[0],0,200,ystart,yend);
  var L1= ytotal-map(noL[1],0,200,ystart,yend);
  var L2= ytotal-map(noL[2],0,200,ystart,yend);
  var L3= ytotal-map(noL[3],0,200,ystart,yend);
  var L4= ytotal-map(noL[4],0,200,ystart,yend);
  var L5= ytotal-map(noL[5],0,200,ystart,yend);
  var L6= ytotal-map(noL[6],0,200,ystart,yend);
  var L7= ytotal-map(noL[7],0,200,ystart,yend);
  var L8= ytotal-map(noL[8],0,200,ystart,yend);
  var L9= ytotal-map(noL[9],0,200,ystart,yend);
  var L10= ytotal-map(noL[10],0,200,ystart,yend);
  var L = [L0,L1,L2,L3,L4,L5,L6,L7,L8,L9,L10];
  for (var i =0;i< L.length; i++) {
    line(xstart+xend/12*(i+1),L[i],xstart+xend/12*(i+2),L[i+1]);
    ellipse(xstart+xend/12*(i+1),L[i],5,5);
  };
  pop();

  //plot XL//
  push();
  translate(1500,0);
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('No. of XL Breweries',350,680);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  

    //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,(yend-ystart+250),yend);
  push();
  translate(90,850);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Number',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',350,1050);
  var Yaxis= [0,100];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],120,yend-(yend-ystart)/2*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+xend/12*(i+1)),yend+20)
  };
  stroke(0,0,255);
  fill(0,0,255);
  var XL0= ytotal-map(noXL[0],0,200,ystart,yend);
  var XL1= ytotal-map(noXL[1],0,200,ystart,yend);
  var XL2= ytotal-map(noXL[2],0,200,ystart,yend);
  var XL3= ytotal-map(noXL[3],0,200,ystart,yend);
  var XL4= ytotal-map(noXL[4],0,200,ystart,yend);
  var XL5= ytotal-map(noXL[5],0,200,ystart,yend);
  var XL6= ytotal-map(noXL[6],0,200,ystart,yend);
  var XL7= ytotal-map(noXL[7],0,200,ystart,yend);
  var XL8= ytotal-map(noXL[8],0,200,ystart,yend);
  var XL9= ytotal-map(noXL[9],0,200,ystart,yend);
  var XL10= ytotal-map(noXL[10],0,200,ystart,yend);
  var XL = [XL0,XL1,XL2,XL3,XL4,XL5,XL6,XL7,XL8,XL9,XL10];
  for (var i =0;i< L.length; i++) {
    line(xstart+xend/12*(i+1),XL[i],xstart+xend/12*(i+2),XL[i+1]);
    ellipse(xstart+xend/12*(i+1),XL[i],5,5);
  };
  pop();

}

function mousePressed() {
  if (mouseX >40
    && mouseX <390
    && mouseY>160
    && mouseY<200 ) {
    state = 1
  } else if (mouseX >40
    && mouseX <390
    && mouseY>200
    && mouseY<240 ) {
    state = 2
  } else if (mouseX >40
    && mouseX <390
    && mouseY>240
    && mouseY<280 ) {
    state = 3
  } else if (mouseX >40
    && mouseX <390
    && mouseY>280
    && mouseY<320 ) {
    state = 4
 } else if (mouseX >40
    && mouseX <390
    && mouseY>380
    && mouseY<420 ) {
    state = 5
 } else if (mouseX >40
    && mouseX <390
    && mouseY>420
    && mouseY<460 ) {
    state = 6
 } else if (mouseX >40
    && mouseX <390
    && mouseY>460
    && mouseY<500 ) {
    state = 7
  } else {
    state = 0;
  }
}
//beer sales graph?//
//selected beer type turns bold//


//ingredients graph//
//axis//
//malt//
//dry hops//
//hop extract//
//hover over display year//
//hover over display detail quantity//
//hover over for trend switching to dry hops//



//tax rate//


//policy//

//definition of craft breweries//
