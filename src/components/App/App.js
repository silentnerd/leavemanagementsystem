import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import './App.css';

//required("../../scss/style.scss");

class App extends React.Component {

  render() {
  return (
      <div>
        <Switch>
          <Route path='/' component={Dashboard}/>
        </Switch>
    </div>
  );
  }
}

export default App;