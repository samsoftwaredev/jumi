class RosaryControls extends RosaryPrayer {
  timeRemaining = null;
  numIncreaseBy = ctx.canvas.width / this.getPrayersList().length;
  progress = this.getPrayerIndex();
  constructor(isPause) {
    super();
    this.isPause = isPause;
  }
  next() {
    this.progress += 1;
    this.nextPrayer();
  }
  prev() {
    this.progress -= 1;
    this.prevPrayer();
  }
  play() {
    this.isPause = false;
    // in seconds
    const totalSeconds = new Date().getSeconds() + this.getEndDateOfPayer();
    const diff = new Date().setSeconds(totalSeconds);
    this.endDateOfPrayer = new Date(diff);
  }
  pause() {
    this.isPause = true;
    // in seconds
    this.timeRemaining = Math.abs(
      new Date(this.endDateOfPrayer).getSeconds() - new Date().getSeconds()
    );
    this.setEndDateOfPayer(null);
  }
  update = () => {
    this.progress += this.numIncreaseBy;
  };
  pauseScreen = () => {
    ctx.fillStyle = "rgba(0,0,0,0.6)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // play button
    ctx.beginPath();
    ctx.fillStyle = "white";
    let x = ctx.canvas.width * (49 / 100);
    let y = ctx.canvas.height * (45 / 100);
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 75);
    ctx.lineTo(x + 50, y + 35);
    ctx.fill();
    // foward button
    ctx.beginPath();
    ctx.fillStyle = "white";
    x = ctx.canvas.width * (3 / 4);
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 75);
    ctx.lineTo(x + 50, y + 35);
    ctx.fill();
    ctx.moveTo(x + 40, y);
    ctx.lineTo(x + 40, y + 75);
    ctx.lineTo(x + 90, y + 35);
    ctx.fill();
    // backward button
    ctx.beginPath();
    ctx.fillStyle = "white";
    x = ctx.canvas.width * (1 / 4);
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 75);
    ctx.lineTo(x - 50, y + 35);
    ctx.fill();
    ctx.moveTo(x - 40, y);
    ctx.lineTo(x - 40, y + 75);
    ctx.lineTo(x - 90, y + 35);
    ctx.fill();
  };
  draw() {
    if (this.isPause) {
      this.pauseScreen();
    } else {
      this.updatePrayer();
      ctx.fillStyle = "rgba(0,0,0,0.09)";
      ctx.fillRect(0, 0, this.progress, ctx.canvas.height);
    }
  }
}
