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
  await (0,_helpers_delay__WEBPACK_IMPORTED_MODULE_0__.delay)(2000);
  game.placeAIShips();
  renderAIBoard();
  topBarContainerPara.textContent = '';
  const aiBoardDiv = document.getElementById('AIBoard');
  const players = game.getPlayers();
  const activePlayer = game.getCurrentPlayer();
  if (activePlayer === players.human) {
    document.querySelector('.topBarContainer > p').textContent = 'Attack the enemies ships!';
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
  document.querySelector('.topBarContainer > p').textContent = 'Attack the enemies ships...';
  game.playRound(coordinate);
  const humanMoveSuccessful = game.getAIBoardObj.getLastHumanMoveSuccessful();
  humanMoveSuccessful ? displaySuccessfulAttackMessage('human') : displayUnsuccessfulAttackMessage('human');
  const humanWins = game.checkForWin();
  updateAIBoard();
  // create handleWin() function
  if (humanWins) {
    aiBoardDiv.removeEventListener('click', handlePlayerSelectionEvt);
    game.resetGameState();
    announceWinner(humanWins);
    playAgain();
  }
  handleAIMove(aiBoardDiv);
};
const handleAIMove = async aiBoardDiv => {
  await (0,_helpers_delay__WEBPACK_IMPORTED_MODULE_0__.delay)(1000);
  document.querySelector('.topBarContainer > p').textContent = 'Enemy is attacking your ships!';
  const aiMoveSuccessful = game.getHumanBoardObj.getLastAIMoveSuccessful();
  aiMoveSuccessful ? displaySuccessfulAttackMessage('computer') : displayUnsuccessfulAttackMessage('computer');
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
    topBarContainerPara.textContent = 'You attacked the enemy... and hit their ship!';
  } else if (player === 'computer') {
    const topBarContainerPara = document.querySelector('.topBarContainer > p');
    topBarContainerPara.textContent = 'The enemy launched an attack... and hit your ship!';
  }
};
const displayUnsuccessfulAttackMessage = player => {
  if (player === 'human') {
    const topBarContainerPara = document.querySelector('.topBarContainer > p');
    topBarContainerPara.textContent = 'You attack on the enemy was unsuccessful';
  } else if (player === 'computer') {
    const topBarContainerPara = document.querySelector('.topBarContainer > p');
    topBarContainerPara.textContent = 'The enemies attack was unsuccessful';
  }
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
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n    line-height: 1.15;\r\n    /* 1 */\r\n    -webkit-text-size-adjust: 100%;\r\n    /* 2 */\r\n}\r\n\r\n/* Apply border box to entire document */\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Sections\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the margin in all browsers.\r\n   */\r\n\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n   * Render the `main` element consistently in IE.\r\n   */\r\n\r\nmain {\r\n    display: block;\r\n}\r\n\r\n/**\r\n   * Correct the font size and margin on `h1` elements within `section` and\r\n   * `article` contexts in Chrome, Firefox, and Safari.\r\n   */\r\n\r\nh1 {\r\n    font-size: 2em;\r\n    margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n     ========================================================================== */\r\n\r\n/**\r\n   * 1. Add the correct box sizing in Firefox.\r\n   * 2. Show the overflow in Edge and IE.\r\n   */\r\n\r\nhr {\r\n    box-sizing: content-box;\r\n    /* 1 */\r\n    height: 0;\r\n    /* 1 */\r\n    overflow: visible;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n\r\npre {\r\n    font-family: monospace, monospace;\r\n    /* 1 */\r\n    font-size: 1em;\r\n    /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the gray background on active links in IE 10.\r\n   */\r\n\r\na {\r\n    background-color: transparent;\r\n}\r\n\r\n/**\r\n   * 1. Remove the bottom border in Chrome 57-\r\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n   */\r\n\r\nabbr[title] {\r\n    border-bottom: none;\r\n    /* 1 */\r\n    text-decoration: underline;\r\n    /* 2 */\r\n    text-decoration: underline dotted;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n   * Add the correct font weight in Chrome, Edge, and Safari.\r\n   */\r\n\r\nb,\r\nstrong {\r\n    font-weight: bolder;\r\n}\r\n\r\n/**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n    font-family: monospace, monospace;\r\n    /* 1 */\r\n    font-size: 1em;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n   * Add the correct font size in all browsers.\r\n   */\r\n\r\nsmall {\r\n    font-size: 80%;\r\n}\r\n\r\n/**\r\n   * Prevent `sub` and `sup` elements from affecting the line height in\r\n   * all browsers.\r\n   */\r\n\r\nsub,\r\nsup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n    bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n    top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the border on images inside links in IE 10.\r\n   */\r\n\r\nimg {\r\n    border-style: none;\r\n}\r\n\r\n/* Forms\r\n     ========================================================================== */\r\n\r\n/**\r\n   * 1. Change the font styles in all browsers.\r\n   * 2. Remove the margin in Firefox and Safari.\r\n   */\r\n\r\ninput {\r\n    -webkit-appearance: none;\r\n}\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n    font-family: inherit;\r\n    /* 1 */\r\n    font-size: 100%;\r\n    /* 1 */\r\n    line-height: 1.15;\r\n    /* 1 */\r\n    margin: 0;\r\n    /* 2 */\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Give input and text area consistent look */\r\ninput,\r\ntextarea {\r\n    background: none;\r\n    border: 1px solid grey;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    padding: 4px;\r\n}\r\n\r\ntextarea {\r\n    display: block;\r\n    padding: 10px;\r\n    margin: 10px 0 0 -10px;\r\n    width: 100%;\r\n    height: 90%;\r\n    border-right: 1px solid;\r\n    resize: none;\r\n    overflow: auto;\r\n}\r\n\r\nbutton {\r\n    padding: 5px;\r\n    font: bold 0.6em sans-serif;\r\n    border: 1px solid #333;\r\n    border-radius: 5px;\r\n    background: none;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton:hover,\r\nbutton:focus {\r\n    outline: none;\r\n    /* background: #000;\r\n    color: #fff; */\r\n}\r\n\r\n/* Gets rid of default search to remove restrictions */\r\ninput[type='search'] {\r\n    appearance: none;\r\n}\r\n\r\n/* Fix for inconsistent display of clear \"x\" icon in search inputs across different browsers. \r\n  , this code removes the icon in Edge and Chrome when the input loses focus, while keeping it visible in Safari. */\r\ninput[type='search']:not(:focus, :active)::-webkit-search-cancel-button {\r\n    display: none;\r\n}\r\n\r\n/**\r\n   * Show the overflow in IE.\r\n   * 1. Show the overflow in Edge.\r\n   */\r\n\r\nbutton,\r\ninput {\r\n    /* 1 */\r\n    overflow: visible;\r\n}\r\n\r\n/**\r\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n   * 1. Remove the inheritance of text transform in Firefox.\r\n   */\r\n\r\nbutton,\r\nselect {\r\n    /* 1 */\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n   * Correct the inability to style clickable types in iOS and Safari.\r\n   */\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n    -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n   * Remove the inner border and padding in Firefox.\r\n   */\r\n\r\n::-moz-focus-inner,\r\n[type='button']::-moz-focus-inner,\r\n[type='reset']::-moz-focus-inner,\r\n[type='submit']::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n   * Restore the focus styles unset by the previous rule.\r\n   */\r\n\r\nbutton:-moz-focusring,\r\n[type='button']:-moz-focusring,\r\n[type='reset']:-moz-focusring,\r\n[type='submit']:-moz-focusring {\r\n    outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n   * Correct the padding in Firefox.\r\n   */\r\n\r\nfieldset {\r\n    padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n   * 1. Correct the text wrapping in Edge and IE.\r\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n   * 3. Remove the padding so developers are not caught out when they zero out\r\n   *    `fieldset` elements in all browsers.\r\n   */\r\n\r\nlegend {\r\n    box-sizing: border-box;\r\n    /* 1 */\r\n    color: inherit;\r\n    /* 2 */\r\n    display: table;\r\n    /* 1 */\r\n    max-width: 100%;\r\n    /* 1 */\r\n    padding: 0;\r\n    /* 3 */\r\n    white-space: normal;\r\n    /* 1 */\r\n}\r\n\r\n/**\r\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n   */\r\n\r\nprogress {\r\n    vertical-align: baseline;\r\n}\r\n\r\n/**\r\n   * Remove the default vertical scrollbar in IE 10+.\r\n   */\r\n\r\ntextarea {\r\n    overflow: auto;\r\n}\r\n\r\n/**\r\n   * 1. Add the correct box sizing in IE 10.\r\n   * 2. Remove the padding in IE 10.\r\n   */\r\n\r\n[type='checkbox'],\r\n[type='radio'] {\r\n    box-sizing: border-box;\r\n    /* 1 */\r\n    padding: 4px;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n   * Correct the cursor style of increment and decrement buttons in Chrome.\r\n   */\r\n\r\n[type='number']::-webkit-inner-spin-button,\r\n[type='number']::-webkit-outer-spin-button {\r\n    height: auto;\r\n}\r\n\r\n/**\r\n   * 1. Correct the odd appearance in Chrome and Safari.\r\n   * 2. Correct the outline style in Safari.\r\n   */\r\n\r\n[type='search'] {\r\n    -webkit-appearance: textfield;\r\n    /* 1 */\r\n    outline-offset: -2px;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n   * Remove the inner padding in Chrome and Safari on macOS.\r\n   */\r\n\r\n[type='search']::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n   * 1. Correct the inability to style clickable types in iOS and Safari.\r\n   * 2. Change font properties to `inherit` in Safari.\r\n   */\r\n\r\n::-webkit-file-upload-button {\r\n    -webkit-appearance: button;\r\n    /* 1 */\r\n    font: inherit;\r\n    /* 2 */\r\n}\r\n\r\n/* Interactive\r\n     ========================================================================== */\r\n\r\n/*\r\n   * Add the correct display in Edge, IE 10+, and Firefox.\r\n   */\r\n\r\ndetails {\r\n    display: block;\r\n}\r\n\r\n/*\r\n   * Add the correct display in all browsers.\r\n   */\r\n\r\nsummary {\r\n    display: list-item;\r\n}\r\n\r\n/* Misc\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Add the correct display in IE 10+.\r\n   */\r\n\r\ntemplate {\r\n    display: none;\r\n}\r\n\r\n/**\r\n   * Add the correct display in IE 10.\r\n   */\r\n\r\n[hidden] {\r\n    display: none;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;IACI,iBAAiB;IACjB,MAAM;IACN,8BAA8B;IAC9B,MAAM;AACV;;AAEA,wCAAwC;AACxC;IACI,sBAAsB;AAC1B;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;IACI,SAAS;AACb;;AAEA;;IAEI;;AAEJ;IACI,cAAc;AAClB;;AAEA;;;IAGI;;AAEJ;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;iFACiF;;AAEjF;;;IAGI;;AAEJ;IACI,uBAAuB;IACvB,MAAM;IACN,SAAS;IACT,MAAM;IACN,iBAAiB;IACjB,MAAM;AACV;;AAEA;;;IAGI;;AAEJ;IACI,iCAAiC;IACjC,MAAM;IACN,cAAc;IACd,MAAM;AACV;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;IACI,6BAA6B;AACjC;;AAEA;;;IAGI;;AAEJ;IACI,mBAAmB;IACnB,MAAM;IACN,0BAA0B;IAC1B,MAAM;IACN,iCAAiC;IACjC,MAAM;AACV;;AAEA;;IAEI;;AAEJ;;IAEI,mBAAmB;AACvB;;AAEA;;;IAGI;;AAEJ;;;IAGI,iCAAiC;IACjC,MAAM;IACN,cAAc;IACd,MAAM;AACV;;AAEA;;IAEI;;AAEJ;IACI,cAAc;AAClB;;AAEA;;;IAGI;;AAEJ;;IAEI,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;IACI,kBAAkB;AACtB;;AAEA;iFACiF;;AAEjF;;;IAGI;;AAEJ;IACI,wBAAwB;AAC5B;;AAEA;;;;;IAKI,oBAAoB;IACpB,MAAM;IACN,eAAe;IACf,MAAM;IACN,iBAAiB;IACjB,MAAM;IACN,SAAS;IACT,MAAM;IACN,UAAU;IACV,sBAAsB;AAC1B;;AAEA,6CAA6C;AAC7C;;IAEI,gBAAgB;IAChB,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,WAAW;IACX,uBAAuB;IACvB,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,2BAA2B;IAC3B,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb;kBACc;AAClB;;AAEA,sDAAsD;AACtD;IACI,gBAAgB;AACpB;;AAEA;mHACmH;AACnH;IACI,aAAa;AACjB;;AAEA;;;IAGI;;AAEJ;;IAEI,MAAM;IACN,iBAAiB;AACrB;;AAEA;;;IAGI;;AAEJ;;IAEI,MAAM;IACN,oBAAoB;AACxB;;AAEA;;IAEI;;AAEJ;;;;IAII,0BAA0B;AAC9B;;AAEA;;IAEI;;AAEJ;;;;IAII,kBAAkB;IAClB,UAAU;AACd;;AAEA;;IAEI;;AAEJ;;;;IAII,8BAA8B;AAClC;;AAEA;;IAEI;;AAEJ;IACI,8BAA8B;AAClC;;AAEA;;;;;IAKI;;AAEJ;IACI,sBAAsB;IACtB,MAAM;IACN,cAAc;IACd,MAAM;IACN,cAAc;IACd,MAAM;IACN,eAAe;IACf,MAAM;IACN,UAAU;IACV,MAAM;IACN,mBAAmB;IACnB,MAAM;AACV;;AAEA;;IAEI;;AAEJ;IACI,wBAAwB;AAC5B;;AAEA;;IAEI;;AAEJ;IACI,cAAc;AAClB;;AAEA;;;IAGI;;AAEJ;;IAEI,sBAAsB;IACtB,MAAM;IACN,YAAY;IACZ,MAAM;AACV;;AAEA;;IAEI;;AAEJ;;IAEI,YAAY;AAChB;;AAEA;;;IAGI;;AAEJ;IACI,6BAA6B;IAC7B,MAAM;IACN,oBAAoB;IACpB,MAAM;AACV;;AAEA;;IAEI;;AAEJ;IACI,wBAAwB;AAC5B;;AAEA;;;IAGI;;AAEJ;IACI,0BAA0B;IAC1B,MAAM;IACN,aAAa;IACb,MAAM;AACV;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;IACI,cAAc;AAClB;;AAEA;;IAEI;;AAEJ;IACI,kBAAkB;AACtB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;IACI,aAAa;AACjB;;AAEA;;IAEI;;AAEJ;IACI,aAAa;AACjB","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n    line-height: 1.15;\r\n    /* 1 */\r\n    -webkit-text-size-adjust: 100%;\r\n    /* 2 */\r\n}\r\n\r\n/* Apply border box to entire document */\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Sections\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the margin in all browsers.\r\n   */\r\n\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\n/**\r\n   * Render the `main` element consistently in IE.\r\n   */\r\n\r\nmain {\r\n    display: block;\r\n}\r\n\r\n/**\r\n   * Correct the font size and margin on `h1` elements within `section` and\r\n   * `article` contexts in Chrome, Firefox, and Safari.\r\n   */\r\n\r\nh1 {\r\n    font-size: 2em;\r\n    margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n     ========================================================================== */\r\n\r\n/**\r\n   * 1. Add the correct box sizing in Firefox.\r\n   * 2. Show the overflow in Edge and IE.\r\n   */\r\n\r\nhr {\r\n    box-sizing: content-box;\r\n    /* 1 */\r\n    height: 0;\r\n    /* 1 */\r\n    overflow: visible;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n\r\npre {\r\n    font-family: monospace, monospace;\r\n    /* 1 */\r\n    font-size: 1em;\r\n    /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the gray background on active links in IE 10.\r\n   */\r\n\r\na {\r\n    background-color: transparent;\r\n}\r\n\r\n/**\r\n   * 1. Remove the bottom border in Chrome 57-\r\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n   */\r\n\r\nabbr[title] {\r\n    border-bottom: none;\r\n    /* 1 */\r\n    text-decoration: underline;\r\n    /* 2 */\r\n    text-decoration: underline dotted;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n   * Add the correct font weight in Chrome, Edge, and Safari.\r\n   */\r\n\r\nb,\r\nstrong {\r\n    font-weight: bolder;\r\n}\r\n\r\n/**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n    font-family: monospace, monospace;\r\n    /* 1 */\r\n    font-size: 1em;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n   * Add the correct font size in all browsers.\r\n   */\r\n\r\nsmall {\r\n    font-size: 80%;\r\n}\r\n\r\n/**\r\n   * Prevent `sub` and `sup` elements from affecting the line height in\r\n   * all browsers.\r\n   */\r\n\r\nsub,\r\nsup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n    bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n    top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Remove the border on images inside links in IE 10.\r\n   */\r\n\r\nimg {\r\n    border-style: none;\r\n}\r\n\r\n/* Forms\r\n     ========================================================================== */\r\n\r\n/**\r\n   * 1. Change the font styles in all browsers.\r\n   * 2. Remove the margin in Firefox and Safari.\r\n   */\r\n\r\ninput {\r\n    -webkit-appearance: none;\r\n}\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n    font-family: inherit;\r\n    /* 1 */\r\n    font-size: 100%;\r\n    /* 1 */\r\n    line-height: 1.15;\r\n    /* 1 */\r\n    margin: 0;\r\n    /* 2 */\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Give input and text area consistent look */\r\ninput,\r\ntextarea {\r\n    background: none;\r\n    border: 1px solid grey;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    padding: 4px;\r\n}\r\n\r\ntextarea {\r\n    display: block;\r\n    padding: 10px;\r\n    margin: 10px 0 0 -10px;\r\n    width: 100%;\r\n    height: 90%;\r\n    border-right: 1px solid;\r\n    resize: none;\r\n    overflow: auto;\r\n}\r\n\r\nbutton {\r\n    padding: 5px;\r\n    font: bold 0.6em sans-serif;\r\n    border: 1px solid #333;\r\n    border-radius: 5px;\r\n    background: none;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton:hover,\r\nbutton:focus {\r\n    outline: none;\r\n    /* background: #000;\r\n    color: #fff; */\r\n}\r\n\r\n/* Gets rid of default search to remove restrictions */\r\ninput[type='search'] {\r\n    appearance: none;\r\n}\r\n\r\n/* Fix for inconsistent display of clear \"x\" icon in search inputs across different browsers. \r\n  , this code removes the icon in Edge and Chrome when the input loses focus, while keeping it visible in Safari. */\r\ninput[type='search']:not(:focus, :active)::-webkit-search-cancel-button {\r\n    display: none;\r\n}\r\n\r\n/**\r\n   * Show the overflow in IE.\r\n   * 1. Show the overflow in Edge.\r\n   */\r\n\r\nbutton,\r\ninput {\r\n    /* 1 */\r\n    overflow: visible;\r\n}\r\n\r\n/**\r\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n   * 1. Remove the inheritance of text transform in Firefox.\r\n   */\r\n\r\nbutton,\r\nselect {\r\n    /* 1 */\r\n    text-transform: none;\r\n}\r\n\r\n/**\r\n   * Correct the inability to style clickable types in iOS and Safari.\r\n   */\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n    -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n   * Remove the inner border and padding in Firefox.\r\n   */\r\n\r\n::-moz-focus-inner,\r\n[type='button']::-moz-focus-inner,\r\n[type='reset']::-moz-focus-inner,\r\n[type='submit']::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0;\r\n}\r\n\r\n/**\r\n   * Restore the focus styles unset by the previous rule.\r\n   */\r\n\r\nbutton:-moz-focusring,\r\n[type='button']:-moz-focusring,\r\n[type='reset']:-moz-focusring,\r\n[type='submit']:-moz-focusring {\r\n    outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n   * Correct the padding in Firefox.\r\n   */\r\n\r\nfieldset {\r\n    padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n   * 1. Correct the text wrapping in Edge and IE.\r\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n   * 3. Remove the padding so developers are not caught out when they zero out\r\n   *    `fieldset` elements in all browsers.\r\n   */\r\n\r\nlegend {\r\n    box-sizing: border-box;\r\n    /* 1 */\r\n    color: inherit;\r\n    /* 2 */\r\n    display: table;\r\n    /* 1 */\r\n    max-width: 100%;\r\n    /* 1 */\r\n    padding: 0;\r\n    /* 3 */\r\n    white-space: normal;\r\n    /* 1 */\r\n}\r\n\r\n/**\r\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n   */\r\n\r\nprogress {\r\n    vertical-align: baseline;\r\n}\r\n\r\n/**\r\n   * Remove the default vertical scrollbar in IE 10+.\r\n   */\r\n\r\ntextarea {\r\n    overflow: auto;\r\n}\r\n\r\n/**\r\n   * 1. Add the correct box sizing in IE 10.\r\n   * 2. Remove the padding in IE 10.\r\n   */\r\n\r\n[type='checkbox'],\r\n[type='radio'] {\r\n    box-sizing: border-box;\r\n    /* 1 */\r\n    padding: 4px;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n   * Correct the cursor style of increment and decrement buttons in Chrome.\r\n   */\r\n\r\n[type='number']::-webkit-inner-spin-button,\r\n[type='number']::-webkit-outer-spin-button {\r\n    height: auto;\r\n}\r\n\r\n/**\r\n   * 1. Correct the odd appearance in Chrome and Safari.\r\n   * 2. Correct the outline style in Safari.\r\n   */\r\n\r\n[type='search'] {\r\n    -webkit-appearance: textfield;\r\n    /* 1 */\r\n    outline-offset: -2px;\r\n    /* 2 */\r\n}\r\n\r\n/**\r\n   * Remove the inner padding in Chrome and Safari on macOS.\r\n   */\r\n\r\n[type='search']::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n   * 1. Correct the inability to style clickable types in iOS and Safari.\r\n   * 2. Change font properties to `inherit` in Safari.\r\n   */\r\n\r\n::-webkit-file-upload-button {\r\n    -webkit-appearance: button;\r\n    /* 1 */\r\n    font: inherit;\r\n    /* 2 */\r\n}\r\n\r\n/* Interactive\r\n     ========================================================================== */\r\n\r\n/*\r\n   * Add the correct display in Edge, IE 10+, and Firefox.\r\n   */\r\n\r\ndetails {\r\n    display: block;\r\n}\r\n\r\n/*\r\n   * Add the correct display in all browsers.\r\n   */\r\n\r\nsummary {\r\n    display: list-item;\r\n}\r\n\r\n/* Misc\r\n     ========================================================================== */\r\n\r\n/**\r\n   * Add the correct display in IE 10+.\r\n   */\r\n\r\ntemplate {\r\n    display: none;\r\n}\r\n\r\n/**\r\n   * Add the correct display in IE 10.\r\n   */\r\n\r\n[hidden] {\r\n    display: none;\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n    width: 100vw;\r\n    overflow-x: hidden;\r\n}\r\n\r\nheader {\r\n    background-color: darkblue;\r\n    color: rgb(236, 236, 236);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100vw;\r\n    height: 80px;\r\n}\r\n\r\n.headerContainer {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex: 1;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n}\r\n\r\n.topBarContainer {\r\n    outline: 1px solid black;\r\n    width: 75vw;\r\n    height: 80px;\r\n    margin-top: 24px;\r\n    display: flex;\r\n    gap: 10%;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.topBarContainer p {\r\n    align-items: center;\r\n}\r\n\r\nbutton.shipCell {\r\n    background-color: grey;\r\n}\r\n\r\n#AIBoard button,\r\n#playerBoard button {\r\n    border-radius: 0;\r\n}\r\n\r\n.playerBoardContainer,\r\n.aiBoardContainer {\r\n    display: grid;\r\n}\r\n\r\n#boardsContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 12px;\r\n    outline: 1px solid black;\r\n    padding: 12px;\r\n    display: grid;\r\n    grid-template-rows: none;\r\n    grid-template-columns: repeat(auto-fit, minmax(330px, 38vw));\r\n    width: 83vw;\r\n    margin-bottom: 14px;\r\n}\r\n\r\n.orientationToggleBtn {\r\n    background-color: #333;\r\n    color: white;\r\n    border-radius: 8px;\r\n    height: 70%;\r\n    width: 100px;\r\n    font-size: 1rem;\r\n}\r\n\r\n#boardsContainer p {\r\n    justify-self: center;\r\n}\r\n\r\n#playerBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    /* grid-template-rows: 1fr; */\r\n    height: 65vh;\r\n}\r\n\r\n#AIBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    /* grid-template-rows: 1fr; */\r\n    height: 65vh;\r\n}\r\n\r\n/* button.boardCell {\r\n    border: 1px solid black;\r\n    border-radius: 0px;\r\n} */\r\n\r\nbutton.shipCell {\r\n    background-color: grey;\r\n    border: 1px solid black;\r\n}\r\n\r\nbutton.shipHit {\r\n    background-color: rgb(22, 94, 22);\r\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;IAC1B,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,OAAO;IACP,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,wBAAwB;IACxB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,QAAQ;IACR,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,wBAAwB;IACxB,aAAa;IACb,aAAa;IACb,wBAAwB;IACxB,4DAA4D;IAC5D,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;;;GAGG;;AAEH;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,iCAAiC;AACrC","sourcesContent":["body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n    width: 100vw;\r\n    overflow-x: hidden;\r\n}\r\n\r\nheader {\r\n    background-color: darkblue;\r\n    color: rgb(236, 236, 236);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100vw;\r\n    height: 80px;\r\n}\r\n\r\n.headerContainer {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex: 1;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n}\r\n\r\n.topBarContainer {\r\n    outline: 1px solid black;\r\n    width: 75vw;\r\n    height: 80px;\r\n    margin-top: 24px;\r\n    display: flex;\r\n    gap: 10%;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.topBarContainer p {\r\n    align-items: center;\r\n}\r\n\r\nbutton.shipCell {\r\n    background-color: grey;\r\n}\r\n\r\n#AIBoard button,\r\n#playerBoard button {\r\n    border-radius: 0;\r\n}\r\n\r\n.playerBoardContainer,\r\n.aiBoardContainer {\r\n    display: grid;\r\n}\r\n\r\n#boardsContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 12px;\r\n    outline: 1px solid black;\r\n    padding: 12px;\r\n    display: grid;\r\n    grid-template-rows: none;\r\n    grid-template-columns: repeat(auto-fit, minmax(330px, 38vw));\r\n    width: 83vw;\r\n    margin-bottom: 14px;\r\n}\r\n\r\n.orientationToggleBtn {\r\n    background-color: #333;\r\n    color: white;\r\n    border-radius: 8px;\r\n    height: 70%;\r\n    width: 100px;\r\n    font-size: 1rem;\r\n}\r\n\r\n#boardsContainer p {\r\n    justify-self: center;\r\n}\r\n\r\n#playerBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    /* grid-template-rows: 1fr; */\r\n    height: 65vh;\r\n}\r\n\r\n#AIBoard {\r\n    outline: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    /* grid-template-rows: 1fr; */\r\n    height: 65vh;\r\n}\r\n\r\n/* button.boardCell {\r\n    border: 1px solid black;\r\n    border-radius: 0px;\r\n} */\r\n\r\nbutton.shipCell {\r\n    background-color: grey;\r\n    border: 1px solid black;\r\n}\r\n\r\nbutton.shipHit {\r\n    background-color: rgb(22, 94, 22);\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFVixDQUFDO0FBRUQsTUFBTVIsZUFBZSxHQUFHO0VBQ3RCSSxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxVQUFVLEVBQUUsQ0FDVixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFD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YjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDR3dDO0FBRVQ7QUFDSjtBQUUzQi9RLDRFQUFZLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvY29udHJvbGxlcnMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvY29udHJvbGxlcnMvZ2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvZmFjdG9yaWVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9mYWN0b3JpZXMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2ZhY3Rvcmllcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2hlbHBlcnMvYXJyYXlzQXJlRXF1YWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvaGVscGVycy9kZWxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9oZWxwZXJzL3JvdGF0ZUFJQm9hcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3M/NDNmNCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWxheSB9IGZyb20gJy4uL2hlbHBlcnMvZGVsYXknXHJcbmltcG9ydCB7IGdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9nYW1lQ29udHJvbGxlcidcclxuXHJcbmNvbnN0IGdhbWUgPSBnYW1lQ29udHJvbGxlcigpXHJcblxyXG5jb25zdCBwcmVHYW1lU2V0dXAgPSAoKSA9PiB7XHJcbiAgcmVuZGVyUGxheWVyQm9hcmQoKVxyXG4gIHBsYWNlQ2FycmllclNoaXAoKVxyXG4gIHJlbmRlckFJQm9hcmQoKVxyXG59XHJcbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vIHRoaXMgaXMgd2hlcmUgdGhlIHNoaXAgcGxhY2VtZW50IHdpbGwgaGFwcGVuIGZvciBodW1hbiBwbGF5ZXJcclxuICBjb25zdCB0b3BCYXJDb250YWluZXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxyXG4gIHRvcEJhckNvbnRhaW5lclBhcmEudGV4dENvbnRlbnQgPSAnRW5lbm15IGlzIHBsYWNpbmcgdGhlaXIgc2hpcHMuLi4nXHJcbiAgYXdhaXQgZGVsYXkoMjAwMClcclxuICBnYW1lLnBsYWNlQUlTaGlwcygpXHJcbiAgcmVuZGVyQUlCb2FyZCgpXHJcbiAgdG9wQmFyQ29udGFpbmVyUGFyYS50ZXh0Q29udGVudCA9ICcnXHJcbiAgY29uc3QgYWlCb2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSUJvYXJkJylcclxuICBjb25zdCBwbGF5ZXJzID0gZ2FtZS5nZXRQbGF5ZXJzKClcclxuICBjb25zdCBhY3RpdmVQbGF5ZXIgPSBnYW1lLmdldEN1cnJlbnRQbGF5ZXIoKVxyXG5cclxuICBpZiAoYWN0aXZlUGxheWVyID09PSBwbGF5ZXJzLmh1bWFuKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpLnRleHRDb250ZW50ID1cclxuICAgICAgJ0F0dGFjayB0aGUgZW5lbWllcyBzaGlwcyEnXHJcbiAgICBhaUJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0KVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcGxhY2VDYXJyaWVyU2hpcCA9ICgpID0+IHtcclxuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxyXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBjYXJyaWVyIHNoaXAnXHJcblxyXG4gIGNvbnN0IGh1bWFuQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyQm9hcmQnKVxyXG5cclxuICBjb25zdCBvcmllbnRhdGlvbkJ0blZhbHVlcyA9IGNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuKClcclxuICBsZXQgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzBdXHJcbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBvcmllbnRhdGlvbkJ0blZhbHVlc1sxXVxyXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPT09IHRydWUpIHtcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IGZhbHNlXHJcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcclxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXHJcbiAgaHVtYW5Cb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgJ2NsaWNrJyxcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIGhhbmRsZUNhcnJpZXJTaGlwUGxhY2VtZW50KGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMsIGNvbnRyb2xsZXIpXHJcbiAgICB9LFxyXG4gICAgeyBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsIH1cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHBsYWNlQmF0dGxlU2hpcCA9ICgpID0+IHtcclxuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxyXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBiYXR0bGVzaGlwJ1xyXG5cclxuICBjb25zdCBodW1hbkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckJvYXJkJylcclxuXHJcbiAgY29uc3Qgb3JpZW50YXRpb25CdG5WYWx1ZXMgPSBjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0bigpXHJcbiAgbGV0IGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBvcmllbnRhdGlvbkJ0blZhbHVlc1swXVxyXG4gIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlQnRuID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMV1cclxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID09PSB0cnVlKSB7XHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBmYWxzZVxyXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXHJcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxyXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICdjbGljaycsXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAnT3JpZW50YXRpb24gc3RhdHVzIGdvaW5nIGludG8gcGxhY2VtZW50OicgK1xyXG4gICAgICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1c1xyXG4gICAgICApXHJcbiAgICAgIGhhbmRsZUJhdHRsZVNoaXBQbGFjZW1lbnQoZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cywgY29udHJvbGxlcilcclxuICAgIH0sXHJcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxyXG4gIClcclxufVxyXG5cclxuY29uc3QgcGxhY2VDcnVpc2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIENydWlzZXInXHJcblxyXG4gIGNvbnN0IGh1bWFuQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyQm9hcmQnKVxyXG5cclxuICBjb25zdCBvcmllbnRhdGlvbkJ0blZhbHVlcyA9IGNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuKClcclxuICBsZXQgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzBdXHJcbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBvcmllbnRhdGlvbkJ0blZhbHVlc1sxXVxyXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPT09IHRydWUpIHtcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IGZhbHNlXHJcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcclxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXHJcbiAgaHVtYW5Cb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgJ2NsaWNrJyxcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICdPcmllbnRhdGlvbiBzdGF0dXMgZ29pbmcgaW50byBwbGFjZW1lbnQ6JyArXHJcbiAgICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzXHJcbiAgICAgIClcclxuICAgICAgaGFuZGxlQ3J1aXNlclNoaXBQbGFjZW1lbnQoZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cywgY29udHJvbGxlcilcclxuICAgIH0sXHJcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxyXG4gIClcclxufVxyXG5cclxuY29uc3QgcGxhY2VTdWJtYXJpbmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgU3VibWFyaW5lJ1xyXG5cclxuICBjb25zdCBodW1hbkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckJvYXJkJylcclxuXHJcbiAgY29uc3Qgb3JpZW50YXRpb25CdG5WYWx1ZXMgPSBjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0bigpXHJcbiAgbGV0IGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBvcmllbnRhdGlvbkJ0blZhbHVlc1swXVxyXG4gIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlQnRuID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMV1cclxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID09PSB0cnVlKSB7XHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBmYWxzZVxyXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXHJcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXHJcbiAgICB9XHJcbiAgfSlcclxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXHJcbiAgaHVtYW5Cb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgJ2NsaWNrJyxcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICdPcmllbnRhdGlvbiBzdGF0dXMgZ29pbmcgaW50byBwbGFjZW1lbnQ6JyArXHJcbiAgICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzXHJcbiAgICAgIClcclxuICAgICAgaGFuZGxlU3VibWFyaW5lU2hpcFBsYWNlbWVudChcclxuICAgICAgICBlLFxyXG4gICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMsXHJcbiAgICAgICAgY29udHJvbGxlclxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gICAgeyBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsIH1cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHBsYWNlRGVzdHJveWVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIERlc3Ryb3llcidcclxuXHJcbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXHJcblxyXG4gIGNvbnN0IG9yaWVudGF0aW9uQnRuVmFsdWVzID0gY3JlYXRlT3JpZW50YXRpb25Ub2dnbGVCdG4oKVxyXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMF1cclxuICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZUJ0biA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzFdXHJcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gZmFsc2VcclxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnVmVydGljYWwnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxyXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJ1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcclxuICBodW1hbkJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAnY2xpY2snLFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgJ09yaWVudGF0aW9uIHN0YXR1cyBnb2luZyBpbnRvIHBsYWNlbWVudDonICtcclxuICAgICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXNcclxuICAgICAgKVxyXG4gICAgICBoYW5kbGVEZXN0cm95ZXJTaGlwUGxhY2VtZW50KFxyXG4gICAgICAgIGUsXHJcbiAgICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyxcclxuICAgICAgICBjb250cm9sbGVyXHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxyXG4gIClcclxufVxyXG5cclxuY29uc3QgcmVuZGVyUGxheWVyQm9hcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBnYW1lLmdldEh1bWFuQm9hcmQoKVxyXG4gIGNvbnN0IHBsYXllckJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckJvYXJkJylcclxuICBwbGF5ZXJCb2FyZERpdi5pbm5lckhUTUwgPSAnJ1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckJvYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBjdXJyZW50Um93ID0gcGxheWVyQm9hcmRbaV1cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudFJvdy5sZW5ndGg7IGorKykge1xyXG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYm9hcmRDZWxsJylcclxuICAgICAgYnV0dG9uLmRhdGFzZXQucm93ID0gaVxyXG4gICAgICBidXR0b24uZGF0YXNldC5jb2x1bW4gPSBqXHJcblxyXG4gICAgICBwbGF5ZXJCb2FyZERpdi5hcHBlbmRDaGlsZChidXR0b24pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZW5kZXJBSUJvYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFpQm9hcmQgPSBnYW1lLmdldEFJQm9hcmQoKVxyXG4gIGNvbnN0IGFpQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlCb2FyZCcpXHJcbiAgYWlCb2FyZERpdi5pbm5lckhUTUwgPSAnJ1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFpQm9hcmQubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGN1cnJlbnRSb3cgPSBhaUJvYXJkW2ldXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRSb3cubGVuZ3RoOyBqKyspIHtcclxuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JvYXJkQ2VsbCcpXHJcbiAgICAgIGJ1dHRvbi5kYXRhc2V0LnJvdyA9IGlcclxuICAgICAgYnV0dG9uLmRhdGFzZXQuY29sdW1uID0galxyXG4gICAgICBjb25zdCByb3cgPSBhaUJvYXJkW2ldXHJcbiAgICAgIC8vIGZvciB0ZXN0aW5nLCB0aGlzIHNob3dzIEFJIGJvYXJkIGF0IHN0YXJ0XHJcbiAgICAgIC8vIHdoaWNoIHdlIGRvIG5vdCB3YW50XHJcbiAgICAgIGlmICh0eXBlb2Ygcm93W2pdID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzaGlwQ2VsbCcpXHJcbiAgICAgIH1cclxuICAgICAgYWlCb2FyZERpdi5hcHBlbmRDaGlsZChidXR0b24pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB1cGRhdGVIdW1hbkJvYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGh1bWFuQm9hcmQgPSBnYW1lLmdldEh1bWFuQm9hcmQoKVxyXG4gIGNvbnN0IG1pc3NlZFNob3RzID0gZ2FtZS5nZXRIdW1hbkJvYXJkT2JqLmdldE1pc3NlZFNob3RzKClcclxuICBjb25zdCBzdWNjZXNzZnVsU2hvdHMgPSBnYW1lLmdldEh1bWFuQm9hcmRPYmouZ2V0U3VjY2Vzc2Z1bFNob3RzKClcclxuICBjb25zdCBhbGxEb21Ob2RlcyA9IEFycmF5LmZyb20oXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyQm9hcmQnKS5jaGlsZE5vZGVzXHJcbiAgKVxyXG5cclxuICBtaXNzZWRTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XHJcbiAgICBjb25zdCByb3cgPSBzaG90WzBdXHJcbiAgICBjb25zdCBjb2x1bW4gPSBzaG90WzFdXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEb21Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCB0YXJnZXROb2RlID0gYWxsRG9tTm9kZXNbaV0uZGF0YXNldFxyXG4gICAgICBpZiAoK3RhcmdldE5vZGUuY29sdW1uID09PSBjb2x1bW4gJiYgK3RhcmdldE5vZGUucm93ID09PSByb3cpIHtcclxuICAgICAgICBhbGxEb21Ob2Rlc1tpXS50ZXh0Q29udGVudCA9ICdYJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgc3VjY2Vzc2Z1bFNob3RzLmZvckVhY2goKHNob3QpID0+IHtcclxuICAgIGNvbnN0IHJvdyA9IHNob3RbMF1cclxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERvbU5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgK3RhcmdldE5vZGUuZGF0YXNldC5jb2x1bW4gPT09IGNvbHVtbiAmJlxyXG4gICAgICAgICt0YXJnZXROb2RlLmRhdGFzZXQucm93ID09PSByb3dcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGFyZ2V0Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwQ2VsbCcpXHJcbiAgICAgICAgdGFyZ2V0Tm9kZS5jbGFzc0xpc3QuYWRkKCdzaGlwSGl0JylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IHVwZGF0ZUFJQm9hcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWlCb2FyZCA9IGdhbWUuZ2V0QUlCb2FyZCgpXHJcbiAgY29uc3QgbWlzc2VkU2hvdHMgPSBnYW1lLmdldEFJQm9hcmRPYmouZ2V0TWlzc2VkU2hvdHMoKVxyXG4gIGNvbnN0IHN1Y2Nlc3NmdWxTaG90cyA9IGdhbWUuZ2V0QUlCb2FyZE9iai5nZXRTdWNjZXNzZnVsU2hvdHMoKVxyXG4gIGNvbnN0IGFsbERvbU5vZGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlCb2FyZCcpLmNoaWxkTm9kZXMpXHJcblxyXG4gIG1pc3NlZFNob3RzLmZvckVhY2goKHNob3QpID0+IHtcclxuICAgIGNvbnN0IHJvdyA9IHNob3RbMF1cclxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERvbU5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXS5kYXRhc2V0XHJcbiAgICAgIGlmICh0YXJnZXROb2RlLmNvbHVtbiA9PT0gY29sdW1uICYmIHRhcmdldE5vZGUucm93ID09PSByb3cpIHtcclxuICAgICAgICBhbGxEb21Ob2Rlc1tpXS50ZXh0Q29udGVudCA9ICdYJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgc3VjY2Vzc2Z1bFNob3RzLmZvckVhY2goKHNob3QpID0+IHtcclxuICAgIGNvbnN0IHJvdyA9IHNob3RbMF1cclxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERvbU5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGFyZ2V0Tm9kZS5kYXRhc2V0LmNvbHVtbiA9PT0gY29sdW1uICYmXHJcbiAgICAgICAgdGFyZ2V0Tm9kZS5kYXRhc2V0LnJvdyA9PT0gcm93XHJcbiAgICAgICkge1xyXG4gICAgICAgIHRhcmdldE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcENlbGwnKVxyXG4gICAgICAgIHRhcmdldE5vZGUuY2xhc3NMaXN0LmFkZCgnc2hpcEhpdCcpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVDYXJyaWVyU2hpcFBsYWNlbWVudCA9IChcclxuICBlLFxyXG4gIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXHJcbiAgY29udHJvbGxlclxyXG4pID0+IHtcclxuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XHJcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxyXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxyXG5cclxuICBjb25zdCBjYXJyaWVyUGxhY2VkID0gcGxhY2VDYXJyaWVyT25Cb2FyZChcclxuICAgIGNvb3JkaW5hdGUsXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXHJcbiAgKVxyXG5cclxuICBpZiAoY2FycmllclBsYWNlZCkge1xyXG4gICAgY29udHJvbGxlci5hYm9ydCgpXHJcbiAgICByZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuKClcclxuICAgIHBsYWNlQmF0dGxlU2hpcCgpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBwbGFjZUNhcnJpZXJTaGlwXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVCYXR0bGVTaGlwUGxhY2VtZW50ID0gKFxyXG4gIGUsXHJcbiAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICBjb250cm9sbGVyXHJcbikgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcclxuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXHJcbiAgY29uc3QgY29vcmRpbmF0ZSA9IFtzZWxlY3RlZFJvdywgc2VsZWN0ZWRDb2x1bW5dXHJcblxyXG4gIGNvbnN0IGJhdHRsZXNoaXBQbGFjZWQgPSBwbGFjZUJhdHRsZXNoaXBPbkJvYXJkKFxyXG4gICAgY29vcmRpbmF0ZSxcclxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cclxuICApXHJcblxyXG4gIGlmIChiYXR0bGVzaGlwUGxhY2VkKSB7XHJcbiAgICBjb250cm9sbGVyLmFib3J0KClcclxuICAgIHJlbW92ZVByZXZpb3VzT3JpZW50YXRpb25CdG4oKVxyXG4gICAgcGxhY2VDcnVpc2VyKClcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHBsYWNlQmF0dGxlU2hpcFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaGFuZGxlQ3J1aXNlclNoaXBQbGFjZW1lbnQgPSAoXHJcbiAgZSxcclxuICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxyXG4gIGNvbnRyb2xsZXJcclxuKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xyXG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cclxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cclxuXHJcbiAgY29uc3QgY3J1aXNlclBsYWNlZCA9IHBsYWNlQ3J1aXNlck9uQm9hcmQoXHJcbiAgICBjb29yZGluYXRlLFxyXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxyXG4gIClcclxuXHJcbiAgaWYgKGNydWlzZXJQbGFjZWQpIHtcclxuICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxyXG4gICAgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0bigpXHJcbiAgICBwbGFjZVN1Ym1hcmluZSgpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBwbGFjZUNydWlzZXJcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZVN1Ym1hcmluZVNoaXBQbGFjZW1lbnQgPSAoXHJcbiAgZSxcclxuICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxyXG4gIGNvbnRyb2xsZXJcclxuKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xyXG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cclxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cclxuXHJcbiAgY29uc3Qgc3VibWFyaW5lUGxhY2VkID0gcGxhY2VTdWJtYXJpbmVPbkJvYXJkKFxyXG4gICAgY29vcmRpbmF0ZSxcclxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cclxuICApXHJcblxyXG4gIGlmIChzdWJtYXJpbmVQbGFjZWQpIHtcclxuICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxyXG4gICAgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0bigpXHJcbiAgICBwbGFjZURlc3Ryb3llcigpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBwbGFjZVN1Ym1hcmluZVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaGFuZGxlRGVzdHJveWVyU2hpcFBsYWNlbWVudCA9IChcclxuICBlLFxyXG4gIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXHJcbiAgY29udHJvbGxlclxyXG4pID0+IHtcclxuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XHJcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxyXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxyXG4gIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcblxyXG4gIGNvbnN0IGRlc3Ryb3llclBsYWNlZCA9IHBsYWNlRGVzdHJveWVyT25Cb2FyZChcclxuICAgIGNvb3JkaW5hdGUsXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXHJcbiAgKVxyXG5cclxuICBpZiAoZGVzdHJveWVyUGxhY2VkKSB7XHJcbiAgICBjb250cm9sbGVyLmFib3J0KClcclxuICAgIHRvcEJhckNvbnRhaW5lclBhcmEudGV4dENvbnRlbnQgPSAnJ1xyXG4gICAgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0bigpXHJcbiAgICBkaXNwbGF5Q29udHJvbGxlcigpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBwbGFjZURlc3Ryb3llclxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcGxhY2VDYXJyaWVyT25Cb2FyZCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XHJcbiAgY29uc3Qgc2hpcFR5cGUgPSAnY2FycmllcidcclxuICBjb25zdCBjYXJyaWVyUGxhY2VkID0gZ2FtZS5wbGFjZUNhcnJpZXJTaGlwKFxyXG4gICAgY29vcmRpbmF0ZSxcclxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cclxuICApXHJcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcclxuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXHJcbiAgXVxyXG4gIGlmICghY2FycmllclBsYWNlZCkge1xyXG4gICAgcmV0dXJuIGNhcnJpZXJQbGFjZWRcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZ2V0SG9yaXpvbnRhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZ2V0VmVydGljYWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBjYXJyaWVyUGxhY2VkXHJcbn1cclxuXHJcbmNvbnN0IHBsYWNlQmF0dGxlc2hpcE9uQm9hcmQgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xyXG4gIGNvbnN0IHNoaXBUeXBlID0gJ2JhdHRsZXNoaXAnXHJcbiAgY29uc3QgYmF0dGxlc2hpcFBsYWNlZCA9IGdhbWUucGxhY2VCYXR0bGVTaGlwKFxyXG4gICAgY29vcmRpbmF0ZSxcclxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cclxuICApXHJcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcclxuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXHJcbiAgXVxyXG4gIGlmICghYmF0dGxlc2hpcFBsYWNlZCkge1xyXG4gICAgcmV0dXJuIGJhdHRsZXNoaXBQbGFjZWRcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZ2V0SG9yaXpvbnRhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZ2V0VmVydGljYWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBiYXR0bGVzaGlwUGxhY2VkXHJcbn1cclxuXHJcbmNvbnN0IHBsYWNlQ3J1aXNlck9uQm9hcmQgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xyXG4gIGNvbnN0IHNoaXBUeXBlID0gJ2NydWlzZXInXHJcbiAgY29uc3QgY3J1aXNlclBsYWNlZCA9IGdhbWUucGxhY2VDcnVpc2VyU2hpcChcclxuICAgIGNvb3JkaW5hdGUsXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXHJcbiAgKVxyXG4gIGNvbnN0IGJvYXJkRE9NQ2VsbHNBcnIgPSBbXHJcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxyXG4gIF1cclxuICBpZiAoIWNydWlzZXJQbGFjZWQpIHtcclxuICAgIHJldHVybiBjcnVpc2VyUGxhY2VkXHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGdldEhvcml6b250YWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXHJcbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGdldFZlcnRpY2FsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gY3J1aXNlclBsYWNlZFxyXG59XHJcblxyXG5jb25zdCBwbGFjZVN1Ym1hcmluZU9uQm9hcmQgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xyXG4gIGNvbnN0IHNoaXBUeXBlID0gJ3N1Ym1hcmluZSdcclxuICBjb25zdCBzdWJtYXJpbmVQbGFjZWQgPSBnYW1lLnBsYWNlU3VibWFyaW5lU2hpcChcclxuICAgIGNvb3JkaW5hdGUsXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXHJcbiAgKVxyXG4gIGNvbnN0IGJvYXJkRE9NQ2VsbHNBcnIgPSBbXHJcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxyXG4gIF1cclxuICBpZiAoIXN1Ym1hcmluZVBsYWNlZCkge1xyXG4gICAgcmV0dXJuIHN1Ym1hcmluZVBsYWNlZFxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxyXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBnZXRWZXJ0aWNhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHN1Ym1hcmluZVBsYWNlZFxyXG59XHJcblxyXG5jb25zdCBwbGFjZURlc3Ryb3llck9uQm9hcmQgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xyXG4gIGNvbnN0IHNoaXBUeXBlID0gJ2Rlc3Ryb3llcidcclxuICBjb25zdCBkZXN0cm95ZXJQbGFjZWQgPSBnYW1lLnBsYWNlRGVzdHJveWVyU2hpcChcclxuICAgIGNvb3JkaW5hdGUsXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXHJcbiAgKVxyXG4gIGNvbnN0IGJvYXJkRE9NQ2VsbHNBcnIgPSBbXHJcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxyXG4gIF1cclxuICBpZiAoIWRlc3Ryb3llclBsYWNlZCkge1xyXG4gICAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxyXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBnZXRWZXJ0aWNhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxyXG59XHJcblxyXG5jb25zdCBnZXRIb3Jpem9udGFsRE9NQ29vcmRzID0gKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKSA9PiB7XHJcbiAgY29uc3Qgc3RhcnRpbmdDb2x1bW4gPSBOdW1iZXIoY29vcmRpbmF0ZVsxXSlcclxuICBjb25zdCBzaGlwTGVuZ3RoID1cclxuICAgIHNoaXBUeXBlID09PSAnY2FycmllcidcclxuICAgICAgPyA1XHJcbiAgICAgIDogc2hpcFR5cGUgPT09ICdiYXR0bGVzaGlwJ1xyXG4gICAgICA/IDRcclxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2NydWlzZXInXHJcbiAgICAgID8gM1xyXG4gICAgICA6IHNoaXBUeXBlID09PSAnc3VibWFyaW5lJ1xyXG4gICAgICA/IDNcclxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2Rlc3Ryb3llcidcclxuICAgICAgPyAyXHJcbiAgICAgIDogbnVsbFxyXG5cclxuICBmb3IgKGxldCBpID0gc3RhcnRpbmdDb2x1bW47IGkgPCBzdGFydGluZ0NvbHVtbiArIHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qgcm93ID0gK2Nvb3JkaW5hdGVbMF1cclxuICAgIGNvbnN0IGNvbHVtbiA9IGlcclxuICAgIGNvbnN0IGRvbUNvb3JkaW5hdGUgPSBbcm93LCBjb2x1bW5dXHJcbiAgICBjb25zdCB0YXJnZXRET01CdG4gPSBmaW5kU2hpcERPTUJ0bihib2FyZERPTUNlbGxzQXJyLCBkb21Db29yZGluYXRlKVxyXG4gICAgdGFyZ2V0RE9NQnRuLmNsYXNzTGlzdC5hZGQoJ3NoaXBDZWxsJylcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldFZlcnRpY2FsRE9NQ29vcmRzID0gKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKSA9PiB7XHJcbiAgY29uc3Qgc3RhcnRpbmdSb3cgPSBOdW1iZXIoY29vcmRpbmF0ZVswXSlcclxuICBjb25zdCBzaGlwTGVuZ3RoID1cclxuICAgIHNoaXBUeXBlID09PSAnY2FycmllcidcclxuICAgICAgPyA1XHJcbiAgICAgIDogc2hpcFR5cGUgPT09ICdiYXR0bGVzaGlwJ1xyXG4gICAgICA/IDRcclxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2NydWlzZXInXHJcbiAgICAgID8gM1xyXG4gICAgICA6IHNoaXBUeXBlID09PSAnc3VibWFyaW5lJ1xyXG4gICAgICA/IDNcclxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2Rlc3Ryb3llcidcclxuICAgICAgPyAyXHJcbiAgICAgIDogbnVsbFxyXG5cclxuICBmb3IgKGxldCBpID0gc3RhcnRpbmdSb3c7IGkgPiBzdGFydGluZ1JvdyAtIHNoaXBMZW5ndGg7IGktLSkge1xyXG4gICAgY29uc3Qgcm93ID0gaVxyXG4gICAgY29uc3QgY29sdW1uID0gK2Nvb3JkaW5hdGVbMV1cclxuICAgIGNvbnN0IGRvbUNvb3JkaW5hdGUgPSBbcm93LCBjb2x1bW5dXHJcbiAgICBjb25zdCB0YXJnZXRET01CdG4gPSBmaW5kU2hpcERPTUJ0bihib2FyZERPTUNlbGxzQXJyLCBkb21Db29yZGluYXRlKVxyXG4gICAgdGFyZ2V0RE9NQnRuLmNsYXNzTGlzdC5hZGQoJ3NoaXBDZWxsJylcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGZpbmRTaGlwRE9NQnRuID0gKGJvYXJkRE9NQ2VsbHNBcnIsIGRvbUNvb3JkaW5hdGUpID0+IHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkRE9NQ2VsbHNBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGRvbUNlbGxSb3cgPSArYm9hcmRET01DZWxsc0FycltpXS5kYXRhc2V0LnJvd1xyXG4gICAgY29uc3QgZG9tQ2VsbENvbHVtbiA9ICtib2FyZERPTUNlbGxzQXJyW2ldLmRhdGFzZXQuY29sdW1uXHJcbiAgICBpZiAoZG9tQ2VsbFJvdyA9PT0gZG9tQ29vcmRpbmF0ZVswXSAmJiBkb21DZWxsQ29sdW1uID09PSBkb21Db29yZGluYXRlWzFdKSB7XHJcbiAgICAgIHJldHVybiBib2FyZERPTUNlbGxzQXJyW2ldXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnQgPSAoZSkgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcclxuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXHJcbiAgY29uc3QgYWlCb2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSUJvYXJkJylcclxuXHJcbiAgaWYgKCFzZWxlY3RlZENvbHVtbiB8fCAhc2VsZWN0ZWRSb3cpIHtcclxuICAgIHJldHVybiBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnRcclxuICB9XHJcblxyXG4gIGNvbnN0IGFpQm9hcmQgPSBnYW1lLmdldEFJQm9hcmRPYmpcclxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cclxuICBjb25zdCBhbHJlYWR5QXR0YWNrZWQgPSBhaUJvYXJkLnByZXZlbnRTYW1lQXR0YWNrKGNvb3JkaW5hdGUpXHJcbiAgaWYgKGFscmVhZHlBdHRhY2tlZCkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpLnRleHRDb250ZW50ID1cclxuICAgICdBdHRhY2sgdGhlIGVuZW1pZXMgc2hpcHMuLi4nXHJcbiAgZ2FtZS5wbGF5Um91bmQoY29vcmRpbmF0ZSlcclxuICBjb25zdCBodW1hbk1vdmVTdWNjZXNzZnVsID0gZ2FtZS5nZXRBSUJvYXJkT2JqLmdldExhc3RIdW1hbk1vdmVTdWNjZXNzZnVsKClcclxuICBodW1hbk1vdmVTdWNjZXNzZnVsXHJcbiAgICA/IGRpc3BsYXlTdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSgnaHVtYW4nKVxyXG4gICAgOiBkaXNwbGF5VW5zdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSgnaHVtYW4nKVxyXG4gIGNvbnN0IGh1bWFuV2lucyA9IGdhbWUuY2hlY2tGb3JXaW4oKVxyXG5cclxuICB1cGRhdGVBSUJvYXJkKClcclxuICAvLyBjcmVhdGUgaGFuZGxlV2luKCkgZnVuY3Rpb25cclxuICBpZiAoaHVtYW5XaW5zKSB7XHJcbiAgICBhaUJvYXJkRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0KVxyXG4gICAgZ2FtZS5yZXNldEdhbWVTdGF0ZSgpXHJcbiAgICBhbm5vdW5jZVdpbm5lcihodW1hbldpbnMpXHJcbiAgICBwbGF5QWdhaW4oKVxyXG4gIH1cclxuICBoYW5kbGVBSU1vdmUoYWlCb2FyZERpdilcclxufVxyXG5cclxuY29uc3QgaGFuZGxlQUlNb3ZlID0gYXN5bmMgKGFpQm9hcmREaXYpID0+IHtcclxuICBhd2FpdCBkZWxheSgxMDAwKVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJykudGV4dENvbnRlbnQgPVxyXG4gICAgJ0VuZW15IGlzIGF0dGFja2luZyB5b3VyIHNoaXBzISdcclxuICBjb25zdCBhaU1vdmVTdWNjZXNzZnVsID0gZ2FtZS5nZXRIdW1hbkJvYXJkT2JqLmdldExhc3RBSU1vdmVTdWNjZXNzZnVsKClcclxuICBhaU1vdmVTdWNjZXNzZnVsXHJcbiAgICA/IGRpc3BsYXlTdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSgnY29tcHV0ZXInKVxyXG4gICAgOiBkaXNwbGF5VW5zdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSgnY29tcHV0ZXInKVxyXG4gIGdhbWUucGxheVJvdW5kKClcclxuICBjb25zdCBhaVdpbnMgPSBnYW1lLmNoZWNrRm9yV2luKClcclxuXHJcbiAgdXBkYXRlSHVtYW5Cb2FyZCgpXHJcbiAgaWYgKGFpV2lucykge1xyXG4gICAgYWlCb2FyZERpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dClcclxuICAgIGdhbWUucmVzZXRHYW1lU3RhdGUoKVxyXG4gICAgYW5ub3VuY2VXaW5uZXIoYWlXaW5zKVxyXG4gICAgcGxheUFnYWluKClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGFubm91bmNlV2lubmVyID0gKHdpbm5lcikgPT4ge1xyXG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgY29uc3Qgd2lubmVyTmFtZSA9IHdpbm5lci5nZXROYW1lKClcclxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gYCR7d2lubmVyTmFtZX0gd2luJ3MhYFxyXG59XHJcblxyXG5jb25zdCBwbGF5QWdhaW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9wQmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lcicpXHJcbiAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICBwbGF5QWdhaW5CdG4udGV4dENvbnRlbnQgPSAnUGxheSBhZ2FpbidcclxuICB0b3BCYXJEaXYuYXBwZW5kQ2hpbGQocGxheUFnYWluQnRuKVxyXG4gIHBsYXlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0TmV3R2FtZSlcclxufVxyXG5cclxuY29uc3Qgc3RhcnROZXdHYW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvcEJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXInKVxyXG4gIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBidXR0b24nKVxyXG4gIHRvcEJhckRpdi5yZW1vdmVDaGlsZChwbGF5QWdhaW5CdG4pXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKS50ZXh0Q29udGVudCA9ICcnXHJcbiAgZGlzcGxheUNvbnRyb2xsZXIoKVxyXG59XHJcblxyXG4vLyBGb3IgZWFjaCBvZiB0aGUgcGxhY2Ugc2hpcCBmdW5jdGlvbnMsIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZSBwcmV2aW91c1xyXG4vLyBvcmllbnRhdGlvbiB0b2dnbGUgYnV0dG9uIHRvIHByZXZlbnQgdGhlIHNhbWUgbGlzdGVuZXIgZmlyaW5nIGZvciBlYWNoIG9mIHRoZVxyXG4vLyBwcmV2aW91cyBvcmllbnRhdGlvbiB0b2dnbGUgYnV0dG9uc1xyXG5jb25zdCByZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvcEJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXInKVxyXG4gIGNvbnN0IHByZXZpb3VzT3JpZW50YXRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JpZW50YXRpb25Ub2dnbGVCdG4nKVxyXG4gIHRvcEJhckRpdi5yZW1vdmVDaGlsZChwcmV2aW91c09yaWVudGF0aW9uQnRuKVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVPcmllbnRhdGlvblRvZ2dsZUJ0biA9ICgpID0+IHtcclxuICBjb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyJylcclxuICBjb25zdCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxyXG4gIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5jbGFzc0xpc3QuYWRkKCdvcmllbnRhdGlvblRvZ2dsZUJ0bicpXHJcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcclxuICB0b3BCYXJEaXYuYXBwZW5kQ2hpbGQob3JpZW50YXRpb25Ub2dnbGVCdG4pXHJcblxyXG4gIHJldHVybiBbaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cywgb3JpZW50YXRpb25Ub2dnbGVCdG5dXHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlTdWNjZXNzZnVsQXR0YWNrTWVzc2FnZSA9IChwbGF5ZXIpID0+IHtcclxuICBpZiAocGxheWVyID09PSAnaHVtYW4nKSB7XHJcbiAgICBjb25zdCB0b3BCYXJDb250YWluZXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxyXG4gICAgdG9wQmFyQ29udGFpbmVyUGFyYS50ZXh0Q29udGVudCA9XHJcbiAgICAgICdZb3UgYXR0YWNrZWQgdGhlIGVuZW15Li4uIGFuZCBoaXQgdGhlaXIgc2hpcCEnXHJcbiAgfSBlbHNlIGlmIChwbGF5ZXIgPT09ICdjb21wdXRlcicpIHtcclxuICAgIGNvbnN0IHRvcEJhckNvbnRhaW5lclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXHJcbiAgICB0b3BCYXJDb250YWluZXJQYXJhLnRleHRDb250ZW50ID1cclxuICAgICAgJ1RoZSBlbmVteSBsYXVuY2hlZCBhbiBhdHRhY2suLi4gYW5kIGhpdCB5b3VyIHNoaXAhJ1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGlzcGxheVVuc3VjY2Vzc2Z1bEF0dGFja01lc3NhZ2UgPSAocGxheWVyKSA9PiB7XHJcbiAgaWYgKHBsYXllciA9PT0gJ2h1bWFuJykge1xyXG4gICAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICAgIHRvcEJhckNvbnRhaW5lclBhcmEudGV4dENvbnRlbnQgPSAnWW91IGF0dGFjayBvbiB0aGUgZW5lbXkgd2FzIHVuc3VjY2Vzc2Z1bCdcclxuICB9IGVsc2UgaWYgKHBsYXllciA9PT0gJ2NvbXB1dGVyJykge1xyXG4gICAgY29uc3QgdG9wQmFyQ29udGFpbmVyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcclxuICAgIHRvcEJhckNvbnRhaW5lclBhcmEudGV4dENvbnRlbnQgPSAnVGhlIGVuZW1pZXMgYXR0YWNrIHdhcyB1bnN1Y2Nlc3NmdWwnXHJcbiAgfVxyXG59XHJcblxyXG4vLyBjb25zdCBoYW5kbGVQbGF5ZXJTZWxldGlvblxyXG5cclxuZXhwb3J0IHsgcmVuZGVyUGxheWVyQm9hcmQsIHJlbmRlckFJQm9hcmQsIGRpc3BsYXlDb250cm9sbGVyLCBwcmVHYW1lU2V0dXAgfVxyXG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuLi9mYWN0b3JpZXMvR2FtZWJvYXJkJ1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi9mYWN0b3JpZXMvUGxheWVyJ1xyXG5pbXBvcnQgeyByZXR1cm5SYW5kb21BSUJvYXJkIH0gZnJvbSAnLi4vaGVscGVycy9yb3RhdGVBSUJvYXJkcydcclxuXHJcbmNvbnN0IGdhbWVDb250cm9sbGVyID0gKCkgPT4ge1xyXG4gIC8vIENyZWF0ZSB0d28gZ2FtZSBib2FyZHNcclxuICBjb25zdCBodW1hbkJvYXJkID0gR2FtZWJvYXJkKClcclxuICBodW1hbkJvYXJkLmNyZWF0ZUdhbWVCb2FyZCgpXHJcblxyXG4gIGNvbnN0IGFpQm9hcmQgPSBHYW1lYm9hcmQoKVxyXG4gIGFpQm9hcmQuY3JlYXRlR2FtZUJvYXJkKClcclxuXHJcbiAgY29uc3QgcGxhY2VDYXJyaWVyU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XHJcbiAgICBsZXQgY2FycmllclBsYWNlZCA9IHRydWVcclxuXHJcbiAgICBjb25zdCBjYXJyaWVyQXJyID0gZGV0ZXJtaW5lQ2FycmllckFyckNvb3JkcyhcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICAgICAgY29vcmRpbmF0ZVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChjYXJyaWVyQXJyKVxyXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XHJcbiAgICAgIGNhcnJpZXJQbGFjZWQgPSBmYWxzZVxyXG4gICAgICByZXR1cm4gY2FycmllclBsYWNlZFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYXJyaWVyUGxhY2VkXHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXRlcm1pbmVDYXJyaWVyQXJyQ29vcmRzID0gKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sIGNvb3JkaW5hdGUpID0+IHtcclxuICAgIGNvbnN0IGNhcnJpZXJBcnIgPSBbXVxyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgY2FycmllckFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cclxuICAgICAgICBjYXJyaWVyQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgY2FycmllckFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbKCtjb29yZGluYXRlWzBdIC0gaSkudG9TdHJpbmcoKSwgY29vcmRpbmF0ZVsxXV1cclxuICAgICAgICBjYXJyaWVyQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjYXJyaWVyQXJyXHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGFjZUJhdHRsZVNoaXAgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xyXG4gICAgbGV0IGJhdHRsZXNoaXBQbGFjZWQgPSB0cnVlXHJcbiAgICBjb25zdCBiYXR0bGVzaGlwQXJyID0gZGV0ZXJtaW5lQmF0dGxlc2hpcEFyckNvb3JkcyhcclxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICAgICAgY29vcmRpbmF0ZVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChiYXR0bGVzaGlwQXJyKVxyXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XHJcbiAgICAgIGJhdHRsZXNoaXBQbGFjZWQgPSBmYWxzZVxyXG4gICAgICByZXR1cm4gYmF0dGxlc2hpcFBsYWNlZFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBiYXR0bGVzaGlwUGxhY2VkXHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXRlcm1pbmVCYXR0bGVzaGlwQXJyQ29vcmRzID0gKFxyXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICAgIGNvb3JkaW5hdGVcclxuICApID0+IHtcclxuICAgIGNvbnN0IGJhdHRsZXNoaXBBcnIgPSBbXVxyXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgYmF0dGxlc2hpcEFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cclxuICAgICAgICBiYXR0bGVzaGlwQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgYmF0dGxlc2hpcEFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbKCtjb29yZGluYXRlWzBdIC0gaSkudG9TdHJpbmcoKSwgY29vcmRpbmF0ZVsxXV1cclxuICAgICAgICBiYXR0bGVzaGlwQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBiYXR0bGVzaGlwQXJyXHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGFjZUNydWlzZXJTaGlwID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcclxuICAgIGxldCBjcnVpc2VyUGxhY2VkID0gdHJ1ZVxyXG4gICAgY29uc3QgY3J1aXNlckFyciA9IGRldGVybWluZUNydWlzZXJBcnJDb29yZHMoXHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXHJcbiAgICAgIGNvb3JkaW5hdGVcclxuICAgIClcclxuXHJcbiAgICBjb25zdCBzaGlwUGxhY2VkID0gaHVtYW5Cb2FyZC5wbGFjZVNoaXAoY3J1aXNlckFycilcclxuICAgIGlmICghc2hpcFBsYWNlZCkge1xyXG4gICAgICBjcnVpc2VyUGxhY2VkID0gZmFsc2VcclxuICAgICAgcmV0dXJuIGNydWlzZXJQbGFjZWRcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3J1aXNlclBsYWNlZFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGV0ZXJtaW5lQ3J1aXNlckFyckNvb3JkcyA9IChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLCBjb29yZGluYXRlKSA9PiB7XHJcbiAgICBjb25zdCBjcnVpc2VyQXJyID0gW11cclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGNydWlzZXJBcnIucHVzaChjb29yZGluYXRlKVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkID0gW2Nvb3JkaW5hdGVbMF0sICgrY29vcmRpbmF0ZVsxXSArIGkpLnRvU3RyaW5nKCldXHJcbiAgICAgICAgY3J1aXNlckFyci5wdXNoKGNvb3JkKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGNydWlzZXJBcnIucHVzaChjb29yZGluYXRlKVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkID0gWygrY29vcmRpbmF0ZVswXSAtIGkpLnRvU3RyaW5nKCksIGNvb3JkaW5hdGVbMV1dXHJcbiAgICAgICAgY3J1aXNlckFyci5wdXNoKGNvb3JkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3J1aXNlckFyclxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxhY2VTdWJtYXJpbmVTaGlwID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcclxuICAgIGxldCBzdWJtYXJpbmVQbGFjZWQgPSB0cnVlXHJcbiAgICBjb25zdCBzdWJtYXJpbmVBcnIgPSBkZXRlcm1pbmVTdWJtYXJpbmVBcnJDb29yZHMoXHJcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXHJcbiAgICAgIGNvb3JkaW5hdGVcclxuICAgIClcclxuXHJcbiAgICBjb25zdCBzaGlwUGxhY2VkID0gaHVtYW5Cb2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lQXJyKVxyXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XHJcbiAgICAgIHN1Ym1hcmluZVBsYWNlZCA9IGZhbHNlXHJcbiAgICAgIHJldHVybiBzdWJtYXJpbmVQbGFjZWRcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3VibWFyaW5lUGxhY2VkXHJcbiAgfVxyXG5cclxuICBjb25zdCBkZXRlcm1pbmVTdWJtYXJpbmVBcnJDb29yZHMgPSAoXHJcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxyXG4gICAgY29vcmRpbmF0ZVxyXG4gICkgPT4ge1xyXG4gICAgY29uc3Qgc3VibWFyaW5lQXJyID0gW11cclxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XHJcbiAgICAgIHN1Ym1hcmluZUFyci5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cclxuICAgICAgICBzdWJtYXJpbmVBcnIucHVzaChjb29yZClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBzdWJtYXJpbmVBcnIucHVzaChjb29yZGluYXRlKVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkID0gWygrY29vcmRpbmF0ZVswXSAtIGkpLnRvU3RyaW5nKCksIGNvb3JkaW5hdGVbMV1dXHJcbiAgICAgICAgc3VibWFyaW5lQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdWJtYXJpbmVBcnJcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYWNlRGVzdHJveWVyU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XHJcbiAgICBsZXQgZGVzdHJveWVyUGxhY2VkID0gdHJ1ZVxyXG4gICAgY29uc3QgZGVzdHJveWVyQXJyID0gZGV0ZXJtaW5lRGVzdHJveWVyQXJyQ29vcmRzKFxyXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxyXG4gICAgICBjb29yZGluYXRlXHJcbiAgICApXHJcblxyXG4gICAgY29uc3Qgc2hpcFBsYWNlZCA9IGh1bWFuQm9hcmQucGxhY2VTaGlwKGRlc3Ryb3llckFycilcclxuICAgIGlmICghc2hpcFBsYWNlZCkge1xyXG4gICAgICBkZXN0cm95ZXJQbGFjZWQgPSBmYWxzZVxyXG4gICAgICByZXR1cm4gZGVzdHJveWVyUGxhY2VkXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGV0ZXJtaW5lRGVzdHJveWVyQXJyQ29vcmRzID0gKFxyXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcclxuICAgIGNvb3JkaW5hdGVcclxuICApID0+IHtcclxuICAgIGNvbnN0IGRlc3Ryb3llckFyciA9IFtdXHJcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xyXG4gICAgICBkZXN0cm95ZXJBcnIucHVzaChjb29yZGluYXRlKVxyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkID0gW2Nvb3JkaW5hdGVbMF0sICgrY29vcmRpbmF0ZVsxXSArIGkpLnRvU3RyaW5nKCldXHJcbiAgICAgICAgZGVzdHJveWVyQXJyLnB1c2goY29vcmQpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcclxuICAgICAgZGVzdHJveWVyQXJyLnB1c2goY29vcmRpbmF0ZSlcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjb29yZCA9IFsoK2Nvb3JkaW5hdGVbMF0gLSBpKS50b1N0cmluZygpLCBjb29yZGluYXRlWzFdXVxyXG4gICAgICAgIGRlc3Ryb3llckFyci5wdXNoKGNvb3JkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVzdHJveWVyQXJyXHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGFjZUFJU2hpcHMgPSAoKSA9PiB7XHJcbiAgICBwbGFjZVNoaXBzKGFpQm9hcmQsIHJldHVyblJhbmRvbUFJQm9hcmQoKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYXllcnMgPSB7fVxyXG5cclxuICBjb25zdCBnZXRQbGF5ZXJzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHBsYXllcnNcclxuICB9XHJcblxyXG4gIGNvbnN0IGh1bWFuUGxheWVyID0gUGxheWVyKCdIdW1hbicsIGZhbHNlKVxyXG4gIGNvbnN0IGFpUGxheWVyID0gUGxheWVyKCdBSScsIHRydWUpXHJcbiAgcGxheWVycy5odW1hbiA9IGh1bWFuUGxheWVyXHJcbiAgcGxheWVycy5BSSA9IGFpUGxheWVyXHJcblxyXG4gIGxldCBjdXJyZW50UGxheWVyID0gcGxheWVycy5odW1hblxyXG5cclxuICBjb25zdCBnZXRDdXJyZW50UGxheWVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRQbGF5ZXJcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYXlSb3VuZCA9IChjb29yZGluYXRlKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuaHVtYW4uZ2V0TmFtZSgpKSB7XHJcbiAgICAgIGFpQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKVxyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5BSS5nZXROYW1lKCkpIHtcclxuICAgICAgY29uc3QgbmV4dE1vdmUgPSBjb21wdXRlcnNOZXh0TW92ZSgpXHJcbiAgICAgIGh1bWFuQm9hcmQucmVjZWl2ZUF0dGFjayhuZXh0TW92ZSlcclxuICAgICAgaHVtYW5Cb2FyZC5yZW1vdmVMYXN0QUlNb3ZlKG5leHRNb3ZlKVxyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFBsYXllcigpXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50UGxheWVyLmdldE5hbWUoKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbXB1dGVyc05leHRNb3ZlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXZhaWxhYmxlTW92ZXMgPSBodW1hbkJvYXJkLmdldEFJQXZhaWxhYmxlTW92ZXMoKVxyXG4gICAgY29uc3QgbGFzdEFJTW92ZVN1Y2Nlc3NmdWwgPSBodW1hbkJvYXJkLmdldExhc3RBSU1vdmVTdWNjZXNzZnVsKClcclxuICAgIGlmIChsYXN0QUlNb3ZlU3VjY2Vzc2Z1bCkge1xyXG4gICAgICBjb25zdCBhZGphY2VudFNsb3RzID0gY3VycmVudFBsYXllci5nZXRBZGphY2VudFNsb3RzKFxyXG4gICAgICAgIHRydWUsXHJcbiAgICAgICAgYXZhaWxhYmxlTW92ZXMsXHJcbiAgICAgICAgaHVtYW5Cb2FyZC5nZXRBZGphY2VudFNsb3RzUXVldWUoKSxcclxuICAgICAgICBodW1hbkJvYXJkLmdldFN1Y2Nlc3NmdWxTaG90cygpLFxyXG4gICAgICAgIGh1bWFuQm9hcmQuZ2V0TWlzc2VkU2hvdHMoKVxyXG4gICAgICApXHJcbiAgICAgIGh1bWFuQm9hcmQuYWRkQWRqYWNlbnRTbG90c1RvUXVldWUoYWRqYWNlbnRTbG90cylcclxuICAgICAgY29uc3QgbmV4dE1vdmUgPSBodW1hbkJvYXJkLmdldEFkamFjZW50UXVldWVTbG90KClcclxuICAgICAgcmV0dXJuIG5leHRNb3ZlXHJcbiAgICB9IGVsc2UgaWYgKCFsYXN0QUlNb3ZlU3VjY2Vzc2Z1bCkge1xyXG4gICAgICBjb25zdCByYW5kb21Nb3ZlID0gY3VycmVudFBsYXllci5tYWtlUmFuZG9tTW92ZSh0cnVlLCBhdmFpbGFibGVNb3ZlcylcclxuICAgICAgcmV0dXJuIHJhbmRvbU1vdmVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHN3aXRjaFBsYXllciA9ICgpID0+IHtcclxuICAgIGN1cnJlbnRQbGF5ZXIgPVxyXG4gICAgICBjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5odW1hbi5nZXROYW1lKClcclxuICAgICAgICA/IChjdXJyZW50UGxheWVyID0gcGxheWVycy5BSSlcclxuICAgICAgICA6IChjdXJyZW50UGxheWVyID0gcGxheWVycy5odW1hbilcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrRm9yV2luID0gKCkgPT4ge1xyXG4gICAgbGV0IHdpbm5lclxyXG4gICAgaWYgKFxyXG4gICAgICBjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5odW1hbi5nZXROYW1lKCkgJiZcclxuICAgICAgYWlCb2FyZC5hbGxTaGlwc1N1bmsoKVxyXG4gICAgKSB7XHJcbiAgICAgIHdpbm5lciA9IGN1cnJlbnRQbGF5ZXJcclxuICAgICAgcmV0dXJuIHdpbm5lclxyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuQUkuZ2V0TmFtZSgpICYmXHJcbiAgICAgIGh1bWFuQm9hcmQuYWxsU2hpcHNTdW5rKClcclxuICAgICkge1xyXG4gICAgICB3aW5uZXIgPSBjdXJyZW50UGxheWVyXHJcbiAgICAgIHJldHVybiB3aW5uZXJcclxuICAgIH1cclxuICAgIHJldHVybiB3aW5uZXJcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc2V0R2FtZVN0YXRlID0gKHdpbm5lcikgPT4ge1xyXG4gICAgaHVtYW5Cb2FyZC5jbGVhckdhbWVCb2FyZCgpXHJcbiAgICBhaUJvYXJkLmNsZWFyR2FtZUJvYXJkKClcclxuICAgIGh1bWFuQm9hcmQuY3JlYXRlR2FtZUJvYXJkKClcclxuICAgIGFpQm9hcmQuY3JlYXRlR2FtZUJvYXJkKClcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBnZXRIdW1hbkJvYXJkOiBodW1hbkJvYXJkLmdldEJvYXJkLFxyXG4gICAgZ2V0QUlCb2FyZDogYWlCb2FyZC5nZXRCb2FyZCxcclxuICAgIGdldEFJQm9hcmRPYmo6IGFpQm9hcmQsXHJcbiAgICBnZXRIdW1hbkJvYXJkT2JqOiBodW1hbkJvYXJkLFxyXG4gICAgc3dpdGNoUGxheWVyLFxyXG4gICAgcGxheVJvdW5kLFxyXG4gICAgZ2V0Q3VycmVudFBsYXllcixcclxuICAgIHJlc2V0R2FtZVN0YXRlLFxyXG4gICAgY2hlY2tGb3JXaW4sXHJcbiAgICBnZXRQbGF5ZXJzLFxyXG4gICAgcGxhY2VBSVNoaXBzLFxyXG4gICAgcGxhY2VDYXJyaWVyU2hpcCxcclxuICAgIHBsYWNlQmF0dGxlU2hpcCxcclxuICAgIHBsYWNlQ3J1aXNlclNoaXAsXHJcbiAgICBwbGFjZVN1Ym1hcmluZVNoaXAsXHJcbiAgICBwbGFjZURlc3Ryb3llclNoaXBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdhbWVDb250cm9sbGVyIH1cclxuXHJcbmNvbnN0IHBsYWNlU2hpcHMgPSAoYm9hcmQsIGNvb3JkaW5hdGVzT2JqKSA9PiB7XHJcbiAgY29uc3Qgc2hpcENvb3JkaW5hdGVzQXJyID0gT2JqZWN0LnZhbHVlcyhjb29yZGluYXRlc09iailcclxuICBzaGlwQ29vcmRpbmF0ZXNBcnIuZm9yRWFjaCgoc2hpcENvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICBib2FyZC5wbGFjZVNoaXAoc2hpcENvb3JkaW5hdGVzKVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qIGNvbnN0IHBsYWNlRWFjaEh1bWFuU2hpcCA9IChjb29yZGluYXRlKSA9PiB7XHJcbiAgaHVtYW5Cb2FyZC5wbGFjZVNoaXAoY29vcmRpbmF0ZSlcclxufSAqL1xyXG4iLCJpbXBvcnQgeyBhcnJheXNBcmVFcXVhbCB9IGZyb20gJy4uL2hlbHBlcnMvYXJyYXlzQXJlRXF1YWwnXHJcbmltcG9ydCB7IFNoaXAgfSBmcm9tICcuL1NoaXAnXHJcblxyXG5leHBvcnQgY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcclxuICBsZXQgYm9hcmQgPSBbXVxyXG4gIGNvbnN0IHNoaXBPYmplY3RzID0gW11cclxuICBjb25zdCBtaXNzZWRTaG90cyA9IFtdXHJcbiAgY29uc3QgYWlBdmFpbGFibGVNb3ZlcyA9IFtdXHJcbiAgY29uc3Qgc3VjY2Vzc2Z1bFNob3RzID0gW11cclxuICBsZXQgYWRqYWNlbnRTbG90c1F1ZXVlID0gW11cclxuICBjb25zdCByb3dzID0gOVxyXG4gIGNvbnN0IGNvbHVtbnMgPSA5XHJcbiAgbGV0IGxhc3RBSU1vdmVTdWNjZXNzZnVsID0gZmFsc2VcclxuICBsZXQgbGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwgPSBmYWxzZVxyXG5cclxuICBjb25zdCBjcmVhdGVHYW1lQm9hcmQgPSAoKSA9PiB7XHJcbiAgICBib2FyZCA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gcm93czsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgYm9hcmRbaV0gPSBbXVxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICBib2FyZFtpXS5wdXNoKHVuZGVmaW5lZClcclxuICAgICAgICBjb25zdCBjb29yZGluYXRlID0gW2ksIGpdXHJcbiAgICAgICAgYWlBdmFpbGFibGVNb3Zlcy5wdXNoKGNvb3JkaW5hdGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNoZWNrcyBpZiBjb29yZGluYXRlcyBmb3Igc2hpcCBpcyBvbiB0aGVcclxuICAvLyBnYW1lIGJvYXJkXHJcbiAgY29uc3QgdmFsaWRhdGVDb29yZGluYXRlcyA9IChjb29yZGluYXRlcykgPT4ge1xyXG4gICAgbGV0IHZhbGlkQ29vcmRpbmF0ZXMgPSB0cnVlXHJcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVbMF1cclxuICAgICAgY29uc3QgY29sdW1uID0gY29vcmRpbmF0ZVsxXVxyXG4gICAgICBpZiAocm93ID4gOSB8fCByb3cgPCAwKSB7XHJcbiAgICAgICAgdmFsaWRDb29yZGluYXRlcyA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkQ29vcmRpbmF0ZXNcclxuICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPiA5IHx8IGNvbHVtbiA8IDApIHtcclxuICAgICAgICB2YWxpZENvb3JkaW5hdGVzID0gZmFsc2VcclxuICAgICAgICByZXR1cm4gdmFsaWRDb29yZGluYXRlc1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB2YWxpZENvb3JkaW5hdGVzXHJcbiAgfVxyXG5cclxuICAvLyBjaGVja3MgaWYgc2hpcCBjb29yZGluYXRlcyBvdmVybGFwIHdpdGggYWxyZWFkeVxyXG4gIC8vIHBsYWNlZCBzaGlwIGNvb3JkaW5hdGVzIGZvciB0aGUgc2FtZSBzaGlwXHJcbiAgY29uc3QgY2hlY2tTZWxmT3ZlcmxhcCA9IChjb29yZGluYXRlcykgPT4ge1xyXG4gICAgbGV0IGNvb3JkaW5hdGVzT3ZlcmxhcCA9IGZhbHNlXHJcbiAgICBsZXQgcHJldkNvb3JkaW5hdGVcclxuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCA+IDApIHtcclxuICAgICAgICBpZiAoYXJyYXlzQXJlRXF1YWwocHJldkNvb3JkaW5hdGUsIGNvb3JkaW5hdGUpKSB7XHJcbiAgICAgICAgICBjb29yZGluYXRlc092ZXJsYXAgPSB0cnVlXHJcbiAgICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXNPdmVybGFwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXZDb29yZGluYXRlID0gY29vcmRpbmF0ZVxyXG4gICAgICB9XHJcbiAgICAgIHByZXZDb29yZGluYXRlID0gY29vcmRpbmF0ZVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gY29vcmRpbmF0ZXNPdmVybGFwXHJcbiAgfVxyXG5cclxuICAvLyBTaG91bGQgcHJldmVudCBhIHNoaXAgZnJvbSBiZWluZ1xyXG4gIC8vIHBsYWNlZCBvbiB0b3Agb2YgYW5vdGhlciBzaGlwXHJcbiAgY29uc3QgY2hlY2tPdmVybGFwV2l0aE90aGVyU2hpcHMgPSAoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgIGxldCBzaGlwc092ZXJsYXAgPSBmYWxzZVxyXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgICBjb25zdCByb3cgPSBjb29yZGluYXRlWzBdXHJcbiAgICAgIGNvbnN0IGNvbHVtbiA9IGNvb3JkaW5hdGVbMV1cclxuICAgICAgY29uc3QgYm9hcmRDZWxsID0gYm9hcmRbcm93XVtjb2x1bW5dXHJcbiAgICAgIGlmICh0eXBlb2YgYm9hcmRDZWxsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHNoaXBzT3ZlcmxhcCA9IHRydWVcclxuICAgICAgICByZXR1cm4gc2hpcHNPdmVybGFwXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHNoaXBzT3ZlcmxhcFxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwID0gKGNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgICBsZXQgc2hpcFBsYWNlZCA9IHRydWVcclxuXHJcbiAgICBjb25zdCBsZWdhbENvb3JkaW5hdGVzID0gdmFsaWRhdGVDb29yZGluYXRlcyhjb29yZGluYXRlcylcclxuICAgIGlmICghbGVnYWxDb29yZGluYXRlcykge1xyXG4gICAgICBzaGlwUGxhY2VkID0gZmFsc2VcclxuICAgICAgcmV0dXJuIHNoaXBQbGFjZWRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvdmVybGFwcGluZ0Nvb3JkaW5hdGVzID0gY2hlY2tTZWxmT3ZlcmxhcChjb29yZGluYXRlcylcclxuICAgIGlmIChvdmVybGFwcGluZ0Nvb3JkaW5hdGVzKSB7XHJcbiAgICAgIHNoaXBQbGFjZWQgPSBmYWxzZVxyXG4gICAgICByZXR1cm4gc2hpcFBsYWNlZFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNoaXBPdmVybGFwcGluZyA9IGNoZWNrT3ZlcmxhcFdpdGhPdGhlclNoaXBzKGNvb3JkaW5hdGVzKVxyXG4gICAgaWYgKHNoaXBPdmVybGFwcGluZykge1xyXG4gICAgICBzaGlwUGxhY2VkID0gZmFsc2VcclxuICAgICAgcmV0dXJuIHNoaXBQbGFjZWRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gY29vcmRpbmF0ZXMubGVuZ3RoXHJcbiAgICBjb25zdCBzaGlwT2JqZWN0ID0gU2hpcChzaGlwTGVuZ3RoLCAwLCBmYWxzZSlcclxuICAgIHNoaXBPYmplY3RzLnB1c2goc2hpcE9iamVjdClcclxuXHJcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVbMF1cclxuICAgICAgY29uc3QgY29sdW1uID0gY29vcmRpbmF0ZVsxXVxyXG4gICAgICBib2FyZFtyb3ddW2NvbHVtbl0gPSBzaGlwT2JqZWN0XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBzaGlwUGxhY2VkXHJcbiAgfVxyXG5cclxuICAvLyBwcmV2ZW50cyBodW1hbiBwbGF5ZXIgZnJvbSBhdHRhY2tpbmcgcHJldmlvdXNseVxyXG4gIC8vIGF0dGFja2VkIGNvb3JkaW5hdGVcclxuICBjb25zdCBwcmV2ZW50U2FtZUF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XHJcbiAgICBsZXQgYWxyZWFkeUF0dGFja2VkID0gZmFsc2VcclxuICAgIHN1Y2Nlc3NmdWxTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XHJcbiAgICAgIGlmIChhcnJheXNBcmVFcXVhbChjb29yZGluYXRlLCBzaG90KSkge1xyXG4gICAgICAgIGFscmVhZHlBdHRhY2tlZCA9IHRydWVcclxuICAgICAgICByZXR1cm4gcHJldmVudFNhbWVBdHRhY2tcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBtaXNzZWRTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XHJcbiAgICAgIGlmIChhcnJheXNBcmVFcXVhbChjb29yZGluYXRlLCBzaG90KSkge1xyXG4gICAgICAgIGFscmVhZHlBdHRhY2tlZCA9IHRydWVcclxuICAgICAgICByZXR1cm4gcHJldmVudFNhbWVBdHRhY2tcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBhbHJlYWR5QXR0YWNrZWRcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVzWzBdXHJcbiAgICBjb25zdCBjb2x1bW4gPSBjb29yZGluYXRlc1sxXVxyXG4gICAgY29uc3QgYm9hcmRDZWxsID0gYm9hcmRbcm93XVtjb2x1bW5dXHJcbiAgICBjb25zdCBzaGlwT2JqID0gYm9hcmRDZWxsXHJcblxyXG4gICAgLy8gTmVlZCB0byBjaGVjayBpZiBuZXcgY29vcmRpbmF0ZSBpcyBhbHJlYWR5XHJcbiAgICAvLyBpbnNpZGUgc3VjY2Vzc2Z1bFNob3RzIG9yIG1pc3NlZFNob3RzXHJcbiAgICBjb25zdCBhbHJlYWR5QXR0YWNrZWQgPSBwcmV2ZW50U2FtZUF0dGFjayhjb29yZGluYXRlcylcclxuICAgIGlmIChhbHJlYWR5QXR0YWNrZWQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBib2FyZENlbGwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIHNoaXBPYmouaGl0KClcclxuICAgICAgbGFzdEFJTW92ZVN1Y2Nlc3NmdWwgPSB0cnVlXHJcbiAgICAgIGxhc3RIdW1hbk1vdmVTdWNjZXNzZnVsID0gdHJ1ZVxyXG4gICAgICBzdWNjZXNzZnVsU2hvdHMucHVzaChjb29yZGluYXRlcylcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvYXJkQ2VsbCAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgbGFzdEFJTW92ZVN1Y2Nlc3NmdWwgPSBmYWxzZVxyXG4gICAgICBsYXN0SHVtYW5Nb3ZlU3VjY2Vzc2Z1bCA9IGZhbHNlXHJcbiAgICAgIG1pc3NlZFNob3RzLnB1c2goY29vcmRpbmF0ZXMpXHJcbiAgICAgIHJlbW92ZUFkamFjZW50U2xvdChjb29yZGluYXRlcylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIElmIHRoZSBjb21wdXRlciByYW5kb21seSBndWVzc2VzIGEgc3BvdCB0aGF0IGlzIGFscmVhZHkgaW4gdGhlIGFkamFjZW5jeVxyXG4gIC8vIHNsb3QgcXVldWUsIHdlIG5lZWQgdG8gcmVtb3ZlIGl0IChmcm9tIHRoZSBhZGphY2VuY3kgcXVldWUpIHNvXHJcbiAgLy8gdGhlIGNvbXB1dGVyIGRvZXMgbm90IGF0dGVtcHQgdG9cclxuICAvLyB1c2UgdGhlIGFscmVhZHkgZ3Vlc3NlZCBzcG90IHdoZW4gcHVsbGluZyBmcm9tIHRoZSBhZGphY2VuY3lcclxuICAvLyBxdWV1ZSBmb3IgaXQncyBuZXh0IG1vdmVcclxuICBjb25zdCByZW1vdmVBZGphY2VudFNsb3QgPSAoY29vcmRpbmF0ZXMpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldENvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNcclxuICAgIGNvbnN0IGFkamFjZW50UXVldWUgPSBuZXcgU2V0KClcclxuICAgIGZvciAoY29uc3Qgc2xvdCBvZiBhZGphY2VudFNsb3RzUXVldWUpIHtcclxuICAgICAgYWRqYWNlbnRRdWV1ZS5hZGQoc2xvdC50b1N0cmluZygpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGZpbHRlciB0aGUgYWRqYWNlbmN5IHNsb3QgcXVldWUgZG93biB0byBzbG90cyB0aGF0IGhhdmUgTk9UXHJcbiAgICAvLyBhbHJlYWR5IGJlZW4gZ3Vlc2VkLlxyXG4gICAgYWRqYWNlbnRTbG90c1F1ZXVlID0gYWRqYWNlbnRTbG90c1F1ZXVlLmZpbHRlcihcclxuICAgICAgKHNsb3QpID0+ICFhcnJheXNBcmVFcXVhbChzbG90LCB0YXJnZXRDb29yZGluYXRlcylcclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcclxuICAgIGxldCBldmVyeVNoaXBTYW5rID0gdHJ1ZVxyXG4gICAgc2hpcE9iamVjdHMuZm9yRWFjaCgoc2hpcE9iaikgPT4ge1xyXG4gICAgICBpZiAoIXNoaXBPYmouaGFzQmVlblN1bmsoKSkge1xyXG4gICAgICAgIGV2ZXJ5U2hpcFNhbmsgPSBmYWxzZVxyXG4gICAgICAgIHJldHVybiBldmVyeVNoaXBTYW5rXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gZXZlcnlTaGlwU2Fua1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlTGFzdEFJTW92ZSA9IChyYW5kb21Nb3ZlKSA9PiB7XHJcbiAgICBhaUF2YWlsYWJsZU1vdmVzLmZvckVhY2goKG1vdmUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChhcnJheXNBcmVFcXVhbChtb3ZlLCByYW5kb21Nb3ZlKSkge1xyXG4gICAgICAgIGFpQXZhaWxhYmxlTW92ZXMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkQWRqYWNlbnRTbG90c1RvUXVldWUgPSAoYWRqYWNlbnRTbG90cykgPT4ge1xyXG4gICAgYWRqYWNlbnRTbG90cy5mb3JFYWNoKChzbG90KSA9PiB7XHJcbiAgICAgIGFkamFjZW50U2xvdHNRdWV1ZS5wdXNoKHNsb3QpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xlYXJHYW1lQm9hcmQgPSAoKSA9PiB7XHJcbiAgICBzaGlwT2JqZWN0cy5sZW5ndGggPSAwXHJcbiAgICBtaXNzZWRTaG90cy5sZW5ndGggPSAwXHJcbiAgICBhaUF2YWlsYWJsZU1vdmVzLmxlbmd0aCA9IDBcclxuICAgIHN1Y2Nlc3NmdWxTaG90cy5sZW5ndGggPSAwXHJcbiAgICBhZGphY2VudFNsb3RzUXVldWUubGVuZ3RoID0gMFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYm9hcmRcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldE1pc3NlZFNob3RzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG1pc3NlZFNob3RzXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRTdWNjZXNzZnVsU2hvdHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gc3VjY2Vzc2Z1bFNob3RzXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRTaGlwT2JqZWN0cyA9ICgpID0+IHtcclxuICAgIHJldHVybiBzaGlwT2JqZWN0c1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0QUlBdmFpbGFibGVNb3ZlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBhaUF2YWlsYWJsZU1vdmVzXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRMYXN0QUlNb3ZlU3VjY2Vzc2Z1bCA9ICgpID0+IHtcclxuICAgIHJldHVybiBsYXN0QUlNb3ZlU3VjY2Vzc2Z1bFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0TGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWxcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEFkamFjZW50U2xvdHNRdWV1ZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBhZGphY2VudFNsb3RzUXVldWVcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEFkamFjZW50UXVldWVTbG90ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGFkamFjZW50U2xvdHNRdWV1ZS5wb3AoKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0TGFzdFN1Y2Nlc3NmdWxNb3ZlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHN1Y2Nlc3NmdWxTaG90cy5hdCgtMSlcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjcmVhdGVHYW1lQm9hcmQsXHJcbiAgICBnZXRCb2FyZCxcclxuICAgIHBsYWNlU2hpcCxcclxuICAgIHJlY2VpdmVBdHRhY2ssXHJcbiAgICBjbGVhckdhbWVCb2FyZCxcclxuICAgIGdldE1pc3NlZFNob3RzLFxyXG4gICAgZ2V0U3VjY2Vzc2Z1bFNob3RzLFxyXG4gICAgYWxsU2hpcHNTdW5rLFxyXG4gICAgZ2V0QUlBdmFpbGFibGVNb3ZlcyxcclxuICAgIHZhbGlkYXRlQ29vcmRpbmF0ZXMsXHJcbiAgICBwcmV2ZW50U2FtZUF0dGFjayxcclxuICAgIGNoZWNrU2VsZk92ZXJsYXAsXHJcbiAgICBnZXRTaGlwT2JqZWN0cyxcclxuICAgIHJlbW92ZUxhc3RBSU1vdmUsXHJcbiAgICBjaGVja092ZXJsYXBXaXRoT3RoZXJTaGlwcyxcclxuICAgIGdldExhc3RBSU1vdmVTdWNjZXNzZnVsLFxyXG4gICAgZ2V0TGFzdEh1bWFuTW92ZVN1Y2Nlc3NmdWwsXHJcbiAgICBnZXRBZGphY2VudFNsb3RzUXVldWUsXHJcbiAgICBhZGRBZGphY2VudFNsb3RzVG9RdWV1ZSxcclxuICAgIGdldEFkamFjZW50UXVldWVTbG90LFxyXG4gICAgcmVtb3ZlQWRqYWNlbnRTbG90LFxyXG4gICAgZ2V0TGFzdFN1Y2Nlc3NmdWxNb3ZlXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGFycmF5c0FyZUVxdWFsIH0gZnJvbSAnLi4vaGVscGVycy9hcnJheXNBcmVFcXVhbCdcclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5ZXIgPSAobmFtZSwgaXNBSSkgPT4ge1xyXG4gIC8vIFVzZWQgdG8gbWFrZSBBSSBzZWxlY3QgcmFuZG9tLCBsZWdhbCBjb29yZGluYXRlXHJcbiAgLy8gb24gcGxheWVycyBnYW1lIGJvYXJkXHJcbiAgY29uc3QgbWFrZVJhbmRvbU1vdmUgPSAoaXNBSSwgYXZhaWxhYmxlTW92ZXMpID0+IHtcclxuICAgIGlmICghaXNBSSB8fCBhdmFpbGFibGVNb3Zlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGF2YWlsYWJsZU1vdmVzTGVuZ3RoID0gYXZhaWxhYmxlTW92ZXMubGVuZ3RoXHJcbiAgICBjb25zdCByYW5kb21BcnJJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZU1vdmVzTGVuZ3RoKVxyXG4gICAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZSA9IGF2YWlsYWJsZU1vdmVzW3JhbmRvbUFyckluZGV4XVxyXG5cclxuICAgIHJldHVybiByYW5kb21Db29yZGluYXRlXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRBZGphY2VudFNsb3RzID0gKFxyXG4gICAgaXNBSSxcclxuICAgIGF2YWlsYWJsZU1vdmVzLFxyXG4gICAgc3VjY2Vzc2Z1bFNob3RzLFxyXG4gICAgbWlzc2VkU2hvdHNcclxuICApID0+IHtcclxuICAgIGlmICghaXNBSSB8fCBhdmFpbGFibGVNb3Zlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxhc3RTdWNjZXNzZnVsTW92ZSA9IHN1Y2Nlc3NmdWxTaG90cy5hdCgtMSlcclxuICAgIGNvbnN0IGFkamFjZW50U2xvdHMgPSByZXRyaWV2ZUFkamFjZW50U2xvdHMobGFzdFN1Y2Nlc3NmdWxNb3ZlKVxyXG4gICAgY29uc3QgbGVnYWxBZGphY2VudFNsb3RzID0gcmVtb3ZlSWxsZWdhbEFkamFjZW50U2xvdHMoYWRqYWNlbnRTbG90cylcclxuICAgIC8qIGNvbnN0IGF2YWlsYWJsZUFkamFjZW50U2xvdHMgPSBwcmV2ZW50UHJldmlvdXNTaG90VG9RdWV1ZShcclxuICAgICAgYXZhaWxhYmxlTW92ZXMsXHJcbiAgICAgIGxlZ2FsQWRqYWNlbnRTbG90cyxcclxuICAgICAgc3VjY2Vzc2Z1bFNob3RzLFxyXG4gICAgICBtaXNzZWRTaG90c1xyXG4gICAgKSAqL1xyXG4gICAgcmV0dXJuIGxlZ2FsQWRqYWNlbnRTbG90c1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Q2VsbEFib3ZlID0gKGxhc3RTdWNjZXNzZnVsTW92ZSkgPT4ge1xyXG4gICAgLy8gdGhlIHJvdyBuZWVkcyB0byBjaGFuZ2UgYnkgb25lXHJcbiAgICBjb25zdCBuZXdBcnIgPSBbXVxyXG4gICAgY29uc3QgbmV3Um93ID0gbGFzdFN1Y2Nlc3NmdWxNb3ZlWzBdIC0gMVxyXG4gICAgaWYgKG5ld1JvdyA+IDkgfHwgbmV3Um93IDwgMCkge1xyXG4gICAgICByZXR1cm4gJ2lsbGVnYWwnXHJcbiAgICB9XHJcbiAgICBuZXdBcnJbMF0gPSBuZXdSb3dcclxuICAgIG5ld0FyclsxXSA9IGxhc3RTdWNjZXNzZnVsTW92ZVsxXVxyXG4gICAgcmV0dXJuIG5ld0FyclxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Q2VsbEJlbG93ID0gKGxhc3RTdWNjZXNzZnVsTW92ZSkgPT4ge1xyXG4gICAgLy8gdGhlIHJvdyBuZWVkcyB0byBjaGFuZ2UgYnkgb25lXHJcbiAgICBjb25zdCBhcnIgPSBsYXN0U3VjY2Vzc2Z1bE1vdmVcclxuICAgIGNvbnN0IG5ld0FyciA9IFtdXHJcbiAgICBjb25zdCBuZXdSb3cgPSBhcnJbMF0gKyAxXHJcbiAgICBpZiAobmV3Um93ID4gOSB8fCBuZXdSb3cgPCAwKSB7XHJcbiAgICAgIHJldHVybiAnaWxsZWdhbCdcclxuICAgIH1cclxuICAgIG5ld0FyclswXSA9IG5ld1Jvd1xyXG4gICAgbmV3QXJyWzFdID0gbGFzdFN1Y2Nlc3NmdWxNb3ZlWzFdXHJcbiAgICByZXR1cm4gbmV3QXJyXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRDZWxsVG9SaWdodCA9IChsYXN0U3VjY2Vzc2Z1bE1vdmUpID0+IHtcclxuICAgIC8vIHRoZSByb3cgbmVlZHMgdG8gY2hhbmdlIGJ5IG9uZVxyXG4gICAgY29uc3QgbmV3QXJyID0gW11cclxuICAgIGNvbnN0IG5ld0NvbHVtbiA9IGxhc3RTdWNjZXNzZnVsTW92ZVsxXSArIDFcclxuICAgIGlmIChuZXdDb2x1bW4gPiA5IHx8IG5ld0NvbHVtbiA8IDApIHtcclxuICAgICAgcmV0dXJuICdpbGxlZ2FsJ1xyXG4gICAgfVxyXG4gICAgbmV3QXJyWzBdID0gbGFzdFN1Y2Nlc3NmdWxNb3ZlWzBdXHJcbiAgICBuZXdBcnJbMV0gPSBuZXdDb2x1bW5cclxuICAgIHJldHVybiBuZXdBcnJcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENlbGxUb0xlZnQgPSAobGFzdFN1Y2Nlc3NmdWxNb3ZlKSA9PiB7XHJcbiAgICAvLyB0aGUgcm93IG5lZWRzIHRvIGNoYW5nZSBieSBvbmVcclxuICAgIGNvbnN0IGFyciA9IGxhc3RTdWNjZXNzZnVsTW92ZVxyXG4gICAgY29uc3QgbmV3QXJyID0gW11cclxuICAgIGNvbnN0IG5ld0NvbHVtbiA9IGFyclsxXSAtIDFcclxuICAgIGlmIChuZXdDb2x1bW4gPiA5IHx8IG5ld0NvbHVtbiA8IDApIHtcclxuICAgICAgcmV0dXJuICdpbGxlZ2FsJ1xyXG4gICAgfVxyXG4gICAgbmV3QXJyWzBdID0gbGFzdFN1Y2Nlc3NmdWxNb3ZlWzBdXHJcbiAgICBuZXdBcnJbMV0gPSBuZXdDb2x1bW5cclxuICAgIHJldHVybiBuZXdBcnJcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbmFtZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmV0cmlldmVBZGphY2VudFNsb3RzID0gKGxhc3RTdWNjZXNzZnVsTW92ZSkgPT4ge1xyXG4gICAgY29uc3QgbGFzdFN1Y2Nlc3NmdWxNb3ZlVmFsdWUgPSBsYXN0U3VjY2Vzc2Z1bE1vdmVcclxuICAgIGNvbnN0IGFkamFjZW50U2xvdHMgPSBbXVxyXG4gICAgYWRqYWNlbnRTbG90cy5wdXNoKGdldENlbGxBYm92ZShsYXN0U3VjY2Vzc2Z1bE1vdmVWYWx1ZSkpXHJcbiAgICBhZGphY2VudFNsb3RzLnB1c2goZ2V0Q2VsbEJlbG93KGxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlKSlcclxuICAgIGFkamFjZW50U2xvdHMucHVzaChnZXRDZWxsVG9SaWdodChsYXN0U3VjY2Vzc2Z1bE1vdmVWYWx1ZSkpXHJcbiAgICBhZGphY2VudFNsb3RzLnB1c2goZ2V0Q2VsbFRvTGVmdChsYXN0U3VjY2Vzc2Z1bE1vdmVWYWx1ZSkpXHJcbiAgICByZXR1cm4gYWRqYWNlbnRTbG90c1xyXG4gIH1cclxuXHJcbiAgLy8gcHJldmVudHMgYWRkaW5nIGFkamFjZW50IHNsb3RzIHRoYXQgYXJlIG5vdCBvbiB0aGUgYm9hcmRcclxuICBjb25zdCByZW1vdmVJbGxlZ2FsQWRqYWNlbnRTbG90cyA9IChhZGphY2VudFNsb3RzKSA9PiB7XHJcbiAgICBjb25zdCBhZGphY2VudFNsb3RzQXJyID0gYWRqYWNlbnRTbG90c1xyXG4gICAgYWRqYWNlbnRTbG90c0Fyci5mb3JFYWNoKChzbG90LCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoc2xvdCA9PT0gJ2lsbGVnYWwnKSB7XHJcbiAgICAgICAgYWRqYWNlbnRTbG90c0Fyci5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gYWRqYWNlbnRTbG90c0FyclxyXG4gIH1cclxuXHJcbiAgLy8gaWYgdGhlIGNvbXB1dGVyIGhhcyBhbHJlYWR5IChyYW5kb21seSkgZ3Vlc3NlZCBhIHNwb3Qgb24gdGhlIGJvYXJkLCBwcmV2ZW50XHJcbiAgLy8gYWRkaW5nIHRoZSBzcG90IHRvIHRoZSBhZGphY2VuY3kgbGlzdFxyXG4gIGNvbnN0IHByZXZlbnRQcmV2aW91c1Nob3RUb1F1ZXVlID0gKFxyXG4gICAgYXZhaWxhYmxlTW92ZXMsXHJcbiAgICBhZGphY2VudFNsb3RzLFxyXG4gICAgc3VjY2Vzc2Z1bFNob3RzLFxyXG4gICAgbWlzc2VkU2hvdHNcclxuICApID0+IHtcclxuICAgIGNvbnN0IHNsb3RzID0gYWRqYWNlbnRTbG90c1xyXG4gICAgY29uc3QgYWxsUHJldmlvdXNBdHRhY2tzID0gc3VjY2Vzc2Z1bFNob3RzLmNvbmNhdChtaXNzZWRTaG90cylcclxuXHJcbiAgICBjb25zdCBwcmV2aW91c0F0dGFja3MgPSBuZXcgU2V0KClcclxuXHJcbiAgICBmb3IgKGNvbnN0IHNob3Qgb2YgYWxsUHJldmlvdXNBdHRhY2tzKSB7XHJcbiAgICAgIHByZXZpb3VzQXR0YWNrcy5hZGQoc2hvdC50b1N0cmluZygpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdvIHRocm91Z2ggZWFjaCBhZGphY2VuY3kgc2xvdCwgYW5kIGRldGVybWluZSBpZiB0aGUgc2xvdCBpcyBpbiB0aGVcclxuICAgIC8vIHByZXZpb3VzQXR0YWNrcyBtZXRob2QuIFdlIGFyZSBmaWx0ZXJpbmcgb3V0IHRoZSBzbG90cyB0aGF0IGFyZSBpblxyXG4gICAgLy8gdGhlIHByZXZpb3VzIGF0dGFjayBzZXQsIGFzIHdlIGRvIG5vdCB3YW50IHRvIGhhdmUgdGhlIGNvbXB1dGVyXHJcbiAgICAvLyB0byB1c2UgdGhvc2Ugc2xvdHMgYWdhaW4gaW4gZnV0dXJlIHR1cm5zXHJcbiAgICBjb25zdCBmaWx0ZXJlZFNsb3RzID0gc2xvdHMuZmlsdGVyKFxyXG4gICAgICAoc2xvdCkgPT4gIXByZXZpb3VzQXR0YWNrcy5oYXMoc2xvdC50b1N0cmluZygpKVxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybiBmaWx0ZXJlZFNsb3RzXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbWFrZVJhbmRvbU1vdmUsXHJcbiAgICBnZXROYW1lLFxyXG4gICAgZ2V0QWRqYWNlbnRTbG90cyxcclxuICAgIHByZXZlbnRQcmV2aW91c1Nob3RUb1F1ZXVlXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBTaGlwID0gKGxlbmd0aCwgbnVtT2ZIaXRzLCBpc1N1bmspID0+IHtcclxuICAvLyBJbmNyZWFzZSBudW1iZXIgb2YgaGl0cyBpbiBzaGlwIGJ5IDFcclxuICBjb25zdCBoaXQgPSAoKSA9PiB7XHJcbiAgICBpZiAobnVtT2ZIaXRzID09PSBsZW5ndGgpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgbnVtT2ZIaXRzKytcclxuICAgIHJldHVybiBudW1PZkhpdHNcclxuICB9XHJcblxyXG4gIC8vIERldGVybWluZSBpZiB0aGUgc2hpcCBvYmplY3QgaGFzIGJlZW4gc3Vua1xyXG4gIGNvbnN0IGhhc0JlZW5TdW5rID0gKCkgPT4ge1xyXG4gICAgbGV0IGlzU3VuayA9IGZhbHNlXHJcblxyXG4gICAgaWYgKGxlbmd0aCA9PT0gbnVtT2ZIaXRzKSB7XHJcbiAgICAgIGlzU3VuayA9IHRydWVcclxuICAgICAgcmV0dXJuIGlzU3Vua1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpc1N1bmtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldE51bU9mSGl0cyA9ICgpID0+IHtcclxuICAgIHJldHVybiBudW1PZkhpdHNcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHtcclxuICAgIHJldHVybiBsZW5ndGhcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGhpdCwgaGFzQmVlblN1bmssIGdldE51bU9mSGl0cywgZ2V0TGVuZ3RoIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgYXJyYXlzQXJlRXF1YWwgPSAoYXJyMSwgYXJyMikgPT4ge1xyXG4gIGlmIChhcnIxID09PSBudWxsIHx8IGFycjIgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICBpZiAoYXJyMS5sZW5ndGggIT09IGFycjIubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoYXJyMVtpXSAhPT0gYXJyMltpXSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG4iLCIvLyBkZWxheXMgZXhlY3V0aW9uIG9mIGEgZnVuY3Rpb24gZm9yIGEgc2V0IGFtb3VudCBvZiB0aW1lXHJcbmV4cG9ydCBjb25zdCBkZWxheSA9IChtcykgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHJldHVyblJhbmRvbUFJQm9hcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWlCb2FyZHMgPSBbYWlTaGlwQ29vcmRzT25lLCBhaVNoaXBDb29yZHNUd28sIGFpU2hpcENvb3Jkc1RocmVlXVxyXG4gIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMylcclxuICBjb25zdCBjaG9zZW5BSUJvYXJkID0gT2JqZWN0LnZhbHVlcyhhaUJvYXJkc1tyYW5kb21JbmRleF0pXHJcbiAgcmV0dXJuIGNob3NlbkFJQm9hcmRcclxufVxyXG5cclxuY29uc3QgYWlTaGlwQ29vcmRzT25lID0ge1xyXG4gIGNhcnJpZXI6IFtcclxuICAgIFs5LCAwXSxcclxuICAgIFs5LCAxXSxcclxuICAgIFs5LCAyXSxcclxuICAgIFs5LCAzXSxcclxuICAgIFs5LCA0XVxyXG4gIF0sXHJcbiAgYmF0dGxlc2hpcDogW1xyXG4gICAgWzUsIDVdLFxyXG4gICAgWzYsIDVdLFxyXG4gICAgWzcsIDVdLFxyXG4gICAgWzgsIDVdXHJcbiAgXSxcclxuICBjcnVpc2VyOiBbXHJcbiAgICBbMCwgNl0sXHJcbiAgICBbMSwgNl0sXHJcbiAgICBbMiwgNl1cclxuICBdLFxyXG4gIHN1Ym1hcmluZTogW1xyXG4gICAgWzMsIDhdLFxyXG4gICAgWzQsIDhdLFxyXG4gICAgWzUsIDhdXHJcbiAgXSxcclxuICBkZXN0cm95ZXI6IFtcclxuICAgIFswLCA5XSxcclxuICAgIFsxLCA5XVxyXG4gIF1cclxufVxyXG5cclxuY29uc3QgYWlTaGlwQ29vcmRzVHdvID0ge1xyXG4gIGNhcnJpZXI6IFtcclxuICAgIFswLCAwXSxcclxuICAgIFswLCAxXSxcclxuICAgIFswLCAyXSxcclxuICAgIFswLCAzXSxcclxuICAgIFswLCA0XVxyXG4gIF0sXHJcbiAgYmF0dGxlc2hpcDogW1xyXG4gICAgWzksIDVdLFxyXG4gICAgWzksIDZdLFxyXG4gICAgWzksIDddLFxyXG4gICAgWzksIDhdXHJcbiAgXSxcclxuICBjcnVpc2VyOiBbXHJcbiAgICBbMiwgMl0sXHJcbiAgICBbMywgMl0sXHJcbiAgICBbNCwgMl1cclxuICBdLFxyXG4gIHN1Ym1hcmluZTogW1xyXG4gICAgWzYsIDZdLFxyXG4gICAgWzYsIDddLFxyXG4gICAgWzYsIDhdXHJcbiAgXSxcclxuICBkZXN0cm95ZXI6IFtcclxuICAgIFs4LCAwXSxcclxuICAgIFs4LCAxXVxyXG4gIF1cclxufVxyXG5cclxuY29uc3QgYWlTaGlwQ29vcmRzVGhyZWUgPSB7XHJcbiAgY2FycmllcjogW1xyXG4gICAgWzUsIDBdLFxyXG4gICAgWzUsIDFdLFxyXG4gICAgWzUsIDJdLFxyXG4gICAgWzUsIDNdLFxyXG4gICAgWzUsIDRdXHJcbiAgXSxcclxuICBiYXR0bGVzaGlwOiBbXHJcbiAgICBbMCwgOV0sXHJcbiAgICBbMSwgOV0sXHJcbiAgICBbMiwgOV0sXHJcbiAgICBbMywgOV1cclxuICBdLFxyXG4gIGNydWlzZXI6IFtcclxuICAgIFs3LCA3XSxcclxuICAgIFs4LCA3XSxcclxuICAgIFs5LCA3XVxyXG4gIF0sXHJcbiAgc3VibWFyaW5lOiBbXHJcbiAgICBbMSwgMV0sXHJcbiAgICBbMiwgMV0sXHJcbiAgICBbMywgMV1cclxuICBdLFxyXG4gIGRlc3Ryb3llcjogW1xyXG4gICAgWzQsIDRdLFxyXG4gICAgWzQsIDVdXHJcbiAgXVxyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcclxcblxcclxcbi8qIERvY3VtZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxyXFxuICovXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBcHBseSBib3JkZXIgYm94IHRvIGVudGlyZSBkb2N1bWVudCAqL1xcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTZWN0aW9uc1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcclxcbiAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxyXFxufVxcclxcblxcclxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcclxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5wcmUge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXHJcXG4gICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5hYmJyW3RpdGxlXSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmIsXFxyXFxuc3Ryb25nIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuY29kZSxcXHJcXG5rYmQsXFxyXFxuc2FtcCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuc21hbGwge1xcclxcbiAgICBmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXHJcXG4gICAqIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnN1YixcXHJcXG5zdXAge1xcclxcbiAgICBmb250LXNpemU6IDc1JTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5zdWIge1xcclxcbiAgICBib3R0b206IC0wLjI1ZW07XFxyXFxufVxcclxcblxcclxcbnN1cCB7XFxyXFxuICAgIHRvcDogLTAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbWJlZGRlZCBjb250ZW50XFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcbmltZyB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9ybXNcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmlucHV0IHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxub3B0Z3JvdXAsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgLyogMiAqL1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHaXZlIGlucHV0IGFuZCB0ZXh0IGFyZWEgY29uc2lzdGVudCBsb29rICovXFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAtMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBmb250OiBib2xkIDAuNmVtIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIsXFxyXFxuYnV0dG9uOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgLyogYmFja2dyb3VuZDogIzAwMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7ICovXFxyXFxufVxcclxcblxcclxcbi8qIEdldHMgcmlkIG9mIGRlZmF1bHQgc2VhcmNoIHRvIHJlbW92ZSByZXN0cmljdGlvbnMgKi9cXHJcXG5pbnB1dFt0eXBlPSdzZWFyY2gnXSB7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEZpeCBmb3IgaW5jb25zaXN0ZW50IGRpc3BsYXkgb2YgY2xlYXIgXFxcInhcXFwiIGljb24gaW4gc2VhcmNoIGlucHV0cyBhY3Jvc3MgZGlmZmVyZW50IGJyb3dzZXJzLiBcXHJcXG4gICwgdGhpcyBjb2RlIHJlbW92ZXMgdGhlIGljb24gaW4gRWRnZSBhbmQgQ2hyb21lIHdoZW4gdGhlIGlucHV0IGxvc2VzIGZvY3VzLCB3aGlsZSBrZWVwaW5nIGl0IHZpc2libGUgaW4gU2FmYXJpLiAqL1xcclxcbmlucHV0W3R5cGU9J3NlYXJjaCddOm5vdCg6Zm9jdXMsIDphY3RpdmUpOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXHJcXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQge1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcclxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbnNlbGVjdCB7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bdHlwZT0nYnV0dG9uJ10sXFxyXFxuW3R5cGU9J3Jlc2V0J10sXFxyXFxuW3R5cGU9J3N1Ym1pdCddIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbjo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT0nYnV0dG9uJ106Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9J3Jlc2V0J106Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9J3N1Ym1pdCddOjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXHJcXG5bdHlwZT0nYnV0dG9uJ106LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9J3Jlc2V0J106LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9J3N1Ym1pdCddOi1tb3otZm9jdXNyaW5nIHtcXHJcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxyXFxuICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxyXFxuICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG4gICAgZGlzcGxheTogdGFibGU7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIC8qIDMgKi9cXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXHJcXG4gICAgLyogMSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5wcm9ncmVzcyB7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXHJcXG4gICAqL1xcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxyXFxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT0nY2hlY2tib3gnXSxcXHJcXG5bdHlwZT0ncmFkaW8nXSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcclxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9J3NlYXJjaCddIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5bdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBmb250OiBpbmhlcml0O1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIEludGVyYWN0aXZlXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcclxcbiAgICovXFxyXFxuXFxyXFxuZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxuc3VtbWFyeSB7XFxyXFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWlzY1xcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXHJcXG4gICAqL1xcclxcblxcclxcbnRlbXBsYXRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXHJcXG4gICAqL1xcclxcblxcclxcbltoaWRkZW5dIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLDhCQUE4QjtJQUM5QixNQUFNO0FBQ1Y7O0FBRUEsd0NBQXdDO0FBQ3hDO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOzs7SUFHSTs7QUFFSjtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7O0lBR0k7O0FBRUo7SUFDSSx1QkFBdUI7SUFDdkIsTUFBTTtJQUNOLFNBQVM7SUFDVCxNQUFNO0lBQ04saUJBQWlCO0lBQ2pCLE1BQU07QUFDVjs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSxpQ0FBaUM7SUFDakMsTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0FBQ1Y7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSxtQkFBbUI7SUFDbkIsTUFBTTtJQUNOLDBCQUEwQjtJQUMxQixNQUFNO0lBQ04saUNBQWlDO0lBQ2pDLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7OztJQUdJOztBQUVKOzs7SUFHSSxpQ0FBaUM7SUFDakMsTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0FBQ1Y7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOzs7SUFHSTs7QUFFSjs7SUFFSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7O0lBR0k7O0FBRUo7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7Ozs7O0lBS0ksb0JBQW9CO0lBQ3BCLE1BQU07SUFDTixlQUFlO0lBQ2YsTUFBTTtJQUNOLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sU0FBUztJQUNULE1BQU07SUFDTixVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBLDZDQUE2QztBQUM3Qzs7SUFFSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBOztJQUVJLGFBQWE7SUFDYjtrQkFDYztBQUNsQjs7QUFFQSxzREFBc0Q7QUFDdEQ7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7bUhBQ21IO0FBQ25IO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7O0lBR0k7O0FBRUo7O0lBRUksTUFBTTtJQUNOLGlCQUFpQjtBQUNyQjs7QUFFQTs7O0lBR0k7O0FBRUo7O0lBRUksTUFBTTtJQUNOLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSTs7QUFFSjs7OztJQUlJLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSTs7QUFFSjs7OztJQUlJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUk7O0FBRUo7Ozs7SUFJSSw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7Ozs7O0lBS0k7O0FBRUo7SUFDSSxzQkFBc0I7SUFDdEIsTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0lBQ04sY0FBYztJQUNkLE1BQU07SUFDTixlQUFlO0lBQ2YsTUFBTTtJQUNOLFVBQVU7SUFDVixNQUFNO0lBQ04sbUJBQW1CO0lBQ25CLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7OztJQUdJOztBQUVKOztJQUVJLHNCQUFzQjtJQUN0QixNQUFNO0lBQ04sWUFBWTtJQUNaLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSTs7QUFFSjtJQUNJLDZCQUE2QjtJQUM3QixNQUFNO0lBQ04sb0JBQW9CO0lBQ3BCLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSwwQkFBMEI7SUFDMUIsTUFBTTtJQUNOLGFBQWE7SUFDYixNQUFNO0FBQ1Y7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXHJcXG5cXHJcXG4vKiBEb2N1bWVudFxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcclxcbiAqL1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogQXBwbHkgYm9yZGVyIGJveCB0byBlbnRpcmUgZG9jdW1lbnQgKi9cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2VjdGlvbnNcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcclxcbiAgICovXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXHJcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHcm91cGluZyBjb250ZW50XFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXHJcXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcclxcbiAgICovXFxyXFxuXFxyXFxuaHIge1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAgICovXFxyXFxuXFxyXFxucHJlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxyXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYWJiclt0aXRsZV0ge1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICAvKiAyICovXFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5iLFxcclxcbnN0cm9uZyB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbmNvZGUsXFxyXFxua2JkLFxcclxcbnNhbXAge1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnNtYWxsIHtcXHJcXG4gICAgZm9udC1zaXplOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxyXFxuICAgKiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5zdWIsXFxyXFxuc3VwIHtcXHJcXG4gICAgZm9udC1zaXplOiA3NSU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuc3ViIHtcXHJcXG4gICAgYm90dG9tOiAtMC4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5zdXAge1xcclxcbiAgICB0b3A6IC0wLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRW1iZWRkZWQgY29udGVudFxcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEZvcm1zXFxyXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbm9wdGdyb3VwLFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIC8qIDIgKi9cXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyogR2l2ZSBpbnB1dCBhbmQgdGV4dCBhcmVhIGNvbnNpc3RlbnQgbG9vayAqL1xcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwIDAgLTEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZm9udDogYm9sZCAwLjZlbSBzYW5zLXNlcmlmO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyLFxcclxcbmJ1dHRvbjpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIC8qIGJhY2tncm91bmQ6ICMwMDA7XFxyXFxuICAgIGNvbG9yOiAjZmZmOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHZXRzIHJpZCBvZiBkZWZhdWx0IHNlYXJjaCB0byByZW1vdmUgcmVzdHJpY3Rpb25zICovXFxyXFxuaW5wdXRbdHlwZT0nc2VhcmNoJ10ge1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGaXggZm9yIGluY29uc2lzdGVudCBkaXNwbGF5IG9mIGNsZWFyIFxcXCJ4XFxcIiBpY29uIGluIHNlYXJjaCBpbnB1dHMgYWNyb3NzIGRpZmZlcmVudCBicm93c2Vycy4gXFxyXFxuICAsIHRoaXMgY29kZSByZW1vdmVzIHRoZSBpY29uIGluIEVkZ2UgYW5kIENocm9tZSB3aGVuIHRoZSBpbnB1dCBsb3NlcyBmb2N1cywgd2hpbGUga2VlcGluZyBpdCB2aXNpYmxlIGluIFNhZmFyaS4gKi9cXHJcXG5pbnB1dFt0eXBlPSdzZWFyY2gnXTpub3QoOmZvY3VzLCA6YWN0aXZlKTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxyXFxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcclxcbiAgICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0IHtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXHJcXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3Qge1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuW3R5cGU9J2J1dHRvbiddLFxcclxcblt0eXBlPSdyZXNldCddLFxcclxcblt0eXBlPSdzdWJtaXQnXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxyXFxuICAgKi9cXHJcXG5cXHJcXG46Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9J2J1dHRvbiddOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPSdyZXNldCddOjotbW96LWZvY3VzLWlubmVyLFxcclxcblt0eXBlPSdzdWJtaXQnXTo6LW1vei1mb2N1cy1pbm5lciB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9J2J1dHRvbiddOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPSdyZXNldCddOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPSdzdWJtaXQnXTotbW96LWZvY3VzcmluZyB7XFxyXFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcclxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcclxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcclxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAvKiAyICovXFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgLyogMSAqL1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAvKiAzICovXFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcclxcbiAgICovXFxyXFxuXFxyXFxucHJvZ3Jlc3Mge1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcclxcbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9J2NoZWNrYm94J10sXFxyXFxuW3R5cGU9J3JhZGlvJ10ge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXHJcXG4gICAqL1xcclxcblxcclxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXHJcXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxyXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXHJcXG4gICAqL1xcclxcblxcclxcblt0eXBlPSdzZWFyY2gnXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcclxcbiAgICAvKiAxICovXFxyXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcclxcbiAgICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcclxcbiAgICovXFxyXFxuXFxyXFxuW3R5cGU9J3NlYXJjaCddOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxuICAgIC8qIDEgKi9cXHJcXG4gICAgZm9udDogaW5oZXJpdDtcXHJcXG4gICAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbnRlcmFjdGl2ZVxcclxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXHJcXG4gICAqL1xcclxcblxcclxcbmRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXHJcXG4gICAqL1xcclxcblxcclxcbnN1bW1hcnkge1xcclxcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxyXFxufVxcclxcblxcclxcbi8qIE1pc2NcXHJcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG50ZW1wbGF0ZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxyXFxuICAgKi9cXHJcXG5cXHJcXG5baGlkZGVuXSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcclxcbiAgICBjb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi50b3BCYXJDb250YWluZXIge1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHdpZHRoOiA3NXZ3O1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcEJhckNvbnRhaW5lciBwIHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnNoaXBDZWxsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuI0FJQm9hcmQgYnV0dG9uLFxcclxcbiNwbGF5ZXJCb2FyZCBidXR0b24ge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyQm9hcmRDb250YWluZXIsXFxyXFxuLmFpQm9hcmRDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4jYm9hcmRzQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzMwcHgsIDM4dncpKTtcXHJcXG4gICAgd2lkdGg6IDgzdnc7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5vcmllbnRhdGlvblRvZ2dsZUJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBoZWlnaHQ6IDcwJTtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNib2FyZHNDb250YWluZXIgcCB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyQm9hcmQge1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjsgKi9cXHJcXG4gICAgaGVpZ2h0OiA2NXZoO1xcclxcbn1cXHJcXG5cXHJcXG4jQUlCb2FyZCB7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogMWZyOyAqL1xcclxcbiAgICBoZWlnaHQ6IDY1dmg7XFxyXFxufVxcclxcblxcclxcbi8qIGJ1dHRvbi5ib2FyZENlbGwge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcclxcbn0gKi9cXHJcXG5cXHJcXG5idXR0b24uc2hpcENlbGwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnNoaXBIaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDk0LCAyMik7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztJQUNULHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHdCQUF3QjtJQUN4Qiw0REFBNEQ7SUFDNUQsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7OztHQUdHOztBQUVIO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gICAgY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9wQmFyQ29udGFpbmVyIHtcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICB3aWR0aDogNzV2dztcXHJcXG4gICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b3BCYXJDb250YWluZXIgcCB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5zaGlwQ2VsbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxufVxcclxcblxcclxcbiNBSUJvYXJkIGJ1dHRvbixcXHJcXG4jcGxheWVyQm9hcmQgYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllckJvYXJkQ29udGFpbmVyLFxcclxcbi5haUJvYXJkQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuXFxyXFxuI2JvYXJkc0NvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMTJweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBub25lO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMzMHB4LCAzOHZ3KSk7XFxyXFxuICAgIHdpZHRoOiA4M3Z3O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3JpZW50YXRpb25Ub2dnbGVCdG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgaGVpZ2h0OiA3MCU7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYm9hcmRzQ29udGFpbmVyIHAge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllckJvYXJkIHtcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7ICovXFxyXFxuICAgIGhlaWdodDogNjV2aDtcXHJcXG59XFxyXFxuXFxyXFxuI0FJQm9hcmQge1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjsgKi9cXHJcXG4gICAgaGVpZ2h0OiA2NXZoO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBidXR0b24uYm9hcmRDZWxsIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXHJcXG59ICovXFxyXFxuXFxyXFxuYnV0dG9uLnNoaXBDZWxsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5zaGlwSGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCA5NCwgMjIpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1xyXG4gIGRpc3BsYXlDb250cm9sbGVyLFxyXG4gIHByZUdhbWVTZXR1cFxyXG59IGZyb20gJy4vY29udHJvbGxlcnMvZGlzcGxheUNvbnRyb2xsZXInXHJcblxyXG5pbXBvcnQgJy4vc3R5bGVzL25vcm1hbGl6ZS5jc3MnXHJcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJ1xyXG5cclxucHJlR2FtZVNldHVwKClcclxuIl0sIm5hbWVzIjpbImRlbGF5IiwiZ2FtZUNvbnRyb2xsZXIiLCJnYW1lIiwicHJlR2FtZVNldHVwIiwicmVuZGVyUGxheWVyQm9hcmQiLCJwbGFjZUNhcnJpZXJTaGlwIiwicmVuZGVyQUlCb2FyZCIsImRpc3BsYXlDb250cm9sbGVyIiwidG9wQmFyQ29udGFpbmVyUGFyYSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwicGxhY2VBSVNoaXBzIiwiYWlCb2FyZERpdiIsImdldEVsZW1lbnRCeUlkIiwicGxheWVycyIsImdldFBsYXllcnMiLCJhY3RpdmVQbGF5ZXIiLCJnZXRDdXJyZW50UGxheWVyIiwiaHVtYW4iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0IiwidG9wQmFyUGFyYSIsImh1bWFuQm9hcmREaXYiLCJvcmllbnRhdGlvbkJ0blZhbHVlcyIsImNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuIiwiaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyIsIm9yaWVudGF0aW9uVG9nZ2xlQnRuIiwiY29udHJvbGxlciIsIkFib3J0Q29udHJvbGxlciIsImUiLCJoYW5kbGVDYXJyaWVyU2hpcFBsYWNlbWVudCIsInNpZ25hbCIsInBsYWNlQmF0dGxlU2hpcCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVCYXR0bGVTaGlwUGxhY2VtZW50IiwicGxhY2VDcnVpc2VyIiwiaGFuZGxlQ3J1aXNlclNoaXBQbGFjZW1lbnQiLCJwbGFjZVN1Ym1hcmluZSIsImhhbmRsZVN1Ym1hcmluZVNoaXBQbGFjZW1lbnQiLCJwbGFjZURlc3Ryb3llciIsImhhbmRsZURlc3Ryb3llclNoaXBQbGFjZW1lbnQiLCJwbGF5ZXJCb2FyZCIsImdldEh1bWFuQm9hcmQiLCJwbGF5ZXJCb2FyZERpdiIsImlubmVySFRNTCIsImkiLCJsZW5ndGgiLCJjdXJyZW50Um93IiwiaiIsImJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0Iiwicm93IiwiY29sdW1uIiwiYXBwZW5kQ2hpbGQiLCJhaUJvYXJkIiwiZ2V0QUlCb2FyZCIsInVwZGF0ZUh1bWFuQm9hcmQiLCJodW1hbkJvYXJkIiwibWlzc2VkU2hvdHMiLCJnZXRIdW1hbkJvYXJkT2JqIiwiZ2V0TWlzc2VkU2hvdHMiLCJzdWNjZXNzZnVsU2hvdHMiLCJnZXRTdWNjZXNzZnVsU2hvdHMiLCJhbGxEb21Ob2RlcyIsIkFycmF5IiwiZnJvbSIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwic2hvdCIsInRhcmdldE5vZGUiLCJyZW1vdmUiLCJ1cGRhdGVBSUJvYXJkIiwiZ2V0QUlCb2FyZE9iaiIsImhvcml6b250YWxTaGlwT3JpZW50YXRpb24iLCJzZWxlY3RlZFJvdyIsInRhcmdldCIsInNlbGVjdGVkQ29sdW1uIiwiY29vcmRpbmF0ZSIsImNhcnJpZXJQbGFjZWQiLCJwbGFjZUNhcnJpZXJPbkJvYXJkIiwiYWJvcnQiLCJyZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuIiwiYmF0dGxlc2hpcFBsYWNlZCIsInBsYWNlQmF0dGxlc2hpcE9uQm9hcmQiLCJjcnVpc2VyUGxhY2VkIiwicGxhY2VDcnVpc2VyT25Cb2FyZCIsInN1Ym1hcmluZVBsYWNlZCIsInBsYWNlU3VibWFyaW5lT25Cb2FyZCIsImRlc3Ryb3llclBsYWNlZCIsInBsYWNlRGVzdHJveWVyT25Cb2FyZCIsInNoaXBUeXBlIiwiYm9hcmRET01DZWxsc0FyciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRIb3Jpem9udGFsRE9NQ29vcmRzIiwiZ2V0VmVydGljYWxET01Db29yZHMiLCJwbGFjZUNydWlzZXJTaGlwIiwicGxhY2VTdWJtYXJpbmVTaGlwIiwicGxhY2VEZXN0cm95ZXJTaGlwIiwic3RhcnRpbmdDb2x1bW4iLCJOdW1iZXIiLCJzaGlwTGVuZ3RoIiwiZG9tQ29vcmRpbmF0ZSIsInRhcmdldERPTUJ0biIsImZpbmRTaGlwRE9NQnRuIiwic3RhcnRpbmdSb3ciLCJkb21DZWxsUm93IiwiZG9tQ2VsbENvbHVtbiIsImFscmVhZHlBdHRhY2tlZCIsInByZXZlbnRTYW1lQXR0YWNrIiwicGxheVJvdW5kIiwiaHVtYW5Nb3ZlU3VjY2Vzc2Z1bCIsImdldExhc3RIdW1hbk1vdmVTdWNjZXNzZnVsIiwiZGlzcGxheVN1Y2Nlc3NmdWxBdHRhY2tNZXNzYWdlIiwiZGlzcGxheVVuc3VjY2Vzc2Z1bEF0dGFja01lc3NhZ2UiLCJodW1hbldpbnMiLCJjaGVja0ZvcldpbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNldEdhbWVTdGF0ZSIsImFubm91bmNlV2lubmVyIiwicGxheUFnYWluIiwiaGFuZGxlQUlNb3ZlIiwiYWlNb3ZlU3VjY2Vzc2Z1bCIsImdldExhc3RBSU1vdmVTdWNjZXNzZnVsIiwiYWlXaW5zIiwid2lubmVyIiwid2lubmVyTmFtZSIsImdldE5hbWUiLCJ0b3BCYXJEaXYiLCJwbGF5QWdhaW5CdG4iLCJzdGFydE5ld0dhbWUiLCJyZW1vdmVDaGlsZCIsInByZXZpb3VzT3JpZW50YXRpb25CdG4iLCJwbGF5ZXIiLCJHYW1lYm9hcmQiLCJQbGF5ZXIiLCJyZXR1cm5SYW5kb21BSUJvYXJkIiwiY3JlYXRlR2FtZUJvYXJkIiwiY2FycmllckFyciIsImRldGVybWluZUNhcnJpZXJBcnJDb29yZHMiLCJzaGlwUGxhY2VkIiwicGxhY2VTaGlwIiwicHVzaCIsImNvb3JkIiwidG9TdHJpbmciLCJiYXR0bGVzaGlwQXJyIiwiZGV0ZXJtaW5lQmF0dGxlc2hpcEFyckNvb3JkcyIsImNydWlzZXJBcnIiLCJkZXRlcm1pbmVDcnVpc2VyQXJyQ29vcmRzIiwic3VibWFyaW5lQXJyIiwiZGV0ZXJtaW5lU3VibWFyaW5lQXJyQ29vcmRzIiwiZGVzdHJveWVyQXJyIiwiZGV0ZXJtaW5lRGVzdHJveWVyQXJyQ29vcmRzIiwicGxhY2VTaGlwcyIsImh1bWFuUGxheWVyIiwiYWlQbGF5ZXIiLCJBSSIsImN1cnJlbnRQbGF5ZXIiLCJyZWNlaXZlQXR0YWNrIiwibmV4dE1vdmUiLCJjb21wdXRlcnNOZXh0TW92ZSIsInJlbW92ZUxhc3RBSU1vdmUiLCJzd2l0Y2hQbGF5ZXIiLCJhdmFpbGFibGVNb3ZlcyIsImdldEFJQXZhaWxhYmxlTW92ZXMiLCJsYXN0QUlNb3ZlU3VjY2Vzc2Z1bCIsImFkamFjZW50U2xvdHMiLCJnZXRBZGphY2VudFNsb3RzIiwiZ2V0QWRqYWNlbnRTbG90c1F1ZXVlIiwiYWRkQWRqYWNlbnRTbG90c1RvUXVldWUiLCJnZXRBZGphY2VudFF1ZXVlU2xvdCIsInJhbmRvbU1vdmUiLCJtYWtlUmFuZG9tTW92ZSIsImFsbFNoaXBzU3VuayIsImNsZWFyR2FtZUJvYXJkIiwiZ2V0Qm9hcmQiLCJib2FyZCIsImNvb3JkaW5hdGVzT2JqIiwic2hpcENvb3JkaW5hdGVzQXJyIiwiT2JqZWN0IiwidmFsdWVzIiwic2hpcENvb3JkaW5hdGVzIiwiYXJyYXlzQXJlRXF1YWwiLCJTaGlwIiwic2hpcE9iamVjdHMiLCJhaUF2YWlsYWJsZU1vdmVzIiwiYWRqYWNlbnRTbG90c1F1ZXVlIiwicm93cyIsImNvbHVtbnMiLCJsYXN0SHVtYW5Nb3ZlU3VjY2Vzc2Z1bCIsInVuZGVmaW5lZCIsInZhbGlkYXRlQ29vcmRpbmF0ZXMiLCJjb29yZGluYXRlcyIsInZhbGlkQ29vcmRpbmF0ZXMiLCJjaGVja1NlbGZPdmVybGFwIiwiY29vcmRpbmF0ZXNPdmVybGFwIiwicHJldkNvb3JkaW5hdGUiLCJpbmRleCIsImNoZWNrT3ZlcmxhcFdpdGhPdGhlclNoaXBzIiwic2hpcHNPdmVybGFwIiwiYm9hcmRDZWxsIiwibGVnYWxDb29yZGluYXRlcyIsIm92ZXJsYXBwaW5nQ29vcmRpbmF0ZXMiLCJzaGlwT3ZlcmxhcHBpbmciLCJzaGlwT2JqZWN0Iiwic2hpcE9iaiIsImhpdCIsInJlbW92ZUFkamFjZW50U2xvdCIsInRhcmdldENvb3JkaW5hdGVzIiwiYWRqYWNlbnRRdWV1ZSIsIlNldCIsInNsb3QiLCJmaWx0ZXIiLCJldmVyeVNoaXBTYW5rIiwiaGFzQmVlblN1bmsiLCJtb3ZlIiwic3BsaWNlIiwiZ2V0U2hpcE9iamVjdHMiLCJwb3AiLCJnZXRMYXN0U3VjY2Vzc2Z1bE1vdmUiLCJhdCIsIm5hbWUiLCJpc0FJIiwiYXZhaWxhYmxlTW92ZXNMZW5ndGgiLCJyYW5kb21BcnJJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbUNvb3JkaW5hdGUiLCJsYXN0U3VjY2Vzc2Z1bE1vdmUiLCJyZXRyaWV2ZUFkamFjZW50U2xvdHMiLCJsZWdhbEFkamFjZW50U2xvdHMiLCJyZW1vdmVJbGxlZ2FsQWRqYWNlbnRTbG90cyIsImdldENlbGxBYm92ZSIsIm5ld0FyciIsIm5ld1JvdyIsImdldENlbGxCZWxvdyIsImFyciIsImdldENlbGxUb1JpZ2h0IiwibmV3Q29sdW1uIiwiZ2V0Q2VsbFRvTGVmdCIsImxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlIiwiYWRqYWNlbnRTbG90c0FyciIsInByZXZlbnRQcmV2aW91c1Nob3RUb1F1ZXVlIiwic2xvdHMiLCJhbGxQcmV2aW91c0F0dGFja3MiLCJjb25jYXQiLCJwcmV2aW91c0F0dGFja3MiLCJmaWx0ZXJlZFNsb3RzIiwiaGFzIiwibnVtT2ZIaXRzIiwiaXNTdW5rIiwiZ2V0TnVtT2ZIaXRzIiwiZ2V0TGVuZ3RoIiwiYXJyMSIsImFycjIiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImFpQm9hcmRzIiwiYWlTaGlwQ29vcmRzT25lIiwiYWlTaGlwQ29vcmRzVHdvIiwiYWlTaGlwQ29vcmRzVGhyZWUiLCJyYW5kb21JbmRleCIsImNob3NlbkFJQm9hcmQiLCJjYXJyaWVyIiwiYmF0dGxlc2hpcCIsImNydWlzZXIiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiXSwic291cmNlUm9vdCI6IiJ9