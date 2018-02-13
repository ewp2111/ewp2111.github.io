var headlines = [];
var sign = [
"?", "!"];
var punc = [
".", ","];

function preload() {

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "5048c9901c224a338bb10cf3b8f0b2b3"; 
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
}

function setup() {
  createCanvas(2000, 2000);
  background(255);

  textSize(14);
  textAlign(LEFT);

  noLoop(); 

  extractHeadlines();
}

function draw() {

  var lineheight = 24;
  var margin = 40;
  translate(margin, margin);

  for (var i = 0; i < headlines.length; i++) {
    var words = split(headlines[i], '');
    var nextX = 0;

    //draw sign to circles

    for (var j = 0; j < words.length; j++) {


      var str1 = 'abcdefghijklmnopqrstuvwxyz';
      var str2 = split(str1, '');
      var size = (str2.indexOf(words[j])+1);

      if (sign.includes(words[j].toLowerCase())) {
        noStroke();
        fill(0,0,255,100);
        ellipse(nextX,i*lineheight,50,50);
      } else if (punc.includes(words[j])){
        noStroke();
        fill(0,0,255,50);
        ellipse(nextX,i*lineheight,20,20);
      } else if (str2.includes(words[j].toLowerCase())){
        noStroke();
        fill(255,0,0,10);
        ellipse(nextX,i*lineheight,size*3,size*3);
      } else {
        fill(0);
      };
    };


    //text
    text(words[j]+' ', nextX, i*lineheight);
    nextX += textWidth(words[j]+' ');
  }

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