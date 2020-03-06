import { Calculator } from './../src/calculator';

describe ('Calculator', () => {
    test('that earth age will be calculated by multiplying inputted age in years by 365', () => {
        let calculator = new Calculator();
        expect(calculator.earthAge(20)).toEqual(7300);
    });
    test('that mercury age will be calculated by multiplying inputted age in years by 365 and dividing by 87.6. Mercury age should be larger.', () => {
        let calculator = new Calculator();
        expect(calculator.mercuryAge(20)).toEqual(83);
    });
});