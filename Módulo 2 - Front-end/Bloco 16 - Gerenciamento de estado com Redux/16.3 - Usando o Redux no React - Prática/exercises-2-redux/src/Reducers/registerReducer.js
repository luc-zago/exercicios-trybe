const INITIAL_STATE = []

function registerReducer(state = INITIAL_STATE, action) {
  const { newClient, type } = action;
  switch (type) {
    case 'ADD_CLIENT':
      return [...state, newClient ];
    default:
      return state;
  }
}

export default registerReducer;
