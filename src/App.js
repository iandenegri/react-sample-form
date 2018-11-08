import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Form.js';

class App extends Component {

  state = {
    fields: {}
  };

  onSubmit = (fields) => {
    this.setState({fields});
    console.log('App component got: ', fields);
  };

  render() {
    return (
      <div className="App">
        <Form onSubmit={fields => this.onSubmit(fields)}/>
      </div>
    );
  }
}

export default App;
