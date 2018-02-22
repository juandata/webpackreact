import React from 'react';

import * as exportedVariables from '../testingModules/propTypes';

const MyComponents = {
  EscogeColor : function EscogeColor(props){
    return <div style={{ color: props.color}} >Imagina un escogeColor aquí</div>
  },
  Boton : function Boton(props){
    function handleClick(){
      alert("the button was clicked");
    }
    return <button onClick={handleClick}>Click here</button>
  }
}


function TheDiv(props){
  let number; let suma;
  if(props.number % 2 == 0){
    number = <strong>PAR</strong>;
  }
  else {
    number= <i>IMPAR</i>;
  }

  return (
    <div>
   <h1>El número {props.number} is {number}< /h1><br />
   <h3>the props sum is {props.numeros.reduce(function(prev, act){return prev + act;})}</h3>

   </div>
)
}


export function EscogeColorAzul(props){
  return (
    <div>
    <MyComponents.EscogeColor color="green"/>
    <MyComponents.Boton />
    <TheDiv number="30" numeros={[2,4,5,6,13]}/>
    <h5>la string es {exportedVariables.stringToExport}</h5>
    <div><p>{exportedVariables.anotherString}</p></div>
    </div>
  )
}
//USING REFS TO MAKE THIS HAPPEN IN REACT
export class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.textInput = input; }} />
        <input
          type="button"
          value="Focus the text input with refs property"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

//uncontrolled component working with ref instead of an event handler
export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted in an uncontrolled component with refs attribute: ' + this.input.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" defaultValue="theValue" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.files[0].name}`
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input
            type="file"
            ref={input => {
              this.fileInput = input;
            }}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
