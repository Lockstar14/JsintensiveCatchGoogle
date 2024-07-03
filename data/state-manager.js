import { GAME_STATUSES } from "./constants.js";

const _state = {
  gameStatus: GAME_STATUSES.IN_PROGRESS,
  points: {
    google: 0,
    players: {
      "1":{ id: 1, value: 2 },
      "2":{ id: 2, value: 3 },
    },
  },
  settings: {
    pointsToLose: 30,
    pointsToWin: 5,
    gridSize: {
      width: 4,
      height: 4,
    },
  },
  positions:{
  google: {
    x: 0,
    y: 0,
  },
  players:{
    "1": {x:1,y:1},
    "2": {x:2,y:2}
  }
}
};

let _observer = () => {};

export function subscribe(subscriber) {
  _observer = subscriber;
}
function _getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function _setGooglePosition(newX,newY){
    _state.positions.google.x = newX;
  _state.positions.google.y = newY;
}
function _moveGoogleToRandomPosition() {
  const newX = _getRandomInt(_state.settings.gridSize.width);
  const newY = _getRandomInt(_state.settings.gridSize.height);
  if (newX === getGooglePosition().x && newY === getGooglePosition().y) {
    _moveGoogleToRandomPosition();
    return;
  }
_setGooglePosition(newX,newY)
}

let _intervalId;
function _play() {
  _intervalId = setInterval(() => {
    _state.points.google++;
    if (_state.points.google === _state.settings.pointsToLose) {
      clearInterval(_intervalId);
      _state.gameStatus = GAME_STATUSES.LOSE;
    } else {
      _moveGoogleToRandomPosition();
    }
    _observer();
  }, 1000);
}
_play();

 function _catchGoogle(playerId) {
  const points =  _state.points.players[playerId]
  points.value++
  if (points.value === _state.settings.pointsToWin) {
    clearInterval(_intervalId);
    _state.gameStatus = GAME_STATUSES.WIN;
  } else {
    _moveGoogleToRandomPosition();
    clearInterval(_intervalId);
    _play();
  }
  _observer();
}

//getter/selector/query
export function getPoints() {
  return {
    google: _state.points.google,
    players: Object.values(_state.points.players).map(points=>{
        return {...points}
    }),
  };
}

export function getGameStatus() {
  return _state.gameStatus;
}
export function getGridSize() {
  return {
    height: _state.settings.gridSize.height,
    width: _state.settings.gridSize.width,
  };
}

export function getGooglePosition() {
  return {
    x: _state.positions.google.x,
    y: _state.positions.google.y,
  };
}
export function getPlayerPositions() {
  return  Object.values(_state.positions.players).map(position=>{
      return {...position}
  })
  };

export function playAgain() {
  _state.gameStatus = GAME_STATUSES.IN_PROGRESS;
  _state.points.google = 0;
  _state.points.players.forEach(points => points.valude = 0)
  _play();
  _observer();
}
