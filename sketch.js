let img;
function preload() {
  img = loadImage('Screenshot 2020-10-20 at 19.24.41.png');
}
function setup() {
  createCanvas(200, 200);
  image(img, 0, 0, 200, 200);
  
  
}

function draw() {
  
  //ellipse(200, 200, 55, 55);
  fill(mouseX, mouseY, mouseX)
}