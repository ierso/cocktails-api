export const findMatches = (wordToMatch, array) => {
    return array.filter(item => {
        const regex = new RegExp(wordToMatch, 'gi');
        return item.strIngredient1.match(regex);
    })
}