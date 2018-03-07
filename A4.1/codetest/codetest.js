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
  tint(255,105);
  image(mapimg, 0, 0);


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
  textFont(Aller_Lt);
  textSize(10);
 textAlign(CENTER);
  text('Bronx',850,160);
  text('Brooklyn',850,350);
  text('Manhattan',850,500);
  text('Queens',850,620);
  text('Staten Island',850,745);
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
        rect(900,j*15+270,10,10);
        translate(15,0);
        var b1 = districtBR.lastIndexOf(uniqueBR[j])+1;
        }
      };
    pop();
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
        rect(900,j*15+480,10,10);
        translate(15,0);
        var b1 = districtM.lastIndexOf(uniqueM[j])+1;
        }
      };
    pop();
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
        rect(900,j*15+570,10,10);
        translate(15,0);
        var b1 = districtQ.lastIndexOf(uniqueQ[j])+1;

        }
      };
    pop();
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
        rect(900,j*15+730,10,10);
        translate(15,0);
        var b1 = districtS.lastIndexOf(uniqueS[j])+1;
        }
      };
    pop();
  };

  for (var i = 0; i < uniqueQ.length; i++) {
    for (var j = 0; j < boroughQ.length; j++) {
      if (mouseX > (250+(j*25)) && 
        mouseX < (250+((j+1)*20)) && 
        mouseY > (780+i*25)&&
        mouseY < ((i+1)*25+780)
        ){
        noStroke();
        fill(0);
        text("District " + districtQ[i], 500,500);
      }
    }
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





