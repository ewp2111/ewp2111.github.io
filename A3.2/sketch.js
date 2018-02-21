var headlines = [];
var sign = [
"?", "!"];
var punc = [
".", ","];
var abstracts = [];

function preload() {

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "5048c9901c224a338bb10cf3b8f0b2b3"; 
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
}

function setup() {
  createCanvas(2000, 2000);
  background(255);

  textSize(10);
  textAlign(LEFT);

  noLoop(); 

  extractHeadlines();
}

function draw() {

line(mouseX,0,mouseX,100);


  var lineheight = 30;
  var margin = 30;
  translate(margin, margin);

  for (var i = 0; i < headlines.length; i++) {
    var words = split(headlines[i], '');

    var nextX = 0;

      var rectheight = 2;


//draw sign to circles


    for (var j = 0; j < words.length; j++) {
      stroke(222);
      strokeWeight(0.1);
      line(0,i*lineheight, nextX, i*lineheight);

      //text
      noFill();
      noStroke();
      text(words[j]+' ', nextX, i*lineheight);
      nextX += textWidth(words[j]+'  ');
    

      //define size of alphabets
      var str1 = 'abcdefghijklmnopqrstuvwxyz';
      var str2 = split(str1, '');
      var size = (str2.indexOf(words[j])+1);

      //define size of numbers
      var str3 = '0123456789';
      var str4 = split(str3, '');
      var sizen = (str4.indexOf(words[j])+1);



      //signs 
      if (sign.includes(words[j].toLowerCase())) {
        noStroke();
        fill(51,204,204,50);
        ellipse(nextX,i*lineheight,50,50);
        //punc
      } else if (punc.includes(words[j])){
        noStroke();
        fill(51,204,204,50);
        ellipse(nextX,i*lineheight,20,20);
        //alphabets
      } else if (str2.includes(words[j].toLowerCase())){
        noStroke();
        fill(255,153,51,50);
        ellipse(nextX,i*lineheight,size,size);

      };
      
    }
  };


}




function extractHeadlines() {

  // console.log(nytResponse); // take a look at the full API response structure

  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].title;
    // besides .title, other text data available to you include:
    // .abstract, .byline, .section, etc. etc.

    append(headlines, h);


    append(abstracts, nytResponse.results[i].abstract);

  }

  // console.log(headlines); // make sure counted data looks as expected
}