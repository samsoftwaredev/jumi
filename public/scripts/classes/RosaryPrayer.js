class RosaryPrayer {
  d = new Date();
  observers = [];
  endDateOfPrayer = null;
  prayerType = prayers;
  rosaryDays = rosaryDays;
  rosaryMysteries = rosaryMysteries;
  prayersList = [];
  prayerIndex = 0;
  constructor() {}
  prevPrayer() {
    if (this.prayerIndex > 0) {
      this.prayerIndex -= 1;
      return this.prayersList[this.prayerIndex];
    }
    return null;
  }
  nextPrayer() {
    const arrOfPrayers = Object.values(this.prayersList);
    if (this.prayerIndex <= arrOfPrayers.length - 1) {
      this.prayerIndex += 1;
      return this.prayersList[this.prayerIndex];
    }
    return null;
  }
  getPrayer() {
    return this.prayersList[this.prayerIndex];
  }
  getMystery(daySelected) {
    const dayOfTheWeek = isNaN(daySelected) ? this.d.getDay() : daySelected;
    const arrOfPrayersDays = Object.values(this.rosaryDays);
    const mysteryName = arrOfPrayersDays[dayOfTheWeek];
    const mystery = this.rosaryMysteries[mysteryName];
    return mystery;
  }
  setPrayersList() {
    const mysteryInfo = this.getMystery();
    const arr = [
      // 1
      this.prayerType.start,
      this.prayerType.creed,
      this.prayerType.actOfContrition,
      // 2
      this.prayerType.ourFather,
      // 3
      this.prayerType.hailMary,
      this.prayerType.hailMary,
      this.prayerType.hailMary,
      this.prayerType.glory,
    ];
    // 4
    mysteryInfo.mysteries.forEach((mystery) => {
      arr.push(mystery);
      arr.push(this.prayerType.ourFather);
      new Array(10).fill(null).forEach(() => {
        arr.push(this.prayerType.hailMary);
      });
      arr.push(this.prayerType.jaculatoria2);
    });
    // 5
    arr.push(this.prayerType.salve);
    arr.push(this.prayerType.signOfCross);

    this.prayersList = arr;
    return this.prayersList;
  }
  getDuration() {
    const values = this.prayersList.map(({ duration }) => duration);
    const total = values.reduce((a, b) => a + parseFloat(b), 0);
    return total;
  }
  update() {
    const date = new Date();
    // exit update if it reach the final prayer
    if (this.prayerIndex >= this.prayersList.length - 1) return;

    if (this.endDateOfPrayer === null) {
      // if there is no end date. Set end date
      const dateMilli = date.getTime() + this.getPrayer().duration;
      this.endDateOfPrayer = new Date(dateMilli);
    } else if (date.getTime() > this.endDateOfPrayer.getTime()) {
      // end date reached, prayer was completed
      this.nextPrayer();
      this.fire({ prayer: this.getPrayer() });
      this.endDateOfPrayer = null; // reset the end date
    } else {
      // while the end date hasn't been reached
    }
  }
  subscribe(fn) {
    if (typeof fn === "function") this.observers.push(fn);
  }
  unsubscribe(fn) {
    this.observers = this.observers.filter((item) => {
      if (item !== fn) return item;
    });
  }
  fire(o, thisObj) {
    var scope = thisObj || window;
    this.observers.forEach(function (item) {
      item.call(scope, o);
    });
  }
  init() {
    this.setPrayersList();
  }
}
