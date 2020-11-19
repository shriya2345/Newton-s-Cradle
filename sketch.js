
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5; 
var roof1;
var chain1,chain2,chain3,chain4,chain5;
function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	ball1= new Ball(300,350,50);
	ball2= new Ball(350,350,50);
	ball3= new Ball(400,350,50);
	ball4= new Ball(450,350,50);
	ball5= new Ball(500,350,50);
	roof1=new Roof(300,100,300,40);
	chain1=new Chain(ball1.body,roof1.body,-50*2,0);
	chain2=new Chain(ball2.body,roof1.body,-25*2,0);
	chain3=new Chain(ball3.body,roof1.body,-0*2,0);
	chain4=new Chain(ball4.body,roof1.body,25*2,0);
	chain5=new Chain(ball5.body,roof1.body,50*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  roof1.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  keyPressed();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.body.applyForce(ball1.body,ball1.body.position,{x:-100,y:-100})
	}
}


