class snow{
 constructor(x,y,r){
     var options={
        restitution:0,
        friction:1.0,
       // density:1.0,
        isStatic:0
     }
  this.x=x;
       this.y=y;
    this.r=r
    this.image = loadImage("snow4.webp");
    this.body=Bodies.circle(x,y,r,options)
    World.add(myWorld, this.body);
 }display(){
  
    push();
    translate(this.body.position.x, this.body.position.y);
 
    imageMode(CENTER);
    image(this.image, 0, 0,this.r,this.r);
    //Matter.Body.scale(this.body,4,4)
    pop();
 }
}

/*class snow{
    constructor(x, y, radius) {
        var options = {
         restitution:0.5,
         friction:0.5,
         isStatic:false
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        World.add(myWorld, this.body);
        this.image = loadImage("snow4.webp");
      }
      
      display(){
        //var angle = this.body.angle;
        var pos= this.body.position;

        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        imageMode(CENTER);
        image(0,0,this.radius,this.radius);
        pop();
      }
}*/