class Drop{
    constructor(x,y){
        this.body=Bodies.circle(x,y,3)
        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        fill("white");
        ellipse(this.body.position.x,this.body.position.y,3,3);
    }
    ubdate(){
        if (this.body.position.y>600) {
            Matter.Body.setPosition(this.body,{x:random(0,width),y:random(-200,300)})
        }
    }
}