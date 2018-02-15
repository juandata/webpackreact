
import React, {Component} from "react";
import {Input} from "./input";

var primaryColor = "gray ";

class App extends Component {
  constructor(props){
    super(props);
    this.state = { receivedChanged : "This will update"};
    this.receiveChange = this.receiveChange.bind(this);
    }

    receiveChange(v){
      console.log(v);
      this.setState({ receivedChanged : v});
    }

  render(){
    return (
      <div>
      <Input theChanged={this.receiveChange}/>
      <h1 >Below we render the new state in the parent, the state comes from the props of the input child above</h1>
      <h1 style={{backgroundColor : primaryColor}}>{this.state.receivedChanged}</h1>
      </div>
    )
  }
}

export default App;
