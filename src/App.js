import { Component } from 'react';
import './App.css';
import Measure from './Measure/Measure';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Measure name="electricity" />
      </div>
    );
  }
}

export default App;
