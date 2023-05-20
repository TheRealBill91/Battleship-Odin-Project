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
    aiBoardDiv.addEventListener('click', handlePlayerSelectionEvt, {
      once: true
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
    console.log('Orientation status going into placement:' + horizontalShipOrientationStatus);
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
    console.log('Orientation status going into placement:' + horizontalShipOrientationStatus);
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
    console.log('Orientation status going into placement:' + horizontalShipOrientationStatus);
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
    console.log('Orientation status going into placement:' + horizontalShipOrientationStatus);
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
      const row = aiBoard[i];
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
const handlePlayerSelectionEvt = async e => {
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
  const humanMoveSuccessful = game.getAIBoardObj.getLastHumanMoveSuccessful();
  // Use this value when determining whether to show ship as sunk
  const shipIsSunk = game.isShipSunk('human');
  const shipSunkResult = shipIsSunk[0];
  if (shipSunkResult) {
    const targetShipObj = shipIsSunk[1];
    const isShipSunk = shipIsSunk[0];
    const lastSuccessfulMove = shipIsSunk[2];
    const sunkShipCoords = game.getSunkShipCoords(targetShipObj, lastSuccessfulMove, 'human');
    displaySunkShip(sunkShipCoords, 'human');
  }
  humanMoveSuccessful ? displaySuccessfulAttackMessage('human') : displayUnsuccessfulAttackMessage('human');
  const humanWins = game.checkForWin();
  updateAIBoard();
  await (0,_helpers_delay__WEBPACK_IMPORTED_MODULE_0__.delay)(4000);
  handleWinCheck(humanWins, aiBoardDiv);
  handleAIMove(aiBoardDiv);
};
const handleAIMove = async aiBoardDiv => {
  const topBarContainerPara = document.querySelector('.topBarContainer > p');
  const enemyAttackingMsg = 'Enemy is attacking your ships!';
  transitionTextChanges(enemyAttackingMsg, topBarContainerPara);
  await (0,_helpers_delay__WEBPACK_IMPORTED_MODULE_0__.delay)(3000);
  game.playRound();
  const aiMoveSuccessful = game.getHumanBoardObj.getLastAIMoveSuccessful();
  const shipIsSunk = game.isShipSunk('computer');
  const shipSunkResult = shipIsSunk[0];
  if (shipSunkResult) {
    const targetShipObj = shipIsSunk[1];
    const isShipSunk = shipIsSunk[0];
    const lastSuccessfulMove = shipIsSunk[2];
    const sunkShipCoords = game.getSunkShipCoords(targetShipObj, lastSuccessfulMove, 'computer');
    displaySunkShip(sunkShipCoords, 'computer');
  }
  aiMoveSuccessful ? displaySuccessfulAttackMessage('computer') : displayUnsuccessfulAttackMessage('computer');
  const aiWins = game.checkForWin();
  updateHumanBoard();
  await (0,_helpers_delay__WEBPACK_IMPORTED_MODULE_0__.delay)(2500);
  const attackTheEnemyMsg = 'Attack the enemies ships...';
  transitionTextChanges(attackTheEnemyMsg, topBarContainerPara);
  await (0,_helpers_delay__WEBPACK_IMPORTED_MODULE_0__.delay)(4000);
  handleWinCheck(aiWins, aiBoardDiv);
  document.getElementById('AIBoard').addEventListener('click', handlePlayerSelectionEvt, {
    once: true
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

// Changes colors of sunk ship cells to red and changes top bar container
// message
const displaySunkShip = (sunkShipCoords, player) => {
  if (player === 'human') {
    const aiDOMCellsArr = [...document.querySelectorAll('#AIBoard > button')];
    for (let i = 0; i < sunkShipCoords.length; i++) {
      const domCoord = sunkShipCoords[i];
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      // ISSUE IS HERE, DOM COORD ARR HAS STRINGS, NEEDS NUMBERS
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      const targetDOMBtn = findShipDOMBtn(aiDOMCellsArr, domCoord);
      targetDOMBtn.classList.add('sunkShip');
    }
  } else if (player === 'computer') {
    const humanDOMCellsArr = [...document.querySelectorAll('#playerBoard > button')];
    for (let i = 0; i < sunkShipCoords.length; i++) {
      const domCoord = sunkShipCoords[i];
      const targetDOMBtn = findShipDOMBtn(humanDOMCellsArr, domCoord);
      targetDOMBtn.classList.add('sunkShip');
    }
  }
};
const handleWinCheck = (winCheck, boardDiv) => {
  if (winCheck) {
    boardDiv.removeEventListener('click', handlePlayerSelectionEvt);
    game.resetGameState();
    announceWinner(winCheck);
    playAgain();
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
/* harmony export */   "gameController": () => (/* binding */ gameController)
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
      aiBoard.receiveAttack(coordinate);
    } else if (currentPlayer.getName() === players.AI.getName()) {
      const nextMove = computersNextMove();
      humanBoard.receiveAttack(nextMove);
      humanBoard.removeLastAIMove(nextMove);
    }
    switchPlayer();
    console.log(currentPlayer.getName());
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
  const isShipSunk = player => {
    let shipIsSunk;
    if (player === 'human') {
      const lastSuccessfulHumanMove = aiBoard.getLastSuccessfulMove();
      if (lastSuccessfulHumanMove === undefined) {
        shipIsSunk = false;
        return [shipIsSunk];
      }
      const gameBoard = aiBoard.getBoard();
      const targetShipObj = gameBoard[lastSuccessfulHumanMove[0]][lastSuccessfulHumanMove[1]];
      shipIsSunk = targetShipObj.hasBeenSunk();
      return [shipIsSunk, targetShipObj, lastSuccessfulHumanMove];
    } else if (player === 'computer') {
      const lastSuccessfulAIMove = humanBoard.getLastSuccessfulMove();
      if (lastSuccessfulAIMove === undefined) {
        shipIsSunk = false;
        return [shipIsSunk];
      }
      const gameBoard = humanBoard.getBoard();
      const targetShipObj = gameBoard[lastSuccessfulAIMove[0]][lastSuccessfulAIMove[1]];
      shipIsSunk = targetShipObj.hasBeenSunk();
      return [shipIsSunk, targetShipObj, lastSuccessfulAIMove];
    }
  };
  const getSunkShipCoords = (targetShipObj, lastSuccessfulMove, player) => {
    const sunkShipLength = targetShipObj.getLength();
    let adjacentSlots;
    let remainingShipCoords;
    const shipCoords = [lastSuccessfulMove];
    let shipOrientation;
    let shipDirection;
    if (player === 'human') {
      const humanShipCoords = getHumanSunkShipCoords(adjacentSlots, sunkShipLength, shipOrientation, shipCoords, lastSuccessfulMove, remainingShipCoords, shipDirection);
      return humanShipCoords;
    } else if (player === 'computer') {
      const aiShipCoords = getAISunkShipCoords(adjacentSlots, sunkShipLength, shipOrientation, shipCoords, lastSuccessfulMove, remainingShipCoords, shipDirection);
      return aiShipCoords;
    }
  };
  const getHumanSunkShipCoords = (adjacentSlots, sunkShipLength, shipOrientation, shipCoords, lastSuccessfulMove, remainingShipCoords, shipDirection) => {
    adjacentSlots = currentPlayer.getAdjacentSlots(true,
    // doing this just to make it work
    1, aiBoard.getSuccessfulShots(), aiBoard.getMissedShots());
    // Based on the last successful ship hit, and it's coordinates,
    // find the rest of the coordinates for that ship object that has
    // been sunk
    for (let i = 0; i < adjacentSlots.length; i++) {
      const adjacentSlot = adjacentSlots[i];
      const gameBoard = aiBoard.getBoard();
      const shipObj = gameBoard[adjacentSlot[0]][adjacentSlot[1]];
      if (shipObj !== undefined && shipObj.getLength() === sunkShipLength) {
        shipOrientation = determineShipOrientation(lastSuccessfulMove, adjacentSlot);
        shipDirection = determineShipDirection(shipOrientation, lastSuccessfulMove, adjacentSlot);
        shipCoords.push(adjacentSlot);
        remainingShipCoords = sunkShipLength - 2;
        if (remainingShipCoords > 0) {
          for (let j = 0; j < remainingShipCoords.length; j++) {
            let nextShipCoord;
            if (shipDirection === 'right') {
              nextShipCoord = [adjacentSlot[0], adjacentSlot[1] + 1];
              shipCoords.push(nextShipCoord);
            } else if (shipDirection === 'left') {
              nextShipCoord = [adjacentSlot[0], adjacentSlot[1] - 1];
              shipCoords.push(nextShipCoord);
            } else if (shipDirection === 'up') {
              nextShipCoord = [adjacentSlot[0] - 1, adjacentSlot[1]];
              shipCoords.push(nextShipCoord);
            } else if (shipDirection === 'down') {
              nextShipCoord = [adjacentSlot[0] + 1, adjacentSlot[1]];
            }
          }
        } else {
          return shipCoords;
        }
      }
    }
    return shipCoords;
  };
  const getAISunkShipCoords = (adjacentSlots, sunkShipLength, shipOrientation, lastSuccessfulMove, shipDirection, shipCoords, remainingShipCoords) => {
    adjacentSlots = currentPlayer.getAdjacentSlots(true, 1, aiBoard.getSuccessfulShots(), aiBoard.getMissedShots());
    // Based on the last successful ship hit, and it's coordinates,
    // find the rest of the coordinates for that ship object that has
    // been sunk
    for (let i = 0; i < adjacentSlots.length; i++) {
      const adjacentSlot = adjacentSlots[i];
      const shipObj = humanBoard.getBoard()[adjacentSlot[0]][adjacentSlot[1]];
      if (shipObj.getLength() === sunkShipLength) {
        shipOrientation = determineShipOrientation(lastSuccessfulMove, adjacentSlot);
        shipDirection = determineShipDirection(shipOrientation, lastSuccessfulMove, adjacentSlot);
        shipCoords.push(adjacentSlot);
        remainingShipCoords = sunkShipLength - 2;
        if (remainingShipCoords > 0) {
          for (let j = 0; j < remainingShipCoords.length; j++) {
            let nextShipCoord;
            if (shipDirection === 'right') {
              nextShipCoord = [adjacentSlot[0], adjacentSlot[1] + 1];
              shipCoords.push(nextShipCoord);
            } else if (shipDirection === 'left') {
              nextShipCoord = [adjacentSlot[0], adjacentSlot[1] - 1];
              shipCoords.push(nextShipCoord);
            } else if (shipDirection === 'up') {
              nextShipCoord = [adjacentSlot[0] - 1, adjacentSlot[1]];
              shipCoords.push(nextShipCoord);
            } else if (shipDirection === 'down') {
              nextShipCoord = [adjacentSlot[0] + 1, adjacentSlot[1]];
            }
          }
        } else {
          return shipCoords;
        }
      }
    }
    return shipCoords;
  };

  // when trying to figure out the coordinates for a sunk ship,
  // we need to get the orientation (horizontal or vertical) of the
  // sunk ship
  const determineShipOrientation = (lastSuccessfulMove, adjacentSlot) => {
    let shipOrientation;
    if (lastSuccessfulMove[0] !== adjacentSlot[0]) {
      shipOrientation = 'vertical';
      return shipOrientation;
    } else if (lastSuccessfulMove[0] === adjacentSlot[0]) {
      shipOrientation = 'horizontal';
      return shipOrientation;
    }
  };

  // when trying to figure out the coordinates for a sunk ship,
  // we need to get the direction (up, down, left, right) of the
  // sunk ship
  const determineShipDirection = (shipOrientation, lastSuccessfulMove, adjacentSlot) => {
    // determine if direction is up or down
    let shipDirection;
    if (shipOrientation === 'vertical') {
      const startingCoordRow = lastSuccessfulMove[0][0];
      const nextVerticalCoordRow = adjacentSlot[0];
      // eslint-disable-next-line no-unused-expressions
      startingCoordRow > nextVerticalCoordRow ? shipDirection = 'down' : shipDirection = 'up';
      return shipDirection;
    } else if (shipOrientation === 'horizontal') {
      const startingCoordColumn = lastSuccessfulMove[0][1];
      const nextHorizontalColumn = adjacentSlot[0];
      // eslint-disable-next-line no-unused-expressions
      startingCoordColumn < nextHorizontalColumn ? shipDirection = 'right' : shipDirection = 'left';
      return shipDirection;
    }
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
    placeDestroyerShip,
    isShipSunk,
    getSunkShipCoords
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
  const receiveAttack = coordinates => {
    const row = coordinates[0];
    const column = coordinates[1];
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
      lastAIMoveSuccessful = true;
      lastHumanMoveSuccessful = true;
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
    getLastSuccessfulMove
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
    /* const availableAdjacentSlots = preventPreviousShotToQueue(
      availableMoves,
      legalAdjacentSlots,
      successfulShots,
      missedShots
    ) */
    return legalAdjacentSlots;
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
  const getName = () => {
    return name;
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
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n    line-height: 1.15;\n    /* 1 */\n    -webkit-text-size-adjust: 100%;\n    /* 2 */\n}\n\n/* Apply border box to entire document */\n* {\n    box-sizing: border-box;\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n    margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n    display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n    box-sizing: content-box;\n    /* 1 */\n    height: 0;\n    /* 1 */\n    overflow: visible;\n    /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n    background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n    border-bottom: none;\n    /* 1 */\n    text-decoration: underline;\n    /* 2 */\n    text-decoration: underline dotted;\n    /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\nsup {\n    top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n    border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\ninput {\n    -webkit-appearance: none;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    margin: 0;\n    /* 2 */\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Give input and text area consistent look */\ninput,\ntextarea {\n    background: none;\n    border: 1px solid grey;\n    border-radius: 5px;\n    outline: none;\n    padding: 4px;\n}\n\ntextarea {\n    display: block;\n    padding: 10px;\n    margin: 10px 0 0 -10px;\n    width: 100%;\n    height: 90%;\n    border-right: 1px solid;\n    resize: none;\n    overflow: auto;\n}\n\nbutton {\n    padding: 5px;\n    font: bold 0.6em sans-serif;\n    border: 1px solid #333;\n    border-radius: 5px;\n    background: none;\n    cursor: pointer;\n}\n\nbutton:hover,\nbutton:focus {\n    outline: none;\n    /* background: #000;\n    color: #fff; */\n}\n\n/* Gets rid of default search to remove restrictions */\ninput[type='search'] {\n    appearance: none;\n}\n\n/* Fix for inconsistent display of clear \"x\" icon in search inputs across different browsers. \n  , this code removes the icon in Edge and Chrome when the input loses focus, while keeping it visible in Safari. */\ninput[type='search']:not(:focus, :active)::-webkit-search-cancel-button {\n    display: none;\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n    /* 1 */\n    overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n    /* 1 */\n    text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n    -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\n::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n    padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n    box-sizing: border-box;\n    /* 1 */\n    color: inherit;\n    /* 2 */\n    display: table;\n    /* 1 */\n    max-width: 100%;\n    /* 1 */\n    padding: 0;\n    /* 3 */\n    white-space: normal;\n    /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n    vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n    overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type='checkbox'],\n[type='radio'] {\n    box-sizing: border-box;\n    /* 1 */\n    padding: 4px;\n    /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type='search'] {\n    -webkit-appearance: textfield;\n    /* 1 */\n    outline-offset: -2px;\n    /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type='search']::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    /* 1 */\n    font: inherit;\n    /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n    display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n    display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n    display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/styles/normalize.css"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n    line-height: 1.15;\n    /* 1 */\n    -webkit-text-size-adjust: 100%;\n    /* 2 */\n}\n\n/* Apply border box to entire document */\n* {\n    box-sizing: border-box;\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n    margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n    display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n    box-sizing: content-box;\n    /* 1 */\n    height: 0;\n    /* 1 */\n    overflow: visible;\n    /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n    background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n    border-bottom: none;\n    /* 1 */\n    text-decoration: underline;\n    /* 2 */\n    text-decoration: underline dotted;\n    /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\nsup {\n    top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n    border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\ninput {\n    -webkit-appearance: none;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    margin: 0;\n    /* 2 */\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Give input and text area consistent look */\ninput,\ntextarea {\n    background: none;\n    border: 1px solid grey;\n    border-radius: 5px;\n    outline: none;\n    padding: 4px;\n}\n\ntextarea {\n    display: block;\n    padding: 10px;\n    margin: 10px 0 0 -10px;\n    width: 100%;\n    height: 90%;\n    border-right: 1px solid;\n    resize: none;\n    overflow: auto;\n}\n\nbutton {\n    padding: 5px;\n    font: bold 0.6em sans-serif;\n    border: 1px solid #333;\n    border-radius: 5px;\n    background: none;\n    cursor: pointer;\n}\n\nbutton:hover,\nbutton:focus {\n    outline: none;\n    /* background: #000;\n    color: #fff; */\n}\n\n/* Gets rid of default search to remove restrictions */\ninput[type='search'] {\n    appearance: none;\n}\n\n/* Fix for inconsistent display of clear \"x\" icon in search inputs across different browsers. \n  , this code removes the icon in Edge and Chrome when the input loses focus, while keeping it visible in Safari. */\ninput[type='search']:not(:focus, :active)::-webkit-search-cancel-button {\n    display: none;\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n    /* 1 */\n    overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n    /* 1 */\n    text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n    -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\n::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n    padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n    box-sizing: border-box;\n    /* 1 */\n    color: inherit;\n    /* 2 */\n    display: table;\n    /* 1 */\n    max-width: 100%;\n    /* 1 */\n    padding: 0;\n    /* 3 */\n    white-space: normal;\n    /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n    vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n    overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type='checkbox'],\n[type='radio'] {\n    box-sizing: border-box;\n    /* 1 */\n    padding: 4px;\n    /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type='search'] {\n    -webkit-appearance: textfield;\n    /* 1 */\n    outline-offset: -2px;\n    /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type='search']::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    /* 1 */\n    font: inherit;\n    /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n    display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n    display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n    display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n    display: none;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  width: 100vw;\n  overflow-x: hidden;\n}\n\nheader {\n  background-color: darkblue;\n  color: rgb(236, 236, 236);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 80px;\n}\n\n.headerContainer {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: center;\n}\n\nmain {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  flex-direction: column;\n  gap: 12px;\n  background-color: radial #333;\n}\n\n.topBarContainer {\n  /* outline: 1px solid black; */\n  width: 70vw;\n  height: 80px;\n  margin-top: 8%;\n  display: flex;\n  gap: 10%;\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px 12px;\n  background-color: lightgray;\n  box-shadow: 0px 2px 1px #7a7a7a42;\n}\n\n.topBarContainer p {\n  align-items: center;\n  transition: opacity 0.5s ease-in-out;\n  font-size: 1.4rem;\n  opacity: 1;\n}\n\np.invisible {\n  transition: opacity 0.5s ease-in-out;\n  opacity: 0;\n}\n\nbutton.shipCell {\n  background-color: grey;\n  transition: background-color 0.2s ease-in-out;\n}\n\n#AIBoard button,\n#playerBoard button {\n  border-radius: 0;\n}\n\n.playerBoardContainer,\n.aiBoardContainer {\n  display: grid;\n}\n\n#boardsContainer {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  /* outline: 1px solid black */\n  padding: 12px;\n  display: grid;\n  grid-template-rows: none;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 38vw));\n  width: 83vw;\n  margin-bottom: 14px;\n}\n\n.orientationToggleBtn {\n  background-color: #333;\n  color: white;\n  border-radius: 8px;\n  height: 70%;\n  width: 100px;\n  font-size: 1rem;\n}\n\n#boardsContainer p {\n  justify-self: center;\n  font-size: 1.1rem;\n}\n\n\n#playerBoard {\n  outline: 1px solid black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 50px);\n}\n\n#AIBoard {\n  outline: 1px solid black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 50px);\n}\n\nbutton.boardCell {\n  border-radius: 0px;\n  background-color: lightgray;\n}\n\nbutton.shipCell {\n  background-color: #333;\n  border: 1px solid black;\n}\n\nbutton.sunkShip {\n  background-color: rgb(114, 21, 21);\n}\n\nbutton.shipHit {\n  background-color: rgb(22, 94, 22);\n  transition: background-color 0.3s ease-in;\n}\n\n@media only screen and (max-device-width: 812px) {\n  #boardsContainer {\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    /*  outline: 1px solid black; */\n    padding: 12px;\n    display: grid;\n    grid-template-rows: none;\n    grid-template-columns: repeat(auto-fit, minmax(325px, 38vw));\n    width: 86vw;\n    margin-bottom: 14px;\n    margin-bottom: 24px;\n  }\n\n  #AIBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 42px);\n  }\n\n  #playerBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 42px);\n  }\n\n  .topBarContainer {\n    /* outline: 1px solid black; */\n    width: 84vw;\n    height: 80px;\n    margin-top: 24px;\n    display: flex;\n    gap: 6%;\n    justify-content: center;\n    align-items: center;\n    background-color: lightgrey;\n    border-radius: 12px 12px;\n    box-shadow: 0px 2px 1px #7a7a7a42;\n    padding: 6px;\n  }\n\n  .topBarContainer p {\n    /* outline: 1px solid black; */\n    font-size: 1.2rem;\n  }\n\n  #boardsContainer p {\n    justify-self: center;\n    font-size: 1.1rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,OAAO;EACP,sBAAsB;EACtB,SAAS;EACT,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;EAC9B,WAAW;EACX,YAAY;EACZ,cAAc;EACd,aAAa;EACb,QAAQ;EACR,uBAAuB;EACvB,mBAAmB;EACnB,wBAAwB;EACxB,2BAA2B;EAC3B,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;EACnB,oCAAoC;EACpC,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,oCAAoC;EACpC,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,6CAA6C;AAC/C;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,6BAA6B;EAC7B,aAAa;EACb,aAAa;EACb,wBAAwB;EACxB,4DAA4D;EAC5D,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;AACnB;;;AAGA;EACE,wBAAwB;EACxB,aAAa;EACb,sCAAsC;EACtC,oCAAoC;AACtC;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,sCAAsC;EACtC,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,iCAAiC;EACjC,yCAAyC;AAC3C;;AAEA;EACE;IACE,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,+BAA+B;IAC/B,aAAa;IACb,aAAa;IACb,wBAAwB;IACxB,4DAA4D;IAC5D,WAAW;IACX,mBAAmB;IACnB,mBAAmB;EACrB;;EAEA;IACE,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,oCAAoC;EACtC;;EAEA;IACE,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,oCAAoC;EACtC;;EAEA;IACE,8BAA8B;IAC9B,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,OAAO;IACP,uBAAuB;IACvB,mBAAmB;IACnB,2BAA2B;IAC3B,wBAAwB;IACxB,iCAAiC;IACjC,YAAY;EACd;;EAEA;IACE,8BAA8B;IAC9B,iBAAiB;EACnB;;EAEA;IACE,oBAAoB;IACpB,iBAAiB;EACnB;AACF","sourcesContent":["body {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  width: 100vw;\n  overflow-x: hidden;\n}\n\nheader {\n  background-color: darkblue;\n  color: rgb(236, 236, 236);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 80px;\n}\n\n.headerContainer {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: center;\n}\n\nmain {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  flex-direction: column;\n  gap: 12px;\n  background-color: radial #333;\n}\n\n.topBarContainer {\n  /* outline: 1px solid black; */\n  width: 70vw;\n  height: 80px;\n  margin-top: 8%;\n  display: flex;\n  gap: 10%;\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px 12px;\n  background-color: lightgray;\n  box-shadow: 0px 2px 1px #7a7a7a42;\n}\n\n.topBarContainer p {\n  align-items: center;\n  transition: opacity 0.5s ease-in-out;\n  font-size: 1.4rem;\n  opacity: 1;\n}\n\np.invisible {\n  transition: opacity 0.5s ease-in-out;\n  opacity: 0;\n}\n\nbutton.shipCell {\n  background-color: grey;\n  transition: background-color 0.2s ease-in-out;\n}\n\n#AIBoard button,\n#playerBoard button {\n  border-radius: 0;\n}\n\n.playerBoardContainer,\n.aiBoardContainer {\n  display: grid;\n}\n\n#boardsContainer {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  /* outline: 1px solid black */\n  padding: 12px;\n  display: grid;\n  grid-template-rows: none;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 38vw));\n  width: 83vw;\n  margin-bottom: 14px;\n}\n\n.orientationToggleBtn {\n  background-color: #333;\n  color: white;\n  border-radius: 8px;\n  height: 70%;\n  width: 100px;\n  font-size: 1rem;\n}\n\n#boardsContainer p {\n  justify-self: center;\n  font-size: 1.1rem;\n}\n\n\n#playerBoard {\n  outline: 1px solid black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 50px);\n}\n\n#AIBoard {\n  outline: 1px solid black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 50px);\n}\n\nbutton.boardCell {\n  border-radius: 0px;\n  background-color: lightgray;\n}\n\nbutton.shipCell {\n  background-color: #333;\n  border: 1px solid black;\n}\n\nbutton.sunkShip {\n  background-color: rgb(114, 21, 21);\n}\n\nbutton.shipHit {\n  background-color: rgb(22, 94, 22);\n  transition: background-color 0.3s ease-in;\n}\n\n@media only screen and (max-device-width: 812px) {\n  #boardsContainer {\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    /*  outline: 1px solid black; */\n    padding: 12px;\n    display: grid;\n    grid-template-rows: none;\n    grid-template-columns: repeat(auto-fit, minmax(325px, 38vw));\n    width: 86vw;\n    margin-bottom: 14px;\n    margin-bottom: 24px;\n  }\n\n  #AIBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 42px);\n  }\n\n  #playerBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 42px);\n  }\n\n  .topBarContainer {\n    /* outline: 1px solid black; */\n    width: 84vw;\n    height: 80px;\n    margin-top: 24px;\n    display: flex;\n    gap: 6%;\n    justify-content: center;\n    align-items: center;\n    background-color: lightgrey;\n    border-radius: 12px 12px;\n    box-shadow: 0px 2px 1px #7a7a7a42;\n    padding: 6px;\n  }\n\n  .topBarContainer p {\n    /* outline: 1px solid black; */\n    font-size: 1.2rem;\n  }\n\n  #boardsContainer p {\n    justify-self: center;\n    font-size: 1.1rem;\n  }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxVQUFVLEVBQUUsQ0FDVixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFVixDQUFDO0FBRUQsTUFBTVIsZUFBZSxHQUFHO0VBQ3RCSSxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxVQUFVLEVBQUUsQ0FDVixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFVixDQUFDO0FBRUQsTUFBTVAsaUJBQWlCLEdBQUc7RUFDeEJHLE9BQU8sRUFBRSxDQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFVBQVUsRUFBRSxDQUNWLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLE9BQU8sRUFBRSxDQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFNBQVMsRUFBRSxDQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFNBQVMsRUFBRSxDQUNULENBQUMs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QUFLLFFBQVEsUUFBUSxNQUFNLEtBQUssWUFBWSxPQUFPLFNBQVMsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsS0FBSyxNQUFNLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sU0FBUyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE9BQU8sT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLHVWQUF1Vix3QkFBd0Isa0RBQWtELGdCQUFnQixrREFBa0QsNkJBQTZCLEdBQUcsb0tBQW9LLGdCQUFnQixHQUFHLDRFQUE0RSxxQkFBcUIsR0FBRyw0SkFBNEoscUJBQXFCLHVCQUF1QixHQUFHLDROQUE0Tiw4QkFBOEIsNkJBQTZCLHFDQUFxQyxnQkFBZ0IsNkpBQTZKLHdDQUF3QyxrQ0FBa0MsZ0JBQWdCLCtMQUErTCxvQ0FBb0MsR0FBRyxnS0FBZ0ssMEJBQTBCLDhDQUE4QyxxREFBcUQsZ0JBQWdCLDZGQUE2RiwwQkFBMEIsR0FBRywyS0FBMkssd0NBQXdDLGtDQUFrQyxnQkFBZ0IsMEVBQTBFLHFCQUFxQixHQUFHLDBIQUEwSCxxQkFBcUIscUJBQXFCLHlCQUF5QiwrQkFBK0IsR0FBRyxTQUFTLHNCQUFzQixHQUFHLFNBQVMsa0JBQWtCLEdBQUcsMkxBQTJMLHlCQUF5QixHQUFHLDROQUE0TiwrQkFBK0IsR0FBRyxtREFBbUQsMkJBQTJCLG1DQUFtQyxxQ0FBcUMsNkJBQTZCLDhCQUE4Qiw2QkFBNkIsR0FBRyxzRUFBc0UsdUJBQXVCLDZCQUE2Qix5QkFBeUIsb0JBQW9CLG1CQUFtQixHQUFHLGNBQWMscUJBQXFCLG9CQUFvQiw2QkFBNkIsa0JBQWtCLGtCQUFrQiw4QkFBOEIsbUJBQW1CLHFCQUFxQixHQUFHLFlBQVksbUJBQW1CLGtDQUFrQyw2QkFBNkIseUJBQXlCLHVCQUF1QixzQkFBc0IsR0FBRyxpQ0FBaUMsb0JBQW9CLDBCQUEwQixtQkFBbUIsS0FBSyxtRkFBbUYsdUJBQXVCLEdBQUcscVNBQXFTLG9CQUFvQixHQUFHLHFHQUFxRyxxQ0FBcUMsR0FBRywwS0FBMEssd0NBQXdDLEdBQUcsdUpBQXVKLGlDQUFpQyxHQUFHLHVNQUF1TSx5QkFBeUIsaUJBQWlCLEdBQUcsc01BQXNNLHFDQUFxQyxHQUFHLGtFQUFrRSxxQ0FBcUMsR0FBRyxrUkFBa1IsNkJBQTZCLGtDQUFrQyxrQ0FBa0MsbUNBQW1DLDhCQUE4Qix1Q0FBdUMsZ0JBQWdCLG9HQUFvRywrQkFBK0IsR0FBRyxtRkFBbUYscUJBQXFCLEdBQUcsMElBQTBJLDZCQUE2QixnQ0FBZ0MsZ0JBQWdCLHdMQUF3TCxtQkFBbUIsR0FBRywySUFBMkksb0NBQW9DLHdDQUF3QyxnQkFBZ0IsNEhBQTRILCtCQUErQixHQUFHLG1MQUFtTCxpQ0FBaUMsaUNBQWlDLGdCQUFnQiw0TEFBNEwscUJBQXFCLEdBQUcseUVBQXlFLHlCQUF5QixHQUFHLG9LQUFvSyxvQkFBb0IsR0FBRyxvRUFBb0Usb0JBQW9CLEdBQUcsbUJBQW1CO0FBQ242a0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGtCQUFrQiwyQkFBMkIsc0JBQXNCLGlCQUFpQix1QkFBdUIsR0FBRyxZQUFZLCtCQUErQiw4QkFBOEIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsaUJBQWlCLGlCQUFpQixHQUFHLHNCQUFzQixrQkFBa0Isd0JBQXdCLGFBQWEsNEJBQTRCLEdBQUcsVUFBVSxrQkFBa0Isd0JBQXdCLDRCQUE0QixZQUFZLDJCQUEyQixjQUFjLGtDQUFrQyxHQUFHLHNCQUFzQixpQ0FBaUMsa0JBQWtCLGlCQUFpQixtQkFBbUIsa0JBQWtCLGFBQWEsNEJBQTRCLHdCQUF3Qiw2QkFBNkIsZ0NBQWdDLHNDQUFzQyxHQUFHLHdCQUF3Qix3QkFBd0IseUNBQXlDLHNCQUFzQixlQUFlLEdBQUcsaUJBQWlCLHlDQUF5QyxlQUFlLEdBQUcscUJBQXFCLDJCQUEyQixrREFBa0QsR0FBRywyQ0FBMkMscUJBQXFCLEdBQUcsK0NBQStDLGtCQUFrQixHQUFHLHNCQUFzQixrQkFBa0IsNEJBQTRCLGNBQWMsb0RBQW9ELGtCQUFrQiw2QkFBNkIsaUVBQWlFLGdCQUFnQix3QkFBd0IsR0FBRywyQkFBMkIsMkJBQTJCLGlCQUFpQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixvQkFBb0IsR0FBRyx3QkFBd0IseUJBQXlCLHNCQUFzQixHQUFHLG9CQUFvQiw2QkFBNkIsa0JBQWtCLDJDQUEyQyx5Q0FBeUMsR0FBRyxjQUFjLDZCQUE2QixrQkFBa0IsMkNBQTJDLHlDQUF5QyxHQUFHLHNCQUFzQix1QkFBdUIsZ0NBQWdDLEdBQUcscUJBQXFCLDJCQUEyQiw0QkFBNEIsR0FBRyxxQkFBcUIsdUNBQXVDLEdBQUcsb0JBQW9CLHNDQUFzQyw4Q0FBOEMsR0FBRyxzREFBc0Qsc0JBQXNCLG9CQUFvQiw4QkFBOEIsZ0JBQWdCLG9DQUFvQyxzQkFBc0Isb0JBQW9CLCtCQUErQixtRUFBbUUsa0JBQWtCLDBCQUEwQiwwQkFBMEIsS0FBSyxnQkFBZ0IsK0JBQStCLG9CQUFvQiw2Q0FBNkMsMkNBQTJDLEtBQUssb0JBQW9CLCtCQUErQixvQkFBb0IsNkNBQTZDLDJDQUEyQyxLQUFLLHdCQUF3QixtQ0FBbUMsb0JBQW9CLG1CQUFtQix1QkFBdUIsb0JBQW9CLGNBQWMsOEJBQThCLDBCQUEwQixrQ0FBa0MsK0JBQStCLHdDQUF3QyxtQkFBbUIsS0FBSywwQkFBMEIsbUNBQW1DLDBCQUEwQixLQUFLLDBCQUEwQiwyQkFBMkIsd0JBQXdCLEtBQUssR0FBRyxPQUFPLHVGQUF1RixVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSwrQkFBK0Isa0JBQWtCLDJCQUEyQixzQkFBc0IsaUJBQWlCLHVCQUF1QixHQUFHLFlBQVksK0JBQStCLDhCQUE4QixrQkFBa0Isd0JBQXdCLDRCQUE0QixpQkFBaUIsaUJBQWlCLEdBQUcsc0JBQXNCLGtCQUFrQix3QkFBd0IsYUFBYSw0QkFBNEIsR0FBRyxVQUFVLGtCQUFrQix3QkFBd0IsNEJBQTRCLFlBQVksMkJBQTJCLGNBQWMsa0NBQWtDLEdBQUcsc0JBQXNCLGlDQUFpQyxrQkFBa0IsaUJBQWlCLG1CQUFtQixrQkFBa0IsYUFBYSw0QkFBNEIsd0JBQXdCLDZCQUE2QixnQ0FBZ0Msc0NBQXNDLEdBQUcsd0JBQXdCLHdCQUF3Qix5Q0FBeUMsc0JBQXNCLGVBQWUsR0FBRyxpQkFBaUIseUNBQXlDLGVBQWUsR0FBRyxxQkFBcUIsMkJBQTJCLGtEQUFrRCxHQUFHLDJDQUEyQyxxQkFBcUIsR0FBRywrQ0FBK0Msa0JBQWtCLEdBQUcsc0JBQXNCLGtCQUFrQiw0QkFBNEIsY0FBYyxvREFBb0Qsa0JBQWtCLDZCQUE2QixpRUFBaUUsZ0JBQWdCLHdCQUF3QixHQUFHLDJCQUEyQiwyQkFBMkIsaUJBQWlCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLG9CQUFvQixHQUFHLHdCQUF3Qix5QkFBeUIsc0JBQXNCLEdBQUcsb0JBQW9CLDZCQUE2QixrQkFBa0IsMkNBQTJDLHlDQUF5QyxHQUFHLGNBQWMsNkJBQTZCLGtCQUFrQiwyQ0FBMkMseUNBQXlDLEdBQUcsc0JBQXNCLHVCQUF1QixnQ0FBZ0MsR0FBRyxxQkFBcUIsMkJBQTJCLDRCQUE0QixHQUFHLHFCQUFxQix1Q0FBdUMsR0FBRyxvQkFBb0Isc0NBQXNDLDhDQUE4QyxHQUFHLHNEQUFzRCxzQkFBc0Isb0JBQW9CLDhCQUE4QixnQkFBZ0Isb0NBQW9DLHNCQUFzQixvQkFBb0IsK0JBQStCLG1FQUFtRSxrQkFBa0IsMEJBQTBCLDBCQUEwQixLQUFLLGdCQUFnQiwrQkFBK0Isb0JBQW9CLDZDQUE2QywyQ0FBMkMsS0FBSyxvQkFBb0IsK0JBQStCLG9CQUFvQiw2Q0FBNkMsMkNBQTJDLEtBQUssd0JBQXdCLG1DQUFtQyxvQkFBb0IsbUJBQW1CLHVCQUF1QixvQkFBb0IsY0FBYyw4QkFBOEIsMEJBQTBCLGtDQUFrQywrQkFBK0Isd0NBQXdDLG1CQUFtQixLQUFLLDBCQUEwQixtQ0FBbUMsMEJBQTBCLEtBQUssMEJBQTBCLDJCQUEyQix3QkFBd0IsS0FBSyxHQUFHLG1CQUFtQjtBQUM3OFI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQTBHO0FBQzFHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMEZBQU87Ozs7QUFJb0Q7QUFDNUUsT0FBTyxpRUFBZSwwRkFBTyxJQUFJLGlHQUFjLEdBQUcsaUdBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0V3QztBQUVUO0FBQ0o7QUFFM0J6VCw0RUFBWSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2NvbnRyb2xsZXJzL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2NvbnRyb2xsZXJzL2dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2ZhY3Rvcmllcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvZmFjdG9yaWVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9mYWN0b3JpZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9oZWxwZXJzL2FycmF5c0FyZUVxdWFsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2hlbHBlcnMvZGVsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvaGVscGVycy9yb3RhdGVBSUJvYXJkcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzPzQzZjQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVsYXkgfSBmcm9tICcuLi9oZWxwZXJzL2RlbGF5J1xuaW1wb3J0IHsgZ2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuL2dhbWVDb250cm9sbGVyJ1xuXG5jb25zdCBnYW1lID0gZ2FtZUNvbnRyb2xsZXIoKVxuXG5jb25zdCBwcmVHYW1lU2V0dXAgPSAoKSA9PiB7XG4gIHJlbmRlclBsYXllckJvYXJkKClcbiAgcGxhY2VDYXJyaWVyU2hpcCgpXG4gIHJlbmRlckFJQm9hcmQoKVxufVxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSBhc3luYyAoKSA9PiB7XG4gIC8vIHRoaXMgaXMgd2hlcmUgdGhlIHNoaXAgcGxhY2VtZW50IHdpbGwgaGFwcGVuIGZvciBodW1hbiBwbGF5ZXJcbiAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgdG9wQmFyQ29udGFpbmVyUGFyYS50ZXh0Q29udGVudCA9ICdFbmVubXkgaXMgcGxhY2luZyB0aGVpciBzaGlwcy4uLidcbiAgYXdhaXQgZGVsYXkoMTUwMClcbiAgZ2FtZS5wbGFjZUFJU2hpcHMoKVxuICByZW5kZXJBSUJvYXJkKClcbiAgdG9wQmFyQ29udGFpbmVyUGFyYS50ZXh0Q29udGVudCA9ICcnXG4gIGNvbnN0IGFpQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlCb2FyZCcpXG4gIGNvbnN0IHBsYXllcnMgPSBnYW1lLmdldFBsYXllcnMoKVxuICBjb25zdCBhY3RpdmVQbGF5ZXIgPSBnYW1lLmdldEN1cnJlbnRQbGF5ZXIoKVxuXG4gIGlmIChhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnMuaHVtYW4pIHtcbiAgICBjb25zdCBuZXdNZXNzYWdlID0gJ0F0dGFjayB0aGUgZW5lbWllcyBzaGlwcyEnXG4gICAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgICB0cmFuc2l0aW9uVGV4dENoYW5nZXMobmV3TWVzc2FnZSwgdG9wQmFyQ29udGFpbmVyUGFyYSlcblxuICAgIGFpQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnQsIHtcbiAgICAgIG9uY2U6IHRydWVcbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IHBsYWNlQ2FycmllclNoaXAgPSAoKSA9PiB7XG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBjYXJyaWVyIHNoaXAnXG5cbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXG5cbiAgY29uc3Qgb3JpZW50YXRpb25CdG5WYWx1ZXMgPSBjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0bigpXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMF1cbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBvcmllbnRhdGlvbkJ0blZhbHVlc1sxXVxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IGZhbHNlXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcbiAgICB9IGVsc2Uge1xuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgaHVtYW5Cb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgICdjbGljaycsXG4gICAgKGUpID0+IHtcbiAgICAgIGhhbmRsZUNhcnJpZXJTaGlwUGxhY2VtZW50KGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMsIGNvbnRyb2xsZXIpXG4gICAgfSxcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxuICApXG59XG5cbmNvbnN0IHBsYWNlQmF0dGxlU2hpcCA9ICgpID0+IHtcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIGJhdHRsZXNoaXAnXG5cbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXG5cbiAgY29uc3Qgb3JpZW50YXRpb25CdG5WYWx1ZXMgPSBjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0bigpXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMF1cbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBvcmllbnRhdGlvbkJ0blZhbHVlc1sxXVxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IGZhbHNlXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcbiAgICB9IGVsc2Uge1xuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgaHVtYW5Cb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgICdjbGljaycsXG4gICAgKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnT3JpZW50YXRpb24gc3RhdHVzIGdvaW5nIGludG8gcGxhY2VtZW50OicgK1xuICAgICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXNcbiAgICAgIClcbiAgICAgIGhhbmRsZUJhdHRsZVNoaXBQbGFjZW1lbnQoZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cywgY29udHJvbGxlcilcbiAgICB9LFxuICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XG4gIClcbn1cblxuY29uc3QgcGxhY2VDcnVpc2VyID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgQ3J1aXNlcidcblxuICBjb25zdCBodW1hbkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckJvYXJkJylcblxuICBjb25zdCBvcmllbnRhdGlvbkJ0blZhbHVlcyA9IGNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuKClcbiAgbGV0IGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBvcmllbnRhdGlvbkJ0blZhbHVlc1swXVxuICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZUJ0biA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzFdXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID09PSB0cnVlKSB7XG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gZmFsc2VcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJ1xuICAgIH0gZWxzZSB7XG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICBodW1hbkJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2NsaWNrJyxcbiAgICAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICdPcmllbnRhdGlvbiBzdGF0dXMgZ29pbmcgaW50byBwbGFjZW1lbnQ6JyArXG4gICAgICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1c1xuICAgICAgKVxuICAgICAgaGFuZGxlQ3J1aXNlclNoaXBQbGFjZW1lbnQoZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cywgY29udHJvbGxlcilcbiAgICB9LFxuICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XG4gIClcbn1cblxuY29uc3QgcGxhY2VTdWJtYXJpbmUgPSAoKSA9PiB7XG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBTdWJtYXJpbmUnXG5cbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXG5cbiAgY29uc3Qgb3JpZW50YXRpb25CdG5WYWx1ZXMgPSBjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0bigpXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMF1cbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBvcmllbnRhdGlvbkJ0blZhbHVlc1sxXVxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IGZhbHNlXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcbiAgICB9IGVsc2Uge1xuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXG4gICAgfVxuICB9KVxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgIChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgJ09yaWVudGF0aW9uIHN0YXR1cyBnb2luZyBpbnRvIHBsYWNlbWVudDonICtcbiAgICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzXG4gICAgICApXG4gICAgICBoYW5kbGVTdWJtYXJpbmVTaGlwUGxhY2VtZW50KFxuICAgICAgICBlLFxuICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzLFxuICAgICAgICBjb250cm9sbGVyXG4gICAgICApXG4gICAgfSxcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxuICApXG59XG5cbmNvbnN0IHBsYWNlRGVzdHJveWVyID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgRGVzdHJveWVyJ1xuXG4gIGNvbnN0IGh1bWFuQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyQm9hcmQnKVxuXG4gIGNvbnN0IG9yaWVudGF0aW9uQnRuVmFsdWVzID0gY3JlYXRlT3JpZW50YXRpb25Ub2dnbGVCdG4oKVxuICBsZXQgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzBdXG4gIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlQnRuID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMV1cbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPT09IHRydWUpIHtcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBmYWxzZVxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnVmVydGljYWwnXG4gICAgfSBlbHNlIHtcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJ1xuICAgIH1cbiAgfSlcblxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgIChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgJ09yaWVudGF0aW9uIHN0YXR1cyBnb2luZyBpbnRvIHBsYWNlbWVudDonICtcbiAgICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzXG4gICAgICApXG4gICAgICBoYW5kbGVEZXN0cm95ZXJTaGlwUGxhY2VtZW50KFxuICAgICAgICBlLFxuICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzLFxuICAgICAgICBjb250cm9sbGVyXG4gICAgICApXG4gICAgfSxcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxuICApXG59XG5cbmNvbnN0IHJlbmRlclBsYXllckJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGdhbWUuZ2V0SHVtYW5Cb2FyZCgpXG4gIGNvbnN0IHBsYXllckJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckJvYXJkJylcbiAgcGxheWVyQm9hcmREaXYuaW5uZXJIVE1MID0gJydcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudFJvdyA9IHBsYXllckJvYXJkW2ldXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50Um93Lmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JvYXJkQ2VsbCcpXG4gICAgICBidXR0b24uZGF0YXNldC5yb3cgPSBpXG4gICAgICBidXR0b24uZGF0YXNldC5jb2x1bW4gPSBqXG5cbiAgICAgIHBsYXllckJvYXJkRGl2LmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgcmVuZGVyQUlCb2FyZCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYWlCb2FyZCA9IGdhbWUuZ2V0QUlCb2FyZCgpXG4gIGNvbnN0IGFpQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlCb2FyZCcpXG4gIGFpQm9hcmREaXYuaW5uZXJIVE1MID0gJydcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFpQm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjdXJyZW50Um93ID0gYWlCb2FyZFtpXVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50Um93Lmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JvYXJkQ2VsbCcpXG4gICAgICBidXR0b24uZGF0YXNldC5yb3cgPSBpXG4gICAgICBidXR0b24uZGF0YXNldC5jb2x1bW4gPSBqXG4gICAgICBjb25zdCByb3cgPSBhaUJvYXJkW2ldXG5cbiAgICAgIGlmICh0eXBlb2Ygcm93W2pdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2hpcENlbGwnKVxuICAgICAgfVxuICAgICAgYWlCb2FyZERpdi5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHVwZGF0ZUh1bWFuQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGh1bWFuQm9hcmQgPSBnYW1lLmdldEh1bWFuQm9hcmQoKVxuICBjb25zdCBtaXNzZWRTaG90cyA9IGdhbWUuZ2V0SHVtYW5Cb2FyZE9iai5nZXRNaXNzZWRTaG90cygpXG4gIGNvbnN0IHN1Y2Nlc3NmdWxTaG90cyA9IGdhbWUuZ2V0SHVtYW5Cb2FyZE9iai5nZXRTdWNjZXNzZnVsU2hvdHMoKVxuICBjb25zdCBhbGxEb21Ob2RlcyA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckJvYXJkJykuY2hpbGROb2Rlc1xuICApXG5cbiAgbWlzc2VkU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IHNob3RbMF1cbiAgICBjb25zdCBjb2x1bW4gPSBzaG90WzFdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERvbU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YXJnZXROb2RlID0gYWxsRG9tTm9kZXNbaV0uZGF0YXNldFxuICAgICAgaWYgKCt0YXJnZXROb2RlLmNvbHVtbiA9PT0gY29sdW1uICYmICt0YXJnZXROb2RlLnJvdyA9PT0gcm93KSB7XG4gICAgICAgIGFsbERvbU5vZGVzW2ldLnRleHRDb250ZW50ID0gJ1gnXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHN1Y2Nlc3NmdWxTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XG4gICAgY29uc3Qgcm93ID0gc2hvdFswXVxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRG9tTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXVxuICAgICAgaWYgKFxuICAgICAgICArdGFyZ2V0Tm9kZS5kYXRhc2V0LmNvbHVtbiA9PT0gY29sdW1uICYmXG4gICAgICAgICt0YXJnZXROb2RlLmRhdGFzZXQucm93ID09PSByb3dcbiAgICAgICkge1xuICAgICAgICB0YXJnZXROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXBDZWxsJylcbiAgICAgICAgdGFyZ2V0Tm9kZS5jbGFzc0xpc3QuYWRkKCdzaGlwSGl0JylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5jb25zdCB1cGRhdGVBSUJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBhaUJvYXJkID0gZ2FtZS5nZXRBSUJvYXJkKClcbiAgY29uc3QgbWlzc2VkU2hvdHMgPSBnYW1lLmdldEFJQm9hcmRPYmouZ2V0TWlzc2VkU2hvdHMoKVxuICBjb25zdCBzdWNjZXNzZnVsU2hvdHMgPSBnYW1lLmdldEFJQm9hcmRPYmouZ2V0U3VjY2Vzc2Z1bFNob3RzKClcbiAgY29uc3QgYWxsRG9tTm9kZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSUJvYXJkJykuY2hpbGROb2RlcylcblxuICBtaXNzZWRTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XG4gICAgY29uc3Qgcm93ID0gc2hvdFswXVxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRG9tTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXS5kYXRhc2V0XG4gICAgICBpZiAodGFyZ2V0Tm9kZS5jb2x1bW4gPT09IGNvbHVtbiAmJiB0YXJnZXROb2RlLnJvdyA9PT0gcm93KSB7XG4gICAgICAgIGFsbERvbU5vZGVzW2ldLnRleHRDb250ZW50ID0gJ1gnXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHN1Y2Nlc3NmdWxTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XG4gICAgY29uc3Qgcm93ID0gc2hvdFswXVxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRG9tTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXVxuICAgICAgaWYgKFxuICAgICAgICB0YXJnZXROb2RlLmRhdGFzZXQuY29sdW1uID09PSBjb2x1bW4gJiZcbiAgICAgICAgdGFyZ2V0Tm9kZS5kYXRhc2V0LnJvdyA9PT0gcm93XG4gICAgICApIHtcbiAgICAgICAgdGFyZ2V0Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwQ2VsbCcpXG4gICAgICAgIHRhcmdldE5vZGUuY2xhc3NMaXN0LmFkZCgnc2hpcEhpdCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgaGFuZGxlQ2FycmllclNoaXBQbGFjZW1lbnQgPSAoXG4gIGUsXG4gIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXG4gIGNvbnRyb2xsZXJcbikgPT4ge1xuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cbiAgY29uc3QgY29vcmRpbmF0ZSA9IFtzZWxlY3RlZFJvdywgc2VsZWN0ZWRDb2x1bW5dXG5cbiAgY29uc3QgY2FycmllclBsYWNlZCA9IHBsYWNlQ2Fycmllck9uQm9hcmQoXG4gICAgY29vcmRpbmF0ZSxcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXG4gIClcblxuICBpZiAoY2FycmllclBsYWNlZCkge1xuICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxuICAgIHJlbW92ZVByZXZpb3VzT3JpZW50YXRpb25CdG4oKVxuICAgIHBsYWNlQmF0dGxlU2hpcCgpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBsYWNlQ2FycmllclNoaXBcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVCYXR0bGVTaGlwUGxhY2VtZW50ID0gKFxuICBlLFxuICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICBjb250cm9sbGVyXG4pID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxuXG4gIGNvbnN0IGJhdHRsZXNoaXBQbGFjZWQgPSBwbGFjZUJhdHRsZXNoaXBPbkJvYXJkKFxuICAgIGNvb3JkaW5hdGUsXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxuICApXG5cbiAgaWYgKGJhdHRsZXNoaXBQbGFjZWQpIHtcbiAgICBjb250cm9sbGVyLmFib3J0KClcbiAgICByZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuKClcbiAgICBwbGFjZUNydWlzZXIoKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwbGFjZUJhdHRsZVNoaXBcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVDcnVpc2VyU2hpcFBsYWNlbWVudCA9IChcbiAgZSxcbiAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgY29udHJvbGxlclxuKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cblxuICBjb25zdCBjcnVpc2VyUGxhY2VkID0gcGxhY2VDcnVpc2VyT25Cb2FyZChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuXG4gIGlmIChjcnVpc2VyUGxhY2VkKSB7XG4gICAgY29udHJvbGxlci5hYm9ydCgpXG4gICAgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0bigpXG4gICAgcGxhY2VTdWJtYXJpbmUoKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwbGFjZUNydWlzZXJcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVTdWJtYXJpbmVTaGlwUGxhY2VtZW50ID0gKFxuICBlLFxuICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICBjb250cm9sbGVyXG4pID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxuXG4gIGNvbnN0IHN1Ym1hcmluZVBsYWNlZCA9IHBsYWNlU3VibWFyaW5lT25Cb2FyZChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuXG4gIGlmIChzdWJtYXJpbmVQbGFjZWQpIHtcbiAgICBjb250cm9sbGVyLmFib3J0KClcbiAgICByZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuKClcbiAgICBwbGFjZURlc3Ryb3llcigpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBsYWNlU3VibWFyaW5lXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlRGVzdHJveWVyU2hpcFBsYWNlbWVudCA9IGFzeW5jIChcbiAgZSxcbiAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgY29udHJvbGxlclxuKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cbiAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcblxuICBjb25zdCBkZXN0cm95ZXJQbGFjZWQgPSBwbGFjZURlc3Ryb3llck9uQm9hcmQoXG4gICAgY29vcmRpbmF0ZSxcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXG4gIClcblxuICBpZiAoZGVzdHJveWVyUGxhY2VkKSB7XG4gICAgY29udHJvbGxlci5hYm9ydCgpXG4gICAgdG9wQmFyQ29udGFpbmVyUGFyYS50ZXh0Q29udGVudCA9ICcnXG4gICAgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0bigpXG4gICAgYXdhaXQgZGlzcGxheUNvbnRyb2xsZXIoKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwbGFjZURlc3Ryb3llclxuICB9XG59XG5cbmNvbnN0IHBsYWNlQ2Fycmllck9uQm9hcmQgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xuICBjb25zdCBzaGlwVHlwZSA9ICdjYXJyaWVyJ1xuICBjb25zdCBjYXJyaWVyUGxhY2VkID0gZ2FtZS5wbGFjZUNhcnJpZXJTaGlwKFxuICAgIGNvb3JkaW5hdGUsXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxuICApXG4gIGNvbnN0IGJvYXJkRE9NQ2VsbHNBcnIgPSBbXG4gICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYXllckJvYXJkID4gYnV0dG9uJylcbiAgXVxuICBpZiAoIWNhcnJpZXJQbGFjZWQpIHtcbiAgICByZXR1cm4gY2FycmllclBsYWNlZFxuICB9IGVsc2Uge1xuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGdldFZlcnRpY2FsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2FycmllclBsYWNlZFxufVxuXG5jb25zdCBwbGFjZUJhdHRsZXNoaXBPbkJvYXJkID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgY29uc3Qgc2hpcFR5cGUgPSAnYmF0dGxlc2hpcCdcbiAgY29uc3QgYmF0dGxlc2hpcFBsYWNlZCA9IGdhbWUucGxhY2VCYXR0bGVTaGlwKFxuICAgIGNvb3JkaW5hdGUsXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxuICApXG4gIGNvbnN0IGJvYXJkRE9NQ2VsbHNBcnIgPSBbXG4gICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYXllckJvYXJkID4gYnV0dG9uJylcbiAgXVxuICBpZiAoIWJhdHRsZXNoaXBQbGFjZWQpIHtcbiAgICByZXR1cm4gYmF0dGxlc2hpcFBsYWNlZFxuICB9IGVsc2Uge1xuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGdldFZlcnRpY2FsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH1cbiAgfVxuICByZXR1cm4gYmF0dGxlc2hpcFBsYWNlZFxufVxuXG5jb25zdCBwbGFjZUNydWlzZXJPbkJvYXJkID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgY29uc3Qgc2hpcFR5cGUgPSAnY3J1aXNlcidcbiAgY29uc3QgY3J1aXNlclBsYWNlZCA9IGdhbWUucGxhY2VDcnVpc2VyU2hpcChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuICBjb25zdCBib2FyZERPTUNlbGxzQXJyID0gW1xuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXG4gIF1cbiAgaWYgKCFjcnVpc2VyUGxhY2VkKSB7XG4gICAgcmV0dXJuIGNydWlzZXJQbGFjZWRcbiAgfSBlbHNlIHtcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZ2V0SG9yaXpvbnRhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBnZXRWZXJ0aWNhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNydWlzZXJQbGFjZWRcbn1cblxuY29uc3QgcGxhY2VTdWJtYXJpbmVPbkJvYXJkID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgY29uc3Qgc2hpcFR5cGUgPSAnc3VibWFyaW5lJ1xuICBjb25zdCBzdWJtYXJpbmVQbGFjZWQgPSBnYW1lLnBsYWNlU3VibWFyaW5lU2hpcChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuICBjb25zdCBib2FyZERPTUNlbGxzQXJyID0gW1xuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXG4gIF1cbiAgaWYgKCFzdWJtYXJpbmVQbGFjZWQpIHtcbiAgICByZXR1cm4gc3VibWFyaW5lUGxhY2VkXG4gIH0gZWxzZSB7XG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGdldEhvcml6b250YWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZ2V0VmVydGljYWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdWJtYXJpbmVQbGFjZWRcbn1cblxuY29uc3QgcGxhY2VEZXN0cm95ZXJPbkJvYXJkID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgY29uc3Qgc2hpcFR5cGUgPSAnZGVzdHJveWVyJ1xuICBjb25zdCBkZXN0cm95ZXJQbGFjZWQgPSBnYW1lLnBsYWNlRGVzdHJveWVyU2hpcChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuICBjb25zdCBib2FyZERPTUNlbGxzQXJyID0gW1xuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXG4gIF1cbiAgaWYgKCFkZXN0cm95ZXJQbGFjZWQpIHtcbiAgICByZXR1cm4gZGVzdHJveWVyUGxhY2VkXG4gIH0gZWxzZSB7XG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGdldEhvcml6b250YWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZ2V0VmVydGljYWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXG4gICAgfVxuICB9XG4gIHJldHVybiBkZXN0cm95ZXJQbGFjZWRcbn1cblxuY29uc3QgZ2V0SG9yaXpvbnRhbERPTUNvb3JkcyA9IChjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSkgPT4ge1xuICBjb25zdCBzdGFydGluZ0NvbHVtbiA9IE51bWJlcihjb29yZGluYXRlWzFdKVxuICBjb25zdCBzaGlwTGVuZ3RoID1cbiAgICBzaGlwVHlwZSA9PT0gJ2NhcnJpZXInXG4gICAgICA/IDVcbiAgICAgIDogc2hpcFR5cGUgPT09ICdiYXR0bGVzaGlwJ1xuICAgICAgPyA0XG4gICAgICA6IHNoaXBUeXBlID09PSAnY3J1aXNlcidcbiAgICAgID8gM1xuICAgICAgOiBzaGlwVHlwZSA9PT0gJ3N1Ym1hcmluZSdcbiAgICAgID8gM1xuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2Rlc3Ryb3llcidcbiAgICAgID8gMlxuICAgICAgOiBudWxsXG5cbiAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nQ29sdW1uOyBpIDwgc3RhcnRpbmdDb2x1bW4gKyBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSArY29vcmRpbmF0ZVswXVxuICAgIGNvbnN0IGNvbHVtbiA9IGlcbiAgICBjb25zdCBkb21Db29yZGluYXRlID0gW3JvdywgY29sdW1uXVxuICAgIGNvbnN0IHRhcmdldERPTUJ0biA9IGZpbmRTaGlwRE9NQnRuKGJvYXJkRE9NQ2VsbHNBcnIsIGRvbUNvb3JkaW5hdGUpXG4gICAgdGFyZ2V0RE9NQnRuLmNsYXNzTGlzdC5hZGQoJ3NoaXBDZWxsJylcbiAgfVxufVxuXG5jb25zdCBnZXRWZXJ0aWNhbERPTUNvb3JkcyA9IChjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSkgPT4ge1xuICBjb25zdCBzdGFydGluZ1JvdyA9IE51bWJlcihjb29yZGluYXRlWzBdKVxuICBjb25zdCBzaGlwTGVuZ3RoID1cbiAgICBzaGlwVHlwZSA9PT0gJ2NhcnJpZXInXG4gICAgICA/IDVcbiAgICAgIDogc2hpcFR5cGUgPT09ICdiYXR0bGVzaGlwJ1xuICAgICAgPyA0XG4gICAgICA6IHNoaXBUeXBlID09PSAnY3J1aXNlcidcbiAgICAgID8gM1xuICAgICAgOiBzaGlwVHlwZSA9PT0gJ3N1Ym1hcmluZSdcbiAgICAgID8gM1xuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2Rlc3Ryb3llcidcbiAgICAgID8gMlxuICAgICAgOiBudWxsXG5cbiAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nUm93OyBpID4gc3RhcnRpbmdSb3cgLSBzaGlwTGVuZ3RoOyBpLS0pIHtcbiAgICBjb25zdCByb3cgPSBpXG4gICAgY29uc3QgY29sdW1uID0gK2Nvb3JkaW5hdGVbMV1cbiAgICBjb25zdCBkb21Db29yZGluYXRlID0gW3JvdywgY29sdW1uXVxuICAgIGNvbnN0IHRhcmdldERPTUJ0biA9IGZpbmRTaGlwRE9NQnRuKGJvYXJkRE9NQ2VsbHNBcnIsIGRvbUNvb3JkaW5hdGUpXG4gICAgdGFyZ2V0RE9NQnRuLmNsYXNzTGlzdC5hZGQoJ3NoaXBDZWxsJylcbiAgfVxufVxuXG5jb25zdCBmaW5kU2hpcERPTUJ0biA9IChib2FyZERPTUNlbGxzQXJyLCBkb21Db29yZGluYXRlKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRET01DZWxsc0Fyci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRvbUNlbGxSb3cgPSArYm9hcmRET01DZWxsc0FycltpXS5kYXRhc2V0LnJvd1xuICAgIGNvbnN0IGRvbUNlbGxDb2x1bW4gPSArYm9hcmRET01DZWxsc0FycltpXS5kYXRhc2V0LmNvbHVtblxuICAgIGlmIChcbiAgICAgIGRvbUNlbGxSb3cgPT09ICtkb21Db29yZGluYXRlWzBdICYmXG4gICAgICBkb21DZWxsQ29sdW1uID09PSArZG9tQ29vcmRpbmF0ZVsxXVxuICAgICkge1xuICAgICAgcmV0dXJuIGJvYXJkRE9NQ2VsbHNBcnJbaV1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0ID0gYXN5bmMgKGUpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXG4gIGNvbnN0IGFpQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlCb2FyZCcpXG5cbiAgaWYgKCFzZWxlY3RlZENvbHVtbiB8fCAhc2VsZWN0ZWRSb3cpIHtcbiAgICByZXR1cm4gaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0XG4gIH1cblxuICBjb25zdCBhaUJvYXJkID0gZ2FtZS5nZXRBSUJvYXJkT2JqXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxuICBjb25zdCBhbHJlYWR5QXR0YWNrZWQgPSBhaUJvYXJkLnByZXZlbnRTYW1lQXR0YWNrKGNvb3JkaW5hdGUpXG4gIGlmIChhbHJlYWR5QXR0YWNrZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGdhbWUucGxheVJvdW5kKGNvb3JkaW5hdGUpXG4gIGNvbnN0IGh1bWFuTW92ZVN1Y2Nlc3NmdWwgPSBnYW1lLmdldEFJQm9hcmRPYmouZ2V0TGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwoKVxuICAvLyBVc2UgdGhpcyB2YWx1ZSB3aGVuIGRldGVybWluaW5nIHdoZXRoZXIgdG8gc2hvdyBzaGlwIGFzIHN1bmtcbiAgY29uc3Qgc2hpcElzU3VuayA9IGdhbWUuaXNTaGlwU3VuaygnaHVtYW4nKVxuICBjb25zdCBzaGlwU3Vua1Jlc3VsdCA9IHNoaXBJc1N1bmtbMF1cbiAgaWYgKHNoaXBTdW5rUmVzdWx0KSB7XG4gICAgY29uc3QgdGFyZ2V0U2hpcE9iaiA9IHNoaXBJc1N1bmtbMV1cbiAgICBjb25zdCBpc1NoaXBTdW5rID0gc2hpcElzU3Vua1swXVxuICAgIGNvbnN0IGxhc3RTdWNjZXNzZnVsTW92ZSA9IHNoaXBJc1N1bmtbMl1cbiAgICBjb25zdCBzdW5rU2hpcENvb3JkcyA9IGdhbWUuZ2V0U3Vua1NoaXBDb29yZHMoXG4gICAgICB0YXJnZXRTaGlwT2JqLFxuICAgICAgbGFzdFN1Y2Nlc3NmdWxNb3ZlLFxuICAgICAgJ2h1bWFuJ1xuICAgIClcbiAgICBkaXNwbGF5U3Vua1NoaXAoc3Vua1NoaXBDb29yZHMsICdodW1hbicpXG4gIH1cbiAgaHVtYW5Nb3ZlU3VjY2Vzc2Z1bFxuICAgID8gZGlzcGxheVN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlKCdodW1hbicpXG4gICAgOiBkaXNwbGF5VW5zdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSgnaHVtYW4nKVxuXG4gIGNvbnN0IGh1bWFuV2lucyA9IGdhbWUuY2hlY2tGb3JXaW4oKVxuXG4gIHVwZGF0ZUFJQm9hcmQoKVxuICBhd2FpdCBkZWxheSg0MDAwKVxuICBoYW5kbGVXaW5DaGVjayhodW1hbldpbnMsIGFpQm9hcmREaXYpXG4gIGhhbmRsZUFJTW92ZShhaUJvYXJkRGl2KVxufVxuXG5jb25zdCBoYW5kbGVBSU1vdmUgPSBhc3luYyAoYWlCb2FyZERpdikgPT4ge1xuICBjb25zdCB0b3BCYXJDb250YWluZXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxuICBjb25zdCBlbmVteUF0dGFja2luZ01zZyA9ICdFbmVteSBpcyBhdHRhY2tpbmcgeW91ciBzaGlwcyEnXG4gIHRyYW5zaXRpb25UZXh0Q2hhbmdlcyhlbmVteUF0dGFja2luZ01zZywgdG9wQmFyQ29udGFpbmVyUGFyYSlcbiAgYXdhaXQgZGVsYXkoMzAwMClcbiAgZ2FtZS5wbGF5Um91bmQoKVxuICBjb25zdCBhaU1vdmVTdWNjZXNzZnVsID0gZ2FtZS5nZXRIdW1hbkJvYXJkT2JqLmdldExhc3RBSU1vdmVTdWNjZXNzZnVsKClcbiAgY29uc3Qgc2hpcElzU3VuayA9IGdhbWUuaXNTaGlwU3VuaygnY29tcHV0ZXInKVxuICBjb25zdCBzaGlwU3Vua1Jlc3VsdCA9IHNoaXBJc1N1bmtbMF1cbiAgaWYgKHNoaXBTdW5rUmVzdWx0KSB7XG4gICAgY29uc3QgdGFyZ2V0U2hpcE9iaiA9IHNoaXBJc1N1bmtbMV1cbiAgICBjb25zdCBpc1NoaXBTdW5rID0gc2hpcElzU3Vua1swXVxuICAgIGNvbnN0IGxhc3RTdWNjZXNzZnVsTW92ZSA9IHNoaXBJc1N1bmtbMl1cbiAgICBjb25zdCBzdW5rU2hpcENvb3JkcyA9IGdhbWUuZ2V0U3Vua1NoaXBDb29yZHMoXG4gICAgICB0YXJnZXRTaGlwT2JqLFxuICAgICAgbGFzdFN1Y2Nlc3NmdWxNb3ZlLFxuICAgICAgJ2NvbXB1dGVyJ1xuICAgIClcbiAgICBkaXNwbGF5U3Vua1NoaXAoc3Vua1NoaXBDb29yZHMsICdjb21wdXRlcicpXG4gIH1cbiAgYWlNb3ZlU3VjY2Vzc2Z1bFxuICAgID8gZGlzcGxheVN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlKCdjb21wdXRlcicpXG4gICAgOiBkaXNwbGF5VW5zdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSgnY29tcHV0ZXInKVxuXG4gIGNvbnN0IGFpV2lucyA9IGdhbWUuY2hlY2tGb3JXaW4oKVxuXG4gIHVwZGF0ZUh1bWFuQm9hcmQoKVxuICBhd2FpdCBkZWxheSgyNTAwKVxuICBjb25zdCBhdHRhY2tUaGVFbmVteU1zZyA9ICdBdHRhY2sgdGhlIGVuZW1pZXMgc2hpcHMuLi4nXG4gIHRyYW5zaXRpb25UZXh0Q2hhbmdlcyhhdHRhY2tUaGVFbmVteU1zZywgdG9wQmFyQ29udGFpbmVyUGFyYSlcblxuICBhd2FpdCBkZWxheSg0MDAwKVxuICBoYW5kbGVXaW5DaGVjayhhaVdpbnMsIGFpQm9hcmREaXYpXG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKCdBSUJvYXJkJylcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnQsIHsgb25jZTogdHJ1ZSB9KVxufVxuXG5jb25zdCBhbm5vdW5jZVdpbm5lciA9ICh3aW5uZXIpID0+IHtcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgY29uc3Qgd2lubmVyTmFtZSA9IHdpbm5lci5nZXROYW1lKClcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9IGAke3dpbm5lck5hbWV9IHdpbidzIWBcbn1cblxuY29uc3QgcGxheUFnYWluID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyJylcbiAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgcGxheUFnYWluQnRuLnRleHRDb250ZW50ID0gJ1BsYXkgYWdhaW4nXG4gIHRvcEJhckRpdi5hcHBlbmRDaGlsZChwbGF5QWdhaW5CdG4pXG4gIHBsYXlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0TmV3R2FtZSlcbn1cblxuY29uc3Qgc3RhcnROZXdHYW1lID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyJylcbiAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IGJ1dHRvbicpXG4gIHRvcEJhckRpdi5yZW1vdmVDaGlsZChwbGF5QWdhaW5CdG4pXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJykudGV4dENvbnRlbnQgPSAnJ1xuICBkaXNwbGF5Q29udHJvbGxlcigpXG59XG5cbi8vIEZvciBlYWNoIG9mIHRoZSBwbGFjZSBzaGlwIGZ1bmN0aW9ucywgd2UgbmVlZCB0byByZW1vdmUgdGhlIHByZXZpb3VzXG4vLyBvcmllbnRhdGlvbiB0b2dnbGUgYnV0dG9uIHRvIHByZXZlbnQgdGhlIHNhbWUgbGlzdGVuZXIgZmlyaW5nIGZvciBlYWNoIG9mIHRoZVxuLy8gcHJldmlvdXMgb3JpZW50YXRpb24gdG9nZ2xlIGJ1dHRvbnNcbmNvbnN0IHJlbW92ZVByZXZpb3VzT3JpZW50YXRpb25CdG4gPSAoKSA9PiB7XG4gIGNvbnN0IHRvcEJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXInKVxuICBjb25zdCBwcmV2aW91c09yaWVudGF0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yaWVudGF0aW9uVG9nZ2xlQnRuJylcbiAgdG9wQmFyRGl2LnJlbW92ZUNoaWxkKHByZXZpb3VzT3JpZW50YXRpb25CdG4pXG59XG5cbmNvbnN0IGNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyJylcbiAgY29uc3QgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5jbGFzc0xpc3QuYWRkKCdvcmllbnRhdGlvblRvZ2dsZUJ0bicpXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXG4gIHRvcEJhckRpdi5hcHBlbmRDaGlsZChvcmllbnRhdGlvblRvZ2dsZUJ0bilcblxuICByZXR1cm4gW2hvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMsIG9yaWVudGF0aW9uVG9nZ2xlQnRuXVxufVxuXG5jb25zdCBkaXNwbGF5U3VjY2Vzc2Z1bEF0dGFja01lc3NhZ2UgPSAocGxheWVyKSA9PiB7XG4gIGlmIChwbGF5ZXIgPT09ICdodW1hbicpIHtcbiAgICBjb25zdCB0b3BCYXJDb250YWluZXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxuICAgIGNvbnN0IGF0dGFja0FuZEhpdE1zZyA9ICdZb3UgYXR0YWNrZWQgdGhlIGVuZW15Li4uIGFuZCBoaXQgdGhlaXIgc2hpcCEnXG4gICAgc2V0VGltZW91dCh0cmFuc2l0aW9uVGV4dENoYW5nZXMsIDEwLCBhdHRhY2tBbmRIaXRNc2csIHRvcEJhckNvbnRhaW5lclBhcmEpXG4gIH0gZWxzZSBpZiAocGxheWVyID09PSAnY29tcHV0ZXInKSB7XG4gICAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgICBjb25zdCBlbmVteUhpdE1zZyA9ICdUaGUgZW5lbXkgbGF1bmNoZWQgYW4gYXR0YWNrLi4uIGFuZCBoaXQgeW91ciBzaGlwISdcbiAgICBzZXRUaW1lb3V0KHRyYW5zaXRpb25UZXh0Q2hhbmdlcywgMTAsIGVuZW15SGl0TXNnLCB0b3BCYXJDb250YWluZXJQYXJhKVxuICB9XG59XG5cbmNvbnN0IGRpc3BsYXlVbnN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlID0gKHBsYXllcikgPT4ge1xuICBpZiAocGxheWVyID09PSAnaHVtYW4nKSB7XG4gICAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgICBjb25zdCB1bnN1Y2Nlc3NmdWxBdHRhY2tNc2cgPSAnWW91ciBhdHRhY2sgb24gdGhlIGVuZW15IHdhcyB1bnN1Y2Nlc3NmdWwnXG4gICAgc2V0VGltZW91dChcbiAgICAgIHRyYW5zaXRpb25UZXh0Q2hhbmdlcyxcbiAgICAgIDEwLFxuICAgICAgdW5zdWNjZXNzZnVsQXR0YWNrTXNnLFxuICAgICAgdG9wQmFyQ29udGFpbmVyUGFyYVxuICAgIClcbiAgfSBlbHNlIGlmIChwbGF5ZXIgPT09ICdjb21wdXRlcicpIHtcbiAgICBjb25zdCB0b3BCYXJDb250YWluZXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxuICAgIGNvbnN0IHVuc3VjY2Vzc2Z1bEVuZW15QXR0YWNrTXNnID0gJ1RoZSBlbmVtaWVzIGF0dGFjayB3YXMgdW5zdWNjZXNzZnVsJ1xuICAgIHNldFRpbWVvdXQoXG4gICAgICB0cmFuc2l0aW9uVGV4dENoYW5nZXMsXG4gICAgICAxMCxcbiAgICAgIHVuc3VjY2Vzc2Z1bEVuZW15QXR0YWNrTXNnLFxuICAgICAgdG9wQmFyQ29udGFpbmVyUGFyYVxuICAgIClcbiAgfVxufVxuXG4vLyBDaGFuZ2VzIGNvbG9ycyBvZiBzdW5rIHNoaXAgY2VsbHMgdG8gcmVkIGFuZCBjaGFuZ2VzIHRvcCBiYXIgY29udGFpbmVyXG4vLyBtZXNzYWdlXG5jb25zdCBkaXNwbGF5U3Vua1NoaXAgPSAoc3Vua1NoaXBDb29yZHMsIHBsYXllcikgPT4ge1xuICBpZiAocGxheWVyID09PSAnaHVtYW4nKSB7XG4gICAgY29uc3QgYWlET01DZWxsc0FyciA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjQUlCb2FyZCA+IGJ1dHRvbicpXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vua1NoaXBDb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRvbUNvb3JkID0gc3Vua1NoaXBDb29yZHNbaV1cbiAgICAgIC8vICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxuICAgICAgLy8gSVNTVUUgSVMgSEVSRSwgRE9NIENPT1JEIEFSUiBIQVMgU1RSSU5HUywgTkVFRFMgTlVNQkVSU1xuICAgICAgLy8gISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXG4gICAgICBjb25zdCB0YXJnZXRET01CdG4gPSBmaW5kU2hpcERPTUJ0bihhaURPTUNlbGxzQXJyLCBkb21Db29yZClcbiAgICAgIHRhcmdldERPTUJ0bi5jbGFzc0xpc3QuYWRkKCdzdW5rU2hpcCcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHBsYXllciA9PT0gJ2NvbXB1dGVyJykge1xuICAgIGNvbnN0IGh1bWFuRE9NQ2VsbHNBcnIgPSBbXG4gICAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxuICAgIF1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1bmtTaGlwQ29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkb21Db29yZCA9IHN1bmtTaGlwQ29vcmRzW2ldXG4gICAgICBjb25zdCB0YXJnZXRET01CdG4gPSBmaW5kU2hpcERPTUJ0bihodW1hbkRPTUNlbGxzQXJyLCBkb21Db29yZClcbiAgICAgIHRhcmdldERPTUJ0bi5jbGFzc0xpc3QuYWRkKCdzdW5rU2hpcCcpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZVdpbkNoZWNrID0gKHdpbkNoZWNrLCBib2FyZERpdikgPT4ge1xuICBpZiAod2luQ2hlY2spIHtcbiAgICBib2FyZERpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dClcbiAgICBnYW1lLnJlc2V0R2FtZVN0YXRlKClcbiAgICBhbm5vdW5jZVdpbm5lcih3aW5DaGVjaylcbiAgICBwbGF5QWdhaW4oKVxuICB9XG59XG5cbmNvbnN0IHRyYW5zaXRpb25UZXh0Q2hhbmdlcyA9IGFzeW5jIChuZXdNZXNzYWdlLCBkb21FbGVtZW50KSA9PiB7XG4gIGRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJylcbiAgYXdhaXQgZGVsYXkoNDAwKVxuICBkb21FbGVtZW50LnRleHRDb250ZW50ID0gbmV3TWVzc2FnZVxuICBhd2FpdCBkZWxheSg0MDApXG4gIGRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJylcbn1cblxuLy8gY29uc3QgaGFuZGxlUGxheWVyU2VsZXRpb25cblxuZXhwb3J0IHsgcmVuZGVyUGxheWVyQm9hcmQsIHJlbmRlckFJQm9hcmQsIGRpc3BsYXlDb250cm9sbGVyLCBwcmVHYW1lU2V0dXAgfVxuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi4vZmFjdG9yaWVzL0dhbWVib2FyZCdcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL2ZhY3Rvcmllcy9QbGF5ZXInXG5pbXBvcnQgeyBhcnJheXNBcmVFcXVhbCB9IGZyb20gJy4uL2hlbHBlcnMvYXJyYXlzQXJlRXF1YWwnXG5pbXBvcnQgeyByZXR1cm5SYW5kb21BSUJvYXJkIH0gZnJvbSAnLi4vaGVscGVycy9yb3RhdGVBSUJvYXJkcydcblxuY29uc3QgZ2FtZUNvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIC8vIENyZWF0ZSB0d28gZ2FtZSBib2FyZHNcbiAgY29uc3QgaHVtYW5Cb2FyZCA9IEdhbWVib2FyZCgpXG4gIGh1bWFuQm9hcmQuY3JlYXRlR2FtZUJvYXJkKClcblxuICBjb25zdCBhaUJvYXJkID0gR2FtZWJvYXJkKClcbiAgYWlCb2FyZC5jcmVhdGVHYW1lQm9hcmQoKVxuXG4gIGNvbnN0IHBsYWNlQ2FycmllclNoaXAgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xuICAgIGxldCBjYXJyaWVyUGxhY2VkID0gdHJ1ZVxuXG4gICAgY29uc3QgY2FycmllckFyciA9IGRldGVybWluZUNhcnJpZXJBcnJDb29yZHMoXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICAgICAgY29vcmRpbmF0ZVxuICAgIClcblxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChjYXJyaWVyQXJyKVxuICAgIGlmICghc2hpcFBsYWNlZCkge1xuICAgICAgY2FycmllclBsYWNlZCA9IGZhbHNlXG4gICAgICByZXR1cm4gY2FycmllclBsYWNlZFxuICAgIH1cblxuICAgIHJldHVybiBjYXJyaWVyUGxhY2VkXG4gIH1cblxuICBjb25zdCBkZXRlcm1pbmVDYXJyaWVyQXJyQ29vcmRzID0gKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sIGNvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBjYXJyaWVyQXJyID0gW11cbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgY2FycmllckFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDU7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFtjb29yZGluYXRlWzBdLCAoK2Nvb3JkaW5hdGVbMV0gKyBpKS50b1N0cmluZygpXVxuICAgICAgICBjYXJyaWVyQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgY2FycmllckFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDU7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFsoK2Nvb3JkaW5hdGVbMF0gLSBpKS50b1N0cmluZygpLCBjb29yZGluYXRlWzFdXVxuICAgICAgICBjYXJyaWVyQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjYXJyaWVyQXJyXG4gIH1cblxuICBjb25zdCBwbGFjZUJhdHRsZVNoaXAgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xuICAgIGxldCBiYXR0bGVzaGlwUGxhY2VkID0gdHJ1ZVxuICAgIGNvbnN0IGJhdHRsZXNoaXBBcnIgPSBkZXRlcm1pbmVCYXR0bGVzaGlwQXJyQ29vcmRzKFxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgICAgIGNvb3JkaW5hdGVcbiAgICApXG5cbiAgICBjb25zdCBzaGlwUGxhY2VkID0gaHVtYW5Cb2FyZC5wbGFjZVNoaXAoYmF0dGxlc2hpcEFycilcbiAgICBpZiAoIXNoaXBQbGFjZWQpIHtcbiAgICAgIGJhdHRsZXNoaXBQbGFjZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIGJhdHRsZXNoaXBQbGFjZWRcbiAgICB9XG5cbiAgICByZXR1cm4gYmF0dGxlc2hpcFBsYWNlZFxuICB9XG5cbiAgY29uc3QgZGV0ZXJtaW5lQmF0dGxlc2hpcEFyckNvb3JkcyA9IChcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICAgIGNvb3JkaW5hdGVcbiAgKSA9PiB7XG4gICAgY29uc3QgYmF0dGxlc2hpcEFyciA9IFtdXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGJhdHRsZXNoaXBBcnIucHVzaChjb29yZGluYXRlKVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cbiAgICAgICAgYmF0dGxlc2hpcEFyci5wdXNoKGNvb3JkKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGJhdHRsZXNoaXBBcnIucHVzaChjb29yZGluYXRlKVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBbKCtjb29yZGluYXRlWzBdIC0gaSkudG9TdHJpbmcoKSwgY29vcmRpbmF0ZVsxXV1cbiAgICAgICAgYmF0dGxlc2hpcEFyci5wdXNoKGNvb3JkKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmF0dGxlc2hpcEFyclxuICB9XG5cbiAgY29uc3QgcGxhY2VDcnVpc2VyU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gICAgbGV0IGNydWlzZXJQbGFjZWQgPSB0cnVlXG4gICAgY29uc3QgY3J1aXNlckFyciA9IGRldGVybWluZUNydWlzZXJBcnJDb29yZHMoXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICAgICAgY29vcmRpbmF0ZVxuICAgIClcblxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChjcnVpc2VyQXJyKVxuICAgIGlmICghc2hpcFBsYWNlZCkge1xuICAgICAgY3J1aXNlclBsYWNlZCA9IGZhbHNlXG4gICAgICByZXR1cm4gY3J1aXNlclBsYWNlZFxuICAgIH1cblxuICAgIHJldHVybiBjcnVpc2VyUGxhY2VkXG4gIH1cblxuICBjb25zdCBkZXRlcm1pbmVDcnVpc2VyQXJyQ29vcmRzID0gKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sIGNvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBjcnVpc2VyQXJyID0gW11cbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgY3J1aXNlckFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFtjb29yZGluYXRlWzBdLCAoK2Nvb3JkaW5hdGVbMV0gKyBpKS50b1N0cmluZygpXVxuICAgICAgICBjcnVpc2VyQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgY3J1aXNlckFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFsoK2Nvb3JkaW5hdGVbMF0gLSBpKS50b1N0cmluZygpLCBjb29yZGluYXRlWzFdXVxuICAgICAgICBjcnVpc2VyQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjcnVpc2VyQXJyXG4gIH1cblxuICBjb25zdCBwbGFjZVN1Ym1hcmluZVNoaXAgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xuICAgIGxldCBzdWJtYXJpbmVQbGFjZWQgPSB0cnVlXG4gICAgY29uc3Qgc3VibWFyaW5lQXJyID0gZGV0ZXJtaW5lU3VibWFyaW5lQXJyQ29vcmRzKFxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgICAgIGNvb3JkaW5hdGVcbiAgICApXG5cbiAgICBjb25zdCBzaGlwUGxhY2VkID0gaHVtYW5Cb2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lQXJyKVxuICAgIGlmICghc2hpcFBsYWNlZCkge1xuICAgICAgc3VibWFyaW5lUGxhY2VkID0gZmFsc2VcbiAgICAgIHJldHVybiBzdWJtYXJpbmVQbGFjZWRcbiAgICB9XG5cbiAgICByZXR1cm4gc3VibWFyaW5lUGxhY2VkXG4gIH1cblxuICBjb25zdCBkZXRlcm1pbmVTdWJtYXJpbmVBcnJDb29yZHMgPSAoXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgICBjb29yZGluYXRlXG4gICkgPT4ge1xuICAgIGNvbnN0IHN1Ym1hcmluZUFyciA9IFtdXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIHN1Ym1hcmluZUFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFtjb29yZGluYXRlWzBdLCAoK2Nvb3JkaW5hdGVbMV0gKyBpKS50b1N0cmluZygpXVxuICAgICAgICBzdWJtYXJpbmVBcnIucHVzaChjb29yZClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBzdWJtYXJpbmVBcnIucHVzaChjb29yZGluYXRlKVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBbKCtjb29yZGluYXRlWzBdIC0gaSkudG9TdHJpbmcoKSwgY29vcmRpbmF0ZVsxXV1cbiAgICAgICAgc3VibWFyaW5lQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdWJtYXJpbmVBcnJcbiAgfVxuXG4gIGNvbnN0IHBsYWNlRGVzdHJveWVyU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gICAgbGV0IGRlc3Ryb3llclBsYWNlZCA9IHRydWVcbiAgICBjb25zdCBkZXN0cm95ZXJBcnIgPSBkZXRlcm1pbmVEZXN0cm95ZXJBcnJDb29yZHMoXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICAgICAgY29vcmRpbmF0ZVxuICAgIClcblxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChkZXN0cm95ZXJBcnIpXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XG4gICAgICBkZXN0cm95ZXJQbGFjZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxuICAgIH1cblxuICAgIHJldHVybiBkZXN0cm95ZXJQbGFjZWRcbiAgfVxuXG4gIGNvbnN0IGRldGVybWluZURlc3Ryb3llckFyckNvb3JkcyA9IChcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICAgIGNvb3JkaW5hdGVcbiAgKSA9PiB7XG4gICAgY29uc3QgZGVzdHJveWVyQXJyID0gW11cbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZGVzdHJveWVyQXJyLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gW2Nvb3JkaW5hdGVbMF0sICgrY29vcmRpbmF0ZVsxXSArIGkpLnRvU3RyaW5nKCldXG4gICAgICAgIGRlc3Ryb3llckFyci5wdXNoKGNvb3JkKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGRlc3Ryb3llckFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDI7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFsoK2Nvb3JkaW5hdGVbMF0gLSBpKS50b1N0cmluZygpLCBjb29yZGluYXRlWzFdXVxuICAgICAgICBkZXN0cm95ZXJBcnIucHVzaChjb29yZClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlc3Ryb3llckFyclxuICB9XG5cbiAgY29uc3QgcGxhY2VBSVNoaXBzID0gKCkgPT4ge1xuICAgIHBsYWNlU2hpcHMoYWlCb2FyZCwgcmV0dXJuUmFuZG9tQUlCb2FyZCgpKVxuICB9XG5cbiAgY29uc3QgcGxheWVycyA9IHt9XG5cbiAgY29uc3QgZ2V0UGxheWVycyA9ICgpID0+IHtcbiAgICByZXR1cm4gcGxheWVyc1xuICB9XG5cbiAgY29uc3QgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIoJ0h1bWFuJywgZmFsc2UpXG4gIGNvbnN0IGFpUGxheWVyID0gUGxheWVyKCdBSScsIHRydWUpXG4gIHBsYXllcnMuaHVtYW4gPSBodW1hblBsYXllclxuICBwbGF5ZXJzLkFJID0gYWlQbGF5ZXJcblxuICBsZXQgY3VycmVudFBsYXllciA9IHBsYXllcnMuaHVtYW5cblxuICBjb25zdCBnZXRDdXJyZW50UGxheWVyID0gKCkgPT4ge1xuICAgIHJldHVybiBjdXJyZW50UGxheWVyXG4gIH1cblxuICBjb25zdCBwbGF5Um91bmQgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGlmIChjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5odW1hbi5nZXROYW1lKCkpIHtcbiAgICAgIGFpQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKVxuICAgIH0gZWxzZSBpZiAoY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuQUkuZ2V0TmFtZSgpKSB7XG4gICAgICBjb25zdCBuZXh0TW92ZSA9IGNvbXB1dGVyc05leHRNb3ZlKClcbiAgICAgIGh1bWFuQm9hcmQucmVjZWl2ZUF0dGFjayhuZXh0TW92ZSlcbiAgICAgIGh1bWFuQm9hcmQucmVtb3ZlTGFzdEFJTW92ZShuZXh0TW92ZSlcbiAgICB9XG5cbiAgICBzd2l0Y2hQbGF5ZXIoKVxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpKVxuICB9XG5cbiAgY29uc3QgY29tcHV0ZXJzTmV4dE1vdmUgPSAoKSA9PiB7XG4gICAgY29uc3QgYXZhaWxhYmxlTW92ZXMgPSBodW1hbkJvYXJkLmdldEFJQXZhaWxhYmxlTW92ZXMoKVxuICAgIGNvbnN0IGxhc3RBSU1vdmVTdWNjZXNzZnVsID0gaHVtYW5Cb2FyZC5nZXRMYXN0QUlNb3ZlU3VjY2Vzc2Z1bCgpXG4gICAgaWYgKGxhc3RBSU1vdmVTdWNjZXNzZnVsKSB7XG4gICAgICBjb25zdCBhZGphY2VudFNsb3RzID0gY3VycmVudFBsYXllci5nZXRBZGphY2VudFNsb3RzKFxuICAgICAgICB0cnVlLFxuICAgICAgICBhdmFpbGFibGVNb3ZlcyxcbiAgICAgICAgaHVtYW5Cb2FyZC5nZXRTdWNjZXNzZnVsU2hvdHMoKSxcbiAgICAgICAgaHVtYW5Cb2FyZC5nZXRNaXNzZWRTaG90cygpXG4gICAgICApXG4gICAgICBodW1hbkJvYXJkLmFkZEFkamFjZW50U2xvdHNUb1F1ZXVlKGFkamFjZW50U2xvdHMpXG4gICAgICBjb25zdCBuZXh0TW92ZSA9IGh1bWFuQm9hcmQuZ2V0QWRqYWNlbnRRdWV1ZVNsb3QoKVxuICAgICAgcmV0dXJuIG5leHRNb3ZlXG4gICAgfSBlbHNlIGlmICghbGFzdEFJTW92ZVN1Y2Nlc3NmdWwpIHtcbiAgICAgIGNvbnN0IHJhbmRvbU1vdmUgPSBjdXJyZW50UGxheWVyLm1ha2VSYW5kb21Nb3ZlKHRydWUsIGF2YWlsYWJsZU1vdmVzKVxuICAgICAgcmV0dXJuIHJhbmRvbU1vdmVcbiAgICB9XG4gIH1cblxuICBjb25zdCBzd2l0Y2hQbGF5ZXIgPSAoKSA9PiB7XG4gICAgY3VycmVudFBsYXllciA9XG4gICAgICBjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5odW1hbi5nZXROYW1lKClcbiAgICAgICAgPyAoY3VycmVudFBsYXllciA9IHBsYXllcnMuQUkpXG4gICAgICAgIDogKGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzLmh1bWFuKVxuICB9XG5cbiAgY29uc3QgY2hlY2tGb3JXaW4gPSAoKSA9PiB7XG4gICAgbGV0IHdpbm5lclxuICAgIGlmIChcbiAgICAgIGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpID09PSBwbGF5ZXJzLmh1bWFuLmdldE5hbWUoKSAmJlxuICAgICAgYWlCb2FyZC5hbGxTaGlwc1N1bmsoKVxuICAgICkge1xuICAgICAgd2lubmVyID0gY3VycmVudFBsYXllclxuICAgICAgcmV0dXJuIHdpbm5lclxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5BSS5nZXROYW1lKCkgJiZcbiAgICAgIGh1bWFuQm9hcmQuYWxsU2hpcHNTdW5rKClcbiAgICApIHtcbiAgICAgIHdpbm5lciA9IGN1cnJlbnRQbGF5ZXJcbiAgICAgIHJldHVybiB3aW5uZXJcbiAgICB9XG4gICAgcmV0dXJuIHdpbm5lclxuICB9XG5cbiAgY29uc3QgaXNTaGlwU3VuayA9IChwbGF5ZXIpID0+IHtcbiAgICBsZXQgc2hpcElzU3Vua1xuICAgIGlmIChwbGF5ZXIgPT09ICdodW1hbicpIHtcbiAgICAgIGNvbnN0IGxhc3RTdWNjZXNzZnVsSHVtYW5Nb3ZlID0gYWlCb2FyZC5nZXRMYXN0U3VjY2Vzc2Z1bE1vdmUoKVxuICAgICAgaWYgKGxhc3RTdWNjZXNzZnVsSHVtYW5Nb3ZlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2hpcElzU3VuayA9IGZhbHNlXG4gICAgICAgIHJldHVybiBbc2hpcElzU3Vua11cbiAgICAgIH1cbiAgICAgIGNvbnN0IGdhbWVCb2FyZCA9IGFpQm9hcmQuZ2V0Qm9hcmQoKVxuICAgICAgY29uc3QgdGFyZ2V0U2hpcE9iaiA9XG4gICAgICAgIGdhbWVCb2FyZFtsYXN0U3VjY2Vzc2Z1bEh1bWFuTW92ZVswXV1bbGFzdFN1Y2Nlc3NmdWxIdW1hbk1vdmVbMV1dXG4gICAgICBzaGlwSXNTdW5rID0gdGFyZ2V0U2hpcE9iai5oYXNCZWVuU3VuaygpXG4gICAgICByZXR1cm4gW3NoaXBJc1N1bmssIHRhcmdldFNoaXBPYmosIGxhc3RTdWNjZXNzZnVsSHVtYW5Nb3ZlXVxuICAgIH0gZWxzZSBpZiAocGxheWVyID09PSAnY29tcHV0ZXInKSB7XG4gICAgICBjb25zdCBsYXN0U3VjY2Vzc2Z1bEFJTW92ZSA9IGh1bWFuQm9hcmQuZ2V0TGFzdFN1Y2Nlc3NmdWxNb3ZlKClcbiAgICAgIGlmIChsYXN0U3VjY2Vzc2Z1bEFJTW92ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNoaXBJc1N1bmsgPSBmYWxzZVxuICAgICAgICByZXR1cm4gW3NoaXBJc1N1bmtdXG4gICAgICB9XG4gICAgICBjb25zdCBnYW1lQm9hcmQgPSBodW1hbkJvYXJkLmdldEJvYXJkKClcbiAgICAgIGNvbnN0IHRhcmdldFNoaXBPYmogPVxuICAgICAgICBnYW1lQm9hcmRbbGFzdFN1Y2Nlc3NmdWxBSU1vdmVbMF1dW2xhc3RTdWNjZXNzZnVsQUlNb3ZlWzFdXVxuICAgICAgc2hpcElzU3VuayA9IHRhcmdldFNoaXBPYmouaGFzQmVlblN1bmsoKVxuXG4gICAgICByZXR1cm4gW3NoaXBJc1N1bmssIHRhcmdldFNoaXBPYmosIGxhc3RTdWNjZXNzZnVsQUlNb3ZlXVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldFN1bmtTaGlwQ29vcmRzID0gKHRhcmdldFNoaXBPYmosIGxhc3RTdWNjZXNzZnVsTW92ZSwgcGxheWVyKSA9PiB7XG4gICAgY29uc3Qgc3Vua1NoaXBMZW5ndGggPSB0YXJnZXRTaGlwT2JqLmdldExlbmd0aCgpXG4gICAgbGV0IGFkamFjZW50U2xvdHNcbiAgICBsZXQgcmVtYWluaW5nU2hpcENvb3Jkc1xuICAgIGNvbnN0IHNoaXBDb29yZHMgPSBbbGFzdFN1Y2Nlc3NmdWxNb3ZlXVxuICAgIGxldCBzaGlwT3JpZW50YXRpb25cbiAgICBsZXQgc2hpcERpcmVjdGlvblxuICAgIGlmIChwbGF5ZXIgPT09ICdodW1hbicpIHtcbiAgICAgIGNvbnN0IGh1bWFuU2hpcENvb3JkcyA9IGdldEh1bWFuU3Vua1NoaXBDb29yZHMoXG4gICAgICAgIGFkamFjZW50U2xvdHMsXG4gICAgICAgIHN1bmtTaGlwTGVuZ3RoLFxuICAgICAgICBzaGlwT3JpZW50YXRpb24sXG4gICAgICAgIHNoaXBDb29yZHMsXG4gICAgICAgIGxhc3RTdWNjZXNzZnVsTW92ZSxcbiAgICAgICAgcmVtYWluaW5nU2hpcENvb3JkcyxcbiAgICAgICAgc2hpcERpcmVjdGlvblxuICAgICAgKVxuICAgICAgcmV0dXJuIGh1bWFuU2hpcENvb3Jkc1xuICAgIH0gZWxzZSBpZiAocGxheWVyID09PSAnY29tcHV0ZXInKSB7XG4gICAgICBjb25zdCBhaVNoaXBDb29yZHMgPSBnZXRBSVN1bmtTaGlwQ29vcmRzKFxuICAgICAgICBhZGphY2VudFNsb3RzLFxuICAgICAgICBzdW5rU2hpcExlbmd0aCxcbiAgICAgICAgc2hpcE9yaWVudGF0aW9uLFxuICAgICAgICBzaGlwQ29vcmRzLFxuICAgICAgICBsYXN0U3VjY2Vzc2Z1bE1vdmUsXG4gICAgICAgIHJlbWFpbmluZ1NoaXBDb29yZHMsXG4gICAgICAgIHNoaXBEaXJlY3Rpb25cbiAgICAgIClcbiAgICAgIHJldHVybiBhaVNoaXBDb29yZHNcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRIdW1hblN1bmtTaGlwQ29vcmRzID0gKFxuICAgIGFkamFjZW50U2xvdHMsXG4gICAgc3Vua1NoaXBMZW5ndGgsXG4gICAgc2hpcE9yaWVudGF0aW9uLFxuICAgIHNoaXBDb29yZHMsXG4gICAgbGFzdFN1Y2Nlc3NmdWxNb3ZlLFxuICAgIHJlbWFpbmluZ1NoaXBDb29yZHMsXG4gICAgc2hpcERpcmVjdGlvblxuICApID0+IHtcbiAgICBhZGphY2VudFNsb3RzID0gY3VycmVudFBsYXllci5nZXRBZGphY2VudFNsb3RzKFxuICAgICAgdHJ1ZSwgLy8gZG9pbmcgdGhpcyBqdXN0IHRvIG1ha2UgaXQgd29ya1xuICAgICAgMSxcbiAgICAgIGFpQm9hcmQuZ2V0U3VjY2Vzc2Z1bFNob3RzKCksXG4gICAgICBhaUJvYXJkLmdldE1pc3NlZFNob3RzKClcbiAgICApXG4gICAgLy8gQmFzZWQgb24gdGhlIGxhc3Qgc3VjY2Vzc2Z1bCBzaGlwIGhpdCwgYW5kIGl0J3MgY29vcmRpbmF0ZXMsXG4gICAgLy8gZmluZCB0aGUgcmVzdCBvZiB0aGUgY29vcmRpbmF0ZXMgZm9yIHRoYXQgc2hpcCBvYmplY3QgdGhhdCBoYXNcbiAgICAvLyBiZWVuIHN1bmtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkamFjZW50U2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGFkamFjZW50U2xvdCA9IGFkamFjZW50U2xvdHNbaV1cbiAgICAgIGNvbnN0IGdhbWVCb2FyZCA9IGFpQm9hcmQuZ2V0Qm9hcmQoKVxuICAgICAgY29uc3Qgc2hpcE9iaiA9IGdhbWVCb2FyZFthZGphY2VudFNsb3RbMF1dW2FkamFjZW50U2xvdFsxXV1cbiAgICAgIGlmIChzaGlwT2JqICE9PSB1bmRlZmluZWQgJiYgc2hpcE9iai5nZXRMZW5ndGgoKSA9PT0gc3Vua1NoaXBMZW5ndGgpIHtcbiAgICAgICAgc2hpcE9yaWVudGF0aW9uID0gZGV0ZXJtaW5lU2hpcE9yaWVudGF0aW9uKFxuICAgICAgICAgIGxhc3RTdWNjZXNzZnVsTW92ZSxcbiAgICAgICAgICBhZGphY2VudFNsb3RcbiAgICAgICAgKVxuICAgICAgICBzaGlwRGlyZWN0aW9uID0gZGV0ZXJtaW5lU2hpcERpcmVjdGlvbihcbiAgICAgICAgICBzaGlwT3JpZW50YXRpb24sXG4gICAgICAgICAgbGFzdFN1Y2Nlc3NmdWxNb3ZlLFxuICAgICAgICAgIGFkamFjZW50U2xvdFxuICAgICAgICApXG4gICAgICAgIHNoaXBDb29yZHMucHVzaChhZGphY2VudFNsb3QpXG4gICAgICAgIHJlbWFpbmluZ1NoaXBDb29yZHMgPSBzdW5rU2hpcExlbmd0aCAtIDJcbiAgICAgICAgaWYgKHJlbWFpbmluZ1NoaXBDb29yZHMgPiAwKSB7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByZW1haW5pbmdTaGlwQ29vcmRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgbmV4dFNoaXBDb29yZFxuICAgICAgICAgICAgaWYgKHNoaXBEaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgbmV4dFNoaXBDb29yZCA9IFthZGphY2VudFNsb3RbMF0sIGFkamFjZW50U2xvdFsxXSArIDFdXG4gICAgICAgICAgICAgIHNoaXBDb29yZHMucHVzaChuZXh0U2hpcENvb3JkKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwRGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgbmV4dFNoaXBDb29yZCA9IFthZGphY2VudFNsb3RbMF0sIGFkamFjZW50U2xvdFsxXSAtIDFdXG4gICAgICAgICAgICAgIHNoaXBDb29yZHMucHVzaChuZXh0U2hpcENvb3JkKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwRGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICAgICAgICAgIG5leHRTaGlwQ29vcmQgPSBbYWRqYWNlbnRTbG90WzBdIC0gMSwgYWRqYWNlbnRTbG90WzFdXVxuICAgICAgICAgICAgICBzaGlwQ29vcmRzLnB1c2gobmV4dFNoaXBDb29yZClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcERpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG4gICAgICAgICAgICAgIG5leHRTaGlwQ29vcmQgPSBbYWRqYWNlbnRTbG90WzBdICsgMSwgYWRqYWNlbnRTbG90WzFdXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc2hpcENvb3Jkc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaGlwQ29vcmRzXG4gIH1cblxuICBjb25zdCBnZXRBSVN1bmtTaGlwQ29vcmRzID0gKFxuICAgIGFkamFjZW50U2xvdHMsXG4gICAgc3Vua1NoaXBMZW5ndGgsXG4gICAgc2hpcE9yaWVudGF0aW9uLFxuICAgIGxhc3RTdWNjZXNzZnVsTW92ZSxcbiAgICBzaGlwRGlyZWN0aW9uLFxuICAgIHNoaXBDb29yZHMsXG4gICAgcmVtYWluaW5nU2hpcENvb3Jkc1xuICApID0+IHtcbiAgICBhZGphY2VudFNsb3RzID0gY3VycmVudFBsYXllci5nZXRBZGphY2VudFNsb3RzKFxuICAgICAgdHJ1ZSxcbiAgICAgIDEsXG4gICAgICBhaUJvYXJkLmdldFN1Y2Nlc3NmdWxTaG90cygpLFxuICAgICAgYWlCb2FyZC5nZXRNaXNzZWRTaG90cygpXG4gICAgKVxuICAgIC8vIEJhc2VkIG9uIHRoZSBsYXN0IHN1Y2Nlc3NmdWwgc2hpcCBoaXQsIGFuZCBpdCdzIGNvb3JkaW5hdGVzLFxuICAgIC8vIGZpbmQgdGhlIHJlc3Qgb2YgdGhlIGNvb3JkaW5hdGVzIGZvciB0aGF0IHNoaXAgb2JqZWN0IHRoYXQgaGFzXG4gICAgLy8gYmVlbiBzdW5rXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGphY2VudFNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBhZGphY2VudFNsb3QgPSBhZGphY2VudFNsb3RzW2ldXG4gICAgICBjb25zdCBzaGlwT2JqID0gaHVtYW5Cb2FyZC5nZXRCb2FyZCgpW2FkamFjZW50U2xvdFswXV1bYWRqYWNlbnRTbG90WzFdXVxuICAgICAgaWYgKHNoaXBPYmouZ2V0TGVuZ3RoKCkgPT09IHN1bmtTaGlwTGVuZ3RoKSB7XG4gICAgICAgIHNoaXBPcmllbnRhdGlvbiA9IGRldGVybWluZVNoaXBPcmllbnRhdGlvbihcbiAgICAgICAgICBsYXN0U3VjY2Vzc2Z1bE1vdmUsXG4gICAgICAgICAgYWRqYWNlbnRTbG90XG4gICAgICAgIClcbiAgICAgICAgc2hpcERpcmVjdGlvbiA9IGRldGVybWluZVNoaXBEaXJlY3Rpb24oXG4gICAgICAgICAgc2hpcE9yaWVudGF0aW9uLFxuICAgICAgICAgIGxhc3RTdWNjZXNzZnVsTW92ZSxcbiAgICAgICAgICBhZGphY2VudFNsb3RcbiAgICAgICAgKVxuICAgICAgICBzaGlwQ29vcmRzLnB1c2goYWRqYWNlbnRTbG90KVxuICAgICAgICByZW1haW5pbmdTaGlwQ29vcmRzID0gc3Vua1NoaXBMZW5ndGggLSAyXG4gICAgICAgIGlmIChyZW1haW5pbmdTaGlwQ29vcmRzID4gMCkge1xuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmVtYWluaW5nU2hpcENvb3Jkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbGV0IG5leHRTaGlwQ29vcmRcbiAgICAgICAgICAgIGlmIChzaGlwRGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgIG5leHRTaGlwQ29vcmQgPSBbYWRqYWNlbnRTbG90WzBdLCBhZGphY2VudFNsb3RbMV0gKyAxXVxuICAgICAgICAgICAgICBzaGlwQ29vcmRzLnB1c2gobmV4dFNoaXBDb29yZClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcERpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgIG5leHRTaGlwQ29vcmQgPSBbYWRqYWNlbnRTbG90WzBdLCBhZGphY2VudFNsb3RbMV0gLSAxXVxuICAgICAgICAgICAgICBzaGlwQ29vcmRzLnB1c2gobmV4dFNoaXBDb29yZClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcERpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgICAgICAgICBuZXh0U2hpcENvb3JkID0gW2FkamFjZW50U2xvdFswXSAtIDEsIGFkamFjZW50U2xvdFsxXV1cbiAgICAgICAgICAgICAgc2hpcENvb3Jkcy5wdXNoKG5leHRTaGlwQ29vcmQpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBEaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgICAgICAgICBuZXh0U2hpcENvb3JkID0gW2FkamFjZW50U2xvdFswXSArIDEsIGFkamFjZW50U2xvdFsxXV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHNoaXBDb29yZHNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2hpcENvb3Jkc1xuICB9XG5cbiAgLy8gd2hlbiB0cnlpbmcgdG8gZmlndXJlIG91dCB0aGUgY29vcmRpbmF0ZXMgZm9yIGEgc3VuayBzaGlwLFxuICAvLyB3ZSBuZWVkIHRvIGdldCB0aGUgb3JpZW50YXRpb24gKGhvcml6b250YWwgb3IgdmVydGljYWwpIG9mIHRoZVxuICAvLyBzdW5rIHNoaXBcbiAgY29uc3QgZGV0ZXJtaW5lU2hpcE9yaWVudGF0aW9uID0gKGxhc3RTdWNjZXNzZnVsTW92ZSwgYWRqYWNlbnRTbG90KSA9PiB7XG4gICAgbGV0IHNoaXBPcmllbnRhdGlvblxuICAgIGlmIChsYXN0U3VjY2Vzc2Z1bE1vdmVbMF0gIT09IGFkamFjZW50U2xvdFswXSkge1xuICAgICAgc2hpcE9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJ1xuICAgICAgcmV0dXJuIHNoaXBPcmllbnRhdGlvblxuICAgIH0gZWxzZSBpZiAobGFzdFN1Y2Nlc3NmdWxNb3ZlWzBdID09PSBhZGphY2VudFNsb3RbMF0pIHtcbiAgICAgIHNoaXBPcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJ1xuICAgICAgcmV0dXJuIHNoaXBPcmllbnRhdGlvblxuICAgIH1cbiAgfVxuXG4gIC8vIHdoZW4gdHJ5aW5nIHRvIGZpZ3VyZSBvdXQgdGhlIGNvb3JkaW5hdGVzIGZvciBhIHN1bmsgc2hpcCxcbiAgLy8gd2UgbmVlZCB0byBnZXQgdGhlIGRpcmVjdGlvbiAodXAsIGRvd24sIGxlZnQsIHJpZ2h0KSBvZiB0aGVcbiAgLy8gc3VuayBzaGlwXG4gIGNvbnN0IGRldGVybWluZVNoaXBEaXJlY3Rpb24gPSAoXG4gICAgc2hpcE9yaWVudGF0aW9uLFxuICAgIGxhc3RTdWNjZXNzZnVsTW92ZSxcbiAgICBhZGphY2VudFNsb3RcbiAgKSA9PiB7XG4gICAgLy8gZGV0ZXJtaW5lIGlmIGRpcmVjdGlvbiBpcyB1cCBvciBkb3duXG4gICAgbGV0IHNoaXBEaXJlY3Rpb25cbiAgICBpZiAoc2hpcE9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBjb25zdCBzdGFydGluZ0Nvb3JkUm93ID0gbGFzdFN1Y2Nlc3NmdWxNb3ZlWzBdWzBdXG4gICAgICBjb25zdCBuZXh0VmVydGljYWxDb29yZFJvdyA9IGFkamFjZW50U2xvdFswXVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgc3RhcnRpbmdDb29yZFJvdyA+IG5leHRWZXJ0aWNhbENvb3JkUm93XG4gICAgICAgID8gKHNoaXBEaXJlY3Rpb24gPSAnZG93bicpXG4gICAgICAgIDogKHNoaXBEaXJlY3Rpb24gPSAndXAnKVxuICAgICAgcmV0dXJuIHNoaXBEaXJlY3Rpb25cbiAgICB9IGVsc2UgaWYgKHNoaXBPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBzdGFydGluZ0Nvb3JkQ29sdW1uID0gbGFzdFN1Y2Nlc3NmdWxNb3ZlWzBdWzFdXG4gICAgICBjb25zdCBuZXh0SG9yaXpvbnRhbENvbHVtbiA9IGFkamFjZW50U2xvdFswXVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgc3RhcnRpbmdDb29yZENvbHVtbiA8IG5leHRIb3Jpem9udGFsQ29sdW1uXG4gICAgICAgID8gKHNoaXBEaXJlY3Rpb24gPSAncmlnaHQnKVxuICAgICAgICA6IChzaGlwRGlyZWN0aW9uID0gJ2xlZnQnKVxuICAgICAgcmV0dXJuIHNoaXBEaXJlY3Rpb25cbiAgICB9XG4gIH1cblxuICBjb25zdCByZXNldEdhbWVTdGF0ZSA9ICh3aW5uZXIpID0+IHtcbiAgICBodW1hbkJvYXJkLmNsZWFyR2FtZUJvYXJkKClcbiAgICBhaUJvYXJkLmNsZWFyR2FtZUJvYXJkKClcbiAgICBodW1hbkJvYXJkLmNyZWF0ZUdhbWVCb2FyZCgpXG4gICAgYWlCb2FyZC5jcmVhdGVHYW1lQm9hcmQoKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRIdW1hbkJvYXJkOiBodW1hbkJvYXJkLmdldEJvYXJkLFxuICAgIGdldEFJQm9hcmQ6IGFpQm9hcmQuZ2V0Qm9hcmQsXG4gICAgZ2V0QUlCb2FyZE9iajogYWlCb2FyZCxcbiAgICBnZXRIdW1hbkJvYXJkT2JqOiBodW1hbkJvYXJkLFxuICAgIHN3aXRjaFBsYXllcixcbiAgICBwbGF5Um91bmQsXG4gICAgZ2V0Q3VycmVudFBsYXllcixcbiAgICByZXNldEdhbWVTdGF0ZSxcbiAgICBjaGVja0ZvcldpbixcbiAgICBnZXRQbGF5ZXJzLFxuICAgIHBsYWNlQUlTaGlwcyxcbiAgICBwbGFjZUNhcnJpZXJTaGlwLFxuICAgIHBsYWNlQmF0dGxlU2hpcCxcbiAgICBwbGFjZUNydWlzZXJTaGlwLFxuICAgIHBsYWNlU3VibWFyaW5lU2hpcCxcbiAgICBwbGFjZURlc3Ryb3llclNoaXAsXG4gICAgaXNTaGlwU3VuayxcbiAgICBnZXRTdW5rU2hpcENvb3Jkc1xuICB9XG59XG5cbmV4cG9ydCB7IGdhbWVDb250cm9sbGVyIH1cblxuY29uc3QgcGxhY2VTaGlwcyA9IChib2FyZCwgY29vcmRpbmF0ZXNPYmopID0+IHtcbiAgY29uc3Qgc2hpcENvb3JkaW5hdGVzQXJyID0gT2JqZWN0LnZhbHVlcyhjb29yZGluYXRlc09iailcbiAgc2hpcENvb3JkaW5hdGVzQXJyLmZvckVhY2goKHNoaXBDb29yZGluYXRlcykgPT4ge1xuICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwQ29vcmRpbmF0ZXMpXG4gIH0pXG59XG5cbi8qIGNvbnN0IHBsYWNlRWFjaEh1bWFuU2hpcCA9IChjb29yZGluYXRlKSA9PiB7XG4gIGh1bWFuQm9hcmQucGxhY2VTaGlwKGNvb3JkaW5hdGUpXG59ICovXG4iLCJpbXBvcnQgeyBhcnJheXNBcmVFcXVhbCB9IGZyb20gJy4uL2hlbHBlcnMvYXJyYXlzQXJlRXF1YWwnXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9TaGlwJ1xuXG5leHBvcnQgY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG4gIGxldCBib2FyZCA9IFtdXG4gIGNvbnN0IHNoaXBPYmplY3RzID0gW11cbiAgY29uc3QgbWlzc2VkU2hvdHMgPSBbXVxuICBjb25zdCBhaUF2YWlsYWJsZU1vdmVzID0gW11cbiAgY29uc3Qgc3VjY2Vzc2Z1bFNob3RzID0gW11cbiAgbGV0IGFkamFjZW50U2xvdHNRdWV1ZSA9IFtdXG4gIGNvbnN0IHJvd3MgPSA5XG4gIGNvbnN0IGNvbHVtbnMgPSA5XG4gIGxldCBsYXN0QUlNb3ZlU3VjY2Vzc2Z1bCA9IGZhbHNlXG4gIGxldCBsYXN0SHVtYW5Nb3ZlU3VjY2Vzc2Z1bCA9IGZhbHNlXG5cbiAgY29uc3QgY3JlYXRlR2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIGJvYXJkID0gW11cbiAgICBmb3IgKGxldCBpID0gcm93czsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGJvYXJkW2ldID0gW11cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IGNvbHVtbnM7IGorKykge1xuICAgICAgICBib2FyZFtpXS5wdXNoKHVuZGVmaW5lZClcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IFtpLCBqXVxuICAgICAgICBhaUF2YWlsYWJsZU1vdmVzLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBjaGVja3MgaWYgY29vcmRpbmF0ZXMgZm9yIHNoaXAgaXMgb24gdGhlXG4gIC8vIGdhbWUgYm9hcmRcbiAgY29uc3QgdmFsaWRhdGVDb29yZGluYXRlcyA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGxldCB2YWxpZENvb3JkaW5hdGVzID0gdHJ1ZVxuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVbMF1cbiAgICAgIGNvbnN0IGNvbHVtbiA9IGNvb3JkaW5hdGVbMV1cbiAgICAgIGlmIChyb3cgPiA5IHx8IHJvdyA8IDApIHtcbiAgICAgICAgdmFsaWRDb29yZGluYXRlcyA9IGZhbHNlXG4gICAgICAgIHJldHVybiB2YWxpZENvb3JkaW5hdGVzXG4gICAgICB9IGVsc2UgaWYgKGNvbHVtbiA+IDkgfHwgY29sdW1uIDwgMCkge1xuICAgICAgICB2YWxpZENvb3JkaW5hdGVzID0gZmFsc2VcbiAgICAgICAgcmV0dXJuIHZhbGlkQ29vcmRpbmF0ZXNcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHZhbGlkQ29vcmRpbmF0ZXNcbiAgfVxuXG4gIC8vIGNoZWNrcyBpZiBzaGlwIGNvb3JkaW5hdGVzIG92ZXJsYXAgd2l0aCBhbHJlYWR5XG4gIC8vIHBsYWNlZCBzaGlwIGNvb3JkaW5hdGVzIGZvciB0aGUgc2FtZSBzaGlwXG4gIGNvbnN0IGNoZWNrU2VsZk92ZXJsYXAgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBsZXQgY29vcmRpbmF0ZXNPdmVybGFwID0gZmFsc2VcbiAgICBsZXQgcHJldkNvb3JkaW5hdGVcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICBpZiAoYXJyYXlzQXJlRXF1YWwocHJldkNvb3JkaW5hdGUsIGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXNPdmVybGFwID0gdHJ1ZVxuICAgICAgICAgIHJldHVybiBjb29yZGluYXRlc092ZXJsYXBcbiAgICAgICAgfVxuICAgICAgICBwcmV2Q29vcmRpbmF0ZSA9IGNvb3JkaW5hdGVcbiAgICAgIH1cbiAgICAgIHByZXZDb29yZGluYXRlID0gY29vcmRpbmF0ZVxuICAgIH0pXG5cbiAgICByZXR1cm4gY29vcmRpbmF0ZXNPdmVybGFwXG4gIH1cblxuICAvLyBTaG91bGQgcHJldmVudCBhIHNoaXAgZnJvbSBiZWluZ1xuICAvLyBwbGFjZWQgb24gdG9wIG9mIGFub3RoZXIgc2hpcFxuICBjb25zdCBjaGVja092ZXJsYXBXaXRoT3RoZXJTaGlwcyA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGxldCBzaGlwc092ZXJsYXAgPSBmYWxzZVxuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVbMF1cbiAgICAgIGNvbnN0IGNvbHVtbiA9IGNvb3JkaW5hdGVbMV1cbiAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGJvYXJkW3Jvd11bY29sdW1uXVxuICAgICAgaWYgKHR5cGVvZiBib2FyZENlbGwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHNoaXBzT3ZlcmxhcCA9IHRydWVcbiAgICAgICAgcmV0dXJuIHNoaXBzT3ZlcmxhcFxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2hpcHNPdmVybGFwXG4gIH1cblxuICBjb25zdCBwbGFjZVNoaXAgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBsZXQgc2hpcFBsYWNlZCA9IHRydWVcblxuICAgIGNvbnN0IGxlZ2FsQ29vcmRpbmF0ZXMgPSB2YWxpZGF0ZUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKVxuICAgIGlmICghbGVnYWxDb29yZGluYXRlcykge1xuICAgICAgc2hpcFBsYWNlZCA9IGZhbHNlXG4gICAgICByZXR1cm4gc2hpcFBsYWNlZFxuICAgIH1cblxuICAgIGNvbnN0IG92ZXJsYXBwaW5nQ29vcmRpbmF0ZXMgPSBjaGVja1NlbGZPdmVybGFwKGNvb3JkaW5hdGVzKVxuICAgIGlmIChvdmVybGFwcGluZ0Nvb3JkaW5hdGVzKSB7XG4gICAgICBzaGlwUGxhY2VkID0gZmFsc2VcbiAgICAgIHJldHVybiBzaGlwUGxhY2VkXG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcE92ZXJsYXBwaW5nID0gY2hlY2tPdmVybGFwV2l0aE90aGVyU2hpcHMoY29vcmRpbmF0ZXMpXG4gICAgaWYgKHNoaXBPdmVybGFwcGluZykge1xuICAgICAgc2hpcFBsYWNlZCA9IGZhbHNlXG4gICAgICByZXR1cm4gc2hpcFBsYWNlZFxuICAgIH1cblxuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBjb29yZGluYXRlcy5sZW5ndGhcbiAgICBjb25zdCBzaGlwT2JqZWN0ID0gU2hpcChzaGlwTGVuZ3RoLCAwLCBmYWxzZSlcbiAgICBzaGlwT2JqZWN0cy5wdXNoKHNoaXBPYmplY3QpXG5cbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBjb25zdCByb3cgPSBjb29yZGluYXRlWzBdXG4gICAgICBjb25zdCBjb2x1bW4gPSBjb29yZGluYXRlWzFdXG4gICAgICBib2FyZFtyb3ddW2NvbHVtbl0gPSBzaGlwT2JqZWN0XG4gICAgfSlcblxuICAgIHJldHVybiBzaGlwUGxhY2VkXG4gIH1cblxuICAvLyBwcmV2ZW50cyBodW1hbiBwbGF5ZXIgZnJvbSBhdHRhY2tpbmcgcHJldmlvdXNseVxuICAvLyBhdHRhY2tlZCBjb29yZGluYXRlXG4gIGNvbnN0IHByZXZlbnRTYW1lQXR0YWNrID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICBsZXQgYWxyZWFkeUF0dGFja2VkID0gZmFsc2VcbiAgICBzdWNjZXNzZnVsU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xuICAgICAgaWYgKGFycmF5c0FyZUVxdWFsKGNvb3JkaW5hdGUsIHNob3QpKSB7XG4gICAgICAgIGFscmVhZHlBdHRhY2tlZCA9IHRydWVcbiAgICAgICAgcmV0dXJuIHByZXZlbnRTYW1lQXR0YWNrXG4gICAgICB9XG4gICAgfSlcblxuICAgIG1pc3NlZFNob3RzLmZvckVhY2goKHNob3QpID0+IHtcbiAgICAgIGlmIChhcnJheXNBcmVFcXVhbChjb29yZGluYXRlLCBzaG90KSkge1xuICAgICAgICBhbHJlYWR5QXR0YWNrZWQgPSB0cnVlXG4gICAgICAgIHJldHVybiBwcmV2ZW50U2FtZUF0dGFja1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGFscmVhZHlBdHRhY2tlZFxuICB9XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVzWzBdXG4gICAgY29uc3QgY29sdW1uID0gY29vcmRpbmF0ZXNbMV1cbiAgICAvLyBjb29yZGluYXRlcyA9IFtyb3csIGNvbHVtbl1cbiAgICBjb25zdCBib2FyZENlbGwgPSBib2FyZFtyb3ddW2NvbHVtbl1cbiAgICBjb25zdCBzaGlwT2JqID0gYm9hcmRDZWxsXG5cbiAgICAvLyBOZWVkIHRvIGNoZWNrIGlmIG5ldyBjb29yZGluYXRlIGlzIGFscmVhZHlcbiAgICAvLyBpbnNpZGUgc3VjY2Vzc2Z1bFNob3RzIG9yIG1pc3NlZFNob3RzXG4gICAgY29uc3QgYWxyZWFkeUF0dGFja2VkID0gcHJldmVudFNhbWVBdHRhY2soY29vcmRpbmF0ZXMpXG4gICAgaWYgKGFscmVhZHlBdHRhY2tlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBib2FyZENlbGwgPT09ICdvYmplY3QnKSB7XG4gICAgICBzaGlwT2JqLmhpdCgpXG4gICAgICBsYXN0QUlNb3ZlU3VjY2Vzc2Z1bCA9IHRydWVcbiAgICAgIGxhc3RIdW1hbk1vdmVTdWNjZXNzZnVsID0gdHJ1ZVxuICAgICAgc3VjY2Vzc2Z1bFNob3RzLnB1c2goY29vcmRpbmF0ZXMpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYm9hcmRDZWxsICE9PSAnb2JqZWN0Jykge1xuICAgICAgbGFzdEFJTW92ZVN1Y2Nlc3NmdWwgPSBmYWxzZVxuICAgICAgbGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwgPSBmYWxzZVxuICAgICAgbWlzc2VkU2hvdHMucHVzaChjb29yZGluYXRlcylcbiAgICAgIHJlbW92ZUFkamFjZW50U2xvdChjb29yZGluYXRlcylcbiAgICB9XG4gIH1cblxuICAvLyBJZiB0aGUgY29tcHV0ZXIgcmFuZG9tbHkgZ3Vlc3NlcyBhIHNwb3QgdGhhdCBpcyBhbHJlYWR5IGluIHRoZSBhZGphY2VuY3lcbiAgLy8gc2xvdCBxdWV1ZSwgd2UgbmVlZCB0byByZW1vdmUgaXQgKGZyb20gdGhlIGFkamFjZW5jeSBxdWV1ZSkgc29cbiAgLy8gdGhlIGNvbXB1dGVyIGRvZXMgbm90IGF0dGVtcHQgdG9cbiAgLy8gdXNlIHRoZSBhbHJlYWR5IGd1ZXNzZWQgc3BvdCB3aGVuIHB1bGxpbmcgZnJvbSB0aGUgYWRqYWNlbmN5XG4gIC8vIHF1ZXVlIGZvciBpdCdzIG5leHQgbW92ZVxuICBjb25zdCByZW1vdmVBZGphY2VudFNsb3QgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBjb25zdCB0YXJnZXRDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzXG4gICAgY29uc3QgYWRqYWNlbnRRdWV1ZSA9IG5ldyBTZXQoKVxuICAgIGZvciAoY29uc3Qgc2xvdCBvZiBhZGphY2VudFNsb3RzUXVldWUpIHtcbiAgICAgIGFkamFjZW50UXVldWUuYWRkKHNsb3QudG9TdHJpbmcoKSlcbiAgICB9XG5cbiAgICAvLyBmaWx0ZXIgdGhlIGFkamFjZW5jeSBzbG90IHF1ZXVlIGRvd24gdG8gc2xvdHMgdGhhdCBoYXZlIE5PVFxuICAgIC8vIGFscmVhZHkgYmVlbiBndWVzZWQuXG4gICAgYWRqYWNlbnRTbG90c1F1ZXVlID0gYWRqYWNlbnRTbG90c1F1ZXVlLmZpbHRlcihcbiAgICAgIChzbG90KSA9PiAhYXJyYXlzQXJlRXF1YWwoc2xvdCwgdGFyZ2V0Q29vcmRpbmF0ZXMpXG4gICAgKVxuICB9XG5cbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGxldCBldmVyeVNoaXBTYW5rID0gdHJ1ZVxuICAgIHNoaXBPYmplY3RzLmZvckVhY2goKHNoaXBPYmopID0+IHtcbiAgICAgIGlmICghc2hpcE9iai5oYXNCZWVuU3VuaygpKSB7XG4gICAgICAgIGV2ZXJ5U2hpcFNhbmsgPSBmYWxzZVxuICAgICAgICByZXR1cm4gZXZlcnlTaGlwU2Fua1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGV2ZXJ5U2hpcFNhbmtcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZUxhc3RBSU1vdmUgPSAocmFuZG9tTW92ZSkgPT4ge1xuICAgIGFpQXZhaWxhYmxlTW92ZXMuZm9yRWFjaCgobW92ZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChhcnJheXNBcmVFcXVhbChtb3ZlLCByYW5kb21Nb3ZlKSkge1xuICAgICAgICBhaUF2YWlsYWJsZU1vdmVzLnNwbGljZShpbmRleCwgMSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgYWRkQWRqYWNlbnRTbG90c1RvUXVldWUgPSAoYWRqYWNlbnRTbG90cykgPT4ge1xuICAgIGFkamFjZW50U2xvdHMuZm9yRWFjaCgoc2xvdCkgPT4ge1xuICAgICAgYWRqYWNlbnRTbG90c1F1ZXVlLnB1c2goc2xvdClcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgY2xlYXJHYW1lQm9hcmQgPSAoKSA9PiB7XG4gICAgc2hpcE9iamVjdHMubGVuZ3RoID0gMFxuICAgIG1pc3NlZFNob3RzLmxlbmd0aCA9IDBcbiAgICBhaUF2YWlsYWJsZU1vdmVzLmxlbmd0aCA9IDBcbiAgICBzdWNjZXNzZnVsU2hvdHMubGVuZ3RoID0gMFxuICAgIGFkamFjZW50U2xvdHNRdWV1ZS5sZW5ndGggPSAwXG4gIH1cblxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IHtcbiAgICByZXR1cm4gYm9hcmRcbiAgfVxuXG4gIGNvbnN0IGdldE1pc3NlZFNob3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBtaXNzZWRTaG90c1xuICB9XG5cbiAgY29uc3QgZ2V0U3VjY2Vzc2Z1bFNob3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBzdWNjZXNzZnVsU2hvdHNcbiAgfVxuXG4gIGNvbnN0IGdldFNoaXBPYmplY3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwT2JqZWN0c1xuICB9XG5cbiAgY29uc3QgZ2V0QUlBdmFpbGFibGVNb3ZlcyA9ICgpID0+IHtcbiAgICByZXR1cm4gYWlBdmFpbGFibGVNb3Zlc1xuICB9XG5cbiAgY29uc3QgZ2V0TGFzdEFJTW92ZVN1Y2Nlc3NmdWwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxhc3RBSU1vdmVTdWNjZXNzZnVsXG4gIH1cblxuICBjb25zdCBnZXRMYXN0SHVtYW5Nb3ZlU3VjY2Vzc2Z1bCA9ICgpID0+IHtcbiAgICByZXR1cm4gbGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWxcbiAgfVxuXG4gIGNvbnN0IGdldEFkamFjZW50U2xvdHNRdWV1ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gYWRqYWNlbnRTbG90c1F1ZXVlXG4gIH1cblxuICBjb25zdCBnZXRBZGphY2VudFF1ZXVlU2xvdCA9ICgpID0+IHtcbiAgICByZXR1cm4gYWRqYWNlbnRTbG90c1F1ZXVlLnBvcCgpXG4gIH1cblxuICBjb25zdCBnZXRMYXN0U3VjY2Vzc2Z1bE1vdmUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHN1Y2Nlc3NmdWxTaG90cy5hdCgtMSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlR2FtZUJvYXJkLFxuICAgIGdldEJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGNsZWFyR2FtZUJvYXJkLFxuICAgIGdldE1pc3NlZFNob3RzLFxuICAgIGdldFN1Y2Nlc3NmdWxTaG90cyxcbiAgICBhbGxTaGlwc1N1bmssXG4gICAgZ2V0QUlBdmFpbGFibGVNb3ZlcyxcbiAgICB2YWxpZGF0ZUNvb3JkaW5hdGVzLFxuICAgIHByZXZlbnRTYW1lQXR0YWNrLFxuICAgIGNoZWNrU2VsZk92ZXJsYXAsXG4gICAgZ2V0U2hpcE9iamVjdHMsXG4gICAgcmVtb3ZlTGFzdEFJTW92ZSxcbiAgICBjaGVja092ZXJsYXBXaXRoT3RoZXJTaGlwcyxcbiAgICBnZXRMYXN0QUlNb3ZlU3VjY2Vzc2Z1bCxcbiAgICBnZXRMYXN0SHVtYW5Nb3ZlU3VjY2Vzc2Z1bCxcbiAgICBnZXRBZGphY2VudFNsb3RzUXVldWUsXG4gICAgYWRkQWRqYWNlbnRTbG90c1RvUXVldWUsXG4gICAgZ2V0QWRqYWNlbnRRdWV1ZVNsb3QsXG4gICAgcmVtb3ZlQWRqYWNlbnRTbG90LFxuICAgIGdldExhc3RTdWNjZXNzZnVsTW92ZVxuICB9XG59XG4iLCJpbXBvcnQgeyBhcnJheXNBcmVFcXVhbCB9IGZyb20gJy4uL2hlbHBlcnMvYXJyYXlzQXJlRXF1YWwnXG5cbmV4cG9ydCBjb25zdCBQbGF5ZXIgPSAobmFtZSwgaXNBSSkgPT4ge1xuICAvLyBVc2VkIHRvIG1ha2UgQUkgc2VsZWN0IHJhbmRvbSwgbGVnYWwgY29vcmRpbmF0ZVxuICAvLyBvbiBwbGF5ZXJzIGdhbWUgYm9hcmRcbiAgY29uc3QgbWFrZVJhbmRvbU1vdmUgPSAoaXNBSSwgYXZhaWxhYmxlTW92ZXMpID0+IHtcbiAgICBpZiAoIWlzQUkgfHwgYXZhaWxhYmxlTW92ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgY29uc3QgYXZhaWxhYmxlTW92ZXNMZW5ndGggPSBhdmFpbGFibGVNb3Zlcy5sZW5ndGhcbiAgICBjb25zdCByYW5kb21BcnJJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZU1vdmVzTGVuZ3RoKVxuICAgIGNvbnN0IHJhbmRvbUNvb3JkaW5hdGUgPSBhdmFpbGFibGVNb3Zlc1tyYW5kb21BcnJJbmRleF1cblxuICAgIHJldHVybiByYW5kb21Db29yZGluYXRlXG4gIH1cblxuICBjb25zdCBnZXRBZGphY2VudFNsb3RzID0gKFxuICAgIGlzQUksXG4gICAgYXZhaWxhYmxlTW92ZXMsXG4gICAgc3VjY2Vzc2Z1bFNob3RzLFxuICAgIG1pc3NlZFNob3RzXG4gICkgPT4ge1xuICAgIGlmICghaXNBSSB8fCBhdmFpbGFibGVNb3Zlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBjb25zdCBsYXN0U3VjY2Vzc2Z1bE1vdmUgPSBzdWNjZXNzZnVsU2hvdHMuYXQoLTEpXG4gICAgY29uc3QgYWRqYWNlbnRTbG90cyA9IHJldHJpZXZlQWRqYWNlbnRTbG90cyhsYXN0U3VjY2Vzc2Z1bE1vdmUpXG4gICAgY29uc3QgbGVnYWxBZGphY2VudFNsb3RzID0gcmVtb3ZlSWxsZWdhbEFkamFjZW50U2xvdHMoYWRqYWNlbnRTbG90cylcbiAgICAvKiBjb25zdCBhdmFpbGFibGVBZGphY2VudFNsb3RzID0gcHJldmVudFByZXZpb3VzU2hvdFRvUXVldWUoXG4gICAgICBhdmFpbGFibGVNb3ZlcyxcbiAgICAgIGxlZ2FsQWRqYWNlbnRTbG90cyxcbiAgICAgIHN1Y2Nlc3NmdWxTaG90cyxcbiAgICAgIG1pc3NlZFNob3RzXG4gICAgKSAqL1xuICAgIHJldHVybiBsZWdhbEFkamFjZW50U2xvdHNcbiAgfVxuXG4gIGNvbnN0IGdldENlbGxBYm92ZSA9IChsYXN0U3VjY2Vzc2Z1bE1vdmUpID0+IHtcbiAgICAvLyB0aGUgcm93IG5lZWRzIHRvIGNoYW5nZSBieSBvbmVcbiAgICBjb25zdCBuZXdBcnIgPSBbXVxuICAgIGNvbnN0IG5ld1JvdyA9ICtsYXN0U3VjY2Vzc2Z1bE1vdmVbMF0gLSAxXG4gICAgaWYgKG5ld1JvdyA+IDkgfHwgbmV3Um93IDwgMCkge1xuICAgICAgcmV0dXJuICdpbGxlZ2FsJ1xuICAgIH1cbiAgICBuZXdBcnJbMF0gPSBuZXdSb3dcbiAgICBuZXdBcnJbMV0gPSArbGFzdFN1Y2Nlc3NmdWxNb3ZlWzFdXG4gICAgcmV0dXJuIG5ld0FyclxuICB9XG5cbiAgY29uc3QgZ2V0Q2VsbEJlbG93ID0gKGxhc3RTdWNjZXNzZnVsTW92ZSkgPT4ge1xuICAgIC8vIHRoZSByb3cgbmVlZHMgdG8gY2hhbmdlIGJ5IG9uZVxuICAgIGNvbnN0IG5ld0FyciA9IFtdXG4gICAgY29uc3QgbmV3Um93ID0gK2xhc3RTdWNjZXNzZnVsTW92ZVswXSArIDFcbiAgICBpZiAobmV3Um93ID4gOSB8fCBuZXdSb3cgPCAwKSB7XG4gICAgICByZXR1cm4gJ2lsbGVnYWwnXG4gICAgfVxuICAgIG5ld0FyclswXSA9IG5ld1Jvd1xuICAgIG5ld0FyclsxXSA9ICtsYXN0U3VjY2Vzc2Z1bE1vdmVbMV1cbiAgICByZXR1cm4gbmV3QXJyXG4gIH1cblxuICBjb25zdCBnZXRDZWxsVG9SaWdodCA9IChsYXN0U3VjY2Vzc2Z1bE1vdmUpID0+IHtcbiAgICAvLyB0aGUgcm93IG5lZWRzIHRvIGNoYW5nZSBieSBvbmVcbiAgICBjb25zdCBuZXdBcnIgPSBbXVxuICAgIGNvbnN0IG5ld0NvbHVtbiA9ICtsYXN0U3VjY2Vzc2Z1bE1vdmVbMV0gKyAxXG4gICAgaWYgKG5ld0NvbHVtbiA+IDkgfHwgbmV3Q29sdW1uIDwgMCkge1xuICAgICAgcmV0dXJuICdpbGxlZ2FsJ1xuICAgIH1cbiAgICBuZXdBcnJbMF0gPSArbGFzdFN1Y2Nlc3NmdWxNb3ZlWzBdXG4gICAgbmV3QXJyWzFdID0gbmV3Q29sdW1uXG4gICAgcmV0dXJuIG5ld0FyclxuICB9XG5cbiAgY29uc3QgZ2V0Q2VsbFRvTGVmdCA9IChsYXN0U3VjY2Vzc2Z1bE1vdmUpID0+IHtcbiAgICAvLyB0aGUgcm93IG5lZWRzIHRvIGNoYW5nZSBieSBvbmVcbiAgICBjb25zdCBuZXdBcnIgPSBbXVxuICAgIGNvbnN0IG5ld0NvbHVtbiA9ICtsYXN0U3VjY2Vzc2Z1bE1vdmVbMV0gLSAxXG4gICAgaWYgKG5ld0NvbHVtbiA+IDkgfHwgbmV3Q29sdW1uIDwgMCkge1xuICAgICAgcmV0dXJuICdpbGxlZ2FsJ1xuICAgIH1cbiAgICBuZXdBcnJbMF0gPSArbGFzdFN1Y2Nlc3NmdWxNb3ZlWzBdXG4gICAgbmV3QXJyWzFdID0gbmV3Q29sdW1uXG4gICAgcmV0dXJuIG5ld0FyclxuICB9XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmFtZVxuICB9XG5cbiAgY29uc3QgcmV0cmlldmVBZGphY2VudFNsb3RzID0gKGxhc3RTdWNjZXNzZnVsTW92ZSkgPT4ge1xuICAgIGNvbnN0IGxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlID0gbGFzdFN1Y2Nlc3NmdWxNb3ZlXG4gICAgY29uc3QgYWRqYWNlbnRTbG90cyA9IFtdXG4gICAgYWRqYWNlbnRTbG90cy5wdXNoKGdldENlbGxBYm92ZShsYXN0U3VjY2Vzc2Z1bE1vdmVWYWx1ZSkpXG4gICAgYWRqYWNlbnRTbG90cy5wdXNoKGdldENlbGxCZWxvdyhsYXN0U3VjY2Vzc2Z1bE1vdmVWYWx1ZSkpXG4gICAgYWRqYWNlbnRTbG90cy5wdXNoKGdldENlbGxUb1JpZ2h0KGxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlKSlcbiAgICBhZGphY2VudFNsb3RzLnB1c2goZ2V0Q2VsbFRvTGVmdChsYXN0U3VjY2Vzc2Z1bE1vdmVWYWx1ZSkpXG4gICAgcmV0dXJuIGFkamFjZW50U2xvdHNcbiAgfVxuXG4gIC8vIHByZXZlbnRzIGFkZGluZyBhZGphY2VudCBzbG90cyB0aGF0IGFyZSBub3Qgb24gdGhlIGJvYXJkXG4gIGNvbnN0IHJlbW92ZUlsbGVnYWxBZGphY2VudFNsb3RzID0gKGFkamFjZW50U2xvdHMpID0+IHtcbiAgICBjb25zdCBhZGphY2VudFNsb3RzQXJyID0gYWRqYWNlbnRTbG90c1xuICAgIGFkamFjZW50U2xvdHNBcnIuZm9yRWFjaCgoc2xvdCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChzbG90ID09PSAnaWxsZWdhbCcpIHtcbiAgICAgICAgYWRqYWNlbnRTbG90c0Fyci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gYWRqYWNlbnRTbG90c0FyclxuICB9XG5cbiAgLy8gaWYgdGhlIGNvbXB1dGVyIGhhcyBhbHJlYWR5IChyYW5kb21seSkgZ3Vlc3NlZCBhIHNwb3Qgb24gdGhlIGJvYXJkLCBwcmV2ZW50XG4gIC8vIGFkZGluZyB0aGUgc3BvdCB0byB0aGUgYWRqYWNlbmN5IGxpc3RcbiAgY29uc3QgcHJldmVudFByZXZpb3VzU2hvdFRvUXVldWUgPSAoXG4gICAgYXZhaWxhYmxlTW92ZXMsXG4gICAgYWRqYWNlbnRTbG90cyxcbiAgICBzdWNjZXNzZnVsU2hvdHMsXG4gICAgbWlzc2VkU2hvdHNcbiAgKSA9PiB7XG4gICAgY29uc3Qgc2xvdHMgPSBhZGphY2VudFNsb3RzXG4gICAgY29uc3QgYWxsUHJldmlvdXNBdHRhY2tzID0gc3VjY2Vzc2Z1bFNob3RzLmNvbmNhdChtaXNzZWRTaG90cylcblxuICAgIGNvbnN0IHByZXZpb3VzQXR0YWNrcyA9IG5ldyBTZXQoKVxuXG4gICAgZm9yIChjb25zdCBzaG90IG9mIGFsbFByZXZpb3VzQXR0YWNrcykge1xuICAgICAgcHJldmlvdXNBdHRhY2tzLmFkZChzaG90LnRvU3RyaW5nKCkpXG4gICAgfVxuXG4gICAgLy8gR28gdGhyb3VnaCBlYWNoIGFkamFjZW5jeSBzbG90LCBhbmQgZGV0ZXJtaW5lIGlmIHRoZSBzbG90IGlzIGluIHRoZVxuICAgIC8vIHByZXZpb3VzQXR0YWNrcyBtZXRob2QuIFdlIGFyZSBmaWx0ZXJpbmcgb3V0IHRoZSBzbG90cyB0aGF0IGFyZSBpblxuICAgIC8vIHRoZSBwcmV2aW91cyBhdHRhY2sgc2V0LCBhcyB3ZSBkbyBub3Qgd2FudCB0byBoYXZlIHRoZSBjb21wdXRlclxuICAgIC8vIHRvIHVzZSB0aG9zZSBzbG90cyBhZ2FpbiBpbiBmdXR1cmUgdHVybnNcbiAgICBjb25zdCBmaWx0ZXJlZFNsb3RzID0gc2xvdHMuZmlsdGVyKFxuICAgICAgKHNsb3QpID0+ICFwcmV2aW91c0F0dGFja3MuaGFzKHNsb3QudG9TdHJpbmcoKSlcbiAgICApXG5cbiAgICByZXR1cm4gZmlsdGVyZWRTbG90c1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtYWtlUmFuZG9tTW92ZSxcbiAgICBnZXROYW1lLFxuICAgIGdldEFkamFjZW50U2xvdHMsXG4gICAgcHJldmVudFByZXZpb3VzU2hvdFRvUXVldWVcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IFNoaXAgPSAobGVuZ3RoLCBudW1PZkhpdHMsIGlzU3VuaykgPT4ge1xuICAvLyBJbmNyZWFzZSBudW1iZXIgb2YgaGl0cyBpbiBzaGlwIGJ5IDFcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGlmIChudW1PZkhpdHMgPT09IGxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbnVtT2ZIaXRzKytcbiAgICByZXR1cm4gbnVtT2ZIaXRzXG4gIH1cblxuICAvLyBEZXRlcm1pbmUgaWYgdGhlIHNoaXAgb2JqZWN0IGhhcyBiZWVuIHN1bmtcbiAgY29uc3QgaGFzQmVlblN1bmsgPSAoKSA9PiB7XG4gICAgaWYgKGxlbmd0aCA9PT0gbnVtT2ZIaXRzKSB7XG4gICAgICBpc1N1bmsgPSB0cnVlXG4gICAgICByZXR1cm4gaXNTdW5rXG4gICAgfVxuXG4gICAgcmV0dXJuIGlzU3Vua1xuICB9XG5cbiAgY29uc3QgZ2V0TnVtT2ZIaXRzID0gKCkgPT4ge1xuICAgIHJldHVybiBudW1PZkhpdHNcbiAgfVxuXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHtcbiAgICByZXR1cm4gbGVuZ3RoXG4gIH1cblxuICByZXR1cm4geyBoaXQsIGhhc0JlZW5TdW5rLCBnZXROdW1PZkhpdHMsIGdldExlbmd0aCB9XG59XG4iLCJleHBvcnQgY29uc3QgYXJyYXlzQXJlRXF1YWwgPSAoYXJyMSwgYXJyMikgPT4ge1xuICBpZiAoYXJyMSA9PT0gbnVsbCB8fCBhcnIyID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgaWYgKGFycjEubGVuZ3RoICE9PSBhcnIyLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyMS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnIxW2ldICE9PSBhcnIyW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cbiIsIi8vIGRlbGF5cyBleGVjdXRpb24gb2YgYSBmdW5jdGlvbiBmb3IgYSBzZXQgYW1vdW50IG9mIHRpbWVcbmV4cG9ydCBjb25zdCBkZWxheSA9IChtcykgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxufVxuIiwiZXhwb3J0IGNvbnN0IHJldHVyblJhbmRvbUFJQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGFpQm9hcmRzID0gW2FpU2hpcENvb3Jkc09uZSwgYWlTaGlwQ29vcmRzVHdvLCBhaVNoaXBDb29yZHNUaHJlZV1cbiAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKVxuICBjb25zdCBjaG9zZW5BSUJvYXJkID0gT2JqZWN0LnZhbHVlcyhhaUJvYXJkc1tyYW5kb21JbmRleF0pXG4gIHJldHVybiBjaG9zZW5BSUJvYXJkXG59XG5cbmNvbnN0IGFpU2hpcENvb3Jkc09uZSA9IHtcbiAgY2FycmllcjogW1xuICAgIFs5LCAwXSxcbiAgICBbOSwgMV0sXG4gICAgWzksIDJdLFxuICAgIFs5LCAzXSxcbiAgICBbOSwgNF1cbiAgXSxcbiAgYmF0dGxlc2hpcDogW1xuICAgIFs1LCA1XSxcbiAgICBbNiwgNV0sXG4gICAgWzcsIDVdLFxuICAgIFs4LCA1XVxuICBdLFxuICBjcnVpc2VyOiBbXG4gICAgWzAsIDZdLFxuICAgIFsxLCA2XSxcbiAgICBbMiwgNl1cbiAgXSxcbiAgc3VibWFyaW5lOiBbXG4gICAgWzMsIDhdLFxuICAgIFs0LCA4XSxcbiAgICBbNSwgOF1cbiAgXSxcbiAgZGVzdHJveWVyOiBbXG4gICAgWzAsIDldLFxuICAgIFsxLCA5XVxuICBdXG59XG5cbmNvbnN0IGFpU2hpcENvb3Jkc1R3byA9IHtcbiAgY2FycmllcjogW1xuICAgIFswLCAwXSxcbiAgICBbMCwgMV0sXG4gICAgWzAsIDJdLFxuICAgIFswLCAzXSxcbiAgICBbMCwgNF1cbiAgXSxcbiAgYmF0dGxlc2hpcDogW1xuICAgIFs5LCA1XSxcbiAgICBbOSwgNl0sXG4gICAgWzksIDddLFxuICAgIFs5LCA4XVxuICBdLFxuICBjcnVpc2VyOiBbXG4gICAgWzIsIDJdLFxuICAgIFszLCAyXSxcbiAgICBbNCwgMl1cbiAgXSxcbiAgc3VibWFyaW5lOiBbXG4gICAgWzYsIDZdLFxuICAgIFs2LCA3XSxcbiAgICBbNiwgOF1cbiAgXSxcbiAgZGVzdHJveWVyOiBbXG4gICAgWzgsIDBdLFxuICAgIFs4LCAxXVxuICBdXG59XG5cbmNvbnN0IGFpU2hpcENvb3Jkc1RocmVlID0ge1xuICBjYXJyaWVyOiBbXG4gICAgWzUsIDBdLFxuICAgIFs1LCAxXSxcbiAgICBbNSwgMl0sXG4gICAgWzUsIDNdLFxuICAgIFs1LCA0XVxuICBdLFxuICBiYXR0bGVzaGlwOiBbXG4gICAgWzAsIDldLFxuICAgIFsxLCA5XSxcbiAgICBbMiwgOV0sXG4gICAgWzMsIDldXG4gIF0sXG4gIGNydWlzZXI6IFtcbiAgICBbNywgN10sXG4gICAgWzgsIDddLFxuICAgIFs5LCA3XVxuICBdLFxuICBzdWJtYXJpbmU6IFtcbiAgICBbMSwgMV0sXG4gICAgWzIsIDFdLFxuICAgIFszLCAxXVxuICBdLFxuICBkZXN0cm95ZXI6IFtcbiAgICBbNCwgNF0sXG4gICAgWzQsIDVdXG4gIF1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAvKiAxICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKiBBcHBseSBib3JkZXIgYm94IHRvIGVudGlyZSBkb2N1bWVudCAqL1xcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICAgKi9cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICAgKi9cXG5cXG5ociB7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAvKiAxICovXFxuICAgIGhlaWdodDogMDtcXG4gICAgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5wcmUge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5hIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gICAgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gICAqIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgICBmb250LXNpemU6IDc1JTtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICAgIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcblxcbmltZyB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmlucHV0IHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAvKiAxICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgLyogMiAqL1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBHaXZlIGlucHV0IGFuZCB0ZXh0IGFyZWEgY29uc2lzdGVudCBsb29rICovXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDRweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAtMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250OiBib2xkIDAuNmVtIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgLyogYmFja2dyb3VuZDogIzAwMDtcXG4gICAgY29sb3I6ICNmZmY7ICovXFxufVxcblxcbi8qIEdldHMgcmlkIG9mIGRlZmF1bHQgc2VhcmNoIHRvIHJlbW92ZSByZXN0cmljdGlvbnMgKi9cXG5pbnB1dFt0eXBlPSdzZWFyY2gnXSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qIEZpeCBmb3IgaW5jb25zaXN0ZW50IGRpc3BsYXkgb2YgY2xlYXIgXFxcInhcXFwiIGljb24gaW4gc2VhcmNoIGlucHV0cyBhY3Jvc3MgZGlmZmVyZW50IGJyb3dzZXJzLiBcXG4gICwgdGhpcyBjb2RlIHJlbW92ZXMgdGhlIGljb24gaW4gRWRnZSBhbmQgQ2hyb21lIHdoZW4gdGhlIGlucHV0IGxvc2VzIGZvY3VzLCB3aGlsZSBrZWVwaW5nIGl0IHZpc2libGUgaW4gU2FmYXJpLiAqL1xcbmlucHV0W3R5cGU9J3NlYXJjaCddOm5vdCg6Zm9jdXMsIDphY3RpdmUpOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIC8qIDEgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT0nYnV0dG9uJ106Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9J3Jlc2V0J106Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9J3N1Ym1pdCddOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gICAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT0nYnV0dG9uJ106LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9J3Jlc2V0J106LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9J3N1Ym1pdCddOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmZpZWxkc2V0IHtcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmxlZ2VuZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIDEgKi9cXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIC8qIDIgKi9cXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIC8qIDEgKi9cXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIDMgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICAgKi9cXG5cXG5wcm9ncmVzcyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gICAqL1xcblxcbnRleHRhcmVhIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5bdHlwZT0nY2hlY2tib3gnXSxcXG5bdHlwZT0ncmFkaW8nXSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIDEgKi9cXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAgICovXFxuXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAgICovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAgIC8qIDEgKi9cXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICAgKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gICAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gICAgLyogMSAqL1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICovXFxuXFxuZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gICAqL1xcblxcbnRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gICAqL1xcblxcbltoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLDhCQUE4QjtJQUM5QixNQUFNO0FBQ1Y7O0FBRUEsd0NBQXdDO0FBQ3hDO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOzs7SUFHSTs7QUFFSjtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7O0lBR0k7O0FBRUo7SUFDSSx1QkFBdUI7SUFDdkIsTUFBTTtJQUNOLFNBQVM7SUFDVCxNQUFNO0lBQ04saUJBQWlCO0lBQ2pCLE1BQU07QUFDVjs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSxpQ0FBaUM7SUFDakMsTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0FBQ1Y7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSxtQkFBbUI7SUFDbkIsTUFBTTtJQUNOLDBCQUEwQjtJQUMxQixNQUFNO0lBQ04saUNBQWlDO0lBQ2pDLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7OztJQUdJOztBQUVKOzs7SUFHSSxpQ0FBaUM7SUFDakMsTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0FBQ1Y7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOzs7SUFHSTs7QUFFSjs7SUFFSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7O0lBR0k7O0FBRUo7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7Ozs7O0lBS0ksb0JBQW9CO0lBQ3BCLE1BQU07SUFDTixlQUFlO0lBQ2YsTUFBTTtJQUNOLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sU0FBUztJQUNULE1BQU07SUFDTixVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBLDZDQUE2QztBQUM3Qzs7SUFFSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBOztJQUVJLGFBQWE7SUFDYjtrQkFDYztBQUNsQjs7QUFFQSxzREFBc0Q7QUFDdEQ7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7bUhBQ21IO0FBQ25IO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7O0lBR0k7O0FBRUo7O0lBRUksTUFBTTtJQUNOLGlCQUFpQjtBQUNyQjs7QUFFQTs7O0lBR0k7O0FBRUo7O0lBRUksTUFBTTtJQUNOLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSTs7QUFFSjs7OztJQUlJLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSTs7QUFFSjs7OztJQUlJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUk7O0FBRUo7Ozs7SUFJSSw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7Ozs7O0lBS0k7O0FBRUo7SUFDSSxzQkFBc0I7SUFDdEIsTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0lBQ04sY0FBYztJQUNkLE1BQU07SUFDTixlQUFlO0lBQ2YsTUFBTTtJQUNOLFVBQVU7SUFDVixNQUFNO0lBQ04sbUJBQW1CO0lBQ25CLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7OztJQUdJOztBQUVKOztJQUVJLHNCQUFzQjtJQUN0QixNQUFNO0lBQ04sWUFBWTtJQUNaLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSTs7QUFFSjtJQUNJLDZCQUE2QjtJQUM3QixNQUFNO0lBQ04sb0JBQW9CO0lBQ3BCLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSwwQkFBMEI7SUFDMUIsTUFBTTtJQUNOLGFBQWE7SUFDYixNQUFNO0FBQ1Y7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLyogMSAqL1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyogQXBwbHkgYm9yZGVyIGJveCB0byBlbnRpcmUgZG9jdW1lbnQgKi9cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAgICovXFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAgICovXFxuXFxuaHIge1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxucHJlIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAvKiAxICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAvKiAyICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICAgKiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gICAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5pbnB1dCB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIC8qIDIgKi9cXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogR2l2ZSBpbnB1dCBhbmQgdGV4dCBhcmVhIGNvbnNpc3RlbnQgbG9vayAqL1xcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweCAwIDAgLTEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udDogYm9sZCAwLjZlbSBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIC8qIGJhY2tncm91bmQ6ICMwMDA7XFxuICAgIGNvbG9yOiAjZmZmOyAqL1xcbn1cXG5cXG4vKiBHZXRzIHJpZCBvZiBkZWZhdWx0IHNlYXJjaCB0byByZW1vdmUgcmVzdHJpY3Rpb25zICovXFxuaW5wdXRbdHlwZT0nc2VhcmNoJ10ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKiBGaXggZm9yIGluY29uc2lzdGVudCBkaXNwbGF5IG9mIGNsZWFyIFxcXCJ4XFxcIiBpY29uIGluIHNlYXJjaCBpbnB1dHMgYWNyb3NzIGRpZmZlcmVudCBicm93c2Vycy4gXFxuICAsIHRoaXMgY29kZSByZW1vdmVzIHRoZSBpY29uIGluIEVkZ2UgYW5kIENocm9tZSB3aGVuIHRoZSBpbnB1dCBsb3NlcyBmb2N1cywgd2hpbGUga2VlcGluZyBpdCB2aXNpYmxlIGluIFNhZmFyaS4gKi9cXG5pbnB1dFt0eXBlPSdzZWFyY2gnXTpub3QoOmZvY3VzLCA6YWN0aXZlKTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgICAvKiAxICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG46Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9J2J1dHRvbiddOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPSdyZXNldCddOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPSdzdWJtaXQnXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICAgKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9J2J1dHRvbiddOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPSdyZXNldCddOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPSdzdWJtaXQnXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5maWVsZHNldCB7XFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5sZWdlbmQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiAxICovXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAvKiAyICovXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICAvKiAxICovXFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiAzICovXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAgICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICAgKi9cXG5cXG50ZXh0YXJlYSB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAgICovXFxuXFxuW3R5cGU9J2NoZWNrYm94J10sXFxuW3R5cGU9J3JhZGlvJ10ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiAxICovXFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gICAqL1xcblxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gICAqL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgICAvKiAxICovXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAgICovXFxuXFxuW3R5cGU9J3NlYXJjaCddOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICAgKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gICAqL1xcblxcbmRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICAgKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5baGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJhZGlhbCAjMzMzO1xcbn1cXG5cXG4udG9wQmFyQ29udGFpbmVyIHtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibGFjazsgKi9cXG4gIHdpZHRoOiA3MHZ3O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgbWFyZ2luLXRvcDogOCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAjN2E3YTdhNDI7XFxufVxcblxcbi50b3BCYXJDb250YWluZXIgcCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5wLmludmlzaWJsZSB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5idXR0b24uc2hpcENlbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuI0FJQm9hcmQgYnV0dG9uLFxcbiNwbGF5ZXJCb2FyZCBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuLnBsYXllckJvYXJkQ29udGFpbmVyLFxcbi5haUJvYXJkQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbiNib2FyZHNDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMnB4O1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrICovXFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDM4dncpKTtcXG4gIHdpZHRoOiA4M3Z3O1xcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcXG59XFxuXFxuLm9yaWVudGF0aW9uVG9nZ2xlQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI2JvYXJkc0NvbnRhaW5lciBwIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcblxcbiNwbGF5ZXJCb2FyZCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XFxufVxcblxcbiNBSUJvYXJkIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG59XFxuXFxuYnV0dG9uLmJvYXJkQ2VsbCB7XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbmJ1dHRvbi5zaGlwQ2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJ1dHRvbi5zdW5rU2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE0LCAyMSwgMjEpO1xcbn1cXG5cXG5idXR0b24uc2hpcEhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDk0LCAyMik7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogODEycHgpIHtcXG4gICNib2FyZHNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICAvKiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzI1cHgsIDM4dncpKTtcXG4gICAgd2lkdGg6IDg2dnc7XFxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICB9XFxuXFxuICAjQUlCb2FyZCB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MnB4KTtcXG4gIH1cXG5cXG4gICNwbGF5ZXJCb2FyZCB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MnB4KTtcXG4gIH1cXG5cXG4gIC50b3BCYXJDb250YWluZXIge1xcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxuICAgIHdpZHRoOiA4NHZ3O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNiU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggIzdhN2E3YTQyO1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICB9XFxuXFxuICAudG9wQmFyQ29udGFpbmVyIHAge1xcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgI2JvYXJkc0NvbnRhaW5lciBwIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiLFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw2Q0FBNkM7QUFDL0M7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsYUFBYTtFQUNiLHdCQUF3QjtFQUN4Qiw0REFBNEQ7RUFDNUQsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7OztBQUdBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsNERBQTREO0lBQzVELFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixPQUFPO0lBQ1AsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLGlDQUFpQztJQUNqQyxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGlCQUFpQjtFQUNuQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJhZGlhbCAjMzMzO1xcbn1cXG5cXG4udG9wQmFyQ29udGFpbmVyIHtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibGFjazsgKi9cXG4gIHdpZHRoOiA3MHZ3O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgbWFyZ2luLXRvcDogOCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAjN2E3YTdhNDI7XFxufVxcblxcbi50b3BCYXJDb250YWluZXIgcCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5wLmludmlzaWJsZSB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5idXR0b24uc2hpcENlbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuI0FJQm9hcmQgYnV0dG9uLFxcbiNwbGF5ZXJCb2FyZCBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuLnBsYXllckJvYXJkQ29udGFpbmVyLFxcbi5haUJvYXJkQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbiNib2FyZHNDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMnB4O1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrICovXFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDM4dncpKTtcXG4gIHdpZHRoOiA4M3Z3O1xcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcXG59XFxuXFxuLm9yaWVudGF0aW9uVG9nZ2xlQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI2JvYXJkc0NvbnRhaW5lciBwIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcblxcbiNwbGF5ZXJCb2FyZCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XFxufVxcblxcbiNBSUJvYXJkIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG59XFxuXFxuYnV0dG9uLmJvYXJkQ2VsbCB7XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbmJ1dHRvbi5zaGlwQ2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJ1dHRvbi5zdW5rU2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE0LCAyMSwgMjEpO1xcbn1cXG5cXG5idXR0b24uc2hpcEhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDk0LCAyMik7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogODEycHgpIHtcXG4gICNib2FyZHNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICAvKiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzI1cHgsIDM4dncpKTtcXG4gICAgd2lkdGg6IDg2dnc7XFxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICB9XFxuXFxuICAjQUlCb2FyZCB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MnB4KTtcXG4gIH1cXG5cXG4gICNwbGF5ZXJCb2FyZCB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MnB4KTtcXG4gIH1cXG5cXG4gIC50b3BCYXJDb250YWluZXIge1xcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxuICAgIHdpZHRoOiA4NHZ3O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNiU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggIzdhN2E3YTQyO1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICB9XFxuXFxuICAudG9wQmFyQ29udGFpbmVyIHAge1xcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgI2JvYXJkc0NvbnRhaW5lciBwIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1xuICBwcmVHYW1lU2V0dXBcbn0gZnJvbSAnLi9jb250cm9sbGVycy9kaXNwbGF5Q29udHJvbGxlcidcblxuaW1wb3J0ICcuL3N0eWxlcy9ub3JtYWxpemUuY3NzJ1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnXG5cbnByZUdhbWVTZXR1cCgpXG4iXSwibmFtZXMiOlsiZGVsYXkiLCJnYW1lQ29udHJvbGxlciIsImdhbWUiLCJwcmVHYW1lU2V0dXAiLCJyZW5kZXJQbGF5ZXJCb2FyZCIsInBsYWNlQ2FycmllclNoaXAiLCJyZW5kZXJBSUJvYXJkIiwiZGlzcGxheUNvbnRyb2xsZXIiLCJ0b3BCYXJDb250YWluZXJQYXJhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJwbGFjZUFJU2hpcHMiLCJhaUJvYXJkRGl2IiwiZ2V0RWxlbWVudEJ5SWQiLCJwbGF5ZXJzIiwiZ2V0UGxheWVycyIsImFjdGl2ZVBsYXllciIsImdldEN1cnJlbnRQbGF5ZXIiLCJodW1hbiIsIm5ld01lc3NhZ2UiLCJ0cmFuc2l0aW9uVGV4dENoYW5nZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0Iiwib25jZSIsInRvcEJhclBhcmEiLCJodW1hbkJvYXJkRGl2Iiwib3JpZW50YXRpb25CdG5WYWx1ZXMiLCJjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0biIsImhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMiLCJvcmllbnRhdGlvblRvZ2dsZUJ0biIsImNvbnRyb2xsZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJlIiwiaGFuZGxlQ2FycmllclNoaXBQbGFjZW1lbnQiLCJzaWduYWwiLCJwbGFjZUJhdHRsZVNoaXAiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQmF0dGxlU2hpcFBsYWNlbWVudCIsInBsYWNlQ3J1aXNlciIsImhhbmRsZUNydWlzZXJTaGlwUGxhY2VtZW50IiwicGxhY2VTdWJtYXJpbmUiLCJoYW5kbGVTdWJtYXJpbmVTaGlwUGxhY2VtZW50IiwicGxhY2VEZXN0cm95ZXIiLCJoYW5kbGVEZXN0cm95ZXJTaGlwUGxhY2VtZW50IiwicGxheWVyQm9hcmQiLCJnZXRIdW1hbkJvYXJkIiwicGxheWVyQm9hcmREaXYiLCJpbm5lckhUTUwiLCJpIiwibGVuZ3RoIiwiY3VycmVudFJvdyIsImoiLCJidXR0b24iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsInJvdyIsImNvbHVtbiIsImFwcGVuZENoaWxkIiwiYWlCb2FyZCIsImdldEFJQm9hcmQiLCJ1cGRhdGVIdW1hbkJvYXJkIiwiaHVtYW5Cb2FyZCIsIm1pc3NlZFNob3RzIiwiZ2V0SHVtYW5Cb2FyZE9iaiIsImdldE1pc3NlZFNob3RzIiwic3VjY2Vzc2Z1bFNob3RzIiwiZ2V0U3VjY2Vzc2Z1bFNob3RzIiwiYWxsRG9tTm9kZXMiLCJBcnJheSIsImZyb20iLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsInNob3QiLCJ0YXJnZXROb2RlIiwicmVtb3ZlIiwidXBkYXRlQUlCb2FyZCIsImdldEFJQm9hcmRPYmoiLCJob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uIiwic2VsZWN0ZWRSb3ciLCJ0YXJnZXQiLCJzZWxlY3RlZENvbHVtbiIsImNvb3JkaW5hdGUiLCJjYXJyaWVyUGxhY2VkIiwicGxhY2VDYXJyaWVyT25Cb2FyZCIsImFib3J0IiwicmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0biIsImJhdHRsZXNoaXBQbGFjZWQiLCJwbGFjZUJhdHRsZXNoaXBPbkJvYXJkIiwiY3J1aXNlclBsYWNlZCIsInBsYWNlQ3J1aXNlck9uQm9hcmQiLCJzdWJtYXJpbmVQbGFjZWQiLCJwbGFjZVN1Ym1hcmluZU9uQm9hcmQiLCJkZXN0cm95ZXJQbGFjZWQiLCJwbGFjZURlc3Ryb3llck9uQm9hcmQiLCJzaGlwVHlwZSIsImJvYXJkRE9NQ2VsbHNBcnIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0SG9yaXpvbnRhbERPTUNvb3JkcyIsImdldFZlcnRpY2FsRE9NQ29vcmRzIiwicGxhY2VDcnVpc2VyU2hpcCIsInBsYWNlU3VibWFyaW5lU2hpcCIsInBsYWNlRGVzdHJveWVyU2hpcCIsInN0YXJ0aW5nQ29sdW1uIiwiTnVtYmVyIiwic2hpcExlbmd0aCIsImRvbUNvb3JkaW5hdGUiLCJ0YXJnZXRET01CdG4iLCJmaW5kU2hpcERPTUJ0biIsInN0YXJ0aW5nUm93IiwiZG9tQ2VsbFJvdyIsImRvbUNlbGxDb2x1bW4iLCJhbHJlYWR5QXR0YWNrZWQiLCJwcmV2ZW50U2FtZUF0dGFjayIsInBsYXlSb3VuZCIsImh1bWFuTW92ZVN1Y2Nlc3NmdWwiLCJnZXRMYXN0SHVtYW5Nb3ZlU3VjY2Vzc2Z1bCIsInNoaXBJc1N1bmsiLCJpc1NoaXBTdW5rIiwic2hpcFN1bmtSZXN1bHQiLCJ0YXJnZXRTaGlwT2JqIiwibGFzdFN1Y2Nlc3NmdWxNb3ZlIiwic3Vua1NoaXBDb29yZHMiLCJnZXRTdW5rU2hpcENvb3JkcyIsImRpc3BsYXlTdW5rU2hpcCIsImRpc3BsYXlTdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSIsImRpc3BsYXlVbnN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlIiwiaHVtYW5XaW5zIiwiY2hlY2tGb3JXaW4iLCJoYW5kbGVXaW5DaGVjayIsImhhbmRsZUFJTW92ZSIsImVuZW15QXR0YWNraW5nTXNnIiwiYWlNb3ZlU3VjY2Vzc2Z1bCIsImdldExhc3RBSU1vdmVTdWNjZXNzZnVsIiwiYWlXaW5zIiwiYXR0YWNrVGhlRW5lbXlNc2ciLCJhbm5vdW5jZVdpbm5lciIsIndpbm5lciIsIndpbm5lck5hbWUiLCJnZXROYW1lIiwicGxheUFnYWluIiwidG9wQmFyRGl2IiwicGxheUFnYWluQnRuIiwic3RhcnROZXdHYW1lIiwicmVtb3ZlQ2hpbGQiLCJwcmV2aW91c09yaWVudGF0aW9uQnRuIiwicGxheWVyIiwiYXR0YWNrQW5kSGl0TXNnIiwic2V0VGltZW91dCIsImVuZW15SGl0TXNnIiwidW5zdWNjZXNzZnVsQXR0YWNrTXNnIiwidW5zdWNjZXNzZnVsRW5lbXlBdHRhY2tNc2ciLCJhaURPTUNlbGxzQXJyIiwiZG9tQ29vcmQiLCJodW1hbkRPTUNlbGxzQXJyIiwid2luQ2hlY2siLCJib2FyZERpdiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNldEdhbWVTdGF0ZSIsImRvbUVsZW1lbnQiLCJHYW1lYm9hcmQiLCJQbGF5ZXIiLCJhcnJheXNBcmVFcXVhbCIsInJldHVyblJhbmRvbUFJQm9hcmQiLCJjcmVhdGVHYW1lQm9hcmQiLCJjYXJyaWVyQXJyIiwiZGV0ZXJtaW5lQ2FycmllckFyckNvb3JkcyIsInNoaXBQbGFjZWQiLCJwbGFjZVNoaXAiLCJwdXNoIiwiY29vcmQiLCJ0b1N0cmluZyIsImJhdHRsZXNoaXBBcnIiLCJkZXRlcm1pbmVCYXR0bGVzaGlwQXJyQ29vcmRzIiwiY3J1aXNlckFyciIsImRldGVybWluZUNydWlzZXJBcnJDb29yZHMiLCJzdWJtYXJpbmVBcnIiLCJkZXRlcm1pbmVTdWJtYXJpbmVBcnJDb29yZHMiLCJkZXN0cm95ZXJBcnIiLCJkZXRlcm1pbmVEZXN0cm95ZXJBcnJDb29yZHMiLCJwbGFjZVNoaXBzIiwiaHVtYW5QbGF5ZXIiLCJhaVBsYXllciIsIkFJIiwiY3VycmVudFBsYXllciIsInJlY2VpdmVBdHRhY2siLCJuZXh0TW92ZSIsImNvbXB1dGVyc05leHRNb3ZlIiwicmVtb3ZlTGFzdEFJTW92ZSIsInN3aXRjaFBsYXllciIsImF2YWlsYWJsZU1vdmVzIiwiZ2V0QUlBdmFpbGFibGVNb3ZlcyIsImxhc3RBSU1vdmVTdWNjZXNzZnVsIiwiYWRqYWNlbnRTbG90cyIsImdldEFkamFjZW50U2xvdHMiLCJhZGRBZGphY2VudFNsb3RzVG9RdWV1ZSIsImdldEFkamFjZW50UXVldWVTbG90IiwicmFuZG9tTW92ZSIsIm1ha2VSYW5kb21Nb3ZlIiwiYWxsU2hpcHNTdW5rIiwibGFzdFN1Y2Nlc3NmdWxIdW1hbk1vdmUiLCJnZXRMYXN0U3VjY2Vzc2Z1bE1vdmUiLCJ1bmRlZmluZWQiLCJnYW1lQm9hcmQiLCJnZXRCb2FyZCIsImhhc0JlZW5TdW5rIiwibGFzdFN1Y2Nlc3NmdWxBSU1vdmUiLCJzdW5rU2hpcExlbmd0aCIsImdldExlbmd0aCIsInJlbWFpbmluZ1NoaXBDb29yZHMiLCJzaGlwQ29vcmRzIiwic2hpcE9yaWVudGF0aW9uIiwic2hpcERpcmVjdGlvbiIsImh1bWFuU2hpcENvb3JkcyIsImdldEh1bWFuU3Vua1NoaXBDb29yZHMiLCJhaVNoaXBDb29yZHMiLCJnZXRBSVN1bmtTaGlwQ29vcmRzIiwiYWRqYWNlbnRTbG90Iiwic2hpcE9iaiIsImRldGVybWluZVNoaXBPcmllbnRhdGlvbiIsImRldGVybWluZVNoaXBEaXJlY3Rpb24iLCJuZXh0U2hpcENvb3JkIiwic3RhcnRpbmdDb29yZFJvdyIsIm5leHRWZXJ0aWNhbENvb3JkUm93Iiwic3RhcnRpbmdDb29yZENvbHVtbiIsIm5leHRIb3Jpem9udGFsQ29sdW1uIiwiY2xlYXJHYW1lQm9hcmQiLCJib2FyZCIsImNvb3JkaW5hdGVzT2JqIiwic2hpcENvb3JkaW5hdGVzQXJyIiwiT2JqZWN0IiwidmFsdWVzIiwic2hpcENvb3JkaW5hdGVzIiwiU2hpcCIsInNoaXBPYmplY3RzIiwiYWlBdmFpbGFibGVNb3ZlcyIsImFkamFjZW50U2xvdHNRdWV1ZSIsInJvd3MiLCJjb2x1bW5zIiwibGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwiLCJ2YWxpZGF0ZUNvb3JkaW5hdGVzIiwiY29vcmRpbmF0ZXMiLCJ2YWxpZENvb3JkaW5hdGVzIiwiY2hlY2tTZWxmT3ZlcmxhcCIsImNvb3JkaW5hdGVzT3ZlcmxhcCIsInByZXZDb29yZGluYXRlIiwiaW5kZXgiLCJjaGVja092ZXJsYXBXaXRoT3RoZXJTaGlwcyIsInNoaXBzT3ZlcmxhcCIsImJvYXJkQ2VsbCIsImxlZ2FsQ29vcmRpbmF0ZXMiLCJvdmVybGFwcGluZ0Nvb3JkaW5hdGVzIiwic2hpcE92ZXJsYXBwaW5nIiwic2hpcE9iamVjdCIsImhpdCIsInJlbW92ZUFkamFjZW50U2xvdCIsInRhcmdldENvb3JkaW5hdGVzIiwiYWRqYWNlbnRRdWV1ZSIsIlNldCIsInNsb3QiLCJmaWx0ZXIiLCJldmVyeVNoaXBTYW5rIiwibW92ZSIsInNwbGljZSIsImdldFNoaXBPYmplY3RzIiwiZ2V0QWRqYWNlbnRTbG90c1F1ZXVlIiwicG9wIiwiYXQiLCJuYW1lIiwiaXNBSSIsImF2YWlsYWJsZU1vdmVzTGVuZ3RoIiwicmFuZG9tQXJySW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21Db29yZGluYXRlIiwicmV0cmlldmVBZGphY2VudFNsb3RzIiwibGVnYWxBZGphY2VudFNsb3RzIiwicmVtb3ZlSWxsZWdhbEFkamFjZW50U2xvdHMiLCJnZXRDZWxsQWJvdmUiLCJuZXdBcnIiLCJuZXdSb3ciLCJnZXRDZWxsQmVsb3ciLCJnZXRDZWxsVG9SaWdodCIsIm5ld0NvbHVtbiIsImdldENlbGxUb0xlZnQiLCJsYXN0U3VjY2Vzc2Z1bE1vdmVWYWx1ZSIsImFkamFjZW50U2xvdHNBcnIiLCJwcmV2ZW50UHJldmlvdXNTaG90VG9RdWV1ZSIsInNsb3RzIiwiYWxsUHJldmlvdXNBdHRhY2tzIiwiY29uY2F0IiwicHJldmlvdXNBdHRhY2tzIiwiZmlsdGVyZWRTbG90cyIsImhhcyIsIm51bU9mSGl0cyIsImlzU3VuayIsImdldE51bU9mSGl0cyIsImFycjEiLCJhcnIyIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFpQm9hcmRzIiwiYWlTaGlwQ29vcmRzT25lIiwiYWlTaGlwQ29vcmRzVHdvIiwiYWlTaGlwQ29vcmRzVGhyZWUiLCJyYW5kb21JbmRleCIsImNob3NlbkFJQm9hcmQiLCJjYXJyaWVyIiwiYmF0dGxlc2hpcCIsImNydWlzZXIiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiXSwic291cmNlUm9vdCI6IiJ9