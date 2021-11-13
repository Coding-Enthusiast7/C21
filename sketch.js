var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;
var object1, object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1=createSprite(100, 200, 50, 50);
  gameObject2=createSprite(200, 200, 50, 50);
  gameObject3=createSprite(300, 200, 50, 50);
  gameObject4=createSprite(400, 200, 50, 50);
  gameObject1.shapeColor="white";
  gameObject2.shapeColor="white";
  gameObject3.shapeColor="white";
  gameObject4.shapeColor="white";



}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  

  }else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "white";
  }

  drawSprites();
}

function isTouching(object1, object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true;
}
else {
return false;
}
}