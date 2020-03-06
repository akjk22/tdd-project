export class Mars {
  constructor(age) {
    this.age = age;
  }
  marsAge(age) {
    this.age = age * 365 / (365 * 1.88);
    return Math.floor(this.age);
  }
}