function setup() {
  createCanvas(800,400);
  fixedR=createSprite(400, 200, 50, 50);
  movingR=createSprite(400,200,50,50);
}

function draw() {
  background("orange");
  movingR.x=mouseX;
  movingR.y=mouseY;

  text(movingR.x-fixedR.x,20,40);
  text(movingR.width/2+fixedR.width/2,80,100);

  if(movingR.x-fixedR.x<movingR.width/2+fixedR.width/2
     && fixedR.x-movingR.x<movingR.width/2+fixedR.width/2
     && movingR.y-fixedR.y<movingR.height/2+fixedR.height/2
     && fixedR.y-movingR.y<movingR.height/2+fixedR.height/2
    ){
    fixedR.shapeColor="red";
    movingR.shapeColor="red";
  }

  else {
    fixedR.shapeColor="yellow";
    movingR.shapeColor="yellow";
  }
  drawSprites();
}