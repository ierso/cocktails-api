import { returnMax, findMatches, getMiddle, halfArrays } from './index';

test('Limit array response', () => {
    const expected = ['one','two'];
    const maxNum = 2;
    const array = ['one','two','three', 'four'];
    expect(returnMax(maxNum, array))
    .toEqual(expected);
});

test('Return matches from array', () => {
    const expected = [{strIngredient1: 'Bourbon'}];
    const name = 'Bourbon'
    const array = [{strIngredient1: 'Vodka'},{strIngredient1: 'Bourbon'}]
    expect(findMatches(name, array))
    .toEqual(expect.arrayContaining(expected))
});

test('Returns middle number of array', () => {
    const expected = 2
    const array = ["test_01", "test_02", "test_03", "test_04"]
    expect(getMiddle(array))
    .toEqual(expected)
});

test('Slices array into two and returns two arrays in an array', () => {
    const expected = [["test_01", "test_02"],["test_03", "test_04"]];
    const array = ["test_01", "test_02", "test_03", "test_04"];
    const middleNum = 2;
    expect(halfArrays(array, middleNum))
    .toEqual(expect.arrayContaining(expected))
})
