const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6, box7,box8, box9, box10, box11, box12, box13;
var polygon, polygonImage;
var ground, platform;
var slingShot, engine, world;
var score

function preload() {
    polygonImage= loadImage("polygon.png");
  
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);


    ground = new Ground(450,height,900,20);
    platform = new Ground(400, 305, 300, 20);

    
    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40);
    box6 = new Box(480,235,30,40);
    
    box7 = new Box(360,100,30,40);
    box8 = new Box(390,100,30,40);
    box9 = new Box(420,100,30,40);
    box10 = new Box(450,100,30,40);
    
    box11 = new Box(390,50,30,40);
    box12= new Box(420,50,30,40);

    box13 = new Box(405,10,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world, polygon);
    
    slingShot = new SlingShot(this.polygon, {x:100, y:200});    
}

function draw(){
    background(56,44,44);
    //Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    
    platform.display();

    Text("SCORE-"+score, 750, 40);

    fill("skyblue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    fill("pink");
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    fill("yellow");
    box11.display();
    box12.display();
    fill("green");
    box13.display();
    
      
    imageMode(CENTER);
    image(polygonImage, polygon.position.x, polygon.position.y, 40,40);

    slingShot.display();  
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

