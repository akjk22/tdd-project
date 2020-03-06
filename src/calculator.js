export class Calculator {
  constructor(age) {
    this.age = age;
  }
  
  mercuryAge(age) {
    this.age = age * 365 / (365 * .24);
    return Math.floor(this.age);
  }
  venusAge(age) {
    this.age = age * 365 / (365 * .62);
    return Math.floor(this.age);
  }
  marsAge(age) {
    this.age = age * 365 / (365 * 1.88);
    return Math.floor(this.age);
  }
  jupiterAge(age) {
    this.age = age * 365 / (365 * 11.86);
    return Math.floor(this.age);
  }
}
