const INITIAL_STATE = {
  user: null,
  gameOver: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER': 
      return { user: action.payload};
    case 'SET_GAME_OVER': 
        return { gameOver: action.payload};
    default:
      return state;
  }
};
export default reducer;
