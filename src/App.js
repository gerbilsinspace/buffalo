import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import buffalo from './buffalo';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      hand: 'right'
    };
  }

  updateMinutes(minutes) {
    this.setState({minutes});
  }

  updateHand(hand) {
    this.setState({hand});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Input type='number' defaultValue='0' onChange={(_, {value}) => {
            this.updateMinutes(Number.parseInt(value, 10));

            if (buffalo) {
              const hand = buffalo(value) || 'incorrect number';
              this.updateHand(hand);
            }
          }} />
        </header>
        <p>Minutes: {this.state.minutes}</p>
        <p>Hand: {this.state.hand}</p>
      </div>
    );
  }
}

export default App;
