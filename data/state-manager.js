const _state = {
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


//getter/selector/query
export const getPoints = function () {
    return {
        miss: _state.points.miss,
        catch: _state.points.catch
    }
}

setInterval(() => {
    _state.points.miss++
    if (_state.points.miss === _state.settings.pointsToLose){
        clearInterval(intervalId);
    }
        observer()
}, 1000)
