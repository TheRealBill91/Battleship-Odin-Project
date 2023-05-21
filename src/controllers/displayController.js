import { delay } from '../helpers/delay'
import { gameController } from './gameController'

const game = gameController()

const preGameSetup = () => {
  renderPlayerBoard()
  placeCarrierShip()
  renderAIBoard()
}
const displayController = async () => {
  // this is where the ship placement will happen for human player
  const topBarContainerPara = document.querySelector('.topBarContainer > p')
  topBarContainerPara.textContent = 'Enenmy is placing their ships...'
  await delay(1500)
  game.placeAIShips()
  renderAIBoard()
  topBarContainerPara.textContent = ''
  const aiBoardDiv = document.getElementById('AIBoard')
  const players = game.getPlayers()
  const activePlayer = game.getCurrentPlayer()

  if (activePlayer === players.human) {
    const newMessage = 'Attack the enemies ships!'
    const topBarContainerPara = document.querySelector('.topBarContainer > p')
    transitionTextChanges(newMessage, topBarContainerPara)

    const controller = new AbortController()
    aiBoardDiv.addEventListener(
      'click',
      (e) => {
        handlePlayerSelectionEvt(e, controller)
      },
      { signal: controller.signal }
    )
  }
}

const placeCarrierShip = () => {
  const topBarPara = document.querySelector('.topBarContainer > p')
  topBarPara.textContent = 'Place your carrier ship'

  const humanBoardDiv = document.querySelector('#playerBoard')

  const orientationBtnValues = createOrientationToggleBtn()
  let horizontalShipOrientationStatus = orientationBtnValues[0]
  const orientationToggleBtn = orientationBtnValues[1]
  orientationToggleBtn.addEventListener('click', () => {
    if (horizontalShipOrientationStatus === true) {
      horizontalShipOrientationStatus = false
      orientationToggleBtn.textContent = 'Vertical'
    } else {
      horizontalShipOrientationStatus = true
      orientationToggleBtn.textContent = 'Horizontal'
    }
  })

  const controller = new AbortController()
  humanBoardDiv.addEventListener(
    'click',
    (e) => {
      handleCarrierShipPlacement(e, horizontalShipOrientationStatus, controller)
    },
    { signal: controller.signal }
  )
}

const placeBattleShip = () => {
  const topBarPara = document.querySelector('.topBarContainer > p')
  topBarPara.textContent = 'Place your battleship'

  const humanBoardDiv = document.querySelector('#playerBoard')

  const orientationBtnValues = createOrientationToggleBtn()
  let horizontalShipOrientationStatus = orientationBtnValues[0]
  const orientationToggleBtn = orientationBtnValues[1]
  orientationToggleBtn.addEventListener('click', () => {
    if (horizontalShipOrientationStatus === true) {
      horizontalShipOrientationStatus = false
      orientationToggleBtn.textContent = 'Vertical'
    } else {
      horizontalShipOrientationStatus = true
      orientationToggleBtn.textContent = 'Horizontal'
    }
  })

  const controller = new AbortController()
  humanBoardDiv.addEventListener(
    'click',
    (e) => {
      console.log(
        'Orientation status going into placement:' +
          horizontalShipOrientationStatus
      )
      handleBattleShipPlacement(e, horizontalShipOrientationStatus, controller)
    },
    { signal: controller.signal }
  )
}

const placeCruiser = () => {
  const topBarPara = document.querySelector('.topBarContainer > p')
  topBarPara.textContent = 'Place your Cruiser'

  const humanBoardDiv = document.querySelector('#playerBoard')

  const orientationBtnValues = createOrientationToggleBtn()
  let horizontalShipOrientationStatus = orientationBtnValues[0]
  const orientationToggleBtn = orientationBtnValues[1]
  orientationToggleBtn.addEventListener('click', () => {
    if (horizontalShipOrientationStatus === true) {
      horizontalShipOrientationStatus = false
      orientationToggleBtn.textContent = 'Vertical'
    } else {
      horizontalShipOrientationStatus = true
      orientationToggleBtn.textContent = 'Horizontal'
    }
  })

  const controller = new AbortController()
  humanBoardDiv.addEventListener(
    'click',
    (e) => {
      console.log(
        'Orientation status going into placement:' +
          horizontalShipOrientationStatus
      )
      handleCruiserShipPlacement(e, horizontalShipOrientationStatus, controller)
    },
    { signal: controller.signal }
  )
}

const placeSubmarine = () => {
  const topBarPara = document.querySelector('.topBarContainer > p')
  topBarPara.textContent = 'Place your Submarine'

  const humanBoardDiv = document.querySelector('#playerBoard')

  const orientationBtnValues = createOrientationToggleBtn()
  let horizontalShipOrientationStatus = orientationBtnValues[0]
  const orientationToggleBtn = orientationBtnValues[1]
  orientationToggleBtn.addEventListener('click', () => {
    if (horizontalShipOrientationStatus === true) {
      horizontalShipOrientationStatus = false
      orientationToggleBtn.textContent = 'Vertical'
    } else {
      horizontalShipOrientationStatus = true
      orientationToggleBtn.textContent = 'Horizontal'
    }
  })
  const controller = new AbortController()
  humanBoardDiv.addEventListener(
    'click',
    (e) => {
      console.log(
        'Orientation status going into placement:' +
          horizontalShipOrientationStatus
      )
      handleSubmarineShipPlacement(
        e,
        horizontalShipOrientationStatus,
        controller
      )
    },
    { signal: controller.signal }
  )
}

const placeDestroyer = () => {
  const topBarPara = document.querySelector('.topBarContainer > p')
  topBarPara.textContent = 'Place your Destroyer'

  const humanBoardDiv = document.querySelector('#playerBoard')

  const orientationBtnValues = createOrientationToggleBtn()
  let horizontalShipOrientationStatus = orientationBtnValues[0]
  const orientationToggleBtn = orientationBtnValues[1]
  orientationToggleBtn.addEventListener('click', () => {
    if (horizontalShipOrientationStatus === true) {
      horizontalShipOrientationStatus = false
      orientationToggleBtn.textContent = 'Vertical'
    } else {
      horizontalShipOrientationStatus = true
      orientationToggleBtn.textContent = 'Horizontal'
    }
  })

  const controller = new AbortController()
  humanBoardDiv.addEventListener(
    'click',
    (e) => {
      console.log(
        'Orientation status going into placement:' +
          horizontalShipOrientationStatus
      )
      handleDestroyerShipPlacement(
        e,
        horizontalShipOrientationStatus,
        controller
      )
    },
    { signal: controller.signal }
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

const renderAIBoard = async () => {
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
      }
    }
  })
}

const updateAIBoard = () => {
  const aiBoard = game.getAIBoard()
  const missedShots = game.getAIBoardObj.getMissedShots()
  const successfulShots = game.getAIBoardObj.getSuccessfulShots()
  console.log(successfulShots)
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
        +targetNode.dataset.column === column &&
        +targetNode.dataset.row === row
      ) {
        targetNode.classList.remove('shipCell')
        targetNode.classList.add('shipHit')
      }
    }
  })
}

const handleCarrierShipPlacement = (
  e,
  horizontalShipOrientation,
  controller
) => {
  const selectedRow = e.target.dataset.row
  const selectedColumn = e.target.dataset.column
  const coordinate = [selectedRow, selectedColumn]

  const carrierPlaced = placeCarrierOnBoard(
    coordinate,
    horizontalShipOrientation
  )

  if (carrierPlaced) {
    controller.abort()
    removePreviousOrientationBtn()
    placeBattleShip()
  } else {
    return placeCarrierShip
  }
}

const handleBattleShipPlacement = (
  e,
  horizontalShipOrientation,
  controller
) => {
  const selectedRow = e.target.dataset.row
  const selectedColumn = e.target.dataset.column
  const coordinate = [selectedRow, selectedColumn]

  const battleshipPlaced = placeBattleshipOnBoard(
    coordinate,
    horizontalShipOrientation
  )

  if (battleshipPlaced) {
    controller.abort()
    removePreviousOrientationBtn()
    placeCruiser()
  } else {
    return placeBattleShip
  }
}

const handleCruiserShipPlacement = (
  e,
  horizontalShipOrientation,
  controller
) => {
  const selectedRow = e.target.dataset.row
  const selectedColumn = e.target.dataset.column
  const coordinate = [selectedRow, selectedColumn]

  const cruiserPlaced = placeCruiserOnBoard(
    coordinate,
    horizontalShipOrientation
  )

  if (cruiserPlaced) {
    controller.abort()
    removePreviousOrientationBtn()
    placeSubmarine()
  } else {
    return placeCruiser
  }
}

const handleSubmarineShipPlacement = (
  e,
  horizontalShipOrientation,
  controller
) => {
  const selectedRow = e.target.dataset.row
  const selectedColumn = e.target.dataset.column
  const coordinate = [selectedRow, selectedColumn]

  const submarinePlaced = placeSubmarineOnBoard(
    coordinate,
    horizontalShipOrientation
  )

  if (submarinePlaced) {
    controller.abort()
    removePreviousOrientationBtn()
    placeDestroyer()
  } else {
    return placeSubmarine
  }
}

const handleDestroyerShipPlacement = async (
  e,
  horizontalShipOrientation,
  controller
) => {
  const selectedRow = e.target.dataset.row
  const selectedColumn = e.target.dataset.column
  const coordinate = [selectedRow, selectedColumn]
  const topBarContainerPara = document.querySelector('.topBarContainer > p')

  const destroyerPlaced = placeDestroyerOnBoard(
    coordinate,
    horizontalShipOrientation
  )

  if (destroyerPlaced) {
    controller.abort()
    topBarContainerPara.textContent = ''
    removePreviousOrientationBtn()
    await displayController()
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
    if (
      domCellRow === +domCoordinate[0] &&
      domCellColumn === +domCoordinate[1]
    ) {
      return boardDOMCellsArr[i]
    }
  }
}

const handlePlayerSelectionEvt = async (e, controller) => {
  const selectedRow = +e.target.dataset.row
  const selectedColumn = +e.target.dataset.column
  const aiBoardDiv = document.getElementById('AIBoard')

  if (selectedColumn === 'undefined' || selectedRow === 'undefined') {
    return handlePlayerSelectionEvt
  }

  controller.abort()

  const aiBoard = game.getAIBoardObj
  const coordinate = [selectedRow, selectedColumn]
  const alreadyAttacked = aiBoard.preventSameAttack(coordinate)
  if (alreadyAttacked) {
    return
  }

  game.playRound(coordinate)
  const humanMoveSuccessful = game.getAIBoardObj.getLastHumanMoveSuccessful()
  // Use this value when determining whether to show ship as sunk
  const shipIsSunk = game.isShipSunk('human', coordinate)
  const shipSunkResult = shipIsSunk[0]
  if (shipSunkResult) {
    displaySunkShipMessage('human')
  } else if (!shipSunkResult) {
    humanMoveSuccessful
      ? displaySuccessfulAttackMessage('human')
      : displayUnsuccessfulAttackMessage('human')
  }

  const humanWins = game.checkForWin()

  updateAIBoard()
  await delay(4000)
  handleWinCheck(humanWins, aiBoardDiv)
  handleAIMove(aiBoardDiv)
}

const handleAIMove = async (aiBoardDiv) => {
  const topBarContainerPara = document.querySelector('.topBarContainer > p')
  const enemyAttackingMsg = 'Enemy is attacking your ships!'
  transitionTextChanges(enemyAttackingMsg, topBarContainerPara)
  await delay(3000)
  const guessedCoordinate = game.playRound()
  const aiMoveSuccessful = game.getHumanBoardObj.getLastAIMoveSuccessful()
  const shipIsSunk = game.isShipSunk('computer', guessedCoordinate)
  const shipSunkResult = shipIsSunk[0]
  if (shipSunkResult === true) {
    displaySunkShipMessage('computer')
  } else if (!shipSunkResult) {
    aiMoveSuccessful
      ? displaySuccessfulAttackMessage('computer')
      : displayUnsuccessfulAttackMessage('computer')
  }

  const aiWins = game.checkForWin()

  updateHumanBoard()
  await delay(2500)
  const attackTheEnemyMsg = 'Attack the enemies ships...'
  transitionTextChanges(attackTheEnemyMsg, topBarContainerPara)

  await delay(3500)
  handleWinCheck(aiWins, aiBoardDiv)

  const controller = new AbortController()
  aiBoardDiv.addEventListener(
    'click',
    (e) => {
      handlePlayerSelectionEvt(e, controller)
    },
    { signal: controller.signal }
  )
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

// For each of the place ship functions, we need to remove the previous
// orientation toggle button to prevent the same listener firing for each of the
// previous orientation toggle buttons
const removePreviousOrientationBtn = () => {
  const topBarDiv = document.querySelector('.topBarContainer')
  const previousOrientationBtn = document.querySelector('.orientationToggleBtn')
  topBarDiv.removeChild(previousOrientationBtn)
}

const createOrientationToggleBtn = () => {
  const topBarDiv = document.querySelector('.topBarContainer')
  const horizontalShipOrientationStatus = true
  const orientationToggleBtn = document.createElement('button')
  orientationToggleBtn.classList.add('orientationToggleBtn')
  orientationToggleBtn.textContent = 'Horizontal'
  topBarDiv.appendChild(orientationToggleBtn)

  return [horizontalShipOrientationStatus, orientationToggleBtn]
}

const displaySuccessfulAttackMessage = (player) => {
  if (player === 'human') {
    const topBarContainerPara = document.querySelector('.topBarContainer > p')
    const attackAndHitMsg = 'You attacked the enemy... and hit their ship!'
    setTimeout(transitionTextChanges, 10, attackAndHitMsg, topBarContainerPara)
  } else if (player === 'computer') {
    const topBarContainerPara = document.querySelector('.topBarContainer > p')
    const enemyHitMsg = 'The enemy launched an attack... and hit your ship!'
    setTimeout(transitionTextChanges, 10, enemyHitMsg, topBarContainerPara)
  }
}

const displayUnsuccessfulAttackMessage = (player) => {
  if (player === 'human') {
    const topBarContainerPara = document.querySelector('.topBarContainer > p')
    const unsuccessfulAttackMsg = 'Your attack on the enemy was unsuccessful'
    setTimeout(
      transitionTextChanges,
      10,
      unsuccessfulAttackMsg,
      topBarContainerPara
    )
  } else if (player === 'computer') {
    const topBarContainerPara = document.querySelector('.topBarContainer > p')
    const unsuccessfulEnemyAttackMsg = 'The enemies attack was unsuccessful'
    setTimeout(
      transitionTextChanges,
      10,
      unsuccessfulEnemyAttackMsg,
      topBarContainerPara
    )
  }
}

const displaySunkShipMessage = (player) => {
  if (player === 'human') {
    const topBarContainerPara = document.querySelector('.topBarContainer > p')
    const sunkShipMessage = 'You have sunk the enemies ship!'
    setTimeout(transitionTextChanges, 10, sunkShipMessage, topBarContainerPara)
  } else if (player === 'computer') {
    const topBarContainerPara = document.querySelector('.topBarContainer > p')
    const sunkShipMessage = 'The enemy sunk one of your ships!'
    setTimeout(transitionTextChanges, 10, sunkShipMessage, topBarContainerPara)
  }
}

// Changes colors of sunk ship cells to red and changes top bar container
// message
const displaySunkShip = (sunkShipCoords, player) => {
  if (player === 'human') {
    const aiDOMCellsArr = [...document.querySelectorAll('#AIBoard > button')]
    for (let i = 0; i < sunkShipCoords.length; i++) {
      const domCoord = sunkShipCoords[i]
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      // ISSUE IS HERE, DOM COORD ARR HAS STRINGS, NEEDS NUMBERS
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      const targetDOMBtn = findShipDOMBtn(aiDOMCellsArr, domCoord)
      targetDOMBtn.classList.add('sunkShip')
    }
  } else if (player === 'computer') {
    const humanDOMCellsArr = [
      ...document.querySelectorAll('#playerBoard > button')
    ]
    for (let i = 0; i < sunkShipCoords.length; i++) {
      const domCoord = sunkShipCoords[i]
      const targetDOMBtn = findShipDOMBtn(humanDOMCellsArr, domCoord)
      targetDOMBtn.classList.add('sunkShip')
    }
  }
}

const handleWinCheck = (winCheck, boardDiv) => {
  if (winCheck) {
    boardDiv.removeEventListener('click', handlePlayerSelectionEvt)
    game.resetGameState()
    announceWinner(winCheck)
    playAgain()
  }
}

const transitionTextChanges = async (newMessage, domElement) => {
  domElement.classList.add('invisible')
  await delay(400)
  domElement.textContent = newMessage
  await delay(400)
  domElement.classList.remove('invisible')
}

// const handlePlayerSeletion

export { renderPlayerBoard, renderAIBoard, displayController, preGameSetup }
