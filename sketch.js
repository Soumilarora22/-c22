const Engine=Matter.Engine;
const World =Matter.World;
const Bodies=Matter.Bodies;

var eng,wld;
var object,ground;
function setup() {
  createCanvas(400,400);
  eng=Engine.create();
  wld=eng.world;

  var object_options ={
    isStatic:false,
    restitution:2

  }
  var ground_options={
    isStatic:true
  }

  object=Bodies.rectangle(200,200,50,50,object_options)
  World.add(wld,object)
  ground=Bodies.rectangle(200,350,400,10,ground_options)
  World.add(wld,ground)


  console.log(object.position.x);
  
  
}

function draw() {
  background(0);  
  Engine.update(eng);
  rectMode(CENTER)
  rect(object.position.x,object.position.y,50,50)
  rect(ground.position.x,ground.position.y,400,10)

}