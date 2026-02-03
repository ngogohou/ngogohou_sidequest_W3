let currentState = "start";

function setup() {
  createCanvas(640, 360);
}

function draw() {
  if (currentState === "start") drawStart();
  if (currentState === "explore") drawExplore();
  if (currentState === "wait") drawWait();
  if (currentState === "joy") drawJoy();
  if (currentState === "calm") drawCalm();
  if (currentState === "lonely") drawLonely();
}
