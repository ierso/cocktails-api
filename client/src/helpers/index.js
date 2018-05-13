export const returnMax = (maxNum, array) => {
    return array.slice(0, maxNum);
}

export const findMatches = (wordToMatch, array) => {
    return array.filter(item => {
        const regex = new RegExp(wordToMatch, 'gi');
        if (wordToMatch.length > 0) {
            return item.strIngredient1.match(regex);
        } else {
            return null;
        }
    })
}