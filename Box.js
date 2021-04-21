class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.4,
        'friction':0.3,
        'density':0.4
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect( 0, 0, this.width, this.height);
    pop();

    if(this.body.speed < 3){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       pop();
     }
  }
   
  score(){
    if(this.visiblity<0 && this.visibility>-105){
      score++;
    }
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
  }
}
