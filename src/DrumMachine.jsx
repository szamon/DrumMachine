import React from 'react';
import Display from './Display.jsx';
import Pads from './Pads.jsx';

const drumsInfo = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];

class DrumMachine extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          display: "Hello!"
        }
        this.updateDisplay=this.updateDisplay.bind(this);
        this.clearDisplay=this.clearDisplay.bind(this);
    }
    componentDidMount(){
      let nr = 0;
      this.timer = setInterval(
        () => {
          let arr = ["M", "MP", "MPC", "click", "the", "button", "with", "mouse", "or", "push", "corresponding", "key", "on", "keyboard", "MPC"];
          if(nr<arr.length){
            this.updateDisplay(arr[nr]);
          }
          nr ++;
        }, 700
      )
    }
    componentWillUnmount(){
      clearInterval(this.timer);
    }
    updateDisplay(text){
      this.setState({
        display: text
      })
    }
    clearDisplay(){
      this.setState({
        display: "Push the button!"
      })
    }
    render(){
      const nr = 0;
      return <div id="drum-machine" className="drum-machine">
          <div className="drum-machine-left">
            <Display display={this.state.display} />
            <div className="drum-machine-logo">Drum Machine 2000</div>
          </div>
          <Pads drumsInfo={drumsInfo} updateDisplay={this.updateDisplay} clearDisplay={this.clearDisplay} handleKeyPress={this.handleKeyPress} />
      </div>
    }
}

export default DrumMachine;