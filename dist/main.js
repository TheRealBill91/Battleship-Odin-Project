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
/* harmony export */   "renderAIBoard": () => (/* binding */ renderAIBoard),
/* harmony export */   "renderPlayerBoard": () => (/* binding */ renderPlayerBoard)
/* harmony export */ });
/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameController */ "./src/controllers/gameController.js");

const game = (0,_gameController__WEBPACK_IMPORTED_MODULE_0__.gameController)();
const displayController = () => {
  game.placeAllShips();
  renderPlayerBoard();
  renderAIBoard();
  const aiBoardDiv = document.getElementById('AIBoard');
  const players = game.getPlayers();
  const activePlayer = game.getCurrentPlayer();
  if (activePlayer === players.human) {
    aiBoardDiv.addEventListener('click', handlePlayerSelectionEvt);
  }
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
      const row = playerBoard[i];
      if (typeof row[j] === 'object') {
        button.classList.add('shipCell');
      }
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
  const aiShipCoords = {
    carrier: [[9, 0], [9, 1], [9, 2], [9, 3], [9, 4]],
    battleship: [[5, 5], [6, 5], [7, 5], [8, 5]],
    cruiser: [[0, 6], [1, 6], [2, 6]],
    submarine: [[3, 8], [4, 8], [5, 8]],
    destroyer: [[0, 9], [1, 9]]
  };
  const placeAllShips = () => {
    placeShips(humanBoard, playerShipCoords);
    placeShips(aiBoard, aiShipCoords);
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
    placeAllShips
  };
};

const placeShips = (board, coordinatesObj) => {
  const shipCoordinatesArr = Object.values(coordinatesObj);
  shipCoordinatesArr.forEach(shipCoordinates => {
    board.placeShip(shipCoordinates);
  });
};

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
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n    line-height: 1.15;\r\n    /* 1 */\r\n    -webkit-text-size-adjust: 100%;\r\n    /* 2 */\r\n}\r\n\r\n/* Apply border box to entire document */\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Sections\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the margin in all browsers.\r\n   */\r\n\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n   * Render the `main` element consistently in IE.\r\n   */\r\n\r\nmain {\r\n    display: block;\r\n}\r\n\r\n/**\r\n   * Correct the font size and margin on `h1` elements within `section` and\r\n   * `article` contexts in Chrome, Firefox, and Safari.\r\n   */\r\n\r\nh1 {\r\n    font-size: 2em;\r\n    margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n     ========================================================================== */\r\n\r\n/**\r\n   * 1. Add the correct box sizing in Firefox.\r\n   * 2. Show the overflow in Edge and IE.\r\n   */\r\n\r\nhr {\r\n    box-sizing: content-box;\r\n    /* 1 */\r\n    height: 0;\r\n    /* 1 */\r\n    overflow: visible;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n\r\npre {\r\n    font-family: monospace, monospace;\r\n    /* 1 */\r\n    font-size: 1em;\r\n    /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the gray background on active links in IE 10.\r\n   */\r\n\r\na {\r\n    background-color: transparent;\r\n}\r\n\r\n/**\r\n   * 1. Remove the bottom border in Chrome 57-\r\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n   */\r\n\r\nabbr[title] {\r\n    border-bottom: none;\r\n    /* 1 */\r\n    text-decoration: underline;\r\n    /* 2 */\r\n    text-decoration: underline dotted;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n   * Add the correct font weight in Chrome, Edge, and Safari.\r\n   */\r\n\r\nb,\r\nstrong {\r\n    font-weight: bolder;\r\n}\r\n\r\n/**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n    font-family: monospace, monospace;\r\n    /* 1 */\r\n    font-size: 1em;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n   * Add the correct font size in all browsers.\r\n   */\r\n\r\nsmall {\r\n    font-size: 80%;\r\n}\r\n\r\n/**\r\n   * Prevent `sub` and `sup` elements from affecting the line height in\r\n   * all browsers.\r\n   */\r\n\r\nsub,\r\nsup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n    bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n    top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the border on images inside links in IE 10.\r\n   */\r\n\r\nimg {\r\n    border-style: none;\r\n}\r\n\r\n/* Forms\r\n     ========================================================================== */\r\n\r\n/**\r\n   * 1. Change the font styles in all browsers.\r\n   * 2. Remove the margin in Firefox and Safari.\r\n   */\r\n\r\ninput {\r\n    -webkit-appearance: none;\r\n}\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n    font-family: inherit;\r\n    /* 1 */\r\n    font-size: 100%;\r\n    /* 1 */\r\n    line-height: 1.15;\r\n    /* 1 */\r\n    margin: 0;\r\n    /* 2 */\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Give input and text area consistent look */\r\ninput,\r\ntextarea {\r\n    background: none;\r\n    border: 1px solid grey;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    padding: 4px;\r\n}\r\n\r\ntextarea {\r\n    display: block;\r\n    padding: 10px;\r\n    margin: 10px 0 0 -10px;\r\n    width: 100%;\r\n    height: 90%;\r\n    border-right: 1px solid;\r\n    resize: none;\r\n    overflow: auto;\r\n}\r\n\r\nbutton {\r\n    padding: 5px;\r\n    font: bold 0.6em sans-serif;\r\n    border: 1px solid #333;\r\n    border-radius: 5px;\r\n    background: none;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton:hover,\r\nbutton:focus {\r\n    outline: none;\r\n    /* background: #000;\r\n    color: #fff; */\r\n}\r\n\r\n/* Gets rid of default search to remove restrictions */\r\ninput[type='search'] {\r\n    appearance: none;\r\n}\r\n\r\n/* Fix for inconsistent display of clear \"x\" icon in search inputs across different browsers. \r\n  , this code removes the icon in Edge and Chrome when the input loses focus, while keeping it visible in Safari. */\r\ninput[type='search']:not(:focus, :active)::-webkit-search-cancel-button {\r\n    display: none;\r\n}\r\n\r\n/**\r\n   * Show the overflow in IE.\r\n   * 1. Show the overflow in Edge.\r\n   */\r\n\r\nbutton,\r\ninput {\r\n    /* 1 */\r\n    overflow: visible;\r\n}\r\n\r\n/**\r\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n   * 1. Remove the inheritance of text transform in Firefox.\r\n   */\r\n\r\nbutton,\r\nselect {\r\n    /* 1 */\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n   * Correct the inability to style clickable types in iOS and Safari.\r\n   */\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n    -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n   * Remove the inner border and padding in Firefox.\r\n   */\r\n\r\n::-moz-focus-inner,\r\n[type='button']::-moz-focus-inner,\r\n[type='reset']::-moz-focus-inner,\r\n[type='submit']::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n   * Restore the focus styles unset by the previous rule.\r\n   */\r\n\r\nbutton:-moz-focusring,\r\n[type='button']:-moz-focusring,\r\n[type='reset']:-moz-focusring,\r\n[type='submit']:-moz-focusring {\r\n    outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n   * Correct the padding in Firefox.\r\n   */\r\n\r\nfieldset {\r\n    padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n   * 1. Correct the text wrapping in Edge and IE.\r\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n   * 3. Remove the padding so developers are not caught out when they zero out\r\n   *    `fieldset` elements in all browsers.\r\n   */\r\n\r\nlegend {\r\n    box-sizing: border-box;\r\n    /* 1 */\r\n    color: inherit;\r\n    /* 2 */\r\n    display: table;\r\n    /* 1 */\r\n    max-width: 100%;\r\n    /* 1 */\r\n    padding: 0;\r\n    /* 3 */\r\n    white-space: normal;\r\n    /* 1 */\r\n}\r\n\r\n/**\r\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n   */\r\n\r\nprogress {\r\n    vertical-align: baseline;\r\n}\r\n\r\n/**\r\n   * Remove the default vertical scrollbar in IE 10+.\r\n   */\r\n\r\ntextarea {\r\n    overflow: auto;\r\n}\r\n\r\n/**\r\n   * 1. Add the correct box sizing in IE 10.\r\n   * 2. Remove the padding in IE 10.\r\n   */\r\n\r\n[type='checkbox'],\r\n[type='radio'] {\r\n    box-sizing: border-box;\r\n    /* 1 */\r\n    padding: 4px;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n   * Correct the cursor style of increment and decrement buttons in Chrome.\r\n   */\r\n\r\n[type='number']::-webkit-inner-spin-button,\r\n[type='number']::-webkit-outer-spin-button {\r\n    height: auto;\r\n}\r\n\r\n/**\r\n   * 1. Correct the odd appearance in Chrome and Safari.\r\n   * 2. Correct the outline style in Safari.\r\n   */\r\n\r\n[type='search'] {\r\n    -webkit-appearance: textfield;\r\n    /* 1 */\r\n    outline-offset: -2px;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n   * Remove the inner padding in Chrome and Safari on macOS.\r\n   */\r\n\r\n[type='search']::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n   * 1. Correct the inability to style clickable types in iOS and Safari.\r\n   * 2. Change font properties to `inherit` in Safari.\r\n   */\r\n\r\n::-webkit-file-upload-button {\r\n    -webkit-appearance: button;\r\n    /* 1 */\r\n    font: inherit;\r\n    /* 2 */\r\n}\r\n\r\n/* Interactive\r\n     ========================================================================== */\r\n\r\n/*\r\n   * Add the correct display in Edge, IE 10+, and Firefox.\r\n   */\r\n\r\ndetails {\r\n    display: block;\r\n}\r\n\r\n/*\r\n   * Add the correct display in all browsers.\r\n   */\r\n\r\nsummary {\r\n    display: list-item;\r\n}\r\n\r\n/* Misc\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Add the correct display in IE 10+.\r\n   */\r\n\r\ntemplate {\r\n    display: none;\r\n}\r\n\r\n/**\r\n   * Add the correct display in IE 10.\r\n   */\r\n\r\n[hidden] {\r\n    display: none;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/normalize.css"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n    line-height: 1.15;\r\n    /* 1 */\r\n    -webkit-text-size-adjust: 100%;\r\n    /* 2 */\r\n}\r\n\r\n/* Apply border box to entire document */\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Sections\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the margin in all browsers.\r\n   */\r\n\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n   * Render the `main` element consistently in IE.\r\n   */\r\n\r\nmain {\r\n    display: block;\r\n}\r\n\r\n/**\r\n   * Correct the font size and margin on `h1` elements within `section` and\r\n   * `article` contexts in Chrome, Firefox, and Safari.\r\n   */\r\n\r\nh1 {\r\n    font-size: 2em;\r\n    margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n     ========================================================================== */\r\n\r\n/**\r\n   * 1. Add the correct box sizing in Firefox.\r\n   * 2. Show the overflow in Edge and IE.\r\n   */\r\n\r\nhr {\r\n    box-sizing: content-box;\r\n    /* 1 */\r\n    height: 0;\r\n    /* 1 */\r\n    overflow: visible;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n\r\npre {\r\n    font-family: monospace, monospace;\r\n    /* 1 */\r\n    font-size: 1em;\r\n    /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the gray background on active links in IE 10.\r\n   */\r\n\r\na {\r\n    background-color: transparent;\r\n}\r\n\r\n/**\r\n   * 1. Remove the bottom border in Chrome 57-\r\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n   */\r\n\r\nabbr[title] {\r\n    border-bottom: none;\r\n    /* 1 */\r\n    text-decoration: underline;\r\n    /* 2 */\r\n    text-decoration: underline dotted;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n   * Add the correct font weight in Chrome, Edge, and Safari.\r\n   */\r\n\r\nb,\r\nstrong {\r\n    font-weight: bolder;\r\n}\r\n\r\n/**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n    font-family: monospace, monospace;\r\n    /* 1 */\r\n    font-size: 1em;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n   * Add the correct font size in all browsers.\r\n   */\r\n\r\nsmall {\r\n    font-size: 80%;\r\n}\r\n\r\n/**\r\n   * Prevent `sub` and `sup` elements from affecting the line height in\r\n   * all browsers.\r\n   */\r\n\r\nsub,\r\nsup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n    bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n    top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the border on images inside links in IE 10.\r\n   */\r\n\r\nimg {\r\n    border-style: none;\r\n}\r\n\r\n/* Forms\r\n     ========================================================================== */\r\n\r\n/**\r\n   * 1. Change the font styles in all browsers.\r\n   * 2. Remove the margin in Firefox and Safari.\r\n   */\r\n\r\ninput {\r\n    -webkit-appearance: none;\r\n}\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n    font-family: inherit;\r\n    /* 1 */\r\n    font-size: 100%;\r\n    /* 1 */\r\n    line-height: 1.15;\r\n    /* 1 */\r\n    margin: 0;\r\n    /* 2 */\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Give input and text area consistent look */\r\ninput,\r\ntextarea {\r\n    background: none;\r\n    border: 1px solid grey;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    padding: 4px;\r\n}\r\n\r\ntextarea {\r\n    display: block;\r\n    padding: 10px;\r\n    margin: 10px 0 0 -10px;\r\n    width: 100%;\r\n    height: 90%;\r\n    border-right: 1px solid;\r\n    resize: none;\r\n    overflow: auto;\r\n}\r\n\r\nbutton {\r\n    padding: 5px;\r\n    font: bold 0.6em sans-serif;\r\n    border: 1px solid #333;\r\n    border-radius: 5px;\r\n    background: none;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton:hover,\r\nbutton:focus {\r\n    outline: none;\r\n    /* background: #000;\r\n    color: #fff; */\r\n}\r\n\r\n/* Gets rid of default search to remove restrictions */\r\ninput[type='search'] {\r\n    appearance: none;\r\n}\r\n\r\n/* Fix for inconsistent display of clear \"x\" icon in search inputs across different browsers. \r\n  , this code removes the icon in Edge and Chrome when the input loses focus, while keeping it visible in Safari. */\r\ninput[type='search']:not(:focus, :active)::-webkit-search-cancel-button {\r\n    display: none;\r\n}\r\n\r\n/**\r\n   * Show the overflow in IE.\r\n   * 1. Show the overflow in Edge.\r\n   */\r\n\r\nbutton,\r\ninput {\r\n    /* 1 */\r\n    overflow: visible;\r\n}\r\n\r\n/**\r\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n   * 1. Remove the inheritance of text transform in Firefox.\r\n   */\r\n\r\nbutton,\r\nselect {\r\n    /* 1 */\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n   * Correct the inability to style clickable types in iOS and Safari.\r\n   */\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n    -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n   * Remove the inner border and padding in Firefox.\r\n   */\r\n\r\n::-moz-focus-inner,\r\n[type='button']::-moz-focus-inner,\r\n[type='reset']::-moz-focus-inner,\r\n[type='submit']::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n   * Restore the focus styles unset by the previous rule.\r\n   */\r\n\r\nbutton:-moz-focusring,\r\n[type='button']:-moz-focusring,\r\n[type='reset']:-moz-focusring,\r\n[type='submit']:-moz-focusring {\r\n    outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n   * Correct the padding in Firefox.\r\n   */\r\n\r\nfieldset {\r\n    padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n   * 1. Correct the text wrapping in Edge and IE.\r\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n   * 3. Remove the padding so developers are not caught out when they zero out\r\n   *    `fieldset` elements in all browsers.\r\n   */\r\n\r\nlegend {\r\n    box-sizing: border-box;\r\n    /* 1 */\r\n    color: inherit;\r\n    /* 2 */\r\n    display: table;\r\n    /* 1 */\r\n    max-width: 100%;\r\n    /* 1 */\r\n    padding: 0;\r\n    /* 3 */\r\n    white-space: normal;\r\n    /* 1 */\r\n}\r\n\r\n/**\r\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n   */\r\n\r\nprogress {\r\n    vertical-align: baseline;\r\n}\r\n\r\n/**\r\n   * Remove the default vertical scrollbar in IE 10+.\r\n   */\r\n\r\ntextarea {\r\n    overflow: auto;\r\n}\r\n\r\n/**\r\n   * 1. Add the correct box sizing in IE 10.\r\n   * 2. Remove the padding in IE 10.\r\n   */\r\n\r\n[type='checkbox'],\r\n[type='radio'] {\r\n    box-sizing: border-box;\r\n    /* 1 */\r\n    padding: 4px;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n   * Correct the cursor style of increment and decrement buttons in Chrome.\r\n   */\r\n\r\n[type='number']::-webkit-inner-spin-button,\r\n[type='number']::-webkit-outer-spin-button {\r\n    height: auto;\r\n}\r\n\r\n/**\r\n   * 1. Correct the odd appearance in Chrome and Safari.\r\n   * 2. Correct the outline style in Safari.\r\n   */\r\n\r\n[type='search'] {\r\n    -webkit-appearance: textfield;\r\n    /* 1 */\r\n    outline-offset: -2px;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n   * Remove the inner padding in Chrome and Safari on macOS.\r\n   */\r\n\r\n[type='search']::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n   * 1. Correct the inability to style clickable types in iOS and Safari.\r\n   * 2. Change font properties to `inherit` in Safari.\r\n   */\r\n\r\n::-webkit-file-upload-button {\r\n    -webkit-appearance: button;\r\n    /* 1 */\r\n    font: inherit;\r\n    /* 2 */\r\n}\r\n\r\n/* Interactive\r\n     ========================================================================== */\r\n\r\n/*\r\n   * Add the correct display in Edge, IE 10+, and Firefox.\r\n   */\r\n\r\ndetails {\r\n    display: block;\r\n}\r\n\r\n/*\r\n   * Add the correct display in all browsers.\r\n   */\r\n\r\nsummary {\r\n    display: list-item;\r\n}\r\n\r\n/* Misc\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Add the correct display in IE 10+.\r\n   */\r\n\r\ntemplate {\r\n    display: none;\r\n}\r\n\r\n/**\r\n   * Add the correct display in IE 10.\r\n   */\r\n\r\n[hidden] {\r\n    display: none;\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n    width: 100vw;\r\n    overflow-x: hidden;\r\n}\r\n\r\nheader {\r\n    background-color: darkblue;\r\n    color: rgb(236, 236, 236);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100vw;\r\n    height: 80px;\r\n}\r\n\r\n.headerContainer {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex: 1;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n}\r\n\r\n.topBarContainer {\r\n    outline: 1px solid black;\r\n    width: 75vw;\r\n    height: 80px;\r\n    margin-top: 24px;\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\nbutton.shipCell {\r\n    background-color: grey;\r\n}\r\n\r\n#boardsContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 12px;\r\n    outline: 1px solid black;\r\n    padding: 12px;\r\n    display: grid;\r\n    grid-template-rows: none;\r\n    grid-template-columns: 1fr 1fr;\r\n    width: 91vw;\r\n}\r\n\r\n#boardsContainer p {\r\n    justify-self: center;\r\n}\r\n\r\n#playerBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 54px);\r\n\r\n}\r\n\r\n#AIBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 54px);\r\n\r\n\r\n}\r\n\r\n/* button.boardCell {\r\n    border: 1px solid black;\r\n    border-radius: 0px;\r\n} */\r\n\r\nbutton.shipCell {\r\n    background-color: grey;\r\n    border: 1px solid black;\r\n}\r\n\r\nbutton.shipHit {\r\n    background-color: rgb(22, 94, 22);\r\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;IAC1B,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,OAAO;IACP,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,wBAAwB;IACxB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,wBAAwB;IACxB,aAAa;IACb,aAAa;IACb,wBAAwB;IACxB,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,oCAAoC;;AAExC;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,oCAAoC;;;AAGxC;;AAEA;;;GAGG;;AAEH;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,iCAAiC;AACrC","sourcesContent":["body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n    width: 100vw;\r\n    overflow-x: hidden;\r\n}\r\n\r\nheader {\r\n    background-color: darkblue;\r\n    color: rgb(236, 236, 236);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100vw;\r\n    height: 80px;\r\n}\r\n\r\n.headerContainer {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex: 1;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n}\r\n\r\n.topBarContainer {\r\n    outline: 1px solid black;\r\n    width: 75vw;\r\n    height: 80px;\r\n    margin-top: 24px;\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\nbutton.shipCell {\r\n    background-color: grey;\r\n}\r\n\r\n#boardsContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 12px;\r\n    outline: 1px solid black;\r\n    padding: 12px;\r\n    display: grid;\r\n    grid-template-rows: none;\r\n    grid-template-columns: 1fr 1fr;\r\n    width: 91vw;\r\n}\r\n\r\n#boardsContainer p {\r\n    justify-self: center;\r\n}\r\n\r\n#playerBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 54px);\r\n\r\n}\r\n\r\n#AIBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 54px);\r\n\r\n\r\n}\r\n\r\n/* button.boardCell {\r\n    border: 1px solid black;\r\n    border-radius: 0px;\r\n} */\r\n\r\nbutton.shipCell {\r\n    background-color: grey;\r\n    border: 1px solid black;\r\n}\r\n\r\nbutton.shipHit {\r\n    background-color: rgb(22, 94, 22);\r\n}"],"sourceRoot":""}]);
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



(0,_controllers_displayController__WEBPACK_IMPORTED_MODULE_0__.displayController)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLE1BQU0sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxRQUFRLE1BQU0sS0FBSyxZQUFZLE9BQU8sU0FBUyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxPQUFPLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxLQUFLLE1BQU0sT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxTQUFTLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsMldBQTJXLDBCQUEwQixzREFBc0Qsb0JBQW9CLHdEQUF3RCwrQkFBK0IsS0FBSyxzTEFBc0wsa0JBQWtCLEtBQUssd0ZBQXdGLHVCQUF1QixLQUFLLDBLQUEwSyx1QkFBdUIseUJBQXlCLEtBQUssZ1BBQWdQLGdDQUFnQyxpQ0FBaUMseUNBQXlDLG9CQUFvQiwyS0FBMkssMENBQTBDLHNDQUFzQyxvQkFBb0IsaU5BQWlOLHNDQUFzQyxLQUFLLDhLQUE4Syw0QkFBNEIsa0RBQWtELHlEQUF5RCxvQkFBb0IsMkdBQTJHLDRCQUE0QixLQUFLLDZMQUE2TCwwQ0FBMEMsc0NBQXNDLG9CQUFvQixzRkFBc0YsdUJBQXVCLEtBQUssMElBQTBJLHVCQUF1Qix1QkFBdUIsMkJBQTJCLGlDQUFpQyxLQUFLLGFBQWEsd0JBQXdCLEtBQUssYUFBYSxvQkFBb0IsS0FBSyw2TUFBNk0sMkJBQTJCLEtBQUssZ1BBQWdQLGlDQUFpQyxLQUFLLCtEQUErRCw2QkFBNkIsdUNBQXVDLHlDQUF5QyxpQ0FBaUMsa0NBQWtDLCtCQUErQixLQUFLLDhFQUE4RSx5QkFBeUIsK0JBQStCLDJCQUEyQixzQkFBc0IscUJBQXFCLEtBQUssa0JBQWtCLHVCQUF1QixzQkFBc0IsK0JBQStCLG9CQUFvQixvQkFBb0IsZ0NBQWdDLHFCQUFxQix1QkFBdUIsS0FBSyxnQkFBZ0IscUJBQXFCLG9DQUFvQywrQkFBK0IsMkJBQTJCLHlCQUF5Qix3QkFBd0IsS0FBSyx1Q0FBdUMsc0JBQXNCLDRCQUE0QixxQkFBcUIsT0FBTyx5RkFBeUYseUJBQXlCLEtBQUssNlNBQTZTLHNCQUFzQixLQUFLLHFIQUFxSCx5Q0FBeUMsS0FBSywwTEFBMEwsNENBQTRDLEtBQUsseUtBQXlLLG1DQUFtQyxLQUFLLHlOQUF5TiwyQkFBMkIsbUJBQW1CLEtBQUssd05BQXdOLHVDQUF1QyxLQUFLLDhFQUE4RSx1Q0FBdUMsS0FBSyxvU0FBb1MsK0JBQStCLHNDQUFzQyxzQ0FBc0MsdUNBQXVDLGtDQUFrQywyQ0FBMkMsb0JBQW9CLGdIQUFnSCxpQ0FBaUMsS0FBSywrRkFBK0YsdUJBQXVCLEtBQUssMEpBQTBKLCtCQUErQixvQ0FBb0Msb0JBQW9CLHNNQUFzTSxxQkFBcUIsS0FBSyx5SkFBeUosc0NBQXNDLDRDQUE0QyxvQkFBb0Isd0lBQXdJLGlDQUFpQyxLQUFLLGlNQUFpTSxtQ0FBbUMscUNBQXFDLG9CQUFvQiw4TUFBOE0sdUJBQXVCLEtBQUsscUZBQXFGLDJCQUEyQixLQUFLLHNMQUFzTCxzQkFBc0IsS0FBSyxnRkFBZ0Ysc0JBQXNCLEtBQUssbUJBQW1CO0FBQ3Zub0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELHNCQUFzQiwrQkFBK0IsMEJBQTBCLHFCQUFxQiwyQkFBMkIsS0FBSyxnQkFBZ0IsbUNBQW1DLGtDQUFrQyxzQkFBc0IsNEJBQTRCLGdDQUFnQyxxQkFBcUIscUJBQXFCLEtBQUssMEJBQTBCLHNCQUFzQiw0QkFBNEIsaUJBQWlCLEtBQUssY0FBYyxzQkFBc0IsNEJBQTRCLGdDQUFnQyxnQkFBZ0IsK0JBQStCLGtCQUFrQixLQUFLLDBCQUEwQixpQ0FBaUMsb0JBQW9CLHFCQUFxQix5QkFBeUIsc0JBQXNCLGtCQUFrQixLQUFLLHlCQUF5QiwrQkFBK0IsS0FBSywwQkFBMEIsc0JBQXNCLGdDQUFnQyxrQkFBa0IsaUNBQWlDLHNCQUFzQixzQkFBc0IsaUNBQWlDLHVDQUF1QyxvQkFBb0IsS0FBSyw0QkFBNEIsNkJBQTZCLEtBQUssc0JBQXNCLGlDQUFpQyxzQkFBc0IsK0NBQStDLDZDQUE2QyxTQUFTLGtCQUFrQixpQ0FBaUMsc0JBQXNCLCtDQUErQyw2Q0FBNkMsYUFBYSw2QkFBNkIsZ0NBQWdDLDJCQUEyQixNQUFNLDJCQUEyQiwrQkFBK0IsZ0NBQWdDLEtBQUssd0JBQXdCLDBDQUEwQyxLQUFLLE9BQU8sdUZBQXVGLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGVBQWUsT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksZ0NBQWdDLHNCQUFzQiwrQkFBK0IsMEJBQTBCLHFCQUFxQiwyQkFBMkIsS0FBSyxnQkFBZ0IsbUNBQW1DLGtDQUFrQyxzQkFBc0IsNEJBQTRCLGdDQUFnQyxxQkFBcUIscUJBQXFCLEtBQUssMEJBQTBCLHNCQUFzQiw0QkFBNEIsaUJBQWlCLEtBQUssY0FBYyxzQkFBc0IsNEJBQTRCLGdDQUFnQyxnQkFBZ0IsK0JBQStCLGtCQUFrQixLQUFLLDBCQUEwQixpQ0FBaUMsb0JBQW9CLHFCQUFxQix5QkFBeUIsc0JBQXNCLGtCQUFrQixLQUFLLHlCQUF5QiwrQkFBK0IsS0FBSywwQkFBMEIsc0JBQXNCLGdDQUFnQyxrQkFBa0IsaUNBQWlDLHNCQUFzQixzQkFBc0IsaUNBQWlDLHVDQUF1QyxvQkFBb0IsS0FBSyw0QkFBNEIsNkJBQTZCLEtBQUssc0JBQXNCLGlDQUFpQyxzQkFBc0IsK0NBQStDLDZDQUE2QyxTQUFTLGtCQUFrQixpQ0FBaUMsc0JBQXNCLCtDQUErQyw2Q0FBNkMsYUFBYSw2QkFBNkIsZ0NBQWdDLDJCQUEyQixNQUFNLDJCQUEyQiwrQkFBK0IsZ0NBQWdDLEtBQUssd0JBQXdCLDBDQUEwQyxLQUFLLG1CQUFtQjtBQUN0NEk7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQTBHO0FBQzFHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMEZBQU87Ozs7QUFJb0Q7QUFDNUUsT0FBTyxpRUFBZSwwRkFBTyxJQUFJLGlHQUFjLEdBQUcsaUdBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FtRTtBQUVwQztBQUNKO0FBRTNCbEIsaUZBQWlCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvY29udHJvbGxlcnMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvY29udHJvbGxlcnMvZ2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvZmFjdG9yaWVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9mYWN0b3JpZXMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2ZhY3Rvcmllcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2hlbHBlcnMvYXJyYXlzQXJlRXF1YWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzcz80M2Y0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9nYW1lQ29udHJvbGxlcidcclxuXHJcbmNvbnN0IGdhbWUgPSBnYW1lQ29udHJvbGxlcigpXHJcbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCkgPT4ge1xyXG4gIGdhbWUucGxhY2VBbGxTaGlwcygpXHJcbiAgcmVuZGVyUGxheWVyQm9hcmQoKVxyXG4gIHJlbmRlckFJQm9hcmQoKVxyXG4gIGNvbnN0IGFpQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlCb2FyZCcpXHJcbiAgY29uc3QgcGxheWVycyA9IGdhbWUuZ2V0UGxheWVycygpXHJcbiAgY29uc3QgYWN0aXZlUGxheWVyID0gZ2FtZS5nZXRDdXJyZW50UGxheWVyKClcclxuXHJcbiAgaWYgKGFjdGl2ZVBsYXllciA9PT0gcGxheWVycy5odW1hbikge1xyXG4gICAgYWlCb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlclBsYXllckJvYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXllckJvYXJkID0gZ2FtZS5nZXRIdW1hbkJvYXJkKClcclxuICBjb25zdCBwbGF5ZXJCb2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJCb2FyZCcpXHJcbiAgcGxheWVyQm9hcmREaXYuaW5uZXJIVE1MID0gJydcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJCb2FyZC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgY3VycmVudFJvdyA9IHBsYXllckJvYXJkW2ldXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRSb3cubGVuZ3RoOyBqKyspIHtcclxuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JvYXJkQ2VsbCcpXHJcbiAgICAgIGJ1dHRvbi5kYXRhc2V0LnJvdyA9IGlcclxuICAgICAgYnV0dG9uLmRhdGFzZXQuY29sdW1uID0galxyXG4gICAgICBjb25zdCByb3cgPSBwbGF5ZXJCb2FyZFtpXVxyXG4gICAgICBpZiAodHlwZW9mIHJvd1tqXSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2hpcENlbGwnKVxyXG4gICAgICB9XHJcbiAgICAgIHBsYXllckJvYXJkRGl2LmFwcGVuZENoaWxkKGJ1dHRvbilcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlckFJQm9hcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWlCb2FyZCA9IGdhbWUuZ2V0QUlCb2FyZCgpXHJcbiAgY29uc3QgYWlCb2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSUJvYXJkJylcclxuICBhaUJvYXJkRGl2LmlubmVySFRNTCA9ICcnXHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWlCb2FyZC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgY3VycmVudFJvdyA9IGFpQm9hcmRbaV1cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudFJvdy5sZW5ndGg7IGorKykge1xyXG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYm9hcmRDZWxsJylcclxuICAgICAgYnV0dG9uLmRhdGFzZXQucm93ID0gaVxyXG4gICAgICBidXR0b24uZGF0YXNldC5jb2x1bW4gPSBqXHJcbiAgICAgIGNvbnN0IHJvdyA9IGFpQm9hcmRbaV1cclxuICAgICAgLy8gZm9yIHRlc3RpbmcsIHRoaXMgc2hvd3MgQUkgYm9hcmQgYXQgc3RhcnRcclxuICAgICAgLy8gd2hpY2ggd2UgZG8gbm90IHdhbnRcclxuICAgICAgaWYgKHR5cGVvZiByb3dbal0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NoaXBDZWxsJylcclxuICAgICAgfVxyXG4gICAgICBhaUJvYXJkRGl2LmFwcGVuZENoaWxkKGJ1dHRvbilcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHVwZGF0ZUh1bWFuQm9hcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgaHVtYW5Cb2FyZCA9IGdhbWUuZ2V0SHVtYW5Cb2FyZCgpXHJcbiAgY29uc3QgbWlzc2VkU2hvdHMgPSBnYW1lLmdldEh1bWFuQm9hcmRPYmouZ2V0TWlzc2VkU2hvdHMoKVxyXG4gIGNvbnN0IHN1Y2Nlc3NmdWxTaG90cyA9IGdhbWUuZ2V0SHVtYW5Cb2FyZE9iai5nZXRTdWNjZXNzZnVsU2hvdHMoKVxyXG4gIGNvbnN0IGFsbERvbU5vZGVzID0gQXJyYXkuZnJvbShcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJCb2FyZCcpLmNoaWxkTm9kZXNcclxuICApXHJcblxyXG4gIG1pc3NlZFNob3RzLmZvckVhY2goKHNob3QpID0+IHtcclxuICAgIGNvbnN0IHJvdyA9IHNob3RbMF1cclxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERvbU5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXS5kYXRhc2V0XHJcbiAgICAgIGlmICgrdGFyZ2V0Tm9kZS5jb2x1bW4gPT09IGNvbHVtbiAmJiArdGFyZ2V0Tm9kZS5yb3cgPT09IHJvdykge1xyXG4gICAgICAgIGFsbERvbU5vZGVzW2ldLnRleHRDb250ZW50ID0gJ1gnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG5cclxuICBzdWNjZXNzZnVsU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xyXG4gICAgY29uc3Qgcm93ID0gc2hvdFswXVxyXG4gICAgY29uc3QgY29sdW1uID0gc2hvdFsxXVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRG9tTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGFsbERvbU5vZGVzW2ldXHJcbiAgICAgIGlmIChcclxuICAgICAgICArdGFyZ2V0Tm9kZS5kYXRhc2V0LmNvbHVtbiA9PT0gY29sdW1uICYmXHJcbiAgICAgICAgK3RhcmdldE5vZGUuZGF0YXNldC5yb3cgPT09IHJvd1xyXG4gICAgICApIHtcclxuICAgICAgICB0YXJnZXROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXBDZWxsJylcclxuICAgICAgICB0YXJnZXROb2RlLmNsYXNzTGlzdC5hZGQoJ3NoaXBIaXQnKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgdXBkYXRlQUlCb2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBhaUJvYXJkID0gZ2FtZS5nZXRBSUJvYXJkKClcclxuICBjb25zdCBtaXNzZWRTaG90cyA9IGdhbWUuZ2V0QUlCb2FyZE9iai5nZXRNaXNzZWRTaG90cygpXHJcbiAgY29uc3Qgc3VjY2Vzc2Z1bFNob3RzID0gZ2FtZS5nZXRBSUJvYXJkT2JqLmdldFN1Y2Nlc3NmdWxTaG90cygpXHJcbiAgY29uc3QgYWxsRG9tTm9kZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSUJvYXJkJykuY2hpbGROb2RlcylcclxuXHJcbiAgbWlzc2VkU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xyXG4gICAgY29uc3Qgcm93ID0gc2hvdFswXVxyXG4gICAgY29uc3QgY29sdW1uID0gc2hvdFsxXVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRG9tTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGFsbERvbU5vZGVzW2ldLmRhdGFzZXRcclxuICAgICAgaWYgKHRhcmdldE5vZGUuY29sdW1uID09PSBjb2x1bW4gJiYgdGFyZ2V0Tm9kZS5yb3cgPT09IHJvdykge1xyXG4gICAgICAgIGFsbERvbU5vZGVzW2ldLnRleHRDb250ZW50ID0gJ1gnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG5cclxuICBzdWNjZXNzZnVsU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xyXG4gICAgY29uc3Qgcm93ID0gc2hvdFswXVxyXG4gICAgY29uc3QgY29sdW1uID0gc2hvdFsxXVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRG9tTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGFsbERvbU5vZGVzW2ldXHJcbiAgICAgIGlmIChcclxuICAgICAgICB0YXJnZXROb2RlLmRhdGFzZXQuY29sdW1uID09PSBjb2x1bW4gJiZcclxuICAgICAgICB0YXJnZXROb2RlLmRhdGFzZXQucm93ID09PSByb3dcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGFyZ2V0Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwQ2VsbCcpXHJcbiAgICAgICAgdGFyZ2V0Tm9kZS5jbGFzc0xpc3QuYWRkKCdzaGlwSGl0JylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dCA9IChlKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xyXG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cclxuICBjb25zdCBhaUJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FJQm9hcmQnKVxyXG5cclxuICBpZiAoIXNlbGVjdGVkQ29sdW1uIHx8ICFzZWxlY3RlZFJvdykge1xyXG4gICAgcmV0dXJuIGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dFxyXG4gIH1cclxuXHJcbiAgY29uc3QgYWlCb2FyZCA9IGdhbWUuZ2V0QUlCb2FyZE9ialxyXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxyXG4gIGNvbnN0IGFscmVhZHlBdHRhY2tlZCA9IGFpQm9hcmQucHJldmVudFNhbWVBdHRhY2soY29vcmRpbmF0ZSlcclxuICBpZiAoYWxyZWFkeUF0dGFja2VkKXtcclxuICAgIHJldHVyblxyXG4gIH1cclxuIFxyXG4gIGdhbWUucGxheVJvdW5kKGNvb3JkaW5hdGUpXHJcbiAgY29uc3QgaHVtYW5XaW5zID0gZ2FtZS5jaGVja0ZvcldpbigpXHJcblxyXG4gIHVwZGF0ZUFJQm9hcmQoKVxyXG4gIGlmIChodW1hbldpbnMpIHtcclxuICAgIGFpQm9hcmREaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnQpXHJcbiAgICBnYW1lLnJlc2V0R2FtZVN0YXRlKClcclxuICAgIGFubm91bmNlV2lubmVyKGh1bWFuV2lucylcclxuICAgIHBsYXlBZ2FpbigpXHJcbiAgfVxyXG4gIGhhbmRsZUFJTW92ZShhaUJvYXJkRGl2KVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVBSU1vdmUgPSAoYWlCb2FyZERpdikgPT4ge1xyXG4gIGdhbWUucGxheVJvdW5kKClcclxuICBjb25zdCBhaVdpbnMgPSBnYW1lLmNoZWNrRm9yV2luKClcclxuXHJcbiAgdXBkYXRlSHVtYW5Cb2FyZCgpXHJcbiAgaWYgKGFpV2lucykge1xyXG4gICAgYWlCb2FyZERpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dClcclxuICAgIGdhbWUucmVzZXRHYW1lU3RhdGUoKVxyXG4gICAgYW5ub3VuY2VXaW5uZXIoYWlXaW5zKVxyXG4gICAgcGxheUFnYWluKClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGFubm91bmNlV2lubmVyID0gKHdpbm5lcikgPT4ge1xyXG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgY29uc3Qgd2lubmVyTmFtZSA9IHdpbm5lci5nZXROYW1lKClcclxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gYCR7d2lubmVyTmFtZX0gd2luJ3MhYFxyXG59XHJcblxyXG5jb25zdCBwbGF5QWdhaW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9wQmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lcicpXHJcbiAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICBwbGF5QWdhaW5CdG4udGV4dENvbnRlbnQgPSAnUGxheSBhZ2FpbidcclxuICB0b3BCYXJEaXYuYXBwZW5kQ2hpbGQocGxheUFnYWluQnRuKVxyXG4gIHBsYXlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0TmV3R2FtZSlcclxufVxyXG5cclxuY29uc3Qgc3RhcnROZXdHYW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvcEJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXInKVxyXG4gIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBidXR0b24nKVxyXG4gIHRvcEJhckRpdi5yZW1vdmVDaGlsZChwbGF5QWdhaW5CdG4pXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKS50ZXh0Q29udGVudCA9ICcnXHJcbiAgZGlzcGxheUNvbnRyb2xsZXIoKVxyXG59XHJcblxyXG4vLyBjb25zdCBoYW5kbGVQbGF5ZXJTZWxldGlvblxyXG5cclxuZXhwb3J0IHsgcmVuZGVyUGxheWVyQm9hcmQsIHJlbmRlckFJQm9hcmQsIGRpc3BsYXlDb250cm9sbGVyIH1cclxuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi4vZmFjdG9yaWVzL0dhbWVib2FyZCdcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vZmFjdG9yaWVzL1BsYXllcidcclxuXHJcbmNvbnN0IGdhbWVDb250cm9sbGVyID0gKCkgPT4ge1xyXG4gIC8vIENyZWF0ZSB0d28gZ2FtZSBib2FyZHNcclxuICBjb25zdCBodW1hbkJvYXJkID0gR2FtZWJvYXJkKClcclxuICBodW1hbkJvYXJkLmNyZWF0ZUdhbWVCb2FyZCgpXHJcblxyXG4gIGNvbnN0IGFpQm9hcmQgPSBHYW1lYm9hcmQoKVxyXG4gIGFpQm9hcmQuY3JlYXRlR2FtZUJvYXJkKClcclxuXHJcbiAgY29uc3QgcGxheWVyU2hpcENvb3JkcyA9IHtcclxuICAgIGNhcnJpZXI6IFtcclxuICAgICAgWzAsIDBdLFxyXG4gICAgICBbMCwgMV0sXHJcbiAgICAgIFswLCAyXSxcclxuICAgICAgWzAsIDNdLFxyXG4gICAgICBbMCwgNF1cclxuICAgIF0sXHJcbiAgICBiYXR0bGVzaGlwOiBbXHJcbiAgICAgIFsyLCAyXSxcclxuICAgICAgWzIsIDNdLFxyXG4gICAgICBbMiwgNF0sXHJcbiAgICAgIFsyLCA1XVxyXG4gICAgXSxcclxuICAgIGNydWlzZXI6IFtcclxuICAgICAgWzQsIDBdLFxyXG4gICAgICBbNSwgMF0sXHJcbiAgICAgIFs2LCAwXVxyXG4gICAgXSxcclxuICAgIHN1Ym1hcmluZTogW1xyXG4gICAgICBbNywgMV0sXHJcbiAgICAgIFs3LCAyXSxcclxuICAgICAgWzcsIDNdXHJcbiAgICBdLFxyXG4gICAgZGVzdHJveWVyOiBbXHJcbiAgICAgIFsxLCAwXSxcclxuICAgICAgWzIsIDBdXHJcbiAgICBdXHJcbiAgfVxyXG5cclxuICBjb25zdCBhaVNoaXBDb29yZHMgPSB7XHJcbiAgICBjYXJyaWVyOiBbXHJcbiAgICAgIFs5LCAwXSxcclxuICAgICAgWzksIDFdLFxyXG4gICAgICBbOSwgMl0sXHJcbiAgICAgIFs5LCAzXSxcclxuICAgICAgWzksIDRdXHJcbiAgICBdLFxyXG4gICAgYmF0dGxlc2hpcDogW1xyXG4gICAgICBbNSwgNV0sXHJcbiAgICAgIFs2LCA1XSxcclxuICAgICAgWzcsIDVdLFxyXG4gICAgICBbOCwgNV1cclxuICAgIF0sXHJcbiAgICBjcnVpc2VyOiBbXHJcbiAgICAgIFswLCA2XSxcclxuICAgICAgWzEsIDZdLFxyXG4gICAgICBbMiwgNl1cclxuICAgIF0sXHJcbiAgICBzdWJtYXJpbmU6IFtcclxuICAgICAgWzMsIDhdLFxyXG4gICAgICBbNCwgOF0sXHJcbiAgICAgIFs1LCA4XVxyXG4gICAgXSxcclxuICAgIGRlc3Ryb3llcjogW1xyXG4gICAgICBbMCwgOV0sXHJcbiAgICAgIFsxLCA5XVxyXG4gICAgXVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxhY2VBbGxTaGlwcyA9ICgpID0+IHtcclxuICAgIHBsYWNlU2hpcHMoaHVtYW5Cb2FyZCwgcGxheWVyU2hpcENvb3JkcylcclxuICAgIHBsYWNlU2hpcHMoYWlCb2FyZCwgYWlTaGlwQ29vcmRzKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxheWVycyA9IHt9XHJcblxyXG4gIGNvbnN0IGdldFBsYXllcnMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcGxheWVyc1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIoJ0h1bWFuJywgZmFsc2UpXHJcbiAgY29uc3QgYWlQbGF5ZXIgPSBQbGF5ZXIoJ0FJJywgdHJ1ZSlcclxuICBwbGF5ZXJzLmh1bWFuID0gaHVtYW5QbGF5ZXJcclxuICBwbGF5ZXJzLkFJID0gYWlQbGF5ZXJcclxuXHJcbiAgbGV0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzLmh1bWFuXHJcblxyXG4gIGNvbnN0IGdldEN1cnJlbnRQbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gY3VycmVudFBsYXllclxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxheVJvdW5kID0gKGNvb3JkaW5hdGUpID0+IHtcclxuICAgIGlmIChjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5odW1hbi5nZXROYW1lKCkpIHtcclxuICAgICAgYWlCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpXHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpID09PSBwbGF5ZXJzLkFJLmdldE5hbWUoKSkge1xyXG4gICAgICBjb25zdCBhdmFpbGFibGVNb3ZlcyA9IGh1bWFuQm9hcmQuZ2V0QUlBdmFpbGFibGVNb3ZlcygpXHJcbiAgICAgIGNvbnN0IHJhbmRvbU1vdmUgPSBjdXJyZW50UGxheWVyLm1ha2VSYW5kb21Nb3ZlKHRydWUsIGF2YWlsYWJsZU1vdmVzKVxyXG4gICAgICBodW1hbkJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tTW92ZSlcclxuICAgICAgaHVtYW5Cb2FyZC5yZW1vdmVMYXN0QUlNb3ZlKHJhbmRvbU1vdmUpXHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoUGxheWVyKClcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3dpdGNoUGxheWVyID0gKCkgPT4ge1xyXG4gICAgY3VycmVudFBsYXllciA9XHJcbiAgICAgIGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpID09PSBwbGF5ZXJzLmh1bWFuLmdldE5hbWUoKVxyXG4gICAgICAgID8gKGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzLkFJKVxyXG4gICAgICAgIDogKGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzLmh1bWFuKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tGb3JXaW4gPSAoKSA9PiB7XHJcbiAgICBsZXQgd2lubmVyXHJcbiAgICBpZiAoXHJcbiAgICAgIGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpID09PSBwbGF5ZXJzLmh1bWFuLmdldE5hbWUoKSAmJlxyXG4gICAgICBhaUJvYXJkLmFsbFNoaXBzU3VuaygpXHJcbiAgICApIHtcclxuICAgICAgd2lubmVyID0gY3VycmVudFBsYXllclxyXG4gICAgICByZXR1cm4gd2lubmVyXHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5BSS5nZXROYW1lKCkgJiZcclxuICAgICAgaHVtYW5Cb2FyZC5hbGxTaGlwc1N1bmsoKVxyXG4gICAgKSB7XHJcbiAgICAgIHdpbm5lciA9IGN1cnJlbnRQbGF5ZXJcclxuICAgICAgcmV0dXJuIHdpbm5lclxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdpbm5lclxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzZXRHYW1lU3RhdGUgPSAod2lubmVyKSA9PiB7XHJcbiAgICBodW1hbkJvYXJkLmNsZWFyR2FtZUJvYXJkKClcclxuICAgIGFpQm9hcmQuY2xlYXJHYW1lQm9hcmQoKVxyXG4gICAgaHVtYW5Cb2FyZC5jcmVhdGVHYW1lQm9hcmQoKVxyXG4gICAgYWlCb2FyZC5jcmVhdGVHYW1lQm9hcmQoKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldEh1bWFuQm9hcmQ6IGh1bWFuQm9hcmQuZ2V0Qm9hcmQsXHJcbiAgICBnZXRBSUJvYXJkOiBhaUJvYXJkLmdldEJvYXJkLFxyXG4gICAgZ2V0QUlCb2FyZE9iajogYWlCb2FyZCxcclxuICAgIGdldEh1bWFuQm9hcmRPYmo6IGh1bWFuQm9hcmQsXHJcbiAgICBzd2l0Y2hQbGF5ZXIsXHJcbiAgICBwbGF5Um91bmQsXHJcbiAgICBnZXRDdXJyZW50UGxheWVyLFxyXG4gICAgcmVzZXRHYW1lU3RhdGUsXHJcbiAgICBjaGVja0ZvcldpbixcclxuICAgIGdldFBsYXllcnMsXHJcbiAgICBwbGFjZUFsbFNoaXBzXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBnYW1lQ29udHJvbGxlciB9XHJcblxyXG5jb25zdCBwbGFjZVNoaXBzID0gKGJvYXJkLCBjb29yZGluYXRlc09iaikgPT4ge1xyXG4gIGNvbnN0IHNoaXBDb29yZGluYXRlc0FyciA9IE9iamVjdC52YWx1ZXMoY29vcmRpbmF0ZXNPYmopXHJcbiAgc2hpcENvb3JkaW5hdGVzQXJyLmZvckVhY2goKHNoaXBDb29yZGluYXRlcykgPT4ge1xyXG4gICAgYm9hcmQucGxhY2VTaGlwKHNoaXBDb29yZGluYXRlcylcclxuICB9KVxyXG59XHJcbiIsImltcG9ydCB7IGFycmF5c0FyZUVxdWFsIH0gZnJvbSAnLi4vaGVscGVycy9hcnJheXNBcmVFcXVhbCdcclxuaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vU2hpcCdcclxuXHJcbmV4cG9ydCBjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdFxyXG4gIGxldCBib2FyZCA9IFtdXHJcbiAgY29uc3Qgc2hpcE9iamVjdHMgPSBbXVxyXG4gIGNvbnN0IG1pc3NlZFNob3RzID0gW11cclxuICBjb25zdCBhaUF2YWlsYWJsZU1vdmVzID0gW11cclxuICBjb25zdCBzdWNjZXNzZnVsU2hvdHMgPSBbXVxyXG4gIGNvbnN0IHJvd3MgPSA5XHJcbiAgY29uc3QgY29sdW1ucyA9IDlcclxuXHJcbiAgY29uc3QgY3JlYXRlR2FtZUJvYXJkID0gKCkgPT4ge1xyXG4gICAgYm9hcmQgPSBbXVxyXG4gICAgZm9yIChsZXQgaSA9IHJvd3M7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGJvYXJkW2ldID0gW11cclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgYm9hcmRbaV0ucHVzaCh1bmRlZmluZWQpXHJcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IFtpLCBqXVxyXG4gICAgICAgIGFpQXZhaWxhYmxlTW92ZXMucHVzaChjb29yZGluYXRlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBjaGVja3MgaWYgY29vcmRpbmF0ZXMgZm9yIHNoaXAgaXMgb24gdGhlXHJcbiAgLy8gZ2FtZSBib2FyZFxyXG4gIGNvbnN0IHZhbGlkYXRlQ29vcmRpbmF0ZXMgPSAoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgIGxldCB2YWxpZENvb3JkaW5hdGVzID0gdHJ1ZVxyXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgICBjb25zdCByb3cgPSBjb29yZGluYXRlWzBdXHJcbiAgICAgIGNvbnN0IGNvbHVtbiA9IGNvb3JkaW5hdGVbMV1cclxuICAgICAgaWYgKHJvdyA+IDkgfHwgcm93IDwgMCkge1xyXG4gICAgICAgIHZhbGlkQ29vcmRpbmF0ZXMgPSBmYWxzZVxyXG4gICAgICAgIHJldHVybiB2YWxpZENvb3JkaW5hdGVzXHJcbiAgICAgIH0gZWxzZSBpZiAoY29sdW1uID4gOSB8fCBjb2x1bW4gPCAwKSB7XHJcbiAgICAgICAgdmFsaWRDb29yZGluYXRlcyA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkQ29vcmRpbmF0ZXNcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gdmFsaWRDb29yZGluYXRlc1xyXG4gIH1cclxuXHJcbiAgLy8gY2hlY2tzIGlmIHNoaXAgY29vcmRpbmF0ZXMgb3ZlcmxhcCB3aXRoIGFscmVhZHlcclxuICAvLyBwbGFjZWQgc2hpcCBjb29yZGluYXRlcyBmb3IgdGhlIHNhbWUgc2hpcFxyXG4gIGNvbnN0IGNoZWNrU2VsZk92ZXJsYXAgPSAoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgIGxldCBjb29yZGluYXRlc092ZXJsYXAgPSBmYWxzZVxyXG4gICAgbGV0IHByZXZDb29yZGluYXRlXHJcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgaWYgKGFycmF5c0FyZUVxdWFsKHByZXZDb29yZGluYXRlLCBjb29yZGluYXRlKSkge1xyXG4gICAgICAgICAgY29vcmRpbmF0ZXNPdmVybGFwID0gdHJ1ZVxyXG4gICAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzT3ZlcmxhcFxyXG4gICAgICAgIH1cclxuICAgICAgICBwcmV2Q29vcmRpbmF0ZSA9IGNvb3JkaW5hdGVcclxuICAgICAgfVxyXG4gICAgICBwcmV2Q29vcmRpbmF0ZSA9IGNvb3JkaW5hdGVcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzT3ZlcmxhcFxyXG4gIH1cclxuXHJcbiAgLy8gU2hvdWxkIHByZXZlbnQgYSBzaGlwIGZyb20gYmVpbmdcclxuICAvLyBwbGFjZWQgb24gdG9wIG9mIGFub3RoZXIgc2hpcFxyXG4gIGNvbnN0IGNoZWNrT3ZlcmxhcFdpdGhPdGhlclNoaXBzID0gKGNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICBsZXQgc2hpcHNPdmVybGFwID0gZmFsc2VcclxuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcclxuICAgICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZVswXVxyXG4gICAgICBjb25zdCBjb2x1bW4gPSBjb29yZGluYXRlWzFdXHJcbiAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGJvYXJkW3Jvd11bY29sdW1uXVxyXG4gICAgICBpZiAodHlwZW9mIGJvYXJkQ2VsbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBzaGlwc092ZXJsYXAgPSB0cnVlXHJcbiAgICAgICAgcmV0dXJuIHNoaXBzT3ZlcmxhcFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBzaGlwc092ZXJsYXBcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChjb29yZGluYXRlcykgPT4ge1xyXG4gICAgbGV0IHNoaXBQbGFjZWQgPSB0cnVlXHJcblxyXG4gICAgY29uc3QgbGVnYWxDb29yZGluYXRlcyA9IHZhbGlkYXRlQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpXHJcbiAgICBpZiAoIWxlZ2FsQ29vcmRpbmF0ZXMpIHtcclxuICAgICAgc2hpcFBsYWNlZCA9IGZhbHNlXHJcbiAgICAgIHJldHVybiBzaGlwUGxhY2VkXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3ZlcmxhcHBpbmdDb29yZGluYXRlcyA9IGNoZWNrU2VsZk92ZXJsYXAoY29vcmRpbmF0ZXMpXHJcbiAgICBpZiAob3ZlcmxhcHBpbmdDb29yZGluYXRlcykge1xyXG4gICAgICBzaGlwUGxhY2VkID0gZmFsc2VcclxuICAgICAgcmV0dXJuIHNoaXBQbGFjZWRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaGlwT3ZlcmxhcHBpbmcgPSBjaGVja092ZXJsYXBXaXRoT3RoZXJTaGlwcyhjb29yZGluYXRlcylcclxuICAgIGlmIChzaGlwT3ZlcmxhcHBpbmcpIHtcclxuICAgICAgc2hpcFBsYWNlZCA9IGZhbHNlXHJcbiAgICAgIHJldHVybiBzaGlwUGxhY2VkXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IGNvb3JkaW5hdGVzLmxlbmd0aFxyXG4gICAgY29uc3Qgc2hpcE9iamVjdCA9IFNoaXAoc2hpcExlbmd0aCwgMCwgZmFsc2UpXHJcbiAgICBzaGlwT2JqZWN0cy5wdXNoKHNoaXBPYmplY3QpXHJcblxyXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgICBjb25zdCByb3cgPSBjb29yZGluYXRlWzBdXHJcbiAgICAgIGNvbnN0IGNvbHVtbiA9IGNvb3JkaW5hdGVbMV1cclxuICAgICAgYm9hcmRbcm93XVtjb2x1bW5dID0gc2hpcE9iamVjdFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gc2hpcFBsYWNlZFxyXG4gIH1cclxuXHJcbiAgLy8gcHJldmVudHMgaHVtYW4gcGxheWVyIGZyb20gYXR0YWNraW5nIHByZXZpb3VzbHlcclxuICAvLyBhdHRhY2tlZCBjb29yZGluYXRlXHJcbiAgY29uc3QgcHJldmVudFNhbWVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgbGV0IGFscmVhZHlBdHRhY2tlZCA9IGZhbHNlXHJcbiAgICBzdWNjZXNzZnVsU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xyXG4gICAgICBpZiAoYXJyYXlzQXJlRXF1YWwoY29vcmRpbmF0ZSwgc2hvdCkpIHtcclxuICAgICAgICBhbHJlYWR5QXR0YWNrZWQgPSB0cnVlXHJcbiAgICAgICAgcmV0dXJuIHByZXZlbnRTYW1lQXR0YWNrXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgbWlzc2VkU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xyXG4gICAgICBpZiAoYXJyYXlzQXJlRXF1YWwoY29vcmRpbmF0ZSwgc2hvdCkpIHtcclxuICAgICAgICBhbHJlYWR5QXR0YWNrZWQgPSB0cnVlXHJcbiAgICAgICAgcmV0dXJuIHByZXZlbnRTYW1lQXR0YWNrXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gYWxyZWFkeUF0dGFja2VkXHJcbiAgfVxyXG5cclxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICBjb25zdCByb3cgPSBjb29yZGluYXRlc1swXVxyXG4gICAgY29uc3QgY29sdW1uID0gY29vcmRpbmF0ZXNbMV1cclxuICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGJvYXJkW3Jvd11bY29sdW1uXVxyXG4gICAgY29uc3Qgc2hpcE9iaiA9IGJvYXJkQ2VsbFxyXG5cclxuICAgIC8vIE5lZWQgdG8gY2hlY2sgaWYgbmV3IGNvb3JkaW5hdGUgaXMgYWxyZWFkeVxyXG4gICAgLy8gaW5zaWRlIHN1Y2Nlc3NmdWxTaG90cyBvciBtaXNzZWRTaG90c1xyXG4gICAgY29uc3QgYWxyZWFkeUF0dGFja2VkID0gcHJldmVudFNhbWVBdHRhY2soY29vcmRpbmF0ZXMpXHJcbiAgICBpZiAoYWxyZWFkeUF0dGFja2VkKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgYm9hcmRDZWxsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBzaGlwT2JqLmhpdCgpXHJcbiAgICAgIHN1Y2Nlc3NmdWxTaG90cy5wdXNoKGNvb3JkaW5hdGVzKVxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYm9hcmRDZWxsICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICBtaXNzZWRTaG90cy5wdXNoKGNvb3JkaW5hdGVzKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xyXG4gICAgbGV0IGV2ZXJ5U2hpcFNhbmsgPSB0cnVlXHJcbiAgICBzaGlwT2JqZWN0cy5mb3JFYWNoKChzaGlwT2JqKSA9PiB7XHJcbiAgICAgIGlmICghc2hpcE9iai5oYXNCZWVuU3VuaygpKSB7XHJcbiAgICAgICAgZXZlcnlTaGlwU2FuayA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIGV2ZXJ5U2hpcFNhbmtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBldmVyeVNoaXBTYW5rXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVMYXN0QUlNb3ZlID0gKHJhbmRvbU1vdmUpID0+IHtcclxuICAgIGFpQXZhaWxhYmxlTW92ZXMuZm9yRWFjaCgobW92ZSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGFycmF5c0FyZUVxdWFsKG1vdmUsIHJhbmRvbU1vdmUpKSB7XHJcbiAgICAgICAgYWlBdmFpbGFibGVNb3Zlcy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBjbGVhckdhbWVCb2FyZCA9ICgpID0+IHtcclxuICAgIHNoaXBPYmplY3RzLmxlbmd0aCA9IDBcclxuICAgIG1pc3NlZFNob3RzLmxlbmd0aCA9IDBcclxuICAgIGFpQXZhaWxhYmxlTW92ZXMubGVuZ3RoID0gMFxyXG4gICAgc3VjY2Vzc2Z1bFNob3RzLmxlbmd0aCA9IDBcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGJvYXJkXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRNaXNzZWRTaG90cyA9ICgpID0+IHtcclxuICAgIHJldHVybiBtaXNzZWRTaG90c1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0U3VjY2Vzc2Z1bFNob3RzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHN1Y2Nlc3NmdWxTaG90c1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0U2hpcE9iamVjdHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc2hpcE9iamVjdHNcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEFJQXZhaWxhYmxlTW92ZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYWlBdmFpbGFibGVNb3Zlc1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNyZWF0ZUdhbWVCb2FyZCxcclxuICAgIGdldEJvYXJkLFxyXG4gICAgcGxhY2VTaGlwLFxyXG4gICAgcmVjZWl2ZUF0dGFjayxcclxuICAgIGNsZWFyR2FtZUJvYXJkLFxyXG4gICAgZ2V0TWlzc2VkU2hvdHMsXHJcbiAgICBnZXRTdWNjZXNzZnVsU2hvdHMsXHJcbiAgICBhbGxTaGlwc1N1bmssXHJcbiAgICBnZXRBSUF2YWlsYWJsZU1vdmVzLFxyXG4gICAgdmFsaWRhdGVDb29yZGluYXRlcyxcclxuICAgIHByZXZlbnRTYW1lQXR0YWNrLFxyXG4gICAgY2hlY2tTZWxmT3ZlcmxhcCxcclxuICAgIGdldFNoaXBPYmplY3RzLFxyXG4gICAgcmVtb3ZlTGFzdEFJTW92ZSxcclxuICAgIGNoZWNrT3ZlcmxhcFdpdGhPdGhlclNoaXBzXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBQbGF5ZXIgPSAobmFtZSwgaXNBSSkgPT4ge1xyXG4gIC8vIFVzZWQgdG8gbWFrZSBBSSBzZWxlY3QgcmFuZG9tLCBsZWdhbCBjb29yZGluYXRlXHJcbiAgLy8gb24gcGxheWVycyBnYW1lIGJvYXJkXHJcbiAgY29uc3QgbWFrZVJhbmRvbU1vdmUgPSAoaXNBSSwgYXZhaWxhYmxlTW92ZXMpID0+IHtcclxuICAgIGlmICghaXNBSSB8fCBhdmFpbGFibGVNb3Zlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGF2YWlsYWJsZU1vdmVzTGVuZ3RoID0gYXZhaWxhYmxlTW92ZXMubGVuZ3RoXHJcbiAgICBjb25zdCByYW5kb21BcnJJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZU1vdmVzTGVuZ3RoKVxyXG4gICAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZSA9IGF2YWlsYWJsZU1vdmVzW3JhbmRvbUFyckluZGV4XVxyXG5cclxuICAgIHJldHVybiByYW5kb21Db29yZGluYXRlXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5hbWVcclxuICB9XHJcblxyXG4gIHJldHVybiB7IG1ha2VSYW5kb21Nb3ZlLCBnZXROYW1lIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgU2hpcCA9IChsZW5ndGgsIG51bU9mSGl0cywgaXNTdW5rKSA9PiB7XHJcbiAgLy8gSW5jcmVhc2UgbnVtYmVyIG9mIGhpdHMgaW4gc2hpcCBieSAxXHJcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xyXG4gICAgaWYgKG51bU9mSGl0cyA9PT0gbGVuZ3RoKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIG51bU9mSGl0cysrXHJcbiAgICByZXR1cm4gbnVtT2ZIaXRzXHJcbiAgfVxyXG5cclxuICAvLyBEZXRlcm1pbmUgaWYgdGhlIHNoaXAgb2JqZWN0IGhhcyBiZWVuIHN1bmtcclxuICBjb25zdCBoYXNCZWVuU3VuayA9ICgpID0+IHtcclxuICAgIGxldCBpc1N1bmsgPSBmYWxzZVxyXG5cclxuICAgIGlmIChsZW5ndGggPT09IG51bU9mSGl0cykge1xyXG4gICAgICBpc1N1bmsgPSB0cnVlXHJcbiAgICAgIHJldHVybiBpc1N1bmtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNTdW5rXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXROdW1PZkhpdHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbnVtT2ZIaXRzXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbGVuZ3RoXHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBoaXQsIGhhc0JlZW5TdW5rLCBnZXROdW1PZkhpdHMsIGdldExlbmd0aCB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGFycmF5c0FyZUVxdWFsID0gKGFycjEsIGFycjIpID0+IHtcclxuICBpZiAoYXJyMSA9PT0gbnVsbCB8fCBhcnIyID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgaWYgKGFycjEubGVuZ3RoICE9PSBhcnIyLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyMS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGFycjFbaV0gIT09IGFycjJbaV0pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxyXFxuXFxyXFxuLyogRG9jdW1lbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIEFwcGx5IGJvcmRlciBib3ggdG8gZW50aXJlIGRvY3VtZW50ICovXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIFNlY3Rpb25zXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXHJcXG4gICAqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxyXFxuICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogR3JvdXBpbmcgY29udGVudFxcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxyXFxuICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXHJcXG4gICAqL1xcclxcblxcclxcbmhyIHtcXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnByZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcbmEge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcclxcbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmFiYnJbdGl0bGVdIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgLyogMiAqL1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYixcXHJcXG5zdHJvbmcge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5jb2RlLFxcclxcbmtiZCxcXHJcXG5zYW1wIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5zbWFsbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcclxcbiAgICogYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuc3ViLFxcclxcbnN1cCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcclxcbiAgICBsaW5lLWhlaWdodDogMDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbnN1YiB7XFxyXFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuc3VwIHtcXHJcXG4gICAgdG9wOiAtMC41ZW07XFxyXFxufVxcclxcblxcclxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcclxcbiAgICovXFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3Jtc1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG5vcHRncm91cCxcXHJcXG5zZWxlY3QsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250LXNpemU6IDEwMCU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICAvKiAyICovXFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIEdpdmUgaW5wdXQgYW5kIHRleHQgYXJlYSBjb25zaXN0ZW50IGxvb2sgKi9cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDEwcHggMCAwIC0xMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGZvbnQ6IGJvbGQgMC42ZW0gc2Fucy1zZXJpZjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlcixcXHJcXG5idXR0b246Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMDAwO1xcclxcbiAgICBjb2xvcjogI2ZmZjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogR2V0cyByaWQgb2YgZGVmYXVsdCBzZWFyY2ggdG8gcmVtb3ZlIHJlc3RyaWN0aW9ucyAqL1xcclxcbmlucHV0W3R5cGU9J3NlYXJjaCddIHtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRml4IGZvciBpbmNvbnNpc3RlbnQgZGlzcGxheSBvZiBjbGVhciBcXFwieFxcXCIgaWNvbiBpbiBzZWFyY2ggaW5wdXRzIGFjcm9zcyBkaWZmZXJlbnQgYnJvd3NlcnMuIFxcclxcbiAgLCB0aGlzIGNvZGUgcmVtb3ZlcyB0aGUgaWNvbiBpbiBFZGdlIGFuZCBDaHJvbWUgd2hlbiB0aGUgaW5wdXQgbG9zZXMgZm9jdXMsIHdoaWxlIGtlZXBpbmcgaXQgdmlzaWJsZSBpbiBTYWZhcmkuICovXFxyXFxuaW5wdXRbdHlwZT0nc2VhcmNoJ106bm90KDpmb2N1cywgOmFjdGl2ZSk6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcclxcbiAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCB7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxyXFxuICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcblt0eXBlPSdidXR0b24nXSxcXHJcXG5bdHlwZT0ncmVzZXQnXSxcXHJcXG5bdHlwZT0nc3VibWl0J10ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuXFxyXFxuOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPSdidXR0b24nXTo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT0ncmVzZXQnXTo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT0nc3VibWl0J106Oi1tb3otZm9jdXMtaW5uZXIge1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPSdidXR0b24nXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT0ncmVzZXQnXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT0nc3VibWl0J106LW1vei1mb2N1c3Jpbmcge1xcclxcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXHJcXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXHJcXG4gICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgLyogMiAqL1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgLyogMyAqL1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcclxcbiAgICAvKiAxICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXHJcXG4gICAqL1xcclxcblxcclxcbnByb2dyZXNzIHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcclxcbiAgICovXFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXHJcXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcblt0eXBlPSdjaGVja2JveCddLFxcclxcblt0eXBlPSdyYWRpbyddIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxyXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT0nc2VhcmNoJ10ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXHJcXG4gICAqL1xcclxcblxcclxcblt0eXBlPSdzZWFyY2gnXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogSW50ZXJhY3RpdmVcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLypcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5zdW1tYXJ5IHtcXHJcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNaXNjXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcclxcbiAgICovXFxyXFxuXFxyXFxudGVtcGxhdGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW2hpZGRlbl0ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtJQUNJLGlCQUFp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O0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7O0lBR0k7O0FBRUo7O0lBRUksc0JBQXNCO0lBQ3RCLE1BQU07SUFDTixZQUFZO0lBQ1osTUFBTTtBQUNWOztBQUVBOztJQUVJOztBQUVKOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7OztJQUdJOztBQUVKO0lBQ0ksNkJBQTZCO0lBQzdCLE1BQU07SUFDTixvQkFBb0I7SUFDcEIsTUFBTTtBQUNWOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBOzs7SUFHSTs7QUFFSjtJQUNJLDBCQUEwQjtJQUMxQixNQUFNO0lBQ04sYUFBYTtJQUNiLE1BQU07QUFDVjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcclxcblxcclxcbi8qIERvY3VtZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxyXFxuICovXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBcHBseSBib3JkZXIgYm94IHRvIGVudGlyZSBkb2N1bWVudCAqL1xcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTZWN0aW9uc1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcclxcbiAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxyXFxufVxcclxcblxcclxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcclxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5wcmUge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXHJcXG4gICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5hYmJyW3RpdGxlXSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmIsXFxyXFxuc3Ryb25nIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuY29kZSxcXHJcXG5rYmQsXFxyXFxuc2FtcCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuc21hbGwge1xcclxcbiAgICBmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXHJcXG4gICAqIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnN1YixcXHJcXG5zdXAge1xcclxcbiAgICBmb250LXNpemU6IDc1JTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5zdWIge1xcclxcbiAgICBib3R0b206IC0wLjI1ZW07XFxyXFxufVxcclxcblxcclxcbnN1cCB7XFxyXFxuICAgIHRvcDogLTAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbWJlZGRlZCBjb250ZW50XFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcbmltZyB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9ybXNcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmlucHV0IHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxub3B0Z3JvdXAsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgLyogMiAqL1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHaXZlIGlucHV0IGFuZCB0ZXh0IGFyZWEgY29uc2lzdGVudCBsb29rICovXFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAtMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBmb250OiBib2xkIDAuNmVtIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIsXFxyXFxuYnV0dG9uOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgLyogYmFja2dyb3VuZDogIzAwMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7ICovXFxyXFxufVxcclxcblxcclxcbi8qIEdldHMgcmlkIG9mIGRlZmF1bHQgc2VhcmNoIHRvIHJlbW92ZSByZXN0cmljdGlvbnMgKi9cXHJcXG5pbnB1dFt0eXBlPSdzZWFyY2gnXSB7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEZpeCBmb3IgaW5jb25zaXN0ZW50IGRpc3BsYXkgb2YgY2xlYXIgXFxcInhcXFwiIGljb24gaW4gc2VhcmNoIGlucHV0cyBhY3Jvc3MgZGlmZmVyZW50IGJyb3dzZXJzLiBcXHJcXG4gICwgdGhpcyBjb2RlIHJlbW92ZXMgdGhlIGljb24gaW4gRWRnZSBhbmQgQ2hyb21lIHdoZW4gdGhlIGlucHV0IGxvc2VzIGZvY3VzLCB3aGlsZSBrZWVwaW5nIGl0IHZpc2libGUgaW4gU2FmYXJpLiAqL1xcclxcbmlucHV0W3R5cGU9J3NlYXJjaCddOm5vdCg6Zm9jdXMsIDphY3RpdmUpOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXHJcXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQge1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcclxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbnNlbGVjdCB7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bdHlwZT0nYnV0dG9uJ10sXFxyXFxuW3R5cGU9J3Jlc2V0J10sXFxyXFxuW3R5cGU9J3N1Ym1pdCddIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbjo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT0nYnV0dG9uJ106Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9J3Jlc2V0J106Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9J3N1Ym1pdCddOjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT0nYnV0dG9uJ106LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9J3Jlc2V0J106LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9J3N1Ym1pdCddOi1tb3otZm9jdXNyaW5nIHtcXHJcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxyXFxuICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxyXFxuICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG4gICAgZGlzcGxheTogdGFibGU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIC8qIDMgKi9cXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXHJcXG4gICAgLyogMSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5wcm9ncmVzcyB7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXHJcXG4gICAqL1xcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxyXFxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT0nY2hlY2tib3gnXSxcXHJcXG5bdHlwZT0ncmFkaW8nXSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcclxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9J3NlYXJjaCddIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250OiBpbmhlcml0O1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIEludGVyYWN0aXZlXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuXFxyXFxuZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuc3VtbWFyeSB7XFxyXFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWlzY1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXHJcXG4gICAqL1xcclxcblxcclxcbnRlbXBsYXRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcbltoaWRkZW5dIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlckNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcEJhckNvbnRhaW5lciB7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgd2lkdGg6IDc1dnc7XFxyXFxuICAgIGhlaWdodDogODBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uc2hpcENlbGwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4jYm9hcmRzQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgd2lkdGg6IDkxdnc7XFxyXFxufVxcclxcblxcclxcbiNib2FyZHNDb250YWluZXIgcCB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyQm9hcmQge1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTRweCk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNBSUJvYXJkIHtcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDU0cHgpO1xcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4vKiBidXR0b24uYm9hcmRDZWxsIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXHJcXG59ICovXFxyXFxuXFxyXFxuYnV0dG9uLnNoaXBDZWxsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5zaGlwSGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCA5NCwgMjIpO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxvQ0FBb0M7O0FBRXhDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsb0NBQW9DOzs7QUFHeEM7O0FBRUE7OztHQUdHOztBQUVIO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gICAgY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9wQmFyQ29udGFpbmVyIHtcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICB3aWR0aDogNzV2dztcXHJcXG4gICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5zaGlwQ2VsbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxufVxcclxcblxcclxcbiNib2FyZHNDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDEycHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICB3aWR0aDogOTF2dztcXHJcXG59XFxyXFxuXFxyXFxuI2JvYXJkc0NvbnRhaW5lciBwIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXJCb2FyZCB7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1NHB4KTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI0FJQm9hcmQge1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTRweCk7XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qIGJ1dHRvbi5ib2FyZENlbGwge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcclxcbn0gKi9cXHJcXG5cXHJcXG5idXR0b24uc2hpcENlbGwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnNoaXBIaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDk0LCAyMik7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy9kaXNwbGF5Q29udHJvbGxlcidcclxuXHJcbmltcG9ydCAnLi9zdHlsZXMvbm9ybWFsaXplLmNzcydcclxuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnXHJcblxyXG5kaXNwbGF5Q29udHJvbGxlcigpXHJcbiJdLCJuYW1lcyI6WyJnYW1lQ29udHJvbGxlciIsImdhbWUiLCJkaXNwbGF5Q29udHJvbGxlciIsInBsYWNlQWxsU2hpcHMiLCJyZW5kZXJQbGF5ZXJCb2FyZCIsInJlbmRlckFJQm9hcmQiLCJhaUJvYXJkRGl2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBsYXllcnMiLCJnZXRQbGF5ZXJzIiwiYWN0aXZlUGxheWVyIiwiZ2V0Q3VycmVudFBsYXllciIsImh1bWFuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVBsYXllclNlbGVjdGlvbkV2dCIsInBsYXllckJvYXJkIiwiZ2V0SHVtYW5Cb2FyZCIsInBsYXllckJvYXJkRGl2IiwiaW5uZXJIVE1MIiwiaSIsImxlbmd0aCIsImN1cnJlbnRSb3ciLCJqIiwiYnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJyb3ciLCJjb2x1bW4iLCJhcHBlbmRDaGlsZCIsImFpQm9hcmQiLCJnZXRBSUJvYXJkIiwidXBkYXRlSHVtYW5Cb2FyZCIsImh1bWFuQm9hcmQiLCJtaXNzZWRTaG90cyIsImdldEh1bWFuQm9hcmRPYmoiLCJnZXRNaXNzZWRTaG90cyIsInN1Y2Nlc3NmdWxTaG90cyIsImdldFN1Y2Nlc3NmdWxTaG90cyIsImFsbERvbU5vZGVzIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJzaG90IiwidGFyZ2V0Tm9kZSIsInRleHRDb250ZW50IiwicmVtb3ZlIiwidXBkYXRlQUlCb2FyZCIsImdldEFJQm9hcmRPYmoiLCJlIiwic2VsZWN0ZWRSb3ciLCJ0YXJnZXQiLCJzZWxlY3RlZENvbHVtbiIsImNvb3JkaW5hdGUiLCJhbHJlYWR5QXR0YWNrZWQiLCJwcmV2ZW50U2FtZUF0dGFjayIsInBsYXlSb3VuZCIsImh1bWFuV2lucyIsImNoZWNrRm9yV2luIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlc2V0R2FtZVN0YXRlIiwiYW5ub3VuY2VXaW5uZXIiLCJwbGF5QWdhaW4iLCJoYW5kbGVBSU1vdmUiLCJhaVdpbnMiLCJ3aW5uZXIiLCJ0b3BCYXJQYXJhIiwicXVlcnlTZWxlY3RvciIsIndpbm5lck5hbWUiLCJnZXROYW1lIiwidG9wQmFyRGl2IiwicGxheUFnYWluQnRuIiwic3RhcnROZXdHYW1lIiwicmVtb3ZlQ2hpbGQiLCJHYW1lYm9hcmQiLCJQbGF5ZXIiLCJjcmVhdGVHYW1lQm9hcmQiLCJwbGF5ZXJTaGlwQ29vcmRzIiwiY2FycmllciIsImJhdHRsZXNoaXAiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwiYWlTaGlwQ29vcmRzIiwicGxhY2VTaGlwcyIsImh1bWFuUGxheWVyIiwiYWlQbGF5ZXIiLCJBSSIsImN1cnJlbnRQbGF5ZXIiLCJyZWNlaXZlQXR0YWNrIiwiYXZhaWxhYmxlTW92ZXMiLCJnZXRBSUF2YWlsYWJsZU1vdmVzIiwicmFuZG9tTW92ZSIsIm1ha2VSYW5kb21Nb3ZlIiwicmVtb3ZlTGFzdEFJTW92ZSIsInN3aXRjaFBsYXllciIsImNvbnNvbGUiLCJsb2ciLCJhbGxTaGlwc1N1bmsiLCJjbGVhckdhbWVCb2FyZCIsImdldEJvYXJkIiwiYm9hcmQiLCJjb29yZGluYXRlc09iaiIsInNoaXBDb29yZGluYXRlc0FyciIsIk9iamVjdCIsInZhbHVlcyIsInNoaXBDb29yZGluYXRlcyIsInBsYWNlU2hpcCIsImFycmF5c0FyZUVxdWFsIiwiU2hpcCIsInNoaXBPYmplY3RzIiwiYWlBdmFpbGFibGVNb3ZlcyIsInJvd3MiLCJjb2x1bW5zIiwicHVzaCIsInVuZGVmaW5lZCIsInZhbGlkYXRlQ29vcmRpbmF0ZXMiLCJjb29yZGluYXRlcyIsInZhbGlkQ29vcmRpbmF0ZXMiLCJjaGVja1NlbGZPdmVybGFwIiwiY29vcmRpbmF0ZXNPdmVybGFwIiwicHJldkNvb3JkaW5hdGUiLCJpbmRleCIsImNoZWNrT3ZlcmxhcFdpdGhPdGhlclNoaXBzIiwic2hpcHNPdmVybGFwIiwiYm9hcmRDZWxsIiwic2hpcFBsYWNlZCIsImxlZ2FsQ29vcmRpbmF0ZXMiLCJvdmVybGFwcGluZ0Nvb3JkaW5hdGVzIiwic2hpcE92ZXJsYXBwaW5nIiwic2hpcExlbmd0aCIsInNoaXBPYmplY3QiLCJzaGlwT2JqIiwiaGl0IiwiZXZlcnlTaGlwU2FuayIsImhhc0JlZW5TdW5rIiwibW92ZSIsInNwbGljZSIsImdldFNoaXBPYmplY3RzIiwibmFtZSIsImlzQUkiLCJhdmFpbGFibGVNb3Zlc0xlbmd0aCIsInJhbmRvbUFyckluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tQ29vcmRpbmF0ZSIsIm51bU9mSGl0cyIsImlzU3VuayIsImdldE51bU9mSGl0cyIsImdldExlbmd0aCIsImFycjEiLCJhcnIyIl0sInNvdXJjZVJvb3QiOiIifQ==