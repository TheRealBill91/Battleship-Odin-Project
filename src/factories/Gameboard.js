import { arraysAreEqual } from '../helpers/arraysAreEqual'
import { Ship } from './Ship'

export const Gameboard = () => {
  // eslint-disable-next-line prefer-const
  let board = []
  const shipObjects = []
  const missedShots = []
  const aiAvailableMoves = []
  const successfulShots = []
  let adjacentSlotsQueue = []
  const rows = 9
  const columns = 9
  let lastAIMoveSuccessful = false
  let lastHumanMoveSuccessful = false

  const createGameBoard = () => {
    board = []
    for (let i = rows; i >= 0; i--) {
      board[i] = []
      for (let j = 0; j <= columns; j++) {
        board[i].push(undefined)
        const coordinate = [i, j]
        aiAvailableMoves.push(coordinate)
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

  // prevents human player from attacking previously
  // attacked coordinate
  const preventSameAttack = (coordinate) => {
    let alreadyAttacked = false
    successfulShots.forEach((shot) => {
      if (arraysAreEqual(coordinate, shot)) {
        alreadyAttacked = true
        return preventSameAttack
      }
    })

    missedShots.forEach((shot) => {
      if (arraysAreEqual(coordinate, shot)) {
        alreadyAttacked = true
        return preventSameAttack
      }
    })
    return alreadyAttacked
  }

  const receiveAttack = (coordinates) => {
    const row = coordinates[0]
    const column = coordinates[1]
    // coordinates = [row, column]
    const boardCell = board[row][column]
    const shipObj = boardCell

    // Need to check if new coordinate is already
    // inside successfulShots or missedShots
    const alreadyAttacked = preventSameAttack(coordinates)
    if (alreadyAttacked) {
      return false
    }

    if (typeof boardCell === 'object') {
      shipObj.hit()
      lastAIMoveSuccessful = true
      lastHumanMoveSuccessful = true
      successfulShots.push(coordinates)
    } else if (typeof boardCell !== 'object') {
      lastAIMoveSuccessful = false
      lastHumanMoveSuccessful = false
      missedShots.push(coordinates)
      removeAdjacentSlot(coordinates)
    }
  }

  // If the computer randomly guesses a spot that is already in the adjacency
  // slot queue, we need to remove it (from the adjacency queue) so
  // the computer does not attempt to
  // use the already guessed spot when pulling from the adjacency
  // queue for it's next move
  const removeAdjacentSlot = (coordinates) => {
    const targetCoordinates = coordinates
    const adjacentQueue = new Set()
    for (const slot of adjacentSlotsQueue) {
      adjacentQueue.add(slot.toString())
    }

    // filter the adjacency slot queue down to slots that have NOT
    // already been guesed.
    adjacentSlotsQueue = adjacentSlotsQueue.filter(
      (slot) => !arraysAreEqual(slot, targetCoordinates)
    )
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

  const removeLastAIMove = (randomMove) => {
    aiAvailableMoves.forEach((move, index) => {
      if (arraysAreEqual(move, randomMove)) {
        aiAvailableMoves.splice(index, 1)
      }
    })
  }

  const addAdjacentSlotsToQueue = (adjacentSlots) => {
    adjacentSlots.forEach((slot) => {
      adjacentSlotsQueue.push(slot)
    })
  }

  const clearGameBoard = () => {
    shipObjects.length = 0
    missedShots.length = 0
    aiAvailableMoves.length = 0
    successfulShots.length = 0
    adjacentSlotsQueue.length = 0
  }

  const getBoard = () => {
    return board
  }

  const getMissedShots = () => {
    return missedShots
  }

  const getSuccessfulShots = () => {
    return successfulShots
  }

  const getShipObjects = () => {
    return shipObjects
  }

  const getAIAvailableMoves = () => {
    return aiAvailableMoves
  }

  const getLastAIMoveSuccessful = () => {
    return lastAIMoveSuccessful
  }

  const getLastHumanMoveSuccessful = () => {
    return lastHumanMoveSuccessful
  }

  const getAdjacentSlotsQueue = () => {
    return adjacentSlotsQueue
  }

  const getAdjacentQueueSlot = () => {
    return adjacentSlotsQueue.pop()
  }

  const getLastSuccessfulMove = () => {
    return successfulShots.at(-1)
  }

  return {
    createGameBoard,
    getBoard,
    placeShip,
    receiveAttack,
    clearGameBoard,
    getMissedShots,
    getSuccessfulShots,
    allShipsSunk,
    getAIAvailableMoves,
    validateCoordinates,
    preventSameAttack,
    checkSelfOverlap,
    getShipObjects,
    removeLastAIMove,
    checkOverlapWithOtherShips,
    getLastAIMoveSuccessful,
    getLastHumanMoveSuccessful,
    getAdjacentSlotsQueue,
    addAdjacentSlotsToQueue,
    getAdjacentQueueSlot,
    removeAdjacentSlot,
    getLastSuccessfulMove
  }
}
