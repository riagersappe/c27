class rope {
    constructor(a,b,l,s,w){
        var constraint = {
            bodyA:a,
            bodyB:b,
            length:l,
            stiffness:s
          }
        
          this.chain1 = Matter.Constraint.create(constraint);
          World.add(myworld,this.chain1);
          this.w = w
    }
    display(){
        strokeWeight(this.w);
        line(this.chain1.bodyA.position.x,this.chain1.bodyA.position.y,this.chain1.bodyB.position.x,this.chain1.bodyB.position.y);
    }
}