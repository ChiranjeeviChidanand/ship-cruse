var ship,ship1;
var  sea,sea1;

function preload(){
  ship1 = loadImage("ship-1.png","ship-2.png");

  sea1 = loadImage("sea.png");
 
}

function setup(){
  createCanvas(418,150);

  sea = createSprite(210,80,10,10);
  sea.addImage(sea1);
  sea.scale = 0.1

  ship = createSprite(50,90,20,50);
  ship.addImage(ship1)
  ship.scale = 0.09
  
}



function draw() {
  background("blue");

  if (keyDown("RIGHT_ARROW")){
    ship.velocityX=2
  }

  if (keyDown("LEFT_ARROW")){
    ship.velocityX=-2
  }
  if (keyDown("space")){
    ship.velocityX=0
  }
  
 drawSprites()
}