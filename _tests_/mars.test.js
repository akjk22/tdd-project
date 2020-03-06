import { Mars } from './../src/mars';

describe ('Mars', () => {
    test('that mars age will be calculated by multiplying inputted age in years by 365 and dividing by 686.2.', () => {
        let calculator = new Mars();
        expect(calculator.marsAge(20)).toEqual(10);
    });
});