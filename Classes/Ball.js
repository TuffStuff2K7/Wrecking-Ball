class Ball{

    constructor(x,y,r){

        var options = {
            density: 1,
            frictionAir: 0.005
        }
        this.body = Bodies.circle(x,y,r,options);
        
        this.x = x;
        this.y = y;
        this.r = r;
        
        World.add(world,this.body);

    }

    display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);

        fill("#dddddd")

        ellipseMode(RADIUS);
        ellipse(0,0,this.r);
        pop();

    }

}