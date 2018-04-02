const loading = (state = { visible: false }, action) => {
  switch (action.type) {
    case 'SHOW_LOADING':
      return {
        visible: true,
      };
    case 'HIDE_LOADING':
      return {
        visible: false,
      };
    default:
      return state;
  }
}

export default loading
