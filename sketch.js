var CAXA;
function setup() {
  createCanvas(400,400);
  CAXA = createSprite(200, 200, 30, 30);
}
function draw() 
{
  background(255);
  CAXA.shapeColor = 0;
  drawSprites();
  if(CAXA.x <= 15 || CAXA.x >= 385){
    CAXA.velocityX = 0
  }else if(CAXA.y <= 15 || CAXA.y >= 385){
  CAXA.velocityY = 0
  } else {
    if(keyDown("w")){
      CAXA.velocityY = -5;
        }else if(keyDown("s")){
          CAXA.velocityY = 5;
        } else{
          CAXA.velocityY = 0
        }
        if(keyDown("a")){
          CAXA.velocityX =-5;
        }else if(keyDown("d")){
          CAXA.velocityX = 5;
        } else {
          CAXA.velocityX = 0;
        }
  }
}