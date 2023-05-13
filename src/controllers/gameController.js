import { Gameboard } from '../factories/Gameboard'
import { Player } from '../factories/Player'

const gameController = () => {
  // Create two game boards
  const humanBoard = Gameboard()
  humanBoard.createGameBoard()

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

  const placeAllShips = () => {
    placeShips(humanBoard, playerShipCoords)
    placeShips(aiBoard, aiShipCoords)
  }

  const players = {}

  const getPlayers = () => {
    return players
  }

  const humanPlayer = Player('Human', false)
  const aiPlayer = Player('AI', true)
  players.human = humanPlayer
  players.AI = aiPlayer

  let currentPlayer = players.human

  const getCurrentPlayer = () => {
    return currentPlayer
  }

  const playRound = (coordinate) => {
    if (currentPlayer.getName() === players.human.getName()) {
      aiBoard.receiveAttack(coordinate)
    } else if (currentPlayer.getName() === players.AI.getName()) {
      const availableMoves = humanBoard.getAIAvailableMoves()
      const randomMove = currentPlayer.makeRandomMove(true, availableMoves)
      humanBoard.receiveAttack(randomMove)
      humanBoard.removeLastAIMove(randomMove)
    }

    switchPlayer()
    console.log(currentPlayer.getName())
  }

  const switchPlayer = () => {
    currentPlayer =
      currentPlayer.getName() === players.human.getName()
        ? (currentPlayer = players.AI)
        : (currentPlayer = players.human)
  }

  const checkForWin = () => {
    let winner
    if (
      currentPlayer.getName() === players.human.getName() &&
      aiBoard.allShipsSunk()
    ) {
      winner = currentPlayer
      return winner
    } else if (
      currentPlayer.getName() === players.AI.getName() &&
      humanBoard.allShipsSunk()
    ) {
      winner = currentPlayer
      return winner
    }
    return winner
  }

  const resetGameState = (winner) => {
    humanBoard.clearGameBoard()
    aiBoard.clearGameBoard()
    humanBoard.createGameBoard()
    aiBoard.createGameBoard()
  }

  return {
    getHumanBoard: humanBoard.getBoard,
    getAIBoard: aiBoard.getBoard,
    getAIBoardObj: aiBoard,
    getHumanBoardObj: humanBoard,
    switchPlayer,
    playRound,
    getCurrentPlayer,
    resetGameState,
    checkForWin,
    getPlayers,
    placeAllShips
  }
}

export { gameController }

const placeShips = (board, coordinatesObj) => {
  const shipCoordinatesArr = Object.values(coordinatesObj)
  shipCoordinatesArr.forEach((shipCoordinates) => {
    board.placeShip(shipCoordinates)
  })
}
