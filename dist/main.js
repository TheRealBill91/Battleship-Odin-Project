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
      /* if (typeof row[j] === 'object') {
        button.classList.add('shipCell')
      } */
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
      switchPlayer();
    } else if (currentPlayer.getName() === players.AI.getName()) {
      const nextMove = computersNextMove();
      humanBoard.receiveAttack(nextMove);
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Play&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --default-font: 'Play', sans-serif, 'Helvetica Neue', Helvetica, Arial,\n    sans-serif;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  width: 100vw;\n  overflow-x: hidden;\n  background: linear-gradient(darkblue, lightblue);\n  font-family: var(--default-font);\n}\n\n.logo img {\n  height: 70px;\n  width: auto;\n  border-radius: 50%;\n}\n\nheader {\n  background-color: darkblue;\n  color: rgb(236, 236, 236);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100px;\n  padding: 8px 0px;\n  background-color: #0000003d;\n  /* opacity: 0.6; */\n  z-index: 1;\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.headerContainer {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  justify-content: center;\n}\n\n.headerContainer h1 {\n  font-size: 2.3rem;\n}\n\nmain {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  flex-direction: column;\n  gap: 12px;\n  background-color: radial #333;\n}\n\n.topBarContainer {\n  /* outline: 1px solid black; */\n  width: 70vw;\n  height: 80px;\n  margin-top: 8%;\n  display: flex;\n  gap: 10%;\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px 12px;\n  background-color: lightgray;\n  box-shadow: 0px 2px 1px #7a7a7a42;\n}\n\n.topBarContainer p {\n  align-items: center;\n  transition: opacity 0.5s ease-in-out;\n  font-size: 1.4rem;\n  opacity: 1;\n  text-align: center;\n}\n\np.invisible {\n  transition: opacity 0.5s ease-in-out;\n  opacity: 0;\n}\n\nbutton.shipCell {\n  background-color: grey;\n  transition: background-color 0.2s ease-in-out;\n}\n\n#AIBoard button,\n#playerBoard button {\n  border-radius: 0;\n}\n\n.playerBoardContainer,\n.aiBoardContainer {\n  display: grid;\n}\n\n#boardsContainer {\n  display: flex;\n  justify-content: center;\n  gap: 24px;\n  /* outline: 1px solid black */\n  padding: 12px;\n  display: grid;\n  grid-template-rows: none;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 38vw));\n  width: 83vw;\n  margin-bottom: 14px;\n}\n\nbutton.orientationToggleBtn {\n  background-color: #333;\n  color: white;\n  border-radius: 8px;\n  height: 60%;\n  width: 100px;\n  font-size: 1rem;\n  transition: 0.1s ease-in-out;\n  border: none;\n  font-family: var(--default-font);\n}\n\nbutton.orientationToggleBtn:hover,\nbutton.orientationToggleBtn:active {\n  background-color: #3c3c3c;\n  border: none;\n}\n\n#boardsContainer p {\n  justify-self: center;\n  font-size: 1.2rem;\n  color: white;\n  background-color: grey;\n  padding: 6px 8px;\n  border-radius: 8px 8px;\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n#playerBoard {\n  outline: 1px solid black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 50px);\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  background-color: rgb(235, 235, 235);\n}\n\n#AIBoard {\n  outline: 1px solid black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 50px);\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  background-color: rgb(235, 235, 235);\n}\n\nbutton.boardCell {\n  border-radius: 0px;\n  background-color: rgb(235, 235, 235);\n  color: black;\n  font-size: 1rem;\n  transition: opacity 0.3s ease-in;\n}\n\nbutton.shipCell {\n  background-color: #333;\n  border: 1px solid black;\n  transition: background-color 0.3s ease-in;\n}\n\nbutton.shipHit {\n  background-color: rgb(114, 21, 21);\n  transition: background-color 0.3s ease-in;\n}\n\n@media only screen and (max-device-width: 812px) {\n  #boardsContainer {\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    /*  outline: 1px solid black; */\n    padding: 12px;\n    display: grid;\n    grid-template-rows: none;\n    grid-template-columns: repeat(auto-fit, minmax(325px, 38vw));\n    width: 86vw;\n    margin-bottom: 14px;\n    margin-bottom: 24px;\n  }\n\n  #AIBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 42px);\n    background-color: rgb(235, 235, 235);\n  }\n\n  #playerBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 42px);\n    background-color: rgb(235, 235, 235);\n  }\n\n  .topBarContainer {\n    /* outline: 1px solid black; */\n    height: 40vh;\n    margin-top: 8%;\n    display: flex;\n    gap: 8%;\n    justify-content: center;\n    align-items: center;\n    border-radius: 12px 12px;\n    background-color: lightgray;\n    box-shadow: 0px 2px 1px #7a7a7a42;\n    width: 76vw;\n    /* width: 100%; */\n    max-height: 118px;\n    padding: 8px;\n  }\n\n  .topBarContainer p {\n    /* outline: 1px solid black; */\n    font-size: 1.1rem;\n    height: fit-content;\n    margin: 0;\n    max-height: 80vh;\n  }\n\n  #boardsContainer p {\n    justify-self: center;\n    font-size: 1.1rem;\n  }\n\n  button.orientationToggleBtn {\n    background-color: #333;\n    color: white;\n    border-radius: 8px;\n    height: 50%;\n    width: 100px;\n    font-size: 1rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Play&display=swap');\n\n:root {\n  --default-font: 'Play', sans-serif, 'Helvetica Neue', Helvetica, Arial,\n    sans-serif;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  width: 100vw;\n  overflow-x: hidden;\n  background: linear-gradient(darkblue, lightblue);\n  font-family: var(--default-font);\n}\n\n.logo img {\n  height: 70px;\n  width: auto;\n  border-radius: 50%;\n}\n\nheader {\n  background-color: darkblue;\n  color: rgb(236, 236, 236);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100px;\n  padding: 8px 0px;\n  background-color: #0000003d;\n  /* opacity: 0.6; */\n  z-index: 1;\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.headerContainer {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  justify-content: center;\n}\n\n.headerContainer h1 {\n  font-size: 2.3rem;\n}\n\nmain {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  flex-direction: column;\n  gap: 12px;\n  background-color: radial #333;\n}\n\n.topBarContainer {\n  /* outline: 1px solid black; */\n  width: 70vw;\n  height: 80px;\n  margin-top: 8%;\n  display: flex;\n  gap: 10%;\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px 12px;\n  background-color: lightgray;\n  box-shadow: 0px 2px 1px #7a7a7a42;\n}\n\n.topBarContainer p {\n  align-items: center;\n  transition: opacity 0.5s ease-in-out;\n  font-size: 1.4rem;\n  opacity: 1;\n  text-align: center;\n}\n\np.invisible {\n  transition: opacity 0.5s ease-in-out;\n  opacity: 0;\n}\n\nbutton.shipCell {\n  background-color: grey;\n  transition: background-color 0.2s ease-in-out;\n}\n\n#AIBoard button,\n#playerBoard button {\n  border-radius: 0;\n}\n\n.playerBoardContainer,\n.aiBoardContainer {\n  display: grid;\n}\n\n#boardsContainer {\n  display: flex;\n  justify-content: center;\n  gap: 24px;\n  /* outline: 1px solid black */\n  padding: 12px;\n  display: grid;\n  grid-template-rows: none;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 38vw));\n  width: 83vw;\n  margin-bottom: 14px;\n}\n\nbutton.orientationToggleBtn {\n  background-color: #333;\n  color: white;\n  border-radius: 8px;\n  height: 60%;\n  width: 100px;\n  font-size: 1rem;\n  transition: 0.1s ease-in-out;\n  border: none;\n  font-family: var(--default-font);\n}\n\nbutton.orientationToggleBtn:hover,\nbutton.orientationToggleBtn:active {\n  background-color: #3c3c3c;\n  border: none;\n}\n\n#boardsContainer p {\n  justify-self: center;\n  font-size: 1.2rem;\n  color: white;\n  background-color: grey;\n  padding: 6px 8px;\n  border-radius: 8px 8px;\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n#playerBoard {\n  outline: 1px solid black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 50px);\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  background-color: rgb(235, 235, 235);\n}\n\n#AIBoard {\n  outline: 1px solid black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 50px);\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  background-color: rgb(235, 235, 235);\n}\n\nbutton.boardCell {\n  border-radius: 0px;\n  background-color: rgb(235, 235, 235);\n  color: black;\n  font-size: 1rem;\n  transition: opacity 0.3s ease-in;\n}\n\nbutton.shipCell {\n  background-color: #333;\n  border: 1px solid black;\n  transition: background-color 0.3s ease-in;\n}\n\nbutton.shipHit {\n  background-color: rgb(114, 21, 21);\n  transition: background-color 0.3s ease-in;\n}\n\n@media only screen and (max-device-width: 812px) {\n  #boardsContainer {\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    /*  outline: 1px solid black; */\n    padding: 12px;\n    display: grid;\n    grid-template-rows: none;\n    grid-template-columns: repeat(auto-fit, minmax(325px, 38vw));\n    width: 86vw;\n    margin-bottom: 14px;\n    margin-bottom: 24px;\n  }\n\n  #AIBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 42px);\n    background-color: rgb(235, 235, 235);\n  }\n\n  #playerBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 42px);\n    background-color: rgb(235, 235, 235);\n  }\n\n  .topBarContainer {\n    /* outline: 1px solid black; */\n    height: 40vh;\n    margin-top: 8%;\n    display: flex;\n    gap: 8%;\n    justify-content: center;\n    align-items: center;\n    border-radius: 12px 12px;\n    background-color: lightgray;\n    box-shadow: 0px 2px 1px #7a7a7a42;\n    width: 76vw;\n    /* width: 100%; */\n    max-height: 118px;\n    padding: 8px;\n  }\n\n  .topBarContainer p {\n    /* outline: 1px solid black; */\n    font-size: 1.1rem;\n    height: fit-content;\n    margin: 0;\n    max-height: 80vh;\n  }\n\n  #boardsContainer p {\n    justify-self: center;\n    font-size: 1.1rem;\n  }\n\n  button.orientationToggleBtn {\n    background-color: #333;\n    color: white;\n    border-radius: 8px;\n    height: 50%;\n    width: 100px;\n    font-size: 1rem;\n  }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUosZUFBZSxHQUFHO0VBQ3RCSyxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxVQUFVLEVBQUUsQ0FDVixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFVixDQUFDO0FBRUQsTUFBTVIsZUFBZSxHQUFHO0VBQ3RCSSxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxVQUFVLEVBQUUsQ0FDVixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFVixDQUFDO0FBRUQsTUFBTVAsaUJBQWlCLEdBQUc7RUFDeEJHLE9BQU8sRUFBRSxDQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFVBQVUsRUFBRSxDQUNWLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLE9BQU8sRUFBRSxDQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFNBQVMsRUFBRSxDQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxF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QUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLEtBQUssWUFBWSxPQUFPLFNBQVMsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsS0FBSyxNQUFNLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sU0FBUyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE9BQU8sT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxL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QUFPLHVGQUF1RixLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxtR0FBbUcsV0FBVyw0RkFBNEYsR0FBRyxVQUFVLGtCQUFrQiwyQkFBMkIsc0JBQXNCLGlCQUFpQix1QkFBdUIscURBQXFELHFDQUFxQyxHQUFHLGVBQWUsaUJBQWlCLGdCQUFnQix1QkFBdUIsR0FBRyxZQUFZLCtCQUErQiw4QkFBOEIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsaUJBQWlCLGtCQUFrQixxQkFBcUIsZ0NBQWdDLHFCQUFxQixpQkFBaUIsK0NBQStDLEdBQUcsc0JBQXNCLGtCQUFrQix3QkFBd0IsY0FBYyw0QkFBNEIsR0FBRyx5QkFBeUIsc0JBQXNCLEdBQUcsVUFBVSxrQkFBa0Isd0JBQXdCLDRCQUE0QixZQUFZLDJCQUEyQixjQUFjLGtDQUFrQyxHQUFHLHNCQUFzQixpQ0FBaUMsa0JBQWtCLGlCQUFpQixtQkFBbUIsa0JBQWtCLGFBQWEsNEJBQTRCLHdCQUF3Qiw2QkFBNkIsZ0NBQWdDLHNDQUFzQyxHQUFHLHdCQUF3Qix3QkFBd0IseUNBQXlDLHNCQUFzQixlQUFlLHVCQUF1QixHQUFHLGlCQUFpQix5Q0FBeUMsZUFBZSxHQUFHLHFCQUFxQiwyQkFBMkIsa0RBQWtELEdBQUcsMkNBQTJDLHFCQUFxQixHQUFHLCtDQUErQyxrQkFBa0IsR0FBRyxzQkFBc0Isa0JBQWtCLDRCQUE0QixjQUFjLG9EQUFvRCxrQkFBa0IsNkJBQTZCLGlFQUFpRSxnQkFBZ0Isd0JBQXdCLEdBQUcsaUNBQWlDLDJCQUEyQixpQkFBaUIsdUJBQXVCLGdCQUFnQixpQkFBaUIsb0JBQW9CLGlDQUFpQyxpQkFBaUIscUNBQXFDLEdBQUcsNEVBQTRFLDhCQUE4QixpQkFBaUIsR0FBRyx3QkFBd0IseUJBQXlCLHNCQUFzQixpQkFBaUIsMkJBQTJCLHFCQUFxQiwyQkFBMkIsK0NBQStDLEdBQUcsa0JBQWtCLDZCQUE2QixrQkFBa0IsMkNBQTJDLHlDQUF5QywrQ0FBK0MsdUJBQXVCLHlDQUF5QyxHQUFHLGNBQWMsNkJBQTZCLGtCQUFrQiwyQ0FBMkMseUNBQXlDLCtDQUErQyx1QkFBdUIseUNBQXlDLEdBQUcsc0JBQXNCLHVCQUF1Qix5Q0FBeUMsaUJBQWlCLG9CQUFvQixxQ0FBcUMsR0FBRyxxQkFBcUIsMkJBQTJCLDRCQUE0Qiw4Q0FBOEMsR0FBRyxvQkFBb0IsdUNBQXVDLDhDQUE4QyxHQUFHLHNEQUFzRCxzQkFBc0Isb0JBQW9CLDhCQUE4QixnQkFBZ0Isb0NBQW9DLHNCQUFzQixvQkFBb0IsK0JBQStCLG1FQUFtRSxrQkFBa0IsMEJBQTBCLDBCQUEwQixLQUFLLGdCQUFnQiwrQkFBK0Isb0JBQW9CLDZDQUE2QywyQ0FBMkMsMkNBQTJDLEtBQUssb0JBQW9CLCtCQUErQixvQkFBb0IsNkNBQTZDLDJDQUEyQywyQ0FBMkMsS0FBSyx3QkFBd0IsbUNBQW1DLHFCQUFxQixxQkFBcUIsb0JBQW9CLGNBQWMsOEJBQThCLDBCQUEwQiwrQkFBK0Isa0NBQWtDLHdDQUF3QyxrQkFBa0Isc0JBQXNCLDBCQUEwQixtQkFBbUIsS0FBSywwQkFBMEIsbUNBQW1DLDBCQUEwQiwwQkFBMEIsZ0JBQWdCLHVCQUF1QixLQUFLLDBCQUEwQiwyQkFBMkIsd0JBQXdCLEtBQUssbUNBQW1DLDZCQUE2QixtQkFBbUIseUJBQXlCLGtCQUFrQixtQkFBbUIsc0JBQXNCLEtBQUssR0FBRyxtQkFBbUI7QUFDcmhaO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUEwRztBQUMxRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDBGQUFPOzs7O0FBSW9EO0FBQzVFLE9BQU8saUVBQWUsMEZBQU8sSUFBSSxpR0FBYyxHQUFHLGlHQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNFd0M7QUFFVDtBQUNKO0FBRTNCcFMsNEVBQVksQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9jb250cm9sbGVycy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9jb250cm9sbGVycy9nYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9mYWN0b3JpZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2ZhY3Rvcmllcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvZmFjdG9yaWVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvaGVscGVycy9hcnJheXNBcmVFcXVhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9oZWxwZXJzL2RlbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2hlbHBlcnMvcm90YXRlQUlCb2FyZHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzcz80M2Y0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlbGF5IH0gZnJvbSAnLi4vaGVscGVycy9kZWxheSdcbmltcG9ydCB7IGdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9nYW1lQ29udHJvbGxlcidcblxuY29uc3QgZ2FtZSA9IGdhbWVDb250cm9sbGVyKClcblxuY29uc3QgcHJlR2FtZVNldHVwID0gKCkgPT4ge1xuICByZW5kZXJQbGF5ZXJCb2FyZCgpXG4gIHBsYWNlQ2FycmllclNoaXAoKVxuICByZW5kZXJBSUJvYXJkKClcbn1cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gYXN5bmMgKCkgPT4ge1xuICAvLyB0aGlzIGlzIHdoZXJlIHRoZSBzaGlwIHBsYWNlbWVudCB3aWxsIGhhcHBlbiBmb3IgaHVtYW4gcGxheWVyXG4gIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG4gIHRvcEJhckNvbnRhaW5lclBhcmEudGV4dENvbnRlbnQgPSAnRW5lbm15IGlzIHBsYWNpbmcgdGhlaXIgc2hpcHMuLi4nXG4gIGF3YWl0IGRlbGF5KDE1MDApXG4gIGdhbWUucGxhY2VBSVNoaXBzKClcbiAgcmVuZGVyQUlCb2FyZCgpXG4gIHRvcEJhckNvbnRhaW5lclBhcmEudGV4dENvbnRlbnQgPSAnJ1xuICBjb25zdCBhaUJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FJQm9hcmQnKVxuICBjb25zdCBwbGF5ZXJzID0gZ2FtZS5nZXRQbGF5ZXJzKClcbiAgY29uc3QgYWN0aXZlUGxheWVyID0gZ2FtZS5nZXRDdXJyZW50UGxheWVyKClcblxuICBpZiAoYWN0aXZlUGxheWVyID09PSBwbGF5ZXJzLmh1bWFuKSB7XG4gICAgY29uc3QgbmV3TWVzc2FnZSA9ICdBdHRhY2sgdGhlIGVuZW1pZXMgc2hpcHMhJ1xuICAgIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG4gICAgdHJhbnNpdGlvblRleHRDaGFuZ2VzKG5ld01lc3NhZ2UsIHRvcEJhckNvbnRhaW5lclBhcmEpXG5cbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gICAgYWlCb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIChlKSA9PiB7XG4gICAgICAgIGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dChlLCBjb250cm9sbGVyKVxuICAgICAgfSxcbiAgICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHBsYWNlQ2FycmllclNoaXAgPSAoKSA9PiB7XG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBjYXJyaWVyIHNoaXAnXG5cbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXG5cbiAgY29uc3Qgb3JpZW50YXRpb25CdG5WYWx1ZXMgPSBjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0bigpXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMF1cbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBvcmllbnRhdGlvbkJ0blZhbHVlc1sxXVxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IGZhbHNlXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcbiAgICB9IGVsc2Uge1xuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgaHVtYW5Cb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgICdjbGljaycsXG4gICAgKGUpID0+IHtcbiAgICAgIGhhbmRsZUNhcnJpZXJTaGlwUGxhY2VtZW50KGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMsIGNvbnRyb2xsZXIpXG4gICAgfSxcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxuICApXG59XG5cbmNvbnN0IHBsYWNlQmF0dGxlU2hpcCA9ICgpID0+IHtcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIGJhdHRsZXNoaXAnXG5cbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXG5cbiAgY29uc3Qgb3JpZW50YXRpb25CdG5WYWx1ZXMgPSBjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0bigpXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMF1cbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBvcmllbnRhdGlvbkJ0blZhbHVlc1sxXVxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IGZhbHNlXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcbiAgICB9IGVsc2Uge1xuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgaHVtYW5Cb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgICdjbGljaycsXG4gICAgKGUpID0+IHtcbiAgICAgIGhhbmRsZUJhdHRsZVNoaXBQbGFjZW1lbnQoZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cywgY29udHJvbGxlcilcbiAgICB9LFxuICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XG4gIClcbn1cblxuY29uc3QgcGxhY2VDcnVpc2VyID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgQ3J1aXNlcidcblxuICBjb25zdCBodW1hbkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckJvYXJkJylcblxuICBjb25zdCBvcmllbnRhdGlvbkJ0blZhbHVlcyA9IGNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuKClcbiAgbGV0IGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBvcmllbnRhdGlvbkJ0blZhbHVlc1swXVxuICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZUJ0biA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzFdXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID09PSB0cnVlKSB7XG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gZmFsc2VcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJ1xuICAgIH0gZWxzZSB7XG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICBodW1hbkJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2NsaWNrJyxcbiAgICAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICdPcmllbnRhdGlvbiBzdGF0dXMgZ29pbmcgaW50byBwbGFjZW1lbnQ6JyArXG4gICAgICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1c1xuICAgICAgKVxuICAgICAgaGFuZGxlQ3J1aXNlclNoaXBQbGFjZW1lbnQoZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cywgY29udHJvbGxlcilcbiAgICB9LFxuICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XG4gIClcbn1cblxuY29uc3QgcGxhY2VTdWJtYXJpbmUgPSAoKSA9PiB7XG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBTdWJtYXJpbmUnXG5cbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXG5cbiAgY29uc3Qgb3JpZW50YXRpb25CdG5WYWx1ZXMgPSBjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0bigpXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMF1cbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBvcmllbnRhdGlvbkJ0blZhbHVlc1sxXVxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IGZhbHNlXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcbiAgICB9IGVsc2Uge1xuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXG4gICAgfVxuICB9KVxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgIChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgJ09yaWVudGF0aW9uIHN0YXR1cyBnb2luZyBpbnRvIHBsYWNlbWVudDonICtcbiAgICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzXG4gICAgICApXG4gICAgICBoYW5kbGVTdWJtYXJpbmVTaGlwUGxhY2VtZW50KFxuICAgICAgICBlLFxuICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzLFxuICAgICAgICBjb250cm9sbGVyXG4gICAgICApXG4gICAgfSxcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxuICApXG59XG5cbmNvbnN0IHBsYWNlRGVzdHJveWVyID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgRGVzdHJveWVyJ1xuXG4gIGNvbnN0IGh1bWFuQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyQm9hcmQnKVxuXG4gIGNvbnN0IG9yaWVudGF0aW9uQnRuVmFsdWVzID0gY3JlYXRlT3JpZW50YXRpb25Ub2dnbGVCdG4oKVxuICBsZXQgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzBdXG4gIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlQnRuID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMV1cbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPT09IHRydWUpIHtcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBmYWxzZVxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnVmVydGljYWwnXG4gICAgfSBlbHNlIHtcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJ1xuICAgIH1cbiAgfSlcblxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgIChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgJ09yaWVudGF0aW9uIHN0YXR1cyBnb2luZyBpbnRvIHBsYWNlbWVudDonICtcbiAgICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzXG4gICAgICApXG4gICAgICBoYW5kbGVEZXN0cm95ZXJTaGlwUGxhY2VtZW50KFxuICAgICAgICBlLFxuICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzLFxuICAgICAgICBjb250cm9sbGVyXG4gICAgICApXG4gICAgfSxcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxuICApXG59XG5cbmNvbnN0IHJlbmRlclBsYXllckJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGdhbWUuZ2V0SHVtYW5Cb2FyZCgpXG4gIGNvbnN0IHBsYXllckJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckJvYXJkJylcbiAgcGxheWVyQm9hcmREaXYuaW5uZXJIVE1MID0gJydcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudFJvdyA9IHBsYXllckJvYXJkW2ldXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50Um93Lmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JvYXJkQ2VsbCcpXG4gICAgICBidXR0b24uZGF0YXNldC5yb3cgPSBpXG4gICAgICBidXR0b24uZGF0YXNldC5jb2x1bW4gPSBqXG5cbiAgICAgIHBsYXllckJvYXJkRGl2LmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgcmVuZGVyQUlCb2FyZCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYWlCb2FyZCA9IGdhbWUuZ2V0QUlCb2FyZCgpXG4gIGNvbnN0IGFpQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlCb2FyZCcpXG4gIGFpQm9hcmREaXYuaW5uZXJIVE1MID0gJydcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFpQm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjdXJyZW50Um93ID0gYWlCb2FyZFtpXVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50Um93Lmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JvYXJkQ2VsbCcpXG4gICAgICBidXR0b24uZGF0YXNldC5yb3cgPSBpXG4gICAgICBidXR0b24uZGF0YXNldC5jb2x1bW4gPSBqXG4gICAgICBjb25zdCByb3cgPSBhaUJvYXJkW2ldXG5cbiAgICAgIC8vIFVzZWQgZm9yIHRlc3RpbmcsIGFzIGl0IHJldmVhbHMgdGhlIGVuZW1pZXMgc2hpcHMgb24gdGhlIGJvYXJkXG4gICAgICAvLyB0byB0aGUgdXNlclxuICAgICAgLyogaWYgKHR5cGVvZiByb3dbal0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzaGlwQ2VsbCcpXG4gICAgICB9ICovXG4gICAgICBhaUJvYXJkRGl2LmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgdXBkYXRlSHVtYW5Cb2FyZCA9ICgpID0+IHtcbiAgY29uc3QgaHVtYW5Cb2FyZCA9IGdhbWUuZ2V0SHVtYW5Cb2FyZCgpXG4gIGNvbnN0IG1pc3NlZFNob3RzID0gZ2FtZS5nZXRIdW1hbkJvYXJkT2JqLmdldE1pc3NlZFNob3RzKClcbiAgY29uc3Qgc3VjY2Vzc2Z1bFNob3RzID0gZ2FtZS5nZXRIdW1hbkJvYXJkT2JqLmdldFN1Y2Nlc3NmdWxTaG90cygpXG4gIGNvbnN0IGFsbERvbU5vZGVzID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyQm9hcmQnKS5jaGlsZE5vZGVzXG4gIClcblxuICBtaXNzZWRTaG90cy5mb3JFYWNoKGFzeW5jIChzaG90KSA9PiB7XG4gICAgY29uc3Qgcm93ID0gc2hvdFswXVxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRG9tTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXS5kYXRhc2V0XG4gICAgICBpZiAoK3RhcmdldE5vZGUuY29sdW1uID09PSBjb2x1bW4gJiYgK3RhcmdldE5vZGUucm93ID09PSByb3cpIHtcbiAgICAgICAgYWxsRG9tTm9kZXNbaV0udGV4dENvbnRlbnQgPSAnWCdcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgc3VjY2Vzc2Z1bFNob3RzLmZvckVhY2goKHNob3QpID0+IHtcbiAgICBjb25zdCByb3cgPSBzaG90WzBdXG4gICAgY29uc3QgY29sdW1uID0gc2hvdFsxXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEb21Ob2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGFsbERvbU5vZGVzW2ldXG4gICAgICBpZiAoXG4gICAgICAgICt0YXJnZXROb2RlLmRhdGFzZXQuY29sdW1uID09PSBjb2x1bW4gJiZcbiAgICAgICAgK3RhcmdldE5vZGUuZGF0YXNldC5yb3cgPT09IHJvd1xuICAgICAgKSB7XG4gICAgICAgIHRhcmdldE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcENlbGwnKVxuICAgICAgICB0YXJnZXROb2RlLmNsYXNzTGlzdC5hZGQoJ3NoaXBIaXQnKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgdXBkYXRlQUlCb2FyZCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYWlCb2FyZCA9IGdhbWUuZ2V0QUlCb2FyZCgpXG4gIGNvbnN0IG1pc3NlZFNob3RzID0gZ2FtZS5nZXRBSUJvYXJkT2JqLmdldE1pc3NlZFNob3RzKClcbiAgY29uc3Qgc3VjY2Vzc2Z1bFNob3RzID0gZ2FtZS5nZXRBSUJvYXJkT2JqLmdldFN1Y2Nlc3NmdWxTaG90cygpXG4gIGNvbnN0IGFsbERvbU5vZGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlCb2FyZCcpLmNoaWxkTm9kZXMpXG5cbiAgbWlzc2VkU2hvdHMuZm9yRWFjaChhc3luYyAoc2hvdCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IHNob3RbMF1cbiAgICBjb25zdCBjb2x1bW4gPSBzaG90WzFdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERvbU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YXJnZXROb2RlID0gYWxsRG9tTm9kZXNbaV0uZGF0YXNldFxuICAgICAgaWYgKCt0YXJnZXROb2RlLmNvbHVtbiA9PT0gY29sdW1uICYmICt0YXJnZXROb2RlLnJvdyA9PT0gcm93KSB7XG4gICAgICAgIGFsbERvbU5vZGVzW2ldLnRleHRDb250ZW50ID0gJ1gnXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHN1Y2Nlc3NmdWxTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XG4gICAgY29uc3Qgcm93ID0gc2hvdFswXVxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRG9tTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXVxuICAgICAgaWYgKFxuICAgICAgICArdGFyZ2V0Tm9kZS5kYXRhc2V0LmNvbHVtbiA9PT0gY29sdW1uICYmXG4gICAgICAgICt0YXJnZXROb2RlLmRhdGFzZXQucm93ID09PSByb3dcbiAgICAgICkge1xuICAgICAgICB0YXJnZXROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXBDZWxsJylcbiAgICAgICAgdGFyZ2V0Tm9kZS5jbGFzc0xpc3QuYWRkKCdzaGlwSGl0JylcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGhhbmRsZUNhcnJpZXJTaGlwUGxhY2VtZW50ID0gKFxuICBlLFxuICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICBjb250cm9sbGVyXG4pID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxuXG4gIGNvbnN0IGNhcnJpZXJQbGFjZWQgPSBwbGFjZUNhcnJpZXJPbkJvYXJkKFxuICAgIGNvb3JkaW5hdGUsXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxuICApXG5cbiAgaWYgKGNhcnJpZXJQbGFjZWQpIHtcbiAgICBjb250cm9sbGVyLmFib3J0KClcbiAgICByZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuKClcbiAgICBwbGFjZUJhdHRsZVNoaXAoKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwbGFjZUNhcnJpZXJTaGlwXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlQmF0dGxlU2hpcFBsYWNlbWVudCA9IChcbiAgZSxcbiAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgY29udHJvbGxlclxuKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cblxuICBjb25zdCBiYXR0bGVzaGlwUGxhY2VkID0gcGxhY2VCYXR0bGVzaGlwT25Cb2FyZChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuXG4gIGlmIChiYXR0bGVzaGlwUGxhY2VkKSB7XG4gICAgY29udHJvbGxlci5hYm9ydCgpXG4gICAgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0bigpXG4gICAgcGxhY2VDcnVpc2VyKClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGxhY2VCYXR0bGVTaGlwXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlQ3J1aXNlclNoaXBQbGFjZW1lbnQgPSAoXG4gIGUsXG4gIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXG4gIGNvbnRyb2xsZXJcbikgPT4ge1xuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cbiAgY29uc3QgY29vcmRpbmF0ZSA9IFtzZWxlY3RlZFJvdywgc2VsZWN0ZWRDb2x1bW5dXG5cbiAgY29uc3QgY3J1aXNlclBsYWNlZCA9IHBsYWNlQ3J1aXNlck9uQm9hcmQoXG4gICAgY29vcmRpbmF0ZSxcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXG4gIClcblxuICBpZiAoY3J1aXNlclBsYWNlZCkge1xuICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxuICAgIHJlbW92ZVByZXZpb3VzT3JpZW50YXRpb25CdG4oKVxuICAgIHBsYWNlU3VibWFyaW5lKClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGxhY2VDcnVpc2VyXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlU3VibWFyaW5lU2hpcFBsYWNlbWVudCA9IChcbiAgZSxcbiAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgY29udHJvbGxlclxuKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cblxuICBjb25zdCBzdWJtYXJpbmVQbGFjZWQgPSBwbGFjZVN1Ym1hcmluZU9uQm9hcmQoXG4gICAgY29vcmRpbmF0ZSxcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXG4gIClcblxuICBpZiAoc3VibWFyaW5lUGxhY2VkKSB7XG4gICAgY29udHJvbGxlci5hYm9ydCgpXG4gICAgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0bigpXG4gICAgcGxhY2VEZXN0cm95ZXIoKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwbGFjZVN1Ym1hcmluZVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZURlc3Ryb3llclNoaXBQbGFjZW1lbnQgPSBhc3luYyAoXG4gIGUsXG4gIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXG4gIGNvbnRyb2xsZXJcbikgPT4ge1xuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cbiAgY29uc3QgY29vcmRpbmF0ZSA9IFtzZWxlY3RlZFJvdywgc2VsZWN0ZWRDb2x1bW5dXG4gIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG5cbiAgY29uc3QgZGVzdHJveWVyUGxhY2VkID0gcGxhY2VEZXN0cm95ZXJPbkJvYXJkKFxuICAgIGNvb3JkaW5hdGUsXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxuICApXG5cbiAgaWYgKGRlc3Ryb3llclBsYWNlZCkge1xuICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxuICAgIHRvcEJhckNvbnRhaW5lclBhcmEudGV4dENvbnRlbnQgPSAnJ1xuICAgIHJlbW92ZVByZXZpb3VzT3JpZW50YXRpb25CdG4oKVxuICAgIGF3YWl0IGRpc3BsYXlDb250cm9sbGVyKClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGxhY2VEZXN0cm95ZXJcbiAgfVxufVxuXG5jb25zdCBwbGFjZUNhcnJpZXJPbkJvYXJkID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgY29uc3Qgc2hpcFR5cGUgPSAnY2FycmllcidcbiAgY29uc3QgY2FycmllclBsYWNlZCA9IGdhbWUucGxhY2VDYXJyaWVyU2hpcChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuICBjb25zdCBib2FyZERPTUNlbGxzQXJyID0gW1xuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXG4gIF1cbiAgaWYgKCFjYXJyaWVyUGxhY2VkKSB7XG4gICAgcmV0dXJuIGNhcnJpZXJQbGFjZWRcbiAgfSBlbHNlIHtcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZ2V0SG9yaXpvbnRhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBnZXRWZXJ0aWNhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNhcnJpZXJQbGFjZWRcbn1cblxuY29uc3QgcGxhY2VCYXR0bGVzaGlwT25Cb2FyZCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gIGNvbnN0IHNoaXBUeXBlID0gJ2JhdHRsZXNoaXAnXG4gIGNvbnN0IGJhdHRsZXNoaXBQbGFjZWQgPSBnYW1lLnBsYWNlQmF0dGxlU2hpcChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuICBjb25zdCBib2FyZERPTUNlbGxzQXJyID0gW1xuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXG4gIF1cbiAgaWYgKCFiYXR0bGVzaGlwUGxhY2VkKSB7XG4gICAgcmV0dXJuIGJhdHRsZXNoaXBQbGFjZWRcbiAgfSBlbHNlIHtcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZ2V0SG9yaXpvbnRhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBnZXRWZXJ0aWNhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJhdHRsZXNoaXBQbGFjZWRcbn1cblxuY29uc3QgcGxhY2VDcnVpc2VyT25Cb2FyZCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gIGNvbnN0IHNoaXBUeXBlID0gJ2NydWlzZXInXG4gIGNvbnN0IGNydWlzZXJQbGFjZWQgPSBnYW1lLnBsYWNlQ3J1aXNlclNoaXAoXG4gICAgY29vcmRpbmF0ZSxcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXG4gIClcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxuICBdXG4gIGlmICghY3J1aXNlclBsYWNlZCkge1xuICAgIHJldHVybiBjcnVpc2VyUGxhY2VkXG4gIH0gZWxzZSB7XG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGdldEhvcml6b250YWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZ2V0VmVydGljYWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXG4gICAgfVxuICB9XG4gIHJldHVybiBjcnVpc2VyUGxhY2VkXG59XG5cbmNvbnN0IHBsYWNlU3VibWFyaW5lT25Cb2FyZCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gIGNvbnN0IHNoaXBUeXBlID0gJ3N1Ym1hcmluZSdcbiAgY29uc3Qgc3VibWFyaW5lUGxhY2VkID0gZ2FtZS5wbGFjZVN1Ym1hcmluZVNoaXAoXG4gICAgY29vcmRpbmF0ZSxcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXG4gIClcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxuICBdXG4gIGlmICghc3VibWFyaW5lUGxhY2VkKSB7XG4gICAgcmV0dXJuIHN1Ym1hcmluZVBsYWNlZFxuICB9IGVsc2Uge1xuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGdldFZlcnRpY2FsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3VibWFyaW5lUGxhY2VkXG59XG5cbmNvbnN0IHBsYWNlRGVzdHJveWVyT25Cb2FyZCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gIGNvbnN0IHNoaXBUeXBlID0gJ2Rlc3Ryb3llcidcbiAgY29uc3QgZGVzdHJveWVyUGxhY2VkID0gZ2FtZS5wbGFjZURlc3Ryb3llclNoaXAoXG4gICAgY29vcmRpbmF0ZSxcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXG4gIClcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxuICBdXG4gIGlmICghZGVzdHJveWVyUGxhY2VkKSB7XG4gICAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxuICB9IGVsc2Uge1xuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGdldFZlcnRpY2FsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGVzdHJveWVyUGxhY2VkXG59XG5cbmNvbnN0IGdldEhvcml6b250YWxET01Db29yZHMgPSAoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpID0+IHtcbiAgY29uc3Qgc3RhcnRpbmdDb2x1bW4gPSBOdW1iZXIoY29vcmRpbmF0ZVsxXSlcbiAgY29uc3Qgc2hpcExlbmd0aCA9XG4gICAgc2hpcFR5cGUgPT09ICdjYXJyaWVyJ1xuICAgICAgPyA1XG4gICAgICA6IHNoaXBUeXBlID09PSAnYmF0dGxlc2hpcCdcbiAgICAgID8gNFxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2NydWlzZXInXG4gICAgICA/IDNcbiAgICAgIDogc2hpcFR5cGUgPT09ICdzdWJtYXJpbmUnXG4gICAgICA/IDNcbiAgICAgIDogc2hpcFR5cGUgPT09ICdkZXN0cm95ZXInXG4gICAgICA/IDJcbiAgICAgIDogbnVsbFxuXG4gIGZvciAobGV0IGkgPSBzdGFydGluZ0NvbHVtbjsgaSA8IHN0YXJ0aW5nQ29sdW1uICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gK2Nvb3JkaW5hdGVbMF1cbiAgICBjb25zdCBjb2x1bW4gPSBpXG4gICAgY29uc3QgZG9tQ29vcmRpbmF0ZSA9IFtyb3csIGNvbHVtbl1cbiAgICBjb25zdCB0YXJnZXRET01CdG4gPSBmaW5kU2hpcERPTUJ0bihib2FyZERPTUNlbGxzQXJyLCBkb21Db29yZGluYXRlKVxuICAgIHRhcmdldERPTUJ0bi5jbGFzc0xpc3QuYWRkKCdzaGlwQ2VsbCcpXG4gIH1cbn1cblxuY29uc3QgZ2V0VmVydGljYWxET01Db29yZHMgPSAoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpID0+IHtcbiAgY29uc3Qgc3RhcnRpbmdSb3cgPSBOdW1iZXIoY29vcmRpbmF0ZVswXSlcbiAgY29uc3Qgc2hpcExlbmd0aCA9XG4gICAgc2hpcFR5cGUgPT09ICdjYXJyaWVyJ1xuICAgICAgPyA1XG4gICAgICA6IHNoaXBUeXBlID09PSAnYmF0dGxlc2hpcCdcbiAgICAgID8gNFxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2NydWlzZXInXG4gICAgICA/IDNcbiAgICAgIDogc2hpcFR5cGUgPT09ICdzdWJtYXJpbmUnXG4gICAgICA/IDNcbiAgICAgIDogc2hpcFR5cGUgPT09ICdkZXN0cm95ZXInXG4gICAgICA/IDJcbiAgICAgIDogbnVsbFxuXG4gIGZvciAobGV0IGkgPSBzdGFydGluZ1JvdzsgaSA+IHN0YXJ0aW5nUm93IC0gc2hpcExlbmd0aDsgaS0tKSB7XG4gICAgY29uc3Qgcm93ID0gaVxuICAgIGNvbnN0IGNvbHVtbiA9ICtjb29yZGluYXRlWzFdXG4gICAgY29uc3QgZG9tQ29vcmRpbmF0ZSA9IFtyb3csIGNvbHVtbl1cbiAgICBjb25zdCB0YXJnZXRET01CdG4gPSBmaW5kU2hpcERPTUJ0bihib2FyZERPTUNlbGxzQXJyLCBkb21Db29yZGluYXRlKVxuICAgIHRhcmdldERPTUJ0bi5jbGFzc0xpc3QuYWRkKCdzaGlwQ2VsbCcpXG4gIH1cbn1cblxuY29uc3QgZmluZFNoaXBET01CdG4gPSAoYm9hcmRET01DZWxsc0FyciwgZG9tQ29vcmRpbmF0ZSkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkRE9NQ2VsbHNBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkb21DZWxsUm93ID0gK2JvYXJkRE9NQ2VsbHNBcnJbaV0uZGF0YXNldC5yb3dcbiAgICBjb25zdCBkb21DZWxsQ29sdW1uID0gK2JvYXJkRE9NQ2VsbHNBcnJbaV0uZGF0YXNldC5jb2x1bW5cbiAgICBpZiAoXG4gICAgICBkb21DZWxsUm93ID09PSArZG9tQ29vcmRpbmF0ZVswXSAmJlxuICAgICAgZG9tQ2VsbENvbHVtbiA9PT0gK2RvbUNvb3JkaW5hdGVbMV1cbiAgICApIHtcbiAgICAgIHJldHVybiBib2FyZERPTUNlbGxzQXJyW2ldXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dCA9IGFzeW5jIChlLCBjb250cm9sbGVyKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gK2UudGFyZ2V0LmRhdGFzZXQucm93XG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gK2UudGFyZ2V0LmRhdGFzZXQuY29sdW1uXG4gIGNvbnN0IGFpQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlCb2FyZCcpXG5cbiAgaWYgKHNlbGVjdGVkQ29sdW1uID09PSAndW5kZWZpbmVkJyB8fCBzZWxlY3RlZFJvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0XG4gIH1cblxuICBjb250cm9sbGVyLmFib3J0KClcblxuICBjb25zdCBhaUJvYXJkID0gZ2FtZS5nZXRBSUJvYXJkT2JqXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxuICBjb25zdCBhbHJlYWR5QXR0YWNrZWQgPSBhaUJvYXJkLnByZXZlbnRTYW1lQXR0YWNrKGNvb3JkaW5hdGUpXG4gIGlmIChhbHJlYWR5QXR0YWNrZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGdhbWUucGxheVJvdW5kKGNvb3JkaW5hdGUpXG4gIGNvbnN0IGh1bWFuTW92ZVN1Y2Nlc3NmdWwgPSBnYW1lLmdldEFJQm9hcmRPYmouZ2V0TGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwoKVxuICAvLyBVc2UgdGhpcyB2YWx1ZSB3aGVuIGRldGVybWluaW5nIHdoZXRoZXIgdG8gc2hvdyBzaGlwIGFzIHN1bmtcbiAgY29uc3Qgc2hpcElzU3VuayA9IGdhbWUuaXNTaGlwU3VuaygnaHVtYW4nLCBjb29yZGluYXRlKVxuICBjb25zdCBzaGlwU3Vua1Jlc3VsdCA9IHNoaXBJc1N1bmtbMF1cbiAgaWYgKHNoaXBTdW5rUmVzdWx0KSB7XG4gICAgZGlzcGxheVN1bmtTaGlwTWVzc2FnZSgnaHVtYW4nKVxuICB9IGVsc2UgaWYgKCFzaGlwU3Vua1Jlc3VsdCkge1xuICAgIGh1bWFuTW92ZVN1Y2Nlc3NmdWxcbiAgICAgID8gZGlzcGxheVN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlKCdodW1hbicpXG4gICAgICA6IGRpc3BsYXlVbnN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlKCdodW1hbicpXG4gIH1cblxuICBjb25zdCBodW1hbldpbnMgPSBnYW1lLmNoZWNrRm9yV2luKClcblxuICB1cGRhdGVBSUJvYXJkKClcbiAgYXdhaXQgZGVsYXkoNDAwMClcbiAgaGFuZGxlV2luQ2hlY2soaHVtYW5XaW5zLCBhaUJvYXJkRGl2KVxuICBoYW5kbGVBSU1vdmUoYWlCb2FyZERpdilcbn1cblxuY29uc3QgaGFuZGxlQUlNb3ZlID0gYXN5bmMgKGFpQm9hcmREaXYpID0+IHtcbiAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgY29uc3QgZW5lbXlBdHRhY2tpbmdNc2cgPSAnRW5lbXkgaXMgYXR0YWNraW5nIHlvdXIgc2hpcHMhJ1xuICB0cmFuc2l0aW9uVGV4dENoYW5nZXMoZW5lbXlBdHRhY2tpbmdNc2csIHRvcEJhckNvbnRhaW5lclBhcmEpXG4gIGF3YWl0IGRlbGF5KDMwMDApXG4gIGNvbnN0IGd1ZXNzZWRDb29yZGluYXRlID0gZ2FtZS5wbGF5Um91bmQoKVxuICBjb25zdCBhaU1vdmVTdWNjZXNzZnVsID0gZ2FtZS5nZXRIdW1hbkJvYXJkT2JqLmdldExhc3RBSU1vdmVTdWNjZXNzZnVsKClcbiAgY29uc3Qgc2hpcElzU3VuayA9IGdhbWUuaXNTaGlwU3VuaygnY29tcHV0ZXInLCBndWVzc2VkQ29vcmRpbmF0ZSlcbiAgY29uc3Qgc2hpcFN1bmtSZXN1bHQgPSBzaGlwSXNTdW5rWzBdXG4gIGlmIChzaGlwU3Vua1Jlc3VsdCA9PT0gdHJ1ZSkge1xuICAgIGRpc3BsYXlTdW5rU2hpcE1lc3NhZ2UoJ2NvbXB1dGVyJylcbiAgfSBlbHNlIGlmICghc2hpcFN1bmtSZXN1bHQpIHtcbiAgICBhaU1vdmVTdWNjZXNzZnVsXG4gICAgICA/IGRpc3BsYXlTdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSgnY29tcHV0ZXInKVxuICAgICAgOiBkaXNwbGF5VW5zdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSgnY29tcHV0ZXInKVxuICB9XG5cbiAgY29uc3QgYWlXaW5zID0gZ2FtZS5jaGVja0ZvcldpbigpXG5cbiAgdXBkYXRlSHVtYW5Cb2FyZCgpXG4gIGF3YWl0IGRlbGF5KDI1MDApXG4gIGNvbnN0IGF0dGFja1RoZUVuZW15TXNnID0gJ0F0dGFjayB0aGUgZW5lbWllcyBzaGlwcy4uLidcbiAgdHJhbnNpdGlvblRleHRDaGFuZ2VzKGF0dGFja1RoZUVuZW15TXNnLCB0b3BCYXJDb250YWluZXJQYXJhKVxuXG4gIGF3YWl0IGRlbGF5KDM1MDApXG4gIGhhbmRsZVdpbkNoZWNrKGFpV2lucywgYWlCb2FyZERpdilcblxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gIGFpQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgIChlKSA9PiB7XG4gICAgICBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnQoZSwgY29udHJvbGxlcilcbiAgICB9LFxuICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XG4gIClcbn1cblxuY29uc3QgYW5ub3VuY2VXaW5uZXIgPSAod2lubmVyKSA9PiB7XG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG4gIGNvbnN0IHdpbm5lck5hbWUgPSB3aW5uZXIuZ2V0TmFtZSgpXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSBgJHt3aW5uZXJOYW1lfSB3aW4ncyFgXG59XG5cbmNvbnN0IHBsYXlBZ2FpbiA9ICgpID0+IHtcbiAgY29uc3QgdG9wQmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lcicpXG4gIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIHBsYXlBZ2FpbkJ0bi50ZXh0Q29udGVudCA9ICdQbGF5IGFnYWluJ1xuICB0b3BCYXJEaXYuYXBwZW5kQ2hpbGQocGxheUFnYWluQnRuKVxuICBwbGF5QWdhaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydE5ld0dhbWUpXG59XG5cbmNvbnN0IHN0YXJ0TmV3R2FtZSA9ICgpID0+IHtcbiAgY29uc3QgdG9wQmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lcicpXG4gIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBidXR0b24nKVxuICB0b3BCYXJEaXYucmVtb3ZlQ2hpbGQocGxheUFnYWluQnRuKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpLnRleHRDb250ZW50ID0gJydcbiAgZGlzcGxheUNvbnRyb2xsZXIoKVxufVxuXG4vLyBGb3IgZWFjaCBvZiB0aGUgcGxhY2Ugc2hpcCBmdW5jdGlvbnMsIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZSBwcmV2aW91c1xuLy8gb3JpZW50YXRpb24gdG9nZ2xlIGJ1dHRvbiB0byBwcmV2ZW50IHRoZSBzYW1lIGxpc3RlbmVyIGZpcmluZyBmb3IgZWFjaCBvZiB0aGVcbi8vIHByZXZpb3VzIG9yaWVudGF0aW9uIHRvZ2dsZSBidXR0b25zXG5jb25zdCByZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyJylcbiAgY29uc3QgcHJldmlvdXNPcmllbnRhdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmllbnRhdGlvblRvZ2dsZUJ0bicpXG4gIHRvcEJhckRpdi5yZW1vdmVDaGlsZChwcmV2aW91c09yaWVudGF0aW9uQnRuKVxufVxuXG5jb25zdCBjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0biA9ICgpID0+IHtcbiAgY29uc3QgdG9wQmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lcicpXG4gIGNvbnN0IGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXG4gIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4uY2xhc3NMaXN0LmFkZCgnb3JpZW50YXRpb25Ub2dnbGVCdG4nKVxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJ1xuICB0b3BCYXJEaXYuYXBwZW5kQ2hpbGQob3JpZW50YXRpb25Ub2dnbGVCdG4pXG5cbiAgcmV0dXJuIFtob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzLCBvcmllbnRhdGlvblRvZ2dsZUJ0bl1cbn1cblxuY29uc3QgZGlzcGxheVN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlID0gKHBsYXllcikgPT4ge1xuICBpZiAocGxheWVyID09PSAnaHVtYW4nKSB7XG4gICAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgICBjb25zdCBhdHRhY2tBbmRIaXRNc2cgPSAnWW91IGF0dGFja2VkIHRoZSBlbmVteS4uLiBhbmQgaGl0IHRoZWlyIHNoaXAhJ1xuICAgIHNldFRpbWVvdXQodHJhbnNpdGlvblRleHRDaGFuZ2VzLCAxMCwgYXR0YWNrQW5kSGl0TXNnLCB0b3BCYXJDb250YWluZXJQYXJhKVxuICB9IGVsc2UgaWYgKHBsYXllciA9PT0gJ2NvbXB1dGVyJykge1xuICAgIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG4gICAgY29uc3QgZW5lbXlIaXRNc2cgPSAnVGhlIGVuZW15IGxhdW5jaGVkIGFuIGF0dGFjay4uLiBhbmQgaGl0IHlvdXIgc2hpcCEnXG4gICAgc2V0VGltZW91dCh0cmFuc2l0aW9uVGV4dENoYW5nZXMsIDEwLCBlbmVteUhpdE1zZywgdG9wQmFyQ29udGFpbmVyUGFyYSlcbiAgfVxufVxuXG5jb25zdCBkaXNwbGF5VW5zdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSA9IChwbGF5ZXIpID0+IHtcbiAgaWYgKHBsYXllciA9PT0gJ2h1bWFuJykge1xuICAgIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG4gICAgY29uc3QgdW5zdWNjZXNzZnVsQXR0YWNrTXNnID0gJ1lvdXIgYXR0YWNrIG9uIHRoZSBlbmVteSB3YXMgdW5zdWNjZXNzZnVsJ1xuICAgIHNldFRpbWVvdXQoXG4gICAgICB0cmFuc2l0aW9uVGV4dENoYW5nZXMsXG4gICAgICAxMCxcbiAgICAgIHVuc3VjY2Vzc2Z1bEF0dGFja01zZyxcbiAgICAgIHRvcEJhckNvbnRhaW5lclBhcmFcbiAgICApXG4gIH0gZWxzZSBpZiAocGxheWVyID09PSAnY29tcHV0ZXInKSB7XG4gICAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgICBjb25zdCB1bnN1Y2Nlc3NmdWxFbmVteUF0dGFja01zZyA9ICdUaGUgZW5lbWllcyBhdHRhY2sgd2FzIHVuc3VjY2Vzc2Z1bCdcbiAgICBzZXRUaW1lb3V0KFxuICAgICAgdHJhbnNpdGlvblRleHRDaGFuZ2VzLFxuICAgICAgMTAsXG4gICAgICB1bnN1Y2Nlc3NmdWxFbmVteUF0dGFja01zZyxcbiAgICAgIHRvcEJhckNvbnRhaW5lclBhcmFcbiAgICApXG4gIH1cbn1cblxuY29uc3QgZGlzcGxheVN1bmtTaGlwTWVzc2FnZSA9IChwbGF5ZXIpID0+IHtcbiAgaWYgKHBsYXllciA9PT0gJ2h1bWFuJykge1xuICAgIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG4gICAgY29uc3Qgc3Vua1NoaXBNZXNzYWdlID0gJ1lvdSBoYXZlIHN1bmsgdGhlIGVuZW1pZXMgc2hpcCEnXG4gICAgc2V0VGltZW91dCh0cmFuc2l0aW9uVGV4dENoYW5nZXMsIDEwLCBzdW5rU2hpcE1lc3NhZ2UsIHRvcEJhckNvbnRhaW5lclBhcmEpXG4gIH0gZWxzZSBpZiAocGxheWVyID09PSAnY29tcHV0ZXInKSB7XG4gICAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgICBjb25zdCBzdW5rU2hpcE1lc3NhZ2UgPSAnVGhlIGVuZW15IHN1bmsgb25lIG9mIHlvdXIgc2hpcHMhJ1xuICAgIHNldFRpbWVvdXQodHJhbnNpdGlvblRleHRDaGFuZ2VzLCAxMCwgc3Vua1NoaXBNZXNzYWdlLCB0b3BCYXJDb250YWluZXJQYXJhKVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZVdpbkNoZWNrID0gKHdpbkNoZWNrLCBib2FyZERpdikgPT4ge1xuICBpZiAod2luQ2hlY2spIHtcbiAgICBib2FyZERpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dClcbiAgICBnYW1lLnJlc2V0R2FtZVN0YXRlKClcbiAgICBhbm5vdW5jZVdpbm5lcih3aW5DaGVjaylcbiAgICBwbGF5QWdhaW4oKVxuICB9XG59XG5cbmNvbnN0IHRyYW5zaXRpb25UZXh0Q2hhbmdlcyA9IGFzeW5jIChuZXdNZXNzYWdlLCBkb21FbGVtZW50KSA9PiB7XG4gIGRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJylcbiAgYXdhaXQgZGVsYXkoNDAwKVxuICBkb21FbGVtZW50LnRleHRDb250ZW50ID0gbmV3TWVzc2FnZVxuICBhd2FpdCBkZWxheSg0MDApXG4gIGRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJylcbn1cblxuLy8gY29uc3QgaGFuZGxlUGxheWVyU2VsZXRpb25cblxuZXhwb3J0IHsgcmVuZGVyUGxheWVyQm9hcmQsIHJlbmRlckFJQm9hcmQsIGRpc3BsYXlDb250cm9sbGVyLCBwcmVHYW1lU2V0dXAgfVxuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi4vZmFjdG9yaWVzL0dhbWVib2FyZCdcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL2ZhY3Rvcmllcy9QbGF5ZXInXG5pbXBvcnQgeyBhcnJheXNBcmVFcXVhbCB9IGZyb20gJy4uL2hlbHBlcnMvYXJyYXlzQXJlRXF1YWwnXG5pbXBvcnQgeyByZXR1cm5SYW5kb21BSUJvYXJkIH0gZnJvbSAnLi4vaGVscGVycy9yb3RhdGVBSUJvYXJkcydcblxuY29uc3QgZ2FtZUNvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIC8vIENyZWF0ZSB0d28gZ2FtZSBib2FyZHNcbiAgY29uc3QgaHVtYW5Cb2FyZCA9IEdhbWVib2FyZCgpXG4gIGh1bWFuQm9hcmQuY3JlYXRlR2FtZUJvYXJkKClcblxuICBjb25zdCBhaUJvYXJkID0gR2FtZWJvYXJkKClcbiAgYWlCb2FyZC5jcmVhdGVHYW1lQm9hcmQoKVxuXG4gIGNvbnN0IHBsYWNlQ2FycmllclNoaXAgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xuICAgIGxldCBjYXJyaWVyUGxhY2VkID0gdHJ1ZVxuXG4gICAgY29uc3QgY2FycmllckFyciA9IGRldGVybWluZUNhcnJpZXJBcnJDb29yZHMoXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICAgICAgY29vcmRpbmF0ZVxuICAgIClcblxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChjYXJyaWVyQXJyKVxuICAgIGlmICghc2hpcFBsYWNlZCkge1xuICAgICAgY2FycmllclBsYWNlZCA9IGZhbHNlXG4gICAgICByZXR1cm4gY2FycmllclBsYWNlZFxuICAgIH1cblxuICAgIHJldHVybiBjYXJyaWVyUGxhY2VkXG4gIH1cblxuICBjb25zdCBkZXRlcm1pbmVDYXJyaWVyQXJyQ29vcmRzID0gKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sIGNvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBjYXJyaWVyQXJyID0gW11cbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgY2FycmllckFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDU7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFtjb29yZGluYXRlWzBdLCAoK2Nvb3JkaW5hdGVbMV0gKyBpKS50b1N0cmluZygpXVxuICAgICAgICBjYXJyaWVyQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgY2FycmllckFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDU7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFsoK2Nvb3JkaW5hdGVbMF0gLSBpKS50b1N0cmluZygpLCBjb29yZGluYXRlWzFdXVxuICAgICAgICBjYXJyaWVyQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjYXJyaWVyQXJyXG4gIH1cblxuICBjb25zdCBwbGFjZUJhdHRsZVNoaXAgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xuICAgIGxldCBiYXR0bGVzaGlwUGxhY2VkID0gdHJ1ZVxuICAgIGNvbnN0IGJhdHRsZXNoaXBBcnIgPSBkZXRlcm1pbmVCYXR0bGVzaGlwQXJyQ29vcmRzKFxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgICAgIGNvb3JkaW5hdGVcbiAgICApXG5cbiAgICBjb25zdCBzaGlwUGxhY2VkID0gaHVtYW5Cb2FyZC5wbGFjZVNoaXAoYmF0dGxlc2hpcEFycilcbiAgICBpZiAoIXNoaXBQbGFjZWQpIHtcbiAgICAgIGJhdHRsZXNoaXBQbGFjZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIGJhdHRsZXNoaXBQbGFjZWRcbiAgICB9XG5cbiAgICByZXR1cm4gYmF0dGxlc2hpcFBsYWNlZFxuICB9XG5cbiAgY29uc3QgZGV0ZXJtaW5lQmF0dGxlc2hpcEFyckNvb3JkcyA9IChcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICAgIGNvb3JkaW5hdGVcbiAgKSA9PiB7XG4gICAgY29uc3QgYmF0dGxlc2hpcEFyciA9IFtdXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGJhdHRsZXNoaXBBcnIucHVzaChjb29yZGluYXRlKVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cbiAgICAgICAgYmF0dGxlc2hpcEFyci5wdXNoKGNvb3JkKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGJhdHRsZXNoaXBBcnIucHVzaChjb29yZGluYXRlKVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBbKCtjb29yZGluYXRlWzBdIC0gaSkudG9TdHJpbmcoKSwgY29vcmRpbmF0ZVsxXV1cbiAgICAgICAgYmF0dGxlc2hpcEFyci5wdXNoKGNvb3JkKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmF0dGxlc2hpcEFyclxuICB9XG5cbiAgY29uc3QgcGxhY2VDcnVpc2VyU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gICAgbGV0IGNydWlzZXJQbGFjZWQgPSB0cnVlXG4gICAgY29uc3QgY3J1aXNlckFyciA9IGRldGVybWluZUNydWlzZXJBcnJDb29yZHMoXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICAgICAgY29vcmRpbmF0ZVxuICAgIClcblxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChjcnVpc2VyQXJyKVxuICAgIGlmICghc2hpcFBsYWNlZCkge1xuICAgICAgY3J1aXNlclBsYWNlZCA9IGZhbHNlXG4gICAgICByZXR1cm4gY3J1aXNlclBsYWNlZFxuICAgIH1cblxuICAgIHJldHVybiBjcnVpc2VyUGxhY2VkXG4gIH1cblxuICBjb25zdCBkZXRlcm1pbmVDcnVpc2VyQXJyQ29vcmRzID0gKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sIGNvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBjcnVpc2VyQXJyID0gW11cbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgY3J1aXNlckFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFtjb29yZGluYXRlWzBdLCAoK2Nvb3JkaW5hdGVbMV0gKyBpKS50b1N0cmluZygpXVxuICAgICAgICBjcnVpc2VyQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgY3J1aXNlckFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFsoK2Nvb3JkaW5hdGVbMF0gLSBpKS50b1N0cmluZygpLCBjb29yZGluYXRlWzFdXVxuICAgICAgICBjcnVpc2VyQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjcnVpc2VyQXJyXG4gIH1cblxuICBjb25zdCBwbGFjZVN1Ym1hcmluZVNoaXAgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xuICAgIGxldCBzdWJtYXJpbmVQbGFjZWQgPSB0cnVlXG4gICAgY29uc3Qgc3VibWFyaW5lQXJyID0gZGV0ZXJtaW5lU3VibWFyaW5lQXJyQ29vcmRzKFxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgICAgIGNvb3JkaW5hdGVcbiAgICApXG5cbiAgICBjb25zdCBzaGlwUGxhY2VkID0gaHVtYW5Cb2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lQXJyKVxuICAgIGlmICghc2hpcFBsYWNlZCkge1xuICAgICAgc3VibWFyaW5lUGxhY2VkID0gZmFsc2VcbiAgICAgIHJldHVybiBzdWJtYXJpbmVQbGFjZWRcbiAgICB9XG5cbiAgICByZXR1cm4gc3VibWFyaW5lUGxhY2VkXG4gIH1cblxuICBjb25zdCBkZXRlcm1pbmVTdWJtYXJpbmVBcnJDb29yZHMgPSAoXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgICBjb29yZGluYXRlXG4gICkgPT4ge1xuICAgIGNvbnN0IHN1Ym1hcmluZUFyciA9IFtdXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIHN1Ym1hcmluZUFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFtjb29yZGluYXRlWzBdLCAoK2Nvb3JkaW5hdGVbMV0gKyBpKS50b1N0cmluZygpXVxuICAgICAgICBzdWJtYXJpbmVBcnIucHVzaChjb29yZClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBzdWJtYXJpbmVBcnIucHVzaChjb29yZGluYXRlKVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBbKCtjb29yZGluYXRlWzBdIC0gaSkudG9TdHJpbmcoKSwgY29vcmRpbmF0ZVsxXV1cbiAgICAgICAgc3VibWFyaW5lQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdWJtYXJpbmVBcnJcbiAgfVxuXG4gIGNvbnN0IHBsYWNlRGVzdHJveWVyU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gICAgbGV0IGRlc3Ryb3llclBsYWNlZCA9IHRydWVcbiAgICBjb25zdCBkZXN0cm95ZXJBcnIgPSBkZXRlcm1pbmVEZXN0cm95ZXJBcnJDb29yZHMoXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICAgICAgY29vcmRpbmF0ZVxuICAgIClcblxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChkZXN0cm95ZXJBcnIpXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XG4gICAgICBkZXN0cm95ZXJQbGFjZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxuICAgIH1cblxuICAgIHJldHVybiBkZXN0cm95ZXJQbGFjZWRcbiAgfVxuXG4gIGNvbnN0IGRldGVybWluZURlc3Ryb3llckFyckNvb3JkcyA9IChcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICAgIGNvb3JkaW5hdGVcbiAgKSA9PiB7XG4gICAgY29uc3QgZGVzdHJveWVyQXJyID0gW11cbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZGVzdHJveWVyQXJyLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gW2Nvb3JkaW5hdGVbMF0sICgrY29vcmRpbmF0ZVsxXSArIGkpLnRvU3RyaW5nKCldXG4gICAgICAgIGRlc3Ryb3llckFyci5wdXNoKGNvb3JkKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGRlc3Ryb3llckFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDI7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFsoK2Nvb3JkaW5hdGVbMF0gLSBpKS50b1N0cmluZygpLCBjb29yZGluYXRlWzFdXVxuICAgICAgICBkZXN0cm95ZXJBcnIucHVzaChjb29yZClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlc3Ryb3llckFyclxuICB9XG5cbiAgY29uc3QgcGxhY2VBSVNoaXBzID0gKCkgPT4ge1xuICAgIHBsYWNlU2hpcHMoYWlCb2FyZCwgcmV0dXJuUmFuZG9tQUlCb2FyZCgpKVxuICB9XG5cbiAgY29uc3QgcGxheWVycyA9IHt9XG5cbiAgY29uc3QgZ2V0UGxheWVycyA9ICgpID0+IHtcbiAgICByZXR1cm4gcGxheWVyc1xuICB9XG5cbiAgY29uc3QgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIoJ0h1bWFuJywgZmFsc2UpXG4gIGNvbnN0IGFpUGxheWVyID0gUGxheWVyKCdBSScsIHRydWUpXG4gIHBsYXllcnMuaHVtYW4gPSBodW1hblBsYXllclxuICBwbGF5ZXJzLkFJID0gYWlQbGF5ZXJcblxuICBsZXQgY3VycmVudFBsYXllciA9IHBsYXllcnMuaHVtYW5cblxuICBjb25zdCBnZXRDdXJyZW50UGxheWVyID0gKCkgPT4ge1xuICAgIHJldHVybiBjdXJyZW50UGxheWVyXG4gIH1cblxuICBjb25zdCBwbGF5Um91bmQgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGlmIChjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5odW1hbi5nZXROYW1lKCkpIHtcbiAgICAgIGFpQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKVxuICAgICAgc3dpdGNoUGxheWVyKClcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpID09PSBwbGF5ZXJzLkFJLmdldE5hbWUoKSkge1xuICAgICAgY29uc3QgbmV4dE1vdmUgPSBjb21wdXRlcnNOZXh0TW92ZSgpXG4gICAgICBodW1hbkJvYXJkLnJlY2VpdmVBdHRhY2sobmV4dE1vdmUpXG4gICAgICBodW1hbkJvYXJkLnJlbW92ZUxhc3RBSU1vdmUobmV4dE1vdmUpXG4gICAgICBzd2l0Y2hQbGF5ZXIoKVxuICAgICAgcmV0dXJuIG5leHRNb3ZlXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY29tcHV0ZXJzTmV4dE1vdmUgPSAoKSA9PiB7XG4gICAgY29uc3QgYXZhaWxhYmxlTW92ZXMgPSBodW1hbkJvYXJkLmdldEFJQXZhaWxhYmxlTW92ZXMoKVxuICAgIGNvbnN0IGxhc3RBSU1vdmVTdWNjZXNzZnVsID0gaHVtYW5Cb2FyZC5nZXRMYXN0QUlNb3ZlU3VjY2Vzc2Z1bCgpXG4gICAgaWYgKGxhc3RBSU1vdmVTdWNjZXNzZnVsKSB7XG4gICAgICBjb25zdCBhZGphY2VudFNsb3RzID0gY3VycmVudFBsYXllci5nZXRBZGphY2VudFNsb3RzKFxuICAgICAgICB0cnVlLFxuICAgICAgICBhdmFpbGFibGVNb3ZlcyxcbiAgICAgICAgaHVtYW5Cb2FyZC5nZXRTdWNjZXNzZnVsU2hvdHMoKSxcbiAgICAgICAgaHVtYW5Cb2FyZC5nZXRNaXNzZWRTaG90cygpXG4gICAgICApXG4gICAgICBodW1hbkJvYXJkLmFkZEFkamFjZW50U2xvdHNUb1F1ZXVlKGFkamFjZW50U2xvdHMpXG4gICAgICBjb25zdCBuZXh0TW92ZSA9IGh1bWFuQm9hcmQuZ2V0QWRqYWNlbnRRdWV1ZVNsb3QoKVxuICAgICAgcmV0dXJuIG5leHRNb3ZlXG4gICAgfSBlbHNlIGlmICghbGFzdEFJTW92ZVN1Y2Nlc3NmdWwpIHtcbiAgICAgIGNvbnN0IHJhbmRvbU1vdmUgPSBjdXJyZW50UGxheWVyLm1ha2VSYW5kb21Nb3ZlKHRydWUsIGF2YWlsYWJsZU1vdmVzKVxuICAgICAgcmV0dXJuIHJhbmRvbU1vdmVcbiAgICB9XG4gIH1cblxuICBjb25zdCBzd2l0Y2hQbGF5ZXIgPSAoKSA9PiB7XG4gICAgY3VycmVudFBsYXllciA9XG4gICAgICBjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5odW1hbi5nZXROYW1lKClcbiAgICAgICAgPyAoY3VycmVudFBsYXllciA9IHBsYXllcnMuQUkpXG4gICAgICAgIDogKGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzLmh1bWFuKVxuICB9XG5cbiAgY29uc3QgY2hlY2tGb3JXaW4gPSAoKSA9PiB7XG4gICAgbGV0IHdpbm5lclxuICAgIGlmIChcbiAgICAgIGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpID09PSBwbGF5ZXJzLmh1bWFuLmdldE5hbWUoKSAmJlxuICAgICAgYWlCb2FyZC5hbGxTaGlwc1N1bmsoKVxuICAgICkge1xuICAgICAgd2lubmVyID0gY3VycmVudFBsYXllclxuICAgICAgcmV0dXJuIHdpbm5lclxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5BSS5nZXROYW1lKCkgJiZcbiAgICAgIGh1bWFuQm9hcmQuYWxsU2hpcHNTdW5rKClcbiAgICApIHtcbiAgICAgIHdpbm5lciA9IGN1cnJlbnRQbGF5ZXJcbiAgICAgIHJldHVybiB3aW5uZXJcbiAgICB9XG4gICAgcmV0dXJuIHdpbm5lclxuICB9XG5cbiAgY29uc3QgaXNTaGlwU3VuayA9IChwbGF5ZXIsIGNvb3JkaW5hdGUpID0+IHtcbiAgICBsZXQgc2hpcElzU3Vua1xuICAgIGlmIChwbGF5ZXIgPT09ICdodW1hbicpIHtcbiAgICAgIGNvbnN0IGxhc3RTdWNjZXNzZnVsSHVtYW5Nb3ZlID0gYWlCb2FyZC5nZXRMYXN0U3VjY2Vzc2Z1bE1vdmUoKVxuICAgICAgaWYgKFxuICAgICAgICBsYXN0U3VjY2Vzc2Z1bEh1bWFuTW92ZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIGxhc3RTdWNjZXNzZnVsSHVtYW5Nb3ZlICE9PSBjb29yZGluYXRlXG4gICAgICApIHtcbiAgICAgICAgc2hpcElzU3VuayA9IGZhbHNlXG4gICAgICAgIHJldHVybiBbc2hpcElzU3Vua11cbiAgICAgIH1cbiAgICAgIGNvbnN0IGdhbWVCb2FyZCA9IGFpQm9hcmQuZ2V0Qm9hcmQoKVxuICAgICAgY29uc3QgdGFyZ2V0U2hpcE9iaiA9XG4gICAgICAgIGdhbWVCb2FyZFtsYXN0U3VjY2Vzc2Z1bEh1bWFuTW92ZVswXV1bbGFzdFN1Y2Nlc3NmdWxIdW1hbk1vdmVbMV1dXG4gICAgICBzaGlwSXNTdW5rID0gdGFyZ2V0U2hpcE9iai5oYXNCZWVuU3VuaygpXG4gICAgICByZXR1cm4gW3NoaXBJc1N1bmssIHRhcmdldFNoaXBPYmosIGxhc3RTdWNjZXNzZnVsSHVtYW5Nb3ZlXVxuICAgIH0gZWxzZSBpZiAocGxheWVyID09PSAnY29tcHV0ZXInKSB7XG4gICAgICBjb25zdCBsYXN0U3VjY2Vzc2Z1bEFJTW92ZSA9IGh1bWFuQm9hcmQuZ2V0TGFzdFN1Y2Nlc3NmdWxNb3ZlKClcbiAgICAgIGlmIChcbiAgICAgICAgbGFzdFN1Y2Nlc3NmdWxBSU1vdmUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBsYXN0U3VjY2Vzc2Z1bEFJTW92ZSAhPT0gY29vcmRpbmF0ZVxuICAgICAgKSB7XG4gICAgICAgIHNoaXBJc1N1bmsgPSBmYWxzZVxuICAgICAgICByZXR1cm4gW3NoaXBJc1N1bmtdXG4gICAgICB9XG4gICAgICBjb25zdCBnYW1lQm9hcmQgPSBodW1hbkJvYXJkLmdldEJvYXJkKClcbiAgICAgIGNvbnN0IHRhcmdldFNoaXBPYmogPVxuICAgICAgICBnYW1lQm9hcmRbbGFzdFN1Y2Nlc3NmdWxBSU1vdmVbMF1dW2xhc3RTdWNjZXNzZnVsQUlNb3ZlWzFdXVxuICAgICAgc2hpcElzU3VuayA9IHRhcmdldFNoaXBPYmouaGFzQmVlblN1bmsoKVxuXG4gICAgICByZXR1cm4gW3NoaXBJc1N1bmssIHRhcmdldFNoaXBPYmosIGxhc3RTdWNjZXNzZnVsQUlNb3ZlXVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlc2V0R2FtZVN0YXRlID0gKHdpbm5lcikgPT4ge1xuICAgIGh1bWFuQm9hcmQuY2xlYXJHYW1lQm9hcmQoKVxuICAgIGFpQm9hcmQuY2xlYXJHYW1lQm9hcmQoKVxuICAgIGh1bWFuQm9hcmQuY3JlYXRlR2FtZUJvYXJkKClcbiAgICBhaUJvYXJkLmNyZWF0ZUdhbWVCb2FyZCgpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldEh1bWFuQm9hcmQ6IGh1bWFuQm9hcmQuZ2V0Qm9hcmQsXG4gICAgZ2V0QUlCb2FyZDogYWlCb2FyZC5nZXRCb2FyZCxcbiAgICBnZXRBSUJvYXJkT2JqOiBhaUJvYXJkLFxuICAgIGdldEh1bWFuQm9hcmRPYmo6IGh1bWFuQm9hcmQsXG4gICAgc3dpdGNoUGxheWVyLFxuICAgIHBsYXlSb3VuZCxcbiAgICBnZXRDdXJyZW50UGxheWVyLFxuICAgIHJlc2V0R2FtZVN0YXRlLFxuICAgIGNoZWNrRm9yV2luLFxuICAgIGdldFBsYXllcnMsXG4gICAgcGxhY2VBSVNoaXBzLFxuICAgIHBsYWNlQ2FycmllclNoaXAsXG4gICAgcGxhY2VCYXR0bGVTaGlwLFxuICAgIHBsYWNlQ3J1aXNlclNoaXAsXG4gICAgcGxhY2VTdWJtYXJpbmVTaGlwLFxuICAgIHBsYWNlRGVzdHJveWVyU2hpcCxcbiAgICBpc1NoaXBTdW5rXG4gIH1cbn1cblxuZXhwb3J0IHsgZ2FtZUNvbnRyb2xsZXIgfVxuXG5jb25zdCBwbGFjZVNoaXBzID0gKGJvYXJkLCBjb29yZGluYXRlc09iaikgPT4ge1xuICBjb25zdCBzaGlwQ29vcmRpbmF0ZXNBcnIgPSBPYmplY3QudmFsdWVzKGNvb3JkaW5hdGVzT2JqKVxuICBzaGlwQ29vcmRpbmF0ZXNBcnIuZm9yRWFjaCgoc2hpcENvb3JkaW5hdGVzKSA9PiB7XG4gICAgYm9hcmQucGxhY2VTaGlwKHNoaXBDb29yZGluYXRlcylcbiAgfSlcbn1cblxuLyogY29uc3QgcGxhY2VFYWNoSHVtYW5TaGlwID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgaHVtYW5Cb2FyZC5wbGFjZVNoaXAoY29vcmRpbmF0ZSlcbn0gKi9cbiIsImltcG9ydCB7IGFycmF5c0FyZUVxdWFsIH0gZnJvbSAnLi4vaGVscGVycy9hcnJheXNBcmVFcXVhbCdcbmltcG9ydCB7IFNoaXAgfSBmcm9tICcuL1NoaXAnXG5cbmV4cG9ydCBjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcbiAgbGV0IGJvYXJkID0gW11cbiAgY29uc3Qgc2hpcE9iamVjdHMgPSBbXVxuICBjb25zdCBtaXNzZWRTaG90cyA9IFtdXG4gIGNvbnN0IGFpQXZhaWxhYmxlTW92ZXMgPSBbXVxuICBjb25zdCBzdWNjZXNzZnVsU2hvdHMgPSBbXVxuICBsZXQgYWRqYWNlbnRTbG90c1F1ZXVlID0gW11cbiAgY29uc3Qgcm93cyA9IDlcbiAgY29uc3QgY29sdW1ucyA9IDlcbiAgbGV0IGxhc3RBSU1vdmVTdWNjZXNzZnVsID0gZmFsc2VcbiAgbGV0IGxhc3RIdW1hbk1vdmVTdWNjZXNzZnVsID0gZmFsc2VcblxuICBjb25zdCBjcmVhdGVHYW1lQm9hcmQgPSAoKSA9PiB7XG4gICAgYm9hcmQgPSBbXVxuICAgIGZvciAobGV0IGkgPSByb3dzOyBpID49IDA7IGktLSkge1xuICAgICAgYm9hcmRbaV0gPSBbXVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gY29sdW1uczsgaisrKSB7XG4gICAgICAgIGJvYXJkW2ldLnB1c2godW5kZWZpbmVkKVxuICAgICAgICBjb25zdCBjb29yZGluYXRlID0gW2ksIGpdXG4gICAgICAgIGFpQXZhaWxhYmxlTW92ZXMucHVzaChjb29yZGluYXRlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGNoZWNrcyBpZiBjb29yZGluYXRlcyBmb3Igc2hpcCBpcyBvbiB0aGVcbiAgLy8gZ2FtZSBib2FyZFxuICBjb25zdCB2YWxpZGF0ZUNvb3JkaW5hdGVzID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgbGV0IHZhbGlkQ29vcmRpbmF0ZXMgPSB0cnVlXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZVswXVxuICAgICAgY29uc3QgY29sdW1uID0gY29vcmRpbmF0ZVsxXVxuICAgICAgaWYgKHJvdyA+IDkgfHwgcm93IDwgMCkge1xuICAgICAgICB2YWxpZENvb3JkaW5hdGVzID0gZmFsc2VcbiAgICAgICAgcmV0dXJuIHZhbGlkQ29vcmRpbmF0ZXNcbiAgICAgIH0gZWxzZSBpZiAoY29sdW1uID4gOSB8fCBjb2x1bW4gPCAwKSB7XG4gICAgICAgIHZhbGlkQ29vcmRpbmF0ZXMgPSBmYWxzZVxuICAgICAgICByZXR1cm4gdmFsaWRDb29yZGluYXRlc1xuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gdmFsaWRDb29yZGluYXRlc1xuICB9XG5cbiAgLy8gY2hlY2tzIGlmIHNoaXAgY29vcmRpbmF0ZXMgb3ZlcmxhcCB3aXRoIGFscmVhZHlcbiAgLy8gcGxhY2VkIHNoaXAgY29vcmRpbmF0ZXMgZm9yIHRoZSBzYW1lIHNoaXBcbiAgY29uc3QgY2hlY2tTZWxmT3ZlcmxhcCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGxldCBjb29yZGluYXRlc092ZXJsYXAgPSBmYWxzZVxuICAgIGxldCBwcmV2Q29vcmRpbmF0ZVxuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgIGlmIChhcnJheXNBcmVFcXVhbChwcmV2Q29vcmRpbmF0ZSwgY29vcmRpbmF0ZSkpIHtcbiAgICAgICAgICBjb29yZGluYXRlc092ZXJsYXAgPSB0cnVlXG4gICAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzT3ZlcmxhcFxuICAgICAgICB9XG4gICAgICAgIHByZXZDb29yZGluYXRlID0gY29vcmRpbmF0ZVxuICAgICAgfVxuICAgICAgcHJldkNvb3JkaW5hdGUgPSBjb29yZGluYXRlXG4gICAgfSlcblxuICAgIHJldHVybiBjb29yZGluYXRlc092ZXJsYXBcbiAgfVxuXG4gIC8vIFNob3VsZCBwcmV2ZW50IGEgc2hpcCBmcm9tIGJlaW5nXG4gIC8vIHBsYWNlZCBvbiB0b3Agb2YgYW5vdGhlciBzaGlwXG4gIGNvbnN0IGNoZWNrT3ZlcmxhcFdpdGhPdGhlclNoaXBzID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgbGV0IHNoaXBzT3ZlcmxhcCA9IGZhbHNlXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZVswXVxuICAgICAgY29uc3QgY29sdW1uID0gY29vcmRpbmF0ZVsxXVxuICAgICAgY29uc3QgYm9hcmRDZWxsID0gYm9hcmRbcm93XVtjb2x1bW5dXG4gICAgICBpZiAodHlwZW9mIGJvYXJkQ2VsbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgc2hpcHNPdmVybGFwID0gdHJ1ZVxuICAgICAgICByZXR1cm4gc2hpcHNPdmVybGFwXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBzaGlwc092ZXJsYXBcbiAgfVxuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGxldCBzaGlwUGxhY2VkID0gdHJ1ZVxuXG4gICAgY29uc3QgbGVnYWxDb29yZGluYXRlcyA9IHZhbGlkYXRlQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpXG4gICAgaWYgKCFsZWdhbENvb3JkaW5hdGVzKSB7XG4gICAgICBzaGlwUGxhY2VkID0gZmFsc2VcbiAgICAgIHJldHVybiBzaGlwUGxhY2VkXG4gICAgfVxuXG4gICAgY29uc3Qgb3ZlcmxhcHBpbmdDb29yZGluYXRlcyA9IGNoZWNrU2VsZk92ZXJsYXAoY29vcmRpbmF0ZXMpXG4gICAgaWYgKG92ZXJsYXBwaW5nQ29vcmRpbmF0ZXMpIHtcbiAgICAgIHNoaXBQbGFjZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIHNoaXBQbGFjZWRcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwT3ZlcmxhcHBpbmcgPSBjaGVja092ZXJsYXBXaXRoT3RoZXJTaGlwcyhjb29yZGluYXRlcylcbiAgICBpZiAoc2hpcE92ZXJsYXBwaW5nKSB7XG4gICAgICBzaGlwUGxhY2VkID0gZmFsc2VcbiAgICAgIHJldHVybiBzaGlwUGxhY2VkXG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IGNvb3JkaW5hdGVzLmxlbmd0aFxuICAgIGNvbnN0IHNoaXBPYmplY3QgPSBTaGlwKHNoaXBMZW5ndGgsIDAsIGZhbHNlKVxuICAgIHNoaXBPYmplY3RzLnB1c2goc2hpcE9iamVjdClcblxuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVbMF1cbiAgICAgIGNvbnN0IGNvbHVtbiA9IGNvb3JkaW5hdGVbMV1cbiAgICAgIGJvYXJkW3Jvd11bY29sdW1uXSA9IHNoaXBPYmplY3RcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNoaXBQbGFjZWRcbiAgfVxuXG4gIC8vIHByZXZlbnRzIGh1bWFuIHBsYXllciBmcm9tIGF0dGFja2luZyBwcmV2aW91c2x5XG4gIC8vIGF0dGFja2VkIGNvb3JkaW5hdGVcbiAgY29uc3QgcHJldmVudFNhbWVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGxldCBhbHJlYWR5QXR0YWNrZWQgPSBmYWxzZVxuICAgIHN1Y2Nlc3NmdWxTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XG4gICAgICBpZiAoYXJyYXlzQXJlRXF1YWwoY29vcmRpbmF0ZSwgc2hvdCkpIHtcbiAgICAgICAgYWxyZWFkeUF0dGFja2VkID0gdHJ1ZVxuICAgICAgICByZXR1cm4gcHJldmVudFNhbWVBdHRhY2tcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgbWlzc2VkU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xuICAgICAgaWYgKGFycmF5c0FyZUVxdWFsKGNvb3JkaW5hdGUsIHNob3QpKSB7XG4gICAgICAgIGFscmVhZHlBdHRhY2tlZCA9IHRydWVcbiAgICAgICAgcmV0dXJuIHByZXZlbnRTYW1lQXR0YWNrXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gYWxyZWFkeUF0dGFja2VkXG4gIH1cblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZXNbMF1cbiAgICBjb25zdCBjb2x1bW4gPSBjb29yZGluYXRlc1sxXVxuICAgIC8vIGNvb3JkaW5hdGVzID0gW3JvdywgY29sdW1uXVxuICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGJvYXJkW3Jvd11bY29sdW1uXVxuICAgIGNvbnN0IHNoaXBPYmogPSBib2FyZENlbGxcblxuICAgIC8vIE5lZWQgdG8gY2hlY2sgaWYgbmV3IGNvb3JkaW5hdGUgaXMgYWxyZWFkeVxuICAgIC8vIGluc2lkZSBzdWNjZXNzZnVsU2hvdHMgb3IgbWlzc2VkU2hvdHNcbiAgICBjb25zdCBhbHJlYWR5QXR0YWNrZWQgPSBwcmV2ZW50U2FtZUF0dGFjayhjb29yZGluYXRlcylcbiAgICBpZiAoYWxyZWFkeUF0dGFja2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGJvYXJkQ2VsbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHNoaXBPYmouaGl0KClcbiAgICAgIGxhc3RBSU1vdmVTdWNjZXNzZnVsID0gdHJ1ZVxuICAgICAgbGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwgPSB0cnVlXG4gICAgICBzdWNjZXNzZnVsU2hvdHMucHVzaChjb29yZGluYXRlcylcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2FyZENlbGwgIT09ICdvYmplY3QnKSB7XG4gICAgICBsYXN0QUlNb3ZlU3VjY2Vzc2Z1bCA9IGZhbHNlXG4gICAgICBsYXN0SHVtYW5Nb3ZlU3VjY2Vzc2Z1bCA9IGZhbHNlXG4gICAgICBtaXNzZWRTaG90cy5wdXNoKGNvb3JkaW5hdGVzKVxuICAgICAgcmVtb3ZlQWRqYWNlbnRTbG90KGNvb3JkaW5hdGVzKVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIHRoZSBjb21wdXRlciByYW5kb21seSBndWVzc2VzIGEgc3BvdCB0aGF0IGlzIGFscmVhZHkgaW4gdGhlIGFkamFjZW5jeVxuICAvLyBzbG90IHF1ZXVlLCB3ZSBuZWVkIHRvIHJlbW92ZSBpdCAoZnJvbSB0aGUgYWRqYWNlbmN5IHF1ZXVlKSBzb1xuICAvLyB0aGUgY29tcHV0ZXIgZG9lcyBub3QgYXR0ZW1wdCB0b1xuICAvLyB1c2UgdGhlIGFscmVhZHkgZ3Vlc3NlZCBzcG90IHdoZW4gcHVsbGluZyBmcm9tIHRoZSBhZGphY2VuY3lcbiAgLy8gcXVldWUgZm9yIGl0J3MgbmV4dCBtb3ZlXG4gIGNvbnN0IHJlbW92ZUFkamFjZW50U2xvdCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGNvbnN0IHRhcmdldENvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNcbiAgICBjb25zdCBhZGphY2VudFF1ZXVlID0gbmV3IFNldCgpXG4gICAgZm9yIChjb25zdCBzbG90IG9mIGFkamFjZW50U2xvdHNRdWV1ZSkge1xuICAgICAgYWRqYWNlbnRRdWV1ZS5hZGQoc2xvdC50b1N0cmluZygpKVxuICAgIH1cblxuICAgIC8vIGZpbHRlciB0aGUgYWRqYWNlbmN5IHNsb3QgcXVldWUgZG93biB0byBzbG90cyB0aGF0IGhhdmUgTk9UXG4gICAgLy8gYWxyZWFkeSBiZWVuIGd1ZXNlZC5cbiAgICBhZGphY2VudFNsb3RzUXVldWUgPSBhZGphY2VudFNsb3RzUXVldWUuZmlsdGVyKFxuICAgICAgKHNsb3QpID0+ICFhcnJheXNBcmVFcXVhbChzbG90LCB0YXJnZXRDb29yZGluYXRlcylcbiAgICApXG4gIH1cblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgbGV0IGV2ZXJ5U2hpcFNhbmsgPSB0cnVlXG4gICAgc2hpcE9iamVjdHMuZm9yRWFjaCgoc2hpcE9iaikgPT4ge1xuICAgICAgaWYgKCFzaGlwT2JqLmhhc0JlZW5TdW5rKCkpIHtcbiAgICAgICAgZXZlcnlTaGlwU2FuayA9IGZhbHNlXG4gICAgICAgIHJldHVybiBldmVyeVNoaXBTYW5rXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZXZlcnlTaGlwU2Fua1xuICB9XG5cbiAgY29uc3QgcmVtb3ZlTGFzdEFJTW92ZSA9IChyYW5kb21Nb3ZlKSA9PiB7XG4gICAgYWlBdmFpbGFibGVNb3Zlcy5mb3JFYWNoKChtb3ZlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGFycmF5c0FyZUVxdWFsKG1vdmUsIHJhbmRvbU1vdmUpKSB7XG4gICAgICAgIGFpQXZhaWxhYmxlTW92ZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBhZGRBZGphY2VudFNsb3RzVG9RdWV1ZSA9IChhZGphY2VudFNsb3RzKSA9PiB7XG4gICAgYWRqYWNlbnRTbG90cy5mb3JFYWNoKChzbG90KSA9PiB7XG4gICAgICBhZGphY2VudFNsb3RzUXVldWUucHVzaChzbG90KVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBjbGVhckdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICBzaGlwT2JqZWN0cy5sZW5ndGggPSAwXG4gICAgbWlzc2VkU2hvdHMubGVuZ3RoID0gMFxuICAgIGFpQXZhaWxhYmxlTW92ZXMubGVuZ3RoID0gMFxuICAgIHN1Y2Nlc3NmdWxTaG90cy5sZW5ndGggPSAwXG4gICAgYWRqYWNlbnRTbG90c1F1ZXVlLmxlbmd0aCA9IDBcbiAgfVxuXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBib2FyZFxuICB9XG5cbiAgY29uc3QgZ2V0TWlzc2VkU2hvdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG1pc3NlZFNob3RzXG4gIH1cblxuICBjb25zdCBnZXRTdWNjZXNzZnVsU2hvdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHN1Y2Nlc3NmdWxTaG90c1xuICB9XG5cbiAgY29uc3QgZ2V0U2hpcE9iamVjdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBPYmplY3RzXG4gIH1cblxuICBjb25zdCBnZXRBSUF2YWlsYWJsZU1vdmVzID0gKCkgPT4ge1xuICAgIHJldHVybiBhaUF2YWlsYWJsZU1vdmVzXG4gIH1cblxuICBjb25zdCBnZXRMYXN0QUlNb3ZlU3VjY2Vzc2Z1bCA9ICgpID0+IHtcbiAgICByZXR1cm4gbGFzdEFJTW92ZVN1Y2Nlc3NmdWxcbiAgfVxuXG4gIGNvbnN0IGdldExhc3RIdW1hbk1vdmVTdWNjZXNzZnVsID0gKCkgPT4ge1xuICAgIHJldHVybiBsYXN0SHVtYW5Nb3ZlU3VjY2Vzc2Z1bFxuICB9XG5cbiAgY29uc3QgZ2V0QWRqYWNlbnRTbG90c1F1ZXVlID0gKCkgPT4ge1xuICAgIHJldHVybiBhZGphY2VudFNsb3RzUXVldWVcbiAgfVxuXG4gIGNvbnN0IGdldEFkamFjZW50UXVldWVTbG90ID0gKCkgPT4ge1xuICAgIHJldHVybiBhZGphY2VudFNsb3RzUXVldWUucG9wKClcbiAgfVxuXG4gIGNvbnN0IGdldExhc3RTdWNjZXNzZnVsTW92ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc3VjY2Vzc2Z1bFNob3RzLmF0KC0xKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVHYW1lQm9hcmQsXG4gICAgZ2V0Qm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgY2xlYXJHYW1lQm9hcmQsXG4gICAgZ2V0TWlzc2VkU2hvdHMsXG4gICAgZ2V0U3VjY2Vzc2Z1bFNob3RzLFxuICAgIGFsbFNoaXBzU3VuayxcbiAgICBnZXRBSUF2YWlsYWJsZU1vdmVzLFxuICAgIHZhbGlkYXRlQ29vcmRpbmF0ZXMsXG4gICAgcHJldmVudFNhbWVBdHRhY2ssXG4gICAgY2hlY2tTZWxmT3ZlcmxhcCxcbiAgICBnZXRTaGlwT2JqZWN0cyxcbiAgICByZW1vdmVMYXN0QUlNb3ZlLFxuICAgIGNoZWNrT3ZlcmxhcFdpdGhPdGhlclNoaXBzLFxuICAgIGdldExhc3RBSU1vdmVTdWNjZXNzZnVsLFxuICAgIGdldExhc3RIdW1hbk1vdmVTdWNjZXNzZnVsLFxuICAgIGdldEFkamFjZW50U2xvdHNRdWV1ZSxcbiAgICBhZGRBZGphY2VudFNsb3RzVG9RdWV1ZSxcbiAgICBnZXRBZGphY2VudFF1ZXVlU2xvdCxcbiAgICByZW1vdmVBZGphY2VudFNsb3QsXG4gICAgZ2V0TGFzdFN1Y2Nlc3NmdWxNb3ZlXG4gIH1cbn1cbiIsImltcG9ydCB7IGFycmF5c0FyZUVxdWFsIH0gZnJvbSAnLi4vaGVscGVycy9hcnJheXNBcmVFcXVhbCdcblxuZXhwb3J0IGNvbnN0IFBsYXllciA9IChuYW1lLCBpc0FJKSA9PiB7XG4gIC8vIFVzZWQgdG8gbWFrZSBBSSBzZWxlY3QgcmFuZG9tLCBsZWdhbCBjb29yZGluYXRlXG4gIC8vIG9uIHBsYXllcnMgZ2FtZSBib2FyZFxuICBjb25zdCBtYWtlUmFuZG9tTW92ZSA9IChpc0FJLCBhdmFpbGFibGVNb3ZlcykgPT4ge1xuICAgIGlmICghaXNBSSB8fCBhdmFpbGFibGVNb3Zlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBjb25zdCBhdmFpbGFibGVNb3Zlc0xlbmd0aCA9IGF2YWlsYWJsZU1vdmVzLmxlbmd0aFxuICAgIGNvbnN0IHJhbmRvbUFyckluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlTW92ZXNMZW5ndGgpXG4gICAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZSA9IGF2YWlsYWJsZU1vdmVzW3JhbmRvbUFyckluZGV4XVxuXG4gICAgcmV0dXJuIHJhbmRvbUNvb3JkaW5hdGVcbiAgfVxuXG4gIGNvbnN0IGdldEFkamFjZW50U2xvdHMgPSAoXG4gICAgaXNBSSxcbiAgICBhdmFpbGFibGVNb3ZlcyxcbiAgICBzdWNjZXNzZnVsU2hvdHMsXG4gICAgbWlzc2VkU2hvdHNcbiAgKSA9PiB7XG4gICAgaWYgKCFpc0FJIHx8IGF2YWlsYWJsZU1vdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGNvbnN0IGxhc3RTdWNjZXNzZnVsTW92ZSA9IHN1Y2Nlc3NmdWxTaG90cy5hdCgtMSlcbiAgICBjb25zdCBhZGphY2VudFNsb3RzID0gcmV0cmlldmVBZGphY2VudFNsb3RzKGxhc3RTdWNjZXNzZnVsTW92ZSlcbiAgICBjb25zdCBsZWdhbEFkamFjZW50U2xvdHMgPSByZW1vdmVJbGxlZ2FsQWRqYWNlbnRTbG90cyhhZGphY2VudFNsb3RzKVxuICAgIC8qIGNvbnN0IGF2YWlsYWJsZUFkamFjZW50U2xvdHMgPSBwcmV2ZW50UHJldmlvdXNTaG90VG9RdWV1ZShcbiAgICAgIGF2YWlsYWJsZU1vdmVzLFxuICAgICAgbGVnYWxBZGphY2VudFNsb3RzLFxuICAgICAgc3VjY2Vzc2Z1bFNob3RzLFxuICAgICAgbWlzc2VkU2hvdHNcbiAgICApICovXG4gICAgcmV0dXJuIGxlZ2FsQWRqYWNlbnRTbG90c1xuICB9XG5cbiAgY29uc3QgZ2V0Q2VsbEFib3ZlID0gKGxhc3RTdWNjZXNzZnVsTW92ZSkgPT4ge1xuICAgIC8vIHRoZSByb3cgbmVlZHMgdG8gY2hhbmdlIGJ5IG9uZVxuICAgIGNvbnN0IG5ld0FyciA9IFtdXG4gICAgY29uc3QgbmV3Um93ID0gK2xhc3RTdWNjZXNzZnVsTW92ZVswXSAtIDFcbiAgICBpZiAobmV3Um93ID4gOSB8fCBuZXdSb3cgPCAwKSB7XG4gICAgICByZXR1cm4gJ2lsbGVnYWwnXG4gICAgfVxuICAgIG5ld0FyclswXSA9IG5ld1Jvd1xuICAgIG5ld0FyclsxXSA9ICtsYXN0U3VjY2Vzc2Z1bE1vdmVbMV1cbiAgICByZXR1cm4gbmV3QXJyXG4gIH1cblxuICBjb25zdCBnZXRDZWxsQmVsb3cgPSAobGFzdFN1Y2Nlc3NmdWxNb3ZlKSA9PiB7XG4gICAgLy8gdGhlIHJvdyBuZWVkcyB0byBjaGFuZ2UgYnkgb25lXG4gICAgY29uc3QgbmV3QXJyID0gW11cbiAgICBjb25zdCBuZXdSb3cgPSArbGFzdFN1Y2Nlc3NmdWxNb3ZlWzBdICsgMVxuICAgIGlmIChuZXdSb3cgPiA5IHx8IG5ld1JvdyA8IDApIHtcbiAgICAgIHJldHVybiAnaWxsZWdhbCdcbiAgICB9XG4gICAgbmV3QXJyWzBdID0gbmV3Um93XG4gICAgbmV3QXJyWzFdID0gK2xhc3RTdWNjZXNzZnVsTW92ZVsxXVxuICAgIHJldHVybiBuZXdBcnJcbiAgfVxuXG4gIGNvbnN0IGdldENlbGxUb1JpZ2h0ID0gKGxhc3RTdWNjZXNzZnVsTW92ZSkgPT4ge1xuICAgIC8vIHRoZSByb3cgbmVlZHMgdG8gY2hhbmdlIGJ5IG9uZVxuICAgIGNvbnN0IG5ld0FyciA9IFtdXG4gICAgY29uc3QgbmV3Q29sdW1uID0gK2xhc3RTdWNjZXNzZnVsTW92ZVsxXSArIDFcbiAgICBpZiAobmV3Q29sdW1uID4gOSB8fCBuZXdDb2x1bW4gPCAwKSB7XG4gICAgICByZXR1cm4gJ2lsbGVnYWwnXG4gICAgfVxuICAgIG5ld0FyclswXSA9ICtsYXN0U3VjY2Vzc2Z1bE1vdmVbMF1cbiAgICBuZXdBcnJbMV0gPSBuZXdDb2x1bW5cbiAgICByZXR1cm4gbmV3QXJyXG4gIH1cblxuICBjb25zdCBnZXRDZWxsVG9MZWZ0ID0gKGxhc3RTdWNjZXNzZnVsTW92ZSkgPT4ge1xuICAgIC8vIHRoZSByb3cgbmVlZHMgdG8gY2hhbmdlIGJ5IG9uZVxuICAgIGNvbnN0IG5ld0FyciA9IFtdXG4gICAgY29uc3QgbmV3Q29sdW1uID0gK2xhc3RTdWNjZXNzZnVsTW92ZVsxXSAtIDFcbiAgICBpZiAobmV3Q29sdW1uID4gOSB8fCBuZXdDb2x1bW4gPCAwKSB7XG4gICAgICByZXR1cm4gJ2lsbGVnYWwnXG4gICAgfVxuICAgIG5ld0FyclswXSA9ICtsYXN0U3VjY2Vzc2Z1bE1vdmVbMF1cbiAgICBuZXdBcnJbMV0gPSBuZXdDb2x1bW5cbiAgICByZXR1cm4gbmV3QXJyXG4gIH1cblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgIHJldHVybiBuYW1lXG4gIH1cblxuICBjb25zdCByZXRyaWV2ZUFkamFjZW50U2xvdHMgPSAobGFzdFN1Y2Nlc3NmdWxNb3ZlKSA9PiB7XG4gICAgY29uc3QgbGFzdFN1Y2Nlc3NmdWxNb3ZlVmFsdWUgPSBsYXN0U3VjY2Vzc2Z1bE1vdmVcbiAgICBjb25zdCBhZGphY2VudFNsb3RzID0gW11cbiAgICBhZGphY2VudFNsb3RzLnB1c2goZ2V0Q2VsbEFib3ZlKGxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlKSlcbiAgICBhZGphY2VudFNsb3RzLnB1c2goZ2V0Q2VsbEJlbG93KGxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlKSlcbiAgICBhZGphY2VudFNsb3RzLnB1c2goZ2V0Q2VsbFRvUmlnaHQobGFzdFN1Y2Nlc3NmdWxNb3ZlVmFsdWUpKVxuICAgIGFkamFjZW50U2xvdHMucHVzaChnZXRDZWxsVG9MZWZ0KGxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlKSlcbiAgICByZXR1cm4gYWRqYWNlbnRTbG90c1xuICB9XG5cbiAgLy8gcHJldmVudHMgYWRkaW5nIGFkamFjZW50IHNsb3RzIHRoYXQgYXJlIG5vdCBvbiB0aGUgYm9hcmRcbiAgY29uc3QgcmVtb3ZlSWxsZWdhbEFkamFjZW50U2xvdHMgPSAoYWRqYWNlbnRTbG90cykgPT4ge1xuICAgIGNvbnN0IGFkamFjZW50U2xvdHNBcnIgPSBhZGphY2VudFNsb3RzXG4gICAgYWRqYWNlbnRTbG90c0Fyci5mb3JFYWNoKChzbG90LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHNsb3QgPT09ICdpbGxlZ2FsJykge1xuICAgICAgICBhZGphY2VudFNsb3RzQXJyLnNwbGljZShpbmRleCwgMSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBhZGphY2VudFNsb3RzQXJyXG4gIH1cblxuICAvLyBpZiB0aGUgY29tcHV0ZXIgaGFzIGFscmVhZHkgKHJhbmRvbWx5KSBndWVzc2VkIGEgc3BvdCBvbiB0aGUgYm9hcmQsIHByZXZlbnRcbiAgLy8gYWRkaW5nIHRoZSBzcG90IHRvIHRoZSBhZGphY2VuY3kgbGlzdFxuICBjb25zdCBwcmV2ZW50UHJldmlvdXNTaG90VG9RdWV1ZSA9IChcbiAgICBhdmFpbGFibGVNb3ZlcyxcbiAgICBhZGphY2VudFNsb3RzLFxuICAgIHN1Y2Nlc3NmdWxTaG90cyxcbiAgICBtaXNzZWRTaG90c1xuICApID0+IHtcbiAgICBjb25zdCBzbG90cyA9IGFkamFjZW50U2xvdHNcbiAgICBjb25zdCBhbGxQcmV2aW91c0F0dGFja3MgPSBzdWNjZXNzZnVsU2hvdHMuY29uY2F0KG1pc3NlZFNob3RzKVxuXG4gICAgY29uc3QgcHJldmlvdXNBdHRhY2tzID0gbmV3IFNldCgpXG5cbiAgICBmb3IgKGNvbnN0IHNob3Qgb2YgYWxsUHJldmlvdXNBdHRhY2tzKSB7XG4gICAgICBwcmV2aW91c0F0dGFja3MuYWRkKHNob3QudG9TdHJpbmcoKSlcbiAgICB9XG5cbiAgICAvLyBHbyB0aHJvdWdoIGVhY2ggYWRqYWNlbmN5IHNsb3QsIGFuZCBkZXRlcm1pbmUgaWYgdGhlIHNsb3QgaXMgaW4gdGhlXG4gICAgLy8gcHJldmlvdXNBdHRhY2tzIG1ldGhvZC4gV2UgYXJlIGZpbHRlcmluZyBvdXQgdGhlIHNsb3RzIHRoYXQgYXJlIGluXG4gICAgLy8gdGhlIHByZXZpb3VzIGF0dGFjayBzZXQsIGFzIHdlIGRvIG5vdCB3YW50IHRvIGhhdmUgdGhlIGNvbXB1dGVyXG4gICAgLy8gdG8gdXNlIHRob3NlIHNsb3RzIGFnYWluIGluIGZ1dHVyZSB0dXJuc1xuICAgIGNvbnN0IGZpbHRlcmVkU2xvdHMgPSBzbG90cy5maWx0ZXIoXG4gICAgICAoc2xvdCkgPT4gIXByZXZpb3VzQXR0YWNrcy5oYXMoc2xvdC50b1N0cmluZygpKVxuICAgIClcblxuICAgIHJldHVybiBmaWx0ZXJlZFNsb3RzXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1ha2VSYW5kb21Nb3ZlLFxuICAgIGdldE5hbWUsXG4gICAgZ2V0QWRqYWNlbnRTbG90cyxcbiAgICBwcmV2ZW50UHJldmlvdXNTaG90VG9RdWV1ZVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgU2hpcCA9IChsZW5ndGgsIG51bU9mSGl0cywgaXNTdW5rKSA9PiB7XG4gIC8vIEluY3JlYXNlIG51bWJlciBvZiBoaXRzIGluIHNoaXAgYnkgMVxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaWYgKG51bU9mSGl0cyA9PT0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBudW1PZkhpdHMrK1xuICAgIHJldHVybiBudW1PZkhpdHNcbiAgfVxuXG4gIC8vIERldGVybWluZSBpZiB0aGUgc2hpcCBvYmplY3QgaGFzIGJlZW4gc3Vua1xuICBjb25zdCBoYXNCZWVuU3VuayA9ICgpID0+IHtcbiAgICBpZiAobGVuZ3RoID09PSBudW1PZkhpdHMpIHtcbiAgICAgIGlzU3VuayA9IHRydWVcbiAgICAgIHJldHVybiBpc1N1bmtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNTdW5rXG4gIH1cblxuICBjb25zdCBnZXROdW1PZkhpdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG51bU9mSGl0c1xuICB9XG5cbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4ge1xuICAgIHJldHVybiBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB7IGhpdCwgaGFzQmVlblN1bmssIGdldE51bU9mSGl0cywgZ2V0TGVuZ3RoIH1cbn1cbiIsImV4cG9ydCBjb25zdCBhcnJheXNBcmVFcXVhbCA9IChhcnIxLCBhcnIyKSA9PiB7XG4gIGlmIChhcnIxID09PSBudWxsIHx8IGFycjIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBpZiAoYXJyMS5sZW5ndGggIT09IGFycjIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIxLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycjFbaV0gIT09IGFycjJbaV0pIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuIiwiLy8gZGVsYXlzIGV4ZWN1dGlvbiBvZiBhIGZ1bmN0aW9uIGZvciBhIHNldCBhbW91bnQgb2YgdGltZVxuZXhwb3J0IGNvbnN0IGRlbGF5ID0gKG1zKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG59XG4iLCJleHBvcnQgY29uc3QgcmV0dXJuUmFuZG9tQUlCb2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYWlCb2FyZHMgPSBbYWlTaGlwQ29vcmRzT25lLCBhaVNoaXBDb29yZHNUd28sIGFpU2hpcENvb3Jkc1RocmVlXVxuICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXG4gIGNvbnN0IGNob3NlbkFJQm9hcmQgPSBPYmplY3QudmFsdWVzKGFpQm9hcmRzW3JhbmRvbUluZGV4XSlcbiAgcmV0dXJuIGNob3NlbkFJQm9hcmRcbn1cblxuY29uc3QgYWlTaGlwQ29vcmRzT25lID0ge1xuICBjYXJyaWVyOiBbXG4gICAgWzksIDBdLFxuICAgIFs5LCAxXSxcbiAgICBbOSwgMl0sXG4gICAgWzksIDNdLFxuICAgIFs5LCA0XVxuICBdLFxuICBiYXR0bGVzaGlwOiBbXG4gICAgWzUsIDVdLFxuICAgIFs2LCA1XSxcbiAgICBbNywgNV0sXG4gICAgWzgsIDVdXG4gIF0sXG4gIGNydWlzZXI6IFtcbiAgICBbMCwgNl0sXG4gICAgWzEsIDZdLFxuICAgIFsyLCA2XVxuICBdLFxuICBzdWJtYXJpbmU6IFtcbiAgICBbMywgOF0sXG4gICAgWzQsIDhdLFxuICAgIFs1LCA4XVxuICBdLFxuICBkZXN0cm95ZXI6IFtcbiAgICBbMCwgOV0sXG4gICAgWzEsIDldXG4gIF1cbn1cblxuY29uc3QgYWlTaGlwQ29vcmRzVHdvID0ge1xuICBjYXJyaWVyOiBbXG4gICAgWzAsIDBdLFxuICAgIFswLCAxXSxcbiAgICBbMCwgMl0sXG4gICAgWzAsIDNdLFxuICAgIFswLCA0XVxuICBdLFxuICBiYXR0bGVzaGlwOiBbXG4gICAgWzksIDVdLFxuICAgIFs5LCA2XSxcbiAgICBbOSwgN10sXG4gICAgWzksIDhdXG4gIF0sXG4gIGNydWlzZXI6IFtcbiAgICBbMiwgMl0sXG4gICAgWzMsIDJdLFxuICAgIFs0LCAyXVxuICBdLFxuICBzdWJtYXJpbmU6IFtcbiAgICBbNiwgNl0sXG4gICAgWzYsIDddLFxuICAgIFs2LCA4XVxuICBdLFxuICBkZXN0cm95ZXI6IFtcbiAgICBbOCwgMF0sXG4gICAgWzgsIDFdXG4gIF1cbn1cblxuY29uc3QgYWlTaGlwQ29vcmRzVGhyZWUgPSB7XG4gIGNhcnJpZXI6IFtcbiAgICBbNSwgMF0sXG4gICAgWzUsIDFdLFxuICAgIFs1LCAyXSxcbiAgICBbNSwgM10sXG4gICAgWzUsIDRdXG4gIF0sXG4gIGJhdHRsZXNoaXA6IFtcbiAgICBbMCwgOV0sXG4gICAgWzEsIDldLFxuICAgIFsyLCA5XSxcbiAgICBbMywgOV1cbiAgXSxcbiAgY3J1aXNlcjogW1xuICAgIFs3LCA3XSxcbiAgICBbOCwgN10sXG4gICAgWzksIDddXG4gIF0sXG4gIHN1Ym1hcmluZTogW1xuICAgIFsxLCAxXSxcbiAgICBbMiwgMV0sXG4gICAgWzMsIDFdXG4gIF0sXG4gIGRlc3Ryb3llcjogW1xuICAgIFs0LCA0XSxcbiAgICBbNCwgNV1cbiAgXVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC8qIDEgKi9cXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qIEFwcGx5IGJvcmRlciBib3ggdG8gZW50aXJlIGRvY3VtZW50ICovXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gICAqL1xcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqL1xcblxcbmhyIHtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIC8qIDEgKi9cXG4gICAgaGVpZ2h0OiAwO1xcbiAgICAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnByZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gICAgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcblxcbmEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgLyogMSAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgLyogMiAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAgICogYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gICAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuaW5wdXQge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwO1xcbiAgICAvKiAyICovXFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIEdpdmUgaW5wdXQgYW5kIHRleHQgYXJlYSBjb25zaXN0ZW50IGxvb2sgKi9cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHggMCAwIC0xMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQ6IGJvbGQgMC42ZW0gc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgICBjb2xvcjogI2ZmZjsgKi9cXG59XFxuXFxuLyogR2V0cyByaWQgb2YgZGVmYXVsdCBzZWFyY2ggdG8gcmVtb3ZlIHJlc3RyaWN0aW9ucyAqL1xcbmlucHV0W3R5cGU9J3NlYXJjaCddIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyogRml4IGZvciBpbmNvbnNpc3RlbnQgZGlzcGxheSBvZiBjbGVhciBcXFwieFxcXCIgaWNvbiBpbiBzZWFyY2ggaW5wdXRzIGFjcm9zcyBkaWZmZXJlbnQgYnJvd3NlcnMuIFxcbiAgLCB0aGlzIGNvZGUgcmVtb3ZlcyB0aGUgaWNvbiBpbiBFZGdlIGFuZCBDaHJvbWUgd2hlbiB0aGUgaW5wdXQgbG9zZXMgZm9jdXMsIHdoaWxlIGtlZXBpbmcgaXQgdmlzaWJsZSBpbiBTYWZhcmkuICovXFxuaW5wdXRbdHlwZT0nc2VhcmNoJ106bm90KDpmb2N1cywgOmFjdGl2ZSk6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgLyogMSAqL1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPSdidXR0b24nXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT0ncmVzZXQnXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT0nc3VibWl0J106Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAgICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPSdidXR0b24nXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT0ncmVzZXQnXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT0nc3VibWl0J106LW1vei1mb2N1c3Jpbmcge1xcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuZmllbGRzZXQge1xcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxubGVnZW5kIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgLyogMiAqL1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgLyogMSAqL1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDtcXG4gICAgLyogMyAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICAvKiAxICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gICAqL1xcblxcbnByb2dyZXNzIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAgICovXFxuXFxudGV4dGFyZWEge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gICAqL1xcblxcblt0eXBlPSdjaGVja2JveCddLFxcblt0eXBlPSdyYWRpbyddIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICAgKi9cXG5cXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICAgKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gICAgLyogMSAqL1xcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gICAqL1xcblxcblt0eXBlPSdzZWFyY2gnXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAgICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICAgKi9cXG5cXG5kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAgICovXFxuXFxudGVtcGxhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAgICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtJQUNJLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sOEJBQThCO0lBQzlCLE1BQU07QUFDVjs7QUFFQSx3Q0FBd0M7QUFDeEM7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLFNBQVM7QUFDYjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7OztJQUdJOztBQUVKO0lB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NkJBQTZCO0lBQzdCLE1BQU07SUFDTixvQkFBb0I7SUFDcEIsTUFBTTtBQUNWOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBOzs7SUFHSTs7QUFFSjtJQUNJLDBCQUEwQjtJQUMxQixNQUFNO0lBQ04sYUFBYTtJQUNiLE1BQU07QUFDVjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAvKiAxICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKiBBcHBseSBib3JkZXIgYm94IHRvIGVudGlyZSBkb2N1bWVudCAqL1xcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICAgKi9cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICAgKi9cXG5cXG5ociB7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAvKiAxICovXFxuICAgIGhlaWdodDogMDtcXG4gICAgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5wcmUge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5hIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gICAgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gICAqIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgICBmb250LXNpemU6IDc1JTtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICAgIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcblxcbmltZyB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmlucHV0IHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAvKiAxICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgLyogMiAqL1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBHaXZlIGlucHV0IGFuZCB0ZXh0IGFyZWEgY29uc2lzdGVudCBsb29rICovXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDRweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAtMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250OiBib2xkIDAuNmVtIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgLyogYmFja2dyb3VuZDogIzAwMDtcXG4gICAgY29sb3I6ICNmZmY7ICovXFxufVxcblxcbi8qIEdldHMgcmlkIG9mIGRlZmF1bHQgc2VhcmNoIHRvIHJlbW92ZSByZXN0cmljdGlvbnMgKi9cXG5pbnB1dFt0eXBlPSdzZWFyY2gnXSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qIEZpeCBmb3IgaW5jb25zaXN0ZW50IGRpc3BsYXkgb2YgY2xlYXIgXFxcInhcXFwiIGljb24gaW4gc2VhcmNoIGlucHV0cyBhY3Jvc3MgZGlmZmVyZW50IGJyb3dzZXJzLiBcXG4gICwgdGhpcyBjb2RlIHJlbW92ZXMgdGhlIGljb24gaW4gRWRnZSBhbmQgQ2hyb21lIHdoZW4gdGhlIGlucHV0IGxvc2VzIGZvY3VzLCB3aGlsZSBrZWVwaW5nIGl0IHZpc2libGUgaW4gU2FmYXJpLiAqL1xcbmlucHV0W3R5cGU9J3NlYXJjaCddOm5vdCg6Zm9jdXMsIDphY3RpdmUpOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIC8qIDEgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT0nYnV0dG9uJ106Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9J3Jlc2V0J106Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9J3N1Ym1pdCddOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gICAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT0nYnV0dG9uJ106LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9J3Jlc2V0J106LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9J3N1Ym1pdCddOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmZpZWxkc2V0IHtcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmxlZ2VuZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIDEgKi9cXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIC8qIDIgKi9cXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIC8qIDEgKi9cXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIDMgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICAgKi9cXG5cXG5wcm9ncmVzcyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gICAqL1xcblxcbnRleHRhcmVhIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5bdHlwZT0nY2hlY2tib3gnXSxcXG5bdHlwZT0ncmFkaW8nXSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIDEgKi9cXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAgICovXFxuXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAgICovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAgIC8qIDEgKi9cXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICAgKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gICAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gICAgLyogMSAqL1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICovXFxuXFxuZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gICAqL1xcblxcbnRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gICAqL1xcblxcbltoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWRlZmF1bHQtZm9udDogJ1BsYXknLCBzYW5zLXNlcmlmLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLFxcbiAgICBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoZGFya2JsdWUsIGxpZ2h0Ymx1ZSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG59XFxuXFxuLmxvZ28gaW1nIHtcXG4gIGhlaWdodDogNzBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBjb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwcHg7XFxuICBwYWRkaW5nOiA4cHggMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDNkO1xcbiAgLyogb3BhY2l0eTogMC42OyAqL1xcbiAgei1pbmRleDogMTtcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLmhlYWRlckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyQ29udGFpbmVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJhZGlhbCAjMzMzO1xcbn1cXG5cXG4udG9wQmFyQ29udGFpbmVyIHtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibGFjazsgKi9cXG4gIHdpZHRoOiA3MHZ3O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgbWFyZ2luLXRvcDogOCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAjN2E3YTdhNDI7XFxufVxcblxcbi50b3BCYXJDb250YWluZXIgcCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBvcGFjaXR5OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5wLmludmlzaWJsZSB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5idXR0b24uc2hpcENlbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuI0FJQm9hcmQgYnV0dG9uLFxcbiNwbGF5ZXJCb2FyZCBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuLnBsYXllckJvYXJkQ29udGFpbmVyLFxcbi5haUJvYXJkQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbiNib2FyZHNDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyNHB4O1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrICovXFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDM4dncpKTtcXG4gIHdpZHRoOiA4M3Z3O1xcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcXG59XFxuXFxuYnV0dG9uLm9yaWVudGF0aW9uVG9nZ2xlQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG59XFxuXFxuYnV0dG9uLm9yaWVudGF0aW9uVG9nZ2xlQnRuOmhvdmVyLFxcbmJ1dHRvbi5vcmllbnRhdGlvblRvZ2dsZUJ0bjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjM2MzYztcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI2JvYXJkc0NvbnRhaW5lciBwIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgcGFkZGluZzogNnB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHg7XFxuICBib3gtc2hhZG93OiA0cHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbiNwbGF5ZXJCb2FyZCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XFxuICBib3gtc2hhZG93OiA0cHggNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxufVxcblxcbiNBSUJvYXJkIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG59XFxuXFxuYnV0dG9uLmJvYXJkQ2VsbCB7XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbjtcXG59XFxuXFxuYnV0dG9uLnNoaXBDZWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluO1xcbn1cXG5cXG5idXR0b24uc2hpcEhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE0LCAyMSwgMjEpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW47XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDgxMnB4KSB7XFxuICAjYm9hcmRzQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG4gICAgLyogIG91dGxpbmU6IDFweCBzb2xpZCBibGFjazsgKi9cXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBub25lO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyNXB4LCAzOHZ3KSk7XFxuICAgIHdpZHRoOiA4NnZ3O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgfVxcblxcbiAgI0FJQm9hcmQge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNDJweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIH1cXG5cXG4gICNwbGF5ZXJCb2FyZCB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MnB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgfVxcblxcbiAgLnRvcEJhckNvbnRhaW5lciB7XFxuICAgIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibGFjazsgKi9cXG4gICAgaGVpZ2h0OiA0MHZoO1xcbiAgICBtYXJnaW4tdG9wOiA4JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4JTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAjN2E3YTdhNDI7XFxuICAgIHdpZHRoOiA3NnZ3O1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgbWF4LWhlaWdodDogMTE4cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gIH1cXG5cXG4gIC50b3BCYXJDb250YWluZXIgcCB7XFxuICAgIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibGFjazsgKi9cXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWF4LWhlaWdodDogODB2aDtcXG4gIH1cXG5cXG4gICNib2FyZHNDb250YWluZXIgcCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gIH1cXG5cXG4gIGJ1dHRvbi5vcmllbnRhdGlvblRvZ2dsZUJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0U7Y0FDWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnREFBZ0Q7RUFDaEQsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFD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QjtJQUNqQixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5JmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIC0tZGVmYXVsdC1mb250OiAnUGxheScsIHNhbnMtc2VyaWYsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsXFxuICAgIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChkYXJrYmx1ZSwgbGlnaHRibHVlKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1kZWZhdWx0LWZvbnQpO1xcbn1cXG5cXG4ubG9nbyBpbWcge1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHBhZGRpbmc6IDhweCAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwM2Q7XFxuICAvKiBvcGFjaXR5OiAwLjY7ICovXFxuICB6LWluZGV4OiAxO1xcbiAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4uaGVhZGVyQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXJDb250YWluZXIgaDEge1xcbiAgZm9udC1zaXplOiAyLjNyZW07XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmFkaWFsICMzMzM7XFxufVxcblxcbi50b3BCYXJDb250YWluZXIge1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgd2lkdGg6IDcwdnc7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBtYXJnaW4tdG9wOiA4JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHggMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4ICM3YTdhN2E0MjtcXG59XFxuXFxuLnRvcEJhckNvbnRhaW5lciBwIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIG9wYWNpdHk6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnAuaW52aXNpYmxlIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbmJ1dHRvbi5zaGlwQ2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jQUlCb2FyZCBidXR0b24sXFxuI3BsYXllckJvYXJkIGJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cXG4ucGxheWVyQm9hcmRDb250YWluZXIsXFxuLmFpQm9hcmRDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuI2JvYXJkc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2sgKi9cXG4gIHBhZGRpbmc6IDEycHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBub25lO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMzh2dykpO1xcbiAgd2lkdGg6IDgzdnc7XFxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xcbn1cXG5cXG5idXR0b24ub3JpZW50YXRpb25Ub2dnbGVCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGhlaWdodDogNjAlO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluLW91dDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1kZWZhdWx0LWZvbnQpO1xcbn1cXG5cXG5idXR0b24ub3JpZW50YXRpb25Ub2dnbGVCdG46aG92ZXIsXFxuYnV0dG9uLm9yaWVudGF0aW9uVG9nZ2xlQnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2MzYzNjO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jYm9hcmRzQ29udGFpbmVyIHAge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBwYWRkaW5nOiA2cHggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweDtcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuI3BsYXllckJvYXJkIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG59XFxuXFxuI0FJQm9hcmQge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xcbiAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbn1cXG5cXG5idXR0b24uYm9hcmRDZWxsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluO1xcbn1cXG5cXG5idXR0b24uc2hpcENlbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW47XFxufVxcblxcbmJ1dHRvbi5zaGlwSGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTQsIDIxLCAyMSk7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogODEycHgpIHtcXG4gICNib2FyZHNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICAvKiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzI1cHgsIDM4dncpKTtcXG4gICAgd2lkdGg6IDg2dnc7XFxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICB9XFxuXFxuICAjQUlCb2FyZCB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MnB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgfVxcblxcbiAgI3BsYXllckJvYXJkIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDQycHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICB9XFxuXFxuICAudG9wQmFyQ29udGFpbmVyIHtcXG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICBoZWlnaHQ6IDQwdmg7XFxuICAgIG1hcmdpbi10b3A6IDglO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDglO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMXB4ICM3YTdhN2E0MjtcXG4gICAgd2lkdGg6IDc2dnc7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICBtYXgtaGVpZ2h0OiAxMThweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgfVxcblxcbiAgLnRvcEJhckNvbnRhaW5lciBwIHtcXG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xcbiAgfVxcblxcbiAgI2JvYXJkc0NvbnRhaW5lciBwIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgfVxcblxcbiAgYnV0dG9uLm9yaWVudGF0aW9uVG9nZ2xlQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtcbiAgcHJlR2FtZVNldHVwXG59IGZyb20gJy4vY29udHJvbGxlcnMvZGlzcGxheUNvbnRyb2xsZXInXG5cbmltcG9ydCAnLi9zdHlsZXMvbm9ybWFsaXplLmNzcydcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJ1xuXG5wcmVHYW1lU2V0dXAoKVxuIl0sIm5hbWVzIjpbImRlbGF5IiwiZ2FtZUNvbnRyb2xsZXIiLCJnYW1lIiwicHJlR2FtZVNldHVwIiwicmVuZGVyUGxheWVyQm9hcmQiLCJwbGFjZUNhcnJpZXJTaGlwIiwicmVuZGVyQUlCb2FyZCIsImRpc3BsYXlDb250cm9sbGVyIiwidG9wQmFyQ29udGFpbmVyUGFyYSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwicGxhY2VBSVNoaXBzIiwiYWlCb2FyZERpdiIsImdldEVsZW1lbnRCeUlkIiwicGxheWVycyIsImdldFBsYXllcnMiLCJhY3RpdmVQbGF5ZXIiLCJnZXRDdXJyZW50UGxheWVyIiwiaHVtYW4iLCJuZXdNZXNzYWdlIiwidHJhbnNpdGlvblRleHRDaGFuZ2VzIiwiY29udHJvbGxlciIsIkFib3J0Q29udHJvbGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0Iiwic2lnbmFsIiwidG9wQmFyUGFyYSIsImh1bWFuQm9hcmREaXYiLCJvcmllbnRhdGlvbkJ0blZhbHVlcyIsImNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuIiwiaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyIsIm9yaWVudGF0aW9uVG9nZ2xlQnRuIiwiaGFuZGxlQ2FycmllclNoaXBQbGFjZW1lbnQiLCJwbGFjZUJhdHRsZVNoaXAiLCJoYW5kbGVCYXR0bGVTaGlwUGxhY2VtZW50IiwicGxhY2VDcnVpc2VyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNydWlzZXJTaGlwUGxhY2VtZW50IiwicGxhY2VTdWJtYXJpbmUiLCJoYW5kbGVTdWJtYXJpbmVTaGlwUGxhY2VtZW50IiwicGxhY2VEZXN0cm95ZXIiLCJoYW5kbGVEZXN0cm95ZXJTaGlwUGxhY2VtZW50IiwicGxheWVyQm9hcmQiLCJnZXRIdW1hbkJvYXJkIiwicGxheWVyQm9hcmREaXYiLCJpbm5lckhUTUwiLCJpIiwibGVuZ3RoIiwiY3VycmVudFJvdyIsImoiLCJidXR0b24iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsInJvdyIsImNvbHVtbiIsImFwcGVuZENoaWxkIiwiYWlCb2FyZCIsImdldEFJQm9hcmQiLCJ1cGRhdGVIdW1hbkJvYXJkIiwiaHVtYW5Cb2FyZCIsIm1pc3NlZFNob3RzIiwiZ2V0SHVtYW5Cb2FyZE9iaiIsImdldE1pc3NlZFNob3RzIiwic3VjY2Vzc2Z1bFNob3RzIiwiZ2V0U3VjY2Vzc2Z1bFNob3RzIiwiYWxsRG9tTm9kZXMiLCJBcnJheSIsImZyb20iLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsInNob3QiLCJ0YXJnZXROb2RlIiwicmVtb3ZlIiwidXBkYXRlQUlCb2FyZCIsImdldEFJQm9hcmRPYmoiLCJob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uIiwic2VsZWN0ZWRSb3ciLCJ0YXJnZXQiLCJzZWxlY3RlZENvbHVtbiIsImNvb3JkaW5hdGUiLCJjYXJyaWVyUGxhY2VkIiwicGxhY2VDYXJyaWVyT25Cb2FyZCIsImFib3J0IiwicmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0biIsImJhdHRsZXNoaXBQbGFjZWQiLCJwbGFjZUJhdHRsZXNoaXBPbkJvYXJkIiwiY3J1aXNlclBsYWNlZCIsInBsYWNlQ3J1aXNlck9uQm9hcmQiLCJzdWJtYXJpbmVQbGFjZWQiLCJwbGFjZVN1Ym1hcmluZU9uQm9hcmQiLCJkZXN0cm95ZXJQbGFjZWQiLCJwbGFjZURlc3Ryb3llck9uQm9hcmQiLCJzaGlwVHlwZSIsImJvYXJkRE9NQ2VsbHNBcnIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0SG9yaXpvbnRhbERPTUNvb3JkcyIsImdldFZlcnRpY2FsRE9NQ29vcmRzIiwicGxhY2VDcnVpc2VyU2hpcCIsInBsYWNlU3VibWFyaW5lU2hpcCIsInBsYWNlRGVzdHJveWVyU2hpcCIsInN0YXJ0aW5nQ29sdW1uIiwiTnVtYmVyIiwic2hpcExlbmd0aCIsImRvbUNvb3JkaW5hdGUiLCJ0YXJnZXRET01CdG4iLCJmaW5kU2hpcERPTUJ0biIsInN0YXJ0aW5nUm93IiwiZG9tQ2VsbFJvdyIsImRvbUNlbGxDb2x1bW4iLCJhbHJlYWR5QXR0YWNrZWQiLCJwcmV2ZW50U2FtZUF0dGFjayIsInBsYXlSb3VuZCIsImh1bWFuTW92ZVN1Y2Nlc3NmdWwiLCJnZXRMYXN0SHVtYW5Nb3ZlU3VjY2Vzc2Z1bCIsInNoaXBJc1N1bmsiLCJpc1NoaXBTdW5rIiwic2hpcFN1bmtSZXN1bHQiLCJkaXNwbGF5U3Vua1NoaXBNZXNzYWdlIiwiZGlzcGxheVN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlIiwiZGlzcGxheVVuc3VjY2Vzc2Z1bEF0dGFja01lc3NhZ2UiLCJodW1hbldpbnMiLCJjaGVja0ZvcldpbiIsImhhbmRsZVdpbkNoZWNrIiwiaGFuZGxlQUlNb3ZlIiwiZW5lbXlBdHRhY2tpbmdNc2ciLCJndWVzc2VkQ29vcmRpbmF0ZSIsImFpTW92ZVN1Y2Nlc3NmdWwiLCJnZXRMYXN0QUlNb3ZlU3VjY2Vzc2Z1bCIsImFpV2lucyIsImF0dGFja1RoZUVuZW15TXNnIiwiYW5ub3VuY2VXaW5uZXIiLCJ3aW5uZXIiLCJ3aW5uZXJOYW1lIiwiZ2V0TmFtZSIsInBsYXlBZ2FpbiIsInRvcEJhckRpdiIsInBsYXlBZ2FpbkJ0biIsInN0YXJ0TmV3R2FtZSIsInJlbW92ZUNoaWxkIiwicHJldmlvdXNPcmllbnRhdGlvbkJ0biIsInBsYXllciIsImF0dGFja0FuZEhpdE1zZyIsInNldFRpbWVvdXQiLCJlbmVteUhpdE1zZyIsInVuc3VjY2Vzc2Z1bEF0dGFja01zZyIsInVuc3VjY2Vzc2Z1bEVuZW15QXR0YWNrTXNnIiwic3Vua1NoaXBNZXNzYWdlIiwid2luQ2hlY2siLCJib2FyZERpdiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNldEdhbWVTdGF0ZSIsImRvbUVsZW1lbnQiLCJHYW1lYm9hcmQiLCJQbGF5ZXIiLCJhcnJheXNBcmVFcXVhbCIsInJldHVyblJhbmRvbUFJQm9hcmQiLCJjcmVhdGVHYW1lQm9hcmQiLCJjYXJyaWVyQXJyIiwiZGV0ZXJtaW5lQ2FycmllckFyckNvb3JkcyIsInNoaXBQbGFjZWQiLCJwbGFjZVNoaXAiLCJwdXNoIiwiY29vcmQiLCJ0b1N0cmluZyIsImJhdHRsZXNoaXBBcnIiLCJkZXRlcm1pbmVCYXR0bGVzaGlwQXJyQ29vcmRzIiwiY3J1aXNlckFyciIsImRldGVybWluZUNydWlzZXJBcnJDb29yZHMiLCJzdWJtYXJpbmVBcnIiLCJkZXRlcm1pbmVTdWJtYXJpbmVBcnJDb29yZHMiLCJkZXN0cm95ZXJBcnIiLCJkZXRlcm1pbmVEZXN0cm95ZXJBcnJDb29yZHMiLCJwbGFjZVNoaXBzIiwiaHVtYW5QbGF5ZXIiLCJhaVBsYXllciIsIkFJIiwiY3VycmVudFBsYXllciIsInJlY2VpdmVBdHRhY2siLCJzd2l0Y2hQbGF5ZXIiLCJuZXh0TW92ZSIsImNvbXB1dGVyc05leHRNb3ZlIiwicmVtb3ZlTGFzdEFJTW92ZSIsImF2YWlsYWJsZU1vdmVzIiwiZ2V0QUlBdmFpbGFibGVNb3ZlcyIsImxhc3RBSU1vdmVTdWNjZXNzZnVsIiwiYWRqYWNlbnRTbG90cyIsImdldEFkamFjZW50U2xvdHMiLCJhZGRBZGphY2VudFNsb3RzVG9RdWV1ZSIsImdldEFkamFjZW50UXVldWVTbG90IiwicmFuZG9tTW92ZSIsIm1ha2VSYW5kb21Nb3ZlIiwiYWxsU2hpcHNTdW5rIiwibGFzdFN1Y2Nlc3NmdWxIdW1hbk1vdmUiLCJnZXRMYXN0U3VjY2Vzc2Z1bE1vdmUiLCJ1bmRlZmluZWQiLCJnYW1lQm9hcmQiLCJnZXRCb2FyZCIsInRhcmdldFNoaXBPYmoiLCJoYXNCZWVuU3VuayIsImxhc3RTdWNjZXNzZnVsQUlNb3ZlIiwiY2xlYXJHYW1lQm9hcmQiLCJib2FyZCIsImNvb3JkaW5hdGVzT2JqIiwic2hpcENvb3JkaW5hdGVzQXJyIiwiT2JqZWN0IiwidmFsdWVzIiwic2hpcENvb3JkaW5hdGVzIiwiU2hpcCIsInNoaXBPYmplY3RzIiwiYWlBdmFpbGFibGVNb3ZlcyIsImFkamFjZW50U2xvdHNRdWV1ZSIsInJvd3MiLCJjb2x1bW5zIiwibGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwiLCJ2YWxpZGF0ZUNvb3JkaW5hdGVzIiwiY29vcmRpbmF0ZXMiLCJ2YWxpZENvb3JkaW5hdGVzIiwiY2hlY2tTZWxmT3ZlcmxhcCIsImNvb3JkaW5hdGVzT3ZlcmxhcCIsInByZXZDb29yZGluYXRlIiwiaW5kZXgiLCJjaGVja092ZXJsYXBXaXRoT3RoZXJTaGlwcyIsInNoaXBzT3ZlcmxhcCIsImJvYXJkQ2VsbCIsImxlZ2FsQ29vcmRpbmF0ZXMiLCJvdmVybGFwcGluZ0Nvb3JkaW5hdGVzIiwic2hpcE92ZXJsYXBwaW5nIiwic2hpcE9iamVjdCIsInNoaXBPYmoiLCJoaXQiLCJyZW1vdmVBZGphY2VudFNsb3QiLCJ0YXJnZXRDb29yZGluYXRlcyIsImFkamFjZW50UXVldWUiLCJTZXQiLCJzbG90IiwiZmlsdGVyIiwiZXZlcnlTaGlwU2FuayIsIm1vdmUiLCJzcGxpY2UiLCJnZXRTaGlwT2JqZWN0cyIsImdldEFkamFjZW50U2xvdHNRdWV1ZSIsInBvcCIsImF0IiwibmFtZSIsImlzQUkiLCJhdmFpbGFibGVNb3Zlc0xlbmd0aCIsInJhbmRvbUFyckluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tQ29vcmRpbmF0ZSIsImxhc3RTdWNjZXNzZnVsTW92ZSIsInJldHJpZXZlQWRqYWNlbnRTbG90cyIsImxlZ2FsQWRqYWNlbnRTbG90cyIsInJlbW92ZUlsbGVnYWxBZGphY2VudFNsb3RzIiwiZ2V0Q2VsbEFib3ZlIiwibmV3QXJyIiwibmV3Um93IiwiZ2V0Q2VsbEJlbG93IiwiZ2V0Q2VsbFRvUmlnaHQiLCJuZXdDb2x1bW4iLCJnZXRDZWxsVG9MZWZ0IiwibGFzdFN1Y2Nlc3NmdWxNb3ZlVmFsdWUiLCJhZGphY2VudFNsb3RzQXJyIiwicHJldmVudFByZXZpb3VzU2hvdFRvUXVldWUiLCJzbG90cyIsImFsbFByZXZpb3VzQXR0YWNrcyIsImNvbmNhdCIsInByZXZpb3VzQXR0YWNrcyIsImZpbHRlcmVkU2xvdHMiLCJoYXMiLCJudW1PZkhpdHMiLCJpc1N1bmsiLCJnZXROdW1PZkhpdHMiLCJnZXRMZW5ndGgiLCJhcnIxIiwiYXJyMiIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhaUJvYXJkcyIsImFpU2hpcENvb3Jkc09uZSIsImFpU2hpcENvb3Jkc1R3byIsImFpU2hpcENvb3Jkc1RocmVlIiwicmFuZG9tSW5kZXgiLCJjaG9zZW5BSUJvYXJkIiwiY2FycmllciIsImJhdHRsZXNoaXAiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIl0sInNvdXJjZVJvb3QiOiIifQ==