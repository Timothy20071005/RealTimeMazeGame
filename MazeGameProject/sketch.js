const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;


function preload() {
  
}

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,200,399,399);
  
}

function draw(){
   Engine.update(engine);
   ground.display() 
}
