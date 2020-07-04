class plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,15,options);
      this.radius = 15;
      this.x = x;
      this.y = y;
      World.add(world, this.body);
    }
    display(){
     // var pos =this.body.position;
     // ellipseMode(CENTER);
      circle(this.x,this.y,this.radius);
    }
}