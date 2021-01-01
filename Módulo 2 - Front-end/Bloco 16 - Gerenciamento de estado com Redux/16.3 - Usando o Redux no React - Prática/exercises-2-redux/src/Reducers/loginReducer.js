const INITIAL_STATE = {
    authorizedPersonnel: [ {
      email: 'luc.zago@hotmail.com',
      password: '1234',
    }],
    loggedIn: false
  }
  
  function loginReducer(state = INITIAL_STATE, action) {
    const { loggedIn, type } = action;
    switch (type) {
      case 'LOGIN':
        return {...state, loggedIn };
      default:
        return state;
    }
  }
  
  export default loginReducer;
  