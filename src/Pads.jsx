import React from 'react';
import Pad from './Pad.jsx';

class Pads extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let drumList = this.props.drumsInfo.map((val, index) =>{
            return <Pad key={val+index} tabIndex={val+index} drumsInfo={this.props.drumsInfo[index]} updateDisplay={this.props.updateDisplay} clearDisplay={this.props.clearDisplay} handleKeyPress={this.props.handleKeyPress} />
        });
        return <div className="drum-pads">
        {drumList}
        <span className="clearing-span"></span>
    </div>
    }
}

export default Pads;