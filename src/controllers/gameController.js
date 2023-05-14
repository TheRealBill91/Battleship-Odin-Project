import { Gameboard } from '../factories/Gameboard'
import { Player } from '../factories/Player'
import { returnRandomAIBoard } from '../helpers/rotateAIBoards'

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

  const placeCarrierShip = (coordinate) => {
    let carrierPlaced = true
    const carrierArr = []
    carrierArr.push(coordinate)
    for (let i = 1; i < 5; i++) {
      const coord = [coordinate[0], (+coordinate[1] + i).toString()]
      carrierArr.push(coord)
    }

    const shipPlaced = humanBoard.placeShip(carrierArr)
    if (!shipPlaced) {
      carrierPlaced = false
      return carrierPlaced
    }

    return carrierPlaced
  }

  const placeBattleShip = (coordinate) => {
    let battleshipPlaced = true
    const battleshipArr = []
    battleshipArr.push(coordinate)
    for (let i = 1; i < 4; i++) {
      const coord = [coordinate[0], (+coordinate[1] + i).toString()]
      battleshipArr.push(coord)
    }

    const shipPlaced = humanBoard.placeShip(battleshipArr)
    if (!shipPlaced) {
      battleshipPlaced = false
      return battleshipPlaced
    }

    return battleshipPlaced
  }

  const placeCruiserShip = (coordinate) => {
    let cruiserPlaced = true
    const cruiserArr = []
    cruiserArr.push(coordinate)
    for (let i = 1; i < 3; i++) {
      const coord = [coordinate[0], (+coordinate[1] + i).toString()]
      cruiserArr.push(coord)
    }

    const shipPlaced = humanBoard.placeShip(cruiserArr)
    if (!shipPlaced) {
      cruiserPlaced = false
      return cruiserPlaced
    }

    return cruiserPlaced
  }

  const placeSubmarineShip = (coordinate) => {
    let submarinePlaced = true
    const submarineArr = []
    submarineArr.push(coordinate)
    for (let i = 1; i < 3; i++) {
      const coord = [coordinate[0], (+coordinate[1] + i).toString()]
      submarineArr.push(coord)
    }

    const shipPlaced = humanBoard.placeShip(submarineArr)
    if (!shipPlaced) {
      submarinePlaced = false
      return submarinePlaced
    }

    return submarinePlaced
  }

  const placeDestroyerShip = (coordinate) => {
    let destroyerPlaced = true
    const submarineArr = []
    submarineArr.push(coordinate)
    for (let i = 1; i < 2; i++) {
      const coord = [coordinate[0], (+coordinate[1] + i).toString()]
      submarineArr.push(coord)
    }

    const shipPlaced = humanBoard.placeShip(submarineArr)
    if (!shipPlaced) {
      destroyerPlaced = false
      return destroyerPlaced
    }

    return destroyerPlaced
  }

  const placeAIShips = () => {
    placeShips(aiBoard, returnRandomAIBoard())
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
    placeAIShips,
    placeCarrierShip,
    placeBattleShip,
    placeCruiserShip,
    placeSubmarineShip,
    placeDestroyerShip
  }
}

export { gameController }

const placeShips = (board, coordinatesObj) => {
  const shipCoordinatesArr = Object.values(coordinatesObj)
  shipCoordinatesArr.forEach((shipCoordinates) => {
    board.placeShip(shipCoordinates)
  })
}

/* const placeEachHumanShip = (coordinate) => {
  humanBoard.placeShip(coordinate)
} */
