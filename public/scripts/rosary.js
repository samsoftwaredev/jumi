var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let movingSpeed = 50;
let secondsPassed = 0;
let oldTimestamp = new Date().getTime();
let timePassed = 0;

// rosary
const rosary = new RosaryControls();
rosary.init();
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
rosary.subscribe(rosary.update);

function draw(secondsPassed) {
  rosaryText.draw();
  rosaryBeats.draw();
  rosaryCross.draw();
  rosary.draw(secondsPassed);
}

function gameLoop(timestamp) {
  // Calculate how much time has passed
  secondsPassed = (timestamp - oldTimestamp) / 1000;
  oldTimestamp = timestamp;
  if (secondsPassed > -1) {
    // Clear the entire canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    draw(secondsPassed);
  }
  // stop loop if the user reach the last prayer
  // or is on pause
  if (
    !rosary.isPause ||
    rosary.getPrayerIndex() < rosary.prayersList.length - 1
  ) {
    window.requestAnimationFrame(gameLoop);
  }
}

// start rosary
rosary.pause();
window.requestAnimationFrame(gameLoop);
const totalTimeInMin = rosary.getDuration() / 60000;

// responsive

// controls
canvas.addEventListener("click", function (e) {
  const prayer = rosary.getPrayer();
  if (e.clientX < ctx.canvas.width * 0.33) {
    // if the user double clicks on the first half of the canvas
    rosary.prev(); // go back once
    rosaryBeats.prevBeat({ prayer });
    canvas.setAttribute("style", "background-color: orange;");
  } else if (
    e.clientX > ctx.canvas.width * 0.66 &&
    e.clientX < ctx.canvas.width
  ) {
    // if the user double clicks on the second half of the canvas
    rosary.next(); // go forward once
    rosaryBeats.nextBeat({ prayer });
    canvas.setAttribute("style", "background-color: green;");
  } else {
    // if the user click in the middle, play or pause
    if (rosary.isPause) {
      rosary.play();
      canvas.setAttribute("style", "background-color: white;");
    } else {
      rosary.pause();
      const canvasElement = document.createElement("DIV");
      canvasElement.setAttribute("class", "overlay");
      const app = document.getElementById("app");
      app.prepend(canvasElement);
    }
  }
  rosaryText.setPrayer(prayer);
});
