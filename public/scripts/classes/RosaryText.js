class RosaryText {
  constructor(x, y, color = "#000", prayer, size = "18px", font = "Cinzel") {
    this.x = x;
    this.y = y;
    this.size = size;
    this.prayer = prayer;
    this.font = font;
    this.color = color;
    this.opacity = 1;
  }
  updateCoordinate(x, y) {
    this.x += x;
    this.y += y;
  }
  setPrayer(prayer) {
    this.prayer = prayer;
  }
  update = ({ prayer }) => {
    this.prayer = prayer;
  };
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
