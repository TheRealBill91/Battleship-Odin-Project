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

  const topBarDiv = document.querySelector('.topBarContainer')
  let horizontalShipOrientationStatus = true
  const orientationToggleBtn = document.createElement('button')
  orientationToggleBtn.classList.add('orientationToggleBtn')
  orientationToggleBtn.textContent = 'Horizontal'
  topBarDiv.appendChild(orientationToggleBtn)
  orientationToggleBtn.addEventListener(
    'click',
    () => {
      if (horizontalShipOrientationStatus === true) {
        horizontalShipOrientationStatus = false
        orientationToggleBtn.textContent = 'Vertical'
      } else {
        horizontalShipOrientationStatus = true
        orientationToggleBtn.textContent = 'Horizontal'
      }
    },
    { once: true }
  )

  humanBoardDiv.addEventListener(
    'click',
    (e) => {
      handleCarrierShipPlacement(e, horizontalShipOrientationStatus)
    },
    { once: true }
  )
}

const placeBattleShip = () => {
  const topBarPara = document.querySelector('.topBarContainer > p')
  topBarPara.textContent = 'Place your battleship'

  const humanBoardDiv = document.querySelector('#playerBoard')
  let horizontalShipOrientationStatus = true
  const orientationToggleBtn = document.querySelector('.orientationToggleBtn')
  orientationToggleBtn.textContent = 'Horizontal'
  orientationToggleBtn.addEventListener(
    'click',
    () => {
      if (horizontalShipOrientationStatus === true) {
        horizontalShipOrientationStatus = false
        orientationToggleBtn.textContent = 'Vertical'
      } else {
        horizontalShipOrientationStatus = true
        orientationToggleBtn.textContent = 'Horizontal'
      }
    },
    { once: true }
  )

  humanBoardDiv.addEventListener(
    'click',
    (e) => {
      console.log(
        'Orientation status going into placement:' +
          horizontalShipOrientationStatus
      )
      handleBattleShipPlacement(e, horizontalShipOrientationStatus)
    },
    { once: true }
  )
}

const placeCruiser = () => {
  const topBarPara = document.querySelector('.topBarContainer > p')
  topBarPara.textContent = 'Place your Cruiser'

  const humanBoardDiv = document.querySelector('#playerBoard')

  let horizontalShipOrientationStatus = true
  const orientationToggleBtn = document.querySelector('.orientationToggleBtn')
  orientationToggleBtn.textContent = 'Horizontal'
  orientationToggleBtn.addEventListener(
    'click',
    () => {
      if (horizontalShipOrientationStatus === true) {
        horizontalShipOrientationStatus = false
        orientationToggleBtn.textContent = 'Vertical'
      } else {
        horizontalShipOrientationStatus = true
        orientationToggleBtn.textContent = 'Horizontal'
      }
    },
    { once: true }
  )

  humanBoardDiv.addEventListener(
    'click',
    (e) => {
      console.log(
        'Orientation status going into placement:' +
          horizontalShipOrientationStatus
      )
      handleCruiserShipPlacement(e, horizontalShipOrientationStatus)
    },
    { once: true }
  )
}

const placeSubmarine = () => {
  const topBarPara = document.querySelector('.topBarContainer > p')
  topBarPara.textContent = 'Place your Submarine'

  const humanBoardDiv = document.querySelector('#playerBoard')

  let horizontalShipOrientationStatus = true
  const orientationToggleBtn = document.querySelector('.orientationToggleBtn')
  orientationToggleBtn.textContent = 'Horizontal'
  orientationToggleBtn.addEventListener(
    'click',
    () => {
      if (horizontalShipOrientationStatus === true) {
        horizontalShipOrientationStatus = false
        orientationToggleBtn.textContent = 'Vertical'
      } else {
        horizontalShipOrientationStatus = true
        orientationToggleBtn.textContent = 'Horizontal'
      }
    },
    { once: true }
  )

  humanBoardDiv.addEventListener(
    'click',
    (e) => {
      console.log(
        'Orientation status going into placement:' +
          horizontalShipOrientationStatus
      )
      handleSubmarineShipPlacement(e, horizontalShipOrientationStatus)
    },
    { once: true }
  )
}

const placeDestroyer = () => {
  const topBarPara = document.querySelector('.topBarContainer > p')
  topBarPara.textContent = 'Place your Destroyer'

  const humanBoardDiv = document.querySelector('#playerBoard')

  let horizontalShipOrientationStatus = true
  const orientationToggleBtn = document.querySelector('.orientationToggleBtn')
  orientationToggleBtn.textContent = 'Horizontal'
  orientationToggleBtn.addEventListener(
    'click',
    () => {
      if (horizontalShipOrientationStatus === true) {
        horizontalShipOrientationStatus = false
        orientationToggleBtn.textContent = 'Vertical'
      } else {
        horizontalShipOrientationStatus = true
        orientationToggleBtn.textContent = 'Horizontal'
      }
    },
    { once: true }
  )

  humanBoardDiv.addEventListener(
    'click',
    (e) => {
      console.log(
        'Orientation status going into placement:' +
          horizontalShipOrientationStatus
      )
      handleDestroyerShipPlacement(e, horizontalShipOrientationStatus)
    },
    { once: true }
  )
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

const handleCarrierShipPlacement = (e, horizontalShipOrientation) => {
  const selectedRow = e.target.dataset.row
  const selectedColumn = e.target.dataset.column
  const coordinate = [selectedRow, selectedColumn]

  const carrierPlaced = placeCarrierOnBoard(
    coordinate,
    horizontalShipOrientation
  )

  if (carrierPlaced) {
    placeBattleShip()
  } else {
    return placeCarrierShip
  }
}

const handleBattleShipPlacement = (e, horizontalShipOrientation) => {
  const selectedRow = e.target.dataset.row
  const selectedColumn = e.target.dataset.column
  const coordinate = [selectedRow, selectedColumn]

  const battleshipPlaced = placeBattleshipOnBoard(
    coordinate,
    horizontalShipOrientation
  )

  if (battleshipPlaced) {
    placeCruiser()
  } else {
    return placeBattleShip
  }
}

const handleCruiserShipPlacement = (e, horizontalShipOrientation) => {
  const selectedRow = e.target.dataset.row
  const selectedColumn = e.target.dataset.column
  const coordinate = [selectedRow, selectedColumn]

  const cruiserPlaced = placeCruiserOnBoard(
    coordinate,
    horizontalShipOrientation
  )

  if (cruiserPlaced) {
    placeSubmarine()
  } else {
    return placeCruiser
  }
}

const handleSubmarineShipPlacement = (e, horizontalShipOrientation) => {
  const selectedRow = e.target.dataset.row
  const selectedColumn = e.target.dataset.column
  const coordinate = [selectedRow, selectedColumn]

  const submarinePlaced = placeSubmarineOnBoard(
    coordinate,
    horizontalShipOrientation
  )

  if (submarinePlaced) {
    placeDestroyer()
  } else {
    return placeSubmarine
  }
}

const handleDestroyerShipPlacement = (e, horizontalShipOrientation) => {
  const selectedRow = e.target.dataset.row
  const selectedColumn = e.target.dataset.column
  const coordinate = [selectedRow, selectedColumn]

  const destroyerPlaced = placeDestroyerOnBoard(
    coordinate,
    horizontalShipOrientation
  )

  if (destroyerPlaced) {
    displayController()
  } else {
    return placeDestroyer
  }
}

const placeCarrierOnBoard = (coordinate, horizontalShipOrientation) => {
  const shipType = 'carrier'
  const carrierPlaced = game.placeCarrierShip(
    coordinate,
    horizontalShipOrientation
  )
  const boardDOMCellsArr = [
    ...document.querySelectorAll('#playerBoard > button')
  ]
  if (!carrierPlaced) {
    return carrierPlaced
  } else {
    if (horizontalShipOrientation) {
      getHorizontalDOMCoords(coordinate, boardDOMCellsArr, shipType)
    } else if (!horizontalShipOrientation) {
      getVerticalDOMCoords(coordinate, boardDOMCellsArr, shipType)
    }
  }
  return carrierPlaced
}

const placeBattleshipOnBoard = (coordinate, horizontalShipOrientation) => {
  const shipType = 'battleship'
  const battleshipPlaced = game.placeBattleShip(
    coordinate,
    horizontalShipOrientation
  )
  const boardDOMCellsArr = [
    ...document.querySelectorAll('#playerBoard > button')
  ]
  if (!battleshipPlaced) {
    return battleshipPlaced
  } else {
    if (horizontalShipOrientation) {
      getHorizontalDOMCoords(coordinate, boardDOMCellsArr, shipType)
    } else if (!horizontalShipOrientation) {
      getVerticalDOMCoords(coordinate, boardDOMCellsArr, shipType)
    }
  }
  return battleshipPlaced
}

const placeCruiserOnBoard = (coordinate, horizontalShipOrientation) => {
  const shipType = 'cruiser'
  const cruiserPlaced = game.placeCruiserShip(
    coordinate,
    horizontalShipOrientation
  )
  const boardDOMCellsArr = [
    ...document.querySelectorAll('#playerBoard > button')
  ]
  if (!cruiserPlaced) {
    return cruiserPlaced
  } else {
    if (horizontalShipOrientation) {
      getHorizontalDOMCoords(coordinate, boardDOMCellsArr, shipType)
    } else if (!horizontalShipOrientation) {
      getVerticalDOMCoords(coordinate, boardDOMCellsArr, shipType)
    }
  }
  return cruiserPlaced
}

const placeSubmarineOnBoard = (coordinate, horizontalShipOrientation) => {
  const shipType = 'submarine'
  const submarinePlaced = game.placeSubmarineShip(
    coordinate,
    horizontalShipOrientation
  )
  const boardDOMCellsArr = [
    ...document.querySelectorAll('#playerBoard > button')
  ]
  if (!submarinePlaced) {
    return submarinePlaced
  } else {
    if (horizontalShipOrientation) {
      getHorizontalDOMCoords(coordinate, boardDOMCellsArr, shipType)
    } else if (!horizontalShipOrientation) {
      getVerticalDOMCoords(coordinate, boardDOMCellsArr, shipType)
    }
  }
  return submarinePlaced
}

const placeDestroyerOnBoard = (coordinate, horizontalShipOrientation) => {
  const shipType = 'destroyer'
  const destroyerPlaced = game.placeDestroyerShip(
    coordinate,
    horizontalShipOrientation
  )
  const boardDOMCellsArr = [
    ...document.querySelectorAll('#playerBoard > button')
  ]
  if (!destroyerPlaced) {
    return destroyerPlaced
  } else {
    if (horizontalShipOrientation) {
      getHorizontalDOMCoords(coordinate, boardDOMCellsArr, shipType)
    } else if (!horizontalShipOrientation) {
      getVerticalDOMCoords(coordinate, boardDOMCellsArr, shipType)
    }
  }
  return destroyerPlaced
}

const getHorizontalDOMCoords = (coordinate, boardDOMCellsArr, shipType) => {
  const startingColumn = Number(coordinate[1])
  const shipLength =
    shipType === 'carrier'
      ? 5
      : shipType === 'battleship'
      ? 4
      : shipType === 'cruiser'
      ? 3
      : shipType === 'submarine'
      ? 3
      : shipType === 'destroyer'
      ? 2
      : null

  for (let i = startingColumn; i < startingColumn + shipLength; i++) {
    const row = +coordinate[0]
    const column = i
    const domCoordinate = [row, column]
    const targetDOMBtn = findShipDOMBtn(boardDOMCellsArr, domCoordinate)
    targetDOMBtn.classList.add('shipCell')
  }
}

const getVerticalDOMCoords = (coordinate, boardDOMCellsArr, shipType) => {
  const startingRow = Number(coordinate[0])
  const shipLength =
    shipType === 'carrier'
      ? 5
      : shipType === 'battleship'
      ? 4
      : shipType === 'cruiser'
      ? 3
      : shipType === 'submarine'
      ? 3
      : shipType === 'destroyer'
      ? 2
      : null

  for (let i = startingRow; i > startingRow - shipLength; i--) {
    const row = i
    const column = +coordinate[1]
    const domCoordinate = [row, column]
    const targetDOMBtn = findShipDOMBtn(boardDOMCellsArr, domCoordinate)
    targetDOMBtn.classList.add('shipCell')
  }
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
