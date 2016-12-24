var x = 1;
var y = 1;
var z = 1;
var s = 10;
var b = 8/3;
var r = 28;
var points = [];
var dt = 0.011;
var maxlength = 1000;

function setup() {
    createCanvas(window.innerWidth - 4, window.innerHeight - 4);
    background(245, 230, 255);
    noFill();
}

function draw() {
    background(235, 235, 255);
    translate(width / 2, height / 2);
    dx = s * (y - x) * dt;
    dy = (x * (r - z) - y) * dt;
    dz = (x * y) - (b * z) * dt;
    x = (x + dx);
    y = (y + dy);
    z = (z + dz);
    var v = new p5.Vector(x, y, z);
    points.push(v);
    if (points.length > maxlength) {
	points.shift();
    }
    stroke(245, 220, 50, 200);
    strokeWeight(5);
    beginShape();
    for (p of points) {
	vertex(p.x * 50, p.y * 50);
    }
    endShape();

    // splashes
    for(var i = 0; i < 2; i++) {
	splash = p5.Vector.random2D().add(v).mult(random(20, 50));
	strokeWeight(1);
	stroke(100, 100, 255, 100);
	// line(v.x, v.y, splash.x, splash.y);
	line(v.x * 50, v.y * 50, splash.x, splash.y);
	strokeWeight(5);
	stroke(230, 200, 50);
	point(splash.x, splash.y);
    }

    // pee shadow
    stroke(100, 100, 255, 100);
    strokeWeight(7);
    line(0, height/2 + height * 0.2, v.x*50, v.y*50);
    stroke(70, 70, 240, 100);
    strokeWeight(7);
    point((p.x * 50) + 3, (p.y * 50) + 3);
    // pee with shading
    stroke(220, 150, 30, 200);
    strokeWeight(7);
    curve(width/2 + 5, height, 0 + 5, height/2 + height * 0.2, v.x * 50, v.y * 50, width/2, height);
    stroke(255, 200, 0);
    curve(width/2, height, 0, height/2 + height * 0.2, v.x * 50, v.y * 50, width/2, height);
}
