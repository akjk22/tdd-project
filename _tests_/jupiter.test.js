import { Jupiter } from './../src/jupiter';

describe ('Jupiter', () => {
    test('that jupiter age will be calculated by multiplying inputted age in years by 365 and dividing by 4328.9. ', () => {
        let calculator = new Jupiter();
        expect(calculator.jupiterAge(20)).toEqual(1);
    });
    test('that life expectancy calculation works.', () => {
      let jupiterYearsLeft = new Jupiter();
      expect(jupiterYearsLeft.lifeExpectancy(20)).toEqual(4);
    });
    test('if age surpasses life expectancy calculate number of years lived passsed expected year.', () => {
      let yearsSurpassed = new Jupiter();
      expect(yearsSurpassed.lifeExpectancy(100)).toEqual(3);
    });
});