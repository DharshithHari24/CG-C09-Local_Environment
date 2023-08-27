var btn_red;
var btn_green;
var acd;

var r = 2;
var g = 8;
var b = 5;

function setup() {
  createCanvas(400, 400);  
  acd = createSprite(200,200,50,50);
}

function draw() {
  background("white");
  drawSprites();
}

