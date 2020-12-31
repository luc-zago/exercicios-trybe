import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Login, RegisteredClients, Register } from './Pages/index';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/clientes-cadastrados" component={ RegisteredClients } />
      <Route exact path="/cadastrar" component={ Register } />
    </Router>
  );
}

export default App;
