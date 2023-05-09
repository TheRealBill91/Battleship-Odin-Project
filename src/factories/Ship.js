export const Ship = (length, numOfHits, isSunk) => {
  // Increase number of hits in ship by 1
  const hit = () => {
    numOfHits++
    return numOfHits
  }

  // Determine if the ship object has been sunk
  const hasBeenSunk = () => {
    if (length === numOfHits) {
      isSunk = true
      return isSunk
    }
  }

  return { hit, hasBeenSunk }
}
