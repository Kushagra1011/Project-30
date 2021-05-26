class Block{
    constructor(x, y, width, height) {
        var options = {
          restitution : 0.5,
          friction : 0.5,
          isStatic : false
        }
        //this.image = loadImage("block.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visibilty = 255; 
      }
      display(){
        console.log(this.body.speed);
        var angle = this.body.angle;
        var pos= this.body.position;
        if (this.body.speed<3){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        }

        else {
        World.remove(world,this.body); 
        push();  
        this.Visibility = this.Visibility-2;
        tint(255,this.Visibility);
        pop();
        }
      
      }
}
