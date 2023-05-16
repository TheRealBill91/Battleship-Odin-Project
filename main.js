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
  const topBarDiv = document.querySelector('.topBarContainer');
  let horizontalShipOrientationStatus = true;
  const orientationToggleBtn = document.createElement('button');
  orientationToggleBtn.classList.add('orientationToggleBtn');
  orientationToggleBtn.textContent = 'Horizontal';
  topBarDiv.appendChild(orientationToggleBtn);
  orientationToggleBtn.addEventListener('click', () => {
    if (horizontalShipOrientationStatus === true) {
      horizontalShipOrientationStatus = false;
      orientationToggleBtn.textContent = 'Vertical';
    } else {
      horizontalShipOrientationStatus = true;
      orientationToggleBtn.textContent = 'Horizontal';
    }
  }, {
    once: true
  });
  humanBoardDiv.addEventListener('click', e => {
    handleCarrierShipPlacement(e, horizontalShipOrientationStatus);
  }, {
    once: true
  });
};
const placeBattleShip = () => {
  const topBarPara = document.querySelector('.topBarContainer > p');
  topBarPara.textContent = 'Place your battleship';
  const humanBoardDiv = document.querySelector('#playerBoard');
  let horizontalShipOrientationStatus = true;
  const orientationToggleBtn = document.querySelector('.orientationToggleBtn');
  orientationToggleBtn.textContent = 'Horizontal';
  orientationToggleBtn.addEventListener('click', () => {
    if (horizontalShipOrientationStatus === true) {
      horizontalShipOrientationStatus = false;
      orientationToggleBtn.textContent = 'Vertical';
    } else {
      horizontalShipOrientationStatus = true;
      orientationToggleBtn.textContent = 'Horizontal';
    }
  }, {
    once: true
  });
  humanBoardDiv.addEventListener('click', e => {
    console.log('Orientation status going into placement:' + horizontalShipOrientationStatus);
    handleBattleShipPlacement(e, horizontalShipOrientationStatus);
  }, {
    once: true
  });
};
const placeCruiser = () => {
  const topBarPara = document.querySelector('.topBarContainer > p');
  topBarPara.textContent = 'Place your Cruiser';
  const humanBoardDiv = document.querySelector('#playerBoard');
  let horizontalShipOrientationStatus = true;
  const orientationToggleBtn = document.querySelector('.orientationToggleBtn');
  orientationToggleBtn.textContent = 'Horizontal';
  orientationToggleBtn.addEventListener('click', () => {
    if (horizontalShipOrientationStatus === true) {
      horizontalShipOrientationStatus = false;
      orientationToggleBtn.textContent = 'Vertical';
    } else {
      horizontalShipOrientationStatus = true;
      orientationToggleBtn.textContent = 'Horizontal';
    }
  }, {
    once: true
  });
  humanBoardDiv.addEventListener('click', e => {
    console.log('Orientation status going into placement:' + horizontalShipOrientationStatus);
    handleCruiserShipPlacement(e, horizontalShipOrientationStatus);
  }, {
    once: true
  });
};
const placeSubmarine = () => {
  const topBarPara = document.querySelector('.topBarContainer > p');
  topBarPara.textContent = 'Place your Submarine';
  const humanBoardDiv = document.querySelector('#playerBoard');
  let horizontalShipOrientationStatus = true;
  const orientationToggleBtn = document.querySelector('.orientationToggleBtn');
  orientationToggleBtn.textContent = 'Horizontal';
  orientationToggleBtn.addEventListener('click', () => {
    if (horizontalShipOrientationStatus === true) {
      horizontalShipOrientationStatus = false;
      orientationToggleBtn.textContent = 'Vertical';
    } else {
      horizontalShipOrientationStatus = true;
      orientationToggleBtn.textContent = 'Horizontal';
    }
  }, {
    once: true
  });
  humanBoardDiv.addEventListener('click', e => {
    console.log('Orientation status going into placement:' + horizontalShipOrientationStatus);
    handleSubmarineShipPlacement(e, horizontalShipOrientationStatus);
  }, {
    once: true
  });
};
const placeDestroyer = () => {
  const topBarPara = document.querySelector('.topBarContainer > p');
  topBarPara.textContent = 'Place your Destroyer';
  const humanBoardDiv = document.querySelector('#playerBoard');
  let horizontalShipOrientationStatus = true;
  const orientationToggleBtn = document.querySelector('.orientationToggleBtn');
  orientationToggleBtn.textContent = 'Horizontal';
  orientationToggleBtn.addEventListener('click', () => {
    if (horizontalShipOrientationStatus === true) {
      horizontalShipOrientationStatus = false;
      orientationToggleBtn.textContent = 'Vertical';
    } else {
      horizontalShipOrientationStatus = true;
      orientationToggleBtn.textContent = 'Horizontal';
    }
  }, {
    once: true
  });
  humanBoardDiv.addEventListener('click', e => {
    console.log('Orientation status going into placement:' + horizontalShipOrientationStatus);
    handleDestroyerShipPlacement(e, horizontalShipOrientationStatus);
  }, {
    once: true
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
const handleCarrierShipPlacement = (e, horizontalShipOrientation) => {
  const selectedRow = e.target.dataset.row;
  const selectedColumn = e.target.dataset.column;
  const coordinate = [selectedRow, selectedColumn];
  const carrierPlaced = placeCarrierOnBoard(coordinate, horizontalShipOrientation);
  if (carrierPlaced) {
    placeBattleShip();
  } else {
    return placeCarrierShip;
  }
};
const handleBattleShipPlacement = (e, horizontalShipOrientation) => {
  const selectedRow = e.target.dataset.row;
  const selectedColumn = e.target.dataset.column;
  const coordinate = [selectedRow, selectedColumn];
  const battleshipPlaced = placeBattleshipOnBoard(coordinate, horizontalShipOrientation);
  if (battleshipPlaced) {
    placeCruiser();
  } else {
    return placeBattleShip;
  }
};
const handleCruiserShipPlacement = (e, horizontalShipOrientation) => {
  const selectedRow = e.target.dataset.row;
  const selectedColumn = e.target.dataset.column;
  const coordinate = [selectedRow, selectedColumn];
  const cruiserPlaced = placeCruiserOnBoard(coordinate, horizontalShipOrientation);
  if (cruiserPlaced) {
    placeSubmarine();
  } else {
    return placeCruiser;
  }
};
const handleSubmarineShipPlacement = (e, horizontalShipOrientation) => {
  const selectedRow = e.target.dataset.row;
  const selectedColumn = e.target.dataset.column;
  const coordinate = [selectedRow, selectedColumn];
  const submarinePlaced = placeSubmarineOnBoard(coordinate, horizontalShipOrientation);
  if (submarinePlaced) {
    placeDestroyer();
  } else {
    return placeSubmarine;
  }
};
const handleDestroyerShipPlacement = (e, horizontalShipOrientation) => {
  const selectedRow = e.target.dataset.row;
  const selectedColumn = e.target.dataset.column;
  const coordinate = [selectedRow, selectedColumn];
  const destroyerPlaced = placeDestroyerOnBoard(coordinate, horizontalShipOrientation);
  if (destroyerPlaced) {
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    width: 100vw;\n    overflow-x: hidden;\n}\n\nheader {\n    background-color: darkblue;\n    color: rgb(236, 236, 236);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 80px;\n}\n\n.headerContainer {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\nmain {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.topBarContainer {\n    outline: 1px solid black;\n    width: 75vw;\n    height: 80px;\n    margin-top: 24px;\n    display: flex;\n    gap: 10px;\n}\n\nbutton.shipCell {\n    background-color: grey;\n}\n\n#AIBoard button,\n#playerBoard button {\n    border-radius: 0;\n}\n\n.playerBoardContainer,\n.aiBoardContainer {\n    display: grid;\n}\n\n#boardsContainer {\n    display: flex;\n    justify-content: center;\n    gap: 12px;\n    outline: 1px solid black;\n    padding: 12px;\n    display: grid;\n    grid-template-rows: none;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    width: 91vw;\n}\n\n.orientationToggleBtn {\n    background-color: #333;\n    color: white;\n    border-radius: 8px;\n}\n\n#boardsContainer p {\n    justify-self: center;\n}\n\n#playerBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 54px);\n\n}\n\n#AIBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 54px);\n\n\n}\n\n/* button.boardCell {\n    border: 1px solid black;\n    border-radius: 0px;\n} */\n\nbutton.shipCell {\n    background-color: grey;\n    border: 1px solid black;\n}\n\nbutton.shipHit {\n    background-color: rgb(22, 94, 22);\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;IAC1B,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,OAAO;IACP,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,wBAAwB;IACxB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,wBAAwB;IACxB,aAAa;IACb,aAAa;IACb,wBAAwB;IACxB,2DAA2D;IAC3D,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,oCAAoC;;AAExC;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,oCAAoC;;;AAGxC;;AAEA;;;GAGG;;AAEH;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,iCAAiC;AACrC","sourcesContent":["body {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    width: 100vw;\n    overflow-x: hidden;\n}\n\nheader {\n    background-color: darkblue;\n    color: rgb(236, 236, 236);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 80px;\n}\n\n.headerContainer {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\nmain {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.topBarContainer {\n    outline: 1px solid black;\n    width: 75vw;\n    height: 80px;\n    margin-top: 24px;\n    display: flex;\n    gap: 10px;\n}\n\nbutton.shipCell {\n    background-color: grey;\n}\n\n#AIBoard button,\n#playerBoard button {\n    border-radius: 0;\n}\n\n.playerBoardContainer,\n.aiBoardContainer {\n    display: grid;\n}\n\n#boardsContainer {\n    display: flex;\n    justify-content: center;\n    gap: 12px;\n    outline: 1px solid black;\n    padding: 12px;\n    display: grid;\n    grid-template-rows: none;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    width: 91vw;\n}\n\n.orientationToggleBtn {\n    background-color: #333;\n    color: white;\n    border-radius: 8px;\n}\n\n#boardsContainer p {\n    justify-self: center;\n}\n\n#playerBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 54px);\n\n}\n\n#AIBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 54px);\n\n\n}\n\n/* button.boardCell {\n    border: 1px solid black;\n    border-radius: 0px;\n} */\n\nbutton.shipCell {\n    background-color: grey;\n    border: 1px solid black;\n}\n\nbutton.shipHit {\n    background-color: rgb(22, 94, 22);\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxVQUFVLEVBQUUsQ0FDVixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFVixDQUFDO0FBRUQsTUFBTVIsZUFBZSxHQUFHO0VBQ3RCSSxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxVQUFVLEVBQUUsQ0FDVixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxD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Q3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNHd0M7QUFFVDtBQUNKO0FBRTNCbFAsNEVBQVksQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9jb250cm9sbGVycy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9jb250cm9sbGVycy9nYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9mYWN0b3JpZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2ZhY3Rvcmllcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvZmFjdG9yaWVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvaGVscGVycy9hcnJheXNBcmVFcXVhbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9oZWxwZXJzL3JvdGF0ZUFJQm9hcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3M/NDNmNCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnYW1lQ29udHJvbGxlciB9IGZyb20gJy4vZ2FtZUNvbnRyb2xsZXInXG5cbmNvbnN0IGdhbWUgPSBnYW1lQ29udHJvbGxlcigpXG5cbmNvbnN0IHByZUdhbWVTZXR1cCA9ICgpID0+IHtcbiAgcmVuZGVyUGxheWVyQm9hcmQoKVxuICBwbGFjZUNhcnJpZXJTaGlwKClcbiAgcmVuZGVyQUlCb2FyZCgpXG59XG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCkgPT4ge1xuICAvLyB0aGlzIGlzIHdoZXJlIHRoZSBzaGlwIHBsYWNlbWVudCB3aWxsIGhhcHBlbiBmb3IgaHVtYW4gcGxheWVyXG4gIGdhbWUucGxhY2VBSVNoaXBzKClcbiAgcmVuZGVyQUlCb2FyZCgpXG4gIGNvbnN0IGFpQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlCb2FyZCcpXG4gIGNvbnN0IHBsYXllcnMgPSBnYW1lLmdldFBsYXllcnMoKVxuICBjb25zdCBhY3RpdmVQbGF5ZXIgPSBnYW1lLmdldEN1cnJlbnRQbGF5ZXIoKVxuXG4gIGlmIChhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnMuaHVtYW4pIHtcbiAgICBhaUJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0KVxuICB9XG59XG5cbmNvbnN0IHBsYWNlQ2FycmllclNoaXAgPSAoKSA9PiB7XG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBjYXJyaWVyIHNoaXAnXG5cbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXG5cbiAgY29uc3QgdG9wQmFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lcicpXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxuICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLmNsYXNzTGlzdC5hZGQoJ29yaWVudGF0aW9uVG9nZ2xlQnRuJylcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcbiAgdG9wQmFyRGl2LmFwcGVuZENoaWxkKG9yaWVudGF0aW9uVG9nZ2xlQnRuKVxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICdjbGljaycsXG4gICAgKCkgPT4ge1xuICAgICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IGZhbHNlXG4gICAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcbiAgICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcbiAgICAgIH1cbiAgICB9LFxuICAgIHsgb25jZTogdHJ1ZSB9XG4gIClcblxuICBodW1hbkJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2NsaWNrJyxcbiAgICAoZSkgPT4ge1xuICAgICAgaGFuZGxlQ2FycmllclNoaXBQbGFjZW1lbnQoZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cylcbiAgICB9LFxuICAgIHsgb25jZTogdHJ1ZSB9XG4gIClcbn1cblxuY29uc3QgcGxhY2VCYXR0bGVTaGlwID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgYmF0dGxlc2hpcCdcblxuICBjb25zdCBodW1hbkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckJvYXJkJylcbiAgbGV0IGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXG4gIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yaWVudGF0aW9uVG9nZ2xlQnRuJylcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgICgpID0+IHtcbiAgICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBmYWxzZVxuICAgICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXG4gICAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXG4gICAgICB9XG4gICAgfSxcbiAgICB7IG9uY2U6IHRydWUgfVxuICApXG5cbiAgaHVtYW5Cb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgICdjbGljaycsXG4gICAgKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnT3JpZW50YXRpb24gc3RhdHVzIGdvaW5nIGludG8gcGxhY2VtZW50OicgK1xuICAgICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXNcbiAgICAgIClcbiAgICAgIGhhbmRsZUJhdHRsZVNoaXBQbGFjZW1lbnQoZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cylcbiAgICB9LFxuICAgIHsgb25jZTogdHJ1ZSB9XG4gIClcbn1cblxuY29uc3QgcGxhY2VDcnVpc2VyID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgQ3J1aXNlcidcblxuICBjb25zdCBodW1hbkJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckJvYXJkJylcblxuICBsZXQgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JpZW50YXRpb25Ub2dnbGVCdG4nKVxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJ1xuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICdjbGljaycsXG4gICAgKCkgPT4ge1xuICAgICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IGZhbHNlXG4gICAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcbiAgICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcbiAgICAgIH1cbiAgICB9LFxuICAgIHsgb25jZTogdHJ1ZSB9XG4gIClcblxuICBodW1hbkJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2NsaWNrJyxcbiAgICAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICdPcmllbnRhdGlvbiBzdGF0dXMgZ29pbmcgaW50byBwbGFjZW1lbnQ6JyArXG4gICAgICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1c1xuICAgICAgKVxuICAgICAgaGFuZGxlQ3J1aXNlclNoaXBQbGFjZW1lbnQoZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cylcbiAgICB9LFxuICAgIHsgb25jZTogdHJ1ZSB9XG4gIClcbn1cblxuY29uc3QgcGxhY2VTdWJtYXJpbmUgPSAoKSA9PiB7XG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBTdWJtYXJpbmUnXG5cbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXG5cbiAgbGV0IGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXG4gIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yaWVudGF0aW9uVG9nZ2xlQnRuJylcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgICgpID0+IHtcbiAgICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBmYWxzZVxuICAgICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXG4gICAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXG4gICAgICB9XG4gICAgfSxcbiAgICB7IG9uY2U6IHRydWUgfVxuICApXG5cbiAgaHVtYW5Cb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgICdjbGljaycsXG4gICAgKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnT3JpZW50YXRpb24gc3RhdHVzIGdvaW5nIGludG8gcGxhY2VtZW50OicgK1xuICAgICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXNcbiAgICAgIClcbiAgICAgIGhhbmRsZVN1Ym1hcmluZVNoaXBQbGFjZW1lbnQoZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cylcbiAgICB9LFxuICAgIHsgb25jZTogdHJ1ZSB9XG4gIClcbn1cblxuY29uc3QgcGxhY2VEZXN0cm95ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHRvcEJhclBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gcCcpXG4gIHRvcEJhclBhcmEudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBEZXN0cm95ZXInXG5cbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXG5cbiAgbGV0IGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXG4gIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yaWVudGF0aW9uVG9nZ2xlQnRuJylcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgICgpID0+IHtcbiAgICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBmYWxzZVxuICAgICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXG4gICAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXG4gICAgICB9XG4gICAgfSxcbiAgICB7IG9uY2U6IHRydWUgfVxuICApXG5cbiAgaHVtYW5Cb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgICdjbGljaycsXG4gICAgKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnT3JpZW50YXRpb24gc3RhdHVzIGdvaW5nIGludG8gcGxhY2VtZW50OicgK1xuICAgICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXNcbiAgICAgIClcbiAgICAgIGhhbmRsZURlc3Ryb3llclNoaXBQbGFjZW1lbnQoZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cylcbiAgICB9LFxuICAgIHsgb25jZTogdHJ1ZSB9XG4gIClcbn1cblxuY29uc3QgcmVuZGVyUGxheWVyQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZ2FtZS5nZXRIdW1hbkJvYXJkKClcbiAgY29uc3QgcGxheWVyQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyQm9hcmQnKVxuICBwbGF5ZXJCb2FyZERpdi5pbm5lckhUTUwgPSAnJ1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjdXJyZW50Um93ID0gcGxheWVyQm9hcmRbaV1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRSb3cubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYm9hcmRDZWxsJylcbiAgICAgIGJ1dHRvbi5kYXRhc2V0LnJvdyA9IGlcbiAgICAgIGJ1dHRvbi5kYXRhc2V0LmNvbHVtbiA9IGpcblxuICAgICAgcGxheWVyQm9hcmREaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCByZW5kZXJBSUJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBhaUJvYXJkID0gZ2FtZS5nZXRBSUJvYXJkKClcbiAgY29uc3QgYWlCb2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSUJvYXJkJylcbiAgYWlCb2FyZERpdi5pbm5lckhUTUwgPSAnJ1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWlCb2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnRSb3cgPSBhaUJvYXJkW2ldXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50Um93Lmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JvYXJkQ2VsbCcpXG4gICAgICBidXR0b24uZGF0YXNldC5yb3cgPSBpXG4gICAgICBidXR0b24uZGF0YXNldC5jb2x1bW4gPSBqXG4gICAgICBjb25zdCByb3cgPSBhaUJvYXJkW2ldXG4gICAgICAvLyBmb3IgdGVzdGluZywgdGhpcyBzaG93cyBBSSBib2FyZCBhdCBzdGFydFxuICAgICAgLy8gd2hpY2ggd2UgZG8gbm90IHdhbnRcbiAgICAgIGlmICh0eXBlb2Ygcm93W2pdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2hpcENlbGwnKVxuICAgICAgfVxuICAgICAgYWlCb2FyZERpdi5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHVwZGF0ZUh1bWFuQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGh1bWFuQm9hcmQgPSBnYW1lLmdldEh1bWFuQm9hcmQoKVxuICBjb25zdCBtaXNzZWRTaG90cyA9IGdhbWUuZ2V0SHVtYW5Cb2FyZE9iai5nZXRNaXNzZWRTaG90cygpXG4gIGNvbnN0IHN1Y2Nlc3NmdWxTaG90cyA9IGdhbWUuZ2V0SHVtYW5Cb2FyZE9iai5nZXRTdWNjZXNzZnVsU2hvdHMoKVxuICBjb25zdCBhbGxEb21Ob2RlcyA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckJvYXJkJykuY2hpbGROb2Rlc1xuICApXG5cbiAgbWlzc2VkU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IHNob3RbMF1cbiAgICBjb25zdCBjb2x1bW4gPSBzaG90WzFdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERvbU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YXJnZXROb2RlID0gYWxsRG9tTm9kZXNbaV0uZGF0YXNldFxuICAgICAgaWYgKCt0YXJnZXROb2RlLmNvbHVtbiA9PT0gY29sdW1uICYmICt0YXJnZXROb2RlLnJvdyA9PT0gcm93KSB7XG4gICAgICAgIGFsbERvbU5vZGVzW2ldLnRleHRDb250ZW50ID0gJ1gnXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHN1Y2Nlc3NmdWxTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XG4gICAgY29uc3Qgcm93ID0gc2hvdFswXVxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRG9tTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXVxuICAgICAgaWYgKFxuICAgICAgICArdGFyZ2V0Tm9kZS5kYXRhc2V0LmNvbHVtbiA9PT0gY29sdW1uICYmXG4gICAgICAgICt0YXJnZXROb2RlLmRhdGFzZXQucm93ID09PSByb3dcbiAgICAgICkge1xuICAgICAgICB0YXJnZXROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXBDZWxsJylcbiAgICAgICAgdGFyZ2V0Tm9kZS5jbGFzc0xpc3QuYWRkKCdzaGlwSGl0JylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5jb25zdCB1cGRhdGVBSUJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBhaUJvYXJkID0gZ2FtZS5nZXRBSUJvYXJkKClcbiAgY29uc3QgbWlzc2VkU2hvdHMgPSBnYW1lLmdldEFJQm9hcmRPYmouZ2V0TWlzc2VkU2hvdHMoKVxuICBjb25zdCBzdWNjZXNzZnVsU2hvdHMgPSBnYW1lLmdldEFJQm9hcmRPYmouZ2V0U3VjY2Vzc2Z1bFNob3RzKClcbiAgY29uc3QgYWxsRG9tTm9kZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSUJvYXJkJykuY2hpbGROb2RlcylcblxuICBtaXNzZWRTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XG4gICAgY29uc3Qgcm93ID0gc2hvdFswXVxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRG9tTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXS5kYXRhc2V0XG4gICAgICBpZiAodGFyZ2V0Tm9kZS5jb2x1bW4gPT09IGNvbHVtbiAmJiB0YXJnZXROb2RlLnJvdyA9PT0gcm93KSB7XG4gICAgICAgIGFsbERvbU5vZGVzW2ldLnRleHRDb250ZW50ID0gJ1gnXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHN1Y2Nlc3NmdWxTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XG4gICAgY29uc3Qgcm93ID0gc2hvdFswXVxuICAgIGNvbnN0IGNvbHVtbiA9IHNob3RbMV1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRG9tTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBhbGxEb21Ob2Rlc1tpXVxuICAgICAgaWYgKFxuICAgICAgICB0YXJnZXROb2RlLmRhdGFzZXQuY29sdW1uID09PSBjb2x1bW4gJiZcbiAgICAgICAgdGFyZ2V0Tm9kZS5kYXRhc2V0LnJvdyA9PT0gcm93XG4gICAgICApIHtcbiAgICAgICAgdGFyZ2V0Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwQ2VsbCcpXG4gICAgICAgIHRhcmdldE5vZGUuY2xhc3NMaXN0LmFkZCgnc2hpcEhpdCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgaGFuZGxlQ2FycmllclNoaXBQbGFjZW1lbnQgPSAoZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cbiAgY29uc3QgY29vcmRpbmF0ZSA9IFtzZWxlY3RlZFJvdywgc2VsZWN0ZWRDb2x1bW5dXG5cbiAgY29uc3QgY2FycmllclBsYWNlZCA9IHBsYWNlQ2Fycmllck9uQm9hcmQoXG4gICAgY29vcmRpbmF0ZSxcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXG4gIClcblxuICBpZiAoY2FycmllclBsYWNlZCkge1xuICAgIHBsYWNlQmF0dGxlU2hpcCgpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBsYWNlQ2FycmllclNoaXBcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVCYXR0bGVTaGlwUGxhY2VtZW50ID0gKGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxuXG4gIGNvbnN0IGJhdHRsZXNoaXBQbGFjZWQgPSBwbGFjZUJhdHRsZXNoaXBPbkJvYXJkKFxuICAgIGNvb3JkaW5hdGUsXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxuICApXG5cbiAgaWYgKGJhdHRsZXNoaXBQbGFjZWQpIHtcbiAgICBwbGFjZUNydWlzZXIoKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwbGFjZUJhdHRsZVNoaXBcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVDcnVpc2VyU2hpcFBsYWNlbWVudCA9IChlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cblxuICBjb25zdCBjcnVpc2VyUGxhY2VkID0gcGxhY2VDcnVpc2VyT25Cb2FyZChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuXG4gIGlmIChjcnVpc2VyUGxhY2VkKSB7XG4gICAgcGxhY2VTdWJtYXJpbmUoKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwbGFjZUNydWlzZXJcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVTdWJtYXJpbmVTaGlwUGxhY2VtZW50ID0gKGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxuXG4gIGNvbnN0IHN1Ym1hcmluZVBsYWNlZCA9IHBsYWNlU3VibWFyaW5lT25Cb2FyZChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuXG4gIGlmIChzdWJtYXJpbmVQbGFjZWQpIHtcbiAgICBwbGFjZURlc3Ryb3llcigpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBsYWNlU3VibWFyaW5lXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlRGVzdHJveWVyU2hpcFBsYWNlbWVudCA9IChlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cblxuICBjb25zdCBkZXN0cm95ZXJQbGFjZWQgPSBwbGFjZURlc3Ryb3llck9uQm9hcmQoXG4gICAgY29vcmRpbmF0ZSxcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXG4gIClcblxuICBpZiAoZGVzdHJveWVyUGxhY2VkKSB7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIoKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwbGFjZURlc3Ryb3llclxuICB9XG59XG5cbmNvbnN0IHBsYWNlQ2Fycmllck9uQm9hcmQgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xuICBjb25zdCBzaGlwVHlwZSA9ICdjYXJyaWVyJ1xuICBjb25zdCBjYXJyaWVyUGxhY2VkID0gZ2FtZS5wbGFjZUNhcnJpZXJTaGlwKFxuICAgIGNvb3JkaW5hdGUsXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxuICApXG4gIGNvbnN0IGJvYXJkRE9NQ2VsbHNBcnIgPSBbXG4gICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYXllckJvYXJkID4gYnV0dG9uJylcbiAgXVxuICBpZiAoIWNhcnJpZXJQbGFjZWQpIHtcbiAgICByZXR1cm4gY2FycmllclBsYWNlZFxuICB9IGVsc2Uge1xuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGdldFZlcnRpY2FsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2FycmllclBsYWNlZFxufVxuXG5jb25zdCBwbGFjZUJhdHRsZXNoaXBPbkJvYXJkID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgY29uc3Qgc2hpcFR5cGUgPSAnYmF0dGxlc2hpcCdcbiAgY29uc3QgYmF0dGxlc2hpcFBsYWNlZCA9IGdhbWUucGxhY2VCYXR0bGVTaGlwKFxuICAgIGNvb3JkaW5hdGUsXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxuICApXG4gIGNvbnN0IGJvYXJkRE9NQ2VsbHNBcnIgPSBbXG4gICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYXllckJvYXJkID4gYnV0dG9uJylcbiAgXVxuICBpZiAoIWJhdHRsZXNoaXBQbGFjZWQpIHtcbiAgICByZXR1cm4gYmF0dGxlc2hpcFBsYWNlZFxuICB9IGVsc2Uge1xuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGdldFZlcnRpY2FsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH1cbiAgfVxuICByZXR1cm4gYmF0dGxlc2hpcFBsYWNlZFxufVxuXG5jb25zdCBwbGFjZUNydWlzZXJPbkJvYXJkID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgY29uc3Qgc2hpcFR5cGUgPSAnY3J1aXNlcidcbiAgY29uc3QgY3J1aXNlclBsYWNlZCA9IGdhbWUucGxhY2VDcnVpc2VyU2hpcChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuICBjb25zdCBib2FyZERPTUNlbGxzQXJyID0gW1xuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXG4gIF1cbiAgaWYgKCFjcnVpc2VyUGxhY2VkKSB7XG4gICAgcmV0dXJuIGNydWlzZXJQbGFjZWRcbiAgfSBlbHNlIHtcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZ2V0SG9yaXpvbnRhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBnZXRWZXJ0aWNhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNydWlzZXJQbGFjZWRcbn1cblxuY29uc3QgcGxhY2VTdWJtYXJpbmVPbkJvYXJkID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgY29uc3Qgc2hpcFR5cGUgPSAnc3VibWFyaW5lJ1xuICBjb25zdCBzdWJtYXJpbmVQbGFjZWQgPSBnYW1lLnBsYWNlU3VibWFyaW5lU2hpcChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuICBjb25zdCBib2FyZERPTUNlbGxzQXJyID0gW1xuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXG4gIF1cbiAgaWYgKCFzdWJtYXJpbmVQbGFjZWQpIHtcbiAgICByZXR1cm4gc3VibWFyaW5lUGxhY2VkXG4gIH0gZWxzZSB7XG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGdldEhvcml6b250YWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZ2V0VmVydGljYWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdWJtYXJpbmVQbGFjZWRcbn1cblxuY29uc3QgcGxhY2VEZXN0cm95ZXJPbkJvYXJkID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgY29uc3Qgc2hpcFR5cGUgPSAnZGVzdHJveWVyJ1xuICBjb25zdCBkZXN0cm95ZXJQbGFjZWQgPSBnYW1lLnBsYWNlRGVzdHJveWVyU2hpcChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuICBjb25zdCBib2FyZERPTUNlbGxzQXJyID0gW1xuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXG4gIF1cbiAgaWYgKCFkZXN0cm95ZXJQbGFjZWQpIHtcbiAgICByZXR1cm4gZGVzdHJveWVyUGxhY2VkXG4gIH0gZWxzZSB7XG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGdldEhvcml6b250YWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZ2V0VmVydGljYWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXG4gICAgfVxuICB9XG4gIHJldHVybiBkZXN0cm95ZXJQbGFjZWRcbn1cblxuY29uc3QgZ2V0SG9yaXpvbnRhbERPTUNvb3JkcyA9IChjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSkgPT4ge1xuICBjb25zdCBzdGFydGluZ0NvbHVtbiA9IE51bWJlcihjb29yZGluYXRlWzFdKVxuICBjb25zdCBzaGlwTGVuZ3RoID1cbiAgICBzaGlwVHlwZSA9PT0gJ2NhcnJpZXInXG4gICAgICA/IDVcbiAgICAgIDogc2hpcFR5cGUgPT09ICdiYXR0bGVzaGlwJ1xuICAgICAgPyA0XG4gICAgICA6IHNoaXBUeXBlID09PSAnY3J1aXNlcidcbiAgICAgID8gM1xuICAgICAgOiBzaGlwVHlwZSA9PT0gJ3N1Ym1hcmluZSdcbiAgICAgID8gM1xuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2Rlc3Ryb3llcidcbiAgICAgID8gMlxuICAgICAgOiBudWxsXG5cbiAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nQ29sdW1uOyBpIDwgc3RhcnRpbmdDb2x1bW4gKyBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSArY29vcmRpbmF0ZVswXVxuICAgIGNvbnN0IGNvbHVtbiA9IGlcbiAgICBjb25zdCBkb21Db29yZGluYXRlID0gW3JvdywgY29sdW1uXVxuICAgIGNvbnN0IHRhcmdldERPTUJ0biA9IGZpbmRTaGlwRE9NQnRuKGJvYXJkRE9NQ2VsbHNBcnIsIGRvbUNvb3JkaW5hdGUpXG4gICAgdGFyZ2V0RE9NQnRuLmNsYXNzTGlzdC5hZGQoJ3NoaXBDZWxsJylcbiAgfVxufVxuXG5jb25zdCBnZXRWZXJ0aWNhbERPTUNvb3JkcyA9IChjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSkgPT4ge1xuICBjb25zdCBzdGFydGluZ1JvdyA9IE51bWJlcihjb29yZGluYXRlWzBdKVxuICBjb25zdCBzaGlwTGVuZ3RoID1cbiAgICBzaGlwVHlwZSA9PT0gJ2NhcnJpZXInXG4gICAgICA/IDVcbiAgICAgIDogc2hpcFR5cGUgPT09ICdiYXR0bGVzaGlwJ1xuICAgICAgPyA0XG4gICAgICA6IHNoaXBUeXBlID09PSAnY3J1aXNlcidcbiAgICAgID8gM1xuICAgICAgOiBzaGlwVHlwZSA9PT0gJ3N1Ym1hcmluZSdcbiAgICAgID8gM1xuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2Rlc3Ryb3llcidcbiAgICAgID8gMlxuICAgICAgOiBudWxsXG5cbiAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nUm93OyBpID4gc3RhcnRpbmdSb3cgLSBzaGlwTGVuZ3RoOyBpLS0pIHtcbiAgICBjb25zdCByb3cgPSBpXG4gICAgY29uc3QgY29sdW1uID0gK2Nvb3JkaW5hdGVbMV1cbiAgICBjb25zdCBkb21Db29yZGluYXRlID0gW3JvdywgY29sdW1uXVxuICAgIGNvbnN0IHRhcmdldERPTUJ0biA9IGZpbmRTaGlwRE9NQnRuKGJvYXJkRE9NQ2VsbHNBcnIsIGRvbUNvb3JkaW5hdGUpXG4gICAgdGFyZ2V0RE9NQnRuLmNsYXNzTGlzdC5hZGQoJ3NoaXBDZWxsJylcbiAgfVxufVxuXG5jb25zdCBmaW5kU2hpcERPTUJ0biA9IChib2FyZERPTUNlbGxzQXJyLCBkb21Db29yZGluYXRlKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRET01DZWxsc0Fyci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRvbUNlbGxSb3cgPSArYm9hcmRET01DZWxsc0FycltpXS5kYXRhc2V0LnJvd1xuICAgIGNvbnN0IGRvbUNlbGxDb2x1bW4gPSArYm9hcmRET01DZWxsc0FycltpXS5kYXRhc2V0LmNvbHVtblxuICAgIGlmIChkb21DZWxsUm93ID09PSBkb21Db29yZGluYXRlWzBdICYmIGRvbUNlbGxDb2x1bW4gPT09IGRvbUNvb3JkaW5hdGVbMV0pIHtcbiAgICAgIHJldHVybiBib2FyZERPTUNlbGxzQXJyW2ldXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dCA9IChlKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxuICBjb25zdCBhaUJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FJQm9hcmQnKVxuXG4gIGlmICghc2VsZWN0ZWRDb2x1bW4gfHwgIXNlbGVjdGVkUm93KSB7XG4gICAgcmV0dXJuIGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dFxuICB9XG5cbiAgY29uc3QgYWlCb2FyZCA9IGdhbWUuZ2V0QUlCb2FyZE9ialxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cbiAgY29uc3QgYWxyZWFkeUF0dGFja2VkID0gYWlCb2FyZC5wcmV2ZW50U2FtZUF0dGFjayhjb29yZGluYXRlKVxuICBpZiAoYWxyZWFkeUF0dGFja2VkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBnYW1lLnBsYXlSb3VuZChjb29yZGluYXRlKVxuICBjb25zdCBodW1hbldpbnMgPSBnYW1lLmNoZWNrRm9yV2luKClcblxuICB1cGRhdGVBSUJvYXJkKClcbiAgaWYgKGh1bWFuV2lucykge1xuICAgIGFpQm9hcmREaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnQpXG4gICAgZ2FtZS5yZXNldEdhbWVTdGF0ZSgpXG4gICAgYW5ub3VuY2VXaW5uZXIoaHVtYW5XaW5zKVxuICAgIHBsYXlBZ2FpbigpXG4gIH1cbiAgaGFuZGxlQUlNb3ZlKGFpQm9hcmREaXYpXG59XG5cbmNvbnN0IGhhbmRsZUFJTW92ZSA9IChhaUJvYXJkRGl2KSA9PiB7XG4gIGdhbWUucGxheVJvdW5kKClcbiAgY29uc3QgYWlXaW5zID0gZ2FtZS5jaGVja0ZvcldpbigpXG5cbiAgdXBkYXRlSHVtYW5Cb2FyZCgpXG4gIGlmIChhaVdpbnMpIHtcbiAgICBhaUJvYXJkRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0KVxuICAgIGdhbWUucmVzZXRHYW1lU3RhdGUoKVxuICAgIGFubm91bmNlV2lubmVyKGFpV2lucylcbiAgICBwbGF5QWdhaW4oKVxuICB9XG59XG5cbmNvbnN0IGFubm91bmNlV2lubmVyID0gKHdpbm5lcikgPT4ge1xuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxuICBjb25zdCB3aW5uZXJOYW1lID0gd2lubmVyLmdldE5hbWUoKVxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gYCR7d2lubmVyTmFtZX0gd2luJ3MhYFxufVxuXG5jb25zdCBwbGF5QWdhaW4gPSAoKSA9PiB7XG4gIGNvbnN0IHRvcEJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXInKVxuICBjb25zdCBwbGF5QWdhaW5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBwbGF5QWdhaW5CdG4udGV4dENvbnRlbnQgPSAnUGxheSBhZ2FpbidcbiAgdG9wQmFyRGl2LmFwcGVuZENoaWxkKHBsYXlBZ2FpbkJ0bilcbiAgcGxheUFnYWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnROZXdHYW1lKVxufVxuXG5jb25zdCBzdGFydE5ld0dhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHRvcEJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXInKVxuICBjb25zdCBwbGF5QWdhaW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyID4gYnV0dG9uJylcbiAgdG9wQmFyRGl2LnJlbW92ZUNoaWxkKHBsYXlBZ2FpbkJ0bilcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKS50ZXh0Q29udGVudCA9ICcnXG4gIGRpc3BsYXlDb250cm9sbGVyKClcbn1cblxuLy8gY29uc3QgaGFuZGxlUGxheWVyU2VsZXRpb25cblxuZXhwb3J0IHsgcmVuZGVyUGxheWVyQm9hcmQsIHJlbmRlckFJQm9hcmQsIGRpc3BsYXlDb250cm9sbGVyLCBwcmVHYW1lU2V0dXAgfVxuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi4vZmFjdG9yaWVzL0dhbWVib2FyZCdcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL2ZhY3Rvcmllcy9QbGF5ZXInXG5pbXBvcnQgeyByZXR1cm5SYW5kb21BSUJvYXJkIH0gZnJvbSAnLi4vaGVscGVycy9yb3RhdGVBSUJvYXJkcydcblxuY29uc3QgZ2FtZUNvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIC8vIENyZWF0ZSB0d28gZ2FtZSBib2FyZHNcbiAgY29uc3QgaHVtYW5Cb2FyZCA9IEdhbWVib2FyZCgpXG4gIGh1bWFuQm9hcmQuY3JlYXRlR2FtZUJvYXJkKClcblxuICBjb25zdCBhaUJvYXJkID0gR2FtZWJvYXJkKClcbiAgYWlCb2FyZC5jcmVhdGVHYW1lQm9hcmQoKVxuXG4gIGNvbnN0IHBsYWNlQ2FycmllclNoaXAgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xuICAgIGxldCBjYXJyaWVyUGxhY2VkID0gdHJ1ZVxuXG4gICAgY29uc3QgY2FycmllckFyciA9IGRldGVybWluZUNhcnJpZXJBcnJDb29yZHMoXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICAgICAgY29vcmRpbmF0ZVxuICAgIClcblxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChjYXJyaWVyQXJyKVxuICAgIGlmICghc2hpcFBsYWNlZCkge1xuICAgICAgY2FycmllclBsYWNlZCA9IGZhbHNlXG4gICAgICByZXR1cm4gY2FycmllclBsYWNlZFxuICAgIH1cblxuICAgIHJldHVybiBjYXJyaWVyUGxhY2VkXG4gIH1cblxuICBjb25zdCBkZXRlcm1pbmVDYXJyaWVyQXJyQ29vcmRzID0gKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sIGNvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBjYXJyaWVyQXJyID0gW11cbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgY2FycmllckFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDU7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFtjb29yZGluYXRlWzBdLCAoK2Nvb3JkaW5hdGVbMV0gKyBpKS50b1N0cmluZygpXVxuICAgICAgICBjYXJyaWVyQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgY2FycmllckFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDU7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFsoK2Nvb3JkaW5hdGVbMF0gLSBpKS50b1N0cmluZygpLCBjb29yZGluYXRlWzFdXVxuICAgICAgICBjYXJyaWVyQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjYXJyaWVyQXJyXG4gIH1cblxuICBjb25zdCBwbGFjZUJhdHRsZVNoaXAgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xuICAgIGxldCBiYXR0bGVzaGlwUGxhY2VkID0gdHJ1ZVxuICAgIGNvbnN0IGJhdHRsZXNoaXBBcnIgPSBkZXRlcm1pbmVCYXR0bGVzaGlwQXJyQ29vcmRzKFxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgICAgIGNvb3JkaW5hdGVcbiAgICApXG5cbiAgICBjb25zdCBzaGlwUGxhY2VkID0gaHVtYW5Cb2FyZC5wbGFjZVNoaXAoYmF0dGxlc2hpcEFycilcbiAgICBpZiAoIXNoaXBQbGFjZWQpIHtcbiAgICAgIGJhdHRsZXNoaXBQbGFjZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIGJhdHRsZXNoaXBQbGFjZWRcbiAgICB9XG5cbiAgICByZXR1cm4gYmF0dGxlc2hpcFBsYWNlZFxuICB9XG5cbiAgY29uc3QgZGV0ZXJtaW5lQmF0dGxlc2hpcEFyckNvb3JkcyA9IChcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICAgIGNvb3JkaW5hdGVcbiAgKSA9PiB7XG4gICAgY29uc3QgYmF0dGxlc2hpcEFyciA9IFtdXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGJhdHRsZXNoaXBBcnIucHVzaChjb29yZGluYXRlKVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cbiAgICAgICAgYmF0dGxlc2hpcEFyci5wdXNoKGNvb3JkKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGJhdHRsZXNoaXBBcnIucHVzaChjb29yZGluYXRlKVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBbKCtjb29yZGluYXRlWzBdIC0gaSkudG9TdHJpbmcoKSwgY29vcmRpbmF0ZVsxXV1cbiAgICAgICAgYmF0dGxlc2hpcEFyci5wdXNoKGNvb3JkKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmF0dGxlc2hpcEFyclxuICB9XG5cbiAgY29uc3QgcGxhY2VDcnVpc2VyU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gICAgbGV0IGNydWlzZXJQbGFjZWQgPSB0cnVlXG4gICAgY29uc3QgY3J1aXNlckFyciA9IGRldGVybWluZUNydWlzZXJBcnJDb29yZHMoXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICAgICAgY29vcmRpbmF0ZVxuICAgIClcblxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChjcnVpc2VyQXJyKVxuICAgIGlmICghc2hpcFBsYWNlZCkge1xuICAgICAgY3J1aXNlclBsYWNlZCA9IGZhbHNlXG4gICAgICByZXR1cm4gY3J1aXNlclBsYWNlZFxuICAgIH1cblxuICAgIHJldHVybiBjcnVpc2VyUGxhY2VkXG4gIH1cblxuICBjb25zdCBkZXRlcm1pbmVDcnVpc2VyQXJyQ29vcmRzID0gKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sIGNvb3JkaW5hdGUpID0+IHtcbiAgICBjb25zdCBjcnVpc2VyQXJyID0gW11cbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgY3J1aXNlckFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFtjb29yZGluYXRlWzBdLCAoK2Nvb3JkaW5hdGVbMV0gKyBpKS50b1N0cmluZygpXVxuICAgICAgICBjcnVpc2VyQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgY3J1aXNlckFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFsoK2Nvb3JkaW5hdGVbMF0gLSBpKS50b1N0cmluZygpLCBjb29yZGluYXRlWzFdXVxuICAgICAgICBjcnVpc2VyQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjcnVpc2VyQXJyXG4gIH1cblxuICBjb25zdCBwbGFjZVN1Ym1hcmluZVNoaXAgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xuICAgIGxldCBzdWJtYXJpbmVQbGFjZWQgPSB0cnVlXG4gICAgY29uc3Qgc3VibWFyaW5lQXJyID0gZGV0ZXJtaW5lU3VibWFyaW5lQXJyQ29vcmRzKFxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgICAgIGNvb3JkaW5hdGVcbiAgICApXG5cbiAgICBjb25zdCBzaGlwUGxhY2VkID0gaHVtYW5Cb2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lQXJyKVxuICAgIGlmICghc2hpcFBsYWNlZCkge1xuICAgICAgc3VibWFyaW5lUGxhY2VkID0gZmFsc2VcbiAgICAgIHJldHVybiBzdWJtYXJpbmVQbGFjZWRcbiAgICB9XG5cbiAgICByZXR1cm4gc3VibWFyaW5lUGxhY2VkXG4gIH1cblxuICBjb25zdCBkZXRlcm1pbmVTdWJtYXJpbmVBcnJDb29yZHMgPSAoXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgICBjb29yZGluYXRlXG4gICkgPT4ge1xuICAgIGNvbnN0IHN1Ym1hcmluZUFyciA9IFtdXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIHN1Ym1hcmluZUFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFtjb29yZGluYXRlWzBdLCAoK2Nvb3JkaW5hdGVbMV0gKyBpKS50b1N0cmluZygpXVxuICAgICAgICBzdWJtYXJpbmVBcnIucHVzaChjb29yZClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBzdWJtYXJpbmVBcnIucHVzaChjb29yZGluYXRlKVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBbKCtjb29yZGluYXRlWzBdIC0gaSkudG9TdHJpbmcoKSwgY29vcmRpbmF0ZVsxXV1cbiAgICAgICAgc3VibWFyaW5lQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdWJtYXJpbmVBcnJcbiAgfVxuXG4gIGNvbnN0IHBsYWNlRGVzdHJveWVyU2hpcCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gICAgbGV0IGRlc3Ryb3llclBsYWNlZCA9IHRydWVcbiAgICBjb25zdCBkZXN0cm95ZXJBcnIgPSBkZXRlcm1pbmVEZXN0cm95ZXJBcnJDb29yZHMoXG4gICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICAgICAgY29vcmRpbmF0ZVxuICAgIClcblxuICAgIGNvbnN0IHNoaXBQbGFjZWQgPSBodW1hbkJvYXJkLnBsYWNlU2hpcChkZXN0cm95ZXJBcnIpXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XG4gICAgICBkZXN0cm95ZXJQbGFjZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxuICAgIH1cblxuICAgIHJldHVybiBkZXN0cm95ZXJQbGFjZWRcbiAgfVxuXG4gIGNvbnN0IGRldGVybWluZURlc3Ryb3llckFyckNvb3JkcyA9IChcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLFxuICAgIGNvb3JkaW5hdGVcbiAgKSA9PiB7XG4gICAgY29uc3QgZGVzdHJveWVyQXJyID0gW11cbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZGVzdHJveWVyQXJyLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gW2Nvb3JkaW5hdGVbMF0sICgrY29vcmRpbmF0ZVsxXSArIGkpLnRvU3RyaW5nKCldXG4gICAgICAgIGRlc3Ryb3llckFyci5wdXNoKGNvb3JkKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGRlc3Ryb3llckFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDI7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFsoK2Nvb3JkaW5hdGVbMF0gLSBpKS50b1N0cmluZygpLCBjb29yZGluYXRlWzFdXVxuICAgICAgICBkZXN0cm95ZXJBcnIucHVzaChjb29yZClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlc3Ryb3llckFyclxuICB9XG5cbiAgY29uc3QgcGxhY2VBSVNoaXBzID0gKCkgPT4ge1xuICAgIHBsYWNlU2hpcHMoYWlCb2FyZCwgcmV0dXJuUmFuZG9tQUlCb2FyZCgpKVxuICB9XG5cbiAgY29uc3QgcGxheWVycyA9IHt9XG5cbiAgY29uc3QgZ2V0UGxheWVycyA9ICgpID0+IHtcbiAgICByZXR1cm4gcGxheWVyc1xuICB9XG5cbiAgY29uc3QgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIoJ0h1bWFuJywgZmFsc2UpXG4gIGNvbnN0IGFpUGxheWVyID0gUGxheWVyKCdBSScsIHRydWUpXG4gIHBsYXllcnMuaHVtYW4gPSBodW1hblBsYXllclxuICBwbGF5ZXJzLkFJID0gYWlQbGF5ZXJcblxuICBsZXQgY3VycmVudFBsYXllciA9IHBsYXllcnMuaHVtYW5cblxuICBjb25zdCBnZXRDdXJyZW50UGxheWVyID0gKCkgPT4ge1xuICAgIHJldHVybiBjdXJyZW50UGxheWVyXG4gIH1cblxuICBjb25zdCBwbGF5Um91bmQgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGlmIChjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5odW1hbi5nZXROYW1lKCkpIHtcbiAgICAgIGFpQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKVxuICAgIH0gZWxzZSBpZiAoY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuQUkuZ2V0TmFtZSgpKSB7XG4gICAgICBjb25zdCBuZXh0TW92ZSA9IGNvbXB1dGVyc05leHRNb3ZlKClcbiAgICAgIGh1bWFuQm9hcmQucmVjZWl2ZUF0dGFjayhuZXh0TW92ZSlcbiAgICAgIGh1bWFuQm9hcmQucmVtb3ZlTGFzdEFJTW92ZShuZXh0TW92ZSlcbiAgICB9XG5cbiAgICBzd2l0Y2hQbGF5ZXIoKVxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpKVxuICB9XG5cbiAgY29uc3QgY29tcHV0ZXJzTmV4dE1vdmUgPSAoKSA9PiB7XG4gICAgY29uc3QgYXZhaWxhYmxlTW92ZXMgPSBodW1hbkJvYXJkLmdldEFJQXZhaWxhYmxlTW92ZXMoKVxuICAgIGNvbnN0IGxhc3RBSU1vdmVTdWNjZXNzZnVsID0gaHVtYW5Cb2FyZC5nZXRMYXN0QUlNb3ZlU3VjY2Vzc2Z1bCgpXG4gICAgaWYgKGxhc3RBSU1vdmVTdWNjZXNzZnVsKSB7XG4gICAgICBjb25zdCBhZGphY2VudFNsb3RzID0gY3VycmVudFBsYXllci5nZXRBZGphY2VudFNsb3RzKFxuICAgICAgICB0cnVlLFxuICAgICAgICBhdmFpbGFibGVNb3ZlcyxcbiAgICAgICAgaHVtYW5Cb2FyZC5nZXRBZGphY2VudFNsb3RzUXVldWUoKSxcbiAgICAgICAgaHVtYW5Cb2FyZC5nZXRTdWNjZXNzZnVsU2hvdHMoKVxuICAgICAgKVxuICAgICAgaHVtYW5Cb2FyZC5hZGRBZGphY2VudFNsb3RzVG9RdWV1ZShhZGphY2VudFNsb3RzKVxuICAgICAgY29uc3QgbmV4dE1vdmUgPSBodW1hbkJvYXJkLmdldEFkamFjZW50UXVldWVTbG90KClcbiAgICAgIHJldHVybiBuZXh0TW92ZVxuICAgIH0gZWxzZSBpZiAoIWxhc3RBSU1vdmVTdWNjZXNzZnVsKSB7XG4gICAgICBjb25zdCByYW5kb21Nb3ZlID0gY3VycmVudFBsYXllci5tYWtlUmFuZG9tTW92ZSh0cnVlLCBhdmFpbGFibGVNb3ZlcylcbiAgICAgIHJldHVybiByYW5kb21Nb3ZlXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3dpdGNoUGxheWVyID0gKCkgPT4ge1xuICAgIGN1cnJlbnRQbGF5ZXIgPVxuICAgICAgY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuaHVtYW4uZ2V0TmFtZSgpXG4gICAgICAgID8gKGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzLkFJKVxuICAgICAgICA6IChjdXJyZW50UGxheWVyID0gcGxheWVycy5odW1hbilcbiAgfVxuXG4gIGNvbnN0IGNoZWNrRm9yV2luID0gKCkgPT4ge1xuICAgIGxldCB3aW5uZXJcbiAgICBpZiAoXG4gICAgICBjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5odW1hbi5nZXROYW1lKCkgJiZcbiAgICAgIGFpQm9hcmQuYWxsU2hpcHNTdW5rKClcbiAgICApIHtcbiAgICAgIHdpbm5lciA9IGN1cnJlbnRQbGF5ZXJcbiAgICAgIHJldHVybiB3aW5uZXJcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuQUkuZ2V0TmFtZSgpICYmXG4gICAgICBodW1hbkJvYXJkLmFsbFNoaXBzU3VuaygpXG4gICAgKSB7XG4gICAgICB3aW5uZXIgPSBjdXJyZW50UGxheWVyXG4gICAgICByZXR1cm4gd2lubmVyXG4gICAgfVxuICAgIHJldHVybiB3aW5uZXJcbiAgfVxuXG4gIGNvbnN0IHJlc2V0R2FtZVN0YXRlID0gKHdpbm5lcikgPT4ge1xuICAgIGh1bWFuQm9hcmQuY2xlYXJHYW1lQm9hcmQoKVxuICAgIGFpQm9hcmQuY2xlYXJHYW1lQm9hcmQoKVxuICAgIGh1bWFuQm9hcmQuY3JlYXRlR2FtZUJvYXJkKClcbiAgICBhaUJvYXJkLmNyZWF0ZUdhbWVCb2FyZCgpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldEh1bWFuQm9hcmQ6IGh1bWFuQm9hcmQuZ2V0Qm9hcmQsXG4gICAgZ2V0QUlCb2FyZDogYWlCb2FyZC5nZXRCb2FyZCxcbiAgICBnZXRBSUJvYXJkT2JqOiBhaUJvYXJkLFxuICAgIGdldEh1bWFuQm9hcmRPYmo6IGh1bWFuQm9hcmQsXG4gICAgc3dpdGNoUGxheWVyLFxuICAgIHBsYXlSb3VuZCxcbiAgICBnZXRDdXJyZW50UGxheWVyLFxuICAgIHJlc2V0R2FtZVN0YXRlLFxuICAgIGNoZWNrRm9yV2luLFxuICAgIGdldFBsYXllcnMsXG4gICAgcGxhY2VBSVNoaXBzLFxuICAgIHBsYWNlQ2FycmllclNoaXAsXG4gICAgcGxhY2VCYXR0bGVTaGlwLFxuICAgIHBsYWNlQ3J1aXNlclNoaXAsXG4gICAgcGxhY2VTdWJtYXJpbmVTaGlwLFxuICAgIHBsYWNlRGVzdHJveWVyU2hpcFxuICB9XG59XG5cbmV4cG9ydCB7IGdhbWVDb250cm9sbGVyIH1cblxuY29uc3QgcGxhY2VTaGlwcyA9IChib2FyZCwgY29vcmRpbmF0ZXNPYmopID0+IHtcbiAgY29uc3Qgc2hpcENvb3JkaW5hdGVzQXJyID0gT2JqZWN0LnZhbHVlcyhjb29yZGluYXRlc09iailcbiAgc2hpcENvb3JkaW5hdGVzQXJyLmZvckVhY2goKHNoaXBDb29yZGluYXRlcykgPT4ge1xuICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwQ29vcmRpbmF0ZXMpXG4gIH0pXG59XG5cbi8qIGNvbnN0IHBsYWNlRWFjaEh1bWFuU2hpcCA9IChjb29yZGluYXRlKSA9PiB7XG4gIGh1bWFuQm9hcmQucGxhY2VTaGlwKGNvb3JkaW5hdGUpXG59ICovXG4iLCJpbXBvcnQgeyBhcnJheXNBcmVFcXVhbCB9IGZyb20gJy4uL2hlbHBlcnMvYXJyYXlzQXJlRXF1YWwnXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9TaGlwJ1xuXG5leHBvcnQgY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG4gIGxldCBib2FyZCA9IFtdXG4gIGNvbnN0IHNoaXBPYmplY3RzID0gW11cbiAgY29uc3QgbWlzc2VkU2hvdHMgPSBbXVxuICBjb25zdCBhaUF2YWlsYWJsZU1vdmVzID0gW11cbiAgY29uc3Qgc3VjY2Vzc2Z1bFNob3RzID0gW11cbiAgY29uc3QgYWRqYWNlbnRTbG90c1F1ZXVlID0gW11cbiAgY29uc3Qgcm93cyA9IDlcbiAgY29uc3QgY29sdW1ucyA9IDlcbiAgbGV0IGxhc3RBSU1vdmVTdWNjZXNzZnVsID0gZmFsc2VcblxuICBjb25zdCBjcmVhdGVHYW1lQm9hcmQgPSAoKSA9PiB7XG4gICAgYm9hcmQgPSBbXVxuICAgIGZvciAobGV0IGkgPSByb3dzOyBpID49IDA7IGktLSkge1xuICAgICAgYm9hcmRbaV0gPSBbXVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gY29sdW1uczsgaisrKSB7XG4gICAgICAgIGJvYXJkW2ldLnB1c2godW5kZWZpbmVkKVxuICAgICAgICBjb25zdCBjb29yZGluYXRlID0gW2ksIGpdXG4gICAgICAgIGFpQXZhaWxhYmxlTW92ZXMucHVzaChjb29yZGluYXRlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGNoZWNrcyBpZiBjb29yZGluYXRlcyBmb3Igc2hpcCBpcyBvbiB0aGVcbiAgLy8gZ2FtZSBib2FyZFxuICBjb25zdCB2YWxpZGF0ZUNvb3JkaW5hdGVzID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgbGV0IHZhbGlkQ29vcmRpbmF0ZXMgPSB0cnVlXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZVswXVxuICAgICAgY29uc3QgY29sdW1uID0gY29vcmRpbmF0ZVsxXVxuICAgICAgaWYgKHJvdyA+IDkgfHwgcm93IDwgMCkge1xuICAgICAgICB2YWxpZENvb3JkaW5hdGVzID0gZmFsc2VcbiAgICAgICAgcmV0dXJuIHZhbGlkQ29vcmRpbmF0ZXNcbiAgICAgIH0gZWxzZSBpZiAoY29sdW1uID4gOSB8fCBjb2x1bW4gPCAwKSB7XG4gICAgICAgIHZhbGlkQ29vcmRpbmF0ZXMgPSBmYWxzZVxuICAgICAgICByZXR1cm4gdmFsaWRDb29yZGluYXRlc1xuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gdmFsaWRDb29yZGluYXRlc1xuICB9XG5cbiAgLy8gY2hlY2tzIGlmIHNoaXAgY29vcmRpbmF0ZXMgb3ZlcmxhcCB3aXRoIGFscmVhZHlcbiAgLy8gcGxhY2VkIHNoaXAgY29vcmRpbmF0ZXMgZm9yIHRoZSBzYW1lIHNoaXBcbiAgY29uc3QgY2hlY2tTZWxmT3ZlcmxhcCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGxldCBjb29yZGluYXRlc092ZXJsYXAgPSBmYWxzZVxuICAgIGxldCBwcmV2Q29vcmRpbmF0ZVxuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgIGlmIChhcnJheXNBcmVFcXVhbChwcmV2Q29vcmRpbmF0ZSwgY29vcmRpbmF0ZSkpIHtcbiAgICAgICAgICBjb29yZGluYXRlc092ZXJsYXAgPSB0cnVlXG4gICAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzT3ZlcmxhcFxuICAgICAgICB9XG4gICAgICAgIHByZXZDb29yZGluYXRlID0gY29vcmRpbmF0ZVxuICAgICAgfVxuICAgICAgcHJldkNvb3JkaW5hdGUgPSBjb29yZGluYXRlXG4gICAgfSlcblxuICAgIHJldHVybiBjb29yZGluYXRlc092ZXJsYXBcbiAgfVxuXG4gIC8vIFNob3VsZCBwcmV2ZW50IGEgc2hpcCBmcm9tIGJlaW5nXG4gIC8vIHBsYWNlZCBvbiB0b3Agb2YgYW5vdGhlciBzaGlwXG4gIGNvbnN0IGNoZWNrT3ZlcmxhcFdpdGhPdGhlclNoaXBzID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgbGV0IHNoaXBzT3ZlcmxhcCA9IGZhbHNlXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZVswXVxuICAgICAgY29uc3QgY29sdW1uID0gY29vcmRpbmF0ZVsxXVxuICAgICAgY29uc3QgYm9hcmRDZWxsID0gYm9hcmRbcm93XVtjb2x1bW5dXG4gICAgICBpZiAodHlwZW9mIGJvYXJkQ2VsbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgc2hpcHNPdmVybGFwID0gdHJ1ZVxuICAgICAgICByZXR1cm4gc2hpcHNPdmVybGFwXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBzaGlwc092ZXJsYXBcbiAgfVxuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGxldCBzaGlwUGxhY2VkID0gdHJ1ZVxuXG4gICAgY29uc3QgbGVnYWxDb29yZGluYXRlcyA9IHZhbGlkYXRlQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpXG4gICAgaWYgKCFsZWdhbENvb3JkaW5hdGVzKSB7XG4gICAgICBzaGlwUGxhY2VkID0gZmFsc2VcbiAgICAgIHJldHVybiBzaGlwUGxhY2VkXG4gICAgfVxuXG4gICAgY29uc3Qgb3ZlcmxhcHBpbmdDb29yZGluYXRlcyA9IGNoZWNrU2VsZk92ZXJsYXAoY29vcmRpbmF0ZXMpXG4gICAgaWYgKG92ZXJsYXBwaW5nQ29vcmRpbmF0ZXMpIHtcbiAgICAgIHNoaXBQbGFjZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIHNoaXBQbGFjZWRcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwT3ZlcmxhcHBpbmcgPSBjaGVja092ZXJsYXBXaXRoT3RoZXJTaGlwcyhjb29yZGluYXRlcylcbiAgICBpZiAoc2hpcE92ZXJsYXBwaW5nKSB7XG4gICAgICBzaGlwUGxhY2VkID0gZmFsc2VcbiAgICAgIHJldHVybiBzaGlwUGxhY2VkXG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IGNvb3JkaW5hdGVzLmxlbmd0aFxuICAgIGNvbnN0IHNoaXBPYmplY3QgPSBTaGlwKHNoaXBMZW5ndGgsIDAsIGZhbHNlKVxuICAgIHNoaXBPYmplY3RzLnB1c2goc2hpcE9iamVjdClcblxuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVbMF1cbiAgICAgIGNvbnN0IGNvbHVtbiA9IGNvb3JkaW5hdGVbMV1cbiAgICAgIGJvYXJkW3Jvd11bY29sdW1uXSA9IHNoaXBPYmplY3RcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNoaXBQbGFjZWRcbiAgfVxuXG4gIC8vIHByZXZlbnRzIGh1bWFuIHBsYXllciBmcm9tIGF0dGFja2luZyBwcmV2aW91c2x5XG4gIC8vIGF0dGFja2VkIGNvb3JkaW5hdGVcbiAgY29uc3QgcHJldmVudFNhbWVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGxldCBhbHJlYWR5QXR0YWNrZWQgPSBmYWxzZVxuICAgIHN1Y2Nlc3NmdWxTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XG4gICAgICBpZiAoYXJyYXlzQXJlRXF1YWwoY29vcmRpbmF0ZSwgc2hvdCkpIHtcbiAgICAgICAgYWxyZWFkeUF0dGFja2VkID0gdHJ1ZVxuICAgICAgICByZXR1cm4gcHJldmVudFNhbWVBdHRhY2tcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgbWlzc2VkU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xuICAgICAgaWYgKGFycmF5c0FyZUVxdWFsKGNvb3JkaW5hdGUsIHNob3QpKSB7XG4gICAgICAgIGFscmVhZHlBdHRhY2tlZCA9IHRydWVcbiAgICAgICAgcmV0dXJuIHByZXZlbnRTYW1lQXR0YWNrXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gYWxyZWFkeUF0dGFja2VkXG4gIH1cblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZXNbMF1cbiAgICBjb25zdCBjb2x1bW4gPSBjb29yZGluYXRlc1sxXVxuICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGJvYXJkW3Jvd11bY29sdW1uXVxuICAgIGNvbnN0IHNoaXBPYmogPSBib2FyZENlbGxcblxuICAgIC8vIE5lZWQgdG8gY2hlY2sgaWYgbmV3IGNvb3JkaW5hdGUgaXMgYWxyZWFkeVxuICAgIC8vIGluc2lkZSBzdWNjZXNzZnVsU2hvdHMgb3IgbWlzc2VkU2hvdHNcbiAgICBjb25zdCBhbHJlYWR5QXR0YWNrZWQgPSBwcmV2ZW50U2FtZUF0dGFjayhjb29yZGluYXRlcylcbiAgICBpZiAoYWxyZWFkeUF0dGFja2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGJvYXJkQ2VsbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHNoaXBPYmouaGl0KClcbiAgICAgIGxhc3RBSU1vdmVTdWNjZXNzZnVsID0gdHJ1ZVxuICAgICAgc3VjY2Vzc2Z1bFNob3RzLnB1c2goY29vcmRpbmF0ZXMpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYm9hcmRDZWxsICE9PSAnb2JqZWN0Jykge1xuICAgICAgbGFzdEFJTW92ZVN1Y2Nlc3NmdWwgPSBmYWxzZVxuICAgICAgbWlzc2VkU2hvdHMucHVzaChjb29yZGluYXRlcylcbiAgICAgIHJlbW92ZUFkamFjZW50U2xvdChjb29yZGluYXRlcylcbiAgICB9XG4gIH1cblxuICAvLyBJZiB0aGUgY29tcHV0ZXIgcmFuZG9tbHkgZ3Vlc3NlcyBhIHNwb3QgdGhhdCBpcyBpbiB0aGUgYWRqYWNlbnRcbiAgLy8gc2xvdCBxdWV1ZSwgd2UgbmVlZCB0byByZW1vdmUgaXQgKGZyb20gdGhlIGFkamFjZW5jeSBxdWV1ZSkgc28gdGhlIGNvbXB1dGVyIGRvZXMgbm90IGF0dGVtcHQgdG9cbiAgLy8gZ3Vlc3MgYSBzcG90IHRoYXQgaGFzIGFscmVhZHkgYmVlbiBndWVzZWQuXG4gIGNvbnN0IHJlbW92ZUFkamFjZW50U2xvdCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRqYWNlbnRTbG90c1F1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXJyYXlzQXJlRXF1YWwoYWRqYWNlbnRTbG90c1F1ZXVlW2ldLCBjb29yZGluYXRlcykpIHtcbiAgICAgICAgYWRqYWNlbnRTbG90c1F1ZXVlLnNwbGljZShpLCAxKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgbGV0IGV2ZXJ5U2hpcFNhbmsgPSB0cnVlXG4gICAgc2hpcE9iamVjdHMuZm9yRWFjaCgoc2hpcE9iaikgPT4ge1xuICAgICAgaWYgKCFzaGlwT2JqLmhhc0JlZW5TdW5rKCkpIHtcbiAgICAgICAgZXZlcnlTaGlwU2FuayA9IGZhbHNlXG4gICAgICAgIHJldHVybiBldmVyeVNoaXBTYW5rXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZXZlcnlTaGlwU2Fua1xuICB9XG5cbiAgY29uc3QgcmVtb3ZlTGFzdEFJTW92ZSA9IChyYW5kb21Nb3ZlKSA9PiB7XG4gICAgYWlBdmFpbGFibGVNb3Zlcy5mb3JFYWNoKChtb3ZlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGFycmF5c0FyZUVxdWFsKG1vdmUsIHJhbmRvbU1vdmUpKSB7XG4gICAgICAgIGFpQXZhaWxhYmxlTW92ZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBhZGRBZGphY2VudFNsb3RzVG9RdWV1ZSA9IChhZGphY2VudFNsb3RzKSA9PiB7XG4gICAgYWRqYWNlbnRTbG90cy5mb3JFYWNoKChzbG90KSA9PiB7XG4gICAgICBhZGphY2VudFNsb3RzUXVldWUucHVzaChzbG90KVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBjbGVhckdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICBzaGlwT2JqZWN0cy5sZW5ndGggPSAwXG4gICAgbWlzc2VkU2hvdHMubGVuZ3RoID0gMFxuICAgIGFpQXZhaWxhYmxlTW92ZXMubGVuZ3RoID0gMFxuICAgIHN1Y2Nlc3NmdWxTaG90cy5sZW5ndGggPSAwXG4gICAgYWRqYWNlbnRTbG90c1F1ZXVlLmxlbmd0aCA9IDBcbiAgfVxuXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiBib2FyZFxuICB9XG5cbiAgY29uc3QgZ2V0TWlzc2VkU2hvdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG1pc3NlZFNob3RzXG4gIH1cblxuICBjb25zdCBnZXRTdWNjZXNzZnVsU2hvdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHN1Y2Nlc3NmdWxTaG90c1xuICB9XG5cbiAgY29uc3QgZ2V0U2hpcE9iamVjdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHNoaXBPYmplY3RzXG4gIH1cblxuICBjb25zdCBnZXRBSUF2YWlsYWJsZU1vdmVzID0gKCkgPT4ge1xuICAgIHJldHVybiBhaUF2YWlsYWJsZU1vdmVzXG4gIH1cblxuICBjb25zdCBnZXRMYXN0QUlNb3ZlU3VjY2Vzc2Z1bCA9ICgpID0+IHtcbiAgICByZXR1cm4gbGFzdEFJTW92ZVN1Y2Nlc3NmdWxcbiAgfVxuXG4gIGNvbnN0IGdldEFkamFjZW50U2xvdHNRdWV1ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gYWRqYWNlbnRTbG90c1F1ZXVlXG4gIH1cblxuICBjb25zdCBnZXRBZGphY2VudFF1ZXVlU2xvdCA9ICgpID0+IHtcbiAgICByZXR1cm4gYWRqYWNlbnRTbG90c1F1ZXVlLnBvcCgpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUdhbWVCb2FyZCxcbiAgICBnZXRCb2FyZCxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBjbGVhckdhbWVCb2FyZCxcbiAgICBnZXRNaXNzZWRTaG90cyxcbiAgICBnZXRTdWNjZXNzZnVsU2hvdHMsXG4gICAgYWxsU2hpcHNTdW5rLFxuICAgIGdldEFJQXZhaWxhYmxlTW92ZXMsXG4gICAgdmFsaWRhdGVDb29yZGluYXRlcyxcbiAgICBwcmV2ZW50U2FtZUF0dGFjayxcbiAgICBjaGVja1NlbGZPdmVybGFwLFxuICAgIGdldFNoaXBPYmplY3RzLFxuICAgIHJlbW92ZUxhc3RBSU1vdmUsXG4gICAgY2hlY2tPdmVybGFwV2l0aE90aGVyU2hpcHMsXG4gICAgZ2V0TGFzdEFJTW92ZVN1Y2Nlc3NmdWwsXG4gICAgZ2V0QWRqYWNlbnRTbG90c1F1ZXVlLFxuICAgIGFkZEFkamFjZW50U2xvdHNUb1F1ZXVlLFxuICAgIGdldEFkamFjZW50UXVldWVTbG90LFxuICAgIHJlbW92ZUFkamFjZW50U2xvdFxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgUGxheWVyID0gKG5hbWUsIGlzQUkpID0+IHtcbiAgLy8gVXNlZCB0byBtYWtlIEFJIHNlbGVjdCByYW5kb20sIGxlZ2FsIGNvb3JkaW5hdGVcbiAgLy8gb24gcGxheWVycyBnYW1lIGJvYXJkXG4gIGNvbnN0IG1ha2VSYW5kb21Nb3ZlID0gKGlzQUksIGF2YWlsYWJsZU1vdmVzKSA9PiB7XG4gICAgaWYgKCFpc0FJIHx8IGF2YWlsYWJsZU1vdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGNvbnN0IGF2YWlsYWJsZU1vdmVzTGVuZ3RoID0gYXZhaWxhYmxlTW92ZXMubGVuZ3RoXG4gICAgY29uc3QgcmFuZG9tQXJySW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVNb3Zlc0xlbmd0aClcbiAgICBjb25zdCByYW5kb21Db29yZGluYXRlID0gYXZhaWxhYmxlTW92ZXNbcmFuZG9tQXJySW5kZXhdXG5cbiAgICByZXR1cm4gcmFuZG9tQ29vcmRpbmF0ZVxuICB9XG5cbiAgY29uc3QgZ2V0QWRqYWNlbnRTbG90cyA9IChcbiAgICBpc0FJLFxuICAgIGF2YWlsYWJsZU1vdmVzLFxuICAgIGFkamFjZW50UXVldWUsXG4gICAgc3VjY2Vzc2Z1bFNob3RzXG4gICkgPT4ge1xuICAgIGlmICghaXNBSSB8fCBhdmFpbGFibGVNb3Zlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBjb25zdCBsYXN0U3VjY2Vzc2Z1bE1vdmUgPSBzdWNjZXNzZnVsU2hvdHMuYXQoLTEpXG4gICAgY29uc3QgYWRqYWNlbnRTbG90cyA9IHJldHJpZXZlQWRqYWNlbnRTbG90cyhsYXN0U3VjY2Vzc2Z1bE1vdmUpXG4gICAgY29uc3QgbGVnYWxBZGphY2VudFNsb3RzID0gcmVtb3ZlSWxsZWdhbEFkamFjZW50U2xvdHMoYWRqYWNlbnRTbG90cylcbiAgICByZXR1cm4gbGVnYWxBZGphY2VudFNsb3RzXG4gIH1cblxuICBjb25zdCBnZXRDZWxsQWJvdmUgPSAobGFzdFN1Y2Nlc3NmdWxNb3ZlKSA9PiB7XG4gICAgLy8gdGhlIHJvdyBuZWVkcyB0byBjaGFuZ2UgYnkgb25lXG4gICAgY29uc3QgbmV3QXJyID0gW11cbiAgICBjb25zdCBuZXdSb3cgPSBsYXN0U3VjY2Vzc2Z1bE1vdmVbMF0gLSAxXG4gICAgaWYgKG5ld1JvdyA+IDkgfHwgbmV3Um93IDwgMCkge1xuICAgICAgcmV0dXJuICdpbGxlZ2FsJ1xuICAgIH1cbiAgICBuZXdBcnJbMF0gPSBuZXdSb3dcbiAgICBuZXdBcnJbMV0gPSBsYXN0U3VjY2Vzc2Z1bE1vdmVbMV1cbiAgICByZXR1cm4gbmV3QXJyXG4gIH1cblxuICBjb25zdCBnZXRDZWxsQmVsb3cgPSAobGFzdFN1Y2Nlc3NmdWxNb3ZlKSA9PiB7XG4gICAgLy8gdGhlIHJvdyBuZWVkcyB0byBjaGFuZ2UgYnkgb25lXG4gICAgY29uc3QgYXJyID0gbGFzdFN1Y2Nlc3NmdWxNb3ZlXG4gICAgY29uc3QgbmV3QXJyID0gW11cbiAgICBjb25zdCBuZXdSb3cgPSBhcnJbMF0gKyAxXG4gICAgaWYgKG5ld1JvdyA+IDkgfHwgbmV3Um93IDwgMCkge1xuICAgICAgcmV0dXJuICdpbGxlZ2FsJ1xuICAgIH1cbiAgICBuZXdBcnJbMF0gPSBuZXdSb3dcbiAgICBuZXdBcnJbMV0gPSBsYXN0U3VjY2Vzc2Z1bE1vdmVbMV1cbiAgICByZXR1cm4gbmV3QXJyXG4gIH1cblxuICBjb25zdCBnZXRDZWxsVG9SaWdodCA9IChsYXN0U3VjY2Vzc2Z1bE1vdmUpID0+IHtcbiAgICAvLyB0aGUgcm93IG5lZWRzIHRvIGNoYW5nZSBieSBvbmVcbiAgICBjb25zdCBuZXdBcnIgPSBbXVxuICAgIGNvbnN0IG5ld0NvbHVtbiA9IGxhc3RTdWNjZXNzZnVsTW92ZVsxXSArIDFcbiAgICBpZiAobmV3Q29sdW1uID4gOSB8fCBuZXdDb2x1bW4gPCAwKSB7XG4gICAgICByZXR1cm4gJ2lsbGVnYWwnXG4gICAgfVxuICAgIG5ld0FyclswXSA9IGxhc3RTdWNjZXNzZnVsTW92ZVswXVxuICAgIG5ld0FyclsxXSA9IG5ld0NvbHVtblxuICAgIHJldHVybiBuZXdBcnJcbiAgfVxuXG4gIGNvbnN0IGdldENlbGxUb0xlZnQgPSAobGFzdFN1Y2Nlc3NmdWxNb3ZlKSA9PiB7XG4gICAgLy8gdGhlIHJvdyBuZWVkcyB0byBjaGFuZ2UgYnkgb25lXG4gICAgY29uc3QgYXJyID0gbGFzdFN1Y2Nlc3NmdWxNb3ZlXG4gICAgY29uc3QgbmV3QXJyID0gW11cbiAgICBjb25zdCBuZXdDb2x1bW4gPSBhcnJbMV0gLSAxXG4gICAgaWYgKG5ld0NvbHVtbiA+IDkgfHwgbmV3Q29sdW1uIDwgMCkge1xuICAgICAgcmV0dXJuICdpbGxlZ2FsJ1xuICAgIH1cbiAgICBuZXdBcnJbMF0gPSBsYXN0U3VjY2Vzc2Z1bE1vdmVbMF1cbiAgICBuZXdBcnJbMV0gPSBuZXdDb2x1bW5cbiAgICByZXR1cm4gbmV3QXJyXG4gIH1cblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgIHJldHVybiBuYW1lXG4gIH1cblxuICBjb25zdCByZXRyaWV2ZUFkamFjZW50U2xvdHMgPSAobGFzdFN1Y2Nlc3NmdWxNb3ZlKSA9PiB7XG4gICAgY29uc3QgbGFzdFN1Y2Nlc3NmdWxNb3ZlVmFsdWUgPSBsYXN0U3VjY2Vzc2Z1bE1vdmVcbiAgICBjb25zdCBhZGphY2VudFNsb3RzID0gW11cbiAgICBhZGphY2VudFNsb3RzLnB1c2goZ2V0Q2VsbEFib3ZlKGxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlKSlcbiAgICBhZGphY2VudFNsb3RzLnB1c2goZ2V0Q2VsbEJlbG93KGxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlKSlcbiAgICBhZGphY2VudFNsb3RzLnB1c2goZ2V0Q2VsbFRvUmlnaHQobGFzdFN1Y2Nlc3NmdWxNb3ZlVmFsdWUpKVxuICAgIGFkamFjZW50U2xvdHMucHVzaChnZXRDZWxsVG9MZWZ0KGxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlKSlcbiAgICByZXR1cm4gYWRqYWNlbnRTbG90c1xuICB9XG5cbiAgY29uc3QgcmVtb3ZlSWxsZWdhbEFkamFjZW50U2xvdHMgPSAoYWRqYWNlbnRTbG90cykgPT4ge1xuICAgIGNvbnN0IGFkamFjZW50U2xvdHNBcnIgPSBhZGphY2VudFNsb3RzXG4gICAgYWRqYWNlbnRTbG90c0Fyci5mb3JFYWNoKChzbG90LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHNsb3QgPT09ICdpbGxlZ2FsJykge1xuICAgICAgICBhZGphY2VudFNsb3RzQXJyLnNwbGljZShpbmRleCwgMSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBhZGphY2VudFNsb3RzQXJyXG4gIH1cblxuICAvLyBpZiB0aGUgY29tcHV0ZXIgaGFzIGFscmVhZHkgKHJhbmRvbWx5KSBndWVzc2VkIGEgc3BvdCBvbiB0aGUgYm9hcmQsIHByZXZlbnRcbiAgLy8gYWRkaW5nIHRoZSBzcG90IHRvIHRoZSBhZGphY2VuY3kgbGlzdFxuICBjb25zdCBwcmV2ZW50UHJldmlvdXNTaG90VG9RdWV1ZSA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgLy8gaW4gcHJvZ3Jlc3NcbiAgfVxuXG4gIHJldHVybiB7IG1ha2VSYW5kb21Nb3ZlLCBnZXROYW1lLCBnZXRBZGphY2VudFNsb3RzLCBnZXRDZWxsQWJvdmUgfVxufVxuIiwiZXhwb3J0IGNvbnN0IFNoaXAgPSAobGVuZ3RoLCBudW1PZkhpdHMsIGlzU3VuaykgPT4ge1xuICAvLyBJbmNyZWFzZSBudW1iZXIgb2YgaGl0cyBpbiBzaGlwIGJ5IDFcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGlmIChudW1PZkhpdHMgPT09IGxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbnVtT2ZIaXRzKytcbiAgICByZXR1cm4gbnVtT2ZIaXRzXG4gIH1cblxuICAvLyBEZXRlcm1pbmUgaWYgdGhlIHNoaXAgb2JqZWN0IGhhcyBiZWVuIHN1bmtcbiAgY29uc3QgaGFzQmVlblN1bmsgPSAoKSA9PiB7XG4gICAgbGV0IGlzU3VuayA9IGZhbHNlXG5cbiAgICBpZiAobGVuZ3RoID09PSBudW1PZkhpdHMpIHtcbiAgICAgIGlzU3VuayA9IHRydWVcbiAgICAgIHJldHVybiBpc1N1bmtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNTdW5rXG4gIH1cblxuICBjb25zdCBnZXROdW1PZkhpdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG51bU9mSGl0c1xuICB9XG5cbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4ge1xuICAgIHJldHVybiBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB7IGhpdCwgaGFzQmVlblN1bmssIGdldE51bU9mSGl0cywgZ2V0TGVuZ3RoIH1cbn1cbiIsImV4cG9ydCBjb25zdCBhcnJheXNBcmVFcXVhbCA9IChhcnIxLCBhcnIyKSA9PiB7XG4gIGlmIChhcnIxID09PSBudWxsIHx8IGFycjIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBpZiAoYXJyMS5sZW5ndGggIT09IGFycjIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIxLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycjFbaV0gIT09IGFycjJbaV0pIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuIiwiZXhwb3J0IGNvbnN0IHJldHVyblJhbmRvbUFJQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGFpQm9hcmRzID0gW2FpU2hpcENvb3Jkc09uZSwgYWlTaGlwQ29vcmRzVHdvLCBhaVNoaXBDb29yZHNUaHJlZV1cbiAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKVxuICBjb25zdCBjaG9zZW5BSUJvYXJkID0gT2JqZWN0LnZhbHVlcyhhaUJvYXJkc1tyYW5kb21JbmRleF0pXG4gIHJldHVybiBjaG9zZW5BSUJvYXJkXG59XG5cbmNvbnN0IGFpU2hpcENvb3Jkc09uZSA9IHtcbiAgY2FycmllcjogW1xuICAgIFs5LCAwXSxcbiAgICBbOSwgMV0sXG4gICAgWzksIDJdLFxuICAgIFs5LCAzXSxcbiAgICBbOSwgNF1cbiAgXSxcbiAgYmF0dGxlc2hpcDogW1xuICAgIFs1LCA1XSxcbiAgICBbNiwgNV0sXG4gICAgWzcsIDVdLFxuICAgIFs4LCA1XVxuICBdLFxuICBjcnVpc2VyOiBbXG4gICAgWzAsIDZdLFxuICAgIFsxLCA2XSxcbiAgICBbMiwgNl1cbiAgXSxcbiAgc3VibWFyaW5lOiBbXG4gICAgWzMsIDhdLFxuICAgIFs0LCA4XSxcbiAgICBbNSwgOF1cbiAgXSxcbiAgZGVzdHJveWVyOiBbXG4gICAgWzAsIDldLFxuICAgIFsxLCA5XVxuICBdXG59XG5cbmNvbnN0IGFpU2hpcENvb3Jkc1R3byA9IHtcbiAgY2FycmllcjogW1xuICAgIFswLCAwXSxcbiAgICBbMCwgMV0sXG4gICAgWzAsIDJdLFxuICAgIFswLCAzXSxcbiAgICBbMCwgNF1cbiAgXSxcbiAgYmF0dGxlc2hpcDogW1xuICAgIFs5LCA1XSxcbiAgICBbOSwgNl0sXG4gICAgWzksIDddLFxuICAgIFs5LCA4XVxuICBdLFxuICBjcnVpc2VyOiBbXG4gICAgWzIsIDJdLFxuICAgIFszLCAyXSxcbiAgICBbNCwgMl1cbiAgXSxcbiAgc3VibWFyaW5lOiBbXG4gICAgWzYsIDZdLFxuICAgIFs2LCA3XSxcbiAgICBbNiwgOF1cbiAgXSxcbiAgZGVzdHJveWVyOiBbXG4gICAgWzgsIDBdLFxuICAgIFs4LCAxXVxuICBdXG59XG5cbmNvbnN0IGFpU2hpcENvb3Jkc1RocmVlID0ge1xuICBjYXJyaWVyOiBbXG4gICAgWzUsIDBdLFxuICAgIFs1LCAxXSxcbiAgICBbNSwgMl0sXG4gICAgWzUsIDNdLFxuICAgIFs1LCA0XVxuICBdLFxuICBiYXR0bGVzaGlwOiBbXG4gICAgWzAsIDldLFxuICAgIFsxLCA5XSxcbiAgICBbMiwgOV0sXG4gICAgWzMsIDldXG4gIF0sXG4gIGNydWlzZXI6IFtcbiAgICBbNywgN10sXG4gICAgWzgsIDddLFxuICAgIFs5LCA3XVxuICBdLFxuICBzdWJtYXJpbmU6IFtcbiAgICBbMSwgMV0sXG4gICAgWzIsIDFdLFxuICAgIFszLCAxXVxuICBdLFxuICBkZXN0cm95ZXI6IFtcbiAgICBbNCwgNF0sXG4gICAgWzQsIDVdXG4gIF1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAvKiAxICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKiBBcHBseSBib3JkZXIgYm94IHRvIGVudGlyZSBkb2N1bWVudCAqL1xcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICAgKi9cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICAgKi9cXG5cXG5ociB7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAvKiAxICovXFxuICAgIGhlaWdodDogMDtcXG4gICAgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5wcmUge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5hIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gICAgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gICAqIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgICBmb250LXNpemU6IDc1JTtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICAgIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcblxcbmltZyB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmlucHV0IHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAvKiAxICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgLyogMiAqL1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBHaXZlIGlucHV0IGFuZCB0ZXh0IGFyZWEgY29uc2lzdGVudCBsb29rICovXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDRweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAtMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250OiBib2xkIDAuNmVtIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgLyogYmFja2dyb3VuZDogIzAwMDtcXG4gICAgY29sb3I6ICNmZmY7ICovXFxufVxcblxcbi8qIEdldHMgcmlkIG9mIGRlZmF1bHQgc2VhcmNoIHRvIHJlbW92ZSByZXN0cmljdGlvbnMgKi9cXG5pbnB1dFt0eXBlPSdzZWFyY2gnXSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qIEZpeCBmb3IgaW5jb25zaXN0ZW50IGRpc3BsYXkgb2YgY2xlYXIgXFxcInhcXFwiIGljb24gaW4gc2VhcmNoIGlucHV0cyBhY3Jvc3MgZGlmZmVyZW50IGJyb3dzZXJzLiBcXG4gICwgdGhpcyBjb2RlIHJlbW92ZXMgdGhlIGljb24gaW4gRWRnZSBhbmQgQ2hyb21lIHdoZW4gdGhlIGlucHV0IGxvc2VzIGZvY3VzLCB3aGlsZSBrZWVwaW5nIGl0IHZpc2libGUgaW4gU2FmYXJpLiAqL1xcbmlucHV0W3R5cGU9J3NlYXJjaCddOm5vdCg6Zm9jdXMsIDphY3RpdmUpOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIC8qIDEgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT0nYnV0dG9uJ106Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9J3Jlc2V0J106Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9J3N1Ym1pdCddOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gICAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT0nYnV0dG9uJ106LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9J3Jlc2V0J106LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9J3N1Ym1pdCddOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmZpZWxkc2V0IHtcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmxlZ2VuZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIDEgKi9cXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIC8qIDIgKi9cXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIC8qIDEgKi9cXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIDMgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICAgKi9cXG5cXG5wcm9ncmVzcyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gICAqL1xcblxcbnRleHRhcmVhIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5bdHlwZT0nY2hlY2tib3gnXSxcXG5bdHlwZT0ncmFkaW8nXSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIDEgKi9cXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAgICovXFxuXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAgICovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAgIC8qIDEgKi9cXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICAgKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gICAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gICAgLyogMSAqL1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICovXFxuXFxuZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gICAqL1xcblxcbnRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gICAqL1xcblxcbltoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLDhCQUE4QjtJQUM5QixNQUFNO0FBQ1Y7O0FBRUEsd0NBQXdDO0FBQ3hDO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOzs7SUFHSTs7QUFFSjtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7O0lBR0k7O0FBRUo7SUFDSSx1QkFBdUI7SUFDdkIsTUFBTTtJQUNOLFNBQVM7SUFDVCxNQUFNO0lBQ04saUJBQWlCO0lBQ2pCLE1BQU07QUFDVjs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSxpQ0FBaUM7SUFDakMsTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0FBQ1Y7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSxtQkFBbUI7SUFDbkIsTUFBTTtJQUNOLDBCQUEwQjtJQUMxQixNQUFNO0lBQ04saUNBQWlDO0lBQ2pDLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7OztJQUdJOztBQUVKOzs7SUFHSSxpQ0FBaUM7SUFDakMsTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0FBQ1Y7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOzs7SUFHSTs7QUFFSjs7SUFFSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7O0lBR0k7O0FBRUo7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7Ozs7O0lBS0ksb0JBQW9CO0lBQ3BCLE1BQU07SUFDTixlQUFlO0lBQ2YsTUFBTTtJQUNOLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sU0FBUztJQUNULE1BQU07SUFDTixVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBLDZDQUE2QztBQUM3Qzs7SUFFSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBOztJQUVJLGFBQWE7SUFDYjtrQkFDYztBQUNsQjs7QUFFQSxzREFBc0Q7QUFDdEQ7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7bUhBQ21IO0FBQ25IO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7O0lBR0k7O0FBRUo7O0lBRUksTUFBTTtJQUNOLGlCQUFpQjtBQUNyQjs7QUFFQTs7O0lBR0k7O0FBRUo7O0lBRUksTUFBTTtJQUNOLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSTs7QUFFSjs7OztJQUlJLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSTs7QUFFSjs7OztJQUlJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUk7O0FBRUo7Ozs7SUFJSSw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7Ozs7O0lBS0k7O0FBRUo7SUFDSSxzQkFBc0I7SUFDdEIsTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0lBQ04sY0FBYztJQUNkLE1BQU07SUFDTixlQUFlO0lBQ2YsTUFBTTtJQUNOLFVBQVU7SUFDVixNQUFNO0lBQ04sbUJBQW1CO0lBQ25CLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7OztJQUdJOztBQUVKOztJQUVJLHNCQUFzQjtJQUN0QixNQUFNO0lBQ04sWUFBWTtJQUNaLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSTs7QUFFSjtJQUNJLDZCQUE2QjtJQUM3QixNQUFNO0lBQ04sb0JBQW9CO0lBQ3BCLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSwwQkFBMEI7SUFDMUIsTUFBTTtJQUNOLGFBQWE7SUFDYixNQUFNO0FBQ1Y7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLyogMSAqL1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyogQXBwbHkgYm9yZGVyIGJveCB0byBlbnRpcmUgZG9jdW1lbnQgKi9cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAgICovXFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAgICovXFxuXFxuaHIge1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxucHJlIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAvKiAxICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAvKiAyICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICAgKiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gICAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5pbnB1dCB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIC8qIDIgKi9cXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogR2l2ZSBpbnB1dCBhbmQgdGV4dCBhcmVhIGNvbnNpc3RlbnQgbG9vayAqL1xcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweCAwIDAgLTEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udDogYm9sZCAwLjZlbSBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIC8qIGJhY2tncm91bmQ6ICMwMDA7XFxuICAgIGNvbG9yOiAjZmZmOyAqL1xcbn1cXG5cXG4vKiBHZXRzIHJpZCBvZiBkZWZhdWx0IHNlYXJjaCB0byByZW1vdmUgcmVzdHJpY3Rpb25zICovXFxuaW5wdXRbdHlwZT0nc2VhcmNoJ10ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKiBGaXggZm9yIGluY29uc2lzdGVudCBkaXNwbGF5IG9mIGNsZWFyIFxcXCJ4XFxcIiBpY29uIGluIHNlYXJjaCBpbnB1dHMgYWNyb3NzIGRpZmZlcmVudCBicm93c2Vycy4gXFxuICAsIHRoaXMgY29kZSByZW1vdmVzIHRoZSBpY29uIGluIEVkZ2UgYW5kIENocm9tZSB3aGVuIHRoZSBpbnB1dCBsb3NlcyBmb2N1cywgd2hpbGUga2VlcGluZyBpdCB2aXNpYmxlIGluIFNhZmFyaS4gKi9cXG5pbnB1dFt0eXBlPSdzZWFyY2gnXTpub3QoOmZvY3VzLCA6YWN0aXZlKTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgICAvKiAxICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG46Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9J2J1dHRvbiddOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPSdyZXNldCddOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPSdzdWJtaXQnXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICAgKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9J2J1dHRvbiddOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPSdyZXNldCddOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPSdzdWJtaXQnXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5maWVsZHNldCB7XFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5sZWdlbmQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiAxICovXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAvKiAyICovXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICAvKiAxICovXFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiAzICovXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAgICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICAgKi9cXG5cXG50ZXh0YXJlYSB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAgICovXFxuXFxuW3R5cGU9J2NoZWNrYm94J10sXFxuW3R5cGU9J3JhZGlvJ10ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiAxICovXFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gICAqL1xcblxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gICAqL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgICAvKiAxICovXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAgICovXFxuXFxuW3R5cGU9J3NlYXJjaCddOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICAgKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gICAqL1xcblxcbmRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICAgKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5baGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgICBjb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcbi50b3BCYXJDb250YWluZXIge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA3NXZ3O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuYnV0dG9uLnNoaXBDZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuI0FJQm9hcmQgYnV0dG9uLFxcbiNwbGF5ZXJCb2FyZCBidXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cXG4ucGxheWVyQm9hcmRDb250YWluZXIsXFxuLmFpQm9hcmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4jYm9hcmRzQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDFmcikpO1xcbiAgICB3aWR0aDogOTF2dztcXG59XFxuXFxuLm9yaWVudGF0aW9uVG9nZ2xlQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiNib2FyZHNDb250YWluZXIgcCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyQm9hcmQge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTRweCk7XFxuXFxufVxcblxcbiNBSUJvYXJkIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDU0cHgpO1xcblxcblxcbn1cXG5cXG4vKiBidXR0b24uYm9hcmRDZWxsIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG59ICovXFxuXFxuYnV0dG9uLnNoaXBDZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJ1dHRvbi5zaGlwSGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCA5NCwgMjIpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLDJEQUEyRDtJQUMzRCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG9DQUFvQzs7QUFFeEM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxvQ0FBb0M7OztBQUd4Qzs7QUFFQTs7O0dBR0c7O0FBRUg7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgICBjb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4OiAxO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcbi50b3BCYXJDb250YWluZXIge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA3NXZ3O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuYnV0dG9uLnNoaXBDZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuI0FJQm9hcmQgYnV0dG9uLFxcbiNwbGF5ZXJCb2FyZCBidXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cXG4ucGxheWVyQm9hcmRDb250YWluZXIsXFxuLmFpQm9hcmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4jYm9hcmRzQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDFmcikpO1xcbiAgICB3aWR0aDogOTF2dztcXG59XFxuXFxuLm9yaWVudGF0aW9uVG9nZ2xlQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiNib2FyZHNDb250YWluZXIgcCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyQm9hcmQge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTRweCk7XFxuXFxufVxcblxcbiNBSUJvYXJkIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDU0cHgpO1xcblxcblxcbn1cXG5cXG4vKiBidXR0b24uYm9hcmRDZWxsIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG59ICovXFxuXFxuYnV0dG9uLnNoaXBDZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJ1dHRvbi5zaGlwSGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCA5NCwgMjIpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1xuICBkaXNwbGF5Q29udHJvbGxlcixcbiAgcHJlR2FtZVNldHVwXG59IGZyb20gJy4vY29udHJvbGxlcnMvZGlzcGxheUNvbnRyb2xsZXInXG5cbmltcG9ydCAnLi9zdHlsZXMvbm9ybWFsaXplLmNzcydcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJ1xuXG5wcmVHYW1lU2V0dXAoKVxuIl0sIm5hbWVzIjpbImdhbWVDb250cm9sbGVyIiwiZ2FtZSIsInByZUdhbWVTZXR1cCIsInJlbmRlclBsYXllckJvYXJkIiwicGxhY2VDYXJyaWVyU2hpcCIsInJlbmRlckFJQm9hcmQiLCJkaXNwbGF5Q29udHJvbGxlciIsInBsYWNlQUlTaGlwcyIsImFpQm9hcmREaXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGxheWVycyIsImdldFBsYXllcnMiLCJhY3RpdmVQbGF5ZXIiLCJnZXRDdXJyZW50UGxheWVyIiwiaHVtYW4iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0IiwidG9wQmFyUGFyYSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImh1bWFuQm9hcmREaXYiLCJ0b3BCYXJEaXYiLCJob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzIiwib3JpZW50YXRpb25Ub2dnbGVCdG4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJvbmNlIiwiZSIsImhhbmRsZUNhcnJpZXJTaGlwUGxhY2VtZW50IiwicGxhY2VCYXR0bGVTaGlwIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUJhdHRsZVNoaXBQbGFjZW1lbnQiLCJwbGFjZUNydWlzZXIiLCJoYW5kbGVDcnVpc2VyU2hpcFBsYWNlbWVudCIsInBsYWNlU3VibWFyaW5lIiwiaGFuZGxlU3VibWFyaW5lU2hpcFBsYWNlbWVudCIsInBsYWNlRGVzdHJveWVyIiwiaGFuZGxlRGVzdHJveWVyU2hpcFBsYWNlbWVudCIsInBsYXllckJvYXJkIiwiZ2V0SHVtYW5Cb2FyZCIsInBsYXllckJvYXJkRGl2IiwiaW5uZXJIVE1MIiwiaSIsImxlbmd0aCIsImN1cnJlbnRSb3ciLCJqIiwiYnV0dG9uIiwiZGF0YXNldCIsInJvdyIsImNvbHVtbiIsImFpQm9hcmQiLCJnZXRBSUJvYXJkIiwidXBkYXRlSHVtYW5Cb2FyZCIsImh1bWFuQm9hcmQiLCJtaXNzZWRTaG90cyIsImdldEh1bWFuQm9hcmRPYmoiLCJnZXRNaXNzZWRTaG90cyIsInN1Y2Nlc3NmdWxTaG90cyIsImdldFN1Y2Nlc3NmdWxTaG90cyIsImFsbERvbU5vZGVzIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJzaG90IiwidGFyZ2V0Tm9kZSIsInJlbW92ZSIsInVwZGF0ZUFJQm9hcmQiLCJnZXRBSUJvYXJkT2JqIiwiaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbiIsInNlbGVjdGVkUm93IiwidGFyZ2V0Iiwic2VsZWN0ZWRDb2x1bW4iLCJjb29yZGluYXRlIiwiY2FycmllclBsYWNlZCIsInBsYWNlQ2Fycmllck9uQm9hcmQiLCJiYXR0bGVzaGlwUGxhY2VkIiwicGxhY2VCYXR0bGVzaGlwT25Cb2FyZCIsImNydWlzZXJQbGFjZWQiLCJwbGFjZUNydWlzZXJPbkJvYXJkIiwic3VibWFyaW5lUGxhY2VkIiwicGxhY2VTdWJtYXJpbmVPbkJvYXJkIiwiZGVzdHJveWVyUGxhY2VkIiwicGxhY2VEZXN0cm95ZXJPbkJvYXJkIiwic2hpcFR5cGUiLCJib2FyZERPTUNlbGxzQXJyIiwicXVlcnlTZWxlY3RvckFsbCIsImdldEhvcml6b250YWxET01Db29yZHMiLCJnZXRWZXJ0aWNhbERPTUNvb3JkcyIsInBsYWNlQ3J1aXNlclNoaXAiLCJwbGFjZVN1Ym1hcmluZVNoaXAiLCJwbGFjZURlc3Ryb3llclNoaXAiLCJzdGFydGluZ0NvbHVtbiIsIk51bWJlciIsInNoaXBMZW5ndGgiLCJkb21Db29yZGluYXRlIiwidGFyZ2V0RE9NQnRuIiwiZmluZFNoaXBET01CdG4iLCJzdGFydGluZ1JvdyIsImRvbUNlbGxSb3ciLCJkb21DZWxsQ29sdW1uIiwiYWxyZWFkeUF0dGFja2VkIiwicHJldmVudFNhbWVBdHRhY2siLCJwbGF5Um91bmQiLCJodW1hbldpbnMiLCJjaGVja0ZvcldpbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNldEdhbWVTdGF0ZSIsImFubm91bmNlV2lubmVyIiwicGxheUFnYWluIiwiaGFuZGxlQUlNb3ZlIiwiYWlXaW5zIiwid2lubmVyIiwid2lubmVyTmFtZSIsImdldE5hbWUiLCJwbGF5QWdhaW5CdG4iLCJzdGFydE5ld0dhbWUiLCJyZW1vdmVDaGlsZCIsIkdhbWVib2FyZCIsIlBsYXllciIsInJldHVyblJhbmRvbUFJQm9hcmQiLCJjcmVhdGVHYW1lQm9hcmQiLCJjYXJyaWVyQXJyIiwiZGV0ZXJtaW5lQ2FycmllckFyckNvb3JkcyIsInNoaXBQbGFjZWQiLCJwbGFjZVNoaXAiLCJwdXNoIiwiY29vcmQiLCJ0b1N0cmluZyIsImJhdHRsZXNoaXBBcnIiLCJkZXRlcm1pbmVCYXR0bGVzaGlwQXJyQ29vcmRzIiwiY3J1aXNlckFyciIsImRldGVybWluZUNydWlzZXJBcnJDb29yZHMiLCJzdWJtYXJpbmVBcnIiLCJkZXRlcm1pbmVTdWJtYXJpbmVBcnJDb29yZHMiLCJkZXN0cm95ZXJBcnIiLCJkZXRlcm1pbmVEZXN0cm95ZXJBcnJDb29yZHMiLCJwbGFjZVNoaXBzIiwiaHVtYW5QbGF5ZXIiLCJhaVBsYXllciIsIkFJIiwiY3VycmVudFBsYXllciIsInJlY2VpdmVBdHRhY2siLCJuZXh0TW92ZSIsImNvbXB1dGVyc05leHRNb3ZlIiwicmVtb3ZlTGFzdEFJTW92ZSIsInN3aXRjaFBsYXllciIsImF2YWlsYWJsZU1vdmVzIiwiZ2V0QUlBdmFpbGFibGVNb3ZlcyIsImxhc3RBSU1vdmVTdWNjZXNzZnVsIiwiZ2V0TGFzdEFJTW92ZVN1Y2Nlc3NmdWwiLCJhZGphY2VudFNsb3RzIiwiZ2V0QWRqYWNlbnRTbG90cyIsImdldEFkamFjZW50U2xvdHNRdWV1ZSIsImFkZEFkamFjZW50U2xvdHNUb1F1ZXVlIiwiZ2V0QWRqYWNlbnRRdWV1ZVNsb3QiLCJyYW5kb21Nb3ZlIiwibWFrZVJhbmRvbU1vdmUiLCJhbGxTaGlwc1N1bmsiLCJjbGVhckdhbWVCb2FyZCIsImdldEJvYXJkIiwiYm9hcmQiLCJjb29yZGluYXRlc09iaiIsInNoaXBDb29yZGluYXRlc0FyciIsIk9iamVjdCIsInZhbHVlcyIsInNoaXBDb29yZGluYXRlcyIsImFycmF5c0FyZUVxdWFsIiwiU2hpcCIsInNoaXBPYmplY3RzIiwiYWlBdmFpbGFibGVNb3ZlcyIsImFkamFjZW50U2xvdHNRdWV1ZSIsInJvd3MiLCJjb2x1bW5zIiwidW5kZWZpbmVkIiwidmFsaWRhdGVDb29yZGluYXRlcyIsImNvb3JkaW5hdGVzIiwidmFsaWRDb29yZGluYXRlcyIsImNoZWNrU2VsZk92ZXJsYXAiLCJjb29yZGluYXRlc092ZXJsYXAiLCJwcmV2Q29vcmRpbmF0ZSIsImluZGV4IiwiY2hlY2tPdmVybGFwV2l0aE90aGVyU2hpcHMiLCJzaGlwc092ZXJsYXAiLCJib2FyZENlbGwiLCJsZWdhbENvb3JkaW5hdGVzIiwib3ZlcmxhcHBpbmdDb29yZGluYXRlcyIsInNoaXBPdmVybGFwcGluZyIsInNoaXBPYmplY3QiLCJzaGlwT2JqIiwiaGl0IiwicmVtb3ZlQWRqYWNlbnRTbG90Iiwic3BsaWNlIiwiZXZlcnlTaGlwU2FuayIsImhhc0JlZW5TdW5rIiwibW92ZSIsInNsb3QiLCJnZXRTaGlwT2JqZWN0cyIsInBvcCIsIm5hbWUiLCJpc0FJIiwiYXZhaWxhYmxlTW92ZXNMZW5ndGgiLCJyYW5kb21BcnJJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbUNvb3JkaW5hdGUiLCJhZGphY2VudFF1ZXVlIiwibGFzdFN1Y2Nlc3NmdWxNb3ZlIiwiYXQiLCJyZXRyaWV2ZUFkamFjZW50U2xvdHMiLCJsZWdhbEFkamFjZW50U2xvdHMiLCJyZW1vdmVJbGxlZ2FsQWRqYWNlbnRTbG90cyIsImdldENlbGxBYm92ZSIsIm5ld0FyciIsIm5ld1JvdyIsImdldENlbGxCZWxvdyIsImFyciIsImdldENlbGxUb1JpZ2h0IiwibmV3Q29sdW1uIiwiZ2V0Q2VsbFRvTGVmdCIsImxhc3RTdWNjZXNzZnVsTW92ZVZhbHVlIiwiYWRqYWNlbnRTbG90c0FyciIsInByZXZlbnRQcmV2aW91c1Nob3RUb1F1ZXVlIiwibnVtT2ZIaXRzIiwiaXNTdW5rIiwiZ2V0TnVtT2ZIaXRzIiwiZ2V0TGVuZ3RoIiwiYXJyMSIsImFycjIiLCJhaUJvYXJkcyIsImFpU2hpcENvb3Jkc09uZSIsImFpU2hpcENvb3Jkc1R3byIsImFpU2hpcENvb3Jkc1RocmVlIiwicmFuZG9tSW5kZXgiLCJjaG9zZW5BSUJvYXJkIiwiY2FycmllciIsImJhdHRsZXNoaXAiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIl0sInNvdXJjZVJvb3QiOiIifQ==