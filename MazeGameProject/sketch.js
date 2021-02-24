const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var wall;


function preload() {
  
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    wall1 = new Wall(0,displayHeight-20,400,20);        
    wall2 = new Wall(displayWidth-425,displayHeight-20,400,20);
    wall3 = new Wall(0,displayHeight/2-20,20,200);
    wall4 = new Wall(displayWidth-45,displayHeight/2-20,200,20);
    wall5 = new Wall(200,displayHeight-220,20,200);
    wall6 = new Wall(displayWidth-220,displayHeight-220,20,200);
    wall7 = new Wall(displayWidth-425,0,400,20);
    wall8 = new Wall(displayWidth-220,20,20,200);              
    wall9 = new Wall(displayWidth-425,displayHeight/2-100,400,20);  
    wall10 = new Wall(200,700,400,20);
    wall11 = new Wall(200,700,400,20);
    wall12 = new Wall(200,700,400,20);
    wall13 = new Wall(200,700,400,20);
    wall14 = new Wall(200,700,400,20);
    wall15 = new Wall(200,700,400,20);          
  
}

function draw(){
   Engine.update(engine);
   wall1.display() 
   wall2.display() 
   wall3.display() 
   wall4.display() 
   wall5.display() 
   wall6.display() 
   wall7.display() 
   wall8.display() 
   wall9.display() 
   wall10.display() 
   wall11.display() 
   wall12.display() 
   wall13.display() 
   wall14.display() 
   wall15.display() 
}
