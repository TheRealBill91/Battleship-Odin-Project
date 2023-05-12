import { Gameboard } from '../factories/Gameboard'
// first step is creating player and AI game boards
// Create a function that will create two game boards,
// and put each ship of the 5 ships on the boards

export const boardSetup = () => {
  // Create two game boards
  const playerBoard = Gameboard()
  playerBoard.createGameBoard()

  const aiBoard = Gameboard()
  aiBoard.createGameBoard()

  const playerShipCoords = {
    carrier: [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4]
    ],
    battleship: [
      [2, 2],
      [2, 3],
      [2, 4],
      [2, 5]
    ],
    cruiser: [
      [4, 0],
      [5, 0],
      [6, 0]
    ],
    submarine: [
      [7, 1],
      [7, 2],
      [7, 3]
    ],
    destroyer: [
      [1, 0],
      [2, 0]
    ]
  }

  const aiShipCoords = {
    carrier: [
      [9, 0],
      [9, 1],
      [9, 2],
      [9, 3],
      [9, 4]
    ],
    battleship: [
      [5, 5],
      [6, 5],
      [7, 5],
      [8, 5]
    ],
    cruiser: [
      [0, 6],
      [1, 6],
      [2, 6]
    ],
    submarine: [
      [3, 8],
      [4, 8],
      [5, 8]
    ],
    destroyer: [
      [0, 9],
      [1, 9]
    ]
  }

  placeShips(playerBoard, playerShipCoords)
  placeShips(aiBoard, playerShipCoords)
}

const placeShips = (board, coordinatesObj) => {
  const shipCoordinatesArr = Object.values(coordinatesObj)
  shipCoordinatesArr.forEach((shipCoordinates) => {
    board.placeShip(shipCoordinates)
  })
}
