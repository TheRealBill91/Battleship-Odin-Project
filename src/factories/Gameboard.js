import { arraysAreEqual } from '../helpers/arraysAreEqual'
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
  // placed ship coordinates for the same ship
  const checkSelfOverlap = (coordinates) => {
    let coordinatesOverlap = false
    let prevCoordinate
    coordinates.forEach((coordinate, index) => {
      if (index > 0) {
        if (arraysAreEqual(prevCoordinate, coordinate)) {
          coordinatesOverlap = true
          return coordinatesOverlap
        }
        prevCoordinate = coordinate
      }
      prevCoordinate = coordinate
    })

    return coordinatesOverlap
  }

  // Should prevent a ship from being
  // placed on top of another ship
  const checkOverlapWithOtherShips = (coordinates) => {
    let shipsOverlap = false
    coordinates.forEach((coordinate) => {
      const row = coordinate[0]
      const column = coordinate[1]
      const boardCell = board[row][column]
      if (typeof boardCell === 'object') {
        shipsOverlap = true
        return shipsOverlap
      }
    })

    return shipsOverlap
  }

  const placeShip = (coordinates) => {
    let shipPlaced = true

    const legalCoordinates = validateCoordinates(coordinates)
    if (!legalCoordinates) {
      shipPlaced = false
      return shipPlaced
    }

    const overlappingCoordinates = checkSelfOverlap(coordinates)
    if (overlappingCoordinates) {
      shipPlaced = false
      return shipPlaced
    }

    const shipOverlapping = checkOverlapWithOtherShips(coordinates)
    if (shipOverlapping) {
      shipPlaced = false
      return shipPlaced
    }

    const shipLength = coordinates.length
    const shipObject = Ship(shipLength, 0, false)
    shipObjects.push(shipObject)

    coordinates.forEach((coordinate) => {
      const row = coordinate[0]
      const column = coordinate[1]
      board[row][column] = shipObject
    })

    return shipPlaced
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

  const getShipObjects = () => {
    return shipObjects
  }

  return {
    createGameBoard,
    getBoard,
    placeShip,
    receiveAttack,
    getRecordedShots,
    allShipsSunk,
    validateCoordinates,
    checkSelfOverlap,
    getShipObjects,
    checkOverlapWithOtherShips
  }
}
