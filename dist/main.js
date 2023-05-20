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
      if (+targetNode.dataset.column === column && +targetNode.dataset.row === row) {
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
const handlePlayerSelectionEvt = async (e, controller) => {
  const selectedRow = +e.target.dataset.row;
  const selectedColumn = +e.target.dataset.column;
  const aiBoardDiv = document.getElementById('AIBoard');
  if (selectedColumn === 'undefined' || selectedRow === 'undefined') {
    return handlePlayerSelectionEvt;
  }
  controller.abort();
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
    displaySunkShipMessage('human');
  } else if (!shipSunkResult) {
    humanMoveSuccessful ? displaySuccessfulAttackMessage('human') : displayUnsuccessfulAttackMessage('human');
  }
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
  if (shipSunkResult === true) {
    displaySunkShipMessage('computer');
  } else if (!shipSunkResult) {
    aiMoveSuccessful ? displaySuccessfulAttackMessage('computer') : displayUnsuccessfulAttackMessage('computer');
  }
  const aiWins = game.checkForWin();
  updateHumanBoard();
  await (0,_helpers_delay__WEBPACK_IMPORTED_MODULE_0__.delay)(2500);
  const attackTheEnemyMsg = 'Attack the enemies ships...';
  transitionTextChanges(attackTheEnemyMsg, topBarContainerPara);
  await (0,_helpers_delay__WEBPACK_IMPORTED_MODULE_0__.delay)(3500);
  handleWinCheck(aiWins, aiBoardDiv);
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n}\r\n\r\nheader {\r\n  background-color: darkblue;\r\n  color: rgb(236, 236, 236);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 80px;\r\n}\r\n\r\n.headerContainer {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  justify-content: center;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex: 1;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  background-color: radial #333;\r\n}\r\n\r\n.topBarContainer {\r\n  /* outline: 1px solid black; */\r\n  width: 70vw;\r\n  height: 80px;\r\n  margin-top: 8%;\r\n  display: flex;\r\n  gap: 10%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 12px 12px;\r\n  background-color: lightgray;\r\n  box-shadow: 0px 2px 1px #7a7a7a42;\r\n}\r\n\r\n.topBarContainer p {\r\n  align-items: center;\r\n  transition: opacity 0.5s ease-in-out;\r\n  font-size: 1.4rem;\r\n  opacity: 1;\r\n}\r\n\r\np.invisible {\r\n  transition: opacity 0.5s ease-in-out;\r\n  opacity: 0;\r\n}\r\n\r\nbutton.shipCell {\r\n  background-color: grey;\r\n  transition: background-color 0.2s ease-in-out;\r\n}\r\n\r\n#AIBoard button,\r\n#playerBoard button {\r\n  border-radius: 0;\r\n}\r\n\r\n.playerBoardContainer,\r\n.aiBoardContainer {\r\n  display: grid;\r\n}\r\n\r\n#boardsContainer {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 12px;\r\n  /* outline: 1px solid black */\r\n  padding: 12px;\r\n  display: grid;\r\n  grid-template-rows: none;\r\n  grid-template-columns: repeat(auto-fit, minmax(400px, 38vw));\r\n  width: 83vw;\r\n  margin-bottom: 14px;\r\n}\r\n\r\n.orientationToggleBtn {\r\n  background-color: #333;\r\n  color: white;\r\n  border-radius: 8px;\r\n  height: 70%;\r\n  width: 100px;\r\n  font-size: 1rem;\r\n}\r\n\r\n#boardsContainer p {\r\n  justify-self: center;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n#playerBoard {\r\n  outline: 1px solid black;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 50px);\r\n}\r\n\r\n#AIBoard {\r\n  outline: 1px solid black;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 50px);\r\n}\r\n\r\nbutton.boardCell {\r\n  border-radius: 0px;\r\n  background-color: lightgray;\r\n  color: black;\r\n}\r\n\r\nbutton.shipCell {\r\n  background-color: #333;\r\n  border: 1px solid black;\r\n}\r\n\r\nbutton.shipHit {\r\n  background-color: rgb(114, 21, 21);\r\n  transition: background-color 0.3s ease-in;\r\n}\r\n\r\n@media only screen and (max-device-width: 812px) {\r\n  #boardsContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 16px;\r\n    /*  outline: 1px solid black; */\r\n    padding: 12px;\r\n    display: grid;\r\n    grid-template-rows: none;\r\n    grid-template-columns: repeat(auto-fit, minmax(325px, 38vw));\r\n    width: 86vw;\r\n    margin-bottom: 14px;\r\n    margin-bottom: 24px;\r\n  }\r\n\r\n  #AIBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 42px);\r\n  }\r\n\r\n  #playerBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 42px);\r\n  }\r\n\r\n  .topBarContainer {\r\n    /* outline: 1px solid black; */\r\n    width: 84vw;\r\n    height: 80px;\r\n    margin-top: 24px;\r\n    display: flex;\r\n    gap: 6%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: lightgrey;\r\n    border-radius: 12px 12px;\r\n    box-shadow: 0px 2px 1px #7a7a7a42;\r\n    padding: 6px;\r\n  }\r\n\r\n  .topBarContainer p {\r\n    /* outline: 1px solid black; */\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  #boardsContainer p {\r\n    justify-self: center;\r\n    font-size: 1.1rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,OAAO;EACP,sBAAsB;EACtB,SAAS;EACT,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;EAC9B,WAAW;EACX,YAAY;EACZ,cAAc;EACd,aAAa;EACb,QAAQ;EACR,uBAAuB;EACvB,mBAAmB;EACnB,wBAAwB;EACxB,2BAA2B;EAC3B,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;EACnB,oCAAoC;EACpC,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,oCAAoC;EACpC,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,6CAA6C;AAC/C;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,6BAA6B;EAC7B,aAAa;EACb,aAAa;EACb,wBAAwB;EACxB,4DAA4D;EAC5D,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,sCAAsC;EACtC,oCAAoC;AACtC;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,sCAAsC;EACtC,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,2BAA2B;EAC3B,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,kCAAkC;EAClC,yCAAyC;AAC3C;;AAEA;EACE;IACE,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,+BAA+B;IAC/B,aAAa;IACb,aAAa;IACb,wBAAwB;IACxB,4DAA4D;IAC5D,WAAW;IACX,mBAAmB;IACnB,mBAAmB;EACrB;;EAEA;IACE,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,oCAAoC;EACtC;;EAEA;IACE,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,oCAAoC;EACtC;;EAEA;IACE,8BAA8B;IAC9B,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,OAAO;IACP,uBAAuB;IACvB,mBAAmB;IACnB,2BAA2B;IAC3B,wBAAwB;IACxB,iCAAiC;IACjC,YAAY;EACd;;EAEA;IACE,8BAA8B;IAC9B,iBAAiB;EACnB;;EAEA;IACE,oBAAoB;IACpB,iBAAiB;EACnB;AACF","sourcesContent":["body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n}\r\n\r\nheader {\r\n  background-color: darkblue;\r\n  color: rgb(236, 236, 236);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 80px;\r\n}\r\n\r\n.headerContainer {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  justify-content: center;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex: 1;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  background-color: radial #333;\r\n}\r\n\r\n.topBarContainer {\r\n  /* outline: 1px solid black; */\r\n  width: 70vw;\r\n  height: 80px;\r\n  margin-top: 8%;\r\n  display: flex;\r\n  gap: 10%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 12px 12px;\r\n  background-color: lightgray;\r\n  box-shadow: 0px 2px 1px #7a7a7a42;\r\n}\r\n\r\n.topBarContainer p {\r\n  align-items: center;\r\n  transition: opacity 0.5s ease-in-out;\r\n  font-size: 1.4rem;\r\n  opacity: 1;\r\n}\r\n\r\np.invisible {\r\n  transition: opacity 0.5s ease-in-out;\r\n  opacity: 0;\r\n}\r\n\r\nbutton.shipCell {\r\n  background-color: grey;\r\n  transition: background-color 0.2s ease-in-out;\r\n}\r\n\r\n#AIBoard button,\r\n#playerBoard button {\r\n  border-radius: 0;\r\n}\r\n\r\n.playerBoardContainer,\r\n.aiBoardContainer {\r\n  display: grid;\r\n}\r\n\r\n#boardsContainer {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 12px;\r\n  /* outline: 1px solid black */\r\n  padding: 12px;\r\n  display: grid;\r\n  grid-template-rows: none;\r\n  grid-template-columns: repeat(auto-fit, minmax(400px, 38vw));\r\n  width: 83vw;\r\n  margin-bottom: 14px;\r\n}\r\n\r\n.orientationToggleBtn {\r\n  background-color: #333;\r\n  color: white;\r\n  border-radius: 8px;\r\n  height: 70%;\r\n  width: 100px;\r\n  font-size: 1rem;\r\n}\r\n\r\n#boardsContainer p {\r\n  justify-self: center;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n#playerBoard {\r\n  outline: 1px solid black;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 50px);\r\n}\r\n\r\n#AIBoard {\r\n  outline: 1px solid black;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 50px);\r\n}\r\n\r\nbutton.boardCell {\r\n  border-radius: 0px;\r\n  background-color: lightgray;\r\n  color: black;\r\n}\r\n\r\nbutton.shipCell {\r\n  background-color: #333;\r\n  border: 1px solid black;\r\n}\r\n\r\nbutton.shipHit {\r\n  background-color: rgb(114, 21, 21);\r\n  transition: background-color 0.3s ease-in;\r\n}\r\n\r\n@media only screen and (max-device-width: 812px) {\r\n  #boardsContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 16px;\r\n    /*  outline: 1px solid black; */\r\n    padding: 12px;\r\n    display: grid;\r\n    grid-template-rows: none;\r\n    grid-template-columns: repeat(auto-fit, minmax(325px, 38vw));\r\n    width: 86vw;\r\n    margin-bottom: 14px;\r\n    margin-bottom: 24px;\r\n  }\r\n\r\n  #AIBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 42px);\r\n  }\r\n\r\n  #playerBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 42px);\r\n  }\r\n\r\n  .topBarContainer {\r\n    /* outline: 1px solid black; */\r\n    width: 84vw;\r\n    height: 80px;\r\n    margin-top: 24px;\r\n    display: flex;\r\n    gap: 6%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: lightgrey;\r\n    border-radius: 12px 12px;\r\n    box-shadow: 0px 2px 1px #7a7a7a42;\r\n    padding: 6px;\r\n  }\r\n\r\n  .topBarContainer p {\r\n    /* outline: 1px solid black; */\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  #boardsContainer p {\r\n    justify-self: center;\r\n    font-size: 1.1rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFVBQVUsRUFBRSxDQUNWLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLE9BQU8sRUFBRSxDQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFNBQVMsRUFBRSxDQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFNBQVMsRUFBRSxDQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVWLENBQUM7QUFFRCxNQUFNUixlQUFlLEdBQUc7RUFDdEJJLE9BQU8sRUFBRSxDQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFVBQVUsRUFBRSxDQUNWLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLE9BQU8sRUFBRSxDQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFNBQVMsRUFBRSxDQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFNBQVMsRUFBRSxDQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVWLENBQUM7QUFFRCxNQUFNUCxpQkFBaUIsR0FBRztFQUN4QkcsT0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7RUFDREMsVUFBVSxFQUFFLENBQ1YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7RUFDREMsT0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7RUFDREMsU0FBUyxFQUFFLENBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7RUFDREMsU0FBUyxFQUFFLENBQ1Qs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QVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLEtBQUssWUFBWSxPQUFPLFNBQVMsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsS0FBSyxNQUFNLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sU0FBUyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE9BQU8sT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLDJXQUEyVywwQkFBMEIsc0RB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bGVycy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9jb250cm9sbGVycy9nYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9mYWN0b3JpZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2ZhY3Rvcmllcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvZmFjdG9yaWVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvaGVscGVycy9hcnJheXNBcmVFcXVhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9oZWxwZXJzL2RlbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2hlbHBlcnMvcm90YXRlQUlCb2FyZHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzcz80M2Y0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlbGF5IH0gZnJvbSAnLi4vaGVscGVycy9kZWxheSdcclxuaW1wb3J0IHsgZ2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuL2dhbWVDb250cm9sbGVyJ1xyXG5cclxuY29uc3QgZ2FtZSA9IGdhbWVDb250cm9sbGVyKClcclxuXHJcbmNvbnN0IHByZUdhbWVTZXR1cCA9ICgpID0+IHtcclxuICByZW5kZXJQbGF5ZXJCb2FyZCgpXHJcbiAgcGxhY2VDYXJyaWVyU2hpcCgpXHJcbiAgcmVuZGVyQUlCb2FyZCgpXHJcbn1cclxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gdGhpcyBpcyB3aGVyZSB0aGUgc2hpcCBwbGFjZW1lbnQgd2lsbCBoYXBwZW4gZm9yIGh1bWFuIHBsYXllclxyXG4gIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgdG9wQmFyQ29udGFpbmVyUGFyYS50ZXh0Q29udGVudCA9ICdFbmVubXkgaXMgcGxhY2luZyB0aGVpciBzaGlwcy4uLidcclxuICBhd2FpdCBkZWxheSgxNTAwKVxyXG4gIGdhbWUucGxhY2VBSVNoaXBzKClcclxuICByZW5kZXJBSUJvYXJkKClcclxuICB0b3BCYXJDb250YWluZXJQYXJhLnRleHRDb250ZW50ID0gJydcclxuICBjb25zdCBhaUJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FJQm9hcmQnKVxyXG4gIGNvbnN0IHBsYXllcnMgPSBnYW1lLmdldFBsYXllcnMoKVxyXG4gIGNvbnN0IGFjdGl2ZVBsYXllciA9IGdhbWUuZ2V0Q3VycmVudFBsYXllcigpXHJcblxyXG4gIGlmIChhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnMuaHVtYW4pIHtcclxuICAgIGNvbnN0IG5ld01lc3NhZ2UgPSAnQXR0YWNrIHRoZSBlbmVtaWVzIHNoaXBzISdcclxuICAgIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgICB0cmFuc2l0aW9uVGV4dENoYW5nZXMobmV3TWVzc2FnZSwgdG9wQmFyQ29udGFpbmVyUGFyYSlcclxuXHJcbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXHJcbiAgICBhaUJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdjbGljaycsXHJcbiAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0KGUsIGNvbnRyb2xsZXIpXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBwbGFjZUNhcnJpZXJTaGlwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIGNhcnJpZXIgc2hpcCdcclxuXHJcbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXHJcblxyXG4gIGNvbnN0IG9yaWVudGF0aW9uQnRuVmFsdWVzID0gY3JlYXRlT3JpZW50YXRpb25Ub2dnbGVCdG4oKVxyXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMF1cclxuICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZUJ0biA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzFdXHJcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gZmFsc2VcclxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnVmVydGljYWwnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxyXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJ1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcclxuICBodW1hbkJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAnY2xpY2snLFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgaGFuZGxlQ2FycmllclNoaXBQbGFjZW1lbnQoZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cywgY29udHJvbGxlcilcclxuICAgIH0sXHJcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxyXG4gIClcclxufVxyXG5cclxuY29uc3QgcGxhY2VCYXR0bGVTaGlwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIGJhdHRsZXNoaXAnXHJcblxyXG4gIGNvbnN0IGh1bWFuQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyQm9hcmQnKVxyXG5cclxuICBjb25zdCBvcmllbnRhdGlvbkJ0blZhbHVlcyA9IGNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuKClcclxuICBsZXQgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzBdXHJcbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBvcmllbnRhdGlvbkJ0blZhbHVlc1sxXVxyXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPT09IHRydWUpIHtcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IGZhbHNlXHJcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcclxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXHJcbiAgaHVtYW5Cb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgJ2NsaWNrJyxcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICdPcmllbnRhdGlvbiBzdGF0dXMgZ29pbmcgaW50byBwbGFjZW1lbnQ6JyArXHJcbiAgICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzXHJcbiAgICAgIClcclxuICAgICAgaGFuZGxlQmF0dGxlU2hpcFBsYWNlbWVudChlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzLCBjb250cm9sbGVyKVxyXG4gICAgfSxcclxuICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBwbGFjZUNydWlzZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgQ3J1aXNlcidcclxuXHJcbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXHJcblxyXG4gIGNvbnN0IG9yaWVudGF0aW9uQnRuVmFsdWVzID0gY3JlYXRlT3JpZW50YXRpb25Ub2dnbGVCdG4oKVxyXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMF1cclxuICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZUJ0biA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzFdXHJcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gZmFsc2VcclxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnVmVydGljYWwnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxyXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJ1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcclxuICBodW1hbkJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAnY2xpY2snLFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgJ09yaWVudGF0aW9uIHN0YXR1cyBnb2luZyBpbnRvIHBsYWNlbWVudDonICtcclxuICAgICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXNcclxuICAgICAgKVxyXG4gICAgICBoYW5kbGVDcnVpc2VyU2hpcFBsYWNlbWVudChlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzLCBjb250cm9sbGVyKVxyXG4gICAgfSxcclxuICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBwbGFjZVN1Ym1hcmluZSA9ICgpID0+IHtcclxuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxyXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBTdWJtYXJpbmUnXHJcblxyXG4gIGNvbnN0IGh1bWFuQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyQm9hcmQnKVxyXG5cclxuICBjb25zdCBvcmllbnRhdGlvbkJ0blZhbHVlcyA9IGNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuKClcclxuICBsZXQgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzBdXHJcbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBvcmllbnRhdGlvbkJ0blZhbHVlc1sxXVxyXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPT09IHRydWUpIHtcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IGZhbHNlXHJcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcclxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcclxuICAgIH1cclxuICB9KVxyXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcclxuICBodW1hbkJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAnY2xpY2snLFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgJ09yaWVudGF0aW9uIHN0YXR1cyBnb2luZyBpbnRvIHBsYWNlbWVudDonICtcclxuICAgICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXNcclxuICAgICAgKVxyXG4gICAgICBoYW5kbGVTdWJtYXJpbmVTaGlwUGxhY2VtZW50KFxyXG4gICAgICAgIGUsXHJcbiAgICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyxcclxuICAgICAgICBjb250cm9sbGVyXHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxyXG4gIClcclxufVxyXG5cclxuY29uc3QgcGxhY2VEZXN0cm95ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgRGVzdHJveWVyJ1xyXG5cclxuICBjb25zdCBodW1hbkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckJvYXJkJylcclxuXHJcbiAgY29uc3Qgb3JpZW50YXRpb25CdG5WYWx1ZXMgPSBjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0bigpXHJcbiAgbGV0IGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBvcmllbnRhdGlvbkJ0blZhbHVlc1swXVxyXG4gIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlQnRuID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMV1cclxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID09PSB0cnVlKSB7XHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBmYWxzZVxyXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXHJcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxyXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICdjbGljaycsXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAnT3JpZW50YXRpb24gc3RhdHVzIGdvaW5nIGludG8gcGxhY2VtZW50OicgK1xyXG4gICAgICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1c1xyXG4gICAgICApXHJcbiAgICAgIGhhbmRsZURlc3Ryb3llclNoaXBQbGFjZW1lbnQoXHJcbiAgICAgICAgZSxcclxuICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzLFxyXG4gICAgICAgIGNvbnRyb2xsZXJcclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCByZW5kZXJQbGF5ZXJCb2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGdhbWUuZ2V0SHVtYW5Cb2FyZCgpXHJcbiAgY29uc3QgcGxheWVyQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyQm9hcmQnKVxyXG4gIHBsYXllckJvYXJkRGl2LmlubmVySFRNTCA9ICcnXHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQm9hcmQubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGN1cnJlbnRSb3cgPSBwbGF5ZXJCb2FyZFtpXVxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50Um93Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdib2FyZENlbGwnKVxyXG4gICAgICBidXR0b24uZGF0YXNldC5yb3cgPSBpXHJcbiAgICAgIGJ1dHRvbi5kYXRhc2V0LmNvbHVtbiA9IGpcclxuXHJcbiAgICAgIHBsYXllckJvYXJkRGl2LmFwcGVuZENoaWxkKGJ1dHRvbilcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlckFJQm9hcmQgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgYWlCb2FyZCA9IGdhbWUuZ2V0QUlCb2FyZCgpXHJcbiAgY29uc3QgYWlCb2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSUJvYXJkJylcclxuICBhaUJvYXJkRGl2LmlubmVySFRNTCA9ICcnXHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWlCb2FyZC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgY3VycmVudFJvdyA9IGFpQm9hcmRbaV1cclxuXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRSb3cubGVuZ3RoOyBqKyspIHtcclxuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JvYXJkQ2VsbCcpXHJcbiAgICAgIGJ1dHRvbi5kYXRhc2V0LnJvdyA9IGlcclxuICAgICAgYnV0dG9uLmRhdGFzZXQuY29sdW1uID0galxyXG4gICAgICBjb25zdCByb3cgPSBhaUJvYXJkW2ldXHJcblxyXG4gICAgICBpZiAodHlwZW9mIHJvd1tqXSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2hpcENlbGwnKVxyXG4gICAgICB9XHJcbiAgICAgIGFpQm9hcmREaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdXBkYXRlSHVtYW5Cb2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBodW1hbkJvYXJkID0gZ2FtZS5nZXRIdW1hbkJvYXJkKClcclxuICBjb25zdCBtaXNzZWRTaG90cyA9IGdhbWUuZ2V0SHVtYW5Cb2FyZE9iai5nZXRNaXNzZWRTaG90cygpXHJcbiAgY29uc3Qgc3VjY2Vzc2Z1bFNob3RzID0gZ2FtZS5nZXRIdW1hbkJvYXJkT2JqLmdldFN1Y2Nlc3NmdWxTaG90cygpXHJcbiAgY29uc3QgYWxsRG9tTm9kZXMgPSBBcnJheS5mcm9tKFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckJvYXJkJykuY2hpbGROb2Rlc1xyXG4gIClcclxuXHJcbiAgbWlzc2VkU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xyXG4gICAgY29uc3Qgcm93ID0gc2hvdFswXVxyXG4gICAgY29uc3QgY29sdW1uID0gc2hvdFsxXVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRG9tTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGFsbERvbU5vZGVzW2ldLmRhdGFzZXRcclxuICAgICAgaWYgKCt0YXJnZXROb2RlLmNvbHVtbiA9PT0gY29sdW1uICYmICt0YXJnZXROb2RlLnJvdyA9PT0gcm93KSB7XHJcbiAgICAgICAgYWxsRG9tTm9kZXNbaV0udGV4dENvbnRlbnQgPSAnWCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHN1Y2Nlc3NmdWxTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XHJcbiAgICBjb25zdCByb3cgPSBzaG90WzBdXHJcbiAgICBjb25zdCBjb2x1bW4gPSBzaG90WzFdXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEb21Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCB0YXJnZXROb2RlID0gYWxsRG9tTm9kZXNbaV1cclxuICAgICAgaWYgKFxyXG4gICAgICAgICt0YXJnZXROb2RlLmRhdGFzZXQuY29sdW1uID09PSBjb2x1bW4gJiZcclxuICAgICAgICArdGFyZ2V0Tm9kZS5kYXRhc2V0LnJvdyA9PT0gcm93XHJcbiAgICAgICkge1xyXG4gICAgICAgIHRhcmdldE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcENlbGwnKVxyXG4gICAgICAgIHRhcmdldE5vZGUuY2xhc3NMaXN0LmFkZCgnc2hpcEhpdCcpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5jb25zdCB1cGRhdGVBSUJvYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFpQm9hcmQgPSBnYW1lLmdldEFJQm9hcmQoKVxyXG4gIGNvbnN0IG1pc3NlZFNob3RzID0gZ2FtZS5nZXRBSUJvYXJkT2JqLmdldE1pc3NlZFNob3RzKClcclxuICBjb25zdCBzdWNjZXNzZnVsU2hvdHMgPSBnYW1lLmdldEFJQm9hcmRPYmouZ2V0U3VjY2Vzc2Z1bFNob3RzKClcclxuICBjb25zdCBhbGxEb21Ob2RlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FJQm9hcmQnKS5jaGlsZE5vZGVzKVxyXG5cclxuICBtaXNzZWRTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XHJcbiAgICBjb25zdCByb3cgPSBzaG90WzBdXHJcbiAgICBjb25zdCBjb2x1bW4gPSBzaG90WzFdXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEb21Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCB0YXJnZXROb2RlID0gYWxsRG9tTm9kZXNbaV0uZGF0YXNldFxyXG4gICAgICBpZiAodGFyZ2V0Tm9kZS5jb2x1bW4gPT09IGNvbHVtbiAmJiB0YXJnZXROb2RlLnJvdyA9PT0gcm93KSB7XHJcbiAgICAgICAgYWxsRG9tTm9kZXNbaV0udGV4dENvbnRlbnQgPSAnWCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHN1Y2Nlc3NmdWxTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XHJcbiAgICBjb25zdCByb3cgPSBzaG90WzBdXHJcbiAgICBjb25zdCBjb2x1bW4gPSBzaG90WzFdXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEb21Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCB0YXJnZXROb2RlID0gYWxsRG9tTm9kZXNbaV1cclxuICAgICAgaWYgKFxyXG4gICAgICAgICt0YXJnZXROb2RlLmRhdGFzZXQuY29sdW1uID09PSBjb2x1bW4gJiZcclxuICAgICAgICArdGFyZ2V0Tm9kZS5kYXRhc2V0LnJvdyA9PT0gcm93XHJcbiAgICAgICkge1xyXG4gICAgICAgIHRhcmdldE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcENlbGwnKVxyXG4gICAgICAgIHRhcmdldE5vZGUuY2xhc3NMaXN0LmFkZCgnc2hpcEhpdCcpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVDYXJyaWVyU2hpcFBsYWNlbWVudCA9IChcclxuICBlLFxyXG4gIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXHJcbiAgY29udHJvbGxlclxyXG4pID0+IHtcclxuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XHJcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxyXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxyXG5cclxuICBjb25zdCBjYXJyaWVyUGxhY2VkID0gcGxhY2VDYXJyaWVyT25Cb2FyZChcclxuICAgIGNvb3JkaW5hdGUsXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXHJcbiAgKVxyXG5cclxuICBpZiAoY2FycmllclBsYWNlZCkge1xyXG4gICAgY29udHJvbGxlci5hYm9ydCgpXHJcbiAgICByZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuKClcclxuICAgIHBsYWNlQmF0dGxlU2hpcCgpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBwbGFjZUNhcnJpZXJTaGlwXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVCYXR0bGVTaGlwUGxhY2VtZW50ID0gKFxyXG4gIGUsXHJcbiAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICBjb250cm9sbGVyXHJcbikgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcclxuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXHJcbiAgY29uc3QgY29vcmRpbmF0ZSA9IFtzZWxlY3RlZFJvdywgc2VsZWN0ZWRDb2x1bW5dXHJcblxyXG4gIGNvbnN0IGJhdHRsZXNoaXBQbGFjZWQgPSBwbGFjZUJhdHRsZXNoaXBPbkJvYXJkKFxyXG4gICAgY29vcmRpbmF0ZSxcclxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cclxuICApXHJcblxyXG4gIGlmIChiYXR0bGVzaGlwUGxhY2VkKSB7XHJcbiAgICBjb250cm9sbGVyLmFib3J0KClcclxuICAgIHJlbW92ZVByZXZpb3VzT3JpZW50YXRpb25CdG4oKVxyXG4gICAgcGxhY2VDcnVpc2VyKClcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHBsYWNlQmF0dGxlU2hpcFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaGFuZGxlQ3J1aXNlclNoaXBQbGFjZW1lbnQgPSAoXHJcbiAgZSxcclxuICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxyXG4gIGNvbnRyb2xsZXJcclxuKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xyXG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cclxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cclxuXHJcbiAgY29uc3QgY3J1aXNlclBsYWNlZCA9IHBsYWNlQ3J1aXNlck9uQm9hcmQoXHJcbiAgICBjb29yZGluYXRlLFxyXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxyXG4gIClcclxuXHJcbiAgaWYgKGNydWlzZXJQbGFjZWQpIHtcclxuICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxyXG4gICAgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0bigpXHJcbiAgICBwbGFjZVN1Ym1hcmluZSgpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBwbGFjZUNydWlzZXJcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZVN1Ym1hcmluZVNoaXBQbGFjZW1lbnQgPSAoXHJcbiAgZSxcclxuICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxyXG4gIGNvbnRyb2xsZXJcclxuKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xyXG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cclxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cclxuXHJcbiAgY29uc3Qgc3VibWFyaW5lUGxhY2VkID0gcGxhY2VTdWJtYXJpbmVPbkJvYXJkKFxyXG4gICAgY29vcmRpbmF0ZSxcclxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cclxuICApXHJcblxyXG4gIGlmIChzdWJtYXJpbmVQbGFjZWQpIHtcclxuICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxyXG4gICAgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0bigpXHJcbiAgICBwbGFjZURlc3Ryb3llcigpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBwbGFjZVN1Ym1hcmluZVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaGFuZGxlRGVzdHJveWVyU2hpcFBsYWNlbWVudCA9IGFzeW5jIChcclxuICBlLFxyXG4gIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXHJcbiAgY29udHJvbGxlclxyXG4pID0+IHtcclxuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XHJcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxyXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxyXG4gIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcblxyXG4gIGNvbnN0IGRlc3Ryb3llclBsYWNlZCA9IHBsYWNlRGVzdHJveWVyT25Cb2FyZChcclxuICAgIGNvb3JkaW5hdGUsXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXHJcbiAgKVxyXG5cclxuICBpZiAoZGVzdHJveWVyUGxhY2VkKSB7XHJcbiAgICBjb250cm9sbGVyLmFib3J0KClcclxuICAgIHRvcEJhckNvbnRhaW5lclBhcmEudGV4dENvbnRlbnQgPSAnJ1xyXG4gICAgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0bigpXHJcbiAgICBhd2FpdCBkaXNwbGF5Q29udHJvbGxlcigpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBwbGFjZURlc3Ryb3llclxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcGxhY2VDYXJyaWVyT25Cb2FyZCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XHJcbiAgY29uc3Qgc2hpcFR5cGUgPSAnY2FycmllcidcclxuICBjb25zdCBjYXJyaWVyUGxhY2VkID0gZ2FtZS5wbGFjZUNhcnJpZXJTaGlwKFxyXG4gICAgY29vcmRpbmF0ZSxcclxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cclxuICApXHJcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcclxuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXHJcbiAgXVxyXG4gIGlmICghY2FycmllclBsYWNlZCkge1xyXG4gICAgcmV0dXJuIGNhcnJpZXJQbGFjZWRcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZ2V0SG9yaXpvbnRhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZ2V0VmVydGljYWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBjYXJyaWVyUGxhY2VkXHJcbn1cclxuXHJcbmNvbnN0IHBsYWNlQmF0dGxlc2hpcE9uQm9hcmQgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xyXG4gIGNvbnN0IHNoaXBUeXBlID0gJ2JhdHRsZXNoaXAnXHJcbiAgY29uc3QgYmF0dGxlc2hpcFBsYWNlZCA9IGdhbWUucGxhY2VCYXR0bGVTaGlwKFxyXG4gICAgY29vcmRpbmF0ZSxcclxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cclxuICApXHJcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcclxuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXHJcbiAgXVxyXG4gIGlmICghYmF0dGxlc2hpcFBsYWNlZCkge1xyXG4gICAgcmV0dXJuIGJhdHRsZXNoaXBQbGFjZWRcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZ2V0SG9yaXpvbnRhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZ2V0VmVydGljYWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBiYXR0bGVzaGlwUGxhY2VkXHJcbn1cclxuXHJcbmNvbnN0IHBsYWNlQ3J1aXNlck9uQm9hcmQgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xyXG4gIGNvbnN0IHNoaXBUeXBlID0gJ2NydWlzZXInXHJcbiAgY29uc3QgY3J1aXNlclBsYWNlZCA9IGdhbWUucGxhY2VDcnVpc2VyU2hpcChcclxuICAgIGNvb3JkaW5hdGUsXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXHJcbiAgKVxyXG4gIGNvbnN0IGJvYXJkRE9NQ2VsbHNBcnIgPSBbXHJcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxyXG4gIF1cclxuICBpZiAoIWNydWlzZXJQbGFjZWQpIHtcclxuICAgIHJldHVybiBjcnVpc2VyUGxhY2VkXHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGdldEhvcml6b250YWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXHJcbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGdldFZlcnRpY2FsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gY3J1aXNlclBsYWNlZFxyXG59XHJcblxyXG5jb25zdCBwbGFjZVN1Ym1hcmluZU9uQm9hcmQgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xyXG4gIGNvbnN0IHNoaXBUeXBlID0gJ3N1Ym1hcmluZSdcclxuICBjb25zdCBzdWJtYXJpbmVQbGFjZWQgPSBnYW1lLnBsYWNlU3VibWFyaW5lU2hpcChcclxuICAgIGNvb3JkaW5hdGUsXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXHJcbiAgKVxyXG4gIGNvbnN0IGJvYXJkRE9NQ2VsbHNBcnIgPSBbXHJcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxyXG4gIF1cclxuICBpZiAoIXN1Ym1hcmluZVBsYWNlZCkge1xyXG4gICAgcmV0dXJuIHN1Ym1hcmluZVBsYWNlZFxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxyXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBnZXRWZXJ0aWNhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHN1Ym1hcmluZVBsYWNlZFxyXG59XHJcblxyXG5jb25zdCBwbGFjZURlc3Ryb3llck9uQm9hcmQgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xyXG4gIGNvbnN0IHNoaXBUeXBlID0gJ2Rlc3Ryb3llcidcclxuICBjb25zdCBkZXN0cm95ZXJQbGFjZWQgPSBnYW1lLnBsYWNlRGVzdHJveWVyU2hpcChcclxuICAgIGNvb3JkaW5hdGUsXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXHJcbiAgKVxyXG4gIGNvbnN0IGJvYXJkRE9NQ2VsbHNBcnIgPSBbXHJcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxyXG4gIF1cclxuICBpZiAoIWRlc3Ryb3llclBsYWNlZCkge1xyXG4gICAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxyXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBnZXRWZXJ0aWNhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxyXG59XHJcblxyXG5jb25zdCBnZXRIb3Jpem9udGFsRE9NQ29vcmRzID0gKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKSA9PiB7XHJcbiAgY29uc3Qgc3RhcnRpbmdDb2x1bW4gPSBOdW1iZXIoY29vcmRpbmF0ZVsxXSlcclxuICBjb25zdCBzaGlwTGVuZ3RoID1cclxuICAgIHNoaXBUeXBlID09PSAnY2FycmllcidcclxuICAgICAgPyA1XHJcbiAgICAgIDogc2hpcFR5cGUgPT09ICdiYXR0bGVzaGlwJ1xyXG4gICAgICA/IDRcclxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2NydWlzZXInXHJcbiAgICAgID8gM1xyXG4gICAgICA6IHNoaXBUeXBlID09PSAnc3VibWFyaW5lJ1xyXG4gICAgICA/IDNcclxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2Rlc3Ryb3llcidcclxuICAgICAgPyAyXHJcbiAgICAgIDogbnVsbFxyXG5cclxuICBmb3IgKGxldCBpID0gc3RhcnRpbmdDb2x1bW47IGkgPCBzdGFydGluZ0NvbHVtbiArIHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qgcm93ID0gK2Nvb3JkaW5hdGVbMF1cclxuICAgIGNvbnN0IGNvbHVtbiA9IGlcclxuICAgIGNvbnN0IGRvbUNvb3JkaW5hdGUgPSBbcm93LCBjb2x1bW5dXHJcbiAgICBjb25zdCB0YXJnZXRET01CdG4gPSBmaW5kU2hpcERPTUJ0bihib2FyZERPTUNlbGxzQXJyLCBkb21Db29yZGluYXRlKVxyXG4gICAgdGFyZ2V0RE9NQnRuLmNsYXNzTGlzdC5hZGQoJ3NoaXBDZWxsJylcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldFZlcnRpY2FsRE9NQ29vcmRzID0gKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKSA9PiB7XHJcbiAgY29uc3Qgc3RhcnRpbmdSb3cgPSBOdW1iZXIoY29vcmRpbmF0ZVswXSlcclxuICBjb25zdCBzaGlwTGVuZ3RoID1cclxuICAgIHNoaXBUeXBlID09PSAnY2FycmllcidcclxuICAgICAgPyA1XHJcbiAgICAgIDogc2hpcFR5cGUgPT09ICdiYXR0bGVzaGlwJ1xyXG4gICAgICA/IDRcclxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2NydWlzZXInXHJcbiAgICAgID8gM1xyXG4gICAgICA6IHNoaXBUeXBlID09PSAnc3VibWFyaW5lJ1xyXG4gICAgICA/IDNcclxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2Rlc3Ryb3llcidcclxuICAgICAgPyAyXHJcbiAgICAgIDogbnVsbFxyXG5cclxuICBmb3IgKGxldCBpID0gc3RhcnRpbmdSb3c7IGkgPiBzdGFydGluZ1JvdyAtIHNoaXBMZW5ndGg7IGktLSkge1xyXG4gICAgY29uc3Qgcm93ID0gaVxyXG4gICAgY29uc3QgY29sdW1uID0gK2Nvb3JkaW5hdGVbMV1cclxuICAgIGNvbnN0IGRvbUNvb3JkaW5hdGUgPSBbcm93LCBjb2x1bW5dXHJcbiAgICBjb25zdCB0YXJnZXRET01CdG4gPSBmaW5kU2hpcERPTUJ0bihib2FyZERPTUNlbGxzQXJyLCBkb21Db29yZGluYXRlKVxyXG4gICAgdGFyZ2V0RE9NQnRuLmNsYXNzTGlzdC5hZGQoJ3NoaXBDZWxsJylcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGZpbmRTaGlwRE9NQnRuID0gKGJvYXJkRE9NQ2VsbHNBcnIsIGRvbUNvb3JkaW5hdGUpID0+IHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkRE9NQ2VsbHNBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGRvbUNlbGxSb3cgPSArYm9hcmRET01DZWxsc0FycltpXS5kYXRhc2V0LnJvd1xyXG4gICAgY29uc3QgZG9tQ2VsbENvbHVtbiA9ICtib2FyZERPTUNlbGxzQXJyW2ldLmRhdGFzZXQuY29sdW1uXHJcbiAgICBpZiAoXHJcbiAgICAgIGRvbUNlbGxSb3cgPT09ICtkb21Db29yZGluYXRlWzBdICYmXHJcbiAgICAgIGRvbUNlbGxDb2x1bW4gPT09ICtkb21Db29yZGluYXRlWzFdXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIGJvYXJkRE9NQ2VsbHNBcnJbaV1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dCA9IGFzeW5jIChlLCBjb250cm9sbGVyKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSArZS50YXJnZXQuZGF0YXNldC5yb3dcclxuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9ICtlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxyXG4gIGNvbnN0IGFpQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlCb2FyZCcpXHJcblxyXG4gIGlmIChzZWxlY3RlZENvbHVtbiA9PT0gJ3VuZGVmaW5lZCcgfHwgc2VsZWN0ZWRSb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0XHJcbiAgfVxyXG5cclxuICBjb250cm9sbGVyLmFib3J0KClcclxuXHJcbiAgY29uc3QgYWlCb2FyZCA9IGdhbWUuZ2V0QUlCb2FyZE9ialxyXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxyXG4gIGNvbnN0IGFscmVhZHlBdHRhY2tlZCA9IGFpQm9hcmQucHJldmVudFNhbWVBdHRhY2soY29vcmRpbmF0ZSlcclxuICBpZiAoYWxyZWFkeUF0dGFja2VkKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGdhbWUucGxheVJvdW5kKGNvb3JkaW5hdGUpXHJcbiAgY29uc3QgaHVtYW5Nb3ZlU3VjY2Vzc2Z1bCA9IGdhbWUuZ2V0QUlCb2FyZE9iai5nZXRMYXN0SHVtYW5Nb3ZlU3VjY2Vzc2Z1bCgpXHJcbiAgLy8gVXNlIHRoaXMgdmFsdWUgd2hlbiBkZXRlcm1pbmluZyB3aGV0aGVyIHRvIHNob3cgc2hpcCBhcyBzdW5rXHJcbiAgY29uc3Qgc2hpcElzU3VuayA9IGdhbWUuaXNTaGlwU3VuaygnaHVtYW4nKVxyXG4gIGNvbnN0IHNoaXBTdW5rUmVzdWx0ID0gc2hpcElzU3Vua1swXVxyXG4gIGlmIChzaGlwU3Vua1Jlc3VsdCkge1xyXG4gICAgZGlzcGxheVN1bmtTaGlwTWVzc2FnZSgnaHVtYW4nKVxyXG4gIH0gZWxzZSBpZiAoIXNoaXBTdW5rUmVzdWx0KSB7XHJcbiAgICBodW1hbk1vdmVTdWNjZXNzZnVsXHJcbiAgICAgID8gZGlzcGxheVN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlKCdodW1hbicpXHJcbiAgICAgIDogZGlzcGxheVVuc3VjY2Vzc2Z1bEF0dGFja01lc3NhZ2UoJ2h1bWFuJylcclxuICB9XHJcblxyXG4gIGNvbnN0IGh1bWFuV2lucyA9IGdhbWUuY2hlY2tGb3JXaW4oKVxyXG5cclxuICB1cGRhdGVBSUJvYXJkKClcclxuICBhd2FpdCBkZWxheSg0MDAwKVxyXG4gIGhhbmRsZVdpbkNoZWNrKGh1bWFuV2lucywgYWlCb2FyZERpdilcclxuICBoYW5kbGVBSU1vdmUoYWlCb2FyZERpdilcclxufVxyXG5cclxuY29uc3QgaGFuZGxlQUlNb3ZlID0gYXN5bmMgKGFpQm9hcmREaXYpID0+IHtcclxuICBjb25zdCB0b3BCYXJDb250YWluZXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxyXG4gIGNvbnN0IGVuZW15QXR0YWNraW5nTXNnID0gJ0VuZW15IGlzIGF0dGFja2luZyB5b3VyIHNoaXBzISdcclxuICB0cmFuc2l0aW9uVGV4dENoYW5nZXMoZW5lbXlBdHRhY2tpbmdNc2csIHRvcEJhckNvbnRhaW5lclBhcmEpXHJcbiAgYXdhaXQgZGVsYXkoMzAwMClcclxuICBnYW1lLnBsYXlSb3VuZCgpXHJcbiAgY29uc3QgYWlNb3ZlU3VjY2Vzc2Z1bCA9IGdhbWUuZ2V0SHVtYW5Cb2FyZE9iai5nZXRMYXN0QUlNb3ZlU3VjY2Vzc2Z1bCgpXHJcbiAgY29uc3Qgc2hpcElzU3VuayA9IGdhbWUuaXNTaGlwU3VuaygnY29tcHV0ZXInKVxyXG4gIGNvbnN0IHNoaXBTdW5rUmVzdWx0ID0gc2hpcElzU3Vua1swXVxyXG4gIGlmIChzaGlwU3Vua1Jlc3VsdCA9PT0gdHJ1ZSkge1xyXG4gICAgZGlzcGxheVN1bmtTaGlwTWVzc2FnZSgnY29tcHV0ZXInKVxyXG4gIH0gZWxzZSBpZiAoIXNoaXBTdW5rUmVzdWx0KSB7XHJcbiAgICBhaU1vdmVTdWNjZXNzZnVsXHJcbiAgICAgID8gZGlzcGxheVN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlKCdjb21wdXRlcicpXHJcbiAgICAgIDogZGlzcGxheVVuc3VjY2Vzc2Z1bEF0dGFja01lc3NhZ2UoJ2NvbXB1dGVyJylcclxuICB9XHJcblxyXG4gIGNvbnN0IGFpV2lucyA9IGdhbWUuY2hlY2tGb3JXaW4oKVxyXG5cclxuICB1cGRhdGVIdW1hbkJvYXJkKClcclxuICBhd2FpdCBkZWxheSgyNTAwKVxyXG4gIGNvbnN0IGF0dGFja1RoZUVuZW15TXNnID0gJ0F0dGFjayB0aGUgZW5lbWllcyBzaGlwcy4uLidcclxuICB0cmFuc2l0aW9uVGV4dENoYW5nZXMoYXR0YWNrVGhlRW5lbXlNc2csIHRvcEJhckNvbnRhaW5lclBhcmEpXHJcblxyXG4gIGF3YWl0IGRlbGF5KDM1MDApXHJcbiAgaGFuZGxlV2luQ2hlY2soYWlXaW5zLCBhaUJvYXJkRGl2KVxyXG5cclxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXHJcbiAgYWlCb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgJ2NsaWNrJyxcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dChlLCBjb250cm9sbGVyKVxyXG4gICAgfSxcclxuICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBhbm5vdW5jZVdpbm5lciA9ICh3aW5uZXIpID0+IHtcclxuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxyXG4gIGNvbnN0IHdpbm5lck5hbWUgPSB3aW5uZXIuZ2V0TmFtZSgpXHJcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9IGAke3dpbm5lck5hbWV9IHdpbidzIWBcclxufVxyXG5cclxuY29uc3QgcGxheUFnYWluID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvcEJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXInKVxyXG4gIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgcGxheUFnYWluQnRuLnRleHRDb250ZW50ID0gJ1BsYXkgYWdhaW4nXHJcbiAgdG9wQmFyRGl2LmFwcGVuZENoaWxkKHBsYXlBZ2FpbkJ0bilcclxuICBwbGF5QWdhaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydE5ld0dhbWUpXHJcbn1cclxuXHJcbmNvbnN0IHN0YXJ0TmV3R2FtZSA9ICgpID0+IHtcclxuICBjb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyJylcclxuICBjb25zdCBwbGF5QWdhaW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gYnV0dG9uJylcclxuICB0b3BCYXJEaXYucmVtb3ZlQ2hpbGQocGxheUFnYWluQnRuKVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJykudGV4dENvbnRlbnQgPSAnJ1xyXG4gIGRpc3BsYXlDb250cm9sbGVyKClcclxufVxyXG5cclxuLy8gRm9yIGVhY2ggb2YgdGhlIHBsYWNlIHNoaXAgZnVuY3Rpb25zLCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGUgcHJldmlvdXNcclxuLy8gb3JpZW50YXRpb24gdG9nZ2xlIGJ1dHRvbiB0byBwcmV2ZW50IHRoZSBzYW1lIGxpc3RlbmVyIGZpcmluZyBmb3IgZWFjaCBvZiB0aGVcclxuLy8gcHJldmlvdXMgb3JpZW50YXRpb24gdG9nZ2xlIGJ1dHRvbnNcclxuY29uc3QgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0biA9ICgpID0+IHtcclxuICBjb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyJylcclxuICBjb25zdCBwcmV2aW91c09yaWVudGF0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yaWVudGF0aW9uVG9nZ2xlQnRuJylcclxuICB0b3BCYXJEaXYucmVtb3ZlQ2hpbGQocHJldmlvdXNPcmllbnRhdGlvbkJ0bilcclxufVxyXG5cclxuY29uc3QgY3JlYXRlT3JpZW50YXRpb25Ub2dnbGVCdG4gPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9wQmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lcicpXHJcbiAgY29uc3QgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcclxuICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4uY2xhc3NMaXN0LmFkZCgnb3JpZW50YXRpb25Ub2dnbGVCdG4nKVxyXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXHJcbiAgdG9wQmFyRGl2LmFwcGVuZENoaWxkKG9yaWVudGF0aW9uVG9nZ2xlQnRuKVxyXG5cclxuICByZXR1cm4gW2hvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMsIG9yaWVudGF0aW9uVG9nZ2xlQnRuXVxyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5U3VjY2Vzc2Z1bEF0dGFja01lc3NhZ2UgPSAocGxheWVyKSA9PiB7XHJcbiAgaWYgKHBsYXllciA9PT0gJ2h1bWFuJykge1xyXG4gICAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICAgIGNvbnN0IGF0dGFja0FuZEhpdE1zZyA9ICdZb3UgYXR0YWNrZWQgdGhlIGVuZW15Li4uIGFuZCBoaXQgdGhlaXIgc2hpcCEnXHJcbiAgICBzZXRUaW1lb3V0KHRyYW5zaXRpb25UZXh0Q2hhbmdlcywgMTAsIGF0dGFja0FuZEhpdE1zZywgdG9wQmFyQ29udGFpbmVyUGFyYSlcclxuICB9IGVsc2UgaWYgKHBsYXllciA9PT0gJ2NvbXB1dGVyJykge1xyXG4gICAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICAgIGNvbnN0IGVuZW15SGl0TXNnID0gJ1RoZSBlbmVteSBsYXVuY2hlZCBhbiBhdHRhY2suLi4gYW5kIGhpdCB5b3VyIHNoaXAhJ1xyXG4gICAgc2V0VGltZW91dCh0cmFuc2l0aW9uVGV4dENoYW5nZXMsIDEwLCBlbmVteUhpdE1zZywgdG9wQmFyQ29udGFpbmVyUGFyYSlcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlVbnN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlID0gKHBsYXllcikgPT4ge1xyXG4gIGlmIChwbGF5ZXIgPT09ICdodW1hbicpIHtcclxuICAgIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgICBjb25zdCB1bnN1Y2Nlc3NmdWxBdHRhY2tNc2cgPSAnWW91ciBhdHRhY2sgb24gdGhlIGVuZW15IHdhcyB1bnN1Y2Nlc3NmdWwnXHJcbiAgICBzZXRUaW1lb3V0KFxyXG4gICAgICB0cmFuc2l0aW9uVGV4dENoYW5nZXMsXHJcbiAgICAgIDEwLFxyXG4gICAgICB1bnN1Y2Nlc3NmdWxBdHRhY2tNc2csXHJcbiAgICAgIHRvcEJhckNvbnRhaW5lclBhcmFcclxuICAgIClcclxuICB9IGVsc2UgaWYgKHBsYXllciA9PT0gJ2NvbXB1dGVyJykge1xyXG4gICAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICAgIGNvbnN0IHVuc3VjY2Vzc2Z1bEVuZW15QXR0YWNrTXNnID0gJ1RoZSBlbmVtaWVzIGF0dGFjayB3YXMgdW5zdWNjZXNzZnVsJ1xyXG4gICAgc2V0VGltZW91dChcclxuICAgICAgdHJhbnNpdGlvblRleHRDaGFuZ2VzLFxyXG4gICAgICAxMCxcclxuICAgICAgdW5zdWNjZXNzZnVsRW5lbXlBdHRhY2tNc2csXHJcbiAgICAgIHRvcEJhckNvbnRhaW5lclBhcmFcclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlTdW5rU2hpcE1lc3NhZ2UgPSAocGxheWVyKSA9PiB7XHJcbiAgaWYgKHBsYXllciA9PT0gJ2h1bWFuJykge1xyXG4gICAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICAgIGNvbnN0IHN1bmtTaGlwTWVzc2FnZSA9ICdZb3UgaGF2ZSBzdW5rIHRoZSBlbmVtaWVzIHNoaXAhJ1xyXG4gICAgc2V0VGltZW91dCh0cmFuc2l0aW9uVGV4dENoYW5nZXMsIDEwLCBzdW5rU2hpcE1lc3NhZ2UsIHRvcEJhckNvbnRhaW5lclBhcmEpXHJcbiAgfSBlbHNlIGlmIChwbGF5ZXIgPT09ICdjb21wdXRlcicpIHtcclxuICAgIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgICBjb25zdCBzdW5rU2hpcE1lc3NhZ2UgPSAnVGhlIGVuZW15IHN1bmsgb25lIG9mIHlvdXIgc2hpcHMhJ1xyXG4gICAgc2V0VGltZW91dCh0cmFuc2l0aW9uVGV4dENoYW5nZXMsIDEwLCBzdW5rU2hpcE1lc3NhZ2UsIHRvcEJhckNvbnRhaW5lclBhcmEpXHJcbiAgfVxyXG59XHJcblxyXG4vLyBDaGFuZ2VzIGNvbG9ycyBvZiBzdW5rIHNoaXAgY2VsbHMgdG8gcmVkIGFuZCBjaGFuZ2VzIHRvcCBiYXIgY29udGFpbmVyXHJcbi8vIG1lc3NhZ2VcclxuY29uc3QgZGlzcGxheVN1bmtTaGlwID0gKHN1bmtTaGlwQ29vcmRzLCBwbGF5ZXIpID0+IHtcclxuICBpZiAocGxheWVyID09PSAnaHVtYW4nKSB7XHJcbiAgICBjb25zdCBhaURPTUNlbGxzQXJyID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNBSUJvYXJkID4gYnV0dG9uJyldXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1bmtTaGlwQ29vcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGRvbUNvb3JkID0gc3Vua1NoaXBDb29yZHNbaV1cclxuICAgICAgLy8gISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXHJcbiAgICAgIC8vIElTU1VFIElTIEhFUkUsIERPTSBDT09SRCBBUlIgSEFTIFNUUklOR1MsIE5FRURTIE5VTUJFUlNcclxuICAgICAgLy8gISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXHJcbiAgICAgIGNvbnN0IHRhcmdldERPTUJ0biA9IGZpbmRTaGlwRE9NQnRuKGFpRE9NQ2VsbHNBcnIsIGRvbUNvb3JkKVxyXG4gICAgICB0YXJnZXRET01CdG4uY2xhc3NMaXN0LmFkZCgnc3Vua1NoaXAnKVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAocGxheWVyID09PSAnY29tcHV0ZXInKSB7XHJcbiAgICBjb25zdCBodW1hbkRPTUNlbGxzQXJyID0gW1xyXG4gICAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxyXG4gICAgXVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdW5rU2hpcENvb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBkb21Db29yZCA9IHN1bmtTaGlwQ29vcmRzW2ldXHJcbiAgICAgIGNvbnN0IHRhcmdldERPTUJ0biA9IGZpbmRTaGlwRE9NQnRuKGh1bWFuRE9NQ2VsbHNBcnIsIGRvbUNvb3JkKVxyXG4gICAgICB0YXJnZXRET01CdG4uY2xhc3NMaXN0LmFkZCgnc3Vua1NoaXAnKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaGFuZGxlV2luQ2hlY2sgPSAod2luQ2hlY2ssIGJvYXJkRGl2KSA9PiB7XHJcbiAgaWYgKHdpbkNoZWNrKSB7XHJcbiAgICBib2FyZERpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dClcclxuICAgIGdhbWUucmVzZXRHYW1lU3RhdGUoKVxyXG4gICAgYW5ub3VuY2VXaW5uZXIod2luQ2hlY2spXHJcbiAgICBwbGF5QWdhaW4oKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdHJhbnNpdGlvblRleHRDaGFuZ2VzID0gYXN5bmMgKG5ld01lc3NhZ2UsIGRvbUVsZW1lbnQpID0+IHtcclxuICBkb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpXHJcbiAgYXdhaXQgZGVsYXkoNDAwKVxyXG4gIGRvbUVsZW1lbnQudGV4dENvbnRlbnQgPSBuZXdNZXNzYWdlXHJcbiAgYXdhaXQgZGVsYXkoNDAwKVxyXG4gIGRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJylcclxufVxyXG5cclxuLy8gY29uc3QgaGFuZGxlUGxheWVyU2VsZXRpb25cclxuXHJcbmV4cG9ydCB7IHJlbmRlclBsYXllckJvYXJkLCByZW5kZXJBSUJvYXJkLCBkaXNwbGF5Q29udHJvbGxlciwgcHJlR2FtZVNldHVwIH1cclxuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi4vZmFjdG9yaWVzL0dhbWVib2FyZCdcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vZmFjdG9yaWVzL1BsYXllcidcclxuaW1wb3J0IHsgYXJyYXlzQXJlRXF1YWwgfSBmcm9tICcuLi9oZWxwZXJzL2FycmF5c0FyZUVxdWFsJ1xyXG5pbXBvcnQgeyByZXR1cm5SYW5kb21BSUJvYXJkIH0gZnJvbSAnLi4vaGVscGVycy9yb3RhdGVBSUJvYXJkcydcclxuXHJcbmNvbnN0IGdhbWVDb250cm9sbGVyID0gKCkgPT4ge1xyXG4gIC8vIENyZWF0ZSB0d28gZ2FtZSBib2FyZHNcclxuICBjb25zdCBodW1hbkJvYXJkID0gR2FtZWJvYXJkKClcclxuICBodW1hbkJvYXJkLmNyZWF0ZUdhbWVCb2FyZCgpXHJcblxyXG4gIGNvbnN0IGFpQm9hcmQgPSBHYW1lYm9hcmQoKVxyXG4gIGFpQm9hcmQuY3JlYXRlR2FtZUJvYXJkKClcclxuXHJcbiAgY29uc3QgcGxhY2VDYXJyaWVyU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XHJcbiAgICBsZXQgY2FycmllclBsYWNlZCA9IHRydWVcclxuXHJcbiAgICBjb25zdCBjYXJyaWVyQXJyID0gZGV0ZXJtaW5lQ2FycmllckFyckNvb3JkcyhcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICAgICAgY29vcmRpbmF0ZVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChjYXJyaWVyQXJyKVxyXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XHJcbiAgICAgIGNhcnJpZXJQbGFjZWQgPSBmYWxzZVxyXG4gICAgICByZXR1cm4gY2FycmllclBsYWNlZFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYXJyaWVyUGxhY2VkXHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXRlcm1pbmVDYXJyaWVyQXJyQ29vcmRzID0gKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sIGNvb3JkaW5hdGUpID0+IHtcclxuICAgIGNvbnN0IGNhcnJpZXJBcnIgPSBbXVxyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgY2FycmllckFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cclxuICAgICAgICBjYXJyaWVyQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgY2FycmllckFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbKCtjb29yZGluYXRlWzBdIC0gaSkudG9TdHJpbmcoKSwgY29vcmRpbmF0ZVsxXV1cclxuICAgICAgICBjYXJyaWVyQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjYXJyaWVyQXJyXHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGFjZUJhdHRsZVNoaXAgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xyXG4gICAgbGV0IGJhdHRsZXNoaXBQbGFjZWQgPSB0cnVlXHJcbiAgICBjb25zdCBiYXR0bGVzaGlwQXJyID0gZGV0ZXJtaW5lQmF0dGxlc2hpcEFyckNvb3JkcyhcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICAgICAgY29vcmRpbmF0ZVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChiYXR0bGVzaGlwQXJyKVxyXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XHJcbiAgICAgIGJhdHRsZXNoaXBQbGFjZWQgPSBmYWxzZVxyXG4gICAgICByZXR1cm4gYmF0dGxlc2hpcFBsYWNlZFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBiYXR0bGVzaGlwUGxhY2VkXHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXRlcm1pbmVCYXR0bGVzaGlwQXJyQ29vcmRzID0gKFxyXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICAgIGNvb3JkaW5hdGVcclxuICApID0+IHtcclxuICAgIGNvbnN0IGJhdHRsZXNoaXBBcnIgPSBbXVxyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgYmF0dGxlc2hpcEFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cclxuICAgICAgICBiYXR0bGVzaGlwQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgYmF0dGxlc2hpcEFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbKCtjb29yZGluYXRlWzBdIC0gaSkudG9TdHJpbmcoKSwgY29vcmRpbmF0ZVsxXV1cclxuICAgICAgICBiYXR0bGVzaGlwQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBiYXR0bGVzaGlwQXJyXHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGFjZUNydWlzZXJTaGlwID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcclxuICAgIGxldCBjcnVpc2VyUGxhY2VkID0gdHJ1ZVxyXG4gICAgY29uc3QgY3J1aXNlckFyciA9IGRldGVybWluZUNydWlzZXJBcnJDb29yZHMoXHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXHJcbiAgICAgIGNvb3JkaW5hdGVcclxuICAgIClcclxuXHJcbiAgICBjb25zdCBzaGlwUGxhY2VkID0gaHVtYW5Cb2FyZC5wbGFjZVNoaXAoY3J1aXNlckFycilcclxuICAgIGlmICghc2hpcFBsYWNlZCkge1xyXG4gICAgICBjcnVpc2VyUGxhY2VkID0gZmFsc2VcclxuICAgICAgcmV0dXJuIGNydWlzZXJQbGFjZWRcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3J1aXNlclBsYWNlZFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGV0ZXJtaW5lQ3J1aXNlckFyckNvb3JkcyA9IChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLCBjb29yZGluYXRlKSA9PiB7XHJcbiAgICBjb25zdCBjcnVpc2VyQXJyID0gW11cclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGNydWlzZXJBcnIucHVzaChjb29yZGluYXRlKVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkID0gW2Nvb3JkaW5hdGVbMF0sICgrY29vcmRpbmF0ZVsxXSArIGkpLnRvU3RyaW5nKCldXHJcbiAgICAgICAgY3J1aXNlckFyci5wdXNoKGNvb3JkKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGNydWlzZXJBcnIucHVzaChjb29yZGluYXRlKVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkID0gWygrY29vcmRpbmF0ZVswXSAtIGkpLnRvU3RyaW5nKCksIGNvb3JkaW5hdGVbMV1dXHJcbiAgICAgICAgY3J1aXNlckFyci5wdXNoKGNvb3JkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3J1aXNlckFyclxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxhY2VTdWJtYXJpbmVTaGlwID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcclxuICAgIGxldCBzdWJtYXJpbmVQbGFjZWQgPSB0cnVlXHJcbiAgICBjb25zdCBzdWJtYXJpbmVBcnIgPSBkZXRlcm1pbmVTdWJtYXJpbmVBcnJDb29yZHMoXHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXHJcbiAgICAgIGNvb3JkaW5hdGVcclxuICAgIClcclxuXHJcbiAgICBjb25zdCBzaGlwUGxhY2VkID0gaHVtYW5Cb2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lQXJyKVxyXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XHJcbiAgICAgIHN1Ym1hcmluZVBsYWNlZCA9IGZhbHNlXHJcbiAgICAgIHJldHVybiBzdWJtYXJpbmVQbGFjZWRcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3VibWFyaW5lUGxhY2VkXHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXRlcm1pbmVTdWJtYXJpbmVBcnJDb29yZHMgPSAoXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxyXG4gICAgY29vcmRpbmF0ZVxyXG4gICkgPT4ge1xyXG4gICAgY29uc3Qgc3VibWFyaW5lQXJyID0gW11cclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIHN1Ym1hcmluZUFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cclxuICAgICAgICBzdWJtYXJpbmVBcnIucHVzaChjb29yZClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBzdWJtYXJpbmVBcnIucHVzaChjb29yZGluYXRlKVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkID0gWygrY29vcmRpbmF0ZVswXSAtIGkpLnRvU3RyaW5nKCksIGNvb3JkaW5hdGVbMV1dXHJcbiAgICAgICAgc3VibWFyaW5lQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdWJtYXJpbmVBcnJcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYWNlRGVzdHJveWVyU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XHJcbiAgICBsZXQgZGVzdHJveWVyUGxhY2VkID0gdHJ1ZVxyXG4gICAgY29uc3QgZGVzdHJveWVyQXJyID0gZGV0ZXJtaW5lRGVzdHJveWVyQXJyQ29vcmRzKFxyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxyXG4gICAgICBjb29yZGluYXRlXHJcbiAgICApXHJcblxyXG4gICAgY29uc3Qgc2hpcFBsYWNlZCA9IGh1bWFuQm9hcmQucGxhY2VTaGlwKGRlc3Ryb3llckFycilcclxuICAgIGlmICghc2hpcFBsYWNlZCkge1xyXG4gICAgICBkZXN0cm95ZXJQbGFjZWQgPSBmYWxzZVxyXG4gICAgICByZXR1cm4gZGVzdHJveWVyUGxhY2VkXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGV0ZXJtaW5lRGVzdHJveWVyQXJyQ29vcmRzID0gKFxyXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICAgIGNvb3JkaW5hdGVcclxuICApID0+IHtcclxuICAgIGNvbnN0IGRlc3Ryb3llckFyciA9IFtdXHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBkZXN0cm95ZXJBcnIucHVzaChjb29yZGluYXRlKVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkID0gW2Nvb3JkaW5hdGVbMF0sICgrY29vcmRpbmF0ZVsxXSArIGkpLnRvU3RyaW5nKCldXHJcbiAgICAgICAgZGVzdHJveWVyQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZGVzdHJveWVyQXJyLnB1c2goY29vcmRpbmF0ZSlcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjb29yZCA9IFsoK2Nvb3JkaW5hdGVbMF0gLSBpKS50b1N0cmluZygpLCBjb29yZGluYXRlWzFdXVxyXG4gICAgICAgIGRlc3Ryb3llckFyci5wdXNoKGNvb3JkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVzdHJveWVyQXJyXHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGFjZUFJU2hpcHMgPSAoKSA9PiB7XHJcbiAgICBwbGFjZVNoaXBzKGFpQm9hcmQsIHJldHVyblJhbmRvbUFJQm9hcmQoKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYXllcnMgPSB7fVxyXG5cclxuICBjb25zdCBnZXRQbGF5ZXJzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHBsYXllcnNcclxuICB9XHJcblxyXG4gIGNvbnN0IGh1bWFuUGxheWVyID0gUGxheWVyKCdIdW1hbicsIGZhbHNlKVxyXG4gIGNvbnN0IGFpUGxheWVyID0gUGxheWVyKCdBSScsIHRydWUpXHJcbiAgcGxheWVycy5odW1hbiA9IGh1bWFuUGxheWVyXHJcbiAgcGxheWVycy5BSSA9IGFpUGxheWVyXHJcblxyXG4gIGxldCBjdXJyZW50UGxheWVyID0gcGxheWVycy5odW1hblxyXG5cclxuICBjb25zdCBnZXRDdXJyZW50UGxheWVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRQbGF5ZXJcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYXlSb3VuZCA9IChjb29yZGluYXRlKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuaHVtYW4uZ2V0TmFtZSgpKSB7XHJcbiAgICAgIGFpQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKVxyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5BSS5nZXROYW1lKCkpIHtcclxuICAgICAgY29uc3QgbmV4dE1vdmUgPSBjb21wdXRlcnNOZXh0TW92ZSgpXHJcbiAgICAgIGh1bWFuQm9hcmQucmVjZWl2ZUF0dGFjayhuZXh0TW92ZSlcclxuICAgICAgaHVtYW5Cb2FyZC5yZW1vdmVMYXN0QUlNb3ZlKG5leHRNb3ZlKVxyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFBsYXllcigpXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50UGxheWVyLmdldE5hbWUoKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbXB1dGVyc05leHRNb3ZlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXZhaWxhYmxlTW92ZXMgPSBodW1hbkJvYXJkLmdldEFJQXZhaWxhYmxlTW92ZXMoKVxyXG4gICAgY29uc3QgbGFzdEFJTW92ZVN1Y2Nlc3NmdWwgPSBodW1hbkJvYXJkLmdldExhc3RBSU1vdmVTdWNjZXNzZnVsKClcclxuICAgIGlmIChsYXN0QUlNb3ZlU3VjY2Vzc2Z1bCkge1xyXG4gICAgICBjb25zdCBhZGphY2VudFNsb3RzID0gY3VycmVudFBsYXllci5nZXRBZGphY2VudFNsb3RzKFxyXG4gICAgICAgIHRydWUsXHJcbiAgICAgICAgYXZhaWxhYmxlTW92ZXMsXHJcbiAgICAgICAgaHVtYW5Cb2FyZC5nZXRTdWNjZXNzZnVsU2hvdHMoKSxcclxuICAgICAgICBodW1hbkJvYXJkLmdldE1pc3NlZFNob3RzKClcclxuICAgICAgKVxyXG4gICAgICBodW1hbkJvYXJkLmFkZEFkamFjZW50U2xvdHNUb1F1ZXVlKGFkamFjZW50U2xvdHMpXHJcbiAgICAgIGNvbnN0IG5leHRNb3ZlID0gaHVtYW5Cb2FyZC5nZXRBZGphY2VudFF1ZXVlU2xvdCgpXHJcbiAgICAgIHJldHVybiBuZXh0TW92ZVxyXG4gICAgfSBlbHNlIGlmICghbGFzdEFJTW92ZVN1Y2Nlc3NmdWwpIHtcclxuICAgICAgY29uc3QgcmFuZG9tTW92ZSA9IGN1cnJlbnRQbGF5ZXIubWFrZVJhbmRvbU1vdmUodHJ1ZSwgYXZhaWxhYmxlTW92ZXMpXHJcbiAgICAgIHJldHVybiByYW5kb21Nb3ZlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBzd2l0Y2hQbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICBjdXJyZW50UGxheWVyID1cclxuICAgICAgY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuaHVtYW4uZ2V0TmFtZSgpXHJcbiAgICAgICAgPyAoY3VycmVudFBsYXllciA9IHBsYXllcnMuQUkpXHJcbiAgICAgICAgOiAoY3VycmVudFBsYXllciA9IHBsYXllcnMuaHVtYW4pXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja0ZvcldpbiA9ICgpID0+IHtcclxuICAgIGxldCB3aW5uZXJcclxuICAgIGlmIChcclxuICAgICAgY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuaHVtYW4uZ2V0TmFtZSgpICYmXHJcbiAgICAgIGFpQm9hcmQuYWxsU2hpcHNTdW5rKClcclxuICAgICkge1xyXG4gICAgICB3aW5uZXIgPSBjdXJyZW50UGxheWVyXHJcbiAgICAgIHJldHVybiB3aW5uZXJcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpID09PSBwbGF5ZXJzLkFJLmdldE5hbWUoKSAmJlxyXG4gICAgICBodW1hbkJvYXJkLmFsbFNoaXBzU3VuaygpXHJcbiAgICApIHtcclxuICAgICAgd2lubmVyID0gY3VycmVudFBsYXllclxyXG4gICAgICByZXR1cm4gd2lubmVyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2lubmVyXHJcbiAgfVxyXG5cclxuICBjb25zdCBpc1NoaXBTdW5rID0gKHBsYXllcikgPT4ge1xyXG4gICAgbGV0IHNoaXBJc1N1bmtcclxuICAgIGlmIChwbGF5ZXIgPT09ICdodW1hbicpIHtcclxuICAgICAgY29uc3QgbGFzdFN1Y2Nlc3NmdWxIdW1hbk1vdmUgPSBhaUJvYXJkLmdldExhc3RTdWNjZXNzZnVsTW92ZSgpXHJcbiAgICAgIGlmIChsYXN0U3VjY2Vzc2Z1bEh1bWFuTW92ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc2hpcElzU3VuayA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIFtzaGlwSXNTdW5rXVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGdhbWVCb2FyZCA9IGFpQm9hcmQuZ2V0Qm9hcmQoKVxyXG4gICAgICBjb25zdCB0YXJnZXRTaGlwT2JqID1cclxuICAgICAgICBnYW1lQm9hcmRbbGFzdFN1Y2Nlc3NmdWxIdW1hbk1vdmVbMF1dW2xhc3RTdWNjZXNzZnVsSHVtYW5Nb3ZlWzFdXVxyXG4gICAgICBzaGlwSXNTdW5rID0gdGFyZ2V0U2hpcE9iai5oYXNCZWVuU3VuaygpXHJcbiAgICAgIHJldHVybiBbc2hpcElzU3VuaywgdGFyZ2V0U2hpcE9iaiwgbGFzdFN1Y2Nlc3NmdWxIdW1hbk1vdmVdXHJcbiAgICB9IGVsc2UgaWYgKHBsYXllciA9PT0gJ2NvbXB1dGVyJykge1xyXG4gICAgICBjb25zdCBsYXN0U3VjY2Vzc2Z1bEFJTW92ZSA9IGh1bWFuQm9hcmQuZ2V0TGFzdFN1Y2Nlc3NmdWxNb3ZlKClcclxuICAgICAgaWYgKGxhc3RTdWNjZXNzZnVsQUlNb3ZlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzaGlwSXNTdW5rID0gZmFsc2VcclxuICAgICAgICByZXR1cm4gW3NoaXBJc1N1bmtdXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZ2FtZUJvYXJkID0gaHVtYW5Cb2FyZC5nZXRCb2FyZCgpXHJcbiAgICAgIGNvbnN0IHRhcmdldFNoaXBPYmogPVxyXG4gICAgICAgIGdhbWVCb2FyZFtsYXN0U3VjY2Vzc2Z1bEFJTW92ZVswXV1bbGFzdFN1Y2Nlc3NmdWxBSU1vdmVbMV1dXHJcbiAgICAgIHNoaXBJc1N1bmsgPSB0YXJnZXRTaGlwT2JqLmhhc0JlZW5TdW5rKClcclxuXHJcbiAgICAgIHJldHVybiBbc2hpcElzU3VuaywgdGFyZ2V0U2hpcE9iaiwgbGFzdFN1Y2Nlc3NmdWxBSU1vdmVdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXNldEdhbWVTdGF0ZSA9ICh3aW5uZXIpID0+IHtcclxuICAgIGh1bWFuQm9hcmQuY2xlYXJHYW1lQm9hcmQoKVxyXG4gICAgYWlCb2FyZC5jbGVhckdhbWVCb2FyZCgpXHJcbiAgICBodW1hbkJvYXJkLmNyZWF0ZUdhbWVCb2FyZCgpXHJcbiAgICBhaUJvYXJkLmNyZWF0ZUdhbWVCb2FyZCgpXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0SHVtYW5Cb2FyZDogaHVtYW5Cb2FyZC5nZXRCb2FyZCxcclxuICAgIGdldEFJQm9hcmQ6IGFpQm9hcmQuZ2V0Qm9hcmQsXHJcbiAgICBnZXRBSUJvYXJkT2JqOiBhaUJvYXJkLFxyXG4gICAgZ2V0SHVtYW5Cb2FyZE9iajogaHVtYW5Cb2FyZCxcclxuICAgIHN3aXRjaFBsYXllcixcclxuICAgIHBsYXlSb3VuZCxcclxuICAgIGdldEN1cnJlbnRQbGF5ZXIsXHJcbiAgICByZXNldEdhbWVTdGF0ZSxcclxuICAgIGNoZWNrRm9yV2luLFxyXG4gICAgZ2V0UGxheWVycyxcclxuICAgIHBsYWNlQUlTaGlwcyxcclxuICAgIHBsYWNlQ2FycmllclNoaXAsXHJcbiAgICBwbGFjZUJhdHRsZVNoaXAsXHJcbiAgICBwbGFjZUNydWlzZXJTaGlwLFxyXG4gICAgcGxhY2VTdWJtYXJpbmVTaGlwLFxyXG4gICAgcGxhY2VEZXN0cm95ZXJTaGlwLFxyXG4gICAgaXNTaGlwU3VuayxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdhbWVDb250cm9sbGVyIH1cclxuXHJcbmNvbnN0IHBsYWNlU2hpcHMgPSAoYm9hcmQsIGNvb3JkaW5hdGVzT2JqKSA9PiB7XHJcbiAgY29uc3Qgc2hpcENvb3JkaW5hdGVzQXJyID0gT2JqZWN0LnZhbHVlcyhjb29yZGluYXRlc09iailcclxuICBzaGlwQ29vcmRpbmF0ZXNBcnIuZm9yRWFjaCgoc2hpcENvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICBib2FyZC5wbGFjZVNoaXAoc2hpcENvb3JkaW5hdGVzKVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qIGNvbnN0IHBsYWNlRWFjaEh1bWFuU2hpcCA9IChjb29yZGluYXRlKSA9PiB7XHJcbiAgaHVtYW5Cb2FyZC5wbGFjZVNoaXAoY29vcmRpbmF0ZSlcclxufSAqL1xyXG4iLCJpbXBvcnQgeyBhcnJheXNBcmVFcXVhbCB9IGZyb20gJy4uL2hlbHBlcnMvYXJyYXlzQXJlRXF1YWwnXHJcbmltcG9ydCB7IFNoaXAgfSBmcm9tICcuL1NoaXAnXHJcblxyXG5leHBvcnQgY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcclxuICBsZXQgYm9hcmQgPSBbXVxyXG4gIGNvbnN0IHNoaXBPYmplY3RzID0gW11cclxuICBjb25zdCBtaXNzZWRTaG90cyA9IFtdXHJcbiAgY29uc3QgYWlBdmFpbGFibGVNb3ZlcyA9IFtdXHJcbiAgY29uc3Qgc3VjY2Vzc2Z1bFNob3RzID0gW11cclxuICBsZXQgYWRqYWNlbnRTbG90c1F1ZXVlID0gW11cclxuICBjb25zdCByb3dzID0gOVxyXG4gIGNvbnN0IGNvbHVtbnMgPSA5XHJcbiAgbGV0IGxhc3RBSU1vdmVTdWNjZXNzZnVsID0gZmFsc2VcclxuICBsZXQgbGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwgPSBmYWxzZVxyXG5cclxuICBjb25zdCBjcmVhdGVHYW1lQm9hcmQgPSAoKSA9PiB7XHJcbiAgICBib2FyZCA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gcm93czsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgYm9hcmRbaV0gPSBbXVxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICBib2FyZFtpXS5wdXNoKHVuZGVmaW5lZClcclxuICAgICAgICBjb25zdCBjb29yZGluYXRlID0gW2ksIGpdXHJcbiAgICAgICAgYWlBdmFpbGFibGVNb3Zlcy5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNoZWNrcyBpZiBjb29yZGluYXRlcyBmb3Igc2hpcCBpcyBvbiB0aGVcclxuICAvLyBnYW1lIGJvYXJkXHJcbiAgY29uc3QgdmFsaWRhdGVDb29yZGluYXRlcyA9IChjb29yZGluYXRlcykgPT4ge1xyXG4gICAgbGV0IHZhbGlkQ29vcmRpbmF0ZXMgPSB0cnVlXHJcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVbMF1cclxuICAgICAgY29uc3QgY29sdW1uID0gY29vcmRpbmF0ZVsxXVxyXG4gICAgICBpZiAocm93ID4gOSB8fCByb3cgPCAwKSB7XHJcbiAgICAgICAgdmFsaWRDb29yZGluYXRlcyA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkQ29vcmRpbmF0ZXNcclxuICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPiA5IHx8IGNvbHVtbiA8IDApIHtcclxuICAgICAgICB2YWxpZENvb3JkaW5hdGVzID0gZmFsc2VcclxuICAgICAgICByZXR1cm4gdmFsaWRDb29yZGluYXRlc1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB2YWxpZENvb3JkaW5hdGVzXHJcbiAgfVxyXG5cclxuICAvLyBjaGVja3MgaWYgc2hpcCBjb29yZGluYXRlcyBvdmVybGFwIHdpdGggYWxyZWFkeVxyXG4gIC8vIHBsYWNlZCBzaGlwIGNvb3JkaW5hdGVzIGZvciB0aGUgc2FtZSBzaGlwXHJcbiAgY29uc3QgY2hlY2tTZWxmT3ZlcmxhcCA9IChjb29yZGluYXRlcykgPT4ge1xyXG4gICAgbGV0IGNvb3JkaW5hdGVzT3ZlcmxhcCA9IGZhbHNlXHJcbiAgICBsZXQgcHJldkNvb3JkaW5hdGVcclxuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCA+IDApIHtcclxuICAgICAgICBpZiAoYXJyYXlzQXJlRXF1YWwocHJldkNvb3JkaW5hdGUsIGNvb3JkaW5hdGUpKSB7XHJcbiAgICAgICAgICBjb29yZGluYXRlc092ZXJsYXAgPSB0cnVlXHJcbiAgICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXNPdmVybGFwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXZDb29yZGluYXRlID0gY29vcmRpbmF0ZVxyXG4gICAgICB9XHJcbiAgICAgIHByZXZDb29yZGluYXRlID0gY29vcmRpbmF0ZVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gY29vcmRpbmF0ZXNPdmVybGFwXHJcbiAgfVxyXG5cclxuICAvLyBTaG91bGQgcHJldmVudCBhIHNoaXAgZnJvbSBiZWluZ1xyXG4gIC8vIHBsYWNlZCBvbiB0b3Agb2YgYW5vdGhlciBzaGlwXHJcbiAgY29uc3QgY2hlY2tPdmVybGFwV2l0aE90aGVyU2hpcHMgPSAoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgIGxldCBzaGlwc092ZXJsYXAgPSBmYWxzZVxyXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgICBjb25zdCByb3cgPSBjb29yZGluYXRlWzBdXHJcbiAgICAgIGNvbnN0IGNvbHVtbiA9IGNvb3JkaW5hdGVbMV1cclxuICAgICAgY29uc3QgYm9hcmRDZWxsID0gYm9hcmRbcm93XVtjb2x1bW5dXHJcbiAgICAgIGlmICh0eXBlb2YgYm9hcmRDZWxsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHNoaXBzT3ZlcmxhcCA9IHRydWVcclxuICAgICAgICByZXR1cm4gc2hpcHNPdmVybGFwXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHNoaXBzT3ZlcmxhcFxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwID0gKGNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICBsZXQgc2hpcFBsYWNlZCA9IHRydWVcclxuXHJcbiAgICBjb25zdCBsZWdhbENvb3JkaW5hdGVzID0gdmFsaWRhdGVDb29yZGluYXRlcyhjb29yZGluYXRlcylcclxuICAgIGlmICghbGVnYWxDb29yZGluYXRlcykge1xyXG4gICAgICBzaGlwUGxhY2VkID0gZmFsc2VcclxuICAgICAgcmV0dXJuIHNoaXBQbGFjZWRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvdmVybGFwcGluZ0Nvb3JkaW5hdGVzID0gY2hlY2tTZWxmT3ZlcmxhcChjb29yZGluYXRlcylcclxuICAgIGlmIChvdmVybGFwcGluZ0Nvb3JkaW5hdGVzKSB7XHJcbiAgICAgIHNoaXBQbGFjZWQgPSBmYWxzZVxyXG4gICAgICByZXR1cm4gc2hpcFBsYWNlZFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNoaXBPdmVybGFwcGluZyA9IGNoZWNrT3ZlcmxhcFdpdGhPdGhlclNoaXBzKGNvb3JkaW5hdGVzKVxyXG4gICAgaWYgKHNoaXBPdmVybGFwcGluZykge1xyXG4gICAgICBzaGlwUGxhY2VkID0gZmFsc2VcclxuICAgICAgcmV0dXJuIHNoaXBQbGFjZWRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gY29vcmRpbmF0ZXMubGVuZ3RoXHJcbiAgICBjb25zdCBzaGlwT2JqZWN0ID0gU2hpcChzaGlwTGVuZ3RoLCAwLCBmYWxzZSlcclxuICAgIHNoaXBPYmplY3RzLnB1c2goc2hpcE9iamVjdClcclxuXHJcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVbMF1cclxuICAgICAgY29uc3QgY29sdW1uID0gY29vcmRpbmF0ZVsxXVxyXG4gICAgICBib2FyZFtyb3ddW2NvbHVtbl0gPSBzaGlwT2JqZWN0XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBzaGlwUGxhY2VkXHJcbiAgfVxyXG5cclxuICAvLyBwcmV2ZW50cyBodW1hbiBwbGF5ZXIgZnJvbSBhdHRhY2tpbmcgcHJldmlvdXNseVxyXG4gIC8vIGF0dGFja2VkIGNvb3JkaW5hdGVcclxuICBjb25zdCBwcmV2ZW50U2FtZUF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XHJcbiAgICBsZXQgYWxyZWFkeUF0dGFja2VkID0gZmFsc2VcclxuICAgIHN1Y2Nlc3NmdWxTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XHJcbiAgICAgIGlmIChhcnJheXNBcmVFcXVhbChjb29yZGluYXRlLCBzaG90KSkge1xyXG4gICAgICAgIGFscmVhZHlBdHRhY2tlZCA9IHRydWVcclxuICAgICAgICByZXR1cm4gcHJldmVudFNhbWVBdHRhY2tcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBtaXNzZWRTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XHJcbiAgICAgIGlmIChhcnJheXNBcmVFcXVhbChjb29yZGluYXRlLCBzaG90KSkge1xyXG4gICAgICAgIGFscmVhZHlBdHRhY2tlZCA9IHRydWVcclxuICAgICAgICByZXR1cm4gcHJldmVudFNhbWVBdHRhY2tcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBhbHJlYWR5QXR0YWNrZWRcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVzWzBdXHJcbiAgICBjb25zdCBjb2x1bW4gPSBjb29yZGluYXRlc1sxXVxyXG4gICAgLy8gY29vcmRpbmF0ZXMgPSBbcm93LCBjb2x1bW5dXHJcbiAgICBjb25zdCBib2FyZENlbGwgPSBib2FyZFtyb3ddW2NvbHVtbl1cclxuICAgIGNvbnN0IHNoaXBPYmogPSBib2FyZENlbGxcclxuXHJcbiAgICAvLyBOZWVkIHRvIGNoZWNrIGlmIG5ldyBjb29yZGluYXRlIGlzIGFscmVhZHlcclxuICAgIC8vIGluc2lkZSBzdWNjZXNzZnVsU2hvdHMgb3IgbWlzc2VkU2hvdHNcclxuICAgIGNvbnN0IGFscmVhZHlBdHRhY2tlZCA9IHByZXZlbnRTYW1lQXR0YWNrKGNvb3JkaW5hdGVzKVxyXG4gICAgaWYgKGFscmVhZHlBdHRhY2tlZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGJvYXJkQ2VsbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgc2hpcE9iai5oaXQoKVxyXG4gICAgICBsYXN0QUlNb3ZlU3VjY2Vzc2Z1bCA9IHRydWVcclxuICAgICAgbGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwgPSB0cnVlXHJcbiAgICAgIHN1Y2Nlc3NmdWxTaG90cy5wdXNoKGNvb3JkaW5hdGVzKVxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYm9hcmRDZWxsICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICBsYXN0QUlNb3ZlU3VjY2Vzc2Z1bCA9IGZhbHNlXHJcbiAgICAgIGxhc3RIdW1hbk1vdmVTdWNjZXNzZnVsID0gZmFsc2VcclxuICAgICAgbWlzc2VkU2hvdHMucHVzaChjb29yZGluYXRlcylcclxuICAgICAgcmVtb3ZlQWRqYWNlbnRTbG90KGNvb3JkaW5hdGVzKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gSWYgdGhlIGNvbXB1dGVyIHJhbmRvbWx5IGd1ZXNzZXMgYSBzcG90IHRoYXQgaXMgYWxyZWFkeSBpbiB0aGUgYWRqYWNlbmN5XHJcbiAgLy8gc2xvdCBxdWV1ZSwgd2UgbmVlZCB0byByZW1vdmUgaXQgKGZyb20gdGhlIGFkamFjZW5jeSBxdWV1ZSkgc29cclxuICAvLyB0aGUgY29tcHV0ZXIgZG9lcyBub3QgYXR0ZW1wdCB0b1xyXG4gIC8vIHVzZSB0aGUgYWxyZWFkeSBndWVzc2VkIHNwb3Qgd2hlbiBwdWxsaW5nIGZyb20gdGhlIGFkamFjZW5jeVxyXG4gIC8vIHF1ZXVlIGZvciBpdCdzIG5leHQgbW92ZVxyXG4gIGNvbnN0IHJlbW92ZUFkamFjZW50U2xvdCA9IChjb29yZGluYXRlcykgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0Q29vcmRpbmF0ZXMgPSBjb29yZGluYXRlc1xyXG4gICAgY29uc3QgYWRqYWNlbnRRdWV1ZSA9IG5ldyBTZXQoKVxyXG4gICAgZm9yIChjb25zdCBzbG90IG9mIGFkamFjZW50U2xvdHNRdWV1ZSkge1xyXG4gICAgICBhZGphY2VudFF1ZXVlLmFkZChzbG90LnRvU3RyaW5nKCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmlsdGVyIHRoZSBhZGphY2VuY3kgc2xvdCBxdWV1ZSBkb3duIHRvIHNsb3RzIHRoYXQgaGF2ZSBOT1RcclxuICAgIC8vIGFscmVhZHkgYmVlbiBndWVzZWQuXHJcbiAgICBhZGphY2VudFNsb3RzUXVldWUgPSBhZGphY2VudFNsb3RzUXVldWUuZmlsdGVyKFxyXG4gICAgICAoc2xvdCkgPT4gIWFycmF5c0FyZUVxdWFsKHNsb3QsIHRhcmdldENvb3JkaW5hdGVzKVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xyXG4gICAgbGV0IGV2ZXJ5U2hpcFNhbmsgPSB0cnVlXHJcbiAgICBzaGlwT2JqZWN0cy5mb3JFYWNoKChzaGlwT2JqKSA9PiB7XHJcbiAgICAgIGlmICghc2hpcE9iai5oYXNCZWVuU3VuaygpKSB7XHJcbiAgICAgICAgZXZlcnlTaGlwU2FuayA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIGV2ZXJ5U2hpcFNhbmtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBldmVyeVNoaXBTYW5rXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVMYXN0QUlNb3ZlID0gKHJhbmRvbU1vdmUpID0+IHtcclxuICAgIGFpQXZhaWxhYmxlTW92ZXMuZm9yRWFjaCgobW92ZSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGFycmF5c0FyZUVxdWFsKG1vdmUsIHJhbmRvbU1vdmUpKSB7XHJcbiAgICAgICAgYWlBdmFpbGFibGVNb3Zlcy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBhZGRBZGphY2VudFNsb3RzVG9RdWV1ZSA9IChhZGphY2VudFNsb3RzKSA9PiB7XHJcbiAgICBhZGphY2VudFNsb3RzLmZvckVhY2goKHNsb3QpID0+IHtcclxuICAgICAgYWRqYWNlbnRTbG90c1F1ZXVlLnB1c2goc2xvdClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBjbGVhckdhbWVCb2FyZCA9ICgpID0+IHtcclxuICAgIHNoaXBPYmplY3RzLmxlbmd0aCA9IDBcclxuICAgIG1pc3NlZFNob3RzLmxlbmd0aCA9IDBcclxuICAgIGFpQXZhaWxhYmxlTW92ZXMubGVuZ3RoID0gMFxyXG4gICAgc3VjY2Vzc2Z1bFNob3RzLmxlbmd0aCA9IDBcclxuICAgIGFkamFjZW50U2xvdHNRdWV1ZS5sZW5ndGggPSAwXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IHtcclxuICAgIHJldHVybiBib2FyZFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0TWlzc2VkU2hvdHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbWlzc2VkU2hvdHNcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFN1Y2Nlc3NmdWxTaG90cyA9ICgpID0+IHtcclxuICAgIHJldHVybiBzdWNjZXNzZnVsU2hvdHNcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFNoaXBPYmplY3RzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHNoaXBPYmplY3RzXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRBSUF2YWlsYWJsZU1vdmVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGFpQXZhaWxhYmxlTW92ZXNcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldExhc3RBSU1vdmVTdWNjZXNzZnVsID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGxhc3RBSU1vdmVTdWNjZXNzZnVsXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRMYXN0SHVtYW5Nb3ZlU3VjY2Vzc2Z1bCA9ICgpID0+IHtcclxuICAgIHJldHVybiBsYXN0SHVtYW5Nb3ZlU3VjY2Vzc2Z1bFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0QWRqYWNlbnRTbG90c1F1ZXVlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGFkamFjZW50U2xvdHNRdWV1ZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0QWRqYWNlbnRRdWV1ZVNsb3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYWRqYWNlbnRTbG90c1F1ZXVlLnBvcCgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRMYXN0U3VjY2Vzc2Z1bE1vdmUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc3VjY2Vzc2Z1bFNob3RzLmF0KC0xKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNyZWF0ZUdhbWVCb2FyZCxcclxuICAgIGdldEJvYXJkLFxyXG4gICAgcGxhY2VTaGlwLFxyXG4gICAgcmVjZWl2ZUF0dGFjayxcclxuICAgIGNsZWFyR2FtZUJvYXJkLFxyXG4gICAgZ2V0TWlzc2VkU2hvdHMsXHJcbiAgICBnZXRTdWNjZXNzZnVsU2hvdHMsXHJcbiAgICBhbGxTaGlwc1N1bmssXHJcbiAgICBnZXRBSUF2YWlsYWJsZU1vdmVzLFxyXG4gICAgdmFsaWRhdGVDb29yZGluYXRlcyxcclxuICAgIHByZXZlbnRTYW1lQXR0YWNrLFxyXG4gICAgY2hlY2tTZWxmT3ZlcmxhcCxcclxuICAgIGdldFNoaXBPYmplY3RzLFxyXG4gICAgcmVtb3ZlTGFzdEFJTW92ZSxcclxuICAgIGNoZWNrT3ZlcmxhcFdpdGhPdGhlclNoaXBzLFxyXG4gICAgZ2V0TGFzdEFJTW92ZVN1Y2Nlc3NmdWwsXHJcbiAgICBnZXRMYXN0SHVtYW5Nb3ZlU3VjY2Vzc2Z1bCxcclxuICAgIGdldEFkamFjZW50U2xvdHNRdWV1ZSxcclxuICAgIGFkZEFkamFjZW50U2xvdHNUb1F1ZXVlLFxyXG4gICAgZ2V0QWRqYWNlbnRRdWV1ZVNsb3QsXHJcbiAgICByZW1vdmVBZGphY2VudFNsb3QsXHJcbiAgICBnZXRMYXN0U3VjY2Vzc2Z1bE1vdmVcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgYXJyYXlzQXJlRXF1YWwgfSBmcm9tICcuLi9oZWxwZXJzL2FycmF5c0FyZUVxdWFsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYXllciA9IChuYW1lLCBpc0FJKSA9PiB7XHJcbiAgLy8gVXNlZCB0byBtYWtlIEFJIHNlbGVjdCByYW5kb20sIGxlZ2FsIGNvb3JkaW5hdGVcclxuICAvLyBvbiBwbGF5ZXJzIGdhbWUgYm9hcmRcclxuICBjb25zdCBtYWtlUmFuZG9tTW92ZSA9IChpc0FJLCBhdmFpbGFibGVNb3ZlcykgPT4ge1xyXG4gICAgaWYgKCFpc0FJIHx8IGF2YWlsYWJsZU1vdmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXZhaWxhYmxlTW92ZXNMZW5ndGggPSBhdmFpbGFibGVNb3Zlcy5sZW5ndGhcclxuICAgIGNvbnN0IHJhbmRvbUFyckluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlTW92ZXNMZW5ndGgpXHJcbiAgICBjb25zdCByYW5kb21Db29yZGluYXRlID0gYXZhaWxhYmxlTW92ZXNbcmFuZG9tQXJySW5kZXhdXHJcblxyXG4gICAgcmV0dXJuIHJhbmRvbUNvb3JkaW5hdGVcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEFkamFjZW50U2xvdHMgPSAoXHJcbiAgICBpc0FJLFxyXG4gICAgYXZhaWxhYmxlTW92ZXMsXHJcbiAgICBzdWNjZXNzZnVsU2hvdHMsXHJcbiAgICBtaXNzZWRTaG90c1xyXG4gICkgPT4ge1xyXG4gICAgaWYgKCFpc0FJIHx8IGF2YWlsYWJsZU1vdmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGFzdFN1Y2Nlc3NmdWxNb3ZlID0gc3VjY2Vzc2Z1bFNob3RzLmF0KC0xKVxyXG4gICAgY29uc3QgYWRqYWNlbnRTbG90cyA9IHJldHJpZXZlQWRqYWNlbnRTbG90cyhsYXN0U3VjY2Vzc2Z1bE1vdmUpXHJcbiAgICBjb25zdCBsZWdhbEFkamFjZW50U2xvdHMgPSByZW1vdmVJbGxlZ2FsQWRqYWNlbnRTbG90cyhhZGphY2VudFNsb3RzKVxyXG4gICAgLyogY29uc3QgYXZhaWxhYmxlQWRqYWNlbnRTbG90cyA9IHByZXZlbnRQcmV2aW91c1Nob3RUb1F1ZXVlKFxyXG4gICAgICBhdmFpbGFibGVNb3ZlcyxcclxuICAgICAgbGVnYWxBZGphY2VudFNsb3RzLFxyXG4gICAgICBzdWNjZXNzZnVsU2hvdHMsXHJcbiAgICAgIG1pc3NlZFNob3RzXHJcbiAgICApICovXHJcbiAgICByZXR1cm4gbGVnYWxBZGphY2VudFNsb3RzXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRDZWxsQWJvdmUgPSAobGFzdFN1Y2Nlc3NmdWxNb3ZlKSA9PiB7XHJcbiAgICAvLyB0aGUgcm93IG5lZWRzIHRvIGNoYW5nZSBieSBvbmVcclxuICAgIGNvbnN0IG5ld0FyciA9IFtdXHJcbiAgICBjb25zdCBuZXdSb3cgPSArbGFzdFN1Y2Nlc3NmdWxNb3ZlWzBdIC0gMVxyXG4gICAgaWYgKG5ld1JvdyA+IDkgfHwgbmV3Um93IDwgMCkge1xyXG4gICAgICByZXR1cm4gJ2lsbGVnYWwnXHJcbiAgICB9XHJcbiAgICBuZXdBcnJbMF0gPSBuZXdSb3dcclxuICAgIG5ld0FyclsxXSA9ICtsYXN0U3VjY2Vzc2Z1bE1vdmVbMV1cclxuICAgIHJldHVybiBuZXdBcnJcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENlbGxCZWxvdyA9IChsYXN0U3VjY2Vzc2Z1bE1vdmUpID0+IHtcclxuICAgIC8vIHRoZSByb3cgbmVlZHMgdG8gY2hhbmdlIGJ5IG9uZVxyXG4gICAgY29uc3QgbmV3QXJyID0gW11cclxuICAgIGNvbnN0IG5ld1JvdyA9ICtsYXN0U3VjY2Vzc2Z1bE1vdmVbMF0gKyAxXHJcbiAgICBpZiAobmV3Um93ID4gOSB8fCBuZXdSb3cgPCAwKSB7XHJcbiAgICAgIHJldHVybiAnaWxsZWdhbCdcclxuICAgIH1cclxuICAgIG5ld0FyclswXSA9IG5ld1Jvd1xyXG4gICAgbmV3QXJyWzFdID0gK2xhc3RTdWNjZXNzZnVsTW92ZVsxXVxyXG4gICAgcmV0dXJuIG5ld0FyclxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Q2VsbFRvUmlnaHQgPSAobGFzdFN1Y2Nlc3NmdWxNb3ZlKSA9PiB7XHJcbiAgICAvLyB0aGUgcm93IG5lZWRzIHRvIGNoYW5nZSBieSBvbmVcclxuICAgIGNvbnN0IG5ld0FyciA9IFtdXHJcbiAgICBjb25zdCBuZXdDb2x1bW4gPSArbGFzdFN1Y2Nlc3NmdWxNb3ZlWzFdICsgMVxyXG4gICAgaWYgKG5ld0NvbHVtbiA+IDkgfHwgbmV3Q29sdW1uIDwgMCkge1xyXG4gICAgICByZXR1cm4gJ2lsbGVnYWwnXHJcbiAgICB9XHJcbiAgICBuZXdBcnJbMF0gPSArbGFzdFN1Y2Nlc3NmdWxNb3ZlWzBdXHJcbiAgICBuZXdBcnJbMV0gPSBuZXdDb2x1bW5cclxuICAgIHJldHVybiBuZXdBcnJcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENlbGxUb0xlZnQgPSAobGFzdFN1Y2Nlc3NmdWxNb3ZlKSA9PiB7XHJcbiAgICAvLyB0aGUgcm93IG5lZWRzIHRvIGNoYW5nZSBieSBvbmVcclxuICAgIGNvbnN0IG5ld0FyciA9IFtdXHJcbiAgICBjb25zdCBuZXdDb2x1bW4gPSArbGFzdFN1Y2Nlc3NmdWxNb3ZlWzFdIC0gMVxyXG4gICAgaWYgKG5ld0NvbHVtbiA+IDkgfHwgbmV3Q29sdW1uIDwgMCkge1xyXG4gICAgICByZXR1cm4gJ2lsbGVnYWwnXHJcbiAgICB9XHJcbiAgICBuZXdBcnJbMF0gPSArbGFzdFN1Y2Nlc3NmdWxNb3ZlWzBdXHJcbiAgICBuZXdBcnJbMV0gPSBuZXdDb2x1bW5cclxuICAgIHJldHVybiBuZXdBcnJcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbmFtZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmV0cmlldmVBZGphY2VudFNsb3RzID0gKGxhc3RTdWNjZXNzZnVsTW92ZSkgPT4ge1xyXG4gICAgY29uc3QgbGFzdFN1Y2Nlc3NmdWxNb3ZlVmFsdWUgPSBsYXN0U3VjY2Vzc2Z1bE1vdmVcclxuICAgIGNvbnN0IGFkamFjZW50U2xvdHMgPSBbXVxyXG4gICAgYWRqYWNlbnRTbG90cy5wdXNoKGdldENlbGxBYm92ZShsYXN0U3VjY2Vzc2Z1bE1vdmVWYWx1ZSkpXHJcbiAgICBhZGphY2VudFNsb3RzLnB1c2goZ2V0Q2VsbEJlbG93KGxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlKSlcclxuICAgIGFkamFjZW50U2xvdHMucHVzaChnZXRDZWxsVG9SaWdodChsYXN0U3VjY2Vzc2Z1bE1vdmVWYWx1ZSkpXHJcbiAgICBhZGphY2VudFNsb3RzLnB1c2goZ2V0Q2VsbFRvTGVmdChsYXN0U3VjY2Vzc2Z1bE1vdmVWYWx1ZSkpXHJcbiAgICByZXR1cm4gYWRqYWNlbnRTbG90c1xyXG4gIH1cclxuXHJcbiAgLy8gcHJldmVudHMgYWRkaW5nIGFkamFjZW50IHNsb3RzIHRoYXQgYXJlIG5vdCBvbiB0aGUgYm9hcmRcclxuICBjb25zdCByZW1vdmVJbGxlZ2FsQWRqYWNlbnRTbG90cyA9IChhZGphY2VudFNsb3RzKSA9PiB7XHJcbiAgICBjb25zdCBhZGphY2VudFNsb3RzQXJyID0gYWRqYWNlbnRTbG90c1xyXG4gICAgYWRqYWNlbnRTbG90c0Fyci5mb3JFYWNoKChzbG90LCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoc2xvdCA9PT0gJ2lsbGVnYWwnKSB7XHJcbiAgICAgICAgYWRqYWNlbnRTbG90c0Fyci5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gYWRqYWNlbnRTbG90c0FyclxyXG4gIH1cclxuXHJcbiAgLy8gaWYgdGhlIGNvbXB1dGVyIGhhcyBhbHJlYWR5IChyYW5kb21seSkgZ3Vlc3NlZCBhIHNwb3Qgb24gdGhlIGJvYXJkLCBwcmV2ZW50XHJcbiAgLy8gYWRkaW5nIHRoZSBzcG90IHRvIHRoZSBhZGphY2VuY3kgbGlzdFxyXG4gIGNvbnN0IHByZXZlbnRQcmV2aW91c1Nob3RUb1F1ZXVlID0gKFxyXG4gICAgYXZhaWxhYmxlTW92ZXMsXHJcbiAgICBhZGphY2VudFNsb3RzLFxyXG4gICAgc3VjY2Vzc2Z1bFNob3RzLFxyXG4gICAgbWlzc2VkU2hvdHNcclxuICApID0+IHtcclxuICAgIGNvbnN0IHNsb3RzID0gYWRqYWNlbnRTbG90c1xyXG4gICAgY29uc3QgYWxsUHJldmlvdXNBdHRhY2tzID0gc3VjY2Vzc2Z1bFNob3RzLmNvbmNhdChtaXNzZWRTaG90cylcclxuXHJcbiAgICBjb25zdCBwcmV2aW91c0F0dGFja3MgPSBuZXcgU2V0KClcclxuXHJcbiAgICBmb3IgKGNvbnN0IHNob3Qgb2YgYWxsUHJldmlvdXNBdHRhY2tzKSB7XHJcbiAgICAgIHByZXZpb3VzQXR0YWNrcy5hZGQoc2hvdC50b1N0cmluZygpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdvIHRocm91Z2ggZWFjaCBhZGphY2VuY3kgc2xvdCwgYW5kIGRldGVybWluZSBpZiB0aGUgc2xvdCBpcyBpbiB0aGVcclxuICAgIC8vIHByZXZpb3VzQXR0YWNrcyBtZXRob2QuIFdlIGFyZSBmaWx0ZXJpbmcgb3V0IHRoZSBzbG90cyB0aGF0IGFyZSBpblxyXG4gICAgLy8gdGhlIHByZXZpb3VzIGF0dGFjayBzZXQsIGFzIHdlIGRvIG5vdCB3YW50IHRvIGhhdmUgdGhlIGNvbXB1dGVyXHJcbiAgICAvLyB0byB1c2UgdGhvc2Ugc2xvdHMgYWdhaW4gaW4gZnV0dXJlIHR1cm5zXHJcbiAgICBjb25zdCBmaWx0ZXJlZFNsb3RzID0gc2xvdHMuZmlsdGVyKFxyXG4gICAgICAoc2xvdCkgPT4gIXByZXZpb3VzQXR0YWNrcy5oYXMoc2xvdC50b1N0cmluZygpKVxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybiBmaWx0ZXJlZFNsb3RzXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbWFrZVJhbmRvbU1vdmUsXHJcbiAgICBnZXROYW1lLFxyXG4gICAgZ2V0QWRqYWNlbnRTbG90cyxcclxuICAgIHByZXZlbnRQcmV2aW91c1Nob3RUb1F1ZXVlXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBTaGlwID0gKGxlbmd0aCwgbnVtT2ZIaXRzLCBpc1N1bmspID0+IHtcclxuICAvLyBJbmNyZWFzZSBudW1iZXIgb2YgaGl0cyBpbiBzaGlwIGJ5IDFcclxuICBjb25zdCBoaXQgPSAoKSA9PiB7XHJcbiAgICBpZiAobnVtT2ZIaXRzID09PSBsZW5ndGgpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgbnVtT2ZIaXRzKytcclxuICAgIHJldHVybiBudW1PZkhpdHNcclxuICB9XHJcblxyXG4gIC8vIERldGVybWluZSBpZiB0aGUgc2hpcCBvYmplY3QgaGFzIGJlZW4gc3Vua1xyXG4gIGNvbnN0IGhhc0JlZW5TdW5rID0gKCkgPT4ge1xyXG4gICAgaWYgKGxlbmd0aCA9PT0gbnVtT2ZIaXRzKSB7XHJcbiAgICAgIGlzU3VuayA9IHRydWVcclxuICAgICAgcmV0dXJuIGlzU3Vua1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpc1N1bmtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldE51bU9mSGl0cyA9ICgpID0+IHtcclxuICAgIHJldHVybiBudW1PZkhpdHNcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHtcclxuICAgIHJldHVybiBsZW5ndGhcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGhpdCwgaGFzQmVlblN1bmssIGdldE51bU9mSGl0cywgZ2V0TGVuZ3RoIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgYXJyYXlzQXJlRXF1YWwgPSAoYXJyMSwgYXJyMikgPT4ge1xyXG4gIGlmIChhcnIxID09PSBudWxsIHx8IGFycjIgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICBpZiAoYXJyMS5sZW5ndGggIT09IGFycjIubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoYXJyMVtpXSAhPT0gYXJyMltpXSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG4iLCIvLyBkZWxheXMgZXhlY3V0aW9uIG9mIGEgZnVuY3Rpb24gZm9yIGEgc2V0IGFtb3VudCBvZiB0aW1lXHJcbmV4cG9ydCBjb25zdCBkZWxheSA9IChtcykgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHJldHVyblJhbmRvbUFJQm9hcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWlCb2FyZHMgPSBbYWlTaGlwQ29vcmRzT25lLCBhaVNoaXBDb29yZHNUd28sIGFpU2hpcENvb3Jkc1RocmVlXVxyXG4gIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMylcclxuICBjb25zdCBjaG9zZW5BSUJvYXJkID0gT2JqZWN0LnZhbHVlcyhhaUJvYXJkc1tyYW5kb21JbmRleF0pXHJcbiAgcmV0dXJuIGNob3NlbkFJQm9hcmRcclxufVxyXG5cclxuY29uc3QgYWlTaGlwQ29vcmRzT25lID0ge1xyXG4gIGNhcnJpZXI6IFtcclxuICAgIFs5LCAwXSxcclxuICAgIFs5LCAxXSxcclxuICAgIFs5LCAyXSxcclxuICAgIFs5LCAzXSxcclxuICAgIFs5LCA0XVxyXG4gIF0sXHJcbiAgYmF0dGxlc2hpcDogW1xyXG4gICAgWzUsIDVdLFxyXG4gICAgWzYsIDVdLFxyXG4gICAgWzcsIDVdLFxyXG4gICAgWzgsIDVdXHJcbiAgXSxcclxuICBjcnVpc2VyOiBbXHJcbiAgICBbMCwgNl0sXHJcbiAgICBbMSwgNl0sXHJcbiAgICBbMiwgNl1cclxuICBdLFxyXG4gIHN1Ym1hcmluZTogW1xyXG4gICAgWzMsIDhdLFxyXG4gICAgWzQsIDhdLFxyXG4gICAgWzUsIDhdXHJcbiAgXSxcclxuICBkZXN0cm95ZXI6IFtcclxuICAgIFswLCA5XSxcclxuICAgIFsxLCA5XVxyXG4gIF1cclxufVxyXG5cclxuY29uc3QgYWlTaGlwQ29vcmRzVHdvID0ge1xyXG4gIGNhcnJpZXI6IFtcclxuICAgIFswLCAwXSxcclxuICAgIFswLCAxXSxcclxuICAgIFswLCAyXSxcclxuICAgIFswLCAzXSxcclxuICAgIFswLCA0XVxyXG4gIF0sXHJcbiAgYmF0dGxlc2hpcDogW1xyXG4gICAgWzksIDVdLFxyXG4gICAgWzksIDZdLFxyXG4gICAgWzksIDddLFxyXG4gICAgWzksIDhdXHJcbiAgXSxcclxuICBjcnVpc2VyOiBbXHJcbiAgICBbMiwgMl0sXHJcbiAgICBbMywgMl0sXHJcbiAgICBbNCwgMl1cclxuICBdLFxyXG4gIHN1Ym1hcmluZTogW1xyXG4gICAgWzYsIDZdLFxyXG4gICAgWzYsIDddLFxyXG4gICAgWzYsIDhdXHJcbiAgXSxcclxuICBkZXN0cm95ZXI6IFtcclxuICAgIFs4LCAwXSxcclxuICAgIFs4LCAxXVxyXG4gIF1cclxufVxyXG5cclxuY29uc3QgYWlTaGlwQ29vcmRzVGhyZWUgPSB7XHJcbiAgY2FycmllcjogW1xyXG4gICAgWzUsIDBdLFxyXG4gICAgWzUsIDFdLFxyXG4gICAgWzUsIDJdLFxyXG4gICAgWzUsIDNdLFxyXG4gICAgWzUsIDRdXHJcbiAgXSxcclxuICBiYXR0bGVzaGlwOiBbXHJcbiAgICBbMCwgOV0sXHJcbiAgICBbMSwgOV0sXHJcbiAgICBbMiwgOV0sXHJcbiAgICBbMywgOV1cclxuICBdLFxyXG4gIGNydWlzZXI6IFtcclxuICAgIFs3LCA3XSxcclxuICAgIFs4LCA3XSxcclxuICAgIFs5LCA3XVxyXG4gIF0sXHJcbiAgc3VibWFyaW5lOiBbXHJcbiAgICBbMSwgMV0sXHJcbiAgICBbMiwgMV0sXHJcbiAgICBbMywgMV1cclxuICBdLFxyXG4gIGRlc3Ryb3llcjogW1xyXG4gICAgWzQsIDRdLFxyXG4gICAgWzQsIDVdXHJcbiAgXVxyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcclxcblxcclxcbi8qIERvY3VtZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxyXFxuICovXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBcHBseSBib3JkZXIgYm94IHRvIGVudGlyZSBkb2N1bWVudCAqL1xcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTZWN0aW9uc1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcclxcbiAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxyXFxufVxcclxcblxcclxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcclxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5wcmUge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXHJcXG4gICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5hYmJyW3RpdGxlXSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmIsXFxyXFxuc3Ryb25nIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuY29kZSxcXHJcXG5rYmQsXFxyXFxuc2FtcCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuc21hbGwge1xcclxcbiAgICBmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXHJcXG4gICAqIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnN1YixcXHJcXG5zdXAge1xcclxcbiAgICBmb250LXNpemU6IDc1JTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5zdWIge1xcclxcbiAgICBib3R0b206IC0wLjI1ZW07XFxyXFxufVxcclxcblxcclxcbnN1cCB7XFxyXFxuICAgIHRvcDogLTAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbWJlZGRlZCBjb250ZW50XFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcbmltZyB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9ybXNcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmlucHV0IHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxub3B0Z3JvdXAsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgLyogMiAqL1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHaXZlIGlucHV0IGFuZCB0ZXh0IGFyZWEgY29uc2lzdGVudCBsb29rICovXFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAtMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBmb250OiBib2xkIDAuNmVtIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIsXFxyXFxuYnV0dG9uOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgLyogYmFja2dyb3VuZDogIzAwMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7ICovXFxyXFxufVxcclxcblxcclxcbi8qIEdldHMgcmlkIG9mIGRlZmF1bHQgc2VhcmNoIHRvIHJlbW92ZSByZXN0cmljdGlvbnMgKi9cXHJcXG5pbnB1dFt0eXBlPSdzZWFyY2gnXSB7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEZpeCBmb3IgaW5jb25zaXN0ZW50IGRpc3BsYXkgb2YgY2xlYXIgXFxcInhcXFwiIGljb24gaW4gc2VhcmNoIGlucHV0cyBhY3Jvc3MgZGlmZmVyZW50IGJyb3dzZXJzLiBcXHJcXG4gICwgdGhpcyBjb2RlIHJlbW92ZXMgdGhlIGljb24gaW4gRWRnZSBhbmQgQ2hyb21lIHdoZW4gdGhlIGlucHV0IGxvc2VzIGZvY3VzLCB3aGlsZSBrZWVwaW5nIGl0IHZpc2libGUgaW4gU2FmYXJpLiAqL1xcclxcbmlucHV0W3R5cGU9J3NlYXJjaCddOm5vdCg6Zm9jdXMsIDphY3RpdmUpOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXHJcXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQge1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcclxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbnNlbGVjdCB7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bdHlwZT0nYnV0dG9uJ10sXFxyXFxuW3R5cGU9J3Jlc2V0J10sXFxyXFxuW3R5cGU9J3N1Ym1pdCddIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbjo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT0nYnV0dG9uJ106Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9J3Jlc2V0J106Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9J3N1Ym1pdCddOjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT0nYnV0dG9uJ106LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9J3Jlc2V0J106LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9J3N1Ym1pdCddOi1tb3otZm9jdXNyaW5nIHtcXHJcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxyXFxuICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxyXFxuICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG4gICAgZGlzcGxheTogdGFibGU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIC8qIDMgKi9cXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXHJcXG4gICAgLyogMSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5wcm9ncmVzcyB7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXHJcXG4gICAqL1xcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxyXFxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT0nY2hlY2tib3gnXSxcXHJcXG5bdHlwZT0ncmFkaW8nXSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcclxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9J3NlYXJjaCddIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250OiBpbmhlcml0O1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIEludGVyYWN0aXZlXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuXFxyXFxuZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuc3VtbWFyeSB7XFxyXFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWlzY1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXHJcXG4gICAqL1xcclxcblxcclxcbnRlbXBsYXRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcbltoaWRkZW5dIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLDhCQUE4QjtJQUM5QixNQUFNO0FBQ1Y7O0FBRUEsd0NBQXdDO0FBQ3hDO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxjQUFjO0FB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OztBQUVBOzs7SUFHSTs7QUFFSjtJQUNJLDZCQUE2QjtJQUM3QixNQUFNO0lBQ04sb0JBQW9CO0lBQ3BCLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSwwQkFBMEI7SUFDMUIsTUFBTTtJQUNOLGFBQWE7SUFDYixNQUFNO0FBQ1Y7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXHJcXG5cXHJcXG4vKiBEb2N1bWVudFxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcclxcbiAqL1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogQXBwbHkgYm9yZGVyIGJveCB0byBlbnRpcmUgZG9jdW1lbnQgKi9cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2VjdGlvbnNcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcclxcbiAgICovXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXHJcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHcm91cGluZyBjb250ZW50XFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXHJcXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcclxcbiAgICovXFxyXFxuXFxyXFxuaHIge1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxucHJlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxyXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYWJiclt0aXRsZV0ge1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICAvKiAyICovXFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5iLFxcclxcbnN0cm9uZyB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbmNvZGUsXFxyXFxua2JkLFxcclxcbnNhbXAge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnNtYWxsIHtcXHJcXG4gICAgZm9udC1zaXplOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxyXFxuICAgKiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5zdWIsXFxyXFxuc3VwIHtcXHJcXG4gICAgZm9udC1zaXplOiA3NSU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuc3ViIHtcXHJcXG4gICAgYm90dG9tOiAtMC4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5zdXAge1xcclxcbiAgICB0b3A6IC0wLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRW1iZWRkZWQgY29udGVudFxcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEZvcm1zXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbm9wdGdyb3VwLFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyogR2l2ZSBpbnB1dCBhbmQgdGV4dCBhcmVhIGNvbnNpc3RlbnQgbG9vayAqL1xcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwIDAgLTEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZm9udDogYm9sZCAwLjZlbSBzYW5zLXNlcmlmO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyLFxcclxcbmJ1dHRvbjpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIC8qIGJhY2tncm91bmQ6ICMwMDA7XFxyXFxuICAgIGNvbG9yOiAjZmZmOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHZXRzIHJpZCBvZiBkZWZhdWx0IHNlYXJjaCB0byByZW1vdmUgcmVzdHJpY3Rpb25zICovXFxyXFxuaW5wdXRbdHlwZT0nc2VhcmNoJ10ge1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGaXggZm9yIGluY29uc2lzdGVudCBkaXNwbGF5IG9mIGNsZWFyIFxcXCJ4XFxcIiBpY29uIGluIHNlYXJjaCBpbnB1dHMgYWNyb3NzIGRpZmZlcmVudCBicm93c2Vycy4gXFxyXFxuICAsIHRoaXMgY29kZSByZW1vdmVzIHRoZSBpY29uIGluIEVkZ2UgYW5kIENocm9tZSB3aGVuIHRoZSBpbnB1dCBsb3NlcyBmb2N1cywgd2hpbGUga2VlcGluZyBpdCB2aXNpYmxlIGluIFNhZmFyaS4gKi9cXHJcXG5pbnB1dFt0eXBlPSdzZWFyY2gnXTpub3QoOmZvY3VzLCA6YWN0aXZlKTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxyXFxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0IHtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXHJcXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3Qge1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuW3R5cGU9J2J1dHRvbiddLFxcclxcblt0eXBlPSdyZXNldCddLFxcclxcblt0eXBlPSdzdWJtaXQnXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxyXFxuICAgKi9cXHJcXG5cXHJcXG46Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9J2J1dHRvbiddOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPSdyZXNldCddOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPSdzdWJtaXQnXTo6LW1vei1mb2N1cy1pbm5lciB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9J2J1dHRvbiddOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPSdyZXNldCddOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPSdzdWJtaXQnXTotbW96LWZvY3VzcmluZyB7XFxyXFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcclxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcclxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAvKiAyICovXFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAvKiAzICovXFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcclxcbiAgICovXFxyXFxuXFxyXFxucHJvZ3Jlc3Mge1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcclxcbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9J2NoZWNrYm94J10sXFxyXFxuW3R5cGU9J3JhZGlvJ10ge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXHJcXG4gICAqL1xcclxcblxcclxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXHJcXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcblt0eXBlPSdzZWFyY2gnXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9J3NlYXJjaCddOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udDogaW5oZXJpdDtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbnRlcmFjdGl2ZVxcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbmRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnN1bW1hcnkge1xcclxcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxyXFxufVxcclxcblxcclxcbi8qIE1pc2NcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG50ZW1wbGF0ZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5baGlkZGVuXSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcclxcbiAgY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDhweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJhZGlhbCAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wQmFyQ29udGFpbmVyIHtcXHJcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gIHdpZHRoOiA3MHZ3O1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgbWFyZ2luLXRvcDogOCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAjN2E3YTdhNDI7XFxyXFxufVxcclxcblxcclxcbi50b3BCYXJDb250YWluZXIgcCB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5wLmludmlzaWJsZSB7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uc2hpcENlbGwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI0FJQm9hcmQgYnV0dG9uLFxcclxcbiNwbGF5ZXJCb2FyZCBidXR0b24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllckJvYXJkQ29udGFpbmVyLFxcclxcbi5haUJvYXJkQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcbiNib2FyZHNDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxMnB4O1xcclxcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrICovXFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDM4dncpKTtcXHJcXG4gIHdpZHRoOiA4M3Z3O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9yaWVudGF0aW9uVG9nZ2xlQnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBoZWlnaHQ6IDcwJTtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2JvYXJkc0NvbnRhaW5lciBwIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXJCb2FyZCB7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XFxyXFxufVxcclxcblxcclxcbiNBSUJvYXJkIHtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmJvYXJkQ2VsbCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5zaGlwQ2VsbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5zaGlwSGl0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTQsIDIxLCAyMSk7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogODEycHgpIHtcXHJcXG4gICNib2FyZHNDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxNnB4O1xcclxcbiAgICAvKiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzI1cHgsIDM4dncpKTtcXHJcXG4gICAgd2lkdGg6IDg2dnc7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjQUlCb2FyZCB7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MnB4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNwbGF5ZXJCb2FyZCB7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MnB4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b3BCYXJDb250YWluZXIge1xcclxcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIHdpZHRoOiA4NHZ3O1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNiU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggIzdhN2E3YTQyO1xcclxcbiAgICBwYWRkaW5nOiA2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9wQmFyQ29udGFpbmVyIHAge1xcclxcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2JvYXJkc0NvbnRhaW5lciBwIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiLFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw2Q0FBNkM7QUFDL0M7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsYUFBYTtFQUNiLHdCQUF3QjtFQUN4Qiw0REFBNEQ7RUFDNUQsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsNERBQTREO0lBQzVELFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixPQUFPO0lBQ1AsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLGlDQUFpQztJQUNqQyxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGlCQUFpQjtFQUNuQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcclxcbiAgY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDhweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJhZGlhbCAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wQmFyQ29udGFpbmVyIHtcXHJcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gIHdpZHRoOiA3MHZ3O1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgbWFyZ2luLXRvcDogOCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAjN2E3YTdhNDI7XFxyXFxufVxcclxcblxcclxcbi50b3BCYXJDb250YWluZXIgcCB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5wLmludmlzaWJsZSB7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uc2hpcENlbGwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI0FJQm9hcmQgYnV0dG9uLFxcclxcbiNwbGF5ZXJCb2FyZCBidXR0b24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllckJvYXJkQ29udGFpbmVyLFxcclxcbi5haUJvYXJkQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcbiNib2FyZHNDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxMnB4O1xcclxcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrICovXFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDM4dncpKTtcXHJcXG4gIHdpZHRoOiA4M3Z3O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9yaWVudGF0aW9uVG9nZ2xlQnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBoZWlnaHQ6IDcwJTtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2JvYXJkc0NvbnRhaW5lciBwIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXJCb2FyZCB7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XFxyXFxufVxcclxcblxcclxcbiNBSUJvYXJkIHtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmJvYXJkQ2VsbCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5zaGlwQ2VsbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5zaGlwSGl0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTQsIDIxLCAyMSk7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogODEycHgpIHtcXHJcXG4gICNib2FyZHNDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxNnB4O1xcclxcbiAgICAvKiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzI1cHgsIDM4dncpKTtcXHJcXG4gICAgd2lkdGg6IDg2dnc7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjQUlCb2FyZCB7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MnB4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNwbGF5ZXJCb2FyZCB7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MnB4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b3BCYXJDb250YWluZXIge1xcclxcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIHdpZHRoOiA4NHZ3O1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNiU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggIzdhN2E3YTQyO1xcclxcbiAgICBwYWRkaW5nOiA2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9wQmFyQ29udGFpbmVyIHAge1xcclxcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2JvYXJkc0NvbnRhaW5lciBwIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1xyXG4gIHByZUdhbWVTZXR1cFxyXG59IGZyb20gJy4vY29udHJvbGxlcnMvZGlzcGxheUNvbnRyb2xsZXInXHJcblxyXG5pbXBvcnQgJy4vc3R5bGVzL25vcm1hbGl6ZS5jc3MnXHJcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJ1xyXG5cclxucHJlR2FtZVNldHVwKClcclxuIl0sIm5hbWVzIjpbImRlbGF5IiwiZ2FtZUNvbnRyb2xsZXIiLCJnYW1lIiwicHJlR2FtZVNldHVwIiwicmVuZGVyUGxheWVyQm9hcmQiLCJwbGFjZUNhcnJpZXJTaGlwIiwicmVuZGVyQUlCb2FyZCIsImRpc3BsYXlDb250cm9sbGVyIiwidG9wQmFyQ29udGFpbmVyUGFyYSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwicGxhY2VBSVNoaXBzIiwiYWlCb2FyZERpdiIsImdldEVsZW1lbnRCeUlkIiwicGxheWVycyIsImdldFBsYXllcnMiLCJhY3RpdmVQbGF5ZXIiLCJnZXRDdXJyZW50UGxheWVyIiwiaHVtYW4iLCJuZXdNZXNzYWdlIiwidHJhbnNpdGlvblRleHRDaGFuZ2VzIiwiY29udHJvbGxlciIsIkFib3J0Q29udHJvbGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0Iiwic2lnbmFsIiwidG9wQmFyUGFyYSIsImh1bWFuQm9hcmREaXYiLCJvcmllbnRhdGlvbkJ0blZhbHVlcyIsImNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuIiwiaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyIsIm9yaWVudGF0aW9uVG9nZ2xlQnRuIiwiaGFuZGxlQ2FycmllclNoaXBQbGFjZW1lbnQiLCJwbGFjZUJhdHRsZVNoaXAiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQmF0dGxlU2hpcFBsYWNlbWVudCIsInBsYWNlQ3J1aXNlciIsImhhbmRsZUNydWlzZXJTaGlwUGxhY2VtZW50IiwicGxhY2VTdWJtYXJpbmUiLCJoYW5kbGVTdWJtYXJpbmVTaGlwUGxhY2VtZW50IiwicGxhY2VEZXN0cm95ZXIiLCJoYW5kbGVEZXN0cm95ZXJTaGlwUGxhY2VtZW50IiwicGxheWVyQm9hcmQiLCJnZXRIdW1hbkJvYXJkIiwicGxheWVyQm9hcmREaXYiLCJpbm5lckhUTUwiLCJpIiwibGVuZ3RoIiwiY3VycmVudFJvdyIsImoiLCJidXR0b24iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsInJvdyIsImNvbHVtbiIsImFwcGVuZENoaWxkIiwiYWlCb2FyZCIsImdldEFJQm9hcmQiLCJ1cGRhdGVIdW1hbkJvYXJkIiwiaHVtYW5Cb2FyZCIsIm1pc3NlZFNob3RzIiwiZ2V0SHVtYW5Cb2FyZE9iaiIsImdldE1pc3NlZFNob3RzIiwic3VjY2Vzc2Z1bFNob3RzIiwiZ2V0U3VjY2Vzc2Z1bFNob3RzIiwiYWxsRG9tTm9kZXMiLCJBcnJheSIsImZyb20iLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsInNob3QiLCJ0YXJnZXROb2RlIiwicmVtb3ZlIiwidXBkYXRlQUlCb2FyZCIsImdldEFJQm9hcmRPYmoiLCJob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uIiwic2VsZWN0ZWRSb3ciLCJ0YXJnZXQiLCJzZWxlY3RlZENvbHVtbiIsImNvb3JkaW5hdGUiLCJjYXJyaWVyUGxhY2VkIiwicGxhY2VDYXJyaWVyT25Cb2FyZCIsImFib3J0IiwicmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0biIsImJhdHRsZXNoaXBQbGFjZWQiLCJwbGFjZUJhdHRsZXNoaXBPbkJvYXJkIiwiY3J1aXNlclBsYWNlZCIsInBsYWNlQ3J1aXNlck9uQm9hcmQiLCJzdWJtYXJpbmVQbGFjZWQiLCJwbGFjZVN1Ym1hcmluZU9uQm9hcmQiLCJkZXN0cm95ZXJQbGFjZWQiLCJwbGFjZURlc3Ryb3llck9uQm9hcmQiLCJzaGlwVHlwZSIsImJvYXJkRE9NQ2VsbHNBcnIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0SG9yaXpvbnRhbERPTUNvb3JkcyIsImdldFZlcnRpY2FsRE9NQ29vcmRzIiwicGxhY2VDcnVpc2VyU2hpcCIsInBsYWNlU3VibWFyaW5lU2hpcCIsInBsYWNlRGVzdHJveWVyU2hpcCIsInN0YXJ0aW5nQ29sdW1uIiwiTnVtYmVyIiwic2hpcExlbmd0aCIsImRvbUNvb3JkaW5hdGUiLCJ0YXJnZXRET01CdG4iLCJmaW5kU2hpcERPTUJ0biIsInN0YXJ0aW5nUm93IiwiZG9tQ2VsbFJvdyIsImRvbUNlbGxDb2x1bW4iLCJhbHJlYWR5QXR0YWNrZWQiLCJwcmV2ZW50U2FtZUF0dGFjayIsInBsYXlSb3VuZCIsImh1bWFuTW92ZVN1Y2Nlc3NmdWwiLCJnZXRMYXN0SHVtYW5Nb3ZlU3VjY2Vzc2Z1bCIsInNoaXBJc1N1bmsiLCJpc1NoaXBTdW5rIiwic2hpcFN1bmtSZXN1bHQiLCJkaXNwbGF5U3Vua1NoaXBNZXNzYWdlIiwiZGlzcGxheVN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlIiwiZGlzcGxheVVuc3VjY2Vzc2Z1bEF0dGFja01lc3NhZ2UiLCJodW1hbldpbnMiLCJjaGVja0ZvcldpbiIsImhhbmRsZVdpbkNoZWNrIiwiaGFuZGxlQUlNb3ZlIiwiZW5lbXlBdHRhY2tpbmdNc2ciLCJhaU1vdmVTdWNjZXNzZnVsIiwiZ2V0TGFzdEFJTW92ZVN1Y2Nlc3NmdWwiLCJhaVdpbnMiLCJhdHRhY2tUaGVFbmVteU1zZyIsImFubm91bmNlV2lubmVyIiwid2lubmVyIiwid2lubmVyTmFtZSIsImdldE5hbWUiLCJwbGF5QWdhaW4iLCJ0b3BCYXJEaXYiLCJwbGF5QWdhaW5CdG4iLCJzdGFydE5ld0dhbWUiLCJyZW1vdmVDaGlsZCIsInByZXZpb3VzT3JpZW50YXRpb25CdG4iLCJwbGF5ZXIiLCJhdHRhY2tBbmRIaXRNc2ciLCJzZXRUaW1lb3V0IiwiZW5lbXlIaXRNc2ciLCJ1bnN1Y2Nlc3NmdWxBdHRhY2tNc2ciLCJ1bnN1Y2Nlc3NmdWxFbmVteUF0dGFja01zZyIsInN1bmtTaGlwTWVzc2FnZSIsImRpc3BsYXlTdW5rU2hpcCIsInN1bmtTaGlwQ29vcmRzIiwiYWlET01DZWxsc0FyciIsImRvbUNvb3JkIiwiaHVtYW5ET01DZWxsc0FyciIsIndpbkNoZWNrIiwiYm9hcmREaXYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVzZXRHYW1lU3RhdGUiLCJkb21FbGVtZW50IiwiR2FtZWJvYXJkIiwiUGxheWVyIiwiYXJyYXlzQXJlRXF1YWwiLCJyZXR1cm5SYW5kb21BSUJvYXJkIiwiY3JlYXRlR2FtZUJvYXJkIiwiY2FycmllckFyciIsImRldGVybWluZUNhcnJpZXJBcnJDb29yZHMiLCJzaGlwUGxhY2VkIiwicGxhY2VTaGlwIiwicHVzaCIsImNvb3JkIiwidG9TdHJpbmciLCJiYXR0bGVzaGlwQXJyIiwiZGV0ZXJtaW5lQmF0dGxlc2hpcEFyckNvb3JkcyIsImNydWlzZXJBcnIiLCJkZXRlcm1pbmVDcnVpc2VyQXJyQ29vcmRzIiwic3VibWFyaW5lQXJyIiwiZGV0ZXJtaW5lU3VibWFyaW5lQXJyQ29vcmRzIiwiZGVzdHJveWVyQXJyIiwiZGV0ZXJtaW5lRGVzdHJveWVyQXJyQ29vcmRzIiwicGxhY2VTaGlwcyIsImh1bWFuUGxheWVyIiwiYWlQbGF5ZXIiLCJBSSIsImN1cnJlbnRQbGF5ZXIiLCJyZWNlaXZlQXR0YWNrIiwibmV4dE1vdmUiLCJjb21wdXRlcnNOZXh0TW92ZSIsInJlbW92ZUxhc3RBSU1vdmUiLCJzd2l0Y2hQbGF5ZXIiLCJhdmFpbGFibGVNb3ZlcyIsImdldEFJQXZhaWxhYmxlTW92ZXMiLCJsYXN0QUlNb3ZlU3VjY2Vzc2Z1bCIsImFkamFjZW50U2xvdHMiLCJnZXRBZGphY2VudFNsb3RzIiwiYWRkQWRqYWNlbnRTbG90c1RvUXVldWUiLCJnZXRBZGphY2VudFF1ZXVlU2xvdCIsInJhbmRvbU1vdmUiLCJtYWtlUmFuZG9tTW92ZSIsImFsbFNoaXBzU3VuayIsImxhc3RTdWNjZXNzZnVsSHVtYW5Nb3ZlIiwiZ2V0TGFzdFN1Y2Nlc3NmdWxNb3ZlIiwidW5kZWZpbmVkIiwiZ2FtZUJvYXJkIiwiZ2V0Qm9hcmQiLCJ0YXJnZXRTaGlwT2JqIiwiaGFzQmVlblN1bmsiLCJsYXN0U3VjY2Vzc2Z1bEFJTW92ZSIsImNsZWFyR2FtZUJvYXJkIiwiYm9hcmQiLCJjb29yZGluYXRlc09iaiIsInNoaXBDb29yZGluYXRlc0FyciIsIk9iamVjdCIsInZhbHVlcyIsInNoaXBDb29yZGluYXRlcyIsIlNoaXAiLCJzaGlwT2JqZWN0cyIsImFpQXZhaWxhYmxlTW92ZXMiLCJhZGphY2VudFNsb3RzUXVldWUiLCJyb3dzIiwiY29sdW1ucyIsImxhc3RIdW1hbk1vdmVTdWNjZXNzZnVsIiwidmFsaWRhdGVDb29yZGluYXRlcyIsImNvb3JkaW5hdGVzIiwidmFsaWRDb29yZGluYXRlcyIsImNoZWNrU2VsZk92ZXJsYXAiLCJjb29yZGluYXRlc092ZXJsYXAiLCJwcmV2Q29vcmRpbmF0ZSIsImluZGV4IiwiY2hlY2tPdmVybGFwV2l0aE90aGVyU2hpcHMiLCJzaGlwc092ZXJsYXAiLCJib2FyZENlbGwiLCJsZWdhbENvb3JkaW5hdGVzIiwib3ZlcmxhcHBpbmdDb29yZGluYXRlcyIsInNoaXBPdmVybGFwcGluZyIsInNoaXBPYmplY3QiLCJzaGlwT2JqIiwiaGl0IiwicmVtb3ZlQWRqYWNlbnRTbG90IiwidGFyZ2V0Q29vcmRpbmF0ZXMiLCJhZGphY2VudFF1ZXVlIiwiU2V0Iiwic2xvdCIsImZpbHRlciIsImV2ZXJ5U2hpcFNhbmsiLCJtb3ZlIiwic3BsaWNlIiwiZ2V0U2hpcE9iamVjdHMiLCJnZXRBZGphY2VudFNsb3RzUXVldWUiLCJwb3AiLCJhdCIsIm5hbWUiLCJpc0FJIiwiYXZhaWxhYmxlTW92ZXNMZW5ndGgiLCJyYW5kb21BcnJJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbUNvb3JkaW5hdGUiLCJsYXN0U3VjY2Vzc2Z1bE1vdmUiLCJyZXRyaWV2ZUFkamFjZW50U2xvdHMiLCJsZWdhbEFkamFjZW50U2xvdHMiLCJyZW1vdmVJbGxlZ2FsQWRqYWNlbnRTbG90cyIsImdldENlbGxBYm92ZSIsIm5ld0FyciIsIm5ld1JvdyIsImdldENlbGxCZWxvdyIsImdldENlbGxUb1JpZ2h0IiwibmV3Q29sdW1uIiwiZ2V0Q2VsbFRvTGVmdCIsImxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlIiwiYWRqYWNlbnRTbG90c0FyciIsInByZXZlbnRQcmV2aW91c1Nob3RUb1F1ZXVlIiwic2xvdHMiLCJhbGxQcmV2aW91c0F0dGFja3MiLCJjb25jYXQiLCJwcmV2aW91c0F0dGFja3MiLCJmaWx0ZXJlZFNsb3RzIiwiaGFzIiwibnVtT2ZIaXRzIiwiaXNTdW5rIiwiZ2V0TnVtT2ZIaXRzIiwiZ2V0TGVuZ3RoIiwiYXJyMSIsImFycjIiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwiYWlCb2FyZHMiLCJhaVNoaXBDb29yZHNPbmUiLCJhaVNoaXBDb29yZHNUd28iLCJhaVNoaXBDb29yZHNUaHJlZSIsInJhbmRvbUluZGV4IiwiY2hvc2VuQUlCb2FyZCIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiY3J1aXNlciIsInN1Ym1hcmluZSIsImRlc3Ryb3llciJdLCJzb3VyY2VSb290IjoiIn0=