var car;
var weight,speed
var deform;
var wall;

function setup() {
  createCanvas(1600,400);
  car=createSprite(200, 200, 50, 80);
// car.maxSpeed=RandomNumber(30,95)
wall=createSprite(1500,200,60,400)
wall.shapeColor="blue"
car.velocityX=55
weight = Math.round(random(400,1500));
  speed = Math.round(random(30,95));
}

function draw() {
  background(255,255,255);
  
  if(car.x-wall.x<car.width/2+wall.width/2&& wall.x-car.x<car.width/2+wall.width/2&&
    car.y-wall.y<car.height/2+wall.height/2&& wall.y-car.y<car.height/2+wall.height/2){
      deform=0.5*weight*speed*speed/22500;
      console.log(deform);
      car.velocityX=0;
      car.velocityY=0;
    }
      if(deform<100){
      car.shapeColor=color(0,255,0)
      }
    if(deform>100 && deform<180){
      car.shapeColor=color(230,230,0)
    }
    if(deform>180){
      car.shapeColor=color(255,230,0)
    }
    
  drawSprites();
}