import { DIRECTIONS } from "../data/constants.js";
import { movePlayer } from "../data/state-manager.js";

export function bindKeyboardsControls() {
  // window = publisher/subject
  window.addEventListener("keyup", (event) => {
    switch (event.code) {
      case "ArrowUp": {
        movePlayer(1, DIRECTIONS.UP);
        break;
      }
      case "ArrowDown": {
        movePlayer(1, DIRECTIONS.DOWN);
        break;
      }
      case "ArrowLeft": {
        movePlayer(1, DIRECTIONS.LEFT);
        break;
      }
      case "ArrowRight": {
        movePlayer(1, DIRECTIONS.RIGHT);
        break;
      }
    }
  });
}
//observer это функция, это все коллбек
