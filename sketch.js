const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var b1 = [];
var b2 = [];
var b3 = [];

function setup(){

	createCanvas(1200, 800);

    engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

    ground = new Ground(width/2, height - 20 , width + 20, 45);

    ball = new Ball(370,300,75);

    rope = new Rope(ball.body,{x:400,y:100})
    
    for(i = 0; i < 9; i++){
		b1[i] = new Block(800, 400 - i*100);
	}
    for(i = 0; i < 7; i++){
		b2[i] = new Block(900, 400 - i*100);
	}
    for(i = 0; i < 8; i++){
		b3[i] = new Block(1050, 400 - i*100);
	}

}

function draw(){

    background(255);

    for(i = 0; i < 9; i++){
        b1[i].display();
	}
    for(i = 0; i < 7; i++){
        b2[i].display();
	}
    for(i = 0; i < 8; i++){
        b3[i].display();
	}

    ground.display();

    rope.display();
    
    ball.display();

}

function mouseDragged(){
    
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

}
