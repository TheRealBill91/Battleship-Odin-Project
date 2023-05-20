export const Ship = (length, numOfHits, isSunk) => {
  // Increase number of hits in ship by 1
  const hit = () => {
    if (numOfHits === length) {
      return
    }

    numOfHits++
    return numOfHits
  }

  // Determine if the ship object has been sunk
  const hasBeenSunk = () => {
    if (length === numOfHits) {
      isSunk = true
      return isSunk
    }

    return isSunk
  }

  const getNumOfHits = () => {
    return numOfHits
  }

  const getLength = () => {
    return length
  }

  return { hit, hasBeenSunk, getNumOfHits, getLength }
}
