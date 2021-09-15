var bg, sleep, brush, gym, eat, drink, move;
var background, astronaut;

function preload() {
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png", "images/gym2.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  move = loadAnimation("images/move.png", "images/move1.png");
}

function setup() {
  createCanvas(400, 400);
  background = createSprite(200, 200, 400, 400);
  background.addImage("bg", bg);
  astronaut=createSprite(200,200,10,10);

}

function draw() {
  background(220);
  drawSprites();
}