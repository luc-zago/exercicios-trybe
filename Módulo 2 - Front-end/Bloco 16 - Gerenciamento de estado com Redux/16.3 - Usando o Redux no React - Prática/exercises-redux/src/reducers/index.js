const INITIAL_STATE = [{
  name: '',
  email: '',
  cpf: '',
  adress: '',
  city: '',
  state: '',
  typeOfHouse: '',
  cvResume: '',
  job: '',
  jobMessage: false,
  jobDescription: '',
  saveCV: false,
}]

function formReducer(state = INITIAL_STATE, action) {
  const { name, value, type } = action;
  switch (type) {
    case 'CHANGE_STATE':
      return [...state, state[0][`${name}`] = value];
    default:
      return state;
  }
}

export default formReducer;
/*
handleChange({ target }) {
  const { name, value } = target;
  if (value === 'apartment') {
    return this.setState({
      [value]: target.checked,
      house: false,
    });
  }
  if (value === 'house') {
    return this.setState({
      [value]: target.checked,
      apartment: false,
    });
  }
  this.setState({ [name]: value });
}*/
