import React, { Component } from 'react';
import '../css/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Main from '../main';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 'home', text: 'Home', link: '/' },
        { id: 'news', text: 'News', link: '/news' },
        { id: 'contact', text: 'Contact', link: '/contact' },
        { id: 'about', text: 'About', link: '/about' }
      ]
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="layout">
            <Navbar items={this.state.items} />
            <Main />
          </div>
        </div >
      </Router>
    );
  }
}

export default App;
