import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import {fetchPeople} from './components/PeopleService';
import PersonDetail from './components/PersonDetail';
import Home from './components/Home';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      data: [],
    }
  } 
  componentDidMount () {
    this.fetchNewPeople();
  }

  fetchNewPeople() {
    fetchPeople()
      .then(data => {
        this.setState ({
          data: data.results
        })
      })
  }

 render() {
   return (
     <div className="app">
      <header className="header">
        <nav className="header-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <h1 className="title">LinkedIn</h1>
      <main>
          <Switch>
            <Route exact path="/" render={props => <Home data={this.state.data}/> } />
            <Route
              path="/PersonDetail/:id"
              render={routerProps => (
                <PersonDetail match={routerProps.match} data={this.state.data} />
              )}
            />
          </Switch>
        </main>
     </div>
   );
 }

 
}

export default App;