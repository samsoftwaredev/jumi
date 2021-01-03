class MyCanvas {
  constructor(width = "1000", height = "500") {
    this.width = width;
    this.height = height;
  }
  getElement() {
    const canvasElement = document.createElement("CANVAS");
    canvasElement.setAttribute("class", "canvas");
    canvasElement.style.backgroundColor = themeColors.theme4;
    canvasElement.width = this.width;
    canvasElement.height = this.height;
    return canvasElement;
  }
}
