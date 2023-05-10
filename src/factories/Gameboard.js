export const Gameboard = () => {
  // eslint-disable-next-line prefer-const
  let board = []
  const rows = 9
  const columns = 9

  const createGameBoard = () => {
    for (let i = rows; i >= 0; i--) {
      board[i] = []
      for (let j = 0; j <= columns; j++) {
        board[i].push(undefined)

        /* you can delete this logic, it is purely
         to test the coordinatesOverlap method
        if (j < 4) {
          board[i].push(undefined)
        } else {
          board[i].push('x')
        } */
      }
    }
  }

  // checks if coordinates for ship is on the
  // game board
  const validateCoordinates = (coordinates) => {
    let validCoordinates = true
    coordinates.forEach((coordinate) => {
      const row = coordinate[0]
      const column = coordinate[1]
      if (row > 9 || row < 0) {
        validCoordinates = false
        return validCoordinates
      } else if (column > 9 || column < 0) {
        validCoordinates = false
        return validCoordinates
      }
    })

    return validCoordinates
  }

  // checks if ship coordinates overlap with already
  // placed ship coordinates
  const coordinatesOverlap = (coordinates) => {
    let coordinatesOverlap = false
    coordinates.forEach((coordinate) => {
      const row = coordinate[0]
      const column = coordinate[1]
      const boardCell = board[row][column]
      if (!boardCell) {
        coordinatesOverlap = true
        return coordinatesOverlap
      }
    })

    return coordinatesOverlap
  }

  const placeShip = () => {
    // You need to place a ship, depending on it's
    // size, on the gameBoard.
  }

  const getBoard = () => {
    return board
  }

  return {
    createGameBoard,
    getBoard,
    placeShip,
    validateCoordinates,
    coordinatesOverlap
  }
}
