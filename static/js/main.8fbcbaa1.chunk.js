(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(8),i=t.n(s),o=(t(15),t(16),t(2)),c=t(3),l=t(6),d=t(4),m=t(1),p=t(5),u=function(e){return n.a.createElement("div",{className:"drum-machine_display"},e.display)},h={background:"#6b7075"},y={},k=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(l.a)(this,Object(d.a)(a).call(this,e))).state={btnClick:!0},t.playSample=t.playSample.bind(Object(m.a)(t)),t.handleKeyPress=t.handleKeyPress.bind(Object(m.a)(t)),t.handleColorChange=t.handleColorChange.bind(Object(m.a)(t)),t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"handleColorChange",value:function(){var e=this;this.setState({btnClick:!this.state.btnClick}),setTimeout(function(){e.setState({btnClick:!e.state.btnClick})},100)}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){this.props.drumsInfo.keyTrigger.toLowerCase()===e.key&&this.playSample()}},{key:"playSample",value:function(e){var a=this;document.getElementById(this.props.drumsInfo.id).play(),this.props.updateDisplay(this.props.drumsInfo.id),setTimeout(function(){a.props.clearDisplay()},500),this.handleColorChange()}},{key:"render",value:function(){var e=this.state.btnClick?y:h;return n.a.createElement("div",{className:"drum-pad",onClick:this.playSample,style:e},n.a.createElement("div",{className:"drum-pad_text"},this.props.drumsInfo.id.replace(/-/g,String.fromCharCode(160))),n.a.createElement("div",{className:"drum-pad_text drum-pad__key"},this.props.drumsInfo.keyTrigger),n.a.createElement("audio",{className:"clip",id:this.props.drumsInfo.id,src:this.props.drumsInfo.url}))}}]),a}(n.a.Component),f=function(e){function a(e){return Object(o.a)(this,a),Object(l.a)(this,Object(d.a)(a).call(this,e))}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props.drumsInfo.map(function(a,t){return n.a.createElement(k,{key:a+t,tabIndex:a+t,drumsInfo:e.props.drumsInfo[t],updateDisplay:e.props.updateDisplay,clearDisplay:e.props.clearDisplay,handleKeyPress:e.props.handleKeyPress})});return n.a.createElement("div",{className:"drum-pads"},a,n.a.createElement("span",{className:"clearing-span"}))}}]),a}(n.a.Component),b=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],g=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(l.a)(this,Object(d.a)(a).call(this,e))).state={display:"Push the button!"},t.updateDisplay=t.updateDisplay.bind(Object(m.a)(t)),t.clearDisplay=t.clearDisplay.bind(Object(m.a)(t)),t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"updateDisplay",value:function(e){this.setState({display:e.replace(/-/g,String.fromCharCode(160))})}},{key:"clearDisplay",value:function(){this.setState({display:"Push the button!"})}},{key:"render",value:function(){return n.a.createElement("div",{id:"drum-machine",className:"drum-machine"},n.a.createElement("div",{className:"drum-machine-left"},n.a.createElement(u,{display:this.state.display}),n.a.createElement("div",{className:"drum-machine-logo"},"Drum Machine 2000")),n.a.createElement(f,{drumsInfo:b,updateDisplay:this.updateDisplay,clearDisplay:this.clearDisplay,handleKeyPress:this.handleKeyPress}))}}]),a}(n.a.Component);var C=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"}),n.a.createElement("div",null,n.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.8fbcbaa1.chunk.js.map