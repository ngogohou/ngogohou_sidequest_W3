function drawStart() {
  background(255, 200, 220);
  fill(0);
  textAlign(CENTER);
  textSize(18);
  text("The blob wakes up in a warm pink field.", width / 2, height / 2 - 40);
  text("Press 1 to explore", width / 2, height / 2);
  text("Press 2 to stay still", width / 2, height / 2 + 30);
}

function keyPressed() {
  if (currentState === "start") {
    if (key === "1") currentState = "explore";
    if (key === "2") currentState = "wait";
  }
}
