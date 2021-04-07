function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(175);
  strokeWeight(3);
  for (i=0;i<801;i++) {
    stroke(255-140/(i+1), 100+50*sin(.001*i*frameCount), 35+.1*i);
    translate(30*cos(.001*i*frameCount),0);
    point(200,.5*i);
    point(155,.5*i);
    point(110,.5*i);
    point(65,.5*i);
    point(20,.5*i);
    point(245,.5*i);
    point(290,.5*i);
    point(335,.5*i);
    point(380,.5*i);
    point(420,.5*i);
  }
  // if (y>50) {
  //   noLoop();
  // }
  // else {
  //   loop();
  // }
}

function mousePressed() {
  if (isLooping()) {
    noLoop();
  }
  else {
    loop();
  }