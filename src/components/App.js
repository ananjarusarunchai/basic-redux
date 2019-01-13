import React, { Component } from 'react';
import '../css/App.css';
import User from '../containers/Users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="layout">
            <User />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
