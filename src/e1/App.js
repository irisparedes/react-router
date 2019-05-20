import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Pricing from './components/Pricing';
import About from './components/About';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header>
          <nav>
            <ul className="menu">
              <li className="menu-item">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-item">
                <Link to="/about">About</Link>
              </li>
              <li className="menu-item">
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/pricing" component={Pricing} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
