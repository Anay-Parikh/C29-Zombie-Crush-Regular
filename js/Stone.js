class Stone {
    constructor() {
        var options = {
            restitution: 0.8
        }
        this.body = Bodies.circle(random(350, width-350), random(100, 500), random(25, 50), options);
        console.log(this.body)
        Composite.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        ellipseMode(CENTER);
        noStroke();
        fill("white");
        ellipse(pos.x, pos.y, this.body.circleRadius*2);
        pop();
    }
}