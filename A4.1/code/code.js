var table;
var citysquare = [];
var privatesquare = [];


function preload() {
  table = loadTable('vacantlots.csv', 'csv', 'header')

}

function setup() {
  createCanvas(2000, 2000);
  background(255);

  textSize(10);
  textAlign(LEFT);

  noLoop(); 

}

function draw() {


}


function extractData() {

  borough = table.getColumn('Borough');
  type = table.getColumn('OwnerType');
  block = table.getColumn('Block');
  lot = table.getColumn('Lot');

extractData();
for (var i = 0; i < borough.length; i++) {
  if(borough[i] == 'bronx'){
    if (type[i] == "city"){
      citysquare = type[i]
    }
  }
}