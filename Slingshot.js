class Slingshot{
    constructor(bodyA, newPoint){
        var options = {
            bodyA: bodyA,
            pointB: newPoint,
            stiffness: 0.04,
            length: 350
        }
        this.sling = Constraint.create(options);
        this.pointB = newPoint;
        World.add(world, this.sling);
        
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}