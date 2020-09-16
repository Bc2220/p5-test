let value = 0;
let from = (218, 165, 32);
let to = (72, 61, 139);
let eggs = []; 

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(50, 89, 100);
}
//crimson(220,20,60)
//turqoise(64,224,208)
//Dark Cyan(0,139,139)
//Steel Blue(70,130,180)
//Dark Slate Blue(72,61,139)
//Navy(0,0,128)
function draw() {
 
  if (mouseIsPressed)  eggs.push(new Scramble());
  for (let i = 0; i < eggs.length; i++) {
   eggs[i].move();
    eggs[i].display();
  }
}


class Scramble {
  constructor() {
    this.z = 1;
    this.x = mouseX;
    this.y = mouseY;
    this.directionX = random(1,5);
    this.directionY = random(1,5);
    this.diameter = random(15, 45);
    this.speed = 1/2;
  }

  move() {
    this.x += this.speed * this.directionX;
    this.y += this.speed * this.directionY;
  
  if (this.x > width - this.diameter || this.x < this.diameter) {
    this.directionX *= -1;
  }
  if (this.y > height - this.diameter || this.y < this.diameter) {
    this.directionY *= -1; this.z++;
  }
    if(this.z>6) this.z = 1;
  }

  display() {
  colorMode(RGB); strokeWeight(1);
  if (keyIsPressed) strokeWeight(10);
  ellipse(this.x, this.y, this.diameter, this.diameter);
fill(setColor(this.z));
  }
}
function setColor(i) {
let c = color(0,0,0);
switch (i) {
  case 1: c = color(220,20,60); break;
  case 2: c = color(64,224,208); break;
  case 3: c = color(0,139,139); break;
  case 4: c = color(70,130,180); break;
  case 5: c = color(72,61,139); break;
  case 6: c = color(0,0,128); break;
  default: c = color(0,0,0); break;
} return c; }
