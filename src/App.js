import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing/Landing';
import Team from './components/Team/Team';
import Faq from './components/Faq/Faq';
import Roadmap from './components/Roadmap/Roadmap';
import { HashRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/team" component={Team} />
            <Route path="/roadmap" component={Roadmap} />
            <Route path="/faq" component={Faq} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
