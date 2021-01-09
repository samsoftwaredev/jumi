const canvas = new MyCanvas().getElement();
const ctx = canvas.getContext("2d");

let movingSpeed = 50;
let secondsPassed = 0;
let oldTimeStamp = new Date().getTime();
let timePassed = 0;

// rosary
const rosary = new RosaryControls();
rosary.init();
rosary.setProgressBar();
const numOfBeats = new Array(11).fill(null);
let beats = numOfBeats.map(() => new Circle(10, 10, 7, themeColors.theme3));
let rosaryBeats = new RosaryBeats(
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
  themeColors.theme2,
  rosary.getPrayer()
);

rosary.subscribe(rosaryCross.update);
rosary.subscribe(rosaryText.update);

function draw() {
  rosaryText.draw();
  rosary.draw();
}

function update() {
  const speed = movingSpeed * secondsPassed;
  rosary.update();
}

function gameLoop(timeStamp) {
  // Calculate how much time has passed
  secondsPassed = (timeStamp - oldTimeStamp) / 1000;
  oldTimeStamp = timeStamp;
  if (secondsPassed > -1) {
    // Clear the entire canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    update(); // Update game objects in the loop
    draw();
  }
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
gameLoop(new Date().getTime());
const totalTime = rosary.getDuration() / 60000;
