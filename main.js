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
    const unsuccessfulAttackMsg = 'You attack on the enemy was unsuccessful';
    setTimeout(transitionTextChanges, 10, unsuccessfulAttackMsg, topBarContainerPara);
  } else if (player === 'computer') {
    const topBarContainerPara = document.querySelector('.topBarContainer > p');
    const unsuccessfulEnemyAttackMsg = 'The enemies attack was unsuccessful';
    setTimeout(transitionTextChanges, 10, unsuccessfulEnemyAttackMsg, topBarContainerPara);
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n}\r\n\r\nheader {\r\n  background-color: darkblue;\r\n  color: rgb(236, 236, 236);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 80px;\r\n}\r\n\r\n.headerContainer {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  justify-content: center;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex: 1;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  background-color: radial #333;\r\n}\r\n\r\n.topBarContainer {\r\n  /* outline: 1px solid black; */\r\n  width: 70vw;\r\n  height: 80px;\r\n  margin-top: 8%;\r\n  display: flex;\r\n  gap: 10%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 12px 12px;\r\n  background-color: lightgray;\r\n  box-shadow: 0px 2px 1px #7a7a7a42;\r\n}\r\n\r\n.topBarContainer p {\r\n  align-items: center;\r\n  transition: opacity 0.5s ease-in-out;\r\n  font-size: 1.4rem;\r\n  opacity: 1;\r\n}\r\n\r\np.invisible {\r\n  transition: opacity 0.5s ease-in-out;\r\n  opacity: 0;\r\n}\r\n\r\nbutton.shipCell {\r\n  background-color: grey;\r\n  transition: background-color 0.2s ease-in-out;\r\n}\r\n\r\n#AIBoard button,\r\n#playerBoard button {\r\n  border-radius: 0;\r\n}\r\n\r\n.playerBoardContainer,\r\n.aiBoardContainer {\r\n  display: grid;\r\n}\r\n\r\n#boardsContainer {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 12px;\r\n  /* outline: 1px solid black */\r\n  padding: 12px;\r\n  display: grid;\r\n  grid-template-rows: none;\r\n  grid-template-columns: repeat(auto-fit, minmax(400px, 38vw));\r\n  width: 83vw;\r\n  margin-bottom: 14px;\r\n}\r\n\r\n.orientationToggleBtn {\r\n  background-color: #333;\r\n  color: white;\r\n  border-radius: 8px;\r\n  height: 70%;\r\n  width: 100px;\r\n  font-size: 1rem;\r\n}\r\n\r\n#boardsContainer p {\r\n  justify-self: center;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n\r\n#playerBoard {\r\n  outline: 1px solid black;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 50px);\r\n}\r\n\r\n#AIBoard {\r\n  outline: 1px solid black;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 50px);\r\n}\r\n\r\nbutton.boardCell {\r\n    border-radius: 0px;\r\n    background-color: lightgray;\r\n}\r\n\r\nbutton.shipCell {\r\n  background-color: #333;\r\n  border: 1px solid black;\r\n}\r\n\r\nbutton.shipHit {\r\n  background-color: rgb(22, 94, 22);\r\n  transition: background-color 0.3s ease-in;\r\n}\r\n\r\n@media only screen and (max-device-width: 812px) {\r\n  #boardsContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 16px;\r\n    /*  outline: 1px solid black; */\r\n    padding: 12px;\r\n    display: grid;\r\n    grid-template-rows: none;\r\n    grid-template-columns: repeat(auto-fit, minmax(325px, 38vw));\r\n    width: 86vw;\r\n    margin-bottom: 14px;\r\n    margin-bottom: 24px;\r\n  }\r\n\r\n  #AIBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 42px);\r\n  }\r\n\r\n  #playerBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 42px);\r\n  }\r\n\r\n  .topBarContainer {\r\n    /* outline: 1px solid black; */\r\n    width: 84vw;\r\n    height: 80px;\r\n    margin-top: 24px;\r\n    display: flex;\r\n    gap: 6%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: lightgrey;\r\n    border-radius: 12px 12px;\r\n    box-shadow: 0px 2px 1px #7a7a7a42;\r\n    padding: 6px;\r\n  }\r\n\r\n  .topBarContainer p {\r\n    /* outline: 1px solid black; */\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  #boardsContainer p {\r\n    justify-self: center;\r\n    font-size: 1.1rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,OAAO;EACP,sBAAsB;EACtB,SAAS;EACT,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;EAC9B,WAAW;EACX,YAAY;EACZ,cAAc;EACd,aAAa;EACb,QAAQ;EACR,uBAAuB;EACvB,mBAAmB;EACnB,wBAAwB;EACxB,2BAA2B;EAC3B,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;EACnB,oCAAoC;EACpC,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,oCAAoC;EACpC,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,6CAA6C;AAC/C;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,6BAA6B;EAC7B,aAAa;EACb,aAAa;EACb,wBAAwB;EACxB,4DAA4D;EAC5D,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;AACnB;;;AAGA;EACE,wBAAwB;EACxB,aAAa;EACb,sCAAsC;EACtC,oCAAoC;AACtC;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,sCAAsC;EACtC,oCAAoC;AACtC;;AAEA;IACI,kBAAkB;IAClB,2BAA2B;AAC/B;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,iCAAiC;EACjC,yCAAyC;AAC3C;;AAEA;EACE;IACE,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,+BAA+B;IAC/B,aAAa;IACb,aAAa;IACb,wBAAwB;IACxB,4DAA4D;IAC5D,WAAW;IACX,mBAAmB;IACnB,mBAAmB;EACrB;;EAEA;IACE,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,oCAAoC;EACtC;;EAEA;IACE,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,oCAAoC;EACtC;;EAEA;IACE,8BAA8B;IAC9B,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,OAAO;IACP,uBAAuB;IACvB,mBAAmB;IACnB,2BAA2B;IAC3B,wBAAwB;IACxB,iCAAiC;IACjC,YAAY;EACd;;EAEA;IACE,8BAA8B;IAC9B,iBAAiB;EACnB;;EAEA;IACE,oBAAoB;IACpB,iBAAiB;EACnB;AACF","sourcesContent":["body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n}\r\n\r\nheader {\r\n  background-color: darkblue;\r\n  color: rgb(236, 236, 236);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 80px;\r\n}\r\n\r\n.headerContainer {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  justify-content: center;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex: 1;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  background-color: radial #333;\r\n}\r\n\r\n.topBarContainer {\r\n  /* outline: 1px solid black; */\r\n  width: 70vw;\r\n  height: 80px;\r\n  margin-top: 8%;\r\n  display: flex;\r\n  gap: 10%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 12px 12px;\r\n  background-color: lightgray;\r\n  box-shadow: 0px 2px 1px #7a7a7a42;\r\n}\r\n\r\n.topBarContainer p {\r\n  align-items: center;\r\n  transition: opacity 0.5s ease-in-out;\r\n  font-size: 1.4rem;\r\n  opacity: 1;\r\n}\r\n\r\np.invisible {\r\n  transition: opacity 0.5s ease-in-out;\r\n  opacity: 0;\r\n}\r\n\r\nbutton.shipCell {\r\n  background-color: grey;\r\n  transition: background-color 0.2s ease-in-out;\r\n}\r\n\r\n#AIBoard button,\r\n#playerBoard button {\r\n  border-radius: 0;\r\n}\r\n\r\n.playerBoardContainer,\r\n.aiBoardContainer {\r\n  display: grid;\r\n}\r\n\r\n#boardsContainer {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 12px;\r\n  /* outline: 1px solid black */\r\n  padding: 12px;\r\n  display: grid;\r\n  grid-template-rows: none;\r\n  grid-template-columns: repeat(auto-fit, minmax(400px, 38vw));\r\n  width: 83vw;\r\n  margin-bottom: 14px;\r\n}\r\n\r\n.orientationToggleBtn {\r\n  background-color: #333;\r\n  color: white;\r\n  border-radius: 8px;\r\n  height: 70%;\r\n  width: 100px;\r\n  font-size: 1rem;\r\n}\r\n\r\n#boardsContainer p {\r\n  justify-self: center;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n\r\n#playerBoard {\r\n  outline: 1px solid black;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 50px);\r\n}\r\n\r\n#AIBoard {\r\n  outline: 1px solid black;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 50px);\r\n}\r\n\r\nbutton.boardCell {\r\n    border-radius: 0px;\r\n    background-color: lightgray;\r\n}\r\n\r\nbutton.shipCell {\r\n  background-color: #333;\r\n  border: 1px solid black;\r\n}\r\n\r\nbutton.shipHit {\r\n  background-color: rgb(22, 94, 22);\r\n  transition: background-color 0.3s ease-in;\r\n}\r\n\r\n@media only screen and (max-device-width: 812px) {\r\n  #boardsContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 16px;\r\n    /*  outline: 1px solid black; */\r\n    padding: 12px;\r\n    display: grid;\r\n    grid-template-rows: none;\r\n    grid-template-columns: repeat(auto-fit, minmax(325px, 38vw));\r\n    width: 86vw;\r\n    margin-bottom: 14px;\r\n    margin-bottom: 24px;\r\n  }\r\n\r\n  #AIBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 42px);\r\n  }\r\n\r\n  #playerBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 42px);\r\n  }\r\n\r\n  .topBarContainer {\r\n    /* outline: 1px solid black; */\r\n    width: 84vw;\r\n    height: 80px;\r\n    margin-top: 24px;\r\n    display: flex;\r\n    gap: 6%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: lightgrey;\r\n    border-radius: 12px 12px;\r\n    box-shadow: 0px 2px 1px #7a7a7a42;\r\n    padding: 6px;\r\n  }\r\n\r\n  .topBarContainer p {\r\n    /* outline: 1px solid black; */\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  #boardsContainer p {\r\n    justify-self: center;\r\n    font-size: 1.1rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7RUFDREMsU0FBUyxFQUFFLENBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7RUFDREMsU0FBUyxFQUFFLENBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRVYsQ0FBQztBQUVELE1BQU1SLGVBQWUsR0FBRztFQUN0QkksT0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7RUFDREMsVUFBVSxFQUFFLENBQ1YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7RUFDREMsT0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7RUFDREMsU0FBUyxFQUFFLENBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7RUFDREMsU0FBUyxFQUFFLENBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRVYsQ0FBQztBQUVELE1BQU1QLGlCQUFpQixHQUFHO0VBQ3hCRyxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxVQUFVLEVBQUUsQ0FDVixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFVixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRkQ7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDJYQUEyWCwwQkFBMEIsc0RBQXNELG9CQUFvQix3REFBd0QsK0JBQStCLEtBQUssc0xBQXNMLGtCQUFrQixLQUFLLHdGQUF3Rix1QkFBdUIsS0FBSywwS0FBMEssdUJBQXVCLHlCQUF5QixLQUFLLGdQQUFnUCxnQ0FBZ0MsaUNBQWlDLHlDQUF5QyxvQkFBb0IsMktBQTJLLDBDQUEwQyxzQ0FBc0Msb0JBQW9CLGlOQUFpTixzQ0FBc0MsS0FBSyw4S0FBOEssNEJBQTRCLGtEQUFrRCx5REFBeUQsb0JBQW9CLDJHQUEyRyw0QkFBNEIsS0FBSyw2TEFBNkwsMENBQTBDLHNDQUFzQyxvQkFBb0Isc0ZBQXNGLHVCQUF1QixLQUFLLDBJQUEwSSx1QkFBdUIsdUJBQXVCLDJCQUEyQixpQ0FBaUMsS0FBSyxhQUFhLHdCQUF3QixLQUFLLGFBQWEsb0JBQW9CLEtBQUssNk1BQTZNLDJCQUEyQixLQUFLLGdQQUFnUCxpQ0FBaUMsS0FBSywrREFBK0QsNkJBQTZCLHVDQUF1Qyx5Q0FBeUMsaUNBQWlDLGtDQUFrQywrQkFBK0IsS0FBSyw4RUFBOEUseUJBQXlCLCtCQUErQiwyQkFBMkIsc0JBQXNCLHFCQUFxQixLQUFLLGtCQUFrQix1QkFBdUIsc0JBQXNCLCtCQUErQixvQkFBb0Isb0JBQW9CLGdDQUFnQyxxQkFBcUIsdUJBQXVCLEtBQUssZ0JBQWdCLHFCQUFxQixvQ0FBb0MsK0JBQStCLDJCQUEyQix5QkFBeUIsd0JBQXdCLEtBQUssdUNBQXVDLHNCQUFzQiw0QkFBNEIscUJBQXFCLE9BQU8seUZBQXlGLHlCQUF5QixLQUFLLDZTQUE2UyxzQkFBc0IsS0FBSyxxSEFBcUgseUNBQXlDLEtBQUssMExBQTBMLDRDQUE0QyxLQUFLLHlLQUF5SyxtQ0FBbUMsS0FBSyx5TkFBeU4sMkJBQTJCLG1CQUFtQixLQUFLLHdOQUF3Tix1Q0FBdUMsS0FBSyw4RUFBOEUsdUNBQXVDLEtBQUssb1NBQW9TLCtCQUErQixzQ0FBc0Msc0NBQXNDLHVDQUF1QyxrQ0FBa0MsMkNBQTJDLG9CQUFvQixnSEFBZ0gsaUNBQWlDLEtBQUssK0ZBQStGLHVCQUF1QixLQUFLLDBKQUEwSiwrQkFBK0Isb0NBQW9DLG9CQUFvQixzTUFBc00scUJBQXFCLEtBQUsseUpBQXlKLHNDQUFzQyw0Q0FBNEMsb0JBQW9CLHdJQUF3SSxpQ0FBaUMsS0FBSyxpTUFBaU0sbUNBQW1DLHFDQUFxQyxvQkFBb0IsOE1BQThNLHVCQUF1QixLQUFLLHFGQUFxRiwyQkFBMkIsS0FBSyxzTEFBc0wsc0JBQXNCLEtBQUssZ0ZBQWdGLHNCQUFzQixLQUFLLE9BQU8sbUdBQW1HLE1BQU0sUUFBUSxRQUFRLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLE1BQU0sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxRQUFRLE1BQU0sS0FBSyxZQUFZLE9BQU8sU0FBUyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxPQUFPLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxLQUFLLE1BQU0sT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDRXdDO0FBRVQ7QUFDSjtBQUUzQjNSLDRFQUFZLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvY29udHJvbGxlcnMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvY29udHJvbGxlcnMvZ2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvZmFjdG9yaWVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9mYWN0b3JpZXMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2ZhY3Rvcmllcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2hlbHBlcnMvYXJyYXlzQXJlRXF1YWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvaGVscGVycy9kZWxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9oZWxwZXJzL3JvdGF0ZUFJQm9hcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3M/NDNmNCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWxheSB9IGZyb20gJy4uL2hlbHBlcnMvZGVsYXknXHJcbmltcG9ydCB7IGdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9nYW1lQ29udHJvbGxlcidcclxuXHJcbmNvbnN0IGdhbWUgPSBnYW1lQ29udHJvbGxlcigpXHJcblxyXG5jb25zdCBwcmVHYW1lU2V0dXAgPSAoKSA9PiB7XHJcbiAgcmVuZGVyUGxheWVyQm9hcmQoKVxyXG4gIHBsYWNlQ2FycmllclNoaXAoKVxyXG4gIHJlbmRlckFJQm9hcmQoKVxyXG59XHJcbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vIHRoaXMgaXMgd2hlcmUgdGhlIHNoaXAgcGxhY2VtZW50IHdpbGwgaGFwcGVuIGZvciBodW1hbiBwbGF5ZXJcclxuICBjb25zdCB0b3BCYXJDb250YWluZXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxyXG4gIHRvcEJhckNvbnRhaW5lclBhcmEudGV4dENvbnRlbnQgPSAnRW5lbm15IGlzIHBsYWNpbmcgdGhlaXIgc2hpcHMuLi4nXHJcbiAgYXdhaXQgZGVsYXkoMTUwMClcclxuICBnYW1lLnBsYWNlQUlTaGlwcygpXHJcbiAgcmVuZGVyQUlCb2FyZCgpXHJcbiAgdG9wQmFyQ29udGFpbmVyUGFyYS50ZXh0Q29udGVudCA9ICcnXHJcbiAgY29uc3QgYWlCb2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSUJvYXJkJylcclxuICBjb25zdCBwbGF5ZXJzID0gZ2FtZS5nZXRQbGF5ZXJzKClcclxuICBjb25zdCBhY3RpdmVQbGF5ZXIgPSBnYW1lLmdldEN1cnJlbnRQbGF5ZXIoKVxyXG5cclxuICBpZiAoYWN0aXZlUGxheWVyID09PSBwbGF5ZXJzLmh1bWFuKSB7XHJcbiAgICBjb25zdCBuZXdNZXNzYWdlID0gJ0F0dGFjayB0aGUgZW5lbWllcyBzaGlwcyEnXHJcbiAgICBjb25zdCB0b3BCYXJDb250YWluZXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxyXG4gICAgdHJhbnNpdGlvblRleHRDaGFuZ2VzKG5ld01lc3NhZ2UsIHRvcEJhckNvbnRhaW5lclBhcmEpXHJcblxyXG4gICAgYWlCb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHBsYWNlQ2FycmllclNoaXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgY2FycmllciBzaGlwJ1xyXG5cclxuICBjb25zdCBodW1hbkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckJvYXJkJylcclxuXHJcbiAgY29uc3Qgb3JpZW50YXRpb25CdG5WYWx1ZXMgPSBjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0bigpXHJcbiAgbGV0IGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBvcmllbnRhdGlvbkJ0blZhbHVlc1swXVxyXG4gIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlQnRuID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMV1cclxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID09PSB0cnVlKSB7XHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBmYWxzZVxyXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXHJcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxyXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICdjbGljaycsXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBoYW5kbGVDYXJyaWVyU2hpcFBsYWNlbWVudChlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzLCBjb250cm9sbGVyKVxyXG4gICAgfSxcclxuICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBwbGFjZUJhdHRsZVNoaXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgYmF0dGxlc2hpcCdcclxuXHJcbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXHJcblxyXG4gIGNvbnN0IG9yaWVudGF0aW9uQnRuVmFsdWVzID0gY3JlYXRlT3JpZW50YXRpb25Ub2dnbGVCdG4oKVxyXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMF1cclxuICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZUJ0biA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzFdXHJcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gZmFsc2VcclxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnVmVydGljYWwnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxyXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJ1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcclxuICBodW1hbkJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAnY2xpY2snLFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgJ09yaWVudGF0aW9uIHN0YXR1cyBnb2luZyBpbnRvIHBsYWNlbWVudDonICtcclxuICAgICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXNcclxuICAgICAgKVxyXG4gICAgICBoYW5kbGVCYXR0bGVTaGlwUGxhY2VtZW50KGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMsIGNvbnRyb2xsZXIpXHJcbiAgICB9LFxyXG4gICAgeyBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsIH1cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHBsYWNlQ3J1aXNlciA9ICgpID0+IHtcclxuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxyXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBDcnVpc2VyJ1xyXG5cclxuICBjb25zdCBodW1hbkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckJvYXJkJylcclxuXHJcbiAgY29uc3Qgb3JpZW50YXRpb25CdG5WYWx1ZXMgPSBjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0bigpXHJcbiAgbGV0IGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBvcmllbnRhdGlvbkJ0blZhbHVlc1swXVxyXG4gIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlQnRuID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMV1cclxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID09PSB0cnVlKSB7XHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBmYWxzZVxyXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXHJcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxyXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICdjbGljaycsXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAnT3JpZW50YXRpb24gc3RhdHVzIGdvaW5nIGludG8gcGxhY2VtZW50OicgK1xyXG4gICAgICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1c1xyXG4gICAgICApXHJcbiAgICAgIGhhbmRsZUNydWlzZXJTaGlwUGxhY2VtZW50KGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMsIGNvbnRyb2xsZXIpXHJcbiAgICB9LFxyXG4gICAgeyBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsIH1cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHBsYWNlU3VibWFyaW5lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIFN1Ym1hcmluZSdcclxuXHJcbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXHJcblxyXG4gIGNvbnN0IG9yaWVudGF0aW9uQnRuVmFsdWVzID0gY3JlYXRlT3JpZW50YXRpb25Ub2dnbGVCdG4oKVxyXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMF1cclxuICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZUJ0biA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzFdXHJcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gZmFsc2VcclxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnVmVydGljYWwnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxyXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJ1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxyXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICdjbGljaycsXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAnT3JpZW50YXRpb24gc3RhdHVzIGdvaW5nIGludG8gcGxhY2VtZW50OicgK1xyXG4gICAgICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1c1xyXG4gICAgICApXHJcbiAgICAgIGhhbmRsZVN1Ym1hcmluZVNoaXBQbGFjZW1lbnQoXHJcbiAgICAgICAgZSxcclxuICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzLFxyXG4gICAgICAgIGNvbnRyb2xsZXJcclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBwbGFjZURlc3Ryb3llciA9ICgpID0+IHtcclxuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxyXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBEZXN0cm95ZXInXHJcblxyXG4gIGNvbnN0IGh1bWFuQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyQm9hcmQnKVxyXG5cclxuICBjb25zdCBvcmllbnRhdGlvbkJ0blZhbHVlcyA9IGNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuKClcclxuICBsZXQgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzBdXHJcbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBvcmllbnRhdGlvbkJ0blZhbHVlc1sxXVxyXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPT09IHRydWUpIHtcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IGZhbHNlXHJcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcclxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXHJcbiAgaHVtYW5Cb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgJ2NsaWNrJyxcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICdPcmllbnRhdGlvbiBzdGF0dXMgZ29pbmcgaW50byBwbGFjZW1lbnQ6JyArXHJcbiAgICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzXHJcbiAgICAgIClcclxuICAgICAgaGFuZGxlRGVzdHJveWVyU2hpcFBsYWNlbWVudChcclxuICAgICAgICBlLFxyXG4gICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMsXHJcbiAgICAgICAgY29udHJvbGxlclxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gICAgeyBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsIH1cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlclBsYXllckJvYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXllckJvYXJkID0gZ2FtZS5nZXRIdW1hbkJvYXJkKClcclxuICBjb25zdCBwbGF5ZXJCb2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJCb2FyZCcpXHJcbiAgcGxheWVyQm9hcmREaXYuaW5uZXJIVE1MID0gJydcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJCb2FyZC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgY3VycmVudFJvdyA9IHBsYXllckJvYXJkW2ldXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRSb3cubGVuZ3RoOyBqKyspIHtcclxuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JvYXJkQ2VsbCcpXHJcbiAgICAgIGJ1dHRvbi5kYXRhc2V0LnJvdyA9IGlcclxuICAgICAgYnV0dG9uLmRhdGFzZXQuY29sdW1uID0galxyXG5cclxuICAgICAgcGxheWVyQm9hcmREaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVuZGVyQUlCb2FyZCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBhaUJvYXJkID0gZ2FtZS5nZXRBSUJvYXJkKClcclxuICBjb25zdCBhaUJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FJQm9hcmQnKVxyXG4gIGFpQm9hcmREaXYuaW5uZXJIVE1MID0gJydcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhaUJvYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBjdXJyZW50Um93ID0gYWlCb2FyZFtpXVxyXG5cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudFJvdy5sZW5ndGg7IGorKykge1xyXG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYm9hcmRDZWxsJylcclxuICAgICAgYnV0dG9uLmRhdGFzZXQucm93ID0gaVxyXG4gICAgICBidXR0b24uZGF0YXNldC5jb2x1bW4gPSBqXHJcbiAgICAgIGNvbnN0IHJvdyA9IGFpQm9hcmRbaV1cclxuXHJcbiAgICAgIGlmICh0eXBlb2Ygcm93W2pdID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzaGlwQ2VsbCcpXHJcbiAgICAgIH1cclxuICAgICAgYWlCb2FyZERpdi5hcHBlbmRDaGlsZChidXR0b24pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB1cGRhdGVIdW1hbkJvYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGh1bWFuQm9hcmQgPSBnYW1lLmdldEh1bWFuQm9hcmQoKVxyXG4gIGNvbnN0IG1pc3NlZFNob3RzID0gZ2FtZS5nZXRIdW1hbkJvYXJkT2JqLmdldE1pc3NlZFNob3RzKClcclxuICBjb25zdCBzdWNjZXNzZnVsU2hvdHMgPSBnYW1lLmdldEh1bWFuQm9hcmRPYmouZ2V0U3VjY2Vzc2Z1bFNob3RzKClcclxuICBjb25zdCBhbGxEb21Ob2RlcyA9IEFycmF5LmZyb20oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyQm9hcmQnKS5jaGlsZE5vZGVzXHJcbiAgKVxyXG5cclxuICBtaXNzZWRTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XHJcbiAgICBjb25zdCByb3cgPSBzaG90WzBdXHJcbiAgICBjb25zdCBjb2x1bW4gPSBzaG90WzFdXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEb21Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCB0YXJnZXROb2RlID0gYWxsRG9tTm9kZXNbaV0uZGF0YXNldFxyXG4gICAgICBpZiAoK3RhcmdldE5vZGUuY29sdW1uID09PSBjb2x1bW4gJiYgK3RhcmdldE5vZGUucm93ID09PSByb3cpIHtcclxuICAgICAgICBhbGxEb21Ob2Rlc1tpXS50ZXh0Q29udGVudCA9ICdYJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgc3VjY2Vzc2Z1bFNob3RzLmZvckVhY2goKHNob3QpID0+IHtcclxuICAgIGNvbnN0IHJvdyA9IHNob3RbMF1cclxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERvbU5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgK3RhcmdldE5vZGUuZGF0YXNldC5jb2x1bW4gPT09IGNvbHVtbiAmJlxyXG4gICAgICAgICt0YXJnZXROb2RlLmRhdGFzZXQucm93ID09PSByb3dcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGFyZ2V0Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwQ2VsbCcpXHJcbiAgICAgICAgdGFyZ2V0Tm9kZS5jbGFzc0xpc3QuYWRkKCdzaGlwSGl0JylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IHVwZGF0ZUFJQm9hcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWlCb2FyZCA9IGdhbWUuZ2V0QUlCb2FyZCgpXHJcbiAgY29uc3QgbWlzc2VkU2hvdHMgPSBnYW1lLmdldEFJQm9hcmRPYmouZ2V0TWlzc2VkU2hvdHMoKVxyXG4gIGNvbnN0IHN1Y2Nlc3NmdWxTaG90cyA9IGdhbWUuZ2V0QUlCb2FyZE9iai5nZXRTdWNjZXNzZnVsU2hvdHMoKVxyXG4gIGNvbnN0IGFsbERvbU5vZGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlCb2FyZCcpLmNoaWxkTm9kZXMpXHJcblxyXG4gIG1pc3NlZFNob3RzLmZvckVhY2goKHNob3QpID0+IHtcclxuICAgIGNvbnN0IHJvdyA9IHNob3RbMF1cclxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERvbU5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXS5kYXRhc2V0XHJcbiAgICAgIGlmICh0YXJnZXROb2RlLmNvbHVtbiA9PT0gY29sdW1uICYmIHRhcmdldE5vZGUucm93ID09PSByb3cpIHtcclxuICAgICAgICBhbGxEb21Ob2Rlc1tpXS50ZXh0Q29udGVudCA9ICdYJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgc3VjY2Vzc2Z1bFNob3RzLmZvckVhY2goKHNob3QpID0+IHtcclxuICAgIGNvbnN0IHJvdyA9IHNob3RbMF1cclxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERvbU5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGFyZ2V0Tm9kZS5kYXRhc2V0LmNvbHVtbiA9PT0gY29sdW1uICYmXHJcbiAgICAgICAgdGFyZ2V0Tm9kZS5kYXRhc2V0LnJvdyA9PT0gcm93XHJcbiAgICAgICkge1xyXG4gICAgICAgIHRhcmdldE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcENlbGwnKVxyXG4gICAgICAgIHRhcmdldE5vZGUuY2xhc3NMaXN0LmFkZCgnc2hpcEhpdCcpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVDYXJyaWVyU2hpcFBsYWNlbWVudCA9IChcclxuICBlLFxyXG4gIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXHJcbiAgY29udHJvbGxlclxyXG4pID0+IHtcclxuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XHJcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxyXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxyXG5cclxuICBjb25zdCBjYXJyaWVyUGxhY2VkID0gcGxhY2VDYXJyaWVyT25Cb2FyZChcclxuICAgIGNvb3JkaW5hdGUsXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXHJcbiAgKVxyXG5cclxuICBpZiAoY2FycmllclBsYWNlZCkge1xyXG4gICAgY29udHJvbGxlci5hYm9ydCgpXHJcbiAgICByZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuKClcclxuICAgIHBsYWNlQmF0dGxlU2hpcCgpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBwbGFjZUNhcnJpZXJTaGlwXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVCYXR0bGVTaGlwUGxhY2VtZW50ID0gKFxyXG4gIGUsXHJcbiAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICBjb250cm9sbGVyXHJcbikgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcclxuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXHJcbiAgY29uc3QgY29vcmRpbmF0ZSA9IFtzZWxlY3RlZFJvdywgc2VsZWN0ZWRDb2x1bW5dXHJcblxyXG4gIGNvbnN0IGJhdHRsZXNoaXBQbGFjZWQgPSBwbGFjZUJhdHRsZXNoaXBPbkJvYXJkKFxyXG4gICAgY29vcmRpbmF0ZSxcclxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cclxuICApXHJcblxyXG4gIGlmIChiYXR0bGVzaGlwUGxhY2VkKSB7XHJcbiAgICBjb250cm9sbGVyLmFib3J0KClcclxuICAgIHJlbW92ZVByZXZpb3VzT3JpZW50YXRpb25CdG4oKVxyXG4gICAgcGxhY2VDcnVpc2VyKClcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHBsYWNlQmF0dGxlU2hpcFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaGFuZGxlQ3J1aXNlclNoaXBQbGFjZW1lbnQgPSAoXHJcbiAgZSxcclxuICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxyXG4gIGNvbnRyb2xsZXJcclxuKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xyXG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cclxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cclxuXHJcbiAgY29uc3QgY3J1aXNlclBsYWNlZCA9IHBsYWNlQ3J1aXNlck9uQm9hcmQoXHJcbiAgICBjb29yZGluYXRlLFxyXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxyXG4gIClcclxuXHJcbiAgaWYgKGNydWlzZXJQbGFjZWQpIHtcclxuICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxyXG4gICAgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0bigpXHJcbiAgICBwbGFjZVN1Ym1hcmluZSgpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBwbGFjZUNydWlzZXJcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZVN1Ym1hcmluZVNoaXBQbGFjZW1lbnQgPSAoXHJcbiAgZSxcclxuICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxyXG4gIGNvbnRyb2xsZXJcclxuKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xyXG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cclxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cclxuXHJcbiAgY29uc3Qgc3VibWFyaW5lUGxhY2VkID0gcGxhY2VTdWJtYXJpbmVPbkJvYXJkKFxyXG4gICAgY29vcmRpbmF0ZSxcclxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cclxuICApXHJcblxyXG4gIGlmIChzdWJtYXJpbmVQbGFjZWQpIHtcclxuICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxyXG4gICAgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0bigpXHJcbiAgICBwbGFjZURlc3Ryb3llcigpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBwbGFjZVN1Ym1hcmluZVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaGFuZGxlRGVzdHJveWVyU2hpcFBsYWNlbWVudCA9IGFzeW5jIChcclxuICBlLFxyXG4gIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXHJcbiAgY29udHJvbGxlclxyXG4pID0+IHtcclxuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XHJcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxyXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxyXG4gIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcblxyXG4gIGNvbnN0IGRlc3Ryb3llclBsYWNlZCA9IHBsYWNlRGVzdHJveWVyT25Cb2FyZChcclxuICAgIGNvb3JkaW5hdGUsXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXHJcbiAgKVxyXG5cclxuICBpZiAoZGVzdHJveWVyUGxhY2VkKSB7XHJcbiAgICBjb250cm9sbGVyLmFib3J0KClcclxuICAgIHRvcEJhckNvbnRhaW5lclBhcmEudGV4dENvbnRlbnQgPSAnJ1xyXG4gICAgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0bigpXHJcbiAgICBhd2FpdCBkaXNwbGF5Q29udHJvbGxlcigpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBwbGFjZURlc3Ryb3llclxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcGxhY2VDYXJyaWVyT25Cb2FyZCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XHJcbiAgY29uc3Qgc2hpcFR5cGUgPSAnY2FycmllcidcclxuICBjb25zdCBjYXJyaWVyUGxhY2VkID0gZ2FtZS5wbGFjZUNhcnJpZXJTaGlwKFxyXG4gICAgY29vcmRpbmF0ZSxcclxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cclxuICApXHJcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcclxuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXHJcbiAgXVxyXG4gIGlmICghY2FycmllclBsYWNlZCkge1xyXG4gICAgcmV0dXJuIGNhcnJpZXJQbGFjZWRcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZ2V0SG9yaXpvbnRhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZ2V0VmVydGljYWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBjYXJyaWVyUGxhY2VkXHJcbn1cclxuXHJcbmNvbnN0IHBsYWNlQmF0dGxlc2hpcE9uQm9hcmQgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xyXG4gIGNvbnN0IHNoaXBUeXBlID0gJ2JhdHRsZXNoaXAnXHJcbiAgY29uc3QgYmF0dGxlc2hpcFBsYWNlZCA9IGdhbWUucGxhY2VCYXR0bGVTaGlwKFxyXG4gICAgY29vcmRpbmF0ZSxcclxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cclxuICApXHJcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcclxuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXHJcbiAgXVxyXG4gIGlmICghYmF0dGxlc2hpcFBsYWNlZCkge1xyXG4gICAgcmV0dXJuIGJhdHRsZXNoaXBQbGFjZWRcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZ2V0SG9yaXpvbnRhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZ2V0VmVydGljYWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBiYXR0bGVzaGlwUGxhY2VkXHJcbn1cclxuXHJcbmNvbnN0IHBsYWNlQ3J1aXNlck9uQm9hcmQgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xyXG4gIGNvbnN0IHNoaXBUeXBlID0gJ2NydWlzZXInXHJcbiAgY29uc3QgY3J1aXNlclBsYWNlZCA9IGdhbWUucGxhY2VDcnVpc2VyU2hpcChcclxuICAgIGNvb3JkaW5hdGUsXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXHJcbiAgKVxyXG4gIGNvbnN0IGJvYXJkRE9NQ2VsbHNBcnIgPSBbXHJcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxyXG4gIF1cclxuICBpZiAoIWNydWlzZXJQbGFjZWQpIHtcclxuICAgIHJldHVybiBjcnVpc2VyUGxhY2VkXHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGdldEhvcml6b250YWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXHJcbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGdldFZlcnRpY2FsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gY3J1aXNlclBsYWNlZFxyXG59XHJcblxyXG5jb25zdCBwbGFjZVN1Ym1hcmluZU9uQm9hcmQgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xyXG4gIGNvbnN0IHNoaXBUeXBlID0gJ3N1Ym1hcmluZSdcclxuICBjb25zdCBzdWJtYXJpbmVQbGFjZWQgPSBnYW1lLnBsYWNlU3VibWFyaW5lU2hpcChcclxuICAgIGNvb3JkaW5hdGUsXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXHJcbiAgKVxyXG4gIGNvbnN0IGJvYXJkRE9NQ2VsbHNBcnIgPSBbXHJcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxyXG4gIF1cclxuICBpZiAoIXN1Ym1hcmluZVBsYWNlZCkge1xyXG4gICAgcmV0dXJuIHN1Ym1hcmluZVBsYWNlZFxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxyXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBnZXRWZXJ0aWNhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHN1Ym1hcmluZVBsYWNlZFxyXG59XHJcblxyXG5jb25zdCBwbGFjZURlc3Ryb3llck9uQm9hcmQgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xyXG4gIGNvbnN0IHNoaXBUeXBlID0gJ2Rlc3Ryb3llcidcclxuICBjb25zdCBkZXN0cm95ZXJQbGFjZWQgPSBnYW1lLnBsYWNlRGVzdHJveWVyU2hpcChcclxuICAgIGNvb3JkaW5hdGUsXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXHJcbiAgKVxyXG4gIGNvbnN0IGJvYXJkRE9NQ2VsbHNBcnIgPSBbXHJcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxyXG4gIF1cclxuICBpZiAoIWRlc3Ryb3llclBsYWNlZCkge1xyXG4gICAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxyXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBnZXRWZXJ0aWNhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxyXG59XHJcblxyXG5jb25zdCBnZXRIb3Jpem9udGFsRE9NQ29vcmRzID0gKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKSA9PiB7XHJcbiAgY29uc3Qgc3RhcnRpbmdDb2x1bW4gPSBOdW1iZXIoY29vcmRpbmF0ZVsxXSlcclxuICBjb25zdCBzaGlwTGVuZ3RoID1cclxuICAgIHNoaXBUeXBlID09PSAnY2FycmllcidcclxuICAgICAgPyA1XHJcbiAgICAgIDogc2hpcFR5cGUgPT09ICdiYXR0bGVzaGlwJ1xyXG4gICAgICA/IDRcclxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2NydWlzZXInXHJcbiAgICAgID8gM1xyXG4gICAgICA6IHNoaXBUeXBlID09PSAnc3VibWFyaW5lJ1xyXG4gICAgICA/IDNcclxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2Rlc3Ryb3llcidcclxuICAgICAgPyAyXHJcbiAgICAgIDogbnVsbFxyXG5cclxuICBmb3IgKGxldCBpID0gc3RhcnRpbmdDb2x1bW47IGkgPCBzdGFydGluZ0NvbHVtbiArIHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qgcm93ID0gK2Nvb3JkaW5hdGVbMF1cclxuICAgIGNvbnN0IGNvbHVtbiA9IGlcclxuICAgIGNvbnN0IGRvbUNvb3JkaW5hdGUgPSBbcm93LCBjb2x1bW5dXHJcbiAgICBjb25zdCB0YXJnZXRET01CdG4gPSBmaW5kU2hpcERPTUJ0bihib2FyZERPTUNlbGxzQXJyLCBkb21Db29yZGluYXRlKVxyXG4gICAgdGFyZ2V0RE9NQnRuLmNsYXNzTGlzdC5hZGQoJ3NoaXBDZWxsJylcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldFZlcnRpY2FsRE9NQ29vcmRzID0gKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKSA9PiB7XHJcbiAgY29uc3Qgc3RhcnRpbmdSb3cgPSBOdW1iZXIoY29vcmRpbmF0ZVswXSlcclxuICBjb25zdCBzaGlwTGVuZ3RoID1cclxuICAgIHNoaXBUeXBlID09PSAnY2FycmllcidcclxuICAgICAgPyA1XHJcbiAgICAgIDogc2hpcFR5cGUgPT09ICdiYXR0bGVzaGlwJ1xyXG4gICAgICA/IDRcclxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2NydWlzZXInXHJcbiAgICAgID8gM1xyXG4gICAgICA6IHNoaXBUeXBlID09PSAnc3VibWFyaW5lJ1xyXG4gICAgICA/IDNcclxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2Rlc3Ryb3llcidcclxuICAgICAgPyAyXHJcbiAgICAgIDogbnVsbFxyXG5cclxuICBmb3IgKGxldCBpID0gc3RhcnRpbmdSb3c7IGkgPiBzdGFydGluZ1JvdyAtIHNoaXBMZW5ndGg7IGktLSkge1xyXG4gICAgY29uc3Qgcm93ID0gaVxyXG4gICAgY29uc3QgY29sdW1uID0gK2Nvb3JkaW5hdGVbMV1cclxuICAgIGNvbnN0IGRvbUNvb3JkaW5hdGUgPSBbcm93LCBjb2x1bW5dXHJcbiAgICBjb25zdCB0YXJnZXRET01CdG4gPSBmaW5kU2hpcERPTUJ0bihib2FyZERPTUNlbGxzQXJyLCBkb21Db29yZGluYXRlKVxyXG4gICAgdGFyZ2V0RE9NQnRuLmNsYXNzTGlzdC5hZGQoJ3NoaXBDZWxsJylcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGZpbmRTaGlwRE9NQnRuID0gKGJvYXJkRE9NQ2VsbHNBcnIsIGRvbUNvb3JkaW5hdGUpID0+IHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkRE9NQ2VsbHNBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGRvbUNlbGxSb3cgPSArYm9hcmRET01DZWxsc0FycltpXS5kYXRhc2V0LnJvd1xyXG4gICAgY29uc3QgZG9tQ2VsbENvbHVtbiA9ICtib2FyZERPTUNlbGxzQXJyW2ldLmRhdGFzZXQuY29sdW1uXHJcbiAgICBpZiAoZG9tQ2VsbFJvdyA9PT0gZG9tQ29vcmRpbmF0ZVswXSAmJiBkb21DZWxsQ29sdW1uID09PSBkb21Db29yZGluYXRlWzFdKSB7XHJcbiAgICAgIHJldHVybiBib2FyZERPTUNlbGxzQXJyW2ldXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnQgPSBhc3luYyAoZSkgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcclxuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXHJcbiAgY29uc3QgYWlCb2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSUJvYXJkJylcclxuXHJcbiAgaWYgKCFzZWxlY3RlZENvbHVtbiB8fCAhc2VsZWN0ZWRSb3cpIHtcclxuICAgIHJldHVybiBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnRcclxuICB9XHJcblxyXG4gIGNvbnN0IGFpQm9hcmQgPSBnYW1lLmdldEFJQm9hcmRPYmpcclxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cclxuICBjb25zdCBhbHJlYWR5QXR0YWNrZWQgPSBhaUJvYXJkLnByZXZlbnRTYW1lQXR0YWNrKGNvb3JkaW5hdGUpXHJcbiAgaWYgKGFscmVhZHlBdHRhY2tlZCkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBnYW1lLnBsYXlSb3VuZChjb29yZGluYXRlKVxyXG4gIGNvbnN0IGh1bWFuTW92ZVN1Y2Nlc3NmdWwgPSBnYW1lLmdldEFJQm9hcmRPYmouZ2V0TGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwoKVxyXG4gIGh1bWFuTW92ZVN1Y2Nlc3NmdWxcclxuICAgID8gZGlzcGxheVN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlKCdodW1hbicpXHJcbiAgICA6IGRpc3BsYXlVbnN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlKCdodW1hbicpXHJcblxyXG4gIGNvbnN0IGh1bWFuV2lucyA9IGdhbWUuY2hlY2tGb3JXaW4oKVxyXG5cclxuICB1cGRhdGVBSUJvYXJkKClcclxuICBhd2FpdCBkZWxheSg0MDAwKVxyXG4gIC8vIGNyZWF0ZSBoYW5kbGVXaW4oKSBmdW5jdGlvblxyXG4gIGhhbmRsZVdpbkNoZWNrKGh1bWFuV2lucywgYWlCb2FyZERpdilcclxuICBoYW5kbGVBSU1vdmUoYWlCb2FyZERpdilcclxufVxyXG5cclxuY29uc3QgaGFuZGxlQUlNb3ZlID0gYXN5bmMgKGFpQm9hcmREaXYpID0+IHtcclxuICBjb25zdCB0b3BCYXJDb250YWluZXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxyXG4gIGNvbnN0IGVuZW15QXR0YWNraW5nTXNnID0gJ0VuZW15IGlzIGF0dGFja2luZyB5b3VyIHNoaXBzISdcclxuICB0cmFuc2l0aW9uVGV4dENoYW5nZXMoZW5lbXlBdHRhY2tpbmdNc2csIHRvcEJhckNvbnRhaW5lclBhcmEpXHJcbiAgYXdhaXQgZGVsYXkoMzAwMClcclxuICBnYW1lLnBsYXlSb3VuZCgpXHJcbiAgY29uc3QgYWlNb3ZlU3VjY2Vzc2Z1bCA9IGdhbWUuZ2V0SHVtYW5Cb2FyZE9iai5nZXRMYXN0QUlNb3ZlU3VjY2Vzc2Z1bCgpXHJcbiAgYWlNb3ZlU3VjY2Vzc2Z1bFxyXG4gICAgPyBkaXNwbGF5U3VjY2Vzc2Z1bEF0dGFja01lc3NhZ2UoJ2NvbXB1dGVyJylcclxuICAgIDogZGlzcGxheVVuc3VjY2Vzc2Z1bEF0dGFja01lc3NhZ2UoJ2NvbXB1dGVyJylcclxuXHJcbiAgY29uc3QgYWlXaW5zID0gZ2FtZS5jaGVja0ZvcldpbigpXHJcblxyXG4gIHVwZGF0ZUh1bWFuQm9hcmQoKVxyXG4gIGF3YWl0IGRlbGF5KDI1MDApXHJcbiAgY29uc3QgYXR0YWNrVGhlRW5lbXlNc2cgPSAnQXR0YWNrIHRoZSBlbmVtaWVzIHNoaXBzLi4uJ1xyXG4gIHRyYW5zaXRpb25UZXh0Q2hhbmdlcyhhdHRhY2tUaGVFbmVteU1zZywgdG9wQmFyQ29udGFpbmVyUGFyYSlcclxuXHJcbiAgYXdhaXQgZGVsYXkoNDAwMClcclxuICBoYW5kbGVXaW5DaGVjayhhaVdpbnMsIGFpQm9hcmREaXYpXHJcbn1cclxuXHJcbmNvbnN0IGFubm91bmNlV2lubmVyID0gKHdpbm5lcikgPT4ge1xyXG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgY29uc3Qgd2lubmVyTmFtZSA9IHdpbm5lci5nZXROYW1lKClcclxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gYCR7d2lubmVyTmFtZX0gd2luJ3MhYFxyXG59XHJcblxyXG5jb25zdCBwbGF5QWdhaW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9wQmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lcicpXHJcbiAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICBwbGF5QWdhaW5CdG4udGV4dENvbnRlbnQgPSAnUGxheSBhZ2FpbidcclxuICB0b3BCYXJEaXYuYXBwZW5kQ2hpbGQocGxheUFnYWluQnRuKVxyXG4gIHBsYXlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0TmV3R2FtZSlcclxufVxyXG5cclxuY29uc3Qgc3RhcnROZXdHYW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvcEJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXInKVxyXG4gIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBidXR0b24nKVxyXG4gIHRvcEJhckRpdi5yZW1vdmVDaGlsZChwbGF5QWdhaW5CdG4pXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKS50ZXh0Q29udGVudCA9ICcnXHJcbiAgZGlzcGxheUNvbnRyb2xsZXIoKVxyXG59XHJcblxyXG4vLyBGb3IgZWFjaCBvZiB0aGUgcGxhY2Ugc2hpcCBmdW5jdGlvbnMsIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZSBwcmV2aW91c1xyXG4vLyBvcmllbnRhdGlvbiB0b2dnbGUgYnV0dG9uIHRvIHByZXZlbnQgdGhlIHNhbWUgbGlzdGVuZXIgZmlyaW5nIGZvciBlYWNoIG9mIHRoZVxyXG4vLyBwcmV2aW91cyBvcmllbnRhdGlvbiB0b2dnbGUgYnV0dG9uc1xyXG5jb25zdCByZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvcEJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXInKVxyXG4gIGNvbnN0IHByZXZpb3VzT3JpZW50YXRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JpZW50YXRpb25Ub2dnbGVCdG4nKVxyXG4gIHRvcEJhckRpdi5yZW1vdmVDaGlsZChwcmV2aW91c09yaWVudGF0aW9uQnRuKVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0biA9ICgpID0+IHtcclxuICBjb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyJylcclxuICBjb25zdCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxyXG4gIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5jbGFzc0xpc3QuYWRkKCdvcmllbnRhdGlvblRvZ2dsZUJ0bicpXHJcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcclxuICB0b3BCYXJEaXYuYXBwZW5kQ2hpbGQob3JpZW50YXRpb25Ub2dnbGVCdG4pXHJcblxyXG4gIHJldHVybiBbaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cywgb3JpZW50YXRpb25Ub2dnbGVCdG5dXHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlTdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSA9IChwbGF5ZXIpID0+IHtcclxuICBpZiAocGxheWVyID09PSAnaHVtYW4nKSB7XHJcbiAgICBjb25zdCB0b3BCYXJDb250YWluZXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxyXG4gICAgY29uc3QgYXR0YWNrQW5kSGl0TXNnID0gJ1lvdSBhdHRhY2tlZCB0aGUgZW5lbXkuLi4gYW5kIGhpdCB0aGVpciBzaGlwISdcclxuICAgIHNldFRpbWVvdXQodHJhbnNpdGlvblRleHRDaGFuZ2VzLCAxMCwgYXR0YWNrQW5kSGl0TXNnLCB0b3BCYXJDb250YWluZXJQYXJhKVxyXG4gIH0gZWxzZSBpZiAocGxheWVyID09PSAnY29tcHV0ZXInKSB7XHJcbiAgICBjb25zdCB0b3BCYXJDb250YWluZXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxyXG4gICAgY29uc3QgZW5lbXlIaXRNc2cgPSAnVGhlIGVuZW15IGxhdW5jaGVkIGFuIGF0dGFjay4uLiBhbmQgaGl0IHlvdXIgc2hpcCEnXHJcbiAgICBzZXRUaW1lb3V0KHRyYW5zaXRpb25UZXh0Q2hhbmdlcywgMTAsIGVuZW15SGl0TXNnLCB0b3BCYXJDb250YWluZXJQYXJhKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGlzcGxheVVuc3VjY2Vzc2Z1bEF0dGFja01lc3NhZ2UgPSAocGxheWVyKSA9PiB7XHJcbiAgaWYgKHBsYXllciA9PT0gJ2h1bWFuJykge1xyXG4gICAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICAgIGNvbnN0IHVuc3VjY2Vzc2Z1bEF0dGFja01zZyA9ICdZb3UgYXR0YWNrIG9uIHRoZSBlbmVteSB3YXMgdW5zdWNjZXNzZnVsJ1xyXG4gICAgc2V0VGltZW91dChcclxuICAgICAgdHJhbnNpdGlvblRleHRDaGFuZ2VzLFxyXG4gICAgICAxMCxcclxuICAgICAgdW5zdWNjZXNzZnVsQXR0YWNrTXNnLFxyXG4gICAgICB0b3BCYXJDb250YWluZXJQYXJhXHJcbiAgICApXHJcbiAgfSBlbHNlIGlmIChwbGF5ZXIgPT09ICdjb21wdXRlcicpIHtcclxuICAgIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgICBjb25zdCB1bnN1Y2Nlc3NmdWxFbmVteUF0dGFja01zZyA9ICdUaGUgZW5lbWllcyBhdHRhY2sgd2FzIHVuc3VjY2Vzc2Z1bCdcclxuICAgIHNldFRpbWVvdXQoXHJcbiAgICAgIHRyYW5zaXRpb25UZXh0Q2hhbmdlcyxcclxuICAgICAgMTAsXHJcbiAgICAgIHVuc3VjY2Vzc2Z1bEVuZW15QXR0YWNrTXNnLFxyXG4gICAgICB0b3BCYXJDb250YWluZXJQYXJhXHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVXaW5DaGVjayA9ICh3aW5DaGVjaywgYm9hcmREaXYpID0+IHtcclxuICBpZiAod2luQ2hlY2spIHtcclxuICAgIGJvYXJkRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0KVxyXG4gICAgZ2FtZS5yZXNldEdhbWVTdGF0ZSgpXHJcbiAgICBhbm5vdW5jZVdpbm5lcih3aW5DaGVjaylcclxuICAgIHBsYXlBZ2FpbigpXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB0cmFuc2l0aW9uVGV4dENoYW5nZXMgPSBhc3luYyAobmV3TWVzc2FnZSwgZG9tRWxlbWVudCkgPT4ge1xyXG4gIGRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJylcclxuICBhd2FpdCBkZWxheSg0MDApXHJcbiAgZG9tRWxlbWVudC50ZXh0Q29udGVudCA9IG5ld01lc3NhZ2VcclxuICBhd2FpdCBkZWxheSg0MDApXHJcbiAgZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKVxyXG59XHJcblxyXG4vLyBjb25zdCBoYW5kbGVQbGF5ZXJTZWxldGlvblxyXG5cclxuZXhwb3J0IHsgcmVuZGVyUGxheWVyQm9hcmQsIHJlbmRlckFJQm9hcmQsIGRpc3BsYXlDb250cm9sbGVyLCBwcmVHYW1lU2V0dXAgfVxyXG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuLi9mYWN0b3JpZXMvR2FtZWJvYXJkJ1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi9mYWN0b3JpZXMvUGxheWVyJ1xyXG5pbXBvcnQgeyByZXR1cm5SYW5kb21BSUJvYXJkIH0gZnJvbSAnLi4vaGVscGVycy9yb3RhdGVBSUJvYXJkcydcclxuXHJcbmNvbnN0IGdhbWVDb250cm9sbGVyID0gKCkgPT4ge1xyXG4gIC8vIENyZWF0ZSB0d28gZ2FtZSBib2FyZHNcclxuICBjb25zdCBodW1hbkJvYXJkID0gR2FtZWJvYXJkKClcclxuICBodW1hbkJvYXJkLmNyZWF0ZUdhbWVCb2FyZCgpXHJcblxyXG4gIGNvbnN0IGFpQm9hcmQgPSBHYW1lYm9hcmQoKVxyXG4gIGFpQm9hcmQuY3JlYXRlR2FtZUJvYXJkKClcclxuXHJcbiAgY29uc3QgcGxhY2VDYXJyaWVyU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XHJcbiAgICBsZXQgY2FycmllclBsYWNlZCA9IHRydWVcclxuXHJcbiAgICBjb25zdCBjYXJyaWVyQXJyID0gZGV0ZXJtaW5lQ2FycmllckFyckNvb3JkcyhcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICAgICAgY29vcmRpbmF0ZVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChjYXJyaWVyQXJyKVxyXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XHJcbiAgICAgIGNhcnJpZXJQbGFjZWQgPSBmYWxzZVxyXG4gICAgICByZXR1cm4gY2FycmllclBsYWNlZFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYXJyaWVyUGxhY2VkXHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXRlcm1pbmVDYXJyaWVyQXJyQ29vcmRzID0gKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sIGNvb3JkaW5hdGUpID0+IHtcclxuICAgIGNvbnN0IGNhcnJpZXJBcnIgPSBbXVxyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgY2FycmllckFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cclxuICAgICAgICBjYXJyaWVyQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgY2FycmllckFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbKCtjb29yZGluYXRlWzBdIC0gaSkudG9TdHJpbmcoKSwgY29vcmRpbmF0ZVsxXV1cclxuICAgICAgICBjYXJyaWVyQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjYXJyaWVyQXJyXHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGFjZUJhdHRsZVNoaXAgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xyXG4gICAgbGV0IGJhdHRsZXNoaXBQbGFjZWQgPSB0cnVlXHJcbiAgICBjb25zdCBiYXR0bGVzaGlwQXJyID0gZGV0ZXJtaW5lQmF0dGxlc2hpcEFyckNvb3JkcyhcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICAgICAgY29vcmRpbmF0ZVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChiYXR0bGVzaGlwQXJyKVxyXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XHJcbiAgICAgIGJhdHRsZXNoaXBQbGFjZWQgPSBmYWxzZVxyXG4gICAgICByZXR1cm4gYmF0dGxlc2hpcFBsYWNlZFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBiYXR0bGVzaGlwUGxhY2VkXHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXRlcm1pbmVCYXR0bGVzaGlwQXJyQ29vcmRzID0gKFxyXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICAgIGNvb3JkaW5hdGVcclxuICApID0+IHtcclxuICAgIGNvbnN0IGJhdHRsZXNoaXBBcnIgPSBbXVxyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgYmF0dGxlc2hpcEFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cclxuICAgICAgICBiYXR0bGVzaGlwQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgYmF0dGxlc2hpcEFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbKCtjb29yZGluYXRlWzBdIC0gaSkudG9TdHJpbmcoKSwgY29vcmRpbmF0ZVsxXV1cclxuICAgICAgICBiYXR0bGVzaGlwQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBiYXR0bGVzaGlwQXJyXHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGFjZUNydWlzZXJTaGlwID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcclxuICAgIGxldCBjcnVpc2VyUGxhY2VkID0gdHJ1ZVxyXG4gICAgY29uc3QgY3J1aXNlckFyciA9IGRldGVybWluZUNydWlzZXJBcnJDb29yZHMoXHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXHJcbiAgICAgIGNvb3JkaW5hdGVcclxuICAgIClcclxuXHJcbiAgICBjb25zdCBzaGlwUGxhY2VkID0gaHVtYW5Cb2FyZC5wbGFjZVNoaXAoY3J1aXNlckFycilcclxuICAgIGlmICghc2hpcFBsYWNlZCkge1xyXG4gICAgICBjcnVpc2VyUGxhY2VkID0gZmFsc2VcclxuICAgICAgcmV0dXJuIGNydWlzZXJQbGFjZWRcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3J1aXNlclBsYWNlZFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGV0ZXJtaW5lQ3J1aXNlckFyckNvb3JkcyA9IChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLCBjb29yZGluYXRlKSA9PiB7XHJcbiAgICBjb25zdCBjcnVpc2VyQXJyID0gW11cclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGNydWlzZXJBcnIucHVzaChjb29yZGluYXRlKVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkID0gW2Nvb3JkaW5hdGVbMF0sICgrY29vcmRpbmF0ZVsxXSArIGkpLnRvU3RyaW5nKCldXHJcbiAgICAgICAgY3J1aXNlckFyci5wdXNoKGNvb3JkKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGNydWlzZXJBcnIucHVzaChjb29yZGluYXRlKVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkID0gWygrY29vcmRpbmF0ZVswXSAtIGkpLnRvU3RyaW5nKCksIGNvb3JkaW5hdGVbMV1dXHJcbiAgICAgICAgY3J1aXNlckFyci5wdXNoKGNvb3JkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3J1aXNlckFyclxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxhY2VTdWJtYXJpbmVTaGlwID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcclxuICAgIGxldCBzdWJtYXJpbmVQbGFjZWQgPSB0cnVlXHJcbiAgICBjb25zdCBzdWJtYXJpbmVBcnIgPSBkZXRlcm1pbmVTdWJtYXJpbmVBcnJDb29yZHMoXHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXHJcbiAgICAgIGNvb3JkaW5hdGVcclxuICAgIClcclxuXHJcbiAgICBjb25zdCBzaGlwUGxhY2VkID0gaHVtYW5Cb2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lQXJyKVxyXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XHJcbiAgICAgIHN1Ym1hcmluZVBsYWNlZCA9IGZhbHNlXHJcbiAgICAgIHJldHVybiBzdWJtYXJpbmVQbGFjZWRcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3VibWFyaW5lUGxhY2VkXHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXRlcm1pbmVTdWJtYXJpbmVBcnJDb29yZHMgPSAoXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxyXG4gICAgY29vcmRpbmF0ZVxyXG4gICkgPT4ge1xyXG4gICAgY29uc3Qgc3VibWFyaW5lQXJyID0gW11cclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIHN1Ym1hcmluZUFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cclxuICAgICAgICBzdWJtYXJpbmVBcnIucHVzaChjb29yZClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBzdWJtYXJpbmVBcnIucHVzaChjb29yZGluYXRlKVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkID0gWygrY29vcmRpbmF0ZVswXSAtIGkpLnRvU3RyaW5nKCksIGNvb3JkaW5hdGVbMV1dXHJcbiAgICAgICAgc3VibWFyaW5lQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdWJtYXJpbmVBcnJcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYWNlRGVzdHJveWVyU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XHJcbiAgICBsZXQgZGVzdHJveWVyUGxhY2VkID0gdHJ1ZVxyXG4gICAgY29uc3QgZGVzdHJveWVyQXJyID0gZGV0ZXJtaW5lRGVzdHJveWVyQXJyQ29vcmRzKFxyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxyXG4gICAgICBjb29yZGluYXRlXHJcbiAgICApXHJcblxyXG4gICAgY29uc3Qgc2hpcFBsYWNlZCA9IGh1bWFuQm9hcmQucGxhY2VTaGlwKGRlc3Ryb3llckFycilcclxuICAgIGlmICghc2hpcFBsYWNlZCkge1xyXG4gICAgICBkZXN0cm95ZXJQbGFjZWQgPSBmYWxzZVxyXG4gICAgICByZXR1cm4gZGVzdHJveWVyUGxhY2VkXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGV0ZXJtaW5lRGVzdHJveWVyQXJyQ29vcmRzID0gKFxyXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICAgIGNvb3JkaW5hdGVcclxuICApID0+IHtcclxuICAgIGNvbnN0IGRlc3Ryb3llckFyciA9IFtdXHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBkZXN0cm95ZXJBcnIucHVzaChjb29yZGluYXRlKVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkID0gW2Nvb3JkaW5hdGVbMF0sICgrY29vcmRpbmF0ZVsxXSArIGkpLnRvU3RyaW5nKCldXHJcbiAgICAgICAgZGVzdHJveWVyQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZGVzdHJveWVyQXJyLnB1c2goY29vcmRpbmF0ZSlcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjb29yZCA9IFsoK2Nvb3JkaW5hdGVbMF0gLSBpKS50b1N0cmluZygpLCBjb29yZGluYXRlWzFdXVxyXG4gICAgICAgIGRlc3Ryb3llckFyci5wdXNoKGNvb3JkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVzdHJveWVyQXJyXHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGFjZUFJU2hpcHMgPSAoKSA9PiB7XHJcbiAgICBwbGFjZVNoaXBzKGFpQm9hcmQsIHJldHVyblJhbmRvbUFJQm9hcmQoKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYXllcnMgPSB7fVxyXG5cclxuICBjb25zdCBnZXRQbGF5ZXJzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHBsYXllcnNcclxuICB9XHJcblxyXG4gIGNvbnN0IGh1bWFuUGxheWVyID0gUGxheWVyKCdIdW1hbicsIGZhbHNlKVxyXG4gIGNvbnN0IGFpUGxheWVyID0gUGxheWVyKCdBSScsIHRydWUpXHJcbiAgcGxheWVycy5odW1hbiA9IGh1bWFuUGxheWVyXHJcbiAgcGxheWVycy5BSSA9IGFpUGxheWVyXHJcblxyXG4gIGxldCBjdXJyZW50UGxheWVyID0gcGxheWVycy5odW1hblxyXG5cclxuICBjb25zdCBnZXRDdXJyZW50UGxheWVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRQbGF5ZXJcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYXlSb3VuZCA9IChjb29yZGluYXRlKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuaHVtYW4uZ2V0TmFtZSgpKSB7XHJcbiAgICAgIGFpQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKVxyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5BSS5nZXROYW1lKCkpIHtcclxuICAgICAgY29uc3QgbmV4dE1vdmUgPSBjb21wdXRlcnNOZXh0TW92ZSgpXHJcbiAgICAgIGh1bWFuQm9hcmQucmVjZWl2ZUF0dGFjayhuZXh0TW92ZSlcclxuICAgICAgaHVtYW5Cb2FyZC5yZW1vdmVMYXN0QUlNb3ZlKG5leHRNb3ZlKVxyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFBsYXllcigpXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50UGxheWVyLmdldE5hbWUoKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbXB1dGVyc05leHRNb3ZlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXZhaWxhYmxlTW92ZXMgPSBodW1hbkJvYXJkLmdldEFJQXZhaWxhYmxlTW92ZXMoKVxyXG4gICAgY29uc3QgbGFzdEFJTW92ZVN1Y2Nlc3NmdWwgPSBodW1hbkJvYXJkLmdldExhc3RBSU1vdmVTdWNjZXNzZnVsKClcclxuICAgIGlmIChsYXN0QUlNb3ZlU3VjY2Vzc2Z1bCkge1xyXG4gICAgICBjb25zdCBhZGphY2VudFNsb3RzID0gY3VycmVudFBsYXllci5nZXRBZGphY2VudFNsb3RzKFxyXG4gICAgICAgIHRydWUsXHJcbiAgICAgICAgYXZhaWxhYmxlTW92ZXMsXHJcbiAgICAgICAgaHVtYW5Cb2FyZC5nZXRTdWNjZXNzZnVsU2hvdHMoKSxcclxuICAgICAgICBodW1hbkJvYXJkLmdldE1pc3NlZFNob3RzKClcclxuICAgICAgKVxyXG4gICAgICBodW1hbkJvYXJkLmFkZEFkamFjZW50U2xvdHNUb1F1ZXVlKGFkamFjZW50U2xvdHMpXHJcbiAgICAgIGNvbnN0IG5leHRNb3ZlID0gaHVtYW5Cb2FyZC5nZXRBZGphY2VudFF1ZXVlU2xvdCgpXHJcbiAgICAgIHJldHVybiBuZXh0TW92ZVxyXG4gICAgfSBlbHNlIGlmICghbGFzdEFJTW92ZVN1Y2Nlc3NmdWwpIHtcclxuICAgICAgY29uc3QgcmFuZG9tTW92ZSA9IGN1cnJlbnRQbGF5ZXIubWFrZVJhbmRvbU1vdmUodHJ1ZSwgYXZhaWxhYmxlTW92ZXMpXHJcbiAgICAgIHJldHVybiByYW5kb21Nb3ZlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBzd2l0Y2hQbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICBjdXJyZW50UGxheWVyID1cclxuICAgICAgY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuaHVtYW4uZ2V0TmFtZSgpXHJcbiAgICAgICAgPyAoY3VycmVudFBsYXllciA9IHBsYXllcnMuQUkpXHJcbiAgICAgICAgOiAoY3VycmVudFBsYXllciA9IHBsYXllcnMuaHVtYW4pXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja0ZvcldpbiA9ICgpID0+IHtcclxuICAgIGxldCB3aW5uZXJcclxuICAgIGlmIChcclxuICAgICAgY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuaHVtYW4uZ2V0TmFtZSgpICYmXHJcbiAgICAgIGFpQm9hcmQuYWxsU2hpcHNTdW5rKClcclxuICAgICkge1xyXG4gICAgICB3aW5uZXIgPSBjdXJyZW50UGxheWVyXHJcbiAgICAgIHJldHVybiB3aW5uZXJcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpID09PSBwbGF5ZXJzLkFJLmdldE5hbWUoKSAmJlxyXG4gICAgICBodW1hbkJvYXJkLmFsbFNoaXBzU3VuaygpXHJcbiAgICApIHtcclxuICAgICAgd2lubmVyID0gY3VycmVudFBsYXllclxyXG4gICAgICByZXR1cm4gd2lubmVyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2lubmVyXHJcbiAgfVxyXG5cclxuICBjb25zdCByZXNldEdhbWVTdGF0ZSA9ICh3aW5uZXIpID0+IHtcclxuICAgIGh1bWFuQm9hcmQuY2xlYXJHYW1lQm9hcmQoKVxyXG4gICAgYWlCb2FyZC5jbGVhckdhbWVCb2FyZCgpXHJcbiAgICBodW1hbkJvYXJkLmNyZWF0ZUdhbWVCb2FyZCgpXHJcbiAgICBhaUJvYXJkLmNyZWF0ZUdhbWVCb2FyZCgpXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0SHVtYW5Cb2FyZDogaHVtYW5Cb2FyZC5nZXRCb2FyZCxcclxuICAgIGdldEFJQm9hcmQ6IGFpQm9hcmQuZ2V0Qm9hcmQsXHJcbiAgICBnZXRBSUJvYXJkT2JqOiBhaUJvYXJkLFxyXG4gICAgZ2V0SHVtYW5Cb2FyZE9iajogaHVtYW5Cb2FyZCxcclxuICAgIHN3aXRjaFBsYXllcixcclxuICAgIHBsYXlSb3VuZCxcclxuICAgIGdldEN1cnJlbnRQbGF5ZXIsXHJcbiAgICByZXNldEdhbWVTdGF0ZSxcclxuICAgIGNoZWNrRm9yV2luLFxyXG4gICAgZ2V0UGxheWVycyxcclxuICAgIHBsYWNlQUlTaGlwcyxcclxuICAgIHBsYWNlQ2FycmllclNoaXAsXHJcbiAgICBwbGFjZUJhdHRsZVNoaXAsXHJcbiAgICBwbGFjZUNydWlzZXJTaGlwLFxyXG4gICAgcGxhY2VTdWJtYXJpbmVTaGlwLFxyXG4gICAgcGxhY2VEZXN0cm95ZXJTaGlwXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBnYW1lQ29udHJvbGxlciB9XHJcblxyXG5jb25zdCBwbGFjZVNoaXBzID0gKGJvYXJkLCBjb29yZGluYXRlc09iaikgPT4ge1xyXG4gIGNvbnN0IHNoaXBDb29yZGluYXRlc0FyciA9IE9iamVjdC52YWx1ZXMoY29vcmRpbmF0ZXNPYmopXHJcbiAgc2hpcENvb3JkaW5hdGVzQXJyLmZvckVhY2goKHNoaXBDb29yZGluYXRlcykgPT4ge1xyXG4gICAgYm9hcmQucGxhY2VTaGlwKHNoaXBDb29yZGluYXRlcylcclxuICB9KVxyXG59XHJcblxyXG4vKiBjb25zdCBwbGFjZUVhY2hIdW1hblNoaXAgPSAoY29vcmRpbmF0ZSkgPT4ge1xyXG4gIGh1bWFuQm9hcmQucGxhY2VTaGlwKGNvb3JkaW5hdGUpXHJcbn0gKi9cclxuIiwiaW1wb3J0IHsgYXJyYXlzQXJlRXF1YWwgfSBmcm9tICcuLi9oZWxwZXJzL2FycmF5c0FyZUVxdWFsJ1xyXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9TaGlwJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XHJcbiAgbGV0IGJvYXJkID0gW11cclxuICBjb25zdCBzaGlwT2JqZWN0cyA9IFtdXHJcbiAgY29uc3QgbWlzc2VkU2hvdHMgPSBbXVxyXG4gIGNvbnN0IGFpQXZhaWxhYmxlTW92ZXMgPSBbXVxyXG4gIGNvbnN0IHN1Y2Nlc3NmdWxTaG90cyA9IFtdXHJcbiAgbGV0IGFkamFjZW50U2xvdHNRdWV1ZSA9IFtdXHJcbiAgY29uc3Qgcm93cyA9IDlcclxuICBjb25zdCBjb2x1bW5zID0gOVxyXG4gIGxldCBsYXN0QUlNb3ZlU3VjY2Vzc2Z1bCA9IGZhbHNlXHJcbiAgbGV0IGxhc3RIdW1hbk1vdmVTdWNjZXNzZnVsID0gZmFsc2VcclxuXHJcbiAgY29uc3QgY3JlYXRlR2FtZUJvYXJkID0gKCkgPT4ge1xyXG4gICAgYm9hcmQgPSBbXVxyXG4gICAgZm9yIChsZXQgaSA9IHJvd3M7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGJvYXJkW2ldID0gW11cclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgYm9hcmRbaV0ucHVzaCh1bmRlZmluZWQpXHJcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IFtpLCBqXVxyXG4gICAgICAgIGFpQXZhaWxhYmxlTW92ZXMucHVzaChjb29yZGluYXRlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBjaGVja3MgaWYgY29vcmRpbmF0ZXMgZm9yIHNoaXAgaXMgb24gdGhlXHJcbiAgLy8gZ2FtZSBib2FyZFxyXG4gIGNvbnN0IHZhbGlkYXRlQ29vcmRpbmF0ZXMgPSAoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgIGxldCB2YWxpZENvb3JkaW5hdGVzID0gdHJ1ZVxyXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgICBjb25zdCByb3cgPSBjb29yZGluYXRlWzBdXHJcbiAgICAgIGNvbnN0IGNvbHVtbiA9IGNvb3JkaW5hdGVbMV1cclxuICAgICAgaWYgKHJvdyA+IDkgfHwgcm93IDwgMCkge1xyXG4gICAgICAgIHZhbGlkQ29vcmRpbmF0ZXMgPSBmYWxzZVxyXG4gICAgICAgIHJldHVybiB2YWxpZENvb3JkaW5hdGVzXHJcbiAgICAgIH0gZWxzZSBpZiAoY29sdW1uID4gOSB8fCBjb2x1bW4gPCAwKSB7XHJcbiAgICAgICAgdmFsaWRDb29yZGluYXRlcyA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkQ29vcmRpbmF0ZXNcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gdmFsaWRDb29yZGluYXRlc1xyXG4gIH1cclxuXHJcbiAgLy8gY2hlY2tzIGlmIHNoaXAgY29vcmRpbmF0ZXMgb3ZlcmxhcCB3aXRoIGFscmVhZHlcclxuICAvLyBwbGFjZWQgc2hpcCBjb29yZGluYXRlcyBmb3IgdGhlIHNhbWUgc2hpcFxyXG4gIGNvbnN0IGNoZWNrU2VsZk92ZXJsYXAgPSAoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgIGxldCBjb29yZGluYXRlc092ZXJsYXAgPSBmYWxzZVxyXG4gICAgbGV0IHByZXZDb29yZGluYXRlXHJcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgaWYgKGFycmF5c0FyZUVxdWFsKHByZXZDb29yZGluYXRlLCBjb29yZGluYXRlKSkge1xyXG4gICAgICAgICAgY29vcmRpbmF0ZXNPdmVybGFwID0gdHJ1ZVxyXG4gICAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzT3ZlcmxhcFxyXG4gICAgICAgIH1cclxuICAgICAgICBwcmV2Q29vcmRpbmF0ZSA9IGNvb3JkaW5hdGVcclxuICAgICAgfVxyXG4gICAgICBwcmV2Q29vcmRpbmF0ZSA9IGNvb3JkaW5hdGVcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzT3ZlcmxhcFxyXG4gIH1cclxuXHJcbiAgLy8gU2hvdWxkIHByZXZlbnQgYSBzaGlwIGZyb20gYmVpbmdcclxuICAvLyBwbGFjZWQgb24gdG9wIG9mIGFub3RoZXIgc2hpcFxyXG4gIGNvbnN0IGNoZWNrT3ZlcmxhcFdpdGhPdGhlclNoaXBzID0gKGNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICBsZXQgc2hpcHNPdmVybGFwID0gZmFsc2VcclxuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcclxuICAgICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZVswXVxyXG4gICAgICBjb25zdCBjb2x1bW4gPSBjb29yZGluYXRlWzFdXHJcbiAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGJvYXJkW3Jvd11bY29sdW1uXVxyXG4gICAgICBpZiAodHlwZW9mIGJvYXJkQ2VsbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBzaGlwc092ZXJsYXAgPSB0cnVlXHJcbiAgICAgICAgcmV0dXJuIHNoaXBzT3ZlcmxhcFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBzaGlwc092ZXJsYXBcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChjb29yZGluYXRlcykgPT4ge1xyXG4gICAgbGV0IHNoaXBQbGFjZWQgPSB0cnVlXHJcblxyXG4gICAgY29uc3QgbGVnYWxDb29yZGluYXRlcyA9IHZhbGlkYXRlQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpXHJcbiAgICBpZiAoIWxlZ2FsQ29vcmRpbmF0ZXMpIHtcclxuICAgICAgc2hpcFBsYWNlZCA9IGZhbHNlXHJcbiAgICAgIHJldHVybiBzaGlwUGxhY2VkXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3ZlcmxhcHBpbmdDb29yZGluYXRlcyA9IGNoZWNrU2VsZk92ZXJsYXAoY29vcmRpbmF0ZXMpXHJcbiAgICBpZiAob3ZlcmxhcHBpbmdDb29yZGluYXRlcykge1xyXG4gICAgICBzaGlwUGxhY2VkID0gZmFsc2VcclxuICAgICAgcmV0dXJuIHNoaXBQbGFjZWRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaGlwT3ZlcmxhcHBpbmcgPSBjaGVja092ZXJsYXBXaXRoT3RoZXJTaGlwcyhjb29yZGluYXRlcylcclxuICAgIGlmIChzaGlwT3ZlcmxhcHBpbmcpIHtcclxuICAgICAgc2hpcFBsYWNlZCA9IGZhbHNlXHJcbiAgICAgIHJldHVybiBzaGlwUGxhY2VkXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IGNvb3JkaW5hdGVzLmxlbmd0aFxyXG4gICAgY29uc3Qgc2hpcE9iamVjdCA9IFNoaXAoc2hpcExlbmd0aCwgMCwgZmFsc2UpXHJcbiAgICBzaGlwT2JqZWN0cy5wdXNoKHNoaXBPYmplY3QpXHJcblxyXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgICBjb25zdCByb3cgPSBjb29yZGluYXRlWzBdXHJcbiAgICAgIGNvbnN0IGNvbHVtbiA9IGNvb3JkaW5hdGVbMV1cclxuICAgICAgYm9hcmRbcm93XVtjb2x1bW5dID0gc2hpcE9iamVjdFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gc2hpcFBsYWNlZFxyXG4gIH1cclxuXHJcbiAgLy8gcHJldmVudHMgaHVtYW4gcGxheWVyIGZyb20gYXR0YWNraW5nIHByZXZpb3VzbHlcclxuICAvLyBhdHRhY2tlZCBjb29yZGluYXRlXHJcbiAgY29uc3QgcHJldmVudFNhbWVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgbGV0IGFscmVhZHlBdHRhY2tlZCA9IGZhbHNlXHJcbiAgICBzdWNjZXNzZnVsU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xyXG4gICAgICBpZiAoYXJyYXlzQXJlRXF1YWwoY29vcmRpbmF0ZSwgc2hvdCkpIHtcclxuICAgICAgICBhbHJlYWR5QXR0YWNrZWQgPSB0cnVlXHJcbiAgICAgICAgcmV0dXJuIHByZXZlbnRTYW1lQXR0YWNrXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgbWlzc2VkU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xyXG4gICAgICBpZiAoYXJyYXlzQXJlRXF1YWwoY29vcmRpbmF0ZSwgc2hvdCkpIHtcclxuICAgICAgICBhbHJlYWR5QXR0YWNrZWQgPSB0cnVlXHJcbiAgICAgICAgcmV0dXJuIHByZXZlbnRTYW1lQXR0YWNrXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gYWxyZWFkeUF0dGFja2VkXHJcbiAgfVxyXG5cclxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICBjb25zdCByb3cgPSBjb29yZGluYXRlc1swXVxyXG4gICAgY29uc3QgY29sdW1uID0gY29vcmRpbmF0ZXNbMV1cclxuICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGJvYXJkW3Jvd11bY29sdW1uXVxyXG4gICAgY29uc3Qgc2hpcE9iaiA9IGJvYXJkQ2VsbFxyXG5cclxuICAgIC8vIE5lZWQgdG8gY2hlY2sgaWYgbmV3IGNvb3JkaW5hdGUgaXMgYWxyZWFkeVxyXG4gICAgLy8gaW5zaWRlIHN1Y2Nlc3NmdWxTaG90cyBvciBtaXNzZWRTaG90c1xyXG4gICAgY29uc3QgYWxyZWFkeUF0dGFja2VkID0gcHJldmVudFNhbWVBdHRhY2soY29vcmRpbmF0ZXMpXHJcbiAgICBpZiAoYWxyZWFkeUF0dGFja2VkKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgYm9hcmRDZWxsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBzaGlwT2JqLmhpdCgpXHJcbiAgICAgIGxhc3RBSU1vdmVTdWNjZXNzZnVsID0gdHJ1ZVxyXG4gICAgICBsYXN0SHVtYW5Nb3ZlU3VjY2Vzc2Z1bCA9IHRydWVcclxuICAgICAgc3VjY2Vzc2Z1bFNob3RzLnB1c2goY29vcmRpbmF0ZXMpXHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2FyZENlbGwgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgIGxhc3RBSU1vdmVTdWNjZXNzZnVsID0gZmFsc2VcclxuICAgICAgbGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwgPSBmYWxzZVxyXG4gICAgICBtaXNzZWRTaG90cy5wdXNoKGNvb3JkaW5hdGVzKVxyXG4gICAgICByZW1vdmVBZGphY2VudFNsb3QoY29vcmRpbmF0ZXMpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBJZiB0aGUgY29tcHV0ZXIgcmFuZG9tbHkgZ3Vlc3NlcyBhIHNwb3QgdGhhdCBpcyBhbHJlYWR5IGluIHRoZSBhZGphY2VuY3lcclxuICAvLyBzbG90IHF1ZXVlLCB3ZSBuZWVkIHRvIHJlbW92ZSBpdCAoZnJvbSB0aGUgYWRqYWNlbmN5IHF1ZXVlKSBzb1xyXG4gIC8vIHRoZSBjb21wdXRlciBkb2VzIG5vdCBhdHRlbXB0IHRvXHJcbiAgLy8gdXNlIHRoZSBhbHJlYWR5IGd1ZXNzZWQgc3BvdCB3aGVuIHB1bGxpbmcgZnJvbSB0aGUgYWRqYWNlbmN5XHJcbiAgLy8gcXVldWUgZm9yIGl0J3MgbmV4dCBtb3ZlXHJcbiAgY29uc3QgcmVtb3ZlQWRqYWNlbnRTbG90ID0gKGNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXRDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzXHJcbiAgICBjb25zdCBhZGphY2VudFF1ZXVlID0gbmV3IFNldCgpXHJcbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2YgYWRqYWNlbnRTbG90c1F1ZXVlKSB7XHJcbiAgICAgIGFkamFjZW50UXVldWUuYWRkKHNsb3QudG9TdHJpbmcoKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBmaWx0ZXIgdGhlIGFkamFjZW5jeSBzbG90IHF1ZXVlIGRvd24gdG8gc2xvdHMgdGhhdCBoYXZlIE5PVFxyXG4gICAgLy8gYWxyZWFkeSBiZWVuIGd1ZXNlZC5cclxuICAgIGFkamFjZW50U2xvdHNRdWV1ZSA9IGFkamFjZW50U2xvdHNRdWV1ZS5maWx0ZXIoXHJcbiAgICAgIChzbG90KSA9PiAhYXJyYXlzQXJlRXF1YWwoc2xvdCwgdGFyZ2V0Q29vcmRpbmF0ZXMpXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XHJcbiAgICBsZXQgZXZlcnlTaGlwU2FuayA9IHRydWVcclxuICAgIHNoaXBPYmplY3RzLmZvckVhY2goKHNoaXBPYmopID0+IHtcclxuICAgICAgaWYgKCFzaGlwT2JqLmhhc0JlZW5TdW5rKCkpIHtcclxuICAgICAgICBldmVyeVNoaXBTYW5rID0gZmFsc2VcclxuICAgICAgICByZXR1cm4gZXZlcnlTaGlwU2Fua1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGV2ZXJ5U2hpcFNhbmtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZUxhc3RBSU1vdmUgPSAocmFuZG9tTW92ZSkgPT4ge1xyXG4gICAgYWlBdmFpbGFibGVNb3Zlcy5mb3JFYWNoKChtb3ZlLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoYXJyYXlzQXJlRXF1YWwobW92ZSwgcmFuZG9tTW92ZSkpIHtcclxuICAgICAgICBhaUF2YWlsYWJsZU1vdmVzLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZEFkamFjZW50U2xvdHNUb1F1ZXVlID0gKGFkamFjZW50U2xvdHMpID0+IHtcclxuICAgIGFkamFjZW50U2xvdHMuZm9yRWFjaCgoc2xvdCkgPT4ge1xyXG4gICAgICBhZGphY2VudFNsb3RzUXVldWUucHVzaChzbG90KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsZWFyR2FtZUJvYXJkID0gKCkgPT4ge1xyXG4gICAgc2hpcE9iamVjdHMubGVuZ3RoID0gMFxyXG4gICAgbWlzc2VkU2hvdHMubGVuZ3RoID0gMFxyXG4gICAgYWlBdmFpbGFibGVNb3Zlcy5sZW5ndGggPSAwXHJcbiAgICBzdWNjZXNzZnVsU2hvdHMubGVuZ3RoID0gMFxyXG4gICAgYWRqYWNlbnRTbG90c1F1ZXVlLmxlbmd0aCA9IDBcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGJvYXJkXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRNaXNzZWRTaG90cyA9ICgpID0+IHtcclxuICAgIHJldHVybiBtaXNzZWRTaG90c1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0U3VjY2Vzc2Z1bFNob3RzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHN1Y2Nlc3NmdWxTaG90c1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0U2hpcE9iamVjdHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc2hpcE9iamVjdHNcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEFJQXZhaWxhYmxlTW92ZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYWlBdmFpbGFibGVNb3Zlc1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0TGFzdEFJTW92ZVN1Y2Nlc3NmdWwgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbGFzdEFJTW92ZVN1Y2Nlc3NmdWxcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldExhc3RIdW1hbk1vdmVTdWNjZXNzZnVsID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGxhc3RIdW1hbk1vdmVTdWNjZXNzZnVsXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRBZGphY2VudFNsb3RzUXVldWUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYWRqYWNlbnRTbG90c1F1ZXVlXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRBZGphY2VudFF1ZXVlU2xvdCA9ICgpID0+IHtcclxuICAgIHJldHVybiBhZGphY2VudFNsb3RzUXVldWUucG9wKClcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldExhc3RTdWNjZXNzZnVsTW92ZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBzdWNjZXNzZnVsU2hvdHMuYXQoLTEpXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY3JlYXRlR2FtZUJvYXJkLFxyXG4gICAgZ2V0Qm9hcmQsXHJcbiAgICBwbGFjZVNoaXAsXHJcbiAgICByZWNlaXZlQXR0YWNrLFxyXG4gICAgY2xlYXJHYW1lQm9hcmQsXHJcbiAgICBnZXRNaXNzZWRTaG90cyxcclxuICAgIGdldFN1Y2Nlc3NmdWxTaG90cyxcclxuICAgIGFsbFNoaXBzU3VuayxcclxuICAgIGdldEFJQXZhaWxhYmxlTW92ZXMsXHJcbiAgICB2YWxpZGF0ZUNvb3JkaW5hdGVzLFxyXG4gICAgcHJldmVudFNhbWVBdHRhY2ssXHJcbiAgICBjaGVja1NlbGZPdmVybGFwLFxyXG4gICAgZ2V0U2hpcE9iamVjdHMsXHJcbiAgICByZW1vdmVMYXN0QUlNb3ZlLFxyXG4gICAgY2hlY2tPdmVybGFwV2l0aE90aGVyU2hpcHMsXHJcbiAgICBnZXRMYXN0QUlNb3ZlU3VjY2Vzc2Z1bCxcclxuICAgIGdldExhc3RIdW1hbk1vdmVTdWNjZXNzZnVsLFxyXG4gICAgZ2V0QWRqYWNlbnRTbG90c1F1ZXVlLFxyXG4gICAgYWRkQWRqYWNlbnRTbG90c1RvUXVldWUsXHJcbiAgICBnZXRBZGphY2VudFF1ZXVlU2xvdCxcclxuICAgIHJlbW92ZUFkamFjZW50U2xvdCxcclxuICAgIGdldExhc3RTdWNjZXNzZnVsTW92ZVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBhcnJheXNBcmVFcXVhbCB9IGZyb20gJy4uL2hlbHBlcnMvYXJyYXlzQXJlRXF1YWwnXHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVyID0gKG5hbWUsIGlzQUkpID0+IHtcclxuICAvLyBVc2VkIHRvIG1ha2UgQUkgc2VsZWN0IHJhbmRvbSwgbGVnYWwgY29vcmRpbmF0ZVxyXG4gIC8vIG9uIHBsYXllcnMgZ2FtZSBib2FyZFxyXG4gIGNvbnN0IG1ha2VSYW5kb21Nb3ZlID0gKGlzQUksIGF2YWlsYWJsZU1vdmVzKSA9PiB7XHJcbiAgICBpZiAoIWlzQUkgfHwgYXZhaWxhYmxlTW92ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhdmFpbGFibGVNb3Zlc0xlbmd0aCA9IGF2YWlsYWJsZU1vdmVzLmxlbmd0aFxyXG4gICAgY29uc3QgcmFuZG9tQXJySW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVNb3Zlc0xlbmd0aClcclxuICAgIGNvbnN0IHJhbmRvbUNvb3JkaW5hdGUgPSBhdmFpbGFibGVNb3Zlc1tyYW5kb21BcnJJbmRleF1cclxuXHJcbiAgICByZXR1cm4gcmFuZG9tQ29vcmRpbmF0ZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0QWRqYWNlbnRTbG90cyA9IChcclxuICAgIGlzQUksXHJcbiAgICBhdmFpbGFibGVNb3ZlcyxcclxuICAgIHN1Y2Nlc3NmdWxTaG90cyxcclxuICAgIG1pc3NlZFNob3RzXHJcbiAgKSA9PiB7XHJcbiAgICBpZiAoIWlzQUkgfHwgYXZhaWxhYmxlTW92ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsYXN0U3VjY2Vzc2Z1bE1vdmUgPSBzdWNjZXNzZnVsU2hvdHMuYXQoLTEpXHJcbiAgICBjb25zdCBhZGphY2VudFNsb3RzID0gcmV0cmlldmVBZGphY2VudFNsb3RzKGxhc3RTdWNjZXNzZnVsTW92ZSlcclxuICAgIGNvbnN0IGxlZ2FsQWRqYWNlbnRTbG90cyA9IHJlbW92ZUlsbGVnYWxBZGphY2VudFNsb3RzKGFkamFjZW50U2xvdHMpXHJcbiAgICAvKiBjb25zdCBhdmFpbGFibGVBZGphY2VudFNsb3RzID0gcHJldmVudFByZXZpb3VzU2hvdFRvUXVldWUoXHJcbiAgICAgIGF2YWlsYWJsZU1vdmVzLFxyXG4gICAgICBsZWdhbEFkamFjZW50U2xvdHMsXHJcbiAgICAgIHN1Y2Nlc3NmdWxTaG90cyxcclxuICAgICAgbWlzc2VkU2hvdHNcclxuICAgICkgKi9cclxuICAgIHJldHVybiBsZWdhbEFkamFjZW50U2xvdHNcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENlbGxBYm92ZSA9IChsYXN0U3VjY2Vzc2Z1bE1vdmUpID0+IHtcclxuICAgIC8vIHRoZSByb3cgbmVlZHMgdG8gY2hhbmdlIGJ5IG9uZVxyXG4gICAgY29uc3QgbmV3QXJyID0gW11cclxuICAgIGNvbnN0IG5ld1JvdyA9IGxhc3RTdWNjZXNzZnVsTW92ZVswXSAtIDFcclxuICAgIGlmIChuZXdSb3cgPiA5IHx8IG5ld1JvdyA8IDApIHtcclxuICAgICAgcmV0dXJuICdpbGxlZ2FsJ1xyXG4gICAgfVxyXG4gICAgbmV3QXJyWzBdID0gbmV3Um93XHJcbiAgICBuZXdBcnJbMV0gPSBsYXN0U3VjY2Vzc2Z1bE1vdmVbMV1cclxuICAgIHJldHVybiBuZXdBcnJcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENlbGxCZWxvdyA9IChsYXN0U3VjY2Vzc2Z1bE1vdmUpID0+IHtcclxuICAgIC8vIHRoZSByb3cgbmVlZHMgdG8gY2hhbmdlIGJ5IG9uZVxyXG4gICAgY29uc3QgYXJyID0gbGFzdFN1Y2Nlc3NmdWxNb3ZlXHJcbiAgICBjb25zdCBuZXdBcnIgPSBbXVxyXG4gICAgY29uc3QgbmV3Um93ID0gYXJyWzBdICsgMVxyXG4gICAgaWYgKG5ld1JvdyA+IDkgfHwgbmV3Um93IDwgMCkge1xyXG4gICAgICByZXR1cm4gJ2lsbGVnYWwnXHJcbiAgICB9XHJcbiAgICBuZXdBcnJbMF0gPSBuZXdSb3dcclxuICAgIG5ld0FyclsxXSA9IGxhc3RTdWNjZXNzZnVsTW92ZVsxXVxyXG4gICAgcmV0dXJuIG5ld0FyclxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Q2VsbFRvUmlnaHQgPSAobGFzdFN1Y2Nlc3NmdWxNb3ZlKSA9PiB7XHJcbiAgICAvLyB0aGUgcm93IG5lZWRzIHRvIGNoYW5nZSBieSBvbmVcclxuICAgIGNvbnN0IG5ld0FyciA9IFtdXHJcbiAgICBjb25zdCBuZXdDb2x1bW4gPSBsYXN0U3VjY2Vzc2Z1bE1vdmVbMV0gKyAxXHJcbiAgICBpZiAobmV3Q29sdW1uID4gOSB8fCBuZXdDb2x1bW4gPCAwKSB7XHJcbiAgICAgIHJldHVybiAnaWxsZWdhbCdcclxuICAgIH1cclxuICAgIG5ld0FyclswXSA9IGxhc3RTdWNjZXNzZnVsTW92ZVswXVxyXG4gICAgbmV3QXJyWzFdID0gbmV3Q29sdW1uXHJcbiAgICByZXR1cm4gbmV3QXJyXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRDZWxsVG9MZWZ0ID0gKGxhc3RTdWNjZXNzZnVsTW92ZSkgPT4ge1xyXG4gICAgLy8gdGhlIHJvdyBuZWVkcyB0byBjaGFuZ2UgYnkgb25lXHJcbiAgICBjb25zdCBhcnIgPSBsYXN0U3VjY2Vzc2Z1bE1vdmVcclxuICAgIGNvbnN0IG5ld0FyciA9IFtdXHJcbiAgICBjb25zdCBuZXdDb2x1bW4gPSBhcnJbMV0gLSAxXHJcbiAgICBpZiAobmV3Q29sdW1uID4gOSB8fCBuZXdDb2x1bW4gPCAwKSB7XHJcbiAgICAgIHJldHVybiAnaWxsZWdhbCdcclxuICAgIH1cclxuICAgIG5ld0FyclswXSA9IGxhc3RTdWNjZXNzZnVsTW92ZVswXVxyXG4gICAgbmV3QXJyWzFdID0gbmV3Q29sdW1uXHJcbiAgICByZXR1cm4gbmV3QXJyXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5hbWVcclxuICB9XHJcblxyXG4gIGNvbnN0IHJldHJpZXZlQWRqYWNlbnRTbG90cyA9IChsYXN0U3VjY2Vzc2Z1bE1vdmUpID0+IHtcclxuICAgIGNvbnN0IGxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlID0gbGFzdFN1Y2Nlc3NmdWxNb3ZlXHJcbiAgICBjb25zdCBhZGphY2VudFNsb3RzID0gW11cclxuICAgIGFkamFjZW50U2xvdHMucHVzaChnZXRDZWxsQWJvdmUobGFzdFN1Y2Nlc3NmdWxNb3ZlVmFsdWUpKVxyXG4gICAgYWRqYWNlbnRTbG90cy5wdXNoKGdldENlbGxCZWxvdyhsYXN0U3VjY2Vzc2Z1bE1vdmVWYWx1ZSkpXHJcbiAgICBhZGphY2VudFNsb3RzLnB1c2goZ2V0Q2VsbFRvUmlnaHQobGFzdFN1Y2Nlc3NmdWxNb3ZlVmFsdWUpKVxyXG4gICAgYWRqYWNlbnRTbG90cy5wdXNoKGdldENlbGxUb0xlZnQobGFzdFN1Y2Nlc3NmdWxNb3ZlVmFsdWUpKVxyXG4gICAgcmV0dXJuIGFkamFjZW50U2xvdHNcclxuICB9XHJcblxyXG4gIC8vIHByZXZlbnRzIGFkZGluZyBhZGphY2VudCBzbG90cyB0aGF0IGFyZSBub3Qgb24gdGhlIGJvYXJkXHJcbiAgY29uc3QgcmVtb3ZlSWxsZWdhbEFkamFjZW50U2xvdHMgPSAoYWRqYWNlbnRTbG90cykgPT4ge1xyXG4gICAgY29uc3QgYWRqYWNlbnRTbG90c0FyciA9IGFkamFjZW50U2xvdHNcclxuICAgIGFkamFjZW50U2xvdHNBcnIuZm9yRWFjaCgoc2xvdCwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKHNsb3QgPT09ICdpbGxlZ2FsJykge1xyXG4gICAgICAgIGFkamFjZW50U2xvdHNBcnIuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGFkamFjZW50U2xvdHNBcnJcclxuICB9XHJcblxyXG4gIC8vIGlmIHRoZSBjb21wdXRlciBoYXMgYWxyZWFkeSAocmFuZG9tbHkpIGd1ZXNzZWQgYSBzcG90IG9uIHRoZSBib2FyZCwgcHJldmVudFxyXG4gIC8vIGFkZGluZyB0aGUgc3BvdCB0byB0aGUgYWRqYWNlbmN5IGxpc3RcclxuICBjb25zdCBwcmV2ZW50UHJldmlvdXNTaG90VG9RdWV1ZSA9IChcclxuICAgIGF2YWlsYWJsZU1vdmVzLFxyXG4gICAgYWRqYWNlbnRTbG90cyxcclxuICAgIHN1Y2Nlc3NmdWxTaG90cyxcclxuICAgIG1pc3NlZFNob3RzXHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCBzbG90cyA9IGFkamFjZW50U2xvdHNcclxuICAgIGNvbnN0IGFsbFByZXZpb3VzQXR0YWNrcyA9IHN1Y2Nlc3NmdWxTaG90cy5jb25jYXQobWlzc2VkU2hvdHMpXHJcblxyXG4gICAgY29uc3QgcHJldmlvdXNBdHRhY2tzID0gbmV3IFNldCgpXHJcblxyXG4gICAgZm9yIChjb25zdCBzaG90IG9mIGFsbFByZXZpb3VzQXR0YWNrcykge1xyXG4gICAgICBwcmV2aW91c0F0dGFja3MuYWRkKHNob3QudG9TdHJpbmcoKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBHbyB0aHJvdWdoIGVhY2ggYWRqYWNlbmN5IHNsb3QsIGFuZCBkZXRlcm1pbmUgaWYgdGhlIHNsb3QgaXMgaW4gdGhlXHJcbiAgICAvLyBwcmV2aW91c0F0dGFja3MgbWV0aG9kLiBXZSBhcmUgZmlsdGVyaW5nIG91dCB0aGUgc2xvdHMgdGhhdCBhcmUgaW5cclxuICAgIC8vIHRoZSBwcmV2aW91cyBhdHRhY2sgc2V0LCBhcyB3ZSBkbyBub3Qgd2FudCB0byBoYXZlIHRoZSBjb21wdXRlclxyXG4gICAgLy8gdG8gdXNlIHRob3NlIHNsb3RzIGFnYWluIGluIGZ1dHVyZSB0dXJuc1xyXG4gICAgY29uc3QgZmlsdGVyZWRTbG90cyA9IHNsb3RzLmZpbHRlcihcclxuICAgICAgKHNsb3QpID0+ICFwcmV2aW91c0F0dGFja3MuaGFzKHNsb3QudG9TdHJpbmcoKSlcclxuICAgIClcclxuXHJcbiAgICByZXR1cm4gZmlsdGVyZWRTbG90c1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG1ha2VSYW5kb21Nb3ZlLFxyXG4gICAgZ2V0TmFtZSxcclxuICAgIGdldEFkamFjZW50U2xvdHMsXHJcbiAgICBwcmV2ZW50UHJldmlvdXNTaG90VG9RdWV1ZVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgU2hpcCA9IChsZW5ndGgsIG51bU9mSGl0cywgaXNTdW5rKSA9PiB7XHJcbiAgLy8gSW5jcmVhc2UgbnVtYmVyIG9mIGhpdHMgaW4gc2hpcCBieSAxXHJcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xyXG4gICAgaWYgKG51bU9mSGl0cyA9PT0gbGVuZ3RoKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIG51bU9mSGl0cysrXHJcbiAgICByZXR1cm4gbnVtT2ZIaXRzXHJcbiAgfVxyXG5cclxuICAvLyBEZXRlcm1pbmUgaWYgdGhlIHNoaXAgb2JqZWN0IGhhcyBiZWVuIHN1bmtcclxuICBjb25zdCBoYXNCZWVuU3VuayA9ICgpID0+IHtcclxuICAgIGxldCBpc1N1bmsgPSBmYWxzZVxyXG5cclxuICAgIGlmIChsZW5ndGggPT09IG51bU9mSGl0cykge1xyXG4gICAgICBpc1N1bmsgPSB0cnVlXHJcbiAgICAgIHJldHVybiBpc1N1bmtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNTdW5rXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXROdW1PZkhpdHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbnVtT2ZIaXRzXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbGVuZ3RoXHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBoaXQsIGhhc0JlZW5TdW5rLCBnZXROdW1PZkhpdHMsIGdldExlbmd0aCB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGFycmF5c0FyZUVxdWFsID0gKGFycjEsIGFycjIpID0+IHtcclxuICBpZiAoYXJyMSA9PT0gbnVsbCB8fCBhcnIyID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgaWYgKGFycjEubGVuZ3RoICE9PSBhcnIyLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyMS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGFycjFbaV0gIT09IGFycjJbaV0pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuIiwiLy8gZGVsYXlzIGV4ZWN1dGlvbiBvZiBhIGZ1bmN0aW9uIGZvciBhIHNldCBhbW91bnQgb2YgdGltZVxyXG5leHBvcnQgY29uc3QgZGVsYXkgPSAobXMpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCByZXR1cm5SYW5kb21BSUJvYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFpQm9hcmRzID0gW2FpU2hpcENvb3Jkc09uZSwgYWlTaGlwQ29vcmRzVHdvLCBhaVNoaXBDb29yZHNUaHJlZV1cclxuICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXHJcbiAgY29uc3QgY2hvc2VuQUlCb2FyZCA9IE9iamVjdC52YWx1ZXMoYWlCb2FyZHNbcmFuZG9tSW5kZXhdKVxyXG4gIHJldHVybiBjaG9zZW5BSUJvYXJkXHJcbn1cclxuXHJcbmNvbnN0IGFpU2hpcENvb3Jkc09uZSA9IHtcclxuICBjYXJyaWVyOiBbXHJcbiAgICBbOSwgMF0sXHJcbiAgICBbOSwgMV0sXHJcbiAgICBbOSwgMl0sXHJcbiAgICBbOSwgM10sXHJcbiAgICBbOSwgNF1cclxuICBdLFxyXG4gIGJhdHRsZXNoaXA6IFtcclxuICAgIFs1LCA1XSxcclxuICAgIFs2LCA1XSxcclxuICAgIFs3LCA1XSxcclxuICAgIFs4LCA1XVxyXG4gIF0sXHJcbiAgY3J1aXNlcjogW1xyXG4gICAgWzAsIDZdLFxyXG4gICAgWzEsIDZdLFxyXG4gICAgWzIsIDZdXHJcbiAgXSxcclxuICBzdWJtYXJpbmU6IFtcclxuICAgIFszLCA4XSxcclxuICAgIFs0LCA4XSxcclxuICAgIFs1LCA4XVxyXG4gIF0sXHJcbiAgZGVzdHJveWVyOiBbXHJcbiAgICBbMCwgOV0sXHJcbiAgICBbMSwgOV1cclxuICBdXHJcbn1cclxuXHJcbmNvbnN0IGFpU2hpcENvb3Jkc1R3byA9IHtcclxuICBjYXJyaWVyOiBbXHJcbiAgICBbMCwgMF0sXHJcbiAgICBbMCwgMV0sXHJcbiAgICBbMCwgMl0sXHJcbiAgICBbMCwgM10sXHJcbiAgICBbMCwgNF1cclxuICBdLFxyXG4gIGJhdHRsZXNoaXA6IFtcclxuICAgIFs5LCA1XSxcclxuICAgIFs5LCA2XSxcclxuICAgIFs5LCA3XSxcclxuICAgIFs5LCA4XVxyXG4gIF0sXHJcbiAgY3J1aXNlcjogW1xyXG4gICAgWzIsIDJdLFxyXG4gICAgWzMsIDJdLFxyXG4gICAgWzQsIDJdXHJcbiAgXSxcclxuICBzdWJtYXJpbmU6IFtcclxuICAgIFs2LCA2XSxcclxuICAgIFs2LCA3XSxcclxuICAgIFs2LCA4XVxyXG4gIF0sXHJcbiAgZGVzdHJveWVyOiBbXHJcbiAgICBbOCwgMF0sXHJcbiAgICBbOCwgMV1cclxuICBdXHJcbn1cclxuXHJcbmNvbnN0IGFpU2hpcENvb3Jkc1RocmVlID0ge1xyXG4gIGNhcnJpZXI6IFtcclxuICAgIFs1LCAwXSxcclxuICAgIFs1LCAxXSxcclxuICAgIFs1LCAyXSxcclxuICAgIFs1LCAzXSxcclxuICAgIFs1LCA0XVxyXG4gIF0sXHJcbiAgYmF0dGxlc2hpcDogW1xyXG4gICAgWzAsIDldLFxyXG4gICAgWzEsIDldLFxyXG4gICAgWzIsIDldLFxyXG4gICAgWzMsIDldXHJcbiAgXSxcclxuICBjcnVpc2VyOiBbXHJcbiAgICBbNywgN10sXHJcbiAgICBbOCwgN10sXHJcbiAgICBbOSwgN11cclxuICBdLFxyXG4gIHN1Ym1hcmluZTogW1xyXG4gICAgWzEsIDFdLFxyXG4gICAgWzIsIDFdLFxyXG4gICAgWzMsIDFdXHJcbiAgXSxcclxuICBkZXN0cm95ZXI6IFtcclxuICAgIFs0LCA0XSxcclxuICAgIFs0LCA1XVxyXG4gIF1cclxufVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXHJcXG5cXHJcXG4vKiBEb2N1bWVudFxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcclxcbiAqL1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogQXBwbHkgYm9yZGVyIGJveCB0byBlbnRpcmUgZG9jdW1lbnQgKi9cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2VjdGlvbnNcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcclxcbiAgICovXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXHJcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHcm91cGluZyBjb250ZW50XFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXHJcXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcclxcbiAgICovXFxyXFxuXFxyXFxuaHIge1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxucHJlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxyXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYWJiclt0aXRsZV0ge1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICAvKiAyICovXFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5iLFxcclxcbnN0cm9uZyB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbmNvZGUsXFxyXFxua2JkLFxcclxcbnNhbXAge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnNtYWxsIHtcXHJcXG4gICAgZm9udC1zaXplOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxyXFxuICAgKiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5zdWIsXFxyXFxuc3VwIHtcXHJcXG4gICAgZm9udC1zaXplOiA3NSU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuc3ViIHtcXHJcXG4gICAgYm90dG9tOiAtMC4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5zdXAge1xcclxcbiAgICB0b3A6IC0wLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRW1iZWRkZWQgY29udGVudFxcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEZvcm1zXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbm9wdGdyb3VwLFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyogR2l2ZSBpbnB1dCBhbmQgdGV4dCBhcmVhIGNvbnNpc3RlbnQgbG9vayAqL1xcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwIDAgLTEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZm9udDogYm9sZCAwLjZlbSBzYW5zLXNlcmlmO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyLFxcclxcbmJ1dHRvbjpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIC8qIGJhY2tncm91bmQ6ICMwMDA7XFxyXFxuICAgIGNvbG9yOiAjZmZmOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHZXRzIHJpZCBvZiBkZWZhdWx0IHNlYXJjaCB0byByZW1vdmUgcmVzdHJpY3Rpb25zICovXFxyXFxuaW5wdXRbdHlwZT0nc2VhcmNoJ10ge1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGaXggZm9yIGluY29uc2lzdGVudCBkaXNwbGF5IG9mIGNsZWFyIFxcXCJ4XFxcIiBpY29uIGluIHNlYXJjaCBpbnB1dHMgYWNyb3NzIGRpZmZlcmVudCBicm93c2Vycy4gXFxyXFxuICAsIHRoaXMgY29kZSByZW1vdmVzIHRoZSBpY29uIGluIEVkZ2UgYW5kIENocm9tZSB3aGVuIHRoZSBpbnB1dCBsb3NlcyBmb2N1cywgd2hpbGUga2VlcGluZyBpdCB2aXNpYmxlIGluIFNhZmFyaS4gKi9cXHJcXG5pbnB1dFt0eXBlPSdzZWFyY2gnXTpub3QoOmZvY3VzLCA6YWN0aXZlKTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxyXFxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0IHtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXHJcXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3Qge1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuW3R5cGU9J2J1dHRvbiddLFxcclxcblt0eXBlPSdyZXNldCddLFxcclxcblt0eXBlPSdzdWJtaXQnXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxyXFxuICAgKi9cXHJcXG5cXHJcXG46Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9J2J1dHRvbiddOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPSdyZXNldCddOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPSdzdWJtaXQnXTo6LW1vei1mb2N1cy1pbm5lciB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9J2J1dHRvbiddOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPSdyZXNldCddOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPSdzdWJtaXQnXTotbW96LWZvY3VzcmluZyB7XFxyXFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcclxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcclxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAvKiAyICovXFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAvKiAzICovXFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcclxcbiAgICovXFxyXFxuXFxyXFxucHJvZ3Jlc3Mge1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcclxcbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9J2NoZWNrYm94J10sXFxyXFxuW3R5cGU9J3JhZGlvJ10ge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXHJcXG4gICAqL1xcclxcblxcclxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXHJcXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcblt0eXBlPSdzZWFyY2gnXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9J3NlYXJjaCddOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udDogaW5oZXJpdDtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbnRlcmFjdGl2ZVxcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbmRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnN1bW1hcnkge1xcclxcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxyXFxufVxcclxcblxcclxcbi8qIE1pc2NcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG50ZW1wbGF0ZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5baGlkZGVuXSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0lBQ0ksaUJBQWlCO0lBQ2pCLE1BQU07SUFDTiw4QkFBOEI7SUFDOUIsTUFBTTtBQUNWOztBQUVBLHdDQUF3QztBQUN4QztJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0lBQ0ksU0FBUztBQUNiOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO2lGQUNpRjs7QUFFakY7OztJQUdJOztBQUVKO0lBQ0ksdUJBQXVCO0lBQ3ZCLE1BQU07SUFDTixTQUFTO0lBQ1QsTUFBTTtJQUNOLGlCQUFpQjtJQUNqQixNQUFNO0FBQ1Y7O0FBRUE7OztJQUdJOztBQUVKO0lBQ0ksaUNBQWlDO0lBQ2pDLE1BQU07SUFDTixjQUFjO0lBQ2QsTUFBTTtBQUNWOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7OztJQUdJOztBQUVKO0lBQ0ksbUJBQW1CO0lBQ25CLE1BQU07SUFDTiwwQkFBMEI7SUFDMUIsTUFBTTtJQUNOLGlDQUFpQztJQUNqQyxNQUFNO0FBQ1Y7O0FBRUE7O0lBRUk7O0FBRUo7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBOzs7SUFHSTs7QUFFSjs7O0lBR0ksaUNBQWlDO0lBQ2pDLE1BQU07SUFDTixjQUFjO0lBQ2QsTUFBTTtBQUNWOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7O0lBR0k7O0FBRUo7O0lBRUksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO2lGQUNpRjs7QUFFakY7OztJQUdJOztBQUVKO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBOzs7OztJQUtJLG9CQUFvQjtJQUNwQixNQUFNO0lBQ04sZUFBZTtJQUNmLE1BQU07SUFDTixpQkFBaUI7SUFDakIsTUFBTTtJQUNOLFNBQVM7SUFDVCxNQUFNO0lBQ04sVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQSw2Q0FBNkM7QUFDN0M7O0lBRUksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2I7a0JBQ2M7QUFDbEI7O0FBRUEsc0RBQXNEO0FBQ3REO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO21IQUNtSDtBQUNuSDtJQUNJLGFBQWE7QUFDakI7O0FBRUE7OztJQUdJOztBQUVKOztJQUVJLE1BQU07SUFDTixpQkFBaUI7QUFDckI7O0FBRUE7OztJQUdJOztBQUVKOztJQUVJLE1BQU07SUFDTixvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUk7O0FBRUo7Ozs7SUFJSSwwQkFBMEI7QUFDOUI7O0FBRUE7O0lBRUk7O0FBRUo7Ozs7SUFJSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBOztJQUVJOztBQUVKOzs7O0lBSUksOEJBQThCO0FBQ2xDOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBOzs7OztJQUtJOztBQUVKO0lBQ0ksc0JBQXNCO0lBQ3RCLE1BQU07SUFDTixjQUFjO0lBQ2QsTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0lBQ04sZUFBZTtJQUNmLE1BQU07SUFDTixVQUFVO0lBQ1YsTUFBTTtJQUNOLG1CQUFtQjtJQUNuQixNQUFNO0FBQ1Y7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOzs7SUFHSTs7QUFFSjs7SUFFSSxzQkFBc0I7SUFDdEIsTUFBTTtJQUNOLFlBQVk7SUFDWixNQUFNO0FBQ1Y7O0FBRUE7O0lBRUk7O0FBRUo7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSw2QkFBNkI7SUFDN0IsTUFBTTtJQUNOLG9CQUFvQjtJQUNwQixNQUFNO0FBQ1Y7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7OztJQUdJOztBQUVKO0lBQ0ksMEJBQTBCO0lBQzFCLE1BQU07SUFDTixhQUFhO0lBQ2IsTUFBTTtBQUNWOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxyXFxuXFxyXFxuLyogRG9jdW1lbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIEFwcGx5IGJvcmRlciBib3ggdG8gZW50aXJlIGRvY3VtZW50ICovXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIFNlY3Rpb25zXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXHJcXG4gICAqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxyXFxuICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogR3JvdXBpbmcgY29udGVudFxcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxyXFxuICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXHJcXG4gICAqL1xcclxcblxcclxcbmhyIHtcXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnByZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcbmEge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcclxcbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmFiYnJbdGl0bGVdIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgLyogMiAqL1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYixcXHJcXG5zdHJvbmcge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5jb2RlLFxcclxcbmtiZCxcXHJcXG5zYW1wIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5zbWFsbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcclxcbiAgICogYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuc3ViLFxcclxcbnN1cCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcclxcbiAgICBsaW5lLWhlaWdodDogMDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbnN1YiB7XFxyXFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuc3VwIHtcXHJcXG4gICAgdG9wOiAtMC41ZW07XFxyXFxufVxcclxcblxcclxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcclxcbiAgICovXFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3Jtc1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG5vcHRncm91cCxcXHJcXG5zZWxlY3QsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250LXNpemU6IDEwMCU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICAvKiAyICovXFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIEdpdmUgaW5wdXQgYW5kIHRleHQgYXJlYSBjb25zaXN0ZW50IGxvb2sgKi9cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDEwcHggMCAwIC0xMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGZvbnQ6IGJvbGQgMC42ZW0gc2Fucy1zZXJpZjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlcixcXHJcXG5idXR0b246Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMDAwO1xcclxcbiAgICBjb2xvcjogI2ZmZjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogR2V0cyByaWQgb2YgZGVmYXVsdCBzZWFyY2ggdG8gcmVtb3ZlIHJlc3RyaWN0aW9ucyAqL1xcclxcbmlucHV0W3R5cGU9J3NlYXJjaCddIHtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRml4IGZvciBpbmNvbnNpc3RlbnQgZGlzcGxheSBvZiBjbGVhciBcXFwieFxcXCIgaWNvbiBpbiBzZWFyY2ggaW5wdXRzIGFjcm9zcyBkaWZmZXJlbnQgYnJvd3NlcnMuIFxcclxcbiAgLCB0aGlzIGNvZGUgcmVtb3ZlcyB0aGUgaWNvbiBpbiBFZGdlIGFuZCBDaHJvbWUgd2hlbiB0aGUgaW5wdXQgbG9zZXMgZm9jdXMsIHdoaWxlIGtlZXBpbmcgaXQgdmlzaWJsZSBpbiBTYWZhcmkuICovXFxyXFxuaW5wdXRbdHlwZT0nc2VhcmNoJ106bm90KDpmb2N1cywgOmFjdGl2ZSk6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcclxcbiAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCB7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxyXFxuICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcblt0eXBlPSdidXR0b24nXSxcXHJcXG5bdHlwZT0ncmVzZXQnXSxcXHJcXG5bdHlwZT0nc3VibWl0J10ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuXFxyXFxuOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPSdidXR0b24nXTo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT0ncmVzZXQnXTo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT0nc3VibWl0J106Oi1tb3otZm9jdXMtaW5uZXIge1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPSdidXR0b24nXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT0ncmVzZXQnXTotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT0nc3VibWl0J106LW1vei1mb2N1c3Jpbmcge1xcclxcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXHJcXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXHJcXG4gICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgLyogMiAqL1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgLyogMyAqL1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcclxcbiAgICAvKiAxICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXHJcXG4gICAqL1xcclxcblxcclxcbnByb2dyZXNzIHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcclxcbiAgICovXFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXHJcXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcblt0eXBlPSdjaGVja2JveCddLFxcclxcblt0eXBlPSdyYWRpbyddIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxyXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT0nc2VhcmNoJ10ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXHJcXG4gICAqL1xcclxcblxcclxcblt0eXBlPSdzZWFyY2gnXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogSW50ZXJhY3RpdmVcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLypcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5zdW1tYXJ5IHtcXHJcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNaXNjXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcclxcbiAgICovXFxyXFxuXFxyXFxudGVtcGxhdGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW2hpZGRlbl0ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gIGNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByYWRpYWwgIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLnRvcEJhckNvbnRhaW5lciB7XFxyXFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICB3aWR0aDogNzB2dztcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDglO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggIzdhN2E3YTQyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wQmFyQ29udGFpbmVyIHAge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxucC5pbnZpc2libGUge1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnNoaXBDZWxsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbiNBSUJvYXJkIGJ1dHRvbixcXHJcXG4jcGxheWVyQm9hcmQgYnV0dG9uIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJCb2FyZENvbnRhaW5lcixcXHJcXG4uYWlCb2FyZENvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4jYm9hcmRzQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibGFjayAqL1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAzOHZ3KSk7XFxyXFxuICB3aWR0aDogODN2dztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5vcmllbnRhdGlvblRvZ2dsZUJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgaGVpZ2h0OiA3MCU7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNib2FyZHNDb250YWluZXIgcCB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jcGxheWVyQm9hcmQge1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jQUlCb2FyZCB7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5ib2FyZENlbGwge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnNoaXBDZWxsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnNoaXBIaXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCA5NCwgMjIpO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDgxMnB4KSB7XFxyXFxuICAjYm9hcmRzQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTZweDtcXHJcXG4gICAgLyogIG91dGxpbmU6IDFweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gICAgcGFkZGluZzogMTJweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBub25lO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyNXB4LCAzOHZ3KSk7XFxyXFxuICAgIHdpZHRoOiA4NnZ3O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI0FJQm9hcmQge1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNDJweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcGxheWVyQm9hcmQge1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNDJweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9wQmFyQ29udGFpbmVyIHtcXHJcXG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgICB3aWR0aDogODR2dztcXHJcXG4gICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDYlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMXB4ICM3YTdhN2E0MjtcXHJcXG4gICAgcGFkZGluZzogNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvcEJhckNvbnRhaW5lciBwIHtcXHJcXG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNib2FyZHNDb250YWluZXIgcCB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGFBQWE7RUFDYixRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNkNBQTZDO0FBQy9DOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsNERBQTREO0VBQzVELFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COzs7QUFHQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG9DQUFvQztBQUN0Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLDREQUE0RDtJQUM1RCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsT0FBTztJQUNQLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixpQ0FBaUM7SUFDakMsWUFBWTtFQUNkOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixpQkFBaUI7RUFDbkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gIGNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByYWRpYWwgIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLnRvcEJhckNvbnRhaW5lciB7XFxyXFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxuICB3aWR0aDogNzB2dztcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDglO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggIzdhN2E3YTQyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wQmFyQ29udGFpbmVyIHAge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxucC5pbnZpc2libGUge1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnNoaXBDZWxsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbiNBSUJvYXJkIGJ1dHRvbixcXHJcXG4jcGxheWVyQm9hcmQgYnV0dG9uIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJCb2FyZENvbnRhaW5lcixcXHJcXG4uYWlCb2FyZENvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4jYm9hcmRzQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibGFjayAqL1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAzOHZ3KSk7XFxyXFxuICB3aWR0aDogODN2dztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5vcmllbnRhdGlvblRvZ2dsZUJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgaGVpZ2h0OiA3MCU7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNib2FyZHNDb250YWluZXIgcCB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jcGxheWVyQm9hcmQge1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDUwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jQUlCb2FyZCB7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5ib2FyZENlbGwge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnNoaXBDZWxsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnNoaXBIaXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCA5NCwgMjIpO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDgxMnB4KSB7XFxyXFxuICAjYm9hcmRzQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTZweDtcXHJcXG4gICAgLyogIG91dGxpbmU6IDFweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gICAgcGFkZGluZzogMTJweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBub25lO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyNXB4LCAzOHZ3KSk7XFxyXFxuICAgIHdpZHRoOiA4NnZ3O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI0FJQm9hcmQge1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNDJweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjcGxheWVyQm9hcmQge1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNDJweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9wQmFyQ29udGFpbmVyIHtcXHJcXG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgICB3aWR0aDogODR2dztcXHJcXG4gICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDYlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMXB4ICM3YTdhN2E0MjtcXHJcXG4gICAgcGFkZGluZzogNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvcEJhckNvbnRhaW5lciBwIHtcXHJcXG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNib2FyZHNDb250YWluZXIgcCB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtcclxuICBwcmVHYW1lU2V0dXBcclxufSBmcm9tICcuL2NvbnRyb2xsZXJzL2Rpc3BsYXlDb250cm9sbGVyJ1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlcy9ub3JtYWxpemUuY3NzJ1xyXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcydcclxuXHJcbnByZUdhbWVTZXR1cCgpXHJcbiJdLCJuYW1lcyI6WyJkZWxheSIsImdhbWVDb250cm9sbGVyIiwiZ2FtZSIsInByZUdhbWVTZXR1cCIsInJlbmRlclBsYXllckJvYXJkIiwicGxhY2VDYXJyaWVyU2hpcCIsInJlbmRlckFJQm9hcmQiLCJkaXNwbGF5Q29udHJvbGxlciIsInRvcEJhckNvbnRhaW5lclBhcmEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsInBsYWNlQUlTaGlwcyIsImFpQm9hcmREaXYiLCJnZXRFbGVtZW50QnlJZCIsInBsYXllcnMiLCJnZXRQbGF5ZXJzIiwiYWN0aXZlUGxheWVyIiwiZ2V0Q3VycmVudFBsYXllciIsImh1bWFuIiwibmV3TWVzc2FnZSIsInRyYW5zaXRpb25UZXh0Q2hhbmdlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnQiLCJ0b3BCYXJQYXJhIiwiaHVtYW5Cb2FyZERpdiIsIm9yaWVudGF0aW9uQnRuVmFsdWVzIiwiY3JlYXRlT3JpZW50YXRpb25Ub2dnbGVCdG4iLCJob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzIiwib3JpZW50YXRpb25Ub2dnbGVCdG4iLCJjb250cm9sbGVyIiwiQWJvcnRDb250cm9sbGVyIiwiZSIsImhhbmRsZUNhcnJpZXJTaGlwUGxhY2VtZW50Iiwic2lnbmFsIiwicGxhY2VCYXR0bGVTaGlwIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUJhdHRsZVNoaXBQbGFjZW1lbnQiLCJwbGFjZUNydWlzZXIiLCJoYW5kbGVDcnVpc2VyU2hpcFBsYWNlbWVudCIsInBsYWNlU3VibWFyaW5lIiwiaGFuZGxlU3VibWFyaW5lU2hpcFBsYWNlbWVudCIsInBsYWNlRGVzdHJveWVyIiwiaGFuZGxlRGVzdHJveWVyU2hpcFBsYWNlbWVudCIsInBsYXllckJvYXJkIiwiZ2V0SHVtYW5Cb2FyZCIsInBsYXllckJvYXJkRGl2IiwiaW5uZXJIVE1MIiwiaSIsImxlbmd0aCIsImN1cnJlbnRSb3ciLCJqIiwiYnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJyb3ciLCJjb2x1bW4iLCJhcHBlbmRDaGlsZCIsImFpQm9hcmQiLCJnZXRBSUJvYXJkIiwidXBkYXRlSHVtYW5Cb2FyZCIsImh1bWFuQm9hcmQiLCJtaXNzZWRTaG90cyIsImdldEh1bWFuQm9hcmRPYmoiLCJnZXRNaXNzZWRTaG90cyIsInN1Y2Nlc3NmdWxTaG90cyIsImdldFN1Y2Nlc3NmdWxTaG90cyIsImFsbERvbU5vZGVzIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJzaG90IiwidGFyZ2V0Tm9kZSIsInJlbW92ZSIsInVwZGF0ZUFJQm9hcmQiLCJnZXRBSUJvYXJkT2JqIiwiaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbiIsInNlbGVjdGVkUm93IiwidGFyZ2V0Iiwic2VsZWN0ZWRDb2x1bW4iLCJjb29yZGluYXRlIiwiY2FycmllclBsYWNlZCIsInBsYWNlQ2Fycmllck9uQm9hcmQiLCJhYm9ydCIsInJlbW92ZVByZXZpb3VzT3JpZW50YXRpb25CdG4iLCJiYXR0bGVzaGlwUGxhY2VkIiwicGxhY2VCYXR0bGVzaGlwT25Cb2FyZCIsImNydWlzZXJQbGFjZWQiLCJwbGFjZUNydWlzZXJPbkJvYXJkIiwic3VibWFyaW5lUGxhY2VkIiwicGxhY2VTdWJtYXJpbmVPbkJvYXJkIiwiZGVzdHJveWVyUGxhY2VkIiwicGxhY2VEZXN0cm95ZXJPbkJvYXJkIiwic2hpcFR5cGUiLCJib2FyZERPTUNlbGxzQXJyIiwicXVlcnlTZWxlY3RvckFsbCIsImdldEhvcml6b250YWxET01Db29yZHMiLCJnZXRWZXJ0aWNhbERPTUNvb3JkcyIsInBsYWNlQ3J1aXNlclNoaXAiLCJwbGFjZVN1Ym1hcmluZVNoaXAiLCJwbGFjZURlc3Ryb3llclNoaXAiLCJzdGFydGluZ0NvbHVtbiIsIk51bWJlciIsInNoaXBMZW5ndGgiLCJkb21Db29yZGluYXRlIiwidGFyZ2V0RE9NQnRuIiwiZmluZFNoaXBET01CdG4iLCJzdGFydGluZ1JvdyIsImRvbUNlbGxSb3ciLCJkb21DZWxsQ29sdW1uIiwiYWxyZWFkeUF0dGFja2VkIiwicHJldmVudFNhbWVBdHRhY2siLCJwbGF5Um91bmQiLCJodW1hbk1vdmVTdWNjZXNzZnVsIiwiZ2V0TGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwiLCJkaXNwbGF5U3VjY2Vzc2Z1bEF0dGFja01lc3NhZ2UiLCJkaXNwbGF5VW5zdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSIsImh1bWFuV2lucyIsImNoZWNrRm9yV2luIiwiaGFuZGxlV2luQ2hlY2siLCJoYW5kbGVBSU1vdmUiLCJlbmVteUF0dGFja2luZ01zZyIsImFpTW92ZVN1Y2Nlc3NmdWwiLCJnZXRMYXN0QUlNb3ZlU3VjY2Vzc2Z1bCIsImFpV2lucyIsImF0dGFja1RoZUVuZW15TXNnIiwiYW5ub3VuY2VXaW5uZXIiLCJ3aW5uZXIiLCJ3aW5uZXJOYW1lIiwiZ2V0TmFtZSIsInBsYXlBZ2FpbiIsInRvcEJhckRpdiIsInBsYXlBZ2FpbkJ0biIsInN0YXJ0TmV3R2FtZSIsInJlbW92ZUNoaWxkIiwicHJldmlvdXNPcmllbnRhdGlvbkJ0biIsInBsYXllciIsImF0dGFja0FuZEhpdE1zZyIsInNldFRpbWVvdXQiLCJlbmVteUhpdE1zZyIsInVuc3VjY2Vzc2Z1bEF0dGFja01zZyIsInVuc3VjY2Vzc2Z1bEVuZW15QXR0YWNrTXNnIiwid2luQ2hlY2siLCJib2FyZERpdiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNldEdhbWVTdGF0ZSIsImRvbUVsZW1lbnQiLCJHYW1lYm9hcmQiLCJQbGF5ZXIiLCJyZXR1cm5SYW5kb21BSUJvYXJkIiwiY3JlYXRlR2FtZUJvYXJkIiwiY2FycmllckFyciIsImRldGVybWluZUNhcnJpZXJBcnJDb29yZHMiLCJzaGlwUGxhY2VkIiwicGxhY2VTaGlwIiwicHVzaCIsImNvb3JkIiwidG9TdHJpbmciLCJiYXR0bGVzaGlwQXJyIiwiZGV0ZXJtaW5lQmF0dGxlc2hpcEFyckNvb3JkcyIsImNydWlzZXJBcnIiLCJkZXRlcm1pbmVDcnVpc2VyQXJyQ29vcmRzIiwic3VibWFyaW5lQXJyIiwiZGV0ZXJtaW5lU3VibWFyaW5lQXJyQ29vcmRzIiwiZGVzdHJveWVyQXJyIiwiZGV0ZXJtaW5lRGVzdHJveWVyQXJyQ29vcmRzIiwicGxhY2VTaGlwcyIsImh1bWFuUGxheWVyIiwiYWlQbGF5ZXIiLCJBSSIsImN1cnJlbnRQbGF5ZXIiLCJyZWNlaXZlQXR0YWNrIiwibmV4dE1vdmUiLCJjb21wdXRlcnNOZXh0TW92ZSIsInJlbW92ZUxhc3RBSU1vdmUiLCJzd2l0Y2hQbGF5ZXIiLCJhdmFpbGFibGVNb3ZlcyIsImdldEFJQXZhaWxhYmxlTW92ZXMiLCJsYXN0QUlNb3ZlU3VjY2Vzc2Z1bCIsImFkamFjZW50U2xvdHMiLCJnZXRBZGphY2VudFNsb3RzIiwiYWRkQWRqYWNlbnRTbG90c1RvUXVldWUiLCJnZXRBZGphY2VudFF1ZXVlU2xvdCIsInJhbmRvbU1vdmUiLCJtYWtlUmFuZG9tTW92ZSIsImFsbFNoaXBzU3VuayIsImNsZWFyR2FtZUJvYXJkIiwiZ2V0Qm9hcmQiLCJib2FyZCIsImNvb3JkaW5hdGVzT2JqIiwic2hpcENvb3JkaW5hdGVzQXJyIiwiT2JqZWN0IiwidmFsdWVzIiwic2hpcENvb3JkaW5hdGVzIiwiYXJyYXlzQXJlRXF1YWwiLCJTaGlwIiwic2hpcE9iamVjdHMiLCJhaUF2YWlsYWJsZU1vdmVzIiwiYWRqYWNlbnRTbG90c1F1ZXVlIiwicm93cyIsImNvbHVtbnMiLCJsYXN0SHVtYW5Nb3ZlU3VjY2Vzc2Z1bCIsInVuZGVmaW5lZCIsInZhbGlkYXRlQ29vcmRpbmF0ZXMiLCJjb29yZGluYXRlcyIsInZhbGlkQ29vcmRpbmF0ZXMiLCJjaGVja1NlbGZPdmVybGFwIiwiY29vcmRpbmF0ZXNPdmVybGFwIiwicHJldkNvb3JkaW5hdGUiLCJpbmRleCIsImNoZWNrT3ZlcmxhcFdpdGhPdGhlclNoaXBzIiwic2hpcHNPdmVybGFwIiwiYm9hcmRDZWxsIiwibGVnYWxDb29yZGluYXRlcyIsIm92ZXJsYXBwaW5nQ29vcmRpbmF0ZXMiLCJzaGlwT3ZlcmxhcHBpbmciLCJzaGlwT2JqZWN0Iiwic2hpcE9iaiIsImhpdCIsInJlbW92ZUFkamFjZW50U2xvdCIsInRhcmdldENvb3JkaW5hdGVzIiwiYWRqYWNlbnRRdWV1ZSIsIlNldCIsInNsb3QiLCJmaWx0ZXIiLCJldmVyeVNoaXBTYW5rIiwiaGFzQmVlblN1bmsiLCJtb3ZlIiwic3BsaWNlIiwiZ2V0U2hpcE9iamVjdHMiLCJnZXRBZGphY2VudFNsb3RzUXVldWUiLCJwb3AiLCJnZXRMYXN0U3VjY2Vzc2Z1bE1vdmUiLCJhdCIsIm5hbWUiLCJpc0FJIiwiYXZhaWxhYmxlTW92ZXNMZW5ndGgiLCJyYW5kb21BcnJJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbUNvb3JkaW5hdGUiLCJsYXN0U3VjY2Vzc2Z1bE1vdmUiLCJyZXRyaWV2ZUFkamFjZW50U2xvdHMiLCJsZWdhbEFkamFjZW50U2xvdHMiLCJyZW1vdmVJbGxlZ2FsQWRqYWNlbnRTbG90cyIsImdldENlbGxBYm92ZSIsIm5ld0FyciIsIm5ld1JvdyIsImdldENlbGxCZWxvdyIsImFyciIsImdldENlbGxUb1JpZ2h0IiwibmV3Q29sdW1uIiwiZ2V0Q2VsbFRvTGVmdCIsImxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlIiwiYWRqYWNlbnRTbG90c0FyciIsInByZXZlbnRQcmV2aW91c1Nob3RUb1F1ZXVlIiwic2xvdHMiLCJhbGxQcmV2aW91c0F0dGFja3MiLCJjb25jYXQiLCJwcmV2aW91c0F0dGFja3MiLCJmaWx0ZXJlZFNsb3RzIiwiaGFzIiwibnVtT2ZIaXRzIiwiaXNTdW5rIiwiZ2V0TnVtT2ZIaXRzIiwiZ2V0TGVuZ3RoIiwiYXJyMSIsImFycjIiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwiYWlCb2FyZHMiLCJhaVNoaXBDb29yZHNPbmUiLCJhaVNoaXBDb29yZHNUd28iLCJhaVNoaXBDb29yZHNUaHJlZSIsInJhbmRvbUluZGV4IiwiY2hvc2VuQUlCb2FyZCIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiY3J1aXNlciIsInN1Ym1hcmluZSIsImRlc3Ryb3llciJdLCJzb3VyY2VSb290IjoiIn0=