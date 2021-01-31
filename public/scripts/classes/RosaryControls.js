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
  draw() {
    if (this.isPause) return;
    this.updatePrayer();
    ctx.fillStyle = "rgba(0,0,0,0.09)";
    ctx.fillRect(0, 0, this.progress, ctx.canvas.height);
  }
}
