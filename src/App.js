import { Component } from 'react';
import './App.css';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import Measure from './Measure/Measure';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup></Signup>
        <Login></Login> 
        <Measure name="electricity" />
      </div>
    );
  }
}

export default App;
