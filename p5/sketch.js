function setup() {
  createCanvas(400, 400);

}

function draw() {
  frameRate(1.3);
  curcle();
  noLoop();
}

function curcle() {
    background(random(100, 220));
  for (i=0;i<400;i++) {
    let c=color(random(140, 285), random(100, 145), random(50, 1500));
    fill(c);
  circle(random(-50+.2*i, 400), random(0, 100+1.5*i), random(20, 110));
  }
}

function mousePressed() {
  redraw();
}