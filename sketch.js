var bubble = {
	x: 400,
	y: 400,
	radius:100,

};
	
var color = {
	r: 255,
	g: 204,
	b: 204,

};

function setup() {
  createCanvas(600, 600);
	background(0);
}

function draw() {
	noFill();
	strokeWeight(2);
	display(bubble);
	
}

function display() {
	color.r = random(100,255);
	color.g = 0
	color.b = random(100,190);
	bubble.x = random(0,width);
	bubble.y = random(0,height);
	bubble.radius = random (5,150);
	
	stroke(color.r,color.g,color.b);
	ellipse(bubble.x,bubble.y,bubble.radius,bubble.radius);
}
