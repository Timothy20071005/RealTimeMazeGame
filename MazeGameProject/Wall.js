class Wall {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true,
            density:1
        }
        this.body = Matter.Bodies.rectangle(x, y, width, height, options)
        this.width = w;
        this.height = h;
        World.add(world, this.body)
    }
    display() {
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
    }

}