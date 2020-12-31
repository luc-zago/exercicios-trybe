import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addClient } from '../Actions';

// colocar 3 inputs para pegar os dados do cliente: nome, idade e email (e senha)
// botão de registro deve gerar o registro
// botão de clientes cadastrados deve levar para a página de clientes cadastrados

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.alreadyRegistered = this.alreadyRegistered.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.renderRegister = this.renderRegister.bind(this);
    this.state = {
      name: '',
      birthday: '',
      email: '',
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  alreadyRegistered() {
    const { register } = this.props;
    return register.some((client) => client.email === this.state.email);
    /*
    return register.some((client) => {
      const formValues = {...this.state};
      delete formValues.password;
      const clientValues = {...client};
      delete clientValues.password;
      return (JSON.stringify(formValues) === JSON.stringify(clientValues));
      
      const clientValues = Object.values(client);
      clientValues.pop();
      const formValues = [...values];
      formValues.pop();
      return (JSON.stringify(formValues) === JSON.stringify(clientValues);
    }); */
  }

  validateForm() {
    const { add } = this.props;
    const values = Object.values(this.state);
    const emptyField = values.some((data) => data === '');
    // emptyField ? this.setState({ validation: false }) : add(this.state);
    if ((emptyField === false) && (this.alreadyRegistered() === false)) return add(this.state);
  }

  renderRegister() {
    return (
      <div>
        <header>Cadastro</header>
        <div className="Form">
          <fieldset>
            <div className="Register">
              <div className="name">
                <label htmlFor="name" />
                Nome:
                <input
                  name="name"
                  type="text"
                  onChange={ this.handleChange }
                  maxLength="40"
                  required="required"
                />
              </div>
              <div className="birthday">
                <label htmlFor="birthday" />
                Data de nascimento:
                <input
                  name="birthday"
                  type="date"
                  onChange={ this.handleChange }
                  required="required"
                />
              </div>
              <div className="email">
                <label htmlFor="email" />
                E-mail:
                <input
                  name="email"
                  type="email"
                  onChange={ this.handleChange }
                  pattern="[A-Za-z0-9._-]+@[a-z0-9.-]+.[a-z]"
                  required="required"
                />
              </div>
            </div>
          </fieldset>
        </div>
        <button
          type="button"
          onClick={ this.validateForm }
        >Cadastrar</button>
        <Link to="/clientes-cadastrados">
          <button
            type="button"
          >Clientes cadastrados</button>
        </Link>
      </div>
    )
  }

  render() {
    const { loggedIn } = this.props.login;
    return loggedIn ? this.renderRegister() : <h1> Login não efetuado </h1>
  }
}

const mapStateToProps = (state) => ({
  register: state.registerReducer,
  login: state.loginReducer,
});

const mapDispatchToProps = (dispatch) => ({
  add: (object) => dispatch(addClient(object))});
  
export default connect(mapStateToProps, mapDispatchToProps)(Register);

// export default Register;
