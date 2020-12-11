import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={ store } >
          <Form />
        </Provider>
      </div>
    );
  }
}

export default App;
