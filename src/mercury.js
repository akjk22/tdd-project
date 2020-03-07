export class Mercury {
  constructor(age) {
    this.age = age;
  }
  mercuryAge(age) {
    this.age = age * 365 / (365 * .24);
    return Math.floor(this.age);
  }
  lifeExpectancy(age) {
    let lifeExpectancy = 146;
    if (this.mercuryAge(age) > lifeExpectancy) {
      return this.mercuryAge(age) - lifeExpectancy;
    }
    return lifeExpectancy - this.mercuryAge(age);
  }
}