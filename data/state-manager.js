import { GAME_STATUSES } from "./constants.js"

const _state = {
    gameStatus: GAME_STATUSES.IN_PROGRESS,
    points: {
        miss: 2,
        catch: 3
    },
    settings: {
        pointsToLose: 5,
        pointsToWin: 5,
        gridSize: {
            width: 4,
            height: 4
        },
    }
}

let _observer = () => { }

export function subscribe(subscriber) {
    _observer = subscriber
}


function _play(){
    let _intervalId = setInterval(()=>{
        _state.points.miss++
        if(_state.points.miss === _state.settings.pointsToLose){
            clearInterval(_intervalId)
            _state.gameStatus = GAME_STATUSES.LOSE
        }
        _observer()
    },1000)
}
_play()




//getter/selector/query
export function getPoints() {
    return {
        miss: _state.points.miss,
        catch: _state.points.catch
    }
}

export function getGameStatus() {
    return _state.gameStatus
}

export function playAgain(){
    _state.gameStatus = GAME_STATUSES.IN_PROGRESS
    _state.points.catch = 0
    _state.points.miss = 0
    _play()
    _observer()
}