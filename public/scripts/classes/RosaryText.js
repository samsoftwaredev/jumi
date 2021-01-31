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
      ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity})`;
      ctx.font = `${this.size} ${this.font}`;
      const hasSlashes = this.prayer.text.includes("/");
      if (hasSlashes) {
        const sentences = this.prayer.text.split("/");
        if (!Array.isArray(sentences)) return "";
        sentences.forEach((str, index) => {
          const lineSpacing = index * 40;
          ctx.fillText(str.trim(), this.x, this.y + lineSpacing);
        });
      } else {
        ctx.fillText(this.prayer.text, this.x, this.y);
      }
    }
  }
}
