import { getGooglePosition, getGridSize, getPlayerPositions, playAgain } from "../../data/state-manager.js"
export function GridComponent(){
    const element = document.createElement('table');
    
    const gridSize = getGridSize();
    const googlePosition = getGooglePosition();
    const playerPositions = getPlayerPositions();
    
    for (let y = 0; y < gridSize.height; y++){
        const rowElement = document.createElement("tr");
        for(let x = 0; x < gridSize.width; x++){
            const cellElement = document.createElement("td");
            
            if (googlePosition.x === x && googlePosition.y === y){
                const googleElement = document.createElement('span');
                googleElement.append("- G -");
                googleElement.addEventListener("click", ()=>{
                    // catchGoogle()
                });
                cellElement.append(googleElement);   
            }
            if (playerPositions[0].x === x && playerPositions[0].y === y){
                const playerElement = document.createElement('span');
                playerElement.append("- P1 -");
                cellElement.append(playerElement);   
            }
            if (playerPositions[1].x === x && playerPositions[1].y === y){
                const playerElement = document.createElement('span');
                playerElement.append("- P2 -");
                cellElement.append(playerElement);   
            }
            
            rowElement.append(cellElement);
        }
        element.append(rowElement);
    }
    
    return element;
}


