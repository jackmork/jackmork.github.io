let t;
let x;
let y;
let c;
let p;
let x1;
let y1;

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
  t  = millis();
  smooth();
  for (i=0;i<400;i++) {
    stroke(150-30*sin(1/i), 120-.5*i, 100+50*cos(i/2));
    line(-200,-200+i,200, -200+i);
  }
  strokeWeight(10);
  
}

function draw() {
  t  = millis();
  translate(-200, -200, 0);
    x1 = 30*cos(0.1*t);
  y1 = 30*sin(0.1*t);
  for (j=0;j<8;j++) {
    for (i=0;i<8;i++)  {
    p=6*j;
    c=color(x1+26*j, y1+25*i, 200-10*j);
    push();
      translate(50*i, 50*j, 0);
      stroke(c);
      cuboid(c);
    pop();
    }
  }
  
}

function cuboid(c) {
  noFill();
  t  = millis();
  
  push();
    rotateX(-90);
    push();
      rotateY(360*cos(0.13*(.08*t+p)));
      rotateX(360*sin(PI+0.135*(.08*t+p)));
      box(205);
    pop();
    // push();
    //   rotateY(-360*sin(PI/2+0.5*(.083*t+p)));
    //   box(25);
    // pop();
  pop(); 
}

// function mouseClicked() {
//   noLoop();
// }