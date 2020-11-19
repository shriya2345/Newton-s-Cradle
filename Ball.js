class Ball{
    constructor(x,y,r){
        var options={
            isStatic:true,
            density:3,
            friction:0.4,
            restitution:1.2

        }
   
this.x=x;
this.y=y;
this.r=r;

this.body=Bodies.circle(this.x,this.y,this.r,options);
World.add(world,this.body);

 }
 display(){
     var pos=this.body.position;
     push();
     translate(pos.x,pos.y);
     rotate(this.body.angle);
      stroke("yellow");
      fill("pink");
      ellipse(0,0,this.r,this.r);
      pop();
 }
}
