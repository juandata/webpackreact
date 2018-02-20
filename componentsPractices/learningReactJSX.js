import React from 'react';

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
  let number;
  if(props.number % 2 == 0){
    number = <strong>PAR</strong>;
  }
  else {
    number= <i>IMPAR</i>;
  }
  return  <h1>El número {props.number} is {number}< /h1>;
}

export function EscogeColorAzul(props){
  return (
    <div>
    <MyComponents.EscogeColor color="green"/>
    <MyComponents.Boton />
    <TheDiv number="30"/>
    </div>
  )
}
