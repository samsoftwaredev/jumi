class RosaryCross {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
  draw() {
    // the cross
    const widthOfCross = 5;
    // vertical line
    ctx.fillStyle = this.rosaryColor;
    ctx.fillRect(this.x, this.y - 65, widthOfCross, 50);
    // diagonal line
    ctx.fillStyle = this.rosaryColor;
    ctx.fillRect(this.x - 12.5, this.y - 50, 30, widthOfCross);
  }
}
