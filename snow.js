class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image= loadImage("snow4.webp")
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        imageMode(RADIUS);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
    }

};