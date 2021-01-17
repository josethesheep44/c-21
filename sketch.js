var fixedRect, movingRect;
var obj1
var bounceleft,bounceright
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(200,100,50,50);
  obj1.shapeColor = "green";

  bounceleft =createSprite(100,500,50,50)
  bounceright =createSprite(1100,500,50,50)
  bounceleft.velocityX= 3;
  bounceright.velocityX= -3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,fixedRect)){

    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";

  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }

  if (isTouching(movingRect,obj1)){

    movingRect.shapeColor="red";
    obj1.shapeColor="red";

  }
  else{
    movingRect.shapeColor="green";
    obj1.shapeColor="green";
  }

  bounceOff(bounceright,bounceleft);
  drawSprites();
}






