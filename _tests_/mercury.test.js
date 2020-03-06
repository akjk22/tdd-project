import { Mercury } from './../src/mercury';

describe ('Mercury', () => {
    test('that mercury age will be calculated by multiplying inputted age in years by 365 and dividing by 87.6.', () => {
        let calculator = new Mercury();
        expect(calculator.mercuryAge(20)).toEqual(83);
    });
});