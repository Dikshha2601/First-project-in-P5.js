function preload() {}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(150, 150);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  fill(0, 128, 0);
  stroke(0, 128, 0);
  circle(25, 25, 50);
  circle(615, 25, 50);
  circle(25, 455, 50);
  circle(615, 455, 50);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  rect(50, 10, 540, 30);
  rect(50, 440, 540, 30);
  rect(10, 50, 30, 380);
  rect(600, 50, 30, 380);
  image(video, 240, 180, 160, 120);
}

function take_snapshot() {
  save("student.png");
}
