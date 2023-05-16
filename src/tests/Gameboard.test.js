import { Gameboard } from '../factories/Gameboard'
import { Player } from '../factories/Player'
import { arraysAreEqual } from '../helpers/arraysAreEqual'

test('checks the number of rows', () => {
  const gameBoard = Gameboard()
  gameBoard.createGameBoard()
  const board = gameBoard.getBoard()
  let rowCount = 0
  board.forEach((row) => rowCount++)

  expect(rowCount).toBe(10)
})

test('checks the number of columns', () => {
  const gameBoard = Gameboard()
  gameBoard.createGameBoard()
  const board = gameBoard.getBoard()
  let columnCount = 0

  const row = board[0]
  row.forEach((cell) => columnCount++)

  expect(columnCount).toBe(10)
})

test('checks if ship object is placed at coordinates', () => {
  const gameBoard = Gameboard()
  gameBoard.createGameBoard()
  const coordinates = [
    [1, 1],
    [0, 2],
    [0, 3]
  ]
  gameBoard.placeShip(coordinates)

  let objectIsPlaced = true
  const board = gameBoard.getBoard()
  coordinates.forEach((coordinate) => {
    const row = coordinate[0]
    const column = coordinate[1]
    const boardCell = board[row][column]
    if (typeof boardCell === 'object') {
      objectIsPlaced = true
    } else if (typeof boardCell !== 'object') {
      objectIsPlaced = false
      return objectIsPlaced
    }
  })

  expect(objectIsPlaced).toBeTruthy()
})

test('checks that number of ships matches number of placeShip calls', () => {
  const gameBoard = Gameboard()
  gameBoard.createGameBoard()
  const coordinatesOne = [
    [4, 5],
    [4, 6],
    [4, 7]
  ]
  const coordinatesTwo = [
    [1, 1],
    [0, 2],
    [0, 3]
  ]
  const coordinatesThree = [
    [1, 1],
    [0, 2],
    [0, 3]
  ]
  gameBoard.placeShip(coordinatesOne)
  gameBoard.placeShip(coordinatesTwo)
  gameBoard.placeShip(coordinatesThree)

  const shipObjectsLength = gameBoard.getShipObjects().length

  expect(shipObjectsLength).toBe(2)
})

test('checks if ship object took the hit', () => {
  const gameBoard = Gameboard()
  gameBoard.createGameBoard()
  const coordinates = [
    [1, 1],
    [0, 2],
    [0, 3]
  ]
  gameBoard.placeShip(coordinates)

  // Using to check if boardCell (in receiveAttack is an object)
  gameBoard.receiveAttack([1, 1])
  /* const cellIsObj = typeof cellObj === 'object' */

  const board = gameBoard.getBoard()
  const boardCell = board[1][1]
  const shipObj = boardCell
  const numOfHits = shipObj.getNumOfHits()

  expect(numOfHits).toBe(1)
})

test('prevents user from attacking previously attacked coordinate', () => {
  const gameBoard = Gameboard()
  gameBoard.createGameBoard()
  const coordinates = [
    [1, 1],
    [0, 2],
    [0, 3]
  ]
  gameBoard.placeShip(coordinates)

  gameBoard.receiveAttack([1, 1])
  const alreadyAttacked = gameBoard.preventSameAttack([1, 1])

  expect(alreadyAttacked).toBeTruthy()
})

test('last random move by AI no longer available to use', () => {
  const humanBoard = Gameboard()
  humanBoard.createGameBoard()
  const board = humanBoard.getBoard()

  let availableMoves = humanBoard.getAIAvailableMoves()

  const aiPlayer = Player('Robot', true)

  const randomMove = aiPlayer.makeRandomMove(true, availableMoves, humanBoard)
  humanBoard.receiveAttack(randomMove)

  humanBoard.removeLastAIMove(randomMove)
  availableMoves = humanBoard.getAIAvailableMoves()

  expect(availableMoves).not.toContainEqual(randomMove)
})

test('checks if gameboard recorded the shot for a ship hit', () => {
  const gameBoard = Gameboard()
  gameBoard.createGameBoard()
  const coordinates = [
    [1, 1],
    [0, 2],
    [0, 3]
  ]
  gameBoard.placeShip(coordinates)

  // Using to check if boardCell (in receiveAttack is an object)
  gameBoard.receiveAttack([1, 1])
  /* const cellIsObj = typeof cellObj === 'object' */

  const recordedShots = gameBoard.getSuccessfulShots().length
  expect(recordedShots).toBe(1)
})

test('checks if gameboard recorded the shot for a ship miss', () => {
  const gameBoard = Gameboard()
  gameBoard.createGameBoard()
  const coordinates = [
    [1, 1],
    [0, 2],
    [0, 3]
  ]
  gameBoard.placeShip(coordinates)

  // Using to check if boardCell (in receiveAttack is an object)
  gameBoard.receiveAttack([1, 2])
  /* const cellIsObj = typeof cellObj === 'object' */

  const recordedShots = gameBoard.getMissedShots().length
  expect(recordedShots).toBe(1)
})

test('checks if all ships have been sunk', () => {
  const gameBoard = Gameboard()
  gameBoard.createGameBoard()
  const shipOneCoords = [
    [1, 1],
    [0, 2],
    [0, 3]
  ]
  gameBoard.placeShip(shipOneCoords)

  const shipTwoCoords = [
    [3, 4],
    [1, 5],
    [2, 6]
  ]

  gameBoard.placeShip(shipTwoCoords)

  // Sink ship one
  gameBoard.receiveAttack([1, 1])
  gameBoard.receiveAttack([0, 2])
  gameBoard.receiveAttack([0, 3])

  // Sink ship two
  gameBoard.receiveAttack([3, 4])
  gameBoard.receiveAttack([1, 5])
  gameBoard.receiveAttack([2, 6])

  const sunkAllShips = gameBoard.allShipsSunk()
  expect(sunkAllShips).toBeTruthy()
})

test('Invalid coordinates returns falsy', () => {
  const gameBoard = Gameboard()
  gameBoard.createGameBoard()
  const coordinates = [
    [12, 1],
    [0, 2],
    [0, 3]
  ]
  const shipPlaced = gameBoard.placeShip(coordinates)

  expect(shipPlaced).toBeFalsy()
})

test('Should prevent a ship from having overlapping coordinates', () => {
  const gameBoard = Gameboard()
  gameBoard.createGameBoard()
  const coordinates = [
    [1, 0],
    [0, 3],
    [0, 3]
  ]
  const shipPlaced = gameBoard.placeShip(coordinates)

  expect(shipPlaced).toBeFalsy()
})

test('Should prevent a ship from being placed on top of another ship', () => {
  const gameBoard = Gameboard()
  gameBoard.createGameBoard()
  const coordinates = [
    [1, 0],
    [0, 3],
    [0, 4]
  ]
  gameBoard.placeShip(coordinates)

  const coordinatesTwo = [
    [1, 0],
    [2, 3],
    [4, 3]
  ]

  const shipPlacedTwo = gameBoard.placeShip(coordinatesTwo)

  expect(shipPlacedTwo).toBeFalsy()
})

test('Gameboard is cleared', () => {
  const gameBoard = Gameboard()
  gameBoard.createGameBoard()
  const board = gameBoard.getBoard()
  const coordinates = [
    [1, 0],
    [0, 3],
    [0, 3]
  ]

  gameBoard.placeShip(coordinates)

  // simulate ship miss
  gameBoard.receiveAttack([1, 2])
  // simulate ship hit
  gameBoard.receiveAttack([1, 0])

  gameBoard.clearGameBoard()

  let boardReferencesCleared = true
  if (gameBoard.getShipObjects().length !== 0) {
    boardReferencesCleared = false
  } else if (gameBoard.getMissedShots().length !== 0) {
    boardReferencesCleared = false
  } else if (gameBoard.getAIAvailableMoves().length !== 0) {
    boardReferencesCleared = false
  } else if (gameBoard.getSuccessfulShots().length !== 0) {
    boardReferencesCleared = false
  } else if (gameBoard.getAdjacentSlotsQueue().length !== 0) {
    boardReferencesCleared = false
  }

  expect(boardReferencesCleared).toBeTruthy()
})

test('checks legal adjacent slots are added to the queue ', () => {
  const gameBoard = Gameboard()
  gameBoard.createGameBoard()
  const player = Player('Computer', true)
  let adjacentSlots
  const availableMoves = gameBoard.getAIAvailableMoves()

  const shipCoordinates = [
    [0, 0],
    [0, 1],
    [0, 2]
  ]

  gameBoard.placeShip(shipCoordinates)
  gameBoard.receiveAttack([0, 0])
  const lastAIMoveSuccessful = gameBoard.getLastAIMoveSuccessful()
  if (lastAIMoveSuccessful) {
    adjacentSlots = player.getAdjacentSlots(
      true,
      availableMoves,
      gameBoard.getAdjacentSlotsQueue(),
      gameBoard.getSuccessfulShots()
    )
  }

  gameBoard.addAdjacentSlotsToQueue(adjacentSlots)
  const adjacentQueue = gameBoard.getAdjacentSlotsQueue()

  const finalCoordinates = [
    [1, 0],
    [0, 1]
  ]

  let arraysAreEqualValue
  for (let i = 0; i < adjacentQueue.length; i++) {
    if (arraysAreEqual(adjacentQueue[i], finalCoordinates[i])) {
      arraysAreEqualValue = true
    } else {
      arraysAreEqualValue = undefined
      break
    }
  }

  expect(arraysAreEqualValue).toBeTruthy()
})

test.only('check if slot in adjacency queue is removed', () => {
  const gameBoard = Gameboard()
  gameBoard.createGameBoard()

  const shipCoordinates = [
    [0, 0],
    [0, 1],
    [0, 2]
  ]

  const player = Player('Computer', true)

  gameBoard.placeShip(shipCoordinates)
  gameBoard.receiveAttack([0, 0])
  // gameBoard.removeAdjacentSlot([1, 0])
  const adjacentSlots = player.getAdjacentSlots(
    true,
    gameBoard.getAIAvailableMoves(),
    gameBoard.getAdjacentSlotsQueue(),
    gameBoard.getSuccessfulShots()
  )
  gameBoard.addAdjacentSlotsToQueue(adjacentSlots)
  const testResult = gameBoard.removeAdjacentSlot([1, 0])

  const adjacentQueue = gameBoard.getAdjacentSlotsQueue()

  expect(adjacentQueue).not.toContainEqual([1, 0])
})

// !!!REMOVE THIS TEST, IT IS NOT NEEDED!!!
test.skip('coordinates are on the board', () => {
  const gameBoard = Gameboard()
  gameBoard.createGameBoard()
  const board = gameBoard.getBoard()
  const isValid = gameBoard.validateCoordinates([
    [2, 3],
    [3, 5],
    [9, 1]
  ])

  expect(isValid).toBeTruthy()
})

// !!!REMOVE THIS TEST, IT IS NOT NEEDED!!!
test.skip('coordinates on the board overlap', () => {
  const gameBoard = Gameboard()
  gameBoard.createGameBoard()
  const board = gameBoard.getBoard()
  const doOverlap = gameBoard.coordinatesOverlap([
    [1, 4],
    [2, 2],
    [3, 6]
  ])

  expect(doOverlap).toBeTruthy()
})
