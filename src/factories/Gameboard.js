import { Ship } from './Ship'

export const Gameboard = () => {
  // eslint-disable-next-line prefer-const
  let board = []
  const shipObjects = []
  const recordedShots = []
  const rows = 9
  const columns = 9

  const createGameBoard = () => {
    for (let i = rows; i >= 0; i--) {
      board[i] = []
      for (let j = 0; j <= columns; j++) {
        board[i].push(undefined)
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
      if (typeof boardCell === 'object') {
        coordinatesOverlap = true
        return coordinatesOverlap
      }
    })

    return coordinatesOverlap
  }

  const placeShip = (coordinates) => {
    // You need to place a ship, depending on it's
    // size, on the gameBoard.
    const legalCoordinates = validateCoordinates(coordinates)
    const overlappingCoordinates = coordinatesOverlap(coordinates)

    if (!legalCoordinates) {
      return placeShip
    } else if (overlappingCoordinates) {
      return placeShip
    }

    const shipLength = coordinates.length
    const shipObject = Ship(shipLength, 0, false)
    shipObjects.push(shipObject)

    coordinates.forEach((coordinate) => {
      const row = coordinate[0]
      const column = coordinate[1]
      board[row][column] = shipObject
    })
  }

  const receiveAttack = (coordinates) => {
    const row = coordinates[0]
    const column = coordinates[1]
    const boardCell = board[row][column]
    const shipObj = boardCell

    if (typeof boardCell === 'object') {
      shipObj.hit()
      recordedShots.push(coordinates)
    } else if (typeof boardCell !== 'object') {
      recordedShots.push(coordinates)
    }
  }

  const allShipsSunk = () => {
    let everyShipSank = true
    shipObjects.forEach((shipObj) => {
      if (!shipObj.hasBeenSunk()) {
        everyShipSank = false
        return everyShipSank
      }
    })
    return everyShipSank
  }

  const getBoard = () => {
    return board
  }

  const getRecordedShots = () => {
    return recordedShots
  }

  return {
    createGameBoard,
    getBoard,
    placeShip,
    receiveAttack,
    getRecordedShots,
    allShipsSunk,
    validateCoordinates,
    coordinatesOverlap
  }
}
