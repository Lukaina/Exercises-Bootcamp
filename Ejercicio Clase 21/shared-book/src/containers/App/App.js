import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import List from '../../pages/List';
import Create from '../../pages/Create'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shareBooks: [],
    };
  }

  addShareBook = (newShareBook) => {
    this.setState({
      shareBooks: [...this.state.shareBooks, newShareBook]
    });
  }

  render() {
    const { shareBooks } = this.state;
    return (
    <Router>
      <Switch>
          <Route exact path="/">
            <List shareBooks={shareBooks}/>
          </Route>
          <Route path="/create">
            <Create onCreate={this.addShareBook}/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
