class RosaryPrayer {
  observers = [];
  endDateOfPrayer = null;
  prayerType = prayers;
  rosaryDays = rosaryDays;
  rosaryMysteries = rosaryMysteries;
  prayersList = [];
  prayerIndex = 0;
  constructor() {}
  prevPrayer() {
    console.log(this.prayerIndex);
    if (this.prayerIndex > 0) {
      this.prayerIndex -= 1;
      return this.prayersList[this.prayerIndex];
    }
    return null;
  }
  nextPrayer() {
    console.log(this.prayerIndex);
    const arrOfPrayers = Object.values(this.prayersList);
    if (this.prayerIndex <= arrOfPrayers.length - 1) {
      this.prayerIndex += 1;
      return this.prayersList[this.prayerIndex];
    }
    return null;
  }
  getPrayerIndex() {
    return this.prayerIndex;
  }
  getEndDateOfPayer() {
    return this.endDateOfPrayer;
  }
  setEndDateOfPayer(date) {
    this.endDateOfPrayer = date;
  }
  getPrayer() {
    return this.prayersList[this.prayerIndex];
  }
  getMystery(daySelected) {
    const dayOfTheWeek = isNaN(daySelected) ? new Date().getDay() : daySelected;
    const arrOfPrayersDays = Object.values(this.rosaryDays);
    const mysteryName = arrOfPrayersDays[dayOfTheWeek];
    const mystery = this.rosaryMysteries[mysteryName];
    return mystery;
  }
  getPrayersList() {
    const mysteryInfo = this.getMystery();
    const arr = [];
    // 1
    arr.push(this.prayerType.start);
    arr.push(this.prayerType.creed);
    arr.push(this.prayerType.petitions);
    arr.push(this.prayerType.actOfContrition);
    // 4
    mysteryInfo.mysteries.forEach((mystery) => {
      arr.push({ ...mystery, mystery: true });
      arr.push({ ...this.prayerType.ourFather, cross: true });
      new Array(10).fill(null).forEach(() => {
        arr.push({ ...this.prayerType.hailMary, beat: true });
      });
      arr.push(this.prayerType.glory);
      arr.push(this.prayerType.jaculatoria2);
      arr.push(this.prayerType.jaculatoria3);
    });
    // 5
    arr.push(this.prayerType.pope);
    arr.push(this.prayerType.ourFather);
    arr.push(this.prayerType.hailMary);
    arr.push(this.prayerType.glory);
    arr.push(this.prayerType.salve);
    arr.push(this.prayerType.letaniasLauretanas);
    arr.push(this.prayerType.signOfCross);
    return arr;
  }
  setPrayersList(list) {
    this.prayersList = list;
  }
  getDuration() {
    const values = this.prayersList.map(({ duration }) => duration);
    const total = values.reduce((a, b) => a + parseFloat(b), 0);
    return total;
  }
  updatePrayer() {
    const date = new Date();
    // console.log(this.endDateOfPrayer);
    // exit update if it reach the final prayer
    if (this.prayerIndex >= this.prayersList.length - 1) return;

    if (this.endDateOfPrayer === null) {
      // if there is no end date. Set end date
      const dateMilli = date.getTime() + this.getPrayer().duration;
      this.endDateOfPrayer = new Date(dateMilli);
    } else if (date.getTime() > this.endDateOfPrayer.getTime()) {
      // end date reached, prayer was completed
      this.nextPrayer();
      this.fire({ prayer: this.getPrayer(), prayerIndex: this.prayerIndex });
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
  fire(obj, thisObj) {
    var scope = thisObj || window;
    this.observers.forEach(function (item) {
      item.call(scope, obj);
    });
  }
  init() {
    this.setPrayersList(this.getPrayersList());
  }
}
