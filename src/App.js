import './App.css';
import React from 'react';
import { findByLabelText } from '@testing-library/dom';

const keys = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];
const colors = ['blue', 'orange', 'red', 'purple', 'teal', 'green', 'black', 'brown', 'magenta']
const display = ['hi-hat-closed', 'hi-hat-open', 'crash', 'low-tom', 'high-tom', 'cow-bell', 'bass', 'snare', 'clap']
const padObj = []

for (let i = 0; i < keys.length; i++) {
  let obj = {};
  obj.key = keys[i];
  obj.color = colors[i];
  obj.display = display[i];
  obj.note = `${display[i]}.mp3`;
  padObj.push(obj);
}

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 120px)',
  gridTemplateRows: 'repeat(3, 120px)',
  gap: '8px'
}

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    }
    this.playSound = this.playSound.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  render() {
    const pads = padObj.map(obj => {
      return (
        <button id={obj.key} onClick={this.playSound} value={obj.key} style={{color: 'white', backgroundColor: obj.color, fontSize: '32px', borderRadius: '8px'}}>{obj.key}</button>
      )
    })

    return (
      <div id="drum-machine">
        <div id="display">
          <h2>{this.state.display}</h2>
        </div>
        <div onKeyDown={this.handleKeyDown} style={containerStyle}>
          {pads}
        </div>
      </div>
      
    )
  }

  handleKeyDown(e) {
    if (keys.includes(e.key)) {
      const pad = document.getElementById(e.key);
    pad.click();
    pad.focus();
    }
    for (let i = 0; i < padObj.length; i++) {
      if (padObj[i].key === e.key) {
        this.setState({
          display: padObj[i].display
        }
        )
        break;
      }
    }
  }

  playSound(e) {
    for (let i = 0; i < padObj.length; i++) {
      if (padObj[i].key === e.target.value) {
        new Audio(padObj[i].note).play();
        this.setState({
          display: padObj[i].display
        })
      }
    }
  }
}


export default DrumMachine;
