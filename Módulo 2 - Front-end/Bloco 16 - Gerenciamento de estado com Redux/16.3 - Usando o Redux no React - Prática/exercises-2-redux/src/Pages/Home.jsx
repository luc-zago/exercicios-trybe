import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// incluir link para login

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/login"><header>Login</header></Link>
        <h1>Home</h1>
      </div>
    )
  }
}

export default Home;
