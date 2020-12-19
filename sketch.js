
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var paperObject;
var dustbin1,dustbin2,dustbin3;
var ground;

var sling;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject= new Paper(100,100);
	dustbin1= new Dustbin(1200,600);

	ground = new Ground(800,690);
	Engine.run(engine);
	sling= new Slingshot(paperObject.body,{x:500,y:100});
	
}


function draw() {
 
  background("skyblue");
  paperObject.display();
 dustbin1.display()

 ground.display();
 sling.display();
 
}

function mouseDragged(){
Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
	sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {

	sling.attach(paperObject.body); 
  
	}
	
}


