let colorlist = ['gold', 'yellow', 'turquoise', 'red']

function setup() {
//  createCanvas(windowWidth, windowHeight);
//  createCanvas(400, 400);

  background(255);
}

function draw() {
  noStroke()
  fill(random(colorlist));
  ellipse(mouseX, mouseY, 25, 50);
}
