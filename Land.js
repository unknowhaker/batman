class Land{
    constructor(){
        this.body=Bodies.rectangle(width/2,700,width,20,{isStatic:true})
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x,this.body.position.y,width,20);
    }
}