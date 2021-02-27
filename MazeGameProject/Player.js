class Player{
    constructor(x,y){
    var options = {
        isStatic : false,
        restitution:0.4
    }
    this.body = Matter.Bodies.rectangle(x,y,50,50,options)
    this.image = loadImage("sprites/knight.png");
    World.add(world,this.body)
    }
    display(){
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    }
}