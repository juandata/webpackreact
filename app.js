import React, {Component} from "react";
import {InputTodo} from "./componentsPractices/inputsTodo";
import {ProductTable} from "./componentsPractices/ProductTable";
import {FilterableProductTable} from "./componentsPractices/ProductTableEx";
import {EscogeColorAzul, CustomTextInput, NameForm, FileInput} from "./componentsPractices/learningReactJSX";


//stylesheets
import './assets/sass/pages/app.scss';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class App extends Component {


  render(){
    return (
      <div>
          <InputTodo />
          <ProductTable />
          <FilterableProductTable products={PRODUCTS} />
          <h1>Learning advanced react below: </h1>
          <EscogeColorAzul />
          <div>
          <h1>Refs and uncontrolled components</h1>
          <CustomTextInput />
          <NameForm />
          <h1>Accesing a file with refs</h1>
          <FileInput />
          </div>
      </div>
    )
  }
}

export default App;
