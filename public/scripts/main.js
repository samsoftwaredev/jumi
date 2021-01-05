const canvas = new MyCanvas().getElement();
const ctx = canvas.getContext("2d");

let movingSpeed = 50;
let secondsPassed = 0;
let oldTimeStamp = new Date().getTime();
let timePassed = 0;

// rosary
const rosary = new RosaryControls();
rosary.init();

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
rosary.subscribe(rosaryCross.update);
// text
let rosaryText = new RosaryText(
  canvas.width * (1 / 4),
  canvas.height * (1 / 8),
  themeColors.theme2,
  rosary.getPrayer()
);
rosary.subscribe(rosaryText.update);

function draw() {
  rosaryText.draw();
}

function update() {
  timePassed += secondsPassed;
  const ease = easeLinear(timePassed, 0, 1, 5);
  const speed = movingSpeed * secondsPassed;
  rosary.update();
}

function clear() {
  // Clear the entire canvas
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function gameLoop(timeStamp) {
  // Calculate how much time has passed
  secondsPassed = (timeStamp - oldTimeStamp) / 1000;
  oldTimeStamp = timeStamp;
  if (secondsPassed > -1) {
    clear(); // Clear the entire canvas
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

// Example easing functions
function easeInOutQuint(t, b, c, d) {
  if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
  return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
}

function easeLinear(time, startingAt, incrementBy, d) {
  return (incrementBy * time) / d + startingAt;
}

// display on body
document.body.append(getTopNav());
document.body.append(canvas);
// start
gameLoop(new Date().getTime());
console.log(rosary.prayersList);
const totalTime = rosary.getDuration() / 60000;
console.log(rosary.getDuration(), totalTime);
