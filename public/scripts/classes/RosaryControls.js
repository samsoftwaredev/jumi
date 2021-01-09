class Progressbar {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
  }
  draw() {
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

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
    const x = 0;
    const y = ctx.canvas.height - 20;
    let position = x;
    this.prayersList.forEach(() => {
      const block = new Progressbar(
        position + 1,
        y,
        partsOfLine - 1,
        2,
        "#ff00ff"
      );
      this.progressbar.push(block);
      position += partsOfLine;
    });
  }
  draw() {
    const prayerIndex = this.getPrayerIndex();
    this.progressbar.forEach((bar, i) => {
      bar.draw();
      if (prayerIndex === i) bar.fillStyle = "#000";
    });
  }
  update() {
    if (!this.isPause) this.updatePrayer();
  }
}
