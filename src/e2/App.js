import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import {fetchPeople} from './components/PeopleService';
import PersonDetail from './components/PersonDetail';
import Home from './components/Home';

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
     <div className="App">
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