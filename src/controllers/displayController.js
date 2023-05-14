import { gameController } from './gameController'

const game = gameController()

const preGameSetup = () => {
  renderPlayerBoard()
  placeCarrierShip()
  renderAIBoard()
}

const displayController = () => {
  // this is where the ship placement will happen for human player
  game.placeAIShips()
  renderAIBoard()
  const aiBoardDiv = document.getElementById('AIBoard')
  const players = game.getPlayers()
  const activePlayer = game.getCurrentPlayer()

  if (activePlayer === players.human) {
    aiBoardDiv.addEventListener('click', handlePlayerSelectionEvt)
  }
}

const placeCarrierShip = () => {
  const topBarPara = document.querySelector('.topBarContainer > p')
  topBarPara.textContent = 'Place your carrier ship'
  const humanBoardDiv = document.querySelector('#playerBoard')
  humanBoardDiv.addEventListener('click', handleCarrierShipPlacement)
}

const placeBattleShip = () => {
  const humanBoardDiv = document.querySelector('#playerBoard')
  humanBoardDiv.removeEventListener('click', handleCarrierShipPlacement)
  const topBarPara = document.querySelector('.topBarContainer > p')
  topBarPara.textContent = 'Place your battle ship'
  humanBoardDiv.addEventListener('click', handleBattleShipPlacement)
}

const placeCruiser = () => {
  const humanBoardDiv = document.querySelector('#playerBoard')
  humanBoardDiv.removeEventListener('click', handleBattleShipPlacement)
  const topBarPara = document.querySelector('.topBarContainer > p')
  topBarPara.textContent = 'Place your cruiser ship'
  humanBoardDiv.addEventListener('click', handleCruiserShipPlacement)
}

const placeSubmarine = () => {
  const humanBoardDiv = document.querySelector('#playerBoard')
  humanBoardDiv.removeEventListener('click', handleCruiserShipPlacement)
  const topBarPara = document.querySelector('.topBarContainer > p')
  topBarPara.textContent = 'Place your submarine'
  humanBoardDiv.addEventListener('click', handleSubmarineShipPlacement)
}

const placeDestroyer = () => {
  const humanBoardDiv = document.querySelector('#playerBoard')
  humanBoardDiv.removeEventListener('click', handleSubmarineShipPlacement)
  const topBarPara = document.querySelector('.topBarContainer > p')
  topBarPara.textContent = 'Place your destroyer'
  humanBoardDiv.addEventListener('click', handleDestroyerShipPlacement)
}

const renderPlayerBoard = () => {
  const playerBoard = game.getHumanBoard()
  const playerBoardDiv = document.getElementById('playerBoard')
  playerBoardDiv.innerHTML = ''

  for (let i = 0; i < playerBoard.length; i++) {
    const currentRow = playerBoard[i]
    for (let j = 0; j < currentRow.length; j++) {
      const button = document.createElement('button')
      button.classList.add('boardCell')
      button.dataset.row = i
      button.dataset.column = j

      playerBoardDiv.appendChild(button)
    }
  }
}

const renderAIBoard = () => {
  const aiBoard = game.getAIBoard()
  const aiBoardDiv = document.getElementById('AIBoard')
  aiBoardDiv.innerHTML = ''

  for (let i = 0; i < aiBoard.length; i++) {
    const currentRow = aiBoard[i]
    for (let j = 0; j < currentRow.length; j++) {
      const button = document.createElement('button')
      button.classList.add('boardCell')
      button.dataset.row = i
      button.dataset.column = j
      const row = aiBoard[i]
      // for testing, this shows AI board at start
      // which we do not want
      if (typeof row[j] === 'object') {
        button.classList.add('shipCell')
      }
      aiBoardDiv.appendChild(button)
    }
  }
}

const updateHumanBoard = () => {
  const humanBoard = game.getHumanBoard()
  const missedShots = game.getHumanBoardObj.getMissedShots()
  const successfulShots = game.getHumanBoardObj.getSuccessfulShots()
  const allDomNodes = Array.from(
    document.getElementById('playerBoard').childNodes
  )

  missedShots.forEach((shot) => {
    const row = shot[0]
    const column = shot[1]

    for (let i = 0; i < allDomNodes.length; i++) {
      const targetNode = allDomNodes[i].dataset
      if (+targetNode.column === column && +targetNode.row === row) {
        allDomNodes[i].textContent = 'X'
      }
    }
  })

  successfulShots.forEach((shot) => {
    const row = shot[0]
    const column = shot[1]

    for (let i = 0; i < allDomNodes.length; i++) {
      const targetNode = allDomNodes[i]
      if (
        +targetNode.dataset.column === column &&
        +targetNode.dataset.row === row
      ) {
        targetNode.classList.remove('shipCell')
        targetNode.classList.add('shipHit')
        return
      }
    }
  })
}

const updateAIBoard = () => {
  const aiBoard = game.getAIBoard()
  const missedShots = game.getAIBoardObj.getMissedShots()
  const successfulShots = game.getAIBoardObj.getSuccessfulShots()
  const allDomNodes = Array.from(document.getElementById('AIBoard').childNodes)

  missedShots.forEach((shot) => {
    const row = shot[0]
    const column = shot[1]

    for (let i = 0; i < allDomNodes.length; i++) {
      const targetNode = allDomNodes[i].dataset
      if (targetNode.column === column && targetNode.row === row) {
        allDomNodes[i].textContent = 'X'
      }
    }
  })

  successfulShots.forEach((shot) => {
    const row = shot[0]
    const column = shot[1]

    for (let i = 0; i < allDomNodes.length; i++) {
      const targetNode = allDomNodes[i]
      if (
        targetNode.dataset.column === column &&
        targetNode.dataset.row === row
      ) {
        targetNode.classList.remove('shipCell')
        targetNode.classList.add('shipHit')
        return
      }
    }
  })
}

const handleCarrierShipPlacement = (e) => {
  const selectedRow = e.target.dataset.row
  const selectedColumn = e.target.dataset.column
  const coordinate = [selectedRow, selectedColumn]

  const carrierPlaced = placeCarrierOnBoard(coordinate)

  if (carrierPlaced) {
    placeBattleShip()
  } else {
    return placeCarrierShip
  }
}

const handleBattleShipPlacement = (e) => {
  const selectedRow = e.target.dataset.row
  const selectedColumn = e.target.dataset.column
  const coordinate = [selectedRow, selectedColumn]

  const battleshipPlaced = placeBattleshipOnBoard(coordinate)

  if (battleshipPlaced) {
    placeCruiser()
  } else {
    return placeBattleShip
  }
}

const handleCruiserShipPlacement = (e) => {
  const selectedRow = e.target.dataset.row
  const selectedColumn = e.target.dataset.column
  const coordinate = [selectedRow, selectedColumn]

  const cruiserPlaced = placeCruiserOnBoard(coordinate)

  if (cruiserPlaced) {
    placeSubmarine()
  } else {
    return placeCruiser
  }
}

const handleSubmarineShipPlacement = (e) => {
  const selectedRow = e.target.dataset.row
  const selectedColumn = e.target.dataset.column
  const coordinate = [selectedRow, selectedColumn]

  const cruiserPlaced = placeSubmarineOnBoard(coordinate)

  if (cruiserPlaced) {
    placeDestroyer()
  } else {
    return placeSubmarine
  }
}

const handleDestroyerShipPlacement = (e) => {
  const selectedRow = e.target.dataset.row
  const selectedColumn = e.target.dataset.column
  const coordinate = [selectedRow, selectedColumn]

  const destroyerPlaced = placeDestroyerOnBoard(coordinate)

  if (destroyerPlaced) {
    displayController()
  } else {
    return placeDestroyer
  }
}

const placeCarrierOnBoard = (coordinate) => {
  const carrierPlaced = game.placeCarrierShip(coordinate)
  const boardDOMCellsArr = [
    ...document.querySelectorAll('#playerBoard > button')
  ]
  if (!carrierPlaced) {
    return carrierPlaced
  } else {
    const startingColumn = Number(coordinate[1])

    for (let i = startingColumn; i < startingColumn + 5; i++) {
      const row = +coordinate[0]
      const column = i
      const domCoordinate = [row, column]
      const targetDOMBtn = findShipDOMBtn(boardDOMCellsArr, domCoordinate)
      targetDOMBtn.classList.add('shipCell')
    }
  }
  return carrierPlaced
}

const placeBattleshipOnBoard = (coordinate) => {
  const battleshipPlaced = game.placeBattleShip(coordinate)
  const boardDOMCellsArr = [
    ...document.querySelectorAll('#playerBoard > button')
  ]
  if (!battleshipPlaced) {
    return battleshipPlaced
  } else {
    const startingColumn = Number(coordinate[1])

    for (let i = startingColumn; i < startingColumn + 4; i++) {
      const row = +coordinate[0]
      const column = i
      const domCoordinate = [row, column]
      const targetDOMBtn = findShipDOMBtn(boardDOMCellsArr, domCoordinate)
      targetDOMBtn.classList.add('shipCell')
    }
  }
  return battleshipPlaced
}

const placeCruiserOnBoard = (coordinate) => {
  const cruiserPlaced = game.placeCruiserShip(coordinate)
  const boardDOMCellsArr = [
    ...document.querySelectorAll('#playerBoard > button')
  ]
  if (!cruiserPlaced) {
    return cruiserPlaced
  } else {
    const startingColumn = Number(coordinate[1])
    for (let i = startingColumn; i < startingColumn + 3; i++) {
      const row = +coordinate[0]
      const column = i
      const domCoordinate = [row, column]
      const targetDOMBtn = findShipDOMBtn(boardDOMCellsArr, domCoordinate)
      targetDOMBtn.classList.add('shipCell')
    }
  }
  return cruiserPlaced
}

const placeSubmarineOnBoard = (coordinate) => {
  const submarinePlaced = game.placeSubmarineShip(coordinate)
  const boardDOMCellsArr = [
    ...document.querySelectorAll('#playerBoard > button')
  ]
  if (!submarinePlaced) {
    return submarinePlaced
  } else {
    const startingColumn = Number(coordinate[1])
    for (let i = startingColumn; i < startingColumn + 3; i++) {
      const row = +coordinate[0]
      const column = i
      const domCoordinate = [row, column]
      const targetDOMBtn = findShipDOMBtn(boardDOMCellsArr, domCoordinate)
      targetDOMBtn.classList.add('shipCell')
    }
  }
  return submarinePlaced
}

const placeDestroyerOnBoard = (coordinate) => {
  const destroyerPlaced = game.placeDestroyerShip(coordinate)
  const boardDOMCellsArr = [
    ...document.querySelectorAll('#playerBoard > button')
  ]
  if (!destroyerPlaced) {
    return destroyerPlaced
  } else {
    const startingColumn = Number(coordinate[1])
    for (let i = startingColumn; i < startingColumn + 2; i++) {
      const row = +coordinate[0]
      const column = i
      const domCoordinate = [row, column]
      const targetDOMBtn = findShipDOMBtn(boardDOMCellsArr, domCoordinate)
      targetDOMBtn.classList.add('shipCell')
    }
  }
  return destroyerPlaced
}

const findShipDOMBtn = (boardDOMCellsArr, domCoordinate) => {
  for (let i = 0; i < boardDOMCellsArr.length; i++) {
    const domCellRow = +boardDOMCellsArr[i].dataset.row
    const domCellColumn = +boardDOMCellsArr[i].dataset.column
    if (domCellRow === domCoordinate[0] && domCellColumn === domCoordinate[1]) {
      return boardDOMCellsArr[i]
    }
  }
}

const handlePlayerSelectionEvt = (e) => {
  const selectedRow = e.target.dataset.row
  const selectedColumn = e.target.dataset.column
  const aiBoardDiv = document.getElementById('AIBoard')

  if (!selectedColumn || !selectedRow) {
    return handlePlayerSelectionEvt
  }

  const aiBoard = game.getAIBoardObj
  const coordinate = [selectedRow, selectedColumn]
  const alreadyAttacked = aiBoard.preventSameAttack(coordinate)
  if (alreadyAttacked) {
    return
  }

  game.playRound(coordinate)
  const humanWins = game.checkForWin()

  updateAIBoard()
  if (humanWins) {
    aiBoardDiv.removeEventListener('click', handlePlayerSelectionEvt)
    game.resetGameState()
    announceWinner(humanWins)
    playAgain()
  }
  handleAIMove(aiBoardDiv)
}

const handleAIMove = (aiBoardDiv) => {
  game.playRound()
  const aiWins = game.checkForWin()

  updateHumanBoard()
  if (aiWins) {
    aiBoardDiv.removeEventListener('click', handlePlayerSelectionEvt)
    game.resetGameState()
    announceWinner(aiWins)
    playAgain()
  }
}

const announceWinner = (winner) => {
  const topBarPara = document.querySelector('.topBarContainer > p')
  const winnerName = winner.getName()
  topBarPara.textContent = `${winnerName} win's!`
}

const playAgain = () => {
  const topBarDiv = document.querySelector('.topBarContainer')
  const playAgainBtn = document.createElement('button')
  playAgainBtn.textContent = 'Play again'
  topBarDiv.appendChild(playAgainBtn)
  playAgainBtn.addEventListener('click', startNewGame)
}

const startNewGame = () => {
  const topBarDiv = document.querySelector('.topBarContainer')
  const playAgainBtn = document.querySelector('.topBarContainer > button')
  topBarDiv.removeChild(playAgainBtn)
  document.querySelector('.topBarContainer > p').textContent = ''
  displayController()
}

// const handlePlayerSeletion

export { renderPlayerBoard, renderAIBoard, displayController, preGameSetup }
