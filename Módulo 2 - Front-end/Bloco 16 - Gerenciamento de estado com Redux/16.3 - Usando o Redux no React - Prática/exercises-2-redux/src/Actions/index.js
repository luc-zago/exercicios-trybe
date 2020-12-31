export const addClient = (object) => {
  const { name, birthday, email, password } = object;
  return ({
    type: 'ADD_CLIENT',
    newClient: {
      name: name,
      birthday: birthday,
      email: email,
    }
  });
};

export const login = (boolean) => {
  return ({
    type: 'LOGIN',
    loggedIn: boolean
  })
}
