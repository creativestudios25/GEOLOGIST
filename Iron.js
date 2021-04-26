class Iron {
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.width = width;
        this.height = height;

		var options = {
			'restitution':0.3,
			'friction':4.5,
			'density':35
		}
		this.body=Bodies.rectangle(this.x, this.y,width, height, options)
		World.add(world, this.body);
 
	}
	display()
	{
			var Stonepos =this.body.position;	
			push()
			translate(Stonepos.x, Stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("grey");
			fill("silver");

			rect(0,0,this.width,this.height);

			pop()
	}

}