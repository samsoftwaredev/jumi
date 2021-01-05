class RosaryControls extends RosaryPrayer {
  timeRemaining = null;
  constructor(isPause) {
    super();
    this.isPause = isPause;
  }
  next() {
    this.nextPrayer();
  }
  prev() {
    this.prevPrayer();
  }
  jumpTo(num) {
    new Array(num).fill(null).forEach(() => this.nextPrayer());
  }
  play() {
    this.isPause = false;
    // in seconds
    const totalSeconds = new Date().getSeconds() + this.timeRemaining;
    const diff = new Date().setSeconds(totalSeconds);
    this.endDateOfPrayer = new Date(diff);
  }
  pause() {
    this.isPause = true;
    // in seconds
    this.timeRemaining = Math.abs(
      new Date(this.endDateOfPrayer).getSeconds() - new Date().getSeconds()
    );
    this.endDateOfPrayer = null;
  }
  update() {
    if (!this.isPause) this.updatePrayer();
  }
}
