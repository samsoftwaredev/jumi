const canvas = new MyCanvas().getElement();
const ctx = canvas.getContext("2d");

let movingSpeed = 50;
let secondsPassed = 0;
let oldTimestamp = new Date().getTime();
let timePassed = 0;

// rosary
const rosary = new RosaryControls();
rosary.init();
rosary.setProgressBar();
const numOfBeats = new Array(10).fill(null);
let beats = numOfBeats.map(() => new Circle(10, 10, 7, themeColors.theme3));
let rosaryBeats = new RosaryBeats(
  150,
  canvas.height / 2,
  100,
  beats,
  themeColors.theme3,
  themeColors.theme1
);
let rosaryCross = new RosaryCross(
  150,
  canvas.height / 2,
  themeColors.theme3,
  themeColors.theme1
);
// text
let rosaryText = new RosaryText(
  350,
  canvas.height * (1 / 8),
  themeColors.theme2,
  rosary.getPrayer()
);

rosary.subscribe(rosaryCross.update);
rosary.subscribe(rosaryBeats.nextBeat);
rosary.subscribe(rosaryText.update);

function draw() {
  rosaryText.draw();
  rosaryBeats.draw();
  rosaryCross.draw();
}

function update() {
  const speed = movingSpeed * secondsPassed;
  rosary.update();
}

function gameLoop(timestamp) {
  // Calculate how much time has passed
  secondsPassed = (timestamp - oldTimestamp) / 1000;
  oldTimestamp = timestamp;
  if (secondsPassed > -1) {
    // Clear the entire canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    update(); // Update game objects in the loop
    draw();
  }
  // stop loop if the user reach the last prayer
  if (rosary.getPrayerIndex() < rosary.prayersList.length - 1) {
    window.requestAnimationFrame(gameLoop);
  }
}

// display on body
// document.body.append(getTopNav());
document.body.append(canvas);
// start
window.requestAnimationFrame(gameLoop);
const totalTimeInMin = rosary.getDuration() / 60000;
console.log(totalTimeInMin);

// canvas.addEventListener("mousemove", function (e) {
//   console.log(
//     rosary.progressbar[0].x,
//     rosary.progressbar[0].y,
//     e.clientX,
//     e.clientY
//   );
//   beats.forEach((beat) => {
//     if (
//       e.clientX > beat.x - beat.radius &&
//       e.clientX < beat.x + beat.radius &&
//       e.clientY > beat.y - beat.radius &&
//       e.clientY < beat.y + beat.radius
//     ) {
//       beat.color = "#fff000";
//     }
//   });
//   rosary.progressbar.forEach((block) => {
//     if (
//       e.clientX > block.x &&
//       e.clientX < block.x + block.width &&
//       e.clientY > block.y &&
//       e.clientY < block.y + block.height
//     ) {
//       block.color = "#fff000";
//     }
//   });
// });
