
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine, world;
var ground;
var  bob,rope1,roof,roof1,bob1,bob2,bob3,bob4,bob5,rope2;
var rope3,rope4,rope5;

function setup() {
	var canvas=createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

  roof= new Roof(600,height,1200,20);
  roof1= new Roof(520,75,230,50);
  bob5= new Bob(810, 350,50);
  bob4= new Bob(740,350,50);
  bob3= new Bob(650,350,50);
  bob2= new Bob(580,350,50);
  bob1= new Bob(430,350,50);
   
  rope1=new Rope(bob1.body,{x:410,y:100});
  rope2=new Rope(bob2.body,{x:460,y:100});
  rope5= new Rope(bob5.body,{x:610,y:100}); 
  rope4= new Rope(bob4.body,{x:560,y:100});
  rope3= new Rope(bob3.body,{x:510,y:100});
 


	Engine.run(engine);
  
}
function draw(){
  background("pink");
    
  rope1.display();
  roof1.display();
    roof.display();
    bob1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    
}
function keyPressed(){
if (keyCode==UP_ARROW){Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-90,y:-45})||Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-90,y:-45})
}

}