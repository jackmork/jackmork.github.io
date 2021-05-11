let num = 5000;
let range = 15;
let colorRange = 15;

let ax = [];
let ay = [];
let ac = [];
let i;

function setup() {
  createCanvas(400, 400);
  background(220);
  strokeWeight(20);
  angleMode(DEGREES);
  for(i = 0; i < num; i++) {
    ax[i] = width/2;
    ay[i] = height/2;
    ac[i] = 150;
  }
  
}

function draw() {
 alive();
}

function alive() {
   for( i = 1; i < num; i++) {
    ax[i-1] = ax[i];
    ay[i-1] = ay[i];
    ac[i-1] = ac[i];
  }

  // Put a new value at the end of the array
  ax[num-1] += random(-range, range);
  ay[num-1] += random(-range, range);
  ac[num-1] += random(-colorRange, colorRange);

  // Constrain all points to the screen
  ax[num-1] = constrain(ax[num-1], 0, width);
  ay[num-1] = constrain(ay[num-1], 0, height);
  ac[num-1] = constrain(ac[num-1], 25, 225);
  
   for( i=1; i<num; i++) {    
    let val = color(20+ac[i-20], ac[i]-20, 40);
    stroke(val);
    point(ax[i], ay[i]);
  }
  
}