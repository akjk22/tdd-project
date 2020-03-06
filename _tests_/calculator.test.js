import { Calculator } from './../src/calculator';

describe ('Calculator', () => {
    test('that earth age will be calculated by multiplying inputted age in years by 365', () => {
        let calculator = new Calculator();
        expect(calculator.earthAge(20)).toEqual(7500);
    });
});