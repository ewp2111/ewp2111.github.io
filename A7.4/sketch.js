var state = 0;
var Width= 3000;
var Height = 2200;

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
  background (230);
  frameRate(30);
  // noLoop();
}

function draw() {
  textAlign(LEFT);
  textFont(Aller_Bd);
  textSize(30);
  //select fav beer//
  fill(100);
    noStroke();
  text('Select Favorite Beer',80,100);
  triangle(50,80,70,80,60,100);

  //hover
  if (mouseX >40
    && mouseX <390
    && mouseY>160
    && mouseY<200 ) {
    fill(230);
    rect(40,160,350,360);
    fill(200);
    rect(40,160,350,40)
  } else if (mouseX >40
    && mouseX <390
    && mouseY>200
    && mouseY<240 ) {
    fill(230);
    rect(40,160,350,360);
    fill(200);
    rect(40,200,350,40);
  } else if (mouseX >40
    && mouseX <390
    && mouseY>240
    && mouseY<280 ) {
    fill(230);
    rect(40,160,350,360);
    fill(200);
    rect(40,240,350,40);
  } else if (mouseX >40
    && mouseX <390
    && mouseY>280
    && mouseY<320 ) {
    fill(230);
    rect(40,160,350,360);
    fill(200);
    rect(40,280,350,40);
 } else if (mouseX >40
    && mouseX <390
    && mouseY>380
    && mouseY<420 ) {
    fill(230);
    rect(40,160,350,360);
    fill(200);
    rect(40,380,350,40);
 } else if (mouseX >40
    && mouseX <390
    && mouseY>420
    && mouseY<460 ) {
    fill(230);
    rect(40,160,350,360);
    fill(200);
    rect(40,420,350,40);
  } else if (mouseX >40
    && mouseX <390
    && mouseY>460
    && mouseY<500 ) {
    fill(230);
    rect(40,160,350,360);
    fill(200);
    rect(40,460,350,40);
  } else {
    fill(230);
    rect(40,160,350,360);
  };
  //text and image//
  fill(100);
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
    fill(230);
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
    fill(230);
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
    fill(230);
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
    fill(230);
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
    fill(230);
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
    fill(230);
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
    fill(230);
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

  fill(230);
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

  if (state!=0){
    fill(100);
    textAlign(CENTER);
   for (var k =0; k<year.length; k++) {
      text(year[k],1300+1500/12*(k+1),80);
     };
    var policyfill= color(165,180,64);    
    var craftfill= color(110,136,152);
    var Spt= [0,500,1000,1500];
    var xstart=150;
    var xend= 550;


    //toggle 2017
    if (2645<mouseX
      && mouseY< 750){
      draw2017();
      };
        for (var j = 0; j < Spt.length; j++) {
      if (mouseX>(xstart+(xend-xstart)/12*11+Spt[j])
        && mouseX<xstart+(xend-xstart)+Spt[j]){
        draw2017();
    };
  };

    //toggle 2012
    for (var j = 0; j < Spt.length; j++) {
      if (mouseX>(xstart+(xend-xstart)/12*6+Spt[j])
        && mouseX<xstart+(xend-xstart)/12*7+Spt[j]){
      draw2012();
  };
  };
    if (2020<mouseX
      && mouseX<2080
      && mouseY<750){
      draw2012();
  };

    //toggle 2010
        for (var j = 0; j < Spt.length; j++) {
      if (mouseX>(xstart+(xend-xstart)/12*4+Spt[j])
        && mouseX<xstart+(xend-xstart)/12*5+Spt[j]){
        draw2010();
      };
  };
    if (1770<mouseX
      && mouseX<1830
      && mouseY<750){
      draw2010();
    };

    //toggle 2014
          for (var j = 0; j < Spt.length; j++) {
      if (mouseX>(xstart+(xend-xstart)/12*8+Spt[j])
        && mouseX<xstart+(xend-xstart)/12*9+Spt[j]){
        draw2014();
  };
};
    if (2270<mouseX
      && mouseX<2330
      && mouseY<750){
     draw2014();
   };
    //toggle none
    var None = [1,2,3,5,7,9,10];
    for (var i = 0; i < None.length; i++) {
      for (var j = 0; j < Spt.length; j++) {
        if (mouseX>(xstart+(xend-xstart)/12*None[i]+Spt[j])
          && mouseX<xstart+(xend-xstart)/12*(None[i]+1)+Spt[j]){
            fill(230);
            rect(1400,100,2000,500);
        };
      };
    };


   //tax 2017
   fill(100);
   textSize(30);
   text('Tax',1300,110);   
   rect(1400,100,1300,20);
   triangle(2700,100,2700,120,2750,110);
   fill(255);
   ellipse(1300+1500/12*11,110,20,20);
   fill(100);

    //policy 

    fill(policyfill);    
    text('Policy',1300,160);   
    rect(1400,150,1300,20);
    triangle(2700,150,2700,170,2750,160);
    fill(255);
    ellipse(1300+1500/12*6,160,20,20);
    //craft definition
    fill(134,195,189);    
    text('Craft \ndefinition',1300,220);   
    rect(1400,200,1300,20);
    triangle(2700,200,2700,220,2750,210);
    fill(255);
    ellipse(1300+1500/12*4,210,20,20);
    ellipse(1300+1500/12*8,210,20,20);
  };


//beer sales
  //title
  if (state!=0){
  fill(100);
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  //axis
  textSize(12);
  stroke(100);
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
    fill(230);
    rect(70,650,560,45);
        fill(151,99,46);
    textSize(30);
    textFont(Aller_Bd);
    textAlign(CENTER);
    text('IPA sales',350,680);
    textSize(12);
    fill(230);
    rect(151,700,400,300);
    rect(100,700,40,310);
    fill(100);
    strokeWeight(1);
    textSize(12);
    stroke(100);
    var Yaxis= [0,200,400,600];
    textFont(Aller_Lt);    
    noStroke();
    fill(230);
    rect(130,530,480,100);
    triangle(150,630,170,630,160,670);
    fill(151,99,46);
    rect(130,530,480,100,15,15,15,15);
    triangle(150,630,170,630,160,670);
    fill(255);
    textSize(30);
    text('IPA is dominating craft beer market in recent years!',140,540,460,80);
    fill(100);
    textSize(12);
    stroke(100);
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
          for (var j = 0; j < Sp.length; j++) {
    for (var i =0;i< S.length; i++) {
        if (mouseX>(xstart+(xend-xstart)/12*(i+1)+Sp[j])
        && mouseX<xstart+(xend-xstart)/12*(i+2)+Sp[j]){
        noStroke();
        fill(230);
        rect(151,700,400,300);
        stroke(151,99,46,100);
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
    fill(230);
    rect(70,650,560,45);
    fill(202,155,53);
    textSize(30);
    textFont(Aller_Bd);
    textAlign(CENTER);
    text('Pale Ale sales',350,680);
    fill(230);
    rect(151,700,400,300);
    rect(100,700,40,310);
    noStroke();
    fill(230);
    rect(130,530,480,100);
    triangle(150,630,170,630,160,670);
    fill(202,155,53);
    rect(130,530,330,100,15,15,15,15);
    triangle(150,630,170,630,160,670);
    fill(255);
    textSize(30);
    textFont(Aller_Lt);
    text('Pale Ale is getting more popular!',140,540,300,80);
    fill(100);
    textSize(12);
    stroke(100);
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
    for (var j = 0; j < Sp.length; j++) {
    for (var i =0;i< S.length; i++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1)+Sp[j])
      && mouseX<xstart+(xend-xstart)/12*(i+2)+Sp[j]){
      fill(230);
      noStroke();
      rect(151,700,400,300);
      stroke(202,155,53,100);
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
        fill(230);
    rect(70,650,560,45);
    fill(117,66,42);
    textSize(30);
    textFont(Aller_Bd);
    textAlign(CENTER);
    text('Amber sales',350,680);
    fill(230);
    rect(151,700,400,300);
    rect(100,700,40,310);
    noStroke();
    fill(230);
    rect(130,530,480,100);
    triangle(150,630,170,630,160,670);
    fill(117,66,42);
    rect(130,530,330,100,15,15,15,15);
    triangle(150,630,170,630,160,670);
    fill(255);
    textSize(30);
    textFont(Aller_Lt);
    text('Amber is the 3rd most popular beer',140,540,300,80);
    fill(100);
    textSize(12);
    stroke(100);
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
      for (var j = 0; j < Sp.length; j++) {
    for (var i =0;i< S.length; i++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1)+Sp[j])
      && mouseX<xstart+(xend-xstart)/12*(i+2)+Sp[j]){
      noStroke();
      fill(230);
      rect(151,700,400,300);
    stroke(117,66,42,100);
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
        fill(230);
    rect(70,650,560,45);
    fill(55,36,36);
    textSize(30);
    textFont(Aller_Bd);
    textAlign(CENTER);
    text('Stout sales',350,680);
    fill(230);
    rect(151,700,400,300);
    rect(100,700,40,310);
    noStroke();
    fill(230);
    rect(130,530,480,100);
    triangle(150,630,170,630,160,670);
    fill(55,36,36);
    rect(130,530,300,100,15,15,15,15);
    triangle(150,630,170,630,160,670);
    fill(255);
    textSize(30);
    textFont(Aller_Lt);
    text('Stout is relatively less popular',140,540,270,80);
    fill(100);
    textSize(12);
    stroke(100);
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
          for (var j = 0; j < Sp.length; j++) {
    for (var i =0;i< S.length; i++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1)+Sp[j])
      && mouseX<xstart+(xend-xstart)/12*(i+2)+Sp[j]){
      noStroke();
      fill(230);
      rect(151,700,400,300);
      stroke(55,36,36,100);
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
        fill(230);
    rect(70,650,560,45);
    fill(169,134,58);
    textSize(30);
    textFont(Aller_Bd);
    textAlign(CENTER);
    text('Pilsner sales',350,680);
        fill(230);
    rect(151,700,400,300);
    rect(100,700,40,310);
    noStroke();
    fill(230);
    rect(130,530,480,100);
    triangle(150,630,170,630,160,670);
    fill(169,134,58);
    rect(130,530,340,100,15,15,15,15);
    triangle(150,630,170,630,160,670);
    fill(255);
    textSize(30);
    textFont(Aller_Lt);
    text('Pilsner is not very popular in recent years',140,540,330,80);
    fill(100);
        textSize(12);
    stroke(100);
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
          for (var j = 0; j < Sp.length; j++) {
    for (var i =0;i< S.length; i++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1)+Sp[j])
      && mouseX<xstart+(xend-xstart)/12*(i+2)+Sp[j]){
      noStroke();
      fill(230);
      rect(151,700,400,300);
    stroke(169,134,58,100);
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
        fill(230);
    rect(70,650,560,45);
    fill(228,185,75);
    textSize(30);
    textFont(Aller_Bd);
    textAlign(CENTER);
    text('Light sales',350,680);
    fill(230);
    rect(151,700,400,300);
    rect(100,700,40,310);
    noStroke();
    fill(230);
    rect(130,530,480,100);
    triangle(150,630,170,630,160,670);
    fill(228,185,75);
    rect(130,530,340,100,15,15,15,15);
    triangle(150,630,170,630,160,670);
    fill(255);
    textSize(30);
    textFont(Aller_Lt);
    text('Light beer is getting less popular...',140,540,330,80);
    fill(100);
        textSize(12);
    stroke(100);
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
          for (var j = 0; j < Sp.length; j++) {
    for (var i =0;i< S.length; i++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1)+Sp[j])
      && mouseX<xstart+(xend-xstart)/12*(i+2)+Sp[j]){
      noStroke();
      fill(230);
      rect(151,700,400,300);
      stroke(228,185,75,100);
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
    fill(230);
    rect(70,650,560,45);
      fill(211,113,87);
    textSize(25);
    textFont(Aller_Bd);
    textAlign(CENTER);
    text('Fruit/Vegetable/Spice Beer sales',350,680);
        fill(230);
    rect(151,700,400,300);
    rect(100,700,40,310);
    noStroke();
    fill(230);
    rect(130,530,480,100);
    triangle(150,630,170,630,160,670);
      fill(211,113,87);
    rect(130,530,340,100,15,15,15,15);
    triangle(150,630,170,630,160,670);
    fill(255);
    textSize(30);
    textFont(Aller_Lt);
    text('Consumers are into creative beer styles!',140,540,330,80);
    fill(100);
        textSize(12);
    stroke(100);
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
          for (var j = 0; j < Sp.length; j++) {
    for (var i =0;i< S.length; i++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1)+Sp[j])
      && mouseX<xstart+(xend-xstart)/12*(i+2)+Sp[j]){
      noStroke();
      fill(230);
      rect(151,700,400,300);
      stroke(211,113,87,100);
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
  stroke(100);
  fill(100);
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
      fill(169,134,58);
  text('Craft Beer Production',850,680);
  //axis
  textSize(12);
  stroke(100);
  fill(100);
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
  var Yaxis= [0,10,20,30];
  textFont(Aller_Lt);
  for (var i =0; i<Yaxis.length; i++) {
    text(Yaxis[i],620,yend-(yend-ystart)/4*i)
  };
  for (var i =0; i<year.length; i++) {
    text(year[i],(xstart+(xend-xstart)/12*(i+1)),yend+20)
  };
  var M0= ytotal-map(CP[0],0,40,ystart,yend);
  var M1= ytotal-map(CP[1],0,40,ystart,yend);
  var M2= ytotal-map(CP[2],0,40,ystart,yend);
  var M3= ytotal-map(CP[3],0,40,ystart,yend);
  var M4= ytotal-map(CP[4],0,40,ystart,yend);
  var M5= ytotal-map(CP[5],0,40,ystart,yend);
  var M6= ytotal-map(CP[6],0,40,ystart,yend);
  var M7= ytotal-map(CP[7],0,40,ystart,yend);
  var M8= ytotal-map(CP[8],0,40,ystart,yend);
  var M9= ytotal-map(CP[9],0,40,ystart,yend);
  var M10= ytotal-map(CP[10],0,40,ystart,yend);
  var M = [M0,M1,M2,M3,M4,M5,M6,M7,M8,M9,M10];
      //toggle production
  for (var i =0;i< M.length; i++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1))
      && mouseX<xstart+(xend-xstart)/12*(i+2)){
      noStroke();
      fill(230);
      rect(651,700,400,300);
    stroke(169,134,58,100);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),M[i]);
    fill(169,134,58);
      textSize(25);
      text(CP[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)-500)
      && mouseX<xstart+(xend-xstart)/12*(i+2)-500){
      noStroke();
      fill(230);
      rect(651,700,400,300);
    stroke(169,134,58,100);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),M[i]);
    fill(169,134,58);
      textSize(25);
      text(CP[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)+500)
      && mouseX<xstart+(xend-xstart)/12*(i+2)+500){
      noStroke();
      fill(230);
      rect(651,700,400,300);
    stroke(169,134,58,100);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),M[i]);
    fill(169,134,58);
      textSize(25);
      text(CP[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)+1000)
      && mouseX<xstart+(xend-xstart)/12*(i+2)+1000){
      noStroke();
      fill(230);
      rect(651,700,400,300);
    stroke(169,134,58,100);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),M[i]);
    fill(169,134,58);
      textSize(25);
      text(CP[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    };
  };
  for (var i =0;i< M.length; i++) {
    strokeWeight(2);
        stroke(169,134,58,100);
    fill(169,134,58);
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
   stroke(100);
    fill(100);
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
      fill(169,134,58);
  text('Malt Consumption',1350,680);
  //axis
  textSize(12);
  stroke(100);
  strokeWeight(1);  
  fill(100);
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
    stroke(100);
    fill(100);
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
      fill(230);
      rect(1151,700,400,300);
    stroke(169,134,58,100);    
    fill(169,134,58);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),M[i]);
      textSize(25);
      text(malt[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)-500)
      && mouseX<xstart+(xend-xstart)/12*(i+2)-500){
      noStroke();
      fill(230);
      rect(1151,700,400,300);
    stroke(169,134,58,100);
        fill(169,134,58);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),M[i]);
      textSize(25);
      text(malt[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)-1000)
      && mouseX<xstart+(xend-xstart)/12*(i+2)-1000){
      noStroke();
      fill(230);
      rect(1151,700,400,300);
    stroke(169,134,58,100);
        fill(169,134,58);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),M[i]);
      textSize(25);
      text(malt[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)+500)
      && mouseX<xstart+(xend-xstart)/12*(i+2)+500){
      noStroke();
      fill(230);
      rect(1151,700,400,300);
    stroke(169,134,58,100);
        fill(169,134,58);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),M[i]);
      textSize(25);
      text(malt[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    };
  };
  for (var i =0;i< M.length; i++) {
        strokeWeight(2);
            stroke(169,134,58,100);
        fill(169,134,58);
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
  stroke(100);
  strokeWeight(1); 
  fill(100); 
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
    stroke(100);
    fill(100);
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
      fill(230);
      rect(2100,600,500,350,20,20,20,20);
      rect(1651,700,400,300);
    stroke(169,134,58,100);
        fill(169,134,58);
      line(xstart+(xend-xstart)/12*(i+1),1000,xstart+(xend-xstart)/12*(i+1),M[i]);
      textSize(25);
      text(rice[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    };
    if (mouseX>(xstart+(xend-xstart)/12*8-Sp[j])
      && mouseX<xstart+(xend-xstart)/12*9-Sp[j]){
    noStroke();
    fill(134,195,189);    
    rect(1700,900,150,75,10,10,10,10);
    rect(2100,600,500,350,20,20,20,20);
    textSize(50);
    textFont(Aller_Bd);
    fill(255);
    text('IPA DOMINATES',2350,680);
    fill(255);
    textFont(Aller_Lt);
    textSize(30);
    text("Despite change in craft beer ingredient requirement, malt is not substituted by rice due to the domination of hoppy beers.", 2130,730, 430,350);
    noStroke();
    textSize(15);
    text('Rice consumption continue to decrease',1700,910,140,65);
    };
  };
  };
  for (var i =0;i< M.length; i++) {
    strokeWeight(2);
    stroke(169,134,58,100);
        fill(169,134,58);
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
  fill(165,180,64);
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('Hop Consumption',350,1180);
  //axis
  textSize(12);
  stroke(50);
  strokeWeight(1);
    fill(50);  

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
  var Sp=[0,500,1000,1500];
    //toggle hop consumption
    for (var j = 0; j < Sp.length; j++) {
  for (var i =0;i< S.length; i++) {
    if ((xstart+(xend-xstart)/12*(i+1)+Sp[j])<mouseX
      && mouseX<xstart+(xend-xstart)/12*(i+2)+Sp[j]){
      noStroke();
      fill(230);
      rect(151,1200,400,300);
      stroke(165,180,64,100);
      line(xstart+(xend-xstart)/12*(i+1),1500,xstart+(xend-xstart)/12*(i+1),S[i]);
      textSize(25);
      fill(165,180,64);
      noStroke();
      text(hop[i],xstart+(xend-xstart)/12*(i+1),S[i]-20);
    };
  };
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
    fill(230);
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
  fill(165,180,64);
  text('Beer Hopping Rate',850,1180);
  //axis
  textSize(12);
  stroke(100);
  strokeWeight(1);  
  fill(100);
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
  // console.log(HR);  
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
      fill(230);
      rect(651,1200,400,300);
      stroke(165,180,64,100);
      line(xstart+(xend-xstart)/12*(i+1),1500,xstart+(xend-xstart)/12*(i+1),H[i]);
      textSize(25);
  fill(165,180,64);
      text(HR[i],xstart+(xend-xstart)/12*(i+1),H[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)-500)
      && mouseX<xstart+(xend-xstart)/12*(i+2)-500){
      noStroke();
      fill(230);
      rect(651,1200,400,300);
      stroke(165,180,64,100);
      line(xstart+(xend-xstart)/12*(i+1),1500,xstart+(xend-xstart)/12*(i+1),H[i]);
      textSize(25);
  fill(165,180,64);
      text(HR[i],xstart+(xend-xstart)/12*(i+1),H[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)+500)
      && mouseX<xstart+(xend-xstart)/12*(i+2)+500){
      noStroke();
      fill(230);
      rect(651,1200,400,300);
      stroke(165,180,64,100);
      line(xstart+(xend-xstart)/12*(i+1),1500,xstart+(xend-xstart)/12*(i+1),H[i]);
      textSize(25);
  fill(165,180,64);
      text(HR[i],xstart+(xend-xstart)/12*(i+1),H[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)+1000)
      && mouseX<xstart+(xend-xstart)/12*(i+2)+1000){
      noStroke();
      fill(230);
      rect(651,1200,400,300);
      stroke(165,180,64,100);
      line(xstart+(xend-xstart)/12*(i+1),1500,xstart+(xend-xstart)/12*(i+1),H[i]);
      textSize(25);
  fill(165,180,64);
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
    fill(230);
  var ystart= 1200;
  var yend= 1500;
  var ytotal= ystart + yend;
  var xstart=1150;
  var xend= 1550;
//title
  fill(165,180,64);
  textSize(30);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('Hop Acreage',1350,1180);
  //axis
  textSize(12);
  stroke(100);
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
    fill(100);
  text('Acreage',0,0);
  pop();
  noStroke();
  fill(100);
  textAlign(CENTER);
  text('Year',1350,1550);
  fill(100);
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
    var Sp= [-1000,-500,0,500];
  //toggle hop acreage
  for (var i =0;i< S.length; i++) {
    for (var j = 0; j < Sp.length; j++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1)+Sp[j])
      && mouseX<xstart+(xend-xstart)/12*(i+2)+Sp[j]){
      noStroke();
      fill(230);
      rect(1151,1200,400,300);
      rect(2100,1100,1000,500);
      stroke(165,180,64,100);
      line(xstart+(xend-xstart)/12*(i+1),1500,xstart+(xend-xstart)/12*(i+1),M[i]);
  fill(165,180,64);
      textSize(20);
      text(HA[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*6+Sp[j])
      && mouseX<xstart+(xend-xstart)/12*7+Sp[j]){
    fill(165,180,64);
    noStroke();
    rect(1400,1400,150,75,10,10,10,10);
    rect(2100,1100,500,350,20,20,20,20);
    // stroke(255,0,0);
    // strokeWeight(1);
    // line(1350,1330,1500,1230);
    // line(1500,1230,1482,1230);
    // line(1500,1230,1492,1246);
    fill(255);
    noStroke();
    textSize(15);
    text('Demand for Local Hops increase!',1410,1420,140,65);
    textSize(50);
    textFont(Aller_Bd);
    text('FARM TO BAR',2350,1180);
    textFont(Aller_Lt);
    textSize(30);
    text("Due to popularity of craft beer, breweries began to set up their own hop farms to promote 'Farm to Bar' experience", 2130,1230, 430,350);

  };
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
      fill(230);
  var ystart= 1200;
  var yend= 1500;
  var ytotal= ystart + yend;
  var xstart=1650;
  var xend= 2050;
  //title
  textSize(30);
  fill(165,180,64);
  textFont(Aller_Bd);
  textAlign(CENTER);
  noStroke();
  text('Hop Variety',1850,1180);
  //axis
  textSize(12);
  stroke(100);
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
  fill(100);
  text('Number',0,0);
  pop();
  noStroke();
  textAlign(CENTER);
    fill(100);
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
      fill(230);
      rect(1651,1200,400,300);
      stroke(165,180,64,100);
      line(xstart+(xend-xstart)/12*(i+1),1500,xstart+(xend-xstart)/12*(i+1),M[i]);
  fill(165,180,64);
      textSize(25);
      text(HV[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
          } else if (mouseX>(xstart+(xend-xstart)/12*6-Sp[j])
      && mouseX<xstart+(xend-xstart)/12*7-Sp[j]){
    fill(165,180,64);
    noStroke();
    rect(1900,1400,150,75,10,10,10,10);
    // stroke(255,0,0);
    // strokeWeight(1);
    // line(1850,1330,2000,1230);
    fill(255);
    noStroke();
    textSize(15);
    text('Farmers competition leads to more hop varieties!',1910,1410,140,65);
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
  fill(230);
  // textFont(Aller_Bd);
  // textAlign(LEFT);
  // textSize(15);
  // noStroke();
  // text('Size of Breweries',90,2120);
  // textFont(Aller_Lt);
  // text('XL: >6M Barrels\nL: 2M - 6M Barrels\nM: 60,000-2M Barrels\nS: <60,000 Barrels',90,2150);
  // textSize(20);
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
  fill(100);
  text('No. of S Breweries',350,1670);
      textSize(50);
  textFont(Aller_Lt);
  textSize(20);
  text('<60,000 Barrels',350,1700);
  //axis
  textSize(12);
  stroke(100);
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
  stroke(100);
  fill(100);
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
  var Sp= [0,500,1000,1500];
  //toggleS
  for (var j = 0; j < Sp.length; j++) {
  for (var i =0;i< S.length; i++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1)+Sp[j])
      && mouseX<xstart+(xend-xstart)/12*(i+2)+Sp[j]){
      noStroke();
      fill(230);
      rect(2100,1600,1000,650,20,20,20,20);
      rect(151,1700,400,300);
      stroke(100,100,100,100);
      line(xstart+(xend-xstart)/12*(i+1),2000,xstart+(xend-xstart)/12*(i+1),S[i]);
      textSize(25);
      fill(100);
      text(noS[i],xstart+(xend-xstart)/12*(i+1),S[i]-20);
    };
    if (mouseX>(xstart+(xend-xstart)/12*11+Sp[j])
      && mouseX<xstart+(xend-xstart)/12*12+Sp[j]){
    fill(100);
    noStroke();
    rect(400,1900,150,75,10,10,10,10);
    rect(2100,1600,500,350,20,20,20,20);
    rect(2100,2000,500,100,20,20,20,20);
    triangle(2680,2000,2500,2000,2400,2100);
    fill(255);
    noStroke();
    textSize(15);
    text('Small-scale Breweries increase!',410,1920,140,65);
    textSize(50);
    textFont(Aller_Bd);
    text('SMALL-SCALE WINS',2350,1680);
    textFont(Aller_Lt);
    textSize(30);
    text("Tax reduction on small-scale breweries favors the growth of craft beer market and small brewers.", 2130,1730, 430,350);
    image(s,2650,1580,300,500);
    text('In 2017, the Brewers Association issued a seal for consumers to distinguish craft beer.',2100,2015,500,100);
  };
  };
  };
  for (var i =0;i< S.length; i++) {
    fill(100);
    strokeWeight(2);
    stroke(100);
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
  text('No. of M Breweries',850,1670);
  textFont(Aller_Lt);
  textSize(20);
  text('60,000-2M Barrels',850,1700);
  //axis
  textSize(12);
  stroke(100);
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
    stroke(100);
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
  var Sp=[0,-500,500,1000];
    //toggleM
  for (var j = 0; j < Sp.length; j++) {
  for (var i =0;i< S.length; i++) {
    if (mouseX>(xstart+(xend-xstart)/12*(i+1)+Sp[j])
      && mouseX<xstart+(xend-xstart)/12*(i+2)+Sp[j]){
      noStroke();
      fill(230);
      rect(651,1700,400,300);
      stroke(100,100,100,100);
      line(xstart+(xend-xstart)/12*(i+1),2000,xstart+(xend-xstart)/12*(i+1),M[i]);
      textSize(25);
      fill(100);
      text(noM[i],xstart+(xend-xstart)/12*(i+1),M[i]-20);
    };
      if (mouseX>(xstart+(xend-xstart)/12*4+Sp[j])
      && mouseX<xstart+(xend-xstart)/12*5+Sp[j]){
      fill(134,195,189);    
    noStroke();
    rect(800,1750,150,75,10,10,10,10);
    rect(2100,1600,500,350,20,20,20,20);
    fill(255);
    noStroke();
    textSize(15);
    text('M Breweries increase!',810,1770,140,65);
    textSize(50);
    textFont(Aller_Bd);
    text('Craft Beer Grows',2350,1680);
    textFont(Aller_Lt);
    textSize(30);
    text("Increased production ceiling favors the expansion of craft beer production.", 2130,1730, 430,350);
  };
    };
  };
  for (var i =0;i< M.length; i++) {
    fill(100);
    strokeWeight(2);
    stroke(100);
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
  text('No. of L Breweries',1350,1670);
  textFont(Aller_Lt);
  textSize(20);
  text('2M - 6M Barrels',1350,1700);
  //axis
  textSize(12);
  stroke(255);
  strokeWeight(1);  

    //yaxis
    stroke(100);
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
    stroke(100);
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
      fill(230);
      rect(1151,1700,400,300);
      stroke(100,100,100,100);
      line(xstart+(xend-xstart)/12*(i+1),2000,xstart+(xend-xstart)/12*(i+1),L[i]);
      textSize(25);
      fill(100);
      text(noL[i],xstart+(xend-xstart)/12*(i+1),L[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)-500)
      && mouseX<xstart+(xend-xstart)/12*(i+2)-500){
      noStroke();
      fill(230);
      rect(1151,1700,400,300);
      stroke(100,100,100,100);
      line(xstart+(xend-xstart)/12*(i+1),2000,xstart+(xend-xstart)/12*(i+1),L[i]);
      textSize(25);
      fill(100);
      text(noL[i],xstart+(xend-xstart)/12*(i+1),L[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)-1000)
      && mouseX<xstart+(xend-xstart)/12*(i+2)-1000){
      noStroke();
      fill(230);
      rect(1151,1700,400,300);
      stroke(100,100,100,100);
      line(xstart+(xend-xstart)/12*(i+1),2000,xstart+(xend-xstart)/12*(i+1),L[i]);
      textSize(25);
      fill(100);
      text(noL[i],xstart+(xend-xstart)/12*(i+1),L[i]-20);
    } else if (mouseX>(xstart+(xend-xstart)/12*(i+1)+500)
      && mouseX<xstart+(xend-xstart)/12*(i+2)+500){
      noStroke();
      fill(230);
      rect(1151,1700,400,300);
      stroke(100,100,100,100);
      line(xstart+(xend-xstart)/12*(i+1),2000,xstart+(xend-xstart)/12*(i+1),L[i]);
      textSize(25);
      fill(100);
      text(noL[i],xstart+(xend-xstart)/12*(i+1),L[i]-20);
    };
  };
  for (var i =0;i< L.length; i++) {
    fill(100);
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
  text('No. of XL Breweries',1850,1670);
    textFont(Aller_Lt);
  textSize(20);
  text('>6M Barrels',1850,1700);
  //axis
  textSize(12);
  stroke(100);
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
  stroke(100);
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
      fill(230);
      rect(1651,1700,400,300);
      stroke(100);
      line(xstart+(xend-xstart)/12*(i+1),2000,xstart+(xend-xstart)/12*(i+1),XL[i]);
      fill(100);
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


function draw2010(){
      fill(230);
      rect(1400,100,2000,500);
      fill(134,195,189);    
      rect(1300+1500/12*4-200,250,400,250,20,20,20,20);
      triangle(1300+1500/12*4,220,1300+1500/12*4-20,250,1300+1500/12*4+20,250);
      fill(255);
      textSize(22);
      textFont(Aller_Bd);
      text('Cap raised from 2M to 6M Barrels', 1300+1500/12*4-180,270,360,200);
      textSize(20);
      textFont(Aller_Lt);
      text("\n\n The Brewer's Association altered the requirement as an admitted favor to the Boston Beer Company, maker of Sam Adams (US's largest craft beer brewery),who approached the annual cap of 2M barrels.",1300+1500/12*4-180,270,360,200);
    
}

function draw2012(){
        fill(230);
      rect(1400,100,2000,500);
          var policyfill= color(165,180,64);    
      fill(policyfill);   
      rect(1300+1500/12*6-200,250,400,250,20,20,20,20);
      triangle(1300+1500/12*6,170,1300+1500/12*6-20,250,1300+1500/12*6+20,250);
      fill(255);
      textSize(30);
      textFont(Aller_Bd);
      text('Farm Brewing Law', 1300+1500/12*6-180,270,360,200);
      textSize(20);
      textFont(Aller_Lt);
      text('\n\n The farm Brewing Law was passed by Governor Andrew Cuomo. It was designed to increase demand for locally grown products and create new businesses surrounding the brewing industry.', 1300+1500/12*6-180,270,360,200);
    
}


function draw2014(){
      fill(230);
      rect(1400,100,2000,500);
      fill(134,195,189);    
      rect(1300+1500/12*8-200,250,400,250,20,20,20,20);
      triangle(1300+1500/12*8,220,1300+1500/12*8-20,250,1300+1500/12*8+20,250);
      fill(255);
      textSize(30);
      textFont(Aller_Bd);
      text('Ingredient Requirement', 1300+1500/12*8-180,270,360,200);
      textSize(20);
      textFont(Aller_Lt);
      text('\n\n The Brewers Association removed a long-standing requirement that a craft brewery must make at least half of its product, as well as its “flagship” beer, from only barley malt - not from rice or corn.', 1300+1500/12*8-180,270,360,200);
}

function draw2017(){
      fill(230);
      rect(1400,100,2000,500);
      fill(100);
      rect(1300+1500/12*11-200,250,400,250,20,20,20,20);
      triangle(1300+1500/12*11,120,1300+1500/12*11-20,250,1300+1500/12*11+20,250);
      fill(255);
      textSize(30);
      textFont(Aller_Bd);
      text('Tax Reduction',1300+1500/12*11-180,270,360,180);
      textSize(20);
      textFont(Aller_Lt);
      text('\n\nFirst 60,000 Barrels \nreduced from $7 to $3.5\n\n Over 60,000 to 6M Barrels \nreduced from $18 to $16',1300+1500/12*11-180,270,360,180);
}