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
      const availableMoves = humanBoard.getAIAvailableMoves();
      const randomMove = currentPlayer.makeRandomMove(true, availableMoves);
      humanBoard.receiveAttack(randomMove);
      humanBoard.removeLastAIMove(randomMove);
    }
    switchPlayer();
    console.log(currentPlayer.getName());
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
  const rows = 9;
  const columns = 9;
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
      successfulShots.push(coordinates);
    } else if (typeof boardCell !== 'object') {
      missedShots.push(coordinates);
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
  const clearGameBoard = () => {
    shipObjects.length = 0;
    missedShots.length = 0;
    aiAvailableMoves.length = 0;
    successfulShots.length = 0;
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
    checkOverlapWithOtherShips
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
  const getName = () => {
    return name;
  };
  return {
    makeRandomMove,
    getName
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    width: 100vw;\n    overflow-x: hidden;\n}\n\nheader {\n    background-color: darkblue;\n    color: rgb(236, 236, 236);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 80px;\n}\n\n.headerContainer {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\nmain {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.topBarContainer {\n    outline: 1px solid black;\n    width: 75vw;\n    height: 80px;\n    margin-top: 24px;\n    display: flex;\n    gap: 10px;\n}\n\nbutton.shipCell {\n    background-color: grey;\n}\n\n#AIBoard button,\n#playerBoard button {\n    border-radius: 0;\n}\n\n#boardsContainer {\n    display: flex;\n    justify-content: center;\n    gap: 12px;\n    outline: 1px solid black;\n    padding: 12px;\n    display: grid;\n    grid-template-rows: none;\n    grid-template-columns: 1fr 1fr;\n    width: 91vw;\n}\n\n.orientationToggleBtn {\n    background-color: #333;\n    color: white;\n    border-radius: 8px;\n}\n\n#boardsContainer p {\n    justify-self: center;\n}\n\n#playerBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 54px);\n\n}\n\n#AIBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 54px);\n\n\n}\n\n/* button.boardCell {\n    border: 1px solid black;\n    border-radius: 0px;\n} */\n\nbutton.shipCell {\n    background-color: grey;\n    border: 1px solid black;\n}\n\nbutton.shipHit {\n    background-color: rgb(22, 94, 22);\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;IAC1B,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,OAAO;IACP,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,wBAAwB;IACxB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,wBAAwB;IACxB,aAAa;IACb,aAAa;IACb,wBAAwB;IACxB,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,oCAAoC;;AAExC;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sCAAsC;IACtC,oCAAoC;;;AAGxC;;AAEA;;;GAGG;;AAEH;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,iCAAiC;AACrC","sourcesContent":["body {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    width: 100vw;\n    overflow-x: hidden;\n}\n\nheader {\n    background-color: darkblue;\n    color: rgb(236, 236, 236);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 80px;\n}\n\n.headerContainer {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\nmain {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.topBarContainer {\n    outline: 1px solid black;\n    width: 75vw;\n    height: 80px;\n    margin-top: 24px;\n    display: flex;\n    gap: 10px;\n}\n\nbutton.shipCell {\n    background-color: grey;\n}\n\n#AIBoard button,\n#playerBoard button {\n    border-radius: 0;\n}\n\n#boardsContainer {\n    display: flex;\n    justify-content: center;\n    gap: 12px;\n    outline: 1px solid black;\n    padding: 12px;\n    display: grid;\n    grid-template-rows: none;\n    grid-template-columns: 1fr 1fr;\n    width: 91vw;\n}\n\n.orientationToggleBtn {\n    background-color: #333;\n    color: white;\n    border-radius: 8px;\n}\n\n#boardsContainer p {\n    justify-self: center;\n}\n\n#playerBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 54px);\n\n}\n\n#AIBoard {\n    outline: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 54px);\n\n\n}\n\n/* button.boardCell {\n    border: 1px solid black;\n    border-radius: 0px;\n} */\n\nbutton.shipCell {\n    background-color: grey;\n    border: 1px solid black;\n}\n\nbutton.shipHit {\n    background-color: rgb(22, 94, 22);\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFVixDQUFDO0FBRUQsTUFBTVIsZUFBZSxHQUFHO0VBQ3RCSSxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxVQUFVLEVBQUUsQ0FDVixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxPQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDtFQUNEQyxTQUFTLEVBQUUsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixD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QnBOLDRFQUFZLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvY29udHJvbGxlcnMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvY29udHJvbGxlcnMvZ2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvZmFjdG9yaWVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9mYWN0b3JpZXMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2ZhY3Rvcmllcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL2hlbHBlcnMvYXJyYXlzQXJlRXF1YWwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvaGVscGVycy9yb3RhdGVBSUJvYXJkcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzPzQzZjQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1vZGluLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuL2dhbWVDb250cm9sbGVyJ1xuXG5jb25zdCBnYW1lID0gZ2FtZUNvbnRyb2xsZXIoKVxuXG5jb25zdCBwcmVHYW1lU2V0dXAgPSAoKSA9PiB7XG4gIHJlbmRlclBsYXllckJvYXJkKClcbiAgcGxhY2VDYXJyaWVyU2hpcCgpXG4gIHJlbmRlckFJQm9hcmQoKVxufVxuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgpID0+IHtcbiAgLy8gdGhpcyBpcyB3aGVyZSB0aGUgc2hpcCBwbGFjZW1lbnQgd2lsbCBoYXBwZW4gZm9yIGh1bWFuIHBsYXllclxuICBnYW1lLnBsYWNlQUlTaGlwcygpXG4gIHJlbmRlckFJQm9hcmQoKVxuICBjb25zdCBhaUJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FJQm9hcmQnKVxuICBjb25zdCBwbGF5ZXJzID0gZ2FtZS5nZXRQbGF5ZXJzKClcbiAgY29uc3QgYWN0aXZlUGxheWVyID0gZ2FtZS5nZXRDdXJyZW50UGxheWVyKClcblxuICBpZiAoYWN0aXZlUGxheWVyID09PSBwbGF5ZXJzLmh1bWFuKSB7XG4gICAgYWlCb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dClcbiAgfVxufVxuXG5jb25zdCBwbGFjZUNhcnJpZXJTaGlwID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgY2FycmllciBzaGlwJ1xuXG4gIGNvbnN0IGh1bWFuQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyQm9hcmQnKVxuXG4gIGNvbnN0IHRvcEJhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXInKVxuICBsZXQgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9IHRydWVcbiAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBvcmllbnRhdGlvblRvZ2dsZUJ0bi5jbGFzc0xpc3QuYWRkKCdvcmllbnRhdGlvblRvZ2dsZUJ0bicpXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXG4gIHRvcEJhckRpdi5hcHBlbmRDaGlsZChvcmllbnRhdGlvblRvZ2dsZUJ0bilcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgICgpID0+IHtcbiAgICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBmYWxzZVxuICAgICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXG4gICAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXG4gICAgICB9XG4gICAgfSxcbiAgICB7IG9uY2U6IHRydWUgfVxuICApXG5cbiAgaHVtYW5Cb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgICdjbGljaycsXG4gICAgKGUpID0+IHtcbiAgICAgIGhhbmRsZUNhcnJpZXJTaGlwUGxhY2VtZW50KGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMpXG4gICAgfSxcbiAgICB7IG9uY2U6IHRydWUgfVxuICApXG59XG5cbmNvbnN0IHBsYWNlQmF0dGxlU2hpcCA9ICgpID0+IHtcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIGJhdHRsZXNoaXAnXG5cbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxuICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmllbnRhdGlvblRvZ2dsZUJ0bicpXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2NsaWNrJyxcbiAgICAoKSA9PiB7XG4gICAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gZmFsc2VcbiAgICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnVmVydGljYWwnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxuICAgICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJ1xuICAgICAgfVxuICAgIH0sXG4gICAgeyBvbmNlOiB0cnVlIH1cbiAgKVxuXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgIChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgJ09yaWVudGF0aW9uIHN0YXR1cyBnb2luZyBpbnRvIHBsYWNlbWVudDonICtcbiAgICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzXG4gICAgICApXG4gICAgICBoYW5kbGVCYXR0bGVTaGlwUGxhY2VtZW50KGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMpXG4gICAgfSxcbiAgICB7IG9uY2U6IHRydWUgfVxuICApXG59XG5cbmNvbnN0IHBsYWNlQ3J1aXNlciA9ICgpID0+IHtcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIENydWlzZXInXG5cbiAgY29uc3QgaHVtYW5Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJCb2FyZCcpXG5cbiAgbGV0IGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXG4gIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yaWVudGF0aW9uVG9nZ2xlQnRuJylcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcbiAgb3JpZW50YXRpb25Ub2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgICgpID0+IHtcbiAgICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSBmYWxzZVxuICAgICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMgPSB0cnVlXG4gICAgICAgIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXG4gICAgICB9XG4gICAgfSxcbiAgICB7IG9uY2U6IHRydWUgfVxuICApXG5cbiAgaHVtYW5Cb2FyZERpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgICdjbGljaycsXG4gICAgKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnT3JpZW50YXRpb24gc3RhdHVzIGdvaW5nIGludG8gcGxhY2VtZW50OicgK1xuICAgICAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXNcbiAgICAgIClcbiAgICAgIGhhbmRsZUNydWlzZXJTaGlwUGxhY2VtZW50KGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMpXG4gICAgfSxcbiAgICB7IG9uY2U6IHRydWUgfVxuICApXG59XG5cbmNvbnN0IHBsYWNlU3VibWFyaW5lID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgU3VibWFyaW5lJ1xuXG4gIGNvbnN0IGh1bWFuQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyQm9hcmQnKVxuXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxuICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmllbnRhdGlvblRvZ2dsZUJ0bicpXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2NsaWNrJyxcbiAgICAoKSA9PiB7XG4gICAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gZmFsc2VcbiAgICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnVmVydGljYWwnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxuICAgICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJ1xuICAgICAgfVxuICAgIH0sXG4gICAgeyBvbmNlOiB0cnVlIH1cbiAgKVxuXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgIChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgJ09yaWVudGF0aW9uIHN0YXR1cyBnb2luZyBpbnRvIHBsYWNlbWVudDonICtcbiAgICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzXG4gICAgICApXG4gICAgICBoYW5kbGVTdWJtYXJpbmVTaGlwUGxhY2VtZW50KGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMpXG4gICAgfSxcbiAgICB7IG9uY2U6IHRydWUgfVxuICApXG59XG5cbmNvbnN0IHBsYWNlRGVzdHJveWVyID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IHAnKVxuICB0b3BCYXJQYXJhLnRleHRDb250ZW50ID0gJ1BsYWNlIHlvdXIgRGVzdHJveWVyJ1xuXG4gIGNvbnN0IGh1bWFuQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyQm9hcmQnKVxuXG4gIGxldCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxuICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmllbnRhdGlvblRvZ2dsZUJ0bicpXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnXG4gIG9yaWVudGF0aW9uVG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2NsaWNrJyxcbiAgICAoKSA9PiB7XG4gICAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gZmFsc2VcbiAgICAgICAgb3JpZW50YXRpb25Ub2dnbGVCdG4udGV4dENvbnRlbnQgPSAnVmVydGljYWwnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzID0gdHJ1ZVxuICAgICAgICBvcmllbnRhdGlvblRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJ1xuICAgICAgfVxuICAgIH0sXG4gICAgeyBvbmNlOiB0cnVlIH1cbiAgKVxuXG4gIGh1bWFuQm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgIChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgJ09yaWVudGF0aW9uIHN0YXR1cyBnb2luZyBpbnRvIHBsYWNlbWVudDonICtcbiAgICAgICAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uU3RhdHVzXG4gICAgICApXG4gICAgICBoYW5kbGVEZXN0cm95ZXJTaGlwUGxhY2VtZW50KGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMpXG4gICAgfSxcbiAgICB7IG9uY2U6IHRydWUgfVxuICApXG59XG5cbmNvbnN0IHJlbmRlclBsYXllckJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGdhbWUuZ2V0SHVtYW5Cb2FyZCgpXG4gIGNvbnN0IHBsYXllckJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckJvYXJkJylcbiAgcGxheWVyQm9hcmREaXYuaW5uZXJIVE1MID0gJydcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudFJvdyA9IHBsYXllckJvYXJkW2ldXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50Um93Lmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JvYXJkQ2VsbCcpXG4gICAgICBidXR0b24uZGF0YXNldC5yb3cgPSBpXG4gICAgICBidXR0b24uZGF0YXNldC5jb2x1bW4gPSBqXG5cbiAgICAgIHBsYXllckJvYXJkRGl2LmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgcmVuZGVyQUlCb2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYWlCb2FyZCA9IGdhbWUuZ2V0QUlCb2FyZCgpXG4gIGNvbnN0IGFpQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlCb2FyZCcpXG4gIGFpQm9hcmREaXYuaW5uZXJIVE1MID0gJydcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFpQm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjdXJyZW50Um93ID0gYWlCb2FyZFtpXVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudFJvdy5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdib2FyZENlbGwnKVxuICAgICAgYnV0dG9uLmRhdGFzZXQucm93ID0gaVxuICAgICAgYnV0dG9uLmRhdGFzZXQuY29sdW1uID0galxuICAgICAgY29uc3Qgcm93ID0gYWlCb2FyZFtpXVxuICAgICAgLy8gZm9yIHRlc3RpbmcsIHRoaXMgc2hvd3MgQUkgYm9hcmQgYXQgc3RhcnRcbiAgICAgIC8vIHdoaWNoIHdlIGRvIG5vdCB3YW50XG4gICAgICBpZiAodHlwZW9mIHJvd1tqXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NoaXBDZWxsJylcbiAgICAgIH1cbiAgICAgIGFpQm9hcmREaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCB1cGRhdGVIdW1hbkJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBodW1hbkJvYXJkID0gZ2FtZS5nZXRIdW1hbkJvYXJkKClcbiAgY29uc3QgbWlzc2VkU2hvdHMgPSBnYW1lLmdldEh1bWFuQm9hcmRPYmouZ2V0TWlzc2VkU2hvdHMoKVxuICBjb25zdCBzdWNjZXNzZnVsU2hvdHMgPSBnYW1lLmdldEh1bWFuQm9hcmRPYmouZ2V0U3VjY2Vzc2Z1bFNob3RzKClcbiAgY29uc3QgYWxsRG9tTm9kZXMgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJCb2FyZCcpLmNoaWxkTm9kZXNcbiAgKVxuXG4gIG1pc3NlZFNob3RzLmZvckVhY2goKHNob3QpID0+IHtcbiAgICBjb25zdCByb3cgPSBzaG90WzBdXG4gICAgY29uc3QgY29sdW1uID0gc2hvdFsxXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEb21Ob2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGFsbERvbU5vZGVzW2ldLmRhdGFzZXRcbiAgICAgIGlmICgrdGFyZ2V0Tm9kZS5jb2x1bW4gPT09IGNvbHVtbiAmJiArdGFyZ2V0Tm9kZS5yb3cgPT09IHJvdykge1xuICAgICAgICBhbGxEb21Ob2Rlc1tpXS50ZXh0Q29udGVudCA9ICdYJ1xuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICBzdWNjZXNzZnVsU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IHNob3RbMF1cbiAgICBjb25zdCBjb2x1bW4gPSBzaG90WzFdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERvbU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YXJnZXROb2RlID0gYWxsRG9tTm9kZXNbaV1cbiAgICAgIGlmIChcbiAgICAgICAgK3RhcmdldE5vZGUuZGF0YXNldC5jb2x1bW4gPT09IGNvbHVtbiAmJlxuICAgICAgICArdGFyZ2V0Tm9kZS5kYXRhc2V0LnJvdyA9PT0gcm93XG4gICAgICApIHtcbiAgICAgICAgdGFyZ2V0Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwQ2VsbCcpXG4gICAgICAgIHRhcmdldE5vZGUuY2xhc3NMaXN0LmFkZCgnc2hpcEhpdCcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgdXBkYXRlQUlCb2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYWlCb2FyZCA9IGdhbWUuZ2V0QUlCb2FyZCgpXG4gIGNvbnN0IG1pc3NlZFNob3RzID0gZ2FtZS5nZXRBSUJvYXJkT2JqLmdldE1pc3NlZFNob3RzKClcbiAgY29uc3Qgc3VjY2Vzc2Z1bFNob3RzID0gZ2FtZS5nZXRBSUJvYXJkT2JqLmdldFN1Y2Nlc3NmdWxTaG90cygpXG4gIGNvbnN0IGFsbERvbU5vZGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQUlCb2FyZCcpLmNoaWxkTm9kZXMpXG5cbiAgbWlzc2VkU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IHNob3RbMF1cbiAgICBjb25zdCBjb2x1bW4gPSBzaG90WzFdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERvbU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YXJnZXROb2RlID0gYWxsRG9tTm9kZXNbaV0uZGF0YXNldFxuICAgICAgaWYgKHRhcmdldE5vZGUuY29sdW1uID09PSBjb2x1bW4gJiYgdGFyZ2V0Tm9kZS5yb3cgPT09IHJvdykge1xuICAgICAgICBhbGxEb21Ob2Rlc1tpXS50ZXh0Q29udGVudCA9ICdYJ1xuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICBzdWNjZXNzZnVsU2hvdHMuZm9yRWFjaCgoc2hvdCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IHNob3RbMF1cbiAgICBjb25zdCBjb2x1bW4gPSBzaG90WzFdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERvbU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YXJnZXROb2RlID0gYWxsRG9tTm9kZXNbaV1cbiAgICAgIGlmIChcbiAgICAgICAgdGFyZ2V0Tm9kZS5kYXRhc2V0LmNvbHVtbiA9PT0gY29sdW1uICYmXG4gICAgICAgIHRhcmdldE5vZGUuZGF0YXNldC5yb3cgPT09IHJvd1xuICAgICAgKSB7XG4gICAgICAgIHRhcmdldE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcENlbGwnKVxuICAgICAgICB0YXJnZXROb2RlLmNsYXNzTGlzdC5hZGQoJ3NoaXBIaXQnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGhhbmRsZUNhcnJpZXJTaGlwUGxhY2VtZW50ID0gKGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvd1xuICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uXG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBbc2VsZWN0ZWRSb3csIHNlbGVjdGVkQ29sdW1uXVxuXG4gIGNvbnN0IGNhcnJpZXJQbGFjZWQgPSBwbGFjZUNhcnJpZXJPbkJvYXJkKFxuICAgIGNvb3JkaW5hdGUsXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxuICApXG5cbiAgaWYgKGNhcnJpZXJQbGFjZWQpIHtcbiAgICBwbGFjZUJhdHRsZVNoaXAoKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwbGFjZUNhcnJpZXJTaGlwXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlQmF0dGxlU2hpcFBsYWNlbWVudCA9IChlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cblxuICBjb25zdCBiYXR0bGVzaGlwUGxhY2VkID0gcGxhY2VCYXR0bGVzaGlwT25Cb2FyZChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuXG4gIGlmIChiYXR0bGVzaGlwUGxhY2VkKSB7XG4gICAgcGxhY2VDcnVpc2VyKClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGxhY2VCYXR0bGVTaGlwXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlQ3J1aXNlclNoaXBQbGFjZW1lbnQgPSAoZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cbiAgY29uc3QgY29vcmRpbmF0ZSA9IFtzZWxlY3RlZFJvdywgc2VsZWN0ZWRDb2x1bW5dXG5cbiAgY29uc3QgY3J1aXNlclBsYWNlZCA9IHBsYWNlQ3J1aXNlck9uQm9hcmQoXG4gICAgY29vcmRpbmF0ZSxcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXG4gIClcblxuICBpZiAoY3J1aXNlclBsYWNlZCkge1xuICAgIHBsYWNlU3VibWFyaW5lKClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGxhY2VDcnVpc2VyXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlU3VibWFyaW5lU2hpcFBsYWNlbWVudCA9IChlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3dcbiAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtblxuICBjb25zdCBjb29yZGluYXRlID0gW3NlbGVjdGVkUm93LCBzZWxlY3RlZENvbHVtbl1cblxuICBjb25zdCBzdWJtYXJpbmVQbGFjZWQgPSBwbGFjZVN1Ym1hcmluZU9uQm9hcmQoXG4gICAgY29vcmRpbmF0ZSxcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXG4gIClcblxuICBpZiAoc3VibWFyaW5lUGxhY2VkKSB7XG4gICAgcGxhY2VEZXN0cm95ZXIoKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwbGFjZVN1Ym1hcmluZVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZURlc3Ryb3llclNoaXBQbGFjZW1lbnQgPSAoZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cbiAgY29uc3QgY29vcmRpbmF0ZSA9IFtzZWxlY3RlZFJvdywgc2VsZWN0ZWRDb2x1bW5dXG5cbiAgY29uc3QgZGVzdHJveWVyUGxhY2VkID0gcGxhY2VEZXN0cm95ZXJPbkJvYXJkKFxuICAgIGNvb3JkaW5hdGUsXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvblxuICApXG5cbiAgaWYgKGRlc3Ryb3llclBsYWNlZCkge1xuICAgIGRpc3BsYXlDb250cm9sbGVyKClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGxhY2VEZXN0cm95ZXJcbiAgfVxufVxuXG5jb25zdCBwbGFjZUNhcnJpZXJPbkJvYXJkID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgY29uc3Qgc2hpcFR5cGUgPSAnY2FycmllcidcbiAgY29uc3QgY2FycmllclBsYWNlZCA9IGdhbWUucGxhY2VDYXJyaWVyU2hpcChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuICBjb25zdCBib2FyZERPTUNlbGxzQXJyID0gW1xuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXG4gIF1cbiAgaWYgKCFjYXJyaWVyUGxhY2VkKSB7XG4gICAgcmV0dXJuIGNhcnJpZXJQbGFjZWRcbiAgfSBlbHNlIHtcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZ2V0SG9yaXpvbnRhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBnZXRWZXJ0aWNhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNhcnJpZXJQbGFjZWRcbn1cblxuY29uc3QgcGxhY2VCYXR0bGVzaGlwT25Cb2FyZCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gIGNvbnN0IHNoaXBUeXBlID0gJ2JhdHRsZXNoaXAnXG4gIGNvbnN0IGJhdHRsZXNoaXBQbGFjZWQgPSBnYW1lLnBsYWNlQmF0dGxlU2hpcChcbiAgICBjb29yZGluYXRlLFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb25cbiAgKVxuICBjb25zdCBib2FyZERPTUNlbGxzQXJyID0gW1xuICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJCb2FyZCA+IGJ1dHRvbicpXG4gIF1cbiAgaWYgKCFiYXR0bGVzaGlwUGxhY2VkKSB7XG4gICAgcmV0dXJuIGJhdHRsZXNoaXBQbGFjZWRcbiAgfSBlbHNlIHtcbiAgICBpZiAoaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZ2V0SG9yaXpvbnRhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBnZXRWZXJ0aWNhbERPTUNvb3Jkcyhjb29yZGluYXRlLCBib2FyZERPTUNlbGxzQXJyLCBzaGlwVHlwZSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJhdHRsZXNoaXBQbGFjZWRcbn1cblxuY29uc3QgcGxhY2VDcnVpc2VyT25Cb2FyZCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gIGNvbnN0IHNoaXBUeXBlID0gJ2NydWlzZXInXG4gIGNvbnN0IGNydWlzZXJQbGFjZWQgPSBnYW1lLnBsYWNlQ3J1aXNlclNoaXAoXG4gICAgY29vcmRpbmF0ZSxcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXG4gIClcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxuICBdXG4gIGlmICghY3J1aXNlclBsYWNlZCkge1xuICAgIHJldHVybiBjcnVpc2VyUGxhY2VkXG4gIH0gZWxzZSB7XG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGdldEhvcml6b250YWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgZ2V0VmVydGljYWxET01Db29yZHMoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpXG4gICAgfVxuICB9XG4gIHJldHVybiBjcnVpc2VyUGxhY2VkXG59XG5cbmNvbnN0IHBsYWNlU3VibWFyaW5lT25Cb2FyZCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gIGNvbnN0IHNoaXBUeXBlID0gJ3N1Ym1hcmluZSdcbiAgY29uc3Qgc3VibWFyaW5lUGxhY2VkID0gZ2FtZS5wbGFjZVN1Ym1hcmluZVNoaXAoXG4gICAgY29vcmRpbmF0ZSxcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXG4gIClcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxuICBdXG4gIGlmICghc3VibWFyaW5lUGxhY2VkKSB7XG4gICAgcmV0dXJuIHN1Ym1hcmluZVBsYWNlZFxuICB9IGVsc2Uge1xuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGdldFZlcnRpY2FsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3VibWFyaW5lUGxhY2VkXG59XG5cbmNvbnN0IHBsYWNlRGVzdHJveWVyT25Cb2FyZCA9IChjb29yZGluYXRlLCBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSA9PiB7XG4gIGNvbnN0IHNoaXBUeXBlID0gJ2Rlc3Ryb3llcidcbiAgY29uc3QgZGVzdHJveWVyUGxhY2VkID0gZ2FtZS5wbGFjZURlc3Ryb3llclNoaXAoXG4gICAgY29vcmRpbmF0ZSxcbiAgICBob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uXG4gIClcbiAgY29uc3QgYm9hcmRET01DZWxsc0FyciA9IFtcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyQm9hcmQgPiBidXR0b24nKVxuICBdXG4gIGlmICghZGVzdHJveWVyUGxhY2VkKSB7XG4gICAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxuICB9IGVsc2Uge1xuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBnZXRIb3Jpem9udGFsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGdldFZlcnRpY2FsRE9NQ29vcmRzKGNvb3JkaW5hdGUsIGJvYXJkRE9NQ2VsbHNBcnIsIHNoaXBUeXBlKVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGVzdHJveWVyUGxhY2VkXG59XG5cbmNvbnN0IGdldEhvcml6b250YWxET01Db29yZHMgPSAoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpID0+IHtcbiAgY29uc3Qgc3RhcnRpbmdDb2x1bW4gPSBOdW1iZXIoY29vcmRpbmF0ZVsxXSlcbiAgY29uc3Qgc2hpcExlbmd0aCA9XG4gICAgc2hpcFR5cGUgPT09ICdjYXJyaWVyJ1xuICAgICAgPyA1XG4gICAgICA6IHNoaXBUeXBlID09PSAnYmF0dGxlc2hpcCdcbiAgICAgID8gNFxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2NydWlzZXInXG4gICAgICA/IDNcbiAgICAgIDogc2hpcFR5cGUgPT09ICdzdWJtYXJpbmUnXG4gICAgICA/IDNcbiAgICAgIDogc2hpcFR5cGUgPT09ICdkZXN0cm95ZXInXG4gICAgICA/IDJcbiAgICAgIDogbnVsbFxuXG4gIGZvciAobGV0IGkgPSBzdGFydGluZ0NvbHVtbjsgaSA8IHN0YXJ0aW5nQ29sdW1uICsgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gK2Nvb3JkaW5hdGVbMF1cbiAgICBjb25zdCBjb2x1bW4gPSBpXG4gICAgY29uc3QgZG9tQ29vcmRpbmF0ZSA9IFtyb3csIGNvbHVtbl1cbiAgICBjb25zdCB0YXJnZXRET01CdG4gPSBmaW5kU2hpcERPTUJ0bihib2FyZERPTUNlbGxzQXJyLCBkb21Db29yZGluYXRlKVxuICAgIHRhcmdldERPTUJ0bi5jbGFzc0xpc3QuYWRkKCdzaGlwQ2VsbCcpXG4gIH1cbn1cblxuY29uc3QgZ2V0VmVydGljYWxET01Db29yZHMgPSAoY29vcmRpbmF0ZSwgYm9hcmRET01DZWxsc0Fyciwgc2hpcFR5cGUpID0+IHtcbiAgY29uc3Qgc3RhcnRpbmdSb3cgPSBOdW1iZXIoY29vcmRpbmF0ZVswXSlcbiAgY29uc3Qgc2hpcExlbmd0aCA9XG4gICAgc2hpcFR5cGUgPT09ICdjYXJyaWVyJ1xuICAgICAgPyA1XG4gICAgICA6IHNoaXBUeXBlID09PSAnYmF0dGxlc2hpcCdcbiAgICAgID8gNFxuICAgICAgOiBzaGlwVHlwZSA9PT0gJ2NydWlzZXInXG4gICAgICA/IDNcbiAgICAgIDogc2hpcFR5cGUgPT09ICdzdWJtYXJpbmUnXG4gICAgICA/IDNcbiAgICAgIDogc2hpcFR5cGUgPT09ICdkZXN0cm95ZXInXG4gICAgICA/IDJcbiAgICAgIDogbnVsbFxuXG4gIGZvciAobGV0IGkgPSBzdGFydGluZ1JvdzsgaSA+IHN0YXJ0aW5nUm93IC0gc2hpcExlbmd0aDsgaS0tKSB7XG4gICAgY29uc3Qgcm93ID0gaVxuICAgIGNvbnN0IGNvbHVtbiA9ICtjb29yZGluYXRlWzFdXG4gICAgY29uc3QgZG9tQ29vcmRpbmF0ZSA9IFtyb3csIGNvbHVtbl1cbiAgICBjb25zdCB0YXJnZXRET01CdG4gPSBmaW5kU2hpcERPTUJ0bihib2FyZERPTUNlbGxzQXJyLCBkb21Db29yZGluYXRlKVxuICAgIHRhcmdldERPTUJ0bi5jbGFzc0xpc3QuYWRkKCdzaGlwQ2VsbCcpXG4gIH1cbn1cblxuY29uc3QgZmluZFNoaXBET01CdG4gPSAoYm9hcmRET01DZWxsc0FyciwgZG9tQ29vcmRpbmF0ZSkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkRE9NQ2VsbHNBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkb21DZWxsUm93ID0gK2JvYXJkRE9NQ2VsbHNBcnJbaV0uZGF0YXNldC5yb3dcbiAgICBjb25zdCBkb21DZWxsQ29sdW1uID0gK2JvYXJkRE9NQ2VsbHNBcnJbaV0uZGF0YXNldC5jb2x1bW5cbiAgICBpZiAoZG9tQ2VsbFJvdyA9PT0gZG9tQ29vcmRpbmF0ZVswXSAmJiBkb21DZWxsQ29sdW1uID09PSBkb21Db29yZGluYXRlWzFdKSB7XG4gICAgICByZXR1cm4gYm9hcmRET01DZWxsc0FycltpXVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnQgPSAoZSkgPT4ge1xuICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93XG4gIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW5cbiAgY29uc3QgYWlCb2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBSUJvYXJkJylcblxuICBpZiAoIXNlbGVjdGVkQ29sdW1uIHx8ICFzZWxlY3RlZFJvdykge1xuICAgIHJldHVybiBoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnRcbiAgfVxuXG4gIGNvbnN0IGFpQm9hcmQgPSBnYW1lLmdldEFJQm9hcmRPYmpcbiAgY29uc3QgY29vcmRpbmF0ZSA9IFtzZWxlY3RlZFJvdywgc2VsZWN0ZWRDb2x1bW5dXG4gIGNvbnN0IGFscmVhZHlBdHRhY2tlZCA9IGFpQm9hcmQucHJldmVudFNhbWVBdHRhY2soY29vcmRpbmF0ZSlcbiAgaWYgKGFscmVhZHlBdHRhY2tlZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgZ2FtZS5wbGF5Um91bmQoY29vcmRpbmF0ZSlcbiAgY29uc3QgaHVtYW5XaW5zID0gZ2FtZS5jaGVja0ZvcldpbigpXG5cbiAgdXBkYXRlQUlCb2FyZCgpXG4gIGlmIChodW1hbldpbnMpIHtcbiAgICBhaUJvYXJkRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxheWVyU2VsZWN0aW9uRXZ0KVxuICAgIGdhbWUucmVzZXRHYW1lU3RhdGUoKVxuICAgIGFubm91bmNlV2lubmVyKGh1bWFuV2lucylcbiAgICBwbGF5QWdhaW4oKVxuICB9XG4gIGhhbmRsZUFJTW92ZShhaUJvYXJkRGl2KVxufVxuXG5jb25zdCBoYW5kbGVBSU1vdmUgPSAoYWlCb2FyZERpdikgPT4ge1xuICBnYW1lLnBsYXlSb3VuZCgpXG4gIGNvbnN0IGFpV2lucyA9IGdhbWUuY2hlY2tGb3JXaW4oKVxuXG4gIHVwZGF0ZUh1bWFuQm9hcmQoKVxuICBpZiAoYWlXaW5zKSB7XG4gICAgYWlCb2FyZERpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYXllclNlbGVjdGlvbkV2dClcbiAgICBnYW1lLnJlc2V0R2FtZVN0YXRlKClcbiAgICBhbm5vdW5jZVdpbm5lcihhaVdpbnMpXG4gICAgcGxheUFnYWluKClcbiAgfVxufVxuXG5jb25zdCBhbm5vdW5jZVdpbm5lciA9ICh3aW5uZXIpID0+IHtcbiAgY29uc3QgdG9wQmFyUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJylcbiAgY29uc3Qgd2lubmVyTmFtZSA9IHdpbm5lci5nZXROYW1lKClcbiAgdG9wQmFyUGFyYS50ZXh0Q29udGVudCA9IGAke3dpbm5lck5hbWV9IHdpbidzIWBcbn1cblxuY29uc3QgcGxheUFnYWluID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyJylcbiAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgcGxheUFnYWluQnRuLnRleHRDb250ZW50ID0gJ1BsYXkgYWdhaW4nXG4gIHRvcEJhckRpdi5hcHBlbmRDaGlsZChwbGF5QWdhaW5CdG4pXG4gIHBsYXlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0TmV3R2FtZSlcbn1cblxuY29uc3Qgc3RhcnROZXdHYW1lID0gKCkgPT4ge1xuICBjb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyQ29udGFpbmVyJylcbiAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckNvbnRhaW5lciA+IGJ1dHRvbicpXG4gIHRvcEJhckRpdi5yZW1vdmVDaGlsZChwbGF5QWdhaW5CdG4pXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3BCYXJDb250YWluZXIgPiBwJykudGV4dENvbnRlbnQgPSAnJ1xuICBkaXNwbGF5Q29udHJvbGxlcigpXG59XG5cbi8vIGNvbnN0IGhhbmRsZVBsYXllclNlbGV0aW9uXG5cbmV4cG9ydCB7IHJlbmRlclBsYXllckJvYXJkLCByZW5kZXJBSUJvYXJkLCBkaXNwbGF5Q29udHJvbGxlciwgcHJlR2FtZVNldHVwIH1cbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4uL2ZhY3Rvcmllcy9HYW1lYm9hcmQnXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi9mYWN0b3JpZXMvUGxheWVyJ1xuaW1wb3J0IHsgcmV0dXJuUmFuZG9tQUlCb2FyZCB9IGZyb20gJy4uL2hlbHBlcnMvcm90YXRlQUlCb2FyZHMnXG5cbmNvbnN0IGdhbWVDb250cm9sbGVyID0gKCkgPT4ge1xuICAvLyBDcmVhdGUgdHdvIGdhbWUgYm9hcmRzXG4gIGNvbnN0IGh1bWFuQm9hcmQgPSBHYW1lYm9hcmQoKVxuICBodW1hbkJvYXJkLmNyZWF0ZUdhbWVCb2FyZCgpXG5cbiAgY29uc3QgYWlCb2FyZCA9IEdhbWVib2FyZCgpXG4gIGFpQm9hcmQuY3JlYXRlR2FtZUJvYXJkKClcblxuICBjb25zdCBwbGFjZUNhcnJpZXJTaGlwID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgICBsZXQgY2FycmllclBsYWNlZCA9IHRydWVcblxuICAgIGNvbnN0IGNhcnJpZXJBcnIgPSBkZXRlcm1pbmVDYXJyaWVyQXJyQ29vcmRzKFxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgICAgIGNvb3JkaW5hdGVcbiAgICApXG5cbiAgICBjb25zdCBzaGlwUGxhY2VkID0gaHVtYW5Cb2FyZC5wbGFjZVNoaXAoY2FycmllckFycilcbiAgICBpZiAoIXNoaXBQbGFjZWQpIHtcbiAgICAgIGNhcnJpZXJQbGFjZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIGNhcnJpZXJQbGFjZWRcbiAgICB9XG5cbiAgICByZXR1cm4gY2FycmllclBsYWNlZFxuICB9XG5cbiAgY29uc3QgZGV0ZXJtaW5lQ2FycmllckFyckNvb3JkcyA9IChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLCBjb29yZGluYXRlKSA9PiB7XG4gICAgY29uc3QgY2FycmllckFyciA9IFtdXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGNhcnJpZXJBcnIucHVzaChjb29yZGluYXRlKVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cbiAgICAgICAgY2FycmllckFyci5wdXNoKGNvb3JkKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGNhcnJpZXJBcnIucHVzaChjb29yZGluYXRlKVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBbKCtjb29yZGluYXRlWzBdIC0gaSkudG9TdHJpbmcoKSwgY29vcmRpbmF0ZVsxXV1cbiAgICAgICAgY2FycmllckFyci5wdXNoKGNvb3JkKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2FycmllckFyclxuICB9XG5cbiAgY29uc3QgcGxhY2VCYXR0bGVTaGlwID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgICBsZXQgYmF0dGxlc2hpcFBsYWNlZCA9IHRydWVcbiAgICBjb25zdCBiYXR0bGVzaGlwQXJyID0gZGV0ZXJtaW5lQmF0dGxlc2hpcEFyckNvb3JkcyhcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXG4gICAgICBjb29yZGluYXRlXG4gICAgKVxuXG4gICAgY29uc3Qgc2hpcFBsYWNlZCA9IGh1bWFuQm9hcmQucGxhY2VTaGlwKGJhdHRsZXNoaXBBcnIpXG4gICAgaWYgKCFzaGlwUGxhY2VkKSB7XG4gICAgICBiYXR0bGVzaGlwUGxhY2VkID0gZmFsc2VcbiAgICAgIHJldHVybiBiYXR0bGVzaGlwUGxhY2VkXG4gICAgfVxuXG4gICAgcmV0dXJuIGJhdHRsZXNoaXBQbGFjZWRcbiAgfVxuXG4gIGNvbnN0IGRldGVybWluZUJhdHRsZXNoaXBBcnJDb29yZHMgPSAoXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgICBjb29yZGluYXRlXG4gICkgPT4ge1xuICAgIGNvbnN0IGJhdHRsZXNoaXBBcnIgPSBbXVxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBiYXR0bGVzaGlwQXJyLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gW2Nvb3JkaW5hdGVbMF0sICgrY29vcmRpbmF0ZVsxXSArIGkpLnRvU3RyaW5nKCldXG4gICAgICAgIGJhdHRsZXNoaXBBcnIucHVzaChjb29yZClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBiYXR0bGVzaGlwQXJyLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gWygrY29vcmRpbmF0ZVswXSAtIGkpLnRvU3RyaW5nKCksIGNvb3JkaW5hdGVbMV1dXG4gICAgICAgIGJhdHRsZXNoaXBBcnIucHVzaChjb29yZClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJhdHRsZXNoaXBBcnJcbiAgfVxuXG4gIGNvbnN0IHBsYWNlQ3J1aXNlclNoaXAgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xuICAgIGxldCBjcnVpc2VyUGxhY2VkID0gdHJ1ZVxuICAgIGNvbnN0IGNydWlzZXJBcnIgPSBkZXRlcm1pbmVDcnVpc2VyQXJyQ29vcmRzKFxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgICAgIGNvb3JkaW5hdGVcbiAgICApXG5cbiAgICBjb25zdCBzaGlwUGxhY2VkID0gaHVtYW5Cb2FyZC5wbGFjZVNoaXAoY3J1aXNlckFycilcbiAgICBpZiAoIXNoaXBQbGFjZWQpIHtcbiAgICAgIGNydWlzZXJQbGFjZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIGNydWlzZXJQbGFjZWRcbiAgICB9XG5cbiAgICByZXR1cm4gY3J1aXNlclBsYWNlZFxuICB9XG5cbiAgY29uc3QgZGV0ZXJtaW5lQ3J1aXNlckFyckNvb3JkcyA9IChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uLCBjb29yZGluYXRlKSA9PiB7XG4gICAgY29uc3QgY3J1aXNlckFyciA9IFtdXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGNydWlzZXJBcnIucHVzaChjb29yZGluYXRlKVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cbiAgICAgICAgY3J1aXNlckFyci5wdXNoKGNvb3JkKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGNydWlzZXJBcnIucHVzaChjb29yZGluYXRlKVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBbKCtjb29yZGluYXRlWzBdIC0gaSkudG9TdHJpbmcoKSwgY29vcmRpbmF0ZVsxXV1cbiAgICAgICAgY3J1aXNlckFyci5wdXNoKGNvb3JkKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3J1aXNlckFyclxuICB9XG5cbiAgY29uc3QgcGxhY2VTdWJtYXJpbmVTaGlwID0gKGNvb3JkaW5hdGUsIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pID0+IHtcbiAgICBsZXQgc3VibWFyaW5lUGxhY2VkID0gdHJ1ZVxuICAgIGNvbnN0IHN1Ym1hcmluZUFyciA9IGRldGVybWluZVN1Ym1hcmluZUFyckNvb3JkcyhcbiAgICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXG4gICAgICBjb29yZGluYXRlXG4gICAgKVxuXG4gICAgY29uc3Qgc2hpcFBsYWNlZCA9IGh1bWFuQm9hcmQucGxhY2VTaGlwKHN1Ym1hcmluZUFycilcbiAgICBpZiAoIXNoaXBQbGFjZWQpIHtcbiAgICAgIHN1Ym1hcmluZVBsYWNlZCA9IGZhbHNlXG4gICAgICByZXR1cm4gc3VibWFyaW5lUGxhY2VkXG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Ym1hcmluZVBsYWNlZFxuICB9XG5cbiAgY29uc3QgZGV0ZXJtaW5lU3VibWFyaW5lQXJyQ29vcmRzID0gKFxuICAgIGhvcml6b250YWxTaGlwT3JpZW50YXRpb24sXG4gICAgY29vcmRpbmF0ZVxuICApID0+IHtcbiAgICBjb25zdCBzdWJtYXJpbmVBcnIgPSBbXVxuICAgIGlmIChob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBzdWJtYXJpbmVBcnIucHVzaChjb29yZGluYXRlKVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBbY29vcmRpbmF0ZVswXSwgKCtjb29yZGluYXRlWzFdICsgaSkudG9TdHJpbmcoKV1cbiAgICAgICAgc3VibWFyaW5lQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikge1xuICAgICAgc3VibWFyaW5lQXJyLnB1c2goY29vcmRpbmF0ZSlcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gWygrY29vcmRpbmF0ZVswXSAtIGkpLnRvU3RyaW5nKCksIGNvb3JkaW5hdGVbMV1dXG4gICAgICAgIHN1Ym1hcmluZUFyci5wdXNoKGNvb3JkKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3VibWFyaW5lQXJyXG4gIH1cblxuICBjb25zdCBwbGFjZURlc3Ryb3llclNoaXAgPSAoY29vcmRpbmF0ZSwgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbikgPT4ge1xuICAgIGxldCBkZXN0cm95ZXJQbGFjZWQgPSB0cnVlXG4gICAgY29uc3QgZGVzdHJveWVyQXJyID0gZGV0ZXJtaW5lRGVzdHJveWVyQXJyQ29vcmRzKFxuICAgICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgICAgIGNvb3JkaW5hdGVcbiAgICApXG5cbiAgICBjb25zdCBzaGlwUGxhY2VkID0gaHVtYW5Cb2FyZC5wbGFjZVNoaXAoZGVzdHJveWVyQXJyKVxuICAgIGlmICghc2hpcFBsYWNlZCkge1xuICAgICAgZGVzdHJveWVyUGxhY2VkID0gZmFsc2VcbiAgICAgIHJldHVybiBkZXN0cm95ZXJQbGFjZWRcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzdHJveWVyUGxhY2VkXG4gIH1cblxuICBjb25zdCBkZXRlcm1pbmVEZXN0cm95ZXJBcnJDb29yZHMgPSAoXG4gICAgaG9yaXpvbnRhbFNoaXBPcmllbnRhdGlvbixcbiAgICBjb29yZGluYXRlXG4gICkgPT4ge1xuICAgIGNvbnN0IGRlc3Ryb3llckFyciA9IFtdXG4gICAgaWYgKGhvcml6b250YWxTaGlwT3JpZW50YXRpb24pIHtcbiAgICAgIGRlc3Ryb3llckFyci5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDI7IGkrKykge1xuICAgICAgICBjb25zdCBjb29yZCA9IFtjb29yZGluYXRlWzBdLCAoK2Nvb3JkaW5hdGVbMV0gKyBpKS50b1N0cmluZygpXVxuICAgICAgICBkZXN0cm95ZXJBcnIucHVzaChjb29yZClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uKSB7XG4gICAgICBkZXN0cm95ZXJBcnIucHVzaChjb29yZGluYXRlKVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBbKCtjb29yZGluYXRlWzBdIC0gaSkudG9TdHJpbmcoKSwgY29vcmRpbmF0ZVsxXV1cbiAgICAgICAgZGVzdHJveWVyQXJyLnB1c2goY29vcmQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZXN0cm95ZXJBcnJcbiAgfVxuXG4gIGNvbnN0IHBsYWNlQUlTaGlwcyA9ICgpID0+IHtcbiAgICBwbGFjZVNoaXBzKGFpQm9hcmQsIHJldHVyblJhbmRvbUFJQm9hcmQoKSlcbiAgfVxuXG4gIGNvbnN0IHBsYXllcnMgPSB7fVxuXG4gIGNvbnN0IGdldFBsYXllcnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHBsYXllcnNcbiAgfVxuXG4gIGNvbnN0IGh1bWFuUGxheWVyID0gUGxheWVyKCdIdW1hbicsIGZhbHNlKVxuICBjb25zdCBhaVBsYXllciA9IFBsYXllcignQUknLCB0cnVlKVxuICBwbGF5ZXJzLmh1bWFuID0gaHVtYW5QbGF5ZXJcbiAgcGxheWVycy5BSSA9IGFpUGxheWVyXG5cbiAgbGV0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzLmh1bWFuXG5cbiAgY29uc3QgZ2V0Q3VycmVudFBsYXllciA9ICgpID0+IHtcbiAgICByZXR1cm4gY3VycmVudFBsYXllclxuICB9XG5cbiAgY29uc3QgcGxheVJvdW5kID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgICBpZiAoY3VycmVudFBsYXllci5nZXROYW1lKCkgPT09IHBsYXllcnMuaHVtYW4uZ2V0TmFtZSgpKSB7XG4gICAgICBhaUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSlcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpID09PSBwbGF5ZXJzLkFJLmdldE5hbWUoKSkge1xuICAgICAgY29uc3QgYXZhaWxhYmxlTW92ZXMgPSBodW1hbkJvYXJkLmdldEFJQXZhaWxhYmxlTW92ZXMoKVxuICAgICAgY29uc3QgcmFuZG9tTW92ZSA9IGN1cnJlbnRQbGF5ZXIubWFrZVJhbmRvbU1vdmUodHJ1ZSwgYXZhaWxhYmxlTW92ZXMpXG4gICAgICBodW1hbkJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tTW92ZSlcbiAgICAgIGh1bWFuQm9hcmQucmVtb3ZlTGFzdEFJTW92ZShyYW5kb21Nb3ZlKVxuICAgIH1cblxuICAgIHN3aXRjaFBsYXllcigpXG4gICAgY29uc29sZS5sb2coY3VycmVudFBsYXllci5nZXROYW1lKCkpXG4gIH1cblxuICBjb25zdCBzd2l0Y2hQbGF5ZXIgPSAoKSA9PiB7XG4gICAgY3VycmVudFBsYXllciA9XG4gICAgICBjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5odW1hbi5nZXROYW1lKClcbiAgICAgICAgPyAoY3VycmVudFBsYXllciA9IHBsYXllcnMuQUkpXG4gICAgICAgIDogKGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzLmh1bWFuKVxuICB9XG5cbiAgY29uc3QgY2hlY2tGb3JXaW4gPSAoKSA9PiB7XG4gICAgbGV0IHdpbm5lclxuICAgIGlmIChcbiAgICAgIGN1cnJlbnRQbGF5ZXIuZ2V0TmFtZSgpID09PSBwbGF5ZXJzLmh1bWFuLmdldE5hbWUoKSAmJlxuICAgICAgYWlCb2FyZC5hbGxTaGlwc1N1bmsoKVxuICAgICkge1xuICAgICAgd2lubmVyID0gY3VycmVudFBsYXllclxuICAgICAgcmV0dXJuIHdpbm5lclxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50UGxheWVyLmdldE5hbWUoKSA9PT0gcGxheWVycy5BSS5nZXROYW1lKCkgJiZcbiAgICAgIGh1bWFuQm9hcmQuYWxsU2hpcHNTdW5rKClcbiAgICApIHtcbiAgICAgIHdpbm5lciA9IGN1cnJlbnRQbGF5ZXJcbiAgICAgIHJldHVybiB3aW5uZXJcbiAgICB9XG4gICAgcmV0dXJuIHdpbm5lclxuICB9XG5cbiAgY29uc3QgcmVzZXRHYW1lU3RhdGUgPSAod2lubmVyKSA9PiB7XG4gICAgaHVtYW5Cb2FyZC5jbGVhckdhbWVCb2FyZCgpXG4gICAgYWlCb2FyZC5jbGVhckdhbWVCb2FyZCgpXG4gICAgaHVtYW5Cb2FyZC5jcmVhdGVHYW1lQm9hcmQoKVxuICAgIGFpQm9hcmQuY3JlYXRlR2FtZUJvYXJkKClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0SHVtYW5Cb2FyZDogaHVtYW5Cb2FyZC5nZXRCb2FyZCxcbiAgICBnZXRBSUJvYXJkOiBhaUJvYXJkLmdldEJvYXJkLFxuICAgIGdldEFJQm9hcmRPYmo6IGFpQm9hcmQsXG4gICAgZ2V0SHVtYW5Cb2FyZE9iajogaHVtYW5Cb2FyZCxcbiAgICBzd2l0Y2hQbGF5ZXIsXG4gICAgcGxheVJvdW5kLFxuICAgIGdldEN1cnJlbnRQbGF5ZXIsXG4gICAgcmVzZXRHYW1lU3RhdGUsXG4gICAgY2hlY2tGb3JXaW4sXG4gICAgZ2V0UGxheWVycyxcbiAgICBwbGFjZUFJU2hpcHMsXG4gICAgcGxhY2VDYXJyaWVyU2hpcCxcbiAgICBwbGFjZUJhdHRsZVNoaXAsXG4gICAgcGxhY2VDcnVpc2VyU2hpcCxcbiAgICBwbGFjZVN1Ym1hcmluZVNoaXAsXG4gICAgcGxhY2VEZXN0cm95ZXJTaGlwXG4gIH1cbn1cblxuZXhwb3J0IHsgZ2FtZUNvbnRyb2xsZXIgfVxuXG5jb25zdCBwbGFjZVNoaXBzID0gKGJvYXJkLCBjb29yZGluYXRlc09iaikgPT4ge1xuICBjb25zdCBzaGlwQ29vcmRpbmF0ZXNBcnIgPSBPYmplY3QudmFsdWVzKGNvb3JkaW5hdGVzT2JqKVxuICBzaGlwQ29vcmRpbmF0ZXNBcnIuZm9yRWFjaCgoc2hpcENvb3JkaW5hdGVzKSA9PiB7XG4gICAgYm9hcmQucGxhY2VTaGlwKHNoaXBDb29yZGluYXRlcylcbiAgfSlcbn1cblxuLyogY29uc3QgcGxhY2VFYWNoSHVtYW5TaGlwID0gKGNvb3JkaW5hdGUpID0+IHtcbiAgaHVtYW5Cb2FyZC5wbGFjZVNoaXAoY29vcmRpbmF0ZSlcbn0gKi9cbiIsImltcG9ydCB7IGFycmF5c0FyZUVxdWFsIH0gZnJvbSAnLi4vaGVscGVycy9hcnJheXNBcmVFcXVhbCdcbmltcG9ydCB7IFNoaXAgfSBmcm9tICcuL1NoaXAnXG5cbmV4cG9ydCBjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcbiAgbGV0IGJvYXJkID0gW11cbiAgY29uc3Qgc2hpcE9iamVjdHMgPSBbXVxuICBjb25zdCBtaXNzZWRTaG90cyA9IFtdXG4gIGNvbnN0IGFpQXZhaWxhYmxlTW92ZXMgPSBbXVxuICBjb25zdCBzdWNjZXNzZnVsU2hvdHMgPSBbXVxuICBjb25zdCByb3dzID0gOVxuICBjb25zdCBjb2x1bW5zID0gOVxuXG4gIGNvbnN0IGNyZWF0ZUdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICBib2FyZCA9IFtdXG4gICAgZm9yIChsZXQgaSA9IHJvd3M7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBib2FyZFtpXSA9IFtdXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgYm9hcmRbaV0ucHVzaCh1bmRlZmluZWQpXG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBbaSwgal1cbiAgICAgICAgYWlBdmFpbGFibGVNb3Zlcy5wdXNoKGNvb3JkaW5hdGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gY2hlY2tzIGlmIGNvb3JkaW5hdGVzIGZvciBzaGlwIGlzIG9uIHRoZVxuICAvLyBnYW1lIGJvYXJkXG4gIGNvbnN0IHZhbGlkYXRlQ29vcmRpbmF0ZXMgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBsZXQgdmFsaWRDb29yZGluYXRlcyA9IHRydWVcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBjb25zdCByb3cgPSBjb29yZGluYXRlWzBdXG4gICAgICBjb25zdCBjb2x1bW4gPSBjb29yZGluYXRlWzFdXG4gICAgICBpZiAocm93ID4gOSB8fCByb3cgPCAwKSB7XG4gICAgICAgIHZhbGlkQ29vcmRpbmF0ZXMgPSBmYWxzZVxuICAgICAgICByZXR1cm4gdmFsaWRDb29yZGluYXRlc1xuICAgICAgfSBlbHNlIGlmIChjb2x1bW4gPiA5IHx8IGNvbHVtbiA8IDApIHtcbiAgICAgICAgdmFsaWRDb29yZGluYXRlcyA9IGZhbHNlXG4gICAgICAgIHJldHVybiB2YWxpZENvb3JkaW5hdGVzXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiB2YWxpZENvb3JkaW5hdGVzXG4gIH1cblxuICAvLyBjaGVja3MgaWYgc2hpcCBjb29yZGluYXRlcyBvdmVybGFwIHdpdGggYWxyZWFkeVxuICAvLyBwbGFjZWQgc2hpcCBjb29yZGluYXRlcyBmb3IgdGhlIHNhbWUgc2hpcFxuICBjb25zdCBjaGVja1NlbGZPdmVybGFwID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgbGV0IGNvb3JkaW5hdGVzT3ZlcmxhcCA9IGZhbHNlXG4gICAgbGV0IHByZXZDb29yZGluYXRlXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgaWYgKGFycmF5c0FyZUVxdWFsKHByZXZDb29yZGluYXRlLCBjb29yZGluYXRlKSkge1xuICAgICAgICAgIGNvb3JkaW5hdGVzT3ZlcmxhcCA9IHRydWVcbiAgICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXNPdmVybGFwXG4gICAgICAgIH1cbiAgICAgICAgcHJldkNvb3JkaW5hdGUgPSBjb29yZGluYXRlXG4gICAgICB9XG4gICAgICBwcmV2Q29vcmRpbmF0ZSA9IGNvb3JkaW5hdGVcbiAgICB9KVxuXG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzT3ZlcmxhcFxuICB9XG5cbiAgLy8gU2hvdWxkIHByZXZlbnQgYSBzaGlwIGZyb20gYmVpbmdcbiAgLy8gcGxhY2VkIG9uIHRvcCBvZiBhbm90aGVyIHNoaXBcbiAgY29uc3QgY2hlY2tPdmVybGFwV2l0aE90aGVyU2hpcHMgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBsZXQgc2hpcHNPdmVybGFwID0gZmFsc2VcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBjb25zdCByb3cgPSBjb29yZGluYXRlWzBdXG4gICAgICBjb25zdCBjb2x1bW4gPSBjb29yZGluYXRlWzFdXG4gICAgICBjb25zdCBib2FyZENlbGwgPSBib2FyZFtyb3ddW2NvbHVtbl1cbiAgICAgIGlmICh0eXBlb2YgYm9hcmRDZWxsID09PSAnb2JqZWN0Jykge1xuICAgICAgICBzaGlwc092ZXJsYXAgPSB0cnVlXG4gICAgICAgIHJldHVybiBzaGlwc092ZXJsYXBcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHNoaXBzT3ZlcmxhcFxuICB9XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgbGV0IHNoaXBQbGFjZWQgPSB0cnVlXG5cbiAgICBjb25zdCBsZWdhbENvb3JkaW5hdGVzID0gdmFsaWRhdGVDb29yZGluYXRlcyhjb29yZGluYXRlcylcbiAgICBpZiAoIWxlZ2FsQ29vcmRpbmF0ZXMpIHtcbiAgICAgIHNoaXBQbGFjZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIHNoaXBQbGFjZWRcbiAgICB9XG5cbiAgICBjb25zdCBvdmVybGFwcGluZ0Nvb3JkaW5hdGVzID0gY2hlY2tTZWxmT3ZlcmxhcChjb29yZGluYXRlcylcbiAgICBpZiAob3ZlcmxhcHBpbmdDb29yZGluYXRlcykge1xuICAgICAgc2hpcFBsYWNlZCA9IGZhbHNlXG4gICAgICByZXR1cm4gc2hpcFBsYWNlZFxuICAgIH1cblxuICAgIGNvbnN0IHNoaXBPdmVybGFwcGluZyA9IGNoZWNrT3ZlcmxhcFdpdGhPdGhlclNoaXBzKGNvb3JkaW5hdGVzKVxuICAgIGlmIChzaGlwT3ZlcmxhcHBpbmcpIHtcbiAgICAgIHNoaXBQbGFjZWQgPSBmYWxzZVxuICAgICAgcmV0dXJuIHNoaXBQbGFjZWRcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gY29vcmRpbmF0ZXMubGVuZ3RoXG4gICAgY29uc3Qgc2hpcE9iamVjdCA9IFNoaXAoc2hpcExlbmd0aCwgMCwgZmFsc2UpXG4gICAgc2hpcE9iamVjdHMucHVzaChzaGlwT2JqZWN0KVxuXG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gY29vcmRpbmF0ZVswXVxuICAgICAgY29uc3QgY29sdW1uID0gY29vcmRpbmF0ZVsxXVxuICAgICAgYm9hcmRbcm93XVtjb2x1bW5dID0gc2hpcE9iamVjdFxuICAgIH0pXG5cbiAgICByZXR1cm4gc2hpcFBsYWNlZFxuICB9XG5cbiAgLy8gcHJldmVudHMgaHVtYW4gcGxheWVyIGZyb20gYXR0YWNraW5nIHByZXZpb3VzbHlcbiAgLy8gYXR0YWNrZWQgY29vcmRpbmF0ZVxuICBjb25zdCBwcmV2ZW50U2FtZUF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gICAgbGV0IGFscmVhZHlBdHRhY2tlZCA9IGZhbHNlXG4gICAgc3VjY2Vzc2Z1bFNob3RzLmZvckVhY2goKHNob3QpID0+IHtcbiAgICAgIGlmIChhcnJheXNBcmVFcXVhbChjb29yZGluYXRlLCBzaG90KSkge1xuICAgICAgICBhbHJlYWR5QXR0YWNrZWQgPSB0cnVlXG4gICAgICAgIHJldHVybiBwcmV2ZW50U2FtZUF0dGFja1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBtaXNzZWRTaG90cy5mb3JFYWNoKChzaG90KSA9PiB7XG4gICAgICBpZiAoYXJyYXlzQXJlRXF1YWwoY29vcmRpbmF0ZSwgc2hvdCkpIHtcbiAgICAgICAgYWxyZWFkeUF0dGFja2VkID0gdHJ1ZVxuICAgICAgICByZXR1cm4gcHJldmVudFNhbWVBdHRhY2tcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBhbHJlYWR5QXR0YWNrZWRcbiAgfVxuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBjb25zdCByb3cgPSBjb29yZGluYXRlc1swXVxuICAgIGNvbnN0IGNvbHVtbiA9IGNvb3JkaW5hdGVzWzFdXG4gICAgY29uc3QgYm9hcmRDZWxsID0gYm9hcmRbcm93XVtjb2x1bW5dXG4gICAgY29uc3Qgc2hpcE9iaiA9IGJvYXJkQ2VsbFxuXG4gICAgLy8gTmVlZCB0byBjaGVjayBpZiBuZXcgY29vcmRpbmF0ZSBpcyBhbHJlYWR5XG4gICAgLy8gaW5zaWRlIHN1Y2Nlc3NmdWxTaG90cyBvciBtaXNzZWRTaG90c1xuICAgIGNvbnN0IGFscmVhZHlBdHRhY2tlZCA9IHByZXZlbnRTYW1lQXR0YWNrKGNvb3JkaW5hdGVzKVxuICAgIGlmIChhbHJlYWR5QXR0YWNrZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYm9hcmRDZWxsID09PSAnb2JqZWN0Jykge1xuICAgICAgc2hpcE9iai5oaXQoKVxuICAgICAgc3VjY2Vzc2Z1bFNob3RzLnB1c2goY29vcmRpbmF0ZXMpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYm9hcmRDZWxsICE9PSAnb2JqZWN0Jykge1xuICAgICAgbWlzc2VkU2hvdHMucHVzaChjb29yZGluYXRlcylcbiAgICB9XG4gIH1cblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgbGV0IGV2ZXJ5U2hpcFNhbmsgPSB0cnVlXG4gICAgc2hpcE9iamVjdHMuZm9yRWFjaCgoc2hpcE9iaikgPT4ge1xuICAgICAgaWYgKCFzaGlwT2JqLmhhc0JlZW5TdW5rKCkpIHtcbiAgICAgICAgZXZlcnlTaGlwU2FuayA9IGZhbHNlXG4gICAgICAgIHJldHVybiBldmVyeVNoaXBTYW5rXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZXZlcnlTaGlwU2Fua1xuICB9XG5cbiAgY29uc3QgcmVtb3ZlTGFzdEFJTW92ZSA9IChyYW5kb21Nb3ZlKSA9PiB7XG4gICAgYWlBdmFpbGFibGVNb3Zlcy5mb3JFYWNoKChtb3ZlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGFycmF5c0FyZUVxdWFsKG1vdmUsIHJhbmRvbU1vdmUpKSB7XG4gICAgICAgIGFpQXZhaWxhYmxlTW92ZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBjbGVhckdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICBzaGlwT2JqZWN0cy5sZW5ndGggPSAwXG4gICAgbWlzc2VkU2hvdHMubGVuZ3RoID0gMFxuICAgIGFpQXZhaWxhYmxlTW92ZXMubGVuZ3RoID0gMFxuICAgIHN1Y2Nlc3NmdWxTaG90cy5sZW5ndGggPSAwXG4gIH1cblxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IHtcbiAgICByZXR1cm4gYm9hcmRcbiAgfVxuXG4gIGNvbnN0IGdldE1pc3NlZFNob3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBtaXNzZWRTaG90c1xuICB9XG5cbiAgY29uc3QgZ2V0U3VjY2Vzc2Z1bFNob3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBzdWNjZXNzZnVsU2hvdHNcbiAgfVxuXG4gIGNvbnN0IGdldFNoaXBPYmplY3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBzaGlwT2JqZWN0c1xuICB9XG5cbiAgY29uc3QgZ2V0QUlBdmFpbGFibGVNb3ZlcyA9ICgpID0+IHtcbiAgICByZXR1cm4gYWlBdmFpbGFibGVNb3Zlc1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVHYW1lQm9hcmQsXG4gICAgZ2V0Qm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgY2xlYXJHYW1lQm9hcmQsXG4gICAgZ2V0TWlzc2VkU2hvdHMsXG4gICAgZ2V0U3VjY2Vzc2Z1bFNob3RzLFxuICAgIGFsbFNoaXBzU3VuayxcbiAgICBnZXRBSUF2YWlsYWJsZU1vdmVzLFxuICAgIHZhbGlkYXRlQ29vcmRpbmF0ZXMsXG4gICAgcHJldmVudFNhbWVBdHRhY2ssXG4gICAgY2hlY2tTZWxmT3ZlcmxhcCxcbiAgICBnZXRTaGlwT2JqZWN0cyxcbiAgICByZW1vdmVMYXN0QUlNb3ZlLFxuICAgIGNoZWNrT3ZlcmxhcFdpdGhPdGhlclNoaXBzXG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBQbGF5ZXIgPSAobmFtZSwgaXNBSSkgPT4ge1xuICAvLyBVc2VkIHRvIG1ha2UgQUkgc2VsZWN0IHJhbmRvbSwgbGVnYWwgY29vcmRpbmF0ZVxuICAvLyBvbiBwbGF5ZXJzIGdhbWUgYm9hcmRcbiAgY29uc3QgbWFrZVJhbmRvbU1vdmUgPSAoaXNBSSwgYXZhaWxhYmxlTW92ZXMpID0+IHtcbiAgICBpZiAoIWlzQUkgfHwgYXZhaWxhYmxlTW92ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgY29uc3QgYXZhaWxhYmxlTW92ZXNMZW5ndGggPSBhdmFpbGFibGVNb3Zlcy5sZW5ndGhcbiAgICBjb25zdCByYW5kb21BcnJJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZU1vdmVzTGVuZ3RoKVxuICAgIGNvbnN0IHJhbmRvbUNvb3JkaW5hdGUgPSBhdmFpbGFibGVNb3Zlc1tyYW5kb21BcnJJbmRleF1cblxuICAgIHJldHVybiByYW5kb21Db29yZGluYXRlXG4gIH1cblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgIHJldHVybiBuYW1lXG4gIH1cblxuICByZXR1cm4geyBtYWtlUmFuZG9tTW92ZSwgZ2V0TmFtZSB9XG59XG4iLCJleHBvcnQgY29uc3QgU2hpcCA9IChsZW5ndGgsIG51bU9mSGl0cywgaXNTdW5rKSA9PiB7XG4gIC8vIEluY3JlYXNlIG51bWJlciBvZiBoaXRzIGluIHNoaXAgYnkgMVxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaWYgKG51bU9mSGl0cyA9PT0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBudW1PZkhpdHMrK1xuICAgIHJldHVybiBudW1PZkhpdHNcbiAgfVxuXG4gIC8vIERldGVybWluZSBpZiB0aGUgc2hpcCBvYmplY3QgaGFzIGJlZW4gc3Vua1xuICBjb25zdCBoYXNCZWVuU3VuayA9ICgpID0+IHtcbiAgICBsZXQgaXNTdW5rID0gZmFsc2VcblxuICAgIGlmIChsZW5ndGggPT09IG51bU9mSGl0cykge1xuICAgICAgaXNTdW5rID0gdHJ1ZVxuICAgICAgcmV0dXJuIGlzU3Vua1xuICAgIH1cblxuICAgIHJldHVybiBpc1N1bmtcbiAgfVxuXG4gIGNvbnN0IGdldE51bU9mSGl0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gbnVtT2ZIaXRzXG4gIH1cblxuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHsgaGl0LCBoYXNCZWVuU3VuaywgZ2V0TnVtT2ZIaXRzLCBnZXRMZW5ndGggfVxufVxuIiwiZXhwb3J0IGNvbnN0IGFycmF5c0FyZUVxdWFsID0gKGFycjEsIGFycjIpID0+IHtcbiAgaWYgKGFycjEgPT09IG51bGwgfHwgYXJyMiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGlmIChhcnIxLmxlbmd0aCAhPT0gYXJyMi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycjEubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyMVtpXSAhPT0gYXJyMltpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG4iLCJleHBvcnQgY29uc3QgcmV0dXJuUmFuZG9tQUlCb2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYWlCb2FyZHMgPSBbYWlTaGlwQ29vcmRzT25lLCBhaVNoaXBDb29yZHNUd28sIGFpU2hpcENvb3Jkc1RocmVlXVxuICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXG4gIGNvbnN0IGNob3NlbkFJQm9hcmQgPSBPYmplY3QudmFsdWVzKGFpQm9hcmRzW3JhbmRvbUluZGV4XSlcbiAgcmV0dXJuIGNob3NlbkFJQm9hcmRcbn1cblxuY29uc3QgYWlTaGlwQ29vcmRzT25lID0ge1xuICBjYXJyaWVyOiBbXG4gICAgWzksIDBdLFxuICAgIFs5LCAxXSxcbiAgICBbOSwgMl0sXG4gICAgWzksIDNdLFxuICAgIFs5LCA0XVxuICBdLFxuICBiYXR0bGVzaGlwOiBbXG4gICAgWzUsIDVdLFxuICAgIFs2LCA1XSxcbiAgICBbNywgNV0sXG4gICAgWzgsIDVdXG4gIF0sXG4gIGNydWlzZXI6IFtcbiAgICBbMCwgNl0sXG4gICAgWzEsIDZdLFxuICAgIFsyLCA2XVxuICBdLFxuICBzdWJtYXJpbmU6IFtcbiAgICBbMywgOF0sXG4gICAgWzQsIDhdLFxuICAgIFs1LCA4XVxuICBdLFxuICBkZXN0cm95ZXI6IFtcbiAgICBbMCwgOV0sXG4gICAgWzEsIDldXG4gIF1cbn1cblxuY29uc3QgYWlTaGlwQ29vcmRzVHdvID0ge1xuICBjYXJyaWVyOiBbXG4gICAgWzAsIDBdLFxuICAgIFswLCAxXSxcbiAgICBbMCwgMl0sXG4gICAgWzAsIDNdLFxuICAgIFswLCA0XVxuICBdLFxuICBiYXR0bGVzaGlwOiBbXG4gICAgWzksIDVdLFxuICAgIFs5LCA2XSxcbiAgICBbOSwgN10sXG4gICAgWzksIDhdXG4gIF0sXG4gIGNydWlzZXI6IFtcbiAgICBbMiwgMl0sXG4gICAgWzMsIDJdLFxuICAgIFs0LCAyXVxuICBdLFxuICBzdWJtYXJpbmU6IFtcbiAgICBbNiwgNl0sXG4gICAgWzYsIDddLFxuICAgIFs2LCA4XVxuICBdLFxuICBkZXN0cm95ZXI6IFtcbiAgICBbOCwgMF0sXG4gICAgWzgsIDFdXG4gIF1cbn1cblxuY29uc3QgYWlTaGlwQ29vcmRzVGhyZWUgPSB7XG4gIGNhcnJpZXI6IFtcbiAgICBbNSwgMF0sXG4gICAgWzUsIDFdLFxuICAgIFs1LCAyXSxcbiAgICBbNSwgM10sXG4gICAgWzUsIDRdXG4gIF0sXG4gIGJhdHRsZXNoaXA6IFtcbiAgICBbMCwgOV0sXG4gICAgWzEsIDldLFxuICAgIFsyLCA5XSxcbiAgICBbMywgOV1cbiAgXSxcbiAgY3J1aXNlcjogW1xuICAgIFs3LCA3XSxcbiAgICBbOCwgN10sXG4gICAgWzksIDddXG4gIF0sXG4gIHN1Ym1hcmluZTogW1xuICAgIFsxLCAxXSxcbiAgICBbMiwgMV0sXG4gICAgWzMsIDFdXG4gIF0sXG4gIGRlc3Ryb3llcjogW1xuICAgIFs0LCA0XSxcbiAgICBbNCwgNV1cbiAgXVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC8qIDEgKi9cXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qIEFwcGx5IGJvcmRlciBib3ggdG8gZW50aXJlIGRvY3VtZW50ICovXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gICAqL1xcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqL1xcblxcbmhyIHtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIC8qIDEgKi9cXG4gICAgaGVpZ2h0OiAwO1xcbiAgICAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnByZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gICAgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcblxcbmEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgLyogMSAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgLyogMiAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAgICogYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gICAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuaW5wdXQge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwO1xcbiAgICAvKiAyICovXFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIEdpdmUgaW5wdXQgYW5kIHRleHQgYXJlYSBjb25zaXN0ZW50IGxvb2sgKi9cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHggMCAwIC0xMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQ6IGJvbGQgMC42ZW0gc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgICBjb2xvcjogI2ZmZjsgKi9cXG59XFxuXFxuLyogR2V0cyByaWQgb2YgZGVmYXVsdCBzZWFyY2ggdG8gcmVtb3ZlIHJlc3RyaWN0aW9ucyAqL1xcbmlucHV0W3R5cGU9J3NlYXJjaCddIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyogRml4IGZvciBpbmNvbnNpc3RlbnQgZGlzcGxheSBvZiBjbGVhciBcXFwieFxcXCIgaWNvbiBpbiBzZWFyY2ggaW5wdXRzIGFjcm9zcyBkaWZmZXJlbnQgYnJvd3NlcnMuIFxcbiAgLCB0aGlzIGNvZGUgcmVtb3ZlcyB0aGUgaWNvbiBpbiBFZGdlIGFuZCBDaHJvbWUgd2hlbiB0aGUgaW5wdXQgbG9zZXMgZm9jdXMsIHdoaWxlIGtlZXBpbmcgaXQgdmlzaWJsZSBpbiBTYWZhcmkuICovXFxuaW5wdXRbdHlwZT0nc2VhcmNoJ106bm90KDpmb2N1cywgOmFjdGl2ZSk6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgLyogMSAqL1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPSdidXR0b24nXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT0ncmVzZXQnXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT0nc3VibWl0J106Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAgICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPSdidXR0b24nXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT0ncmVzZXQnXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT0nc3VibWl0J106LW1vei1mb2N1c3Jpbmcge1xcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuZmllbGRzZXQge1xcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxubGVnZW5kIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgLyogMiAqL1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgLyogMSAqL1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDtcXG4gICAgLyogMyAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICAvKiAxICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gICAqL1xcblxcbnByb2dyZXNzIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAgICovXFxuXFxudGV4dGFyZWEge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gICAqL1xcblxcblt0eXBlPSdjaGVja2JveCddLFxcblt0eXBlPSdyYWRpbyddIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICAgKi9cXG5cXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICAgKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gICAgLyogMSAqL1xcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gICAqL1xcblxcblt0eXBlPSdzZWFyY2gnXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAgICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICAgKi9cXG5cXG5kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAgICovXFxuXFxudGVtcGxhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAgICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtJQUNJLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sOEJBQThCO0lBQzlCLE1BQU07QUFDVjs7QUFFQSx3Q0FBd0M7QUFDeEM7SUFDSSxzQkFB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RUo7O0lBRUksc0JBQXNCO0lBQ3RCLE1BQU07SUFDTixZQUFZO0lBQ1osTUFBTTtBQUNWOztBQUVBOztJQUVJOztBQUVKOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7OztJQUdJOztBQUVKO0lBQ0ksNkJBQTZCO0lBQzdCLE1BQU07SUFDTixvQkFBb0I7SUFDcEIsTUFBTTtBQUNWOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBOzs7SUFHSTs7QUFFSjtJQUNJLDBCQUEwQjtJQUMxQixNQUFNO0lBQ04sYUFBYTtJQUNiLE1BQU07QUFDVjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAvKiAxICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKiBBcHBseSBib3JkZXIgYm94IHRvIGVudGlyZSBkb2N1bWVudCAqL1xcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICAgKi9cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICAgKi9cXG5cXG5ociB7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAvKiAxICovXFxuICAgIGhlaWdodDogMDtcXG4gICAgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5wcmUge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5hIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gICAgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gICAqIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgICBmb250LXNpemU6IDc1JTtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICAgIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcblxcbmltZyB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmlucHV0IHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAvKiAxICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgLyogMiAqL1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBHaXZlIGlucHV0IGFuZCB0ZXh0IGFyZWEgY29uc2lzdGVudCBsb29rICovXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDRweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAtMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250OiBib2xkIDAuNmVtIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgLyogYmFja2dyb3VuZDogIzAwMDtcXG4gICAgY29sb3I6ICNmZmY7ICovXFxufVxcblxcbi8qIEdldHMgcmlkIG9mIGRlZmF1bHQgc2VhcmNoIHRvIHJlbW92ZSByZXN0cmljdGlvbnMgKi9cXG5pbnB1dFt0eXBlPSdzZWFyY2gnXSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qIEZpeCBmb3IgaW5jb25zaXN0ZW50IGRpc3BsYXkgb2YgY2xlYXIgXFxcInhcXFwiIGljb24gaW4gc2VhcmNoIGlucHV0cyBhY3Jvc3MgZGlmZmVyZW50IGJyb3dzZXJzLiBcXG4gICwgdGhpcyBjb2RlIHJlbW92ZXMgdGhlIGljb24gaW4gRWRnZSBhbmQgQ2hyb21lIHdoZW4gdGhlIGlucHV0IGxvc2VzIGZvY3VzLCB3aGlsZSBrZWVwaW5nIGl0IHZpc2libGUgaW4gU2FmYXJpLiAqL1xcbmlucHV0W3R5cGU9J3NlYXJjaCddOm5vdCg6Zm9jdXMsIDphY3RpdmUpOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIC8qIDEgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT0nYnV0dG9uJ106Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9J3Jlc2V0J106Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9J3N1Ym1pdCddOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gICAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT0nYnV0dG9uJ106LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9J3Jlc2V0J106LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9J3N1Ym1pdCddOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmZpZWxkc2V0IHtcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmxlZ2VuZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIDEgKi9cXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIC8qIDIgKi9cXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIC8qIDEgKi9cXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIDMgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICAgKi9cXG5cXG5wcm9ncmVzcyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gICAqL1xcblxcbnRleHRhcmVhIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5bdHlwZT0nY2hlY2tib3gnXSxcXG5bdHlwZT0ncmFkaW8nXSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIDEgKi9cXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAgICovXFxuXFxuW3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAgICovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAgIC8qIDEgKi9cXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICAgKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gICAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gICAgLyogMSAqL1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICovXFxuXFxuZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gICAqL1xcblxcbnRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gICAqL1xcblxcbltoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICAgIGNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogODBweDtcXG59XFxuXFxuLmhlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLnRvcEJhckNvbnRhaW5lciB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDc1dnc7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5idXR0b24uc2hpcENlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4jQUlCb2FyZCBidXR0b24sXFxuI3BsYXllckJvYXJkIGJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcblxcbiNib2FyZHNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICB3aWR0aDogOTF2dztcXG59XFxuXFxuLm9yaWVudGF0aW9uVG9nZ2xlQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiNib2FyZHNDb250YWluZXIgcCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyQm9hcmQge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTRweCk7XFxuXFxufVxcblxcbiNBSUJvYXJkIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDU0cHgpO1xcblxcblxcbn1cXG5cXG4vKiBidXR0b24uYm9hcmRDZWxsIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG59ICovXFxuXFxuYnV0dG9uLnNoaXBDZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmJ1dHRvbi5zaGlwSGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCA5NCwgMjIpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztJQUNULHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxvQ0FBb0M7O0FBRXhDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsb0NBQW9DOzs7QUFHeEM7O0FBRUE7OztHQUdHOztBQUVIO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gICAgY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4uaGVhZGVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleDogMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4udG9wQmFyQ29udGFpbmVyIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogNzV2dztcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmJ1dHRvbi5zaGlwQ2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbiNBSUJvYXJkIGJ1dHRvbixcXG4jcGxheWVyQm9hcmQgYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuI2JvYXJkc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBub25lO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIHdpZHRoOiA5MXZ3O1xcbn1cXG5cXG4ub3JpZW50YXRpb25Ub2dnbGVCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI2JvYXJkc0NvbnRhaW5lciBwIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXJCb2FyZCB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1NHB4KTtcXG5cXG59XFxuXFxuI0FJQm9hcmQge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTRweCk7XFxuXFxuXFxufVxcblxcbi8qIGJ1dHRvbi5ib2FyZENlbGwge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbn0gKi9cXG5cXG5idXR0b24uc2hpcENlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuYnV0dG9uLnNoaXBIaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDk0LCAyMik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7XG4gIGRpc3BsYXlDb250cm9sbGVyLFxuICBwcmVHYW1lU2V0dXBcbn0gZnJvbSAnLi9jb250cm9sbGVycy9kaXNwbGF5Q29udHJvbGxlcidcblxuaW1wb3J0ICcuL3N0eWxlcy9ub3JtYWxpemUuY3NzJ1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnXG5cbnByZUdhbWVTZXR1cCgpXG4iXSwibmFtZXMiOlsiZ2FtZUNvbnRyb2xsZXIiLCJnYW1lIiwicHJlR2FtZVNldHVwIiwicmVuZGVyUGxheWVyQm9hcmQiLCJwbGFjZUNhcnJpZXJTaGlwIiwicmVuZGVyQUlCb2FyZCIsImRpc3BsYXlDb250cm9sbGVyIiwicGxhY2VBSVNoaXBzIiwiYWlCb2FyZERpdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwbGF5ZXJzIiwiZ2V0UGxheWVycyIsImFjdGl2ZVBsYXllciIsImdldEN1cnJlbnRQbGF5ZXIiLCJodW1hbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVQbGF5ZXJTZWxlY3Rpb25FdnQiLCJ0b3BCYXJQYXJhIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiaHVtYW5Cb2FyZERpdiIsInRvcEJhckRpdiIsImhvcml6b250YWxTaGlwT3JpZW50YXRpb25TdGF0dXMiLCJvcmllbnRhdGlvblRvZ2dsZUJ0biIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsIm9uY2UiLCJlIiwiaGFuZGxlQ2FycmllclNoaXBQbGFjZW1lbnQiLCJwbGFjZUJhdHRsZVNoaXAiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQmF0dGxlU2hpcFBsYWNlbWVudCIsInBsYWNlQ3J1aXNlciIsImhhbmRsZUNydWlzZXJTaGlwUGxhY2VtZW50IiwicGxhY2VTdWJtYXJpbmUiLCJoYW5kbGVTdWJtYXJpbmVTaGlwUGxhY2VtZW50IiwicGxhY2VEZXN0cm95ZXIiLCJoYW5kbGVEZXN0cm95ZXJTaGlwUGxhY2VtZW50IiwicGxheWVyQm9hcmQiLCJnZXRIdW1hbkJvYXJkIiwicGxheWVyQm9hcmREaXYiLCJpbm5lckhUTUwiLCJpIiwibGVuZ3RoIiwiY3VycmVudFJvdyIsImoiLCJidXR0b24iLCJkYXRhc2V0Iiwicm93IiwiY29sdW1uIiwiYWlCb2FyZCIsImdldEFJQm9hcmQiLCJ1cGRhdGVIdW1hbkJvYXJkIiwiaHVtYW5Cb2FyZCIsIm1pc3NlZFNob3RzIiwiZ2V0SHVtYW5Cb2FyZE9iaiIsImdldE1pc3NlZFNob3RzIiwic3VjY2Vzc2Z1bFNob3RzIiwiZ2V0U3VjY2Vzc2Z1bFNob3RzIiwiYWxsRG9tTm9kZXMiLCJBcnJheSIsImZyb20iLCJjaGlsZE5vZGVzIiwiZm9yRWFjaCIsInNob3QiLCJ0YXJnZXROb2RlIiwicmVtb3ZlIiwidXBkYXRlQUlCb2FyZCIsImdldEFJQm9hcmRPYmoiLCJob3Jpem9udGFsU2hpcE9yaWVudGF0aW9uIiwic2VsZWN0ZWRSb3ciLCJ0YXJnZXQiLCJzZWxlY3RlZENvbHVtbiIsImNvb3JkaW5hdGUiLCJjYXJyaWVyUGxhY2VkIiwicGxhY2VDYXJyaWVyT25Cb2FyZCIsImJhdHRsZXNoaXBQbGFjZWQiLCJwbGFjZUJhdHRsZXNoaXBPbkJvYXJkIiwiY3J1aXNlclBsYWNlZCIsInBsYWNlQ3J1aXNlck9uQm9hcmQiLCJzdWJtYXJpbmVQbGFjZWQiLCJwbGFjZVN1Ym1hcmluZU9uQm9hcmQiLCJkZXN0cm95ZXJQbGFjZWQiLCJwbGFjZURlc3Ryb3llck9uQm9hcmQiLCJzaGlwVHlwZSIsImJvYXJkRE9NQ2VsbHNBcnIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0SG9yaXpvbnRhbERPTUNvb3JkcyIsImdldFZlcnRpY2FsRE9NQ29vcmRzIiwicGxhY2VDcnVpc2VyU2hpcCIsInBsYWNlU3VibWFyaW5lU2hpcCIsInBsYWNlRGVzdHJveWVyU2hpcCIsInN0YXJ0aW5nQ29sdW1uIiwiTnVtYmVyIiwic2hpcExlbmd0aCIsImRvbUNvb3JkaW5hdGUiLCJ0YXJnZXRET01CdG4iLCJmaW5kU2hpcERPTUJ0biIsInN0YXJ0aW5nUm93IiwiZG9tQ2VsbFJvdyIsImRvbUNlbGxDb2x1bW4iLCJhbHJlYWR5QXR0YWNrZWQiLCJwcmV2ZW50U2FtZUF0dGFjayIsInBsYXlSb3VuZCIsImh1bWFuV2lucyIsImNoZWNrRm9yV2luIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlc2V0R2FtZVN0YXRlIiwiYW5ub3VuY2VXaW5uZXIiLCJwbGF5QWdhaW4iLCJoYW5kbGVBSU1vdmUiLCJhaVdpbnMiLCJ3aW5uZXIiLCJ3aW5uZXJOYW1lIiwiZ2V0TmFtZSIsInBsYXlBZ2FpbkJ0biIsInN0YXJ0TmV3R2FtZSIsInJlbW92ZUNoaWxkIiwiR2FtZWJvYXJkIiwiUGxheWVyIiwicmV0dXJuUmFuZG9tQUlCb2FyZCIsImNyZWF0ZUdhbWVCb2FyZCIsImNhcnJpZXJBcnIiLCJkZXRlcm1pbmVDYXJyaWVyQXJyQ29vcmRzIiwic2hpcFBsYWNlZCIsInBsYWNlU2hpcCIsInB1c2giLCJjb29yZCIsInRvU3RyaW5nIiwiYmF0dGxlc2hpcEFyciIsImRldGVybWluZUJhdHRsZXNoaXBBcnJDb29yZHMiLCJjcnVpc2VyQXJyIiwiZGV0ZXJtaW5lQ3J1aXNlckFyckNvb3JkcyIsInN1Ym1hcmluZUFyciIsImRldGVybWluZVN1Ym1hcmluZUFyckNvb3JkcyIsImRlc3Ryb3llckFyciIsImRldGVybWluZURlc3Ryb3llckFyckNvb3JkcyIsInBsYWNlU2hpcHMiLCJodW1hblBsYXllciIsImFpUGxheWVyIiwiQUkiLCJjdXJyZW50UGxheWVyIiwicmVjZWl2ZUF0dGFjayIsImF2YWlsYWJsZU1vdmVzIiwiZ2V0QUlBdmFpbGFibGVNb3ZlcyIsInJhbmRvbU1vdmUiLCJtYWtlUmFuZG9tTW92ZSIsInJlbW92ZUxhc3RBSU1vdmUiLCJzd2l0Y2hQbGF5ZXIiLCJhbGxTaGlwc1N1bmsiLCJjbGVhckdhbWVCb2FyZCIsImdldEJvYXJkIiwiYm9hcmQiLCJjb29yZGluYXRlc09iaiIsInNoaXBDb29yZGluYXRlc0FyciIsIk9iamVjdCIsInZhbHVlcyIsInNoaXBDb29yZGluYXRlcyIsImFycmF5c0FyZUVxdWFsIiwiU2hpcCIsInNoaXBPYmplY3RzIiwiYWlBdmFpbGFibGVNb3ZlcyIsInJvd3MiLCJjb2x1bW5zIiwidW5kZWZpbmVkIiwidmFsaWRhdGVDb29yZGluYXRlcyIsImNvb3JkaW5hdGVzIiwidmFsaWRDb29yZGluYXRlcyIsImNoZWNrU2VsZk92ZXJsYXAiLCJjb29yZGluYXRlc092ZXJsYXAiLCJwcmV2Q29vcmRpbmF0ZSIsImluZGV4IiwiY2hlY2tPdmVybGFwV2l0aE90aGVyU2hpcHMiLCJzaGlwc092ZXJsYXAiLCJib2FyZENlbGwiLCJsZWdhbENvb3JkaW5hdGVzIiwib3ZlcmxhcHBpbmdDb29yZGluYXRlcyIsInNoaXBPdmVybGFwcGluZyIsInNoaXBPYmplY3QiLCJzaGlwT2JqIiwiaGl0IiwiZXZlcnlTaGlwU2FuayIsImhhc0JlZW5TdW5rIiwibW92ZSIsInNwbGljZSIsImdldFNoaXBPYmplY3RzIiwibmFtZSIsImlzQUkiLCJhdmFpbGFibGVNb3Zlc0xlbmd0aCIsInJhbmRvbUFyckluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tQ29vcmRpbmF0ZSIsIm51bU9mSGl0cyIsImlzU3VuayIsImdldE51bU9mSGl0cyIsImdldExlbmd0aCIsImFycjEiLCJhcnIyIiwiYWlCb2FyZHMiLCJhaVNoaXBDb29yZHNPbmUiLCJhaVNoaXBDb29yZHNUd28iLCJhaVNoaXBDb29yZHNUaHJlZSIsInJhbmRvbUluZGV4IiwiY2hvc2VuQUlCb2FyZCIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiY3J1aXNlciIsInN1Ym1hcmluZSIsImRlc3Ryb3llciJdLCJzb3VyY2VSb290IjoiIn0=