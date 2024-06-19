const _data ={
    catch: 0,
    time: new Date(),
    heroes:{ google: {
        x: 0,
        y: 0
    },
    player1:{},
    player2:{}
}}
   

export function getCatchCount(){
    return _data.catch
}

export function getGoogleCoords(){
    return _data.heroes.google
}