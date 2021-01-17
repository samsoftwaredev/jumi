class Button {
  constructor(
    x,
    y,
    buttonText,
    color = "#000",
    size = "18px",
    font = "Cinzel"
  ) {
    this.x = x;
    this.y = y;
    this.buttonText = buttonText;
    this.size = size;
    this.font = font;
    this.color = color;
  }
  draw() {
    // // background
    // ctx.fillStyle = "#000";
    // ctx.rect(this.x - 20, this.y - 20, 100, 20);
    // ctx.fill();
    // text
    ctx.fillStyle = this.color;
    ctx.font = `${this.size} ${this.font}`;
    ctx.fillText(this.buttonText, this.x, this.y);
  }
}
