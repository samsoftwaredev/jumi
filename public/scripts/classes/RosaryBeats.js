class RosaryBeats {
  constructor(x, y, radius, color, beats) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.beats = beats;
    this.interval = (Math.PI * 2) / beats.length;
    this.radius = 100;
    this.currentBeatIndex = 0;
  }
  used() {
    if (Array.isArray(this.beats)) {
      this.beats[this.currentBeatIndex].color = "black";
      // reset if all beast were used
      if (this.beats.length === this.currentBeatIndex + 1) {
        this.beats.forEach((beat, i) => {
          this.beats[i].color = this.color;
        });
      }
    }
  }
  unUsed() {
    if (Array.isArray(this.beats)) {
      this.beats[this.currentBeatIndex].color = this.color;
    }
  }
  getCurrentBeat() {
    return {
      index: this.currentBeatIndex,
      beat: this.beats[this.currentBeatIndex],
    };
  }
  nextBeat() {
    this.currentBeatIndex += 1;
    this.currentBeatIndex = this.currentBeatIndex % this.beats.length;
    this.used();
  }
  prevBeat() {
    this.currentBeatIndex -= 1;
    this.currentBeatIndex = this.currentBeatIndex % this.beats.length;
    this.unUsed();
  }
  jumpTo(num) {
    this.currentBeatIndex = num % this.beats.length;
  }
  // all beads
  draw() {
    this.beats.map((dot, i) => {
      const desiredRadianAngleOnCircle = this.interval * i;

      var x = this.x + this.radius * Math.sin(desiredRadianAngleOnCircle) * -1;
      var y = this.y + this.radius * Math.cos(desiredRadianAngleOnCircle) * -1;

      ctx.beginPath();
      dot.x = x;
      dot.y = y;
      dot.draw();
    });
  }
}
