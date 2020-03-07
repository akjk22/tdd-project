export class Jupiter {
  constructor(age) {
    this.age = age;
  }
  jupiterAge(age) {
    this.age = age * 365 / (365 * 11.86);
    return Math.floor(this.age);
  }
  lifeExpectancy(age) {
    let lifeExpectancy = 5;
    if (this.jupiterAge(age) > lifeExpectancy) {
      return this.jupiterAge(age) - lifeExpectancy;
    }
    return lifeExpectancy - this.jupiterAge(age);
  }
}