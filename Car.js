class Car{
    constructor(weight,speed){
        this.x=50;
        this.y=200;
        this.car=createSprite(this.x,this.y,50,50)
        this.weight=weight
        this.speed=speed
        this.car.velocityX=this.speed
        this.sprite.shapeColor=color(255)
    }
    }
