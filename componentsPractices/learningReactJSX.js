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
    </div>
  )
}
