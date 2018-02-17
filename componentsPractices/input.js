import React from 'react';
//business logic
import {saluda, despidete, reallyReallyLongModuleExportName as shortName} from '../testingModules/exportingModules';
import * as variasFunciones from '../testingModules/exportingModules1';


//stylesheets
import '../assets/sass/components/input.scss';

 export class Input extends React.Component {

   constructor(props){
     super(props);
     this.state = {input : ""}
     this.handleChange = this.handleChange.bind(this);

   }
   handleChange(e){
     this.setState({
       input : e.target.value
     })
     /*below is the key to pass the state of a child component to a parent component. */
     this.props.theChanged(this.state.input);
   }

   callFunction1(){
     saluda(); despidete();
     console.log("My age is: " + variasFunciones.suma(24,5) + "The rest function is : " + variasFunciones.restar(30,20));
     shortName();
   }
   callAjax(){
     var xhttp0;
     if (window.XMLHttpRequest) {
    // code for modern browsers
      xhttp0 = new XMLHttpRequest();
      } else {
    // code for old IE browsers
      xhttp0 = new ActiveXObject("Microsoft.XMLHTTP");
      }
      //create the ajax call with support for old IE browser too
      xhttp0.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        console.log("te method return the following: "+
        xhttp0.getAllResponseHeaders() + "the status is " + this.status
      );
      document.getElementById("ajax").innerHTML = this.responseText;
      }
     };
     /*the math random below is for avoiding to get a cache result*/
     xhttp0.open("GET", "ajaxTest.txt?t=" + Math.random(), true);
     xhttp0.send();
   }
   requestXML(){
     var xhttp = new XMLHttpRequest(), xmlDoc, txt, x, i;
     xhttp.onreadystatechange = function(){
       if(this.readyState === 4 && this.status === 200){
         xmlDoc = this.responseXML; txt = "";
         x = xmlDoc.getElementsByTagName("ARTIST");
         for(i = 0; i < x.length; i ++){
           txt = txt + x[i].childNodes[0].nodeValue + "<br>";
         }
         document.getElementById("demo0").innerHTML = txt;
       }
     };
     xhttp.open("GET", "serverFiles/cdCatalog.xml", true);
     xhttp.send();

   }
  render(){
    return (
      <div>
      <h1 id="title">The below input is a controlled component, react is the source of truth of the input form </h1>
      <input  value={this.state.input} onChange={this.handleChange}/>
      <h1>Below we have a call to the state new value from inside the child return render method</h1>
      <h4>{this.state.input}</h4>
      <button onClick={this.callFunction1}>Click to call an external module function</button>
      <button onClick={this.callAjax}>Click to call an ajax function</button>
      <div id="ajax"></div>
      <button onClick={this.requestXML}>Request artist from cd catalog</button>
      <table id="demo0"></table>
      </div>
    )
  }
};
