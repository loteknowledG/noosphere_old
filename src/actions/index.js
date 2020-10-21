export const addLevel = (store, level) => {
  store.setState({ level })  
  store.state.matrix.push(level)
}
export const getLevel = (store) => {
  return store.state.matrix[store.state.levelIdx]
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
export const setTitle = (store, title) => {
  store.state.level.title = title  
}
