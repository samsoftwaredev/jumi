class RosaryControls extends RosaryPrayer {
  timeRemaining = null;
  constructor(isPause, num = 0) {
    super();
    this.progressbar = new Array(num).fill(null);
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
  setProgressBar() {
    const partsOfLine = ctx.canvas.width / this.prayersList.length;
    const partsOfLineRounded = Math.trunc(partsOfLine);
    const x = 0;
    const y = ctx.canvas.height - 20;
    let position = x;
    this.progressbar = this.prayersList.map((prayer, i) => {
      const block = new Rectangle(
        position + 3,
        y,
        Math.fround(partsOfLineRounded) - 1,
        4, // width
        "#fff"
      );
      position += Math.fround(partsOfLineRounded);
      return block;
    });
  }
  playButton() {
    con.fillStyle = "red";
    con.font = "20pt sans-serif";
    con.fillText("Play", 5, 100);
  }
  pauseButton() {
    con.fillStyle = "red";
    con.font = "20pt sans-serif";
    con.fillText("Pause", 15, 100);
  }
  update() {
    if (!this.isPause) this.updatePrayer();
  }
}
