export const Ship = (length, numOfHits, isSunk) => {
  // Increase number of hits in ship by 1
  const hit = () => {
    numOfHits++
    return numOfHits
  }

  // Determine if the ship object has been sunk
  const hasBeenSunk = () => {
    let isSunk = false

    if (length === numOfHits) {
      isSunk = true
      return isSunk
    }

    return isSunk
  }

  const getNumOfHits = () => {
    return numOfHits
  }

  return { hit, hasBeenSunk, getNumOfHits }
}
