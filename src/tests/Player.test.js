import { Player } from '../factories/Player'
import { Gameboard } from '../factories/Gameboard'
import { arraysAreEqual } from '../helpers/arraysAreEqual'

test('checks that a random move from available moves is returned', () => {
  const humanBoard = Gameboard()
  humanBoard.createGameBoard()
  const board = humanBoard.getBoard()

  const availableMoves = humanBoard.getAIAvailableMoves()
  const aiPlayer = Player('Robot', true)

  const randomMove = aiPlayer.makeRandomMove(true, availableMoves)

  expect(availableMoves).toContainEqual(randomMove)
})

test('checks that make random move returns undefined when there are no moves left', () => {
  const humanBoard = Gameboard()
  humanBoard.createGameBoard()

  const availableMoves = []
  const aiPlayer = Player('Robot', true)

  const randomMove = aiPlayer.makeRandomMove(true, availableMoves)

  expect(randomMove).toBeUndefined()
})

test('checks that make random move returns undefined when the AI is set to false', () => {
  const humanBoard = Gameboard()
  humanBoard.createGameBoard()

  const availableMoves = []
  const aiPlayer = Player('Robot', true)

  const randomMove = aiPlayer.makeRandomMove(false, availableMoves)

  expect(randomMove).toBeUndefined()
})
