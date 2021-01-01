import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ClientCard from '../Components/ClientCard';

// Caso não existam clientes cadastrados, mostrar "Nenhum cliente cadastrado"
// Mostrar clientes cadastrados
// botão retorna para a página de cadastros

class RegisteredClients extends Component {
  constructor(props) {
    super(props);
    this.renderClients = this.renderClients.bind(this);
    this.renderRegistedClients = this.renderRegistedClients.bind(this);
  }

  renderClients(clients) {
    if (clients.length === 0) {
      return (
        <h1 className="no-register">Nenhum cliente cadastrado</h1>
      )
    }
    return (
      <div className="Registered-clients">
        { clients.map((client) => <ClientCard key={ client.email } data={ client } />)}
      </div>
    )
  }

  renderRegistedClients() {
    const { register } = this.props;
    return (
      <div>
        { this.renderClients(register) }
        <Link to="/cadastrar"><button>Cadastrar</button></Link>
      </div>
    )
  }

  render() {
    const { loggedIn } = this.props.login;
    return loggedIn ? this.renderRegistedClients() : <h1> Login não efetuado </h1>
  }
}

const mapStateToProps = (state) => ({
    register: state.registerReducer,
    login: state.loginReducer,
  });
  
export default connect(mapStateToProps)(RegisteredClients);

// export default RegisteredClients;
