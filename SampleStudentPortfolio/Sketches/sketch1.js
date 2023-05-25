function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
//Draw Head
  fill('lemonchiffon');
   ellipse(200,200,300,300);
  
//Add Eyes
  strokeWeight(5);
  fill(0,0,255)
  circle(130,130,40);
  
  
  //Draw Nosey
  fill('white')
  triangle(210,185,176,228, 231,227)
  
//Show Mouse coordinates
  textSize(20)
  strokeWeight(1)
  fill(0,0,0);
  text('Mouse X:  '+ mouseX,0,20);
  text('Mouse Y:  '+ mouseY,0,40);
  
}