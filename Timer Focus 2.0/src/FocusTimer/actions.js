import state from "./state.js"

export function Play() {
    state.isRunning = true
    state.isRunning = document.documentElement.classList.add('running')
}

export function Pause() {
  state.isRunning = false
  state.isRunning = document.documentElement.classList.remove('running')
}

export function addFive() {
  console.log('+ 5 Minutos')
}

export function minusFive() {
  console.log('- 5 Minutos')
}