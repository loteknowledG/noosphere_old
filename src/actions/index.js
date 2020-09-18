export const pushMatrix = (store, level) => {
  store.state.matrix.push(level)
}

export const getLevel = (store, index) => {
  return store.state.matrix[index]
}

export const setLevel = (store, level) => {
  store.setState({ level })
}

export const setTitle = (store, title) => {
  store.state.level.title = title  
}