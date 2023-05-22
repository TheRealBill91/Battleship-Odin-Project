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

test('checks that we can retrieve last successful move in getAdjacentSlots function', () => {
  const gameBoard = Gameboard()
  gameBoard.createGameBoard()

  const shipCoordinates = [
    [0, 0],
    [0, 1],
    [0, 2]
  ]

  const player = Player('Computer', true)

  gameBoard.placeShip(shipCoordinates)
  gameBoard.receiveAttack([0, 0])

  const successfulShots = gameBoard.getSuccessfulShots()
  const lastSuccessfulMove = successfulShots.at(-1)

  expect(lastSuccessfulMove).toEqual([0, 0])
})

test('checks that we can retrieve the adjacent slots', () => {
  const gameBoard = Gameboard()
  gameBoard.createGameBoard()

  const shipCoordinates = [
    [0, 0],
    [0, 1],
    [0, 2]
  ]

  const player = Player('Computer', true)

  gameBoard.placeShip(shipCoordinates)
  gameBoard.receiveAttack([0, 1])
  gameBoard.removeLastAIMove([0, 1])
  gameBoard.receiveAttack([0, 0])
  gameBoard.removeLastAIMove([0, 0])

  const successfulShots = gameBoard.getSuccessfulShots()
  const lastSuccessfulMove = successfulShots.at(-1)
  const availableMoves = gameBoard.getAIAvailableMoves()

  const adjacentSlots = player.getAdjacentSlots(
    true,
    availableMoves,
    successfulShots,
    gameBoard.getMissedShots()
  )

  /* const movesAvailable = player.preventPreviousShotToQueue(
    availableMoves,
    adjacentSlots
  ) */

  expect(adjacentSlots).toContainEqual([1, 0])
})
