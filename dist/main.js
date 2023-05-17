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
    signal: controller.controller
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
  const destroyerPlaced = placeDestroyerOnBoard(coordinate, horizontalShipOrientation);
  if (destroyerPlaced) {
    controller.abort();
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
      const adjacentSlots = currentPlayer.getAdjacentSlots(true, availableMoves, humanBoard.getAdjacentSlotsQueue(), humanBoard.getSuccessfulShots());
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
  const adjacentSlotsQueue = [];
  const rows = 9;
  const columns = 9;
  let lastAIMoveSuccessful = false;
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
      successfulShots.push(coordinates);
    } else if (typeof boardCell !== 'object') {
      lastAIMoveSuccessful = false;
      missedShots.push(coordinates);
      removeAdjacentSlot(coordinates);
    }
  };

  // If the computer randomly guesses a spot that is in the adjacent
  // slot queue, we need to remove it (from the adjacency queue) so the computer does not attempt to
  // guess a spot that has already been guesed.
  const removeAdjacentSlot = coordinates => {
    for (let i = 0; i < adjacentSlotsQueue.length; i++) {
      if ((0,_helpers_arraysAreEqual__WEBPACK_IMPORTED_MODULE_0__.arraysAreEqual)(adjacentSlotsQueue[i], coordinates)) {
        adjacentSlotsQueue.splice(i, 1);
        return;
      }
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
  const getAdjacentSlotsQueue = () => {
    return adjacentSlotsQueue;
  };
  const getAdjacentQueueSlot = () => {
    return adjacentSlotsQueue.pop();
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
    getAdjacentSlotsQueue,
    addAdjacentSlotsToQueue,
    getAdjacentQueueSlot,
    removeAdjacentSlot
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
  const getAdjacentSlots = (isAI, availableMoves, adjacentQueue, successfulShots) => {
    if (!isAI || availableMoves.length === 0) {
      return undefined;
    }
    const lastSuccessfulMove = successfulShots.at(-1);
    const adjacentSlots = retrieveAdjacentSlots(lastSuccessfulMove);
    const legalAdjacentSlots = removeIllegalAdjacentSlots(adjacentSlots);
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
  const preventPreviousShotToQueue = coordinate => {
    // in progress
  };
  return {
    makeRandomMove,
    getName,
    getAdjacentSlots,
    getCellAbove
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    width: 100vw;\n    overflow-x: hidden;\n}\n\nheader {\n    background-color: darkblue;\n    color: rgb(236, 236, 236);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 80px;\n}\n\n.headerContainer {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\nmain {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.topBarContainer {\n    outline: 1px solid black;\n    width: 75vw;\n    height: 80px;\n    margin-top: 24px;\n    display: flex;\n    gap: 10%;\n    justify-content: center;\n    align-items: center;\n}\n\n.topBarContainer p {\n    align-items: center;\n}\n\nbutton.shipCell {\n    background-color: grey;\n}\n\n#AIBoard button,\n#playerBoard button {\n    border-radius: 0;\n}\n\n.playerBoardContainer,\n.aiBoardContainer {\n    display: grid;\n}\n\n#boardsContainer {\n    display: flex;\n    justify-content: center;\n    gap: 12px;\n    outline: 1px solid black;\n    padding: 12px;\n    display: grid;\n    grid-template-rows: none;\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n    width: 72vw;\n}\n\n.orientationToggleBtn {\n    background-color: #333;\n    color: white;\n    border-radius: 8px;\n    height: 70%;\n    width: 100px;\n    font-size: 1rem;\n}\n\n#boardsContainer p {\n    justify-self: center;\n}\n\n#playerBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 54px);\n}\n\n#AIBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 54px);\n}\n\n/* button.boardCell {\n    border: 1px solid black;\n    border-radius: 0px;\n} */\n\nbutton.shipCell {\n    background-color: grey;\n    border: 1px solid black;\n}\n\nbutton.shipHit {\n    background-color: rgb(22, 94, 22);\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;IAC1B,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,OAAO;IACP,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,wBAAwB;IACxB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,QAAQ;IACR,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,wBAAwB;IACxB,aAAa;IACb,aAAa;IACb,wBAAwB;IACxB,2DAA2D;IAC3D,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,oCAAoC;AACxC;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,oCAAoC;AACxC;;AAEA;;;GAGG;;AAEH;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,iCAAiC;AACrC","sourcesContent":["body {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    width: 100vw;\n    overflow-x: hidden;\n}\n\nheader {\n    background-color: darkblue;\n    color: rgb(236, 236, 236);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 80px;\n}\n\n.headerContainer {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\nmain {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.topBarContainer {\n    outline: 1px solid black;\n    width: 75vw;\n    height: 80px;\n    margin-top: 24px;\n    display: flex;\n    gap: 10%;\n    justify-content: center;\n    align-items: center;\n}\n\n.topBarContainer p {\n    align-items: center;\n}\n\nbutton.shipCell {\n    background-color: grey;\n}\n\n#AIBoard button,\n#playerBoard button {\n    border-radius: 0;\n}\n\n.playerBoardContainer,\n.aiBoardContainer {\n    display: grid;\n}\n\n#boardsContainer {\n    display: flex;\n    justify-content: center;\n    gap: 12px;\n    outline: 1px solid black;\n    padding: 12px;\n    display: grid;\n    grid-template-rows: none;\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n    width: 72vw;\n}\n\n.orientationToggleBtn {\n    background-color: #333;\n    color: white;\n    border-radius: 8px;\n    height: 70%;\n    width: 100px;\n    font-size: 1rem;\n}\n\n#boardsContainer p {\n    justify-self: center;\n}\n\n#playerBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 54px);\n}\n\n#AIBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 54px);\n}\n\n/* button.boardCell {\n    border: 1px solid black;\n    border-radius: 0px;\n} */\n\nbutton.shipCell {\n    background-color: grey;\n    border: 1px solid black;\n}\n\nbutton.shipHit {\n    background-color: rgb(22, 94, 22);\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3RCLENBQUM7QUFFRCxNQUFNSixlQUFlLEdBQUc7RUFDdEJLLE9BQU8sRUFBRSxDQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFVBQVUsRUFBRSxDQUNWLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLE9BQU8sRUFBRSxDQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFNBQVMsRUFBRSxDQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFNBQVMsRUFBRSxDQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVWLENBQUM7QUFFRCxNQUFNUixlQUFlLEdBQUc7RUFDdEJJLE9BQU8sRUFBRSxDQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFVBQVUsRUFBRSxDQUNWLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLE9BQU8sRUFBRSxDQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFNBQVMsRUFBRSxDQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQO0VBQ0RDLFNBQVMsRUFBRSxDQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVWLENBQUM7QUFFRCxNQUFNUCxpQkFBaUIsR0FBRztFQUN4QkcsT0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7RUFDREMsVUFBVSxFQUFFLENBQ1YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7RUFDREMsT0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7RUFDREMsU0FBUyxFQUFFLENBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxD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QUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxRQUFRLE1BQU0sS0FBSyxZQUFZLE9BQU8sU0FBUyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxPQUFPLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxLQUFLLE1BQU0sT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxTQUFTLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxL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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0d3QztBQUVUO0FBQ0o7QUFFM0J6UCw0RUFBWSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2NvbnRyb2xsZXJzL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2NvbnRyb2xsZXJzL2dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2ZhY3Rvcmllcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvZmFjdG9yaWVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9mYWN0b3JpZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9oZWxwZXJzL2FycmF5c0FyZUVxdWFsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2hlbHBlcnMvcm90YXRlQUlCb2FyZHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzcz80M2Y0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9nYW1lQ29udHJvbGxlcidcblxuY29uc3QgZ2FtZSA9IGdhbWVDb250cm9sbGVyKClcblxuY29uc3QgcHJlR2FtZVNldHVwID0gKCkgPT4ge1xuICByZW5kZXJQbGF5ZXJCb2FyZCgpXG4gIHBsYWNlQ2FycmllclNoaXAoKVxuICByZW5kZXJBSUJvYXJkKClcbn1cblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIC8vIHRoaXMgaXMgd2hlcmUgdGhlIHNoaXAgcGxhY2VtZW50IHdpbGwgaGFwcGVuIGZvciBodW1hbiBwbGF5ZXJcbiAgZ2FtZS5wbGFjZUFJU2hpcHMoKVxuICByZW5kZXJBSUJvYXJkKClcbiAgY29uc3QgYWlCb2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSUJvYXJkJylcbiAgY29uc3QgcGxheWVycyA9IGdhbWUuZ2V0UGxheWVycygpXG4gIGNvbnN0IGFjdGl2ZVBsYXllciA9IGdhbWUuZ2V0Q3VycmVudFBsYXllcigpXG5cbiAgaWYgKGFjdGl2ZVBsYXllciA9PT0gcGxheWVycy5odW1hbikge1xuICAgIGFpQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnQpXG4gIH1cbn1cblxuY29uc3QgcGxhY2VDYXJyaWVyU2hpcCA9ICgpID0+IHtcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIGNhcnJpZXIgc2hpcCdcblxuICBjb25zdCBodW1hbkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckJvYXJkJylcblxuICBjb25zdCBvcmllbnRhdGlvbkJ0blZhbHVlcyA9IGNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuKClcbiAgbGV0IGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBvcmllbnRhdGlvbkJ0blZhbHVlc1swXVxuICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZUJ0biA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzFdXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID09PSB0cnVlKSB7XG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gZmFsc2VcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJ1xuICAgIH0gZWxzZSB7XG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICBodW1hbkJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2NsaWNrJyxcbiAgICAoZSkgPT4ge1xuICAgICAgaGFuZGxlQ2FycmllclNoaXBQbGFjZW1lbnQoZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cywgY29udHJvbGxlcilcbiAgICB9LFxuICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XG4gIClcbn1cblxuY29uc3QgcGxhY2VCYXR0bGVTaGlwID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgYmF0dGxlc2hpcCdcblxuICBjb25zdCBodW1hbkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckJvYXJkJylcblxuICBjb25zdCBvcmllbnRhdGlvbkJ0blZhbHVlcyA9IGNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuKClcbiAgbGV0IGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBvcmllbnRhdGlvbkJ0blZhbHVlc1swXVxuICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZUJ0biA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzFdXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID09PSB0cnVlKSB7XG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gZmFsc2VcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJ1xuICAgIH0gZWxzZSB7XG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICBodW1hbkJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2NsaWNrJyxcbiAgICAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICdPcmllbnRhdGlvbiBzdGF0dXMgZ29pbmcgaW50byBwbGFjZW1lbnQ6JyArXG4gICAgICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1c1xuICAgICAgKVxuICAgICAgaGFuZGxlQmF0dGxlU2hpcFBsYWNlbWVudChlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzLCBjb250cm9sbGVyKVxuICAgIH0sXG4gICAgeyBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsIH1cbiAgKVxufVxuXG5jb25zdCBwbGFjZUNydWlzZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBDcnVpc2VyJ1xuXG4gIGNvbnN0IGh1bWFuQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyQm9hcmQnKVxuXG4gIGNvbnN0IG9yaWVudGF0aW9uQnRuVmFsdWVzID0gY3JlYXRlT3JpZW50YXRpb25Ub2dnbGVCdG4oKVxuICBsZXQgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzBdXG4gIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlQnRuID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMV1cbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPT09IHRydWUpIHtcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBmYWxzZVxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnVmVydGljYWwnXG4gICAgfSBlbHNlIHtcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJ1xuICAgIH1cbiAgfSlcblxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgIChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgJ09yaWVudGF0aW9uIHN0YXR1cyBnb2luZyBpbnRvIHBsYWNlbWVudDonICtcbiAgICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzXG4gICAgICApXG4gICAgICBoYW5kbGVDcnVpc2VyU2hpcFBsYWNlbWVudChlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzLCBjb250cm9sbGVyKVxuICAgIH0sXG4gICAgeyBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsIH1cbiAgKVxufVxuXG5jb25zdCBwbGFjZVN1Ym1hcmluZSA9ICgpID0+IHtcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIFN1Ym1hcmluZSdcblxuICBjb25zdCBodW1hbkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckJvYXJkJylcblxuICBjb25zdCBvcmllbnRhdGlvbkJ0blZhbHVlcyA9IGNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuKClcbiAgbGV0IGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBvcmllbnRhdGlvbkJ0blZhbHVlc1swXVxuICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZUJ0biA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzFdXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID09PSB0cnVlKSB7XG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gZmFsc2VcbiAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJ1xuICAgIH0gZWxzZSB7XG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgaHVtYW5Cb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgICdjbGljaycsXG4gICAgKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnT3JpZW50YXRpb24gc3RhdHVzIGdvaW5nIGludG8gcGxhY2VtZW50OicgK1xuICAgICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXNcbiAgICAgIClcbiAgICAgIGhhbmRsZVN1Ym1hcmluZVNoaXBQbGFjZW1lbnQoXG4gICAgICAgIGUsXG4gICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMsXG4gICAgICAgIGNvbnRyb2xsZXJcbiAgICAgIClcbiAgICB9LFxuICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLmNvbnRyb2xsZXIgfVxuICApXG59XG5cbmNvbnN0IHBsYWNlRGVzdHJveWVyID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgRGVzdHJveWVyJ1xuXG4gIGNvbnN0IGh1bWFuQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyQm9hcmQnKVxuXG4gIGNvbnN0IG9yaWVudGF0aW9uQnRuVmFsdWVzID0gY3JlYXRlT3JpZW50YXRpb25Ub2dnbGVCdG4oKVxuICBsZXQgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IG9yaWVudGF0aW9uQnRuVmFsdWVzWzBdXG4gIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlQnRuID0gb3JpZW50YXRpb25CdG5WYWx1ZXNbMV1cbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPT09IHRydWUpIHtcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBmYWxzZVxuICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnVmVydGljYWwnXG4gICAgfSBlbHNlIHtcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXG4gICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJ1xuICAgIH1cbiAgfSlcblxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgIChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgJ09yaWVudGF0aW9uIHN0YXR1cyBnb2luZyBpbnRvIHBsYWNlbWVudDonICtcbiAgICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzXG4gICAgICApXG4gICAgICBoYW5kbGVEZXN0cm95ZXJTaGlwUGxhY2VtZW50KFxuICAgICAgICBlLFxuICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzLFxuICAgICAgICBjb250cm9sbGVyXG4gICAgICApXG4gICAgfSxcbiAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxuICApXG59XG5cbmNvbnN0IHJlbmRlclBsYXllckJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGdhbWUuZ2V0SHVtYW5Cb2FyZCgpXG4gIGNvbnN0IHBsYXllckJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckJvYXJkJylcbiAgcGxheWVyQm9hcmREaXYuaW5uZXJIVE1MID0gJydcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudFJvdyA9IHBsYXllckJvYXJkW2ldXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50Um93Lmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JvYXJkQ2VsbCcpXG4gICAgICBidXR0b24uZGF0YXNldC5yb3cgPSBpXG4gICAgICBidXR0b24uZGF0YXNldC5jb2x1bW4gPSBqXG5cbiAgICAgIHBsYXllckJvYXJkRGl2LmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgcmVuZGVyQUlCb2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYWlCb2FyZCA9IGdhbWUuZ2V0QUlCb2FyZCgpXG4gIGNvbnN0IGFpQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlCb2FyZCcpXG4gIGFpQm9hcmREaXYuaW5uZXJIVE1MID0gJydcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFpQm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjdXJyZW50Um93ID0gYWlCb2FyZFtpXVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudFJvdy5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdib2FyZENlbGwnKVxuICAgICAgYnV0dG9uLmRhdGFzZXQucm93ID0gaVxuICAgICAgYnV0dG9uLmRhdGFzZXQuY29sdW1uID0galxuICAgICAgY29uc3Qgcm93ID0gYWlCb2FyZFtpXVxuICAgICAgLy8gZm9yIHRlc3RpbmcsIHRoaXMgc2hvd3MgQUkgYm9hcmQgYXQgc3RhcnRcbiAgICAgIC8vIHdoaWNoIHdlIGRvIG5vdCB3YW50XG4gICAgICBpZiAodHlwZW9mIHJvd1tqXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NoaXBDZWxsJylcbiAgICAgIH1cbiAgICAgIGFpQm9hcmREaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCB1cGRhdGVIdW1hbkJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBodW1hbkJvYXJkID0gZ2FtZS5nZXRIdW1hbkJvYXJkKClcbiAgY29uc3QgbWlzc2VkU2hvdHMgPSBnYW1lLmdldEh1bWFuQm9hcmRPYmouZ2V0TWlzc2VkU2hvdHMoKVxuICBjb25zdCBzdWNjZXNzZnVsU2hvdHMgPSBnYW1lLmdldEh1bWFuQm9hcmRPYmouZ2V0U3VjY2Vzc2Z1bFNob3RzKClcbiAgY29uc3QgYWxsRG9tTm9kZXMgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJCb2FyZCcpLmNoaWxkTm9kZXNcbiAgKVxuXG4gIG1pc3NlZFNob3RzLmZvckVhY2goKHNob3QpID0+IHtcbiAgICBjb25zdCByb3cgPSBzaG90WzBdXG4gICAgY29uc3QgY29sdW1uID0gc2hvdFsxXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEb21Ob2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGFsbERvbU5vZGVzW2ldLmRhdGFzZXRcbiAgICAgIGlmICgrdGFyZ2V0Tm9kZS5jb2x1bW4gPT09IGNvbHVtbiAmJiArdGFyZ2V0Tm9kZS5yb3cgPT09IHJvdykge1xuICAgICAgICBhbGxEb21Ob2Rlc1tpXS50ZXh0Q29udGVudCA9ICdYJ1xuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICBzdWNjZXNzZnVsU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IHNob3RbMF1cbiAgICBjb25zdCBjb2x1bW4gPSBzaG90WzFdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERvbU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YXJnZXROb2RlID0gYWxsRG9tTm9kZXNbaV1cbiAgICAgIGlmIChcbiAgICAgICAgK3RhcmdldE5vZGUuZGF0YXNldC5jb2x1bW4gPT09IGNvbHVtbiAmJlxuICAgICAgICArdGFyZ2V0Tm9kZS5kYXRhc2V0LnJvdyA9PT0gcm93XG4gICAgICApIHtcbiAgICAgICAgdGFyZ2V0Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwQ2VsbCcpXG4gICAgICAgIHRhcmdldE5vZGUuY2xhc3NMaXN0LmFkZCgnc2hpcEhpdCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgdXBkYXRlQUlCb2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYWlCb2FyZCA9IGdhbWUuZ2V0QUlCb2FyZCgpXG4gIGNvbnN0IG1pc3NlZFNob3RzID0gZ2FtZS5nZXRBSUJvYXJkT2JqLmdldE1pc3NlZFNob3RzKClcbiAgY29uc3Qgc3VjY2Vzc2Z1bFNob3RzID0gZ2FtZS5nZXRBSUJvYXJkT2JqLmdldFN1Y2Nlc3NmdWxTaG90cygpXG4gIGNvbnN0IGFsbERvbU5vZGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlCb2FyZCcpLmNoaWxkTm9kZXMpXG5cbiAgbWlzc2VkU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IHNob3RbMF1cbiAgICBjb25zdCBjb2x1bW4gPSBzaG90WzFdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERvbU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YXJnZXROb2RlID0gYWxsRG9tTm9kZXNbaV0uZGF0YXNldFxuICAgICAgaWYgKHRhcmdldE5vZGUuY29sdW1uID09PSBjb2x1bW4gJiYgdGFyZ2V0Tm9kZS5yb3cgPT09IHJvdykge1xuICAgICAgICBhbGxEb21Ob2Rlc1tpXS50ZXh0Q29udGVudCA9ICdYJ1xuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICBzdWNjZXNzZnVsU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IHNob3RbMF1cbiAgICBjb25zdCBjb2x1bW4gPSBzaG90WzFdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERvbU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YXJnZXROb2RlID0gYWxsRG9tTm9kZXNbaV1cbiAgICAgIGlmIChcbiAgICAgICAgdGFyZ2V0Tm9kZS5kYXRhc2V0LmNvbHVtbiA9PT0gY29sdW1uICYmXG4gICAgICAgIHRhcmdldE5vZGUuZGF0YXNldC5yb3cgPT09IHJvd1xuICAgICAgKSB7XG4gICAgICAgIHRhcmdldE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcENlbGwnKVxuICAgICAgICB0YXJnZXROb2RlLmNsYXNzTGlzdC5hZGQoJ3NoaXBIaXQnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGhhbmRsZUNhcnJpZXJTaGlwUGxhY2VtZW50ID0gKFxuICBlLFxuICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICBjb250cm9sbGVyXG4pID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxuXG4gIGNvbnN0IGNhcnJpZXJQbGFjZWQgPSBwbGFjZUNhcnJpZXJPbkJvYXJkKFxuICAgIGNvb3JkaW5hdGUsXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxuICApXG5cbiAgaWYgKGNhcnJpZXJQbGFjZWQpIHtcbiAgICBjb250cm9sbGVyLmFib3J0KClcbiAgICByZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuKClcbiAgICBwbGFjZUJhdHRsZVNoaXAoKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwbGFjZUNhcnJpZXJTaGlwXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlQmF0dGxlU2hpcFBsYWNlbWVudCA9IChcbiAgZSxcbiAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgY29udHJvbGxlclxuKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cblxuICBjb25zdCBiYXR0bGVzaGlwUGxhY2VkID0gcGxhY2VCYXR0bGVzaGlwT25Cb2FyZChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuXG4gIGlmIChiYXR0bGVzaGlwUGxhY2VkKSB7XG4gICAgY29udHJvbGxlci5hYm9ydCgpXG4gICAgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0bigpXG4gICAgcGxhY2VDcnVpc2VyKClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGxhY2VCYXR0bGVTaGlwXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlQ3J1aXNlclNoaXBQbGFjZW1lbnQgPSAoXG4gIGUsXG4gIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXG4gIGNvbnRyb2xsZXJcbikgPT4ge1xuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cbiAgY29uc3QgY29vcmRpbmF0ZSA9IFtzZWxlY3RlZFJvdywgc2VsZWN0ZWRDb2x1bW5dXG5cbiAgY29uc3QgY3J1aXNlclBsYWNlZCA9IHBsYWNlQ3J1aXNlck9uQm9hcmQoXG4gICAgY29vcmRpbmF0ZSxcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXG4gIClcblxuICBpZiAoY3J1aXNlclBsYWNlZCkge1xuICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxuICAgIHJlbW92ZVByZXZpb3VzT3JpZW50YXRpb25CdG4oKVxuICAgIHBsYWNlU3VibWFyaW5lKClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGxhY2VDcnVpc2VyXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlU3VibWFyaW5lU2hpcFBsYWNlbWVudCA9IChcbiAgZSxcbiAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgY29udHJvbGxlclxuKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cblxuICBjb25zdCBzdWJtYXJpbmVQbGFjZWQgPSBwbGFjZVN1Ym1hcmluZU9uQm9hcmQoXG4gICAgY29vcmRpbmF0ZSxcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXG4gIClcblxuICBpZiAoc3VibWFyaW5lUGxhY2VkKSB7XG4gICAgY29udHJvbGxlci5hYm9ydCgpXG4gICAgcmVtb3ZlUHJldmlvdXNPcmllbnRhdGlvbkJ0bigpXG4gICAgcGxhY2VEZXN0cm95ZXIoKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwbGFjZVN1Ym1hcmluZVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZURlc3Ryb3llclNoaXBQbGFjZW1lbnQgPSAoXG4gIGUsXG4gIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXG4gIGNvbnRyb2xsZXJcbikgPT4ge1xuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cbiAgY29uc3QgY29vcmRpbmF0ZSA9IFtzZWxlY3RlZFJvdywgc2VsZWN0ZWRDb2x1bW5dXG5cbiAgY29uc3QgZGVzdHJveWVyUGxhY2VkID0gcGxhY2VEZXN0cm95ZXJPbkJvYXJkKFxuICAgIGNvb3JkaW5hdGUsXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxuICApXG5cbiAgaWYgKGRlc3Ryb3llclBsYWNlZCkge1xuICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxuICAgIHJlbW92ZVByZXZpb3VzT3JpZW50YXRpb25CdG4oKVxuICAgIGRpc3BsYXlDb250cm9sbGVyKClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGxhY2VEZXN0cm95ZXJcbiAgfVxufVxuXG5jb25zdCBwbGFjZUNhcnJpZXJPbkJvYXJkID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgY29uc3Qgc2hpcFR5cGUgPSAnY2FycmllcidcbiAgY29uc3QgY2FycmllclBsYWNlZCA9IGdhbWUucGxhY2VDYXJyaWVyU2hpcChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuICBjb25zdCBib2FyZERPTUNlbGxzQXJyID0gW1xuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXG4gIF1cbiAgaWYgKCFjYXJyaWVyUGxhY2VkKSB7XG4gICAgcmV0dXJuIGNhcnJpZXJQbGFjZWRcbiAgfSBlbHNlIHtcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZ2V0SG9yaXpvbnRhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBnZXRWZXJ0aWNhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNhcnJpZXJQbGFjZWRcbn1cblxuY29uc3QgcGxhY2VCYXR0bGVzaGlwT25Cb2FyZCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gIGNvbnN0IHNoaXBUeXBlID0gJ2JhdHRsZXNoaXAnXG4gIGNvbnN0IGJhdHRsZXNoaXBQbGFjZWQgPSBnYW1lLnBsYWNlQmF0dGxlU2hpcChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuICBjb25zdCBib2FyZERPTUNlbGxzQXJyID0gW1xuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXG4gIF1cbiAgaWYgKCFiYXR0bGVzaGlwUGxhY2VkKSB7XG4gICAgcmV0dXJuIGJhdHRsZXNoaXBQbGFjZWRcbiAgfSBlbHNlIHtcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZ2V0SG9yaXpvbnRhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBnZXRWZXJ0aWNhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJhdHRsZXNoaXBQbGFjZWRcbn1cblxuY29uc3QgcGxhY2VDcnVpc2VyT25Cb2FyZCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gIGNvbnN0IHNoaXBUeXBlID0gJ2NydWlzZXInXG4gIGNvbnN0IGNydWlzZXJQbGFjZWQgPSBnYW1lLnBsYWNlQ3J1aXNlclNoaXAoXG4gICAgY29vcmRpbmF0ZSxcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXG4gIClcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxuICBdXG4gIGlmICghY3J1aXNlclBsYWNlZCkge1xuICAgIHJldHVybiBjcnVpc2VyUGxhY2VkXG4gIH0gZWxzZSB7XG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGdldEhvcml6b250YWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZ2V0VmVydGljYWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXG4gICAgfVxuICB9XG4gIHJldHVybiBjcnVpc2VyUGxhY2VkXG59XG5cbmNvbnN0IHBsYWNlU3VibWFyaW5lT25Cb2FyZCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gIGNvbnN0IHNoaXBUeXBlID0gJ3N1Ym1hcmluZSdcbiAgY29uc3Qgc3VibWFyaW5lUGxhY2VkID0gZ2FtZS5wbGFjZVN1Ym1hcmluZVNoaXAoXG4gICAgY29vcmRpbmF0ZSxcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXG4gIClcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxuICBdXG4gIGlmICghc3VibWFyaW5lUGxhY2VkKSB7XG4gICAgcmV0dXJuIHN1Ym1hcmluZVBsYWNlZFxuICB9IGVsc2Uge1xuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGdldFZlcnRpY2FsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3VibWFyaW5lUGxhY2VkXG59XG5cbmNvbnN0IHBsYWNlRGVzdHJveWVyT25Cb2FyZCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gIGNvbnN0IHNoaXBUeXBlID0gJ2Rlc3Ryb3llcidcbiAgY29uc3QgZGVzdHJveWVyUGxhY2VkID0gZ2FtZS5wbGFjZURlc3Ryb3llclNoaXAoXG4gICAgY29vcmRpbmF0ZSxcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXG4gIClcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxuICBdXG4gIGlmICghZGVzdHJveWVyUGxhY2VkKSB7XG4gICAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxuICB9IGVsc2Uge1xuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGdldFZlcnRpY2FsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGVzdHJveWVyUGxhY2VkXG59XG5cbmNvbnN0IGdldEhvcml6b250YWxET01Db29yZHMgPSAoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpID0+IHtcbiAgY29uc3Qgc3RhcnRpbmdDb2x1bW4gPSBOdW1iZXIoY29vcmRpbmF0ZVsxXSlcbiAgY29uc3Qgc2hpcExlbmd0aCA9XG4gICAgc2hpcFR5cGUgPT09ICdjYXJyaWVyJ1xuICAgICAgPyA1XG4gICAgICA6IHNoaXBUeXBlID09PSAnYmF0dGxlc2hpcCdcbiAgICAgID8gNFxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2NydWlzZXInXG4gICAgICA/IDNcbiAgICAgIDogc2hpcFR5cGUgPT09ICdzdWJtYXJpbmUnXG4gICAgICA/IDNcbiAgICAgIDogc2hpcFR5cGUgPT09ICdkZXN0cm95ZXInXG4gICAgICA/IDJcbiAgICAgIDogbnVsbFxuXG4gIGZvciAobGV0IGkgPSBzdGFydGluZ0NvbHVtbjsgaSA8IHN0YXJ0aW5nQ29sdW1uICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gK2Nvb3JkaW5hdGVbMF1cbiAgICBjb25zdCBjb2x1bW4gPSBpXG4gICAgY29uc3QgZG9tQ29vcmRpbmF0ZSA9IFtyb3csIGNvbHVtbl1cbiAgICBjb25zdCB0YXJnZXRET01CdG4gPSBmaW5kU2hpcERPTUJ0bihib2FyZERPTUNlbGxzQXJyLCBkb21Db29yZGluYXRlKVxuICAgIHRhcmdldERPTUJ0bi5jbGFzc0xpc3QuYWRkKCdzaGlwQ2VsbCcpXG4gIH1cbn1cblxuY29uc3QgZ2V0VmVydGljYWxET01Db29yZHMgPSAoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpID0+IHtcbiAgY29uc3Qgc3RhcnRpbmdSb3cgPSBOdW1iZXIoY29vcmRpbmF0ZVswXSlcbiAgY29uc3Qgc2hpcExlbmd0aCA9XG4gICAgc2hpcFR5cGUgPT09ICdjYXJyaWVyJ1xuICAgICAgPyA1XG4gICAgICA6IHNoaXBUeXBlID09PSAnYmF0dGxlc2hpcCdcbiAgICAgID8gNFxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2NydWlzZXInXG4gICAgICA/IDNcbiAgICAgIDogc2hpcFR5cGUgPT09ICdzdWJtYXJpbmUnXG4gICAgICA/IDNcbiAgICAgIDogc2hpcFR5cGUgPT09ICdkZXN0cm95ZXInXG4gICAgICA/IDJcbiAgICAgIDogbnVsbFxuXG4gIGZvciAobGV0IGkgPSBzdGFydGluZ1JvdzsgaSA+IHN0YXJ0aW5nUm93IC0gc2hpcExlbmd0aDsgaS0tKSB7XG4gICAgY29uc3Qgcm93ID0gaVxuICAgIGNvbnN0IGNvbHVtbiA9ICtjb29yZGluYXRlWzFdXG4gICAgY29uc3QgZG9tQ29vcmRpbmF0ZSA9IFtyb3csIGNvbHVtbl1cbiAgICBjb25zdCB0YXJnZXRET01CdG4gPSBmaW5kU2hpcERPTUJ0bihib2FyZERPTUNlbGxzQXJyLCBkb21Db29yZGluYXRlKVxuICAgIHRhcmdldERPTUJ0bi5jbGFzc0xpc3QuYWRkKCdzaGlwQ2VsbCcpXG4gIH1cbn1cblxuY29uc3QgZmluZFNoaXBET01CdG4gPSAoYm9hcmRET01DZWxsc0FyciwgZG9tQ29vcmRpbmF0ZSkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkRE9NQ2VsbHNBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkb21DZWxsUm93ID0gK2JvYXJkRE9NQ2VsbHNBcnJbaV0uZGF0YXNldC5yb3dcbiAgICBjb25zdCBkb21DZWxsQ29sdW1uID0gK2JvYXJkRE9NQ2VsbHNBcnJbaV0uZGF0YXNldC5jb2x1bW5cbiAgICBpZiAoZG9tQ2VsbFJvdyA9PT0gZG9tQ29vcmRpbmF0ZVswXSAmJiBkb21DZWxsQ29sdW1uID09PSBkb21Db29yZGluYXRlWzFdKSB7XG4gICAgICByZXR1cm4gYm9hcmRET01DZWxsc0FycltpXVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnQgPSAoZSkgPT4ge1xuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cbiAgY29uc3QgYWlCb2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSUJvYXJkJylcblxuICBpZiAoIXNlbGVjdGVkQ29sdW1uIHx8ICFzZWxlY3RlZFJvdykge1xuICAgIHJldHVybiBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnRcbiAgfVxuXG4gIGNvbnN0IGFpQm9hcmQgPSBnYW1lLmdldEFJQm9hcmRPYmpcbiAgY29uc3QgY29vcmRpbmF0ZSA9IFtzZWxlY3RlZFJvdywgc2VsZWN0ZWRDb2x1bW5dXG4gIGNvbnN0IGFscmVhZHlBdHRhY2tlZCA9IGFpQm9hcmQucHJldmVudFNhbWVBdHRhY2soY29vcmRpbmF0ZSlcbiAgaWYgKGFscmVhZHlBdHRhY2tlZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgZ2FtZS5wbGF5Um91bmQoY29vcmRpbmF0ZSlcbiAgY29uc3QgaHVtYW5XaW5zID0gZ2FtZS5jaGVja0ZvcldpbigpXG5cbiAgdXBkYXRlQUlCb2FyZCgpXG4gIGlmIChodW1hbldpbnMpIHtcbiAgICBhaUJvYXJkRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0KVxuICAgIGdhbWUucmVzZXRHYW1lU3RhdGUoKVxuICAgIGFubm91bmNlV2lubmVyKGh1bWFuV2lucylcbiAgICBwbGF5QWdhaW4oKVxuICB9XG4gIGhhbmRsZUFJTW92ZShhaUJvYXJkRGl2KVxufVxuXG5jb25zdCBoYW5kbGVBSU1vdmUgPSAoYWlCb2FyZERpdikgPT4ge1xuICBnYW1lLnBsYXlSb3VuZCgpXG4gIGNvbnN0IGFpV2lucyA9IGdhbWUuY2hlY2tGb3JXaW4oKVxuXG4gIHVwZGF0ZUh1bWFuQm9hcmQoKVxuICBpZiAoYWlXaW5zKSB7XG4gICAgYWlCb2FyZERpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dClcbiAgICBnYW1lLnJlc2V0R2FtZVN0YXRlKClcbiAgICBhbm5vdW5jZVdpbm5lcihhaVdpbnMpXG4gICAgcGxheUFnYWluKClcbiAgfVxufVxuXG5jb25zdCBhbm5vdW5jZVdpbm5lciA9ICh3aW5uZXIpID0+IHtcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgY29uc3Qgd2lubmVyTmFtZSA9IHdpbm5lci5nZXROYW1lKClcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9IGAke3dpbm5lck5hbWV9IHdpbidzIWBcbn1cblxuY29uc3QgcGxheUFnYWluID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyJylcbiAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgcGxheUFnYWluQnRuLnRleHRDb250ZW50ID0gJ1BsYXkgYWdhaW4nXG4gIHRvcEJhckRpdi5hcHBlbmRDaGlsZChwbGF5QWdhaW5CdG4pXG4gIHBsYXlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0TmV3R2FtZSlcbn1cblxuY29uc3Qgc3RhcnROZXdHYW1lID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyJylcbiAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IGJ1dHRvbicpXG4gIHRvcEJhckRpdi5yZW1vdmVDaGlsZChwbGF5QWdhaW5CdG4pXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJykudGV4dENvbnRlbnQgPSAnJ1xuICBkaXNwbGF5Q29udHJvbGxlcigpXG59XG5cbi8vIEZvciBlYWNoIG9mIHRoZSBwbGFjZSBzaGlwIGZ1bmN0aW9ucywgd2UgbmVlZCB0byByZW1vdmUgdGhlIHByZXZpb3VzXG4vLyBvcmllbnRhdGlvbiB0b2dnbGUgYnV0dG9uIHRvIHByZXZlbnQgdGhlIHNhbWUgbGlzdGVuZXIgZmlyaW5nIGZvciBlYWNoIG9mIHRoZVxuLy8gcHJldmlvdXMgb3JpZW50YXRpb24gdG9nZ2xlIGJ1dHRvbnNcbmNvbnN0IHJlbW92ZVByZXZpb3VzT3JpZW50YXRpb25CdG4gPSAoKSA9PiB7XG4gIGNvbnN0IHRvcEJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXInKVxuICBjb25zdCBwcmV2aW91c09yaWVudGF0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yaWVudGF0aW9uVG9nZ2xlQnRuJylcbiAgdG9wQmFyRGl2LnJlbW92ZUNoaWxkKHByZXZpb3VzT3JpZW50YXRpb25CdG4pXG59XG5cbmNvbnN0IGNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyJylcbiAgY29uc3QgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5jbGFzc0xpc3QuYWRkKCdvcmllbnRhdGlvblRvZ2dsZUJ0bicpXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXG4gIHRvcEJhckRpdi5hcHBlbmRDaGlsZChvcmllbnRhdGlvblRvZ2dsZUJ0bilcblxuICByZXR1cm4gW2hvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMsIG9yaWVudGF0aW9uVG9nZ2xlQnRuXVxufVxuXG4vLyBjb25zdCBoYW5kbGVQbGF5ZXJTZWxldGlvblxuXG5leHBvcnQgeyByZW5kZXJQbGF5ZXJCb2FyZCwgcmVuZGVyQUlCb2FyZCwgZGlzcGxheUNvbnRyb2xsZXIsIHByZUdhbWVTZXR1cCB9XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuLi9mYWN0b3JpZXMvR2FtZWJvYXJkJ1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vZmFjdG9yaWVzL1BsYXllcidcbmltcG9ydCB7IHJldHVyblJhbmRvbUFJQm9hcmQgfSBmcm9tICcuLi9oZWxwZXJzL3JvdGF0ZUFJQm9hcmRzJ1xuXG5jb25zdCBnYW1lQ29udHJvbGxlciA9ICgpID0+IHtcbiAgLy8gQ3JlYXRlIHR3byBnYW1lIGJvYXJkc1xuICBjb25zdCBodW1hbkJvYXJkID0gR2FtZWJvYXJkKClcbiAgaHVtYW5Cb2FyZC5jcmVhdGVHYW1lQm9hcmQoKVxuXG4gIGNvbnN0IGFpQm9hcmQgPSBHYW1lYm9hcmQoKVxuICBhaUJvYXJkLmNyZWF0ZUdhbWVCb2FyZCgpXG5cbiAgY29uc3QgcGxhY2VDYXJyaWVyU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gICAgbGV0IGNhcnJpZXJQbGFjZWQgPSB0cnVlXG5cbiAgICBjb25zdCBjYXJyaWVyQXJyID0gZGV0ZXJtaW5lQ2FycmllckFyckNvb3JkcyhcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXG4gICAgICBjb29yZGluYXRlXG4gICAgKVxuXG4gICAgY29uc3Qgc2hpcFBsYWNlZCA9IGh1bWFuQm9hcmQucGxhY2VTaGlwKGNhcnJpZXJBcnIpXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XG4gICAgICBjYXJyaWVyUGxhY2VkID0gZmFsc2VcbiAgICAgIHJldHVybiBjYXJyaWVyUGxhY2VkXG4gICAgfVxuXG4gICAgcmV0dXJuIGNhcnJpZXJQbGFjZWRcbiAgfVxuXG4gIGNvbnN0IGRldGVybWluZUNhcnJpZXJBcnJDb29yZHMgPSAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbiwgY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IGNhcnJpZXJBcnIgPSBbXVxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBjYXJyaWVyQXJyLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gW2Nvb3JkaW5hdGVbMF0sICgrY29vcmRpbmF0ZVsxXSArIGkpLnRvU3RyaW5nKCldXG4gICAgICAgIGNhcnJpZXJBcnIucHVzaChjb29yZClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBjYXJyaWVyQXJyLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gWygrY29vcmRpbmF0ZVswXSAtIGkpLnRvU3RyaW5nKCksIGNvb3JkaW5hdGVbMV1dXG4gICAgICAgIGNhcnJpZXJBcnIucHVzaChjb29yZClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNhcnJpZXJBcnJcbiAgfVxuXG4gIGNvbnN0IHBsYWNlQmF0dGxlU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gICAgbGV0IGJhdHRsZXNoaXBQbGFjZWQgPSB0cnVlXG4gICAgY29uc3QgYmF0dGxlc2hpcEFyciA9IGRldGVybWluZUJhdHRsZXNoaXBBcnJDb29yZHMoXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICAgICAgY29vcmRpbmF0ZVxuICAgIClcblxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChiYXR0bGVzaGlwQXJyKVxuICAgIGlmICghc2hpcFBsYWNlZCkge1xuICAgICAgYmF0dGxlc2hpcFBsYWNlZCA9IGZhbHNlXG4gICAgICByZXR1cm4gYmF0dGxlc2hpcFBsYWNlZFxuICAgIH1cblxuICAgIHJldHVybiBiYXR0bGVzaGlwUGxhY2VkXG4gIH1cblxuICBjb25zdCBkZXRlcm1pbmVCYXR0bGVzaGlwQXJyQ29vcmRzID0gKFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXG4gICAgY29vcmRpbmF0ZVxuICApID0+IHtcbiAgICBjb25zdCBiYXR0bGVzaGlwQXJyID0gW11cbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgYmF0dGxlc2hpcEFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFtjb29yZGluYXRlWzBdLCAoK2Nvb3JkaW5hdGVbMV0gKyBpKS50b1N0cmluZygpXVxuICAgICAgICBiYXR0bGVzaGlwQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgYmF0dGxlc2hpcEFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFsoK2Nvb3JkaW5hdGVbMF0gLSBpKS50b1N0cmluZygpLCBjb29yZGluYXRlWzFdXVxuICAgICAgICBiYXR0bGVzaGlwQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiYXR0bGVzaGlwQXJyXG4gIH1cblxuICBjb25zdCBwbGFjZUNydWlzZXJTaGlwID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgICBsZXQgY3J1aXNlclBsYWNlZCA9IHRydWVcbiAgICBjb25zdCBjcnVpc2VyQXJyID0gZGV0ZXJtaW5lQ3J1aXNlckFyckNvb3JkcyhcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXG4gICAgICBjb29yZGluYXRlXG4gICAgKVxuXG4gICAgY29uc3Qgc2hpcFBsYWNlZCA9IGh1bWFuQm9hcmQucGxhY2VTaGlwKGNydWlzZXJBcnIpXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XG4gICAgICBjcnVpc2VyUGxhY2VkID0gZmFsc2VcbiAgICAgIHJldHVybiBjcnVpc2VyUGxhY2VkXG4gICAgfVxuXG4gICAgcmV0dXJuIGNydWlzZXJQbGFjZWRcbiAgfVxuXG4gIGNvbnN0IGRldGVybWluZUNydWlzZXJBcnJDb29yZHMgPSAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbiwgY29vcmRpbmF0ZSkgPT4ge1xuICAgIGNvbnN0IGNydWlzZXJBcnIgPSBbXVxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBjcnVpc2VyQXJyLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gW2Nvb3JkaW5hdGVbMF0sICgrY29vcmRpbmF0ZVsxXSArIGkpLnRvU3RyaW5nKCldXG4gICAgICAgIGNydWlzZXJBcnIucHVzaChjb29yZClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBjcnVpc2VyQXJyLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gWygrY29vcmRpbmF0ZVswXSAtIGkpLnRvU3RyaW5nKCksIGNvb3JkaW5hdGVbMV1dXG4gICAgICAgIGNydWlzZXJBcnIucHVzaChjb29yZClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNydWlzZXJBcnJcbiAgfVxuXG4gIGNvbnN0IHBsYWNlU3VibWFyaW5lU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gICAgbGV0IHN1Ym1hcmluZVBsYWNlZCA9IHRydWVcbiAgICBjb25zdCBzdWJtYXJpbmVBcnIgPSBkZXRlcm1pbmVTdWJtYXJpbmVBcnJDb29yZHMoXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICAgICAgY29vcmRpbmF0ZVxuICAgIClcblxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChzdWJtYXJpbmVBcnIpXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XG4gICAgICBzdWJtYXJpbmVQbGFjZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIHN1Ym1hcmluZVBsYWNlZFxuICAgIH1cblxuICAgIHJldHVybiBzdWJtYXJpbmVQbGFjZWRcbiAgfVxuXG4gIGNvbnN0IGRldGVybWluZVN1Ym1hcmluZUFyckNvb3JkcyA9IChcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICAgIGNvb3JkaW5hdGVcbiAgKSA9PiB7XG4gICAgY29uc3Qgc3VibWFyaW5lQXJyID0gW11cbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgc3VibWFyaW5lQXJyLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gW2Nvb3JkaW5hdGVbMF0sICgrY29vcmRpbmF0ZVsxXSArIGkpLnRvU3RyaW5nKCldXG4gICAgICAgIHN1Ym1hcmluZUFyci5wdXNoKGNvb3JkKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIHN1Ym1hcmluZUFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFsoK2Nvb3JkaW5hdGVbMF0gLSBpKS50b1N0cmluZygpLCBjb29yZGluYXRlWzFdXVxuICAgICAgICBzdWJtYXJpbmVBcnIucHVzaChjb29yZClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1Ym1hcmluZUFyclxuICB9XG5cbiAgY29uc3QgcGxhY2VEZXN0cm95ZXJTaGlwID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgICBsZXQgZGVzdHJveWVyUGxhY2VkID0gdHJ1ZVxuICAgIGNvbnN0IGRlc3Ryb3llckFyciA9IGRldGVybWluZURlc3Ryb3llckFyckNvb3JkcyhcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXG4gICAgICBjb29yZGluYXRlXG4gICAgKVxuXG4gICAgY29uc3Qgc2hpcFBsYWNlZCA9IGh1bWFuQm9hcmQucGxhY2VTaGlwKGRlc3Ryb3llckFycilcbiAgICBpZiAoIXNoaXBQbGFjZWQpIHtcbiAgICAgIGRlc3Ryb3llclBsYWNlZCA9IGZhbHNlXG4gICAgICByZXR1cm4gZGVzdHJveWVyUGxhY2VkXG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxuICB9XG5cbiAgY29uc3QgZGV0ZXJtaW5lRGVzdHJveWVyQXJyQ29vcmRzID0gKFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXG4gICAgY29vcmRpbmF0ZVxuICApID0+IHtcbiAgICBjb25zdCBkZXN0cm95ZXJBcnIgPSBbXVxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBkZXN0cm95ZXJBcnIucHVzaChjb29yZGluYXRlKVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cbiAgICAgICAgZGVzdHJveWVyQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZGVzdHJveWVyQXJyLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gWygrY29vcmRpbmF0ZVswXSAtIGkpLnRvU3RyaW5nKCksIGNvb3JkaW5hdGVbMV1dXG4gICAgICAgIGRlc3Ryb3llckFyci5wdXNoKGNvb3JkKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVzdHJveWVyQXJyXG4gIH1cblxuICBjb25zdCBwbGFjZUFJU2hpcHMgPSAoKSA9PiB7XG4gICAgcGxhY2VTaGlwcyhhaUJvYXJkLCByZXR1cm5SYW5kb21BSUJvYXJkKCkpXG4gIH1cblxuICBjb25zdCBwbGF5ZXJzID0ge31cblxuICBjb25zdCBnZXRQbGF5ZXJzID0gKCkgPT4ge1xuICAgIHJldHVybiBwbGF5ZXJzXG4gIH1cblxuICBjb25zdCBodW1hblBsYXllciA9IFBsYXllcignSHVtYW4nLCBmYWxzZSlcbiAgY29uc3QgYWlQbGF5ZXIgPSBQbGF5ZXIoJ0FJJywgdHJ1ZSlcbiAgcGxheWVycy5odW1hbiA9IGh1bWFuUGxheWVyXG4gIHBsYXllcnMuQUkgPSBhaVBsYXllclxuXG4gIGxldCBjdXJyZW50UGxheWVyID0gcGxheWVycy5odW1hblxuXG4gIGNvbnN0IGdldEN1cnJlbnRQbGF5ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGN1cnJlbnRQbGF5ZXJcbiAgfVxuXG4gIGNvbnN0IHBsYXlSb3VuZCA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpID09PSBwbGF5ZXJzLmh1bWFuLmdldE5hbWUoKSkge1xuICAgICAgYWlCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpXG4gICAgfSBlbHNlIGlmIChjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5BSS5nZXROYW1lKCkpIHtcbiAgICAgIGNvbnN0IG5leHRNb3ZlID0gY29tcHV0ZXJzTmV4dE1vdmUoKVxuICAgICAgaHVtYW5Cb2FyZC5yZWNlaXZlQXR0YWNrKG5leHRNb3ZlKVxuICAgICAgaHVtYW5Cb2FyZC5yZW1vdmVMYXN0QUlNb3ZlKG5leHRNb3ZlKVxuICAgIH1cblxuICAgIHN3aXRjaFBsYXllcigpXG4gICAgY29uc29sZS5sb2coY3VycmVudFBsYXllci5nZXROYW1lKCkpXG4gIH1cblxuICBjb25zdCBjb21wdXRlcnNOZXh0TW92ZSA9ICgpID0+IHtcbiAgICBjb25zdCBhdmFpbGFibGVNb3ZlcyA9IGh1bWFuQm9hcmQuZ2V0QUlBdmFpbGFibGVNb3ZlcygpXG4gICAgY29uc3QgbGFzdEFJTW92ZVN1Y2Nlc3NmdWwgPSBodW1hbkJvYXJkLmdldExhc3RBSU1vdmVTdWNjZXNzZnVsKClcbiAgICBpZiAobGFzdEFJTW92ZVN1Y2Nlc3NmdWwpIHtcbiAgICAgIGNvbnN0IGFkamFjZW50U2xvdHMgPSBjdXJyZW50UGxheWVyLmdldEFkamFjZW50U2xvdHMoXG4gICAgICAgIHRydWUsXG4gICAgICAgIGF2YWlsYWJsZU1vdmVzLFxuICAgICAgICBodW1hbkJvYXJkLmdldEFkamFjZW50U2xvdHNRdWV1ZSgpLFxuICAgICAgICBodW1hbkJvYXJkLmdldFN1Y2Nlc3NmdWxTaG90cygpXG4gICAgICApXG4gICAgICBodW1hbkJvYXJkLmFkZEFkamFjZW50U2xvdHNUb1F1ZXVlKGFkamFjZW50U2xvdHMpXG4gICAgICBjb25zdCBuZXh0TW92ZSA9IGh1bWFuQm9hcmQuZ2V0QWRqYWNlbnRRdWV1ZVNsb3QoKVxuICAgICAgcmV0dXJuIG5leHRNb3ZlXG4gICAgfSBlbHNlIGlmICghbGFzdEFJTW92ZVN1Y2Nlc3NmdWwpIHtcbiAgICAgIGNvbnN0IHJhbmRvbU1vdmUgPSBjdXJyZW50UGxheWVyLm1ha2VSYW5kb21Nb3ZlKHRydWUsIGF2YWlsYWJsZU1vdmVzKVxuICAgICAgcmV0dXJuIHJhbmRvbU1vdmVcbiAgICB9XG4gIH1cblxuICBjb25zdCBzd2l0Y2hQbGF5ZXIgPSAoKSA9PiB7XG4gICAgY3VycmVudFBsYXllciA9XG4gICAgICBjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5odW1hbi5nZXROYW1lKClcbiAgICAgICAgPyAoY3VycmVudFBsYXllciA9IHBsYXllcnMuQUkpXG4gICAgICAgIDogKGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzLmh1bWFuKVxuICB9XG5cbiAgY29uc3QgY2hlY2tGb3JXaW4gPSAoKSA9PiB7XG4gICAgbGV0IHdpbm5lclxuICAgIGlmIChcbiAgICAgIGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpID09PSBwbGF5ZXJzLmh1bWFuLmdldE5hbWUoKSAmJlxuICAgICAgYWlCb2FyZC5hbGxTaGlwc1N1bmsoKVxuICAgICkge1xuICAgICAgd2lubmVyID0gY3VycmVudFBsYXllclxuICAgICAgcmV0dXJuIHdpbm5lclxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5BSS5nZXROYW1lKCkgJiZcbiAgICAgIGh1bWFuQm9hcmQuYWxsU2hpcHNTdW5rKClcbiAgICApIHtcbiAgICAgIHdpbm5lciA9IGN1cnJlbnRQbGF5ZXJcbiAgICAgIHJldHVybiB3aW5uZXJcbiAgICB9XG4gICAgcmV0dXJuIHdpbm5lclxuICB9XG5cbiAgY29uc3QgcmVzZXRHYW1lU3RhdGUgPSAod2lubmVyKSA9PiB7XG4gICAgaHVtYW5Cb2FyZC5jbGVhckdhbWVCb2FyZCgpXG4gICAgYWlCb2FyZC5jbGVhckdhbWVCb2FyZCgpXG4gICAgaHVtYW5Cb2FyZC5jcmVhdGVHYW1lQm9hcmQoKVxuICAgIGFpQm9hcmQuY3JlYXRlR2FtZUJvYXJkKClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0SHVtYW5Cb2FyZDogaHVtYW5Cb2FyZC5nZXRCb2FyZCxcbiAgICBnZXRBSUJvYXJkOiBhaUJvYXJkLmdldEJvYXJkLFxuICAgIGdldEFJQm9hcmRPYmo6IGFpQm9hcmQsXG4gICAgZ2V0SHVtYW5Cb2FyZE9iajogaHVtYW5Cb2FyZCxcbiAgICBzd2l0Y2hQbGF5ZXIsXG4gICAgcGxheVJvdW5kLFxuICAgIGdldEN1cnJlbnRQbGF5ZXIsXG4gICAgcmVzZXRHYW1lU3RhdGUsXG4gICAgY2hlY2tGb3JXaW4sXG4gICAgZ2V0UGxheWVycyxcbiAgICBwbGFjZUFJU2hpcHMsXG4gICAgcGxhY2VDYXJyaWVyU2hpcCxcbiAgICBwbGFjZUJhdHRsZVNoaXAsXG4gICAgcGxhY2VDcnVpc2VyU2hpcCxcbiAgICBwbGFjZVN1Ym1hcmluZVNoaXAsXG4gICAgcGxhY2VEZXN0cm95ZXJTaGlwXG4gIH1cbn1cblxuZXhwb3J0IHsgZ2FtZUNvbnRyb2xsZXIgfVxuXG5jb25zdCBwbGFjZVNoaXBzID0gKGJvYXJkLCBjb29yZGluYXRlc09iaikgPT4ge1xuICBjb25zdCBzaGlwQ29vcmRpbmF0ZXNBcnIgPSBPYmplY3QudmFsdWVzKGNvb3JkaW5hdGVzT2JqKVxuICBzaGlwQ29vcmRpbmF0ZXNBcnIuZm9yRWFjaCgoc2hpcENvb3JkaW5hdGVzKSA9PiB7XG4gICAgYm9hcmQucGxhY2VTaGlwKHNoaXBDb29yZGluYXRlcylcbiAgfSlcbn1cblxuLyogY29uc3QgcGxhY2VFYWNoSHVtYW5TaGlwID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgaHVtYW5Cb2FyZC5wbGFjZVNoaXAoY29vcmRpbmF0ZSlcbn0gKi9cbiIsImltcG9ydCB7IGFycmF5c0FyZUVxdWFsIH0gZnJvbSAnLi4vaGVscGVycy9hcnJheXNBcmVFcXVhbCdcbmltcG9ydCB7IFNoaXAgfSBmcm9tICcuL1NoaXAnXG5cbmV4cG9ydCBjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcbiAgbGV0IGJvYXJkID0gW11cbiAgY29uc3Qgc2hpcE9iamVjdHMgPSBbXVxuICBjb25zdCBtaXNzZWRTaG90cyA9IFtdXG4gIGNvbnN0IGFpQXZhaWxhYmxlTW92ZXMgPSBbXVxuICBjb25zdCBzdWNjZXNzZnVsU2hvdHMgPSBbXVxuICBjb25zdCBhZGphY2VudFNsb3RzUXVldWUgPSBbXVxuICBjb25zdCByb3dzID0gOVxuICBjb25zdCBjb2x1bW5zID0gOVxuICBsZXQgbGFzdEFJTW92ZVN1Y2Nlc3NmdWwgPSBmYWxzZVxuXG4gIGNvbnN0IGNyZWF0ZUdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICBib2FyZCA9IFtdXG4gICAgZm9yIChsZXQgaSA9IHJvd3M7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBib2FyZFtpXSA9IFtdXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgYm9hcmRbaV0ucHVzaCh1bmRlZmluZWQpXG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBbaSwgal1cbiAgICAgICAgYWlBdmFpbGFibGVNb3Zlcy5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gY2hlY2tzIGlmIGNvb3JkaW5hdGVzIGZvciBzaGlwIGlzIG9uIHRoZVxuICAvLyBnYW1lIGJvYXJkXG4gIGNvbnN0IHZhbGlkYXRlQ29vcmRpbmF0ZXMgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBsZXQgdmFsaWRDb29yZGluYXRlcyA9IHRydWVcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBjb25zdCByb3cgPSBjb29yZGluYXRlWzBdXG4gICAgICBjb25zdCBjb2x1bW4gPSBjb29yZGluYXRlWzFdXG4gICAgICBpZiAocm93ID4gOSB8fCByb3cgPCAwKSB7XG4gICAgICAgIHZhbGlkQ29vcmRpbmF0ZXMgPSBmYWxzZVxuICAgICAgICByZXR1cm4gdmFsaWRDb29yZGluYXRlc1xuICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPiA5IHx8IGNvbHVtbiA8IDApIHtcbiAgICAgICAgdmFsaWRDb29yZGluYXRlcyA9IGZhbHNlXG4gICAgICAgIHJldHVybiB2YWxpZENvb3JkaW5hdGVzXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiB2YWxpZENvb3JkaW5hdGVzXG4gIH1cblxuICAvLyBjaGVja3MgaWYgc2hpcCBjb29yZGluYXRlcyBvdmVybGFwIHdpdGggYWxyZWFkeVxuICAvLyBwbGFjZWQgc2hpcCBjb29yZGluYXRlcyBmb3IgdGhlIHNhbWUgc2hpcFxuICBjb25zdCBjaGVja1NlbGZPdmVybGFwID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgbGV0IGNvb3JkaW5hdGVzT3ZlcmxhcCA9IGZhbHNlXG4gICAgbGV0IHByZXZDb29yZGluYXRlXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgaWYgKGFycmF5c0FyZUVxdWFsKHByZXZDb29yZGluYXRlLCBjb29yZGluYXRlKSkge1xuICAgICAgICAgIGNvb3JkaW5hdGVzT3ZlcmxhcCA9IHRydWVcbiAgICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXNPdmVybGFwXG4gICAgICAgIH1cbiAgICAgICAgcHJldkNvb3JkaW5hdGUgPSBjb29yZGluYXRlXG4gICAgICB9XG4gICAgICBwcmV2Q29vcmRpbmF0ZSA9IGNvb3JkaW5hdGVcbiAgICB9KVxuXG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzT3ZlcmxhcFxuICB9XG5cbiAgLy8gU2hvdWxkIHByZXZlbnQgYSBzaGlwIGZyb20gYmVpbmdcbiAgLy8gcGxhY2VkIG9uIHRvcCBvZiBhbm90aGVyIHNoaXBcbiAgY29uc3QgY2hlY2tPdmVybGFwV2l0aE90aGVyU2hpcHMgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBsZXQgc2hpcHNPdmVybGFwID0gZmFsc2VcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBjb25zdCByb3cgPSBjb29yZGluYXRlWzBdXG4gICAgICBjb25zdCBjb2x1bW4gPSBjb29yZGluYXRlWzFdXG4gICAgICBjb25zdCBib2FyZENlbGwgPSBib2FyZFtyb3ddW2NvbHVtbl1cbiAgICAgIGlmICh0eXBlb2YgYm9hcmRDZWxsID09PSAnb2JqZWN0Jykge1xuICAgICAgICBzaGlwc092ZXJsYXAgPSB0cnVlXG4gICAgICAgIHJldHVybiBzaGlwc092ZXJsYXBcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHNoaXBzT3ZlcmxhcFxuICB9XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgbGV0IHNoaXBQbGFjZWQgPSB0cnVlXG5cbiAgICBjb25zdCBsZWdhbENvb3JkaW5hdGVzID0gdmFsaWRhdGVDb29yZGluYXRlcyhjb29yZGluYXRlcylcbiAgICBpZiAoIWxlZ2FsQ29vcmRpbmF0ZXMpIHtcbiAgICAgIHNoaXBQbGFjZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIHNoaXBQbGFjZWRcbiAgICB9XG5cbiAgICBjb25zdCBvdmVybGFwcGluZ0Nvb3JkaW5hdGVzID0gY2hlY2tTZWxmT3ZlcmxhcChjb29yZGluYXRlcylcbiAgICBpZiAob3ZlcmxhcHBpbmdDb29yZGluYXRlcykge1xuICAgICAgc2hpcFBsYWNlZCA9IGZhbHNlXG4gICAgICByZXR1cm4gc2hpcFBsYWNlZFxuICAgIH1cblxuICAgIGNvbnN0IHNoaXBPdmVybGFwcGluZyA9IGNoZWNrT3ZlcmxhcFdpdGhPdGhlclNoaXBzKGNvb3JkaW5hdGVzKVxuICAgIGlmIChzaGlwT3ZlcmxhcHBpbmcpIHtcbiAgICAgIHNoaXBQbGFjZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIHNoaXBQbGFjZWRcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gY29vcmRpbmF0ZXMubGVuZ3RoXG4gICAgY29uc3Qgc2hpcE9iamVjdCA9IFNoaXAoc2hpcExlbmd0aCwgMCwgZmFsc2UpXG4gICAgc2hpcE9iamVjdHMucHVzaChzaGlwT2JqZWN0KVxuXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZVswXVxuICAgICAgY29uc3QgY29sdW1uID0gY29vcmRpbmF0ZVsxXVxuICAgICAgYm9hcmRbcm93XVtjb2x1bW5dID0gc2hpcE9iamVjdFxuICAgIH0pXG5cbiAgICByZXR1cm4gc2hpcFBsYWNlZFxuICB9XG5cbiAgLy8gcHJldmVudHMgaHVtYW4gcGxheWVyIGZyb20gYXR0YWNraW5nIHByZXZpb3VzbHlcbiAgLy8gYXR0YWNrZWQgY29vcmRpbmF0ZVxuICBjb25zdCBwcmV2ZW50U2FtZUF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgbGV0IGFscmVhZHlBdHRhY2tlZCA9IGZhbHNlXG4gICAgc3VjY2Vzc2Z1bFNob3RzLmZvckVhY2goKHNob3QpID0+IHtcbiAgICAgIGlmIChhcnJheXNBcmVFcXVhbChjb29yZGluYXRlLCBzaG90KSkge1xuICAgICAgICBhbHJlYWR5QXR0YWNrZWQgPSB0cnVlXG4gICAgICAgIHJldHVybiBwcmV2ZW50U2FtZUF0dGFja1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBtaXNzZWRTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XG4gICAgICBpZiAoYXJyYXlzQXJlRXF1YWwoY29vcmRpbmF0ZSwgc2hvdCkpIHtcbiAgICAgICAgYWxyZWFkeUF0dGFja2VkID0gdHJ1ZVxuICAgICAgICByZXR1cm4gcHJldmVudFNhbWVBdHRhY2tcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBhbHJlYWR5QXR0YWNrZWRcbiAgfVxuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBjb25zdCByb3cgPSBjb29yZGluYXRlc1swXVxuICAgIGNvbnN0IGNvbHVtbiA9IGNvb3JkaW5hdGVzWzFdXG4gICAgY29uc3QgYm9hcmRDZWxsID0gYm9hcmRbcm93XVtjb2x1bW5dXG4gICAgY29uc3Qgc2hpcE9iaiA9IGJvYXJkQ2VsbFxuXG4gICAgLy8gTmVlZCB0byBjaGVjayBpZiBuZXcgY29vcmRpbmF0ZSBpcyBhbHJlYWR5XG4gICAgLy8gaW5zaWRlIHN1Y2Nlc3NmdWxTaG90cyBvciBtaXNzZWRTaG90c1xuICAgIGNvbnN0IGFscmVhZHlBdHRhY2tlZCA9IHByZXZlbnRTYW1lQXR0YWNrKGNvb3JkaW5hdGVzKVxuICAgIGlmIChhbHJlYWR5QXR0YWNrZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYm9hcmRDZWxsID09PSAnb2JqZWN0Jykge1xuICAgICAgc2hpcE9iai5oaXQoKVxuICAgICAgbGFzdEFJTW92ZVN1Y2Nlc3NmdWwgPSB0cnVlXG4gICAgICBzdWNjZXNzZnVsU2hvdHMucHVzaChjb29yZGluYXRlcylcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2FyZENlbGwgIT09ICdvYmplY3QnKSB7XG4gICAgICBsYXN0QUlNb3ZlU3VjY2Vzc2Z1bCA9IGZhbHNlXG4gICAgICBtaXNzZWRTaG90cy5wdXNoKGNvb3JkaW5hdGVzKVxuICAgICAgcmVtb3ZlQWRqYWNlbnRTbG90KGNvb3JkaW5hdGVzKVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIHRoZSBjb21wdXRlciByYW5kb21seSBndWVzc2VzIGEgc3BvdCB0aGF0IGlzIGluIHRoZSBhZGphY2VudFxuICAvLyBzbG90IHF1ZXVlLCB3ZSBuZWVkIHRvIHJlbW92ZSBpdCAoZnJvbSB0aGUgYWRqYWNlbmN5IHF1ZXVlKSBzbyB0aGUgY29tcHV0ZXIgZG9lcyBub3QgYXR0ZW1wdCB0b1xuICAvLyBndWVzcyBhIHNwb3QgdGhhdCBoYXMgYWxyZWFkeSBiZWVuIGd1ZXNlZC5cbiAgY29uc3QgcmVtb3ZlQWRqYWNlbnRTbG90ID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGphY2VudFNsb3RzUXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnJheXNBcmVFcXVhbChhZGphY2VudFNsb3RzUXVldWVbaV0sIGNvb3JkaW5hdGVzKSkge1xuICAgICAgICBhZGphY2VudFNsb3RzUXVldWUuc3BsaWNlKGksIDEpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBsZXQgZXZlcnlTaGlwU2FuayA9IHRydWVcbiAgICBzaGlwT2JqZWN0cy5mb3JFYWNoKChzaGlwT2JqKSA9PiB7XG4gICAgICBpZiAoIXNoaXBPYmouaGFzQmVlblN1bmsoKSkge1xuICAgICAgICBldmVyeVNoaXBTYW5rID0gZmFsc2VcbiAgICAgICAgcmV0dXJuIGV2ZXJ5U2hpcFNhbmtcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBldmVyeVNoaXBTYW5rXG4gIH1cblxuICBjb25zdCByZW1vdmVMYXN0QUlNb3ZlID0gKHJhbmRvbU1vdmUpID0+IHtcbiAgICBhaUF2YWlsYWJsZU1vdmVzLmZvckVhY2goKG1vdmUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoYXJyYXlzQXJlRXF1YWwobW92ZSwgcmFuZG9tTW92ZSkpIHtcbiAgICAgICAgYWlBdmFpbGFibGVNb3Zlcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGFkZEFkamFjZW50U2xvdHNUb1F1ZXVlID0gKGFkamFjZW50U2xvdHMpID0+IHtcbiAgICBhZGphY2VudFNsb3RzLmZvckVhY2goKHNsb3QpID0+IHtcbiAgICAgIGFkamFjZW50U2xvdHNRdWV1ZS5wdXNoKHNsb3QpXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGNsZWFyR2FtZUJvYXJkID0gKCkgPT4ge1xuICAgIHNoaXBPYmplY3RzLmxlbmd0aCA9IDBcbiAgICBtaXNzZWRTaG90cy5sZW5ndGggPSAwXG4gICAgYWlBdmFpbGFibGVNb3Zlcy5sZW5ndGggPSAwXG4gICAgc3VjY2Vzc2Z1bFNob3RzLmxlbmd0aCA9IDBcbiAgICBhZGphY2VudFNsb3RzUXVldWUubGVuZ3RoID0gMFxuICB9XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkXG4gIH1cblxuICBjb25zdCBnZXRNaXNzZWRTaG90cyA9ICgpID0+IHtcbiAgICByZXR1cm4gbWlzc2VkU2hvdHNcbiAgfVxuXG4gIGNvbnN0IGdldFN1Y2Nlc3NmdWxTaG90cyA9ICgpID0+IHtcbiAgICByZXR1cm4gc3VjY2Vzc2Z1bFNob3RzXG4gIH1cblxuICBjb25zdCBnZXRTaGlwT2JqZWN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gc2hpcE9iamVjdHNcbiAgfVxuXG4gIGNvbnN0IGdldEFJQXZhaWxhYmxlTW92ZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGFpQXZhaWxhYmxlTW92ZXNcbiAgfVxuXG4gIGNvbnN0IGdldExhc3RBSU1vdmVTdWNjZXNzZnVsID0gKCkgPT4ge1xuICAgIHJldHVybiBsYXN0QUlNb3ZlU3VjY2Vzc2Z1bFxuICB9XG5cbiAgY29uc3QgZ2V0QWRqYWNlbnRTbG90c1F1ZXVlID0gKCkgPT4ge1xuICAgIHJldHVybiBhZGphY2VudFNsb3RzUXVldWVcbiAgfVxuXG4gIGNvbnN0IGdldEFkamFjZW50UXVldWVTbG90ID0gKCkgPT4ge1xuICAgIHJldHVybiBhZGphY2VudFNsb3RzUXVldWUucG9wKClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlR2FtZUJvYXJkLFxuICAgIGdldEJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGNsZWFyR2FtZUJvYXJkLFxuICAgIGdldE1pc3NlZFNob3RzLFxuICAgIGdldFN1Y2Nlc3NmdWxTaG90cyxcbiAgICBhbGxTaGlwc1N1bmssXG4gICAgZ2V0QUlBdmFpbGFibGVNb3ZlcyxcbiAgICB2YWxpZGF0ZUNvb3JkaW5hdGVzLFxuICAgIHByZXZlbnRTYW1lQXR0YWNrLFxuICAgIGNoZWNrU2VsZk92ZXJsYXAsXG4gICAgZ2V0U2hpcE9iamVjdHMsXG4gICAgcmVtb3ZlTGFzdEFJTW92ZSxcbiAgICBjaGVja092ZXJsYXBXaXRoT3RoZXJTaGlwcyxcbiAgICBnZXRMYXN0QUlNb3ZlU3VjY2Vzc2Z1bCxcbiAgICBnZXRBZGphY2VudFNsb3RzUXVldWUsXG4gICAgYWRkQWRqYWNlbnRTbG90c1RvUXVldWUsXG4gICAgZ2V0QWRqYWNlbnRRdWV1ZVNsb3QsXG4gICAgcmVtb3ZlQWRqYWNlbnRTbG90XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBQbGF5ZXIgPSAobmFtZSwgaXNBSSkgPT4ge1xuICAvLyBVc2VkIHRvIG1ha2UgQUkgc2VsZWN0IHJhbmRvbSwgbGVnYWwgY29vcmRpbmF0ZVxuICAvLyBvbiBwbGF5ZXJzIGdhbWUgYm9hcmRcbiAgY29uc3QgbWFrZVJhbmRvbU1vdmUgPSAoaXNBSSwgYXZhaWxhYmxlTW92ZXMpID0+IHtcbiAgICBpZiAoIWlzQUkgfHwgYXZhaWxhYmxlTW92ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgY29uc3QgYXZhaWxhYmxlTW92ZXNMZW5ndGggPSBhdmFpbGFibGVNb3Zlcy5sZW5ndGhcbiAgICBjb25zdCByYW5kb21BcnJJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZU1vdmVzTGVuZ3RoKVxuICAgIGNvbnN0IHJhbmRvbUNvb3JkaW5hdGUgPSBhdmFpbGFibGVNb3Zlc1tyYW5kb21BcnJJbmRleF1cblxuICAgIHJldHVybiByYW5kb21Db29yZGluYXRlXG4gIH1cblxuICBjb25zdCBnZXRBZGphY2VudFNsb3RzID0gKFxuICAgIGlzQUksXG4gICAgYXZhaWxhYmxlTW92ZXMsXG4gICAgYWRqYWNlbnRRdWV1ZSxcbiAgICBzdWNjZXNzZnVsU2hvdHNcbiAgKSA9PiB7XG4gICAgaWYgKCFpc0FJIHx8IGF2YWlsYWJsZU1vdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGNvbnN0IGxhc3RTdWNjZXNzZnVsTW92ZSA9IHN1Y2Nlc3NmdWxTaG90cy5hdCgtMSlcbiAgICBjb25zdCBhZGphY2VudFNsb3RzID0gcmV0cmlldmVBZGphY2VudFNsb3RzKGxhc3RTdWNjZXNzZnVsTW92ZSlcbiAgICBjb25zdCBsZWdhbEFkamFjZW50U2xvdHMgPSByZW1vdmVJbGxlZ2FsQWRqYWNlbnRTbG90cyhhZGphY2VudFNsb3RzKVxuICAgIHJldHVybiBsZWdhbEFkamFjZW50U2xvdHNcbiAgfVxuXG4gIGNvbnN0IGdldENlbGxBYm92ZSA9IChsYXN0U3VjY2Vzc2Z1bE1vdmUpID0+IHtcbiAgICAvLyB0aGUgcm93IG5lZWRzIHRvIGNoYW5nZSBieSBvbmVcbiAgICBjb25zdCBuZXdBcnIgPSBbXVxuICAgIGNvbnN0IG5ld1JvdyA9IGxhc3RTdWNjZXNzZnVsTW92ZVswXSAtIDFcbiAgICBpZiAobmV3Um93ID4gOSB8fCBuZXdSb3cgPCAwKSB7XG4gICAgICByZXR1cm4gJ2lsbGVnYWwnXG4gICAgfVxuICAgIG5ld0FyclswXSA9IG5ld1Jvd1xuICAgIG5ld0FyclsxXSA9IGxhc3RTdWNjZXNzZnVsTW92ZVsxXVxuICAgIHJldHVybiBuZXdBcnJcbiAgfVxuXG4gIGNvbnN0IGdldENlbGxCZWxvdyA9IChsYXN0U3VjY2Vzc2Z1bE1vdmUpID0+IHtcbiAgICAvLyB0aGUgcm93IG5lZWRzIHRvIGNoYW5nZSBieSBvbmVcbiAgICBjb25zdCBhcnIgPSBsYXN0U3VjY2Vzc2Z1bE1vdmVcbiAgICBjb25zdCBuZXdBcnIgPSBbXVxuICAgIGNvbnN0IG5ld1JvdyA9IGFyclswXSArIDFcbiAgICBpZiAobmV3Um93ID4gOSB8fCBuZXdSb3cgPCAwKSB7XG4gICAgICByZXR1cm4gJ2lsbGVnYWwnXG4gICAgfVxuICAgIG5ld0FyclswXSA9IG5ld1Jvd1xuICAgIG5ld0FyclsxXSA9IGxhc3RTdWNjZXNzZnVsTW92ZVsxXVxuICAgIHJldHVybiBuZXdBcnJcbiAgfVxuXG4gIGNvbnN0IGdldENlbGxUb1JpZ2h0ID0gKGxhc3RTdWNjZXNzZnVsTW92ZSkgPT4ge1xuICAgIC8vIHRoZSByb3cgbmVlZHMgdG8gY2hhbmdlIGJ5IG9uZVxuICAgIGNvbnN0IG5ld0FyciA9IFtdXG4gICAgY29uc3QgbmV3Q29sdW1uID0gbGFzdFN1Y2Nlc3NmdWxNb3ZlWzFdICsgMVxuICAgIGlmIChuZXdDb2x1bW4gPiA5IHx8IG5ld0NvbHVtbiA8IDApIHtcbiAgICAgIHJldHVybiAnaWxsZWdhbCdcbiAgICB9XG4gICAgbmV3QXJyWzBdID0gbGFzdFN1Y2Nlc3NmdWxNb3ZlWzBdXG4gICAgbmV3QXJyWzFdID0gbmV3Q29sdW1uXG4gICAgcmV0dXJuIG5ld0FyclxuICB9XG5cbiAgY29uc3QgZ2V0Q2VsbFRvTGVmdCA9IChsYXN0U3VjY2Vzc2Z1bE1vdmUpID0+IHtcbiAgICAvLyB0aGUgcm93IG5lZWRzIHRvIGNoYW5nZSBieSBvbmVcbiAgICBjb25zdCBhcnIgPSBsYXN0U3VjY2Vzc2Z1bE1vdmVcbiAgICBjb25zdCBuZXdBcnIgPSBbXVxuICAgIGNvbnN0IG5ld0NvbHVtbiA9IGFyclsxXSAtIDFcbiAgICBpZiAobmV3Q29sdW1uID4gOSB8fCBuZXdDb2x1bW4gPCAwKSB7XG4gICAgICByZXR1cm4gJ2lsbGVnYWwnXG4gICAgfVxuICAgIG5ld0FyclswXSA9IGxhc3RTdWNjZXNzZnVsTW92ZVswXVxuICAgIG5ld0FyclsxXSA9IG5ld0NvbHVtblxuICAgIHJldHVybiBuZXdBcnJcbiAgfVxuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5hbWVcbiAgfVxuXG4gIGNvbnN0IHJldHJpZXZlQWRqYWNlbnRTbG90cyA9IChsYXN0U3VjY2Vzc2Z1bE1vdmUpID0+IHtcbiAgICBjb25zdCBsYXN0U3VjY2Vzc2Z1bE1vdmVWYWx1ZSA9IGxhc3RTdWNjZXNzZnVsTW92ZVxuICAgIGNvbnN0IGFkamFjZW50U2xvdHMgPSBbXVxuICAgIGFkamFjZW50U2xvdHMucHVzaChnZXRDZWxsQWJvdmUobGFzdFN1Y2Nlc3NmdWxNb3ZlVmFsdWUpKVxuICAgIGFkamFjZW50U2xvdHMucHVzaChnZXRDZWxsQmVsb3cobGFzdFN1Y2Nlc3NmdWxNb3ZlVmFsdWUpKVxuICAgIGFkamFjZW50U2xvdHMucHVzaChnZXRDZWxsVG9SaWdodChsYXN0U3VjY2Vzc2Z1bE1vdmVWYWx1ZSkpXG4gICAgYWRqYWNlbnRTbG90cy5wdXNoKGdldENlbGxUb0xlZnQobGFzdFN1Y2Nlc3NmdWxNb3ZlVmFsdWUpKVxuICAgIHJldHVybiBhZGphY2VudFNsb3RzXG4gIH1cblxuICBjb25zdCByZW1vdmVJbGxlZ2FsQWRqYWNlbnRTbG90cyA9IChhZGphY2VudFNsb3RzKSA9PiB7XG4gICAgY29uc3QgYWRqYWNlbnRTbG90c0FyciA9IGFkamFjZW50U2xvdHNcbiAgICBhZGphY2VudFNsb3RzQXJyLmZvckVhY2goKHNsb3QsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoc2xvdCA9PT0gJ2lsbGVnYWwnKSB7XG4gICAgICAgIGFkamFjZW50U2xvdHNBcnIuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGFkamFjZW50U2xvdHNBcnJcbiAgfVxuXG4gIC8vIGlmIHRoZSBjb21wdXRlciBoYXMgYWxyZWFkeSAocmFuZG9tbHkpIGd1ZXNzZWQgYSBzcG90IG9uIHRoZSBib2FyZCwgcHJldmVudFxuICAvLyBhZGRpbmcgdGhlIHNwb3QgdG8gdGhlIGFkamFjZW5jeSBsaXN0XG4gIGNvbnN0IHByZXZlbnRQcmV2aW91c1Nob3RUb1F1ZXVlID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICAvLyBpbiBwcm9ncmVzc1xuICB9XG5cbiAgcmV0dXJuIHsgbWFrZVJhbmRvbU1vdmUsIGdldE5hbWUsIGdldEFkamFjZW50U2xvdHMsIGdldENlbGxBYm92ZSB9XG59XG4iLCJleHBvcnQgY29uc3QgU2hpcCA9IChsZW5ndGgsIG51bU9mSGl0cywgaXNTdW5rKSA9PiB7XG4gIC8vIEluY3JlYXNlIG51bWJlciBvZiBoaXRzIGluIHNoaXAgYnkgMVxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaWYgKG51bU9mSGl0cyA9PT0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBudW1PZkhpdHMrK1xuICAgIHJldHVybiBudW1PZkhpdHNcbiAgfVxuXG4gIC8vIERldGVybWluZSBpZiB0aGUgc2hpcCBvYmplY3QgaGFzIGJlZW4gc3Vua1xuICBjb25zdCBoYXNCZWVuU3VuayA9ICgpID0+IHtcbiAgICBsZXQgaXNTdW5rID0gZmFsc2VcblxuICAgIGlmIChsZW5ndGggPT09IG51bU9mSGl0cykge1xuICAgICAgaXNTdW5rID0gdHJ1ZVxuICAgICAgcmV0dXJuIGlzU3Vua1xuICAgIH1cblxuICAgIHJldHVybiBpc1N1bmtcbiAgfVxuXG4gIGNvbnN0IGdldE51bU9mSGl0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gbnVtT2ZIaXRzXG4gIH1cblxuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHsgaGl0LCBoYXNCZWVuU3VuaywgZ2V0TnVtT2ZIaXRzLCBnZXRMZW5ndGggfVxufVxuIiwiZXhwb3J0IGNvbnN0IGFycmF5c0FyZUVxdWFsID0gKGFycjEsIGFycjIpID0+IHtcbiAgaWYgKGFycjEgPT09IG51bGwgfHwgYXJyMiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGlmIChhcnIxLmxlbmd0aCAhPT0gYXJyMi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycjEubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyMVtpXSAhPT0gYXJyMltpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG4iLCJleHBvcnQgY29uc3QgcmV0dXJuUmFuZG9tQUlCb2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYWlCb2FyZHMgPSBbYWlTaGlwQ29vcmRzT25lLCBhaVNoaXBDb29yZHNUd28sIGFpU2hpcENvb3Jkc1RocmVlXVxuICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXG4gIGNvbnN0IGNob3NlbkFJQm9hcmQgPSBPYmplY3QudmFsdWVzKGFpQm9hcmRzW3JhbmRvbUluZGV4XSlcbiAgcmV0dXJuIGNob3NlbkFJQm9hcmRcbn1cblxuY29uc3QgYWlTaGlwQ29vcmRzT25lID0ge1xuICBjYXJyaWVyOiBbXG4gICAgWzksIDBdLFxuICAgIFs5LCAxXSxcbiAgICBbOSwgMl0sXG4gICAgWzksIDNdLFxuICAgIFs5LCA0XVxuICBdLFxuICBiYXR0bGVzaGlwOiBbXG4gICAgWzUsIDVdLFxuICAgIFs2LCA1XSxcbiAgICBbNywgNV0sXG4gICAgWzgsIDVdXG4gIF0sXG4gIGNydWlzZXI6IFtcbiAgICBbMCwgNl0sXG4gICAgWzEsIDZdLFxuICAgIFsyLCA2XVxuICBdLFxuICBzdWJtYXJpbmU6IFtcbiAgICBbMywgOF0sXG4gICAgWzQsIDhdLFxuICAgIFs1LCA4XVxuICBdLFxuICBkZXN0cm95ZXI6IFtcbiAgICBbMCwgOV0sXG4gICAgWzEsIDldXG4gIF1cbn1cblxuY29uc3QgYWlTaGlwQ29vcmRzVHdvID0ge1xuICBjYXJyaWVyOiBbXG4gICAgWzAsIDBdLFxuICAgIFswLCAxXSxcbiAgICBbMCwgMl0sXG4gICAgWzAsIDNdLFxuICAgIFswLCA0XVxuICBdLFxuICBiYXR0bGVzaGlwOiBbXG4gICAgWzksIDVdLFxuICAgIFs5LCA2XSxcbiAgICBbOSwgN10sXG4gICAgWzksIDhdXG4gIF0sXG4gIGNydWlzZXI6IFtcbiAgICBbMiwgMl0sXG4gICAgWzMsIDJdLFxuICAgIFs0LCAyXVxuICBdLFxuICBzdWJtYXJpbmU6IFtcbiAgICBbNiwgNl0sXG4gICAgWzYsIDddLFxuICAgIFs2LCA4XVxuICBdLFxuICBkZXN0cm95ZXI6IFtcbiAgICBbOCwgMF0sXG4gICAgWzgsIDFdXG4gIF1cbn1cblxuY29uc3QgYWlTaGlwQ29vcmRzVGhyZWUgPSB7XG4gIGNhcnJpZXI6IFtcbiAgICBbNSwgMF0sXG4gICAgWzUsIDFdLFxuICAgIFs1LCAyXSxcbiAgICBbNSwgM10sXG4gICAgWzUsIDRdXG4gIF0sXG4gIGJhdHRsZXNoaXA6IFtcbiAgICBbMCwgOV0sXG4gICAgWzEsIDldLFxuICAgIFsyLCA5XSxcbiAgICBbMywgOV1cbiAgXSxcbiAgY3J1aXNlcjogW1xuICAgIFs3LCA3XSxcbiAgICBbOCwgN10sXG4gICAgWzksIDddXG4gIF0sXG4gIHN1Ym1hcmluZTogW1xuICAgIFsxLCAxXSxcbiAgICBbMiwgMV0sXG4gICAgWzMsIDFdXG4gIF0sXG4gIGRlc3Ryb3llcjogW1xuICAgIFs0LCA0XSxcbiAgICBbNCwgNV1cbiAgXVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC8qIDEgKi9cXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qIEFwcGx5IGJvcmRlciBib3ggdG8gZW50aXJlIGRvY3VtZW50ICovXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gICAqL1xcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqL1xcblxcbmhyIHtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIC8qIDEgKi9cXG4gICAgaGVpZ2h0OiAwO1xcbiAgICAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnByZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gICAgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcblxcbmEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgLyogMSAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgLyogMiAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAgICogYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gICAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuaW5wdXQge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwO1xcbiAgICAvKiAyICovXFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIEdpdmUgaW5wdXQgYW5kIHRleHQgYXJlYSBjb25zaXN0ZW50IGxvb2sgKi9cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHggMCAwIC0xMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQ6IGJvbGQgMC42ZW0gc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgICBjb2xvcjogI2ZmZjsgKi9cXG59XFxuXFxuLyogR2V0cyByaWQgb2YgZGVmYXVsdCBzZWFyY2ggdG8gcmVtb3ZlIHJlc3RyaWN0aW9ucyAqL1xcbmlucHV0W3R5cGU9J3NlYXJjaCddIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyogRml4IGZvciBpbmNvbnNpc3RlbnQgZGlzcGxheSBvZiBjbGVhciBcXFwieFxcXCIgaWNvbiBpbiBzZWFyY2ggaW5wdXRzIGFjcm9zcyBkaWZmZXJlbnQgYnJvd3NlcnMuIFxcbiAgLCB0aGlzIGNvZGUgcmVtb3ZlcyB0aGUgaWNvbiBpbiBFZGdlIGFuZCBDaHJvbWUgd2hlbiB0aGUgaW5wdXQgbG9zZXMgZm9jdXMsIHdoaWxlIGtlZXBpbmcgaXQgdmlzaWJsZSBpbiBTYWZhcmkuICovXFxuaW5wdXRbdHlwZT0nc2VhcmNoJ106bm90KDpmb2N1cywgOmFjdGl2ZSk6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgLyogMSAqL1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPSdidXR0b24nXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT0ncmVzZXQnXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT0nc3VibWl0J106Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAgICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPSdidXR0b24nXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT0ncmVzZXQnXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT0nc3VibWl0J106LW1vei1mb2N1c3Jpbmcge1xcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuZmllbGRzZXQge1xcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxubGVnZW5kIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgLyogMiAqL1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgLyogMSAqL1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDtcXG4gICAgLyogMyAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICAvKiAxICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gICAqL1xcblxcbnByb2dyZXNzIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAgICovXFxuXFxudGV4dGFyZWEge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gICAqL1xcblxcblt0eXBlPSdjaGVja2JveCddLFxcblt0eXBlPSdyYWRpbyddIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICAgKi9cXG5cXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICAgKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gICAgLyogMSAqL1xcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gICAqL1xcblxcblt0eXBlPSdzZWFyY2gnXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAgICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICAgKi9cXG5cXG5kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAgICovXFxuXFxudGVtcGxhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAgICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltd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ZixNQUFNO0lBQ04sVUFBVTtJQUNWLE1BQU07SUFDTixtQkFBbUI7SUFDbkIsTUFBTTtBQUNWOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7O0lBR0k7O0FBRUo7O0lBRUksc0JBQXNCO0lBQ3RCLE1BQU07SUFDTixZQUFZO0lBQ1osTUFBTTtBQUNWOztBQUVBOztJQUVJOztBQUVKOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7OztJQUdJOztBQUVKO0lBQ0ksNkJBQTZCO0lBQzdCLE1BQU07SUFDTixvQkFBb0I7SUFDcEIsTUFBTTtBQUNWOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBOzs7SUFHSTs7QUFFSjtJQUNJLDBCQUEwQjtJQUMxQixNQUFNO0lBQ04sYUFBYTtJQUNiLE1BQU07QUFDVjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAvKiAxICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKiBBcHBseSBib3JkZXIgYm94IHRvIGVudGlyZSBkb2N1bWVudCAqL1xcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICAgKi9cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICAgKi9cXG5cXG5ociB7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAvKiAxICovXFxuICAgIGhlaWdodDogMDtcXG4gICAgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5wcmUge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5hIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gICAgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gICAqIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgICBmb250LXNpemU6IDc1JTtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICAgIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcblxcbmltZyB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmlucHV0IHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAvKiAxICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgLyogMiAqL1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBHaXZlIGlucHV0IGFuZCB0ZXh0IGFyZWEgY29uc2lzdGVudCBsb29rICovXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDRweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAtMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250OiBib2xkIDAuNmVtIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgLyogYmFja2dyb3VuZDogIzAwMDtcXG4gICAgY29sb3I6ICNmZmY7ICovXFxufVxcblxcbi8qIEdldHMgcmlkIG9mIGRlZmF1bHQgc2VhcmNoIHRvIHJlbW92ZSByZXN0cmljdGlvbnMgKi9cXG5pbnB1dFt0eXBlPSdzZWFyY2gnXSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qIEZpeCBmb3IgaW5jb25zaXN0ZW50IGRpc3BsYXkgb2YgY2xlYXIgXFxcInhcXFwiIGljb24gaW4gc2VhcmNoIGlucHV0cyBhY3Jvc3MgZGlmZmVyZW50IGJyb3dzZXJzLiBcXG4gICwgdGhpcyBjb2RlIHJlbW92ZXMgdGhlIGljb24gaW4gRWRnZSBhbmQgQ2hyb21lIHdoZW4gdGhlIGlucHV0IGxvc2VzIGZvY3VzLCB3aGlsZSBrZWVwaW5nIGl0IHZpc2libGUgaW4gU2FmYXJpLiAqL1xcbmlucHV0W3R5cGU9J3NlYXJjaCddOm5vdCg6Zm9jdXMsIDphY3RpdmUpOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIC8qIDEgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT0nYnV0dG9uJ106Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9J3Jlc2V0J106Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9J3N1Ym1pdCddOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gICAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT0nYnV0dG9uJ106LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9J3Jlc2V0J106LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9J3N1Ym1pdCddOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmZpZWxkc2V0IHtcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmxlZ2VuZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIDEgKi9cXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIC8qIDIgKi9cXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIC8qIDEgKi9cXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIDMgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICAgKi9cXG5cXG5wcm9ncmVzcyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gICAqL1xcblxcbnRleHRhcmVhIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5bdHlwZT0nY2hlY2tib3gnXSxcXG5bdHlwZT0ncmFkaW8nXSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIDEgKi9cXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAgICovXFxuXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAgICovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAgIC8qIDEgKi9cXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICAgKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gICAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gICAgLyogMSAqL1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICovXFxuXFxuZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gICAqL1xcblxcbnRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gICAqL1xcblxcbltoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICAgIGNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogODBweDtcXG59XFxuXFxuLmhlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLnRvcEJhckNvbnRhaW5lciB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDc1dnc7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9wQmFyQ29udGFpbmVyIHAge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b24uc2hpcENlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4jQUlCb2FyZCBidXR0b24sXFxuI3BsYXllckJvYXJkIGJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcblxcbi5wbGF5ZXJCb2FyZENvbnRhaW5lcixcXG4uYWlCb2FyZENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbiNib2FyZHNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XFxuICAgIHdpZHRoOiA3MnZ3O1xcbn1cXG5cXG4ub3JpZW50YXRpb25Ub2dnbGVCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jYm9hcmRzQ29udGFpbmVyIHAge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllckJvYXJkIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDU0cHgpO1xcbn1cXG5cXG4jQUlCb2FyZCB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1NHB4KTtcXG59XFxuXFxuLyogYnV0dG9uLmJvYXJkQ2VsbCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxufSAqL1xcblxcbmJ1dHRvbi5zaGlwQ2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5idXR0b24uc2hpcEhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgOTQsIDIyKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsT0FBTztJQUNQLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFFBQVE7SUFDUix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLDJEQUEyRDtJQUMzRCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxvQ0FBb0M7QUFDeEM7O0FBRUE7OztHQUdHOztBQUVIO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gICAgY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4uaGVhZGVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleDogMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4udG9wQmFyQ29udGFpbmVyIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogNzV2dztcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b3BCYXJDb250YWluZXIgcCB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbi5zaGlwQ2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbiNBSUJvYXJkIGJ1dHRvbixcXG4jcGxheWVyQm9hcmQgYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuLnBsYXllckJvYXJkQ29udGFpbmVyLFxcbi5haUJvYXJkQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuI2JvYXJkc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBub25lO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcXG4gICAgd2lkdGg6IDcydnc7XFxufVxcblxcbi5vcmllbnRhdGlvblRvZ2dsZUJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNib2FyZHNDb250YWluZXIgcCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyQm9hcmQge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTRweCk7XFxufVxcblxcbiNBSUJvYXJkIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDU0cHgpO1xcbn1cXG5cXG4vKiBidXR0b24uYm9hcmRDZWxsIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG59ICovXFxuXFxuYnV0dG9uLnNoaXBDZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJ1dHRvbi5zaGlwSGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCA5NCwgMjIpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1xuICBkaXNwbGF5Q29udHJvbGxlcixcbiAgcHJlR2FtZVNldHVwXG59IGZyb20gJy4vY29udHJvbGxlcnMvZGlzcGxheUNvbnRyb2xsZXInXG5cbmltcG9ydCAnLi9zdHlsZXMvbm9ybWFsaXplLmNzcydcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJ1xuXG5wcmVHYW1lU2V0dXAoKVxuIl0sIm5hbWVzIjpbImdhbWVDb250cm9sbGVyIiwiZ2FtZSIsInByZUdhbWVTZXR1cCIsInJlbmRlclBsYXllckJvYXJkIiwicGxhY2VDYXJyaWVyU2hpcCIsInJlbmRlckFJQm9hcmQiLCJkaXNwbGF5Q29udHJvbGxlciIsInBsYWNlQUlTaGlwcyIsImFpQm9hcmREaXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGxheWVycyIsImdldFBsYXllcnMiLCJhY3RpdmVQbGF5ZXIiLCJnZXRDdXJyZW50UGxheWVyIiwiaHVtYW4iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0IiwidG9wQmFyUGFyYSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImh1bWFuQm9hcmREaXYiLCJvcmllbnRhdGlvbkJ0blZhbHVlcyIsImNyZWF0ZU9yaWVudGF0aW9uVG9nZ2xlQnRuIiwiaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyIsIm9yaWVudGF0aW9uVG9nZ2xlQnRuIiwiY29udHJvbGxlciIsIkFib3J0Q29udHJvbGxlciIsImUiLCJoYW5kbGVDYXJyaWVyU2hpcFBsYWNlbWVudCIsInNpZ25hbCIsInBsYWNlQmF0dGxlU2hpcCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVCYXR0bGVTaGlwUGxhY2VtZW50IiwicGxhY2VDcnVpc2VyIiwiaGFuZGxlQ3J1aXNlclNoaXBQbGFjZW1lbnQiLCJwbGFjZVN1Ym1hcmluZSIsImhhbmRsZVN1Ym1hcmluZVNoaXBQbGFjZW1lbnQiLCJwbGFjZURlc3Ryb3llciIsImhhbmRsZURlc3Ryb3llclNoaXBQbGFjZW1lbnQiLCJwbGF5ZXJCb2FyZCIsImdldEh1bWFuQm9hcmQiLCJwbGF5ZXJCb2FyZERpdiIsImlubmVySFRNTCIsImkiLCJsZW5ndGgiLCJjdXJyZW50Um93IiwiaiIsImJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXRhc2V0Iiwicm93IiwiY29sdW1uIiwiYXBwZW5kQ2hpbGQiLCJhaUJvYXJkIiwiZ2V0QUlCb2FyZCIsInVwZGF0ZUh1bWFuQm9hcmQiLCJodW1hbkJvYXJkIiwibWlzc2VkU2hvdHMiLCJnZXRIdW1hbkJvYXJkT2JqIiwiZ2V0TWlzc2VkU2hvdHMiLCJzdWNjZXNzZnVsU2hvdHMiLCJnZXRTdWNjZXNzZnVsU2hvdHMiLCJhbGxEb21Ob2RlcyIsIkFycmF5IiwiZnJvbSIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwic2hvdCIsInRhcmdldE5vZGUiLCJyZW1vdmUiLCJ1cGRhdGVBSUJvYXJkIiwiZ2V0QUlCb2FyZE9iaiIsImhvcml6b250YWxTaGlwT3JpZW50YXRpb24iLCJzZWxlY3RlZFJvdyIsInRhcmdldCIsInNlbGVjdGVkQ29sdW1uIiwiY29vcmRpbmF0ZSIsImNhcnJpZXJQbGFjZWQiLCJwbGFjZUNhcnJpZXJPbkJvYXJkIiwiYWJvcnQiLCJyZW1vdmVQcmV2aW91c09yaWVudGF0aW9uQnRuIiwiYmF0dGxlc2hpcFBsYWNlZCIsInBsYWNlQmF0dGxlc2hpcE9uQm9hcmQiLCJjcnVpc2VyUGxhY2VkIiwicGxhY2VDcnVpc2VyT25Cb2FyZCIsInN1Ym1hcmluZVBsYWNlZCIsInBsYWNlU3VibWFyaW5lT25Cb2FyZCIsImRlc3Ryb3llclBsYWNlZCIsInBsYWNlRGVzdHJveWVyT25Cb2FyZCIsInNoaXBUeXBlIiwiYm9hcmRET01DZWxsc0FyciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRIb3Jpem9udGFsRE9NQ29vcmRzIiwiZ2V0VmVydGljYWxET01Db29yZHMiLCJwbGFjZUNydWlzZXJTaGlwIiwicGxhY2VTdWJtYXJpbmVTaGlwIiwicGxhY2VEZXN0cm95ZXJTaGlwIiwic3RhcnRpbmdDb2x1bW4iLCJOdW1iZXIiLCJzaGlwTGVuZ3RoIiwiZG9tQ29vcmRpbmF0ZSIsInRhcmdldERPTUJ0biIsImZpbmRTaGlwRE9NQnRuIiwic3RhcnRpbmdSb3ciLCJkb21DZWxsUm93IiwiZG9tQ2VsbENvbHVtbiIsImFscmVhZHlBdHRhY2tlZCIsInByZXZlbnRTYW1lQXR0YWNrIiwicGxheVJvdW5kIiwiaHVtYW5XaW5zIiwiY2hlY2tGb3JXaW4iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVzZXRHYW1lU3RhdGUiLCJhbm5vdW5jZVdpbm5lciIsInBsYXlBZ2FpbiIsImhhbmRsZUFJTW92ZSIsImFpV2lucyIsIndpbm5lciIsIndpbm5lck5hbWUiLCJnZXROYW1lIiwidG9wQmFyRGl2IiwicGxheUFnYWluQnRuIiwic3RhcnROZXdHYW1lIiwicmVtb3ZlQ2hpbGQiLCJwcmV2aW91c09yaWVudGF0aW9uQnRuIiwiR2FtZWJvYXJkIiwiUGxheWVyIiwicmV0dXJuUmFuZG9tQUlCb2FyZCIsImNyZWF0ZUdhbWVCb2FyZCIsImNhcnJpZXJBcnIiLCJkZXRlcm1pbmVDYXJyaWVyQXJyQ29vcmRzIiwic2hpcFBsYWNlZCIsInBsYWNlU2hpcCIsInB1c2giLCJjb29yZCIsInRvU3RyaW5nIiwiYmF0dGxlc2hpcEFyciIsImRldGVybWluZUJhdHRsZXNoaXBBcnJDb29yZHMiLCJjcnVpc2VyQXJyIiwiZGV0ZXJtaW5lQ3J1aXNlckFyckNvb3JkcyIsInN1Ym1hcmluZUFyciIsImRldGVybWluZVN1Ym1hcmluZUFyckNvb3JkcyIsImRlc3Ryb3llckFyciIsImRldGVybWluZURlc3Ryb3llckFyckNvb3JkcyIsInBsYWNlU2hpcHMiLCJodW1hblBsYXllciIsImFpUGxheWVyIiwiQUkiLCJjdXJyZW50UGxheWVyIiwicmVjZWl2ZUF0dGFjayIsIm5leHRNb3ZlIiwiY29tcHV0ZXJzTmV4dE1vdmUiLCJyZW1vdmVMYXN0QUlNb3ZlIiwic3dpdGNoUGxheWVyIiwiYXZhaWxhYmxlTW92ZXMiLCJnZXRBSUF2YWlsYWJsZU1vdmVzIiwibGFzdEFJTW92ZVN1Y2Nlc3NmdWwiLCJnZXRMYXN0QUlNb3ZlU3VjY2Vzc2Z1bCIsImFkamFjZW50U2xvdHMiLCJnZXRBZGphY2VudFNsb3RzIiwiZ2V0QWRqYWNlbnRTbG90c1F1ZXVlIiwiYWRkQWRqYWNlbnRTbG90c1RvUXVldWUiLCJnZXRBZGphY2VudFF1ZXVlU2xvdCIsInJhbmRvbU1vdmUiLCJtYWtlUmFuZG9tTW92ZSIsImFsbFNoaXBzU3VuayIsImNsZWFyR2FtZUJvYXJkIiwiZ2V0Qm9hcmQiLCJib2FyZCIsImNvb3JkaW5hdGVzT2JqIiwic2hpcENvb3JkaW5hdGVzQXJyIiwiT2JqZWN0IiwidmFsdWVzIiwic2hpcENvb3JkaW5hdGVzIiwiYXJyYXlzQXJlRXF1YWwiLCJTaGlwIiwic2hpcE9iamVjdHMiLCJhaUF2YWlsYWJsZU1vdmVzIiwiYWRqYWNlbnRTbG90c1F1ZXVlIiwicm93cyIsImNvbHVtbnMiLCJ1bmRlZmluZWQiLCJ2YWxpZGF0ZUNvb3JkaW5hdGVzIiwiY29vcmRpbmF0ZXMiLCJ2YWxpZENvb3JkaW5hdGVzIiwiY2hlY2tTZWxmT3ZlcmxhcCIsImNvb3JkaW5hdGVzT3ZlcmxhcCIsInByZXZDb29yZGluYXRlIiwiaW5kZXgiLCJjaGVja092ZXJsYXBXaXRoT3RoZXJTaGlwcyIsInNoaXBzT3ZlcmxhcCIsImJvYXJkQ2VsbCIsImxlZ2FsQ29vcmRpbmF0ZXMiLCJvdmVybGFwcGluZ0Nvb3JkaW5hdGVzIiwic2hpcE92ZXJsYXBwaW5nIiwic2hpcE9iamVjdCIsInNoaXBPYmoiLCJoaXQiLCJyZW1vdmVBZGphY2VudFNsb3QiLCJzcGxpY2UiLCJldmVyeVNoaXBTYW5rIiwiaGFzQmVlblN1bmsiLCJtb3ZlIiwic2xvdCIsImdldFNoaXBPYmplY3RzIiwicG9wIiwibmFtZSIsImlzQUkiLCJhdmFpbGFibGVNb3Zlc0xlbmd0aCIsInJhbmRvbUFyckluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tQ29vcmRpbmF0ZSIsImFkamFjZW50UXVldWUiLCJsYXN0U3VjY2Vzc2Z1bE1vdmUiLCJhdCIsInJldHJpZXZlQWRqYWNlbnRTbG90cyIsImxlZ2FsQWRqYWNlbnRTbG90cyIsInJlbW92ZUlsbGVnYWxBZGphY2VudFNsb3RzIiwiZ2V0Q2VsbEFib3ZlIiwibmV3QXJyIiwibmV3Um93IiwiZ2V0Q2VsbEJlbG93IiwiYXJyIiwiZ2V0Q2VsbFRvUmlnaHQiLCJuZXdDb2x1bW4iLCJnZXRDZWxsVG9MZWZ0IiwibGFzdFN1Y2Nlc3NmdWxNb3ZlVmFsdWUiLCJhZGphY2VudFNsb3RzQXJyIiwicHJldmVudFByZXZpb3VzU2hvdFRvUXVldWUiLCJudW1PZkhpdHMiLCJpc1N1bmsiLCJnZXROdW1PZkhpdHMiLCJnZXRMZW5ndGgiLCJhcnIxIiwiYXJyMiIsImFpQm9hcmRzIiwiYWlTaGlwQ29vcmRzT25lIiwiYWlTaGlwQ29vcmRzVHdvIiwiYWlTaGlwQ29vcmRzVGhyZWUiLCJyYW5kb21JbmRleCIsImNob3NlbkFJQm9hcmQiLCJjYXJyaWVyIiwiYmF0dGxlc2hpcCIsImNydWlzZXIiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiXSwic291cmNlUm9vdCI6IiJ9