import { Mars } from './../src/mars';

describe ('Mars', () => {
    test('that mars age will be calculated by multiplying inputted age in years by 365 and dividing by 686.2.', () => {
        let calculator = new Mars();
        expect(calculator.marsAge(20)).toEqual(10);
    });
    test('that life expectancy calculation works.', () => {
      let marsYearsLeft = new Mars();
      expect(marsYearsLeft.lifeExpectancy(20)).toEqual(40);
    });
    test('if age surpasses life expectancy calculate number of years lived passsed expected year.', () => {
      let yearsSurpassed = new Mars();
      expect(yearsSurpassed.lifeExpectancy(100)).toEqual(3);
    });
});