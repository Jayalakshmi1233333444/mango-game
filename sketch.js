
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var stone,ground,tree,boy,mango1,mango2,mango3,mango4,mango5,elastic;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone=new Stone(50,400,50,50);
ground=new Ground(width/2,height,1200,50);
tree=new Tree(400,400,400,400)
boy=new Boy(width-1000,610,250,250);
mango1=new Mango(width-20,420,50);
mango2=new Mango(width-200,350,50);
mango3=new Mango(width-290,430,50);
mango4=new Mango(width-150,460,50);
mango5=new Mango(width-80,370,50);
elastic=new Elastic(boy.body,{x:200,y:100});

	Engine.run(engine);
  // console.log(boy.x)
//   console.log(tree.y
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 
 ground.display();
 tree.display();
 boy.display();
 stone.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 elastic.display();
}



