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

// Remove this test, it is not needed
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

// Remove this test, it is not needed
test.only('coordinates on the board overlap', () => {
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
