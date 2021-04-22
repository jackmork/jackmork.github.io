function setup() {
  createCanvas(800, 400);

  angleMode(DEGREES);
}

function draw() {
  strokeWeight(4);

  let phase1 = 200;
  let amp1 = 110;
  let phase2 = 201.5;
  let amp2 = 95;
  let k=10;
  for (i=0;i<2*width;i++) {
  let y=amp1*sin(phase1*frameCount-k*i);
  let p=amp2*sin(phase2*frameCount-k*i);
    push();
      stroke(100+ 50*cos(3*frameCount+2*i), 25+10*cos(i), 75);
      translate(0, y+p);
      point(i/2, 200);
    pop();
  }
  stroke(10, 228, 228);
  strokeWeight(5);
  line(0,0, 0, 800);
  line(0,0, 800, 0);
  stroke(50, 178, 228);
  line(800,400, 0, 400);
  line(800, 400, 800, 0);
}