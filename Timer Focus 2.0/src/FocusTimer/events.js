import { controls } from "./elements.js";
import * as actions from "./actions.js";


export function registerControls() {
  controls.addEventListener('click', (event) => {
    console.log(event.target)
  })
}