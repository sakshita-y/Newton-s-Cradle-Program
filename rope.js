class Rope{
	constructor(body1, body2, offset)
	{

	var options={
      bodyA:body1,
      bodyB:body2,
	}

	//create rope constraint here
	this.offset= offset
	//create rope constraint here
	this.rope = Constraint.create(options)
	World.add(world,this.rope)

	}

    //create display() here 
	display(){
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);
		stroke("white");
		line(pointA.x, pointA.y, pointB.x + this.offset, pointB.y);
	}

}