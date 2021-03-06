var state = 0;
var Width= 3000;
var Height = 2500;

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
  h=loadImage('hm.png');
  m=loadImage('hm1.png');
  s=loadImage('seal.png');
  table = loadTable('data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(Width, Height);
  background (150);
  frameRate(30);
  // noLoop();
}

function draw() {
  fill(0);
  textAlign(LEFT);
  textFont(Aller_Bd);
  textSize(30);
  //select fav beer//
  fill(255);
    noStroke();
  text('Select Favorite Beer',80,100);
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

  var ipa= 'Extremely bitter and amber colored.\nABV: 5.5 - 7.5%';
  var paleale= 'Malty and hoppy with fruity aromas.\nABV: 4.0-7.0%';
  var amber= 'Sweet from excess malt and amber colored.\nABV: 4.0 - 7.0%';
  var stout= 'Roasted not malted, sweet with carmel aromas.\nABV: 4.0-7.0%';
  var pilsner= 'Straw colored, highly carbonated and low in alcohol.\nABV: 4.5-5.5%';
  var light= 'Very low in malt with a light and dry body. Low hop character with no signs of flavor or aroma.\nABV: 2.5 - 3.5%';
  var fruit= 'Infused with the flavors of fruits, vegetables or spices. Malt flavor is hidden with a low hop bitterness. \nABV: 2.5 - 3.5%';
  var malthop = 'Malt Level\n\nHop Level'
  //ipa
  if (state == 1){

    fill(200);
    noStroke();
    rect(520,50,700,500,50,50,50,50);
    fill(50);
    textFont(Aller_Bd);
    textSize(60);
    text('IPA',560,130);
    textFont(Aller_Lt);
    textSize(30);
    text(ipa, 700,160,500,300);
    text(malthop,700,400);
    image(b1,510,160,200,200);
    for (var i = 0; i < 3; i++) {
    image(m,850+i*60,355,70,70)
    };
    for (var i = 0; i < 5; i++) {
    image(h,850+i*60,430,70,70)
    };

  } else if (state ==2){
    fill(200);
    rect(520,50,700,500,50,50,50,50);
    fill(50);
    textFont(Aller_Bd);
    textSize(60);
    text('Pale Ale',560,130);
    textFont(Aller_Lt);
    textSize(30);
    text(paleale, 700,160,500,300);
    text(malthop,700,400);
    image(b2,510,160,200,200);
    for (var i = 0; i < 3; i++) {
    image(m,850+i*60,355,70,70)
    };
    for (var i = 0; i < 5; i++) {
    image(h,850+i*60,430,70,70)
    };
    } else if (state ==3){
    fill(200);
    rect(520,50,700,500,50,50,50,50);
    fill(50);
    textFont(Aller_Bd);
    textSize(60);
    text('Amber',560,130);
    textFont(Aller_Lt);
    textSize(30);
    text(amber, 700,160,500,300);
        text(malthop,700,400);
    image(b3,510,160,200,200);
    for (var i = 0; i < 4; i++) {
    image(m,850+i*60,355,70,70)
    };
    for (var i = 0; i < 2; i++) {
    image(h,850+i*60,430,70,70)
    };
  } else if (state ==4){
    fill(200);
    rect(520,50,700,500,50,50,50,50);
    fill(50);
    textFont(Aller_Bd);
    textSize(60);
    text('Stout',560,130);
    textFont(Aller_Lt);
    textSize(30);
    text(stout, 700,160,500,300);
        text(malthop,700,400);
    image(b4,510,160,200,200);
        for (var i = 0; i < 1; i++) {
    image(m,850+i*60,355,70,70)
    };
    for (var i = 0; i < 2; i++) {
    image(h,850+i*60,430,70,70)
    };
  } else if (state ==5){
    fill(200);
    rect(520,50,700,500,50,50,50,50);
    fill(50);
    textFont(Aller_Bd);
    textSize(60);
    text('Pilsner',560,130);
    textFont(Aller_Lt);
    textSize(30);
    text(pilsner, 700,160,500,300);
        text(malthop,700,400);
    image(b5,510,160,200,200);
        for (var i = 0; i < 2; i++) {
    image(m,850+i*60,355,70,70)
    };
    for (var i = 0; i < 4; i++) {
    image(h,850+i*60,430,70,70)
    };
  } else if (state ==6){
    fill(200);
    rect(520,50,700,500,50,50,50,50);
    fill(50);
    textFont(Aller_Bd);
    textSize(60);
    text('Light',560,130);
    textFont(Aller_Lt);
    textSize(30);
    text(light, 700,160,500,300);
        text(malthop,700,400);
    image(b6,510,160,200,200);
        for (var i = 0; i < 2; i++) {
    image(m,850+i*60,355,70,70)
    };
    for (var i = 0; i < 2; i++) {
    image(h,850+i*60,430,70,70)
    };
  } else if (state ==7){
    fill(200);
    rect(520,50,700,500,50,50,50,50);
    fill(50);
    textFont(Aller_Bd);
    textSize(60);
    text('Fruit/ Vegetable/ Spice',560,130);
    textFont(Aller_Lt);
    textSize(30);
    text(fruit, 700,160,500,300);
        text(malthop,700,400);
    image(b7,510,160,200,200);
        for (var i = 0; i < 2; i++) {
    image(m,850+i*60,355,70,70)
    };
    for (var i = 0; i < 1; i++) {
    image(h,850+i*60,430,70,70)
    };
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
  var HR = table.getColumn("hoprate");
  var HA = table.getColumn("hopacreage");
  var AH = table.getColumn("aromahop");
  var HV = table.getColumn("hopvariety");
  var HI = table.getColumn("hopincrease");
  var year = table.getColumn("year");
  var prod = table.getColumn("production");
  var CP = table.getColumn("craftproduction");
  var CI = table.getColumn("craftincrease");
  var Ipa = table.getColumn("ipa");
  var Paleale = table.getColumn("paleale");
  var Amber = table.getColumn("amber");
  var Stout = table.getColumn("stout");
  var Pilsner = table.getColumn("pilsner");
  var Light = table.getColumn("light");
  var Fruit = table.getColumn("fruit");


//beer sales
  //title
  if (state!=0){
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  text('Beer sales',350,680);
  textSize(50);
  text('CRAFT DOMINATES',2350,680);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  
  var ystart= 700;
  var yend= 1000;
  var ytotal= ystart + yend;
  var xstart=150;
  var xend= 550;
  //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,xend,yend);
  push();
  translate(90,850);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Milliion Barrels',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',350,1050);
   for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+(xend-xstart)/12*(i+1)),yend+20)
  };


  if (state ==1){
    fill(150);
    rect(151,700,400,300);
    rect(100,700,40,310);
    fill(255);
    strokeWeight(1);
    var Yaxis= [0,200,400,600];
    textFont(Aller_Lt);
    for (var i =0; i<Yaxis.length; i++) {
      text(Yaxis[i],120,yend-(yend-ystart)/4*i)
    };
    //IPA

    strokeWeight(2);
    var endvalue=800;
    var S0= ytotal-map(Ipa[0],0,endvalue,ystart,yend);
    var S1= ytotal-map(Ipa[1],0,endvalue,ystart,yend);
    var S2= ytotal-map(Ipa[2],0,endvalue,ystart,yend);
    var S3= ytotal-map(Ipa[3],0,endvalue,ystart,yend);
    var S4= ytotal-map(Ipa[4],0,endvalue,ystart,yend);
    var S5= ytotal-map(Ipa[5],0,endvalue,ystart,yend);
    var S6= ytotal-map(Ipa[6],0,endvalue,ystart,yend);
    var S7= ytotal-map(Ipa[7],0,endvalue,ystart,yend);
    var S8= ytotal-map(Ipa[8],0,endvalue,ystart,yend);
    var S9= ytotal-map(Ipa[9],0,endvalue,ystart,yend);
    var S10= ytotal-map(Ipa[10],0,endvalue,ystart,yend);
    var S = [S0,S1,S2,S3,S4,S5,S6,S7,S8,S9,S10];
    var Sp=[0,500,1000,1500];
    //toggle IPA
    for (var i =0;i< S.length; i++) {
      for (var j = 0; j < Sp.length; j++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1)+Sp[j])
      && mouseX<xstart+(xend-xstart)/12*(i+2)+Sp[j]){
      noStroke();
      fill(150);
      rect(151,700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),S[i]);
      textSize(25);
      stroke(151,99,46);
      fill(151,99,46);
      text(Ipa[i],xstart+(xend-xstart)/12*(i+1),S[i]-20);
    };
          };
  };
    for (var i =0;i< S.length; i++) {
      stroke(151,99,46);
      fill(151,99,46);
      line(xstart+(xend-xstart)/12*(i+1),S[i],xstart+(xend-xstart)/12*(i+2),S[i+1]);
      ellipse(xstart+(xend-xstart)/12*(i+1),S[i],5,5);
    };
  } else if (state ==2){
    fill(150);
    rect(151,700,400,300);
    rect(100,700,40,310);
    fill(255);
    var Yaxis= [0,40,80,120,160];
    textFont(Aller_Lt);
    for (var i =0; i<Yaxis.length; i++) {
      text(Yaxis[i],120,yend-(yend-ystart)/5*i)
    };
    //Pale Ale

    var endvalue=200;
    var S0= ytotal-map(Paleale[0],0,endvalue,ystart,yend);
    var S1= ytotal-map(Paleale[1],0,endvalue,ystart,yend);
    var S2= ytotal-map(Paleale[2],0,endvalue,ystart,yend);
    var S3= ytotal-map(Paleale[3],0,endvalue,ystart,yend);
    var S4= ytotal-map(Paleale[4],0,endvalue,ystart,yend);
    var S5= ytotal-map(Paleale[5],0,endvalue,ystart,yend);
    var S6= ytotal-map(Paleale[6],0,endvalue,ystart,yend);
    var S7= ytotal-map(Paleale[7],0,endvalue,ystart,yend);
    var S8= ytotal-map(Paleale[8],0,endvalue,ystart,yend);
    var S9= ytotal-map(Paleale[9],0,endvalue,ystart,yend);
    var S10= ytotal-map(Paleale[10],0,endvalue,ystart,yend);
    var S = [S0,S1,S2,S3,S4,S5,S6,S7,S8,S9,S10];
    var Sp=[0,500,1000,1500];
    //toggle Pale ale
    for (var i =0;i< S.length; i++) {
      for (var j = 0; j < Sp.length; j++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1)+Sp[j])
      && mouseX<xstart+(xend-xstart)/12*(i+2)+Sp[j]){
      fill(150);
      rect(151,700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),S[i]);
      textSize(25);
      stroke(202,155,53);
      fill(202,155,53);
      text(Paleale[i],xstart+(xend-xstart)/12*(i+1),S[i]-20);
    };
  };
  };
    for (var i =0;i< S.length; i++) {
      stroke(202,155,53);
      fill(202,155,53);
      strokeWeight(2);
      line(xstart+(xend-xstart)/12*(i+1),S[i],xstart+(xend-xstart)/12*(i+2),S[i+1]);
      ellipse(xstart+(xend-xstart)/12*(i+1),S[i],5,5);
    };
  } else if (state ==3){
        fill(150);
    rect(151,700,400,300);
    rect(100,700,40,310);
    fill(255);
    var Yaxis= [0,40,80,120,160];
    textFont(Aller_Lt);
    for (var i =0; i<Yaxis.length; i++) {
      text(Yaxis[i],120,yend-(yend-ystart)/5*i)
    };

    //Amber
    var endvalue=200;
    var S0= ytotal-map(Amber[0],0,endvalue,ystart,yend);
    var S1= ytotal-map(Amber[1],0,endvalue,ystart,yend);
    var S2= ytotal-map(Amber[2],0,endvalue,ystart,yend);
    var S3= ytotal-map(Amber[3],0,endvalue,ystart,yend);
    var S4= ytotal-map(Amber[4],0,endvalue,ystart,yend);
    var S5= ytotal-map(Amber[5],0,endvalue,ystart,yend);
    var S6= ytotal-map(Amber[6],0,endvalue,ystart,yend);
    var S7= ytotal-map(Amber[7],0,endvalue,ystart,yend);
    var S8= ytotal-map(Amber[8],0,endvalue,ystart,yend);
    var S9= ytotal-map(Amber[9],0,endvalue,ystart,yend);
    var S10= ytotal-map(Amber[10],0,endvalue,ystart,yend);
    var S = [S0,S1,S2,S3,S4,S5,S6,S7,S8,S9,S10];
       var Sp=[0,500,1000,1500];
    //toggle Amber
    for (var i =0;i< S.length; i++) {
      for (var j = 0; j < Sp.length; j++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1)+Sp[j])
      && mouseX<xstart+(xend-xstart)/12*(i+2)+Sp[j]){
      noStroke();
      fill(150);
      rect(151,700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),S[i]);
      textSize(25);
    stroke(117,66,42);
    fill(117,66,42);
      text(Amber[i],xstart+(xend-xstart)/12*(i+1),S[i]-20);
    };
    };
  };

    strokeWeight(2);
    stroke(117,66,42);
    fill(117,66,42);
    for (var i =0;i< S.length; i++) {
      line(xstart+(xend-xstart)/12*(i+1),S[i],xstart+(xend-xstart)/12*(i+2),S[i+1]);
      ellipse(xstart+(xend-xstart)/12*(i+1),S[i],5,5);
    };
  } else if (state ==4){
        fill(150);
    rect(151,700,400,300);
    rect(100,700,40,310);
    fill(255);
    var Yaxis= [0,40,80,120,160];
    textFont(Aller_Lt);
    for (var i =0; i<Yaxis.length; i++) {
      text(Yaxis[i],120,yend-(yend-ystart)/5*i)
    };
    //Stout

    var endvalue=200;
    var S0= ytotal-map(Stout[0],0,endvalue,ystart,yend);
    var S1= ytotal-map(Stout[1],0,endvalue,ystart,yend);
    var S2= ytotal-map(Stout[2],0,endvalue,ystart,yend);
    var S3= ytotal-map(Stout[3],0,endvalue,ystart,yend);
    var S4= ytotal-map(Stout[4],0,endvalue,ystart,yend);
    var S5= ytotal-map(Stout[5],0,endvalue,ystart,yend);
    var S6= ytotal-map(Stout[6],0,endvalue,ystart,yend);
    var S7= ytotal-map(Stout[7],0,endvalue,ystart,yend);
    var S8= ytotal-map(Stout[8],0,endvalue,ystart,yend);
    var S9= ytotal-map(Stout[9],0,endvalue,ystart,yend);
    var S10= ytotal-map(Stout[10],0,endvalue,ystart,yend);
    var S = [S0,S1,S2,S3,S4,S5,S6,S7,S8,S9,S10];
    var Sp=[0,500,1000,1500];
    //toggle Stout
    for (var i =0;i< S.length; i++) {
      for (var j = 0; j < Sp.length; j++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1)+Sp[j])
      && mouseX<xstart+(xend-xstart)/12*(i+2)+Sp[j]){
      noStroke();
      fill(150);
      rect(151,700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),S[i]);
      textSize(25);
      stroke(55,36,36);
        fill(55,36,36);
      text(Stout[i],xstart+(xend-xstart)/12*(i+1),S[i]-20);
    };
  };
  };    
  stroke(55,36,36);
    fill(55,36,36);
    strokeWeight(2);
    for (var i =0;i< S.length; i++) {
      line(xstart+(xend-xstart)/12*(i+1),S[i],xstart+(xend-xstart)/12*(i+2),S[i+1]);
      ellipse(xstart+(xend-xstart)/12*(i+1),S[i],5,5);
    };
  } else if (state ==5){
        fill(150);
    rect(151,700,400,300);
    rect(100,700,40,310);
    fill(255);
    var Yaxis= [0,40,80,120,160];
    textFont(Aller_Lt);
    for (var i =0; i<Yaxis.length; i++) {
      text(Yaxis[i],120,yend-(yend-ystart)/5*i)
    };
      //Pilsner

    var endvalue=200;
    var S0= ytotal-map(Pilsner[0],0,endvalue,ystart,yend);
    var S1= ytotal-map(Pilsner[1],0,endvalue,ystart,yend);
    var S2= ytotal-map(Pilsner[2],0,endvalue,ystart,yend);
    var S3= ytotal-map(Pilsner[3],0,endvalue,ystart,yend);
    var S4= ytotal-map(Pilsner[4],0,endvalue,ystart,yend);
    var S5= ytotal-map(Pilsner[5],0,endvalue,ystart,yend);
    var S6= ytotal-map(Pilsner[6],0,endvalue,ystart,yend);
    var S7= ytotal-map(Pilsner[7],0,endvalue,ystart,yend);
    var S8= ytotal-map(Pilsner[8],0,endvalue,ystart,yend);
    var S9= ytotal-map(Pilsner[9],0,endvalue,ystart,yend);
    var S10= ytotal-map(Pilsner[10],0,endvalue,ystart,yend);
    var S = [S0,S1,S2,S3,S4,S5,S6,S7,S8,S9,S10];
    var Sp=[0,500,1000,1500];
    //toggle pilsner
    for (var i =0;i< S.length; i++) {
      for (var j = 0; j < Sp.length; j++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1)+Sp[j])
      && mouseX<xstart+(xend-xstart)/12*(i+2)+Sp[j]){
      noStroke();
      fill(150);
      rect(151,700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),S[i]);
      textSize(25);
    stroke(169,134,58);
    fill(169,134,58);
      text(Pilsner[i],xstart+(xend-xstart)/12*(i+1),S[i]-20);
    };
  };
  };       
    stroke(169,134,58);
    fill(169,134,58);
    strokeWeight(2);
    for (var i =0;i< S.length; i++) {
      line(xstart+(xend-xstart)/12*(i+1),S[i],xstart+(xend-xstart)/12*(i+2),S[i+1]);
      ellipse(xstart+(xend-xstart)/12*(i+1),S[i],5,5);
    };
  } else if (state ==6){
        fill(150);
    rect(151,700,400,300);
    rect(100,700,40,310);
    fill(255);
    var Yaxis= [0,40,80,120,160];
    textFont(Aller_Lt);
    for (var i =0; i<Yaxis.length; i++) {
      text(Yaxis[i],120,yend-(yend-ystart)/5*i)
    };
      //Light
    var endvalue=200;
    var S0= ytotal-map(Light[0],0,endvalue,ystart,yend);
    var S1= ytotal-map(Light[1],0,endvalue,ystart,yend);
    var S2= ytotal-map(Light[2],0,endvalue,ystart,yend);
    var S3= ytotal-map(Light[3],0,endvalue,ystart,yend);
    var S4= ytotal-map(Light[4],0,endvalue,ystart,yend);
    var S5= ytotal-map(Light[5],0,endvalue,ystart,yend);
    var S6= ytotal-map(Light[6],0,endvalue,ystart,yend);
    var S7= ytotal-map(Light[7],0,endvalue,ystart,yend);
    var S8= ytotal-map(Light[8],0,endvalue,ystart,yend);
    var S9= ytotal-map(Light[9],0,endvalue,ystart,yend);
    var S10= ytotal-map(Light[10],0,endvalue,ystart,yend);
    var S = [S0,S1,S2,S3,S4,S5,S6,S7,S8,S9,S10];
    var Sp=[0,500,1000,1500];
    //toggle light
    for (var i =0;i< S.length; i++) {
      for (var j = 0; j < Sp.length; j++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1)+Sp[j])
      && mouseX<xstart+(xend-xstart)/12*(i+2)+Sp[j]){
      noStroke();
      fill(150);
      rect(151,700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),S[i]);
      textSize(25);
      stroke(228,185,75);
    fill(228,185,75);
      text(Light[i],xstart+(xend-xstart)/12*(i+1),S[i]-20);
    };
  };
  };          
  stroke(228,185,75);
    fill(228,185,75);
    strokeWeight(2); 
    for (var i =0;i< S.length; i++) {
      line(xstart+(xend-xstart)/12*(i+1),S[i],xstart+(xend-xstart)/12*(i+2),S[i+1]);
      ellipse(xstart+(xend-xstart)/12*(i+1),S[i],5,5);
    };
  } else if (state ==7){
        fill(150);
    rect(151,700,400,300);
    rect(100,700,40,310);
    fill(255);
    var Yaxis= [0,40,80,120,160];
    textFont(Aller_Lt);
    for (var i =0; i<Yaxis.length; i++) {
      text(Yaxis[i],120,yend-(yend-ystart)/5*i)
    };
      //Fruit

    var endvalue=200;
    var S0= ytotal-map(Fruit[0],0,endvalue,ystart,yend);
    var S1= ytotal-map(Fruit[1],0,endvalue,ystart,yend);
    var S2= ytotal-map(Fruit[2],0,endvalue,ystart,yend);
    var S3= ytotal-map(Fruit[3],0,endvalue,ystart,yend);
    var S4= ytotal-map(Fruit[4],0,endvalue,ystart,yend);
    var S5= ytotal-map(Fruit[5],0,endvalue,ystart,yend);
    var S6= ytotal-map(Fruit[6],0,endvalue,ystart,yend);
    var S7= ytotal-map(Fruit[7],0,endvalue,ystart,yend);
    var S8= ytotal-map(Fruit[8],0,endvalue,ystart,yend);
    var S9= ytotal-map(Fruit[9],0,endvalue,ystart,yend);
    var S10= ytotal-map(Fruit[10],0,endvalue,ystart,yend);
    var S = [S0,S1,S2,S3,S4,S5,S6,S7,S8,S9,S10];
    var Sp=[0,500,1000,1500];
    //toggle fruit
    for (var i =0;i< S.length; i++) {
      for (var j = 0; j < Sp.length; j++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1)+Sp[j])
      && mouseX<xstart+(xend-xstart)/12*(i+2)+Sp[j]){
      noStroke();
      fill(150);
      rect(151,700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),S[i]);
      textSize(25);
      stroke(211,113,87);
      fill(211,113,87);
      text(Fruit[i],xstart+(xend-xstart)/12*(i+1),S[i]-20);
    };
  };
  };              
  stroke(211,113,87);
    fill(211,113,87);
    strokeWeight(2);
    for (var i =0;i< S.length; i++) {
      line(xstart+(xend-xstart)/12*(i+1),S[i],xstart+(xend-xstart)/12*(i+2),S[i+1]);
      ellipse(xstart+(xend-xstart)/12*(i+1),S[i],5,5);
    };
  };
};


//Production
// console.log(prod);
  if (state!=0){
  stroke(255);
  fill(255);
  var ystart= 700;
  var yend= 1000;
  var ytotal= ystart + yend;
  var xstart=650;
  var xend= 1050; 
//title
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('Production',850,680);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  
  //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,xend,yend);
  push();
  translate(590,850);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Million Barrels',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',850,1050);
  var Yaxis= [0,100,200];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],620,yend-(yend-ystart)/3*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+(xend-xstart)/12*(i+1)),yend+20)
  };
    stroke(255);
    fill(255);
  var M0= ytotal-map(prod[0],0,300000000,ystart,yend);
  var M1= ytotal-map(prod[1],0,300000000,ystart,yend);
  var M2= ytotal-map(prod[2],0,300000000,ystart,yend);
  var M3= ytotal-map(prod[3],0,300000000,ystart,yend);
  var M4= ytotal-map(prod[4],0,300000000,ystart,yend);
  var M5= ytotal-map(prod[5],0,300000000,ystart,yend);
  var M6= ytotal-map(prod[6],0,300000000,ystart,yend);
  var M7= ytotal-map(prod[7],0,300000000,ystart,yend);
  var M8= ytotal-map(prod[8],0,300000000,ystart,yend);
  var M9= ytotal-map(prod[9],0,300000000,ystart,yend);
  var M10= ytotal-map(prod[10],0,300000000,ystart,yend);
  var M = [M0,M1,M2,M3,M4,M5,M6,M7,M8,M9,M10];
      //toggle production
  for (var i =0;i< M.length; i++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1))
      && mouseX<xstart+(xend-xstart)/12*(i+2)){
      noStroke();
      fill(150);
      rect(651,700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),M[i]);
      fill(255);
      textSize(25);
      text(malt[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)-500)
      && mouseX<xstart+(xend-xstart)/12*(i+2)-500){
      noStroke();
      fill(150);
      rect(651,700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),M[i]);
      fill(255);
      textSize(25);
      text(malt[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)+500)
      && mouseX<xstart+(xend-xstart)/12*(i+2)+500){
      noStroke();
      fill(150);
      rect(651,700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),M[i]);
      fill(255);
      textSize(25);
      text(malt[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)+1000)
      && mouseX<xstart+(xend-xstart)/12*(i+2)+1000){
      noStroke();
      fill(150);
      rect(651,700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),M[i]);
      fill(255);
      textSize(25);
      text(malt[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    };
  };
  for (var i =0;i< M.length; i++) {
    strokeWeight(2);
    line(xstart+(xend-xstart)/12*(i+1),M[i],xstart+(xend-xstart)/12*(i+2),M[i+1]);
    ellipse(xstart+(xend-xstart)/12*(i+1),M[i],5,5);
  };
//craftproduction
    stroke(0);
    fill(0);
  var M0= ytotal-map(CP[0],0,300,ystart,yend);
  var M1= ytotal-map(CP[1],0,300,ystart,yend);
  var M2= ytotal-map(CP[2],0,300,ystart,yend);
  var M3= ytotal-map(CP[3],0,300,ystart,yend);
  var M4= ytotal-map(CP[4],0,300,ystart,yend);
  var M5= ytotal-map(CP[5],0,300,ystart,yend);
  var M6= ytotal-map(CP[6],0,300,ystart,yend);
  var M7= ytotal-map(CP[7],0,300,ystart,yend);
  var M8= ytotal-map(CP[8],0,300,ystart,yend);
  var M9= ytotal-map(CP[9],0,300,ystart,yend);
  var M10= ytotal-map(CP[10],0,300,ystart,yend);
  var M = [M0,M1,M2,M3,M4,M5,M6,M7,M8,M9,M10];
  for (var i =0;i< M.length; i++) {
    line(xstart+(xend-xstart)/12*(i+1),M[i],xstart+(xend-xstart)/12*(i+2),M[i+1]);
    ellipse(xstart+(xend-xstart)/12*(i+1),M[i],5,5);
  };
//craftincrease
    stroke(255,0,0);
    fill(255,0,0);
  var M0= ytotal-map(CI[0],0,100,ystart,yend);
  var M1= ytotal-map(CI[1],0,100,ystart,yend);
  var M2= ytotal-map(CI[2],0,100,ystart,yend);
  var M3= ytotal-map(CI[3],0,100,ystart,yend);
  var M4= ytotal-map(CI[4],0,100,ystart,yend);
  var M5= ytotal-map(CI[5],0,100,ystart,yend);
  var M6= ytotal-map(CI[6],0,100,ystart,yend);
  var M7= ytotal-map(CI[7],0,100,ystart,yend);
  var M8= ytotal-map(CI[8],0,100,ystart,yend);
  var M9= ytotal-map(CI[9],0,100,ystart,yend);
  var M10= ytotal-map(CI[10],0,100,ystart,yend);
  var M = [M0,M1,M2,M3,M4,M5,M6,M7,M8,M9,M10];
  for (var i =0;i< M.length; i++) {
    line(xstart+(xend-xstart)/12*(i+1),M[i],xstart+(xend-xstart)/12*(i+2),M[i+1]);
    ellipse(xstart+(xend-xstart)/12*(i+1),M[i],5,5);
  };
};


//Malt Consumption 
  if (state!=0){
  var ystart= 700;
  var yend= 1000;
  var ytotal= ystart + yend;
  var xstart=1150;
  var xend= 1550; 
//title
   stroke(255);
    fill(255);
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('Malt Consumption',1350,680);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  
  //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,xend,yend);
  push();
  translate(1090,850);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Million Pounds',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',1350,1050);
  var Yaxis= [0,1000,2000,3000,4000,5000];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],1120,yend-(yend-ystart)/6*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+(xend-xstart)/12*(i+1)),yend+20)
  };
    stroke(255);
    fill(255);
  var M0= ytotal-map(malt[0],0,6000,ystart,yend);
  var M1= ytotal-map(malt[1],0,6000,ystart,yend);
  var M2= ytotal-map(malt[2],0,6000,ystart,yend);
  var M3= ytotal-map(malt[3],0,6000,ystart,yend);
  var M4= ytotal-map(malt[4],0,6000,ystart,yend);
  var M5= ytotal-map(malt[5],0,6000,ystart,yend);
  var M6= ytotal-map(malt[6],0,6000,ystart,yend);
  var M7= ytotal-map(malt[7],0,6000,ystart,yend);
  var M8= ytotal-map(malt[8],0,6000,ystart,yend);
  var M9= ytotal-map(malt[9],0,6000,ystart,yend);
  var M10= ytotal-map(malt[10],0,6000,ystart,yend);
  var M = [M0,M1,M2,M3,M4,M5,M6,M7,M8,M9,M10];
    //toggle malt
  for (var i =0;i< M.length; i++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1))
      && mouseX<xstart+(xend-xstart)/12*(i+2)){
      noStroke();
      fill(150);
      rect(1151,700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),M[i]);
      fill(255);
      textSize(25);
      text(malt[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)-500)
      && mouseX<xstart+(xend-xstart)/12*(i+2)-500){
      noStroke();
      fill(150);
      rect(1151,700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),M[i]);
      fill(255);
      textSize(25);
      text(malt[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)-1000)
      && mouseX<xstart+(xend-xstart)/12*(i+2)-1000){
      noStroke();
      fill(150);
      rect(1151,700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),M[i]);
      fill(255);
      textSize(25);
      text(malt[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)+500)
      && mouseX<xstart+(xend-xstart)/12*(i+2)+500){
      noStroke();
      fill(150);
      rect(1151,700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),M[i]);
      fill(255);
      textSize(25);
      text(malt[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    };
  };
  for (var i =0;i< M.length; i++) {
        strokeWeight(2);
    line(xstart+(xend-xstart)/12*(i+1),M[i],xstart+(xend-xstart)/12*(i+2),M[i+1]);
    ellipse(xstart+(xend-xstart)/12*(i+1),M[i],5,5);
  };
};


  //Rice Consumption
    if (state!=0){
  var ystart= 700;
  var yend= 1000;
  var ytotal= ystart + yend;
  var xstart=1650;
  var xend= 2050;  
  //title
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('Rice Consumption',1850,680);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  
  //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,xend,yend);
  push();
  translate(1590,850);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Billion Pounds',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',1850,1050);
  var Yaxis= [0,200,400,600,800];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],1620,yend-(yend-ystart)/5*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+(xend-xstart)/12*(i+1)),yend+20)
  };
    stroke(255);
    fill(255);
  var M0= ytotal-map(rice[0],0,1000,ystart,yend);
  var M1= ytotal-map(rice[1],0,1000,ystart,yend);
  var M2= ytotal-map(rice[2],0,1000,ystart,yend);
  var M3= ytotal-map(rice[3],0,1000,ystart,yend);
  var M4= ytotal-map(rice[4],0,1000,ystart,yend);
  var M5= ytotal-map(rice[5],0,1000,ystart,yend);
  var M6= ytotal-map(rice[6],0,1000,ystart,yend);
  var M7= ytotal-map(rice[7],0,1000,ystart,yend);
  var M8= ytotal-map(rice[8],0,1000,ystart,yend);
  var M9= ytotal-map(rice[9],0,1000,ystart,yend);
  var M10= ytotal-map(rice[10],0,1000,ystart,yend);
  var M = [M0,M1,M2,M3,M4,M5,M6,M7,M8,M9,M10];
  var Sp= [0,500,1000,1500];
    //toggle rice consumption
  for (var i =0;i< M.length; i++) {
    for (var j = 0; j < Sp.length; j++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1)-Sp[j])
      && mouseX<xstart+(xend-xstart)/12*(i+2)-Sp[j]){
      noStroke();
      fill(150);
      rect(1651,700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),M[i]);
      fill(255);
      textSize(25);
      text(rice[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    };
        };
  };
  for (var i =0;i< M.length; i++) {
    line(xstart+(xend-xstart)/12*(i+1),M[i],xstart+(xend-xstart)/12*(i+2),M[i+1]);
    ellipse(xstart+(xend-xstart)/12*(i+1),M[i],5,5);
  };
};

//hop consumption
  if (state!=0){
  var ystart= 1200;
  var yend= 1500;
  var ytotal= ystart + yend;
  var xstart=150;
  var xend= 550;  
  //title
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  text('Hop Consumption',350,1180);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  

  //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,xend,yend);
  push();
  translate(90,1350);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Milliion Pounds',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',350,1550);
  var Yaxis= [0,50,100,150,200,250,300,350];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],120,yend-(yend-ystart)/8*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+(xend-xstart)/12*(i+1)),yend+20)
  };
  var endvalue=400;
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
    //toggle hop consumption
  for (var i =0;i< S.length; i++) {
    if ((xstart+(xend-xstart)/12*(i+1))<mouseX
      && mouseX<xstart+(xend-xstart)/12*(i+2)){
      noStroke();
      fill(150);
      rect(151,1200,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1500,xstart+(xend-xstart)/12*(i+1),S[i]);
      textSize(25);
      fill(255);
      text(hop[i],xstart+(xend-xstart)/12*(i+1),S[i]-20);
    } else if ((500+xstart+(xend-xstart)/12*(i+1))<mouseX
      && mouseX<500+xstart+(xend-xstart)/12*(i+2)){
      noStroke();
      fill(150);
      rect(151,1200,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1500,xstart+(xend-xstart)/12*(i+1),S[i]);
      textSize(25);
      fill(255);
      text(hop[i],xstart+(xend-xstart)/12*(i+1),S[i]-20);
    } else if ((1000+xstart+(xend-xstart)/12*(i+1))<mouseX
      && mouseX<1000+xstart+(xend-xstart)/12*(i+2)){
      noStroke();
      fill(150);
      rect(151,1200,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1500,xstart+(xend-xstart)/12*(i+1),S[i]);
      textSize(25);
      fill(255);
      text(hop[i],xstart+(xend-xstart)/12*(i+1),S[i]-20);
    } else if ((1500+xstart+(xend-xstart)/12*(i+1))<mouseX
      && mouseX<1500+xstart+(xend-xstart)/12*(i+2)){
      noStroke();
      fill(150);
      rect(151,1200,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1500,xstart+(xend-xstart)/12*(i+1),S[i]);
      textSize(25);
      fill(255);
      text(hop[i],xstart+(xend-xstart)/12*(i+1),S[i]-20);
    }
  };
  for (var i =0;i< S.length; i++) {
    stroke(165,180,64);
    fill(165,180,64);
      strokeWeight(2);
    line(xstart+(xend-xstart)/12*(i+1),S[i],xstart+(xend-xstart)/12*(i+2),S[i+1]);
    ellipse(xstart+(xend-xstart)/12*(i+1),S[i],5,5);
  };
};


//hop rate 
// console.log(HR);
  if (state!=0){
    fill(255);
  var ystart= 1200;
  var yend= 1500;
  var ytotal= ystart + yend;
  var xstart=650;
  var xend= 1050;
//title
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('Hop Rate',850,1180);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  
  //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,xend,yend);
  push();
  translate(590,1350);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('TTL Pounds / TTL BBL',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',850,1550);
  var Yaxis= [0,1];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],620,yend-(yend-ystart)/2*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+(xend-xstart)/12*(i+1)),yend+20)
  };
  console.log(HR);  
  var HR0= ytotal-map(HR[0],0,2,ystart,yend);
  var HR1= ytotal-map(HR[1],0,2,ystart,yend);
  var HR2= ytotal-map(HR[2],0,2,ystart,yend);
  var HR3= ytotal-map(HR[3],0,2,ystart,yend);
  var HR4= ytotal-map(HR[4],0,2,ystart,yend);
  var HR5= ytotal-map(HR[5],0,2,ystart,yend);
  var HR6= ytotal-map(HR[6],0,2,ystart,yend);
  var HR7= ytotal-map(HR[7],0,2,ystart,yend);
  var HR8= ytotal-map(HR[8],0,2,ystart,yend);
  var HR9= ytotal-map(HR[9],0,2,ystart,yend);
  var HR10= ytotal-map(HR[10],0,2,ystart,yend);
  var H = [HR0,HR1,HR2,HR3,HR4,HR5,HR6,HR7,HR8,HR9,HR10];
      //toggle hop rate
  for (var i =0;i< HR.length; i++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1))
      && mouseX<xstart+(xend-xstart)/12*(i+2)){
      noStroke();
      fill(150);
      rect(651,1200,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1500,xstart+(xend-xstart)/12*(i+1),H[i]);
      textSize(25);
      fill(255);
      text(HR[i],xstart+(xend-xstart)/12*(i+1),H[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)-500)
      && mouseX<xstart+(xend-xstart)/12*(i+2)-500){
      noStroke();
      fill(150);
      rect(651,1200,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1500,xstart+(xend-xstart)/12*(i+1),H[i]);
      textSize(25);
      fill(255);
      text(HR[i],xstart+(xend-xstart)/12*(i+1),H[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)+500)
      && mouseX<xstart+(xend-xstart)/12*(i+2)+500){
      noStroke();
      fill(150);
      rect(651,1200,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1500,xstart+(xend-xstart)/12*(i+1),H[i]);
      textSize(25);
      fill(255);
      text(HR[i],xstart+(xend-xstart)/12*(i+1),H[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)+1000)
      && mouseX<xstart+(xend-xstart)/12*(i+2)+1000){
      noStroke();
      fill(150);
      rect(651,1200,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1500,xstart+(xend-xstart)/12*(i+1),H[i]);
      textSize(25);
      fill(255);
      text(HR[i],xstart+(xend-xstart)/12*(i+1),H[i]-20);
    };
  };
  stroke(165,180,64);
    fill(165,180,64);
  for (var i =0;i< HR.length; i++) {
    line(xstart+(xend-xstart)/12*(i+1),H[i],xstart+(xend-xstart)/12*(i+2),H[i+1]);
    ellipse(xstart+(xend-xstart)/12*(i+1),H[i],5,5);
  };
};


//hop acreage 
  if (state!=0){
    fill(255);
  var ystart= 1200;
  var yend= 1500;
  var ytotal= ystart + yend;
  var xstart=1150;
  var xend= 1550;
//title
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('Hop Acreage',1350,1180);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  
  //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,xend,yend);
  push();
  translate(1090,1350);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Acreage',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',1350,1550);
  var Yaxis= [0,10000,20000,30000,40000,50000,60000];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],1120,yend-(yend-ystart)/7*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+(xend-xstart)/12*(i+1)),yend+20)
  };
  
  var M0= ytotal-map(HA[0],0,70000,ystart,yend);
  var M1= ytotal-map(HA[1],0,70000,ystart,yend);
  var M2= ytotal-map(HA[2],0,70000,ystart,yend);
  var M3= ytotal-map(HA[3],0,70000,ystart,yend);
  var M4= ytotal-map(HA[4],0,70000,ystart,yend);
  var M5= ytotal-map(HA[5],0,70000,ystart,yend);
  var M6= ytotal-map(HA[6],0,70000,ystart,yend);
  var M7= ytotal-map(HA[7],0,70000,ystart,yend);
  var M8= ytotal-map(HA[8],0,70000,ystart,yend);
  var M9= ytotal-map(HA[9],0,70000,ystart,yend);
  var M10= ytotal-map(HA[10],0,70000,ystart,yend);
  var M = [M0,M1,M2,M3,M4,M5,M6,M7,M8,M9,M10];
  //toggle hop acreage
  for (var i =0;i< S.length; i++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1))
      && mouseX<xstart+(xend-xstart)/12*(i+2)){
      noStroke();
      fill(150);
      rect(1151,1200,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1500,xstart+(xend-xstart)/12*(i+1),M[i]);
      fill(255);
      textSize(25);
      text(HA[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)-500)
      && mouseX<xstart+(xend-xstart)/12*(i+2)-500){
      noStroke();
      fill(150);
      rect(1151,1200,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1500,xstart+(xend-xstart)/12*(i+1),M[i]);
      fill(255);
      textSize(25);
      text(HA[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)-1000)
      && mouseX<xstart+(xend-xstart)/12*(i+2)-1000){
      noStroke();
      fill(150);
      rect(1151,1200,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1500,xstart+(xend-xstart)/12*(i+1),M[i]);
      fill(255);
      textSize(25);
      text(HA[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)+500)
      && mouseX<xstart+(xend-xstart)/12*(i+2)+500){
      noStroke();
      fill(150);
      rect(1151,1200,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1500,xstart+(xend-xstart)/12*(i+1),M[i]);
      fill(255);
      textSize(25);
      text(HA[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    };
  };
  stroke(165,180,64);
    fill(165,180,64);
    strokeWeight(2);
  for (var i =0;i< M.length; i++) {
    line(xstart+(xend-xstart)/12*(i+1),M[i],xstart+(xend-xstart)/12*(i+2),M[i+1]);
    ellipse(xstart+(xend-xstart)/12*(i+1),M[i],5,5);
  };
};

  //hop variety 
    if (state!=0){
      fill(255);
  var ystart= 1200;
  var yend= 1500;
  var ytotal= ystart + yend;
  var xstart=1650;
  var xend= 2050;
  //title
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('Hop Variety',1850,1180);
    textSize(50);
  text('FARM TO BAR',2350,1180);

  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  
  //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,xend,yend);
  push();
  translate(1590,1350);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Number',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',1850,1550);
  var Yaxis= [0,100,200];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],1620,yend-(yend-ystart)/3*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+(xend-xstart)/12*(i+1)),yend+20)
  };

  var M0= ytotal-map(HV[0],0,300,ystart,yend);
  var M1= ytotal-map(HV[1],0,300,ystart,yend);
  var M2= ytotal-map(HV[2],0,300,ystart,yend);
  var M3= ytotal-map(HV[3],0,300,ystart,yend);
  var M4= ytotal-map(HV[4],0,300,ystart,yend);
  var M5= ytotal-map(HV[5],0,300,ystart,yend);
  var M6= ytotal-map(HV[6],0,300,ystart,yend);
  var M7= ytotal-map(HV[7],0,300,ystart,yend);
  var M8= ytotal-map(HV[8],0,300,ystart,yend);
  var M9= ytotal-map(HV[9],0,300,ystart,yend);
  var M10= ytotal-map(HV[10],0,300,ystart,yend);
  var M = [M0,M1,M2,M3,M4,M5,M6,M7,M8,M9,M10];
  var Sp= [0,500,1000,1500];
      //toggle hop variety
  for (var i =0;i< M.length; i++) {
    for (var j = 0; j < Sp.length; j++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1)-Sp[j])
      && mouseX<xstart+(xend-xstart)/12*(i+2)-Sp[j]){
      noStroke();
      fill(150);
      rect(1651,1200,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),1500,xstart+(xend-xstart)/12*(i+1),M[i]);
      fill(255);
      textSize(25);
      text(HV[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    };
   };
  };
      stroke(165,180,64);
    fill(165,180,64);
  for (var i =0;i< M.length; i++) {
    line(xstart+(xend-xstart)/12*(i+1),M[i],xstart+(xend-xstart)/12*(i+2),M[i+1]);
    ellipse(xstart+(xend-xstart)/12*(i+1),M[i],5,5);
  };
};




  //no of breweries graph//
  //legend (S,M,L,XL)//
    if (state!=0){
  fill(255);
  textFont(Aller_Bd);
  textAlign(LEFT);
  textSize(15);
  noStroke();
  text('Size of Breweries',90,2120);
  textFont(Aller_Lt);
  text('XL: >6M Barrels\nL: 2M - 6M Barrels\nM: 60,000-2M Barrels\nS: <60,000 Barrels',90,2150);
  textSize(20);
  // console.log(year);
  var ystart= 1700;
  var yend= 2000;
  var ytotal= ystart + yend;
  var xstart=150;
  var xend= 550;
  //title
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('No. of S Breweries',350,1680);
      textSize(50);
  text('SMALL-SCALE WINS',2350,1680);
  image(s,2650,1580,300,500);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  


  //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,xend,yend);
  push();
  translate(90,1850);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Number',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',350,2050);
  var Yaxis= [0,1000,2000,3000,4000,5000,6000];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],120,yend-(yend-ystart)/7*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+(xend-xstart)/12*(i+1)),yend+20)
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
  //toggleS
  for (var i =0;i< S.length; i++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1))
      && mouseX<xstart+(xend-xstart)/12*(i+2)){
      noStroke();
      fill(150);
      rect(151,1700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),2000,xstart+(xend-xstart)/12*(i+1),S[i]);
      textSize(25);
      fill(255);
      text(noS[i],xstart+(xend-xstart)/12*(i+1),S[i]-20);
    } else if (mouseX>500+(xstart+(xend-xstart)/12*(i+1))
      && mouseX<xstart+500+(xend-xstart)/12*(i+2)){
      noStroke();
      fill(150);
      rect(151,1700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),2000,xstart+(xend-xstart)/12*(i+1),S[i]);
      textSize(25);
      fill(255);
      text(noS[i],xstart+(xend-xstart)/12*(i+1),S[i]-20);
    } else if (mouseX>1000+(xstart+(xend-xstart)/12*(i+1))
      && mouseX<xstart+1000+(xend-xstart)/12*(i+2)){
      noStroke();
      fill(150);
      rect(151,1700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),2000,xstart+(xend-xstart)/12*(i+1),S[i]);
      textSize(25);
      fill(255);
      text(noS[i],xstart+(xend-xstart)/12*(i+1),S[i]-20);
    } else if (mouseX>1500+(xstart+(xend-xstart)/12*(i+1))
      && mouseX<1500+xstart+(xend-xstart)/12*(i+2)){
      noStroke();
      fill(150);
      rect(151,1700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),2000,xstart+(xend-xstart)/12*(i+1),S[i]);
      textSize(25);
      fill(255);
      text(noS[i],xstart+(xend-xstart)/12*(i+1),S[i]-20);
    };
  };
  for (var i =0;i< S.length; i++) {
    fill(255);
    line(xstart+(xend-xstart)/12*(i+1),S[i],xstart+(xend-xstart)/12*(i+2),S[i+1]);
    ellipse(xstart+(xend-xstart)/12*(i+1),S[i],5,5);
  };


  //title
  var ystart= 1700;
  var yend= 2000;
  var ytotal= ystart + yend;
  var xstart=650;
  var xend= 1050;
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('No. of M Breweries',850,1680);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  
  //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,xend,yend);
  push();
  translate(590,1850);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Number',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',850,2050);
  var Yaxis= [0,100];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],620,yend-(yend-ystart)/2*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+(xend-xstart)/12*(i+1)),yend+20)
  };
    stroke(255);
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
    //toggleM
  for (var i =0;i< S.length; i++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1))
      && mouseX<xstart+(xend-xstart)/12*(i+2)){
      noStroke();
      fill(150);
      rect(651,1700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),2000,xstart+(xend-xstart)/12*(i+1),M[i]);
      textSize(25);
      fill(255);
      text(noM[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)-500)
      && mouseX<xstart+(xend-xstart)/12*(i+2)-500){
      noStroke();
      fill(150);
      rect(651,1700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),2000,xstart+(xend-xstart)/12*(i+1),M[i]);
      textSize(25);
      fill(255);
      text(noM[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)+500)
      && mouseX<xstart+(xend-xstart)/12*(i+2)+500){
      noStroke();
      fill(150);
      rect(651,1700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),2000,xstart+(xend-xstart)/12*(i+1),M[i]);
      textSize(25);
      fill(255);
      text(noM[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)+1000)
      && mouseX<xstart+(xend-xstart)/12*(i+2)+1000){
      noStroke();
      fill(150);
      rect(651,1700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),2000,xstart+(xend-xstart)/12*(i+1),M[i]);
      textSize(25);
      fill(255);
      text(noM[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    };
  };
  for (var i =0;i< M.length; i++) {
    fill(255);
    line(xstart+(xend-xstart)/12*(i+1),M[i],xstart+(xend-xstart)/12*(i+2),M[i+1]);
    ellipse(xstart+(xend-xstart)/12*(i+1),M[i],5,5);
  };

  //plot L//
   //title
  var ystart= 1700;
  var yend= 2000;
  var ytotal= ystart + yend;
  var xstart=1150;
  var xend= 1550;
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('No. of L Breweries',1350,1680);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  

    //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,xend,yend);
  push();
  translate(1090,1850);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Number',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',1350,2050);
  var Yaxis= [0,100];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],1120,yend-(yend-ystart)/2*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+(xend-xstart)/12*(i+1)),yend+20)
  };
    stroke(255);
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
    //toggle L
  for (var i =0;i< S.length; i++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1))
      && mouseX<xstart+(xend-xstart)/12*(i+2)){
      noStroke();
      fill(150);
      rect(1151,1700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),2000,xstart+(xend-xstart)/12*(i+1),L[i]);
      textSize(25);
      fill(255);
      text(noL[i],xstart+(xend-xstart)/12*(i+1),L[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)-500)
      && mouseX<xstart+(xend-xstart)/12*(i+2)-500){
      noStroke();
      fill(150);
      rect(1151,1700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),2000,xstart+(xend-xstart)/12*(i+1),L[i]);
      textSize(25);
      fill(255);
      text(noL[i],xstart+(xend-xstart)/12*(i+1),L[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)-1000)
      && mouseX<xstart+(xend-xstart)/12*(i+2)-1000){
      noStroke();
      fill(150);
      rect(1151,1700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),2000,xstart+(xend-xstart)/12*(i+1),L[i]);
      textSize(25);
      fill(255);
      text(noL[i],xstart+(xend-xstart)/12*(i+1),L[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)+500)
      && mouseX<xstart+(xend-xstart)/12*(i+2)+500){
      noStroke();
      fill(150);
      rect(1151,1700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),2000,xstart+(xend-xstart)/12*(i+1),L[i]);
      textSize(25);
      fill(255);
      text(noL[i],xstart+(xend-xstart)/12*(i+1),L[i]-20);
    };
  };
  for (var i =0;i< L.length; i++) {
    fill(255);
    strokeWeight(2);
    line(xstart+(xend-xstart)/12*(i+1),L[i],xstart+(xend-xstart)/12*(i+2),L[i+1]);
    ellipse(xstart+(xend-xstart)/12*(i+1),L[i],5,5);
  };

  //plot XL//
  var ystart= 1700;
  var yend= 2000;
  var ytotal= ystart + yend;
  var xstart=1650;
  var xend= 2050;
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('No. of XL Breweries',1850,1680);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  

    //yaxis
  line(xstart,ystart,xstart,yend);
  //xaxis
  line(xstart,yend,xend,yend);
  push();
  translate(1590,1850);
  angleMode(DEGREES);
  rotate(-90);
  noStroke();
  text('Number',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
  text('Year',1850,2050);
  var Yaxis= [0,100];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],1620,yend-(yend-ystart)/2*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+(xend-xstart)/12*(i+1)),yend+20)
  };
  stroke(255);
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
  var Sp= [0,500,1000,1500];
  //toggle XL
    for (var i =0;i< M.length; i++) {
      for (var j = 0; j < Sp.length; j++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1)-Sp[j])
      && mouseX<xstart+(xend-xstart)/12*(i+2)-Sp[j]){
      noStroke();
      fill(150);
      rect(1651,1700,400,300);
      stroke(255);
      line(xstart+(xend-xstart)/12*(i+1),2000,xstart+(xend-xstart)/12*(i+1),XL[i]);
      fill(255);
      textSize(25);
      text(noXL[i],xstart+(xend-xstart)/12*(i+1),XL[i]-20);
    };
  };
  };
  for (var i =0;i< L.length; i++) {
    line(xstart+(xend-xstart)/12*(i+1),XL[i],xstart+(xend-xstart)/12*(i+2),XL[i+1]);
    ellipse(xstart+(xend-xstart)/12*(i+1),XL[i],5,5);
  };
};

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


