import { Player } from '../factories/Player'
import { Gameboard } from '../factories/Gameboard'
import { arraysAreEqual } from '../helpers/arraysAreEqual'

test.only('last random move by AI no longer available to use', () => {
  const humanBoard = Gameboard()
  humanBoard.createGameBoard()
  const board = humanBoard.getBoard()

  const aiPlayer = Player('Robot', true)
  const availableMoves = []

  for (let i = 0; i < board.length; i++) {
    const row = board[i]
    for (let j = 0; j < row.length; j++) {
      const coordinate = [i, j]
      availableMoves.push(coordinate)
    }
  }

  const randomMove = aiPlayer.makeRandomMove(true, availableMoves, humanBoard)
  // const randomMove = [0, 3]
  humanBoard.receiveAttack(randomMove)

  availableMoves.forEach((move, index) => {
    // you need arrays are equal helper function here
    if (arraysAreEqual(move, randomMove)) {
      availableMoves.splice(index, 1)
    }
  })

  expect(availableMoves).not.toContainEqual(randomMove)
})
