import { returnMax, findMatches } from './index';

test('Limit array response', () => {
    expect(returnMax(2,['one','two','three', 'four']))
    .toEqual(['one','two'])
});

test('Return matches from array', () => {
    expect(findMatches('Bourbon', [{strIngredient1: 'Vodka'},{strIngredient1: 'Bourbon'}]))
    .toEqual([{strIngredient1: 'Bourbon'}])
});