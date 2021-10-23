/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Calc from './components/pages/Calc';
import Quote from './components/pages/Quote';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/calc" component={Calc} />
            <Route path="/quote" component={Quote} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
