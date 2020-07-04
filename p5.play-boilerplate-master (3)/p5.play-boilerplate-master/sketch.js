const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground;

var particles = [];
var plinkos = []; 
var divisions = [];
var divisionHeight = 300;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground();
  for(var i = 0; i <= width; i += 80) {
    divisions.push(new Div(i, 620));
  }
  for(var i = 10; i <= width; i += 50){
    plinkos.push(new plinko(i,75))
  }
  for(var i = 35; i <= width; i += 50){
    plinkos.push(new plinko(i,125))
  }
  for(var i = 10; i <= width; i += 50){
    plinkos.push(new plinko(i,175))
  }
  for(var i = 35; i <= width; i += 50){
    plinkos.push(new plinko(i,225))
  }
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  drawSprites();
  ground.display();
  divisions.forEach((element) => {
    element.display();
  })
  plinkos.forEach((element) => {
    element.display();
  })
  if(frameCount % 90 == 0){
    particles.push(new particle(random((width/2) - 10, (width/2) + 10), 10,15));
    
  }
  particles.forEach((element) => {
    element.display();
  })
}


