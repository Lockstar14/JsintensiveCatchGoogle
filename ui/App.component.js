import { getPoints } from "../data/state-manager.js"
export function AppComponent() {
    const points = getPoints()
    const element = document.createElement('div')
    element.append(`catch: ${points.catch} miss:${points.miss}`)
    return element
}