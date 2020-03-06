import { Character } from './../src/character';

describe ('Character', () => {
    test('that earth age will be calculated by multiplying inputted age in years by 365', () => {
        let character = new Character();
        expect(character.earthAge(20)).toEqual(7500);
    });
});