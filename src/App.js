import logo from './logo.svg';
import './App.css';
import React from 'react'
import Home from './Containers/Home'
import Login from './Components/Login'
import { BrowserRouter as Router, Route,} from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <div>
        <Router>
          <Route exact path="/home" render={() => <Home/>} />
          <Route exact path="/" render={() => <Login/>} />
        </Router>
      </div>
    )
  }
}

export default App;
