class Elastic{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:0.04
        }
        this.pointB=pointB;
        this.elastic=Constraint.create(options);
        World.add(world,this.elastic);
    }
    display(){
        var pointA=this.elastic.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4);
        
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}