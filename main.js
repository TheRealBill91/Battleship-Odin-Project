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
    aiBoardDiv.addEventListener('click', handlePlayerSelectionEvt);
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
const handleDestroyerShipPlacement = (e, horizontalShipOrientation, controller) => {
  const selectedRow = e.target.dataset.row;
  const selectedColumn = e.target.dataset.column;
  const coordinate = [selectedRow, selectedColumn];
  const topBarContainerPara = document.querySelector('.topBarContainer > p');
  const destroyerPlaced = placeDestroyerOnBoard(coordinate, horizontalShipOrientation);
  if (destroyerPlaced) {
    controller.abort();
    topBarContainerPara.textContent = '';
    removePreviousOrientationBtn();
    displayController();
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
    if (domCellRow === domCoordinate[0] && domCellColumn === domCoordinate[1]) {
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
  humanMoveSuccessful ? displaySuccessfulAttackMessage('human') : displayUnsuccessfulAttackMessage('human');
  const humanWins = game.checkForWin();
  updateAIBoard();
  await (0,_helpers_delay__WEBPACK_IMPORTED_MODULE_0__.delay)(4000);
  // create handleWin() function
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
  aiMoveSuccessful ? displaySuccessfulAttackMessage('computer') : displayUnsuccessfulAttackMessage('computer');
  const aiWins = game.checkForWin();
  updateHumanBoard();
  await (0,_helpers_delay__WEBPACK_IMPORTED_MODULE_0__.delay)(2500);
  const attackTheEnemyMsg = 'Attack the enemies ships...';
  transitionTextChanges(attackTheEnemyMsg, topBarContainerPara);
  await (0,_helpers_delay__WEBPACK_IMPORTED_MODULE_0__.delay)(4000);
  handleWinCheck(aiWins, aiBoardDiv);
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
    setTimeout(transitionTextChanges(attackAndHitMsg, topBarContainerPara), 10);
  } else if (player === 'computer') {
    const topBarContainerPara = document.querySelector('.topBarContainer > p');
    const enemyHitMsg = 'The enemy launched an attack... and hit your ship!';
    setTimeout(transitionTextChanges(enemyHitMsg, topBarContainerPara), 10);
  }
};
const displayUnsuccessfulAttackMessage = player => {
  if (player === 'human') {
    const topBarContainerPara = document.querySelector('.topBarContainer > p');
    const unsuccessfulAttackMsg = 'You attack on the enemy was unsuccessful';
    setTimeout(transitionTextChanges(unsuccessfulAttackMsg, topBarContainerPara), 10);
  } else if (player === 'computer') {
    const topBarContainerPara = document.querySelector('.topBarContainer > p');
    const unsuccessfulEnemyAttackMsg = 'The enemies attack was unsuccessful';
    setTimeout(transitionTextChanges(unsuccessfulEnemyAttackMsg, topBarContainerPara), 10);
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
/* harmony import */ var _helpers_rotateAIBoards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/rotateAIBoards */ "./src/helpers/rotateAIBoards.js");



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
      const adjacentSlots = currentPlayer.getAdjacentSlots(true, availableMoves, humanBoard.getAdjacentSlotsQueue(), humanBoard.getSuccessfulShots(), humanBoard.getMissedShots());
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
    const newRow = lastSuccessfulMove[0] - 1;
    if (newRow > 9 || newRow < 0) {
      return 'illegal';
    }
    newArr[0] = newRow;
    newArr[1] = lastSuccessfulMove[1];
    return newArr;
  };
  const getCellBelow = lastSuccessfulMove => {
    // the row needs to change by one
    const arr = lastSuccessfulMove;
    const newArr = [];
    const newRow = arr[0] + 1;
    if (newRow > 9 || newRow < 0) {
      return 'illegal';
    }
    newArr[0] = newRow;
    newArr[1] = lastSuccessfulMove[1];
    return newArr;
  };
  const getCellToRight = lastSuccessfulMove => {
    // the row needs to change by one
    const newArr = [];
    const newColumn = lastSuccessfulMove[1] + 1;
    if (newColumn > 9 || newColumn < 0) {
      return 'illegal';
    }
    newArr[0] = lastSuccessfulMove[0];
    newArr[1] = newColumn;
    return newArr;
  };
  const getCellToLeft = lastSuccessfulMove => {
    // the row needs to change by one
    const arr = lastSuccessfulMove;
    const newArr = [];
    const newColumn = arr[1] - 1;
    if (newColumn > 9 || newColumn < 0) {
      return 'illegal';
    }
    newArr[0] = lastSuccessfulMove[0];
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    width: 100vw;\n    overflow-x: hidden;\n}\n\nheader {\n    background-color: darkblue;\n    color: rgb(236, 236, 236);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 80px;\n}\n\n.headerContainer {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    justify-content: center;\n}\n\nmain {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    flex-direction: column;\n    gap: 12px;\n    background-color: radial #333;\n}\n\n.topBarContainer {\n    /* outline: 1px solid black; */\n    width: 75vw;\n    height: 80px;\n    margin-top: 24px;\n    display: flex;\n    gap: 10%;\n    justify-content: center;\n    align-items: center;\n}\n\n.topBarContainer p {\n    align-items: center;\n    transition: opacity 0.5s ease-in-out;\n    font-size: 1.4rem;\n    opacity: 1;\n}\n\np.invisible {\n    transition: opacity 0.5s ease-in-out;\n    opacity: 0;\n}\n\nbutton.shipCell {\n    background-color: grey;\n    transition: background-color 0.2s ease-in-out;\n}\n\n#AIBoard button,\n#playerBoard button {\n    border-radius: 0;\n}\n\n.playerBoardContainer,\n.aiBoardContainer {\n    display: grid;\n}\n\n#boardsContainer {\n    display: flex;\n    justify-content: center;\n    gap: 12px;\n    /* outline: 1px solid black */\n    padding: 12px;\n    display: grid;\n    grid-template-rows: none;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 38vw));\n    width: 83vw;\n    margin-bottom: 14px;\n}\n\n.orientationToggleBtn {\n    background-color: #333;\n    color: white;\n    border-radius: 8px;\n    height: 70%;\n    width: 100px;\n    font-size: 1rem;\n}\n\n#boardsContainer p {\n    justify-self: center;\n}\n\n#playerBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 50px);\n}\n\n#AIBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 50px);\n}\n\n/* button.boardCell {\n    border: 1px solid black;\n    border-radius: 0px;\n} */\n\nbutton.shipCell {\n    background-color: grey;\n    border: 1px solid black;\n}\n\nbutton.shipHit {\n    background-color: rgb(22, 94, 22);\n    transition: background-color 0.3s ease-in;\n}\n\n@media only screen and (max-device-width: 812px) {\n    #boardsContainer {\n        display: flex;\n        justify-content: center;\n        gap: 16px;\n        /*  outline: 1px solid black; */\n        padding: 12px;\n        display: grid;\n        grid-template-rows: none;\n        grid-template-columns: repeat(auto-fit, minmax(325px, 38vw));\n        width: 86vw;\n        margin-bottom: 14px;\n        margin-bottom: 24px;\n    }\n\n    #AIBoard {\n        outline: 1px solid black;\n        display: grid;\n        grid-template-columns: repeat(10, 1fr);\n        grid-template-rows: repeat(10, 42px);\n    }\n\n    #playerBoard {\n        outline: 1px solid black;\n        display: grid;\n        grid-template-columns: repeat(10, 1fr);\n        grid-template-rows: repeat(10, 42px);\n    }\n\n    .topBarContainer {\n        /* outline: 1px solid black; */\n        width: 84vw;\n        height: 80px;\n        margin-top: 24px;\n        display: flex;\n        gap: 6%;\n        justify-content: center;\n        align-items: center;\n        background-color: lightgrey;\n        border-radius: 12px 12px;\n        box-shadow: 0px 2px 1px #7a7a7a42;\n        padding: 6px;\n    }\n\n    .topBarContainer p {\n        /* outline: 1px solid black; */\n        font-size: 1.2rem;\n    }\n\n    #boardsContainer p {\n        justify-self: center;\n        font-size: 1.1rem;\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;IAC1B,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,OAAO;IACP,sBAAsB;IACtB,SAAS;IACT,6BAA6B;AACjC;;AAEA;IACI,8BAA8B;IAC9B,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,QAAQ;IACR,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,oCAAoC;IACpC,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,oCAAoC;IACpC,UAAU;AACd;;AAEA;IACI,sBAAsB;IACtB,6CAA6C;AACjD;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,6BAA6B;IAC7B,aAAa;IACb,aAAa;IACb,wBAAwB;IACxB,4DAA4D;IAC5D,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,oCAAoC;AACxC;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,oCAAoC;AACxC;;AAEA;;;GAGG;;AAEH;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,iCAAiC;IACjC,yCAAyC;AAC7C;;AAEA;IACI;QACI,aAAa;QACb,uBAAuB;QACvB,SAAS;QACT,+BAA+B;QAC/B,aAAa;QACb,aAAa;QACb,wBAAwB;QACxB,4DAA4D;QAC5D,WAAW;QACX,mBAAmB;QACnB,mBAAmB;IACvB;;IAEA;QACI,wBAAwB;QACxB,aAAa;QACb,sCAAsC;QACtC,oCAAoC;IACxC;;IAEA;QACI,wBAAwB;QACxB,aAAa;QACb,sCAAsC;QACtC,oCAAoC;IACxC;;IAEA;QACI,8BAA8B;QAC9B,WAAW;QACX,YAAY;QACZ,gBAAgB;QAChB,aAAa;QACb,OAAO;QACP,uBAAuB;QACvB,mBAAmB;QACnB,2BAA2B;QAC3B,wBAAwB;QACxB,iCAAiC;QACjC,YAAY;IAChB;;IAEA;QACI,8BAA8B;QAC9B,iBAAiB;IACrB;;IAEA;QACI,oBAAoB;QACpB,iBAAiB;IACrB;AACJ","sourcesContent":["body {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    width: 100vw;\n    overflow-x: hidden;\n}\n\nheader {\n    background-color: darkblue;\n    color: rgb(236, 236, 236);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 80px;\n}\n\n.headerContainer {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    justify-content: center;\n}\n\nmain {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    flex-direction: column;\n    gap: 12px;\n    background-color: radial #333;\n}\n\n.topBarContainer {\n    /* outline: 1px solid black; */\n    width: 75vw;\n    height: 80px;\n    margin-top: 24px;\n    display: flex;\n    gap: 10%;\n    justify-content: center;\n    align-items: center;\n}\n\n.topBarContainer p {\n    align-items: center;\n    transition: opacity 0.5s ease-in-out;\n    font-size: 1.4rem;\n    opacity: 1;\n}\n\np.invisible {\n    transition: opacity 0.5s ease-in-out;\n    opacity: 0;\n}\n\nbutton.shipCell {\n    background-color: grey;\n    transition: background-color 0.2s ease-in-out;\n}\n\n#AIBoard button,\n#playerBoard button {\n    border-radius: 0;\n}\n\n.playerBoardContainer,\n.aiBoardContainer {\n    display: grid;\n}\n\n#boardsContainer {\n    display: flex;\n    justify-content: center;\n    gap: 12px;\n    /* outline: 1px solid black */\n    padding: 12px;\n    display: grid;\n    grid-template-rows: none;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 38vw));\n    width: 83vw;\n    margin-bottom: 14px;\n}\n\n.orientationToggleBtn {\n    background-color: #333;\n    color: white;\n    border-radius: 8px;\n    height: 70%;\n    width: 100px;\n    font-size: 1rem;\n}\n\n#boardsContainer p {\n    justify-self: center;\n}\n\n#playerBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 50px);\n}\n\n#AIBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 50px);\n}\n\n/* button.boardCell {\n    border: 1px solid black;\n    border-radius: 0px;\n} */\n\nbutton.shipCell {\n    background-color: grey;\n    border: 1px solid black;\n}\n\nbutton.shipHit {\n    background-color: rgb(22, 94, 22);\n    transition: background-color 0.3s ease-in;\n}\n\n@media only screen and (max-device-width: 812px) {\n    #boardsContainer {\n        display: flex;\n        justify-content: center;\n        gap: 16px;\n        /*  outline: 1px solid black; */\n        padding: 12px;\n        display: grid;\n        grid-template-rows: none;\n        grid-template-columns: repeat(auto-fit, minmax(325px, 38vw));\n        width: 86vw;\n        margin-bottom: 14px;\n        margin-bottom: 24px;\n    }\n\n    #AIBoard {\n        outline: 1px solid black;\n        display: grid;\n        grid-template-columns: repeat(10, 1fr);\n        grid-template-rows: repeat(10, 42px);\n    }\n\n    #playerBoard {\n        outline: 1px solid black;\n        display: grid;\n        grid-template-columns: repeat(10, 1fr);\n        grid-template-rows: repeat(10, 42px);\n    }\n\n    .topBarContainer {\n        /* outline: 1px solid black; */\n        width: 84vw;\n        height: 80px;\n        margin-top: 24px;\n        display: flex;\n        gap: 6%;\n        justify-content: center;\n        align-items: center;\n        background-color: lightgrey;\n        border-radius: 12px 12px;\n        box-shadow: 0px 2px 1px #7a7a7a42;\n        padding: 6px;\n    }\n\n    .topBarContainer p {\n        /* outline: 1px solid black; */\n        font-size: 1.2rem;\n    }\n\n    #boardsContainer p {\n        justify-self: center;\n        font-size: 1.1rem;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UDtFQUNEQyxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFVixDQUFDO0FBRUQsTUFBTVIsZUFBZSxHQUFHO0VBQ3RCSSxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxVQUFVLEVBQUUsQ0FDVixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFB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QUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNHd0M7QUFFVDtBQUNKO0FBRTNCM1IsNEVBQVksQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9jb250cm9sbGVycy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9jb250cm9sbGVycy9nYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9mYWN0b3JpZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2ZhY3Rvcmllcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvZmFjdG9yaWVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvaGVscGVycy9hcnJheXNBcmVFcXVhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9oZWxwZXJzL2RlbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2hlbHBlcnMvcm90YXRlQUlCb2FyZHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzcz80M2Y0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlbGF5IH0gZnJvbSAnLi4vaGVscGVycy9kZWxheSdcbmltcG9ydCB7IGdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9nYW1lQ29udHJvbGxlcidcblxuY29uc3QgZ2FtZSA9IGdhbWVDb250cm9sbGVyKClcblxuY29uc3QgcHJlR2FtZVNldHVwID0gKCkgPT4ge1xuICByZW5kZXJQbGF5ZXJCb2FyZCgpXG4gIHBsYWNlQ2FycmllclNoaXAoKVxuICByZW5kZXJBSUJvYXJkKClcbn1cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gYXN5bmMgKCkgPT4ge1xuICAvLyB0aGlzIGlzIHdoZXJlIHRoZSBzaGlwIHBsYWNlbWVudCB3aWxsIGhhcHBlbiBmb3IgaHVtYW4gcGxheWVyXG4gIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG4gIHRvcEJhckNvbnRhaW5lclBhcmEudGV4dENvbnRlbnQgPSAnRW5lbm15IGlzIHBsYWNpbmcgdGhlaXIgc2hpcHMuLi4nXG4gIGF3YWl0IGRlbGF5KDE1MDApXG4gIGdhbWUucGxhY2VBSVNoaXBzKClcbiAgcmVuZGVyQUlCb2FyZCgpXG4gIHRvcEJhckNvbnRhaW5lclBhcmEudGV4dENvbnRlbnQgPSAnJ1xuICBjb25zdCBhaUJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FJQm9hcmQnKVxuICBjb25zdCBwbGF5ZXJzID0gZ2FtZS5nZXRQbGF5ZXJzKClcbiAgY29uc3QgYWN0aXZlUGxheWVyID0gZ2FtZS5nZXRDdXJyZW50UGxheWVyKClcblxuICBpZiAoYWN0aXZlUGxheWVyID09PSBwbGF5ZXJzLmh1bWFuKSB7XG4gICAgY29uc3QgbmV3TWVzc2FnZSA9ICdBdHRhY2sgdGhlIGVuZW1pZXMgc2hpcHMhJ1xuICAgIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG4gICAgdHJhbnNpdGlvblRleHRDaGFuZ2VzKG5ld01lc3NhZ2UsIHRvcEJhckNvbnRhaW5lclBhcmEpXG5cbiAgICBhaUJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0KVxuICB9XG59XG5cbmNvbnN0IHBsYWNlQ2FycmllclNoaXAgPSAoKSA9PiB7XG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBjYXJyaWVyIHNoaXAnXG5cbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXG5cbiAgY29uc3Qgb3JpZW50YXRpb25CdG5WYWx1ZXMgPSBjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0bigpXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMF1cbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBvcmllbnRhdGlvbkJ0blZhbHVlc1sxXVxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IGZhbHNlXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcbiAgICB9IGVsc2Uge1xuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgaHVtYW5Cb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgICdjbGljaycsXG4gICAgKGUpID0+IHtcbiAgICAgIGhhbmRsZUNhcnJpZXJTaGlwUGxhY2VtZW50KGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMsIGNvbnRyb2xsZXIpXG4gICAgfSxcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxuICApXG59XG5cbmNvbnN0IHBsYWNlQmF0dGxlU2hpcCA9ICgpID0+IHtcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIGJhdHRsZXNoaXAnXG5cbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXG5cbiAgY29uc3Qgb3JpZW50YXRpb25CdG5WYWx1ZXMgPSBjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0bigpXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMF1cbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBvcmllbnRhdGlvbkJ0blZhbHVlc1sxXVxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IGZhbHNlXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcbiAgICB9IGVsc2Uge1xuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgaHVtYW5Cb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgICdjbGljaycsXG4gICAgKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnT3JpZW50YXRpb24gc3RhdHVzIGdvaW5nIGludG8gcGxhY2VtZW50OicgK1xuICAgICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXNcbiAgICAgIClcbiAgICAgIGhhbmRsZUJhdHRsZVNoaXBQbGFjZW1lbnQoZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cywgY29udHJvbGxlcilcbiAgICB9LFxuICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XG4gIClcbn1cblxuY29uc3QgcGxhY2VDcnVpc2VyID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgQ3J1aXNlcidcblxuICBjb25zdCBodW1hbkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckJvYXJkJylcblxuICBjb25zdCBvcmllbnRhdGlvbkJ0blZhbHVlcyA9IGNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuKClcbiAgbGV0IGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBvcmllbnRhdGlvbkJ0blZhbHVlc1swXVxuICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZUJ0biA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzFdXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID09PSB0cnVlKSB7XG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gZmFsc2VcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJ1xuICAgIH0gZWxzZSB7XG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICBodW1hbkJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2NsaWNrJyxcbiAgICAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICdPcmllbnRhdGlvbiBzdGF0dXMgZ29pbmcgaW50byBwbGFjZW1lbnQ6JyArXG4gICAgICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1c1xuICAgICAgKVxuICAgICAgaGFuZGxlQ3J1aXNlclNoaXBQbGFjZW1lbnQoZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cywgY29udHJvbGxlcilcbiAgICB9LFxuICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XG4gIClcbn1cblxuY29uc3QgcGxhY2VTdWJtYXJpbmUgPSAoKSA9PiB7XG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBTdWJtYXJpbmUnXG5cbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXG5cbiAgY29uc3Qgb3JpZW50YXRpb25CdG5WYWx1ZXMgPSBjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0bigpXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMF1cbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBvcmllbnRhdGlvbkJ0blZhbHVlc1sxXVxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IGZhbHNlXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcbiAgICB9IGVsc2Uge1xuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXG4gICAgfVxuICB9KVxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgIChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgJ09yaWVudGF0aW9uIHN0YXR1cyBnb2luZyBpbnRvIHBsYWNlbWVudDonICtcbiAgICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzXG4gICAgICApXG4gICAgICBoYW5kbGVTdWJtYXJpbmVTaGlwUGxhY2VtZW50KFxuICAgICAgICBlLFxuICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzLFxuICAgICAgICBjb250cm9sbGVyXG4gICAgICApXG4gICAgfSxcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxuICApXG59XG5cbmNvbnN0IHBsYWNlRGVzdHJveWVyID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgRGVzdHJveWVyJ1xuXG4gIGNvbnN0IGh1bWFuQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyQm9hcmQnKVxuXG4gIGNvbnN0IG9yaWVudGF0aW9uQnRuVmFsdWVzID0gY3JlYXRlT3JpZW50YXRpb25Ub2dnbGVCdG4oKVxuICBsZXQgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzBdXG4gIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlQnRuID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMV1cbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPT09IHRydWUpIHtcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBmYWxzZVxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnVmVydGljYWwnXG4gICAgfSBlbHNlIHtcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJ1xuICAgIH1cbiAgfSlcblxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgIChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgJ09yaWVudGF0aW9uIHN0YXR1cyBnb2luZyBpbnRvIHBsYWNlbWVudDonICtcbiAgICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzXG4gICAgICApXG4gICAgICBoYW5kbGVEZXN0cm95ZXJTaGlwUGxhY2VtZW50KFxuICAgICAgICBlLFxuICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzLFxuICAgICAgICBjb250cm9sbGVyXG4gICAgICApXG4gICAgfSxcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxuICApXG59XG5cbmNvbnN0IHJlbmRlclBsYXllckJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGdhbWUuZ2V0SHVtYW5Cb2FyZCgpXG4gIGNvbnN0IHBsYXllckJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckJvYXJkJylcbiAgcGxheWVyQm9hcmREaXYuaW5uZXJIVE1MID0gJydcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudFJvdyA9IHBsYXllckJvYXJkW2ldXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50Um93Lmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JvYXJkQ2VsbCcpXG4gICAgICBidXR0b24uZGF0YXNldC5yb3cgPSBpXG4gICAgICBidXR0b24uZGF0YXNldC5jb2x1bW4gPSBqXG5cbiAgICAgIHBsYXllckJvYXJkRGl2LmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgcmVuZGVyQUlCb2FyZCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYWlCb2FyZCA9IGdhbWUuZ2V0QUlCb2FyZCgpXG4gIGNvbnN0IGFpQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlCb2FyZCcpXG4gIGFpQm9hcmREaXYuaW5uZXJIVE1MID0gJydcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFpQm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjdXJyZW50Um93ID0gYWlCb2FyZFtpXVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50Um93Lmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JvYXJkQ2VsbCcpXG4gICAgICBidXR0b24uZGF0YXNldC5yb3cgPSBpXG4gICAgICBidXR0b24uZGF0YXNldC5jb2x1bW4gPSBqXG4gICAgICBjb25zdCByb3cgPSBhaUJvYXJkW2ldXG5cbiAgICAgIGlmICh0eXBlb2Ygcm93W2pdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2hpcENlbGwnKVxuICAgICAgfVxuICAgICAgYWlCb2FyZERpdi5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHVwZGF0ZUh1bWFuQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGh1bWFuQm9hcmQgPSBnYW1lLmdldEh1bWFuQm9hcmQoKVxuICBjb25zdCBtaXNzZWRTaG90cyA9IGdhbWUuZ2V0SHVtYW5Cb2FyZE9iai5nZXRNaXNzZWRTaG90cygpXG4gIGNvbnN0IHN1Y2Nlc3NmdWxTaG90cyA9IGdhbWUuZ2V0SHVtYW5Cb2FyZE9iai5nZXRTdWNjZXNzZnVsU2hvdHMoKVxuICBjb25zdCBhbGxEb21Ob2RlcyA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckJvYXJkJykuY2hpbGROb2Rlc1xuICApXG5cbiAgbWlzc2VkU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IHNob3RbMF1cbiAgICBjb25zdCBjb2x1bW4gPSBzaG90WzFdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERvbU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YXJnZXROb2RlID0gYWxsRG9tTm9kZXNbaV0uZGF0YXNldFxuICAgICAgaWYgKCt0YXJnZXROb2RlLmNvbHVtbiA9PT0gY29sdW1uICYmICt0YXJnZXROb2RlLnJvdyA9PT0gcm93KSB7XG4gICAgICAgIGFsbERvbU5vZGVzW2ldLnRleHRDb250ZW50ID0gJ1gnXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHN1Y2Nlc3NmdWxTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XG4gICAgY29uc3Qgcm93ID0gc2hvdFswXVxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRG9tTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXVxuICAgICAgaWYgKFxuICAgICAgICArdGFyZ2V0Tm9kZS5kYXRhc2V0LmNvbHVtbiA9PT0gY29sdW1uICYmXG4gICAgICAgICt0YXJnZXROb2RlLmRhdGFzZXQucm93ID09PSByb3dcbiAgICAgICkge1xuICAgICAgICB0YXJnZXROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXBDZWxsJylcbiAgICAgICAgdGFyZ2V0Tm9kZS5jbGFzc0xpc3QuYWRkKCdzaGlwSGl0JylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5jb25zdCB1cGRhdGVBSUJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBhaUJvYXJkID0gZ2FtZS5nZXRBSUJvYXJkKClcbiAgY29uc3QgbWlzc2VkU2hvdHMgPSBnYW1lLmdldEFJQm9hcmRPYmouZ2V0TWlzc2VkU2hvdHMoKVxuICBjb25zdCBzdWNjZXNzZnVsU2hvdHMgPSBnYW1lLmdldEFJQm9hcmRPYmouZ2V0U3VjY2Vzc2Z1bFNob3RzKClcbiAgY29uc3QgYWxsRG9tTm9kZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSUJvYXJkJykuY2hpbGROb2RlcylcblxuICBtaXNzZWRTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XG4gICAgY29uc3Qgcm93ID0gc2hvdFswXVxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRG9tTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXS5kYXRhc2V0XG4gICAgICBpZiAodGFyZ2V0Tm9kZS5jb2x1bW4gPT09IGNvbHVtbiAmJiB0YXJnZXROb2RlLnJvdyA9PT0gcm93KSB7XG4gICAgICAgIGFsbERvbU5vZGVzW2ldLnRleHRDb250ZW50ID0gJ1gnXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHN1Y2Nlc3NmdWxTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XG4gICAgY29uc3Qgcm93ID0gc2hvdFswXVxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRG9tTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXVxuICAgICAgaWYgKFxuICAgICAgICB0YXJnZXROb2RlLmRhdGFzZXQuY29sdW1uID09PSBjb2x1bW4gJiZcbiAgICAgICAgdGFyZ2V0Tm9kZS5kYXRhc2V0LnJvdyA9PT0gcm93XG4gICAgICApIHtcbiAgICAgICAgdGFyZ2V0Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwQ2VsbCcpXG4gICAgICAgIHRhcmdldE5vZGUuY2xhc3NMaXN0LmFkZCgnc2hpcEhpdCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgaGFuZGxlQ2FycmllclNoaXBQbGFjZW1lbnQgPSAoXG4gIGUsXG4gIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXG4gIGNvbnRyb2xsZXJcbikgPT4ge1xuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cbiAgY29uc3QgY29vcmRpbmF0ZSA9IFtzZWxlY3RlZFJvdywgc2VsZWN0ZWRDb2x1bW5dXG5cbiAgY29uc3QgY2FycmllclBsYWNlZCA9IHBsYWNlQ2Fycmllck9uQm9hcmQoXG4gICAgY29vcmRpbmF0ZSxcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXG4gIClcblxuICBpZiAoY2FycmllclBsYWNlZCkge1xuICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxuICAgIHJlbW92ZVByZXZpb3VzT3JpZW50YXRpb25CdG4oKVxuICAgIHBsYWNlQmF0dGxlU2hpcCgpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBsYWNlQ2FycmllclNoaXBcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVCYXR0bGVTaGlwUGxhY2VtZW50ID0gKFxuICBlLFxuICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICBjb250cm9sbGVyXG4pID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxuXG4gIGNvbnN0IGJhdHRsZXNoaXBQbGFjZWQgPSBwbGFjZUJhdHRsZXNoaXBPbkJvYXJkKFxuICAgIGNvb3JkaW5hdGUsXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxuICApXG5cbiAgaWYgKGJhdHRsZXNoaXBQbGFjZWQpIHtcbiAgICBjb250cm9sbGVyLmFib3J0KClcbiAgICByZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuKClcbiAgICBwbGFjZUNydWlzZXIoKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwbGFjZUJhdHRsZVNoaXBcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVDcnVpc2VyU2hpcFBsYWNlbWVudCA9IChcbiAgZSxcbiAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgY29udHJvbGxlclxuKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cblxuICBjb25zdCBjcnVpc2VyUGxhY2VkID0gcGxhY2VDcnVpc2VyT25Cb2FyZChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuXG4gIGlmIChjcnVpc2VyUGxhY2VkKSB7XG4gICAgY29udHJvbGxlci5hYm9ydCgpXG4gICAgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0bigpXG4gICAgcGxhY2VTdWJtYXJpbmUoKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwbGFjZUNydWlzZXJcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVTdWJtYXJpbmVTaGlwUGxhY2VtZW50ID0gKFxuICBlLFxuICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICBjb250cm9sbGVyXG4pID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxuXG4gIGNvbnN0IHN1Ym1hcmluZVBsYWNlZCA9IHBsYWNlU3VibWFyaW5lT25Cb2FyZChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuXG4gIGlmIChzdWJtYXJpbmVQbGFjZWQpIHtcbiAgICBjb250cm9sbGVyLmFib3J0KClcbiAgICByZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuKClcbiAgICBwbGFjZURlc3Ryb3llcigpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBsYWNlU3VibWFyaW5lXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlRGVzdHJveWVyU2hpcFBsYWNlbWVudCA9IChcbiAgZSxcbiAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgY29udHJvbGxlclxuKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cbiAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcblxuICBjb25zdCBkZXN0cm95ZXJQbGFjZWQgPSBwbGFjZURlc3Ryb3llck9uQm9hcmQoXG4gICAgY29vcmRpbmF0ZSxcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXG4gIClcblxuICBpZiAoZGVzdHJveWVyUGxhY2VkKSB7XG4gICAgY29udHJvbGxlci5hYm9ydCgpXG4gICAgdG9wQmFyQ29udGFpbmVyUGFyYS50ZXh0Q29udGVudCA9ICcnXG4gICAgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0bigpXG4gICAgZGlzcGxheUNvbnRyb2xsZXIoKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwbGFjZURlc3Ryb3llclxuICB9XG59XG5cbmNvbnN0IHBsYWNlQ2Fycmllck9uQm9hcmQgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xuICBjb25zdCBzaGlwVHlwZSA9ICdjYXJyaWVyJ1xuICBjb25zdCBjYXJyaWVyUGxhY2VkID0gZ2FtZS5wbGFjZUNhcnJpZXJTaGlwKFxuICAgIGNvb3JkaW5hdGUsXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxuICApXG4gIGNvbnN0IGJvYXJkRE9NQ2VsbHNBcnIgPSBbXG4gICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYXllckJvYXJkID4gYnV0dG9uJylcbiAgXVxuICBpZiAoIWNhcnJpZXJQbGFjZWQpIHtcbiAgICByZXR1cm4gY2FycmllclBsYWNlZFxuICB9IGVsc2Uge1xuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGdldFZlcnRpY2FsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2FycmllclBsYWNlZFxufVxuXG5jb25zdCBwbGFjZUJhdHRsZXNoaXBPbkJvYXJkID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgY29uc3Qgc2hpcFR5cGUgPSAnYmF0dGxlc2hpcCdcbiAgY29uc3QgYmF0dGxlc2hpcFBsYWNlZCA9IGdhbWUucGxhY2VCYXR0bGVTaGlwKFxuICAgIGNvb3JkaW5hdGUsXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxuICApXG4gIGNvbnN0IGJvYXJkRE9NQ2VsbHNBcnIgPSBbXG4gICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYXllckJvYXJkID4gYnV0dG9uJylcbiAgXVxuICBpZiAoIWJhdHRsZXNoaXBQbGFjZWQpIHtcbiAgICByZXR1cm4gYmF0dGxlc2hpcFBsYWNlZFxuICB9IGVsc2Uge1xuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGdldFZlcnRpY2FsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH1cbiAgfVxuICByZXR1cm4gYmF0dGxlc2hpcFBsYWNlZFxufVxuXG5jb25zdCBwbGFjZUNydWlzZXJPbkJvYXJkID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgY29uc3Qgc2hpcFR5cGUgPSAnY3J1aXNlcidcbiAgY29uc3QgY3J1aXNlclBsYWNlZCA9IGdhbWUucGxhY2VDcnVpc2VyU2hpcChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuICBjb25zdCBib2FyZERPTUNlbGxzQXJyID0gW1xuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXG4gIF1cbiAgaWYgKCFjcnVpc2VyUGxhY2VkKSB7XG4gICAgcmV0dXJuIGNydWlzZXJQbGFjZWRcbiAgfSBlbHNlIHtcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZ2V0SG9yaXpvbnRhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBnZXRWZXJ0aWNhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNydWlzZXJQbGFjZWRcbn1cblxuY29uc3QgcGxhY2VTdWJtYXJpbmVPbkJvYXJkID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgY29uc3Qgc2hpcFR5cGUgPSAnc3VibWFyaW5lJ1xuICBjb25zdCBzdWJtYXJpbmVQbGFjZWQgPSBnYW1lLnBsYWNlU3VibWFyaW5lU2hpcChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuICBjb25zdCBib2FyZERPTUNlbGxzQXJyID0gW1xuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXG4gIF1cbiAgaWYgKCFzdWJtYXJpbmVQbGFjZWQpIHtcbiAgICByZXR1cm4gc3VibWFyaW5lUGxhY2VkXG4gIH0gZWxzZSB7XG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGdldEhvcml6b250YWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZ2V0VmVydGljYWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdWJtYXJpbmVQbGFjZWRcbn1cblxuY29uc3QgcGxhY2VEZXN0cm95ZXJPbkJvYXJkID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgY29uc3Qgc2hpcFR5cGUgPSAnZGVzdHJveWVyJ1xuICBjb25zdCBkZXN0cm95ZXJQbGFjZWQgPSBnYW1lLnBsYWNlRGVzdHJveWVyU2hpcChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuICBjb25zdCBib2FyZERPTUNlbGxzQXJyID0gW1xuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXG4gIF1cbiAgaWYgKCFkZXN0cm95ZXJQbGFjZWQpIHtcbiAgICByZXR1cm4gZGVzdHJveWVyUGxhY2VkXG4gIH0gZWxzZSB7XG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGdldEhvcml6b250YWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZ2V0VmVydGljYWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXG4gICAgfVxuICB9XG4gIHJldHVybiBkZXN0cm95ZXJQbGFjZWRcbn1cblxuY29uc3QgZ2V0SG9yaXpvbnRhbERPTUNvb3JkcyA9IChjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSkgPT4ge1xuICBjb25zdCBzdGFydGluZ0NvbHVtbiA9IE51bWJlcihjb29yZGluYXRlWzFdKVxuICBjb25zdCBzaGlwTGVuZ3RoID1cbiAgICBzaGlwVHlwZSA9PT0gJ2NhcnJpZXInXG4gICAgICA/IDVcbiAgICAgIDogc2hpcFR5cGUgPT09ICdiYXR0bGVzaGlwJ1xuICAgICAgPyA0XG4gICAgICA6IHNoaXBUeXBlID09PSAnY3J1aXNlcidcbiAgICAgID8gM1xuICAgICAgOiBzaGlwVHlwZSA9PT0gJ3N1Ym1hcmluZSdcbiAgICAgID8gM1xuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2Rlc3Ryb3llcidcbiAgICAgID8gMlxuICAgICAgOiBudWxsXG5cbiAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nQ29sdW1uOyBpIDwgc3RhcnRpbmdDb2x1bW4gKyBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSArY29vcmRpbmF0ZVswXVxuICAgIGNvbnN0IGNvbHVtbiA9IGlcbiAgICBjb25zdCBkb21Db29yZGluYXRlID0gW3JvdywgY29sdW1uXVxuICAgIGNvbnN0IHRhcmdldERPTUJ0biA9IGZpbmRTaGlwRE9NQnRuKGJvYXJkRE9NQ2VsbHNBcnIsIGRvbUNvb3JkaW5hdGUpXG4gICAgdGFyZ2V0RE9NQnRuLmNsYXNzTGlzdC5hZGQoJ3NoaXBDZWxsJylcbiAgfVxufVxuXG5jb25zdCBnZXRWZXJ0aWNhbERPTUNvb3JkcyA9IChjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSkgPT4ge1xuICBjb25zdCBzdGFydGluZ1JvdyA9IE51bWJlcihjb29yZGluYXRlWzBdKVxuICBjb25zdCBzaGlwTGVuZ3RoID1cbiAgICBzaGlwVHlwZSA9PT0gJ2NhcnJpZXInXG4gICAgICA/IDVcbiAgICAgIDogc2hpcFR5cGUgPT09ICdiYXR0bGVzaGlwJ1xuICAgICAgPyA0XG4gICAgICA6IHNoaXBUeXBlID09PSAnY3J1aXNlcidcbiAgICAgID8gM1xuICAgICAgOiBzaGlwVHlwZSA9PT0gJ3N1Ym1hcmluZSdcbiAgICAgID8gM1xuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2Rlc3Ryb3llcidcbiAgICAgID8gMlxuICAgICAgOiBudWxsXG5cbiAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nUm93OyBpID4gc3RhcnRpbmdSb3cgLSBzaGlwTGVuZ3RoOyBpLS0pIHtcbiAgICBjb25zdCByb3cgPSBpXG4gICAgY29uc3QgY29sdW1uID0gK2Nvb3JkaW5hdGVbMV1cbiAgICBjb25zdCBkb21Db29yZGluYXRlID0gW3JvdywgY29sdW1uXVxuICAgIGNvbnN0IHRhcmdldERPTUJ0biA9IGZpbmRTaGlwRE9NQnRuKGJvYXJkRE9NQ2VsbHNBcnIsIGRvbUNvb3JkaW5hdGUpXG4gICAgdGFyZ2V0RE9NQnRuLmNsYXNzTGlzdC5hZGQoJ3NoaXBDZWxsJylcbiAgfVxufVxuXG5jb25zdCBmaW5kU2hpcERPTUJ0biA9IChib2FyZERPTUNlbGxzQXJyLCBkb21Db29yZGluYXRlKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRET01DZWxsc0Fyci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRvbUNlbGxSb3cgPSArYm9hcmRET01DZWxsc0FycltpXS5kYXRhc2V0LnJvd1xuICAgIGNvbnN0IGRvbUNlbGxDb2x1bW4gPSArYm9hcmRET01DZWxsc0FycltpXS5kYXRhc2V0LmNvbHVtblxuICAgIGlmIChkb21DZWxsUm93ID09PSBkb21Db29yZGluYXRlWzBdICYmIGRvbUNlbGxDb2x1bW4gPT09IGRvbUNvb3JkaW5hdGVbMV0pIHtcbiAgICAgIHJldHVybiBib2FyZERPTUNlbGxzQXJyW2ldXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dCA9IGFzeW5jIChlKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxuICBjb25zdCBhaUJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FJQm9hcmQnKVxuXG4gIGlmICghc2VsZWN0ZWRDb2x1bW4gfHwgIXNlbGVjdGVkUm93KSB7XG4gICAgcmV0dXJuIGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dFxuICB9XG5cbiAgY29uc3QgYWlCb2FyZCA9IGdhbWUuZ2V0QUlCb2FyZE9ialxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cbiAgY29uc3QgYWxyZWFkeUF0dGFja2VkID0gYWlCb2FyZC5wcmV2ZW50U2FtZUF0dGFjayhjb29yZGluYXRlKVxuICBpZiAoYWxyZWFkeUF0dGFja2VkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBnYW1lLnBsYXlSb3VuZChjb29yZGluYXRlKVxuICBjb25zdCBodW1hbk1vdmVTdWNjZXNzZnVsID0gZ2FtZS5nZXRBSUJvYXJkT2JqLmdldExhc3RIdW1hbk1vdmVTdWNjZXNzZnVsKClcbiAgaHVtYW5Nb3ZlU3VjY2Vzc2Z1bFxuICAgID8gZGlzcGxheVN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlKCdodW1hbicpXG4gICAgOiBkaXNwbGF5VW5zdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSgnaHVtYW4nKVxuXG4gIGNvbnN0IGh1bWFuV2lucyA9IGdhbWUuY2hlY2tGb3JXaW4oKVxuXG4gIHVwZGF0ZUFJQm9hcmQoKVxuICBhd2FpdCBkZWxheSg0MDAwKVxuICAvLyBjcmVhdGUgaGFuZGxlV2luKCkgZnVuY3Rpb25cbiAgaGFuZGxlV2luQ2hlY2soaHVtYW5XaW5zLCBhaUJvYXJkRGl2KVxuICBoYW5kbGVBSU1vdmUoYWlCb2FyZERpdilcbn1cblxuY29uc3QgaGFuZGxlQUlNb3ZlID0gYXN5bmMgKGFpQm9hcmREaXYpID0+IHtcbiAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgY29uc3QgZW5lbXlBdHRhY2tpbmdNc2cgPSAnRW5lbXkgaXMgYXR0YWNraW5nIHlvdXIgc2hpcHMhJ1xuICB0cmFuc2l0aW9uVGV4dENoYW5nZXMoZW5lbXlBdHRhY2tpbmdNc2csIHRvcEJhckNvbnRhaW5lclBhcmEpXG4gIGF3YWl0IGRlbGF5KDMwMDApXG4gIGdhbWUucGxheVJvdW5kKClcbiAgY29uc3QgYWlNb3ZlU3VjY2Vzc2Z1bCA9IGdhbWUuZ2V0SHVtYW5Cb2FyZE9iai5nZXRMYXN0QUlNb3ZlU3VjY2Vzc2Z1bCgpXG4gIGFpTW92ZVN1Y2Nlc3NmdWxcbiAgICA/IGRpc3BsYXlTdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSgnY29tcHV0ZXInKVxuICAgIDogZGlzcGxheVVuc3VjY2Vzc2Z1bEF0dGFja01lc3NhZ2UoJ2NvbXB1dGVyJylcblxuICBjb25zdCBhaVdpbnMgPSBnYW1lLmNoZWNrRm9yV2luKClcblxuICB1cGRhdGVIdW1hbkJvYXJkKClcbiAgYXdhaXQgZGVsYXkoMjUwMClcbiAgY29uc3QgYXR0YWNrVGhlRW5lbXlNc2cgPSAnQXR0YWNrIHRoZSBlbmVtaWVzIHNoaXBzLi4uJ1xuICB0cmFuc2l0aW9uVGV4dENoYW5nZXMoYXR0YWNrVGhlRW5lbXlNc2csIHRvcEJhckNvbnRhaW5lclBhcmEpXG5cbiAgYXdhaXQgZGVsYXkoNDAwMClcbiAgaGFuZGxlV2luQ2hlY2soYWlXaW5zLCBhaUJvYXJkRGl2KVxufVxuXG5jb25zdCBhbm5vdW5jZVdpbm5lciA9ICh3aW5uZXIpID0+IHtcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgY29uc3Qgd2lubmVyTmFtZSA9IHdpbm5lci5nZXROYW1lKClcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9IGAke3dpbm5lck5hbWV9IHdpbidzIWBcbn1cblxuY29uc3QgcGxheUFnYWluID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyJylcbiAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgcGxheUFnYWluQnRuLnRleHRDb250ZW50ID0gJ1BsYXkgYWdhaW4nXG4gIHRvcEJhckRpdi5hcHBlbmRDaGlsZChwbGF5QWdhaW5CdG4pXG4gIHBsYXlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0TmV3R2FtZSlcbn1cblxuY29uc3Qgc3RhcnROZXdHYW1lID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyJylcbiAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IGJ1dHRvbicpXG4gIHRvcEJhckRpdi5yZW1vdmVDaGlsZChwbGF5QWdhaW5CdG4pXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJykudGV4dENvbnRlbnQgPSAnJ1xuICBkaXNwbGF5Q29udHJvbGxlcigpXG59XG5cbi8vIEZvciBlYWNoIG9mIHRoZSBwbGFjZSBzaGlwIGZ1bmN0aW9ucywgd2UgbmVlZCB0byByZW1vdmUgdGhlIHByZXZpb3VzXG4vLyBvcmllbnRhdGlvbiB0b2dnbGUgYnV0dG9uIHRvIHByZXZlbnQgdGhlIHNhbWUgbGlzdGVuZXIgZmlyaW5nIGZvciBlYWNoIG9mIHRoZVxuLy8gcHJldmlvdXMgb3JpZW50YXRpb24gdG9nZ2xlIGJ1dHRvbnNcbmNvbnN0IHJlbW92ZVByZXZpb3VzT3JpZW50YXRpb25CdG4gPSAoKSA9PiB7XG4gIGNvbnN0IHRvcEJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXInKVxuICBjb25zdCBwcmV2aW91c09yaWVudGF0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yaWVudGF0aW9uVG9nZ2xlQnRuJylcbiAgdG9wQmFyRGl2LnJlbW92ZUNoaWxkKHByZXZpb3VzT3JpZW50YXRpb25CdG4pXG59XG5cbmNvbnN0IGNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyJylcbiAgY29uc3QgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5jbGFzc0xpc3QuYWRkKCdvcmllbnRhdGlvblRvZ2dsZUJ0bicpXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXG4gIHRvcEJhckRpdi5hcHBlbmRDaGlsZChvcmllbnRhdGlvblRvZ2dsZUJ0bilcblxuICByZXR1cm4gW2hvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMsIG9yaWVudGF0aW9uVG9nZ2xlQnRuXVxufVxuXG5jb25zdCBkaXNwbGF5U3VjY2Vzc2Z1bEF0dGFja01lc3NhZ2UgPSAocGxheWVyKSA9PiB7XG4gIGlmIChwbGF5ZXIgPT09ICdodW1hbicpIHtcbiAgICBjb25zdCB0b3BCYXJDb250YWluZXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxuICAgIGNvbnN0IGF0dGFja0FuZEhpdE1zZyA9ICdZb3UgYXR0YWNrZWQgdGhlIGVuZW15Li4uIGFuZCBoaXQgdGhlaXIgc2hpcCEnXG4gICAgc2V0VGltZW91dCh0cmFuc2l0aW9uVGV4dENoYW5nZXMoYXR0YWNrQW5kSGl0TXNnLCB0b3BCYXJDb250YWluZXJQYXJhKSwgMTApXG4gIH0gZWxzZSBpZiAocGxheWVyID09PSAnY29tcHV0ZXInKSB7XG4gICAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgICBjb25zdCBlbmVteUhpdE1zZyA9ICdUaGUgZW5lbXkgbGF1bmNoZWQgYW4gYXR0YWNrLi4uIGFuZCBoaXQgeW91ciBzaGlwISdcbiAgICBzZXRUaW1lb3V0KHRyYW5zaXRpb25UZXh0Q2hhbmdlcyhlbmVteUhpdE1zZywgdG9wQmFyQ29udGFpbmVyUGFyYSksIDEwKVxuICB9XG59XG5cbmNvbnN0IGRpc3BsYXlVbnN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlID0gKHBsYXllcikgPT4ge1xuICBpZiAocGxheWVyID09PSAnaHVtYW4nKSB7XG4gICAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgICBjb25zdCB1bnN1Y2Nlc3NmdWxBdHRhY2tNc2cgPSAnWW91IGF0dGFjayBvbiB0aGUgZW5lbXkgd2FzIHVuc3VjY2Vzc2Z1bCdcbiAgICBzZXRUaW1lb3V0KFxuICAgICAgdHJhbnNpdGlvblRleHRDaGFuZ2VzKHVuc3VjY2Vzc2Z1bEF0dGFja01zZywgdG9wQmFyQ29udGFpbmVyUGFyYSksXG4gICAgICAxMFxuICAgIClcbiAgfSBlbHNlIGlmIChwbGF5ZXIgPT09ICdjb21wdXRlcicpIHtcbiAgICBjb25zdCB0b3BCYXJDb250YWluZXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxuICAgIGNvbnN0IHVuc3VjY2Vzc2Z1bEVuZW15QXR0YWNrTXNnID0gJ1RoZSBlbmVtaWVzIGF0dGFjayB3YXMgdW5zdWNjZXNzZnVsJ1xuICAgIHNldFRpbWVvdXQoXG4gICAgICB0cmFuc2l0aW9uVGV4dENoYW5nZXModW5zdWNjZXNzZnVsRW5lbXlBdHRhY2tNc2csIHRvcEJhckNvbnRhaW5lclBhcmEpLFxuICAgICAgMTBcbiAgICApXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlV2luQ2hlY2sgPSAod2luQ2hlY2ssIGJvYXJkRGl2KSA9PiB7XG4gIGlmICh3aW5DaGVjaykge1xuICAgIGJvYXJkRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0KVxuICAgIGdhbWUucmVzZXRHYW1lU3RhdGUoKVxuICAgIGFubm91bmNlV2lubmVyKHdpbkNoZWNrKVxuICAgIHBsYXlBZ2FpbigpXG4gIH1cbn1cblxuY29uc3QgdHJhbnNpdGlvblRleHRDaGFuZ2VzID0gYXN5bmMgKG5ld01lc3NhZ2UsIGRvbUVsZW1lbnQpID0+IHtcbiAgZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKVxuICBhd2FpdCBkZWxheSg0MDApXG4gIGRvbUVsZW1lbnQudGV4dENvbnRlbnQgPSBuZXdNZXNzYWdlXG4gIGF3YWl0IGRlbGF5KDQwMClcbiAgZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKVxufVxuXG4vLyBjb25zdCBoYW5kbGVQbGF5ZXJTZWxldGlvblxuXG5leHBvcnQgeyByZW5kZXJQbGF5ZXJCb2FyZCwgcmVuZGVyQUlCb2FyZCwgZGlzcGxheUNvbnRyb2xsZXIsIHByZUdhbWVTZXR1cCB9XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuLi9mYWN0b3JpZXMvR2FtZWJvYXJkJ1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vZmFjdG9yaWVzL1BsYXllcidcbmltcG9ydCB7IHJldHVyblJhbmRvbUFJQm9hcmQgfSBmcm9tICcuLi9oZWxwZXJzL3JvdGF0ZUFJQm9hcmRzJ1xuXG5jb25zdCBnYW1lQ29udHJvbGxlciA9ICgpID0+IHtcbiAgLy8gQ3JlYXRlIHR3byBnYW1lIGJvYXJkc1xuICBjb25zdCBodW1hbkJvYXJkID0gR2FtZWJvYXJkKClcbiAgaHVtYW5Cb2FyZC5jcmVhdGVHYW1lQm9hcmQoKVxuXG4gIGNvbnN0IGFpQm9hcmQgPSBHYW1lYm9hcmQoKVxuICBhaUJvYXJkLmNyZWF0ZUdhbWVCb2FyZCgpXG5cbiAgY29uc3QgcGxhY2VDYXJyaWVyU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gICAgbGV0IGNhcnJpZXJQbGFjZWQgPSB0cnVlXG5cbiAgICBjb25zdCBjYXJyaWVyQXJyID0gZGV0ZXJtaW5lQ2FycmllckFyckNvb3JkcyhcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXG4gICAgICBjb29yZGluYXRlXG4gICAgKVxuXG4gICAgY29uc3Qgc2hpcFBsYWNlZCA9IGh1bWFuQm9hcmQucGxhY2VTaGlwKGNhcnJpZXJBcnIpXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XG4gICAgICBjYXJyaWVyUGxhY2VkID0gZmFsc2VcbiAgICAgIHJldHVybiBjYXJyaWVyUGxhY2VkXG4gICAgfVxuXG4gICAgcmV0dXJuIGNhcnJpZXJQbGFjZWRcbiAgfVxuXG4gIGNvbnN0IGRldGVybWluZUNhcnJpZXJBcnJDb29yZHMgPSAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbiwgY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IGNhcnJpZXJBcnIgPSBbXVxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBjYXJyaWVyQXJyLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gW2Nvb3JkaW5hdGVbMF0sICgrY29vcmRpbmF0ZVsxXSArIGkpLnRvU3RyaW5nKCldXG4gICAgICAgIGNhcnJpZXJBcnIucHVzaChjb29yZClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBjYXJyaWVyQXJyLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gWygrY29vcmRpbmF0ZVswXSAtIGkpLnRvU3RyaW5nKCksIGNvb3JkaW5hdGVbMV1dXG4gICAgICAgIGNhcnJpZXJBcnIucHVzaChjb29yZClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNhcnJpZXJBcnJcbiAgfVxuXG4gIGNvbnN0IHBsYWNlQmF0dGxlU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gICAgbGV0IGJhdHRsZXNoaXBQbGFjZWQgPSB0cnVlXG4gICAgY29uc3QgYmF0dGxlc2hpcEFyciA9IGRldGVybWluZUJhdHRsZXNoaXBBcnJDb29yZHMoXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICAgICAgY29vcmRpbmF0ZVxuICAgIClcblxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChiYXR0bGVzaGlwQXJyKVxuICAgIGlmICghc2hpcFBsYWNlZCkge1xuICAgICAgYmF0dGxlc2hpcFBsYWNlZCA9IGZhbHNlXG4gICAgICByZXR1cm4gYmF0dGxlc2hpcFBsYWNlZFxuICAgIH1cblxuICAgIHJldHVybiBiYXR0bGVzaGlwUGxhY2VkXG4gIH1cblxuICBjb25zdCBkZXRlcm1pbmVCYXR0bGVzaGlwQXJyQ29vcmRzID0gKFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXG4gICAgY29vcmRpbmF0ZVxuICApID0+IHtcbiAgICBjb25zdCBiYXR0bGVzaGlwQXJyID0gW11cbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgYmF0dGxlc2hpcEFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFtjb29yZGluYXRlWzBdLCAoK2Nvb3JkaW5hdGVbMV0gKyBpKS50b1N0cmluZygpXVxuICAgICAgICBiYXR0bGVzaGlwQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgYmF0dGxlc2hpcEFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFsoK2Nvb3JkaW5hdGVbMF0gLSBpKS50b1N0cmluZygpLCBjb29yZGluYXRlWzFdXVxuICAgICAgICBiYXR0bGVzaGlwQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiYXR0bGVzaGlwQXJyXG4gIH1cblxuICBjb25zdCBwbGFjZUNydWlzZXJTaGlwID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgICBsZXQgY3J1aXNlclBsYWNlZCA9IHRydWVcbiAgICBjb25zdCBjcnVpc2VyQXJyID0gZGV0ZXJtaW5lQ3J1aXNlckFyckNvb3JkcyhcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXG4gICAgICBjb29yZGluYXRlXG4gICAgKVxuXG4gICAgY29uc3Qgc2hpcFBsYWNlZCA9IGh1bWFuQm9hcmQucGxhY2VTaGlwKGNydWlzZXJBcnIpXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XG4gICAgICBjcnVpc2VyUGxhY2VkID0gZmFsc2VcbiAgICAgIHJldHVybiBjcnVpc2VyUGxhY2VkXG4gICAgfVxuXG4gICAgcmV0dXJuIGNydWlzZXJQbGFjZWRcbiAgfVxuXG4gIGNvbnN0IGRldGVybWluZUNydWlzZXJBcnJDb29yZHMgPSAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbiwgY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IGNydWlzZXJBcnIgPSBbXVxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBjcnVpc2VyQXJyLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gW2Nvb3JkaW5hdGVbMF0sICgrY29vcmRpbmF0ZVsxXSArIGkpLnRvU3RyaW5nKCldXG4gICAgICAgIGNydWlzZXJBcnIucHVzaChjb29yZClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBjcnVpc2VyQXJyLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gWygrY29vcmRpbmF0ZVswXSAtIGkpLnRvU3RyaW5nKCksIGNvb3JkaW5hdGVbMV1dXG4gICAgICAgIGNydWlzZXJBcnIucHVzaChjb29yZClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNydWlzZXJBcnJcbiAgfVxuXG4gIGNvbnN0IHBsYWNlU3VibWFyaW5lU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gICAgbGV0IHN1Ym1hcmluZVBsYWNlZCA9IHRydWVcbiAgICBjb25zdCBzdWJtYXJpbmVBcnIgPSBkZXRlcm1pbmVTdWJtYXJpbmVBcnJDb29yZHMoXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICAgICAgY29vcmRpbmF0ZVxuICAgIClcblxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChzdWJtYXJpbmVBcnIpXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XG4gICAgICBzdWJtYXJpbmVQbGFjZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIHN1Ym1hcmluZVBsYWNlZFxuICAgIH1cblxuICAgIHJldHVybiBzdWJtYXJpbmVQbGFjZWRcbiAgfVxuXG4gIGNvbnN0IGRldGVybWluZVN1Ym1hcmluZUFyckNvb3JkcyA9IChcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICAgIGNvb3JkaW5hdGVcbiAgKSA9PiB7XG4gICAgY29uc3Qgc3VibWFyaW5lQXJyID0gW11cbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgc3VibWFyaW5lQXJyLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gW2Nvb3JkaW5hdGVbMF0sICgrY29vcmRpbmF0ZVsxXSArIGkpLnRvU3RyaW5nKCldXG4gICAgICAgIHN1Ym1hcmluZUFyci5wdXNoKGNvb3JkKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIHN1Ym1hcmluZUFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFsoK2Nvb3JkaW5hdGVbMF0gLSBpKS50b1N0cmluZygpLCBjb29yZGluYXRlWzFdXVxuICAgICAgICBzdWJtYXJpbmVBcnIucHVzaChjb29yZClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1Ym1hcmluZUFyclxuICB9XG5cbiAgY29uc3QgcGxhY2VEZXN0cm95ZXJTaGlwID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgICBsZXQgZGVzdHJveWVyUGxhY2VkID0gdHJ1ZVxuICAgIGNvbnN0IGRlc3Ryb3llckFyciA9IGRldGVybWluZURlc3Ryb3llckFyckNvb3JkcyhcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXG4gICAgICBjb29yZGluYXRlXG4gICAgKVxuXG4gICAgY29uc3Qgc2hpcFBsYWNlZCA9IGh1bWFuQm9hcmQucGxhY2VTaGlwKGRlc3Ryb3llckFycilcbiAgICBpZiAoIXNoaXBQbGFjZWQpIHtcbiAgICAgIGRlc3Ryb3llclBsYWNlZCA9IGZhbHNlXG4gICAgICByZXR1cm4gZGVzdHJveWVyUGxhY2VkXG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxuICB9XG5cbiAgY29uc3QgZGV0ZXJtaW5lRGVzdHJveWVyQXJyQ29vcmRzID0gKFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXG4gICAgY29vcmRpbmF0ZVxuICApID0+IHtcbiAgICBjb25zdCBkZXN0cm95ZXJBcnIgPSBbXVxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBkZXN0cm95ZXJBcnIucHVzaChjb29yZGluYXRlKVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cbiAgICAgICAgZGVzdHJveWVyQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZGVzdHJveWVyQXJyLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gWygrY29vcmRpbmF0ZVswXSAtIGkpLnRvU3RyaW5nKCksIGNvb3JkaW5hdGVbMV1dXG4gICAgICAgIGRlc3Ryb3llckFyci5wdXNoKGNvb3JkKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVzdHJveWVyQXJyXG4gIH1cblxuICBjb25zdCBwbGFjZUFJU2hpcHMgPSAoKSA9PiB7XG4gICAgcGxhY2VTaGlwcyhhaUJvYXJkLCByZXR1cm5SYW5kb21BSUJvYXJkKCkpXG4gIH1cblxuICBjb25zdCBwbGF5ZXJzID0ge31cblxuICBjb25zdCBnZXRQbGF5ZXJzID0gKCkgPT4ge1xuICAgIHJldHVybiBwbGF5ZXJzXG4gIH1cblxuICBjb25zdCBodW1hblBsYXllciA9IFBsYXllcignSHVtYW4nLCBmYWxzZSlcbiAgY29uc3QgYWlQbGF5ZXIgPSBQbGF5ZXIoJ0FJJywgdHJ1ZSlcbiAgcGxheWVycy5odW1hbiA9IGh1bWFuUGxheWVyXG4gIHBsYXllcnMuQUkgPSBhaVBsYXllclxuXG4gIGxldCBjdXJyZW50UGxheWVyID0gcGxheWVycy5odW1hblxuXG4gIGNvbnN0IGdldEN1cnJlbnRQbGF5ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGN1cnJlbnRQbGF5ZXJcbiAgfVxuXG4gIGNvbnN0IHBsYXlSb3VuZCA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpID09PSBwbGF5ZXJzLmh1bWFuLmdldE5hbWUoKSkge1xuICAgICAgYWlCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpXG4gICAgfSBlbHNlIGlmIChjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5BSS5nZXROYW1lKCkpIHtcbiAgICAgIGNvbnN0IG5leHRNb3ZlID0gY29tcHV0ZXJzTmV4dE1vdmUoKVxuICAgICAgaHVtYW5Cb2FyZC5yZWNlaXZlQXR0YWNrKG5leHRNb3ZlKVxuICAgICAgaHVtYW5Cb2FyZC5yZW1vdmVMYXN0QUlNb3ZlKG5leHRNb3ZlKVxuICAgIH1cblxuICAgIHN3aXRjaFBsYXllcigpXG4gICAgY29uc29sZS5sb2coY3VycmVudFBsYXllci5nZXROYW1lKCkpXG4gIH1cblxuICBjb25zdCBjb21wdXRlcnNOZXh0TW92ZSA9ICgpID0+IHtcbiAgICBjb25zdCBhdmFpbGFibGVNb3ZlcyA9IGh1bWFuQm9hcmQuZ2V0QUlBdmFpbGFibGVNb3ZlcygpXG4gICAgY29uc3QgbGFzdEFJTW92ZVN1Y2Nlc3NmdWwgPSBodW1hbkJvYXJkLmdldExhc3RBSU1vdmVTdWNjZXNzZnVsKClcbiAgICBpZiAobGFzdEFJTW92ZVN1Y2Nlc3NmdWwpIHtcbiAgICAgIGNvbnN0IGFkamFjZW50U2xvdHMgPSBjdXJyZW50UGxheWVyLmdldEFkamFjZW50U2xvdHMoXG4gICAgICAgIHRydWUsXG4gICAgICAgIGF2YWlsYWJsZU1vdmVzLFxuICAgICAgICBodW1hbkJvYXJkLmdldEFkamFjZW50U2xvdHNRdWV1ZSgpLFxuICAgICAgICBodW1hbkJvYXJkLmdldFN1Y2Nlc3NmdWxTaG90cygpLFxuICAgICAgICBodW1hbkJvYXJkLmdldE1pc3NlZFNob3RzKClcbiAgICAgIClcbiAgICAgIGh1bWFuQm9hcmQuYWRkQWRqYWNlbnRTbG90c1RvUXVldWUoYWRqYWNlbnRTbG90cylcbiAgICAgIGNvbnN0IG5leHRNb3ZlID0gaHVtYW5Cb2FyZC5nZXRBZGphY2VudFF1ZXVlU2xvdCgpXG4gICAgICByZXR1cm4gbmV4dE1vdmVcbiAgICB9IGVsc2UgaWYgKCFsYXN0QUlNb3ZlU3VjY2Vzc2Z1bCkge1xuICAgICAgY29uc3QgcmFuZG9tTW92ZSA9IGN1cnJlbnRQbGF5ZXIubWFrZVJhbmRvbU1vdmUodHJ1ZSwgYXZhaWxhYmxlTW92ZXMpXG4gICAgICByZXR1cm4gcmFuZG9tTW92ZVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN3aXRjaFBsYXllciA9ICgpID0+IHtcbiAgICBjdXJyZW50UGxheWVyID1cbiAgICAgIGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpID09PSBwbGF5ZXJzLmh1bWFuLmdldE5hbWUoKVxuICAgICAgICA/IChjdXJyZW50UGxheWVyID0gcGxheWVycy5BSSlcbiAgICAgICAgOiAoY3VycmVudFBsYXllciA9IHBsYXllcnMuaHVtYW4pXG4gIH1cblxuICBjb25zdCBjaGVja0ZvcldpbiA9ICgpID0+IHtcbiAgICBsZXQgd2lubmVyXG4gICAgaWYgKFxuICAgICAgY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuaHVtYW4uZ2V0TmFtZSgpICYmXG4gICAgICBhaUJvYXJkLmFsbFNoaXBzU3VuaygpXG4gICAgKSB7XG4gICAgICB3aW5uZXIgPSBjdXJyZW50UGxheWVyXG4gICAgICByZXR1cm4gd2lubmVyXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpID09PSBwbGF5ZXJzLkFJLmdldE5hbWUoKSAmJlxuICAgICAgaHVtYW5Cb2FyZC5hbGxTaGlwc1N1bmsoKVxuICAgICkge1xuICAgICAgd2lubmVyID0gY3VycmVudFBsYXllclxuICAgICAgcmV0dXJuIHdpbm5lclxuICAgIH1cbiAgICByZXR1cm4gd2lubmVyXG4gIH1cblxuICBjb25zdCByZXNldEdhbWVTdGF0ZSA9ICh3aW5uZXIpID0+IHtcbiAgICBodW1hbkJvYXJkLmNsZWFyR2FtZUJvYXJkKClcbiAgICBhaUJvYXJkLmNsZWFyR2FtZUJvYXJkKClcbiAgICBodW1hbkJvYXJkLmNyZWF0ZUdhbWVCb2FyZCgpXG4gICAgYWlCb2FyZC5jcmVhdGVHYW1lQm9hcmQoKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRIdW1hbkJvYXJkOiBodW1hbkJvYXJkLmdldEJvYXJkLFxuICAgIGdldEFJQm9hcmQ6IGFpQm9hcmQuZ2V0Qm9hcmQsXG4gICAgZ2V0QUlCb2FyZE9iajogYWlCb2FyZCxcbiAgICBnZXRIdW1hbkJvYXJkT2JqOiBodW1hbkJvYXJkLFxuICAgIHN3aXRjaFBsYXllcixcbiAgICBwbGF5Um91bmQsXG4gICAgZ2V0Q3VycmVudFBsYXllcixcbiAgICByZXNldEdhbWVTdGF0ZSxcbiAgICBjaGVja0ZvcldpbixcbiAgICBnZXRQbGF5ZXJzLFxuICAgIHBsYWNlQUlTaGlwcyxcbiAgICBwbGFjZUNhcnJpZXJTaGlwLFxuICAgIHBsYWNlQmF0dGxlU2hpcCxcbiAgICBwbGFjZUNydWlzZXJTaGlwLFxuICAgIHBsYWNlU3VibWFyaW5lU2hpcCxcbiAgICBwbGFjZURlc3Ryb3llclNoaXBcbiAgfVxufVxuXG5leHBvcnQgeyBnYW1lQ29udHJvbGxlciB9XG5cbmNvbnN0IHBsYWNlU2hpcHMgPSAoYm9hcmQsIGNvb3JkaW5hdGVzT2JqKSA9PiB7XG4gIGNvbnN0IHNoaXBDb29yZGluYXRlc0FyciA9IE9iamVjdC52YWx1ZXMoY29vcmRpbmF0ZXNPYmopXG4gIHNoaXBDb29yZGluYXRlc0Fyci5mb3JFYWNoKChzaGlwQ29vcmRpbmF0ZXMpID0+IHtcbiAgICBib2FyZC5wbGFjZVNoaXAoc2hpcENvb3JkaW5hdGVzKVxuICB9KVxufVxuXG4vKiBjb25zdCBwbGFjZUVhY2hIdW1hblNoaXAgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICBodW1hbkJvYXJkLnBsYWNlU2hpcChjb29yZGluYXRlKVxufSAqL1xuIiwiaW1wb3J0IHsgYXJyYXlzQXJlRXF1YWwgfSBmcm9tICcuLi9oZWxwZXJzL2FycmF5c0FyZUVxdWFsJ1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vU2hpcCdcblxuZXhwb3J0IGNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdFxuICBsZXQgYm9hcmQgPSBbXVxuICBjb25zdCBzaGlwT2JqZWN0cyA9IFtdXG4gIGNvbnN0IG1pc3NlZFNob3RzID0gW11cbiAgY29uc3QgYWlBdmFpbGFibGVNb3ZlcyA9IFtdXG4gIGNvbnN0IHN1Y2Nlc3NmdWxTaG90cyA9IFtdXG4gIGxldCBhZGphY2VudFNsb3RzUXVldWUgPSBbXVxuICBjb25zdCByb3dzID0gOVxuICBjb25zdCBjb2x1bW5zID0gOVxuICBsZXQgbGFzdEFJTW92ZVN1Y2Nlc3NmdWwgPSBmYWxzZVxuICBsZXQgbGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwgPSBmYWxzZVxuXG4gIGNvbnN0IGNyZWF0ZUdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICBib2FyZCA9IFtdXG4gICAgZm9yIChsZXQgaSA9IHJvd3M7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBib2FyZFtpXSA9IFtdXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgYm9hcmRbaV0ucHVzaCh1bmRlZmluZWQpXG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBbaSwgal1cbiAgICAgICAgYWlBdmFpbGFibGVNb3Zlcy5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gY2hlY2tzIGlmIGNvb3JkaW5hdGVzIGZvciBzaGlwIGlzIG9uIHRoZVxuICAvLyBnYW1lIGJvYXJkXG4gIGNvbnN0IHZhbGlkYXRlQ29vcmRpbmF0ZXMgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBsZXQgdmFsaWRDb29yZGluYXRlcyA9IHRydWVcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBjb25zdCByb3cgPSBjb29yZGluYXRlWzBdXG4gICAgICBjb25zdCBjb2x1bW4gPSBjb29yZGluYXRlWzFdXG4gICAgICBpZiAocm93ID4gOSB8fCByb3cgPCAwKSB7XG4gICAgICAgIHZhbGlkQ29vcmRpbmF0ZXMgPSBmYWxzZVxuICAgICAgICByZXR1cm4gdmFsaWRDb29yZGluYXRlc1xuICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPiA5IHx8IGNvbHVtbiA8IDApIHtcbiAgICAgICAgdmFsaWRDb29yZGluYXRlcyA9IGZhbHNlXG4gICAgICAgIHJldHVybiB2YWxpZENvb3JkaW5hdGVzXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiB2YWxpZENvb3JkaW5hdGVzXG4gIH1cblxuICAvLyBjaGVja3MgaWYgc2hpcCBjb29yZGluYXRlcyBvdmVybGFwIHdpdGggYWxyZWFkeVxuICAvLyBwbGFjZWQgc2hpcCBjb29yZGluYXRlcyBmb3IgdGhlIHNhbWUgc2hpcFxuICBjb25zdCBjaGVja1NlbGZPdmVybGFwID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgbGV0IGNvb3JkaW5hdGVzT3ZlcmxhcCA9IGZhbHNlXG4gICAgbGV0IHByZXZDb29yZGluYXRlXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgaWYgKGFycmF5c0FyZUVxdWFsKHByZXZDb29yZGluYXRlLCBjb29yZGluYXRlKSkge1xuICAgICAgICAgIGNvb3JkaW5hdGVzT3ZlcmxhcCA9IHRydWVcbiAgICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXNPdmVybGFwXG4gICAgICAgIH1cbiAgICAgICAgcHJldkNvb3JkaW5hdGUgPSBjb29yZGluYXRlXG4gICAgICB9XG4gICAgICBwcmV2Q29vcmRpbmF0ZSA9IGNvb3JkaW5hdGVcbiAgICB9KVxuXG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzT3ZlcmxhcFxuICB9XG5cbiAgLy8gU2hvdWxkIHByZXZlbnQgYSBzaGlwIGZyb20gYmVpbmdcbiAgLy8gcGxhY2VkIG9uIHRvcCBvZiBhbm90aGVyIHNoaXBcbiAgY29uc3QgY2hlY2tPdmVybGFwV2l0aE90aGVyU2hpcHMgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBsZXQgc2hpcHNPdmVybGFwID0gZmFsc2VcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBjb25zdCByb3cgPSBjb29yZGluYXRlWzBdXG4gICAgICBjb25zdCBjb2x1bW4gPSBjb29yZGluYXRlWzFdXG4gICAgICBjb25zdCBib2FyZENlbGwgPSBib2FyZFtyb3ddW2NvbHVtbl1cbiAgICAgIGlmICh0eXBlb2YgYm9hcmRDZWxsID09PSAnb2JqZWN0Jykge1xuICAgICAgICBzaGlwc092ZXJsYXAgPSB0cnVlXG4gICAgICAgIHJldHVybiBzaGlwc092ZXJsYXBcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHNoaXBzT3ZlcmxhcFxuICB9XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgbGV0IHNoaXBQbGFjZWQgPSB0cnVlXG5cbiAgICBjb25zdCBsZWdhbENvb3JkaW5hdGVzID0gdmFsaWRhdGVDb29yZGluYXRlcyhjb29yZGluYXRlcylcbiAgICBpZiAoIWxlZ2FsQ29vcmRpbmF0ZXMpIHtcbiAgICAgIHNoaXBQbGFjZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIHNoaXBQbGFjZWRcbiAgICB9XG5cbiAgICBjb25zdCBvdmVybGFwcGluZ0Nvb3JkaW5hdGVzID0gY2hlY2tTZWxmT3ZlcmxhcChjb29yZGluYXRlcylcbiAgICBpZiAob3ZlcmxhcHBpbmdDb29yZGluYXRlcykge1xuICAgICAgc2hpcFBsYWNlZCA9IGZhbHNlXG4gICAgICByZXR1cm4gc2hpcFBsYWNlZFxuICAgIH1cblxuICAgIGNvbnN0IHNoaXBPdmVybGFwcGluZyA9IGNoZWNrT3ZlcmxhcFdpdGhPdGhlclNoaXBzKGNvb3JkaW5hdGVzKVxuICAgIGlmIChzaGlwT3ZlcmxhcHBpbmcpIHtcbiAgICAgIHNoaXBQbGFjZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIHNoaXBQbGFjZWRcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gY29vcmRpbmF0ZXMubGVuZ3RoXG4gICAgY29uc3Qgc2hpcE9iamVjdCA9IFNoaXAoc2hpcExlbmd0aCwgMCwgZmFsc2UpXG4gICAgc2hpcE9iamVjdHMucHVzaChzaGlwT2JqZWN0KVxuXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZVswXVxuICAgICAgY29uc3QgY29sdW1uID0gY29vcmRpbmF0ZVsxXVxuICAgICAgYm9hcmRbcm93XVtjb2x1bW5dID0gc2hpcE9iamVjdFxuICAgIH0pXG5cbiAgICByZXR1cm4gc2hpcFBsYWNlZFxuICB9XG5cbiAgLy8gcHJldmVudHMgaHVtYW4gcGxheWVyIGZyb20gYXR0YWNraW5nIHByZXZpb3VzbHlcbiAgLy8gYXR0YWNrZWQgY29vcmRpbmF0ZVxuICBjb25zdCBwcmV2ZW50U2FtZUF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgbGV0IGFscmVhZHlBdHRhY2tlZCA9IGZhbHNlXG4gICAgc3VjY2Vzc2Z1bFNob3RzLmZvckVhY2goKHNob3QpID0+IHtcbiAgICAgIGlmIChhcnJheXNBcmVFcXVhbChjb29yZGluYXRlLCBzaG90KSkge1xuICAgICAgICBhbHJlYWR5QXR0YWNrZWQgPSB0cnVlXG4gICAgICAgIHJldHVybiBwcmV2ZW50U2FtZUF0dGFja1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBtaXNzZWRTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XG4gICAgICBpZiAoYXJyYXlzQXJlRXF1YWwoY29vcmRpbmF0ZSwgc2hvdCkpIHtcbiAgICAgICAgYWxyZWFkeUF0dGFja2VkID0gdHJ1ZVxuICAgICAgICByZXR1cm4gcHJldmVudFNhbWVBdHRhY2tcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBhbHJlYWR5QXR0YWNrZWRcbiAgfVxuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBjb25zdCByb3cgPSBjb29yZGluYXRlc1swXVxuICAgIGNvbnN0IGNvbHVtbiA9IGNvb3JkaW5hdGVzWzFdXG4gICAgY29uc3QgYm9hcmRDZWxsID0gYm9hcmRbcm93XVtjb2x1bW5dXG4gICAgY29uc3Qgc2hpcE9iaiA9IGJvYXJkQ2VsbFxuXG4gICAgLy8gTmVlZCB0byBjaGVjayBpZiBuZXcgY29vcmRpbmF0ZSBpcyBhbHJlYWR5XG4gICAgLy8gaW5zaWRlIHN1Y2Nlc3NmdWxTaG90cyBvciBtaXNzZWRTaG90c1xuICAgIGNvbnN0IGFscmVhZHlBdHRhY2tlZCA9IHByZXZlbnRTYW1lQXR0YWNrKGNvb3JkaW5hdGVzKVxuICAgIGlmIChhbHJlYWR5QXR0YWNrZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYm9hcmRDZWxsID09PSAnb2JqZWN0Jykge1xuICAgICAgc2hpcE9iai5oaXQoKVxuICAgICAgbGFzdEFJTW92ZVN1Y2Nlc3NmdWwgPSB0cnVlXG4gICAgICBsYXN0SHVtYW5Nb3ZlU3VjY2Vzc2Z1bCA9IHRydWVcbiAgICAgIHN1Y2Nlc3NmdWxTaG90cy5wdXNoKGNvb3JkaW5hdGVzKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvYXJkQ2VsbCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGxhc3RBSU1vdmVTdWNjZXNzZnVsID0gZmFsc2VcbiAgICAgIGxhc3RIdW1hbk1vdmVTdWNjZXNzZnVsID0gZmFsc2VcbiAgICAgIG1pc3NlZFNob3RzLnB1c2goY29vcmRpbmF0ZXMpXG4gICAgICByZW1vdmVBZGphY2VudFNsb3QoY29vcmRpbmF0ZXMpXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgdGhlIGNvbXB1dGVyIHJhbmRvbWx5IGd1ZXNzZXMgYSBzcG90IHRoYXQgaXMgYWxyZWFkeSBpbiB0aGUgYWRqYWNlbmN5XG4gIC8vIHNsb3QgcXVldWUsIHdlIG5lZWQgdG8gcmVtb3ZlIGl0IChmcm9tIHRoZSBhZGphY2VuY3kgcXVldWUpIHNvXG4gIC8vIHRoZSBjb21wdXRlciBkb2VzIG5vdCBhdHRlbXB0IHRvXG4gIC8vIHVzZSB0aGUgYWxyZWFkeSBndWVzc2VkIHNwb3Qgd2hlbiBwdWxsaW5nIGZyb20gdGhlIGFkamFjZW5jeVxuICAvLyBxdWV1ZSBmb3IgaXQncyBuZXh0IG1vdmVcbiAgY29uc3QgcmVtb3ZlQWRqYWNlbnRTbG90ID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0Q29vcmRpbmF0ZXMgPSBjb29yZGluYXRlc1xuICAgIGNvbnN0IGFkamFjZW50UXVldWUgPSBuZXcgU2V0KClcbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2YgYWRqYWNlbnRTbG90c1F1ZXVlKSB7XG4gICAgICBhZGphY2VudFF1ZXVlLmFkZChzbG90LnRvU3RyaW5nKCkpXG4gICAgfVxuXG4gICAgLy8gZmlsdGVyIHRoZSBhZGphY2VuY3kgc2xvdCBxdWV1ZSBkb3duIHRvIHNsb3RzIHRoYXQgaGF2ZSBOT1RcbiAgICAvLyBhbHJlYWR5IGJlZW4gZ3Vlc2VkLlxuICAgIGFkamFjZW50U2xvdHNRdWV1ZSA9IGFkamFjZW50U2xvdHNRdWV1ZS5maWx0ZXIoXG4gICAgICAoc2xvdCkgPT4gIWFycmF5c0FyZUVxdWFsKHNsb3QsIHRhcmdldENvb3JkaW5hdGVzKVxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBsZXQgZXZlcnlTaGlwU2FuayA9IHRydWVcbiAgICBzaGlwT2JqZWN0cy5mb3JFYWNoKChzaGlwT2JqKSA9PiB7XG4gICAgICBpZiAoIXNoaXBPYmouaGFzQmVlblN1bmsoKSkge1xuICAgICAgICBldmVyeVNoaXBTYW5rID0gZmFsc2VcbiAgICAgICAgcmV0dXJuIGV2ZXJ5U2hpcFNhbmtcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBldmVyeVNoaXBTYW5rXG4gIH1cblxuICBjb25zdCByZW1vdmVMYXN0QUlNb3ZlID0gKHJhbmRvbU1vdmUpID0+IHtcbiAgICBhaUF2YWlsYWJsZU1vdmVzLmZvckVhY2goKG1vdmUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoYXJyYXlzQXJlRXF1YWwobW92ZSwgcmFuZG9tTW92ZSkpIHtcbiAgICAgICAgYWlBdmFpbGFibGVNb3Zlcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGFkZEFkamFjZW50U2xvdHNUb1F1ZXVlID0gKGFkamFjZW50U2xvdHMpID0+IHtcbiAgICBhZGphY2VudFNsb3RzLmZvckVhY2goKHNsb3QpID0+IHtcbiAgICAgIGFkamFjZW50U2xvdHNRdWV1ZS5wdXNoKHNsb3QpXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGNsZWFyR2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIHNoaXBPYmplY3RzLmxlbmd0aCA9IDBcbiAgICBtaXNzZWRTaG90cy5sZW5ndGggPSAwXG4gICAgYWlBdmFpbGFibGVNb3Zlcy5sZW5ndGggPSAwXG4gICAgc3VjY2Vzc2Z1bFNob3RzLmxlbmd0aCA9IDBcbiAgICBhZGphY2VudFNsb3RzUXVldWUubGVuZ3RoID0gMFxuICB9XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkXG4gIH1cblxuICBjb25zdCBnZXRNaXNzZWRTaG90cyA9ICgpID0+IHtcbiAgICByZXR1cm4gbWlzc2VkU2hvdHNcbiAgfVxuXG4gIGNvbnN0IGdldFN1Y2Nlc3NmdWxTaG90cyA9ICgpID0+IHtcbiAgICByZXR1cm4gc3VjY2Vzc2Z1bFNob3RzXG4gIH1cblxuICBjb25zdCBnZXRTaGlwT2JqZWN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcE9iamVjdHNcbiAgfVxuXG4gIGNvbnN0IGdldEFJQXZhaWxhYmxlTW92ZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGFpQXZhaWxhYmxlTW92ZXNcbiAgfVxuXG4gIGNvbnN0IGdldExhc3RBSU1vdmVTdWNjZXNzZnVsID0gKCkgPT4ge1xuICAgIHJldHVybiBsYXN0QUlNb3ZlU3VjY2Vzc2Z1bFxuICB9XG5cbiAgY29uc3QgZ2V0TGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxhc3RIdW1hbk1vdmVTdWNjZXNzZnVsXG4gIH1cblxuICBjb25zdCBnZXRBZGphY2VudFNsb3RzUXVldWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGFkamFjZW50U2xvdHNRdWV1ZVxuICB9XG5cbiAgY29uc3QgZ2V0QWRqYWNlbnRRdWV1ZVNsb3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGFkamFjZW50U2xvdHNRdWV1ZS5wb3AoKVxuICB9XG5cbiAgY29uc3QgZ2V0TGFzdFN1Y2Nlc3NmdWxNb3ZlID0gKCkgPT4ge1xuICAgIHJldHVybiBzdWNjZXNzZnVsU2hvdHMuYXQoLTEpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUdhbWVCb2FyZCxcbiAgICBnZXRCb2FyZCxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBjbGVhckdhbWVCb2FyZCxcbiAgICBnZXRNaXNzZWRTaG90cyxcbiAgICBnZXRTdWNjZXNzZnVsU2hvdHMsXG4gICAgYWxsU2hpcHNTdW5rLFxuICAgIGdldEFJQXZhaWxhYmxlTW92ZXMsXG4gICAgdmFsaWRhdGVDb29yZGluYXRlcyxcbiAgICBwcmV2ZW50U2FtZUF0dGFjayxcbiAgICBjaGVja1NlbGZPdmVybGFwLFxuICAgIGdldFNoaXBPYmplY3RzLFxuICAgIHJlbW92ZUxhc3RBSU1vdmUsXG4gICAgY2hlY2tPdmVybGFwV2l0aE90aGVyU2hpcHMsXG4gICAgZ2V0TGFzdEFJTW92ZVN1Y2Nlc3NmdWwsXG4gICAgZ2V0TGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwsXG4gICAgZ2V0QWRqYWNlbnRTbG90c1F1ZXVlLFxuICAgIGFkZEFkamFjZW50U2xvdHNUb1F1ZXVlLFxuICAgIGdldEFkamFjZW50UXVldWVTbG90LFxuICAgIHJlbW92ZUFkamFjZW50U2xvdCxcbiAgICBnZXRMYXN0U3VjY2Vzc2Z1bE1vdmVcbiAgfVxufVxuIiwiaW1wb3J0IHsgYXJyYXlzQXJlRXF1YWwgfSBmcm9tICcuLi9oZWxwZXJzL2FycmF5c0FyZUVxdWFsJ1xuXG5leHBvcnQgY29uc3QgUGxheWVyID0gKG5hbWUsIGlzQUkpID0+IHtcbiAgLy8gVXNlZCB0byBtYWtlIEFJIHNlbGVjdCByYW5kb20sIGxlZ2FsIGNvb3JkaW5hdGVcbiAgLy8gb24gcGxheWVycyBnYW1lIGJvYXJkXG4gIGNvbnN0IG1ha2VSYW5kb21Nb3ZlID0gKGlzQUksIGF2YWlsYWJsZU1vdmVzKSA9PiB7XG4gICAgaWYgKCFpc0FJIHx8IGF2YWlsYWJsZU1vdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGNvbnN0IGF2YWlsYWJsZU1vdmVzTGVuZ3RoID0gYXZhaWxhYmxlTW92ZXMubGVuZ3RoXG4gICAgY29uc3QgcmFuZG9tQXJySW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVNb3Zlc0xlbmd0aClcbiAgICBjb25zdCByYW5kb21Db29yZGluYXRlID0gYXZhaWxhYmxlTW92ZXNbcmFuZG9tQXJySW5kZXhdXG5cbiAgICByZXR1cm4gcmFuZG9tQ29vcmRpbmF0ZVxuICB9XG5cbiAgY29uc3QgZ2V0QWRqYWNlbnRTbG90cyA9IChcbiAgICBpc0FJLFxuICAgIGF2YWlsYWJsZU1vdmVzLFxuICAgIHN1Y2Nlc3NmdWxTaG90cyxcbiAgICBtaXNzZWRTaG90c1xuICApID0+IHtcbiAgICBpZiAoIWlzQUkgfHwgYXZhaWxhYmxlTW92ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgY29uc3QgbGFzdFN1Y2Nlc3NmdWxNb3ZlID0gc3VjY2Vzc2Z1bFNob3RzLmF0KC0xKVxuICAgIGNvbnN0IGFkamFjZW50U2xvdHMgPSByZXRyaWV2ZUFkamFjZW50U2xvdHMobGFzdFN1Y2Nlc3NmdWxNb3ZlKVxuICAgIGNvbnN0IGxlZ2FsQWRqYWNlbnRTbG90cyA9IHJlbW92ZUlsbGVnYWxBZGphY2VudFNsb3RzKGFkamFjZW50U2xvdHMpXG4gICAgLyogY29uc3QgYXZhaWxhYmxlQWRqYWNlbnRTbG90cyA9IHByZXZlbnRQcmV2aW91c1Nob3RUb1F1ZXVlKFxuICAgICAgYXZhaWxhYmxlTW92ZXMsXG4gICAgICBsZWdhbEFkamFjZW50U2xvdHMsXG4gICAgICBzdWNjZXNzZnVsU2hvdHMsXG4gICAgICBtaXNzZWRTaG90c1xuICAgICkgKi9cbiAgICByZXR1cm4gbGVnYWxBZGphY2VudFNsb3RzXG4gIH1cblxuICBjb25zdCBnZXRDZWxsQWJvdmUgPSAobGFzdFN1Y2Nlc3NmdWxNb3ZlKSA9PiB7XG4gICAgLy8gdGhlIHJvdyBuZWVkcyB0byBjaGFuZ2UgYnkgb25lXG4gICAgY29uc3QgbmV3QXJyID0gW11cbiAgICBjb25zdCBuZXdSb3cgPSBsYXN0U3VjY2Vzc2Z1bE1vdmVbMF0gLSAxXG4gICAgaWYgKG5ld1JvdyA+IDkgfHwgbmV3Um93IDwgMCkge1xuICAgICAgcmV0dXJuICdpbGxlZ2FsJ1xuICAgIH1cbiAgICBuZXdBcnJbMF0gPSBuZXdSb3dcbiAgICBuZXdBcnJbMV0gPSBsYXN0U3VjY2Vzc2Z1bE1vdmVbMV1cbiAgICByZXR1cm4gbmV3QXJyXG4gIH1cblxuICBjb25zdCBnZXRDZWxsQmVsb3cgPSAobGFzdFN1Y2Nlc3NmdWxNb3ZlKSA9PiB7XG4gICAgLy8gdGhlIHJvdyBuZWVkcyB0byBjaGFuZ2UgYnkgb25lXG4gICAgY29uc3QgYXJyID0gbGFzdFN1Y2Nlc3NmdWxNb3ZlXG4gICAgY29uc3QgbmV3QXJyID0gW11cbiAgICBjb25zdCBuZXdSb3cgPSBhcnJbMF0gKyAxXG4gICAgaWYgKG5ld1JvdyA+IDkgfHwgbmV3Um93IDwgMCkge1xuICAgICAgcmV0dXJuICdpbGxlZ2FsJ1xuICAgIH1cbiAgICBuZXdBcnJbMF0gPSBuZXdSb3dcbiAgICBuZXdBcnJbMV0gPSBsYXN0U3VjY2Vzc2Z1bE1vdmVbMV1cbiAgICByZXR1cm4gbmV3QXJyXG4gIH1cblxuICBjb25zdCBnZXRDZWxsVG9SaWdodCA9IChsYXN0U3VjY2Vzc2Z1bE1vdmUpID0+IHtcbiAgICAvLyB0aGUgcm93IG5lZWRzIHRvIGNoYW5nZSBieSBvbmVcbiAgICBjb25zdCBuZXdBcnIgPSBbXVxuICAgIGNvbnN0IG5ld0NvbHVtbiA9IGxhc3RTdWNjZXNzZnVsTW92ZVsxXSArIDFcbiAgICBpZiAobmV3Q29sdW1uID4gOSB8fCBuZXdDb2x1bW4gPCAwKSB7XG4gICAgICByZXR1cm4gJ2lsbGVnYWwnXG4gICAgfVxuICAgIG5ld0FyclswXSA9IGxhc3RTdWNjZXNzZnVsTW92ZVswXVxuICAgIG5ld0FyclsxXSA9IG5ld0NvbHVtblxuICAgIHJldHVybiBuZXdBcnJcbiAgfVxuXG4gIGNvbnN0IGdldENlbGxUb0xlZnQgPSAobGFzdFN1Y2Nlc3NmdWxNb3ZlKSA9PiB7XG4gICAgLy8gdGhlIHJvdyBuZWVkcyB0byBjaGFuZ2UgYnkgb25lXG4gICAgY29uc3QgYXJyID0gbGFzdFN1Y2Nlc3NmdWxNb3ZlXG4gICAgY29uc3QgbmV3QXJyID0gW11cbiAgICBjb25zdCBuZXdDb2x1bW4gPSBhcnJbMV0gLSAxXG4gICAgaWYgKG5ld0NvbHVtbiA+IDkgfHwgbmV3Q29sdW1uIDwgMCkge1xuICAgICAgcmV0dXJuICdpbGxlZ2FsJ1xuICAgIH1cbiAgICBuZXdBcnJbMF0gPSBsYXN0U3VjY2Vzc2Z1bE1vdmVbMF1cbiAgICBuZXdBcnJbMV0gPSBuZXdDb2x1bW5cbiAgICByZXR1cm4gbmV3QXJyXG4gIH1cblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgIHJldHVybiBuYW1lXG4gIH1cblxuICBjb25zdCByZXRyaWV2ZUFkamFjZW50U2xvdHMgPSAobGFzdFN1Y2Nlc3NmdWxNb3ZlKSA9PiB7XG4gICAgY29uc3QgbGFzdFN1Y2Nlc3NmdWxNb3ZlVmFsdWUgPSBsYXN0U3VjY2Vzc2Z1bE1vdmVcbiAgICBjb25zdCBhZGphY2VudFNsb3RzID0gW11cbiAgICBhZGphY2VudFNsb3RzLnB1c2goZ2V0Q2VsbEFib3ZlKGxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlKSlcbiAgICBhZGphY2VudFNsb3RzLnB1c2goZ2V0Q2VsbEJlbG93KGxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlKSlcbiAgICBhZGphY2VudFNsb3RzLnB1c2goZ2V0Q2VsbFRvUmlnaHQobGFzdFN1Y2Nlc3NmdWxNb3ZlVmFsdWUpKVxuICAgIGFkamFjZW50U2xvdHMucHVzaChnZXRDZWxsVG9MZWZ0KGxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlKSlcbiAgICByZXR1cm4gYWRqYWNlbnRTbG90c1xuICB9XG5cbiAgLy8gcHJldmVudHMgYWRkaW5nIGFkamFjZW50IHNsb3RzIHRoYXQgYXJlIG5vdCBvbiB0aGUgYm9hcmRcbiAgY29uc3QgcmVtb3ZlSWxsZWdhbEFkamFjZW50U2xvdHMgPSAoYWRqYWNlbnRTbG90cykgPT4ge1xuICAgIGNvbnN0IGFkamFjZW50U2xvdHNBcnIgPSBhZGphY2VudFNsb3RzXG4gICAgYWRqYWNlbnRTbG90c0Fyci5mb3JFYWNoKChzbG90LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHNsb3QgPT09ICdpbGxlZ2FsJykge1xuICAgICAgICBhZGphY2VudFNsb3RzQXJyLnNwbGljZShpbmRleCwgMSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBhZGphY2VudFNsb3RzQXJyXG4gIH1cblxuICAvLyBpZiB0aGUgY29tcHV0ZXIgaGFzIGFscmVhZHkgKHJhbmRvbWx5KSBndWVzc2VkIGEgc3BvdCBvbiB0aGUgYm9hcmQsIHByZXZlbnRcbiAgLy8gYWRkaW5nIHRoZSBzcG90IHRvIHRoZSBhZGphY2VuY3kgbGlzdFxuICBjb25zdCBwcmV2ZW50UHJldmlvdXNTaG90VG9RdWV1ZSA9IChcbiAgICBhdmFpbGFibGVNb3ZlcyxcbiAgICBhZGphY2VudFNsb3RzLFxuICAgIHN1Y2Nlc3NmdWxTaG90cyxcbiAgICBtaXNzZWRTaG90c1xuICApID0+IHtcbiAgICBjb25zdCBzbG90cyA9IGFkamFjZW50U2xvdHNcbiAgICBjb25zdCBhbGxQcmV2aW91c0F0dGFja3MgPSBzdWNjZXNzZnVsU2hvdHMuY29uY2F0KG1pc3NlZFNob3RzKVxuXG4gICAgY29uc3QgcHJldmlvdXNBdHRhY2tzID0gbmV3IFNldCgpXG5cbiAgICBmb3IgKGNvbnN0IHNob3Qgb2YgYWxsUHJldmlvdXNBdHRhY2tzKSB7XG4gICAgICBwcmV2aW91c0F0dGFja3MuYWRkKHNob3QudG9TdHJpbmcoKSlcbiAgICB9XG5cbiAgICAvLyBHbyB0aHJvdWdoIGVhY2ggYWRqYWNlbmN5IHNsb3QsIGFuZCBkZXRlcm1pbmUgaWYgdGhlIHNsb3QgaXMgaW4gdGhlXG4gICAgLy8gcHJldmlvdXNBdHRhY2tzIG1ldGhvZC4gV2UgYXJlIGZpbHRlcmluZyBvdXQgdGhlIHNsb3RzIHRoYXQgYXJlIGluXG4gICAgLy8gdGhlIHByZXZpb3VzIGF0dGFjayBzZXQsIGFzIHdlIGRvIG5vdCB3YW50IHRvIGhhdmUgdGhlIGNvbXB1dGVyXG4gICAgLy8gdG8gdXNlIHRob3NlIHNsb3RzIGFnYWluIGluIGZ1dHVyZSB0dXJuc1xuICAgIGNvbnN0IGZpbHRlcmVkU2xvdHMgPSBzbG90cy5maWx0ZXIoXG4gICAgICAoc2xvdCkgPT4gIXByZXZpb3VzQXR0YWNrcy5oYXMoc2xvdC50b1N0cmluZygpKVxuICAgIClcblxuICAgIHJldHVybiBmaWx0ZXJlZFNsb3RzXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1ha2VSYW5kb21Nb3ZlLFxuICAgIGdldE5hbWUsXG4gICAgZ2V0QWRqYWNlbnRTbG90cyxcbiAgICBwcmV2ZW50UHJldmlvdXNTaG90VG9RdWV1ZVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgU2hpcCA9IChsZW5ndGgsIG51bU9mSGl0cywgaXNTdW5rKSA9PiB7XG4gIC8vIEluY3JlYXNlIG51bWJlciBvZiBoaXRzIGluIHNoaXAgYnkgMVxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaWYgKG51bU9mSGl0cyA9PT0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBudW1PZkhpdHMrK1xuICAgIHJldHVybiBudW1PZkhpdHNcbiAgfVxuXG4gIC8vIERldGVybWluZSBpZiB0aGUgc2hpcCBvYmplY3QgaGFzIGJlZW4gc3Vua1xuICBjb25zdCBoYXNCZWVuU3VuayA9ICgpID0+IHtcbiAgICBsZXQgaXNTdW5rID0gZmFsc2VcblxuICAgIGlmIChsZW5ndGggPT09IG51bU9mSGl0cykge1xuICAgICAgaXNTdW5rID0gdHJ1ZVxuICAgICAgcmV0dXJuIGlzU3Vua1xuICAgIH1cblxuICAgIHJldHVybiBpc1N1bmtcbiAgfVxuXG4gIGNvbnN0IGdldE51bU9mSGl0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gbnVtT2ZIaXRzXG4gIH1cblxuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHsgaGl0LCBoYXNCZWVuU3VuaywgZ2V0TnVtT2ZIaXRzLCBnZXRMZW5ndGggfVxufVxuIiwiZXhwb3J0IGNvbnN0IGFycmF5c0FyZUVxdWFsID0gKGFycjEsIGFycjIpID0+IHtcbiAgaWYgKGFycjEgPT09IG51bGwgfHwgYXJyMiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGlmIChhcnIxLmxlbmd0aCAhPT0gYXJyMi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycjEubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyMVtpXSAhPT0gYXJyMltpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG4iLCIvLyBkZWxheXMgZXhlY3V0aW9uIG9mIGEgZnVuY3Rpb24gZm9yIGEgc2V0IGFtb3VudCBvZiB0aW1lXG5leHBvcnQgY29uc3QgZGVsYXkgPSAobXMpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcbn1cbiIsImV4cG9ydCBjb25zdCByZXR1cm5SYW5kb21BSUJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBhaUJvYXJkcyA9IFthaVNoaXBDb29yZHNPbmUsIGFpU2hpcENvb3Jkc1R3bywgYWlTaGlwQ29vcmRzVGhyZWVdXG4gIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMylcbiAgY29uc3QgY2hvc2VuQUlCb2FyZCA9IE9iamVjdC52YWx1ZXMoYWlCb2FyZHNbcmFuZG9tSW5kZXhdKVxuICByZXR1cm4gY2hvc2VuQUlCb2FyZFxufVxuXG5jb25zdCBhaVNoaXBDb29yZHNPbmUgPSB7XG4gIGNhcnJpZXI6IFtcbiAgICBbOSwgMF0sXG4gICAgWzksIDFdLFxuICAgIFs5LCAyXSxcbiAgICBbOSwgM10sXG4gICAgWzksIDRdXG4gIF0sXG4gIGJhdHRsZXNoaXA6IFtcbiAgICBbNSwgNV0sXG4gICAgWzYsIDVdLFxuICAgIFs3LCA1XSxcbiAgICBbOCwgNV1cbiAgXSxcbiAgY3J1aXNlcjogW1xuICAgIFswLCA2XSxcbiAgICBbMSwgNl0sXG4gICAgWzIsIDZdXG4gIF0sXG4gIHN1Ym1hcmluZTogW1xuICAgIFszLCA4XSxcbiAgICBbNCwgOF0sXG4gICAgWzUsIDhdXG4gIF0sXG4gIGRlc3Ryb3llcjogW1xuICAgIFswLCA5XSxcbiAgICBbMSwgOV1cbiAgXVxufVxuXG5jb25zdCBhaVNoaXBDb29yZHNUd28gPSB7XG4gIGNhcnJpZXI6IFtcbiAgICBbMCwgMF0sXG4gICAgWzAsIDFdLFxuICAgIFswLCAyXSxcbiAgICBbMCwgM10sXG4gICAgWzAsIDRdXG4gIF0sXG4gIGJhdHRsZXNoaXA6IFtcbiAgICBbOSwgNV0sXG4gICAgWzksIDZdLFxuICAgIFs5LCA3XSxcbiAgICBbOSwgOF1cbiAgXSxcbiAgY3J1aXNlcjogW1xuICAgIFsyLCAyXSxcbiAgICBbMywgMl0sXG4gICAgWzQsIDJdXG4gIF0sXG4gIHN1Ym1hcmluZTogW1xuICAgIFs2LCA2XSxcbiAgICBbNiwgN10sXG4gICAgWzYsIDhdXG4gIF0sXG4gIGRlc3Ryb3llcjogW1xuICAgIFs4LCAwXSxcbiAgICBbOCwgMV1cbiAgXVxufVxuXG5jb25zdCBhaVNoaXBDb29yZHNUaHJlZSA9IHtcbiAgY2FycmllcjogW1xuICAgIFs1LCAwXSxcbiAgICBbNSwgMV0sXG4gICAgWzUsIDJdLFxuICAgIFs1LCAzXSxcbiAgICBbNSwgNF1cbiAgXSxcbiAgYmF0dGxlc2hpcDogW1xuICAgIFswLCA5XSxcbiAgICBbMSwgOV0sXG4gICAgWzIsIDldLFxuICAgIFszLCA5XVxuICBdLFxuICBjcnVpc2VyOiBbXG4gICAgWzcsIDddLFxuICAgIFs4LCA3XSxcbiAgICBbOSwgN11cbiAgXSxcbiAgc3VibWFyaW5lOiBbXG4gICAgWzEsIDFdLFxuICAgIFsyLCAxXSxcbiAgICBbMywgMV1cbiAgXSxcbiAgZGVzdHJveWVyOiBbXG4gICAgWzQsIDRdLFxuICAgIFs0LCA1XVxuICBdXG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLyogMSAqL1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyogQXBwbHkgYm9yZGVyIGJveCB0byBlbnRpcmUgZG9jdW1lbnQgKi9cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAgICovXFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAgICovXFxuXFxuaHIge1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxucHJlIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAvKiAxICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAvKiAyICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICAgKiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gICAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5pbnB1dCB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIC8qIDIgKi9cXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogR2l2ZSBpbnB1dCBhbmQgdGV4dCBhcmVhIGNvbnNpc3RlbnQgbG9vayAqL1xcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweCAwIDAgLTEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udDogYm9sZCAwLjZlbSBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIC8qIGJhY2tncm91bmQ6ICMwMDA7XFxuICAgIGNvbG9yOiAjZmZmOyAqL1xcbn1cXG5cXG4vKiBHZXRzIHJpZCBvZiBkZWZhdWx0IHNlYXJjaCB0byByZW1vdmUgcmVzdHJpY3Rpb25zICovXFxuaW5wdXRbdHlwZT0nc2VhcmNoJ10ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKiBGaXggZm9yIGluY29uc2lzdGVudCBkaXNwbGF5IG9mIGNsZWFyIFxcXCJ4XFxcIiBpY29uIGluIHNlYXJjaCBpbnB1dHMgYWNyb3NzIGRpZmZlcmVudCBicm93c2Vycy4gXFxuICAsIHRoaXMgY29kZSByZW1vdmVzIHRoZSBpY29uIGluIEVkZ2UgYW5kIENocm9tZSB3aGVuIHRoZSBpbnB1dCBsb3NlcyBmb2N1cywgd2hpbGUga2VlcGluZyBpdCB2aXNpYmxlIGluIFNhZmFyaS4gKi9cXG5pbnB1dFt0eXBlPSdzZWFyY2gnXTpub3QoOmZvY3VzLCA6YWN0aXZlKTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgICAvKiAxICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG46Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9J2J1dHRvbiddOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPSdyZXNldCddOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPSdzdWJtaXQnXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICAgKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9J2J1dHRvbiddOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPSdyZXNldCddOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPSdzdWJtaXQnXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5maWVsZHNldCB7XFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5sZWdlbmQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiAxICovXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAvKiAyICovXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICAvKiAxICovXFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiAzICovXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAgICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICAgKi9cXG5cXG50ZXh0YXJlYSB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAgICovXFxuXFxuW3R5cGU9J2NoZWNrYm94J10sXFxuW3R5cGU9J3JhZGlvJ10ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiAxICovXFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gICAqL1xcblxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gICAqL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgICAvKiAxICovXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAgICovXFxuXFxuW3R5cGU9J3NlYXJjaCddOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICAgKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gICAqL1xcblxcbmRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICAgKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5baGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0lBQ0ksaUJBQWlCO0lBQ2pCLE1BQU07SUFDTiw4QkFBOEI7SUFDOUIsTUFBTTtBQUNWOztBQUVBLHdDQUF3QztBQUN4QztJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0lBQ0ksU0FBUztBQUNiOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO2lGQUNpRjs7QUFFakY7OztJQUdJOztBQUVKO0lBQ0ksdUJBQXVCO0lBQ3ZCLE1BQU07SUFDTixTQUFTO0lBQ1QsTUFBTTtJQUNOLGlCQUFpQjtJQUNqQixNQUFNO0FBQ1Y7O0FBRUE7OztJQUdJOztBQUVKO0lBQ0ksaUNBQWlDO0lBQ2pDLE1BQU07SUFDTixjQUFjO0lBQ2QsTUFBTTtBQUNWOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7OztJQUdJOztBQUVKO0lBQ0ksbUJBQW1CO0lBQ25CLE1BQU07SUFDTiwwQkFBMEI7SUFDMUIsTUFBTTtJQUNOLGlDQUFpQztJQUNqQyxNQUFNO0FBQ1Y7O0FBRUE7O0lBRUk7O0FBRUo7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBOzs7SUFHSTs7QUFFSjs7O0lBR0ksaUNBQWlDO0lBQ2pDLE1BQU07SUFDTixjQUFjO0lBQ2QsTUFBTTtBQUNWOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7O0lBR0k7O0FBRUo7O0lBRUksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO2lGQUNpRjs7QUFFakY7OztJQUdJOztBQUVKO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBOzs7OztJQUtJLG9CQUFvQjtJQUNwQixNQUFNO0lBQ04sZUFBZTtJQUNmLE1BQU07SUFDTixpQkFBaUI7SUFDakIsTUFBTTtJQUNOLFNBQVM7SUFDVCxNQUFNO0lBQ04sVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQSw2Q0FBNkM7QUFDN0M7O0lBRUksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2I7a0JBQ2M7QUFDbEI7O0FBRUEsc0RBQXNEO0FBQ3REO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO21IQUNtSDtBQUNuSDtJQUNJLGFBQWE7QUFDakI7O0FBRUE7OztJQUdJOztBQUVKOztJQUVJLE1BQU07SUFDTixpQkFBaUI7QUFDckI7O0FBRUE7OztJQUdJOztBQUVKOztJQUVJLE1BQU07SUFDTixvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUk7O0FBRUo7Ozs7SUFJSSwwQkFBMEI7QUFDOUI7O0FBRUE7O0lBRUk7O0FBRUo7Ozs7SUFJSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBOztJQUVJOztBQUVKOzs7O0lBSUksOEJBQThCO0FBQ2xDOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBOzs7OztJQUtJOztBQUVKO0lBQ0ksc0JBQXNCO0lBQ3RCLE1BQU07SUFDTixjQUFjO0lBQ2QsTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0lBQ04sZUFBZTtJQUNmLE1BQU07SUFDTixVQUFVO0lBQ1YsTUFBTTtJQUNOLG1CQUFtQjtJQUNuQixNQUFNO0FBQ1Y7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOzs7SUFHSTs7QUFFSjs7SUFFSSxzQkFBc0I7SUFDdEIsTUFBTTtJQUNOLFlBQVk7SUFDWixNQUFNO0FBQ1Y7O0FBRUE7O0lBRUk7O0FBRUo7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSw2QkFBNkI7SUFDN0IsTUFBTTtJQUNOLG9CQUFvQjtJQUNwQixNQUFNO0FBQ1Y7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7OztJQUdJOztBQUVKO0lBQ0ksMEJBQTBCO0lBQzFCLE1BQU07SUFDTixhQUFhO0lBQ2IsTUFBTTtBQUNWOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC8qIDEgKi9cXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qIEFwcGx5IGJvcmRlciBib3ggdG8gZW50aXJlIGRvY3VtZW50ICovXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gICAqL1xcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqL1xcblxcbmhyIHtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIC8qIDEgKi9cXG4gICAgaGVpZ2h0OiAwO1xcbiAgICAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnByZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gICAgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcblxcbmEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgLyogMSAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgLyogMiAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAgICogYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gICAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuaW5wdXQge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwO1xcbiAgICAvKiAyICovXFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIEdpdmUgaW5wdXQgYW5kIHRleHQgYXJlYSBjb25zaXN0ZW50IGxvb2sgKi9cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHggMCAwIC0xMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQ6IGJvbGQgMC42ZW0gc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgICBjb2xvcjogI2ZmZjsgKi9cXG59XFxuXFxuLyogR2V0cyByaWQgb2YgZGVmYXVsdCBzZWFyY2ggdG8gcmVtb3ZlIHJlc3RyaWN0aW9ucyAqL1xcbmlucHV0W3R5cGU9J3NlYXJjaCddIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyogRml4IGZvciBpbmNvbnNpc3RlbnQgZGlzcGxheSBvZiBjbGVhciBcXFwieFxcXCIgaWNvbiBpbiBzZWFyY2ggaW5wdXRzIGFjcm9zcyBkaWZmZXJlbnQgYnJvd3NlcnMuIFxcbiAgLCB0aGlzIGNvZGUgcmVtb3ZlcyB0aGUgaWNvbiBpbiBFZGdlIGFuZCBDaHJvbWUgd2hlbiB0aGUgaW5wdXQgbG9zZXMgZm9jdXMsIHdoaWxlIGtlZXBpbmcgaXQgdmlzaWJsZSBpbiBTYWZhcmkuICovXFxuaW5wdXRbdHlwZT0nc2VhcmNoJ106bm90KDpmb2N1cywgOmFjdGl2ZSk6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgLyogMSAqL1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPSdidXR0b24nXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT0ncmVzZXQnXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT0nc3VibWl0J106Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAgICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPSdidXR0b24nXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT0ncmVzZXQnXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT0nc3VibWl0J106LW1vei1mb2N1c3Jpbmcge1xcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuZmllbGRzZXQge1xcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxubGVnZW5kIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgLyogMiAqL1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgLyogMSAqL1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDtcXG4gICAgLyogMyAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICAvKiAxICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gICAqL1xcblxcbnByb2dyZXNzIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAgICovXFxuXFxudGV4dGFyZWEge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gICAqL1xcblxcblt0eXBlPSdjaGVja2JveCddLFxcblt0eXBlPSdyYWRpbyddIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICAgKi9cXG5cXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICAgKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gICAgLyogMSAqL1xcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gICAqL1xcblxcblt0eXBlPSdzZWFyY2gnXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAgICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICAgKi9cXG5cXG5kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAgICovXFxuXFxudGVtcGxhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAgICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gICAgY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4uaGVhZGVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmFkaWFsICMzMzM7XFxufVxcblxcbi50b3BCYXJDb250YWluZXIge1xcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxuICAgIHdpZHRoOiA3NXZ3O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvcEJhckNvbnRhaW5lciBwIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxucC5pbnZpc2libGUge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbmJ1dHRvbi5zaGlwQ2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuI0FJQm9hcmQgYnV0dG9uLFxcbiNwbGF5ZXJCb2FyZCBidXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cXG4ucGxheWVyQm9hcmRDb250YWluZXIsXFxuLmFpQm9hcmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4jYm9hcmRzQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrICovXFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMzh2dykpO1xcbiAgICB3aWR0aDogODN2dztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcXG59XFxuXFxuLm9yaWVudGF0aW9uVG9nZ2xlQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI2JvYXJkc0NvbnRhaW5lciBwIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXJCb2FyZCB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG59XFxuXFxuI0FJQm9hcmQge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XFxufVxcblxcbi8qIGJ1dHRvbi5ib2FyZENlbGwge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbn0gKi9cXG5cXG5idXR0b24uc2hpcENlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuYnV0dG9uLnNoaXBIaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDk0LCAyMik7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MTJweCkge1xcbiAgICAjYm9hcmRzQ29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTZweDtcXG4gICAgICAgIC8qICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzI1cHgsIDM4dncpKTtcXG4gICAgICAgIHdpZHRoOiA4NnZ3O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICAgIH1cXG5cXG4gICAgI0FJQm9hcmQge1xcbiAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDQycHgpO1xcbiAgICB9XFxuXFxuICAgICNwbGF5ZXJCb2FyZCB7XFxuICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNDJweCk7XFxuICAgIH1cXG5cXG4gICAgLnRvcEJhckNvbnRhaW5lciB7XFxuICAgICAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxuICAgICAgICB3aWR0aDogODR2dztcXG4gICAgICAgIGhlaWdodDogODBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiA2JTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweDtcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMXB4ICM3YTdhN2E0MjtcXG4gICAgICAgIHBhZGRpbmc6IDZweDtcXG4gICAgfVxcblxcbiAgICAudG9wQmFyQ29udGFpbmVyIHAge1xcbiAgICAgICAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIH1cXG5cXG4gICAgI2JvYXJkc0NvbnRhaW5lciBwIHtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsU0FBUztJQUNULDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDZDQUE2QztBQUNqRDs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztJQUNULDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHdCQUF3QjtJQUN4Qiw0REFBNEQ7SUFDNUQsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG9DQUFvQztBQUN4Qzs7QUFFQTs7O0dBR0c7O0FBRUg7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixTQUFTO1FBQ1QsK0JBQStCO1FBQy9CLGFBQWE7UUFDYixhQUFhO1FBQ2Isd0JBQXdCO1FBQ3hCLDREQUE0RDtRQUM1RCxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLHdCQUF3QjtRQUN4QixhQUFhO1FBQ2Isc0NBQXNDO1FBQ3RDLG9DQUFvQztJQUN4Qzs7SUFFQTtRQUNJLHdCQUF3QjtRQUN4QixhQUFhO1FBQ2Isc0NBQXNDO1FBQ3RDLG9DQUFvQztJQUN4Qzs7SUFFQTtRQUNJLDhCQUE4QjtRQUM5QixXQUFXO1FBQ1gsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsT0FBTztRQUNQLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsMkJBQTJCO1FBQzNCLHdCQUF3QjtRQUN4QixpQ0FBaUM7UUFDakMsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLDhCQUE4QjtRQUM5QixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxvQkFBb0I7UUFDcEIsaUJBQWlCO0lBQ3JCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICAgIGNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogODBweDtcXG59XFxuXFxuLmhlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJhZGlhbCAjMzMzO1xcbn1cXG5cXG4udG9wQmFyQ29udGFpbmVyIHtcXG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICB3aWR0aDogNzV2dztcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b3BCYXJDb250YWluZXIgcCB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbnAuaW52aXNpYmxlIHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5idXR0b24uc2hpcENlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNBSUJvYXJkIGJ1dHRvbixcXG4jcGxheWVyQm9hcmQgYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuLnBsYXllckJvYXJkQ29udGFpbmVyLFxcbi5haUJvYXJkQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuI2JvYXJkc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibGFjayAqL1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDM4dncpKTtcXG4gICAgd2lkdGg6IDgzdnc7XFxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XFxufVxcblxcbi5vcmllbnRhdGlvblRvZ2dsZUJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNib2FyZHNDb250YWluZXIgcCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyQm9hcmQge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XFxufVxcblxcbiNBSUJvYXJkIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xcbn1cXG5cXG4vKiBidXR0b24uYm9hcmRDZWxsIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG59ICovXFxuXFxuYnV0dG9uLnNoaXBDZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJ1dHRvbi5zaGlwSGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCA5NCwgMjIpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogODEycHgpIHtcXG4gICAgI2JvYXJkc0NvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDE2cHg7XFxuICAgICAgICAvKiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICAgICAgcGFkZGluZzogMTJweDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyNXB4LCAzOHZ3KSk7XFxuICAgICAgICB3aWR0aDogODZ2dztcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgICB9XFxuXFxuICAgICNBSUJvYXJkIHtcXG4gICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MnB4KTtcXG4gICAgfVxcblxcbiAgICAjcGxheWVyQm9hcmQge1xcbiAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDQycHgpO1xcbiAgICB9XFxuXFxuICAgIC50b3BCYXJDb250YWluZXIge1xcbiAgICAgICAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICAgICAgd2lkdGg6IDg0dnc7XFxuICAgICAgICBoZWlnaHQ6IDgwcHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdhcDogNiU7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHg7XFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAjN2E3YTdhNDI7XFxuICAgICAgICBwYWRkaW5nOiA2cHg7XFxuICAgIH1cXG5cXG4gICAgLnRvcEJhckNvbnRhaW5lciBwIHtcXG4gICAgICAgIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibGFjazsgKi9cXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB9XFxuXFxuICAgICNib2FyZHNDb250YWluZXIgcCB7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7XG4gIGRpc3BsYXlDb250cm9sbGVyLFxuICBwcmVHYW1lU2V0dXBcbn0gZnJvbSAnLi9jb250cm9sbGVycy9kaXNwbGF5Q29udHJvbGxlcidcblxuaW1wb3J0ICcuL3N0eWxlcy9ub3JtYWxpemUuY3NzJ1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnXG5cbnByZUdhbWVTZXR1cCgpXG4iXSwibmFtZXMiOlsiZGVsYXkiLCJnYW1lQ29udHJvbGxlciIsImdhbWUiLCJwcmVHYW1lU2V0dXAiLCJyZW5kZXJQbGF5ZXJCb2FyZCIsInBsYWNlQ2FycmllclNoaXAiLCJyZW5kZXJBSUJvYXJkIiwiZGlzcGxheUNvbnRyb2xsZXIiLCJ0b3BCYXJDb250YWluZXJQYXJhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJwbGFjZUFJU2hpcHMiLCJhaUJvYXJkRGl2IiwiZ2V0RWxlbWVudEJ5SWQiLCJwbGF5ZXJzIiwiZ2V0UGxheWVycyIsImFjdGl2ZVBsYXllciIsImdldEN1cnJlbnRQbGF5ZXIiLCJodW1hbiIsIm5ld01lc3NhZ2UiLCJ0cmFuc2l0aW9uVGV4dENoYW5nZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0IiwidG9wQmFyUGFyYSIsImh1bWFuQm9hcmREaXYiLCJvcmllbnRhdGlvbkJ0blZhbHVlcyIsImNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuIiwiaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyIsIm9yaWVudGF0aW9uVG9nZ2xlQnRuIiwiY29udHJvbGxlciIsIkFib3J0Q29udHJvbGxlciIsImUiLCJoYW5kbGVDYXJyaWVyU2hpcFBsYWNlbWVudCIsInNpZ25hbCIsInBsYWNlQmF0dGxlU2hpcCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVCYXR0bGVTaGlwUGxhY2VtZW50IiwicGxhY2VDcnVpc2VyIiwiaGFuZGxlQ3J1aXNlclNoaXBQbGFjZW1lbnQiLCJwbGFjZVN1Ym1hcmluZSIsImhhbmRsZVN1Ym1hcmluZVNoaXBQbGFjZW1lbnQiLCJwbGFjZURlc3Ryb3llciIsImhhbmRsZURlc3Ryb3llclNoaXBQbGFjZW1lbnQiLCJwbGF5ZXJCb2FyZCIsImdldEh1bWFuQm9hcmQiLCJwbGF5ZXJCb2FyZERpdiIsImlubmVySFRNTCIsImkiLCJsZW5ndGgiLCJjdXJyZW50Um93IiwiaiIsImJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0Iiwicm93IiwiY29sdW1uIiwiYXBwZW5kQ2hpbGQiLCJhaUJvYXJkIiwiZ2V0QUlCb2FyZCIsInVwZGF0ZUh1bWFuQm9hcmQiLCJodW1hbkJvYXJkIiwibWlzc2VkU2hvdHMiLCJnZXRIdW1hbkJvYXJkT2JqIiwiZ2V0TWlzc2VkU2hvdHMiLCJzdWNjZXNzZnVsU2hvdHMiLCJnZXRTdWNjZXNzZnVsU2hvdHMiLCJhbGxEb21Ob2RlcyIsIkFycmF5IiwiZnJvbSIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwic2hvdCIsInRhcmdldE5vZGUiLCJyZW1vdmUiLCJ1cGRhdGVBSUJvYXJkIiwiZ2V0QUlCb2FyZE9iaiIsImhvcml6b250YWxTaGlwT3JpZW50YXRpb24iLCJzZWxlY3RlZFJvdyIsInRhcmdldCIsInNlbGVjdGVkQ29sdW1uIiwiY29vcmRpbmF0ZSIsImNhcnJpZXJQbGFjZWQiLCJwbGFjZUNhcnJpZXJPbkJvYXJkIiwiYWJvcnQiLCJyZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuIiwiYmF0dGxlc2hpcFBsYWNlZCIsInBsYWNlQmF0dGxlc2hpcE9uQm9hcmQiLCJjcnVpc2VyUGxhY2VkIiwicGxhY2VDcnVpc2VyT25Cb2FyZCIsInN1Ym1hcmluZVBsYWNlZCIsInBsYWNlU3VibWFyaW5lT25Cb2FyZCIsImRlc3Ryb3llclBsYWNlZCIsInBsYWNlRGVzdHJveWVyT25Cb2FyZCIsInNoaXBUeXBlIiwiYm9hcmRET01DZWxsc0FyciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRIb3Jpem9udGFsRE9NQ29vcmRzIiwiZ2V0VmVydGljYWxET01Db29yZHMiLCJwbGFjZUNydWlzZXJTaGlwIiwicGxhY2VTdWJtYXJpbmVTaGlwIiwicGxhY2VEZXN0cm95ZXJTaGlwIiwic3RhcnRpbmdDb2x1bW4iLCJOdW1iZXIiLCJzaGlwTGVuZ3RoIiwiZG9tQ29vcmRpbmF0ZSIsInRhcmdldERPTUJ0biIsImZpbmRTaGlwRE9NQnRuIiwic3RhcnRpbmdSb3ciLCJkb21DZWxsUm93IiwiZG9tQ2VsbENvbHVtbiIsImFscmVhZHlBdHRhY2tlZCIsInByZXZlbnRTYW1lQXR0YWNrIiwicGxheVJvdW5kIiwiaHVtYW5Nb3ZlU3VjY2Vzc2Z1bCIsImdldExhc3RIdW1hbk1vdmVTdWNjZXNzZnVsIiwiZGlzcGxheVN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlIiwiZGlzcGxheVVuc3VjY2Vzc2Z1bEF0dGFja01lc3NhZ2UiLCJodW1hbldpbnMiLCJjaGVja0ZvcldpbiIsImhhbmRsZVdpbkNoZWNrIiwiaGFuZGxlQUlNb3ZlIiwiZW5lbXlBdHRhY2tpbmdNc2ciLCJhaU1vdmVTdWNjZXNzZnVsIiwiZ2V0TGFzdEFJTW92ZVN1Y2Nlc3NmdWwiLCJhaVdpbnMiLCJhdHRhY2tUaGVFbmVteU1zZyIsImFubm91bmNlV2lubmVyIiwid2lubmVyIiwid2lubmVyTmFtZSIsImdldE5hbWUiLCJwbGF5QWdhaW4iLCJ0b3BCYXJEaXYiLCJwbGF5QWdhaW5CdG4iLCJzdGFydE5ld0dhbWUiLCJyZW1vdmVDaGlsZCIsInByZXZpb3VzT3JpZW50YXRpb25CdG4iLCJwbGF5ZXIiLCJhdHRhY2tBbmRIaXRNc2ciLCJzZXRUaW1lb3V0IiwiZW5lbXlIaXRNc2ciLCJ1bnN1Y2Nlc3NmdWxBdHRhY2tNc2ciLCJ1bnN1Y2Nlc3NmdWxFbmVteUF0dGFja01zZyIsIndpbkNoZWNrIiwiYm9hcmREaXYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVzZXRHYW1lU3RhdGUiLCJkb21FbGVtZW50IiwiR2FtZWJvYXJkIiwiUGxheWVyIiwicmV0dXJuUmFuZG9tQUlCb2FyZCIsImNyZWF0ZUdhbWVCb2FyZCIsImNhcnJpZXJBcnIiLCJkZXRlcm1pbmVDYXJyaWVyQXJyQ29vcmRzIiwic2hpcFBsYWNlZCIsInBsYWNlU2hpcCIsInB1c2giLCJjb29yZCIsInRvU3RyaW5nIiwiYmF0dGxlc2hpcEFyciIsImRldGVybWluZUJhdHRsZXNoaXBBcnJDb29yZHMiLCJjcnVpc2VyQXJyIiwiZGV0ZXJtaW5lQ3J1aXNlckFyckNvb3JkcyIsInN1Ym1hcmluZUFyciIsImRldGVybWluZVN1Ym1hcmluZUFyckNvb3JkcyIsImRlc3Ryb3llckFyciIsImRldGVybWluZURlc3Ryb3llckFyckNvb3JkcyIsInBsYWNlU2hpcHMiLCJodW1hblBsYXllciIsImFpUGxheWVyIiwiQUkiLCJjdXJyZW50UGxheWVyIiwicmVjZWl2ZUF0dGFjayIsIm5leHRNb3ZlIiwiY29tcHV0ZXJzTmV4dE1vdmUiLCJyZW1vdmVMYXN0QUlNb3ZlIiwic3dpdGNoUGxheWVyIiwiYXZhaWxhYmxlTW92ZXMiLCJnZXRBSUF2YWlsYWJsZU1vdmVzIiwibGFzdEFJTW92ZVN1Y2Nlc3NmdWwiLCJhZGphY2VudFNsb3RzIiwiZ2V0QWRqYWNlbnRTbG90cyIsImdldEFkamFjZW50U2xvdHNRdWV1ZSIsImFkZEFkamFjZW50U2xvdHNUb1F1ZXVlIiwiZ2V0QWRqYWNlbnRRdWV1ZVNsb3QiLCJyYW5kb21Nb3ZlIiwibWFrZVJhbmRvbU1vdmUiLCJhbGxTaGlwc1N1bmsiLCJjbGVhckdhbWVCb2FyZCIsImdldEJvYXJkIiwiYm9hcmQiLCJjb29yZGluYXRlc09iaiIsInNoaXBDb29yZGluYXRlc0FyciIsIk9iamVjdCIsInZhbHVlcyIsInNoaXBDb29yZGluYXRlcyIsImFycmF5c0FyZUVxdWFsIiwiU2hpcCIsInNoaXBPYmplY3RzIiwiYWlBdmFpbGFibGVNb3ZlcyIsImFkamFjZW50U2xvdHNRdWV1ZSIsInJvd3MiLCJjb2x1bW5zIiwibGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwiLCJ1bmRlZmluZWQiLCJ2YWxpZGF0ZUNvb3JkaW5hdGVzIiwiY29vcmRpbmF0ZXMiLCJ2YWxpZENvb3JkaW5hdGVzIiwiY2hlY2tTZWxmT3ZlcmxhcCIsImNvb3JkaW5hdGVzT3ZlcmxhcCIsInByZXZDb29yZGluYXRlIiwiaW5kZXgiLCJjaGVja092ZXJsYXBXaXRoT3RoZXJTaGlwcyIsInNoaXBzT3ZlcmxhcCIsImJvYXJkQ2VsbCIsImxlZ2FsQ29vcmRpbmF0ZXMiLCJvdmVybGFwcGluZ0Nvb3JkaW5hdGVzIiwic2hpcE92ZXJsYXBwaW5nIiwic2hpcE9iamVjdCIsInNoaXBPYmoiLCJoaXQiLCJyZW1vdmVBZGphY2VudFNsb3QiLCJ0YXJnZXRDb29yZGluYXRlcyIsImFkamFjZW50UXVldWUiLCJTZXQiLCJzbG90IiwiZmlsdGVyIiwiZXZlcnlTaGlwU2FuayIsImhhc0JlZW5TdW5rIiwibW92ZSIsInNwbGljZSIsImdldFNoaXBPYmplY3RzIiwicG9wIiwiZ2V0TGFzdFN1Y2Nlc3NmdWxNb3ZlIiwiYXQiLCJuYW1lIiwiaXNBSSIsImF2YWlsYWJsZU1vdmVzTGVuZ3RoIiwicmFuZG9tQXJySW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21Db29yZGluYXRlIiwibGFzdFN1Y2Nlc3NmdWxNb3ZlIiwicmV0cmlldmVBZGphY2VudFNsb3RzIiwibGVnYWxBZGphY2VudFNsb3RzIiwicmVtb3ZlSWxsZWdhbEFkamFjZW50U2xvdHMiLCJnZXRDZWxsQWJvdmUiLCJuZXdBcnIiLCJuZXdSb3ciLCJnZXRDZWxsQmVsb3ciLCJhcnIiLCJnZXRDZWxsVG9SaWdodCIsIm5ld0NvbHVtbiIsImdldENlbGxUb0xlZnQiLCJsYXN0U3VjY2Vzc2Z1bE1vdmVWYWx1ZSIsImFkamFjZW50U2xvdHNBcnIiLCJwcmV2ZW50UHJldmlvdXNTaG90VG9RdWV1ZSIsInNsb3RzIiwiYWxsUHJldmlvdXNBdHRhY2tzIiwiY29uY2F0IiwicHJldmlvdXNBdHRhY2tzIiwiZmlsdGVyZWRTbG90cyIsImhhcyIsIm51bU9mSGl0cyIsImlzU3VuayIsImdldE51bU9mSGl0cyIsImdldExlbmd0aCIsImFycjEiLCJhcnIyIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFpQm9hcmRzIiwiYWlTaGlwQ29vcmRzT25lIiwiYWlTaGlwQ29vcmRzVHdvIiwiYWlTaGlwQ29vcmRzVGhyZWUiLCJyYW5kb21JbmRleCIsImNob3NlbkFJQm9hcmQiLCJjYXJyaWVyIiwiYmF0dGxlc2hpcCIsImNydWlzZXIiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiXSwic291cmNlUm9vdCI6IiJ9