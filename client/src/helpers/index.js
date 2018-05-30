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

export const highestRatingFirst = (arr) => {
    const newOrder = arr.sort(function(a, b){
        return a.rating < b.rating;
    })
    return newOrder
}

export const getMiddle = (arr) => Math.floor(arr.length / 2);

export const halfArrays = (arr, middle) => {
  const firstHalf = [...arr.slice(0, 1), ...arr.slice(1, middle)]
  const secondHalf = [...arr.slice(middle, 0), ...arr.slice(middle)]
  return [...[firstHalf], ...[secondHalf]];
}