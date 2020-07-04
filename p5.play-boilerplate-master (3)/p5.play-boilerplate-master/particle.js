class particle {
    constructor(x,y,r) {
        var options = {
            isStatic : false,
            restitution : 0.4
        }
        this.body = Bodies.circle(x,y,r,options);
        this.color = color(random(0,255), random(0,255), random(0,255));
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        //noStroke();
        fill(this.color);
        circle(this.x/10000,this.y,this.r);
        pop();
        
    }
}