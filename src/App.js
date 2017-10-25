import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing/Landing';
import Team from './components/Team/Team';
import Roadmap from './components/Roadmap/Roadmap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/team" component={Team} />
            <Route path="/roadmap" component={Roadmap} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
