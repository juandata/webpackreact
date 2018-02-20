
import React, {Component} from "react";
import {Input} from "./input";
import {TodoApp} from "./todoApp";

//stylesheets
import '../assets/sass/pages/app.scss';

export class InputTodo extends Component {
  constructor(props){
    super(props);
    this.state = { receivedChanged : "This will update"};
    this.receiveChange = this.receiveChange.bind(this);
    }
    //HERE V refers to the new value being transmited from the child component
    receiveChange(v){
      this.setState({ receivedChanged : v});
    }

  render(){
    return (
      <div>
      <div className="component">
        <Input theChanged={this.receiveChange}/>
        <h1 >Below we render the new state in the parent, the state comes from the props of the input child above</h1>
        <h1>{this.state.receivedChanged}</h1>
        </div>
        <div className="component">
          <h1>Experiments below </h1>
          <div><TodoApp /></div>
          </div>
      </div>
    )
  }
}
