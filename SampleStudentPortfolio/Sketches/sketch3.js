let img1;
let img2;
let img3;
let songplayed;

let mySound;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('bad-romance.mp3');

}
function setup() {
  createCanvas(600, 300);
  img2 = loadImage('romance.jpeg');
  img3 = loadImage('gaga.png');

}

function draw() {
  background('pink');
  
 
  // line(150, 0, 150, 300);
  // line(300, 0, 300, 300);
  // line(450, 0, 450, 300);
  //line(400, 0, 400, 300);
strokeWeight(2);
  textSize(40);
  
  if (mouseX > 0 && mouseX <= 150) {
    fill(0, 0, 255);
    ellipse(mouseX, mouseY, 10, 10);
    text("A good romance starts with...", 100,200);
     //image(img1, 0, 0, 100, 100);
 
  }
  
  else if (mouseX > 150 && mouseX <= 300) {
    image(img2, 0, 0, width, height);
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 40, 40);
    textSize(50);
   // text("Flowers and romance", 100,250);
 
  }
  
  else if (mouseX > 300 && mouseX <= 450) {
    fill(0, 0, 255);
    ellipse(mouseX, mouseY, 40, 40);
     //image(img1, 200, 0, 100, 100);
    text("A bad romance starts with...", 100,200);
  }
  
    else if (mouseX > 450 && mouseX <= 600) {
    fill(0, 255, 0);
    ellipse(mouseX, mouseY, 40, 40);
    image(img3, 0, 0, width, height);
    textSize(75);
    strokeWeight(20);
    stroke('black');
    fill('white');
    text("Lady Gaga", 300,100);
      mySound.playMode('untilDone');
    mySound.play();
    
  }
  
 
  
}







