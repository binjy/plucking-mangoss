
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,tree1,kid,chain,mango,mango7,mango2,mango3,mango4,mango5,mango6,chain2
var stone
function preload(){
	
}

function setup() {
	createCanvas(1300, 600);
 
	engine = Engine.create();
	world = engine.world;
  tree1 = new Tree(1000,580,500,500)
	//Create the Bodies Here.
ground = new Ground(700,600,1500,20)
kid = new Boy(200,520,200,300)
mango2= new Mango(990,400,50,50)
mango6 = new Mango(1000,400,50,50)
  mango = new Mango(950,300,50,50)
//chain = new Chain(mango.body,{x:1000,y:20})
stone = new Stone(120,440,50)
mango7 = new Mango(1000,200,50)
//chain = new Chain(kid.body,{x:200,y:500})
chain2 = new Chain(stone.body,{x:100,y:200})
//mango = new Mango(160,500,50,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  mango.display()
 // chain.display()
 mango6.display()
   mango2.display()
  stone.display()
  kid.display()
  ground.display()
  tree1.display()
  mango7.display()
  chain2.display()
  detection(stone,mango6)
  detection(stone,mango7)
  drawSprites();
}



function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
 
 }
 
 function mouseReleased(){
	chain2.fly()
 }
 


 function detection(lstone,lmango){
  
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r) {
    Matter.Body.setStatic(lmango.body,false)
  }
}

function keyPressed() {
  if (keyCode ===32) {
   Matter.Body.setPosition(mango2.body,{x:235, y:420})
   launcherObject.attach(mango2.body)
 }



}