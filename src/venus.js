export class Venus {
  constructor(age) {
    this.age = age;
  }
  venusAge(age) {
    this.age = age * 365 / (365 * .62);
    return Math.floor(this.age);
  }
}