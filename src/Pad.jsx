import React from 'react';

const btnClicked = {background: '#6b7075'};
const btnNotClicked = {};

class Pad extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            btnClick: true
        }
        this.playSample=this.playSample.bind(this);
        this.handleKeyPress=this.handleKeyPress.bind(this);
        this.handleColorChange=this.handleColorChange.bind(this);
    }
    handleColorChange(){
        this.setState({
            btnClick: !this.state.btnClick
        });
        setTimeout(()=>{
            this.setState({btnClick: !this.state.btnClick})
        }, 100)
    }
    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyPress)
    }
    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    handleKeyPress(e){
     if(this.props.drumsInfo.keyTrigger.toLowerCase()===e.key){
         this.playSample();
     };
    }
    playSample(e){
        const sample = document.getElementById(this.props.drumsInfo.id);
        sample.play();
        this.props.updateDisplay(this.props.drumsInfo.id.replace(/-/g, String.fromCharCode(160)));
        this.handleColorChange();
    }
    render(){
        let btnStyling = this.state.btnClick ? btnNotClicked : btnClicked;
        return <div className="drum-pad" onClick={this.playSample} style={btnStyling}>
            <div className="drum-pad_text drum-pad__key">{this.props.drumsInfo.keyTrigger}</div>
            <audio className="clip" id={this.props.drumsInfo.id} src={this.props.drumsInfo.url}></audio>
        </div>
    }
}

export default Pad;