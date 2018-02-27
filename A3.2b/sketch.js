
var headlines = [];
var maxHeadLen, minHeadLen;
var section = [];

function preload() {
  i1 = loadImage('world.png');
  i2 = loadImage('us.png');
  i3 = loadImage('business.png');
  i4 = loadImage('opinion.png');
  i5 = loadImage('ny.png');
  i6 = loadImage('travel.png');
  i7 = loadImage('technology.png');
  i8 = loadImage('books.png');
  i9 = loadImage('smart.png');
  i10 = loadImage('well.png');
  i11 = loadImage('food.png');
  i12 = loadImage('fashion.png');
  i13 = loadImage('arts.png');
  i14 = loadImage('science.png');

  // Assemble url for API call
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "436e4c0731324a5faa7741a58ba6adec"; // see: https://developer.nytimes.com
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
  // loadJSON() is asynchronous, but calling it inside preload() guarantees
  // we'll have a response before setup() and draw() is run.
}

function setup() {
  createCanvas(1000, 2000);
  background(255);
  frameRate(30);

  textSize(10);
  textAlign(LEFT);

  extractHeadlines();
}

function draw() {
  background(255);

  // Set the left and top margin
  var margin = 30;
  translate(margin, margin);

  var lineheight = 30;
  var rectheight = 1;

  for (var i = 0; i < headlines.length; i++) {
    var words = split(headlines[i], '');
    var nextX = 0;
    // draw rectangle
    // on mouseover rectangle, make it brighter
    var rectwidth = map(headlines[i].length,minHeadLen, maxHeadLen, margin, width-margin*2);
    fill(220);
    noStroke();
    rect(0, i*lineheight, rectwidth, -1*rectheight)

    // draw headline
    if (mouseIsPressed){
    fill(255,153,51,200);
    textSize(15);
    text(headlines[i], 0, i*lineheight);
    }
  }

  // use a separate loop so it draws on top of everything else
  for (var i = 0; i < headlines.length; i++) {
    var rectwidth = map(headlines[i].length,minHeadLen, maxHeadLen, margin, width-margin*2);

    // show section on mouseover
    if (mouseX > margin && mouseX < margin+rectwidth && mouseY < margin+i*lineheight && mouseY > margin+i*lineheight+(-15*rectheight)) {
      fill(51,204,204);
      textSize(20);
      text(section[i], mouseX+50, mouseY, 200-5, 50-5);
      if ("world".includes(section[i].toLowerCase())){
      image(i1,mouseX-20,mouseY-20,50,50);
      } else if ("u.s.".includes(section[i].toLowerCase())){
        image(i2, mouseX-20,mouseY-20,50,50);
      } else if ("business day".includes(section[i].toLowerCase())){
        image(i3, mouseX-20,mouseY-20,50,50);
      } else if ("opinion".includes(section[i].toLowerCase())){
        image(i4, mouseX-20,mouseY-20,50,50);
      } else if ("n.y. / region".includes(section[i].toLowerCase())){
        image(i5, mouseX-20,mouseY-20,50,50);
      } else if ("travel".includes(section[i].toLowerCase())){
        image(i6, mouseX-20,mouseY-20,50,50);
      } else if ("technology".includes(section[i].toLowerCase())){
        image(i7, mouseX-20,mouseY-20,50,50);
      } else if ("books".includes(section[i].toLowerCase())){
        image(i8, mouseX-20,mouseY-20,50,50);
      } else if ("smarter living".includes(section[i].toLowerCase())){
        image(i9, mouseX-20,mouseY-20,50,50);
      } else if ("well".includes(section[i].toLowerCase())){
        image(i10, mouseX-20,mouseY-20,50,50);
      } else if ("food".includes(section[i].toLowerCase())){
        image(i11, mouseX-20,mouseY-10,50,40);
      } else if ("fashion & style".includes(section[i].toLowerCase())){
        image(i12, mouseX-20,mouseY-20,50,50);
      } else if ("arts".includes(section[i].toLowerCase())){
        image(i13, mouseX-20,mouseY-20,50,50);
      } else if ("science".includes(section[i].toLowerCase())){
        image(i14, mouseX-20,mouseY-20,50,50);

      }
    }
  }
}

function extractHeadlines() {

  // console.log(nytResponse); // take a look at the full API response structure

  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].title;
    // besides .title, other text data available to you include:
    // .abstract, .byline, .section, etc. etc.

    if (!maxHeadLen) {
      maxHeadLen = h.length;
    } else if (h.length > maxHeadLen) {
      maxHeadLen = h.length;
    }

    if (!minHeadLen) {
      minHeadLen = h.length;
    } else if (h.length < minHeadLen) {
      minHeadLen = h.length;
    }
    append(headlines, h);

    append(section, nytResponse.results[i].section);
    console.log(section, nytResponse.results[i].section);

  }
}
