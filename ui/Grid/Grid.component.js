import { getGridSize } from "../../data/state-manager.js"
export function GridComponent(){
    const element = document.createElement('table')
    const gridSize = getGridSize()
    for (let y=0; y<gridSize.height; y++){
        const rowElement = document.createElement("tr")
        for(let x = 0; x<gridSize.width;x++){
            //todo:move to CellComponent 
            // const cellElement = CellComponent(x,y)
            const cellElement = document.createElement("td")
            cellElement.append()
            if(true){
                cellElement.append("G")   
            }
            rowElement.append(cellElement)
        }
        element.append(rowElement)
    }
    
    element.append("Grid will be here")
    return element
}