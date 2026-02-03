let currentState = "start";

function setup() {
  createCanvas(640, 360);
  textAlign(CENTER, CENTER);
  textSize(18);
}

function draw() {
  if (currentState === "start") drawStart();
  else if (currentState === "pathA") drawPathA();
  else if (currentState === "pathB") drawPathB();
  else if (currentState === "end") drawEnd();
}

function keyPressed() {
  if (currentState === "start") {
    if (key === "1") currentState = "pathA";
    if (key === "2") currentState = "pathB";
  } else if (currentState === "pathA") {
    if (key === " ") currentState = "end";
  } else if (currentState === "pathB") {
    if (key === " ") currentState = "end";
  } else if (currentState === "end") {
    if (key === "R" || key === "r") currentState = "start";
  }
}
