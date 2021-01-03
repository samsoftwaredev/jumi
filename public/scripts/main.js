const canvas = new MyCanvas().getElement();
const ctx = canvas.getContext("2d");

const numOfBeats = new Array(11).fill(null);
let beats = numOfBeats.map(() => new Circle(10, 10, 7, themeColors.theme3));
let rosaryBeats = new CircleRosary(
  150,
  canvas.height / 2,
  100,
  themeColors.theme1,
  beats
);
let rosaryCross = new RosaryCross(150, canvas.height / 2, themeColors.theme1);
// text
let rosaryText = new RosaryText(
  canvas.width * (1 / 4),
  canvas.height * (1 / 8),
  themeColors.theme2
);

function draw() {
  // rosaryBeats.draw();
  // rosaryCross.draw();
  rosaryText.draw();
}

function update(s) {
  if (rosaryText) {
    rosaryText.updateCoordinate(0, -1);
    // rosaryText.updateOpacity(-0.01);
  }
  // if (beats) {
  //   if (s % 59 === 0) rosaryBeats.nextBeat();
  // }
}

function clear() {
  // Clear the entire canvas
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function gameLoop() {
  var s = new Date().getTime();
  const secondsPassed = s / 1000;
  clear(); // Clear the entire canvas
  update(secondsPassed); // Update game objects in the loop
  draw();
  window.requestAnimationFrame(gameLoop);
}

let mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

addEventListener("mouseover", () => {
  mouse.x;
});

// display on body
document.body.append(getTopNav());
document.body.append(canvas);
// start
gameLoop();
