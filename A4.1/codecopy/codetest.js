var mapimg;
var vacantlots;
var table;


var Aller_Lt;
var Aller_Rg;

var clat = 40.7050;
var clon = -73.8012;

var ww = 1200;
var hh = 800;

var zoom = 10;

function preload() {
  Aller_Lt = loadFont('Aller_Lt.ttf');
  Aller_Rg = loadFont('Aller_Rg.ttf');
  // The clon and clat in this url are edited to be in the correct order.
  mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' +
    clon + ',' + clat + ',' + zoom + '/' +
    ww + 'x' + hh +
    '?access_token=pk.eyJ1IjoiZW1pbHlwbyIsImEiOiJjamVnamd2MXMwMTR5MndwbXNsbHYycjZuIn0.Xeq2BK_Q3VIMAyF6N8iRDw');
  // earthquakes = loadStrings('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv');
  vacantlots = loadStrings('addresstestmacro.csv', 'csv', 'head');
  table = loadTable('vacantlotsnn.csv', 'csv', 'header')

}


function mercX(lon) {
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI / 4 + lat / 2);
  var c = PI - log(b);
  return a * c;
}


function setup() {


  var boroughB = table.getColumn("BoroughB");
  var districtB = table.getColumn("DistrictB");
  var typeB = table.getColumn('OwnerTypeB');
  var boroughBR = table.getColumn("BoroughBR");
  var districtBR = table.getColumn("DistrictBR");
  var typeBR = table.getColumn('OwnerTypeBR');
  var boroughM = table.getColumn("BoroughM");
  var districtM = table.getColumn("DistrictM");
  var typeM = table.getColumn('OwnerTypeM');
  var boroughQ = table.getColumn("BoroughQ");
  var districtQ = table.getColumn("DistrictQ");
  var typeQ = table.getColumn('OwnerTypeQ');
  var boroughS = table.getColumn("BoroughS");
  var districtS = table.getColumn("DistrictS");
  var typeS = table.getColumn('OwnerTypeS');

  createCanvas(ww, hh);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  push();
  tint(255,105);
  image(mapimg, 0, 0);
  pop();


  var cx = mercX(clon);
  var cy = mercY(clat);



// Bronx
  for (var i = 1; i < vacantlots.length; i++) {
    var data = vacantlots[i].split(/,/);
    //console.log(data);
    var lat = data[25];
    var lon = data[26];
    //console.log(lat);

    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;
 
    if(x < - width/2) {
      x += width;
    } else if(x > width / 2) {
      x -= width;
    }

    
    noStroke();
    if (typeBR[i] == 'City'){
      fill(114,150,183);
    } else {
      fill (196,218,241);
    };
      ellipse(x, y, 5, 5);
    
  };



// Brooklyn
  for (var i = 1; i < vacantlots.length; i++) {
    var data = vacantlots[i].split(/,/);
    //console.log(data);
    var lat = data[41];
    var lon = data[42];
    //console.log(lat);

    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;
 
    if(x < - width/2) {
      x += width;
    } else if(x > width / 2) {
      x -= width;
    }
    
    noStroke();
    if (typeBR[i] == 'City'){
      fill(114,150,183);
    } else {
      fill (196,218,241);
    };
      ellipse(x, y, 5, 5);
  };

// Manhattan
  for (var i = 1; i < vacantlots.length; i++) {
    var data = vacantlots[i].split(/,/);
    //console.log(data);
    var lat = data[57];
    var lon = data[58];
    //console.log(lat);

    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;
 
    if(x < - width/2) {
      x += width;
    } else if(x > width / 2) {
      x -= width;
    }
    
    noStroke();
    if (typeBR[i] == 'City'){
      fill(114,150,183);
    } else {
      fill (196,218,241);
    };
      ellipse(x, y, 5, 5);
  };

// Queens
  for (var i = 1; i < vacantlots.length; i++) {
    var data = vacantlots[i].split(/,/);
    var lat = data[73];
    var lon = data[74];

    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;
 
    if(x < - width/2) {
      x += width;
    } else if(x > width / 2) {
      x -= width;
    }
  
    noStroke();
    if (typeBR[i] == 'City'){
      fill(114,150,183);
    } else {
      fill (196,218,241);
    };
      ellipse(x, y, 5, 5);
  };

// Staten Island
  for (var i = 1; i < vacantlots.length; i++) {
    var data = vacantlots[i].split(/,/);
    var lat = data[91];
    var lon = data[92];

    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;
 
    if(x < - width/2) {
      x += width;
    } else if(x > width / 2) {
      x -= width;
    }
    
    noStroke();
    if (typeBR[i] == 'City'){
      fill(114,150,183);
    } else {
      fill (196,218,241);
    };
      ellipse(x, y, 5, 5);
  };

}


function draw(){


  var boroughB = table.getColumn("BoroughB");
  var districtB = table.getColumn("DistrictB");
  var typeB = table.getColumn('OwnerTypeB');
  var boroughBR = table.getColumn("BoroughBR");
  var districtBR = table.getColumn("DistrictBR");
  var typeBR = table.getColumn('OwnerTypeBR');
  var boroughM = table.getColumn("BoroughM");
  var districtM = table.getColumn("DistrictM");
  var typeM = table.getColumn('OwnerTypeM');
  var boroughQ = table.getColumn("BoroughQ");
  var districtQ = table.getColumn("DistrictQ");
  var typeQ = table.getColumn('OwnerTypeQ');
  var boroughS = table.getColumn("BoroughS");
  var districtS = table.getColumn("DistrictS");
  var typeS = table.getColumn('OwnerTypeS');
  fill(255);
  rect(800,0,1000,1000);


  fill(100);
  textAlign(LEFT);
  textFont(Aller_Rg);
  textSize(15);
  text('CLEANED VACANT LOTS IN NEW YORK CITY',850,50);
  textSize(12);
  fill(255);
  text('Lot Ownership',680,90);
  textSize(14);
  fill(100);
 textAlign(LEFT);
  text('Bronx',900,75);
  text('Brooklyn',900,252);
  text('Manhattan',900,442);
  text('Queens',900,512);
  text('Staten Island',900,645);
  //legend
  textFont(Aller_Lt);
 fill(114,150,183);
 rect(680,100,10,10);
 fill (196,218,241);
 rect(680,120,10,10);
 fill(255);
textSize(10);
text('City-owned',700,110);
text('Private',700,130);
rect(680,92,80,1);
  console.log(districtB);
  //unique values of district
  var uniqueB = districtB.unique();
  //remove last index
  uniqueB.splice(-1,1);
  //console.log(uniqueB);


  for (var j = 0; j < uniqueB.length; j++) {
    push();
   for (var i = 0; i < boroughB.length; i++) {  
      noStroke();
     if (districtB[i] == uniqueB[j]){
        if (typeB[i] == 'City'){
         fill(114,150,183);
        } else {
         fill (196,218,241);
        };
        rect(900,j*15+80,10,10);
        translate(15,0);
        var b1 = districtB.lastIndexOf(uniqueB[j])+1;
        }
      };
    pop();
  };
  for (var j = 0; j < uniqueB.length; j++) {
   for (var i = 0; i < uniqueB.length; i++) {  
        if (mouseX > 900 && 
          mouseX < (900+((j+1)*10)) && 
          mouseY > (80+i*15) &&
          mouseY < ((i+1)*15+80)
        ){
          noStroke();
          fill(100);
          textSize(10);
          text("District " + uniqueB[i], 850,((i+1)*15+75));
          fill(255,120);
          rect(900,(i*15+80),500,10);
        };
    };
  };


  //Brooklyn
  var uniqueBR = districtBR.unique();
  //remove last index
  uniqueBR.splice(-1,1);
  for (var j = 0; j < uniqueBR.length; j++) {
    push();
   for (var i = 0; i < boroughBR.length; i++) {  
      noStroke();
     if (districtBR[i] == uniqueBR[j]){
        if (typeBR[i] == 'City'){
         fill(114,150,183);
        } else {
         fill (196,218,241);
        };
        rect(900,j*15+260,10,10);
        translate(15,0);
        var b1 = districtBR.lastIndexOf(uniqueBR[j])+1;
        };
      };
    pop();
  };

  for (var j = 0; j < uniqueBR.length; j++) {
   for (var i = 0; i < uniqueBR.length; i++) {  
        if (mouseX > 900 && 
          mouseX < (900+((j+1)*10)) && 
          mouseY > (260+i*15) &&
          mouseY < ((i+1)*15+260)
        ){
          noStroke();
          fill(100);
          textSize(10);
          text("District " + uniqueBR[i], 850,((i+1)*15+255));
          fill(255,120);
          rect(900,(i*15+260),500,10);
        };
    };
  };

  //manhattan
  var uniqueM = districtM.unique();
  uniqueM.splice(-1,1);
  for (var j = 0; j < uniqueM.length; j++) {
    push();
   for (var i = 0; i < boroughM.length; i++) {  
      noStroke();
     if (districtM[i] == uniqueM[j]){
        if (typeM[i] == 'City'){
         fill(114,150,183);
        } else {
         fill (196,218,241);
        };
        rect(900,j*15+450,10,10);
        translate(15,0);
        var b1 = districtM.lastIndexOf(uniqueM[j])+1;
        }
      };
    pop();
  };

  for (var j = 0; j < uniqueM.length; j++) {
   for (var i = 0; i < uniqueM.length; i++) {  
        if (mouseX > 900 && 
          mouseX < (900+((j+1)*10)) && 
          mouseY > (450+i*15) &&
          mouseY < ((i+1)*15+450)
        ){
          noStroke();
          fill(100);
          textSize(10);
          text("District " + uniqueM[i], 850,((i+1)*15+445));
          fill(255,120);
          rect(900,(i*15+450),500,10);
        };
    };
  };

  //queens
  var uniqueQ = districtQ.unique();
  uniqueQ.splice(-1,1);
  for (var j = 0; j < uniqueQ.length; j++) {
    push();
   for (var i = 0; i < boroughQ.length; i++) {  
      noStroke();
     if (districtQ[i] == uniqueQ[j]){
        if (typeQ[i] == 'City'){
         fill(114,150,183);
        } else {
         fill (196,218,241);
        };
        rect(900,j*15+520,10,10);
        translate(15,0);
        var b1 = districtQ.lastIndexOf(uniqueQ[j])+1;

        }
      };
    pop();
  };

    for (var j = 0; j < uniqueQ.length; j++) {
   for (var i = 0; i < uniqueQ.length; i++) {  
        if (mouseX > 900 && 
          mouseX < (900+((j+1)*10)) && 
          mouseY > (520+i*15) &&
          mouseY < ((i+1)*15+520)
        ){
          noStroke();
          fill(100);
          textSize(10);
          text("District " + uniqueQ[i], 850,((i+1)*15+515));
          fill(255,120);
          rect(900,(i*15+520),500,10);
        };
    };
  };
  //staten island
  var uniqueS = districtS.unique();
  uniqueS.splice(-1,1);
  for (var j = 0; j < uniqueS.length; j++) {
    push();
   for (var i = 0; i < boroughS.length; i++) {  
      noStroke();
     if (districtS[i] == uniqueS[j]){
        if (typeS[i] == 'City'){
         fill(114,150,183);
        } else {
         fill (196,218,241);
        };
        rect(900,j*15+650,10,10);
        translate(15,0);
        var b1 = districtS.lastIndexOf(uniqueS[j])+1;
        }
      };
    pop();
  };

  for (var j = 0; j < uniqueS.length; j++) {
   for (var i = 0; i < uniqueS.length; i++) {  
        if (mouseX > 900 && 
          mouseX < (900+((j+1)*10)) && 
          mouseY > (650+i*15) &&
          mouseY < ((i+1)*15+650)
        ){
          noStroke();
          fill(100);
          textSize(10);
          text("District " + uniqueS[i], 850,((i+1)*15+645));
          fill(255,120);
          rect(900,(i*15+650),500,10);
        };
    };
  };

}

function extractData() {
  var borough = table.getColumn("Borough");
  var district = table.getColumn("District");
  var type = table.getColumn('OwnerType');
  var block = table.getColumn('Block');
  var lot = table.getColumn('Lot');
  var address = table.getColumn('Address');
}

Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};

Array.prototype.unique = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.includes(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr; 
}





