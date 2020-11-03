class Drop{
    constructor(x,y){
        var options= {
            restitution: 0.1,
            friction: 0.001
         }
        var radius = 0.5;
        this.body = Bodies.circle(x,y,radius,options);    
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }

    update(){
        if(this.body.position.y>height){
          Matter.Body.setPosition(this.body, {x:random(0,1200), y:random(0,1200)});
        }
    }
}