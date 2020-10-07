export const matrixPush = (store, level) => {
  const matrix = store.state.matrix.push(level);
  store.setState({ matrix });
}

