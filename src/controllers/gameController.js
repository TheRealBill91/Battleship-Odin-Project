import { Gameboard } from '../factories/Gameboard'
import { Player } from '../factories/Player'
import { arraysAreEqual } from '../helpers/arraysAreEqual'
import { returnRandomAIBoard } from '../helpers/rotateAIBoards'

const gameController = () => {
  // Create two game boards
  const humanBoard = Gameboard()
  humanBoard.createGameBoard()

  const aiBoard = Gameboard()
  aiBoard.createGameBoard()

  const placeCarrierShip = (coordinate, horizontalShipOrientation) => {
    let carrierPlaced = true

    const carrierArr = determineCarrierArrCoords(
      horizontalShipOrientation,
      coordinate
    )

    const shipPlaced = humanBoard.placeShip(carrierArr)
    if (!shipPlaced) {
      carrierPlaced = false
      return carrierPlaced
    }

    return carrierPlaced
  }

  const determineCarrierArrCoords = (horizontalShipOrientation, coordinate) => {
    const carrierArr = []
    if (horizontalShipOrientation) {
      carrierArr.push(coordinate)
      for (let i = 1; i < 5; i++) {
        const coord = [coordinate[0], (+coordinate[1] + i).toString()]
        carrierArr.push(coord)
      }
    } else if (!horizontalShipOrientation) {
      carrierArr.push(coordinate)
      for (let i = 1; i < 5; i++) {
        const coord = [(+coordinate[0] - i).toString(), coordinate[1]]
        carrierArr.push(coord)
      }
    }
    return carrierArr
  }

  const placeBattleShip = (coordinate, horizontalShipOrientation) => {
    let battleshipPlaced = true
    const battleshipArr = determineBattleshipArrCoords(
      horizontalShipOrientation,
      coordinate
    )

    const shipPlaced = humanBoard.placeShip(battleshipArr)
    if (!shipPlaced) {
      battleshipPlaced = false
      return battleshipPlaced
    }

    return battleshipPlaced
  }

  const determineBattleshipArrCoords = (
    horizontalShipOrientation,
    coordinate
  ) => {
    const battleshipArr = []
    if (horizontalShipOrientation) {
      battleshipArr.push(coordinate)
      for (let i = 1; i < 4; i++) {
        const coord = [coordinate[0], (+coordinate[1] + i).toString()]
        battleshipArr.push(coord)
      }
    } else if (!horizontalShipOrientation) {
      battleshipArr.push(coordinate)
      for (let i = 1; i < 4; i++) {
        const coord = [(+coordinate[0] - i).toString(), coordinate[1]]
        battleshipArr.push(coord)
      }
    }
    return battleshipArr
  }

  const placeCruiserShip = (coordinate, horizontalShipOrientation) => {
    let cruiserPlaced = true
    const cruiserArr = determineCruiserArrCoords(
      horizontalShipOrientation,
      coordinate
    )

    const shipPlaced = humanBoard.placeShip(cruiserArr)
    if (!shipPlaced) {
      cruiserPlaced = false
      return cruiserPlaced
    }

    return cruiserPlaced
  }

  const determineCruiserArrCoords = (horizontalShipOrientation, coordinate) => {
    const cruiserArr = []
    if (horizontalShipOrientation) {
      cruiserArr.push(coordinate)
      for (let i = 1; i < 3; i++) {
        const coord = [coordinate[0], (+coordinate[1] + i).toString()]
        cruiserArr.push(coord)
      }
    } else if (!horizontalShipOrientation) {
      cruiserArr.push(coordinate)
      for (let i = 1; i < 3; i++) {
        const coord = [(+coordinate[0] - i).toString(), coordinate[1]]
        cruiserArr.push(coord)
      }
    }
    return cruiserArr
  }

  const placeSubmarineShip = (coordinate, horizontalShipOrientation) => {
    let submarinePlaced = true
    const submarineArr = determineSubmarineArrCoords(
      horizontalShipOrientation,
      coordinate
    )

    const shipPlaced = humanBoard.placeShip(submarineArr)
    if (!shipPlaced) {
      submarinePlaced = false
      return submarinePlaced
    }

    return submarinePlaced
  }

  const determineSubmarineArrCoords = (
    horizontalShipOrientation,
    coordinate
  ) => {
    const submarineArr = []
    if (horizontalShipOrientation) {
      submarineArr.push(coordinate)
      for (let i = 1; i < 3; i++) {
        const coord = [coordinate[0], (+coordinate[1] + i).toString()]
        submarineArr.push(coord)
      }
    } else if (!horizontalShipOrientation) {
      submarineArr.push(coordinate)
      for (let i = 1; i < 3; i++) {
        const coord = [(+coordinate[0] - i).toString(), coordinate[1]]
        submarineArr.push(coord)
      }
    }
    return submarineArr
  }

  const placeDestroyerShip = (coordinate, horizontalShipOrientation) => {
    let destroyerPlaced = true
    const destroyerArr = determineDestroyerArrCoords(
      horizontalShipOrientation,
      coordinate
    )

    const shipPlaced = humanBoard.placeShip(destroyerArr)
    if (!shipPlaced) {
      destroyerPlaced = false
      return destroyerPlaced
    }

    return destroyerPlaced
  }

  const determineDestroyerArrCoords = (
    horizontalShipOrientation,
    coordinate
  ) => {
    const destroyerArr = []
    if (horizontalShipOrientation) {
      destroyerArr.push(coordinate)
      for (let i = 1; i < 2; i++) {
        const coord = [coordinate[0], (+coordinate[1] + i).toString()]
        destroyerArr.push(coord)
      }
    } else if (!horizontalShipOrientation) {
      destroyerArr.push(coordinate)
      for (let i = 1; i < 2; i++) {
        const coord = [(+coordinate[0] - i).toString(), coordinate[1]]
        destroyerArr.push(coord)
      }
    }
    return destroyerArr
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
      const nextMove = computersNextMove()
      humanBoard.receiveAttack(nextMove)
      humanBoard.removeLastAIMove(nextMove)
    }

    switchPlayer()
    console.log(currentPlayer.getName())
  }

  const computersNextMove = () => {
    const availableMoves = humanBoard.getAIAvailableMoves()
    const lastAIMoveSuccessful = humanBoard.getLastAIMoveSuccessful()
    if (lastAIMoveSuccessful) {
      const adjacentSlots = currentPlayer.getAdjacentSlots(
        true,
        availableMoves,
        humanBoard.getSuccessfulShots(),
        humanBoard.getMissedShots()
      )
      humanBoard.addAdjacentSlotsToQueue(adjacentSlots)
      const nextMove = humanBoard.getAdjacentQueueSlot()
      return nextMove
    } else if (!lastAIMoveSuccessful) {
      const randomMove = currentPlayer.makeRandomMove(true, availableMoves)
      return randomMove
    }
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

  const isShipSunk = (player) => {
    let shipIsSunk
    if (player === 'human') {
      const lastSuccessfulHumanMove = aiBoard.getLastSuccessfulMove()
      if (lastSuccessfulHumanMove === undefined) {
        shipIsSunk = false
        return [shipIsSunk]
      }
      const gameBoard = aiBoard.getBoard()
      const targetShipObj =
        gameBoard[lastSuccessfulHumanMove[0]][lastSuccessfulHumanMove[1]]
      shipIsSunk = targetShipObj.hasBeenSunk()
      return [shipIsSunk, targetShipObj, lastSuccessfulHumanMove]
    } else if (player === 'computer') {
      const lastSuccessfulAIMove = humanBoard.getLastSuccessfulMove()
      if (lastSuccessfulAIMove === undefined) {
        shipIsSunk = false
        return [shipIsSunk]
      }
      const gameBoard = humanBoard.getBoard()
      const targetShipObj =
        gameBoard[lastSuccessfulAIMove[0]][lastSuccessfulAIMove[1]]
      shipIsSunk = targetShipObj.hasBeenSunk()

      return [shipIsSunk, targetShipObj, lastSuccessfulAIMove]
    }
  }

  const getSunkShipCoords = (targetShipObj, lastSuccessfulMove, player) => {
    const sunkShipLength = targetShipObj.getLength()
    let adjacentSlots
    let remainingShipCoords
    const shipCoords = [lastSuccessfulMove]
    let shipOrientation
    let shipDirection
    if (player === 'human') {
      const humanShipCoords = getHumanSunkShipCoords(
        adjacentSlots,
        sunkShipLength,
        shipOrientation,
        shipCoords,
        lastSuccessfulMove,
        remainingShipCoords,
        shipDirection
      )
      return humanShipCoords
    } else if (player === 'computer') {
      const aiShipCoords = getAISunkShipCoords(
        adjacentSlots,
        sunkShipLength,
        shipOrientation,
        shipCoords,
        lastSuccessfulMove,
        remainingShipCoords,
        shipDirection
      )
      return aiShipCoords
    }
  }

  const getHumanSunkShipCoords = (
    adjacentSlots,
    sunkShipLength,
    shipOrientation,
    shipCoords,
    lastSuccessfulMove,
    remainingShipCoords,
    shipDirection
  ) => {
    adjacentSlots = currentPlayer.getAdjacentSlots(
      true, // doing this just to make it work
      1,
      aiBoard.getSuccessfulShots(),
      aiBoard.getMissedShots()
    )
    // Based on the last successful ship hit, and it's coordinates,
    // find the rest of the coordinates for that ship object that has
    // been sunk
    for (let i = 0; i < adjacentSlots.length; i++) {
      const adjacentSlot = adjacentSlots[i]
      const gameBoard = aiBoard.getBoard()
      const shipObj = gameBoard[adjacentSlot[0]][adjacentSlot[1]]
      if (shipObj !== undefined && shipObj.getLength() === sunkShipLength) {
        shipOrientation = determineShipOrientation(
          lastSuccessfulMove,
          adjacentSlot
        )
        shipDirection = determineShipDirection(
          shipOrientation,
          lastSuccessfulMove,
          adjacentSlot
        )
        shipCoords.push(adjacentSlot)
        remainingShipCoords = sunkShipLength - 2
        if (remainingShipCoords > 0) {
          for (let j = 0; j < remainingShipCoords.length; j++) {
            let nextShipCoord
            if (shipDirection === 'right') {
              nextShipCoord = [adjacentSlot[0], adjacentSlot[1] + 1]
              shipCoords.push(nextShipCoord)
            } else if (shipDirection === 'left') {
              nextShipCoord = [adjacentSlot[0], adjacentSlot[1] - 1]
              shipCoords.push(nextShipCoord)
            } else if (shipDirection === 'up') {
              nextShipCoord = [adjacentSlot[0] - 1, adjacentSlot[1]]
              shipCoords.push(nextShipCoord)
            } else if (shipDirection === 'down') {
              nextShipCoord = [adjacentSlot[0] + 1, adjacentSlot[1]]
            }
          }
        } else {
          return shipCoords
        }
      }
    }
    return shipCoords
  }

  const getAISunkShipCoords = (
    adjacentSlots,
    sunkShipLength,
    shipOrientation,
    lastSuccessfulMove,
    shipDirection,
    shipCoords,
    remainingShipCoords
  ) => {
    adjacentSlots = currentPlayer.getAdjacentSlots(
      true,
      1,
      aiBoard.getSuccessfulShots(),
      aiBoard.getMissedShots()
    )
    // Based on the last successful ship hit, and it's coordinates,
    // find the rest of the coordinates for that ship object that has
    // been sunk
    for (let i = 0; i < adjacentSlots.length; i++) {
      const adjacentSlot = adjacentSlots[i]
      const shipObj = humanBoard.getBoard()[adjacentSlot[0]][adjacentSlot[1]]
      if (shipObj.getLength() === sunkShipLength) {
        shipOrientation = determineShipOrientation(
          lastSuccessfulMove,
          adjacentSlot
        )
        shipDirection = determineShipDirection(
          shipOrientation,
          lastSuccessfulMove,
          adjacentSlot
        )
        shipCoords.push(adjacentSlot)
        remainingShipCoords = sunkShipLength - 2
        if (remainingShipCoords > 0) {
          for (let j = 0; j < remainingShipCoords.length; j++) {
            let nextShipCoord
            if (shipDirection === 'right') {
              nextShipCoord = [adjacentSlot[0], adjacentSlot[1] + 1]
              shipCoords.push(nextShipCoord)
            } else if (shipDirection === 'left') {
              nextShipCoord = [adjacentSlot[0], adjacentSlot[1] - 1]
              shipCoords.push(nextShipCoord)
            } else if (shipDirection === 'up') {
              nextShipCoord = [adjacentSlot[0] - 1, adjacentSlot[1]]
              shipCoords.push(nextShipCoord)
            } else if (shipDirection === 'down') {
              nextShipCoord = [adjacentSlot[0] + 1, adjacentSlot[1]]
            }
          }
        } else {
          return shipCoords
        }
      }
    }
    return shipCoords
  }

  // when trying to figure out the coordinates for a sunk ship,
  // we need to get the orientation (horizontal or vertical) of the
  // sunk ship
  const determineShipOrientation = (lastSuccessfulMove, adjacentSlot) => {
    let shipOrientation
    if (lastSuccessfulMove[0] !== adjacentSlot[0]) {
      shipOrientation = 'vertical'
      return shipOrientation
    } else if (lastSuccessfulMove[0] === adjacentSlot[0]) {
      shipOrientation = 'horizontal'
      return shipOrientation
    }
  }

  // when trying to figure out the coordinates for a sunk ship,
  // we need to get the direction (up, down, left, right) of the
  // sunk ship
  const determineShipDirection = (
    shipOrientation,
    lastSuccessfulMove,
    adjacentSlot
  ) => {
    // determine if direction is up or down
    let shipDirection
    if (shipOrientation === 'vertical') {
      const startingCoordRow = lastSuccessfulMove[0][0]
      const nextVerticalCoordRow = adjacentSlot[0]
      // eslint-disable-next-line no-unused-expressions
      startingCoordRow > nextVerticalCoordRow
        ? (shipDirection = 'down')
        : (shipDirection = 'up')
      return shipDirection
    } else if (shipOrientation === 'horizontal') {
      const startingCoordColumn = lastSuccessfulMove[0][1]
      const nextHorizontalColumn = adjacentSlot[0]
      // eslint-disable-next-line no-unused-expressions
      startingCoordColumn < nextHorizontalColumn
        ? (shipDirection = 'right')
        : (shipDirection = 'left')
      return shipDirection
    }
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
    placeDestroyerShip,
    isShipSunk,
    getSunkShipCoords
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
