/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controllers/displayController.js":
/*!**********************************************!*\
  !*** ./src/controllers/displayController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayController": () => (/* binding */ displayController),
/* harmony export */   "preGameSetup": () => (/* binding */ preGameSetup),
/* harmony export */   "renderAIBoard": () => (/* binding */ renderAIBoard),
/* harmony export */   "renderPlayerBoard": () => (/* binding */ renderPlayerBoard)
/* harmony export */ });
/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameController */ "./src/controllers/gameController.js");

const game = (0,_gameController__WEBPACK_IMPORTED_MODULE_0__.gameController)();
const preGameSetup = () => {
  renderPlayerBoard();
  placeCarrierShip();
  renderAIBoard();
};
const displayController = () => {
  // this is where the ship placement will happen for human player
  game.placeAIShips();
  renderAIBoard();
  const aiBoardDiv = document.getElementById('AIBoard');
  const players = game.getPlayers();
  const activePlayer = game.getCurrentPlayer();
  if (activePlayer === players.human) {
    aiBoardDiv.addEventListener('click', handlePlayerSelectionEvt);
  }
};
const placeCarrierShip = () => {
  const topBarPara = document.querySelector('.topBarContainer > p');
  topBarPara.textContent = 'Place your carrier ship';
  const humanBoardDiv = document.querySelector('#playerBoard');
  humanBoardDiv.addEventListener('click', handleCarrierShipPlacement);
};
const placeBattleShip = () => {
  const humanBoardDiv = document.querySelector('#playerBoard');
  humanBoardDiv.removeEventListener('click', handleCarrierShipPlacement);
  const topBarPara = document.querySelector('.topBarContainer > p');
  topBarPara.textContent = 'Place your battle ship';
  humanBoardDiv.addEventListener('click', handleBattleShipPlacement);
};
const placeCruiser = () => {
  const humanBoardDiv = document.querySelector('#playerBoard');
  humanBoardDiv.removeEventListener('click', handleBattleShipPlacement);
  const topBarPara = document.querySelector('.topBarContainer > p');
  topBarPara.textContent = 'Place your cruiser ship';
  humanBoardDiv.addEventListener('click', handleCruiserShipPlacement);
};
const placeSubmarine = () => {
  const humanBoardDiv = document.querySelector('#playerBoard');
  humanBoardDiv.removeEventListener('click', handleCruiserShipPlacement);
  const topBarPara = document.querySelector('.topBarContainer > p');
  topBarPara.textContent = 'Place your submarine';
  humanBoardDiv.addEventListener('click', handleSubmarineShipPlacement);
};
const placeDestroyer = () => {
  const humanBoardDiv = document.querySelector('#playerBoard');
  humanBoardDiv.removeEventListener('click', handleSubmarineShipPlacement);
  const topBarPara = document.querySelector('.topBarContainer > p');
  topBarPara.textContent = 'Place your destroyer';
  humanBoardDiv.addEventListener('click', handleDestroyerShipPlacement);
};
const renderPlayerBoard = () => {
  const playerBoard = game.getHumanBoard();
  const playerBoardDiv = document.getElementById('playerBoard');
  playerBoardDiv.innerHTML = '';
  for (let i = 0; i < playerBoard.length; i++) {
    const currentRow = playerBoard[i];
    for (let j = 0; j < currentRow.length; j++) {
      const button = document.createElement('button');
      button.classList.add('boardCell');
      button.dataset.row = i;
      button.dataset.column = j;
      playerBoardDiv.appendChild(button);
    }
  }
};
const renderAIBoard = () => {
  const aiBoard = game.getAIBoard();
  const aiBoardDiv = document.getElementById('AIBoard');
  aiBoardDiv.innerHTML = '';
  for (let i = 0; i < aiBoard.length; i++) {
    const currentRow = aiBoard[i];
    for (let j = 0; j < currentRow.length; j++) {
      const button = document.createElement('button');
      button.classList.add('boardCell');
      button.dataset.row = i;
      button.dataset.column = j;
      const row = aiBoard[i];
      // for testing, this shows AI board at start
      // which we do not want
      if (typeof row[j] === 'object') {
        button.classList.add('shipCell');
      }
      aiBoardDiv.appendChild(button);
    }
  }
};
const updateHumanBoard = () => {
  const humanBoard = game.getHumanBoard();
  const missedShots = game.getHumanBoardObj.getMissedShots();
  const successfulShots = game.getHumanBoardObj.getSuccessfulShots();
  const allDomNodes = Array.from(document.getElementById('playerBoard').childNodes);
  missedShots.forEach(shot => {
    const row = shot[0];
    const column = shot[1];
    for (let i = 0; i < allDomNodes.length; i++) {
      const targetNode = allDomNodes[i].dataset;
      if (+targetNode.column === column && +targetNode.row === row) {
        allDomNodes[i].textContent = 'X';
      }
    }
  });
  successfulShots.forEach(shot => {
    const row = shot[0];
    const column = shot[1];
    for (let i = 0; i < allDomNodes.length; i++) {
      const targetNode = allDomNodes[i];
      if (+targetNode.dataset.column === column && +targetNode.dataset.row === row) {
        targetNode.classList.remove('shipCell');
        targetNode.classList.add('shipHit');
        return;
      }
    }
  });
};
const updateAIBoard = () => {
  const aiBoard = game.getAIBoard();
  const missedShots = game.getAIBoardObj.getMissedShots();
  const successfulShots = game.getAIBoardObj.getSuccessfulShots();
  const allDomNodes = Array.from(document.getElementById('AIBoard').childNodes);
  missedShots.forEach(shot => {
    const row = shot[0];
    const column = shot[1];
    for (let i = 0; i < allDomNodes.length; i++) {
      const targetNode = allDomNodes[i].dataset;
      if (targetNode.column === column && targetNode.row === row) {
        allDomNodes[i].textContent = 'X';
      }
    }
  });
  successfulShots.forEach(shot => {
    const row = shot[0];
    const column = shot[1];
    for (let i = 0; i < allDomNodes.length; i++) {
      const targetNode = allDomNodes[i];
      if (targetNode.dataset.column === column && targetNode.dataset.row === row) {
        targetNode.classList.remove('shipCell');
        targetNode.classList.add('shipHit');
        return;
      }
    }
  });
};
const handleCarrierShipPlacement = e => {
  const selectedRow = e.target.dataset.row;
  const selectedColumn = e.target.dataset.column;
  const coordinate = [selectedRow, selectedColumn];
  const carrierPlaced = placeCarrierOnBoard(coordinate);
  if (carrierPlaced) {
    placeBattleShip();
  } else {
    return placeCarrierShip;
  }
};
const handleBattleShipPlacement = e => {
  const selectedRow = e.target.dataset.row;
  const selectedColumn = e.target.dataset.column;
  const coordinate = [selectedRow, selectedColumn];
  const battleshipPlaced = placeBattleshipOnBoard(coordinate);
  if (battleshipPlaced) {
    placeCruiser();
  } else {
    return placeBattleShip;
  }
};
const handleCruiserShipPlacement = e => {
  const selectedRow = e.target.dataset.row;
  const selectedColumn = e.target.dataset.column;
  const coordinate = [selectedRow, selectedColumn];
  const cruiserPlaced = placeCruiserOnBoard(coordinate);
  if (cruiserPlaced) {
    placeSubmarine();
  } else {
    return placeCruiser;
  }
};
const handleSubmarineShipPlacement = e => {
  const selectedRow = e.target.dataset.row;
  const selectedColumn = e.target.dataset.column;
  const coordinate = [selectedRow, selectedColumn];
  const cruiserPlaced = placeSubmarineOnBoard(coordinate);
  if (cruiserPlaced) {
    placeDestroyer();
  } else {
    return placeSubmarine;
  }
};
const handleDestroyerShipPlacement = e => {
  const selectedRow = e.target.dataset.row;
  const selectedColumn = e.target.dataset.column;
  const coordinate = [selectedRow, selectedColumn];
  const destroyerPlaced = placeDestroyerOnBoard(coordinate);
  if (destroyerPlaced) {
    displayController();
  } else {
    return placeDestroyer;
  }
};
const placeCarrierOnBoard = coordinate => {
  const carrierPlaced = game.placeCarrierShip(coordinate);
  const boardDOMCellsArr = [...document.querySelectorAll('#playerBoard > button')];
  if (!carrierPlaced) {
    return carrierPlaced;
  } else {
    const startingColumn = Number(coordinate[1]);
    for (let i = startingColumn; i < startingColumn + 5; i++) {
      const row = +coordinate[0];
      const column = i;
      const domCoordinate = [row, column];
      const targetDOMBtn = findShipDOMBtn(boardDOMCellsArr, domCoordinate);
      targetDOMBtn.classList.add('shipCell');
    }
  }
  return carrierPlaced;
};
const placeBattleshipOnBoard = coordinate => {
  const battleshipPlaced = game.placeBattleShip(coordinate);
  const boardDOMCellsArr = [...document.querySelectorAll('#playerBoard > button')];
  if (!battleshipPlaced) {
    return battleshipPlaced;
  } else {
    const startingColumn = Number(coordinate[1]);
    for (let i = startingColumn; i < startingColumn + 4; i++) {
      const row = +coordinate[0];
      const column = i;
      const domCoordinate = [row, column];
      const targetDOMBtn = findShipDOMBtn(boardDOMCellsArr, domCoordinate);
      targetDOMBtn.classList.add('shipCell');
    }
  }
  return battleshipPlaced;
};
const placeCruiserOnBoard = coordinate => {
  const cruiserPlaced = game.placeCruiserShip(coordinate);
  const boardDOMCellsArr = [...document.querySelectorAll('#playerBoard > button')];
  if (!cruiserPlaced) {
    return cruiserPlaced;
  } else {
    const startingColumn = Number(coordinate[1]);
    for (let i = startingColumn; i < startingColumn + 3; i++) {
      const row = +coordinate[0];
      const column = i;
      const domCoordinate = [row, column];
      const targetDOMBtn = findShipDOMBtn(boardDOMCellsArr, domCoordinate);
      targetDOMBtn.classList.add('shipCell');
    }
  }
  return cruiserPlaced;
};
const placeSubmarineOnBoard = coordinate => {
  const submarinePlaced = game.placeSubmarineShip(coordinate);
  const boardDOMCellsArr = [...document.querySelectorAll('#playerBoard > button')];
  if (!submarinePlaced) {
    return submarinePlaced;
  } else {
    const startingColumn = Number(coordinate[1]);
    for (let i = startingColumn; i < startingColumn + 3; i++) {
      const row = +coordinate[0];
      const column = i;
      const domCoordinate = [row, column];
      const targetDOMBtn = findShipDOMBtn(boardDOMCellsArr, domCoordinate);
      targetDOMBtn.classList.add('shipCell');
    }
  }
  return submarinePlaced;
};
const placeDestroyerOnBoard = coordinate => {
  const destroyerPlaced = game.placeDestroyerShip(coordinate);
  const boardDOMCellsArr = [...document.querySelectorAll('#playerBoard > button')];
  if (!destroyerPlaced) {
    return destroyerPlaced;
  } else {
    const startingColumn = Number(coordinate[1]);
    for (let i = startingColumn; i < startingColumn + 2; i++) {
      const row = +coordinate[0];
      const column = i;
      const domCoordinate = [row, column];
      const targetDOMBtn = findShipDOMBtn(boardDOMCellsArr, domCoordinate);
      targetDOMBtn.classList.add('shipCell');
    }
  }
  return destroyerPlaced;
};
const findShipDOMBtn = (boardDOMCellsArr, domCoordinate) => {
  for (let i = 0; i < boardDOMCellsArr.length; i++) {
    const domCellRow = +boardDOMCellsArr[i].dataset.row;
    const domCellColumn = +boardDOMCellsArr[i].dataset.column;
    if (domCellRow === domCoordinate[0] && domCellColumn === domCoordinate[1]) {
      return boardDOMCellsArr[i];
    }
  }
};
const handlePlayerSelectionEvt = e => {
  const selectedRow = e.target.dataset.row;
  const selectedColumn = e.target.dataset.column;
  const aiBoardDiv = document.getElementById('AIBoard');
  if (!selectedColumn || !selectedRow) {
    return handlePlayerSelectionEvt;
  }
  const aiBoard = game.getAIBoardObj;
  const coordinate = [selectedRow, selectedColumn];
  const alreadyAttacked = aiBoard.preventSameAttack(coordinate);
  if (alreadyAttacked) {
    return;
  }
  game.playRound(coordinate);
  const humanWins = game.checkForWin();
  updateAIBoard();
  if (humanWins) {
    aiBoardDiv.removeEventListener('click', handlePlayerSelectionEvt);
    game.resetGameState();
    announceWinner(humanWins);
    playAgain();
  }
  handleAIMove(aiBoardDiv);
};
const handleAIMove = aiBoardDiv => {
  game.playRound();
  const aiWins = game.checkForWin();
  updateHumanBoard();
  if (aiWins) {
    aiBoardDiv.removeEventListener('click', handlePlayerSelectionEvt);
    game.resetGameState();
    announceWinner(aiWins);
    playAgain();
  }
};
const announceWinner = winner => {
  const topBarPara = document.querySelector('.topBarContainer > p');
  const winnerName = winner.getName();
  topBarPara.textContent = `${winnerName} win's!`;
};
const playAgain = () => {
  const topBarDiv = document.querySelector('.topBarContainer');
  const playAgainBtn = document.createElement('button');
  playAgainBtn.textContent = 'Play again';
  topBarDiv.appendChild(playAgainBtn);
  playAgainBtn.addEventListener('click', startNewGame);
};
const startNewGame = () => {
  const topBarDiv = document.querySelector('.topBarContainer');
  const playAgainBtn = document.querySelector('.topBarContainer > button');
  topBarDiv.removeChild(playAgainBtn);
  document.querySelector('.topBarContainer > p').textContent = '';
  displayController();
};

// const handlePlayerSeletion



/***/ }),

/***/ "./src/controllers/gameController.js":
/*!*******************************************!*\
  !*** ./src/controllers/gameController.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameController": () => (/* binding */ gameController)
/* harmony export */ });
/* harmony import */ var _factories_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/Gameboard */ "./src/factories/Gameboard.js");
/* harmony import */ var _factories_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/Player */ "./src/factories/Player.js");
/* harmony import */ var _helpers_rotateAIBoards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/rotateAIBoards */ "./src/helpers/rotateAIBoards.js");



const gameController = () => {
  // Create two game boards
  const humanBoard = (0,_factories_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
  humanBoard.createGameBoard();
  const aiBoard = (0,_factories_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
  aiBoard.createGameBoard();
  const playerShipCoords = {
    carrier: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]],
    battleship: [[2, 2], [2, 3], [2, 4], [2, 5]],
    cruiser: [[4, 0], [5, 0], [6, 0]],
    submarine: [[7, 1], [7, 2], [7, 3]],
    destroyer: [[1, 0], [2, 0]]
  };
  const placeCarrierShip = coordinate => {
    let carrierPlaced = true;
    const carrierArr = [];
    carrierArr.push(coordinate);
    for (let i = 1; i < 5; i++) {
      const coord = [coordinate[0], (+coordinate[1] + i).toString()];
      carrierArr.push(coord);
    }
    const shipPlaced = humanBoard.placeShip(carrierArr);
    if (!shipPlaced) {
      carrierPlaced = false;
      return carrierPlaced;
    }
    return carrierPlaced;
  };
  const placeBattleShip = coordinate => {
    let battleshipPlaced = true;
    const battleshipArr = [];
    battleshipArr.push(coordinate);
    for (let i = 1; i < 4; i++) {
      const coord = [coordinate[0], (+coordinate[1] + i).toString()];
      battleshipArr.push(coord);
    }
    const shipPlaced = humanBoard.placeShip(battleshipArr);
    if (!shipPlaced) {
      battleshipPlaced = false;
      return battleshipPlaced;
    }
    return battleshipPlaced;
  };
  const placeCruiserShip = coordinate => {
    let cruiserPlaced = true;
    const cruiserArr = [];
    cruiserArr.push(coordinate);
    for (let i = 1; i < 3; i++) {
      const coord = [coordinate[0], (+coordinate[1] + i).toString()];
      cruiserArr.push(coord);
    }
    const shipPlaced = humanBoard.placeShip(cruiserArr);
    if (!shipPlaced) {
      cruiserPlaced = false;
      return cruiserPlaced;
    }
    return cruiserPlaced;
  };
  const placeSubmarineShip = coordinate => {
    let submarinePlaced = true;
    const submarineArr = [];
    submarineArr.push(coordinate);
    for (let i = 1; i < 3; i++) {
      const coord = [coordinate[0], (+coordinate[1] + i).toString()];
      submarineArr.push(coord);
    }
    const shipPlaced = humanBoard.placeShip(submarineArr);
    if (!shipPlaced) {
      submarinePlaced = false;
      return submarinePlaced;
    }
    return submarinePlaced;
  };
  const placeDestroyerShip = coordinate => {
    let destroyerPlaced = true;
    const submarineArr = [];
    submarineArr.push(coordinate);
    for (let i = 1; i < 2; i++) {
      const coord = [coordinate[0], (+coordinate[1] + i).toString()];
      submarineArr.push(coord);
    }
    const shipPlaced = humanBoard.placeShip(submarineArr);
    if (!shipPlaced) {
      destroyerPlaced = false;
      return destroyerPlaced;
    }
    return destroyerPlaced;
  };
  const placeAIShips = () => {
    placeShips(aiBoard, (0,_helpers_rotateAIBoards__WEBPACK_IMPORTED_MODULE_2__.returnRandomAIBoard)());
  };
  const players = {};
  const getPlayers = () => {
    return players;
  };
  const humanPlayer = (0,_factories_Player__WEBPACK_IMPORTED_MODULE_1__.Player)('Human', false);
  const aiPlayer = (0,_factories_Player__WEBPACK_IMPORTED_MODULE_1__.Player)('AI', true);
  players.human = humanPlayer;
  players.AI = aiPlayer;
  let currentPlayer = players.human;
  const getCurrentPlayer = () => {
    return currentPlayer;
  };
  const playRound = coordinate => {
    if (currentPlayer.getName() === players.human.getName()) {
      aiBoard.receiveAttack(coordinate);
    } else if (currentPlayer.getName() === players.AI.getName()) {
      const availableMoves = humanBoard.getAIAvailableMoves();
      const randomMove = currentPlayer.makeRandomMove(true, availableMoves);
      humanBoard.receiveAttack(randomMove);
      humanBoard.removeLastAIMove(randomMove);
    }
    switchPlayer();
    console.log(currentPlayer.getName());
  };
  const switchPlayer = () => {
    currentPlayer = currentPlayer.getName() === players.human.getName() ? currentPlayer = players.AI : currentPlayer = players.human;
  };
  const checkForWin = () => {
    let winner;
    if (currentPlayer.getName() === players.human.getName() && aiBoard.allShipsSunk()) {
      winner = currentPlayer;
      return winner;
    } else if (currentPlayer.getName() === players.AI.getName() && humanBoard.allShipsSunk()) {
      winner = currentPlayer;
      return winner;
    }
    return winner;
  };
  const resetGameState = winner => {
    humanBoard.clearGameBoard();
    aiBoard.clearGameBoard();
    humanBoard.createGameBoard();
    aiBoard.createGameBoard();
  };
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
    placeDestroyerShip
  };
};

const placeShips = (board, coordinatesObj) => {
  const shipCoordinatesArr = Object.values(coordinatesObj);
  shipCoordinatesArr.forEach(shipCoordinates => {
    board.placeShip(shipCoordinates);
  });
};

/* const placeEachHumanShip = (coordinate) => {
  humanBoard.placeShip(coordinate)
} */

/***/ }),

/***/ "./src/factories/Gameboard.js":
/*!************************************!*\
  !*** ./src/factories/Gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _helpers_arraysAreEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/arraysAreEqual */ "./src/helpers/arraysAreEqual.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ "./src/factories/Ship.js");


const Gameboard = () => {
  // eslint-disable-next-line prefer-const
  let board = [];
  const shipObjects = [];
  const missedShots = [];
  const aiAvailableMoves = [];
  const successfulShots = [];
  const rows = 9;
  const columns = 9;
  const createGameBoard = () => {
    board = [];
    for (let i = rows; i >= 0; i--) {
      board[i] = [];
      for (let j = 0; j <= columns; j++) {
        board[i].push(undefined);
        const coordinate = [i, j];
        aiAvailableMoves.push(coordinate);
      }
    }
  };

  // checks if coordinates for ship is on the
  // game board
  const validateCoordinates = coordinates => {
    let validCoordinates = true;
    coordinates.forEach(coordinate => {
      const row = coordinate[0];
      const column = coordinate[1];
      if (row > 9 || row < 0) {
        validCoordinates = false;
        return validCoordinates;
      } else if (column > 9 || column < 0) {
        validCoordinates = false;
        return validCoordinates;
      }
    });
    return validCoordinates;
  };

  // checks if ship coordinates overlap with already
  // placed ship coordinates for the same ship
  const checkSelfOverlap = coordinates => {
    let coordinatesOverlap = false;
    let prevCoordinate;
    coordinates.forEach((coordinate, index) => {
      if (index > 0) {
        if ((0,_helpers_arraysAreEqual__WEBPACK_IMPORTED_MODULE_0__.arraysAreEqual)(prevCoordinate, coordinate)) {
          coordinatesOverlap = true;
          return coordinatesOverlap;
        }
        prevCoordinate = coordinate;
      }
      prevCoordinate = coordinate;
    });
    return coordinatesOverlap;
  };

  // Should prevent a ship from being
  // placed on top of another ship
  const checkOverlapWithOtherShips = coordinates => {
    let shipsOverlap = false;
    coordinates.forEach(coordinate => {
      const row = coordinate[0];
      const column = coordinate[1];
      const boardCell = board[row][column];
      if (typeof boardCell === 'object') {
        shipsOverlap = true;
        return shipsOverlap;
      }
    });
    return shipsOverlap;
  };
  const placeShip = coordinates => {
    let shipPlaced = true;
    const legalCoordinates = validateCoordinates(coordinates);
    if (!legalCoordinates) {
      shipPlaced = false;
      return shipPlaced;
    }
    const overlappingCoordinates = checkSelfOverlap(coordinates);
    if (overlappingCoordinates) {
      shipPlaced = false;
      return shipPlaced;
    }
    const shipOverlapping = checkOverlapWithOtherShips(coordinates);
    if (shipOverlapping) {
      shipPlaced = false;
      return shipPlaced;
    }
    const shipLength = coordinates.length;
    const shipObject = (0,_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(shipLength, 0, false);
    shipObjects.push(shipObject);
    coordinates.forEach(coordinate => {
      const row = coordinate[0];
      const column = coordinate[1];
      board[row][column] = shipObject;
    });
    return shipPlaced;
  };

  // prevents human player from attacking previously
  // attacked coordinate
  const preventSameAttack = coordinate => {
    let alreadyAttacked = false;
    successfulShots.forEach(shot => {
      if ((0,_helpers_arraysAreEqual__WEBPACK_IMPORTED_MODULE_0__.arraysAreEqual)(coordinate, shot)) {
        alreadyAttacked = true;
        return preventSameAttack;
      }
    });
    missedShots.forEach(shot => {
      if ((0,_helpers_arraysAreEqual__WEBPACK_IMPORTED_MODULE_0__.arraysAreEqual)(coordinate, shot)) {
        alreadyAttacked = true;
        return preventSameAttack;
      }
    });
    return alreadyAttacked;
  };
  const receiveAttack = coordinates => {
    const row = coordinates[0];
    const column = coordinates[1];
    const boardCell = board[row][column];
    const shipObj = boardCell;

    // Need to check if new coordinate is already
    // inside successfulShots or missedShots
    const alreadyAttacked = preventSameAttack(coordinates);
    if (alreadyAttacked) {
      return false;
    }
    if (typeof boardCell === 'object') {
      shipObj.hit();
      successfulShots.push(coordinates);
    } else if (typeof boardCell !== 'object') {
      missedShots.push(coordinates);
    }
  };
  const allShipsSunk = () => {
    let everyShipSank = true;
    shipObjects.forEach(shipObj => {
      if (!shipObj.hasBeenSunk()) {
        everyShipSank = false;
        return everyShipSank;
      }
    });
    return everyShipSank;
  };
  const removeLastAIMove = randomMove => {
    aiAvailableMoves.forEach((move, index) => {
      if ((0,_helpers_arraysAreEqual__WEBPACK_IMPORTED_MODULE_0__.arraysAreEqual)(move, randomMove)) {
        aiAvailableMoves.splice(index, 1);
      }
    });
  };
  const clearGameBoard = () => {
    shipObjects.length = 0;
    missedShots.length = 0;
    aiAvailableMoves.length = 0;
    successfulShots.length = 0;
  };
  const getBoard = () => {
    return board;
  };
  const getMissedShots = () => {
    return missedShots;
  };
  const getSuccessfulShots = () => {
    return successfulShots;
  };
  const getShipObjects = () => {
    return shipObjects;
  };
  const getAIAvailableMoves = () => {
    return aiAvailableMoves;
  };
  return {
    createGameBoard,
    getBoard,
    placeShip,
    receiveAttack,
    clearGameBoard,
    getMissedShots,
    getSuccessfulShots,
    allShipsSunk,
    getAIAvailableMoves,
    validateCoordinates,
    preventSameAttack,
    checkSelfOverlap,
    getShipObjects,
    removeLastAIMove,
    checkOverlapWithOtherShips
  };
};

/***/ }),

/***/ "./src/factories/Player.js":
/*!*********************************!*\
  !*** ./src/factories/Player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
const Player = (name, isAI) => {
  // Used to make AI select random, legal coordinate
  // on players game board
  const makeRandomMove = (isAI, availableMoves) => {
    if (!isAI || availableMoves.length === 0) {
      return undefined;
    }
    const availableMovesLength = availableMoves.length;
    const randomArrIndex = Math.floor(Math.random() * availableMovesLength);
    const randomCoordinate = availableMoves[randomArrIndex];
    return randomCoordinate;
  };
  const getName = () => {
    return name;
  };
  return {
    makeRandomMove,
    getName
  };
};

/***/ }),

/***/ "./src/factories/Ship.js":
/*!*******************************!*\
  !*** ./src/factories/Ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
const Ship = (length, numOfHits, isSunk) => {
  // Increase number of hits in ship by 1
  const hit = () => {
    if (numOfHits === length) {
      return;
    }
    numOfHits++;
    return numOfHits;
  };

  // Determine if the ship object has been sunk
  const hasBeenSunk = () => {
    let isSunk = false;
    if (length === numOfHits) {
      isSunk = true;
      return isSunk;
    }
    return isSunk;
  };
  const getNumOfHits = () => {
    return numOfHits;
  };
  const getLength = () => {
    return length;
  };
  return {
    hit,
    hasBeenSunk,
    getNumOfHits,
    getLength
  };
};

/***/ }),

/***/ "./src/helpers/arraysAreEqual.js":
/*!***************************************!*\
  !*** ./src/helpers/arraysAreEqual.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arraysAreEqual": () => (/* binding */ arraysAreEqual)
/* harmony export */ });
const arraysAreEqual = (arr1, arr2) => {
  if (arr1 === null || arr2 === null) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

/***/ }),

/***/ "./src/helpers/rotateAIBoards.js":
/*!***************************************!*\
  !*** ./src/helpers/rotateAIBoards.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "returnRandomAIBoard": () => (/* binding */ returnRandomAIBoard)
/* harmony export */ });
const returnRandomAIBoard = () => {
  const aiBoards = [aiShipCoordsOne, aiShipCoordsTwo, aiShipCoordsThree];
  const randomIndex = Math.floor(Math.random() * 3);
  const chosenAIBoard = Object.values(aiBoards[randomIndex]);
  return chosenAIBoard;
};
const aiShipCoordsOne = {
  carrier: [[9, 0], [9, 1], [9, 2], [9, 3], [9, 4]],
  battleship: [[5, 5], [6, 5], [7, 5], [8, 5]],
  cruiser: [[0, 6], [1, 6], [2, 6]],
  submarine: [[3, 8], [4, 8], [5, 8]],
  destroyer: [[0, 9], [1, 9]]
};
const aiShipCoordsTwo = {
  carrier: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]],
  battleship: [[9, 5], [9, 6], [9, 7], [9, 8]],
  cruiser: [[2, 2], [3, 2], [4, 2]],
  submarine: [[6, 6], [6, 7], [6, 8]],
  destroyer: [[8, 0], [8, 1]]
};
const aiShipCoordsThree = {
  carrier: [[5, 0], [5, 1], [5, 2], [5, 3], [5, 4]],
  battleship: [[0, 9], [1, 9], [2, 9], [3, 9]],
  cruiser: [[7, 7], [8, 7], [9, 7]],
  submarine: [[1, 1], [2, 1], [3, 1]],
  destroyer: [[4, 4], [4, 5]]
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n    line-height: 1.15;\n    /* 1 */\n    -webkit-text-size-adjust: 100%;\n    /* 2 */\n}\n\n/* Apply border box to entire document */\n* {\n    box-sizing: border-box;\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n    margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n    display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n    box-sizing: content-box;\n    /* 1 */\n    height: 0;\n    /* 1 */\n    overflow: visible;\n    /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n    background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n    border-bottom: none;\n    /* 1 */\n    text-decoration: underline;\n    /* 2 */\n    text-decoration: underline dotted;\n    /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\nsup {\n    top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n    border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\ninput {\n    -webkit-appearance: none;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    margin: 0;\n    /* 2 */\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Give input and text area consistent look */\ninput,\ntextarea {\n    background: none;\n    border: 1px solid grey;\n    border-radius: 5px;\n    outline: none;\n    padding: 4px;\n}\n\ntextarea {\n    display: block;\n    padding: 10px;\n    margin: 10px 0 0 -10px;\n    width: 100%;\n    height: 90%;\n    border-right: 1px solid;\n    resize: none;\n    overflow: auto;\n}\n\nbutton {\n    padding: 5px;\n    font: bold 0.6em sans-serif;\n    border: 1px solid #333;\n    border-radius: 5px;\n    background: none;\n    cursor: pointer;\n}\n\nbutton:hover,\nbutton:focus {\n    outline: none;\n    /* background: #000;\n    color: #fff; */\n}\n\n/* Gets rid of default search to remove restrictions */\ninput[type='search'] {\n    appearance: none;\n}\n\n/* Fix for inconsistent display of clear \"x\" icon in search inputs across different browsers. \n  , this code removes the icon in Edge and Chrome when the input loses focus, while keeping it visible in Safari. */\ninput[type='search']:not(:focus, :active)::-webkit-search-cancel-button {\n    display: none;\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n    /* 1 */\n    overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n    /* 1 */\n    text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n    -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\n::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n    padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n    box-sizing: border-box;\n    /* 1 */\n    color: inherit;\n    /* 2 */\n    display: table;\n    /* 1 */\n    max-width: 100%;\n    /* 1 */\n    padding: 0;\n    /* 3 */\n    white-space: normal;\n    /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n    vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n    overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type='checkbox'],\n[type='radio'] {\n    box-sizing: border-box;\n    /* 1 */\n    padding: 4px;\n    /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type='search'] {\n    -webkit-appearance: textfield;\n    /* 1 */\n    outline-offset: -2px;\n    /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type='search']::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    /* 1 */\n    font: inherit;\n    /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n    display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n    display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n    display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/styles/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;IACI,iBAAiB;IACjB,MAAM;IACN,8BAA8B;IAC9B,MAAM;AACV;;AAEA,wCAAwC;AACxC;IACI,sBAAsB;AAC1B;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;IACI,SAAS;AACb;;AAEA;;IAEI;;AAEJ;IACI,cAAc;AAClB;;AAEA;;;IAGI;;AAEJ;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;iFACiF;;AAEjF;;;IAGI;;AAEJ;IACI,uBAAuB;IACvB,MAAM;IACN,SAAS;IACT,MAAM;IACN,iBAAiB;IACjB,MAAM;AACV;;AAEA;;;IAGI;;AAEJ;IACI,iCAAiC;IACjC,MAAM;IACN,cAAc;IACd,MAAM;AACV;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;IACI,6BAA6B;AACjC;;AAEA;;;IAGI;;AAEJ;IACI,mBAAmB;IACnB,MAAM;IACN,0BAA0B;IAC1B,MAAM;IACN,iCAAiC;IACjC,MAAM;AACV;;AAEA;;IAEI;;AAEJ;;IAEI,mBAAmB;AACvB;;AAEA;;;IAGI;;AAEJ;;;IAGI,iCAAiC;IACjC,MAAM;IACN,cAAc;IACd,MAAM;AACV;;AAEA;;IAEI;;AAEJ;IACI,cAAc;AAClB;;AAEA;;;IAGI;;AAEJ;;IAEI,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;IACI,kBAAkB;AACtB;;AAEA;iFACiF;;AAEjF;;;IAGI;;AAEJ;IACI,wBAAwB;AAC5B;;AAEA;;;;;IAKI,oBAAoB;IACpB,MAAM;IACN,eAAe;IACf,MAAM;IACN,iBAAiB;IACjB,MAAM;IACN,SAAS;IACT,MAAM;IACN,UAAU;IACV,sBAAsB;AAC1B;;AAEA,6CAA6C;AAC7C;;IAEI,gBAAgB;IAChB,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,WAAW;IACX,uBAAuB;IACvB,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,2BAA2B;IAC3B,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb;kBACc;AAClB;;AAEA,sDAAsD;AACtD;IACI,gBAAgB;AACpB;;AAEA;mHACmH;AACnH;IACI,aAAa;AACjB;;AAEA;;;IAGI;;AAEJ;;IAEI,MAAM;IACN,iBAAiB;AACrB;;AAEA;;;IAGI;;AAEJ;;IAEI,MAAM;IACN,oBAAoB;AACxB;;AAEA;;IAEI;;AAEJ;;;;IAII,0BAA0B;AAC9B;;AAEA;;IAEI;;AAEJ;;;;IAII,kBAAkB;IAClB,UAAU;AACd;;AAEA;;IAEI;;AAEJ;;;;IAII,8BAA8B;AAClC;;AAEA;;IAEI;;AAEJ;IACI,8BAA8B;AAClC;;AAEA;;;;;IAKI;;AAEJ;IACI,sBAAsB;IACtB,MAAM;IACN,cAAc;IACd,MAAM;IACN,cAAc;IACd,MAAM;IACN,eAAe;IACf,MAAM;IACN,UAAU;IACV,MAAM;IACN,mBAAmB;IACnB,MAAM;AACV;;AAEA;;IAEI;;AAEJ;IACI,wBAAwB;AAC5B;;AAEA;;IAEI;;AAEJ;IACI,cAAc;AAClB;;AAEA;;;IAGI;;AAEJ;;IAEI,sBAAsB;IACtB,MAAM;IACN,YAAY;IACZ,MAAM;AACV;;AAEA;;IAEI;;AAEJ;;IAEI,YAAY;AAChB;;AAEA;;;IAGI;;AAEJ;IACI,6BAA6B;IAC7B,MAAM;IACN,oBAAoB;IACpB,MAAM;AACV;;AAEA;;IAEI;;AAEJ;IACI,wBAAwB;AAC5B;;AAEA;;;IAGI;;AAEJ;IACI,0BAA0B;IAC1B,MAAM;IACN,aAAa;IACb,MAAM;AACV;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;IACI,cAAc;AAClB;;AAEA;;IAEI;;AAEJ;IACI,kBAAkB;AACtB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;IACI,aAAa;AACjB;;AAEA;;IAEI;;AAEJ;IACI,aAAa;AACjB","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n    line-height: 1.15;\n    /* 1 */\n    -webkit-text-size-adjust: 100%;\n    /* 2 */\n}\n\n/* Apply border box to entire document */\n* {\n    box-sizing: border-box;\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n    margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n    display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n    box-sizing: content-box;\n    /* 1 */\n    height: 0;\n    /* 1 */\n    overflow: visible;\n    /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n    background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n    border-bottom: none;\n    /* 1 */\n    text-decoration: underline;\n    /* 2 */\n    text-decoration: underline dotted;\n    /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\nsup {\n    top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n    border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\ninput {\n    -webkit-appearance: none;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    margin: 0;\n    /* 2 */\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Give input and text area consistent look */\ninput,\ntextarea {\n    background: none;\n    border: 1px solid grey;\n    border-radius: 5px;\n    outline: none;\n    padding: 4px;\n}\n\ntextarea {\n    display: block;\n    padding: 10px;\n    margin: 10px 0 0 -10px;\n    width: 100%;\n    height: 90%;\n    border-right: 1px solid;\n    resize: none;\n    overflow: auto;\n}\n\nbutton {\n    padding: 5px;\n    font: bold 0.6em sans-serif;\n    border: 1px solid #333;\n    border-radius: 5px;\n    background: none;\n    cursor: pointer;\n}\n\nbutton:hover,\nbutton:focus {\n    outline: none;\n    /* background: #000;\n    color: #fff; */\n}\n\n/* Gets rid of default search to remove restrictions */\ninput[type='search'] {\n    appearance: none;\n}\n\n/* Fix for inconsistent display of clear \"x\" icon in search inputs across different browsers. \n  , this code removes the icon in Edge and Chrome when the input loses focus, while keeping it visible in Safari. */\ninput[type='search']:not(:focus, :active)::-webkit-search-cancel-button {\n    display: none;\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n    /* 1 */\n    overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n    /* 1 */\n    text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n    -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\n::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n    padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n    box-sizing: border-box;\n    /* 1 */\n    color: inherit;\n    /* 2 */\n    display: table;\n    /* 1 */\n    max-width: 100%;\n    /* 1 */\n    padding: 0;\n    /* 3 */\n    white-space: normal;\n    /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n    vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n    overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type='checkbox'],\n[type='radio'] {\n    box-sizing: border-box;\n    /* 1 */\n    padding: 4px;\n    /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type='search'] {\n    -webkit-appearance: textfield;\n    /* 1 */\n    outline-offset: -2px;\n    /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type='search']::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    /* 1 */\n    font: inherit;\n    /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n    display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n    display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n    display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    width: 100vw;\n    overflow-x: hidden;\n}\n\nheader {\n    background-color: darkblue;\n    color: rgb(236, 236, 236);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 80px;\n}\n\n.headerContainer {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\nmain {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.topBarContainer {\n    outline: 1px solid black;\n    width: 75vw;\n    height: 80px;\n    margin-top: 24px;\n    display: flex;\n    gap: 10px;\n}\n\nbutton.shipCell {\n    background-color: grey;\n}\n\n#AIBoard button,\n#playerBoard button {\n    border-radius: 0;\n}\n\n#boardsContainer {\n    display: flex;\n    justify-content: center;\n    gap: 12px;\n    outline: 1px solid black;\n    padding: 12px;\n    display: grid;\n    grid-template-rows: none;\n    grid-template-columns: 1fr 1fr;\n    width: 91vw;\n}\n\n#boardsContainer p {\n    justify-self: center;\n}\n\n#playerBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 54px);\n\n}\n\n#AIBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 54px);\n\n\n}\n\n/* button.boardCell {\n    border: 1px solid black;\n    border-radius: 0px;\n} */\n\nbutton.shipCell {\n    background-color: grey;\n    border: 1px solid black;\n}\n\nbutton.shipHit {\n    background-color: rgb(22, 94, 22);\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;IAC1B,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,OAAO;IACP,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,wBAAwB;IACxB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,wBAAwB;IACxB,aAAa;IACb,aAAa;IACb,wBAAwB;IACxB,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,oCAAoC;;AAExC;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,oCAAoC;;;AAGxC;;AAEA;;;GAGG;;AAEH;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,iCAAiC;AACrC","sourcesContent":["body {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    width: 100vw;\n    overflow-x: hidden;\n}\n\nheader {\n    background-color: darkblue;\n    color: rgb(236, 236, 236);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 80px;\n}\n\n.headerContainer {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\nmain {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.topBarContainer {\n    outline: 1px solid black;\n    width: 75vw;\n    height: 80px;\n    margin-top: 24px;\n    display: flex;\n    gap: 10px;\n}\n\nbutton.shipCell {\n    background-color: grey;\n}\n\n#AIBoard button,\n#playerBoard button {\n    border-radius: 0;\n}\n\n#boardsContainer {\n    display: flex;\n    justify-content: center;\n    gap: 12px;\n    outline: 1px solid black;\n    padding: 12px;\n    display: grid;\n    grid-template-rows: none;\n    grid-template-columns: 1fr 1fr;\n    width: 91vw;\n}\n\n#boardsContainer p {\n    justify-self: center;\n}\n\n#playerBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 54px);\n\n}\n\n#AIBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 54px);\n\n\n}\n\n/* button.boardCell {\n    border: 1px solid black;\n    border-radius: 0px;\n} */\n\nbutton.shipCell {\n    background-color: grey;\n    border: 1px solid black;\n}\n\nbutton.shipHit {\n    background-color: rgb(22, 94, 22);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/normalize.css":
/*!**********************************!*\
  !*** ./src/styles/normalize.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/displayController */ "./src/controllers/displayController.js");
/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/normalize.css */ "./src/styles/normalize.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");



(0,_controllers_displayController__WEBPACK_IMPORTED_MODULE_0__.preGameSetup)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFVBQVUsRUFBRSxDQUNWLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLE9BQU8sRUFBRSxDQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFNBQVMsRUFBRSxDQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFNBQVMsRUFBRSxDQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVWLENBQUM7QUFFRCxNQUFNOEUsZUFBZSxHQUFHO0VBQ3RCbEYsT0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7RUFDREMsVUFBVSxFQUFFLENBQ1YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7RUFDREMsT0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7RUFDREMsU0FBUyxFQUFFLENBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7RUFDREMsU0FBUyxFQUFFLENBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRVYsQ0FBQztBQUVELE1BQU0rRSxpQkFBaUIsR0FBRztFQUN4Qm5GLE9BQU8sRUFBRSxDQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFVBQVUsRUFBRSxDQUNWLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLE9BQU8sRUFBRSxDQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFNBQVMsRUFBRSxDQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFNBQVMsRUFBRSxDQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVWLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9GRDtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsdVdBQXVXLHdCQUF3QixrREFBa0QsZ0JBQWdCLGtEQUFrRCw2QkFBNkIsR0FBRyxvS0FBb0ssZ0JBQWdCLEdBQUcsNEVBQTRFLHFCQUFxQixHQUFHLDRKQUE0SixxQkFBcUIsdUJBQXVCLEdBQUcsNE5BQTROLDhCQUE4Qiw2QkFBNkIscUNBQXFDLGdCQUFnQiw2SkFBNkosd0NBQXdDLGtDQUFrQyxnQkFBZ0IsK0xBQStMLG9DQUFvQyxHQUFHLGdLQUFnSywwQkFBMEIsOENBQThDLHFEQUFxRCxnQkFBZ0IsNkZBQTZGLDBCQUEwQixHQUFHLDJLQUEySyx3Q0FBd0Msa0NBQWtDLGdCQUFnQiwwRUFBMEUscUJBQXFCLEdBQUcsMEhBQTBILHFCQUFxQixxQkFBcUIseUJBQXlCLCtCQUErQixHQUFHLFNBQVMsc0JBQXNCLEdBQUcsU0FBUyxrQkFBa0IsR0FBRywyTEFBMkwseUJBQXlCLEdBQUcsNE5BQTROLCtCQUErQixHQUFHLG1EQUFtRCwyQkFBMkIsbUNBQW1DLHFDQUFxQyw2QkFBNkIsOEJBQThCLDZCQUE2QixHQUFHLHNFQUFzRSx1QkFBdUIsNkJBQTZCLHlCQUF5QixvQkFBb0IsbUJBQW1CLEdBQUcsY0FBYyxxQkFBcUIsb0JBQW9CLDZCQUE2QixrQkFBa0Isa0JBQWtCLDhCQUE4QixtQkFBbUIscUJBQXFCLEdBQUcsWUFBWSxtQkFBbUIsa0NBQWtDLDZCQUE2Qix5QkFBeUIsdUJBQXVCLHNCQUFzQixHQUFHLGlDQUFpQyxvQkFBb0IsMEJBQTBCLG1CQUFtQixLQUFLLG1GQUFtRix1QkFBdUIsR0FBRyxxU0FBcVMsb0JBQW9CLEdBQUcscUdBQXFHLHFDQUFxQyxHQUFHLDBLQUEwSyx3Q0FBd0MsR0FBRyx1SkFBdUosaUNBQWlDLEdBQUcsdU1BQXVNLHlCQUF5QixpQkFBaUIsR0FBRyxzTUFBc00scUNBQXFDLEdBQUcsa0VBQWtFLHFDQUFxQyxHQUFHLGtSQUFrUiw2QkFBNkIsa0NBQWtDLGtDQUFrQyxtQ0FBbUMsOEJBQThCLHVDQUF1QyxnQkFBZ0Isb0dBQW9HLCtCQUErQixHQUFHLG1GQUFtRixxQkFBcUIsR0FBRywwSUFBMEksNkJBQTZCLGdDQUFnQyxnQkFBZ0Isd0xBQXdMLG1CQUFtQixHQUFHLDJJQUEySSxvQ0FBb0Msd0NBQXdDLGdCQUFnQiw0SEFBNEgsK0JBQStCLEdBQUcsbUxBQW1MLGlDQUFpQyxpQ0FBaUMsZ0JBQWdCLDRMQUE0TCxxQkFBcUIsR0FBRyx5RUFBeUUseUJBQXlCLEdBQUcsb0tBQW9LLG9CQUFvQixHQUFHLG9FQUFvRSxvQkFBb0IsR0FBRyxPQUFPLG1HQUFtRyxNQUFNLFFBQVEsUUFBUSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxRQUFRLFFBQVEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sT0FBTyxNQUFNLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLEtBQUssWUFBWSxPQUFPLFNBQVMsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsS0FBSyxNQUFNLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sU0FBUyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE9BQU8sT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLHVWQUF1Vix3QkFBd0Isa0RBQWtELGdCQUFnQixrREFBa0QsNkJBQTZCLEdBQUcsb0tBQW9LLGdCQUFnQixHQUFHLDRFQUE0RSxxQkFBcUIsR0FBRyw0SkFBNEoscUJBQXFCLHVCQUF1QixHQUFHLDROQUE0Tiw4QkFBOEIsNkJBQTZCLHFDQUFxQyxnQkFBZ0IsNkpBQTZKLHdDQUF3QyxrQ0FBa0MsZ0JBQWdCLCtMQUErTCxvQ0FBb0MsR0FBRyxnS0FBZ0ssMEJBQTBCLDhDQUE4QyxxREFBcUQsZ0JBQWdCLDZGQUE2RiwwQkFBMEIsR0FBRywyS0FBMkssd0NBQXdDLGtDQUFrQyxnQkFBZ0IsMEVBQTBFLHFCQUFxQixHQUFHLDBIQUEwSCxxQkFBcUIscUJBQXFCLHlCQUF5QiwrQkFBK0IsR0FBRyxTQUFTLHNCQUFzQixHQUFHLFNBQVMsa0JBQWtCLEdBQUcsMkxBQTJMLHlCQUF5QixHQUFHLDROQUE0TiwrQkFBK0IsR0FBRyxtREFBbUQsMkJBQTJCLG1DQUFtQyxxQ0FBcUMsNkJBQTZCLDhCQUE4Qiw2QkFBNkIsR0FBRyxzRUFBc0UsdUJBQXVCLDZCQUE2Qix5QkFBeUIsb0JBQW9CLG1CQUFtQixHQUFHLGNBQWMscUJBQXFCLG9CQUFvQiw2QkFBNkIsa0JBQWtCLGtCQUFrQiw4QkFBOEIsbUJBQW1CLHFCQUFxQixHQUFHLFlBQVksbUJBQW1CLGtDQUFrQyw2QkFBNkIseUJBQXlCLHVCQUF1QixzQkFBc0IsR0FBRyxpQ0FBaUMsb0JBQW9CLDBCQUEwQixtQkFBbUIsS0FBSyxtRkFBbUYsdUJBQXVCLEdBQUcscVNBQXFTLG9CQUFvQixHQUFHLHFHQUFxRyxxQ0FBcUMsR0FBRywwS0FBMEssd0NBQXdDLEdBQUcsdUpBQXVKLGlDQUFpQyxHQUFHLHVNQUF1TSx5QkFBeUIsaUJBQWlCLEdBQUcsc01BQXNNLHFDQUFxQyxHQUFHLGtFQUFrRSxxQ0FBcUMsR0FBRyxrUkFBa1IsNkJBQTZCLGtDQUFrQyxrQ0FBa0MsbUNBQW1DLDhCQUE4Qix1Q0FBdUMsZ0JBQWdCLG9HQUFvRywrQkFBK0IsR0FBRyxtRkFBbUYscUJBQXFCLEdBQUcsMElBQTBJLDZCQUE2QixnQ0FBZ0MsZ0JBQWdCLHdMQUF3TCxtQkFBbUIsR0FBRywySUFBMkksb0NBQW9DLHdDQUF3QyxnQkFBZ0IsNEhBQTRILCtCQUErQixHQUFHLG1MQUFtTCxpQ0FBaUMsaUNBQWlDLGdCQUFnQiw0TEFBNEwscUJBQXFCLEdBQUcseUVBQXlFLHlCQUF5QixHQUFHLG9LQUFvSyxvQkFBb0IsR0FBRyxvRUFBb0Usb0JBQW9CLEdBQUcsbUJBQW1CO0FBQ242a0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELG9CQUFvQiw2QkFBNkIsd0JBQXdCLG1CQUFtQix5QkFBeUIsR0FBRyxZQUFZLGlDQUFpQyxnQ0FBZ0Msb0JBQW9CLDBCQUEwQiw4QkFBOEIsbUJBQW1CLG1CQUFtQixHQUFHLHNCQUFzQixvQkFBb0IsMEJBQTBCLGVBQWUsR0FBRyxVQUFVLG9CQUFvQiwwQkFBMEIsOEJBQThCLGNBQWMsNkJBQTZCLGdCQUFnQixHQUFHLHNCQUFzQiwrQkFBK0Isa0JBQWtCLG1CQUFtQix1QkFBdUIsb0JBQW9CLGdCQUFnQixHQUFHLHFCQUFxQiw2QkFBNkIsR0FBRywyQ0FBMkMsdUJBQXVCLEdBQUcsc0JBQXNCLG9CQUFvQiw4QkFBOEIsZ0JBQWdCLCtCQUErQixvQkFBb0Isb0JBQW9CLCtCQUErQixxQ0FBcUMsa0JBQWtCLEdBQUcsd0JBQXdCLDJCQUEyQixHQUFHLGtCQUFrQiwrQkFBK0Isb0JBQW9CLDZDQUE2QywyQ0FBMkMsS0FBSyxjQUFjLCtCQUErQixvQkFBb0IsNkNBQTZDLDJDQUEyQyxPQUFPLHlCQUF5Qiw4QkFBOEIseUJBQXlCLElBQUksdUJBQXVCLDZCQUE2Qiw4QkFBOEIsR0FBRyxvQkFBb0Isd0NBQXdDLEdBQUcsT0FBTyx1RkFBdUYsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksZUFBZSxPQUFPLE9BQU8sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxnQ0FBZ0Msb0JBQW9CLDZCQUE2Qix3QkFBd0IsbUJBQW1CLHlCQUF5QixHQUFHLFlBQVksaUNBQWlDLGdDQUFnQyxvQkFBb0IsMEJBQTBCLDhCQUE4QixtQkFBbUIsbUJBQW1CLEdBQUcsc0JBQXNCLG9CQUFvQiwwQkFBMEIsZUFBZSxHQUFHLFVBQVUsb0JBQW9CLDBCQUEwQiw4QkFBOEIsY0FBYyw2QkFBNkIsZ0JBQWdCLEdBQUcsc0JBQXNCLCtCQUErQixrQkFBa0IsbUJBQW1CLHVCQUF1QixvQkFBb0IsZ0JBQWdCLEdBQUcscUJBQXFCLDZCQUE2QixHQUFHLDJDQUEyQyx1QkFBdUIsR0FBRyxzQkFBc0Isb0JBQW9CLDhCQUE4QixnQkFBZ0IsK0JBQStCLG9CQUFvQixvQkFBb0IsK0JBQStCLHFDQUFxQyxrQkFBa0IsR0FBRyx3QkFBd0IsMkJBQTJCLEdBQUcsa0JBQWtCLCtCQUErQixvQkFBb0IsNkNBQTZDLDJDQUEyQyxLQUFLLGNBQWMsK0JBQStCLG9CQUFvQiw2Q0FBNkMsMkNBQTJDLE9BQU8seUJBQXlCLDhCQUE4Qix5QkFBeUIsSUFBSSx1QkFBdUIsNkJBQTZCLDhCQUE4QixHQUFHLG9CQUFvQix3Q0FBd0MsR0FBRyxtQkFBbUI7QUFDN3JJO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUEwRztBQUMxRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDBGQUFPOzs7O0FBSW9EO0FBQzVFLE9BQU8saUVBQWUsMEZBQU8sSUFBSSxpR0FBYyxHQUFHLGlHQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNHd0M7QUFFVDtBQUNKO0FBRTNCdEgsNEVBQVksQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9jb250cm9sbGVycy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9jb250cm9sbGVycy9nYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9mYWN0b3JpZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2ZhY3Rvcmllcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvZmFjdG9yaWVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvaGVscGVycy9hcnJheXNBcmVFcXVhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9oZWxwZXJzL3JvdGF0ZUFJQm9hcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3M/NDNmNCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnYW1lQ29udHJvbGxlciB9IGZyb20gJy4vZ2FtZUNvbnRyb2xsZXInXG5cbmNvbnN0IGdhbWUgPSBnYW1lQ29udHJvbGxlcigpXG5cbmNvbnN0IHByZUdhbWVTZXR1cCA9ICgpID0+IHtcbiAgcmVuZGVyUGxheWVyQm9hcmQoKVxuICBwbGFjZUNhcnJpZXJTaGlwKClcbiAgcmVuZGVyQUlCb2FyZCgpXG59XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCkgPT4ge1xuICAvLyB0aGlzIGlzIHdoZXJlIHRoZSBzaGlwIHBsYWNlbWVudCB3aWxsIGhhcHBlbiBmb3IgaHVtYW4gcGxheWVyXG4gIGdhbWUucGxhY2VBSVNoaXBzKClcbiAgcmVuZGVyQUlCb2FyZCgpXG4gIGNvbnN0IGFpQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlCb2FyZCcpXG4gIGNvbnN0IHBsYXllcnMgPSBnYW1lLmdldFBsYXllcnMoKVxuICBjb25zdCBhY3RpdmVQbGF5ZXIgPSBnYW1lLmdldEN1cnJlbnRQbGF5ZXIoKVxuXG4gIGlmIChhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnMuaHVtYW4pIHtcbiAgICBhaUJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0KVxuICB9XG59XG5cbmNvbnN0IHBsYWNlQ2FycmllclNoaXAgPSAoKSA9PiB7XG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBjYXJyaWVyIHNoaXAnXG4gIGNvbnN0IGh1bWFuQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyQm9hcmQnKVxuICBodW1hbkJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2FycmllclNoaXBQbGFjZW1lbnQpXG59XG5cbmNvbnN0IHBsYWNlQmF0dGxlU2hpcCA9ICgpID0+IHtcbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXG4gIGh1bWFuQm9hcmREaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDYXJyaWVyU2hpcFBsYWNlbWVudClcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIGJhdHRsZSBzaGlwJ1xuICBodW1hbkJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQmF0dGxlU2hpcFBsYWNlbWVudClcbn1cblxuY29uc3QgcGxhY2VDcnVpc2VyID0gKCkgPT4ge1xuICBjb25zdCBodW1hbkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckJvYXJkJylcbiAgaHVtYW5Cb2FyZERpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUJhdHRsZVNoaXBQbGFjZW1lbnQpXG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBjcnVpc2VyIHNoaXAnXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDcnVpc2VyU2hpcFBsYWNlbWVudClcbn1cblxuY29uc3QgcGxhY2VTdWJtYXJpbmUgPSAoKSA9PiB7XG4gIGNvbnN0IGh1bWFuQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyQm9hcmQnKVxuICBodW1hbkJvYXJkRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ3J1aXNlclNoaXBQbGFjZW1lbnQpXG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBzdWJtYXJpbmUnXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTdWJtYXJpbmVTaGlwUGxhY2VtZW50KVxufVxuXG5jb25zdCBwbGFjZURlc3Ryb3llciA9ICgpID0+IHtcbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXG4gIGh1bWFuQm9hcmREaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTdWJtYXJpbmVTaGlwUGxhY2VtZW50KVxuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgZGVzdHJveWVyJ1xuICBodW1hbkJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRGVzdHJveWVyU2hpcFBsYWNlbWVudClcbn1cblxuY29uc3QgcmVuZGVyUGxheWVyQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZ2FtZS5nZXRIdW1hbkJvYXJkKClcbiAgY29uc3QgcGxheWVyQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyQm9hcmQnKVxuICBwbGF5ZXJCb2FyZERpdi5pbm5lckhUTUwgPSAnJ1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjdXJyZW50Um93ID0gcGxheWVyQm9hcmRbaV1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRSb3cubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYm9hcmRDZWxsJylcbiAgICAgIGJ1dHRvbi5kYXRhc2V0LnJvdyA9IGlcbiAgICAgIGJ1dHRvbi5kYXRhc2V0LmNvbHVtbiA9IGpcblxuICAgICAgcGxheWVyQm9hcmREaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCByZW5kZXJBSUJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBhaUJvYXJkID0gZ2FtZS5nZXRBSUJvYXJkKClcbiAgY29uc3QgYWlCb2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSUJvYXJkJylcbiAgYWlCb2FyZERpdi5pbm5lckhUTUwgPSAnJ1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWlCb2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnRSb3cgPSBhaUJvYXJkW2ldXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50Um93Lmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JvYXJkQ2VsbCcpXG4gICAgICBidXR0b24uZGF0YXNldC5yb3cgPSBpXG4gICAgICBidXR0b24uZGF0YXNldC5jb2x1bW4gPSBqXG4gICAgICBjb25zdCByb3cgPSBhaUJvYXJkW2ldXG4gICAgICAvLyBmb3IgdGVzdGluZywgdGhpcyBzaG93cyBBSSBib2FyZCBhdCBzdGFydFxuICAgICAgLy8gd2hpY2ggd2UgZG8gbm90IHdhbnRcbiAgICAgIGlmICh0eXBlb2Ygcm93W2pdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2hpcENlbGwnKVxuICAgICAgfVxuICAgICAgYWlCb2FyZERpdi5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHVwZGF0ZUh1bWFuQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGh1bWFuQm9hcmQgPSBnYW1lLmdldEh1bWFuQm9hcmQoKVxuICBjb25zdCBtaXNzZWRTaG90cyA9IGdhbWUuZ2V0SHVtYW5Cb2FyZE9iai5nZXRNaXNzZWRTaG90cygpXG4gIGNvbnN0IHN1Y2Nlc3NmdWxTaG90cyA9IGdhbWUuZ2V0SHVtYW5Cb2FyZE9iai5nZXRTdWNjZXNzZnVsU2hvdHMoKVxuICBjb25zdCBhbGxEb21Ob2RlcyA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckJvYXJkJykuY2hpbGROb2Rlc1xuICApXG5cbiAgbWlzc2VkU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IHNob3RbMF1cbiAgICBjb25zdCBjb2x1bW4gPSBzaG90WzFdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERvbU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YXJnZXROb2RlID0gYWxsRG9tTm9kZXNbaV0uZGF0YXNldFxuICAgICAgaWYgKCt0YXJnZXROb2RlLmNvbHVtbiA9PT0gY29sdW1uICYmICt0YXJnZXROb2RlLnJvdyA9PT0gcm93KSB7XG4gICAgICAgIGFsbERvbU5vZGVzW2ldLnRleHRDb250ZW50ID0gJ1gnXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHN1Y2Nlc3NmdWxTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XG4gICAgY29uc3Qgcm93ID0gc2hvdFswXVxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRG9tTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXVxuICAgICAgaWYgKFxuICAgICAgICArdGFyZ2V0Tm9kZS5kYXRhc2V0LmNvbHVtbiA9PT0gY29sdW1uICYmXG4gICAgICAgICt0YXJnZXROb2RlLmRhdGFzZXQucm93ID09PSByb3dcbiAgICAgICkge1xuICAgICAgICB0YXJnZXROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXBDZWxsJylcbiAgICAgICAgdGFyZ2V0Tm9kZS5jbGFzc0xpc3QuYWRkKCdzaGlwSGl0JylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5jb25zdCB1cGRhdGVBSUJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBhaUJvYXJkID0gZ2FtZS5nZXRBSUJvYXJkKClcbiAgY29uc3QgbWlzc2VkU2hvdHMgPSBnYW1lLmdldEFJQm9hcmRPYmouZ2V0TWlzc2VkU2hvdHMoKVxuICBjb25zdCBzdWNjZXNzZnVsU2hvdHMgPSBnYW1lLmdldEFJQm9hcmRPYmouZ2V0U3VjY2Vzc2Z1bFNob3RzKClcbiAgY29uc3QgYWxsRG9tTm9kZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSUJvYXJkJykuY2hpbGROb2RlcylcblxuICBtaXNzZWRTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XG4gICAgY29uc3Qgcm93ID0gc2hvdFswXVxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRG9tTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXS5kYXRhc2V0XG4gICAgICBpZiAodGFyZ2V0Tm9kZS5jb2x1bW4gPT09IGNvbHVtbiAmJiB0YXJnZXROb2RlLnJvdyA9PT0gcm93KSB7XG4gICAgICAgIGFsbERvbU5vZGVzW2ldLnRleHRDb250ZW50ID0gJ1gnXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHN1Y2Nlc3NmdWxTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XG4gICAgY29uc3Qgcm93ID0gc2hvdFswXVxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRG9tTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXVxuICAgICAgaWYgKFxuICAgICAgICB0YXJnZXROb2RlLmRhdGFzZXQuY29sdW1uID09PSBjb2x1bW4gJiZcbiAgICAgICAgdGFyZ2V0Tm9kZS5kYXRhc2V0LnJvdyA9PT0gcm93XG4gICAgICApIHtcbiAgICAgICAgdGFyZ2V0Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwQ2VsbCcpXG4gICAgICAgIHRhcmdldE5vZGUuY2xhc3NMaXN0LmFkZCgnc2hpcEhpdCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgaGFuZGxlQ2FycmllclNoaXBQbGFjZW1lbnQgPSAoZSkgPT4ge1xuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cbiAgY29uc3QgY29vcmRpbmF0ZSA9IFtzZWxlY3RlZFJvdywgc2VsZWN0ZWRDb2x1bW5dXG5cbiAgY29uc3QgY2FycmllclBsYWNlZCA9IHBsYWNlQ2Fycmllck9uQm9hcmQoY29vcmRpbmF0ZSlcblxuICBpZiAoY2FycmllclBsYWNlZCkge1xuICAgIHBsYWNlQmF0dGxlU2hpcCgpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBsYWNlQ2FycmllclNoaXBcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVCYXR0bGVTaGlwUGxhY2VtZW50ID0gKGUpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxuXG4gIGNvbnN0IGJhdHRsZXNoaXBQbGFjZWQgPSBwbGFjZUJhdHRsZXNoaXBPbkJvYXJkKGNvb3JkaW5hdGUpXG5cbiAgaWYgKGJhdHRsZXNoaXBQbGFjZWQpIHtcbiAgICBwbGFjZUNydWlzZXIoKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwbGFjZUJhdHRsZVNoaXBcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVDcnVpc2VyU2hpcFBsYWNlbWVudCA9IChlKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cblxuICBjb25zdCBjcnVpc2VyUGxhY2VkID0gcGxhY2VDcnVpc2VyT25Cb2FyZChjb29yZGluYXRlKVxuXG4gIGlmIChjcnVpc2VyUGxhY2VkKSB7XG4gICAgcGxhY2VTdWJtYXJpbmUoKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwbGFjZUNydWlzZXJcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVTdWJtYXJpbmVTaGlwUGxhY2VtZW50ID0gKGUpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxuXG4gIGNvbnN0IGNydWlzZXJQbGFjZWQgPSBwbGFjZVN1Ym1hcmluZU9uQm9hcmQoY29vcmRpbmF0ZSlcblxuICBpZiAoY3J1aXNlclBsYWNlZCkge1xuICAgIHBsYWNlRGVzdHJveWVyKClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGxhY2VTdWJtYXJpbmVcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVEZXN0cm95ZXJTaGlwUGxhY2VtZW50ID0gKGUpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxuXG4gIGNvbnN0IGRlc3Ryb3llclBsYWNlZCA9IHBsYWNlRGVzdHJveWVyT25Cb2FyZChjb29yZGluYXRlKVxuXG4gIGlmIChkZXN0cm95ZXJQbGFjZWQpIHtcbiAgICBkaXNwbGF5Q29udHJvbGxlcigpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBsYWNlRGVzdHJveWVyXG4gIH1cbn1cblxuY29uc3QgcGxhY2VDYXJyaWVyT25Cb2FyZCA9IChjb29yZGluYXRlKSA9PiB7XG4gIGNvbnN0IGNhcnJpZXJQbGFjZWQgPSBnYW1lLnBsYWNlQ2FycmllclNoaXAoY29vcmRpbmF0ZSlcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxuICBdXG4gIGlmICghY2FycmllclBsYWNlZCkge1xuICAgIHJldHVybiBjYXJyaWVyUGxhY2VkXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3RhcnRpbmdDb2x1bW4gPSBOdW1iZXIoY29vcmRpbmF0ZVsxXSlcblxuICAgIGZvciAobGV0IGkgPSBzdGFydGluZ0NvbHVtbjsgaSA8IHN0YXJ0aW5nQ29sdW1uICsgNTsgaSsrKSB7XG4gICAgICBjb25zdCByb3cgPSArY29vcmRpbmF0ZVswXVxuICAgICAgY29uc3QgY29sdW1uID0gaVxuICAgICAgY29uc3QgZG9tQ29vcmRpbmF0ZSA9IFtyb3csIGNvbHVtbl1cbiAgICAgIGNvbnN0IHRhcmdldERPTUJ0biA9IGZpbmRTaGlwRE9NQnRuKGJvYXJkRE9NQ2VsbHNBcnIsIGRvbUNvb3JkaW5hdGUpXG4gICAgICB0YXJnZXRET01CdG4uY2xhc3NMaXN0LmFkZCgnc2hpcENlbGwnKVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2FycmllclBsYWNlZFxufVxuXG5jb25zdCBwbGFjZUJhdHRsZXNoaXBPbkJvYXJkID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgY29uc3QgYmF0dGxlc2hpcFBsYWNlZCA9IGdhbWUucGxhY2VCYXR0bGVTaGlwKGNvb3JkaW5hdGUpXG4gIGNvbnN0IGJvYXJkRE9NQ2VsbHNBcnIgPSBbXG4gICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYXllckJvYXJkID4gYnV0dG9uJylcbiAgXVxuICBpZiAoIWJhdHRsZXNoaXBQbGFjZWQpIHtcbiAgICByZXR1cm4gYmF0dGxlc2hpcFBsYWNlZFxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN0YXJ0aW5nQ29sdW1uID0gTnVtYmVyKGNvb3JkaW5hdGVbMV0pXG5cbiAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdDb2x1bW47IGkgPCBzdGFydGluZ0NvbHVtbiArIDQ7IGkrKykge1xuICAgICAgY29uc3Qgcm93ID0gK2Nvb3JkaW5hdGVbMF1cbiAgICAgIGNvbnN0IGNvbHVtbiA9IGlcbiAgICAgIGNvbnN0IGRvbUNvb3JkaW5hdGUgPSBbcm93LCBjb2x1bW5dXG4gICAgICBjb25zdCB0YXJnZXRET01CdG4gPSBmaW5kU2hpcERPTUJ0bihib2FyZERPTUNlbGxzQXJyLCBkb21Db29yZGluYXRlKVxuICAgICAgdGFyZ2V0RE9NQnRuLmNsYXNzTGlzdC5hZGQoJ3NoaXBDZWxsJylcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJhdHRsZXNoaXBQbGFjZWRcbn1cblxuY29uc3QgcGxhY2VDcnVpc2VyT25Cb2FyZCA9IChjb29yZGluYXRlKSA9PiB7XG4gIGNvbnN0IGNydWlzZXJQbGFjZWQgPSBnYW1lLnBsYWNlQ3J1aXNlclNoaXAoY29vcmRpbmF0ZSlcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxuICBdXG4gIGlmICghY3J1aXNlclBsYWNlZCkge1xuICAgIHJldHVybiBjcnVpc2VyUGxhY2VkXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3RhcnRpbmdDb2x1bW4gPSBOdW1iZXIoY29vcmRpbmF0ZVsxXSlcbiAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdDb2x1bW47IGkgPCBzdGFydGluZ0NvbHVtbiArIDM7IGkrKykge1xuICAgICAgY29uc3Qgcm93ID0gK2Nvb3JkaW5hdGVbMF1cbiAgICAgIGNvbnN0IGNvbHVtbiA9IGlcbiAgICAgIGNvbnN0IGRvbUNvb3JkaW5hdGUgPSBbcm93LCBjb2x1bW5dXG4gICAgICBjb25zdCB0YXJnZXRET01CdG4gPSBmaW5kU2hpcERPTUJ0bihib2FyZERPTUNlbGxzQXJyLCBkb21Db29yZGluYXRlKVxuICAgICAgdGFyZ2V0RE9NQnRuLmNsYXNzTGlzdC5hZGQoJ3NoaXBDZWxsJylcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNydWlzZXJQbGFjZWRcbn1cblxuY29uc3QgcGxhY2VTdWJtYXJpbmVPbkJvYXJkID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgY29uc3Qgc3VibWFyaW5lUGxhY2VkID0gZ2FtZS5wbGFjZVN1Ym1hcmluZVNoaXAoY29vcmRpbmF0ZSlcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxuICBdXG4gIGlmICghc3VibWFyaW5lUGxhY2VkKSB7XG4gICAgcmV0dXJuIHN1Ym1hcmluZVBsYWNlZFxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN0YXJ0aW5nQ29sdW1uID0gTnVtYmVyKGNvb3JkaW5hdGVbMV0pXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nQ29sdW1uOyBpIDwgc3RhcnRpbmdDb2x1bW4gKyAzOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdyA9ICtjb29yZGluYXRlWzBdXG4gICAgICBjb25zdCBjb2x1bW4gPSBpXG4gICAgICBjb25zdCBkb21Db29yZGluYXRlID0gW3JvdywgY29sdW1uXVxuICAgICAgY29uc3QgdGFyZ2V0RE9NQnRuID0gZmluZFNoaXBET01CdG4oYm9hcmRET01DZWxsc0FyciwgZG9tQ29vcmRpbmF0ZSlcbiAgICAgIHRhcmdldERPTUJ0bi5jbGFzc0xpc3QuYWRkKCdzaGlwQ2VsbCcpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdWJtYXJpbmVQbGFjZWRcbn1cblxuY29uc3QgcGxhY2VEZXN0cm95ZXJPbkJvYXJkID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgY29uc3QgZGVzdHJveWVyUGxhY2VkID0gZ2FtZS5wbGFjZURlc3Ryb3llclNoaXAoY29vcmRpbmF0ZSlcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxuICBdXG4gIGlmICghZGVzdHJveWVyUGxhY2VkKSB7XG4gICAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN0YXJ0aW5nQ29sdW1uID0gTnVtYmVyKGNvb3JkaW5hdGVbMV0pXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nQ29sdW1uOyBpIDwgc3RhcnRpbmdDb2x1bW4gKyAyOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdyA9ICtjb29yZGluYXRlWzBdXG4gICAgICBjb25zdCBjb2x1bW4gPSBpXG4gICAgICBjb25zdCBkb21Db29yZGluYXRlID0gW3JvdywgY29sdW1uXVxuICAgICAgY29uc3QgdGFyZ2V0RE9NQnRuID0gZmluZFNoaXBET01CdG4oYm9hcmRET01DZWxsc0FyciwgZG9tQ29vcmRpbmF0ZSlcbiAgICAgIHRhcmdldERPTUJ0bi5jbGFzc0xpc3QuYWRkKCdzaGlwQ2VsbCcpXG4gICAgfVxuICB9XG4gIHJldHVybiBkZXN0cm95ZXJQbGFjZWRcbn1cblxuY29uc3QgZmluZFNoaXBET01CdG4gPSAoYm9hcmRET01DZWxsc0FyciwgZG9tQ29vcmRpbmF0ZSkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkRE9NQ2VsbHNBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkb21DZWxsUm93ID0gK2JvYXJkRE9NQ2VsbHNBcnJbaV0uZGF0YXNldC5yb3dcbiAgICBjb25zdCBkb21DZWxsQ29sdW1uID0gK2JvYXJkRE9NQ2VsbHNBcnJbaV0uZGF0YXNldC5jb2x1bW5cbiAgICBpZiAoZG9tQ2VsbFJvdyA9PT0gZG9tQ29vcmRpbmF0ZVswXSAmJiBkb21DZWxsQ29sdW1uID09PSBkb21Db29yZGluYXRlWzFdKSB7XG4gICAgICByZXR1cm4gYm9hcmRET01DZWxsc0FycltpXVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnQgPSAoZSkgPT4ge1xuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cbiAgY29uc3QgYWlCb2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSUJvYXJkJylcblxuICBpZiAoIXNlbGVjdGVkQ29sdW1uIHx8ICFzZWxlY3RlZFJvdykge1xuICAgIHJldHVybiBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnRcbiAgfVxuXG4gIGNvbnN0IGFpQm9hcmQgPSBnYW1lLmdldEFJQm9hcmRPYmpcbiAgY29uc3QgY29vcmRpbmF0ZSA9IFtzZWxlY3RlZFJvdywgc2VsZWN0ZWRDb2x1bW5dXG4gIGNvbnN0IGFscmVhZHlBdHRhY2tlZCA9IGFpQm9hcmQucHJldmVudFNhbWVBdHRhY2soY29vcmRpbmF0ZSlcbiAgaWYgKGFscmVhZHlBdHRhY2tlZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgZ2FtZS5wbGF5Um91bmQoY29vcmRpbmF0ZSlcbiAgY29uc3QgaHVtYW5XaW5zID0gZ2FtZS5jaGVja0ZvcldpbigpXG5cbiAgdXBkYXRlQUlCb2FyZCgpXG4gIGlmIChodW1hbldpbnMpIHtcbiAgICBhaUJvYXJkRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0KVxuICAgIGdhbWUucmVzZXRHYW1lU3RhdGUoKVxuICAgIGFubm91bmNlV2lubmVyKGh1bWFuV2lucylcbiAgICBwbGF5QWdhaW4oKVxuICB9XG4gIGhhbmRsZUFJTW92ZShhaUJvYXJkRGl2KVxufVxuXG5jb25zdCBoYW5kbGVBSU1vdmUgPSAoYWlCb2FyZERpdikgPT4ge1xuICBnYW1lLnBsYXlSb3VuZCgpXG4gIGNvbnN0IGFpV2lucyA9IGdhbWUuY2hlY2tGb3JXaW4oKVxuXG4gIHVwZGF0ZUh1bWFuQm9hcmQoKVxuICBpZiAoYWlXaW5zKSB7XG4gICAgYWlCb2FyZERpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dClcbiAgICBnYW1lLnJlc2V0R2FtZVN0YXRlKClcbiAgICBhbm5vdW5jZVdpbm5lcihhaVdpbnMpXG4gICAgcGxheUFnYWluKClcbiAgfVxufVxuXG5jb25zdCBhbm5vdW5jZVdpbm5lciA9ICh3aW5uZXIpID0+IHtcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgY29uc3Qgd2lubmVyTmFtZSA9IHdpbm5lci5nZXROYW1lKClcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9IGAke3dpbm5lck5hbWV9IHdpbidzIWBcbn1cblxuY29uc3QgcGxheUFnYWluID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyJylcbiAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgcGxheUFnYWluQnRuLnRleHRDb250ZW50ID0gJ1BsYXkgYWdhaW4nXG4gIHRvcEJhckRpdi5hcHBlbmRDaGlsZChwbGF5QWdhaW5CdG4pXG4gIHBsYXlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0TmV3R2FtZSlcbn1cblxuY29uc3Qgc3RhcnROZXdHYW1lID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyJylcbiAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IGJ1dHRvbicpXG4gIHRvcEJhckRpdi5yZW1vdmVDaGlsZChwbGF5QWdhaW5CdG4pXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJykudGV4dENvbnRlbnQgPSAnJ1xuICBkaXNwbGF5Q29udHJvbGxlcigpXG59XG5cbi8vIGNvbnN0IGhhbmRsZVBsYXllclNlbGV0aW9uXG5cbmV4cG9ydCB7IHJlbmRlclBsYXllckJvYXJkLCByZW5kZXJBSUJvYXJkLCBkaXNwbGF5Q29udHJvbGxlciwgcHJlR2FtZVNldHVwIH1cbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4uL2ZhY3Rvcmllcy9HYW1lYm9hcmQnXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi9mYWN0b3JpZXMvUGxheWVyJ1xuaW1wb3J0IHsgcmV0dXJuUmFuZG9tQUlCb2FyZCB9IGZyb20gJy4uL2hlbHBlcnMvcm90YXRlQUlCb2FyZHMnXG5cbmNvbnN0IGdhbWVDb250cm9sbGVyID0gKCkgPT4ge1xuICAvLyBDcmVhdGUgdHdvIGdhbWUgYm9hcmRzXG4gIGNvbnN0IGh1bWFuQm9hcmQgPSBHYW1lYm9hcmQoKVxuICBodW1hbkJvYXJkLmNyZWF0ZUdhbWVCb2FyZCgpXG5cbiAgY29uc3QgYWlCb2FyZCA9IEdhbWVib2FyZCgpXG4gIGFpQm9hcmQuY3JlYXRlR2FtZUJvYXJkKClcblxuICBjb25zdCBwbGF5ZXJTaGlwQ29vcmRzID0ge1xuICAgIGNhcnJpZXI6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxXSxcbiAgICAgIFswLCAyXSxcbiAgICAgIFswLCAzXSxcbiAgICAgIFswLCA0XVxuICAgIF0sXG4gICAgYmF0dGxlc2hpcDogW1xuICAgICAgWzIsIDJdLFxuICAgICAgWzIsIDNdLFxuICAgICAgWzIsIDRdLFxuICAgICAgWzIsIDVdXG4gICAgXSxcbiAgICBjcnVpc2VyOiBbXG4gICAgICBbNCwgMF0sXG4gICAgICBbNSwgMF0sXG4gICAgICBbNiwgMF1cbiAgICBdLFxuICAgIHN1Ym1hcmluZTogW1xuICAgICAgWzcsIDFdLFxuICAgICAgWzcsIDJdLFxuICAgICAgWzcsIDNdXG4gICAgXSxcbiAgICBkZXN0cm95ZXI6IFtcbiAgICAgIFsxLCAwXSxcbiAgICAgIFsyLCAwXVxuICAgIF1cbiAgfVxuXG4gIGNvbnN0IHBsYWNlQ2FycmllclNoaXAgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGxldCBjYXJyaWVyUGxhY2VkID0gdHJ1ZVxuICAgIGNvbnN0IGNhcnJpZXJBcnIgPSBbXVxuICAgIGNhcnJpZXJBcnIucHVzaChjb29yZGluYXRlKVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XG4gICAgICBjb25zdCBjb29yZCA9IFtjb29yZGluYXRlWzBdLCAoK2Nvb3JkaW5hdGVbMV0gKyBpKS50b1N0cmluZygpXVxuICAgICAgY2FycmllckFyci5wdXNoKGNvb3JkKVxuICAgIH1cblxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChjYXJyaWVyQXJyKVxuICAgIGlmICghc2hpcFBsYWNlZCkge1xuICAgICAgY2FycmllclBsYWNlZCA9IGZhbHNlXG4gICAgICByZXR1cm4gY2FycmllclBsYWNlZFxuICAgIH1cblxuICAgIHJldHVybiBjYXJyaWVyUGxhY2VkXG4gIH1cblxuICBjb25zdCBwbGFjZUJhdHRsZVNoaXAgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGxldCBiYXR0bGVzaGlwUGxhY2VkID0gdHJ1ZVxuICAgIGNvbnN0IGJhdHRsZXNoaXBBcnIgPSBbXVxuICAgIGJhdHRsZXNoaXBBcnIucHVzaChjb29yZGluYXRlKVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XG4gICAgICBjb25zdCBjb29yZCA9IFtjb29yZGluYXRlWzBdLCAoK2Nvb3JkaW5hdGVbMV0gKyBpKS50b1N0cmluZygpXVxuICAgICAgYmF0dGxlc2hpcEFyci5wdXNoKGNvb3JkKVxuICAgIH1cblxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChiYXR0bGVzaGlwQXJyKVxuICAgIGlmICghc2hpcFBsYWNlZCkge1xuICAgICAgYmF0dGxlc2hpcFBsYWNlZCA9IGZhbHNlXG4gICAgICByZXR1cm4gYmF0dGxlc2hpcFBsYWNlZFxuICAgIH1cblxuICAgIHJldHVybiBiYXR0bGVzaGlwUGxhY2VkXG4gIH1cblxuICBjb25zdCBwbGFjZUNydWlzZXJTaGlwID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICBsZXQgY3J1aXNlclBsYWNlZCA9IHRydWVcbiAgICBjb25zdCBjcnVpc2VyQXJyID0gW11cbiAgICBjcnVpc2VyQXJyLnB1c2goY29vcmRpbmF0ZSlcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xuICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cbiAgICAgIGNydWlzZXJBcnIucHVzaChjb29yZClcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwUGxhY2VkID0gaHVtYW5Cb2FyZC5wbGFjZVNoaXAoY3J1aXNlckFycilcbiAgICBpZiAoIXNoaXBQbGFjZWQpIHtcbiAgICAgIGNydWlzZXJQbGFjZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIGNydWlzZXJQbGFjZWRcbiAgICB9XG5cbiAgICByZXR1cm4gY3J1aXNlclBsYWNlZFxuICB9XG5cbiAgY29uc3QgcGxhY2VTdWJtYXJpbmVTaGlwID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICBsZXQgc3VibWFyaW5lUGxhY2VkID0gdHJ1ZVxuICAgIGNvbnN0IHN1Ym1hcmluZUFyciA9IFtdXG4gICAgc3VibWFyaW5lQXJyLnB1c2goY29vcmRpbmF0ZSlcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xuICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cbiAgICAgIHN1Ym1hcmluZUFyci5wdXNoKGNvb3JkKVxuICAgIH1cblxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChzdWJtYXJpbmVBcnIpXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XG4gICAgICBzdWJtYXJpbmVQbGFjZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIHN1Ym1hcmluZVBsYWNlZFxuICAgIH1cblxuICAgIHJldHVybiBzdWJtYXJpbmVQbGFjZWRcbiAgfVxuXG4gIGNvbnN0IHBsYWNlRGVzdHJveWVyU2hpcCA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgbGV0IGRlc3Ryb3llclBsYWNlZCA9IHRydWVcbiAgICBjb25zdCBzdWJtYXJpbmVBcnIgPSBbXVxuICAgIHN1Ym1hcmluZUFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAyOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvb3JkID0gW2Nvb3JkaW5hdGVbMF0sICgrY29vcmRpbmF0ZVsxXSArIGkpLnRvU3RyaW5nKCldXG4gICAgICBzdWJtYXJpbmVBcnIucHVzaChjb29yZClcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwUGxhY2VkID0gaHVtYW5Cb2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lQXJyKVxuICAgIGlmICghc2hpcFBsYWNlZCkge1xuICAgICAgZGVzdHJveWVyUGxhY2VkID0gZmFsc2VcbiAgICAgIHJldHVybiBkZXN0cm95ZXJQbGFjZWRcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzdHJveWVyUGxhY2VkXG4gIH1cblxuICBjb25zdCBwbGFjZUFJU2hpcHMgPSAoKSA9PiB7XG4gICAgcGxhY2VTaGlwcyhhaUJvYXJkLCByZXR1cm5SYW5kb21BSUJvYXJkKCkpXG4gIH1cblxuICBjb25zdCBwbGF5ZXJzID0ge31cblxuICBjb25zdCBnZXRQbGF5ZXJzID0gKCkgPT4ge1xuICAgIHJldHVybiBwbGF5ZXJzXG4gIH1cblxuICBjb25zdCBodW1hblBsYXllciA9IFBsYXllcignSHVtYW4nLCBmYWxzZSlcbiAgY29uc3QgYWlQbGF5ZXIgPSBQbGF5ZXIoJ0FJJywgdHJ1ZSlcbiAgcGxheWVycy5odW1hbiA9IGh1bWFuUGxheWVyXG4gIHBsYXllcnMuQUkgPSBhaVBsYXllclxuXG4gIGxldCBjdXJyZW50UGxheWVyID0gcGxheWVycy5odW1hblxuXG4gIGNvbnN0IGdldEN1cnJlbnRQbGF5ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGN1cnJlbnRQbGF5ZXJcbiAgfVxuXG4gIGNvbnN0IHBsYXlSb3VuZCA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpID09PSBwbGF5ZXJzLmh1bWFuLmdldE5hbWUoKSkge1xuICAgICAgYWlCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpXG4gICAgfSBlbHNlIGlmIChjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5BSS5nZXROYW1lKCkpIHtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZU1vdmVzID0gaHVtYW5Cb2FyZC5nZXRBSUF2YWlsYWJsZU1vdmVzKClcbiAgICAgIGNvbnN0IHJhbmRvbU1vdmUgPSBjdXJyZW50UGxheWVyLm1ha2VSYW5kb21Nb3ZlKHRydWUsIGF2YWlsYWJsZU1vdmVzKVxuICAgICAgaHVtYW5Cb2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbU1vdmUpXG4gICAgICBodW1hbkJvYXJkLnJlbW92ZUxhc3RBSU1vdmUocmFuZG9tTW92ZSlcbiAgICB9XG5cbiAgICBzd2l0Y2hQbGF5ZXIoKVxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpKVxuICB9XG5cbiAgY29uc3Qgc3dpdGNoUGxheWVyID0gKCkgPT4ge1xuICAgIGN1cnJlbnRQbGF5ZXIgPVxuICAgICAgY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuaHVtYW4uZ2V0TmFtZSgpXG4gICAgICAgID8gKGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzLkFJKVxuICAgICAgICA6IChjdXJyZW50UGxheWVyID0gcGxheWVycy5odW1hbilcbiAgfVxuXG4gIGNvbnN0IGNoZWNrRm9yV2luID0gKCkgPT4ge1xuICAgIGxldCB3aW5uZXJcbiAgICBpZiAoXG4gICAgICBjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5odW1hbi5nZXROYW1lKCkgJiZcbiAgICAgIGFpQm9hcmQuYWxsU2hpcHNTdW5rKClcbiAgICApIHtcbiAgICAgIHdpbm5lciA9IGN1cnJlbnRQbGF5ZXJcbiAgICAgIHJldHVybiB3aW5uZXJcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuQUkuZ2V0TmFtZSgpICYmXG4gICAgICBodW1hbkJvYXJkLmFsbFNoaXBzU3VuaygpXG4gICAgKSB7XG4gICAgICB3aW5uZXIgPSBjdXJyZW50UGxheWVyXG4gICAgICByZXR1cm4gd2lubmVyXG4gICAgfVxuICAgIHJldHVybiB3aW5uZXJcbiAgfVxuXG4gIGNvbnN0IHJlc2V0R2FtZVN0YXRlID0gKHdpbm5lcikgPT4ge1xuICAgIGh1bWFuQm9hcmQuY2xlYXJHYW1lQm9hcmQoKVxuICAgIGFpQm9hcmQuY2xlYXJHYW1lQm9hcmQoKVxuICAgIGh1bWFuQm9hcmQuY3JlYXRlR2FtZUJvYXJkKClcbiAgICBhaUJvYXJkLmNyZWF0ZUdhbWVCb2FyZCgpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldEh1bWFuQm9hcmQ6IGh1bWFuQm9hcmQuZ2V0Qm9hcmQsXG4gICAgZ2V0QUlCb2FyZDogYWlCb2FyZC5nZXRCb2FyZCxcbiAgICBnZXRBSUJvYXJkT2JqOiBhaUJvYXJkLFxuICAgIGdldEh1bWFuQm9hcmRPYmo6IGh1bWFuQm9hcmQsXG4gICAgc3dpdGNoUGxheWVyLFxuICAgIHBsYXlSb3VuZCxcbiAgICBnZXRDdXJyZW50UGxheWVyLFxuICAgIHJlc2V0R2FtZVN0YXRlLFxuICAgIGNoZWNrRm9yV2luLFxuICAgIGdldFBsYXllcnMsXG4gICAgcGxhY2VBSVNoaXBzLFxuICAgIHBsYWNlQ2FycmllclNoaXAsXG4gICAgcGxhY2VCYXR0bGVTaGlwLFxuICAgIHBsYWNlQ3J1aXNlclNoaXAsXG4gICAgcGxhY2VTdWJtYXJpbmVTaGlwLFxuICAgIHBsYWNlRGVzdHJveWVyU2hpcFxuICB9XG59XG5cbmV4cG9ydCB7IGdhbWVDb250cm9sbGVyIH1cblxuY29uc3QgcGxhY2VTaGlwcyA9IChib2FyZCwgY29vcmRpbmF0ZXNPYmopID0+IHtcbiAgY29uc3Qgc2hpcENvb3JkaW5hdGVzQXJyID0gT2JqZWN0LnZhbHVlcyhjb29yZGluYXRlc09iailcbiAgc2hpcENvb3JkaW5hdGVzQXJyLmZvckVhY2goKHNoaXBDb29yZGluYXRlcykgPT4ge1xuICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwQ29vcmRpbmF0ZXMpXG4gIH0pXG59XG5cbi8qIGNvbnN0IHBsYWNlRWFjaEh1bWFuU2hpcCA9IChjb29yZGluYXRlKSA9PiB7XG4gIGh1bWFuQm9hcmQucGxhY2VTaGlwKGNvb3JkaW5hdGUpXG59ICovXG4iLCJpbXBvcnQgeyBhcnJheXNBcmVFcXVhbCB9IGZyb20gJy4uL2hlbHBlcnMvYXJyYXlzQXJlRXF1YWwnXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9TaGlwJ1xuXG5leHBvcnQgY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG4gIGxldCBib2FyZCA9IFtdXG4gIGNvbnN0IHNoaXBPYmplY3RzID0gW11cbiAgY29uc3QgbWlzc2VkU2hvdHMgPSBbXVxuICBjb25zdCBhaUF2YWlsYWJsZU1vdmVzID0gW11cbiAgY29uc3Qgc3VjY2Vzc2Z1bFNob3RzID0gW11cbiAgY29uc3Qgcm93cyA9IDlcbiAgY29uc3QgY29sdW1ucyA9IDlcblxuICBjb25zdCBjcmVhdGVHYW1lQm9hcmQgPSAoKSA9PiB7XG4gICAgYm9hcmQgPSBbXVxuICAgIGZvciAobGV0IGkgPSByb3dzOyBpID49IDA7IGktLSkge1xuICAgICAgYm9hcmRbaV0gPSBbXVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gY29sdW1uczsgaisrKSB7XG4gICAgICAgIGJvYXJkW2ldLnB1c2godW5kZWZpbmVkKVxuICAgICAgICBjb25zdCBjb29yZGluYXRlID0gW2ksIGpdXG4gICAgICAgIGFpQXZhaWxhYmxlTW92ZXMucHVzaChjb29yZGluYXRlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGNoZWNrcyBpZiBjb29yZGluYXRlcyBmb3Igc2hpcCBpcyBvbiB0aGVcbiAgLy8gZ2FtZSBib2FyZFxuICBjb25zdCB2YWxpZGF0ZUNvb3JkaW5hdGVzID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgbGV0IHZhbGlkQ29vcmRpbmF0ZXMgPSB0cnVlXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZVswXVxuICAgICAgY29uc3QgY29sdW1uID0gY29vcmRpbmF0ZVsxXVxuICAgICAgaWYgKHJvdyA+IDkgfHwgcm93IDwgMCkge1xuICAgICAgICB2YWxpZENvb3JkaW5hdGVzID0gZmFsc2VcbiAgICAgICAgcmV0dXJuIHZhbGlkQ29vcmRpbmF0ZXNcbiAgICAgIH0gZWxzZSBpZiAoY29sdW1uID4gOSB8fCBjb2x1bW4gPCAwKSB7XG4gICAgICAgIHZhbGlkQ29vcmRpbmF0ZXMgPSBmYWxzZVxuICAgICAgICByZXR1cm4gdmFsaWRDb29yZGluYXRlc1xuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gdmFsaWRDb29yZGluYXRlc1xuICB9XG5cbiAgLy8gY2hlY2tzIGlmIHNoaXAgY29vcmRpbmF0ZXMgb3ZlcmxhcCB3aXRoIGFscmVhZHlcbiAgLy8gcGxhY2VkIHNoaXAgY29vcmRpbmF0ZXMgZm9yIHRoZSBzYW1lIHNoaXBcbiAgY29uc3QgY2hlY2tTZWxmT3ZlcmxhcCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGxldCBjb29yZGluYXRlc092ZXJsYXAgPSBmYWxzZVxuICAgIGxldCBwcmV2Q29vcmRpbmF0ZVxuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgIGlmIChhcnJheXNBcmVFcXVhbChwcmV2Q29vcmRpbmF0ZSwgY29vcmRpbmF0ZSkpIHtcbiAgICAgICAgICBjb29yZGluYXRlc092ZXJsYXAgPSB0cnVlXG4gICAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzT3ZlcmxhcFxuICAgICAgICB9XG4gICAgICAgIHByZXZDb29yZGluYXRlID0gY29vcmRpbmF0ZVxuICAgICAgfVxuICAgICAgcHJldkNvb3JkaW5hdGUgPSBjb29yZGluYXRlXG4gICAgfSlcblxuICAgIHJldHVybiBjb29yZGluYXRlc092ZXJsYXBcbiAgfVxuXG4gIC8vIFNob3VsZCBwcmV2ZW50IGEgc2hpcCBmcm9tIGJlaW5nXG4gIC8vIHBsYWNlZCBvbiB0b3Agb2YgYW5vdGhlciBzaGlwXG4gIGNvbnN0IGNoZWNrT3ZlcmxhcFdpdGhPdGhlclNoaXBzID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgbGV0IHNoaXBzT3ZlcmxhcCA9IGZhbHNlXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZVswXVxuICAgICAgY29uc3QgY29sdW1uID0gY29vcmRpbmF0ZVsxXVxuICAgICAgY29uc3QgYm9hcmRDZWxsID0gYm9hcmRbcm93XVtjb2x1bW5dXG4gICAgICBpZiAodHlwZW9mIGJvYXJkQ2VsbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgc2hpcHNPdmVybGFwID0gdHJ1ZVxuICAgICAgICByZXR1cm4gc2hpcHNPdmVybGFwXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBzaGlwc092ZXJsYXBcbiAgfVxuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGxldCBzaGlwUGxhY2VkID0gdHJ1ZVxuXG4gICAgY29uc3QgbGVnYWxDb29yZGluYXRlcyA9IHZhbGlkYXRlQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpXG4gICAgaWYgKCFsZWdhbENvb3JkaW5hdGVzKSB7XG4gICAgICBzaGlwUGxhY2VkID0gZmFsc2VcbiAgICAgIHJldHVybiBzaGlwUGxhY2VkXG4gICAgfVxuXG4gICAgY29uc3Qgb3ZlcmxhcHBpbmdDb29yZGluYXRlcyA9IGNoZWNrU2VsZk92ZXJsYXAoY29vcmRpbmF0ZXMpXG4gICAgaWYgKG92ZXJsYXBwaW5nQ29vcmRpbmF0ZXMpIHtcbiAgICAgIHNoaXBQbGFjZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIHNoaXBQbGFjZWRcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwT3ZlcmxhcHBpbmcgPSBjaGVja092ZXJsYXBXaXRoT3RoZXJTaGlwcyhjb29yZGluYXRlcylcbiAgICBpZiAoc2hpcE92ZXJsYXBwaW5nKSB7XG4gICAgICBzaGlwUGxhY2VkID0gZmFsc2VcbiAgICAgIHJldHVybiBzaGlwUGxhY2VkXG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IGNvb3JkaW5hdGVzLmxlbmd0aFxuICAgIGNvbnN0IHNoaXBPYmplY3QgPSBTaGlwKHNoaXBMZW5ndGgsIDAsIGZhbHNlKVxuICAgIHNoaXBPYmplY3RzLnB1c2goc2hpcE9iamVjdClcblxuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVbMF1cbiAgICAgIGNvbnN0IGNvbHVtbiA9IGNvb3JkaW5hdGVbMV1cbiAgICAgIGJvYXJkW3Jvd11bY29sdW1uXSA9IHNoaXBPYmplY3RcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNoaXBQbGFjZWRcbiAgfVxuXG4gIC8vIHByZXZlbnRzIGh1bWFuIHBsYXllciBmcm9tIGF0dGFja2luZyBwcmV2aW91c2x5XG4gIC8vIGF0dGFja2VkIGNvb3JkaW5hdGVcbiAgY29uc3QgcHJldmVudFNhbWVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGxldCBhbHJlYWR5QXR0YWNrZWQgPSBmYWxzZVxuICAgIHN1Y2Nlc3NmdWxTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XG4gICAgICBpZiAoYXJyYXlzQXJlRXF1YWwoY29vcmRpbmF0ZSwgc2hvdCkpIHtcbiAgICAgICAgYWxyZWFkeUF0dGFja2VkID0gdHJ1ZVxuICAgICAgICByZXR1cm4gcHJldmVudFNhbWVBdHRhY2tcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgbWlzc2VkU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xuICAgICAgaWYgKGFycmF5c0FyZUVxdWFsKGNvb3JkaW5hdGUsIHNob3QpKSB7XG4gICAgICAgIGFscmVhZHlBdHRhY2tlZCA9IHRydWVcbiAgICAgICAgcmV0dXJuIHByZXZlbnRTYW1lQXR0YWNrXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gYWxyZWFkeUF0dGFja2VkXG4gIH1cblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZXNbMF1cbiAgICBjb25zdCBjb2x1bW4gPSBjb29yZGluYXRlc1sxXVxuICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGJvYXJkW3Jvd11bY29sdW1uXVxuICAgIGNvbnN0IHNoaXBPYmogPSBib2FyZENlbGxcblxuICAgIC8vIE5lZWQgdG8gY2hlY2sgaWYgbmV3IGNvb3JkaW5hdGUgaXMgYWxyZWFkeVxuICAgIC8vIGluc2lkZSBzdWNjZXNzZnVsU2hvdHMgb3IgbWlzc2VkU2hvdHNcbiAgICBjb25zdCBhbHJlYWR5QXR0YWNrZWQgPSBwcmV2ZW50U2FtZUF0dGFjayhjb29yZGluYXRlcylcbiAgICBpZiAoYWxyZWFkeUF0dGFja2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGJvYXJkQ2VsbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHNoaXBPYmouaGl0KClcbiAgICAgIHN1Y2Nlc3NmdWxTaG90cy5wdXNoKGNvb3JkaW5hdGVzKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvYXJkQ2VsbCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIG1pc3NlZFNob3RzLnB1c2goY29vcmRpbmF0ZXMpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGxldCBldmVyeVNoaXBTYW5rID0gdHJ1ZVxuICAgIHNoaXBPYmplY3RzLmZvckVhY2goKHNoaXBPYmopID0+IHtcbiAgICAgIGlmICghc2hpcE9iai5oYXNCZWVuU3VuaygpKSB7XG4gICAgICAgIGV2ZXJ5U2hpcFNhbmsgPSBmYWxzZVxuICAgICAgICByZXR1cm4gZXZlcnlTaGlwU2Fua1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGV2ZXJ5U2hpcFNhbmtcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZUxhc3RBSU1vdmUgPSAocmFuZG9tTW92ZSkgPT4ge1xuICAgIGFpQXZhaWxhYmxlTW92ZXMuZm9yRWFjaCgobW92ZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChhcnJheXNBcmVFcXVhbChtb3ZlLCByYW5kb21Nb3ZlKSkge1xuICAgICAgICBhaUF2YWlsYWJsZU1vdmVzLnNwbGljZShpbmRleCwgMSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgY2xlYXJHYW1lQm9hcmQgPSAoKSA9PiB7XG4gICAgc2hpcE9iamVjdHMubGVuZ3RoID0gMFxuICAgIG1pc3NlZFNob3RzLmxlbmd0aCA9IDBcbiAgICBhaUF2YWlsYWJsZU1vdmVzLmxlbmd0aCA9IDBcbiAgICBzdWNjZXNzZnVsU2hvdHMubGVuZ3RoID0gMFxuICB9XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkXG4gIH1cblxuICBjb25zdCBnZXRNaXNzZWRTaG90cyA9ICgpID0+IHtcbiAgICByZXR1cm4gbWlzc2VkU2hvdHNcbiAgfVxuXG4gIGNvbnN0IGdldFN1Y2Nlc3NmdWxTaG90cyA9ICgpID0+IHtcbiAgICByZXR1cm4gc3VjY2Vzc2Z1bFNob3RzXG4gIH1cblxuICBjb25zdCBnZXRTaGlwT2JqZWN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcE9iamVjdHNcbiAgfVxuXG4gIGNvbnN0IGdldEFJQXZhaWxhYmxlTW92ZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGFpQXZhaWxhYmxlTW92ZXNcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlR2FtZUJvYXJkLFxuICAgIGdldEJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGNsZWFyR2FtZUJvYXJkLFxuICAgIGdldE1pc3NlZFNob3RzLFxuICAgIGdldFN1Y2Nlc3NmdWxTaG90cyxcbiAgICBhbGxTaGlwc1N1bmssXG4gICAgZ2V0QUlBdmFpbGFibGVNb3ZlcyxcbiAgICB2YWxpZGF0ZUNvb3JkaW5hdGVzLFxuICAgIHByZXZlbnRTYW1lQXR0YWNrLFxuICAgIGNoZWNrU2VsZk92ZXJsYXAsXG4gICAgZ2V0U2hpcE9iamVjdHMsXG4gICAgcmVtb3ZlTGFzdEFJTW92ZSxcbiAgICBjaGVja092ZXJsYXBXaXRoT3RoZXJTaGlwc1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgUGxheWVyID0gKG5hbWUsIGlzQUkpID0+IHtcbiAgLy8gVXNlZCB0byBtYWtlIEFJIHNlbGVjdCByYW5kb20sIGxlZ2FsIGNvb3JkaW5hdGVcbiAgLy8gb24gcGxheWVycyBnYW1lIGJvYXJkXG4gIGNvbnN0IG1ha2VSYW5kb21Nb3ZlID0gKGlzQUksIGF2YWlsYWJsZU1vdmVzKSA9PiB7XG4gICAgaWYgKCFpc0FJIHx8IGF2YWlsYWJsZU1vdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGNvbnN0IGF2YWlsYWJsZU1vdmVzTGVuZ3RoID0gYXZhaWxhYmxlTW92ZXMubGVuZ3RoXG4gICAgY29uc3QgcmFuZG9tQXJySW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVNb3Zlc0xlbmd0aClcbiAgICBjb25zdCByYW5kb21Db29yZGluYXRlID0gYXZhaWxhYmxlTW92ZXNbcmFuZG9tQXJySW5kZXhdXG5cbiAgICByZXR1cm4gcmFuZG9tQ29vcmRpbmF0ZVxuICB9XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmFtZVxuICB9XG5cbiAgcmV0dXJuIHsgbWFrZVJhbmRvbU1vdmUsIGdldE5hbWUgfVxufVxuIiwiZXhwb3J0IGNvbnN0IFNoaXAgPSAobGVuZ3RoLCBudW1PZkhpdHMsIGlzU3VuaykgPT4ge1xuICAvLyBJbmNyZWFzZSBudW1iZXIgb2YgaGl0cyBpbiBzaGlwIGJ5IDFcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGlmIChudW1PZkhpdHMgPT09IGxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbnVtT2ZIaXRzKytcbiAgICByZXR1cm4gbnVtT2ZIaXRzXG4gIH1cblxuICAvLyBEZXRlcm1pbmUgaWYgdGhlIHNoaXAgb2JqZWN0IGhhcyBiZWVuIHN1bmtcbiAgY29uc3QgaGFzQmVlblN1bmsgPSAoKSA9PiB7XG4gICAgbGV0IGlzU3VuayA9IGZhbHNlXG5cbiAgICBpZiAobGVuZ3RoID09PSBudW1PZkhpdHMpIHtcbiAgICAgIGlzU3VuayA9IHRydWVcbiAgICAgIHJldHVybiBpc1N1bmtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNTdW5rXG4gIH1cblxuICBjb25zdCBnZXROdW1PZkhpdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG51bU9mSGl0c1xuICB9XG5cbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4ge1xuICAgIHJldHVybiBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB7IGhpdCwgaGFzQmVlblN1bmssIGdldE51bU9mSGl0cywgZ2V0TGVuZ3RoIH1cbn1cbiIsImV4cG9ydCBjb25zdCBhcnJheXNBcmVFcXVhbCA9IChhcnIxLCBhcnIyKSA9PiB7XG4gIGlmIChhcnIxID09PSBudWxsIHx8IGFycjIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBpZiAoYXJyMS5sZW5ndGggIT09IGFycjIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIxLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycjFbaV0gIT09IGFycjJbaV0pIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuIiwiZXhwb3J0IGNvbnN0IHJldHVyblJhbmRvbUFJQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGFpQm9hcmRzID0gW2FpU2hpcENvb3Jkc09uZSwgYWlTaGlwQ29vcmRzVHdvLCBhaVNoaXBDb29yZHNUaHJlZV1cbiAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKVxuICBjb25zdCBjaG9zZW5BSUJvYXJkID0gT2JqZWN0LnZhbHVlcyhhaUJvYXJkc1tyYW5kb21JbmRleF0pXG4gIHJldHVybiBjaG9zZW5BSUJvYXJkXG59XG5cbmNvbnN0IGFpU2hpcENvb3Jkc09uZSA9IHtcbiAgY2FycmllcjogW1xuICAgIFs5LCAwXSxcbiAgICBbOSwgMV0sXG4gICAgWzksIDJdLFxuICAgIFs5LCAzXSxcbiAgICBbOSwgNF1cbiAgXSxcbiAgYmF0dGxlc2hpcDogW1xuICAgIFs1LCA1XSxcbiAgICBbNiwgNV0sXG4gICAgWzcsIDVdLFxuICAgIFs4LCA1XVxuICBdLFxuICBjcnVpc2VyOiBbXG4gICAgWzAsIDZdLFxuICAgIFsxLCA2XSxcbiAgICBbMiwgNl1cbiAgXSxcbiAgc3VibWFyaW5lOiBbXG4gICAgWzMsIDhdLFxuICAgIFs0LCA4XSxcbiAgICBbNSwgOF1cbiAgXSxcbiAgZGVzdHJveWVyOiBbXG4gICAgWzAsIDldLFxuICAgIFsxLCA5XVxuICBdXG59XG5cbmNvbnN0IGFpU2hpcENvb3Jkc1R3byA9IHtcbiAgY2FycmllcjogW1xuICAgIFswLCAwXSxcbiAgICBbMCwgMV0sXG4gICAgWzAsIDJdLFxuICAgIFswLCAzXSxcbiAgICBbMCwgNF1cbiAgXSxcbiAgYmF0dGxlc2hpcDogW1xuICAgIFs5LCA1XSxcbiAgICBbOSwgNl0sXG4gICAgWzksIDddLFxuICAgIFs5LCA4XVxuICBdLFxuICBjcnVpc2VyOiBbXG4gICAgWzIsIDJdLFxuICAgIFszLCAyXSxcbiAgICBbNCwgMl1cbiAgXSxcbiAgc3VibWFyaW5lOiBbXG4gICAgWzYsIDZdLFxuICAgIFs2LCA3XSxcbiAgICBbNiwgOF1cbiAgXSxcbiAgZGVzdHJveWVyOiBbXG4gICAgWzgsIDBdLFxuICAgIFs4LCAxXVxuICBdXG59XG5cbmNvbnN0IGFpU2hpcENvb3Jkc1RocmVlID0ge1xuICBjYXJyaWVyOiBbXG4gICAgWzUsIDBdLFxuICAgIFs1LCAxXSxcbiAgICBbNSwgMl0sXG4gICAgWzUsIDNdLFxuICAgIFs1LCA0XVxuICBdLFxuICBiYXR0bGVzaGlwOiBbXG4gICAgWzAsIDldLFxuICAgIFsxLCA5XSxcbiAgICBbMiwgOV0sXG4gICAgWzMsIDldXG4gIF0sXG4gIGNydWlzZXI6IFtcbiAgICBbNywgN10sXG4gICAgWzgsIDddLFxuICAgIFs5LCA3XVxuICBdLFxuICBzdWJtYXJpbmU6IFtcbiAgICBbMSwgMV0sXG4gICAgWzIsIDFdLFxuICAgIFszLCAxXVxuICBdLFxuICBkZXN0cm95ZXI6IFtcbiAgICBbNCwgNF0sXG4gICAgWzQsIDVdXG4gIF1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAvKiAxICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKiBBcHBseSBib3JkZXIgYm94IHRvIGVudGlyZSBkb2N1bWVudCAqL1xcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICAgKi9cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICAgKi9cXG5cXG5ociB7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAvKiAxICovXFxuICAgIGhlaWdodDogMDtcXG4gICAgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5wcmUge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5hIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gICAgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gICAqIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgICBmb250LXNpemU6IDc1JTtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICAgIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcblxcbmltZyB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmlucHV0IHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAvKiAxICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgLyogMiAqL1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBHaXZlIGlucHV0IGFuZCB0ZXh0IGFyZWEgY29uc2lzdGVudCBsb29rICovXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDRweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAtMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250OiBib2xkIDAuNmVtIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgLyogYmFja2dyb3VuZDogIzAwMDtcXG4gICAgY29sb3I6ICNmZmY7ICovXFxufVxcblxcbi8qIEdldHMgcmlkIG9mIGRlZmF1bHQgc2VhcmNoIHRvIHJlbW92ZSByZXN0cmljdGlvbnMgKi9cXG5pbnB1dFt0eXBlPSdzZWFyY2gnXSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qIEZpeCBmb3IgaW5jb25zaXN0ZW50IGRpc3BsYXkgb2YgY2xlYXIgXFxcInhcXFwiIGljb24gaW4gc2VhcmNoIGlucHV0cyBhY3Jvc3MgZGlmZmVyZW50IGJyb3dzZXJzLiBcXG4gICwgdGhpcyBjb2RlIHJlbW92ZXMgdGhlIGljb24gaW4gRWRnZSBhbmQgQ2hyb21lIHdoZW4gdGhlIGlucHV0IGxvc2VzIGZvY3VzLCB3aGlsZSBrZWVwaW5nIGl0IHZpc2libGUgaW4gU2FmYXJpLiAqL1xcbmlucHV0W3R5cGU9J3NlYXJjaCddOm5vdCg6Zm9jdXMsIDphY3RpdmUpOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIC8qIDEgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT0nYnV0dG9uJ106Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9J3Jlc2V0J106Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9J3N1Ym1pdCddOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gICAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT0nYnV0dG9uJ106LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9J3Jlc2V0J106LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9J3N1Ym1pdCddOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmZpZWxkc2V0IHtcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmxlZ2VuZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIDEgKi9cXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIC8qIDIgKi9cXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIC8qIDEgKi9cXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIDMgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICAgKi9cXG5cXG5wcm9ncmVzcyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gICAqL1xcblxcbnRleHRhcmVhIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5bdHlwZT0nY2hlY2tib3gnXSxcXG5bdHlwZT0ncmFkaW8nXSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIDEgKi9cXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAgICovXFxuXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAgICovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAgIC8qIDEgKi9cXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICAgKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gICAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gICAgLyogMSAqL1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICovXFxuXFxuZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gICAqL1xcblxcbnRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gICAqL1xcblxcbltoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLDhCQUE4QjtJQUM5QixNQUFNO0FBQ1Y7O0FBRUEsd0NBQXdDO0FBQ3hDO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOzs7SUFHSTs7QUFFSjtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7O0lBR0k7O0FBRUo7SUFDSSx1QkFBdUI7SUFDdkIsTUFBTTtJQUNOLFNBQVM7SUFDVCxNQUFNO0lBQ04saUJBQWlCO0lBQ2pCLE1BQU07QUFDVjs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSxpQ0FBaUM7SUFDakMsTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0FBQ1Y7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLDZCQUE2QjtBQUNq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OztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLyogMSAqL1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyogQXBwbHkgYm9yZGVyIGJveCB0byBlbnRpcmUgZG9jdW1lbnQgKi9cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAgICovXFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAgICovXFxuXFxuaHIge1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxucHJlIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAvKiAxICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAvKiAyICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICAgKiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gICAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5pbnB1dCB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIC8qIDIgKi9cXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogR2l2ZSBpbnB1dCBhbmQgdGV4dCBhcmVhIGNvbnNpc3RlbnQgbG9vayAqL1xcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweCAwIDAgLTEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udDogYm9sZCAwLjZlbSBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIC8qIGJhY2tncm91bmQ6ICMwMDA7XFxuICAgIGNvbG9yOiAjZmZmOyAqL1xcbn1cXG5cXG4vKiBHZXRzIHJpZCBvZiBkZWZhdWx0IHNlYXJjaCB0byByZW1vdmUgcmVzdHJpY3Rpb25zICovXFxuaW5wdXRbdHlwZT0nc2VhcmNoJ10ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKiBGaXggZm9yIGluY29uc2lzdGVudCBkaXNwbGF5IG9mIGNsZWFyIFxcXCJ4XFxcIiBpY29uIGluIHNlYXJjaCBpbnB1dHMgYWNyb3NzIGRpZmZlcmVudCBicm93c2Vycy4gXFxuICAsIHRoaXMgY29kZSByZW1vdmVzIHRoZSBpY29uIGluIEVkZ2UgYW5kIENocm9tZSB3aGVuIHRoZSBpbnB1dCBsb3NlcyBmb2N1cywgd2hpbGUga2VlcGluZyBpdCB2aXNpYmxlIGluIFNhZmFyaS4gKi9cXG5pbnB1dFt0eXBlPSdzZWFyY2gnXTpub3QoOmZvY3VzLCA6YWN0aXZlKTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgICAvKiAxICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG46Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9J2J1dHRvbiddOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPSdyZXNldCddOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPSdzdWJtaXQnXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICAgKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9J2J1dHRvbiddOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPSdyZXNldCddOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPSdzdWJtaXQnXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5maWVsZHNldCB7XFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5sZWdlbmQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiAxICovXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAvKiAyICovXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICAvKiAxICovXFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiAzICovXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAgICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICAgKi9cXG5cXG50ZXh0YXJlYSB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAgICovXFxuXFxuW3R5cGU9J2NoZWNrYm94J10sXFxuW3R5cGU9J3JhZGlvJ10ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiAxICovXFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gICAqL1xcblxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gICAqL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgICAvKiAxICovXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAgICovXFxuXFxuW3R5cGU9J3NlYXJjaCddOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICAgKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gICAqL1xcblxcbmRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICAgKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5baGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgICBjb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcbi50b3BCYXJDb250YWluZXIge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA3NXZ3O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuYnV0dG9uLnNoaXBDZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuI0FJQm9hcmQgYnV0dG9uLFxcbiNwbGF5ZXJCb2FyZCBidXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cXG4jYm9hcmRzQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgd2lkdGg6IDkxdnc7XFxufVxcblxcbiNib2FyZHNDb250YWluZXIgcCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyQm9hcmQge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTRweCk7XFxuXFxufVxcblxcbiNBSUJvYXJkIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDU0cHgpO1xcblxcblxcbn1cXG5cXG4vKiBidXR0b24uYm9hcmRDZWxsIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG59ICovXFxuXFxuYnV0dG9uLnNoaXBDZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJ1dHRvbi5zaGlwSGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCA5NCwgMjIpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztJQUNULHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG9DQUFvQzs7O0FBR3hDOztBQUVBOzs7R0FHRzs7QUFFSDtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICAgIGNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogODBweDtcXG59XFxuXFxuLmhlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLnRvcEJhckNvbnRhaW5lciB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDc1dnc7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5idXR0b24uc2hpcENlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4jQUlCb2FyZCBidXR0b24sXFxuI3BsYXllckJvYXJkIGJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcblxcbiNib2FyZHNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICB3aWR0aDogOTF2dztcXG59XFxuXFxuI2JvYXJkc0NvbnRhaW5lciBwIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXJCb2FyZCB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1NHB4KTtcXG5cXG59XFxuXFxuI0FJQm9hcmQge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTRweCk7XFxuXFxuXFxufVxcblxcbi8qIGJ1dHRvbi5ib2FyZENlbGwge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbn0gKi9cXG5cXG5idXR0b24uc2hpcENlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuYnV0dG9uLnNoaXBIaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDk0LCAyMik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7XG4gIGRpc3BsYXlDb250cm9sbGVyLFxuICBwcmVHYW1lU2V0dXBcbn0gZnJvbSAnLi9jb250cm9sbGVycy9kaXNwbGF5Q29udHJvbGxlcidcblxuaW1wb3J0ICcuL3N0eWxlcy9ub3JtYWxpemUuY3NzJ1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnXG5cbnByZUdhbWVTZXR1cCgpXG4iXSwibmFtZXMiOlsiZ2FtZUNvbnRyb2xsZXIiLCJnYW1lIiwicHJlR2FtZVNldHVwIiwicmVuZGVyUGxheWVyQm9hcmQiLCJwbGFjZUNhcnJpZXJTaGlwIiwicmVuZGVyQUlCb2FyZCIsImRpc3BsYXlDb250cm9sbGVyIiwicGxhY2VBSVNoaXBzIiwiYWlCb2FyZERpdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwbGF5ZXJzIiwiZ2V0UGxheWVycyIsImFjdGl2ZVBsYXllciIsImdldEN1cnJlbnRQbGF5ZXIiLCJodW1hbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnQiLCJ0b3BCYXJQYXJhIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiaHVtYW5Cb2FyZERpdiIsImhhbmRsZUNhcnJpZXJTaGlwUGxhY2VtZW50IiwicGxhY2VCYXR0bGVTaGlwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUJhdHRsZVNoaXBQbGFjZW1lbnQiLCJwbGFjZUNydWlzZXIiLCJoYW5kbGVDcnVpc2VyU2hpcFBsYWNlbWVudCIsInBsYWNlU3VibWFyaW5lIiwiaGFuZGxlU3VibWFyaW5lU2hpcFBsYWNlbWVudCIsInBsYWNlRGVzdHJveWVyIiwiaGFuZGxlRGVzdHJveWVyU2hpcFBsYWNlbWVudCIsInBsYXllckJvYXJkIiwiZ2V0SHVtYW5Cb2FyZCIsInBsYXllckJvYXJkRGl2IiwiaW5uZXJIVE1MIiwiaSIsImxlbmd0aCIsImN1cnJlbnRSb3ciLCJqIiwiYnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJyb3ciLCJjb2x1bW4iLCJhcHBlbmRDaGlsZCIsImFpQm9hcmQiLCJnZXRBSUJvYXJkIiwidXBkYXRlSHVtYW5Cb2FyZCIsImh1bWFuQm9hcmQiLCJtaXNzZWRTaG90cyIsImdldEh1bWFuQm9hcmRPYmoiLCJnZXRNaXNzZWRTaG90cyIsInN1Y2Nlc3NmdWxTaG90cyIsImdldFN1Y2Nlc3NmdWxTaG90cyIsImFsbERvbU5vZGVzIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJzaG90IiwidGFyZ2V0Tm9kZSIsInJlbW92ZSIsInVwZGF0ZUFJQm9hcmQiLCJnZXRBSUJvYXJkT2JqIiwiZSIsInNlbGVjdGVkUm93IiwidGFyZ2V0Iiwic2VsZWN0ZWRDb2x1bW4iLCJjb29yZGluYXRlIiwiY2FycmllclBsYWNlZCIsInBsYWNlQ2Fycmllck9uQm9hcmQiLCJiYXR0bGVzaGlwUGxhY2VkIiwicGxhY2VCYXR0bGVzaGlwT25Cb2FyZCIsImNydWlzZXJQbGFjZWQiLCJwbGFjZUNydWlzZXJPbkJvYXJkIiwicGxhY2VTdWJtYXJpbmVPbkJvYXJkIiwiZGVzdHJveWVyUGxhY2VkIiwicGxhY2VEZXN0cm95ZXJPbkJvYXJkIiwiYm9hcmRET01DZWxsc0FyciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdGFydGluZ0NvbHVtbiIsIk51bWJlciIsImRvbUNvb3JkaW5hdGUiLCJ0YXJnZXRET01CdG4iLCJmaW5kU2hpcERPTUJ0biIsInBsYWNlQ3J1aXNlclNoaXAiLCJzdWJtYXJpbmVQbGFjZWQiLCJwbGFjZVN1Ym1hcmluZVNoaXAiLCJwbGFjZURlc3Ryb3llclNoaXAiLCJkb21DZWxsUm93IiwiZG9tQ2VsbENvbHVtbiIsImFscmVhZHlBdHRhY2tlZCIsInByZXZlbnRTYW1lQXR0YWNrIiwicGxheVJvdW5kIiwiaHVtYW5XaW5zIiwiY2hlY2tGb3JXaW4iLCJyZXNldEdhbWVTdGF0ZSIsImFubm91bmNlV2lubmVyIiwicGxheUFnYWluIiwiaGFuZGxlQUlNb3ZlIiwiYWlXaW5zIiwid2lubmVyIiwid2lubmVyTmFtZSIsImdldE5hbWUiLCJ0b3BCYXJEaXYiLCJwbGF5QWdhaW5CdG4iLCJzdGFydE5ld0dhbWUiLCJyZW1vdmVDaGlsZCIsIkdhbWVib2FyZCIsIlBsYXllciIsInJldHVyblJhbmRvbUFJQm9hcmQiLCJjcmVhdGVHYW1lQm9hcmQiLCJwbGF5ZXJTaGlwQ29vcmRzIiwiY2FycmllciIsImJhdHRsZXNoaXAiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwiY2FycmllckFyciIsInB1c2giLCJjb29yZCIsInRvU3RyaW5nIiwic2hpcFBsYWNlZCIsInBsYWNlU2hpcCIsImJhdHRsZXNoaXBBcnIiLCJjcnVpc2VyQXJyIiwic3VibWFyaW5lQXJyIiwicGxhY2VTaGlwcyIsImh1bWFuUGxheWVyIiwiYWlQbGF5ZXIiLCJBSSIsImN1cnJlbnRQbGF5ZXIiLCJyZWNlaXZlQXR0YWNrIiwiYXZhaWxhYmxlTW92ZXMiLCJnZXRBSUF2YWlsYWJsZU1vdmVzIiwicmFuZG9tTW92ZSIsIm1ha2VSYW5kb21Nb3ZlIiwicmVtb3ZlTGFzdEFJTW92ZSIsInN3aXRjaFBsYXllciIsImNvbnNvbGUiLCJsb2ciLCJhbGxTaGlwc1N1bmsiLCJjbGVhckdhbWVCb2FyZCIsImdldEJvYXJkIiwiYm9hcmQiLCJjb29yZGluYXRlc09iaiIsInNoaXBDb29yZGluYXRlc0FyciIsIk9iamVjdCIsInZhbHVlcyIsInNoaXBDb29yZGluYXRlcyIsImFycmF5c0FyZUVxdWFsIiwiU2hpcCIsInNoaXBPYmplY3RzIiwiYWlBdmFpbGFibGVNb3ZlcyIsInJvd3MiLCJjb2x1bW5zIiwidW5kZWZpbmVkIiwidmFsaWRhdGVDb29yZGluYXRlcyIsImNvb3JkaW5hdGVzIiwidmFsaWRDb29yZGluYXRlcyIsImNoZWNrU2VsZk92ZXJsYXAiLCJjb29yZGluYXRlc092ZXJsYXAiLCJwcmV2Q29vcmRpbmF0ZSIsImluZGV4IiwiY2hlY2tPdmVybGFwV2l0aE90aGVyU2hpcHMiLCJzaGlwc092ZXJsYXAiLCJib2FyZENlbGwiLCJsZWdhbENvb3JkaW5hdGVzIiwib3ZlcmxhcHBpbmdDb29yZGluYXRlcyIsInNoaXBPdmVybGFwcGluZyIsInNoaXBMZW5ndGgiLCJzaGlwT2JqZWN0Iiwic2hpcE9iaiIsImhpdCIsImV2ZXJ5U2hpcFNhbmsiLCJoYXNCZWVuU3VuayIsIm1vdmUiLCJzcGxpY2UiLCJnZXRTaGlwT2JqZWN0cyIsIm5hbWUiLCJpc0FJIiwiYXZhaWxhYmxlTW92ZXNMZW5ndGgiLCJyYW5kb21BcnJJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbUNvb3JkaW5hdGUiLCJudW1PZkhpdHMiLCJpc1N1bmsiLCJnZXROdW1PZkhpdHMiLCJnZXRMZW5ndGgiLCJhcnIxIiwiYXJyMiIsImFpQm9hcmRzIiwiYWlTaGlwQ29vcmRzT25lIiwiYWlTaGlwQ29vcmRzVHdvIiwiYWlTaGlwQ29vcmRzVGhyZWUiLCJyYW5kb21JbmRleCIsImNob3NlbkFJQm9hcmQiXSwic291cmNlUm9vdCI6IiJ9