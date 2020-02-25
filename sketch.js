let positionX;
let speedX;
let value = 0;
let x = 100;
let y = 100;
let num = 14;
let diameter = 50;

function setup() {
	background(0);
  createCanvas(1050, 750, WEBGL);
	noLoop();
	frameRate(50);
}

function draw() {
  // put drawing code here\
	if (keyIsDown(LEFT_ARROW)) {
		x -= 5;
	}

	if (keyIsDown(RIGHT_ARROW)) {
		x += 5;
	}

	if (keyIsDown(UP_ARROW)) {
		y -= 5;
	}

	if (keyIsDown(DOWN_ARROW)) {
		y += 5;
	}
	fill(255, 0, 0);
	ellipse(x, y, 50, 50);
 // draw a spinning box
 // with width, height and depth of 50
 let step = frameCount % 20;
  let angle = map(step, 0, 20, 0, TWO_PI);
  let cos_a = cos(angle);
  let sin_a = sin(angle);
  // Equivalent to rotate(angle);
  applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
	triangle(30, 75, 58, 20, 86, 75);
	fill(value);
  box(80);
	for (let i = 10; i < 500; i+= 20) {
	triangle(i, 75, 58, 20, 86, 75);
	}
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}

function mouseClicked() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}


  // uncomment to prevent any default behavior
  // return false;
