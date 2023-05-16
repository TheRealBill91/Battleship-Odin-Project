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

  const getAdjacentSlots = (
    isAI,
    availableMoves,
    adjacentQueue,
    successfulShots
  ) => {
    if (!isAI || availableMoves.length === 0) {
      return undefined
    }

    const lastSuccessfulMove = successfulShots.at(-1)
    const adjacentSlots = retrieveAdjacentSlots(lastSuccessfulMove)
    const legalAdjacentSlots = removeIllegalAdjacentSlots(adjacentSlots)
    return legalAdjacentSlots
  }

  const getCellAbove = (lastSuccessfulMove) => {
    // the row needs to change by one
    const newArr = []
    const newRow = lastSuccessfulMove[0] - 1
    if (newRow > 9 || newRow < 0) {
      return 'illegal'
    }
    newArr[0] = newRow
    newArr[1] = lastSuccessfulMove[1]
    return newArr
  }

  const getCellBelow = (lastSuccessfulMove) => {
    // the row needs to change by one
    const arr = lastSuccessfulMove
    const newArr = []
    const newRow = arr[0] + 1
    if (newRow > 9 || newRow < 0) {
      return 'illegal'
    }
    newArr[0] = newRow
    newArr[1] = lastSuccessfulMove[1]
    return newArr
  }

  const getCellToRight = (lastSuccessfulMove) => {
    // the row needs to change by one
    const newArr = []
    const newColumn = lastSuccessfulMove[1] + 1
    if (newColumn > 9 || newColumn < 0) {
      return 'illegal'
    }
    newArr[0] = lastSuccessfulMove[0]
    newArr[1] = newColumn
    return newArr
  }

  const getCellToLeft = (lastSuccessfulMove) => {
    // the row needs to change by one
    const arr = lastSuccessfulMove
    const newArr = []
    const newColumn = arr[1] - 1
    if (newColumn > 9 || newColumn < 0) {
      return 'illegal'
    }
    newArr[0] = lastSuccessfulMove[0]
    newArr[1] = newColumn
    return newArr
  }

  const getName = () => {
    return name
  }

  const retrieveAdjacentSlots = (lastSuccessfulMove) => {
    const lastSuccessfulMoveValue = lastSuccessfulMove
    const adjacentSlots = []
    adjacentSlots.push(getCellAbove(lastSuccessfulMoveValue))
    adjacentSlots.push(getCellBelow(lastSuccessfulMoveValue))
    adjacentSlots.push(getCellToRight(lastSuccessfulMoveValue))
    adjacentSlots.push(getCellToLeft(lastSuccessfulMoveValue))
    return adjacentSlots
  }

  const removeIllegalAdjacentSlots = (adjacentSlots) => {
    const adjacentSlotsArr = adjacentSlots
    adjacentSlotsArr.forEach((slot, index) => {
      if (slot === 'illegal') {
        adjacentSlotsArr.splice(index, 1)
      }
    })
    return adjacentSlotsArr
  }

  // if the computer has already (randomly) guessed a spot on the board, prevent
  // adding the spot to the adjacency list
  const preventPreviousShotToQueue = (coordinate) => {
    // in progress
  }

  return { makeRandomMove, getName, getAdjacentSlots, getCellAbove }
}
