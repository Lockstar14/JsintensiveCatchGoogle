const _state ={
   miss: 2,
   catch:3
}


//getter/selector/query
export const getPoints = function(){
    return{
        miss: _state.miss,
        catch: _state.catch
    }
}

