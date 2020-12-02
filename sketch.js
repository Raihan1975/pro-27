const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ball1,ball2,ball3,ball4,ball5,rope1,rope2,rope3,rope4;
function setup(){
createCanvas(windowWidth,windowHeight);
engine = Engine.create();
world = engine.world;
ground=new Ground(windowWidth/2,windowHeight-100,windowWidth,50);

ball1 = new ball(200,200,80,80);
ball2 = new ball(300,200,80,80);
ball3 = new ball(400,200,80,80);
ball4 = new ball(500,200,80,80);
rope1=new Rope(ball1.body,{x:200,y:50});
rope2=new Rope(ball2.body,{x:300,y:50});
rope3=new Rope(ball3.body,{x:400,y:50});
rope4=new Rope(ball4.body,{x:500,y:50});

}
function draw(){
background("cyan");
Engine.update(engine)
ground.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
}
function mouseDragged(){
Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}