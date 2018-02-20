
import React, {Component} from "react";
import {InputTodo} from "./componentsPractices/inputsTodo";
import {ProductTable} from "./componentsPractices/ProductTable";

//stylesheets
import './assets/sass/pages/app.scss';

class App extends Component {


  render(){
    return (
      <div>
          <InputTodo />
          <ProductTable />
      </div>
    )
  }
}

export default App;
