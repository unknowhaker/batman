class Umbrella{
    constructor(x,y){
        this.body=Bodies.circle(x,y,155);
        this.image=loadImage("walking/walking_1.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        fill("white");
        image(this.image,this.body.position.x,this.body.position.y,405,405);
    }
}