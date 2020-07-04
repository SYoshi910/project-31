class Div {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,20,300,options);
      this.width = 20;
      this.height = 300;
      this.x = x;
      this.y = y;
      World.add(world, this.body);
    }
    display(){
     // var pos =this.body.position;
      rectMode(CENTER);
      rect(this.x,this.y, this.width, this.height);
    }
}