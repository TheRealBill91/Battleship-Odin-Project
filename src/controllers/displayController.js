import { gameController } from './gameController'

const game = gameController()
const displayController = () => {
  game.placeAllShips()
  renderPlayerBoard()
  renderAIBoard()
  const aiBoardDiv = document.getElementById('AIBoard')
  const players = game.getPlayers()
  const activePlayer = game.getCurrentPlayer()

  if (activePlayer === players.human) {
    aiBoardDiv.addEventListener('click', handlePlayerSelectionEvt)
  }
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
      const row = playerBoard[i]
      if (typeof row[j] === 'object') {
        button.classList.add('shipCell')
      }
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
  if (alreadyAttacked){
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

export { renderPlayerBoard, renderAIBoard, displayController }
