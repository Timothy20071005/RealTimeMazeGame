const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var wall;


function preload() {

}

function setup() {
    var canvas = createCanvas(displayWidth, displayHeight);
    engine = Engine.create();
    world = engine.world;
    wall1 = new Wall(0, displayHeight - 20, 400, 20);
    wall2 = new Wall(displayWidth - 425, displayHeight - 20, 400, 20);
    wall3 = new Wall(0, displayHeight / 2 - 20, 200, 20);
    wall4 = new Wall(displayWidth / 2 + 240, displayHeight / 2 + 140, 200, 20);
    wall5 = new Wall(180, displayHeight - 400, 20, 300);
    wall6 = new Wall(displayWidth - 220, displayHeight - 220, 20, 200);
    wall7 = new Wall(displayWidth - 425, 0, 400, 20);
    wall8 = new Wall(displayWidth - 220, 20, 20, 200);
    wall9 = new Wall(displayWidth - 425, displayHeight / 2 - 50, 400, 20);
    wall10 = new Wall(displayWidth / 2 - 250, displayHeight / 2, 400, 20);
    wall11 = new Wall(displayWidth / 2 - 50, displayHeight / 2 - 200, 20, 400);
    wall12 = new Wall(180, displayHeight / 2 - 200, 20, 200);
    wall13 = new Wall(displayWidth / 4 - 140, displayHeight / 4 - 20, 300, 20);
    wall14 = new Wall(displayWidth / 3 - 15, displayHeight / 3, 200, 20);
    wall15 = new Wall(displayWidth / 2 + 300, displayHeight / 4 - 50, 20, 200);
    wall16 = new Wall(displayWidth / 7 - 5, displayHeight / 3, 150, 20);
    wall17 = new Wall(displayWidth / 2 + 100, displayHeight / 15, 20, 225);
    knight1 = new Player(50, displayHeight / 2 + 100);
    knight2 = new Player(displayWidth - 100, displayHeight / 2 + 150);
    knight3 = new Player(displayWidth - 100, displayHeight / 8);
    knights = [knight1, knight2, knight3];
}

function draw() {
    background("black")
    Engine.update(engine);
    wall1.display();
    wall2.display();
    wall3.display();
    wall4.display();
    wall5.display();
    wall6.display();
    wall7.display();
    wall8.display();
    wall9.display();
    wall10.display();
    wall11.display();
    wall12.display();
    wall13.display();
    wall14.display();
    wall15.display();
    wall16.display();
    wall17.display();
    knight1.display();
    knight2.display();
    knight3.display();
}
function keyPressed() {
    if (keyCode === 38) {
        Matter.Body.setVelocity(knight1.body, { x: 0, y: -250})
        console.log(knight1.body)
    }
    else if (keyCode === 39) {
        Matter.Body.setVelocity(knight1.body, { x: 25, y: 0 })
        console.log(knight1.body)
    }
    else if (keyCode === 37) {
        Matter.Body.setVelocity(knight1.body, { x: -25, y: 0 })
        console.log(knight1.body)
    }
    else if (keyCode === 40) {
        Matter.Body.setVelocity(knight1.body, { x: 0, y: 25 })
        console.log(knight1.body)
    }
};