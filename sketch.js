var form;

function preload(){
  background_img = loadImage("back.jpg");
}
function setup() {
  createCanvas(500,480);
  form = new Form (displayWidth,displayHeight,10,10)
}

function draw() {
  background(background_img); 

  form.display();
}

