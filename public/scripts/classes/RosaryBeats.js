class RosaryBeats {
  constructor(x, y, radius, beats, color, highlightColor) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.beats = beats;
    this.color = color;
    this.highlightColor = highlightColor;
    this.interval = (Math.PI * 2) / beats.length;
    this.radius = 100;
    this.currentBeatIndex = 0;
  }
  used() {
    if (Array.isArray(this.beats)) {
      // if the current beat index is at zero index, set default color
      if (this.currentBeatIndex === 0) {
        // reset if all beast were used
        this.beats.forEach((beat, i) => {
          this.beats[i].color = this.color;
        });
      }
      this.beats[this.currentBeatIndex].color = this.highlightColor;
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
  nextBeat = ({ prayer }) => {
    // if the current prayer is a beat, count it
    if (!prayer.beat) return;
    this.used();
    this.currentBeatIndex += 1;
    this.currentBeatIndex = this.currentBeatIndex % this.beats.length;
  };
  prevBeat() {
    this.unUsed();
    this.currentBeatIndex -= 1;
    this.currentBeatIndex = this.currentBeatIndex % this.beats.length;
  }
  jumpTo(num) {
    this.currentBeatIndex = num % this.beats.length;
  }
  draw() {
    // all beads
    this.beats.map((dot, i) => {
      const desiredRadianAngleOnCircle = this.interval * i;

      var x = this.x + this.radius * Math.sin(desiredRadianAngleOnCircle) * -1;
      var y = this.y + this.radius * Math.cos(desiredRadianAngleOnCircle) * -1;
      x = Math.floor(x);
      y = Math.floor(y);

      ctx.beginPath();
      dot.x = x;
      dot.y = y;
      dot.draw();
    });
  }
}
