/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import User from './containers/Users/Users';
import News from './containers/News/News';
import './css/index.css';

const Main = () => (
  <div className="main">
    <Switch>
      <Route exact path='/' component={User}/>
      <Route path='/news' component={News}/>
    </Switch>
  </div>
)

export default Main;

