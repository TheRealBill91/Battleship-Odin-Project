export const Player = (name, isAI) => {
  // Used to make AI select random, legal coordinate
  // on players game board
  const makeRandomMove = (isAI, availableMoves) => {
    if (!isAI || availableMoves.length === 0) {
      return undefined
    }

    const availableMovesLength = availableMoves.length
    const randomArrIndex = Math.floor(Math.random() * availableMovesLength)
    const randomCoordinate = availableMoves[randomArrIndex]

    return randomCoordinate
  }

  const getName = () => {
    return name
  }

  return { makeRandomMove, getName }
}
