import React, { Component } from 'react';
import { connect } from 'react-redux';
import Curriculum from './Curriculum';
import { changeState } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.upperCase = this.upperCase.bind(this);
    this.removeSpecialCharacters = this.removeSpecialCharacters.bind(this);
    this.checkCity = this.checkCity.bind(this);
    this.deleteFirstValue = this.deleteFirstValue.bind(this);
    this.getFormElements = this.getFormElements.bind(this);
    this.saveCV = this.saveCV.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.state = {
      jobMessage: false,
      saveCV: false,
    };
  }
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
    return target;
  } */

  upperCase({ target }) {
    const { name, value } = target;
    const newValue = value.toUpperCase();
    // this.setState({ name: newValue });
    target.value = newValue;
    return {
      name: name,
      value: newValue
    }
  }

  removeSpecialCharacters({ target }) {
    const specialCharacters = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '§', '´', '¨',
      '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '"', "'", '<', '>', '?', '/' ];
    const { name, value } = target;
    const lastCharacter = value[value.length -1];
    let newValue = value;
    specialCharacters.forEach((character) => {
      if (character === lastCharacter) newValue = value.slice(0, value.length -1);
      return {
        name: name,
        value: newValue
      }
    })
    // this.setState({ [name]: newValue });
    target.value = newValue;
    return {
      name: name,
      value: newValue
    }
  }

  checkCity({ target }) {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const { name, value } = target;
    let newValue = value;
    numbers.forEach(number => {
      if ((value[0] === number) || (value[1] === number)) newValue = '';
    })
    // this.setState({ city: newValue });
    target.value = newValue;
    return {
      name: name,
      value: newValue
    }
  }

  deleteFirstValue({ target }) {
    const { name, value } = target;
    const firstValue = document.getElementById('select');
    if (firstValue !== null) firstValue.remove();
    return {
      name: name,
      value: value
    };
  }

  getFormElements() {
    const inputsArray = [].slice.call(document.getElementsByTagName('input'));
    const textAreaArray = [].slice.call(document.getElementsByTagName('textarea'));
    const state = [].slice.call(document.getElementsByTagName('select'));
    const typeOfHouse = inputsArray.splice(5, 2);
    const formArray = inputsArray.concat(textAreaArray, state);
    const result = [ typeOfHouse, formArray ];
    return result;
  }

  saveCV() {
    const formElements = this.getFormElements();
    const emptyField = formElements[1].some((element) => element.value === '');
    const emptyTypeOfHouse = formElements[0].some((element) => element.checked === true);
    if ((emptyField === false) && (emptyTypeOfHouse === true)) return this.setState({ saveCV: true });
  }

  clearAll() {
    const formElements = this.getFormElements();
    formElements[1].forEach((element) => {
      if (element.value !== 'Selecione um Estado') element.value = ''
    });
    formElements[0].forEach((element) => element.checked = false);
    const stateValue = document.getElementById('select');
    if (stateValue === null) {
      const select = document.getElementsByTagName('select')[0];
      const firstValue = document.createElement('option');
      const secondValue = document.getElementsByTagName('option')[0];
      firstValue.id = "select";
      firstValue.innerText = 'Selecione um Estado';
      select.insertBefore(firstValue, secondValue);
      select.value = 'Selecione um Estado';
    }
    this.setState({
      saveCV: false,
    });
  }

  render() {
    const { change } = this.props;
    const { saveCV } = this.state;
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
                onChange={ (event) => change(this.upperCase(event)) }
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
                onChange = { (event) => change(this.removeSpecialCharacters(event)) }
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
                onChange={ (event) => change(event.target) }
                onBlur = { (event) => change(this.checkCity(event)) }
                placeholder="Digite o nome de sua cidade"
                maxLength="28"
                required="required"
              ></input>
            </div>
            <div className="state">
              <label htmlFor="state" />
              <select name="state" onChange={ (event) => change(this.deleteFirstValue(event)) }>
                <option id="select">Selecione um Estado</option>
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
