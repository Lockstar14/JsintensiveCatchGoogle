import { GAME_STATUSES } from "../data/constants.js"
import { getGameStatus } from "../data/state-manager.js"
import { LoseComponent } from "./Lose/Lose.component.js"
import { ResultPanelComponent } from "./ResultPanel/ResultPanel.component.js"

export function AppComponent() {
    const element = document.createElement('div')
    const status = getGameStatus()
    const transitions = {
        [GAME_STATUSES.IN_PROGRESS]: () => {
            const resultPanelElement = ResultPanelComponent()
            element.append(resultPanelElement)
        },
        [GAME_STATUSES.LOSE]: () => {
            const loseElement = LoseComponent()
            element.append(loseElement)
        },
        [GAME_STATUSES.SETTINGS]: () => {},
        [GAME_STATUSES.WIN]: () => {},
    }
    transitions[status]()

    return element
}