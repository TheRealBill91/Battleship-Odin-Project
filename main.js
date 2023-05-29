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
/* harmony import */ var _helpers_delay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/delay */ "./src/helpers/delay.js");
/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameController */ "./src/controllers/gameController.js");


const game = (0,_gameController__WEBPACK_IMPORTED_MODULE_1__.gameController)();
const preGameSetup = () => {
  renderPlayerBoard();
  placeCarrierShip();
  renderAIBoard();
};
const displayController = async () => {
  // this is where the ship placement will happen for human player
  const topBarContainerPara = document.querySelector('.topBarContainer > p');
  topBarContainerPara.textContent = 'Enenmy is placing their ships...';
  await (0,_helpers_delay__WEBPACK_IMPORTED_MODULE_0__.delay)(1500);
  game.placeAIShips();
  renderAIBoard();
  topBarContainerPara.textContent = '';
  const aiBoardDiv = document.getElementById('AIBoard');
  const players = game.getPlayers();
  const activePlayer = game.getCurrentPlayer();
  if (activePlayer === players.human) {
    const newMessage = 'Attack the enemies ships!';
    const topBarContainerPara = document.querySelector('.topBarContainer > p');
    transitionTextChanges(newMessage, topBarContainerPara);
    const controller = new AbortController();
    aiBoardDiv.addEventListener('click', e => {
      handlePlayerSelectionEvt(e, controller);
    }, {
      signal: controller.signal
    });
  }
};
const placeCarrierShip = () => {
  const topBarPara = document.querySelector('.topBarContainer > p');
  topBarPara.textContent = 'Place your carrier ship';
  const humanBoardDiv = document.querySelector('#playerBoard');
  const orientationBtnValues = createOrientationToggleBtn();
  let horizontalShipOrientationStatus = orientationBtnValues[0];
  const orientationToggleBtn = orientationBtnValues[1];
  orientationToggleBtn.addEventListener('click', () => {
    if (horizontalShipOrientationStatus === true) {
      horizontalShipOrientationStatus = false;
      orientationToggleBtn.textContent = 'Vertical';
    } else {
      horizontalShipOrientationStatus = true;
      orientationToggleBtn.textContent = 'Horizontal';
    }
  });
  const controller = new AbortController();
  humanBoardDiv.addEventListener('click', e => {
    handleCarrierShipPlacement(e, horizontalShipOrientationStatus, controller);
  }, {
    signal: controller.signal
  });
};
const placeBattleShip = () => {
  const topBarPara = document.querySelector('.topBarContainer > p');
  topBarPara.textContent = 'Place your battleship';
  const humanBoardDiv = document.querySelector('#playerBoard');
  const orientationBtnValues = createOrientationToggleBtn();
  let horizontalShipOrientationStatus = orientationBtnValues[0];
  const orientationToggleBtn = orientationBtnValues[1];
  orientationToggleBtn.addEventListener('click', () => {
    if (horizontalShipOrientationStatus === true) {
      horizontalShipOrientationStatus = false;
      orientationToggleBtn.textContent = 'Vertical';
    } else {
      horizontalShipOrientationStatus = true;
      orientationToggleBtn.textContent = 'Horizontal';
    }
  });
  const controller = new AbortController();
  humanBoardDiv.addEventListener('click', e => {
    handleBattleShipPlacement(e, horizontalShipOrientationStatus, controller);
  }, {
    signal: controller.signal
  });
};
const placeCruiser = () => {
  const topBarPara = document.querySelector('.topBarContainer > p');
  topBarPara.textContent = 'Place your Cruiser';
  const humanBoardDiv = document.querySelector('#playerBoard');
  const orientationBtnValues = createOrientationToggleBtn();
  let horizontalShipOrientationStatus = orientationBtnValues[0];
  const orientationToggleBtn = orientationBtnValues[1];
  orientationToggleBtn.addEventListener('click', () => {
    if (horizontalShipOrientationStatus === true) {
      horizontalShipOrientationStatus = false;
      orientationToggleBtn.textContent = 'Vertical';
    } else {
      horizontalShipOrientationStatus = true;
      orientationToggleBtn.textContent = 'Horizontal';
    }
  });
  const controller = new AbortController();
  humanBoardDiv.addEventListener('click', e => {
    handleCruiserShipPlacement(e, horizontalShipOrientationStatus, controller);
  }, {
    signal: controller.signal
  });
};
const placeSubmarine = () => {
  const topBarPara = document.querySelector('.topBarContainer > p');
  topBarPara.textContent = 'Place your Submarine';
  const humanBoardDiv = document.querySelector('#playerBoard');
  const orientationBtnValues = createOrientationToggleBtn();
  let horizontalShipOrientationStatus = orientationBtnValues[0];
  const orientationToggleBtn = orientationBtnValues[1];
  orientationToggleBtn.addEventListener('click', () => {
    if (horizontalShipOrientationStatus === true) {
      horizontalShipOrientationStatus = false;
      orientationToggleBtn.textContent = 'Vertical';
    } else {
      horizontalShipOrientationStatus = true;
      orientationToggleBtn.textContent = 'Horizontal';
    }
  });
  const controller = new AbortController();
  humanBoardDiv.addEventListener('click', e => {
    handleSubmarineShipPlacement(e, horizontalShipOrientationStatus, controller);
  }, {
    signal: controller.signal
  });
};
const placeDestroyer = () => {
  const topBarPara = document.querySelector('.topBarContainer > p');
  topBarPara.textContent = 'Place your Destroyer';
  const humanBoardDiv = document.querySelector('#playerBoard');
  const orientationBtnValues = createOrientationToggleBtn();
  let horizontalShipOrientationStatus = orientationBtnValues[0];
  const orientationToggleBtn = orientationBtnValues[1];
  orientationToggleBtn.addEventListener('click', () => {
    if (horizontalShipOrientationStatus === true) {
      horizontalShipOrientationStatus = false;
      orientationToggleBtn.textContent = 'Vertical';
    } else {
      horizontalShipOrientationStatus = true;
      orientationToggleBtn.textContent = 'Horizontal';
    }
  });
  const controller = new AbortController();
  humanBoardDiv.addEventListener('click', e => {
    handleDestroyerShipPlacement(e, horizontalShipOrientationStatus, controller);
  }, {
    signal: controller.signal
  });
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
const renderAIBoard = async () => {
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
      // const row = aiBoard[i]

      // Used for testing, as it reveals the enemies ships on the board
      // to the user
      // if (typeof row[j] === 'object') {
      //   button.classList.add('shipCell')
      // }
      aiBoardDiv.appendChild(button);
    }
  }
};
const updateHumanBoard = () => {
  const humanBoard = game.getHumanBoard();
  const missedShots = game.getHumanBoardObj.getMissedShots();
  const successfulShots = game.getHumanBoardObj.getSuccessfulShots();
  const allDomNodes = Array.from(document.getElementById('playerBoard').childNodes);
  missedShots.forEach(async shot => {
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
      }
    }
  });
};
const updateAIBoard = async () => {
  const aiBoard = game.getAIBoard();
  const missedShots = game.getAIBoardObj.getMissedShots();
  const successfulShots = game.getAIBoardObj.getSuccessfulShots();
  const allDomNodes = Array.from(document.getElementById('AIBoard').childNodes);
  missedShots.forEach(async shot => {
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
      }
    }
  });
};
const handleCarrierShipPlacement = (e, horizontalShipOrientation, controller) => {
  const selectedRow = e.target.dataset.row;
  const selectedColumn = e.target.dataset.column;
  const coordinate = [selectedRow, selectedColumn];
  const carrierPlaced = placeCarrierOnBoard(coordinate, horizontalShipOrientation);
  if (carrierPlaced) {
    controller.abort();
    removePreviousOrientationBtn();
    placeBattleShip();
  } else {
    return placeCarrierShip;
  }
};
const handleBattleShipPlacement = (e, horizontalShipOrientation, controller) => {
  const selectedRow = e.target.dataset.row;
  const selectedColumn = e.target.dataset.column;
  const coordinate = [selectedRow, selectedColumn];
  const battleshipPlaced = placeBattleshipOnBoard(coordinate, horizontalShipOrientation);
  if (battleshipPlaced) {
    controller.abort();
    removePreviousOrientationBtn();
    placeCruiser();
  } else {
    return placeBattleShip;
  }
};
const handleCruiserShipPlacement = (e, horizontalShipOrientation, controller) => {
  const selectedRow = e.target.dataset.row;
  const selectedColumn = e.target.dataset.column;
  const coordinate = [selectedRow, selectedColumn];
  const cruiserPlaced = placeCruiserOnBoard(coordinate, horizontalShipOrientation);
  if (cruiserPlaced) {
    controller.abort();
    removePreviousOrientationBtn();
    placeSubmarine();
  } else {
    return placeCruiser;
  }
};
const handleSubmarineShipPlacement = (e, horizontalShipOrientation, controller) => {
  const selectedRow = e.target.dataset.row;
  const selectedColumn = e.target.dataset.column;
  const coordinate = [selectedRow, selectedColumn];
  const submarinePlaced = placeSubmarineOnBoard(coordinate, horizontalShipOrientation);
  if (submarinePlaced) {
    controller.abort();
    removePreviousOrientationBtn();
    placeDestroyer();
  } else {
    return placeSubmarine;
  }
};
const handleDestroyerShipPlacement = async (e, horizontalShipOrientation, controller) => {
  const selectedRow = e.target.dataset.row;
  const selectedColumn = e.target.dataset.column;
  const coordinate = [selectedRow, selectedColumn];
  const topBarContainerPara = document.querySelector('.topBarContainer > p');
  const destroyerPlaced = placeDestroyerOnBoard(coordinate, horizontalShipOrientation);
  if (destroyerPlaced) {
    controller.abort();
    topBarContainerPara.textContent = '';
    removePreviousOrientationBtn();
    await displayController();
  } else {
    return placeDestroyer;
  }
};
const placeCarrierOnBoard = (coordinate, horizontalShipOrientation) => {
  const shipType = 'carrier';
  const carrierPlaced = game.placeCarrierShip(coordinate, horizontalShipOrientation);
  const boardDOMCellsArr = [...document.querySelectorAll('#playerBoard > button')];
  if (!carrierPlaced) {
    return carrierPlaced;
  } else {
    if (horizontalShipOrientation) {
      getHorizontalDOMCoords(coordinate, boardDOMCellsArr, shipType);
    } else if (!horizontalShipOrientation) {
      getVerticalDOMCoords(coordinate, boardDOMCellsArr, shipType);
    }
  }
  return carrierPlaced;
};
const placeBattleshipOnBoard = (coordinate, horizontalShipOrientation) => {
  const shipType = 'battleship';
  const battleshipPlaced = game.placeBattleShip(coordinate, horizontalShipOrientation);
  const boardDOMCellsArr = [...document.querySelectorAll('#playerBoard > button')];
  if (!battleshipPlaced) {
    return battleshipPlaced;
  } else {
    if (horizontalShipOrientation) {
      getHorizontalDOMCoords(coordinate, boardDOMCellsArr, shipType);
    } else if (!horizontalShipOrientation) {
      getVerticalDOMCoords(coordinate, boardDOMCellsArr, shipType);
    }
  }
  return battleshipPlaced;
};
const placeCruiserOnBoard = (coordinate, horizontalShipOrientation) => {
  const shipType = 'cruiser';
  const cruiserPlaced = game.placeCruiserShip(coordinate, horizontalShipOrientation);
  const boardDOMCellsArr = [...document.querySelectorAll('#playerBoard > button')];
  if (!cruiserPlaced) {
    return cruiserPlaced;
  } else {
    if (horizontalShipOrientation) {
      getHorizontalDOMCoords(coordinate, boardDOMCellsArr, shipType);
    } else if (!horizontalShipOrientation) {
      getVerticalDOMCoords(coordinate, boardDOMCellsArr, shipType);
    }
  }
  return cruiserPlaced;
};
const placeSubmarineOnBoard = (coordinate, horizontalShipOrientation) => {
  const shipType = 'submarine';
  const submarinePlaced = game.placeSubmarineShip(coordinate, horizontalShipOrientation);
  const boardDOMCellsArr = [...document.querySelectorAll('#playerBoard > button')];
  if (!submarinePlaced) {
    return submarinePlaced;
  } else {
    if (horizontalShipOrientation) {
      getHorizontalDOMCoords(coordinate, boardDOMCellsArr, shipType);
    } else if (!horizontalShipOrientation) {
      getVerticalDOMCoords(coordinate, boardDOMCellsArr, shipType);
    }
  }
  return submarinePlaced;
};
const placeDestroyerOnBoard = (coordinate, horizontalShipOrientation) => {
  const shipType = 'destroyer';
  const destroyerPlaced = game.placeDestroyerShip(coordinate, horizontalShipOrientation);
  const boardDOMCellsArr = [...document.querySelectorAll('#playerBoard > button')];
  if (!destroyerPlaced) {
    return destroyerPlaced;
  } else {
    if (horizontalShipOrientation) {
      getHorizontalDOMCoords(coordinate, boardDOMCellsArr, shipType);
    } else if (!horizontalShipOrientation) {
      getVerticalDOMCoords(coordinate, boardDOMCellsArr, shipType);
    }
  }
  return destroyerPlaced;
};
const getHorizontalDOMCoords = (coordinate, boardDOMCellsArr, shipType) => {
  const startingColumn = Number(coordinate[1]);
  const shipLength = shipType === 'carrier' ? 5 : shipType === 'battleship' ? 4 : shipType === 'cruiser' ? 3 : shipType === 'submarine' ? 3 : shipType === 'destroyer' ? 2 : null;
  for (let i = startingColumn; i < startingColumn + shipLength; i++) {
    const row = +coordinate[0];
    const column = i;
    const domCoordinate = [row, column];
    const targetDOMBtn = findShipDOMBtn(boardDOMCellsArr, domCoordinate);
    targetDOMBtn.classList.add('shipCell');
  }
};
const getVerticalDOMCoords = (coordinate, boardDOMCellsArr, shipType) => {
  const startingRow = Number(coordinate[0]);
  const shipLength = shipType === 'carrier' ? 5 : shipType === 'battleship' ? 4 : shipType === 'cruiser' ? 3 : shipType === 'submarine' ? 3 : shipType === 'destroyer' ? 2 : null;
  for (let i = startingRow; i > startingRow - shipLength; i--) {
    const row = i;
    const column = +coordinate[1];
    const domCoordinate = [row, column];
    const targetDOMBtn = findShipDOMBtn(boardDOMCellsArr, domCoordinate);
    targetDOMBtn.classList.add('shipCell');
  }
};
const findShipDOMBtn = (boardDOMCellsArr, domCoordinate) => {
  for (let i = 0; i < boardDOMCellsArr.length; i++) {
    const domCellRow = +boardDOMCellsArr[i].dataset.row;
    const domCellColumn = +boardDOMCellsArr[i].dataset.column;
    if (domCellRow === +domCoordinate[0] && domCellColumn === +domCoordinate[1]) {
      return boardDOMCellsArr[i];
    }
  }
};
const handlePlayerSelectionEvt = async (e, controller) => {
  const selectedRow = +e.target.dataset.row;
  const selectedColumn = +e.target.dataset.column;
  const coordinate = [selectedRow, selectedColumn];
  const aiBoardDiv = document.getElementById('AIBoard');
  const aiBoard = game.getAIBoardObj;
  const alreadyAttacked = aiBoard.preventSameAttack(coordinate);
  if (selectedColumn === 'undefined' || selectedRow === 'undefined') {
    return handlePlayerSelectionEvt;
  } else if (alreadyAttacked) {
    return handlePlayerSelectionEvt;
  }
  controller.abort();
  game.playRound(coordinate);
  const humanMoveSuccessful = game.getAIBoardObj.getLastHumanMoveSuccessful();
  // Use this value when determining whether to show ship as sunk
  const shipIsSunk = game.isShipSunk('human', coordinate);
  const shipSunkResult = shipIsSunk[0];
  if (shipSunkResult) {
    displaySunkShipMessage('human');
  } else if (!shipSunkResult) {
    humanMoveSuccessful ? displaySuccessfulAttackMessage('human') : displayUnsuccessfulAttackMessage('human');
  }
  const [humanPlayer, humanWon] = game.checkForWin();
  updateAIBoard();
  await (0,_helpers_delay__WEBPACK_IMPORTED_MODULE_0__.delay)(4000);
  if (handleWinCheck(humanPlayer, humanWon, aiBoardDiv)) {
    return handlePlayerSelectionEvt;
  }
  game.switchPlayer();
  if (handleAIMove(aiBoardDiv)) {
    return handlePlayerSelectionEvt;
  }
};
const handleAIMove = async aiBoardDiv => {
  const topBarContainerPara = document.querySelector('.topBarContainer > p');
  const enemyAttackingMsg = 'Enemy is attacking your ships!';
  transitionTextChanges(enemyAttackingMsg, topBarContainerPara);
  await (0,_helpers_delay__WEBPACK_IMPORTED_MODULE_0__.delay)(3000);
  const guessedCoordinate = game.playRound();
  const aiMoveSuccessful = game.getHumanBoardObj.getLastAIMoveSuccessful();
  const shipIsSunk = game.isShipSunk('computer', guessedCoordinate);
  const shipSunkResult = shipIsSunk[0];
  if (shipSunkResult === true) {
    displaySunkShipMessage('computer');
  } else if (!shipSunkResult) {
    aiMoveSuccessful ? displaySuccessfulAttackMessage('computer') : displayUnsuccessfulAttackMessage('computer');
  }
  const [aiPlayer, aiWon] = game.checkForWin();
  updateHumanBoard();
  if (handleWinCheck(aiPlayer, aiWon, aiBoardDiv)) {
    return true;
  }
  game.switchPlayer();
  await (0,_helpers_delay__WEBPACK_IMPORTED_MODULE_0__.delay)(2500);
  const attackTheEnemyMsg = 'Attack the enemies ships...';
  transitionTextChanges(attackTheEnemyMsg, topBarContainerPara);
  await (0,_helpers_delay__WEBPACK_IMPORTED_MODULE_0__.delay)(1500);
  const controller = new AbortController();
  aiBoardDiv.addEventListener('click', e => {
    handlePlayerSelectionEvt(e, controller);
  }, {
    signal: controller.signal
  });
};
const announceWinner = winner => {
  const topBarPara = document.querySelector('.topBarContainer > p');
  const winnerName = winner.getName();
  topBarPara.textContent = `${winnerName} win's!`;
};
const playAgain = () => {
  const topBarDiv = document.querySelector('.topBarContainer');
  const playAgainBtn = document.createElement('button');
  playAgainBtn.classList.add('playAgainBtn');
  playAgainBtn.textContent = 'Play again';
  topBarDiv.appendChild(playAgainBtn);
  playAgainBtn.addEventListener('click', startNewGame);
};
const startNewGame = () => {
  const topBarDiv = document.querySelector('.topBarContainer');
  const playAgainBtn = document.querySelector('.topBarContainer > button');
  topBarDiv.removeChild(playAgainBtn);
  document.querySelector('.topBarContainer > p').textContent = '';
  preGameSetup();
};

// For each of the place ship functions, we need to remove the previous
// orientation toggle button to prevent the same listener firing for each of the
// previous orientation toggle buttons
const removePreviousOrientationBtn = () => {
  const topBarDiv = document.querySelector('.topBarContainer');
  const previousOrientationBtn = document.querySelector('.orientationToggleBtn');
  topBarDiv.removeChild(previousOrientationBtn);
};
const createOrientationToggleBtn = () => {
  const topBarDiv = document.querySelector('.topBarContainer');
  const horizontalShipOrientationStatus = true;
  const orientationToggleBtn = document.createElement('button');
  orientationToggleBtn.classList.add('orientationToggleBtn');
  orientationToggleBtn.textContent = 'Horizontal';
  topBarDiv.appendChild(orientationToggleBtn);
  return [horizontalShipOrientationStatus, orientationToggleBtn];
};
const displaySuccessfulAttackMessage = player => {
  if (player === 'human') {
    const topBarContainerPara = document.querySelector('.topBarContainer > p');
    const attackAndHitMsg = 'You attacked the enemy... and hit their ship!';
    setTimeout(transitionTextChanges, 10, attackAndHitMsg, topBarContainerPara);
  } else if (player === 'computer') {
    const topBarContainerPara = document.querySelector('.topBarContainer > p');
    const enemyHitMsg = 'The enemy launched an attack... and hit your ship!';
    setTimeout(transitionTextChanges, 10, enemyHitMsg, topBarContainerPara);
  }
};
const displayUnsuccessfulAttackMessage = player => {
  if (player === 'human') {
    const topBarContainerPara = document.querySelector('.topBarContainer > p');
    const unsuccessfulAttackMsg = 'Your attack on the enemy was unsuccessful';
    setTimeout(transitionTextChanges, 10, unsuccessfulAttackMsg, topBarContainerPara);
  } else if (player === 'computer') {
    const topBarContainerPara = document.querySelector('.topBarContainer > p');
    const unsuccessfulEnemyAttackMsg = 'The enemies attack was unsuccessful';
    setTimeout(transitionTextChanges, 10, unsuccessfulEnemyAttackMsg, topBarContainerPara);
  }
};
const displaySunkShipMessage = player => {
  if (player === 'human') {
    const topBarContainerPara = document.querySelector('.topBarContainer > p');
    const sunkShipMessage = 'You have sunk the enemies ship!';
    setTimeout(transitionTextChanges, 10, sunkShipMessage, topBarContainerPara);
  } else if (player === 'computer') {
    const topBarContainerPara = document.querySelector('.topBarContainer > p');
    const sunkShipMessage = 'The enemy sunk one of your ships!';
    setTimeout(transitionTextChanges, 10, sunkShipMessage, topBarContainerPara);
  }
};
const handleWinCheck = (currentPlayer, playerWon, boardDiv) => {
  if (playerWon) {
    boardDiv.removeEventListener('click', handlePlayerSelectionEvt);
    game.resetGameState();
    announceWinner(currentPlayer);
    playAgain();
    return true;
  }
};
const transitionTextChanges = async (newMessage, domElement) => {
  domElement.classList.add('invisible');
  await (0,_helpers_delay__WEBPACK_IMPORTED_MODULE_0__.delay)(400);
  domElement.textContent = newMessage;
  await (0,_helpers_delay__WEBPACK_IMPORTED_MODULE_0__.delay)(400);
  domElement.classList.remove('invisible');
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
/* harmony export */   "gameController": () => (/* binding */ gameController),
/* harmony export */   "placeShips": () => (/* binding */ placeShips)
/* harmony export */ });
/* harmony import */ var _factories_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/Gameboard */ "./src/factories/Gameboard.js");
/* harmony import */ var _factories_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/Player */ "./src/factories/Player.js");
/* harmony import */ var _helpers_arraysAreEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/arraysAreEqual */ "./src/helpers/arraysAreEqual.js");
/* harmony import */ var _helpers_rotateAIBoards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/rotateAIBoards */ "./src/helpers/rotateAIBoards.js");




const gameController = () => {
  // Create two game boards
  const humanBoard = (0,_factories_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
  humanBoard.createGameBoard();
  const aiBoard = (0,_factories_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
  aiBoard.createGameBoard();
  const placeCarrierShip = (coordinate, horizontalShipOrientation) => {
    let carrierPlaced = true;
    const carrierArr = determineCarrierArrCoords(horizontalShipOrientation, coordinate);
    const shipPlaced = humanBoard.placeShip(carrierArr);
    if (!shipPlaced) {
      carrierPlaced = false;
      return carrierPlaced;
    }
    return carrierPlaced;
  };
  const determineCarrierArrCoords = (horizontalShipOrientation, coordinate) => {
    const carrierArr = [];
    if (horizontalShipOrientation) {
      carrierArr.push(coordinate);
      for (let i = 1; i < 5; i++) {
        const coord = [coordinate[0], (+coordinate[1] + i).toString()];
        carrierArr.push(coord);
      }
    } else if (!horizontalShipOrientation) {
      carrierArr.push(coordinate);
      for (let i = 1; i < 5; i++) {
        const coord = [(+coordinate[0] - i).toString(), coordinate[1]];
        carrierArr.push(coord);
      }
    }
    return carrierArr;
  };
  const placeBattleShip = (coordinate, horizontalShipOrientation) => {
    let battleshipPlaced = true;
    const battleshipArr = determineBattleshipArrCoords(horizontalShipOrientation, coordinate);
    const shipPlaced = humanBoard.placeShip(battleshipArr);
    if (!shipPlaced) {
      battleshipPlaced = false;
      return battleshipPlaced;
    }
    return battleshipPlaced;
  };
  const determineBattleshipArrCoords = (horizontalShipOrientation, coordinate) => {
    const battleshipArr = [];
    if (horizontalShipOrientation) {
      battleshipArr.push(coordinate);
      for (let i = 1; i < 4; i++) {
        const coord = [coordinate[0], (+coordinate[1] + i).toString()];
        battleshipArr.push(coord);
      }
    } else if (!horizontalShipOrientation) {
      battleshipArr.push(coordinate);
      for (let i = 1; i < 4; i++) {
        const coord = [(+coordinate[0] - i).toString(), coordinate[1]];
        battleshipArr.push(coord);
      }
    }
    return battleshipArr;
  };
  const placeCruiserShip = (coordinate, horizontalShipOrientation) => {
    let cruiserPlaced = true;
    const cruiserArr = determineCruiserArrCoords(horizontalShipOrientation, coordinate);
    const shipPlaced = humanBoard.placeShip(cruiserArr);
    if (!shipPlaced) {
      cruiserPlaced = false;
      return cruiserPlaced;
    }
    return cruiserPlaced;
  };
  const determineCruiserArrCoords = (horizontalShipOrientation, coordinate) => {
    const cruiserArr = [];
    if (horizontalShipOrientation) {
      cruiserArr.push(coordinate);
      for (let i = 1; i < 3; i++) {
        const coord = [coordinate[0], (+coordinate[1] + i).toString()];
        cruiserArr.push(coord);
      }
    } else if (!horizontalShipOrientation) {
      cruiserArr.push(coordinate);
      for (let i = 1; i < 3; i++) {
        const coord = [(+coordinate[0] - i).toString(), coordinate[1]];
        cruiserArr.push(coord);
      }
    }
    return cruiserArr;
  };
  const placeSubmarineShip = (coordinate, horizontalShipOrientation) => {
    let submarinePlaced = true;
    const submarineArr = determineSubmarineArrCoords(horizontalShipOrientation, coordinate);
    const shipPlaced = humanBoard.placeShip(submarineArr);
    if (!shipPlaced) {
      submarinePlaced = false;
      return submarinePlaced;
    }
    return submarinePlaced;
  };
  const determineSubmarineArrCoords = (horizontalShipOrientation, coordinate) => {
    const submarineArr = [];
    if (horizontalShipOrientation) {
      submarineArr.push(coordinate);
      for (let i = 1; i < 3; i++) {
        const coord = [coordinate[0], (+coordinate[1] + i).toString()];
        submarineArr.push(coord);
      }
    } else if (!horizontalShipOrientation) {
      submarineArr.push(coordinate);
      for (let i = 1; i < 3; i++) {
        const coord = [(+coordinate[0] - i).toString(), coordinate[1]];
        submarineArr.push(coord);
      }
    }
    return submarineArr;
  };
  const placeDestroyerShip = (coordinate, horizontalShipOrientation) => {
    let destroyerPlaced = true;
    const destroyerArr = determineDestroyerArrCoords(horizontalShipOrientation, coordinate);
    const shipPlaced = humanBoard.placeShip(destroyerArr);
    if (!shipPlaced) {
      destroyerPlaced = false;
      return destroyerPlaced;
    }
    return destroyerPlaced;
  };
  const determineDestroyerArrCoords = (horizontalShipOrientation, coordinate) => {
    const destroyerArr = [];
    if (horizontalShipOrientation) {
      destroyerArr.push(coordinate);
      for (let i = 1; i < 2; i++) {
        const coord = [coordinate[0], (+coordinate[1] + i).toString()];
        destroyerArr.push(coord);
      }
    } else if (!horizontalShipOrientation) {
      destroyerArr.push(coordinate);
      for (let i = 1; i < 2; i++) {
        const coord = [(+coordinate[0] - i).toString(), coordinate[1]];
        destroyerArr.push(coord);
      }
    }
    return destroyerArr;
  };
  const placeAIShips = () => {
    placeShips(aiBoard, (0,_helpers_rotateAIBoards__WEBPACK_IMPORTED_MODULE_3__.returnRandomAIBoard)());
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
      aiBoard.receiveAttack(coordinate, currentPlayer.getName());
    } else if (currentPlayer.getName() === players.AI.getName()) {
      const nextMove = computersNextMove();
      humanBoard.receiveAttack(nextMove, currentPlayer.getName());
      humanBoard.removeLastAIMove(nextMove);
      return nextMove;
    }
  };
  const computersNextMove = () => {
    const availableMoves = humanBoard.getAIAvailableMoves();
    const lastAIMoveSuccessful = humanBoard.getLastAIMoveSuccessful();
    if (lastAIMoveSuccessful) {
      const adjacentSlots = currentPlayer.getAdjacentSlots(true, availableMoves, humanBoard.getSuccessfulShots(), humanBoard.getMissedShots());
      humanBoard.addAdjacentSlotsToQueue(adjacentSlots);
      const nextMove = humanBoard.getAdjacentQueueSlot();
      return nextMove;
    } else if (!lastAIMoveSuccessful) {
      const randomMove = currentPlayer.makeRandomMove(true, availableMoves);
      return randomMove;
    }
  };
  const switchPlayer = () => {
    currentPlayer = currentPlayer.getName() === players.human.getName() ? currentPlayer = players.AI : currentPlayer = players.human;
  };
  const checkForWin = () => {
    let winner = [currentPlayer, false];
    if (currentPlayer.getName() === players.human.getName() && aiBoard.allShipsSunk()) {
      winner = [currentPlayer, true];
      return winner;
    } else if (currentPlayer.getName() === players.AI.getName() && humanBoard.allShipsSunk()) {
      winner = [currentPlayer, true];
      return winner;
    }
    return winner;
  };
  const isShipSunk = (player, coordinate) => {
    let shipIsSunk;
    if (player === 'human') {
      const lastSuccessfulHumanMove = aiBoard.getLastSuccessfulMove();
      if (lastSuccessfulHumanMove === undefined || lastSuccessfulHumanMove !== coordinate) {
        shipIsSunk = false;
        return [shipIsSunk];
      }
      const gameBoard = aiBoard.getBoard();
      const targetShipObj = gameBoard[lastSuccessfulHumanMove[0]][lastSuccessfulHumanMove[1]];
      shipIsSunk = targetShipObj.hasBeenSunk();
      return [shipIsSunk, targetShipObj, lastSuccessfulHumanMove];
    } else if (player === 'computer') {
      const lastSuccessfulAIMove = humanBoard.getLastSuccessfulMove();
      if (lastSuccessfulAIMove === undefined || lastSuccessfulAIMove !== coordinate) {
        shipIsSunk = false;
        return [shipIsSunk];
      }
      const gameBoard = humanBoard.getBoard();
      const targetShipObj = gameBoard[lastSuccessfulAIMove[0]][lastSuccessfulAIMove[1]];
      shipIsSunk = targetShipObj.hasBeenSunk();
      return [shipIsSunk, targetShipObj, lastSuccessfulAIMove];
    }
  };
  const resetGameState = winner => {
    humanBoard.clearGameBoard();
    aiBoard.clearGameBoard();
    humanBoard.resetShipObjects();
    aiBoard.resetShipObjects();
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
    placeDestroyerShip,
    isShipSunk
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
  let adjacentSlotsQueue = [];
  const rows = 9;
  const columns = 9;
  let lastAIMoveSuccessful = false;
  let lastHumanMoveSuccessful = false;
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
  const receiveAttack = (coordinates, currentPlayer) => {
    const row = +coordinates[0];
    const column = +coordinates[1];
    // coordinates = [row, column]
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
      currentPlayer === 'Human' ? lastHumanMoveSuccessful = true : lastAIMoveSuccessful = true;
      successfulShots.push(coordinates);
    } else if (typeof boardCell !== 'object') {
      lastAIMoveSuccessful = false;
      lastHumanMoveSuccessful = false;
      missedShots.push(coordinates);
      removeAdjacentSlot(coordinates);
    }
  };

  // If the computer randomly guesses a spot that is already in the adjacency
  // slot queue, we need to remove it (from the adjacency queue) so
  // the computer does not attempt to
  // use the already guessed spot when pulling from the adjacency
  // queue for it's next move
  const removeAdjacentSlot = coordinates => {
    const targetCoordinates = coordinates;
    const adjacentQueue = new Set();
    for (const slot of adjacentSlotsQueue) {
      adjacentQueue.add(slot.toString());
    }

    // filter the adjacency slot queue down to slots that have NOT
    // already been guesed.
    adjacentSlotsQueue = adjacentSlotsQueue.filter(slot => !(0,_helpers_arraysAreEqual__WEBPACK_IMPORTED_MODULE_0__.arraysAreEqual)(slot, targetCoordinates));
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
  const addAdjacentSlotsToQueue = adjacentSlots => {
    adjacentSlots.forEach(slot => {
      adjacentSlotsQueue.push(slot);
    });
  };
  const clearGameBoard = () => {
    shipObjects.length = 0;
    missedShots.length = 0;
    aiAvailableMoves.length = 0;
    successfulShots.length = 0;
    adjacentSlotsQueue.length = 0;
    lastAIMoveSuccessful = false;
    lastHumanMoveSuccessful = false;
  };
  const resetShipObjects = () => {
    shipObjects.forEach(shipObj => {
      shipObj.resetShip();
    });
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
  const getLastAIMoveSuccessful = () => {
    return lastAIMoveSuccessful;
  };
  const getLastHumanMoveSuccessful = () => {
    return lastHumanMoveSuccessful;
  };
  const getAdjacentSlotsQueue = () => {
    return adjacentSlotsQueue;
  };
  const getAdjacentQueueSlot = () => {
    return adjacentSlotsQueue.pop();
  };
  const getLastSuccessfulMove = () => {
    return successfulShots.at(-1);
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
    checkOverlapWithOtherShips,
    getLastAIMoveSuccessful,
    getLastHumanMoveSuccessful,
    getAdjacentSlotsQueue,
    addAdjacentSlotsToQueue,
    getAdjacentQueueSlot,
    removeAdjacentSlot,
    getLastSuccessfulMove,
    resetShipObjects
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
/* harmony import */ var _helpers_arraysAreEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/arraysAreEqual */ "./src/helpers/arraysAreEqual.js");

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
  const getAdjacentSlots = (isAI, availableMoves, successfulShots, missedShots) => {
    if (!isAI || availableMoves.length === 0) {
      return undefined;
    }
    const lastSuccessfulMove = successfulShots.at(-1);
    const adjacentSlots = retrieveAdjacentSlots(lastSuccessfulMove);
    const legalAdjacentSlots = removeIllegalAdjacentSlots(adjacentSlots);
    const availableAdjacentSlots = preventPreviousShotToQueue(availableMoves, legalAdjacentSlots, successfulShots, missedShots);
    return availableAdjacentSlots;
  };
  const getCellAbove = lastSuccessfulMove => {
    // the row needs to change by one
    const newArr = [];
    const newRow = +lastSuccessfulMove[0] - 1;
    if (newRow > 9 || newRow < 0) {
      return 'illegal';
    }
    newArr[0] = newRow;
    newArr[1] = +lastSuccessfulMove[1];
    return newArr;
  };
  const getCellBelow = lastSuccessfulMove => {
    // the row needs to change by one
    const newArr = [];
    const newRow = +lastSuccessfulMove[0] + 1;
    if (newRow > 9 || newRow < 0) {
      return 'illegal';
    }
    newArr[0] = newRow;
    newArr[1] = +lastSuccessfulMove[1];
    return newArr;
  };
  const getCellToRight = lastSuccessfulMove => {
    // the row needs to change by one
    const newArr = [];
    const newColumn = +lastSuccessfulMove[1] + 1;
    if (newColumn > 9 || newColumn < 0) {
      return 'illegal';
    }
    newArr[0] = +lastSuccessfulMove[0];
    newArr[1] = newColumn;
    return newArr;
  };
  const getCellToLeft = lastSuccessfulMove => {
    // the row needs to change by one
    const newArr = [];
    const newColumn = +lastSuccessfulMove[1] - 1;
    if (newColumn > 9 || newColumn < 0) {
      return 'illegal';
    }
    newArr[0] = +lastSuccessfulMove[0];
    newArr[1] = newColumn;
    return newArr;
  };
  const retrieveAdjacentSlots = lastSuccessfulMove => {
    const lastSuccessfulMoveValue = lastSuccessfulMove;
    const adjacentSlots = [];
    adjacentSlots.push(getCellAbove(lastSuccessfulMoveValue));
    adjacentSlots.push(getCellBelow(lastSuccessfulMoveValue));
    adjacentSlots.push(getCellToRight(lastSuccessfulMoveValue));
    adjacentSlots.push(getCellToLeft(lastSuccessfulMoveValue));
    return adjacentSlots;
  };

  // prevents adding adjacent slots that are not on the board
  const removeIllegalAdjacentSlots = adjacentSlots => {
    const adjacentSlotsArr = adjacentSlots;
    adjacentSlotsArr.forEach((slot, index) => {
      if (slot === 'illegal') {
        adjacentSlotsArr.splice(index, 1);
      }
    });
    return adjacentSlotsArr;
  };

  // if the computer has already (randomly) guessed a spot on the board, prevent
  // adding the spot to the adjacency list
  const preventPreviousShotToQueue = (availableMoves, adjacentSlots, successfulShots, missedShots) => {
    const slots = adjacentSlots;
    const allPreviousAttacks = successfulShots.concat(missedShots);
    const previousAttacks = new Set();
    for (const shot of allPreviousAttacks) {
      previousAttacks.add(shot.toString());
    }

    // Go through each adjacency slot, and determine if the slot is in the
    // previousAttacks method. We are filtering out the slots that are in
    // the previous attack set, as we do not want to have the computer
    // to use those slots again in future turns
    const filteredSlots = slots.filter(slot => !previousAttacks.has(slot.toString()));
    return filteredSlots;
  };
  const getName = () => {
    return name;
  };
  return {
    makeRandomMove,
    getName,
    getAdjacentSlots,
    preventPreviousShotToQueue
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
  const resetShip = () => {
    if (numOfHits === length) {
      numOfHits = 0;
      isSunk = false;
    }
  };
  return {
    hit,
    hasBeenSunk,
    getNumOfHits,
    getLength,
    resetShip
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

/***/ "./src/helpers/delay.js":
/*!******************************!*\
  !*** ./src/helpers/delay.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delay": () => (/* binding */ delay)
/* harmony export */ });
// delays execution of a function for a set amount of time
const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/***/ }),

/***/ "./src/helpers/rotateAIBoards.js":
/*!***************************************!*\
  !*** ./src/helpers/rotateAIBoards.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aiShipCoordsOne": () => (/* binding */ aiShipCoordsOne),
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Play&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --default-font: 'Play', sans-serif, 'Helvetica Neue', Helvetica, Arial,\r\n    sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n  background: linear-gradient(darkblue, lightblue);\r\n  font-family: var(--default-font);\r\n}\r\n\r\n.logo img {\r\n  height: 70px;\r\n  width: auto;\r\n  border-radius: 50%;\r\n}\r\n\r\nheader {\r\n  background-color: darkblue;\r\n  color: rgb(236, 236, 236);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 100px;\r\n  padding: 8px 0px;\r\n  background-color: #0000003d;\r\n  /* opacity: 0.6; */\r\n  z-index: 1;\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.headerContainer {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  justify-content: center;\r\n}\r\n\r\n.headerContainer h1 {\r\n  font-size: 2.3rem;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex: 1;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  background-color: radial #333;\r\n}\r\n\r\n.topBarContainer {\r\n  /* outline: 1px solid black; */\r\n  width: 70vw;\r\n  height: 80px;\r\n  margin-top: 8%;\r\n  display: flex;\r\n  gap: 10%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 12px 12px;\r\n  background-color: lightgray;\r\n  box-shadow: 0px 2px 1px #7a7a7a42;\r\n}\r\n\r\n.topBarContainer p {\r\n  align-items: center;\r\n  transition: opacity 0.5s ease-in-out;\r\n  font-size: 1.4rem;\r\n  opacity: 1;\r\n  text-align: center;\r\n}\r\n\r\np.invisible {\r\n  transition: opacity 0.5s ease-in-out;\r\n  opacity: 0;\r\n}\r\n\r\nbutton.shipCell {\r\n  background-color: grey;\r\n  transition: background-color 0.2s ease-in-out;\r\n}\r\n\r\n#AIBoard button,\r\n#playerBoard button {\r\n  border-radius: 0;\r\n}\r\n\r\n.playerBoardContainer,\r\n.aiBoardContainer {\r\n  display: grid;\r\n}\r\n\r\n#boardsContainer {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 24px;\r\n  /* outline: 1px solid black */\r\n  padding: 12px;\r\n  display: grid;\r\n  grid-template-rows: none;\r\n  grid-template-columns: repeat(auto-fit, minmax(400px, 38vw));\r\n  width: 83vw;\r\n  margin-bottom: 14px;\r\n}\r\n\r\nbutton.orientationToggleBtn {\r\n  background-color: #333;\r\n  color: white;\r\n  border-radius: 8px;\r\n  height: 60%;\r\n  width: 100px;\r\n  font-size: 1rem;\r\n  transition: 0.1s ease-in-out;\r\n  border: none;\r\n  font-family: var(--default-font);\r\n}\r\n\r\nbutton.playAgainBtn {\r\n  background-color: #333;\r\n  color: white;\r\n  border-radius: 8px;\r\n  height: 60%;\r\n  width: 100px;\r\n  font-size: 1rem;\r\n  transition: 0.1s ease-in-out;\r\n  border: none;\r\n  font-family: var(--default-font);\r\n}\r\n\r\nbutton.orientationToggleBtn:hover,\r\nbutton.orientationToggleBtn:active {\r\n  background-color: #3c3c3c;\r\n  border: none;\r\n}\r\n\r\n#boardsContainer p {\r\n  justify-self: center;\r\n  font-size: 1.2rem;\r\n  color: white;\r\n  background-color: grey;\r\n  padding: 6px 8px;\r\n  border-radius: 8px 8px;\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#playerBoard {\r\n  outline: 1px solid black;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 50px);\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\r\n  border-radius: 4px;\r\n  background-color: rgb(235, 235, 235);\r\n}\r\n\r\n#AIBoard {\r\n  outline: 1px solid black;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 50px);\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\r\n  border-radius: 4px;\r\n  background-color: rgb(235, 235, 235);\r\n}\r\n\r\nbutton.boardCell {\r\n  border-radius: 0px;\r\n  background-color: rgb(235, 235, 235);\r\n  color: black;\r\n  font-size: 1rem;\r\n  transition: opacity 0.3s ease-in;\r\n}\r\n\r\nbutton.shipCell {\r\n  background-color: #333;\r\n  border: 1px solid black;\r\n  transition: background-color 0.3s ease-in;\r\n}\r\n\r\nbutton.shipHit {\r\n  background-color: rgb(114, 21, 21);\r\n  transition: background-color 0.3s ease-in;\r\n}\r\n\r\n@media only screen and (max-device-width: 812px) {\r\n  #boardsContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 16px;\r\n    /*  outline: 1px solid black; */\r\n    padding: 12px;\r\n    display: grid;\r\n    grid-template-rows: none;\r\n    grid-template-columns: repeat(auto-fit, minmax(325px, 38vw));\r\n    width: 86vw;\r\n    margin-bottom: 14px;\r\n    margin-bottom: 24px;\r\n  }\r\n\r\n  #AIBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 42px);\r\n    background-color: rgb(235, 235, 235);\r\n  }\r\n\r\n  #playerBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 42px);\r\n    background-color: rgb(235, 235, 235);\r\n  }\r\n\r\n  .topBarContainer {\r\n    /* outline: 1px solid black; */\r\n    height: 40vh;\r\n    margin-top: 8%;\r\n    display: flex;\r\n    gap: 8%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 12px 12px;\r\n    background-color: lightgray;\r\n    box-shadow: 0px 2px 1px #7a7a7a42;\r\n    width: 76vw;\r\n    /* width: 100%; */\r\n    max-height: 118px;\r\n    padding: 8px;\r\n  }\r\n\r\n  .topBarContainer p {\r\n    /* outline: 1px solid black; */\r\n    font-size: 1.1rem;\r\n    height: fit-content;\r\n    margin: 0;\r\n    max-height: 80vh;\r\n  }\r\n\r\n  #boardsContainer p {\r\n    justify-self: center;\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  button.orientationToggleBtn {\r\n    background-color: #333;\r\n    color: white;\r\n    border-radius: 8px;\r\n    height: 50%;\r\n    width: 100px;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  button.playAgainBtn {\r\n    background-color: #333;\r\n    color: white;\r\n    border-radius: 8px;\r\n    height: 50%;\r\n    width: 100px;\r\n    font-size: 1rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Play&display=swap');\r\n\r\n:root {\r\n  --default-font: 'Play', sans-serif, 'Helvetica Neue', Helvetica, Arial,\r\n    sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n  background: linear-gradient(darkblue, lightblue);\r\n  font-family: var(--default-font);\r\n}\r\n\r\n.logo img {\r\n  height: 70px;\r\n  width: auto;\r\n  border-radius: 50%;\r\n}\r\n\r\nheader {\r\n  background-color: darkblue;\r\n  color: rgb(236, 236, 236);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 100px;\r\n  padding: 8px 0px;\r\n  background-color: #0000003d;\r\n  /* opacity: 0.6; */\r\n  z-index: 1;\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.headerContainer {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  justify-content: center;\r\n}\r\n\r\n.headerContainer h1 {\r\n  font-size: 2.3rem;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex: 1;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  background-color: radial #333;\r\n}\r\n\r\n.topBarContainer {\r\n  /* outline: 1px solid black; */\r\n  width: 70vw;\r\n  height: 80px;\r\n  margin-top: 8%;\r\n  display: flex;\r\n  gap: 10%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 12px 12px;\r\n  background-color: lightgray;\r\n  box-shadow: 0px 2px 1px #7a7a7a42;\r\n}\r\n\r\n.topBarContainer p {\r\n  align-items: center;\r\n  transition: opacity 0.5s ease-in-out;\r\n  font-size: 1.4rem;\r\n  opacity: 1;\r\n  text-align: center;\r\n}\r\n\r\np.invisible {\r\n  transition: opacity 0.5s ease-in-out;\r\n  opacity: 0;\r\n}\r\n\r\nbutton.shipCell {\r\n  background-color: grey;\r\n  transition: background-color 0.2s ease-in-out;\r\n}\r\n\r\n#AIBoard button,\r\n#playerBoard button {\r\n  border-radius: 0;\r\n}\r\n\r\n.playerBoardContainer,\r\n.aiBoardContainer {\r\n  display: grid;\r\n}\r\n\r\n#boardsContainer {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 24px;\r\n  /* outline: 1px solid black */\r\n  padding: 12px;\r\n  display: grid;\r\n  grid-template-rows: none;\r\n  grid-template-columns: repeat(auto-fit, minmax(400px, 38vw));\r\n  width: 83vw;\r\n  margin-bottom: 14px;\r\n}\r\n\r\nbutton.orientationToggleBtn {\r\n  background-color: #333;\r\n  color: white;\r\n  border-radius: 8px;\r\n  height: 60%;\r\n  width: 100px;\r\n  font-size: 1rem;\r\n  transition: 0.1s ease-in-out;\r\n  border: none;\r\n  font-family: var(--default-font);\r\n}\r\n\r\nbutton.playAgainBtn {\r\n  background-color: #333;\r\n  color: white;\r\n  border-radius: 8px;\r\n  height: 60%;\r\n  width: 100px;\r\n  font-size: 1rem;\r\n  transition: 0.1s ease-in-out;\r\n  border: none;\r\n  font-family: var(--default-font);\r\n}\r\n\r\nbutton.orientationToggleBtn:hover,\r\nbutton.orientationToggleBtn:active {\r\n  background-color: #3c3c3c;\r\n  border: none;\r\n}\r\n\r\n#boardsContainer p {\r\n  justify-self: center;\r\n  font-size: 1.2rem;\r\n  color: white;\r\n  background-color: grey;\r\n  padding: 6px 8px;\r\n  border-radius: 8px 8px;\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#playerBoard {\r\n  outline: 1px solid black;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 50px);\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\r\n  border-radius: 4px;\r\n  background-color: rgb(235, 235, 235);\r\n}\r\n\r\n#AIBoard {\r\n  outline: 1px solid black;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 50px);\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\r\n  border-radius: 4px;\r\n  background-color: rgb(235, 235, 235);\r\n}\r\n\r\nbutton.boardCell {\r\n  border-radius: 0px;\r\n  background-color: rgb(235, 235, 235);\r\n  color: black;\r\n  font-size: 1rem;\r\n  transition: opacity 0.3s ease-in;\r\n}\r\n\r\nbutton.shipCell {\r\n  background-color: #333;\r\n  border: 1px solid black;\r\n  transition: background-color 0.3s ease-in;\r\n}\r\n\r\nbutton.shipHit {\r\n  background-color: rgb(114, 21, 21);\r\n  transition: background-color 0.3s ease-in;\r\n}\r\n\r\n@media only screen and (max-device-width: 812px) {\r\n  #boardsContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 16px;\r\n    /*  outline: 1px solid black; */\r\n    padding: 12px;\r\n    display: grid;\r\n    grid-template-rows: none;\r\n    grid-template-columns: repeat(auto-fit, minmax(325px, 38vw));\r\n    width: 86vw;\r\n    margin-bottom: 14px;\r\n    margin-bottom: 24px;\r\n  }\r\n\r\n  #AIBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 42px);\r\n    background-color: rgb(235, 235, 235);\r\n  }\r\n\r\n  #playerBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 42px);\r\n    background-color: rgb(235, 235, 235);\r\n  }\r\n\r\n  .topBarContainer {\r\n    /* outline: 1px solid black; */\r\n    height: 40vh;\r\n    margin-top: 8%;\r\n    display: flex;\r\n    gap: 8%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 12px 12px;\r\n    background-color: lightgray;\r\n    box-shadow: 0px 2px 1px #7a7a7a42;\r\n    width: 76vw;\r\n    /* width: 100%; */\r\n    max-height: 118px;\r\n    padding: 8px;\r\n  }\r\n\r\n  .topBarContainer p {\r\n    /* outline: 1px solid black; */\r\n    font-size: 1.1rem;\r\n    height: fit-content;\r\n    margin: 0;\r\n    max-height: 80vh;\r\n  }\r\n\r\n  #boardsContainer p {\r\n    justify-self: center;\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  button.orientationToggleBtn {\r\n    background-color: #333;\r\n    color: white;\r\n    border-radius: 8px;\r\n    height: 50%;\r\n    width: 100px;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  button.playAgainBtn {\r\n    background-color: #333;\r\n    color: white;\r\n    border-radius: 8px;\r\n    height: 50%;\r\n    width: 100px;\r\n    font-size: 1rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFVBQVUsRUFBRSxDQUNWLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLE9BQU8sRUFBRSxDQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFNBQVMsRUFBRSxDQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFNBQVMsRUFBRSxDQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVWLENBQUM7QUFFRCxNQUFNUixlQUFlLEdBQUc7RUFDdEJJLE9BQU8sRUFBRSxDQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFVBQVUsRUFBRSxDQUNWLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLE9BQU8sRUFBRSxDQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFNBQVMsRUFBRSxDQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFNBQVMsRUFBRSxDQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVWLENBQUM7QUFFRCxNQUFNUCxpQkFBaUIsR0FBRztFQUN4QkcsT0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7RUFDREMsVUFBVSxFQUFFLENBQ1YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7RUFDREMsT0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7RUFDREMsU0FBUyxFQUFFLENBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7RUFDREMsU0FBUyxFQUFFLENBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRVYsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZEO0FBQzZHO0FB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QUssV0FBVyx1RkFBdUYsS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEs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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNFd0M7QUFFVDtBQUNKO0FBRTNCclMsNEVBQVksQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9jb250cm9sbGVycy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9jb250cm9sbGVycy9nYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9mYWN0b3JpZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2ZhY3Rvcmllcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvZmFjdG9yaWVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvaGVscGVycy9hcnJheXNBcmVFcXVhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9oZWxwZXJzL2RlbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2hlbHBlcnMvcm90YXRlQUlCb2FyZHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzcz80M2Y0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlbGF5IH0gZnJvbSAnLi4vaGVscGVycy9kZWxheSdcclxuaW1wb3J0IHsgZ2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuL2dhbWVDb250cm9sbGVyJ1xyXG5cclxuY29uc3QgZ2FtZSA9IGdhbWVDb250cm9sbGVyKClcclxuXHJcbmNvbnN0IHByZUdhbWVTZXR1cCA9ICgpID0+IHtcclxuICByZW5kZXJQbGF5ZXJCb2FyZCgpXHJcbiAgcGxhY2VDYXJyaWVyU2hpcCgpXHJcbiAgcmVuZGVyQUlCb2FyZCgpXHJcbn1cclxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gdGhpcyBpcyB3aGVyZSB0aGUgc2hpcCBwbGFjZW1lbnQgd2lsbCBoYXBwZW4gZm9yIGh1bWFuIHBsYXllclxyXG4gIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgdG9wQmFyQ29udGFpbmVyUGFyYS50ZXh0Q29udGVudCA9ICdFbmVubXkgaXMgcGxhY2luZyB0aGVpciBzaGlwcy4uLidcclxuICBhd2FpdCBkZWxheSgxNTAwKVxyXG4gIGdhbWUucGxhY2VBSVNoaXBzKClcclxuICByZW5kZXJBSUJvYXJkKClcclxuICB0b3BCYXJDb250YWluZXJQYXJhLnRleHRDb250ZW50ID0gJydcclxuICBjb25zdCBhaUJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FJQm9hcmQnKVxyXG4gIGNvbnN0IHBsYXllcnMgPSBnYW1lLmdldFBsYXllcnMoKVxyXG4gIGNvbnN0IGFjdGl2ZVBsYXllciA9IGdhbWUuZ2V0Q3VycmVudFBsYXllcigpXHJcblxyXG4gIGlmIChhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnMuaHVtYW4pIHtcclxuICAgIGNvbnN0IG5ld01lc3NhZ2UgPSAnQXR0YWNrIHRoZSBlbmVtaWVzIHNoaXBzISdcclxuICAgIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgICB0cmFuc2l0aW9uVGV4dENoYW5nZXMobmV3TWVzc2FnZSwgdG9wQmFyQ29udGFpbmVyUGFyYSlcclxuXHJcbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXHJcbiAgICBhaUJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdjbGljaycsXHJcbiAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0KGUsIGNvbnRyb2xsZXIpXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBwbGFjZUNhcnJpZXJTaGlwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIGNhcnJpZXIgc2hpcCdcclxuXHJcbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXHJcblxyXG4gIGNvbnN0IG9yaWVudGF0aW9uQnRuVmFsdWVzID0gY3JlYXRlT3JpZW50YXRpb25Ub2dnbGVCdG4oKVxyXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMF1cclxuICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZUJ0biA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzFdXHJcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gZmFsc2VcclxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnVmVydGljYWwnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxyXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJ1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcclxuICBodW1hbkJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAnY2xpY2snLFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgaGFuZGxlQ2FycmllclNoaXBQbGFjZW1lbnQoZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cywgY29udHJvbGxlcilcclxuICAgIH0sXHJcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxyXG4gIClcclxufVxyXG5cclxuY29uc3QgcGxhY2VCYXR0bGVTaGlwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIGJhdHRsZXNoaXAnXHJcblxyXG4gIGNvbnN0IGh1bWFuQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyQm9hcmQnKVxyXG5cclxuICBjb25zdCBvcmllbnRhdGlvbkJ0blZhbHVlcyA9IGNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuKClcclxuICBsZXQgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzBdXHJcbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBvcmllbnRhdGlvbkJ0blZhbHVlc1sxXVxyXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPT09IHRydWUpIHtcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IGZhbHNlXHJcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcclxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXHJcbiAgaHVtYW5Cb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgJ2NsaWNrJyxcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIGhhbmRsZUJhdHRsZVNoaXBQbGFjZW1lbnQoZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cywgY29udHJvbGxlcilcclxuICAgIH0sXHJcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxyXG4gIClcclxufVxyXG5cclxuY29uc3QgcGxhY2VDcnVpc2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIENydWlzZXInXHJcblxyXG4gIGNvbnN0IGh1bWFuQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyQm9hcmQnKVxyXG5cclxuICBjb25zdCBvcmllbnRhdGlvbkJ0blZhbHVlcyA9IGNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuKClcclxuICBsZXQgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzBdXHJcbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBvcmllbnRhdGlvbkJ0blZhbHVlc1sxXVxyXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPT09IHRydWUpIHtcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IGZhbHNlXHJcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcclxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXHJcbiAgaHVtYW5Cb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgJ2NsaWNrJyxcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIGhhbmRsZUNydWlzZXJTaGlwUGxhY2VtZW50KGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMsIGNvbnRyb2xsZXIpXHJcbiAgICB9LFxyXG4gICAgeyBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsIH1cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHBsYWNlU3VibWFyaW5lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIFN1Ym1hcmluZSdcclxuXHJcbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXHJcblxyXG4gIGNvbnN0IG9yaWVudGF0aW9uQnRuVmFsdWVzID0gY3JlYXRlT3JpZW50YXRpb25Ub2dnbGVCdG4oKVxyXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMF1cclxuICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZUJ0biA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzFdXHJcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gZmFsc2VcclxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnVmVydGljYWwnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxyXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJ1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxyXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICdjbGljaycsXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBoYW5kbGVTdWJtYXJpbmVTaGlwUGxhY2VtZW50KFxyXG4gICAgICAgIGUsXHJcbiAgICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyxcclxuICAgICAgICBjb250cm9sbGVyXHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxyXG4gIClcclxufVxyXG5cclxuY29uc3QgcGxhY2VEZXN0cm95ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgRGVzdHJveWVyJ1xyXG5cclxuICBjb25zdCBodW1hbkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckJvYXJkJylcclxuXHJcbiAgY29uc3Qgb3JpZW50YXRpb25CdG5WYWx1ZXMgPSBjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0bigpXHJcbiAgbGV0IGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBvcmllbnRhdGlvbkJ0blZhbHVlc1swXVxyXG4gIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlQnRuID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMV1cclxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID09PSB0cnVlKSB7XHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBmYWxzZVxyXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXHJcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxyXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICdjbGljaycsXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBoYW5kbGVEZXN0cm95ZXJTaGlwUGxhY2VtZW50KFxyXG4gICAgICAgIGUsXHJcbiAgICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyxcclxuICAgICAgICBjb250cm9sbGVyXHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxyXG4gIClcclxufVxyXG5cclxuY29uc3QgcmVuZGVyUGxheWVyQm9hcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBnYW1lLmdldEh1bWFuQm9hcmQoKVxyXG4gIGNvbnN0IHBsYXllckJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckJvYXJkJylcclxuICBwbGF5ZXJCb2FyZERpdi5pbm5lckhUTUwgPSAnJ1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckJvYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBjdXJyZW50Um93ID0gcGxheWVyQm9hcmRbaV1cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudFJvdy5sZW5ndGg7IGorKykge1xyXG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYm9hcmRDZWxsJylcclxuICAgICAgYnV0dG9uLmRhdGFzZXQucm93ID0gaVxyXG4gICAgICBidXR0b24uZGF0YXNldC5jb2x1bW4gPSBqXHJcblxyXG4gICAgICBwbGF5ZXJCb2FyZERpdi5hcHBlbmRDaGlsZChidXR0b24pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZW5kZXJBSUJvYXJkID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGFpQm9hcmQgPSBnYW1lLmdldEFJQm9hcmQoKVxyXG4gIGNvbnN0IGFpQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlCb2FyZCcpXHJcbiAgYWlCb2FyZERpdi5pbm5lckhUTUwgPSAnJ1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFpQm9hcmQubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGN1cnJlbnRSb3cgPSBhaUJvYXJkW2ldXHJcblxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50Um93Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdib2FyZENlbGwnKVxyXG4gICAgICBidXR0b24uZGF0YXNldC5yb3cgPSBpXHJcbiAgICAgIGJ1dHRvbi5kYXRhc2V0LmNvbHVtbiA9IGpcclxuICAgICAgLy8gY29uc3Qgcm93ID0gYWlCb2FyZFtpXVxyXG5cclxuICAgICAgLy8gVXNlZCBmb3IgdGVzdGluZywgYXMgaXQgcmV2ZWFscyB0aGUgZW5lbWllcyBzaGlwcyBvbiB0aGUgYm9hcmRcclxuICAgICAgLy8gdG8gdGhlIHVzZXJcclxuICAgICAgLy8gaWYgKHR5cGVvZiByb3dbal0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIC8vICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NoaXBDZWxsJylcclxuICAgICAgLy8gfVxyXG4gICAgICBhaUJvYXJkRGl2LmFwcGVuZENoaWxkKGJ1dHRvbilcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHVwZGF0ZUh1bWFuQm9hcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgaHVtYW5Cb2FyZCA9IGdhbWUuZ2V0SHVtYW5Cb2FyZCgpXHJcbiAgY29uc3QgbWlzc2VkU2hvdHMgPSBnYW1lLmdldEh1bWFuQm9hcmRPYmouZ2V0TWlzc2VkU2hvdHMoKVxyXG4gIGNvbnN0IHN1Y2Nlc3NmdWxTaG90cyA9IGdhbWUuZ2V0SHVtYW5Cb2FyZE9iai5nZXRTdWNjZXNzZnVsU2hvdHMoKVxyXG4gIGNvbnN0IGFsbERvbU5vZGVzID0gQXJyYXkuZnJvbShcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJCb2FyZCcpLmNoaWxkTm9kZXNcclxuICApXHJcblxyXG4gIG1pc3NlZFNob3RzLmZvckVhY2goYXN5bmMgKHNob3QpID0+IHtcclxuICAgIGNvbnN0IHJvdyA9IHNob3RbMF1cclxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERvbU5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXS5kYXRhc2V0XHJcbiAgICAgIGlmICgrdGFyZ2V0Tm9kZS5jb2x1bW4gPT09IGNvbHVtbiAmJiArdGFyZ2V0Tm9kZS5yb3cgPT09IHJvdykge1xyXG4gICAgICAgIGFsbERvbU5vZGVzW2ldLnRleHRDb250ZW50ID0gJ1gnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG5cclxuICBzdWNjZXNzZnVsU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xyXG4gICAgY29uc3Qgcm93ID0gc2hvdFswXVxyXG4gICAgY29uc3QgY29sdW1uID0gc2hvdFsxXVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRG9tTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGFsbERvbU5vZGVzW2ldXHJcbiAgICAgIGlmIChcclxuICAgICAgICArdGFyZ2V0Tm9kZS5kYXRhc2V0LmNvbHVtbiA9PT0gY29sdW1uICYmXHJcbiAgICAgICAgK3RhcmdldE5vZGUuZGF0YXNldC5yb3cgPT09IHJvd1xyXG4gICAgICApIHtcclxuICAgICAgICB0YXJnZXROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXBDZWxsJylcclxuICAgICAgICB0YXJnZXROb2RlLmNsYXNzTGlzdC5hZGQoJ3NoaXBIaXQnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgdXBkYXRlQUlCb2FyZCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBhaUJvYXJkID0gZ2FtZS5nZXRBSUJvYXJkKClcclxuICBjb25zdCBtaXNzZWRTaG90cyA9IGdhbWUuZ2V0QUlCb2FyZE9iai5nZXRNaXNzZWRTaG90cygpXHJcbiAgY29uc3Qgc3VjY2Vzc2Z1bFNob3RzID0gZ2FtZS5nZXRBSUJvYXJkT2JqLmdldFN1Y2Nlc3NmdWxTaG90cygpXHJcbiAgY29uc3QgYWxsRG9tTm9kZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSUJvYXJkJykuY2hpbGROb2RlcylcclxuXHJcbiAgbWlzc2VkU2hvdHMuZm9yRWFjaChhc3luYyAoc2hvdCkgPT4ge1xyXG4gICAgY29uc3Qgcm93ID0gc2hvdFswXVxyXG4gICAgY29uc3QgY29sdW1uID0gc2hvdFsxXVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRG9tTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGFsbERvbU5vZGVzW2ldLmRhdGFzZXRcclxuICAgICAgaWYgKCt0YXJnZXROb2RlLmNvbHVtbiA9PT0gY29sdW1uICYmICt0YXJnZXROb2RlLnJvdyA9PT0gcm93KSB7XHJcbiAgICAgICAgYWxsRG9tTm9kZXNbaV0udGV4dENvbnRlbnQgPSAnWCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHN1Y2Nlc3NmdWxTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XHJcbiAgICBjb25zdCByb3cgPSBzaG90WzBdXHJcbiAgICBjb25zdCBjb2x1bW4gPSBzaG90WzFdXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEb21Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCB0YXJnZXROb2RlID0gYWxsRG9tTm9kZXNbaV1cclxuICAgICAgaWYgKFxyXG4gICAgICAgICt0YXJnZXROb2RlLmRhdGFzZXQuY29sdW1uID09PSBjb2x1bW4gJiZcclxuICAgICAgICArdGFyZ2V0Tm9kZS5kYXRhc2V0LnJvdyA9PT0gcm93XHJcbiAgICAgICkge1xyXG4gICAgICAgIHRhcmdldE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcENlbGwnKVxyXG4gICAgICAgIHRhcmdldE5vZGUuY2xhc3NMaXN0LmFkZCgnc2hpcEhpdCcpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVDYXJyaWVyU2hpcFBsYWNlbWVudCA9IChcclxuICBlLFxyXG4gIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXHJcbiAgY29udHJvbGxlclxyXG4pID0+IHtcclxuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XHJcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxyXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxyXG5cclxuICBjb25zdCBjYXJyaWVyUGxhY2VkID0gcGxhY2VDYXJyaWVyT25Cb2FyZChcclxuICAgIGNvb3JkaW5hdGUsXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXHJcbiAgKVxyXG5cclxuICBpZiAoY2FycmllclBsYWNlZCkge1xyXG4gICAgY29udHJvbGxlci5hYm9ydCgpXHJcbiAgICByZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuKClcclxuICAgIHBsYWNlQmF0dGxlU2hpcCgpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBwbGFjZUNhcnJpZXJTaGlwXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVCYXR0bGVTaGlwUGxhY2VtZW50ID0gKFxyXG4gIGUsXHJcbiAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICBjb250cm9sbGVyXHJcbikgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcclxuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXHJcbiAgY29uc3QgY29vcmRpbmF0ZSA9IFtzZWxlY3RlZFJvdywgc2VsZWN0ZWRDb2x1bW5dXHJcblxyXG4gIGNvbnN0IGJhdHRsZXNoaXBQbGFjZWQgPSBwbGFjZUJhdHRsZXNoaXBPbkJvYXJkKFxyXG4gICAgY29vcmRpbmF0ZSxcclxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cclxuICApXHJcblxyXG4gIGlmIChiYXR0bGVzaGlwUGxhY2VkKSB7XHJcbiAgICBjb250cm9sbGVyLmFib3J0KClcclxuICAgIHJlbW92ZVByZXZpb3VzT3JpZW50YXRpb25CdG4oKVxyXG4gICAgcGxhY2VDcnVpc2VyKClcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHBsYWNlQmF0dGxlU2hpcFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaGFuZGxlQ3J1aXNlclNoaXBQbGFjZW1lbnQgPSAoXHJcbiAgZSxcclxuICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxyXG4gIGNvbnRyb2xsZXJcclxuKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xyXG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cclxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cclxuXHJcbiAgY29uc3QgY3J1aXNlclBsYWNlZCA9IHBsYWNlQ3J1aXNlck9uQm9hcmQoXHJcbiAgICBjb29yZGluYXRlLFxyXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxyXG4gIClcclxuXHJcbiAgaWYgKGNydWlzZXJQbGFjZWQpIHtcclxuICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxyXG4gICAgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0bigpXHJcbiAgICBwbGFjZVN1Ym1hcmluZSgpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBwbGFjZUNydWlzZXJcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZVN1Ym1hcmluZVNoaXBQbGFjZW1lbnQgPSAoXHJcbiAgZSxcclxuICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxyXG4gIGNvbnRyb2xsZXJcclxuKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xyXG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cclxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cclxuXHJcbiAgY29uc3Qgc3VibWFyaW5lUGxhY2VkID0gcGxhY2VTdWJtYXJpbmVPbkJvYXJkKFxyXG4gICAgY29vcmRpbmF0ZSxcclxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cclxuICApXHJcblxyXG4gIGlmIChzdWJtYXJpbmVQbGFjZWQpIHtcclxuICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxyXG4gICAgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0bigpXHJcbiAgICBwbGFjZURlc3Ryb3llcigpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBwbGFjZVN1Ym1hcmluZVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaGFuZGxlRGVzdHJveWVyU2hpcFBsYWNlbWVudCA9IGFzeW5jIChcclxuICBlLFxyXG4gIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXHJcbiAgY29udHJvbGxlclxyXG4pID0+IHtcclxuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XHJcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxyXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxyXG4gIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcblxyXG4gIGNvbnN0IGRlc3Ryb3llclBsYWNlZCA9IHBsYWNlRGVzdHJveWVyT25Cb2FyZChcclxuICAgIGNvb3JkaW5hdGUsXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXHJcbiAgKVxyXG5cclxuICBpZiAoZGVzdHJveWVyUGxhY2VkKSB7XHJcbiAgICBjb250cm9sbGVyLmFib3J0KClcclxuICAgIHRvcEJhckNvbnRhaW5lclBhcmEudGV4dENvbnRlbnQgPSAnJ1xyXG4gICAgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0bigpXHJcbiAgICBhd2FpdCBkaXNwbGF5Q29udHJvbGxlcigpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBwbGFjZURlc3Ryb3llclxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcGxhY2VDYXJyaWVyT25Cb2FyZCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XHJcbiAgY29uc3Qgc2hpcFR5cGUgPSAnY2FycmllcidcclxuICBjb25zdCBjYXJyaWVyUGxhY2VkID0gZ2FtZS5wbGFjZUNhcnJpZXJTaGlwKFxyXG4gICAgY29vcmRpbmF0ZSxcclxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cclxuICApXHJcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcclxuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXHJcbiAgXVxyXG4gIGlmICghY2FycmllclBsYWNlZCkge1xyXG4gICAgcmV0dXJuIGNhcnJpZXJQbGFjZWRcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZ2V0SG9yaXpvbnRhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZ2V0VmVydGljYWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBjYXJyaWVyUGxhY2VkXHJcbn1cclxuXHJcbmNvbnN0IHBsYWNlQmF0dGxlc2hpcE9uQm9hcmQgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xyXG4gIGNvbnN0IHNoaXBUeXBlID0gJ2JhdHRsZXNoaXAnXHJcbiAgY29uc3QgYmF0dGxlc2hpcFBsYWNlZCA9IGdhbWUucGxhY2VCYXR0bGVTaGlwKFxyXG4gICAgY29vcmRpbmF0ZSxcclxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cclxuICApXHJcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcclxuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXHJcbiAgXVxyXG4gIGlmICghYmF0dGxlc2hpcFBsYWNlZCkge1xyXG4gICAgcmV0dXJuIGJhdHRsZXNoaXBQbGFjZWRcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZ2V0SG9yaXpvbnRhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZ2V0VmVydGljYWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBiYXR0bGVzaGlwUGxhY2VkXHJcbn1cclxuXHJcbmNvbnN0IHBsYWNlQ3J1aXNlck9uQm9hcmQgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xyXG4gIGNvbnN0IHNoaXBUeXBlID0gJ2NydWlzZXInXHJcbiAgY29uc3QgY3J1aXNlclBsYWNlZCA9IGdhbWUucGxhY2VDcnVpc2VyU2hpcChcclxuICAgIGNvb3JkaW5hdGUsXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXHJcbiAgKVxyXG4gIGNvbnN0IGJvYXJkRE9NQ2VsbHNBcnIgPSBbXHJcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxyXG4gIF1cclxuICBpZiAoIWNydWlzZXJQbGFjZWQpIHtcclxuICAgIHJldHVybiBjcnVpc2VyUGxhY2VkXHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGdldEhvcml6b250YWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXHJcbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGdldFZlcnRpY2FsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gY3J1aXNlclBsYWNlZFxyXG59XHJcblxyXG5jb25zdCBwbGFjZVN1Ym1hcmluZU9uQm9hcmQgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xyXG4gIGNvbnN0IHNoaXBUeXBlID0gJ3N1Ym1hcmluZSdcclxuICBjb25zdCBzdWJtYXJpbmVQbGFjZWQgPSBnYW1lLnBsYWNlU3VibWFyaW5lU2hpcChcclxuICAgIGNvb3JkaW5hdGUsXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXHJcbiAgKVxyXG4gIGNvbnN0IGJvYXJkRE9NQ2VsbHNBcnIgPSBbXHJcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxyXG4gIF1cclxuICBpZiAoIXN1Ym1hcmluZVBsYWNlZCkge1xyXG4gICAgcmV0dXJuIHN1Ym1hcmluZVBsYWNlZFxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxyXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBnZXRWZXJ0aWNhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHN1Ym1hcmluZVBsYWNlZFxyXG59XHJcblxyXG5jb25zdCBwbGFjZURlc3Ryb3llck9uQm9hcmQgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xyXG4gIGNvbnN0IHNoaXBUeXBlID0gJ2Rlc3Ryb3llcidcclxuICBjb25zdCBkZXN0cm95ZXJQbGFjZWQgPSBnYW1lLnBsYWNlRGVzdHJveWVyU2hpcChcclxuICAgIGNvb3JkaW5hdGUsXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXHJcbiAgKVxyXG4gIGNvbnN0IGJvYXJkRE9NQ2VsbHNBcnIgPSBbXHJcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxyXG4gIF1cclxuICBpZiAoIWRlc3Ryb3llclBsYWNlZCkge1xyXG4gICAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxyXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBnZXRWZXJ0aWNhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxyXG59XHJcblxyXG5jb25zdCBnZXRIb3Jpem9udGFsRE9NQ29vcmRzID0gKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKSA9PiB7XHJcbiAgY29uc3Qgc3RhcnRpbmdDb2x1bW4gPSBOdW1iZXIoY29vcmRpbmF0ZVsxXSlcclxuICBjb25zdCBzaGlwTGVuZ3RoID1cclxuICAgIHNoaXBUeXBlID09PSAnY2FycmllcidcclxuICAgICAgPyA1XHJcbiAgICAgIDogc2hpcFR5cGUgPT09ICdiYXR0bGVzaGlwJ1xyXG4gICAgICA/IDRcclxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2NydWlzZXInXHJcbiAgICAgID8gM1xyXG4gICAgICA6IHNoaXBUeXBlID09PSAnc3VibWFyaW5lJ1xyXG4gICAgICA/IDNcclxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2Rlc3Ryb3llcidcclxuICAgICAgPyAyXHJcbiAgICAgIDogbnVsbFxyXG5cclxuICBmb3IgKGxldCBpID0gc3RhcnRpbmdDb2x1bW47IGkgPCBzdGFydGluZ0NvbHVtbiArIHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qgcm93ID0gK2Nvb3JkaW5hdGVbMF1cclxuICAgIGNvbnN0IGNvbHVtbiA9IGlcclxuICAgIGNvbnN0IGRvbUNvb3JkaW5hdGUgPSBbcm93LCBjb2x1bW5dXHJcbiAgICBjb25zdCB0YXJnZXRET01CdG4gPSBmaW5kU2hpcERPTUJ0bihib2FyZERPTUNlbGxzQXJyLCBkb21Db29yZGluYXRlKVxyXG4gICAgdGFyZ2V0RE9NQnRuLmNsYXNzTGlzdC5hZGQoJ3NoaXBDZWxsJylcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldFZlcnRpY2FsRE9NQ29vcmRzID0gKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKSA9PiB7XHJcbiAgY29uc3Qgc3RhcnRpbmdSb3cgPSBOdW1iZXIoY29vcmRpbmF0ZVswXSlcclxuICBjb25zdCBzaGlwTGVuZ3RoID1cclxuICAgIHNoaXBUeXBlID09PSAnY2FycmllcidcclxuICAgICAgPyA1XHJcbiAgICAgIDogc2hpcFR5cGUgPT09ICdiYXR0bGVzaGlwJ1xyXG4gICAgICA/IDRcclxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2NydWlzZXInXHJcbiAgICAgID8gM1xyXG4gICAgICA6IHNoaXBUeXBlID09PSAnc3VibWFyaW5lJ1xyXG4gICAgICA/IDNcclxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2Rlc3Ryb3llcidcclxuICAgICAgPyAyXHJcbiAgICAgIDogbnVsbFxyXG5cclxuICBmb3IgKGxldCBpID0gc3RhcnRpbmdSb3c7IGkgPiBzdGFydGluZ1JvdyAtIHNoaXBMZW5ndGg7IGktLSkge1xyXG4gICAgY29uc3Qgcm93ID0gaVxyXG4gICAgY29uc3QgY29sdW1uID0gK2Nvb3JkaW5hdGVbMV1cclxuICAgIGNvbnN0IGRvbUNvb3JkaW5hdGUgPSBbcm93LCBjb2x1bW5dXHJcbiAgICBjb25zdCB0YXJnZXRET01CdG4gPSBmaW5kU2hpcERPTUJ0bihib2FyZERPTUNlbGxzQXJyLCBkb21Db29yZGluYXRlKVxyXG4gICAgdGFyZ2V0RE9NQnRuLmNsYXNzTGlzdC5hZGQoJ3NoaXBDZWxsJylcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGZpbmRTaGlwRE9NQnRuID0gKGJvYXJkRE9NQ2VsbHNBcnIsIGRvbUNvb3JkaW5hdGUpID0+IHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkRE9NQ2VsbHNBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGRvbUNlbGxSb3cgPSArYm9hcmRET01DZWxsc0FycltpXS5kYXRhc2V0LnJvd1xyXG4gICAgY29uc3QgZG9tQ2VsbENvbHVtbiA9ICtib2FyZERPTUNlbGxzQXJyW2ldLmRhdGFzZXQuY29sdW1uXHJcbiAgICBpZiAoXHJcbiAgICAgIGRvbUNlbGxSb3cgPT09ICtkb21Db29yZGluYXRlWzBdICYmXHJcbiAgICAgIGRvbUNlbGxDb2x1bW4gPT09ICtkb21Db29yZGluYXRlWzFdXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIGJvYXJkRE9NQ2VsbHNBcnJbaV1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dCA9IGFzeW5jIChlLCBjb250cm9sbGVyKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSArZS50YXJnZXQuZGF0YXNldC5yb3dcclxuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9ICtlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxyXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxyXG4gIGNvbnN0IGFpQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlCb2FyZCcpXHJcbiAgY29uc3QgYWlCb2FyZCA9IGdhbWUuZ2V0QUlCb2FyZE9ialxyXG4gIGNvbnN0IGFscmVhZHlBdHRhY2tlZCA9IGFpQm9hcmQucHJldmVudFNhbWVBdHRhY2soY29vcmRpbmF0ZSlcclxuICBpZiAoc2VsZWN0ZWRDb2x1bW4gPT09ICd1bmRlZmluZWQnIHx8IHNlbGVjdGVkUm93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dFxyXG4gIH0gZWxzZSBpZiAoYWxyZWFkeUF0dGFja2VkKSB7XHJcbiAgICByZXR1cm4gaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0XHJcbiAgfVxyXG5cclxuICBjb250cm9sbGVyLmFib3J0KClcclxuXHJcbiAgZ2FtZS5wbGF5Um91bmQoY29vcmRpbmF0ZSlcclxuICBjb25zdCBodW1hbk1vdmVTdWNjZXNzZnVsID0gZ2FtZS5nZXRBSUJvYXJkT2JqLmdldExhc3RIdW1hbk1vdmVTdWNjZXNzZnVsKClcclxuICAvLyBVc2UgdGhpcyB2YWx1ZSB3aGVuIGRldGVybWluaW5nIHdoZXRoZXIgdG8gc2hvdyBzaGlwIGFzIHN1bmtcclxuICBjb25zdCBzaGlwSXNTdW5rID0gZ2FtZS5pc1NoaXBTdW5rKCdodW1hbicsIGNvb3JkaW5hdGUpXHJcbiAgY29uc3Qgc2hpcFN1bmtSZXN1bHQgPSBzaGlwSXNTdW5rWzBdXHJcbiAgaWYgKHNoaXBTdW5rUmVzdWx0KSB7XHJcbiAgICBkaXNwbGF5U3Vua1NoaXBNZXNzYWdlKCdodW1hbicpXHJcbiAgfSBlbHNlIGlmICghc2hpcFN1bmtSZXN1bHQpIHtcclxuICAgIGh1bWFuTW92ZVN1Y2Nlc3NmdWxcclxuICAgICAgPyBkaXNwbGF5U3VjY2Vzc2Z1bEF0dGFja01lc3NhZ2UoJ2h1bWFuJylcclxuICAgICAgOiBkaXNwbGF5VW5zdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSgnaHVtYW4nKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW2h1bWFuUGxheWVyLCBodW1hbldvbl0gPSBnYW1lLmNoZWNrRm9yV2luKClcclxuXHJcbiAgdXBkYXRlQUlCb2FyZCgpXHJcbiAgYXdhaXQgZGVsYXkoNDAwMClcclxuXHJcbiAgaWYgKGhhbmRsZVdpbkNoZWNrKGh1bWFuUGxheWVyLCBodW1hbldvbiwgYWlCb2FyZERpdikpIHtcclxuICAgIHJldHVybiBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnRcclxuICB9XHJcbiAgZ2FtZS5zd2l0Y2hQbGF5ZXIoKVxyXG4gIGlmIChoYW5kbGVBSU1vdmUoYWlCb2FyZERpdikpIHtcclxuICAgIHJldHVybiBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnRcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUFJTW92ZSA9IGFzeW5jIChhaUJvYXJkRGl2KSA9PiB7XHJcbiAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICBjb25zdCBlbmVteUF0dGFja2luZ01zZyA9ICdFbmVteSBpcyBhdHRhY2tpbmcgeW91ciBzaGlwcyEnXHJcbiAgdHJhbnNpdGlvblRleHRDaGFuZ2VzKGVuZW15QXR0YWNraW5nTXNnLCB0b3BCYXJDb250YWluZXJQYXJhKVxyXG4gIGF3YWl0IGRlbGF5KDMwMDApXHJcbiAgY29uc3QgZ3Vlc3NlZENvb3JkaW5hdGUgPSBnYW1lLnBsYXlSb3VuZCgpXHJcbiAgY29uc3QgYWlNb3ZlU3VjY2Vzc2Z1bCA9IGdhbWUuZ2V0SHVtYW5Cb2FyZE9iai5nZXRMYXN0QUlNb3ZlU3VjY2Vzc2Z1bCgpXHJcbiAgY29uc3Qgc2hpcElzU3VuayA9IGdhbWUuaXNTaGlwU3VuaygnY29tcHV0ZXInLCBndWVzc2VkQ29vcmRpbmF0ZSlcclxuICBjb25zdCBzaGlwU3Vua1Jlc3VsdCA9IHNoaXBJc1N1bmtbMF1cclxuICBpZiAoc2hpcFN1bmtSZXN1bHQgPT09IHRydWUpIHtcclxuICAgIGRpc3BsYXlTdW5rU2hpcE1lc3NhZ2UoJ2NvbXB1dGVyJylcclxuICB9IGVsc2UgaWYgKCFzaGlwU3Vua1Jlc3VsdCkge1xyXG4gICAgYWlNb3ZlU3VjY2Vzc2Z1bFxyXG4gICAgICA/IGRpc3BsYXlTdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSgnY29tcHV0ZXInKVxyXG4gICAgICA6IGRpc3BsYXlVbnN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlKCdjb21wdXRlcicpXHJcbiAgfVxyXG5cclxuICBjb25zdCBbYWlQbGF5ZXIsIGFpV29uXSA9IGdhbWUuY2hlY2tGb3JXaW4oKVxyXG5cclxuICB1cGRhdGVIdW1hbkJvYXJkKClcclxuICBpZiAoaGFuZGxlV2luQ2hlY2soYWlQbGF5ZXIsIGFpV29uLCBhaUJvYXJkRGl2KSkge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgZ2FtZS5zd2l0Y2hQbGF5ZXIoKVxyXG4gIGF3YWl0IGRlbGF5KDI1MDApXHJcbiAgY29uc3QgYXR0YWNrVGhlRW5lbXlNc2cgPSAnQXR0YWNrIHRoZSBlbmVtaWVzIHNoaXBzLi4uJ1xyXG4gIHRyYW5zaXRpb25UZXh0Q2hhbmdlcyhhdHRhY2tUaGVFbmVteU1zZywgdG9wQmFyQ29udGFpbmVyUGFyYSlcclxuXHJcbiAgYXdhaXQgZGVsYXkoMTUwMClcclxuXHJcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxyXG4gIGFpQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICdjbGljaycsXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnQoZSwgY29udHJvbGxlcilcclxuICAgIH0sXHJcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxyXG4gIClcclxufVxyXG5cclxuY29uc3QgYW5ub3VuY2VXaW5uZXIgPSAod2lubmVyKSA9PiB7XHJcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICBjb25zdCB3aW5uZXJOYW1lID0gd2lubmVyLmdldE5hbWUoKVxyXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSBgJHt3aW5uZXJOYW1lfSB3aW4ncyFgXHJcbn1cclxuXHJcbmNvbnN0IHBsYXlBZ2FpbiA9ICgpID0+IHtcclxuICBjb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyJylcclxuICBjb25zdCBwbGF5QWdhaW5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gIHBsYXlBZ2FpbkJ0bi5jbGFzc0xpc3QuYWRkKCdwbGF5QWdhaW5CdG4nKVxyXG4gIHBsYXlBZ2FpbkJ0bi50ZXh0Q29udGVudCA9ICdQbGF5IGFnYWluJ1xyXG4gIHRvcEJhckRpdi5hcHBlbmRDaGlsZChwbGF5QWdhaW5CdG4pXHJcbiAgcGxheUFnYWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnROZXdHYW1lKVxyXG59XHJcblxyXG5jb25zdCBzdGFydE5ld0dhbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9wQmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lcicpXHJcbiAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IGJ1dHRvbicpXHJcbiAgdG9wQmFyRGl2LnJlbW92ZUNoaWxkKHBsYXlBZ2FpbkJ0bilcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpLnRleHRDb250ZW50ID0gJydcclxuICBwcmVHYW1lU2V0dXAoKVxyXG59XHJcblxyXG4vLyBGb3IgZWFjaCBvZiB0aGUgcGxhY2Ugc2hpcCBmdW5jdGlvbnMsIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZSBwcmV2aW91c1xyXG4vLyBvcmllbnRhdGlvbiB0b2dnbGUgYnV0dG9uIHRvIHByZXZlbnQgdGhlIHNhbWUgbGlzdGVuZXIgZmlyaW5nIGZvciBlYWNoIG9mIHRoZVxyXG4vLyBwcmV2aW91cyBvcmllbnRhdGlvbiB0b2dnbGUgYnV0dG9uc1xyXG5jb25zdCByZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvcEJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXInKVxyXG4gIGNvbnN0IHByZXZpb3VzT3JpZW50YXRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JpZW50YXRpb25Ub2dnbGVCdG4nKVxyXG4gIHRvcEJhckRpdi5yZW1vdmVDaGlsZChwcmV2aW91c09yaWVudGF0aW9uQnRuKVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0biA9ICgpID0+IHtcclxuICBjb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyJylcclxuICBjb25zdCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxyXG4gIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5jbGFzc0xpc3QuYWRkKCdvcmllbnRhdGlvblRvZ2dsZUJ0bicpXHJcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcclxuICB0b3BCYXJEaXYuYXBwZW5kQ2hpbGQob3JpZW50YXRpb25Ub2dnbGVCdG4pXHJcblxyXG4gIHJldHVybiBbaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cywgb3JpZW50YXRpb25Ub2dnbGVCdG5dXHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlTdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSA9IChwbGF5ZXIpID0+IHtcclxuICBpZiAocGxheWVyID09PSAnaHVtYW4nKSB7XHJcbiAgICBjb25zdCB0b3BCYXJDb250YWluZXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxyXG4gICAgY29uc3QgYXR0YWNrQW5kSGl0TXNnID0gJ1lvdSBhdHRhY2tlZCB0aGUgZW5lbXkuLi4gYW5kIGhpdCB0aGVpciBzaGlwISdcclxuICAgIHNldFRpbWVvdXQodHJhbnNpdGlvblRleHRDaGFuZ2VzLCAxMCwgYXR0YWNrQW5kSGl0TXNnLCB0b3BCYXJDb250YWluZXJQYXJhKVxyXG4gIH0gZWxzZSBpZiAocGxheWVyID09PSAnY29tcHV0ZXInKSB7XHJcbiAgICBjb25zdCB0b3BCYXJDb250YWluZXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxyXG4gICAgY29uc3QgZW5lbXlIaXRNc2cgPSAnVGhlIGVuZW15IGxhdW5jaGVkIGFuIGF0dGFjay4uLiBhbmQgaGl0IHlvdXIgc2hpcCEnXHJcbiAgICBzZXRUaW1lb3V0KHRyYW5zaXRpb25UZXh0Q2hhbmdlcywgMTAsIGVuZW15SGl0TXNnLCB0b3BCYXJDb250YWluZXJQYXJhKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGlzcGxheVVuc3VjY2Vzc2Z1bEF0dGFja01lc3NhZ2UgPSAocGxheWVyKSA9PiB7XHJcbiAgaWYgKHBsYXllciA9PT0gJ2h1bWFuJykge1xyXG4gICAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICAgIGNvbnN0IHVuc3VjY2Vzc2Z1bEF0dGFja01zZyA9ICdZb3VyIGF0dGFjayBvbiB0aGUgZW5lbXkgd2FzIHVuc3VjY2Vzc2Z1bCdcclxuICAgIHNldFRpbWVvdXQoXHJcbiAgICAgIHRyYW5zaXRpb25UZXh0Q2hhbmdlcyxcclxuICAgICAgMTAsXHJcbiAgICAgIHVuc3VjY2Vzc2Z1bEF0dGFja01zZyxcclxuICAgICAgdG9wQmFyQ29udGFpbmVyUGFyYVxyXG4gICAgKVxyXG4gIH0gZWxzZSBpZiAocGxheWVyID09PSAnY29tcHV0ZXInKSB7XHJcbiAgICBjb25zdCB0b3BCYXJDb250YWluZXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxyXG4gICAgY29uc3QgdW5zdWNjZXNzZnVsRW5lbXlBdHRhY2tNc2cgPSAnVGhlIGVuZW1pZXMgYXR0YWNrIHdhcyB1bnN1Y2Nlc3NmdWwnXHJcbiAgICBzZXRUaW1lb3V0KFxyXG4gICAgICB0cmFuc2l0aW9uVGV4dENoYW5nZXMsXHJcbiAgICAgIDEwLFxyXG4gICAgICB1bnN1Y2Nlc3NmdWxFbmVteUF0dGFja01zZyxcclxuICAgICAgdG9wQmFyQ29udGFpbmVyUGFyYVxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGlzcGxheVN1bmtTaGlwTWVzc2FnZSA9IChwbGF5ZXIpID0+IHtcclxuICBpZiAocGxheWVyID09PSAnaHVtYW4nKSB7XHJcbiAgICBjb25zdCB0b3BCYXJDb250YWluZXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxyXG4gICAgY29uc3Qgc3Vua1NoaXBNZXNzYWdlID0gJ1lvdSBoYXZlIHN1bmsgdGhlIGVuZW1pZXMgc2hpcCEnXHJcbiAgICBzZXRUaW1lb3V0KHRyYW5zaXRpb25UZXh0Q2hhbmdlcywgMTAsIHN1bmtTaGlwTWVzc2FnZSwgdG9wQmFyQ29udGFpbmVyUGFyYSlcclxuICB9IGVsc2UgaWYgKHBsYXllciA9PT0gJ2NvbXB1dGVyJykge1xyXG4gICAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICAgIGNvbnN0IHN1bmtTaGlwTWVzc2FnZSA9ICdUaGUgZW5lbXkgc3VuayBvbmUgb2YgeW91ciBzaGlwcyEnXHJcbiAgICBzZXRUaW1lb3V0KHRyYW5zaXRpb25UZXh0Q2hhbmdlcywgMTAsIHN1bmtTaGlwTWVzc2FnZSwgdG9wQmFyQ29udGFpbmVyUGFyYSlcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZVdpbkNoZWNrID0gKGN1cnJlbnRQbGF5ZXIsIHBsYXllcldvbiwgYm9hcmREaXYpID0+IHtcclxuICBpZiAocGxheWVyV29uKSB7XHJcbiAgICBib2FyZERpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dClcclxuICAgIGdhbWUucmVzZXRHYW1lU3RhdGUoKVxyXG4gICAgYW5ub3VuY2VXaW5uZXIoY3VycmVudFBsYXllcilcclxuICAgIHBsYXlBZ2FpbigpXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdHJhbnNpdGlvblRleHRDaGFuZ2VzID0gYXN5bmMgKG5ld01lc3NhZ2UsIGRvbUVsZW1lbnQpID0+IHtcclxuICBkb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpXHJcbiAgYXdhaXQgZGVsYXkoNDAwKVxyXG4gIGRvbUVsZW1lbnQudGV4dENvbnRlbnQgPSBuZXdNZXNzYWdlXHJcbiAgYXdhaXQgZGVsYXkoNDAwKVxyXG4gIGRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJylcclxufVxyXG5cclxuLy8gY29uc3QgaGFuZGxlUGxheWVyU2VsZXRpb25cclxuXHJcbmV4cG9ydCB7IHJlbmRlclBsYXllckJvYXJkLCByZW5kZXJBSUJvYXJkLCBkaXNwbGF5Q29udHJvbGxlciwgcHJlR2FtZVNldHVwIH1cclxuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi4vZmFjdG9yaWVzL0dhbWVib2FyZCdcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vZmFjdG9yaWVzL1BsYXllcidcclxuaW1wb3J0IHsgYXJyYXlzQXJlRXF1YWwgfSBmcm9tICcuLi9oZWxwZXJzL2FycmF5c0FyZUVxdWFsJ1xyXG5pbXBvcnQgeyByZXR1cm5SYW5kb21BSUJvYXJkIH0gZnJvbSAnLi4vaGVscGVycy9yb3RhdGVBSUJvYXJkcydcclxuXHJcbmNvbnN0IGdhbWVDb250cm9sbGVyID0gKCkgPT4ge1xyXG4gIC8vIENyZWF0ZSB0d28gZ2FtZSBib2FyZHNcclxuICBjb25zdCBodW1hbkJvYXJkID0gR2FtZWJvYXJkKClcclxuICBodW1hbkJvYXJkLmNyZWF0ZUdhbWVCb2FyZCgpXHJcblxyXG4gIGNvbnN0IGFpQm9hcmQgPSBHYW1lYm9hcmQoKVxyXG4gIGFpQm9hcmQuY3JlYXRlR2FtZUJvYXJkKClcclxuXHJcbiAgY29uc3QgcGxhY2VDYXJyaWVyU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XHJcbiAgICBsZXQgY2FycmllclBsYWNlZCA9IHRydWVcclxuXHJcbiAgICBjb25zdCBjYXJyaWVyQXJyID0gZGV0ZXJtaW5lQ2FycmllckFyckNvb3JkcyhcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICAgICAgY29vcmRpbmF0ZVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChjYXJyaWVyQXJyKVxyXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XHJcbiAgICAgIGNhcnJpZXJQbGFjZWQgPSBmYWxzZVxyXG4gICAgICByZXR1cm4gY2FycmllclBsYWNlZFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYXJyaWVyUGxhY2VkXHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXRlcm1pbmVDYXJyaWVyQXJyQ29vcmRzID0gKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sIGNvb3JkaW5hdGUpID0+IHtcclxuICAgIGNvbnN0IGNhcnJpZXJBcnIgPSBbXVxyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgY2FycmllckFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cclxuICAgICAgICBjYXJyaWVyQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgY2FycmllckFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbKCtjb29yZGluYXRlWzBdIC0gaSkudG9TdHJpbmcoKSwgY29vcmRpbmF0ZVsxXV1cclxuICAgICAgICBjYXJyaWVyQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjYXJyaWVyQXJyXHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGFjZUJhdHRsZVNoaXAgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xyXG4gICAgbGV0IGJhdHRsZXNoaXBQbGFjZWQgPSB0cnVlXHJcbiAgICBjb25zdCBiYXR0bGVzaGlwQXJyID0gZGV0ZXJtaW5lQmF0dGxlc2hpcEFyckNvb3JkcyhcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICAgICAgY29vcmRpbmF0ZVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChiYXR0bGVzaGlwQXJyKVxyXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XHJcbiAgICAgIGJhdHRsZXNoaXBQbGFjZWQgPSBmYWxzZVxyXG4gICAgICByZXR1cm4gYmF0dGxlc2hpcFBsYWNlZFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBiYXR0bGVzaGlwUGxhY2VkXHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXRlcm1pbmVCYXR0bGVzaGlwQXJyQ29vcmRzID0gKFxyXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICAgIGNvb3JkaW5hdGVcclxuICApID0+IHtcclxuICAgIGNvbnN0IGJhdHRsZXNoaXBBcnIgPSBbXVxyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgYmF0dGxlc2hpcEFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cclxuICAgICAgICBiYXR0bGVzaGlwQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgYmF0dGxlc2hpcEFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbKCtjb29yZGluYXRlWzBdIC0gaSkudG9TdHJpbmcoKSwgY29vcmRpbmF0ZVsxXV1cclxuICAgICAgICBiYXR0bGVzaGlwQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBiYXR0bGVzaGlwQXJyXHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGFjZUNydWlzZXJTaGlwID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcclxuICAgIGxldCBjcnVpc2VyUGxhY2VkID0gdHJ1ZVxyXG4gICAgY29uc3QgY3J1aXNlckFyciA9IGRldGVybWluZUNydWlzZXJBcnJDb29yZHMoXHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXHJcbiAgICAgIGNvb3JkaW5hdGVcclxuICAgIClcclxuXHJcbiAgICBjb25zdCBzaGlwUGxhY2VkID0gaHVtYW5Cb2FyZC5wbGFjZVNoaXAoY3J1aXNlckFycilcclxuICAgIGlmICghc2hpcFBsYWNlZCkge1xyXG4gICAgICBjcnVpc2VyUGxhY2VkID0gZmFsc2VcclxuICAgICAgcmV0dXJuIGNydWlzZXJQbGFjZWRcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3J1aXNlclBsYWNlZFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGV0ZXJtaW5lQ3J1aXNlckFyckNvb3JkcyA9IChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLCBjb29yZGluYXRlKSA9PiB7XHJcbiAgICBjb25zdCBjcnVpc2VyQXJyID0gW11cclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGNydWlzZXJBcnIucHVzaChjb29yZGluYXRlKVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkID0gW2Nvb3JkaW5hdGVbMF0sICgrY29vcmRpbmF0ZVsxXSArIGkpLnRvU3RyaW5nKCldXHJcbiAgICAgICAgY3J1aXNlckFyci5wdXNoKGNvb3JkKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGNydWlzZXJBcnIucHVzaChjb29yZGluYXRlKVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkID0gWygrY29vcmRpbmF0ZVswXSAtIGkpLnRvU3RyaW5nKCksIGNvb3JkaW5hdGVbMV1dXHJcbiAgICAgICAgY3J1aXNlckFyci5wdXNoKGNvb3JkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3J1aXNlckFyclxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxhY2VTdWJtYXJpbmVTaGlwID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcclxuICAgIGxldCBzdWJtYXJpbmVQbGFjZWQgPSB0cnVlXHJcbiAgICBjb25zdCBzdWJtYXJpbmVBcnIgPSBkZXRlcm1pbmVTdWJtYXJpbmVBcnJDb29yZHMoXHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXHJcbiAgICAgIGNvb3JkaW5hdGVcclxuICAgIClcclxuXHJcbiAgICBjb25zdCBzaGlwUGxhY2VkID0gaHVtYW5Cb2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lQXJyKVxyXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XHJcbiAgICAgIHN1Ym1hcmluZVBsYWNlZCA9IGZhbHNlXHJcbiAgICAgIHJldHVybiBzdWJtYXJpbmVQbGFjZWRcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3VibWFyaW5lUGxhY2VkXHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXRlcm1pbmVTdWJtYXJpbmVBcnJDb29yZHMgPSAoXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxyXG4gICAgY29vcmRpbmF0ZVxyXG4gICkgPT4ge1xyXG4gICAgY29uc3Qgc3VibWFyaW5lQXJyID0gW11cclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIHN1Ym1hcmluZUFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cclxuICAgICAgICBzdWJtYXJpbmVBcnIucHVzaChjb29yZClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBzdWJtYXJpbmVBcnIucHVzaChjb29yZGluYXRlKVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkID0gWygrY29vcmRpbmF0ZVswXSAtIGkpLnRvU3RyaW5nKCksIGNvb3JkaW5hdGVbMV1dXHJcbiAgICAgICAgc3VibWFyaW5lQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdWJtYXJpbmVBcnJcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYWNlRGVzdHJveWVyU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XHJcbiAgICBsZXQgZGVzdHJveWVyUGxhY2VkID0gdHJ1ZVxyXG4gICAgY29uc3QgZGVzdHJveWVyQXJyID0gZGV0ZXJtaW5lRGVzdHJveWVyQXJyQ29vcmRzKFxyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxyXG4gICAgICBjb29yZGluYXRlXHJcbiAgICApXHJcblxyXG4gICAgY29uc3Qgc2hpcFBsYWNlZCA9IGh1bWFuQm9hcmQucGxhY2VTaGlwKGRlc3Ryb3llckFycilcclxuICAgIGlmICghc2hpcFBsYWNlZCkge1xyXG4gICAgICBkZXN0cm95ZXJQbGFjZWQgPSBmYWxzZVxyXG4gICAgICByZXR1cm4gZGVzdHJveWVyUGxhY2VkXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGV0ZXJtaW5lRGVzdHJveWVyQXJyQ29vcmRzID0gKFxyXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICAgIGNvb3JkaW5hdGVcclxuICApID0+IHtcclxuICAgIGNvbnN0IGRlc3Ryb3llckFyciA9IFtdXHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBkZXN0cm95ZXJBcnIucHVzaChjb29yZGluYXRlKVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkID0gW2Nvb3JkaW5hdGVbMF0sICgrY29vcmRpbmF0ZVsxXSArIGkpLnRvU3RyaW5nKCldXHJcbiAgICAgICAgZGVzdHJveWVyQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZGVzdHJveWVyQXJyLnB1c2goY29vcmRpbmF0ZSlcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjb29yZCA9IFsoK2Nvb3JkaW5hdGVbMF0gLSBpKS50b1N0cmluZygpLCBjb29yZGluYXRlWzFdXVxyXG4gICAgICAgIGRlc3Ryb3llckFyci5wdXNoKGNvb3JkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVzdHJveWVyQXJyXHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGFjZUFJU2hpcHMgPSAoKSA9PiB7XHJcbiAgICBwbGFjZVNoaXBzKGFpQm9hcmQsIHJldHVyblJhbmRvbUFJQm9hcmQoKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYXllcnMgPSB7fVxyXG5cclxuICBjb25zdCBnZXRQbGF5ZXJzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHBsYXllcnNcclxuICB9XHJcblxyXG4gIGNvbnN0IGh1bWFuUGxheWVyID0gUGxheWVyKCdIdW1hbicsIGZhbHNlKVxyXG4gIGNvbnN0IGFpUGxheWVyID0gUGxheWVyKCdBSScsIHRydWUpXHJcbiAgcGxheWVycy5odW1hbiA9IGh1bWFuUGxheWVyXHJcbiAgcGxheWVycy5BSSA9IGFpUGxheWVyXHJcblxyXG4gIGxldCBjdXJyZW50UGxheWVyID0gcGxheWVycy5odW1hblxyXG5cclxuICBjb25zdCBnZXRDdXJyZW50UGxheWVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRQbGF5ZXJcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYXlSb3VuZCA9IChjb29yZGluYXRlKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuaHVtYW4uZ2V0TmFtZSgpKSB7XHJcbiAgICAgIGFpQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlLCBjdXJyZW50UGxheWVyLmdldE5hbWUoKSlcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuQUkuZ2V0TmFtZSgpKSB7XHJcbiAgICAgIGNvbnN0IG5leHRNb3ZlID0gY29tcHV0ZXJzTmV4dE1vdmUoKVxyXG4gICAgICBodW1hbkJvYXJkLnJlY2VpdmVBdHRhY2sobmV4dE1vdmUsIGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpKVxyXG4gICAgICBodW1hbkJvYXJkLnJlbW92ZUxhc3RBSU1vdmUobmV4dE1vdmUpXHJcbiAgICAgIHJldHVybiBuZXh0TW92ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcHV0ZXJzTmV4dE1vdmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhdmFpbGFibGVNb3ZlcyA9IGh1bWFuQm9hcmQuZ2V0QUlBdmFpbGFibGVNb3ZlcygpXHJcbiAgICBjb25zdCBsYXN0QUlNb3ZlU3VjY2Vzc2Z1bCA9IGh1bWFuQm9hcmQuZ2V0TGFzdEFJTW92ZVN1Y2Nlc3NmdWwoKVxyXG4gICAgaWYgKGxhc3RBSU1vdmVTdWNjZXNzZnVsKSB7XHJcbiAgICAgIGNvbnN0IGFkamFjZW50U2xvdHMgPSBjdXJyZW50UGxheWVyLmdldEFkamFjZW50U2xvdHMoXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgICBhdmFpbGFibGVNb3ZlcyxcclxuICAgICAgICBodW1hbkJvYXJkLmdldFN1Y2Nlc3NmdWxTaG90cygpLFxyXG4gICAgICAgIGh1bWFuQm9hcmQuZ2V0TWlzc2VkU2hvdHMoKVxyXG4gICAgICApXHJcbiAgICAgIGh1bWFuQm9hcmQuYWRkQWRqYWNlbnRTbG90c1RvUXVldWUoYWRqYWNlbnRTbG90cylcclxuICAgICAgY29uc3QgbmV4dE1vdmUgPSBodW1hbkJvYXJkLmdldEFkamFjZW50UXVldWVTbG90KClcclxuICAgICAgcmV0dXJuIG5leHRNb3ZlXHJcbiAgICB9IGVsc2UgaWYgKCFsYXN0QUlNb3ZlU3VjY2Vzc2Z1bCkge1xyXG4gICAgICBjb25zdCByYW5kb21Nb3ZlID0gY3VycmVudFBsYXllci5tYWtlUmFuZG9tTW92ZSh0cnVlLCBhdmFpbGFibGVNb3ZlcylcclxuICAgICAgcmV0dXJuIHJhbmRvbU1vdmVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHN3aXRjaFBsYXllciA9ICgpID0+IHtcclxuICAgIGN1cnJlbnRQbGF5ZXIgPVxyXG4gICAgICBjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5odW1hbi5nZXROYW1lKClcclxuICAgICAgICA/IChjdXJyZW50UGxheWVyID0gcGxheWVycy5BSSlcclxuICAgICAgICA6IChjdXJyZW50UGxheWVyID0gcGxheWVycy5odW1hbilcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrRm9yV2luID0gKCkgPT4ge1xyXG4gICAgbGV0IHdpbm5lciA9IFtjdXJyZW50UGxheWVyLCBmYWxzZV1cclxuICAgIGlmIChcclxuICAgICAgY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuaHVtYW4uZ2V0TmFtZSgpICYmXHJcbiAgICAgIGFpQm9hcmQuYWxsU2hpcHNTdW5rKClcclxuICAgICkge1xyXG4gICAgICB3aW5uZXIgPSBbY3VycmVudFBsYXllciwgdHJ1ZV1cclxuICAgICAgcmV0dXJuIHdpbm5lclxyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuQUkuZ2V0TmFtZSgpICYmXHJcbiAgICAgIGh1bWFuQm9hcmQuYWxsU2hpcHNTdW5rKClcclxuICAgICkge1xyXG4gICAgICB3aW5uZXIgPSBbY3VycmVudFBsYXllciwgdHJ1ZV1cclxuICAgICAgcmV0dXJuIHdpbm5lclxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdpbm5lclxyXG4gIH1cclxuXHJcbiAgY29uc3QgaXNTaGlwU3VuayA9IChwbGF5ZXIsIGNvb3JkaW5hdGUpID0+IHtcclxuICAgIGxldCBzaGlwSXNTdW5rXHJcbiAgICBpZiAocGxheWVyID09PSAnaHVtYW4nKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RTdWNjZXNzZnVsSHVtYW5Nb3ZlID0gYWlCb2FyZC5nZXRMYXN0U3VjY2Vzc2Z1bE1vdmUoKVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgbGFzdFN1Y2Nlc3NmdWxIdW1hbk1vdmUgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgIGxhc3RTdWNjZXNzZnVsSHVtYW5Nb3ZlICE9PSBjb29yZGluYXRlXHJcbiAgICAgICkge1xyXG4gICAgICAgIHNoaXBJc1N1bmsgPSBmYWxzZVxyXG4gICAgICAgIHJldHVybiBbc2hpcElzU3Vua11cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBnYW1lQm9hcmQgPSBhaUJvYXJkLmdldEJvYXJkKClcclxuICAgICAgY29uc3QgdGFyZ2V0U2hpcE9iaiA9XHJcbiAgICAgICAgZ2FtZUJvYXJkW2xhc3RTdWNjZXNzZnVsSHVtYW5Nb3ZlWzBdXVtsYXN0U3VjY2Vzc2Z1bEh1bWFuTW92ZVsxXV1cclxuICAgICAgc2hpcElzU3VuayA9IHRhcmdldFNoaXBPYmouaGFzQmVlblN1bmsoKVxyXG4gICAgICByZXR1cm4gW3NoaXBJc1N1bmssIHRhcmdldFNoaXBPYmosIGxhc3RTdWNjZXNzZnVsSHVtYW5Nb3ZlXVxyXG4gICAgfSBlbHNlIGlmIChwbGF5ZXIgPT09ICdjb21wdXRlcicpIHtcclxuICAgICAgY29uc3QgbGFzdFN1Y2Nlc3NmdWxBSU1vdmUgPSBodW1hbkJvYXJkLmdldExhc3RTdWNjZXNzZnVsTW92ZSgpXHJcbiAgICAgIGlmIChcclxuICAgICAgICBsYXN0U3VjY2Vzc2Z1bEFJTW92ZSA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgbGFzdFN1Y2Nlc3NmdWxBSU1vdmUgIT09IGNvb3JkaW5hdGVcclxuICAgICAgKSB7XHJcbiAgICAgICAgc2hpcElzU3VuayA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIFtzaGlwSXNTdW5rXVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGdhbWVCb2FyZCA9IGh1bWFuQm9hcmQuZ2V0Qm9hcmQoKVxyXG4gICAgICBjb25zdCB0YXJnZXRTaGlwT2JqID1cclxuICAgICAgICBnYW1lQm9hcmRbbGFzdFN1Y2Nlc3NmdWxBSU1vdmVbMF1dW2xhc3RTdWNjZXNzZnVsQUlNb3ZlWzFdXVxyXG4gICAgICBzaGlwSXNTdW5rID0gdGFyZ2V0U2hpcE9iai5oYXNCZWVuU3VuaygpXHJcblxyXG4gICAgICByZXR1cm4gW3NoaXBJc1N1bmssIHRhcmdldFNoaXBPYmosIGxhc3RTdWNjZXNzZnVsQUlNb3ZlXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzZXRHYW1lU3RhdGUgPSAod2lubmVyKSA9PiB7XHJcbiAgICBodW1hbkJvYXJkLmNsZWFyR2FtZUJvYXJkKClcclxuICAgIGFpQm9hcmQuY2xlYXJHYW1lQm9hcmQoKVxyXG4gICAgaHVtYW5Cb2FyZC5yZXNldFNoaXBPYmplY3RzKClcclxuICAgIGFpQm9hcmQucmVzZXRTaGlwT2JqZWN0cygpXHJcbiAgICBodW1hbkJvYXJkLmNyZWF0ZUdhbWVCb2FyZCgpXHJcbiAgICBhaUJvYXJkLmNyZWF0ZUdhbWVCb2FyZCgpXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0SHVtYW5Cb2FyZDogaHVtYW5Cb2FyZC5nZXRCb2FyZCxcclxuICAgIGdldEFJQm9hcmQ6IGFpQm9hcmQuZ2V0Qm9hcmQsXHJcbiAgICBnZXRBSUJvYXJkT2JqOiBhaUJvYXJkLFxyXG4gICAgZ2V0SHVtYW5Cb2FyZE9iajogaHVtYW5Cb2FyZCxcclxuICAgIHN3aXRjaFBsYXllcixcclxuICAgIHBsYXlSb3VuZCxcclxuICAgIGdldEN1cnJlbnRQbGF5ZXIsXHJcbiAgICByZXNldEdhbWVTdGF0ZSxcclxuICAgIGNoZWNrRm9yV2luLFxyXG4gICAgZ2V0UGxheWVycyxcclxuICAgIHBsYWNlQUlTaGlwcyxcclxuICAgIHBsYWNlQ2FycmllclNoaXAsXHJcbiAgICBwbGFjZUJhdHRsZVNoaXAsXHJcbiAgICBwbGFjZUNydWlzZXJTaGlwLFxyXG4gICAgcGxhY2VTdWJtYXJpbmVTaGlwLFxyXG4gICAgcGxhY2VEZXN0cm95ZXJTaGlwLFxyXG4gICAgaXNTaGlwU3Vua1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgZ2FtZUNvbnRyb2xsZXIgfVxyXG5cclxuZXhwb3J0IGNvbnN0IHBsYWNlU2hpcHMgPSAoYm9hcmQsIGNvb3JkaW5hdGVzT2JqKSA9PiB7XHJcbiAgY29uc3Qgc2hpcENvb3JkaW5hdGVzQXJyID0gT2JqZWN0LnZhbHVlcyhjb29yZGluYXRlc09iailcclxuICBzaGlwQ29vcmRpbmF0ZXNBcnIuZm9yRWFjaCgoc2hpcENvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICBib2FyZC5wbGFjZVNoaXAoc2hpcENvb3JkaW5hdGVzKVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qIGNvbnN0IHBsYWNlRWFjaEh1bWFuU2hpcCA9IChjb29yZGluYXRlKSA9PiB7XHJcbiAgaHVtYW5Cb2FyZC5wbGFjZVNoaXAoY29vcmRpbmF0ZSlcclxufSAqL1xyXG4iLCJpbXBvcnQgeyBhcnJheXNBcmVFcXVhbCB9IGZyb20gJy4uL2hlbHBlcnMvYXJyYXlzQXJlRXF1YWwnXHJcbmltcG9ydCB7IFNoaXAgfSBmcm9tICcuL1NoaXAnXHJcblxyXG5leHBvcnQgY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcclxuICBsZXQgYm9hcmQgPSBbXVxyXG4gIGNvbnN0IHNoaXBPYmplY3RzID0gW11cclxuICBjb25zdCBtaXNzZWRTaG90cyA9IFtdXHJcbiAgY29uc3QgYWlBdmFpbGFibGVNb3ZlcyA9IFtdXHJcbiAgY29uc3Qgc3VjY2Vzc2Z1bFNob3RzID0gW11cclxuICBsZXQgYWRqYWNlbnRTbG90c1F1ZXVlID0gW11cclxuICBjb25zdCByb3dzID0gOVxyXG4gIGNvbnN0IGNvbHVtbnMgPSA5XHJcbiAgbGV0IGxhc3RBSU1vdmVTdWNjZXNzZnVsID0gZmFsc2VcclxuICBsZXQgbGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwgPSBmYWxzZVxyXG5cclxuICBjb25zdCBjcmVhdGVHYW1lQm9hcmQgPSAoKSA9PiB7XHJcbiAgICBib2FyZCA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gcm93czsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgYm9hcmRbaV0gPSBbXVxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICBib2FyZFtpXS5wdXNoKHVuZGVmaW5lZClcclxuICAgICAgICBjb25zdCBjb29yZGluYXRlID0gW2ksIGpdXHJcbiAgICAgICAgYWlBdmFpbGFibGVNb3Zlcy5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNoZWNrcyBpZiBjb29yZGluYXRlcyBmb3Igc2hpcCBpcyBvbiB0aGVcclxuICAvLyBnYW1lIGJvYXJkXHJcbiAgY29uc3QgdmFsaWRhdGVDb29yZGluYXRlcyA9IChjb29yZGluYXRlcykgPT4ge1xyXG4gICAgbGV0IHZhbGlkQ29vcmRpbmF0ZXMgPSB0cnVlXHJcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVbMF1cclxuICAgICAgY29uc3QgY29sdW1uID0gY29vcmRpbmF0ZVsxXVxyXG4gICAgICBpZiAocm93ID4gOSB8fCByb3cgPCAwKSB7XHJcbiAgICAgICAgdmFsaWRDb29yZGluYXRlcyA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkQ29vcmRpbmF0ZXNcclxuICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPiA5IHx8IGNvbHVtbiA8IDApIHtcclxuICAgICAgICB2YWxpZENvb3JkaW5hdGVzID0gZmFsc2VcclxuICAgICAgICByZXR1cm4gdmFsaWRDb29yZGluYXRlc1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB2YWxpZENvb3JkaW5hdGVzXHJcbiAgfVxyXG5cclxuICAvLyBjaGVja3MgaWYgc2hpcCBjb29yZGluYXRlcyBvdmVybGFwIHdpdGggYWxyZWFkeVxyXG4gIC8vIHBsYWNlZCBzaGlwIGNvb3JkaW5hdGVzIGZvciB0aGUgc2FtZSBzaGlwXHJcbiAgY29uc3QgY2hlY2tTZWxmT3ZlcmxhcCA9IChjb29yZGluYXRlcykgPT4ge1xyXG4gICAgbGV0IGNvb3JkaW5hdGVzT3ZlcmxhcCA9IGZhbHNlXHJcbiAgICBsZXQgcHJldkNvb3JkaW5hdGVcclxuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCA+IDApIHtcclxuICAgICAgICBpZiAoYXJyYXlzQXJlRXF1YWwocHJldkNvb3JkaW5hdGUsIGNvb3JkaW5hdGUpKSB7XHJcbiAgICAgICAgICBjb29yZGluYXRlc092ZXJsYXAgPSB0cnVlXHJcbiAgICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXNPdmVybGFwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXZDb29yZGluYXRlID0gY29vcmRpbmF0ZVxyXG4gICAgICB9XHJcbiAgICAgIHByZXZDb29yZGluYXRlID0gY29vcmRpbmF0ZVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gY29vcmRpbmF0ZXNPdmVybGFwXHJcbiAgfVxyXG5cclxuICAvLyBTaG91bGQgcHJldmVudCBhIHNoaXAgZnJvbSBiZWluZ1xyXG4gIC8vIHBsYWNlZCBvbiB0b3Agb2YgYW5vdGhlciBzaGlwXHJcbiAgY29uc3QgY2hlY2tPdmVybGFwV2l0aE90aGVyU2hpcHMgPSAoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgIGxldCBzaGlwc092ZXJsYXAgPSBmYWxzZVxyXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgICBjb25zdCByb3cgPSBjb29yZGluYXRlWzBdXHJcbiAgICAgIGNvbnN0IGNvbHVtbiA9IGNvb3JkaW5hdGVbMV1cclxuICAgICAgY29uc3QgYm9hcmRDZWxsID0gYm9hcmRbcm93XVtjb2x1bW5dXHJcbiAgICAgIGlmICh0eXBlb2YgYm9hcmRDZWxsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHNoaXBzT3ZlcmxhcCA9IHRydWVcclxuICAgICAgICByZXR1cm4gc2hpcHNPdmVybGFwXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHNoaXBzT3ZlcmxhcFxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwID0gKGNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICBsZXQgc2hpcFBsYWNlZCA9IHRydWVcclxuXHJcbiAgICBjb25zdCBsZWdhbENvb3JkaW5hdGVzID0gdmFsaWRhdGVDb29yZGluYXRlcyhjb29yZGluYXRlcylcclxuICAgIGlmICghbGVnYWxDb29yZGluYXRlcykge1xyXG4gICAgICBzaGlwUGxhY2VkID0gZmFsc2VcclxuICAgICAgcmV0dXJuIHNoaXBQbGFjZWRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvdmVybGFwcGluZ0Nvb3JkaW5hdGVzID0gY2hlY2tTZWxmT3ZlcmxhcChjb29yZGluYXRlcylcclxuICAgIGlmIChvdmVybGFwcGluZ0Nvb3JkaW5hdGVzKSB7XHJcbiAgICAgIHNoaXBQbGFjZWQgPSBmYWxzZVxyXG4gICAgICByZXR1cm4gc2hpcFBsYWNlZFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNoaXBPdmVybGFwcGluZyA9IGNoZWNrT3ZlcmxhcFdpdGhPdGhlclNoaXBzKGNvb3JkaW5hdGVzKVxyXG4gICAgaWYgKHNoaXBPdmVybGFwcGluZykge1xyXG4gICAgICBzaGlwUGxhY2VkID0gZmFsc2VcclxuICAgICAgcmV0dXJuIHNoaXBQbGFjZWRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gY29vcmRpbmF0ZXMubGVuZ3RoXHJcbiAgICBjb25zdCBzaGlwT2JqZWN0ID0gU2hpcChzaGlwTGVuZ3RoLCAwLCBmYWxzZSlcclxuICAgIHNoaXBPYmplY3RzLnB1c2goc2hpcE9iamVjdClcclxuXHJcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVbMF1cclxuICAgICAgY29uc3QgY29sdW1uID0gY29vcmRpbmF0ZVsxXVxyXG4gICAgICBib2FyZFtyb3ddW2NvbHVtbl0gPSBzaGlwT2JqZWN0XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBzaGlwUGxhY2VkXHJcbiAgfVxyXG5cclxuICAvLyBwcmV2ZW50cyBodW1hbiBwbGF5ZXIgZnJvbSBhdHRhY2tpbmcgcHJldmlvdXNseVxyXG4gIC8vIGF0dGFja2VkIGNvb3JkaW5hdGVcclxuICBjb25zdCBwcmV2ZW50U2FtZUF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XHJcbiAgICBsZXQgYWxyZWFkeUF0dGFja2VkID0gZmFsc2VcclxuICAgIHN1Y2Nlc3NmdWxTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XHJcbiAgICAgIGlmIChhcnJheXNBcmVFcXVhbChjb29yZGluYXRlLCBzaG90KSkge1xyXG4gICAgICAgIGFscmVhZHlBdHRhY2tlZCA9IHRydWVcclxuICAgICAgICByZXR1cm4gcHJldmVudFNhbWVBdHRhY2tcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBtaXNzZWRTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XHJcbiAgICAgIGlmIChhcnJheXNBcmVFcXVhbChjb29yZGluYXRlLCBzaG90KSkge1xyXG4gICAgICAgIGFscmVhZHlBdHRhY2tlZCA9IHRydWVcclxuICAgICAgICByZXR1cm4gcHJldmVudFNhbWVBdHRhY2tcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBhbHJlYWR5QXR0YWNrZWRcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZXMsIGN1cnJlbnRQbGF5ZXIpID0+IHtcclxuICAgIGNvbnN0IHJvdyA9ICtjb29yZGluYXRlc1swXVxyXG4gICAgY29uc3QgY29sdW1uID0gK2Nvb3JkaW5hdGVzWzFdXHJcbiAgICAvLyBjb29yZGluYXRlcyA9IFtyb3csIGNvbHVtbl1cclxuICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGJvYXJkW3Jvd11bY29sdW1uXVxyXG4gICAgY29uc3Qgc2hpcE9iaiA9IGJvYXJkQ2VsbFxyXG5cclxuICAgIC8vIE5lZWQgdG8gY2hlY2sgaWYgbmV3IGNvb3JkaW5hdGUgaXMgYWxyZWFkeVxyXG4gICAgLy8gaW5zaWRlIHN1Y2Nlc3NmdWxTaG90cyBvciBtaXNzZWRTaG90c1xyXG4gICAgY29uc3QgYWxyZWFkeUF0dGFja2VkID0gcHJldmVudFNhbWVBdHRhY2soY29vcmRpbmF0ZXMpXHJcbiAgICBpZiAoYWxyZWFkeUF0dGFja2VkKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgYm9hcmRDZWxsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBzaGlwT2JqLmhpdCgpXHJcbiAgICAgIGN1cnJlbnRQbGF5ZXIgPT09ICdIdW1hbidcclxuICAgICAgICA/IChsYXN0SHVtYW5Nb3ZlU3VjY2Vzc2Z1bCA9IHRydWUpXHJcbiAgICAgICAgOiAobGFzdEFJTW92ZVN1Y2Nlc3NmdWwgPSB0cnVlKVxyXG4gICAgICBzdWNjZXNzZnVsU2hvdHMucHVzaChjb29yZGluYXRlcylcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvYXJkQ2VsbCAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgbGFzdEFJTW92ZVN1Y2Nlc3NmdWwgPSBmYWxzZVxyXG4gICAgICBsYXN0SHVtYW5Nb3ZlU3VjY2Vzc2Z1bCA9IGZhbHNlXHJcbiAgICAgIG1pc3NlZFNob3RzLnB1c2goY29vcmRpbmF0ZXMpXHJcbiAgICAgIHJlbW92ZUFkamFjZW50U2xvdChjb29yZGluYXRlcylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIElmIHRoZSBjb21wdXRlciByYW5kb21seSBndWVzc2VzIGEgc3BvdCB0aGF0IGlzIGFscmVhZHkgaW4gdGhlIGFkamFjZW5jeVxyXG4gIC8vIHNsb3QgcXVldWUsIHdlIG5lZWQgdG8gcmVtb3ZlIGl0IChmcm9tIHRoZSBhZGphY2VuY3kgcXVldWUpIHNvXHJcbiAgLy8gdGhlIGNvbXB1dGVyIGRvZXMgbm90IGF0dGVtcHQgdG9cclxuICAvLyB1c2UgdGhlIGFscmVhZHkgZ3Vlc3NlZCBzcG90IHdoZW4gcHVsbGluZyBmcm9tIHRoZSBhZGphY2VuY3lcclxuICAvLyBxdWV1ZSBmb3IgaXQncyBuZXh0IG1vdmVcclxuICBjb25zdCByZW1vdmVBZGphY2VudFNsb3QgPSAoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldENvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNcclxuICAgIGNvbnN0IGFkamFjZW50UXVldWUgPSBuZXcgU2V0KClcclxuICAgIGZvciAoY29uc3Qgc2xvdCBvZiBhZGphY2VudFNsb3RzUXVldWUpIHtcclxuICAgICAgYWRqYWNlbnRRdWV1ZS5hZGQoc2xvdC50b1N0cmluZygpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGZpbHRlciB0aGUgYWRqYWNlbmN5IHNsb3QgcXVldWUgZG93biB0byBzbG90cyB0aGF0IGhhdmUgTk9UXHJcbiAgICAvLyBhbHJlYWR5IGJlZW4gZ3Vlc2VkLlxyXG4gICAgYWRqYWNlbnRTbG90c1F1ZXVlID0gYWRqYWNlbnRTbG90c1F1ZXVlLmZpbHRlcihcclxuICAgICAgKHNsb3QpID0+ICFhcnJheXNBcmVFcXVhbChzbG90LCB0YXJnZXRDb29yZGluYXRlcylcclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcclxuICAgIGxldCBldmVyeVNoaXBTYW5rID0gdHJ1ZVxyXG4gICAgc2hpcE9iamVjdHMuZm9yRWFjaCgoc2hpcE9iaikgPT4ge1xyXG4gICAgICBpZiAoIXNoaXBPYmouaGFzQmVlblN1bmsoKSkge1xyXG4gICAgICAgIGV2ZXJ5U2hpcFNhbmsgPSBmYWxzZVxyXG4gICAgICAgIHJldHVybiBldmVyeVNoaXBTYW5rXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gZXZlcnlTaGlwU2Fua1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlTGFzdEFJTW92ZSA9IChyYW5kb21Nb3ZlKSA9PiB7XHJcbiAgICBhaUF2YWlsYWJsZU1vdmVzLmZvckVhY2goKG1vdmUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChhcnJheXNBcmVFcXVhbChtb3ZlLCByYW5kb21Nb3ZlKSkge1xyXG4gICAgICAgIGFpQXZhaWxhYmxlTW92ZXMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkQWRqYWNlbnRTbG90c1RvUXVldWUgPSAoYWRqYWNlbnRTbG90cykgPT4ge1xyXG4gICAgYWRqYWNlbnRTbG90cy5mb3JFYWNoKChzbG90KSA9PiB7XHJcbiAgICAgIGFkamFjZW50U2xvdHNRdWV1ZS5wdXNoKHNsb3QpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xlYXJHYW1lQm9hcmQgPSAoKSA9PiB7XHJcbiAgICBzaGlwT2JqZWN0cy5sZW5ndGggPSAwXHJcbiAgICBtaXNzZWRTaG90cy5sZW5ndGggPSAwXHJcbiAgICBhaUF2YWlsYWJsZU1vdmVzLmxlbmd0aCA9IDBcclxuICAgIHN1Y2Nlc3NmdWxTaG90cy5sZW5ndGggPSAwXHJcbiAgICBhZGphY2VudFNsb3RzUXVldWUubGVuZ3RoID0gMFxyXG4gICAgbGFzdEFJTW92ZVN1Y2Nlc3NmdWwgPSBmYWxzZVxyXG4gICAgbGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwgPSBmYWxzZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzZXRTaGlwT2JqZWN0cyA9ICgpID0+IHtcclxuICAgIHNoaXBPYmplY3RzLmZvckVhY2goKHNoaXBPYmopID0+IHtcclxuICAgICAgc2hpcE9iai5yZXNldFNoaXAoKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGJvYXJkXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRNaXNzZWRTaG90cyA9ICgpID0+IHtcclxuICAgIHJldHVybiBtaXNzZWRTaG90c1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0U3VjY2Vzc2Z1bFNob3RzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHN1Y2Nlc3NmdWxTaG90c1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0U2hpcE9iamVjdHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc2hpcE9iamVjdHNcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEFJQXZhaWxhYmxlTW92ZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYWlBdmFpbGFibGVNb3Zlc1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0TGFzdEFJTW92ZVN1Y2Nlc3NmdWwgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbGFzdEFJTW92ZVN1Y2Nlc3NmdWxcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldExhc3RIdW1hbk1vdmVTdWNjZXNzZnVsID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGxhc3RIdW1hbk1vdmVTdWNjZXNzZnVsXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRBZGphY2VudFNsb3RzUXVldWUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYWRqYWNlbnRTbG90c1F1ZXVlXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRBZGphY2VudFF1ZXVlU2xvdCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhZGphY2VudFNsb3RzUXVldWUucG9wKClcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldExhc3RTdWNjZXNzZnVsTW92ZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBzdWNjZXNzZnVsU2hvdHMuYXQoLTEpXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY3JlYXRlR2FtZUJvYXJkLFxyXG4gICAgZ2V0Qm9hcmQsXHJcbiAgICBwbGFjZVNoaXAsXHJcbiAgICByZWNlaXZlQXR0YWNrLFxyXG4gICAgY2xlYXJHYW1lQm9hcmQsXHJcbiAgICBnZXRNaXNzZWRTaG90cyxcclxuICAgIGdldFN1Y2Nlc3NmdWxTaG90cyxcclxuICAgIGFsbFNoaXBzU3VuayxcclxuICAgIGdldEFJQXZhaWxhYmxlTW92ZXMsXHJcbiAgICB2YWxpZGF0ZUNvb3JkaW5hdGVzLFxyXG4gICAgcHJldmVudFNhbWVBdHRhY2ssXHJcbiAgICBjaGVja1NlbGZPdmVybGFwLFxyXG4gICAgZ2V0U2hpcE9iamVjdHMsXHJcbiAgICByZW1vdmVMYXN0QUlNb3ZlLFxyXG4gICAgY2hlY2tPdmVybGFwV2l0aE90aGVyU2hpcHMsXHJcbiAgICBnZXRMYXN0QUlNb3ZlU3VjY2Vzc2Z1bCxcclxuICAgIGdldExhc3RIdW1hbk1vdmVTdWNjZXNzZnVsLFxyXG4gICAgZ2V0QWRqYWNlbnRTbG90c1F1ZXVlLFxyXG4gICAgYWRkQWRqYWNlbnRTbG90c1RvUXVldWUsXHJcbiAgICBnZXRBZGphY2VudFF1ZXVlU2xvdCxcclxuICAgIHJlbW92ZUFkamFjZW50U2xvdCxcclxuICAgIGdldExhc3RTdWNjZXNzZnVsTW92ZSxcclxuICAgIHJlc2V0U2hpcE9iamVjdHNcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgYXJyYXlzQXJlRXF1YWwgfSBmcm9tICcuLi9oZWxwZXJzL2FycmF5c0FyZUVxdWFsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYXllciA9IChuYW1lLCBpc0FJKSA9PiB7XHJcbiAgLy8gVXNlZCB0byBtYWtlIEFJIHNlbGVjdCByYW5kb20sIGxlZ2FsIGNvb3JkaW5hdGVcclxuICAvLyBvbiBwbGF5ZXJzIGdhbWUgYm9hcmRcclxuICBjb25zdCBtYWtlUmFuZG9tTW92ZSA9IChpc0FJLCBhdmFpbGFibGVNb3ZlcykgPT4ge1xyXG4gICAgaWYgKCFpc0FJIHx8IGF2YWlsYWJsZU1vdmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXZhaWxhYmxlTW92ZXNMZW5ndGggPSBhdmFpbGFibGVNb3Zlcy5sZW5ndGhcclxuICAgIGNvbnN0IHJhbmRvbUFyckluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlTW92ZXNMZW5ndGgpXHJcbiAgICBjb25zdCByYW5kb21Db29yZGluYXRlID0gYXZhaWxhYmxlTW92ZXNbcmFuZG9tQXJySW5kZXhdXHJcblxyXG4gICAgcmV0dXJuIHJhbmRvbUNvb3JkaW5hdGVcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEFkamFjZW50U2xvdHMgPSAoXHJcbiAgICBpc0FJLFxyXG4gICAgYXZhaWxhYmxlTW92ZXMsXHJcbiAgICBzdWNjZXNzZnVsU2hvdHMsXHJcbiAgICBtaXNzZWRTaG90c1xyXG4gICkgPT4ge1xyXG4gICAgaWYgKCFpc0FJIHx8IGF2YWlsYWJsZU1vdmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGFzdFN1Y2Nlc3NmdWxNb3ZlID0gc3VjY2Vzc2Z1bFNob3RzLmF0KC0xKVxyXG4gICAgY29uc3QgYWRqYWNlbnRTbG90cyA9IHJldHJpZXZlQWRqYWNlbnRTbG90cyhsYXN0U3VjY2Vzc2Z1bE1vdmUpXHJcbiAgICBjb25zdCBsZWdhbEFkamFjZW50U2xvdHMgPSByZW1vdmVJbGxlZ2FsQWRqYWNlbnRTbG90cyhhZGphY2VudFNsb3RzKVxyXG4gICAgY29uc3QgYXZhaWxhYmxlQWRqYWNlbnRTbG90cyA9IHByZXZlbnRQcmV2aW91c1Nob3RUb1F1ZXVlKFxyXG4gICAgICBhdmFpbGFibGVNb3ZlcyxcclxuICAgICAgbGVnYWxBZGphY2VudFNsb3RzLFxyXG4gICAgICBzdWNjZXNzZnVsU2hvdHMsXHJcbiAgICAgIG1pc3NlZFNob3RzXHJcbiAgICApXHJcbiAgICByZXR1cm4gYXZhaWxhYmxlQWRqYWNlbnRTbG90c1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Q2VsbEFib3ZlID0gKGxhc3RTdWNjZXNzZnVsTW92ZSkgPT4ge1xyXG4gICAgLy8gdGhlIHJvdyBuZWVkcyB0byBjaGFuZ2UgYnkgb25lXHJcbiAgICBjb25zdCBuZXdBcnIgPSBbXVxyXG4gICAgY29uc3QgbmV3Um93ID0gK2xhc3RTdWNjZXNzZnVsTW92ZVswXSAtIDFcclxuICAgIGlmIChuZXdSb3cgPiA5IHx8IG5ld1JvdyA8IDApIHtcclxuICAgICAgcmV0dXJuICdpbGxlZ2FsJ1xyXG4gICAgfVxyXG4gICAgbmV3QXJyWzBdID0gbmV3Um93XHJcbiAgICBuZXdBcnJbMV0gPSArbGFzdFN1Y2Nlc3NmdWxNb3ZlWzFdXHJcbiAgICByZXR1cm4gbmV3QXJyXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRDZWxsQmVsb3cgPSAobGFzdFN1Y2Nlc3NmdWxNb3ZlKSA9PiB7XHJcbiAgICAvLyB0aGUgcm93IG5lZWRzIHRvIGNoYW5nZSBieSBvbmVcclxuICAgIGNvbnN0IG5ld0FyciA9IFtdXHJcbiAgICBjb25zdCBuZXdSb3cgPSArbGFzdFN1Y2Nlc3NmdWxNb3ZlWzBdICsgMVxyXG4gICAgaWYgKG5ld1JvdyA+IDkgfHwgbmV3Um93IDwgMCkge1xyXG4gICAgICByZXR1cm4gJ2lsbGVnYWwnXHJcbiAgICB9XHJcbiAgICBuZXdBcnJbMF0gPSBuZXdSb3dcclxuICAgIG5ld0FyclsxXSA9ICtsYXN0U3VjY2Vzc2Z1bE1vdmVbMV1cclxuICAgIHJldHVybiBuZXdBcnJcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENlbGxUb1JpZ2h0ID0gKGxhc3RTdWNjZXNzZnVsTW92ZSkgPT4ge1xyXG4gICAgLy8gdGhlIHJvdyBuZWVkcyB0byBjaGFuZ2UgYnkgb25lXHJcbiAgICBjb25zdCBuZXdBcnIgPSBbXVxyXG4gICAgY29uc3QgbmV3Q29sdW1uID0gK2xhc3RTdWNjZXNzZnVsTW92ZVsxXSArIDFcclxuICAgIGlmIChuZXdDb2x1bW4gPiA5IHx8IG5ld0NvbHVtbiA8IDApIHtcclxuICAgICAgcmV0dXJuICdpbGxlZ2FsJ1xyXG4gICAgfVxyXG4gICAgbmV3QXJyWzBdID0gK2xhc3RTdWNjZXNzZnVsTW92ZVswXVxyXG4gICAgbmV3QXJyWzFdID0gbmV3Q29sdW1uXHJcbiAgICByZXR1cm4gbmV3QXJyXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRDZWxsVG9MZWZ0ID0gKGxhc3RTdWNjZXNzZnVsTW92ZSkgPT4ge1xyXG4gICAgLy8gdGhlIHJvdyBuZWVkcyB0byBjaGFuZ2UgYnkgb25lXHJcbiAgICBjb25zdCBuZXdBcnIgPSBbXVxyXG4gICAgY29uc3QgbmV3Q29sdW1uID0gK2xhc3RTdWNjZXNzZnVsTW92ZVsxXSAtIDFcclxuICAgIGlmIChuZXdDb2x1bW4gPiA5IHx8IG5ld0NvbHVtbiA8IDApIHtcclxuICAgICAgcmV0dXJuICdpbGxlZ2FsJ1xyXG4gICAgfVxyXG4gICAgbmV3QXJyWzBdID0gK2xhc3RTdWNjZXNzZnVsTW92ZVswXVxyXG4gICAgbmV3QXJyWzFdID0gbmV3Q29sdW1uXHJcbiAgICByZXR1cm4gbmV3QXJyXHJcbiAgfVxyXG5cclxuIFxyXG5cclxuICBjb25zdCByZXRyaWV2ZUFkamFjZW50U2xvdHMgPSAobGFzdFN1Y2Nlc3NmdWxNb3ZlKSA9PiB7XHJcbiAgICBjb25zdCBsYXN0U3VjY2Vzc2Z1bE1vdmVWYWx1ZSA9IGxhc3RTdWNjZXNzZnVsTW92ZVxyXG4gICAgY29uc3QgYWRqYWNlbnRTbG90cyA9IFtdXHJcbiAgICBhZGphY2VudFNsb3RzLnB1c2goZ2V0Q2VsbEFib3ZlKGxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlKSlcclxuICAgIGFkamFjZW50U2xvdHMucHVzaChnZXRDZWxsQmVsb3cobGFzdFN1Y2Nlc3NmdWxNb3ZlVmFsdWUpKVxyXG4gICAgYWRqYWNlbnRTbG90cy5wdXNoKGdldENlbGxUb1JpZ2h0KGxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlKSlcclxuICAgIGFkamFjZW50U2xvdHMucHVzaChnZXRDZWxsVG9MZWZ0KGxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlKSlcclxuICAgIHJldHVybiBhZGphY2VudFNsb3RzXHJcbiAgfVxyXG5cclxuICAvLyBwcmV2ZW50cyBhZGRpbmcgYWRqYWNlbnQgc2xvdHMgdGhhdCBhcmUgbm90IG9uIHRoZSBib2FyZFxyXG4gIGNvbnN0IHJlbW92ZUlsbGVnYWxBZGphY2VudFNsb3RzID0gKGFkamFjZW50U2xvdHMpID0+IHtcclxuICAgIGNvbnN0IGFkamFjZW50U2xvdHNBcnIgPSBhZGphY2VudFNsb3RzXHJcbiAgICBhZGphY2VudFNsb3RzQXJyLmZvckVhY2goKHNsb3QsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChzbG90ID09PSAnaWxsZWdhbCcpIHtcclxuICAgICAgICBhZGphY2VudFNsb3RzQXJyLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBhZGphY2VudFNsb3RzQXJyXHJcbiAgfVxyXG5cclxuICAvLyBpZiB0aGUgY29tcHV0ZXIgaGFzIGFscmVhZHkgKHJhbmRvbWx5KSBndWVzc2VkIGEgc3BvdCBvbiB0aGUgYm9hcmQsIHByZXZlbnRcclxuICAvLyBhZGRpbmcgdGhlIHNwb3QgdG8gdGhlIGFkamFjZW5jeSBsaXN0XHJcbiAgY29uc3QgcHJldmVudFByZXZpb3VzU2hvdFRvUXVldWUgPSAoXHJcbiAgICBhdmFpbGFibGVNb3ZlcyxcclxuICAgIGFkamFjZW50U2xvdHMsXHJcbiAgICBzdWNjZXNzZnVsU2hvdHMsXHJcbiAgICBtaXNzZWRTaG90c1xyXG4gICkgPT4ge1xyXG4gICAgY29uc3Qgc2xvdHMgPSBhZGphY2VudFNsb3RzXHJcbiAgICBjb25zdCBhbGxQcmV2aW91c0F0dGFja3MgPSBzdWNjZXNzZnVsU2hvdHMuY29uY2F0KG1pc3NlZFNob3RzKVxyXG5cclxuICAgIGNvbnN0IHByZXZpb3VzQXR0YWNrcyA9IG5ldyBTZXQoKVxyXG5cclxuICAgIGZvciAoY29uc3Qgc2hvdCBvZiBhbGxQcmV2aW91c0F0dGFja3MpIHtcclxuICAgICAgcHJldmlvdXNBdHRhY2tzLmFkZChzaG90LnRvU3RyaW5nKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR28gdGhyb3VnaCBlYWNoIGFkamFjZW5jeSBzbG90LCBhbmQgZGV0ZXJtaW5lIGlmIHRoZSBzbG90IGlzIGluIHRoZVxyXG4gICAgLy8gcHJldmlvdXNBdHRhY2tzIG1ldGhvZC4gV2UgYXJlIGZpbHRlcmluZyBvdXQgdGhlIHNsb3RzIHRoYXQgYXJlIGluXHJcbiAgICAvLyB0aGUgcHJldmlvdXMgYXR0YWNrIHNldCwgYXMgd2UgZG8gbm90IHdhbnQgdG8gaGF2ZSB0aGUgY29tcHV0ZXJcclxuICAgIC8vIHRvIHVzZSB0aG9zZSBzbG90cyBhZ2FpbiBpbiBmdXR1cmUgdHVybnNcclxuICAgIGNvbnN0IGZpbHRlcmVkU2xvdHMgPSBzbG90cy5maWx0ZXIoXHJcbiAgICAgIChzbG90KSA9PiAhcHJldmlvdXNBdHRhY2tzLmhhcyhzbG90LnRvU3RyaW5nKCkpXHJcbiAgICApXHJcblxyXG4gICAgcmV0dXJuIGZpbHRlcmVkU2xvdHNcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbmFtZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG1ha2VSYW5kb21Nb3ZlLFxyXG4gICAgZ2V0TmFtZSxcclxuICAgIGdldEFkamFjZW50U2xvdHMsXHJcbiAgICBwcmV2ZW50UHJldmlvdXNTaG90VG9RdWV1ZVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgU2hpcCA9IChsZW5ndGgsIG51bU9mSGl0cywgaXNTdW5rKSA9PiB7XHJcbiAgLy8gSW5jcmVhc2UgbnVtYmVyIG9mIGhpdHMgaW4gc2hpcCBieSAxXHJcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xyXG4gICAgaWYgKG51bU9mSGl0cyA9PT0gbGVuZ3RoKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIG51bU9mSGl0cysrXHJcbiAgICByZXR1cm4gbnVtT2ZIaXRzXHJcbiAgfVxyXG5cclxuICAvLyBEZXRlcm1pbmUgaWYgdGhlIHNoaXAgb2JqZWN0IGhhcyBiZWVuIHN1bmtcclxuICBjb25zdCBoYXNCZWVuU3VuayA9ICgpID0+IHtcclxuICAgIGlmIChsZW5ndGggPT09IG51bU9mSGl0cykge1xyXG4gICAgICBpc1N1bmsgPSB0cnVlXHJcbiAgICAgIHJldHVybiBpc1N1bmtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNTdW5rXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXROdW1PZkhpdHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbnVtT2ZIaXRzXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbGVuZ3RoXHJcbiAgfVxyXG5cclxuICBjb25zdCByZXNldFNoaXAgPSAoKSA9PiB7XHJcbiAgICBpZiAobnVtT2ZIaXRzID09PSBsZW5ndGgpIHtcclxuICAgICAgbnVtT2ZIaXRzID0gMFxyXG4gICAgICBpc1N1bmsgPSBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgaGl0LCBoYXNCZWVuU3VuaywgZ2V0TnVtT2ZIaXRzLCBnZXRMZW5ndGgsIHJlc2V0U2hpcCB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGFycmF5c0FyZUVxdWFsID0gKGFycjEsIGFycjIpID0+IHtcclxuICBpZiAoYXJyMSA9PT0gbnVsbCB8fCBhcnIyID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgaWYgKGFycjEubGVuZ3RoICE9PSBhcnIyLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyMS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGFycjFbaV0gIT09IGFycjJbaV0pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuIiwiLy8gZGVsYXlzIGV4ZWN1dGlvbiBvZiBhIGZ1bmN0aW9uIGZvciBhIHNldCBhbW91bnQgb2YgdGltZVxyXG5leHBvcnQgY29uc3QgZGVsYXkgPSAobXMpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCByZXR1cm5SYW5kb21BSUJvYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFpQm9hcmRzID0gW2FpU2hpcENvb3Jkc09uZSwgYWlTaGlwQ29vcmRzVHdvLCBhaVNoaXBDb29yZHNUaHJlZV1cclxuICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXHJcbiAgY29uc3QgY2hvc2VuQUlCb2FyZCA9IE9iamVjdC52YWx1ZXMoYWlCb2FyZHNbcmFuZG9tSW5kZXhdKVxyXG4gIHJldHVybiBjaG9zZW5BSUJvYXJkXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhaVNoaXBDb29yZHNPbmUgPSB7XHJcbiAgY2FycmllcjogW1xyXG4gICAgWzksIDBdLFxyXG4gICAgWzksIDFdLFxyXG4gICAgWzksIDJdLFxyXG4gICAgWzksIDNdLFxyXG4gICAgWzksIDRdXHJcbiAgXSxcclxuICBiYXR0bGVzaGlwOiBbXHJcbiAgICBbNSwgNV0sXHJcbiAgICBbNiwgNV0sXHJcbiAgICBbNywgNV0sXHJcbiAgICBbOCwgNV1cclxuICBdLFxyXG4gIGNydWlzZXI6IFtcclxuICAgIFswLCA2XSxcclxuICAgIFsxLCA2XSxcclxuICAgIFsyLCA2XVxyXG4gIF0sXHJcbiAgc3VibWFyaW5lOiBbXHJcbiAgICBbMywgOF0sXHJcbiAgICBbNCwgOF0sXHJcbiAgICBbNSwgOF1cclxuICBdLFxyXG4gIGRlc3Ryb3llcjogW1xyXG4gICAgWzAsIDldLFxyXG4gICAgWzEsIDldXHJcbiAgXVxyXG59XHJcblxyXG5jb25zdCBhaVNoaXBDb29yZHNUd28gPSB7XHJcbiAgY2FycmllcjogW1xyXG4gICAgWzAsIDBdLFxyXG4gICAgWzAsIDFdLFxyXG4gICAgWzAsIDJdLFxyXG4gICAgWzAsIDNdLFxyXG4gICAgWzAsIDRdXHJcbiAgXSxcclxuICBiYXR0bGVzaGlwOiBbXHJcbiAgICBbOSwgNV0sXHJcbiAgICBbOSwgNl0sXHJcbiAgICBbOSwgN10sXHJcbiAgICBbOSwgOF1cclxuICBdLFxyXG4gIGNydWlzZXI6IFtcclxuICAgIFsyLCAyXSxcclxuICAgIFszLCAyXSxcclxuICAgIFs0LCAyXVxyXG4gIF0sXHJcbiAgc3VibWFyaW5lOiBbXHJcbiAgICBbNiwgNl0sXHJcbiAgICBbNiwgN10sXHJcbiAgICBbNiwgOF1cclxuICBdLFxyXG4gIGRlc3Ryb3llcjogW1xyXG4gICAgWzgsIDBdLFxyXG4gICAgWzgsIDFdXHJcbiAgXVxyXG59XHJcblxyXG5jb25zdCBhaVNoaXBDb29yZHNUaHJlZSA9IHtcclxuICBjYXJyaWVyOiBbXHJcbiAgICBbNSwgMF0sXHJcbiAgICBbNSwgMV0sXHJcbiAgICBbNSwgMl0sXHJcbiAgICBbNSwgM10sXHJcbiAgICBbNSwgNF1cclxuICBdLFxyXG4gIGJhdHRsZXNoaXA6IFtcclxuICAgIFswLCA5XSxcclxuICAgIFsxLCA5XSxcclxuICAgIFsyLCA5XSxcclxuICAgIFszLCA5XVxyXG4gIF0sXHJcbiAgY3J1aXNlcjogW1xyXG4gICAgWzcsIDddLFxyXG4gICAgWzgsIDddLFxyXG4gICAgWzksIDddXHJcbiAgXSxcclxuICBzdWJtYXJpbmU6IFtcclxuICAgIFsxLCAxXSxcclxuICAgIFsyLCAxXSxcclxuICAgIFszLCAxXVxyXG4gIF0sXHJcbiAgZGVzdHJveWVyOiBbXHJcbiAgICBbNCwgNF0sXHJcbiAgICBbNCwgNV1cclxuICBdXHJcbn1cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxyXFxuXFxyXFxuLyogRG9jdW1lbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIEFwcGx5IGJvcmRlciBib3ggdG8gZW50aXJlIGRvY3VtZW50ICovXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIFNlY3Rpb25zXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXHJcXG4gICAqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxyXFxuICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogR3JvdXBpbmcgY29udGVudFxcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxyXFxuICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXHJcXG4gICAqL1xcclxcblxcclxcbmhyIHtcXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnByZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcbmEge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcclxcbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmFiYnJbdGl0bGVdIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgLyogMiAqL1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYixcXHJcXG5zdHJvbmcge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5jb2RlLFxcclxcbmtiZCxcXHJcXG5zYW1wIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5zbWFsbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcclxcbiAgICogYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuc3ViLFxcclxcbnN1cCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcclxcbiAgICBsaW5lLWhlaWdodDogMDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbnN1YiB7XFxyXFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuc3VwIHtcXHJcXG4gICAgdG9wOiAtMC41ZW07XFxyXFxufVxcclxcblxcclxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcclxcbiAgICovXFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3Jtc1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG5vcHRncm91cCxcXHJcXG5zZWxlY3QsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250LXNpemU6IDEwMCU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICAvKiAyICovXFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIEdpdmUgaW5wdXQgYW5kIHRleHQgYXJlYSBjb25zaXN0ZW50IGxvb2sgKi9cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDEwcHggMCAwIC0xMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGZvbnQ6IGJvbGQgMC42ZW0gc2Fucy1zZXJpZjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlcixcXHJcXG5idXR0b246Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMDAwO1xcclxcbiAgICBjb2xvcjogI2ZmZjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogR2V0cyByaWQgb2YgZGVmYXVsdCBzZWFyY2ggdG8gcmVtb3ZlIHJlc3RyaWN0aW9ucyAqL1xcclxcbmlucHV0W3R5cGU9J3NlYXJjaCddIHtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRml4IGZvciBpbmNvbnNpc3RlbnQgZGlzcGxheSBvZiBjbGVhciBcXFwieFxcXCIgaWNvbiBpbiBzZWFyY2ggaW5wdXRzIGFjcm9zcyBkaWZmZXJlbnQgYnJvd3NlcnMuIFxcclxcbiAgLCB0aGlzIGNvZGUgcmVtb3ZlcyB0aGUgaWNvbiBpbiBFZGdlIGFuZCBDaHJvbWUgd2hlbiB0aGUgaW5wdXQgbG9zZXMgZm9jdXMsIHdoaWxlIGtlZXBpbmcgaXQgdmlzaWJsZSBpbiBTYWZhcmkuICovXFxyXFxuaW5wdXRbdHlwZT0nc2VhcmNoJ106bm90KDpmb2N1cywgOmFjdGl2ZSk6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcclxcbiAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCB7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxyXFxuICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcblt0eXBlPSdidXR0b24nXSxcXHJcXG5bdHlwZT0ncmVzZXQnXSxcXHJcXG5bdHlwZT0nc3VibWl0J10ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuXFxyXFxuOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPSdidXR0b24nXTo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT0ncmVzZXQnXTo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT0nc3VibWl0J106Oi1tb3otZm9jdXMtaW5uZXIge1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPSdidXR0b24nXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT0ncmVzZXQnXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT0nc3VibWl0J106LW1vei1mb2N1c3Jpbmcge1xcclxcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXHJcXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXHJcXG4gICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgLyogMiAqL1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgLyogMyAqL1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcclxcbiAgICAvKiAxICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXHJcXG4gICAqL1xcclxcblxcclxcbnByb2dyZXNzIHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcclxcbiAgICovXFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXHJcXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcblt0eXBlPSdjaGVja2JveCddLFxcclxcblt0eXBlPSdyYWRpbyddIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxyXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT0nc2VhcmNoJ10ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXHJcXG4gICAqL1xcclxcblxcclxcblt0eXBlPSdzZWFyY2gnXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogSW50ZXJhY3RpdmVcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLypcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5zdW1tYXJ5IHtcXHJcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNaXNjXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcclxcbiAgICovXFxyXFxuXFxyXFxudGVtcGxhdGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW2hpZGRlbl0ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtJQUNJLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sOEJBQThCO0lBQzlCLE1BQU07QUFDVjs7QUFFQSx3Q0FBd0M7QUFDeEM7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFF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QUFZO0lBQ1osTUFBTTtBQUNWOztBQUVBOztJQUVJOztBQUVKOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7OztJQUdJOztBQUVKO0lBQ0ksNkJBQTZCO0lBQzdCLE1BQU07SUFDTixvQkFBb0I7SUFDcEIsTUFBTTtBQUNWOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBOzs7SUFHSTs7QUFFSjtJQUNJLDBCQUEwQjtJQUMxQixNQUFNO0lBQ04sYUFBYTtJQUNiLE1BQU07QUFDVjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcclxcblxcclxcbi8qIERvY3VtZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxyXFxuICovXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBcHBseSBib3JkZXIgYm94IHRvIGVudGlyZSBkb2N1bWVudCAqL1xcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTZWN0aW9uc1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcclxcbiAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxyXFxufVxcclxcblxcclxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcclxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5wcmUge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXHJcXG4gICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5hYmJyW3RpdGxlXSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmIsXFxyXFxuc3Ryb25nIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuY29kZSxcXHJcXG5rYmQsXFxyXFxuc2FtcCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuc21hbGwge1xcclxcbiAgICBmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXHJcXG4gICAqIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnN1YixcXHJcXG5zdXAge1xcclxcbiAgICBmb250LXNpemU6IDc1JTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5zdWIge1xcclxcbiAgICBib3R0b206IC0wLjI1ZW07XFxyXFxufVxcclxcblxcclxcbnN1cCB7XFxyXFxuICAgIHRvcDogLTAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbWJlZGRlZCBjb250ZW50XFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcbmltZyB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9ybXNcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmlucHV0IHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxub3B0Z3JvdXAsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgLyogMiAqL1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHaXZlIGlucHV0IGFuZCB0ZXh0IGFyZWEgY29uc2lzdGVudCBsb29rICovXFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAtMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBmb250OiBib2xkIDAuNmVtIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIsXFxyXFxuYnV0dG9uOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgLyogYmFja2dyb3VuZDogIzAwMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7ICovXFxyXFxufVxcclxcblxcclxcbi8qIEdldHMgcmlkIG9mIGRlZmF1bHQgc2VhcmNoIHRvIHJlbW92ZSByZXN0cmljdGlvbnMgKi9cXHJcXG5pbnB1dFt0eXBlPSdzZWFyY2gnXSB7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEZpeCBmb3IgaW5jb25zaXN0ZW50IGRpc3BsYXkgb2YgY2xlYXIgXFxcInhcXFwiIGljb24gaW4gc2VhcmNoIGlucHV0cyBhY3Jvc3MgZGlmZmVyZW50IGJyb3dzZXJzLiBcXHJcXG4gICwgdGhpcyBjb2RlIHJlbW92ZXMgdGhlIGljb24gaW4gRWRnZSBhbmQgQ2hyb21lIHdoZW4gdGhlIGlucHV0IGxvc2VzIGZvY3VzLCB3aGlsZSBrZWVwaW5nIGl0IHZpc2libGUgaW4gU2FmYXJpLiAqL1xcclxcbmlucHV0W3R5cGU9J3NlYXJjaCddOm5vdCg6Zm9jdXMsIDphY3RpdmUpOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXHJcXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQge1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcclxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbnNlbGVjdCB7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bdHlwZT0nYnV0dG9uJ10sXFxyXFxuW3R5cGU9J3Jlc2V0J10sXFxyXFxuW3R5cGU9J3N1Ym1pdCddIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbjo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT0nYnV0dG9uJ106Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9J3Jlc2V0J106Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9J3N1Ym1pdCddOjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT0nYnV0dG9uJ106LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9J3Jlc2V0J106LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9J3N1Ym1pdCddOi1tb3otZm9jdXNyaW5nIHtcXHJcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxyXFxuICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxyXFxuICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG4gICAgZGlzcGxheTogdGFibGU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIC8qIDMgKi9cXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXHJcXG4gICAgLyogMSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5wcm9ncmVzcyB7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXHJcXG4gICAqL1xcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxyXFxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT0nY2hlY2tib3gnXSxcXHJcXG5bdHlwZT0ncmFkaW8nXSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcclxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9J3NlYXJjaCddIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250OiBpbmhlcml0O1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIEludGVyYWN0aXZlXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuXFxyXFxuZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuc3VtbWFyeSB7XFxyXFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWlzY1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXHJcXG4gICAqL1xcclxcblxcclxcbnRlbXBsYXRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcbltoaWRkZW5dIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLWRlZmF1bHQtZm9udDogJ1BsYXknLCBzYW5zLXNlcmlmLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLFxcclxcbiAgICBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoZGFya2JsdWUsIGxpZ2h0Ymx1ZSk7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaW1nIHtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxuICBjb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDNkO1xcclxcbiAgLyogb3BhY2l0eTogMC42OyAqL1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlckNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyQ29udGFpbmVyIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJhZGlhbCAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wQmFyQ29udGFpbmVyIHtcXHJcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gIHdpZHRoOiA3MHZ3O1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgbWFyZ2luLXRvcDogOCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAjN2E3YTdhNDI7XFxyXFxufVxcclxcblxcclxcbi50b3BCYXJDb250YWluZXIgcCB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5wLmludmlzaWJsZSB7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uc2hpcENlbGwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI0FJQm9hcmQgYnV0dG9uLFxcclxcbiNwbGF5ZXJCb2FyZCBidXR0b24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllckJvYXJkQ29udGFpbmVyLFxcclxcbi5haUJvYXJkQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcbiNib2FyZHNDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAyNHB4O1xcclxcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrICovXFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDM4dncpKTtcXHJcXG4gIHdpZHRoOiA4M3Z3O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLm9yaWVudGF0aW9uVG9nZ2xlQnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBoZWlnaHQ6IDYwJTtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnBsYXlBZ2FpbkJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgaGVpZ2h0OiA2MCU7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW4tb3V0O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5vcmllbnRhdGlvblRvZ2dsZUJ0bjpob3ZlcixcXHJcXG5idXR0b24ub3JpZW50YXRpb25Ub2dnbGVCdG46YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzNjM2M7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNib2FyZHNDb250YWluZXIgcCB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4O1xcclxcbiAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyQm9hcmQge1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xcclxcbiAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcclxcbn1cXHJcXG5cXHJcXG4jQUlCb2FyZCB7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XFxyXFxuICBib3gtc2hhZG93OiA0cHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5ib2FyZENlbGwge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5zaGlwQ2VsbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnNoaXBIaXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNCwgMjEsIDIxKTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MTJweCkge1xcclxcbiAgI2JvYXJkc0NvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxuICAgIC8qICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIHBhZGRpbmc6IDEycHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMjVweCwgMzh2dykpO1xcclxcbiAgICB3aWR0aDogODZ2dztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNBSUJvYXJkIHtcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDQycHgpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcGxheWVyQm9hcmQge1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNDJweCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b3BCYXJDb250YWluZXIge1xcclxcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIGhlaWdodDogNDB2aDtcXHJcXG4gICAgbWFyZ2luLXRvcDogOCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogOCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggIzdhN2E3YTQyO1xcclxcbiAgICB3aWR0aDogNzZ2dztcXHJcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxyXFxuICAgIG1heC1oZWlnaHQ6IDExOHB4O1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9wQmFyQ29udGFpbmVyIHAge1xcclxcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDgwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjYm9hcmRzQ29udGFpbmVyIHAge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBidXR0b24ub3JpZW50YXRpb25Ub2dnbGVCdG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uLnBsYXlBZ2FpbkJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0U7Y0FDWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnREFBZ0Q7RUFDaEQsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLDBDQUEwQztBQUM1Qzs7QUFF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O0VBQ2Q7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXkmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1kZWZhdWx0LWZvbnQ6ICdQbGF5Jywgc2Fucy1zZXJpZiwgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCxcXHJcXG4gICAgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGRhcmtibHVlLCBsaWdodGJsdWUpO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZyB7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcclxcbiAgY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgcGFkZGluZzogOHB4IDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzZDtcXHJcXG4gIC8qIG9wYWNpdHk6IDAuNjsgKi9cXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBib3gtc2hhZG93OiA0cHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEycHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlckNvbnRhaW5lciBoMSB7XFxyXFxuICBmb250LXNpemU6IDIuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByYWRpYWwgIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLnRvcEJhckNvbnRhaW5lciB7XFxyXFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICB3aWR0aDogNzB2dztcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDglO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggIzdhN2E3YTQyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wQmFyQ29udGFpbmVyIHAge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxucC5pbnZpc2libGUge1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnNoaXBDZWxsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbiNBSUJvYXJkIGJ1dHRvbixcXHJcXG4jcGxheWVyQm9hcmQgYnV0dG9uIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJCb2FyZENvbnRhaW5lcixcXHJcXG4uYWlCb2FyZENvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4jYm9hcmRzQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjRweDtcXHJcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibGFjayAqL1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAzOHZ3KSk7XFxyXFxuICB3aWR0aDogODN2dztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5vcmllbnRhdGlvblRvZ2dsZUJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgaGVpZ2h0OiA2MCU7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW4tb3V0O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5wbGF5QWdhaW5CdG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGhlaWdodDogNjAlO1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluLW91dDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1kZWZhdWx0LWZvbnQpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ub3JpZW50YXRpb25Ub2dnbGVCdG46aG92ZXIsXFxyXFxuYnV0dG9uLm9yaWVudGF0aW9uVG9nZ2xlQnRuOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2MzYzNjO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jYm9hcmRzQ29udGFpbmVyIHAge1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICBwYWRkaW5nOiA2cHggOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllckJvYXJkIHtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXHJcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXHJcXG59XFxyXFxuXFxyXFxuI0FJQm9hcmQge1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xcclxcbiAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYm9hcmRDZWxsIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uc2hpcENlbGwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5zaGlwSGl0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTQsIDIxLCAyMSk7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogODEycHgpIHtcXHJcXG4gICNib2FyZHNDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxNnB4O1xcclxcbiAgICAvKiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzI1cHgsIDM4dncpKTtcXHJcXG4gICAgd2lkdGg6IDg2dnc7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjQUlCb2FyZCB7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MnB4KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3BsYXllckJvYXJkIHtcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDQycHgpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9wQmFyQ29udGFpbmVyIHtcXHJcXG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgICBoZWlnaHQ6IDQwdmg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDglO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDglO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMXB4ICM3YTdhN2E0MjtcXHJcXG4gICAgd2lkdGg6IDc2dnc7XFxyXFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMThweDtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvcEJhckNvbnRhaW5lciBwIHtcXHJcXG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2JvYXJkc0NvbnRhaW5lciBwIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgYnV0dG9uLm9yaWVudGF0aW9uVG9nZ2xlQnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGJ1dHRvbi5wbGF5QWdhaW5CdG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1xyXG4gIHByZUdhbWVTZXR1cFxyXG59IGZyb20gJy4vY29udHJvbGxlcnMvZGlzcGxheUNvbnRyb2xsZXInXHJcblxyXG5pbXBvcnQgJy4vc3R5bGVzL25vcm1hbGl6ZS5jc3MnXHJcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJ1xyXG5cclxucHJlR2FtZVNldHVwKClcclxuIl0sIm5hbWVzIjpbImRlbGF5IiwiZ2FtZUNvbnRyb2xsZXIiLCJnYW1lIiwicHJlR2FtZVNldHVwIiwicmVuZGVyUGxheWVyQm9hcmQiLCJwbGFjZUNhcnJpZXJTaGlwIiwicmVuZGVyQUlCb2FyZCIsImRpc3BsYXlDb250cm9sbGVyIiwidG9wQmFyQ29udGFpbmVyUGFyYSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwicGxhY2VBSVNoaXBzIiwiYWlCb2FyZERpdiIsImdldEVsZW1lbnRCeUlkIiwicGxheWVycyIsImdldFBsYXllcnMiLCJhY3RpdmVQbGF5ZXIiLCJnZXRDdXJyZW50UGxheWVyIiwiaHVtYW4iLCJuZXdNZXNzYWdlIiwidHJhbnNpdGlvblRleHRDaGFuZ2VzIiwiY29udHJvbGxlciIsIkFib3J0Q29udHJvbGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0Iiwic2lnbmFsIiwidG9wQmFyUGFyYSIsImh1bWFuQm9hcmREaXYiLCJvcmllbnRhdGlvbkJ0blZhbHVlcyIsImNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuIiwiaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyIsIm9yaWVudGF0aW9uVG9nZ2xlQnRuIiwiaGFuZGxlQ2FycmllclNoaXBQbGFjZW1lbnQiLCJwbGFjZUJhdHRsZVNoaXAiLCJoYW5kbGVCYXR0bGVTaGlwUGxhY2VtZW50IiwicGxhY2VDcnVpc2VyIiwiaGFuZGxlQ3J1aXNlclNoaXBQbGFjZW1lbnQiLCJwbGFjZVN1Ym1hcmluZSIsImhhbmRsZVN1Ym1hcmluZVNoaXBQbGFjZW1lbnQiLCJwbGFjZURlc3Ryb3llciIsImhhbmRsZURlc3Ryb3llclNoaXBQbGFjZW1lbnQiLCJwbGF5ZXJCb2FyZCIsImdldEh1bWFuQm9hcmQiLCJwbGF5ZXJCb2FyZERpdiIsImlubmVySFRNTCIsImkiLCJsZW5ndGgiLCJjdXJyZW50Um93IiwiaiIsImJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0Iiwicm93IiwiY29sdW1uIiwiYXBwZW5kQ2hpbGQiLCJhaUJvYXJkIiwiZ2V0QUlCb2FyZCIsInVwZGF0ZUh1bWFuQm9hcmQiLCJodW1hbkJvYXJkIiwibWlzc2VkU2hvdHMiLCJnZXRIdW1hbkJvYXJkT2JqIiwiZ2V0TWlzc2VkU2hvdHMiLCJzdWNjZXNzZnVsU2hvdHMiLCJnZXRTdWNjZXNzZnVsU2hvdHMiLCJhbGxEb21Ob2RlcyIsIkFycmF5IiwiZnJvbSIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwic2hvdCIsInRhcmdldE5vZGUiLCJyZW1vdmUiLCJ1cGRhdGVBSUJvYXJkIiwiZ2V0QUlCb2FyZE9iaiIsImhvcml6b250YWxTaGlwT3JpZW50YXRpb24iLCJzZWxlY3RlZFJvdyIsInRhcmdldCIsInNlbGVjdGVkQ29sdW1uIiwiY29vcmRpbmF0ZSIsImNhcnJpZXJQbGFjZWQiLCJwbGFjZUNhcnJpZXJPbkJvYXJkIiwiYWJvcnQiLCJyZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuIiwiYmF0dGxlc2hpcFBsYWNlZCIsInBsYWNlQmF0dGxlc2hpcE9uQm9hcmQiLCJjcnVpc2VyUGxhY2VkIiwicGxhY2VDcnVpc2VyT25Cb2FyZCIsInN1Ym1hcmluZVBsYWNlZCIsInBsYWNlU3VibWFyaW5lT25Cb2FyZCIsImRlc3Ryb3llclBsYWNlZCIsInBsYWNlRGVzdHJveWVyT25Cb2FyZCIsInNoaXBUeXBlIiwiYm9hcmRET01DZWxsc0FyciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRIb3Jpem9udGFsRE9NQ29vcmRzIiwiZ2V0VmVydGljYWxET01Db29yZHMiLCJwbGFjZUNydWlzZXJTaGlwIiwicGxhY2VTdWJtYXJpbmVTaGlwIiwicGxhY2VEZXN0cm95ZXJTaGlwIiwic3RhcnRpbmdDb2x1bW4iLCJOdW1iZXIiLCJzaGlwTGVuZ3RoIiwiZG9tQ29vcmRpbmF0ZSIsInRhcmdldERPTUJ0biIsImZpbmRTaGlwRE9NQnRuIiwic3RhcnRpbmdSb3ciLCJkb21DZWxsUm93IiwiZG9tQ2VsbENvbHVtbiIsImFscmVhZHlBdHRhY2tlZCIsInByZXZlbnRTYW1lQXR0YWNrIiwicGxheVJvdW5kIiwiaHVtYW5Nb3ZlU3VjY2Vzc2Z1bCIsImdldExhc3RIdW1hbk1vdmVTdWNjZXNzZnVsIiwic2hpcElzU3VuayIsImlzU2hpcFN1bmsiLCJzaGlwU3Vua1Jlc3VsdCIsImRpc3BsYXlTdW5rU2hpcE1lc3NhZ2UiLCJkaXNwbGF5U3VjY2Vzc2Z1bEF0dGFja01lc3NhZ2UiLCJkaXNwbGF5VW5zdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSIsImh1bWFuUGxheWVyIiwiaHVtYW5Xb24iLCJjaGVja0ZvcldpbiIsImhhbmRsZVdpbkNoZWNrIiwic3dpdGNoUGxheWVyIiwiaGFuZGxlQUlNb3ZlIiwiZW5lbXlBdHRhY2tpbmdNc2ciLCJndWVzc2VkQ29vcmRpbmF0ZSIsImFpTW92ZVN1Y2Nlc3NmdWwiLCJnZXRMYXN0QUlNb3ZlU3VjY2Vzc2Z1bCIsImFpUGxheWVyIiwiYWlXb24iLCJhdHRhY2tUaGVFbmVteU1zZyIsImFubm91bmNlV2lubmVyIiwid2lubmVyIiwid2lubmVyTmFtZSIsImdldE5hbWUiLCJwbGF5QWdhaW4iLCJ0b3BCYXJEaXYiLCJwbGF5QWdhaW5CdG4iLCJzdGFydE5ld0dhbWUiLCJyZW1vdmVDaGlsZCIsInByZXZpb3VzT3JpZW50YXRpb25CdG4iLCJwbGF5ZXIiLCJhdHRhY2tBbmRIaXRNc2ciLCJzZXRUaW1lb3V0IiwiZW5lbXlIaXRNc2ciLCJ1bnN1Y2Nlc3NmdWxBdHRhY2tNc2ciLCJ1bnN1Y2Nlc3NmdWxFbmVteUF0dGFja01zZyIsInN1bmtTaGlwTWVzc2FnZSIsImN1cnJlbnRQbGF5ZXIiLCJwbGF5ZXJXb24iLCJib2FyZERpdiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNldEdhbWVTdGF0ZSIsImRvbUVsZW1lbnQiLCJHYW1lYm9hcmQiLCJQbGF5ZXIiLCJhcnJheXNBcmVFcXVhbCIsInJldHVyblJhbmRvbUFJQm9hcmQiLCJjcmVhdGVHYW1lQm9hcmQiLCJjYXJyaWVyQXJyIiwiZGV0ZXJtaW5lQ2FycmllckFyckNvb3JkcyIsInNoaXBQbGFjZWQiLCJwbGFjZVNoaXAiLCJwdXNoIiwiY29vcmQiLCJ0b1N0cmluZyIsImJhdHRsZXNoaXBBcnIiLCJkZXRlcm1pbmVCYXR0bGVzaGlwQXJyQ29vcmRzIiwiY3J1aXNlckFyciIsImRldGVybWluZUNydWlzZXJBcnJDb29yZHMiLCJzdWJtYXJpbmVBcnIiLCJkZXRlcm1pbmVTdWJtYXJpbmVBcnJDb29yZHMiLCJkZXN0cm95ZXJBcnIiLCJkZXRlcm1pbmVEZXN0cm95ZXJBcnJDb29yZHMiLCJwbGFjZVNoaXBzIiwiQUkiLCJyZWNlaXZlQXR0YWNrIiwibmV4dE1vdmUiLCJjb21wdXRlcnNOZXh0TW92ZSIsInJlbW92ZUxhc3RBSU1vdmUiLCJhdmFpbGFibGVNb3ZlcyIsImdldEFJQXZhaWxhYmxlTW92ZXMiLCJsYXN0QUlNb3ZlU3VjY2Vzc2Z1bCIsImFkamFjZW50U2xvdHMiLCJnZXRBZGphY2VudFNsb3RzIiwiYWRkQWRqYWNlbnRTbG90c1RvUXVldWUiLCJnZXRBZGphY2VudFF1ZXVlU2xvdCIsInJhbmRvbU1vdmUiLCJtYWtlUmFuZG9tTW92ZSIsImFsbFNoaXBzU3VuayIsImxhc3RTdWNjZXNzZnVsSHVtYW5Nb3ZlIiwiZ2V0TGFzdFN1Y2Nlc3NmdWxNb3ZlIiwidW5kZWZpbmVkIiwiZ2FtZUJvYXJkIiwiZ2V0Qm9hcmQiLCJ0YXJnZXRTaGlwT2JqIiwiaGFzQmVlblN1bmsiLCJsYXN0U3VjY2Vzc2Z1bEFJTW92ZSIsImNsZWFyR2FtZUJvYXJkIiwicmVzZXRTaGlwT2JqZWN0cyIsImJvYXJkIiwiY29vcmRpbmF0ZXNPYmoiLCJzaGlwQ29vcmRpbmF0ZXNBcnIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzaGlwQ29vcmRpbmF0ZXMiLCJTaGlwIiwic2hpcE9iamVjdHMiLCJhaUF2YWlsYWJsZU1vdmVzIiwiYWRqYWNlbnRTbG90c1F1ZXVlIiwicm93cyIsImNvbHVtbnMiLCJsYXN0SHVtYW5Nb3ZlU3VjY2Vzc2Z1bCIsInZhbGlkYXRlQ29vcmRpbmF0ZXMiLCJjb29yZGluYXRlcyIsInZhbGlkQ29vcmRpbmF0ZXMiLCJjaGVja1NlbGZPdmVybGFwIiwiY29vcmRpbmF0ZXNPdmVybGFwIiwicHJldkNvb3JkaW5hdGUiLCJpbmRleCIsImNoZWNrT3ZlcmxhcFdpdGhPdGhlclNoaXBzIiwic2hpcHNPdmVybGFwIiwiYm9hcmRDZWxsIiwibGVnYWxDb29yZGluYXRlcyIsIm92ZXJsYXBwaW5nQ29vcmRpbmF0ZXMiLCJzaGlwT3ZlcmxhcHBpbmciLCJzaGlwT2JqZWN0Iiwic2hpcE9iaiIsImhpdCIsInJlbW92ZUFkamFjZW50U2xvdCIsInRhcmdldENvb3JkaW5hdGVzIiwiYWRqYWNlbnRRdWV1ZSIsIlNldCIsInNsb3QiLCJmaWx0ZXIiLCJldmVyeVNoaXBTYW5rIiwibW92ZSIsInNwbGljZSIsInJlc2V0U2hpcCIsImdldFNoaXBPYmplY3RzIiwiZ2V0QWRqYWNlbnRTbG90c1F1ZXVlIiwicG9wIiwiYXQiLCJuYW1lIiwiaXNBSSIsImF2YWlsYWJsZU1vdmVzTGVuZ3RoIiwicmFuZG9tQXJySW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21Db29yZGluYXRlIiwibGFzdFN1Y2Nlc3NmdWxNb3ZlIiwicmV0cmlldmVBZGphY2VudFNsb3RzIiwibGVnYWxBZGphY2VudFNsb3RzIiwicmVtb3ZlSWxsZWdhbEFkamFjZW50U2xvdHMiLCJhdmFpbGFibGVBZGphY2VudFNsb3RzIiwicHJldmVudFByZXZpb3VzU2hvdFRvUXVldWUiLCJnZXRDZWxsQWJvdmUiLCJuZXdBcnIiLCJuZXdSb3ciLCJnZXRDZWxsQmVsb3ciLCJnZXRDZWxsVG9SaWdodCIsIm5ld0NvbHVtbiIsImdldENlbGxUb0xlZnQiLCJsYXN0U3VjY2Vzc2Z1bE1vdmVWYWx1ZSIsImFkamFjZW50U2xvdHNBcnIiLCJzbG90cyIsImFsbFByZXZpb3VzQXR0YWNrcyIsImNvbmNhdCIsInByZXZpb3VzQXR0YWNrcyIsImZpbHRlcmVkU2xvdHMiLCJoYXMiLCJudW1PZkhpdHMiLCJpc1N1bmsiLCJnZXROdW1PZkhpdHMiLCJnZXRMZW5ndGgiLCJhcnIxIiwiYXJyMiIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhaUJvYXJkcyIsImFpU2hpcENvb3Jkc09uZSIsImFpU2hpcENvb3Jkc1R3byIsImFpU2hpcENvb3Jkc1RocmVlIiwicmFuZG9tSW5kZXgiLCJjaG9zZW5BSUJvYXJkIiwiY2FycmllciIsImJhdHRsZXNoaXAiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIl0sInNvdXJjZVJvb3QiOiIifQ==