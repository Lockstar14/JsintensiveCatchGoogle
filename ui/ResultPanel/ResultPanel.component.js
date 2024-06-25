import { getPoints } from "../../data/state-manager.js"
export function ResultPanelComponent(){
    const element = document.createElement('div')
    const points = getPoints()
    element.append(`catch: ${points.catch} miss:${points.miss}`)
    return element
}