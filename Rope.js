class Rope {
  constructor(body1,point2){
    var options = {
      bodyA:body1,
      pointB:point2,
      stiffness:1.2,
    length:250
    }
    this.pointB=point2
    this.rope = Constraint.create(options)
  World.add(world,this.rope)
  }
  attach(body){
    this.rope.bodyA=body
  }
  fly(){
    this.rope.bodyA = null
  }
  display(){
    if(this.rope.bodyA){
      var pointA = this.rope.bodyA.position
      var pointB =this.pointB   
    push ()
    stroke(48,22,8)
  strokeWeight (3)
  line (pointB.x,pointB.y,pointA.x,pointB.y)
  pop ()  
  }
  }
}