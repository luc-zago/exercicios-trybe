export const changeState = (element) => {
  const { name, value } = element;
  return ({
    type: 'CHANGE_STATE',
    name: name,
    value: value
  });
};
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
  } */
