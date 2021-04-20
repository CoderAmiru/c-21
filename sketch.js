




var movingrect
var fixedrect
var box1

function setup() {

  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 100);
  fixedrect=createSprite(400, 100, 50, 50);
  box1=createSprite(400,300,100,150)
  fixedrect.velocityY=2
  box1.velocityY=-2
  fixedrect.shapeColor="blue"
  movingrect.shapeColor="blue"
  box1.shapeColor="green"
}

function draw() { 
  background(255,255,255);  
  movingrect.x=mouseX
  movingrect.y=mouseY

    bounceOff(fixedrect,box1)
  drawSprites();
}




