function preload() {

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "5048c9901c224a338bb10cf3b8f0b2b3"; 
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
}



function setup(){
  createCanvas (2000,2000);
  background(255);


  textSize(14);
  textAlign(LEFT);

  noLoop(); 
  extractHeadlines();

}


function draw(){

  var lineheight = 24;
  var margin = 40;
  translate(margin, margin);


  var head='abcde';

  fill(255);
  text(head,100,100);


var words = split(head, '');

console.log(words);
noLoop();

//setup a to z sizes

for (var i = 0; i < words.length; i++) {
  var str1 = 'abcdefghijklmnopqrstuvwxyz';
  var str2 = split(str1, '');
  
  var size = (str2.indexOf(words[i])+1);
  fill(255,0,0,100);
  noStroke();
  ellipse(100,100,size*100,size*100)
};


}



function extractHeadlines() {

  // console.log(nytResponse); // take a look at the full API response structure

  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].title;
    // besides .title, other text data available to you include:
    // .abstract, .byline, .section, etc. etc.
    append(headlines, h);
  }

  // console.log(headlines); // make sure counted data looks as expected
}


