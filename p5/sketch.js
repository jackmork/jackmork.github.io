function setup() {
  createCanvas(400, 400);
  background(random(100, 220));
  for (i=0;i<400;i++) {
    let c=color(random(25, 255), random(0, 250), random(0, 200));
    fill(c);
  circle(random(-50+.2*i, 400), random(0, 100+1.5*i), random(20, 110));
  }
}

function draw() {

}