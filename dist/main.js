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

      // Used for testing, as it reveals the enemies ships on the board
      // to the user
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
  const guessedCoordinate = game.playRound();
  const aiMoveSuccessful = game.getHumanBoardObj.getLastAIMoveSuccessful();
  const shipIsSunk = game.isShipSunk('computer', guessedCoordinate);
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
  await (0,_helpers_delay__WEBPACK_IMPORTED_MODULE_0__.delay)(2000);
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
      aiBoard.receiveAttack(coordinate, currentPlayer.getName());
      switchPlayer();
    } else if (currentPlayer.getName() === players.AI.getName()) {
      const nextMove = computersNextMove();
      humanBoard.receiveAttack(nextMove, currentPlayer.getName());
      humanBoard.removeLastAIMove(nextMove);
      switchPlayer();
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Play&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --default-font: 'Play', sans-serif, 'Helvetica Neue', Helvetica, Arial,\r\n    sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n  background: linear-gradient(darkblue, lightblue);\r\n  font-family: var(--default-font);\r\n}\r\n\r\n.logo img {\r\n  height: 70px;\r\n  width: auto;\r\n  border-radius: 50%;\r\n}\r\n\r\nheader {\r\n  background-color: darkblue;\r\n  color: rgb(236, 236, 236);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 100px;\r\n  padding: 8px 0px;\r\n  background-color: #0000003d;\r\n  /* opacity: 0.6; */\r\n  z-index: 1;\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.headerContainer {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  justify-content: center;\r\n}\r\n\r\n.headerContainer h1 {\r\n  font-size: 2.3rem;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex: 1;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  background-color: radial #333;\r\n}\r\n\r\n.topBarContainer {\r\n  /* outline: 1px solid black; */\r\n  width: 70vw;\r\n  height: 80px;\r\n  margin-top: 8%;\r\n  display: flex;\r\n  gap: 10%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 12px 12px;\r\n  background-color: lightgray;\r\n  box-shadow: 0px 2px 1px #7a7a7a42;\r\n}\r\n\r\n.topBarContainer p {\r\n  align-items: center;\r\n  transition: opacity 0.5s ease-in-out;\r\n  font-size: 1.4rem;\r\n  opacity: 1;\r\n  text-align: center;\r\n}\r\n\r\np.invisible {\r\n  transition: opacity 0.5s ease-in-out;\r\n  opacity: 0;\r\n}\r\n\r\nbutton.shipCell {\r\n  background-color: grey;\r\n  transition: background-color 0.2s ease-in-out;\r\n}\r\n\r\n#AIBoard button,\r\n#playerBoard button {\r\n  border-radius: 0;\r\n}\r\n\r\n.playerBoardContainer,\r\n.aiBoardContainer {\r\n  display: grid;\r\n}\r\n\r\n#boardsContainer {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 24px;\r\n  /* outline: 1px solid black */\r\n  padding: 12px;\r\n  display: grid;\r\n  grid-template-rows: none;\r\n  grid-template-columns: repeat(auto-fit, minmax(400px, 38vw));\r\n  width: 83vw;\r\n  margin-bottom: 14px;\r\n}\r\n\r\nbutton.orientationToggleBtn {\r\n  background-color: #333;\r\n  color: white;\r\n  border-radius: 8px;\r\n  height: 60%;\r\n  width: 100px;\r\n  font-size: 1rem;\r\n  transition: 0.1s ease-in-out;\r\n  border: none;\r\n  font-family: var(--default-font);\r\n}\r\n\r\nbutton.orientationToggleBtn:hover,\r\nbutton.orientationToggleBtn:active {\r\n  background-color: #3c3c3c;\r\n  border: none;\r\n}\r\n\r\n#boardsContainer p {\r\n  justify-self: center;\r\n  font-size: 1.2rem;\r\n  color: white;\r\n  background-color: grey;\r\n  padding: 6px 8px;\r\n  border-radius: 8px 8px;\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#playerBoard {\r\n  outline: 1px solid black;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 50px);\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\r\n  border-radius: 4px;\r\n  background-color: rgb(235, 235, 235);\r\n}\r\n\r\n#AIBoard {\r\n  outline: 1px solid black;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 50px);\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\r\n  border-radius: 4px;\r\n  background-color: rgb(235, 235, 235);\r\n}\r\n\r\nbutton.boardCell {\r\n  border-radius: 0px;\r\n  background-color: rgb(235, 235, 235);\r\n  color: black;\r\n  font-size: 1rem;\r\n  transition: opacity 0.3s ease-in;\r\n}\r\n\r\nbutton.shipCell {\r\n  background-color: #333;\r\n  border: 1px solid black;\r\n  transition: background-color 0.3s ease-in;\r\n}\r\n\r\nbutton.shipHit {\r\n  background-color: rgb(114, 21, 21);\r\n  transition: background-color 0.3s ease-in;\r\n}\r\n\r\n@media only screen and (max-device-width: 812px) {\r\n  #boardsContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 16px;\r\n    /*  outline: 1px solid black; */\r\n    padding: 12px;\r\n    display: grid;\r\n    grid-template-rows: none;\r\n    grid-template-columns: repeat(auto-fit, minmax(325px, 38vw));\r\n    width: 86vw;\r\n    margin-bottom: 14px;\r\n    margin-bottom: 24px;\r\n  }\r\n\r\n  #AIBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 42px);\r\n    background-color: rgb(235, 235, 235);\r\n  }\r\n\r\n  #playerBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 42px);\r\n    background-color: rgb(235, 235, 235);\r\n  }\r\n\r\n  .topBarContainer {\r\n    /* outline: 1px solid black; */\r\n    height: 40vh;\r\n    margin-top: 8%;\r\n    display: flex;\r\n    gap: 8%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 12px 12px;\r\n    background-color: lightgray;\r\n    box-shadow: 0px 2px 1px #7a7a7a42;\r\n    width: 76vw;\r\n    /* width: 100%; */\r\n    max-height: 118px;\r\n    padding: 8px;\r\n  }\r\n\r\n  .topBarContainer p {\r\n    /* outline: 1px solid black; */\r\n    font-size: 1.1rem;\r\n    height: fit-content;\r\n    margin: 0;\r\n    max-height: 80vh;\r\n  }\r\n\r\n  #boardsContainer p {\r\n    justify-self: center;\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  button.orientationToggleBtn {\r\n    background-color: #333;\r\n    color: white;\r\n    border-radius: 8px;\r\n    height: 50%;\r\n    width: 100px;\r\n    font-size: 1rem;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Play&display=swap');\r\n\r\n:root {\r\n  --default-font: 'Play', sans-serif, 'Helvetica Neue', Helvetica, Arial,\r\n    sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n  background: linear-gradient(darkblue, lightblue);\r\n  font-family: var(--default-font);\r\n}\r\n\r\n.logo img {\r\n  height: 70px;\r\n  width: auto;\r\n  border-radius: 50%;\r\n}\r\n\r\nheader {\r\n  background-color: darkblue;\r\n  color: rgb(236, 236, 236);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 100px;\r\n  padding: 8px 0px;\r\n  background-color: #0000003d;\r\n  /* opacity: 0.6; */\r\n  z-index: 1;\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.headerContainer {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  justify-content: center;\r\n}\r\n\r\n.headerContainer h1 {\r\n  font-size: 2.3rem;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex: 1;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  background-color: radial #333;\r\n}\r\n\r\n.topBarContainer {\r\n  /* outline: 1px solid black; */\r\n  width: 70vw;\r\n  height: 80px;\r\n  margin-top: 8%;\r\n  display: flex;\r\n  gap: 10%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 12px 12px;\r\n  background-color: lightgray;\r\n  box-shadow: 0px 2px 1px #7a7a7a42;\r\n}\r\n\r\n.topBarContainer p {\r\n  align-items: center;\r\n  transition: opacity 0.5s ease-in-out;\r\n  font-size: 1.4rem;\r\n  opacity: 1;\r\n  text-align: center;\r\n}\r\n\r\np.invisible {\r\n  transition: opacity 0.5s ease-in-out;\r\n  opacity: 0;\r\n}\r\n\r\nbutton.shipCell {\r\n  background-color: grey;\r\n  transition: background-color 0.2s ease-in-out;\r\n}\r\n\r\n#AIBoard button,\r\n#playerBoard button {\r\n  border-radius: 0;\r\n}\r\n\r\n.playerBoardContainer,\r\n.aiBoardContainer {\r\n  display: grid;\r\n}\r\n\r\n#boardsContainer {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 24px;\r\n  /* outline: 1px solid black */\r\n  padding: 12px;\r\n  display: grid;\r\n  grid-template-rows: none;\r\n  grid-template-columns: repeat(auto-fit, minmax(400px, 38vw));\r\n  width: 83vw;\r\n  margin-bottom: 14px;\r\n}\r\n\r\nbutton.orientationToggleBtn {\r\n  background-color: #333;\r\n  color: white;\r\n  border-radius: 8px;\r\n  height: 60%;\r\n  width: 100px;\r\n  font-size: 1rem;\r\n  transition: 0.1s ease-in-out;\r\n  border: none;\r\n  font-family: var(--default-font);\r\n}\r\n\r\nbutton.orientationToggleBtn:hover,\r\nbutton.orientationToggleBtn:active {\r\n  background-color: #3c3c3c;\r\n  border: none;\r\n}\r\n\r\n#boardsContainer p {\r\n  justify-self: center;\r\n  font-size: 1.2rem;\r\n  color: white;\r\n  background-color: grey;\r\n  padding: 6px 8px;\r\n  border-radius: 8px 8px;\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#playerBoard {\r\n  outline: 1px solid black;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 50px);\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\r\n  border-radius: 4px;\r\n  background-color: rgb(235, 235, 235);\r\n}\r\n\r\n#AIBoard {\r\n  outline: 1px solid black;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 50px);\r\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\r\n  border-radius: 4px;\r\n  background-color: rgb(235, 235, 235);\r\n}\r\n\r\nbutton.boardCell {\r\n  border-radius: 0px;\r\n  background-color: rgb(235, 235, 235);\r\n  color: black;\r\n  font-size: 1rem;\r\n  transition: opacity 0.3s ease-in;\r\n}\r\n\r\nbutton.shipCell {\r\n  background-color: #333;\r\n  border: 1px solid black;\r\n  transition: background-color 0.3s ease-in;\r\n}\r\n\r\nbutton.shipHit {\r\n  background-color: rgb(114, 21, 21);\r\n  transition: background-color 0.3s ease-in;\r\n}\r\n\r\n@media only screen and (max-device-width: 812px) {\r\n  #boardsContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 16px;\r\n    /*  outline: 1px solid black; */\r\n    padding: 12px;\r\n    display: grid;\r\n    grid-template-rows: none;\r\n    grid-template-columns: repeat(auto-fit, minmax(325px, 38vw));\r\n    width: 86vw;\r\n    margin-bottom: 14px;\r\n    margin-bottom: 24px;\r\n  }\r\n\r\n  #AIBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 42px);\r\n    background-color: rgb(235, 235, 235);\r\n  }\r\n\r\n  #playerBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 42px);\r\n    background-color: rgb(235, 235, 235);\r\n  }\r\n\r\n  .topBarContainer {\r\n    /* outline: 1px solid black; */\r\n    height: 40vh;\r\n    margin-top: 8%;\r\n    display: flex;\r\n    gap: 8%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 12px 12px;\r\n    background-color: lightgray;\r\n    box-shadow: 0px 2px 1px #7a7a7a42;\r\n    width: 76vw;\r\n    /* width: 100%; */\r\n    max-height: 118px;\r\n    padding: 8px;\r\n  }\r\n\r\n  .topBarContainer p {\r\n    /* outline: 1px solid black; */\r\n    font-size: 1.1rem;\r\n    height: fit-content;\r\n    margin: 0;\r\n    max-height: 80vh;\r\n  }\r\n\r\n  #boardsContainer p {\r\n    justify-self: center;\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  button.orientationToggleBtn {\r\n    background-color: #333;\r\n    color: white;\r\n    border-radius: 8px;\r\n    height: 50%;\r\n    width: 100px;\r\n    font-size: 1rem;\r\n  }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDLENBQUM7QUFFVixDQUFDO0FBRUQsTUFBTVIsZUFBZSxHQUFHO0VBQ3RCSSxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxVQUFVLEVBQUUsQ0FDVixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFVixDQUFDO0FBRUQsTUFBTVAsaUJBQWlCLEdBQUc7RUFDeEJHLE9BQU8sRUFBRSxDQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFVBQVUsRUFBRSxDQUNWLENBQUMsQ0FBQyxFQUFFLENBQUMs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LFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sWUFBWSxPQUFPLE9BQU8sTUFBTSxPQUFPLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLFFBQVEsTUFBTSxLQUFLLFlBQVksT0FBTyxTQUFTLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE9BQU8sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLEtBQUssTUFBTSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLE9BQU8sTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLFNBQVMsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFN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O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0V3QztBQUVUO0FBQ0o7QUFFM0JyUyw0RUFBWSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2NvbnRyb2xsZXJzL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2NvbnRyb2xsZXJzL2dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2ZhY3Rvcmllcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvZmFjdG9yaWVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9mYWN0b3JpZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9oZWxwZXJzL2FycmF5c0FyZUVxdWFsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2hlbHBlcnMvZGVsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvaGVscGVycy9yb3RhdGVBSUJvYXJkcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzPzQzZjQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVsYXkgfSBmcm9tICcuLi9oZWxwZXJzL2RlbGF5J1xyXG5pbXBvcnQgeyBnYW1lQ29udHJvbGxlciB9IGZyb20gJy4vZ2FtZUNvbnRyb2xsZXInXHJcblxyXG5jb25zdCBnYW1lID0gZ2FtZUNvbnRyb2xsZXIoKVxyXG5cclxuY29uc3QgcHJlR2FtZVNldHVwID0gKCkgPT4ge1xyXG4gIHJlbmRlclBsYXllckJvYXJkKClcclxuICBwbGFjZUNhcnJpZXJTaGlwKClcclxuICByZW5kZXJBSUJvYXJkKClcclxufVxyXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9IGFzeW5jICgpID0+IHtcclxuICAvLyB0aGlzIGlzIHdoZXJlIHRoZSBzaGlwIHBsYWNlbWVudCB3aWxsIGhhcHBlbiBmb3IgaHVtYW4gcGxheWVyXHJcbiAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICB0b3BCYXJDb250YWluZXJQYXJhLnRleHRDb250ZW50ID0gJ0VuZW5teSBpcyBwbGFjaW5nIHRoZWlyIHNoaXBzLi4uJ1xyXG4gIGF3YWl0IGRlbGF5KDE1MDApXHJcbiAgZ2FtZS5wbGFjZUFJU2hpcHMoKVxyXG4gIHJlbmRlckFJQm9hcmQoKVxyXG4gIHRvcEJhckNvbnRhaW5lclBhcmEudGV4dENvbnRlbnQgPSAnJ1xyXG4gIGNvbnN0IGFpQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlCb2FyZCcpXHJcbiAgY29uc3QgcGxheWVycyA9IGdhbWUuZ2V0UGxheWVycygpXHJcbiAgY29uc3QgYWN0aXZlUGxheWVyID0gZ2FtZS5nZXRDdXJyZW50UGxheWVyKClcclxuXHJcbiAgaWYgKGFjdGl2ZVBsYXllciA9PT0gcGxheWVycy5odW1hbikge1xyXG4gICAgY29uc3QgbmV3TWVzc2FnZSA9ICdBdHRhY2sgdGhlIGVuZW1pZXMgc2hpcHMhJ1xyXG4gICAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICAgIHRyYW5zaXRpb25UZXh0Q2hhbmdlcyhuZXdNZXNzYWdlLCB0b3BCYXJDb250YWluZXJQYXJhKVxyXG5cclxuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcclxuICAgIGFpQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgJ2NsaWNrJyxcclxuICAgICAgKGUpID0+IHtcclxuICAgICAgICBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnQoZSwgY29udHJvbGxlcilcclxuICAgICAgfSxcclxuICAgICAgeyBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsIH1cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHBsYWNlQ2FycmllclNoaXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgY2FycmllciBzaGlwJ1xyXG5cclxuICBjb25zdCBodW1hbkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckJvYXJkJylcclxuXHJcbiAgY29uc3Qgb3JpZW50YXRpb25CdG5WYWx1ZXMgPSBjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0bigpXHJcbiAgbGV0IGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBvcmllbnRhdGlvbkJ0blZhbHVlc1swXVxyXG4gIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlQnRuID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMV1cclxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID09PSB0cnVlKSB7XHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBmYWxzZVxyXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXHJcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxyXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICdjbGljaycsXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBoYW5kbGVDYXJyaWVyU2hpcFBsYWNlbWVudChlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzLCBjb250cm9sbGVyKVxyXG4gICAgfSxcclxuICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBwbGFjZUJhdHRsZVNoaXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgYmF0dGxlc2hpcCdcclxuXHJcbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXHJcblxyXG4gIGNvbnN0IG9yaWVudGF0aW9uQnRuVmFsdWVzID0gY3JlYXRlT3JpZW50YXRpb25Ub2dnbGVCdG4oKVxyXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMF1cclxuICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZUJ0biA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzFdXHJcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gZmFsc2VcclxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnVmVydGljYWwnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxyXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJ1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcclxuICBodW1hbkJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAnY2xpY2snLFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgaGFuZGxlQmF0dGxlU2hpcFBsYWNlbWVudChlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzLCBjb250cm9sbGVyKVxyXG4gICAgfSxcclxuICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBwbGFjZUNydWlzZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgQ3J1aXNlcidcclxuXHJcbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXHJcblxyXG4gIGNvbnN0IG9yaWVudGF0aW9uQnRuVmFsdWVzID0gY3JlYXRlT3JpZW50YXRpb25Ub2dnbGVCdG4oKVxyXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMF1cclxuICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZUJ0biA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzFdXHJcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gZmFsc2VcclxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnVmVydGljYWwnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxyXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJ1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcclxuICBodW1hbkJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAnY2xpY2snLFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgJ09yaWVudGF0aW9uIHN0YXR1cyBnb2luZyBpbnRvIHBsYWNlbWVudDonICtcclxuICAgICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXNcclxuICAgICAgKVxyXG4gICAgICBoYW5kbGVDcnVpc2VyU2hpcFBsYWNlbWVudChlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzLCBjb250cm9sbGVyKVxyXG4gICAgfSxcclxuICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBwbGFjZVN1Ym1hcmluZSA9ICgpID0+IHtcclxuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxyXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBTdWJtYXJpbmUnXHJcblxyXG4gIGNvbnN0IGh1bWFuQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyQm9hcmQnKVxyXG5cclxuICBjb25zdCBvcmllbnRhdGlvbkJ0blZhbHVlcyA9IGNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuKClcclxuICBsZXQgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzBdXHJcbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBvcmllbnRhdGlvbkJ0blZhbHVlc1sxXVxyXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPT09IHRydWUpIHtcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IGZhbHNlXHJcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcclxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcclxuICAgIH1cclxuICB9KVxyXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcclxuICBodW1hbkJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAnY2xpY2snLFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgJ09yaWVudGF0aW9uIHN0YXR1cyBnb2luZyBpbnRvIHBsYWNlbWVudDonICtcclxuICAgICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXNcclxuICAgICAgKVxyXG4gICAgICBoYW5kbGVTdWJtYXJpbmVTaGlwUGxhY2VtZW50KFxyXG4gICAgICAgIGUsXHJcbiAgICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyxcclxuICAgICAgICBjb250cm9sbGVyXHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxyXG4gIClcclxufVxyXG5cclxuY29uc3QgcGxhY2VEZXN0cm95ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgRGVzdHJveWVyJ1xyXG5cclxuICBjb25zdCBodW1hbkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckJvYXJkJylcclxuXHJcbiAgY29uc3Qgb3JpZW50YXRpb25CdG5WYWx1ZXMgPSBjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0bigpXHJcbiAgbGV0IGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBvcmllbnRhdGlvbkJ0blZhbHVlc1swXVxyXG4gIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlQnRuID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMV1cclxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID09PSB0cnVlKSB7XHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBmYWxzZVxyXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXHJcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxyXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICdjbGljaycsXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAnT3JpZW50YXRpb24gc3RhdHVzIGdvaW5nIGludG8gcGxhY2VtZW50OicgK1xyXG4gICAgICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1c1xyXG4gICAgICApXHJcbiAgICAgIGhhbmRsZURlc3Ryb3llclNoaXBQbGFjZW1lbnQoXHJcbiAgICAgICAgZSxcclxuICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzLFxyXG4gICAgICAgIGNvbnRyb2xsZXJcclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCByZW5kZXJQbGF5ZXJCb2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGdhbWUuZ2V0SHVtYW5Cb2FyZCgpXHJcbiAgY29uc3QgcGxheWVyQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyQm9hcmQnKVxyXG4gIHBsYXllckJvYXJkRGl2LmlubmVySFRNTCA9ICcnXHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQm9hcmQubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGN1cnJlbnRSb3cgPSBwbGF5ZXJCb2FyZFtpXVxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50Um93Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdib2FyZENlbGwnKVxyXG4gICAgICBidXR0b24uZGF0YXNldC5yb3cgPSBpXHJcbiAgICAgIGJ1dHRvbi5kYXRhc2V0LmNvbHVtbiA9IGpcclxuXHJcbiAgICAgIHBsYXllckJvYXJkRGl2LmFwcGVuZENoaWxkKGJ1dHRvbilcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlckFJQm9hcmQgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgYWlCb2FyZCA9IGdhbWUuZ2V0QUlCb2FyZCgpXHJcbiAgY29uc3QgYWlCb2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSUJvYXJkJylcclxuICBhaUJvYXJkRGl2LmlubmVySFRNTCA9ICcnXHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWlCb2FyZC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgY3VycmVudFJvdyA9IGFpQm9hcmRbaV1cclxuXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRSb3cubGVuZ3RoOyBqKyspIHtcclxuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JvYXJkQ2VsbCcpXHJcbiAgICAgIGJ1dHRvbi5kYXRhc2V0LnJvdyA9IGlcclxuICAgICAgYnV0dG9uLmRhdGFzZXQuY29sdW1uID0galxyXG4gICAgICBjb25zdCByb3cgPSBhaUJvYXJkW2ldXHJcblxyXG4gICAgICAvLyBVc2VkIGZvciB0ZXN0aW5nLCBhcyBpdCByZXZlYWxzIHRoZSBlbmVtaWVzIHNoaXBzIG9uIHRoZSBib2FyZFxyXG4gICAgICAvLyB0byB0aGUgdXNlclxyXG4gICAgICBpZiAodHlwZW9mIHJvd1tqXSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2hpcENlbGwnKVxyXG4gICAgICB9XHJcbiAgICAgIGFpQm9hcmREaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdXBkYXRlSHVtYW5Cb2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBodW1hbkJvYXJkID0gZ2FtZS5nZXRIdW1hbkJvYXJkKClcclxuICBjb25zdCBtaXNzZWRTaG90cyA9IGdhbWUuZ2V0SHVtYW5Cb2FyZE9iai5nZXRNaXNzZWRTaG90cygpXHJcbiAgY29uc3Qgc3VjY2Vzc2Z1bFNob3RzID0gZ2FtZS5nZXRIdW1hbkJvYXJkT2JqLmdldFN1Y2Nlc3NmdWxTaG90cygpXHJcbiAgY29uc3QgYWxsRG9tTm9kZXMgPSBBcnJheS5mcm9tKFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckJvYXJkJykuY2hpbGROb2Rlc1xyXG4gIClcclxuXHJcbiAgbWlzc2VkU2hvdHMuZm9yRWFjaChhc3luYyAoc2hvdCkgPT4ge1xyXG4gICAgY29uc3Qgcm93ID0gc2hvdFswXVxyXG4gICAgY29uc3QgY29sdW1uID0gc2hvdFsxXVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRG9tTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGFsbERvbU5vZGVzW2ldLmRhdGFzZXRcclxuICAgICAgaWYgKCt0YXJnZXROb2RlLmNvbHVtbiA9PT0gY29sdW1uICYmICt0YXJnZXROb2RlLnJvdyA9PT0gcm93KSB7XHJcbiAgICAgICAgYWxsRG9tTm9kZXNbaV0udGV4dENvbnRlbnQgPSAnWCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHN1Y2Nlc3NmdWxTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XHJcbiAgICBjb25zdCByb3cgPSBzaG90WzBdXHJcbiAgICBjb25zdCBjb2x1bW4gPSBzaG90WzFdXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEb21Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCB0YXJnZXROb2RlID0gYWxsRG9tTm9kZXNbaV1cclxuICAgICAgaWYgKFxyXG4gICAgICAgICt0YXJnZXROb2RlLmRhdGFzZXQuY29sdW1uID09PSBjb2x1bW4gJiZcclxuICAgICAgICArdGFyZ2V0Tm9kZS5kYXRhc2V0LnJvdyA9PT0gcm93XHJcbiAgICAgICkge1xyXG4gICAgICAgIHRhcmdldE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcENlbGwnKVxyXG4gICAgICAgIHRhcmdldE5vZGUuY2xhc3NMaXN0LmFkZCgnc2hpcEhpdCcpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5jb25zdCB1cGRhdGVBSUJvYXJkID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGFpQm9hcmQgPSBnYW1lLmdldEFJQm9hcmQoKVxyXG4gIGNvbnN0IG1pc3NlZFNob3RzID0gZ2FtZS5nZXRBSUJvYXJkT2JqLmdldE1pc3NlZFNob3RzKClcclxuICBjb25zdCBzdWNjZXNzZnVsU2hvdHMgPSBnYW1lLmdldEFJQm9hcmRPYmouZ2V0U3VjY2Vzc2Z1bFNob3RzKClcclxuICBjb25zdCBhbGxEb21Ob2RlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FJQm9hcmQnKS5jaGlsZE5vZGVzKVxyXG5cclxuICBtaXNzZWRTaG90cy5mb3JFYWNoKGFzeW5jIChzaG90KSA9PiB7XHJcbiAgICBjb25zdCByb3cgPSBzaG90WzBdXHJcbiAgICBjb25zdCBjb2x1bW4gPSBzaG90WzFdXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEb21Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCB0YXJnZXROb2RlID0gYWxsRG9tTm9kZXNbaV0uZGF0YXNldFxyXG4gICAgICBpZiAoK3RhcmdldE5vZGUuY29sdW1uID09PSBjb2x1bW4gJiYgK3RhcmdldE5vZGUucm93ID09PSByb3cpIHtcclxuICAgICAgICBhbGxEb21Ob2Rlc1tpXS50ZXh0Q29udGVudCA9ICdYJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgc3VjY2Vzc2Z1bFNob3RzLmZvckVhY2goKHNob3QpID0+IHtcclxuICAgIGNvbnN0IHJvdyA9IHNob3RbMF1cclxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERvbU5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgK3RhcmdldE5vZGUuZGF0YXNldC5jb2x1bW4gPT09IGNvbHVtbiAmJlxyXG4gICAgICAgICt0YXJnZXROb2RlLmRhdGFzZXQucm93ID09PSByb3dcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGFyZ2V0Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwQ2VsbCcpXHJcbiAgICAgICAgdGFyZ2V0Tm9kZS5jbGFzc0xpc3QuYWRkKCdzaGlwSGl0JylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUNhcnJpZXJTaGlwUGxhY2VtZW50ID0gKFxyXG4gIGUsXHJcbiAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICBjb250cm9sbGVyXHJcbikgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcclxuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXHJcbiAgY29uc3QgY29vcmRpbmF0ZSA9IFtzZWxlY3RlZFJvdywgc2VsZWN0ZWRDb2x1bW5dXHJcblxyXG4gIGNvbnN0IGNhcnJpZXJQbGFjZWQgPSBwbGFjZUNhcnJpZXJPbkJvYXJkKFxyXG4gICAgY29vcmRpbmF0ZSxcclxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cclxuICApXHJcblxyXG4gIGlmIChjYXJyaWVyUGxhY2VkKSB7XHJcbiAgICBjb250cm9sbGVyLmFib3J0KClcclxuICAgIHJlbW92ZVByZXZpb3VzT3JpZW50YXRpb25CdG4oKVxyXG4gICAgcGxhY2VCYXR0bGVTaGlwKClcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHBsYWNlQ2FycmllclNoaXBcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUJhdHRsZVNoaXBQbGFjZW1lbnQgPSAoXHJcbiAgZSxcclxuICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxyXG4gIGNvbnRyb2xsZXJcclxuKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xyXG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cclxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cclxuXHJcbiAgY29uc3QgYmF0dGxlc2hpcFBsYWNlZCA9IHBsYWNlQmF0dGxlc2hpcE9uQm9hcmQoXHJcbiAgICBjb29yZGluYXRlLFxyXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxyXG4gIClcclxuXHJcbiAgaWYgKGJhdHRsZXNoaXBQbGFjZWQpIHtcclxuICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxyXG4gICAgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0bigpXHJcbiAgICBwbGFjZUNydWlzZXIoKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gcGxhY2VCYXR0bGVTaGlwXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVDcnVpc2VyU2hpcFBsYWNlbWVudCA9IChcclxuICBlLFxyXG4gIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXHJcbiAgY29udHJvbGxlclxyXG4pID0+IHtcclxuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XHJcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxyXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxyXG5cclxuICBjb25zdCBjcnVpc2VyUGxhY2VkID0gcGxhY2VDcnVpc2VyT25Cb2FyZChcclxuICAgIGNvb3JkaW5hdGUsXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXHJcbiAgKVxyXG5cclxuICBpZiAoY3J1aXNlclBsYWNlZCkge1xyXG4gICAgY29udHJvbGxlci5hYm9ydCgpXHJcbiAgICByZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuKClcclxuICAgIHBsYWNlU3VibWFyaW5lKClcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHBsYWNlQ3J1aXNlclxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaGFuZGxlU3VibWFyaW5lU2hpcFBsYWNlbWVudCA9IChcclxuICBlLFxyXG4gIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXHJcbiAgY29udHJvbGxlclxyXG4pID0+IHtcclxuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XHJcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxyXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxyXG5cclxuICBjb25zdCBzdWJtYXJpbmVQbGFjZWQgPSBwbGFjZVN1Ym1hcmluZU9uQm9hcmQoXHJcbiAgICBjb29yZGluYXRlLFxyXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxyXG4gIClcclxuXHJcbiAgaWYgKHN1Ym1hcmluZVBsYWNlZCkge1xyXG4gICAgY29udHJvbGxlci5hYm9ydCgpXHJcbiAgICByZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuKClcclxuICAgIHBsYWNlRGVzdHJveWVyKClcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHBsYWNlU3VibWFyaW5lXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVEZXN0cm95ZXJTaGlwUGxhY2VtZW50ID0gYXN5bmMgKFxyXG4gIGUsXHJcbiAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICBjb250cm9sbGVyXHJcbikgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcclxuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXHJcbiAgY29uc3QgY29vcmRpbmF0ZSA9IFtzZWxlY3RlZFJvdywgc2VsZWN0ZWRDb2x1bW5dXHJcbiAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuXHJcbiAgY29uc3QgZGVzdHJveWVyUGxhY2VkID0gcGxhY2VEZXN0cm95ZXJPbkJvYXJkKFxyXG4gICAgY29vcmRpbmF0ZSxcclxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cclxuICApXHJcblxyXG4gIGlmIChkZXN0cm95ZXJQbGFjZWQpIHtcclxuICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxyXG4gICAgdG9wQmFyQ29udGFpbmVyUGFyYS50ZXh0Q29udGVudCA9ICcnXHJcbiAgICByZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuKClcclxuICAgIGF3YWl0IGRpc3BsYXlDb250cm9sbGVyKClcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHBsYWNlRGVzdHJveWVyXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBwbGFjZUNhcnJpZXJPbkJvYXJkID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcclxuICBjb25zdCBzaGlwVHlwZSA9ICdjYXJyaWVyJ1xyXG4gIGNvbnN0IGNhcnJpZXJQbGFjZWQgPSBnYW1lLnBsYWNlQ2FycmllclNoaXAoXHJcbiAgICBjb29yZGluYXRlLFxyXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxyXG4gIClcclxuICBjb25zdCBib2FyZERPTUNlbGxzQXJyID0gW1xyXG4gICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYXllckJvYXJkID4gYnV0dG9uJylcclxuICBdXHJcbiAgaWYgKCFjYXJyaWVyUGxhY2VkKSB7XHJcbiAgICByZXR1cm4gY2FycmllclBsYWNlZFxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxyXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBnZXRWZXJ0aWNhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGNhcnJpZXJQbGFjZWRcclxufVxyXG5cclxuY29uc3QgcGxhY2VCYXR0bGVzaGlwT25Cb2FyZCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XHJcbiAgY29uc3Qgc2hpcFR5cGUgPSAnYmF0dGxlc2hpcCdcclxuICBjb25zdCBiYXR0bGVzaGlwUGxhY2VkID0gZ2FtZS5wbGFjZUJhdHRsZVNoaXAoXHJcbiAgICBjb29yZGluYXRlLFxyXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxyXG4gIClcclxuICBjb25zdCBib2FyZERPTUNlbGxzQXJyID0gW1xyXG4gICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYXllckJvYXJkID4gYnV0dG9uJylcclxuICBdXHJcbiAgaWYgKCFiYXR0bGVzaGlwUGxhY2VkKSB7XHJcbiAgICByZXR1cm4gYmF0dGxlc2hpcFBsYWNlZFxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxyXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBnZXRWZXJ0aWNhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGJhdHRsZXNoaXBQbGFjZWRcclxufVxyXG5cclxuY29uc3QgcGxhY2VDcnVpc2VyT25Cb2FyZCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XHJcbiAgY29uc3Qgc2hpcFR5cGUgPSAnY3J1aXNlcidcclxuICBjb25zdCBjcnVpc2VyUGxhY2VkID0gZ2FtZS5wbGFjZUNydWlzZXJTaGlwKFxyXG4gICAgY29vcmRpbmF0ZSxcclxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cclxuICApXHJcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcclxuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXHJcbiAgXVxyXG4gIGlmICghY3J1aXNlclBsYWNlZCkge1xyXG4gICAgcmV0dXJuIGNydWlzZXJQbGFjZWRcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZ2V0SG9yaXpvbnRhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZ2V0VmVydGljYWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBjcnVpc2VyUGxhY2VkXHJcbn1cclxuXHJcbmNvbnN0IHBsYWNlU3VibWFyaW5lT25Cb2FyZCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XHJcbiAgY29uc3Qgc2hpcFR5cGUgPSAnc3VibWFyaW5lJ1xyXG4gIGNvbnN0IHN1Ym1hcmluZVBsYWNlZCA9IGdhbWUucGxhY2VTdWJtYXJpbmVTaGlwKFxyXG4gICAgY29vcmRpbmF0ZSxcclxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cclxuICApXHJcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcclxuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXHJcbiAgXVxyXG4gIGlmICghc3VibWFyaW5lUGxhY2VkKSB7XHJcbiAgICByZXR1cm4gc3VibWFyaW5lUGxhY2VkXHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGdldEhvcml6b250YWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXHJcbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGdldFZlcnRpY2FsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gc3VibWFyaW5lUGxhY2VkXHJcbn1cclxuXHJcbmNvbnN0IHBsYWNlRGVzdHJveWVyT25Cb2FyZCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XHJcbiAgY29uc3Qgc2hpcFR5cGUgPSAnZGVzdHJveWVyJ1xyXG4gIGNvbnN0IGRlc3Ryb3llclBsYWNlZCA9IGdhbWUucGxhY2VEZXN0cm95ZXJTaGlwKFxyXG4gICAgY29vcmRpbmF0ZSxcclxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cclxuICApXHJcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcclxuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXHJcbiAgXVxyXG4gIGlmICghZGVzdHJveWVyUGxhY2VkKSB7XHJcbiAgICByZXR1cm4gZGVzdHJveWVyUGxhY2VkXHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGdldEhvcml6b250YWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXHJcbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGdldFZlcnRpY2FsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZGVzdHJveWVyUGxhY2VkXHJcbn1cclxuXHJcbmNvbnN0IGdldEhvcml6b250YWxET01Db29yZHMgPSAoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpID0+IHtcclxuICBjb25zdCBzdGFydGluZ0NvbHVtbiA9IE51bWJlcihjb29yZGluYXRlWzFdKVxyXG4gIGNvbnN0IHNoaXBMZW5ndGggPVxyXG4gICAgc2hpcFR5cGUgPT09ICdjYXJyaWVyJ1xyXG4gICAgICA/IDVcclxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2JhdHRsZXNoaXAnXHJcbiAgICAgID8gNFxyXG4gICAgICA6IHNoaXBUeXBlID09PSAnY3J1aXNlcidcclxuICAgICAgPyAzXHJcbiAgICAgIDogc2hpcFR5cGUgPT09ICdzdWJtYXJpbmUnXHJcbiAgICAgID8gM1xyXG4gICAgICA6IHNoaXBUeXBlID09PSAnZGVzdHJveWVyJ1xyXG4gICAgICA/IDJcclxuICAgICAgOiBudWxsXHJcblxyXG4gIGZvciAobGV0IGkgPSBzdGFydGluZ0NvbHVtbjsgaSA8IHN0YXJ0aW5nQ29sdW1uICsgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCByb3cgPSArY29vcmRpbmF0ZVswXVxyXG4gICAgY29uc3QgY29sdW1uID0gaVxyXG4gICAgY29uc3QgZG9tQ29vcmRpbmF0ZSA9IFtyb3csIGNvbHVtbl1cclxuICAgIGNvbnN0IHRhcmdldERPTUJ0biA9IGZpbmRTaGlwRE9NQnRuKGJvYXJkRE9NQ2VsbHNBcnIsIGRvbUNvb3JkaW5hdGUpXHJcbiAgICB0YXJnZXRET01CdG4uY2xhc3NMaXN0LmFkZCgnc2hpcENlbGwnKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZ2V0VmVydGljYWxET01Db29yZHMgPSAoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpID0+IHtcclxuICBjb25zdCBzdGFydGluZ1JvdyA9IE51bWJlcihjb29yZGluYXRlWzBdKVxyXG4gIGNvbnN0IHNoaXBMZW5ndGggPVxyXG4gICAgc2hpcFR5cGUgPT09ICdjYXJyaWVyJ1xyXG4gICAgICA/IDVcclxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2JhdHRsZXNoaXAnXHJcbiAgICAgID8gNFxyXG4gICAgICA6IHNoaXBUeXBlID09PSAnY3J1aXNlcidcclxuICAgICAgPyAzXHJcbiAgICAgIDogc2hpcFR5cGUgPT09ICdzdWJtYXJpbmUnXHJcbiAgICAgID8gM1xyXG4gICAgICA6IHNoaXBUeXBlID09PSAnZGVzdHJveWVyJ1xyXG4gICAgICA/IDJcclxuICAgICAgOiBudWxsXHJcblxyXG4gIGZvciAobGV0IGkgPSBzdGFydGluZ1JvdzsgaSA+IHN0YXJ0aW5nUm93IC0gc2hpcExlbmd0aDsgaS0tKSB7XHJcbiAgICBjb25zdCByb3cgPSBpXHJcbiAgICBjb25zdCBjb2x1bW4gPSArY29vcmRpbmF0ZVsxXVxyXG4gICAgY29uc3QgZG9tQ29vcmRpbmF0ZSA9IFtyb3csIGNvbHVtbl1cclxuICAgIGNvbnN0IHRhcmdldERPTUJ0biA9IGZpbmRTaGlwRE9NQnRuKGJvYXJkRE9NQ2VsbHNBcnIsIGRvbUNvb3JkaW5hdGUpXHJcbiAgICB0YXJnZXRET01CdG4uY2xhc3NMaXN0LmFkZCgnc2hpcENlbGwnKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZmluZFNoaXBET01CdG4gPSAoYm9hcmRET01DZWxsc0FyciwgZG9tQ29vcmRpbmF0ZSkgPT4ge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRET01DZWxsc0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZG9tQ2VsbFJvdyA9ICtib2FyZERPTUNlbGxzQXJyW2ldLmRhdGFzZXQucm93XHJcbiAgICBjb25zdCBkb21DZWxsQ29sdW1uID0gK2JvYXJkRE9NQ2VsbHNBcnJbaV0uZGF0YXNldC5jb2x1bW5cclxuICAgIGlmIChcclxuICAgICAgZG9tQ2VsbFJvdyA9PT0gK2RvbUNvb3JkaW5hdGVbMF0gJiZcclxuICAgICAgZG9tQ2VsbENvbHVtbiA9PT0gK2RvbUNvb3JkaW5hdGVbMV1cclxuICAgICkge1xyXG4gICAgICByZXR1cm4gYm9hcmRET01DZWxsc0FycltpXVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0ID0gYXN5bmMgKGUsIGNvbnRyb2xsZXIpID0+IHtcclxuICBjb25zdCBzZWxlY3RlZFJvdyA9ICtlLnRhcmdldC5kYXRhc2V0LnJvd1xyXG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gK2UudGFyZ2V0LmRhdGFzZXQuY29sdW1uXHJcbiAgY29uc3QgY29vcmRpbmF0ZSA9IFtzZWxlY3RlZFJvdywgc2VsZWN0ZWRDb2x1bW5dXHJcbiAgY29uc3QgYWlCb2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSUJvYXJkJylcclxuICBjb25zdCBhaUJvYXJkID0gZ2FtZS5nZXRBSUJvYXJkT2JqXHJcbiAgY29uc3QgYWxyZWFkeUF0dGFja2VkID0gYWlCb2FyZC5wcmV2ZW50U2FtZUF0dGFjayhjb29yZGluYXRlKVxyXG4gIGlmIChzZWxlY3RlZENvbHVtbiA9PT0gJ3VuZGVmaW5lZCcgfHwgc2VsZWN0ZWRSb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0XHJcbiAgfSBlbHNlIGlmIChhbHJlYWR5QXR0YWNrZWQpIHtcclxuICAgIHJldHVybiBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnRcclxuICB9XHJcblxyXG4gIGNvbnRyb2xsZXIuYWJvcnQoKVxyXG5cclxuICBnYW1lLnBsYXlSb3VuZChjb29yZGluYXRlKVxyXG4gIGNvbnN0IGh1bWFuTW92ZVN1Y2Nlc3NmdWwgPSBnYW1lLmdldEFJQm9hcmRPYmouZ2V0TGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwoKVxyXG4gIC8vIFVzZSB0aGlzIHZhbHVlIHdoZW4gZGV0ZXJtaW5pbmcgd2hldGhlciB0byBzaG93IHNoaXAgYXMgc3Vua1xyXG4gIGNvbnN0IHNoaXBJc1N1bmsgPSBnYW1lLmlzU2hpcFN1bmsoJ2h1bWFuJywgY29vcmRpbmF0ZSlcclxuICBjb25zdCBzaGlwU3Vua1Jlc3VsdCA9IHNoaXBJc1N1bmtbMF1cclxuICBpZiAoc2hpcFN1bmtSZXN1bHQpIHtcclxuICAgIGRpc3BsYXlTdW5rU2hpcE1lc3NhZ2UoJ2h1bWFuJylcclxuICB9IGVsc2UgaWYgKCFzaGlwU3Vua1Jlc3VsdCkge1xyXG4gICAgaHVtYW5Nb3ZlU3VjY2Vzc2Z1bFxyXG4gICAgICA/IGRpc3BsYXlTdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSgnaHVtYW4nKVxyXG4gICAgICA6IGRpc3BsYXlVbnN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlKCdodW1hbicpXHJcbiAgfVxyXG5cclxuICBjb25zdCBodW1hbldpbnMgPSBnYW1lLmNoZWNrRm9yV2luKClcclxuXHJcbiAgdXBkYXRlQUlCb2FyZCgpXHJcbiAgYXdhaXQgZGVsYXkoNDAwMClcclxuICBoYW5kbGVXaW5DaGVjayhodW1hbldpbnMsIGFpQm9hcmREaXYpXHJcbiAgaGFuZGxlQUlNb3ZlKGFpQm9hcmREaXYpXHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUFJTW92ZSA9IGFzeW5jIChhaUJvYXJkRGl2KSA9PiB7XHJcbiAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICBjb25zdCBlbmVteUF0dGFja2luZ01zZyA9ICdFbmVteSBpcyBhdHRhY2tpbmcgeW91ciBzaGlwcyEnXHJcbiAgdHJhbnNpdGlvblRleHRDaGFuZ2VzKGVuZW15QXR0YWNraW5nTXNnLCB0b3BCYXJDb250YWluZXJQYXJhKVxyXG4gIGF3YWl0IGRlbGF5KDMwMDApXHJcbiAgY29uc3QgZ3Vlc3NlZENvb3JkaW5hdGUgPSBnYW1lLnBsYXlSb3VuZCgpXHJcbiAgY29uc3QgYWlNb3ZlU3VjY2Vzc2Z1bCA9IGdhbWUuZ2V0SHVtYW5Cb2FyZE9iai5nZXRMYXN0QUlNb3ZlU3VjY2Vzc2Z1bCgpXHJcbiAgY29uc3Qgc2hpcElzU3VuayA9IGdhbWUuaXNTaGlwU3VuaygnY29tcHV0ZXInLCBndWVzc2VkQ29vcmRpbmF0ZSlcclxuICBjb25zdCBzaGlwU3Vua1Jlc3VsdCA9IHNoaXBJc1N1bmtbMF1cclxuICBpZiAoc2hpcFN1bmtSZXN1bHQgPT09IHRydWUpIHtcclxuICAgIGRpc3BsYXlTdW5rU2hpcE1lc3NhZ2UoJ2NvbXB1dGVyJylcclxuICB9IGVsc2UgaWYgKCFzaGlwU3Vua1Jlc3VsdCkge1xyXG4gICAgYWlNb3ZlU3VjY2Vzc2Z1bFxyXG4gICAgICA/IGRpc3BsYXlTdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSgnY29tcHV0ZXInKVxyXG4gICAgICA6IGRpc3BsYXlVbnN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlKCdjb21wdXRlcicpXHJcbiAgfVxyXG5cclxuICBjb25zdCBhaVdpbnMgPSBnYW1lLmNoZWNrRm9yV2luKClcclxuXHJcbiAgdXBkYXRlSHVtYW5Cb2FyZCgpXHJcbiAgYXdhaXQgZGVsYXkoMjUwMClcclxuICBjb25zdCBhdHRhY2tUaGVFbmVteU1zZyA9ICdBdHRhY2sgdGhlIGVuZW1pZXMgc2hpcHMuLi4nXHJcbiAgdHJhbnNpdGlvblRleHRDaGFuZ2VzKGF0dGFja1RoZUVuZW15TXNnLCB0b3BCYXJDb250YWluZXJQYXJhKVxyXG5cclxuICBhd2FpdCBkZWxheSgyMDAwKVxyXG4gIGhhbmRsZVdpbkNoZWNrKGFpV2lucywgYWlCb2FyZERpdilcclxuXHJcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxyXG4gIGFpQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICdjbGljaycsXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnQoZSwgY29udHJvbGxlcilcclxuICAgIH0sXHJcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxyXG4gIClcclxufVxyXG5cclxuY29uc3QgYW5ub3VuY2VXaW5uZXIgPSAod2lubmVyKSA9PiB7XHJcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICBjb25zdCB3aW5uZXJOYW1lID0gd2lubmVyLmdldE5hbWUoKVxyXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSBgJHt3aW5uZXJOYW1lfSB3aW4ncyFgXHJcbn1cclxuXHJcbmNvbnN0IHBsYXlBZ2FpbiA9ICgpID0+IHtcclxuICBjb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyJylcclxuICBjb25zdCBwbGF5QWdhaW5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gIHBsYXlBZ2FpbkJ0bi50ZXh0Q29udGVudCA9ICdQbGF5IGFnYWluJ1xyXG4gIHRvcEJhckRpdi5hcHBlbmRDaGlsZChwbGF5QWdhaW5CdG4pXHJcbiAgcGxheUFnYWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnROZXdHYW1lKVxyXG59XHJcblxyXG5jb25zdCBzdGFydE5ld0dhbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9wQmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lcicpXHJcbiAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IGJ1dHRvbicpXHJcbiAgdG9wQmFyRGl2LnJlbW92ZUNoaWxkKHBsYXlBZ2FpbkJ0bilcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpLnRleHRDb250ZW50ID0gJydcclxuICBkaXNwbGF5Q29udHJvbGxlcigpXHJcbn1cclxuXHJcbi8vIEZvciBlYWNoIG9mIHRoZSBwbGFjZSBzaGlwIGZ1bmN0aW9ucywgd2UgbmVlZCB0byByZW1vdmUgdGhlIHByZXZpb3VzXHJcbi8vIG9yaWVudGF0aW9uIHRvZ2dsZSBidXR0b24gdG8gcHJldmVudCB0aGUgc2FtZSBsaXN0ZW5lciBmaXJpbmcgZm9yIGVhY2ggb2YgdGhlXHJcbi8vIHByZXZpb3VzIG9yaWVudGF0aW9uIHRvZ2dsZSBidXR0b25zXHJcbmNvbnN0IHJlbW92ZVByZXZpb3VzT3JpZW50YXRpb25CdG4gPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9wQmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lcicpXHJcbiAgY29uc3QgcHJldmlvdXNPcmllbnRhdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmllbnRhdGlvblRvZ2dsZUJ0bicpXHJcbiAgdG9wQmFyRGl2LnJlbW92ZUNoaWxkKHByZXZpb3VzT3JpZW50YXRpb25CdG4pXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvcEJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXInKVxyXG4gIGNvbnN0IGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXHJcbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLmNsYXNzTGlzdC5hZGQoJ29yaWVudGF0aW9uVG9nZ2xlQnRuJylcclxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJ1xyXG4gIHRvcEJhckRpdi5hcHBlbmRDaGlsZChvcmllbnRhdGlvblRvZ2dsZUJ0bilcclxuXHJcbiAgcmV0dXJuIFtob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzLCBvcmllbnRhdGlvblRvZ2dsZUJ0bl1cclxufVxyXG5cclxuY29uc3QgZGlzcGxheVN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlID0gKHBsYXllcikgPT4ge1xyXG4gIGlmIChwbGF5ZXIgPT09ICdodW1hbicpIHtcclxuICAgIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgICBjb25zdCBhdHRhY2tBbmRIaXRNc2cgPSAnWW91IGF0dGFja2VkIHRoZSBlbmVteS4uLiBhbmQgaGl0IHRoZWlyIHNoaXAhJ1xyXG4gICAgc2V0VGltZW91dCh0cmFuc2l0aW9uVGV4dENoYW5nZXMsIDEwLCBhdHRhY2tBbmRIaXRNc2csIHRvcEJhckNvbnRhaW5lclBhcmEpXHJcbiAgfSBlbHNlIGlmIChwbGF5ZXIgPT09ICdjb21wdXRlcicpIHtcclxuICAgIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgICBjb25zdCBlbmVteUhpdE1zZyA9ICdUaGUgZW5lbXkgbGF1bmNoZWQgYW4gYXR0YWNrLi4uIGFuZCBoaXQgeW91ciBzaGlwISdcclxuICAgIHNldFRpbWVvdXQodHJhbnNpdGlvblRleHRDaGFuZ2VzLCAxMCwgZW5lbXlIaXRNc2csIHRvcEJhckNvbnRhaW5lclBhcmEpXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5VW5zdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSA9IChwbGF5ZXIpID0+IHtcclxuICBpZiAocGxheWVyID09PSAnaHVtYW4nKSB7XHJcbiAgICBjb25zdCB0b3BCYXJDb250YWluZXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxyXG4gICAgY29uc3QgdW5zdWNjZXNzZnVsQXR0YWNrTXNnID0gJ1lvdXIgYXR0YWNrIG9uIHRoZSBlbmVteSB3YXMgdW5zdWNjZXNzZnVsJ1xyXG4gICAgc2V0VGltZW91dChcclxuICAgICAgdHJhbnNpdGlvblRleHRDaGFuZ2VzLFxyXG4gICAgICAxMCxcclxuICAgICAgdW5zdWNjZXNzZnVsQXR0YWNrTXNnLFxyXG4gICAgICB0b3BCYXJDb250YWluZXJQYXJhXHJcbiAgICApXHJcbiAgfSBlbHNlIGlmIChwbGF5ZXIgPT09ICdjb21wdXRlcicpIHtcclxuICAgIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgICBjb25zdCB1bnN1Y2Nlc3NmdWxFbmVteUF0dGFja01zZyA9ICdUaGUgZW5lbWllcyBhdHRhY2sgd2FzIHVuc3VjY2Vzc2Z1bCdcclxuICAgIHNldFRpbWVvdXQoXHJcbiAgICAgIHRyYW5zaXRpb25UZXh0Q2hhbmdlcyxcclxuICAgICAgMTAsXHJcbiAgICAgIHVuc3VjY2Vzc2Z1bEVuZW15QXR0YWNrTXNnLFxyXG4gICAgICB0b3BCYXJDb250YWluZXJQYXJhXHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5U3Vua1NoaXBNZXNzYWdlID0gKHBsYXllcikgPT4ge1xyXG4gIGlmIChwbGF5ZXIgPT09ICdodW1hbicpIHtcclxuICAgIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgICBjb25zdCBzdW5rU2hpcE1lc3NhZ2UgPSAnWW91IGhhdmUgc3VuayB0aGUgZW5lbWllcyBzaGlwISdcclxuICAgIHNldFRpbWVvdXQodHJhbnNpdGlvblRleHRDaGFuZ2VzLCAxMCwgc3Vua1NoaXBNZXNzYWdlLCB0b3BCYXJDb250YWluZXJQYXJhKVxyXG4gIH0gZWxzZSBpZiAocGxheWVyID09PSAnY29tcHV0ZXInKSB7XHJcbiAgICBjb25zdCB0b3BCYXJDb250YWluZXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxyXG4gICAgY29uc3Qgc3Vua1NoaXBNZXNzYWdlID0gJ1RoZSBlbmVteSBzdW5rIG9uZSBvZiB5b3VyIHNoaXBzISdcclxuICAgIHNldFRpbWVvdXQodHJhbnNpdGlvblRleHRDaGFuZ2VzLCAxMCwgc3Vua1NoaXBNZXNzYWdlLCB0b3BCYXJDb250YWluZXJQYXJhKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaGFuZGxlV2luQ2hlY2sgPSAod2luQ2hlY2ssIGJvYXJkRGl2KSA9PiB7XHJcbiAgaWYgKHdpbkNoZWNrKSB7XHJcbiAgICBib2FyZERpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dClcclxuICAgIGdhbWUucmVzZXRHYW1lU3RhdGUoKVxyXG4gICAgYW5ub3VuY2VXaW5uZXIod2luQ2hlY2spXHJcbiAgICBwbGF5QWdhaW4oKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdHJhbnNpdGlvblRleHRDaGFuZ2VzID0gYXN5bmMgKG5ld01lc3NhZ2UsIGRvbUVsZW1lbnQpID0+IHtcclxuICBkb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpXHJcbiAgYXdhaXQgZGVsYXkoNDAwKVxyXG4gIGRvbUVsZW1lbnQudGV4dENvbnRlbnQgPSBuZXdNZXNzYWdlXHJcbiAgYXdhaXQgZGVsYXkoNDAwKVxyXG4gIGRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJylcclxufVxyXG5cclxuLy8gY29uc3QgaGFuZGxlUGxheWVyU2VsZXRpb25cclxuXHJcbmV4cG9ydCB7IHJlbmRlclBsYXllckJvYXJkLCByZW5kZXJBSUJvYXJkLCBkaXNwbGF5Q29udHJvbGxlciwgcHJlR2FtZVNldHVwIH1cclxuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi4vZmFjdG9yaWVzL0dhbWVib2FyZCdcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vZmFjdG9yaWVzL1BsYXllcidcclxuaW1wb3J0IHsgYXJyYXlzQXJlRXF1YWwgfSBmcm9tICcuLi9oZWxwZXJzL2FycmF5c0FyZUVxdWFsJ1xyXG5pbXBvcnQgeyByZXR1cm5SYW5kb21BSUJvYXJkIH0gZnJvbSAnLi4vaGVscGVycy9yb3RhdGVBSUJvYXJkcydcclxuXHJcbmNvbnN0IGdhbWVDb250cm9sbGVyID0gKCkgPT4ge1xyXG4gIC8vIENyZWF0ZSB0d28gZ2FtZSBib2FyZHNcclxuICBjb25zdCBodW1hbkJvYXJkID0gR2FtZWJvYXJkKClcclxuICBodW1hbkJvYXJkLmNyZWF0ZUdhbWVCb2FyZCgpXHJcblxyXG4gIGNvbnN0IGFpQm9hcmQgPSBHYW1lYm9hcmQoKVxyXG4gIGFpQm9hcmQuY3JlYXRlR2FtZUJvYXJkKClcclxuXHJcbiAgY29uc3QgcGxhY2VDYXJyaWVyU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XHJcbiAgICBsZXQgY2FycmllclBsYWNlZCA9IHRydWVcclxuXHJcbiAgICBjb25zdCBjYXJyaWVyQXJyID0gZGV0ZXJtaW5lQ2FycmllckFyckNvb3JkcyhcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICAgICAgY29vcmRpbmF0ZVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChjYXJyaWVyQXJyKVxyXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XHJcbiAgICAgIGNhcnJpZXJQbGFjZWQgPSBmYWxzZVxyXG4gICAgICByZXR1cm4gY2FycmllclBsYWNlZFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYXJyaWVyUGxhY2VkXHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXRlcm1pbmVDYXJyaWVyQXJyQ29vcmRzID0gKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sIGNvb3JkaW5hdGUpID0+IHtcclxuICAgIGNvbnN0IGNhcnJpZXJBcnIgPSBbXVxyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgY2FycmllckFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cclxuICAgICAgICBjYXJyaWVyQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgY2FycmllckFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbKCtjb29yZGluYXRlWzBdIC0gaSkudG9TdHJpbmcoKSwgY29vcmRpbmF0ZVsxXV1cclxuICAgICAgICBjYXJyaWVyQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjYXJyaWVyQXJyXHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGFjZUJhdHRsZVNoaXAgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xyXG4gICAgbGV0IGJhdHRsZXNoaXBQbGFjZWQgPSB0cnVlXHJcbiAgICBjb25zdCBiYXR0bGVzaGlwQXJyID0gZGV0ZXJtaW5lQmF0dGxlc2hpcEFyckNvb3JkcyhcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICAgICAgY29vcmRpbmF0ZVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChiYXR0bGVzaGlwQXJyKVxyXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XHJcbiAgICAgIGJhdHRsZXNoaXBQbGFjZWQgPSBmYWxzZVxyXG4gICAgICByZXR1cm4gYmF0dGxlc2hpcFBsYWNlZFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBiYXR0bGVzaGlwUGxhY2VkXHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXRlcm1pbmVCYXR0bGVzaGlwQXJyQ29vcmRzID0gKFxyXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICAgIGNvb3JkaW5hdGVcclxuICApID0+IHtcclxuICAgIGNvbnN0IGJhdHRsZXNoaXBBcnIgPSBbXVxyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgYmF0dGxlc2hpcEFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cclxuICAgICAgICBiYXR0bGVzaGlwQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgYmF0dGxlc2hpcEFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbKCtjb29yZGluYXRlWzBdIC0gaSkudG9TdHJpbmcoKSwgY29vcmRpbmF0ZVsxXV1cclxuICAgICAgICBiYXR0bGVzaGlwQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBiYXR0bGVzaGlwQXJyXHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGFjZUNydWlzZXJTaGlwID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcclxuICAgIGxldCBjcnVpc2VyUGxhY2VkID0gdHJ1ZVxyXG4gICAgY29uc3QgY3J1aXNlckFyciA9IGRldGVybWluZUNydWlzZXJBcnJDb29yZHMoXHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXHJcbiAgICAgIGNvb3JkaW5hdGVcclxuICAgIClcclxuXHJcbiAgICBjb25zdCBzaGlwUGxhY2VkID0gaHVtYW5Cb2FyZC5wbGFjZVNoaXAoY3J1aXNlckFycilcclxuICAgIGlmICghc2hpcFBsYWNlZCkge1xyXG4gICAgICBjcnVpc2VyUGxhY2VkID0gZmFsc2VcclxuICAgICAgcmV0dXJuIGNydWlzZXJQbGFjZWRcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3J1aXNlclBsYWNlZFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGV0ZXJtaW5lQ3J1aXNlckFyckNvb3JkcyA9IChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLCBjb29yZGluYXRlKSA9PiB7XHJcbiAgICBjb25zdCBjcnVpc2VyQXJyID0gW11cclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGNydWlzZXJBcnIucHVzaChjb29yZGluYXRlKVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkID0gW2Nvb3JkaW5hdGVbMF0sICgrY29vcmRpbmF0ZVsxXSArIGkpLnRvU3RyaW5nKCldXHJcbiAgICAgICAgY3J1aXNlckFyci5wdXNoKGNvb3JkKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGNydWlzZXJBcnIucHVzaChjb29yZGluYXRlKVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkID0gWygrY29vcmRpbmF0ZVswXSAtIGkpLnRvU3RyaW5nKCksIGNvb3JkaW5hdGVbMV1dXHJcbiAgICAgICAgY3J1aXNlckFyci5wdXNoKGNvb3JkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3J1aXNlckFyclxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxhY2VTdWJtYXJpbmVTaGlwID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcclxuICAgIGxldCBzdWJtYXJpbmVQbGFjZWQgPSB0cnVlXHJcbiAgICBjb25zdCBzdWJtYXJpbmVBcnIgPSBkZXRlcm1pbmVTdWJtYXJpbmVBcnJDb29yZHMoXHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXHJcbiAgICAgIGNvb3JkaW5hdGVcclxuICAgIClcclxuXHJcbiAgICBjb25zdCBzaGlwUGxhY2VkID0gaHVtYW5Cb2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lQXJyKVxyXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XHJcbiAgICAgIHN1Ym1hcmluZVBsYWNlZCA9IGZhbHNlXHJcbiAgICAgIHJldHVybiBzdWJtYXJpbmVQbGFjZWRcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3VibWFyaW5lUGxhY2VkXHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXRlcm1pbmVTdWJtYXJpbmVBcnJDb29yZHMgPSAoXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxyXG4gICAgY29vcmRpbmF0ZVxyXG4gICkgPT4ge1xyXG4gICAgY29uc3Qgc3VibWFyaW5lQXJyID0gW11cclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIHN1Ym1hcmluZUFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cclxuICAgICAgICBzdWJtYXJpbmVBcnIucHVzaChjb29yZClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBzdWJtYXJpbmVBcnIucHVzaChjb29yZGluYXRlKVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkID0gWygrY29vcmRpbmF0ZVswXSAtIGkpLnRvU3RyaW5nKCksIGNvb3JkaW5hdGVbMV1dXHJcbiAgICAgICAgc3VibWFyaW5lQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdWJtYXJpbmVBcnJcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYWNlRGVzdHJveWVyU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XHJcbiAgICBsZXQgZGVzdHJveWVyUGxhY2VkID0gdHJ1ZVxyXG4gICAgY29uc3QgZGVzdHJveWVyQXJyID0gZGV0ZXJtaW5lRGVzdHJveWVyQXJyQ29vcmRzKFxyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxyXG4gICAgICBjb29yZGluYXRlXHJcbiAgICApXHJcblxyXG4gICAgY29uc3Qgc2hpcFBsYWNlZCA9IGh1bWFuQm9hcmQucGxhY2VTaGlwKGRlc3Ryb3llckFycilcclxuICAgIGlmICghc2hpcFBsYWNlZCkge1xyXG4gICAgICBkZXN0cm95ZXJQbGFjZWQgPSBmYWxzZVxyXG4gICAgICByZXR1cm4gZGVzdHJveWVyUGxhY2VkXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGV0ZXJtaW5lRGVzdHJveWVyQXJyQ29vcmRzID0gKFxyXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICAgIGNvb3JkaW5hdGVcclxuICApID0+IHtcclxuICAgIGNvbnN0IGRlc3Ryb3llckFyciA9IFtdXHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBkZXN0cm95ZXJBcnIucHVzaChjb29yZGluYXRlKVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkID0gW2Nvb3JkaW5hdGVbMF0sICgrY29vcmRpbmF0ZVsxXSArIGkpLnRvU3RyaW5nKCldXHJcbiAgICAgICAgZGVzdHJveWVyQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZGVzdHJveWVyQXJyLnB1c2goY29vcmRpbmF0ZSlcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjb29yZCA9IFsoK2Nvb3JkaW5hdGVbMF0gLSBpKS50b1N0cmluZygpLCBjb29yZGluYXRlWzFdXVxyXG4gICAgICAgIGRlc3Ryb3llckFyci5wdXNoKGNvb3JkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVzdHJveWVyQXJyXHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGFjZUFJU2hpcHMgPSAoKSA9PiB7XHJcbiAgICBwbGFjZVNoaXBzKGFpQm9hcmQsIHJldHVyblJhbmRvbUFJQm9hcmQoKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYXllcnMgPSB7fVxyXG5cclxuICBjb25zdCBnZXRQbGF5ZXJzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHBsYXllcnNcclxuICB9XHJcblxyXG4gIGNvbnN0IGh1bWFuUGxheWVyID0gUGxheWVyKCdIdW1hbicsIGZhbHNlKVxyXG4gIGNvbnN0IGFpUGxheWVyID0gUGxheWVyKCdBSScsIHRydWUpXHJcbiAgcGxheWVycy5odW1hbiA9IGh1bWFuUGxheWVyXHJcbiAgcGxheWVycy5BSSA9IGFpUGxheWVyXHJcblxyXG4gIGxldCBjdXJyZW50UGxheWVyID0gcGxheWVycy5odW1hblxyXG5cclxuICBjb25zdCBnZXRDdXJyZW50UGxheWVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRQbGF5ZXJcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYXlSb3VuZCA9IChjb29yZGluYXRlKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuaHVtYW4uZ2V0TmFtZSgpKSB7XHJcbiAgICAgIGFpQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlLCBjdXJyZW50UGxheWVyLmdldE5hbWUoKSlcclxuICAgICAgc3dpdGNoUGxheWVyKClcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuQUkuZ2V0TmFtZSgpKSB7XHJcbiAgICAgIGNvbnN0IG5leHRNb3ZlID0gY29tcHV0ZXJzTmV4dE1vdmUoKVxyXG4gICAgICBodW1hbkJvYXJkLnJlY2VpdmVBdHRhY2sobmV4dE1vdmUsIGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpKVxyXG4gICAgICBodW1hbkJvYXJkLnJlbW92ZUxhc3RBSU1vdmUobmV4dE1vdmUpXHJcbiAgICAgIHN3aXRjaFBsYXllcigpXHJcbiAgICAgIHJldHVybiBuZXh0TW92ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcHV0ZXJzTmV4dE1vdmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhdmFpbGFibGVNb3ZlcyA9IGh1bWFuQm9hcmQuZ2V0QUlBdmFpbGFibGVNb3ZlcygpXHJcbiAgICBjb25zdCBsYXN0QUlNb3ZlU3VjY2Vzc2Z1bCA9IGh1bWFuQm9hcmQuZ2V0TGFzdEFJTW92ZVN1Y2Nlc3NmdWwoKVxyXG4gICAgaWYgKGxhc3RBSU1vdmVTdWNjZXNzZnVsKSB7XHJcbiAgICAgIGNvbnN0IGFkamFjZW50U2xvdHMgPSBjdXJyZW50UGxheWVyLmdldEFkamFjZW50U2xvdHMoXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgICBhdmFpbGFibGVNb3ZlcyxcclxuICAgICAgICBodW1hbkJvYXJkLmdldFN1Y2Nlc3NmdWxTaG90cygpLFxyXG4gICAgICAgIGh1bWFuQm9hcmQuZ2V0TWlzc2VkU2hvdHMoKVxyXG4gICAgICApXHJcbiAgICAgIGh1bWFuQm9hcmQuYWRkQWRqYWNlbnRTbG90c1RvUXVldWUoYWRqYWNlbnRTbG90cylcclxuICAgICAgY29uc3QgbmV4dE1vdmUgPSBodW1hbkJvYXJkLmdldEFkamFjZW50UXVldWVTbG90KClcclxuICAgICAgcmV0dXJuIG5leHRNb3ZlXHJcbiAgICB9IGVsc2UgaWYgKCFsYXN0QUlNb3ZlU3VjY2Vzc2Z1bCkge1xyXG4gICAgICBjb25zdCByYW5kb21Nb3ZlID0gY3VycmVudFBsYXllci5tYWtlUmFuZG9tTW92ZSh0cnVlLCBhdmFpbGFibGVNb3ZlcylcclxuICAgICAgcmV0dXJuIHJhbmRvbU1vdmVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHN3aXRjaFBsYXllciA9ICgpID0+IHtcclxuICAgIGN1cnJlbnRQbGF5ZXIgPVxyXG4gICAgICBjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5odW1hbi5nZXROYW1lKClcclxuICAgICAgICA/IChjdXJyZW50UGxheWVyID0gcGxheWVycy5BSSlcclxuICAgICAgICA6IChjdXJyZW50UGxheWVyID0gcGxheWVycy5odW1hbilcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrRm9yV2luID0gKCkgPT4ge1xyXG4gICAgbGV0IHdpbm5lclxyXG4gICAgaWYgKFxyXG4gICAgICBjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5odW1hbi5nZXROYW1lKCkgJiZcclxuICAgICAgYWlCb2FyZC5hbGxTaGlwc1N1bmsoKVxyXG4gICAgKSB7XHJcbiAgICAgIHdpbm5lciA9IGN1cnJlbnRQbGF5ZXJcclxuICAgICAgcmV0dXJuIHdpbm5lclxyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuQUkuZ2V0TmFtZSgpICYmXHJcbiAgICAgIGh1bWFuQm9hcmQuYWxsU2hpcHNTdW5rKClcclxuICAgICkge1xyXG4gICAgICB3aW5uZXIgPSBjdXJyZW50UGxheWVyXHJcbiAgICAgIHJldHVybiB3aW5uZXJcclxuICAgIH1cclxuICAgIHJldHVybiB3aW5uZXJcclxuICB9XHJcblxyXG4gIGNvbnN0IGlzU2hpcFN1bmsgPSAocGxheWVyLCBjb29yZGluYXRlKSA9PiB7XHJcbiAgICBsZXQgc2hpcElzU3Vua1xyXG4gICAgaWYgKHBsYXllciA9PT0gJ2h1bWFuJykge1xyXG4gICAgICBjb25zdCBsYXN0U3VjY2Vzc2Z1bEh1bWFuTW92ZSA9IGFpQm9hcmQuZ2V0TGFzdFN1Y2Nlc3NmdWxNb3ZlKClcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGxhc3RTdWNjZXNzZnVsSHVtYW5Nb3ZlID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICBsYXN0U3VjY2Vzc2Z1bEh1bWFuTW92ZSAhPT0gY29vcmRpbmF0ZVxyXG4gICAgICApIHtcclxuICAgICAgICBzaGlwSXNTdW5rID0gZmFsc2VcclxuICAgICAgICByZXR1cm4gW3NoaXBJc1N1bmtdXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZ2FtZUJvYXJkID0gYWlCb2FyZC5nZXRCb2FyZCgpXHJcbiAgICAgIGNvbnN0IHRhcmdldFNoaXBPYmogPVxyXG4gICAgICAgIGdhbWVCb2FyZFtsYXN0U3VjY2Vzc2Z1bEh1bWFuTW92ZVswXV1bbGFzdFN1Y2Nlc3NmdWxIdW1hbk1vdmVbMV1dXHJcbiAgICAgIHNoaXBJc1N1bmsgPSB0YXJnZXRTaGlwT2JqLmhhc0JlZW5TdW5rKClcclxuICAgICAgcmV0dXJuIFtzaGlwSXNTdW5rLCB0YXJnZXRTaGlwT2JqLCBsYXN0U3VjY2Vzc2Z1bEh1bWFuTW92ZV1cclxuICAgIH0gZWxzZSBpZiAocGxheWVyID09PSAnY29tcHV0ZXInKSB7XHJcbiAgICAgIGNvbnN0IGxhc3RTdWNjZXNzZnVsQUlNb3ZlID0gaHVtYW5Cb2FyZC5nZXRMYXN0U3VjY2Vzc2Z1bE1vdmUoKVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgbGFzdFN1Y2Nlc3NmdWxBSU1vdmUgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgIGxhc3RTdWNjZXNzZnVsQUlNb3ZlICE9PSBjb29yZGluYXRlXHJcbiAgICAgICkge1xyXG4gICAgICAgIHNoaXBJc1N1bmsgPSBmYWxzZVxyXG4gICAgICAgIHJldHVybiBbc2hpcElzU3Vua11cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBnYW1lQm9hcmQgPSBodW1hbkJvYXJkLmdldEJvYXJkKClcclxuICAgICAgY29uc3QgdGFyZ2V0U2hpcE9iaiA9XHJcbiAgICAgICAgZ2FtZUJvYXJkW2xhc3RTdWNjZXNzZnVsQUlNb3ZlWzBdXVtsYXN0U3VjY2Vzc2Z1bEFJTW92ZVsxXV1cclxuICAgICAgc2hpcElzU3VuayA9IHRhcmdldFNoaXBPYmouaGFzQmVlblN1bmsoKVxyXG5cclxuICAgICAgcmV0dXJuIFtzaGlwSXNTdW5rLCB0YXJnZXRTaGlwT2JqLCBsYXN0U3VjY2Vzc2Z1bEFJTW92ZV1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc2V0R2FtZVN0YXRlID0gKHdpbm5lcikgPT4ge1xyXG4gICAgaHVtYW5Cb2FyZC5jbGVhckdhbWVCb2FyZCgpXHJcbiAgICBhaUJvYXJkLmNsZWFyR2FtZUJvYXJkKClcclxuICAgIGh1bWFuQm9hcmQuY3JlYXRlR2FtZUJvYXJkKClcclxuICAgIGFpQm9hcmQuY3JlYXRlR2FtZUJvYXJkKClcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBnZXRIdW1hbkJvYXJkOiBodW1hbkJvYXJkLmdldEJvYXJkLFxyXG4gICAgZ2V0QUlCb2FyZDogYWlCb2FyZC5nZXRCb2FyZCxcclxuICAgIGdldEFJQm9hcmRPYmo6IGFpQm9hcmQsXHJcbiAgICBnZXRIdW1hbkJvYXJkT2JqOiBodW1hbkJvYXJkLFxyXG4gICAgc3dpdGNoUGxheWVyLFxyXG4gICAgcGxheVJvdW5kLFxyXG4gICAgZ2V0Q3VycmVudFBsYXllcixcclxuICAgIHJlc2V0R2FtZVN0YXRlLFxyXG4gICAgY2hlY2tGb3JXaW4sXHJcbiAgICBnZXRQbGF5ZXJzLFxyXG4gICAgcGxhY2VBSVNoaXBzLFxyXG4gICAgcGxhY2VDYXJyaWVyU2hpcCxcclxuICAgIHBsYWNlQmF0dGxlU2hpcCxcclxuICAgIHBsYWNlQ3J1aXNlclNoaXAsXHJcbiAgICBwbGFjZVN1Ym1hcmluZVNoaXAsXHJcbiAgICBwbGFjZURlc3Ryb3llclNoaXAsXHJcbiAgICBpc1NoaXBTdW5rXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBnYW1lQ29udHJvbGxlciB9XHJcblxyXG5jb25zdCBwbGFjZVNoaXBzID0gKGJvYXJkLCBjb29yZGluYXRlc09iaikgPT4ge1xyXG4gIGNvbnN0IHNoaXBDb29yZGluYXRlc0FyciA9IE9iamVjdC52YWx1ZXMoY29vcmRpbmF0ZXNPYmopXHJcbiAgc2hpcENvb3JkaW5hdGVzQXJyLmZvckVhY2goKHNoaXBDb29yZGluYXRlcykgPT4ge1xyXG4gICAgYm9hcmQucGxhY2VTaGlwKHNoaXBDb29yZGluYXRlcylcclxuICB9KVxyXG59XHJcblxyXG4vKiBjb25zdCBwbGFjZUVhY2hIdW1hblNoaXAgPSAoY29vcmRpbmF0ZSkgPT4ge1xyXG4gIGh1bWFuQm9hcmQucGxhY2VTaGlwKGNvb3JkaW5hdGUpXHJcbn0gKi9cclxuIiwiaW1wb3J0IHsgYXJyYXlzQXJlRXF1YWwgfSBmcm9tICcuLi9oZWxwZXJzL2FycmF5c0FyZUVxdWFsJ1xyXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9TaGlwJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XHJcbiAgbGV0IGJvYXJkID0gW11cclxuICBjb25zdCBzaGlwT2JqZWN0cyA9IFtdXHJcbiAgY29uc3QgbWlzc2VkU2hvdHMgPSBbXVxyXG4gIGNvbnN0IGFpQXZhaWxhYmxlTW92ZXMgPSBbXVxyXG4gIGNvbnN0IHN1Y2Nlc3NmdWxTaG90cyA9IFtdXHJcbiAgbGV0IGFkamFjZW50U2xvdHNRdWV1ZSA9IFtdXHJcbiAgY29uc3Qgcm93cyA9IDlcclxuICBjb25zdCBjb2x1bW5zID0gOVxyXG4gIGxldCBsYXN0QUlNb3ZlU3VjY2Vzc2Z1bCA9IGZhbHNlXHJcbiAgbGV0IGxhc3RIdW1hbk1vdmVTdWNjZXNzZnVsID0gZmFsc2VcclxuXHJcbiAgY29uc3QgY3JlYXRlR2FtZUJvYXJkID0gKCkgPT4ge1xyXG4gICAgYm9hcmQgPSBbXVxyXG4gICAgZm9yIChsZXQgaSA9IHJvd3M7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGJvYXJkW2ldID0gW11cclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgYm9hcmRbaV0ucHVzaCh1bmRlZmluZWQpXHJcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IFtpLCBqXVxyXG4gICAgICAgIGFpQXZhaWxhYmxlTW92ZXMucHVzaChjb29yZGluYXRlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBjaGVja3MgaWYgY29vcmRpbmF0ZXMgZm9yIHNoaXAgaXMgb24gdGhlXHJcbiAgLy8gZ2FtZSBib2FyZFxyXG4gIGNvbnN0IHZhbGlkYXRlQ29vcmRpbmF0ZXMgPSAoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgIGxldCB2YWxpZENvb3JkaW5hdGVzID0gdHJ1ZVxyXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgICBjb25zdCByb3cgPSBjb29yZGluYXRlWzBdXHJcbiAgICAgIGNvbnN0IGNvbHVtbiA9IGNvb3JkaW5hdGVbMV1cclxuICAgICAgaWYgKHJvdyA+IDkgfHwgcm93IDwgMCkge1xyXG4gICAgICAgIHZhbGlkQ29vcmRpbmF0ZXMgPSBmYWxzZVxyXG4gICAgICAgIHJldHVybiB2YWxpZENvb3JkaW5hdGVzXHJcbiAgICAgIH0gZWxzZSBpZiAoY29sdW1uID4gOSB8fCBjb2x1bW4gPCAwKSB7XHJcbiAgICAgICAgdmFsaWRDb29yZGluYXRlcyA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkQ29vcmRpbmF0ZXNcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gdmFsaWRDb29yZGluYXRlc1xyXG4gIH1cclxuXHJcbiAgLy8gY2hlY2tzIGlmIHNoaXAgY29vcmRpbmF0ZXMgb3ZlcmxhcCB3aXRoIGFscmVhZHlcclxuICAvLyBwbGFjZWQgc2hpcCBjb29yZGluYXRlcyBmb3IgdGhlIHNhbWUgc2hpcFxyXG4gIGNvbnN0IGNoZWNrU2VsZk92ZXJsYXAgPSAoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgIGxldCBjb29yZGluYXRlc092ZXJsYXAgPSBmYWxzZVxyXG4gICAgbGV0IHByZXZDb29yZGluYXRlXHJcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgaWYgKGFycmF5c0FyZUVxdWFsKHByZXZDb29yZGluYXRlLCBjb29yZGluYXRlKSkge1xyXG4gICAgICAgICAgY29vcmRpbmF0ZXNPdmVybGFwID0gdHJ1ZVxyXG4gICAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzT3ZlcmxhcFxyXG4gICAgICAgIH1cclxuICAgICAgICBwcmV2Q29vcmRpbmF0ZSA9IGNvb3JkaW5hdGVcclxuICAgICAgfVxyXG4gICAgICBwcmV2Q29vcmRpbmF0ZSA9IGNvb3JkaW5hdGVcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzT3ZlcmxhcFxyXG4gIH1cclxuXHJcbiAgLy8gU2hvdWxkIHByZXZlbnQgYSBzaGlwIGZyb20gYmVpbmdcclxuICAvLyBwbGFjZWQgb24gdG9wIG9mIGFub3RoZXIgc2hpcFxyXG4gIGNvbnN0IGNoZWNrT3ZlcmxhcFdpdGhPdGhlclNoaXBzID0gKGNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICBsZXQgc2hpcHNPdmVybGFwID0gZmFsc2VcclxuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcclxuICAgICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZVswXVxyXG4gICAgICBjb25zdCBjb2x1bW4gPSBjb29yZGluYXRlWzFdXHJcbiAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGJvYXJkW3Jvd11bY29sdW1uXVxyXG4gICAgICBpZiAodHlwZW9mIGJvYXJkQ2VsbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBzaGlwc092ZXJsYXAgPSB0cnVlXHJcbiAgICAgICAgcmV0dXJuIHNoaXBzT3ZlcmxhcFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBzaGlwc092ZXJsYXBcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChjb29yZGluYXRlcykgPT4ge1xyXG4gICAgbGV0IHNoaXBQbGFjZWQgPSB0cnVlXHJcblxyXG4gICAgY29uc3QgbGVnYWxDb29yZGluYXRlcyA9IHZhbGlkYXRlQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpXHJcbiAgICBpZiAoIWxlZ2FsQ29vcmRpbmF0ZXMpIHtcclxuICAgICAgc2hpcFBsYWNlZCA9IGZhbHNlXHJcbiAgICAgIHJldHVybiBzaGlwUGxhY2VkXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3ZlcmxhcHBpbmdDb29yZGluYXRlcyA9IGNoZWNrU2VsZk92ZXJsYXAoY29vcmRpbmF0ZXMpXHJcbiAgICBpZiAob3ZlcmxhcHBpbmdDb29yZGluYXRlcykge1xyXG4gICAgICBzaGlwUGxhY2VkID0gZmFsc2VcclxuICAgICAgcmV0dXJuIHNoaXBQbGFjZWRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaGlwT3ZlcmxhcHBpbmcgPSBjaGVja092ZXJsYXBXaXRoT3RoZXJTaGlwcyhjb29yZGluYXRlcylcclxuICAgIGlmIChzaGlwT3ZlcmxhcHBpbmcpIHtcclxuICAgICAgc2hpcFBsYWNlZCA9IGZhbHNlXHJcbiAgICAgIHJldHVybiBzaGlwUGxhY2VkXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IGNvb3JkaW5hdGVzLmxlbmd0aFxyXG4gICAgY29uc3Qgc2hpcE9iamVjdCA9IFNoaXAoc2hpcExlbmd0aCwgMCwgZmFsc2UpXHJcbiAgICBzaGlwT2JqZWN0cy5wdXNoKHNoaXBPYmplY3QpXHJcblxyXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgICBjb25zdCByb3cgPSBjb29yZGluYXRlWzBdXHJcbiAgICAgIGNvbnN0IGNvbHVtbiA9IGNvb3JkaW5hdGVbMV1cclxuICAgICAgYm9hcmRbcm93XVtjb2x1bW5dID0gc2hpcE9iamVjdFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gc2hpcFBsYWNlZFxyXG4gIH1cclxuXHJcbiAgLy8gcHJldmVudHMgaHVtYW4gcGxheWVyIGZyb20gYXR0YWNraW5nIHByZXZpb3VzbHlcclxuICAvLyBhdHRhY2tlZCBjb29yZGluYXRlXHJcbiAgY29uc3QgcHJldmVudFNhbWVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgbGV0IGFscmVhZHlBdHRhY2tlZCA9IGZhbHNlXHJcbiAgICBzdWNjZXNzZnVsU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xyXG4gICAgICBpZiAoYXJyYXlzQXJlRXF1YWwoY29vcmRpbmF0ZSwgc2hvdCkpIHtcclxuICAgICAgICBhbHJlYWR5QXR0YWNrZWQgPSB0cnVlXHJcbiAgICAgICAgcmV0dXJuIHByZXZlbnRTYW1lQXR0YWNrXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgbWlzc2VkU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xyXG4gICAgICBpZiAoYXJyYXlzQXJlRXF1YWwoY29vcmRpbmF0ZSwgc2hvdCkpIHtcclxuICAgICAgICBhbHJlYWR5QXR0YWNrZWQgPSB0cnVlXHJcbiAgICAgICAgcmV0dXJuIHByZXZlbnRTYW1lQXR0YWNrXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gYWxyZWFkeUF0dGFja2VkXHJcbiAgfVxyXG5cclxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGVzLCBjdXJyZW50UGxheWVyKSA9PiB7XHJcbiAgICBjb25zdCByb3cgPSArY29vcmRpbmF0ZXNbMF1cclxuICAgIGNvbnN0IGNvbHVtbiA9ICtjb29yZGluYXRlc1sxXVxyXG4gICAgLy8gY29vcmRpbmF0ZXMgPSBbcm93LCBjb2x1bW5dXHJcbiAgICBjb25zdCBib2FyZENlbGwgPSBib2FyZFtyb3ddW2NvbHVtbl1cclxuICAgIGNvbnN0IHNoaXBPYmogPSBib2FyZENlbGxcclxuXHJcbiAgICAvLyBOZWVkIHRvIGNoZWNrIGlmIG5ldyBjb29yZGluYXRlIGlzIGFscmVhZHlcclxuICAgIC8vIGluc2lkZSBzdWNjZXNzZnVsU2hvdHMgb3IgbWlzc2VkU2hvdHNcclxuICAgIGNvbnN0IGFscmVhZHlBdHRhY2tlZCA9IHByZXZlbnRTYW1lQXR0YWNrKGNvb3JkaW5hdGVzKVxyXG4gICAgaWYgKGFscmVhZHlBdHRhY2tlZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGJvYXJkQ2VsbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgc2hpcE9iai5oaXQoKVxyXG4gICAgICBjdXJyZW50UGxheWVyID09PSAnSHVtYW4nXHJcbiAgICAgICAgPyAobGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwgPSB0cnVlKVxyXG4gICAgICAgIDogKGxhc3RBSU1vdmVTdWNjZXNzZnVsID0gdHJ1ZSlcclxuICAgICAgc3VjY2Vzc2Z1bFNob3RzLnB1c2goY29vcmRpbmF0ZXMpXHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2FyZENlbGwgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgIGxhc3RBSU1vdmVTdWNjZXNzZnVsID0gZmFsc2VcclxuICAgICAgbGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwgPSBmYWxzZVxyXG4gICAgICBtaXNzZWRTaG90cy5wdXNoKGNvb3JkaW5hdGVzKVxyXG4gICAgICByZW1vdmVBZGphY2VudFNsb3QoY29vcmRpbmF0ZXMpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBJZiB0aGUgY29tcHV0ZXIgcmFuZG9tbHkgZ3Vlc3NlcyBhIHNwb3QgdGhhdCBpcyBhbHJlYWR5IGluIHRoZSBhZGphY2VuY3lcclxuICAvLyBzbG90IHF1ZXVlLCB3ZSBuZWVkIHRvIHJlbW92ZSBpdCAoZnJvbSB0aGUgYWRqYWNlbmN5IHF1ZXVlKSBzb1xyXG4gIC8vIHRoZSBjb21wdXRlciBkb2VzIG5vdCBhdHRlbXB0IHRvXHJcbiAgLy8gdXNlIHRoZSBhbHJlYWR5IGd1ZXNzZWQgc3BvdCB3aGVuIHB1bGxpbmcgZnJvbSB0aGUgYWRqYWNlbmN5XHJcbiAgLy8gcXVldWUgZm9yIGl0J3MgbmV4dCBtb3ZlXHJcbiAgY29uc3QgcmVtb3ZlQWRqYWNlbnRTbG90ID0gKGNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXRDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzXHJcbiAgICBjb25zdCBhZGphY2VudFF1ZXVlID0gbmV3IFNldCgpXHJcbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2YgYWRqYWNlbnRTbG90c1F1ZXVlKSB7XHJcbiAgICAgIGFkamFjZW50UXVldWUuYWRkKHNsb3QudG9TdHJpbmcoKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBmaWx0ZXIgdGhlIGFkamFjZW5jeSBzbG90IHF1ZXVlIGRvd24gdG8gc2xvdHMgdGhhdCBoYXZlIE5PVFxyXG4gICAgLy8gYWxyZWFkeSBiZWVuIGd1ZXNlZC5cclxuICAgIGFkamFjZW50U2xvdHNRdWV1ZSA9IGFkamFjZW50U2xvdHNRdWV1ZS5maWx0ZXIoXHJcbiAgICAgIChzbG90KSA9PiAhYXJyYXlzQXJlRXF1YWwoc2xvdCwgdGFyZ2V0Q29vcmRpbmF0ZXMpXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XHJcbiAgICBsZXQgZXZlcnlTaGlwU2FuayA9IHRydWVcclxuICAgIHNoaXBPYmplY3RzLmZvckVhY2goKHNoaXBPYmopID0+IHtcclxuICAgICAgaWYgKCFzaGlwT2JqLmhhc0JlZW5TdW5rKCkpIHtcclxuICAgICAgICBldmVyeVNoaXBTYW5rID0gZmFsc2VcclxuICAgICAgICByZXR1cm4gZXZlcnlTaGlwU2Fua1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGV2ZXJ5U2hpcFNhbmtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZUxhc3RBSU1vdmUgPSAocmFuZG9tTW92ZSkgPT4ge1xyXG4gICAgYWlBdmFpbGFibGVNb3Zlcy5mb3JFYWNoKChtb3ZlLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoYXJyYXlzQXJlRXF1YWwobW92ZSwgcmFuZG9tTW92ZSkpIHtcclxuICAgICAgICBhaUF2YWlsYWJsZU1vdmVzLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZEFkamFjZW50U2xvdHNUb1F1ZXVlID0gKGFkamFjZW50U2xvdHMpID0+IHtcclxuICAgIGFkamFjZW50U2xvdHMuZm9yRWFjaCgoc2xvdCkgPT4ge1xyXG4gICAgICBhZGphY2VudFNsb3RzUXVldWUucHVzaChzbG90KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsZWFyR2FtZUJvYXJkID0gKCkgPT4ge1xyXG4gICAgc2hpcE9iamVjdHMubGVuZ3RoID0gMFxyXG4gICAgbWlzc2VkU2hvdHMubGVuZ3RoID0gMFxyXG4gICAgYWlBdmFpbGFibGVNb3Zlcy5sZW5ndGggPSAwXHJcbiAgICBzdWNjZXNzZnVsU2hvdHMubGVuZ3RoID0gMFxyXG4gICAgYWRqYWNlbnRTbG90c1F1ZXVlLmxlbmd0aCA9IDBcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGJvYXJkXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRNaXNzZWRTaG90cyA9ICgpID0+IHtcclxuICAgIHJldHVybiBtaXNzZWRTaG90c1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0U3VjY2Vzc2Z1bFNob3RzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHN1Y2Nlc3NmdWxTaG90c1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0U2hpcE9iamVjdHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc2hpcE9iamVjdHNcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEFJQXZhaWxhYmxlTW92ZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYWlBdmFpbGFibGVNb3Zlc1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0TGFzdEFJTW92ZVN1Y2Nlc3NmdWwgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbGFzdEFJTW92ZVN1Y2Nlc3NmdWxcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldExhc3RIdW1hbk1vdmVTdWNjZXNzZnVsID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGxhc3RIdW1hbk1vdmVTdWNjZXNzZnVsXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRBZGphY2VudFNsb3RzUXVldWUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYWRqYWNlbnRTbG90c1F1ZXVlXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRBZGphY2VudFF1ZXVlU2xvdCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhZGphY2VudFNsb3RzUXVldWUucG9wKClcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldExhc3RTdWNjZXNzZnVsTW92ZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBzdWNjZXNzZnVsU2hvdHMuYXQoLTEpXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY3JlYXRlR2FtZUJvYXJkLFxyXG4gICAgZ2V0Qm9hcmQsXHJcbiAgICBwbGFjZVNoaXAsXHJcbiAgICByZWNlaXZlQXR0YWNrLFxyXG4gICAgY2xlYXJHYW1lQm9hcmQsXHJcbiAgICBnZXRNaXNzZWRTaG90cyxcclxuICAgIGdldFN1Y2Nlc3NmdWxTaG90cyxcclxuICAgIGFsbFNoaXBzU3VuayxcclxuICAgIGdldEFJQXZhaWxhYmxlTW92ZXMsXHJcbiAgICB2YWxpZGF0ZUNvb3JkaW5hdGVzLFxyXG4gICAgcHJldmVudFNhbWVBdHRhY2ssXHJcbiAgICBjaGVja1NlbGZPdmVybGFwLFxyXG4gICAgZ2V0U2hpcE9iamVjdHMsXHJcbiAgICByZW1vdmVMYXN0QUlNb3ZlLFxyXG4gICAgY2hlY2tPdmVybGFwV2l0aE90aGVyU2hpcHMsXHJcbiAgICBnZXRMYXN0QUlNb3ZlU3VjY2Vzc2Z1bCxcclxuICAgIGdldExhc3RIdW1hbk1vdmVTdWNjZXNzZnVsLFxyXG4gICAgZ2V0QWRqYWNlbnRTbG90c1F1ZXVlLFxyXG4gICAgYWRkQWRqYWNlbnRTbG90c1RvUXVldWUsXHJcbiAgICBnZXRBZGphY2VudFF1ZXVlU2xvdCxcclxuICAgIHJlbW92ZUFkamFjZW50U2xvdCxcclxuICAgIGdldExhc3RTdWNjZXNzZnVsTW92ZVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBhcnJheXNBcmVFcXVhbCB9IGZyb20gJy4uL2hlbHBlcnMvYXJyYXlzQXJlRXF1YWwnXHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVyID0gKG5hbWUsIGlzQUkpID0+IHtcclxuICAvLyBVc2VkIHRvIG1ha2UgQUkgc2VsZWN0IHJhbmRvbSwgbGVnYWwgY29vcmRpbmF0ZVxyXG4gIC8vIG9uIHBsYXllcnMgZ2FtZSBib2FyZFxyXG4gIGNvbnN0IG1ha2VSYW5kb21Nb3ZlID0gKGlzQUksIGF2YWlsYWJsZU1vdmVzKSA9PiB7XHJcbiAgICBpZiAoIWlzQUkgfHwgYXZhaWxhYmxlTW92ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhdmFpbGFibGVNb3Zlc0xlbmd0aCA9IGF2YWlsYWJsZU1vdmVzLmxlbmd0aFxyXG4gICAgY29uc3QgcmFuZG9tQXJySW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVNb3Zlc0xlbmd0aClcclxuICAgIGNvbnN0IHJhbmRvbUNvb3JkaW5hdGUgPSBhdmFpbGFibGVNb3Zlc1tyYW5kb21BcnJJbmRleF1cclxuXHJcbiAgICByZXR1cm4gcmFuZG9tQ29vcmRpbmF0ZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0QWRqYWNlbnRTbG90cyA9IChcclxuICAgIGlzQUksXHJcbiAgICBhdmFpbGFibGVNb3ZlcyxcclxuICAgIHN1Y2Nlc3NmdWxTaG90cyxcclxuICAgIG1pc3NlZFNob3RzXHJcbiAgKSA9PiB7XHJcbiAgICBpZiAoIWlzQUkgfHwgYXZhaWxhYmxlTW92ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsYXN0U3VjY2Vzc2Z1bE1vdmUgPSBzdWNjZXNzZnVsU2hvdHMuYXQoLTEpXHJcbiAgICBjb25zdCBhZGphY2VudFNsb3RzID0gcmV0cmlldmVBZGphY2VudFNsb3RzKGxhc3RTdWNjZXNzZnVsTW92ZSlcclxuICAgIGNvbnN0IGxlZ2FsQWRqYWNlbnRTbG90cyA9IHJlbW92ZUlsbGVnYWxBZGphY2VudFNsb3RzKGFkamFjZW50U2xvdHMpXHJcbiAgICBjb25zdCBhdmFpbGFibGVBZGphY2VudFNsb3RzID0gcHJldmVudFByZXZpb3VzU2hvdFRvUXVldWUoXHJcbiAgICAgIGF2YWlsYWJsZU1vdmVzLFxyXG4gICAgICBsZWdhbEFkamFjZW50U2xvdHMsXHJcbiAgICAgIHN1Y2Nlc3NmdWxTaG90cyxcclxuICAgICAgbWlzc2VkU2hvdHNcclxuICAgIClcclxuICAgIHJldHVybiBhdmFpbGFibGVBZGphY2VudFNsb3RzXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRDZWxsQWJvdmUgPSAobGFzdFN1Y2Nlc3NmdWxNb3ZlKSA9PiB7XHJcbiAgICAvLyB0aGUgcm93IG5lZWRzIHRvIGNoYW5nZSBieSBvbmVcclxuICAgIGNvbnN0IG5ld0FyciA9IFtdXHJcbiAgICBjb25zdCBuZXdSb3cgPSArbGFzdFN1Y2Nlc3NmdWxNb3ZlWzBdIC0gMVxyXG4gICAgaWYgKG5ld1JvdyA+IDkgfHwgbmV3Um93IDwgMCkge1xyXG4gICAgICByZXR1cm4gJ2lsbGVnYWwnXHJcbiAgICB9XHJcbiAgICBuZXdBcnJbMF0gPSBuZXdSb3dcclxuICAgIG5ld0FyclsxXSA9ICtsYXN0U3VjY2Vzc2Z1bE1vdmVbMV1cclxuICAgIHJldHVybiBuZXdBcnJcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENlbGxCZWxvdyA9IChsYXN0U3VjY2Vzc2Z1bE1vdmUpID0+IHtcclxuICAgIC8vIHRoZSByb3cgbmVlZHMgdG8gY2hhbmdlIGJ5IG9uZVxyXG4gICAgY29uc3QgbmV3QXJyID0gW11cclxuICAgIGNvbnN0IG5ld1JvdyA9ICtsYXN0U3VjY2Vzc2Z1bE1vdmVbMF0gKyAxXHJcbiAgICBpZiAobmV3Um93ID4gOSB8fCBuZXdSb3cgPCAwKSB7XHJcbiAgICAgIHJldHVybiAnaWxsZWdhbCdcclxuICAgIH1cclxuICAgIG5ld0FyclswXSA9IG5ld1Jvd1xyXG4gICAgbmV3QXJyWzFdID0gK2xhc3RTdWNjZXNzZnVsTW92ZVsxXVxyXG4gICAgcmV0dXJuIG5ld0FyclxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Q2VsbFRvUmlnaHQgPSAobGFzdFN1Y2Nlc3NmdWxNb3ZlKSA9PiB7XHJcbiAgICAvLyB0aGUgcm93IG5lZWRzIHRvIGNoYW5nZSBieSBvbmVcclxuICAgIGNvbnN0IG5ld0FyciA9IFtdXHJcbiAgICBjb25zdCBuZXdDb2x1bW4gPSArbGFzdFN1Y2Nlc3NmdWxNb3ZlWzFdICsgMVxyXG4gICAgaWYgKG5ld0NvbHVtbiA+IDkgfHwgbmV3Q29sdW1uIDwgMCkge1xyXG4gICAgICByZXR1cm4gJ2lsbGVnYWwnXHJcbiAgICB9XHJcbiAgICBuZXdBcnJbMF0gPSArbGFzdFN1Y2Nlc3NmdWxNb3ZlWzBdXHJcbiAgICBuZXdBcnJbMV0gPSBuZXdDb2x1bW5cclxuICAgIHJldHVybiBuZXdBcnJcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENlbGxUb0xlZnQgPSAobGFzdFN1Y2Nlc3NmdWxNb3ZlKSA9PiB7XHJcbiAgICAvLyB0aGUgcm93IG5lZWRzIHRvIGNoYW5nZSBieSBvbmVcclxuICAgIGNvbnN0IG5ld0FyciA9IFtdXHJcbiAgICBjb25zdCBuZXdDb2x1bW4gPSArbGFzdFN1Y2Nlc3NmdWxNb3ZlWzFdIC0gMVxyXG4gICAgaWYgKG5ld0NvbHVtbiA+IDkgfHwgbmV3Q29sdW1uIDwgMCkge1xyXG4gICAgICByZXR1cm4gJ2lsbGVnYWwnXHJcbiAgICB9XHJcbiAgICBuZXdBcnJbMF0gPSArbGFzdFN1Y2Nlc3NmdWxNb3ZlWzBdXHJcbiAgICBuZXdBcnJbMV0gPSBuZXdDb2x1bW5cclxuICAgIHJldHVybiBuZXdBcnJcclxuICB9XHJcblxyXG4gXHJcblxyXG4gIGNvbnN0IHJldHJpZXZlQWRqYWNlbnRTbG90cyA9IChsYXN0U3VjY2Vzc2Z1bE1vdmUpID0+IHtcclxuICAgIGNvbnN0IGxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlID0gbGFzdFN1Y2Nlc3NmdWxNb3ZlXHJcbiAgICBjb25zdCBhZGphY2VudFNsb3RzID0gW11cclxuICAgIGFkamFjZW50U2xvdHMucHVzaChnZXRDZWxsQWJvdmUobGFzdFN1Y2Nlc3NmdWxNb3ZlVmFsdWUpKVxyXG4gICAgYWRqYWNlbnRTbG90cy5wdXNoKGdldENlbGxCZWxvdyhsYXN0U3VjY2Vzc2Z1bE1vdmVWYWx1ZSkpXHJcbiAgICBhZGphY2VudFNsb3RzLnB1c2goZ2V0Q2VsbFRvUmlnaHQobGFzdFN1Y2Nlc3NmdWxNb3ZlVmFsdWUpKVxyXG4gICAgYWRqYWNlbnRTbG90cy5wdXNoKGdldENlbGxUb0xlZnQobGFzdFN1Y2Nlc3NmdWxNb3ZlVmFsdWUpKVxyXG4gICAgcmV0dXJuIGFkamFjZW50U2xvdHNcclxuICB9XHJcblxyXG4gIC8vIHByZXZlbnRzIGFkZGluZyBhZGphY2VudCBzbG90cyB0aGF0IGFyZSBub3Qgb24gdGhlIGJvYXJkXHJcbiAgY29uc3QgcmVtb3ZlSWxsZWdhbEFkamFjZW50U2xvdHMgPSAoYWRqYWNlbnRTbG90cykgPT4ge1xyXG4gICAgY29uc3QgYWRqYWNlbnRTbG90c0FyciA9IGFkamFjZW50U2xvdHNcclxuICAgIGFkamFjZW50U2xvdHNBcnIuZm9yRWFjaCgoc2xvdCwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKHNsb3QgPT09ICdpbGxlZ2FsJykge1xyXG4gICAgICAgIGFkamFjZW50U2xvdHNBcnIuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGFkamFjZW50U2xvdHNBcnJcclxuICB9XHJcblxyXG4gIC8vIGlmIHRoZSBjb21wdXRlciBoYXMgYWxyZWFkeSAocmFuZG9tbHkpIGd1ZXNzZWQgYSBzcG90IG9uIHRoZSBib2FyZCwgcHJldmVudFxyXG4gIC8vIGFkZGluZyB0aGUgc3BvdCB0byB0aGUgYWRqYWNlbmN5IGxpc3RcclxuICBjb25zdCBwcmV2ZW50UHJldmlvdXNTaG90VG9RdWV1ZSA9IChcclxuICAgIGF2YWlsYWJsZU1vdmVzLFxyXG4gICAgYWRqYWNlbnRTbG90cyxcclxuICAgIHN1Y2Nlc3NmdWxTaG90cyxcclxuICAgIG1pc3NlZFNob3RzXHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCBzbG90cyA9IGFkamFjZW50U2xvdHNcclxuICAgIGNvbnN0IGFsbFByZXZpb3VzQXR0YWNrcyA9IHN1Y2Nlc3NmdWxTaG90cy5jb25jYXQobWlzc2VkU2hvdHMpXHJcblxyXG4gICAgY29uc3QgcHJldmlvdXNBdHRhY2tzID0gbmV3IFNldCgpXHJcblxyXG4gICAgZm9yIChjb25zdCBzaG90IG9mIGFsbFByZXZpb3VzQXR0YWNrcykge1xyXG4gICAgICBwcmV2aW91c0F0dGFja3MuYWRkKHNob3QudG9TdHJpbmcoKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBHbyB0aHJvdWdoIGVhY2ggYWRqYWNlbmN5IHNsb3QsIGFuZCBkZXRlcm1pbmUgaWYgdGhlIHNsb3QgaXMgaW4gdGhlXHJcbiAgICAvLyBwcmV2aW91c0F0dGFja3MgbWV0aG9kLiBXZSBhcmUgZmlsdGVyaW5nIG91dCB0aGUgc2xvdHMgdGhhdCBhcmUgaW5cclxuICAgIC8vIHRoZSBwcmV2aW91cyBhdHRhY2sgc2V0LCBhcyB3ZSBkbyBub3Qgd2FudCB0byBoYXZlIHRoZSBjb21wdXRlclxyXG4gICAgLy8gdG8gdXNlIHRob3NlIHNsb3RzIGFnYWluIGluIGZ1dHVyZSB0dXJuc1xyXG4gICAgY29uc3QgZmlsdGVyZWRTbG90cyA9IHNsb3RzLmZpbHRlcihcclxuICAgICAgKHNsb3QpID0+ICFwcmV2aW91c0F0dGFja3MuaGFzKHNsb3QudG9TdHJpbmcoKSlcclxuICAgIClcclxuXHJcbiAgICByZXR1cm4gZmlsdGVyZWRTbG90c1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBuYW1lXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbWFrZVJhbmRvbU1vdmUsXHJcbiAgICBnZXROYW1lLFxyXG4gICAgZ2V0QWRqYWNlbnRTbG90cyxcclxuICAgIHByZXZlbnRQcmV2aW91c1Nob3RUb1F1ZXVlXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBTaGlwID0gKGxlbmd0aCwgbnVtT2ZIaXRzLCBpc1N1bmspID0+IHtcclxuICAvLyBJbmNyZWFzZSBudW1iZXIgb2YgaGl0cyBpbiBzaGlwIGJ5IDFcclxuICBjb25zdCBoaXQgPSAoKSA9PiB7XHJcbiAgICBpZiAobnVtT2ZIaXRzID09PSBsZW5ndGgpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgbnVtT2ZIaXRzKytcclxuICAgIHJldHVybiBudW1PZkhpdHNcclxuICB9XHJcblxyXG4gIC8vIERldGVybWluZSBpZiB0aGUgc2hpcCBvYmplY3QgaGFzIGJlZW4gc3Vua1xyXG4gIGNvbnN0IGhhc0JlZW5TdW5rID0gKCkgPT4ge1xyXG4gICAgaWYgKGxlbmd0aCA9PT0gbnVtT2ZIaXRzKSB7XHJcbiAgICAgIGlzU3VuayA9IHRydWVcclxuICAgICAgcmV0dXJuIGlzU3Vua1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpc1N1bmtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldE51bU9mSGl0cyA9ICgpID0+IHtcclxuICAgIHJldHVybiBudW1PZkhpdHNcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHtcclxuICAgIHJldHVybiBsZW5ndGhcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGhpdCwgaGFzQmVlblN1bmssIGdldE51bU9mSGl0cywgZ2V0TGVuZ3RoIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgYXJyYXlzQXJlRXF1YWwgPSAoYXJyMSwgYXJyMikgPT4ge1xyXG4gIGlmIChhcnIxID09PSBudWxsIHx8IGFycjIgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICBpZiAoYXJyMS5sZW5ndGggIT09IGFycjIubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoYXJyMVtpXSAhPT0gYXJyMltpXSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG4iLCIvLyBkZWxheXMgZXhlY3V0aW9uIG9mIGEgZnVuY3Rpb24gZm9yIGEgc2V0IGFtb3VudCBvZiB0aW1lXHJcbmV4cG9ydCBjb25zdCBkZWxheSA9IChtcykgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHJldHVyblJhbmRvbUFJQm9hcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWlCb2FyZHMgPSBbYWlTaGlwQ29vcmRzT25lLCBhaVNoaXBDb29yZHNUd28sIGFpU2hpcENvb3Jkc1RocmVlXVxyXG4gIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMylcclxuICBjb25zdCBjaG9zZW5BSUJvYXJkID0gT2JqZWN0LnZhbHVlcyhhaUJvYXJkc1tyYW5kb21JbmRleF0pXHJcbiAgcmV0dXJuIGNob3NlbkFJQm9hcmRcclxufVxyXG5cclxuY29uc3QgYWlTaGlwQ29vcmRzT25lID0ge1xyXG4gIGNhcnJpZXI6IFtcclxuICAgIFs5LCAwXSxcclxuICAgIFs5LCAxXSxcclxuICAgIFs5LCAyXSxcclxuICAgIFs5LCAzXSxcclxuICAgIFs5LCA0XVxyXG4gIF0sXHJcbiAgYmF0dGxlc2hpcDogW1xyXG4gICAgWzUsIDVdLFxyXG4gICAgWzYsIDVdLFxyXG4gICAgWzcsIDVdLFxyXG4gICAgWzgsIDVdXHJcbiAgXSxcclxuICBjcnVpc2VyOiBbXHJcbiAgICBbMCwgNl0sXHJcbiAgICBbMSwgNl0sXHJcbiAgICBbMiwgNl1cclxuICBdLFxyXG4gIHN1Ym1hcmluZTogW1xyXG4gICAgWzMsIDhdLFxyXG4gICAgWzQsIDhdLFxyXG4gICAgWzUsIDhdXHJcbiAgXSxcclxuICBkZXN0cm95ZXI6IFtcclxuICAgIFswLCA5XSxcclxuICAgIFsxLCA5XVxyXG4gIF1cclxufVxyXG5cclxuY29uc3QgYWlTaGlwQ29vcmRzVHdvID0ge1xyXG4gIGNhcnJpZXI6IFtcclxuICAgIFswLCAwXSxcclxuICAgIFswLCAxXSxcclxuICAgIFswLCAyXSxcclxuICAgIFswLCAzXSxcclxuICAgIFswLCA0XVxyXG4gIF0sXHJcbiAgYmF0dGxlc2hpcDogW1xyXG4gICAgWzksIDVdLFxyXG4gICAgWzksIDZdLFxyXG4gICAgWzksIDddLFxyXG4gICAgWzksIDhdXHJcbiAgXSxcclxuICBjcnVpc2VyOiBbXHJcbiAgICBbMiwgMl0sXHJcbiAgICBbMywgMl0sXHJcbiAgICBbNCwgMl1cclxuICBdLFxyXG4gIHN1Ym1hcmluZTogW1xyXG4gICAgWzYsIDZdLFxyXG4gICAgWzYsIDddLFxyXG4gICAgWzYsIDhdXHJcbiAgXSxcclxuICBkZXN0cm95ZXI6IFtcclxuICAgIFs4LCAwXSxcclxuICAgIFs4LCAxXVxyXG4gIF1cclxufVxyXG5cclxuY29uc3QgYWlTaGlwQ29vcmRzVGhyZWUgPSB7XHJcbiAgY2FycmllcjogW1xyXG4gICAgWzUsIDBdLFxyXG4gICAgWzUsIDFdLFxyXG4gICAgWzUsIDJdLFxyXG4gICAgWzUsIDNdLFxyXG4gICAgWzUsIDRdXHJcbiAgXSxcclxuICBiYXR0bGVzaGlwOiBbXHJcbiAgICBbMCwgOV0sXHJcbiAgICBbMSwgOV0sXHJcbiAgICBbMiwgOV0sXHJcbiAgICBbMywgOV1cclxuICBdLFxyXG4gIGNydWlzZXI6IFtcclxuICAgIFs3LCA3XSxcclxuICAgIFs4LCA3XSxcclxuICAgIFs5LCA3XVxyXG4gIF0sXHJcbiAgc3VibWFyaW5lOiBbXHJcbiAgICBbMSwgMV0sXHJcbiAgICBbMiwgMV0sXHJcbiAgICBbMywgMV1cclxuICBdLFxyXG4gIGRlc3Ryb3llcjogW1xyXG4gICAgWzQsIDRdLFxyXG4gICAgWzQsIDVdXHJcbiAgXVxyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcclxcblxcclxcbi8qIERvY3VtZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxyXFxuICovXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBcHBseSBib3JkZXIgYm94IHRvIGVudGlyZSBkb2N1bWVudCAqL1xcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTZWN0aW9uc1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcclxcbiAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxyXFxufVxcclxcblxcclxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcclxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5wcmUge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXHJcXG4gICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5hYmJyW3RpdGxlXSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmIsXFxyXFxuc3Ryb25nIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuY29kZSxcXHJcXG5rYmQsXFxyXFxuc2FtcCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuc21hbGwge1xcclxcbiAgICBmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXHJcXG4gICAqIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnN1YixcXHJcXG5zdXAge1xcclxcbiAgICBmb250LXNpemU6IDc1JTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5zdWIge1xcclxcbiAgICBib3R0b206IC0wLjI1ZW07XFxyXFxufVxcclxcblxcclxcbnN1cCB7XFxyXFxuICAgIHRvcDogLTAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbWJlZGRlZCBjb250ZW50XFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcbmltZyB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9ybXNcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmlucHV0IHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxub3B0Z3JvdXAsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgLyogMiAqL1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHaXZlIGlucHV0IGFuZCB0ZXh0IGFyZWEgY29uc2lzdGVudCBsb29rICovXFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAtMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBmb250OiBib2xkIDAuNmVtIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIsXFxyXFxuYnV0dG9uOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgLyogYmFja2dyb3VuZDogIzAwMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7ICovXFxyXFxufVxcclxcblxcclxcbi8qIEdldHMgcmlkIG9mIGRlZmF1bHQgc2VhcmNoIHRvIHJlbW92ZSByZXN0cmljdGlvbnMgKi9cXHJcXG5pbnB1dFt0eXBlPSdzZWFyY2gnXSB7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEZpeCBmb3IgaW5jb25zaXN0ZW50IGRpc3BsYXkgb2YgY2xlYXIgXFxcInhcXFwiIGljb24gaW4gc2VhcmNoIGlucHV0cyBhY3Jvc3MgZGlmZmVyZW50IGJyb3dzZXJzLiBcXHJcXG4gICwgdGhpcyBjb2RlIHJlbW92ZXMgdGhlIGljb24gaW4gRWRnZSBhbmQgQ2hyb21lIHdoZW4gdGhlIGlucHV0IGxvc2VzIGZvY3VzLCB3aGlsZSBrZWVwaW5nIGl0IHZpc2libGUgaW4gU2FmYXJpLiAqL1xcclxcbmlucHV0W3R5cGU9J3NlYXJjaCddOm5vdCg6Zm9jdXMsIDphY3RpdmUpOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXHJcXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQge1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcclxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbnNlbGVjdCB7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bdHlwZT0nYnV0dG9uJ10sXFxyXFxuW3R5cGU9J3Jlc2V0J10sXFxyXFxuW3R5cGU9J3N1Ym1pdCddIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbjo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT0nYnV0dG9uJ106Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9J3Jlc2V0J106Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9J3N1Ym1pdCddOjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT0nYnV0dG9uJ106LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9J3Jlc2V0J106LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9J3N1Ym1pdCddOi1tb3otZm9jdXNyaW5nIHtcXHJcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxyXFxuICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxyXFxuICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG4gICAgZGlzcGxheTogdGFibGU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIC8qIDMgKi9cXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXHJcXG4gICAgLyogMSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5wcm9ncmVzcyB7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXHJcXG4gICAqL1xcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxyXFxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT0nY2hlY2tib3gnXSxcXHJcXG5bdHlwZT0ncmFkaW8nXSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcclxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9J3NlYXJjaCddIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250OiBpbmhlcml0O1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIEludGVyYWN0aXZlXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuXFxyXFxuZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuc3VtbWFyeSB7XFxyXFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWlzY1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXHJcXG4gICAqL1xcclxcblxcclxcbnRlbXBsYXRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcbltoaWRkZW5dIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLDhCQUE4QjtJQUM5QixNQUFNO0FBQ1Y7O0FBRUEsd0NBQXdDO0FBQ3hDO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOzs7SUFHSTs7QUFFSjtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7O0lBR0k7O0FBRUo7SUFDSSx1QkFBdUI7SUFDdkIsTUFBTTtJQUNOLFNBQVM7SUFDVCxNQUFNO0lBQ04saUJBQWlCO0lBQ2pCLE1BQU07QUFDVjs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSxpQ0FBaUM7SUFDakMsTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0FBQ1Y7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSxtQkFBbUI7SUFDbkIsTUFBTTtJQUNOLDBCQUEwQjtJQUMxQixNQUFNO0lBQ04saUNBQWlDO0lBQ2pDLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7OztJQUdJOztBQUVKOzs7SUFHSSxpQ0FBaUM7SUFDakMsTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0FBQ1Y7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOzs7SUFHSTs7QUFFSjs7SUFFSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7O0lBR0k7O0FBRUo7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7Ozs7O0lBS0ksb0JBQW9CO0lBQ3BCLE1BQU07SUFDTixlQUFlO0lBQ2YsTUFBTTtJQUNOLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sU0FBUztJQUNULE1BQU07SUFDTixVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBLDZDQUE2QztBQUM3Qzs7SUFFSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBOztJQUVJLGFBQWE7SUFDYjtrQkFDYztBQUNsQjs7QUFFQSxzREFBc0Q7QUFDdEQ7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7bUhBQ21IO0FBQ25IO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7O0lBR0k7O0FBRUo7O0lBRUksTUFBTTtJQUNOLGlCQUFpQjtBQUNyQjs7QUFFQTs7O0lBR0k7O0FBRUo7O0lBRUksTUFBTTtJQUNOLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSTs7QUFFSjs7OztJQUlJLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSTs7QUFFSjs7OztJQUlJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUk7O0FBRUo7Ozs7SUFJSSw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7Ozs7O0lBS0k7O0FBRUo7SUFDSSxzQkFBc0I7SUFDdEIsTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0lBQ04sY0FBYztJQUNkLE1BQU07SUFDTixlQUFlO0lBQ2YsTUFBTTtJQUNOLFVBQVU7SUFDVixNQUFNO0lBQ04sbUJBQW1CO0lBQ25CLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7OztJQUdJOztBQUVKOztJQUVJLHNCQUFzQjtJQUN0QixNQUFNO0lBQ04sWUFBWTtJQUNaLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSTs7QUFFSjtJQUNJLDZCQUE2QjtJQUM3QixNQUFNO0lBQ04sb0JBQW9CO0lBQ3BCLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSwwQkFBMEI7SUFDMUIsTUFBTTtJQUNOLGFBQWE7SUFDYixNQUFNO0FBQ1Y7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXHJcXG5cXHJcXG4vKiBEb2N1bWVudFxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcclxcbiAqL1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogQXBwbHkgYm9yZGVyIGJveCB0byBlbnRpcmUgZG9jdW1lbnQgKi9cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2VjdGlvbnNcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcclxcbiAgICovXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXHJcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHcm91cGluZyBjb250ZW50XFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXHJcXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcclxcbiAgICovXFxyXFxuXFxyXFxuaHIge1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxucHJlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxyXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYWJiclt0aXRsZV0ge1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICAvKiAyICovXFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5iLFxcclxcbnN0cm9uZyB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbmNvZGUsXFxyXFxua2JkLFxcclxcbnNhbXAge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnNtYWxsIHtcXHJcXG4gICAgZm9udC1zaXplOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxyXFxuICAgKiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5zdWIsXFxyXFxuc3VwIHtcXHJcXG4gICAgZm9udC1zaXplOiA3NSU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuc3ViIHtcXHJcXG4gICAgYm90dG9tOiAtMC4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5zdXAge1xcclxcbiAgICB0b3A6IC0wLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRW1iZWRkZWQgY29udGVudFxcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEZvcm1zXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbm9wdGdyb3VwLFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyogR2l2ZSBpbnB1dCBhbmQgdGV4dCBhcmVhIGNvbnNpc3RlbnQgbG9vayAqL1xcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwIDAgLTEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZm9udDogYm9sZCAwLjZlbSBzYW5zLXNlcmlmO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyLFxcclxcbmJ1dHRvbjpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIC8qIGJhY2tncm91bmQ6ICMwMDA7XFxyXFxuICAgIGNvbG9yOiAjZmZmOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHZXRzIHJpZCBvZiBkZWZhdWx0IHNlYXJjaCB0byByZW1vdmUgcmVzdHJpY3Rpb25zICovXFxyXFxuaW5wdXRbdHlwZT0nc2VhcmNoJ10ge1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGaXggZm9yIGluY29uc2lzdGVudCBkaXNwbGF5IG9mIGNsZWFyIFxcXCJ4XFxcIiBpY29uIGluIHNlYXJjaCBpbnB1dHMgYWNyb3NzIGRpZmZlcmVudCBicm93c2Vycy4gXFxyXFxuICAsIHRoaXMgY29kZSByZW1vdmVzIHRoZSBpY29uIGluIEVkZ2UgYW5kIENocm9tZSB3aGVuIHRoZSBpbnB1dCBsb3NlcyBmb2N1cywgd2hpbGUga2VlcGluZyBpdCB2aXNpYmxlIGluIFNhZmFyaS4gKi9cXHJcXG5pbnB1dFt0eXBlPSdzZWFyY2gnXTpub3QoOmZvY3VzLCA6YWN0aXZlKTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxyXFxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0IHtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXHJcXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3Qge1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuW3R5cGU9J2J1dHRvbiddLFxcclxcblt0eXBlPSdyZXNldCddLFxcclxcblt0eXBlPSdzdWJtaXQnXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxyXFxuICAgKi9cXHJcXG5cXHJcXG46Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9J2J1dHRvbiddOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPSdyZXNldCddOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPSdzdWJtaXQnXTo6LW1vei1mb2N1cy1pbm5lciB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9J2J1dHRvbiddOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPSdyZXNldCddOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPSdzdWJtaXQnXTotbW96LWZvY3VzcmluZyB7XFxyXFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcclxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcclxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAvKiAyICovXFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAvKiAzICovXFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcclxcbiAgICovXFxyXFxuXFxyXFxucHJvZ3Jlc3Mge1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcclxcbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9J2NoZWNrYm94J10sXFxyXFxuW3R5cGU9J3JhZGlvJ10ge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXHJcXG4gICAqL1xcclxcblxcclxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXHJcXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcblt0eXBlPSdzZWFyY2gnXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9J3NlYXJjaCddOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udDogaW5oZXJpdDtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbnRlcmFjdGl2ZVxcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbmRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnN1bW1hcnkge1xcclxcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxyXFxufVxcclxcblxcclxcbi8qIE1pc2NcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG50ZW1wbGF0ZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5baGlkZGVuXSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXkmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1kZWZhdWx0LWZvbnQ6ICdQbGF5Jywgc2Fucy1zZXJpZiwgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCxcXHJcXG4gICAgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGRhcmtibHVlLCBsaWdodGJsdWUpO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZyB7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcclxcbiAgY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgcGFkZGluZzogOHB4IDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzZDtcXHJcXG4gIC8qIG9wYWNpdHk6IDAuNjsgKi9cXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBib3gtc2hhZG93OiA0cHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEycHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlckNvbnRhaW5lciBoMSB7XFxyXFxuICBmb250LXNpemU6IDIuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByYWRpYWwgIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLnRvcEJhckNvbnRhaW5lciB7XFxyXFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICB3aWR0aDogNzB2dztcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDglO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggIzdhN2E3YTQyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wQmFyQ29udGFpbmVyIHAge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxucC5pbnZpc2libGUge1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnNoaXBDZWxsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbiNBSUJvYXJkIGJ1dHRvbixcXHJcXG4jcGxheWVyQm9hcmQgYnV0dG9uIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJCb2FyZENvbnRhaW5lcixcXHJcXG4uYWlCb2FyZENvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4jYm9hcmRzQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjRweDtcXHJcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibGFjayAqL1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAzOHZ3KSk7XFxyXFxuICB3aWR0aDogODN2dztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5vcmllbnRhdGlvblRvZ2dsZUJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgaGVpZ2h0OiA2MCU7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW4tb3V0O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWRlZmF1bHQtZm9udCk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5vcmllbnRhdGlvblRvZ2dsZUJ0bjpob3ZlcixcXHJcXG5idXR0b24ub3JpZW50YXRpb25Ub2dnbGVCdG46YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzNjM2M7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNib2FyZHNDb250YWluZXIgcCB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4O1xcclxcbiAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyQm9hcmQge1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xcclxcbiAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcclxcbn1cXHJcXG5cXHJcXG4jQUlCb2FyZCB7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XFxyXFxuICBib3gtc2hhZG93OiA0cHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5ib2FyZENlbGwge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5zaGlwQ2VsbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnNoaXBIaXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNCwgMjEsIDIxKTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MTJweCkge1xcclxcbiAgI2JvYXJkc0NvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxuICAgIC8qICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIHBhZGRpbmc6IDEycHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMjVweCwgMzh2dykpO1xcclxcbiAgICB3aWR0aDogODZ2dztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNBSUJvYXJkIHtcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDQycHgpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcGxheWVyQm9hcmQge1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNDJweCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b3BCYXJDb250YWluZXIge1xcclxcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIGhlaWdodDogNDB2aDtcXHJcXG4gICAgbWFyZ2luLXRvcDogOCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogOCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggIzdhN2E3YTQyO1xcclxcbiAgICB3aWR0aDogNzZ2dztcXHJcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxyXFxuICAgIG1heC1oZWlnaHQ6IDExOHB4O1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9wQmFyQ29udGFpbmVyIHAge1xcclxcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDgwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjYm9hcmRzQ29udGFpbmVyIHAge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBidXR0b24ub3JpZW50YXRpb25Ub2dnbGVCdG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFO2NBQ1k7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0RBQWdEO0VBQ2hELGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Is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RUFDZDs7RUFFQTtJQUNFLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheSZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWRlZmF1bHQtZm9udDogJ1BsYXknLCBzYW5zLXNlcmlmLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLFxcclxcbiAgICBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoZGFya2JsdWUsIGxpZ2h0Ymx1ZSk7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaW1nIHtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxuICBjb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDNkO1xcclxcbiAgLyogb3BhY2l0eTogMC42OyAqL1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlckNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyQ29udGFpbmVyIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJhZGlhbCAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wQmFyQ29udGFpbmVyIHtcXHJcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gIHdpZHRoOiA3MHZ3O1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgbWFyZ2luLXRvcDogOCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAjN2E3YTdhNDI7XFxyXFxufVxcclxcblxcclxcbi50b3BCYXJDb250YWluZXIgcCB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5wLmludmlzaWJsZSB7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uc2hpcENlbGwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI0FJQm9hcmQgYnV0dG9uLFxcclxcbiNwbGF5ZXJCb2FyZCBidXR0b24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllckJvYXJkQ29udGFpbmVyLFxcclxcbi5haUJvYXJkQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcbiNib2FyZHNDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAyNHB4O1xcclxcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrICovXFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDM4dncpKTtcXHJcXG4gIHdpZHRoOiA4M3Z3O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLm9yaWVudGF0aW9uVG9nZ2xlQnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBoZWlnaHQ6IDYwJTtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLm9yaWVudGF0aW9uVG9nZ2xlQnRuOmhvdmVyLFxcclxcbmJ1dHRvbi5vcmllbnRhdGlvblRvZ2dsZUJ0bjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjM2MzYztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2JvYXJkc0NvbnRhaW5lciBwIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgcGFkZGluZzogNnB4IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHg7XFxyXFxuICBib3gtc2hhZG93OiA0cHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXJCb2FyZCB7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XFxyXFxuICBib3gtc2hhZG93OiA0cHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxyXFxufVxcclxcblxcclxcbiNBSUJvYXJkIHtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXHJcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmJvYXJkQ2VsbCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnNoaXBDZWxsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uc2hpcEhpdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE0LCAyMSwgMjEpO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDgxMnB4KSB7XFxyXFxuICAjYm9hcmRzQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTZweDtcXHJcXG4gICAgLyogIG91dGxpbmU6IDFweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gICAgcGFkZGluZzogMTJweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBub25lO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyNXB4LCAzOHZ3KSk7XFxyXFxuICAgIHdpZHRoOiA4NnZ3O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI0FJQm9hcmQge1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNDJweCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNwbGF5ZXJCb2FyZCB7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MnB4KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvcEJhckNvbnRhaW5lciB7XFxyXFxuICAgIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gICAgaGVpZ2h0OiA0MHZoO1xcclxcbiAgICBtYXJnaW4tdG9wOiA4JTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA4JTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAjN2E3YTdhNDI7XFxyXFxuICAgIHdpZHRoOiA3NnZ3O1xcclxcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXHJcXG4gICAgbWF4LWhlaWdodDogMTE4cHg7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b3BCYXJDb250YWluZXIgcCB7XFxyXFxuICAgIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgbWF4LWhlaWdodDogODB2aDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNib2FyZHNDb250YWluZXIgcCB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGJ1dHRvbi5vcmllbnRhdGlvblRvZ2dsZUJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7XHJcbiAgcHJlR2FtZVNldHVwXHJcbn0gZnJvbSAnLi9jb250cm9sbGVycy9kaXNwbGF5Q29udHJvbGxlcidcclxuXHJcbmltcG9ydCAnLi9zdHlsZXMvbm9ybWFsaXplLmNzcydcclxuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnXHJcblxyXG5wcmVHYW1lU2V0dXAoKVxyXG4iXSwibmFtZXMiOlsiZGVsYXkiLCJnYW1lQ29udHJvbGxlciIsImdhbWUiLCJwcmVHYW1lU2V0dXAiLCJyZW5kZXJQbGF5ZXJCb2FyZCIsInBsYWNlQ2FycmllclNoaXAiLCJyZW5kZXJBSUJvYXJkIiwiZGlzcGxheUNvbnRyb2xsZXIiLCJ0b3BCYXJDb250YWluZXJQYXJhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJwbGFjZUFJU2hpcHMiLCJhaUJvYXJkRGl2IiwiZ2V0RWxlbWVudEJ5SWQiLCJwbGF5ZXJzIiwiZ2V0UGxheWVycyIsImFjdGl2ZVBsYXllciIsImdldEN1cnJlbnRQbGF5ZXIiLCJodW1hbiIsIm5ld01lc3NhZ2UiLCJ0cmFuc2l0aW9uVGV4dENoYW5nZXMiLCJjb250cm9sbGVyIiwiQWJvcnRDb250cm9sbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnQiLCJzaWduYWwiLCJ0b3BCYXJQYXJhIiwiaHVtYW5Cb2FyZERpdiIsIm9yaWVudGF0aW9uQnRuVmFsdWVzIiwiY3JlYXRlT3JpZW50YXRpb25Ub2dnbGVCdG4iLCJob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzIiwib3JpZW50YXRpb25Ub2dnbGVCdG4iLCJoYW5kbGVDYXJyaWVyU2hpcFBsYWNlbWVudCIsInBsYWNlQmF0dGxlU2hpcCIsImhhbmRsZUJhdHRsZVNoaXBQbGFjZW1lbnQiLCJwbGFjZUNydWlzZXIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ3J1aXNlclNoaXBQbGFjZW1lbnQiLCJwbGFjZVN1Ym1hcmluZSIsImhhbmRsZVN1Ym1hcmluZVNoaXBQbGFjZW1lbnQiLCJwbGFjZURlc3Ryb3llciIsImhhbmRsZURlc3Ryb3llclNoaXBQbGFjZW1lbnQiLCJwbGF5ZXJCb2FyZCIsImdldEh1bWFuQm9hcmQiLCJwbGF5ZXJCb2FyZERpdiIsImlubmVySFRNTCIsImkiLCJsZW5ndGgiLCJjdXJyZW50Um93IiwiaiIsImJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0Iiwicm93IiwiY29sdW1uIiwiYXBwZW5kQ2hpbGQiLCJhaUJvYXJkIiwiZ2V0QUlCb2FyZCIsInVwZGF0ZUh1bWFuQm9hcmQiLCJodW1hbkJvYXJkIiwibWlzc2VkU2hvdHMiLCJnZXRIdW1hbkJvYXJkT2JqIiwiZ2V0TWlzc2VkU2hvdHMiLCJzdWNjZXNzZnVsU2hvdHMiLCJnZXRTdWNjZXNzZnVsU2hvdHMiLCJhbGxEb21Ob2RlcyIsIkFycmF5IiwiZnJvbSIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwic2hvdCIsInRhcmdldE5vZGUiLCJyZW1vdmUiLCJ1cGRhdGVBSUJvYXJkIiwiZ2V0QUlCb2FyZE9iaiIsImhvcml6b250YWxTaGlwT3JpZW50YXRpb24iLCJzZWxlY3RlZFJvdyIsInRhcmdldCIsInNlbGVjdGVkQ29sdW1uIiwiY29vcmRpbmF0ZSIsImNhcnJpZXJQbGFjZWQiLCJwbGFjZUNhcnJpZXJPbkJvYXJkIiwiYWJvcnQiLCJyZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuIiwiYmF0dGxlc2hpcFBsYWNlZCIsInBsYWNlQmF0dGxlc2hpcE9uQm9hcmQiLCJjcnVpc2VyUGxhY2VkIiwicGxhY2VDcnVpc2VyT25Cb2FyZCIsInN1Ym1hcmluZVBsYWNlZCIsInBsYWNlU3VibWFyaW5lT25Cb2FyZCIsImRlc3Ryb3llclBsYWNlZCIsInBsYWNlRGVzdHJveWVyT25Cb2FyZCIsInNoaXBUeXBlIiwiYm9hcmRET01DZWxsc0FyciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRIb3Jpem9udGFsRE9NQ29vcmRzIiwiZ2V0VmVydGljYWxET01Db29yZHMiLCJwbGFjZUNydWlzZXJTaGlwIiwicGxhY2VTdWJtYXJpbmVTaGlwIiwicGxhY2VEZXN0cm95ZXJTaGlwIiwic3RhcnRpbmdDb2x1bW4iLCJOdW1iZXIiLCJzaGlwTGVuZ3RoIiwiZG9tQ29vcmRpbmF0ZSIsInRhcmdldERPTUJ0biIsImZpbmRTaGlwRE9NQnRuIiwic3RhcnRpbmdSb3ciLCJkb21DZWxsUm93IiwiZG9tQ2VsbENvbHVtbiIsImFscmVhZHlBdHRhY2tlZCIsInByZXZlbnRTYW1lQXR0YWNrIiwicGxheVJvdW5kIiwiaHVtYW5Nb3ZlU3VjY2Vzc2Z1bCIsImdldExhc3RIdW1hbk1vdmVTdWNjZXNzZnVsIiwic2hpcElzU3VuayIsImlzU2hpcFN1bmsiLCJzaGlwU3Vua1Jlc3VsdCIsImRpc3BsYXlTdW5rU2hpcE1lc3NhZ2UiLCJkaXNwbGF5U3VjY2Vzc2Z1bEF0dGFja01lc3NhZ2UiLCJkaXNwbGF5VW5zdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSIsImh1bWFuV2lucyIsImNoZWNrRm9yV2luIiwiaGFuZGxlV2luQ2hlY2siLCJoYW5kbGVBSU1vdmUiLCJlbmVteUF0dGFja2luZ01zZyIsImd1ZXNzZWRDb29yZGluYXRlIiwiYWlNb3ZlU3VjY2Vzc2Z1bCIsImdldExhc3RBSU1vdmVTdWNjZXNzZnVsIiwiYWlXaW5zIiwiYXR0YWNrVGhlRW5lbXlNc2ciLCJhbm5vdW5jZVdpbm5lciIsIndpbm5lciIsIndpbm5lck5hbWUiLCJnZXROYW1lIiwicGxheUFnYWluIiwidG9wQmFyRGl2IiwicGxheUFnYWluQnRuIiwic3RhcnROZXdHYW1lIiwicmVtb3ZlQ2hpbGQiLCJwcmV2aW91c09yaWVudGF0aW9uQnRuIiwicGxheWVyIiwiYXR0YWNrQW5kSGl0TXNnIiwic2V0VGltZW91dCIsImVuZW15SGl0TXNnIiwidW5zdWNjZXNzZnVsQXR0YWNrTXNnIiwidW5zdWNjZXNzZnVsRW5lbXlBdHRhY2tNc2ciLCJzdW5rU2hpcE1lc3NhZ2UiLCJ3aW5DaGVjayIsImJvYXJkRGl2IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlc2V0R2FtZVN0YXRlIiwiZG9tRWxlbWVudCIsIkdhbWVib2FyZCIsIlBsYXllciIsImFycmF5c0FyZUVxdWFsIiwicmV0dXJuUmFuZG9tQUlCb2FyZCIsImNyZWF0ZUdhbWVCb2FyZCIsImNhcnJpZXJBcnIiLCJkZXRlcm1pbmVDYXJyaWVyQXJyQ29vcmRzIiwic2hpcFBsYWNlZCIsInBsYWNlU2hpcCIsInB1c2giLCJjb29yZCIsInRvU3RyaW5nIiwiYmF0dGxlc2hpcEFyciIsImRldGVybWluZUJhdHRsZXNoaXBBcnJDb29yZHMiLCJjcnVpc2VyQXJyIiwiZGV0ZXJtaW5lQ3J1aXNlckFyckNvb3JkcyIsInN1Ym1hcmluZUFyciIsImRldGVybWluZVN1Ym1hcmluZUFyckNvb3JkcyIsImRlc3Ryb3llckFyciIsImRldGVybWluZURlc3Ryb3llckFyckNvb3JkcyIsInBsYWNlU2hpcHMiLCJodW1hblBsYXllciIsImFpUGxheWVyIiwiQUkiLCJjdXJyZW50UGxheWVyIiwicmVjZWl2ZUF0dGFjayIsInN3aXRjaFBsYXllciIsIm5leHRNb3ZlIiwiY29tcHV0ZXJzTmV4dE1vdmUiLCJyZW1vdmVMYXN0QUlNb3ZlIiwiYXZhaWxhYmxlTW92ZXMiLCJnZXRBSUF2YWlsYWJsZU1vdmVzIiwibGFzdEFJTW92ZVN1Y2Nlc3NmdWwiLCJhZGphY2VudFNsb3RzIiwiZ2V0QWRqYWNlbnRTbG90cyIsImFkZEFkamFjZW50U2xvdHNUb1F1ZXVlIiwiZ2V0QWRqYWNlbnRRdWV1ZVNsb3QiLCJyYW5kb21Nb3ZlIiwibWFrZVJhbmRvbU1vdmUiLCJhbGxTaGlwc1N1bmsiLCJsYXN0U3VjY2Vzc2Z1bEh1bWFuTW92ZSIsImdldExhc3RTdWNjZXNzZnVsTW92ZSIsInVuZGVmaW5lZCIsImdhbWVCb2FyZCIsImdldEJvYXJkIiwidGFyZ2V0U2hpcE9iaiIsImhhc0JlZW5TdW5rIiwibGFzdFN1Y2Nlc3NmdWxBSU1vdmUiLCJjbGVhckdhbWVCb2FyZCIsImJvYXJkIiwiY29vcmRpbmF0ZXNPYmoiLCJzaGlwQ29vcmRpbmF0ZXNBcnIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzaGlwQ29vcmRpbmF0ZXMiLCJTaGlwIiwic2hpcE9iamVjdHMiLCJhaUF2YWlsYWJsZU1vdmVzIiwiYWRqYWNlbnRTbG90c1F1ZXVlIiwicm93cyIsImNvbHVtbnMiLCJsYXN0SHVtYW5Nb3ZlU3VjY2Vzc2Z1bCIsInZhbGlkYXRlQ29vcmRpbmF0ZXMiLCJjb29yZGluYXRlcyIsInZhbGlkQ29vcmRpbmF0ZXMiLCJjaGVja1NlbGZPdmVybGFwIiwiY29vcmRpbmF0ZXNPdmVybGFwIiwicHJldkNvb3JkaW5hdGUiLCJpbmRleCIsImNoZWNrT3ZlcmxhcFdpdGhPdGhlclNoaXBzIiwic2hpcHNPdmVybGFwIiwiYm9hcmRDZWxsIiwibGVnYWxDb29yZGluYXRlcyIsIm92ZXJsYXBwaW5nQ29vcmRpbmF0ZXMiLCJzaGlwT3ZlcmxhcHBpbmciLCJzaGlwT2JqZWN0Iiwic2hpcE9iaiIsImhpdCIsInJlbW92ZUFkamFjZW50U2xvdCIsInRhcmdldENvb3JkaW5hdGVzIiwiYWRqYWNlbnRRdWV1ZSIsIlNldCIsInNsb3QiLCJmaWx0ZXIiLCJldmVyeVNoaXBTYW5rIiwibW92ZSIsInNwbGljZSIsImdldFNoaXBPYmplY3RzIiwiZ2V0QWRqYWNlbnRTbG90c1F1ZXVlIiwicG9wIiwiYXQiLCJuYW1lIiwiaXNBSSIsImF2YWlsYWJsZU1vdmVzTGVuZ3RoIiwicmFuZG9tQXJySW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21Db29yZGluYXRlIiwibGFzdFN1Y2Nlc3NmdWxNb3ZlIiwicmV0cmlldmVBZGphY2VudFNsb3RzIiwibGVnYWxBZGphY2VudFNsb3RzIiwicmVtb3ZlSWxsZWdhbEFkamFjZW50U2xvdHMiLCJhdmFpbGFibGVBZGphY2VudFNsb3RzIiwicHJldmVudFByZXZpb3VzU2hvdFRvUXVldWUiLCJnZXRDZWxsQWJvdmUiLCJuZXdBcnIiLCJuZXdSb3ciLCJnZXRDZWxsQmVsb3ciLCJnZXRDZWxsVG9SaWdodCIsIm5ld0NvbHVtbiIsImdldENlbGxUb0xlZnQiLCJsYXN0U3VjY2Vzc2Z1bE1vdmVWYWx1ZSIsImFkamFjZW50U2xvdHNBcnIiLCJzbG90cyIsImFsbFByZXZpb3VzQXR0YWNrcyIsImNvbmNhdCIsInByZXZpb3VzQXR0YWNrcyIsImZpbHRlcmVkU2xvdHMiLCJoYXMiLCJudW1PZkhpdHMiLCJpc1N1bmsiLCJnZXROdW1PZkhpdHMiLCJnZXRMZW5ndGgiLCJhcnIxIiwiYXJyMiIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhaUJvYXJkcyIsImFpU2hpcENvb3Jkc09uZSIsImFpU2hpcENvb3Jkc1R3byIsImFpU2hpcENvb3Jkc1RocmVlIiwicmFuZG9tSW5kZXgiLCJjaG9zZW5BSUJvYXJkIiwiY2FycmllciIsImJhdHRsZXNoaXAiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIl0sInNvdXJjZVJvb3QiOiIifQ==