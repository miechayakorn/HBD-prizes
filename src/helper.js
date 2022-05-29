export const shuffle = array => {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }
    return array
}


export const getCardData = (cards, length) => {
    let initCard = [...cards]
    initCard.length = length
    return [...initCard, ...initCard]
}
