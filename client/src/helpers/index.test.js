import { returnMax } from './index';

//to equal
test('Limit array response', () => {
    expect(functions.returnMax(2,['one','two','three', 'four']))
    .toEqual(['one','two'])
});