var state = 0;


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
  table = loadTable('breweryno.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1920, 1080);
  background (150);
  frameRate(30);
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
  }
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



//no of breweries graph//
//legend (S,M,L,XL)//
//plot S//
//plot M//
//plot L//
//plot XL//


//tax rate//


//policy//

//definition of craft breweries//
