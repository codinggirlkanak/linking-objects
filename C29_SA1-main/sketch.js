const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope = new Rope(8,{x:245,y:40})
  rope2 = new Rope(6,{x:100,y:40})
  rope3 = new Rope(10,{x:300,y:40})


  var fruit_options = {
    density:0.001
  }
  fruit = Bodies.circle(300,300,15,fruit_options)
  Matter.Composite.add(rope.body,fruit)
  fruit_con = new Link(rope,fruit)
  fruit_con = new Link(rope2,fruit)
  fruit_con = new Link(rope3,fruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show()
  rope2.show(
  rope3.show()
  )
  Engine.update(engine);
  
 ellipse(fruit.position.x,fruit.position.y,15,15)
 
   
}
