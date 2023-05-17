function setup() {
  createCanvas(400, 400); // Create a canvas to draw on
}

function draw() {
  background(220); // Set the background color
  
  // Set face color and draw a circle for the face
  fill(255); 
  stroke(0);
  circle(200, 200, 200);
  
  // Set eye color and draw two circles for the eyes
  fill(0);
  circle(150, 170, 40);
  circle(250, 170, 40);
  
  // Set mouth color and draw an arc for the mouth
  noFill();
  strokeWeight(3);
  arc(200, 230, 80, 50, 0, PI);
}
