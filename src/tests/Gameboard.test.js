import { Gameboard } from '../factories/Gameboard'

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

test('checks if ship recorded the shot for a ship hit', () => {
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

  const recordedShots = gameBoard.getRecordedShots().length
  expect(recordedShots).toBe(1)
})

test('checks if ship recorded the shot for a ship miss', () => {
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

  const recordedShots = gameBoard.getRecordedShots().length
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
