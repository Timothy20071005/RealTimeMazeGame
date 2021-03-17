    class Player{
    constructor(x,y){
    var options = {
        isStatic : true,
        restitution:0.5,
        density:1,
        friction:1
    }
    this.body = Matter.Bodies.rectangle(x,y,50,50,options)
    World.add(world,this.body)
    }
    display(){
    noStroke()
    fill(0,0,0,0)
    rect(this.body.position.x,this.body.position.y,50,50); 
    }
}