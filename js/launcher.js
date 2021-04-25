class Launcher{
    constructor(bodyA,pointB){
        var options={bodyA:bodyA,
        pointB:pointB,length:10,stiffness:0.004}
        this.pointB=pointB
     this.launcher=Matter.Constraint.create(options)
     World.add(world,this.launcher)
    }
    fly(){
     this.launcher.bodyA=null   
    }
    display(){
    if(this.launcher.bodyA){
        strokeWeight(2)
        line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
     
    }
}