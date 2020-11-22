class Rope{ 
    constructor(bodyA,pointB){
    var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:1,
    length:150
    
    }
    this.rope=Constraint.create(options);
    World.add(world,this.rope);
    this.pointB=pointB;
    }
    display(){
    strokeWeight(5);
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y);
    
    }
    }
    