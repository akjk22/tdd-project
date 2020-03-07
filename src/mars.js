export class Mars {
  constructor(age) {
    this.age = age;
  }
  marsAge(age) {
    this.age = age * 365 / (365 * 1.88);
    return Math.floor(this.age);
  }
  lifeExpectancy(age) {
    let lifeExpectancy = 70;
    return lifeExpectancy - this.marsAge(age);
  }
}