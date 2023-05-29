export const returnRandomAIBoard = () => {
  const aiBoards = [aiShipCoordsOne, aiShipCoordsTwo, aiShipCoordsThree]
  const randomIndex = Math.floor(Math.random() * 3)
  const chosenAIBoard = Object.values(aiBoards[randomIndex])
  return chosenAIBoard
}

export const aiShipCoordsOne = {
  carrier: [
    [9, 0],
    [9, 1],
    [9, 2],
    [9, 3],
    [9, 4]
  ],
  battleship: [
    [5, 5],
    [6, 5],
    [7, 5],
    [8, 5]
  ],
  cruiser: [
    [0, 6],
    [1, 6],
    [2, 6]
  ],
  submarine: [
    [3, 8],
    [4, 8],
    [5, 8]
  ],
  destroyer: [
    [0, 9],
    [1, 9]
  ]
}

const aiShipCoordsTwo = {
  carrier: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4]
  ],
  battleship: [
    [9, 5],
    [9, 6],
    [9, 7],
    [9, 8]
  ],
  cruiser: [
    [2, 2],
    [3, 2],
    [4, 2]
  ],
  submarine: [
    [6, 6],
    [6, 7],
    [6, 8]
  ],
  destroyer: [
    [8, 0],
    [8, 1]
  ]
}

const aiShipCoordsThree = {
  carrier: [
    [5, 0],
    [5, 1],
    [5, 2],
    [5, 3],
    [5, 4]
  ],
  battleship: [
    [0, 9],
    [1, 9],
    [2, 9],
    [3, 9]
  ],
  cruiser: [
    [7, 7],
    [8, 7],
    [9, 7]
  ],
  submarine: [
    [1, 1],
    [2, 1],
    [3, 1]
  ],
  destroyer: [
    [4, 4],
    [4, 5]
  ]
}
