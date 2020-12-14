class Ball{
constructor(x,y,radius){
var options = {
density : 1,
frictionAir : 0.005
}
this.body = Bodies.circle(x,y,radius,options)
this.radius = radius
World.add(world,this.body);
}
display(){
fill(205,0,0);
stroke(0,100,100);
strokeWeight(12)
ellipseMode(RADIUS);
ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
}
}