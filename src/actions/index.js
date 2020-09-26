export const addLevel = (store, level) => {
  store.state.matrix.push(level)
}

export const getLevel = (store) => {
  return store.state.matrix[store.state.levelIdx]
}

export const setLevel = (store, level) => {
  store.setState({ level })  
}

export const setTitle = (store, title) => {
  store.state.level.title = title  
}