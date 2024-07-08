import { audioControls } from "./audioElements.js"


export function registerAudioControls() {
  controls.addEventListener('click', (event) => {
    console.log(event.target)
  })
}