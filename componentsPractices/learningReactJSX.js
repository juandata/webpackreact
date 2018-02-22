import React from 'react';

import * as exportedVariables from '../testingModules/propTypes';

import '../assets/sass/components/learningReactJSX.scss'
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

//using portals to render content outside of parents
const modalRoot = document.getElementById('modal-root');
// Let's create a Modal component that is an abstraction around
// the portal API.
class Modal extends React.Component {
  constructor(props) {
    super(props);
    // Create a div that we'll render the modal into. Because each
    // Modal component has its own element, we can render multiple
    // modal components into the modal container.
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    // Remove the element from the DOM when we unmount
    modalRoot.removeChild(this.el);
  }

  render() {
    // Use a portal to render the children into the element
    return ReactDOM.createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      this.props.children,
      // A DOM element
      this.el,
    );
  }
}
// The Modal component is a normal React component, so we can
// render it wherever we like without needing to know that it's
// implemented with portals.

export class HandlingPortals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({showModal: true});
  }

  handleHide() {
    this.setState({showModal: false});
  }

  render() {
    // Show a Modal on click.
    // (In a real app, don't forget to use ARIA attributes
    // for accessibility!)
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div>
            With a portal, we can render content into a different
            part of the DOM, as if it were any other React child.
          </div>
          This is being rendered inside the #modal-container div.
          <button onClick={this.handleHide}>Hide modal</button>
        </div>
      </Modal>
    ) : null;

    return (
      <div className="app2">
        This div has overflow: hidden.
        <button onClick={this.handleShow}>Show modal</button>
        {modal}
      </div>
    );
  }
}
//to check portals original code please go to https://codepen.io/juandata/pen/mXKZKW?editors=0110
