export class Mars {
  constructor(age) {
    this.age = age;
  }
  marsAge(age) {
    this.age = age * 365 / (365 * 1.88);
    return Math.floor(this.age);
  }
  lifeExpectancy(age) {
    let lifeExpectancy = 50;
    if (this.marsAge(age) > lifeExpectancy) {
      return this.marsAge(age) - lifeExpectancy;
    }
    return lifeExpectancy - this.marsAge(age);
  }
}