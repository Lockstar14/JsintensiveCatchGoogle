import { subscribe } from "./data/state-manager.js"
import { AppComponent } from "./ui/App.component.js"
import { bindKeyboardsControls } from "./ui/controls.js"


const rootElement = document.getElementById('root')

function renderApp(){
    rootElement.innerHTML = ""
    const appElement = AppComponent()
    rootElement.append(appElement)
    
}


renderApp()
bindKeyboardsControls()
subscribe(renderApp)

