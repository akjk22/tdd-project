export class Mercury {
  constructor(age) {
    this.age = age;
  }
  mercuryAge(age) {
    this.age = age * 365 / (365 * .24);
    return Math.floor(this.age);
  }
}