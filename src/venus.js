export class Venus {
  constructor(age) {
    this.age = age;
  }
  venusAge(age) {
    this.age = age * 365 / (365 * .62);
    return Math.floor(this.age);
  }
  lifeExpectancy(age) {
    let lifeExpectancy = 80;
    return lifeExpectancy - this.venusAge(age);
  }
}