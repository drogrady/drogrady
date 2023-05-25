

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
background('skyblue');

  
  //The Ground
  noStroke();
  fill('green');
  rect(0,400,windowWidth,100);


  //The House
  fill('gray');
  stroke('pink');
  rect(50,200,220,200);
  //door
  fill('brown');
  stroke('black')
  rect(128,325,50,75);

  //Windows
  fill('yellow');
  strokeWeight(10);
  stroke('black');
  rect(80,250,50,50);
  rect(180,250,50,50);

  //Roof
  fill('brown');
  triangle(183,154, 267,138,270,200);
  triangle(50,200, 100,100,270,200);

  //Chimney
  rect();

  //sun
  fill('yellow')
  strokeWeight(5);
  circle(0,0,100);
  line(50,50,75,75);
  line(20,60,30,80);
  line(60,20,90,45);

  //Pool
  fill('blue');
  rect(0,450,200,50);
  fill('lightblue');
  ellipse(100,450,200,30);


  //Tree
  fill('brown');
   rect(400,250,20,200);
  fill('green');
  circle(405,250,150);

//Small tree
fill('brown');
   rect(316,358,15,50);
  fill('green');
  circle(325,358,50);

  //This line of code displays the mouse coordinates
    noStroke();

  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  
}