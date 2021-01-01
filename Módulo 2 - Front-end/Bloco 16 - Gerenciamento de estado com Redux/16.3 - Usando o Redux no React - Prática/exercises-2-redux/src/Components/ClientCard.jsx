import React, { Component } from 'react';

class ClientCard extends Component {
  
  render() {
    const { name, email, birthday } = this.props.data;
    return (
      <div className="client">
        <div className="name">
          Nome: { name }
        </div>
        <div className="email">
          Email: { email }
        </div>
        <div className="birthday">
          Data de nascimento: { birthday }
        </div>
      </div>
    )
  }
}

export default ClientCard;
