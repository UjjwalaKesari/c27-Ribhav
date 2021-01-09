
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//write this line also
const Constraint = Matter.Constraint;

//bobObject5 : Correct
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
//declare 5 ropes 
var rope1,rope2,rope3, rope4,rope5;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(300,180,400,20)
	bobObject1 = new Bob(200,525,50)
	bobObject2 = new Bob(250,525,50)
	bobObject3 = new Bob(300,525,50)
	bobObject4 = new Bob(350,525,50)
	bobObject5 = new Bob(400,525,50)

	//create 5 rope objects. class name is Rope and not rope
	//it will be roof.body and not roofobject.body
	rope1=new Rope(bobObject1.body,roof.body,-50*2, 0)

	rope2=new Rope(bobObject2.body,roof.body,-50, 0)
	rope3=new Rope(bobObject3.body,roof.body,0, 0)
	rope4=new Rope(bobObject4.body,roof.body,50, 0)
	rope5=new Rope(bobObject5.body,roof.body,50*2, 0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);

 //roof, not ground 
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-55});

	}
}
