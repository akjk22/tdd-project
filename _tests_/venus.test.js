import { Venus } from './../src/venus';

describe ('Venus', () => {
    test('that venus age will be calculated by multiplying inputted age in years by 365 and dividing by 226.3.', () => {
        let calculator = new Venus();
        expect(calculator.venusAge(20)).toEqual(32);
    });
    test('that life expectancy calculation works.', () => {
      let venusYearsLeft = new Venus();
      expect(venusYearsLeft.lifeExpectancy(20)).toEqual(61);
  });
});
