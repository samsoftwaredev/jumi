class RosaryText {
  constructor(x, y, color, size = "18px", font = "Cinzel") {
    this.x = x;
    this.y = y;
    this.size = size;
    this.font = font;
    this.color = color;
    this.opacity = 1;
    this.prayer = prayers.creed;
  }
  updateCoordinate(x, y) {
    this.x += x;
    this.y += y;
  }
  updateOpacity(opa) {
    this.opacity += opa;
  }
  updatePrayer(prayer) {
    this.prayer = prayer;
  }
  draw() {
    if (this.prayer) {
      const sentences = this.prayer.text.split("/");
      sentences.forEach((str, index) => {
        const lineSpacing = index * 40;
        ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity})`;
        ctx.font = `${this.size} ${this.font}`;
        ctx.fillText(str.trim(), this.x, this.y + lineSpacing);
      });
    }
  }
}
