import React, { Component } from 'react';
import { connect } from 'react-redux';

class Curriculum extends Component {
  constructor(props) {
    super(props);
      this.getStateName = this.getStateName.bind(this);
      this.getTypeOfHouse = this.getTypeOfHouse.bind(this);
  }

  getStateName(state) {
    const states = {
      AC: 'Acre',
      AL: 'Alagoas',
      AP: 'Amapá',
      AM: 'Amazonas',
      BA: 'Bahia',
      CE: 'Ceará',
      DF: 'Distrito Federal',
      ES: 'Espírito Santo',
      GO: 'Goiás',
      MA: 'Maranhão',
      MT: 'Mato Grosso',
      MS: 'Mato Grosso do Sul',
      MG: 'Minas Gerais',
      PA: 'Pará',
      PB: 'Paraíba',
      PR: 'Paraná',
      PE: 'Pernambuco',
      PI: 'Piauí',
      RJ: 'Rio de Janeiro',
      RN: 'Rio Grande do Norte',
      RS: 'Rio Grande do Sul',
      RO: 'Rondônia',
      RR: 'Roraima',
      SC: 'Santa Catarina',
      SP: 'São Paulo',
      SE: 'Sergipe',
      TO: 'Tocantins',
    }
    const result = states[`${state}`]
    return result;
  }
    
  getTypeOfHouse(house) {
    let result = 'Apartamento';
    if (house) return result = 'Casa';
    return result;
  }

  render() {
    const { name, email, cpf, adress, city, state, typeOfHouse, cvResume, job, jobDescription } = this.props.form;
    const stateName = this.getStateName(state);
    const house = this.getTypeOfHouse(typeOfHouse);

    return (
      <div className="consolidated-cv">
        <p>Name: { name }</p>
        <p>Email: { email }</p>
        <p>C.P.F.: { cpf }</p>
        <p>Endereço: { adress }</p>
        <p>Cidade: { city }</p>
        <p>Estado: { stateName }</p>
        <p>{ house }</p>
        <p>Resumo do currículo: { cvResume }</p>
        <p>Cargo: { job }</p>
        <p>Descrição do cargo: { jobDescription }</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  form: state.formReducer,
});

export default connect(mapStateToProps)(Curriculum);

// export default Curriculum;
