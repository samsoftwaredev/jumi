class Animation {
  // Example easing functions
  easeInOutQuint(t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
    return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
  }
  easeLinear(time, startingAt, incrementBy, d) {
    return (incrementBy * time) / d + startingAt;
  }
  easeInText() {
    this.opacity = 0;
    this.intervalId = setInterval(() => {
      this.opacity += 0.1;
      if (this.opacity >= 1) clearInterval(this.intervalId);
    }, 50);
  }
}
