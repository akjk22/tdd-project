import { Mercury } from './../src/mercury';

describe ('Mercury', () => {
    test('that mercury age will be calculated by multiplying inputted age in years by 365 and dividing by 87.6.', () => {
        let calculator = new Mercury();
        expect(calculator.mercuryAge(20)).toEqual(83);
    });
    test('that life expectancy calculation works.', () => {
      let mercuryYearsLeft = new Mercury();
      expect(mercuryYearsLeft.lifeExpectancy(20)).toEqual(63);
    });
    test('if age surpasses life expectancy calculate number of years lived passsed expected year.', () => {
      let yearsSurpassed = new Mercury();
      expect(yearsSurpassed.lifeExpectancy(100)).toEqual(270);
    });
});