const _state ={
    points:{
   miss: 2,
   catch:3
}}

let _observer = () => {}

export function subscribe(subscriber) {
_observer = subscriber
}


//getter/selector/query
export const getPoints = function(){
    return{
        miss: _state.points.miss,
        catch: _state.points.catch
    }
}

setInterval(()=>{
    _state.points.miss++
    observer()
},1000)
