import state from "./state.js"
import * as events from './events.js'
import * as audioEvents from './audioEvents.js'

export function start(minutes, seconds) {
  state.minutes = minutes
  state.seconds = seconds

  events.registerControls()
}

export function music() {
  events.registerAudioControls()
}