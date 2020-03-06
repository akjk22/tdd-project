export class Calculator {
  constructor(age) {
    this.age = age;
    this.earthYears = 365;
  }
  
  earthAge(age) {
    this.age = age * 365;
    return this.age;
  }
  mercuryAge(age) {
    this.age = age * 365 / (365 * .24);
    return this.age;
  }
}
