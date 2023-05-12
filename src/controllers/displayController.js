import { gameController } from './gameController'

const game = gameController()

const renderPlayerBoard = () => {
  const playerBoard = game.getPlayerBoard()
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
      if (typeof row[j] === 'object') {
        button.classList.add('shipCell')
      }
      aiBoardDiv.appendChild(button)
    }
  }
}

export { renderPlayerBoard, renderAIBoard }
