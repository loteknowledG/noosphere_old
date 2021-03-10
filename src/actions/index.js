export const addLevel = (store, level) => {
  store.setState({ level })  
  store.state.matrix.push(level)
}
export const addPlay = (store, play) => {
  store.state.now.play = play
  store.state.matrix.push(play)
}
export const getTuning = (store) => {
  return store.state.now.tune
}
export const setLevel = (store, level) => {
  store.setState({ level })  
}
export const setLevelIdx = (store, levelIdx) => {
  store.setState({ levelIdx })
}
export const setMatrix = (store, matrix) => {
  store.setState({ matrix })
}
export const setProfileToken = (store, profileToken) => {
  store.setState({ profileToken })
}
export const setTuning = (store, tune) => {
  store.state.now.tune = tune
}
export const setPlay = (store, play) => {
  store.state.now.play = play 
}
export const setTitle = (store, title) => {
  store.state.level.title = title  
}
