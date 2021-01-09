class Slingshot
{
    constructor(bodyA,pointB)
    {
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 5
          }
          this.chain=Matter.Constraint.create(options);
          World.add(world,this.chain);
          this.pointB=pointB;
    }
    fly()
    {
        this.chain.bodyA=null;
    }
    display()
    {
        if(this.chain.bodyA)
        {
            var a=this.chain.bodyA.position;
            strokeWeight(2);
            line(a.x,a.y,this.pointB.x,this.pointB.y);
        }
        
    }
    attach(body1)
    {
        this.chain.bodyA=body1;
    }
   
}