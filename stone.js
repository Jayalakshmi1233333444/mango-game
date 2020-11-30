class Stone{
    constructor(x,y,r){
      var options={
          isStatic:true,
          restitution:0.3,
          friction:0.5,
          density:1.2
        
      }  
      this.r=r;
     this.body=Bodies.circle(x,y, this.r/2,options) 
    this.image=loadImage("stone.png");
      World.add(world,this.body);
    }
    display(){
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER)
      strokeWeight(4);
      fill("white");
     image(this.image,70,139,this.r,this.r);
      pop() ;

    }
    
}