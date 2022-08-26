var canvas;

function setup() {
  //manip values
  manipA = false;
  manipB = false;
  manipC = false;
  canvas = createCanvas(400,400);
  canvas.position(340,675);

  //canvas size variables
  canvasWidth = 600;
  canvasHeight = 400;

  //triangle vertex coordinates
  x1 = canvasWidth / 2;
  y1 = canvasHeight / 5;
  x2 = canvasWidth / 5;
  y2 = (canvasHeight * 4) / 5;
  x3 = (canvasWidth * 4) / 5;
  y3 = (canvasHeight * 4) / 5;

  //reset button
  button = createButton('RESET');
  button.position(canvasWidth * 140/100, canvasHeight/0.58)
  button.mousePressed(resetTriangle)

  //canvas declaration
  createCanvas(canvasWidth, canvasHeight);
}
function resetTriangle() {
  //vertex reset
  x1 = canvasWidth / 2;
  y1 = canvasHeight / 5;
  x2 = canvasWidth / 5;
  y2 = (canvasHeight * 4) / 5;
  x3 = (canvasWidth * 4) / 5;
  y3 = (canvasHeight * 4) / 5;
  //manip disabler
  manipA = false;
  manipB = false;
  manipC = false;
}
function mouseClicked() {
  if (
    mouseX < x1 + 10 &&
    mouseX > x1 - 10 &&
    mouseY < y1 + 10 &&
    mouseY > y1 - 10 &&
    manipA == false
  ) {
    manipA = true;
  } else if (
    mouseX < x2 + 10 &&
    mouseX > x2 - 10 &&
    mouseY < y2 + 10 &&
    mouseY > y2 - 10 &&
    manipB == false
  ) {
    manipB = true;
  } else if (
    mouseX < x3 + 10 &&
    mouseX > x3 - 10 &&
    mouseY < y3 + 10 &&
    mouseY > y3 - 10 &&
    manipC == false
  ) {
    manipC = true;
  } else if (manipA == true) {
    manipA = false;
  } else if (manipB == true) {
    manipB = false;
  } else if (manipC == true) {
    manipC = false;
  }
}
function draw() {
  //side lengths
  a = sqrt(pow(y2 - y1, 2) + pow(x2 - x1, 2));
  b = sqrt(pow(y3 - y2, 2) + pow(x3 - x2, 2));
  c = sqrt(pow(y1 - y3, 2) + pow(x1 - x3, 2));
  //angles
  angleA = acos((pow(a, 2) + pow(b, 2) - pow(c, 2)) / (2 * a * b)) * 100;
  angleB = acos((pow(b, 2) + pow(c, 2) - pow(a, 2)) / (2 * b * c)) * 100;
  angleC = acos((pow(c, 2) + pow(a, 2) - pow(b, 2)) / (2 * c * a)) * 100;
  //background definition
  background(220);
  //vertex manipulation
  if (manipA == true) {
    x1 = mouseX;
    y1 = mouseY;
  } else if (manipB == true) {
    x2 = mouseX;
    y2 = mouseY;
  } else if (manipC == true) {
    x3 = mouseX;
    y3 = mouseY;
  }
  //triangle declaration
  triangle(x1, y1, x2, y2, x3, y3);
  //data print-out
  text(
    "a = " +
      round(a) +
      "\n b = " +
      round(b) +
      "\n c = " +
      round(c) +
      "\n alpha = " +
      round(angleA) +
      "\n beta = " +
      round(angleB) +
      "\n gamma = " +
      round(angleC),
    canvasWidth / 10,
    canvasHeight / 10
  );
}
