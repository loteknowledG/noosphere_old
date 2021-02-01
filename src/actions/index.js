export const addLevel = (store, level) => {
  store.setState({ level })  
  store.state.matrix.push(level)
}
export const addPlay = (store, play) => {
  store.setState({ play })
  store.state.matrix.push(play)
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
export const setPlay = (store, play) => {
  store.state.now.play = play 
}
export const setTitle = (store, title) => {
  store.state.level.title = title  
}
