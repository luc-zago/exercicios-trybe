import React, { Component } from 'react';
import { connect } from 'react-redux';
import Curriculum from './Curriculum';
import { changeState } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.upperCase = this.upperCase.bind(this);
    this.removeSpecialCharacters = this.removeSpecialCharacters.bind(this);
    this.checkCity = this.checkCity.bind(this);
    this.deleteFirstValue = this.deleteFirstValue.bind(this);
    this.saveCV = this.saveCV.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.state = {
      name: '',
      city: '',
      adress: '',
      state: '',
      jobMessage: false,
      saveCV: false,
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    /*
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
    } */
    this.setState({ [name]: value });
  }

  upperCase({ target }) {
    const { name, value } = target;
    const newValue = value.toUpperCase();
    this.setState({ name: newValue });
  }

  removeSpecialCharacters({ target }) {
    const specialCharacters = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '§', '´', '¨',
      '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '"', "'", '<', '>', '?', '/' ];
    const { name, value } = target;
    const lastCharacter = value[value.length -1];
    let newValue = value;
    specialCharacters.forEach((character) => {
      if (character === lastCharacter) newValue = value.slice(0, value.length -1);
    })
    this.setState({ [name]: newValue });
  }

  checkCity({ target }) {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const { value } = target;
    let newValue = value;
    numbers.forEach(number => {
      if ((value[0] === number) || (value[1] === number)) newValue = '';
    })
    this.setState({ city: newValue });
  }

  deleteFirstValue({ target }) {
    const firstValue = document.getElementById('select');
    if (firstValue !== null) firstValue.remove();
    this.handleChange({ target });
  }

  saveCV() {
    const { house, apartment } = this.state;
    const values = Object.values(this.state);
    const emptyField = values.some((value) => value === '');
    if ((emptyField === false) && ((house || apartment) === true)) return this.setState({ saveCV: true });
  }

  clearAll() {
    this.setState({
      adress: '',
      state: '',
      house: false,
      apartment: false,
      saveCV: false,
    });
  }

  render() {
    const { change } = this.props;
    const { name, city, adress, state, saveCV } = this.state;
    return (
      <div id="app">
        <div className="header">
          <header>My form</header>
        </div>
        <div className="container">
          <fieldset className="personal-data">
            <div className="name">
              <label htmlFor="name" />
              <input
                name="name"
                type="text"
                value={ name }
                onChange={ this.upperCase }
                placeholder="Digite o seu nome"
                maxLength="40"
                required="required"
              ></input>
            </div>
            <div className="email">
              <label htmlFor="email" />
              <input
                name="email"
                type="email"
                onChange={ (event) => change(event.target) }
                placeholder="Digite o seu e-mail"
                maxLength="50"
                required="required"
              ></input>
            </div>
            <div className="cpf">
              <label htmlFor="cpf" />
              <input
                name="cpf"
                type="text"
                onChange={ (event) => change(event.target) }
                placeholder="Digite o seu C.P.F."
                maxLength="11"
                required="required"
              ></input>
            </div>
            <div className="adress">
              <label htmlFor="adress" />
              <input
                name="adress"
                type="text"
                value={ adress }
                onChange = { this.removeSpecialCharacters }
                placeholder="Digite o seu endereço"
                maxLength="200"
                required="required"
              ></input>
            </div>
            <div className="city">
              <label htmlFor="city" />
              <input
                name="city"
                type="text"
                value={ city }
                onChange={ this.handleChange }
                onBlur = { this.checkCity }
                placeholder="Digite o nome de sua cidade"
                maxLength="28"
                required="required"
              ></input>
            </div>
            <div className="state">
              <label htmlFor="state" />
              <select name="state" onChange={ this.deleteFirstValue }>
                <option id="select" value={ state }>Selecione um Estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </div>
            <div className="type-of-house">
              <input
                name="typeOfHouse"
                type="radio"
                value="house"
                onChange={ (event) => change(event.target) }
              />
              <label htmlFor="house">Casa</label>
              <input
                name="typeOfHouse"
                type="radio"
                value="apartment"
                onChange={ (event) => change(event.target) }
              />
              <label htmlFor="apartment">Apartamento</label>
            </div>
          </fieldset>
          <fieldset>
            <div className="cv-resume">
              <label htmlFor="cvResume" />
              <textarea
                name="cvResume"
                onChange={ (event) => change(event.target) }
                placeholder="Digite um resumo do seu currículo"
                maxLength="1000"
                required="required"
              ></textarea>
            </div>
            <div className="job">
              <label htmlFor="job" />
              <textarea
                name="job"
                onChange={ (event) => change(event.target) }
                placeholder="Digite o seu cargo atual"
                maxLength="40"
                onMouseEnter={ () => {
                  if (this.state.jobMessage === false) alert('Preencha com cuidado esta informação')
                  this.setState({ jobMessage: true });
                } }
                required="required"
              ></textarea>
            </div>
            <div className="job-description">
              <label htmlFor="jobDescription" />
              <textarea
                name="jobDescription"
                onChange={ (event) => change(event.target) }
                placeholder="Digite uma descrição do seu cargo atual"
                maxLength="500"
                required="required"
              ></textarea>
            </div>
          </fieldset>
          <div className="buttons">
            <button type="button" onClick={ this.saveCV }>Salvar currículo</button>
            <button type="reset" onClick={ this.clearAll }>Limpar</button>
          </div>
          { saveCV ? <Curriculum data={ this.state }/> : null }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  change: (element) => dispatch(changeState(element))});

export default connect(null, mapDispatchToProps)(Form);

// export default Form;
