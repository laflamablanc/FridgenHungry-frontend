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
          <Route path="/home" render={() => <Home/>} />
          <Route path="/" render={() => <Login/>} />
        </Router>      
      </div>
    )
  }
}

export default App;
