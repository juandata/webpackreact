import React from 'React';

import "../assets/sass/components/productTable.scss";
//product table
/*
FilterableProductTable
  SearchBar
  ProductTable
    ProductCategoryRow
    ProductRow

1. Key questions to kwow if components should be statefull or stateless:
    Let’s go through each one and figure out which one is state. Simply ask three questions about each piece of data:

Is it passed in from a parent via props? If so, it probably isn’t state.
Does it remain unchanged over time? If so, it probably isn’t state.
Can you compute it based on any other state or props in your component? If so, it isn’t state.

2.Once identify the next is to identify which component mutates, or owns, this state.
Remember: React is all about one-way data flow down the component hierarchy. It may not be immediately clear which component
 should own what state. This is often the most challenging part for newcomers to understand, so follow these steps to figure it out:

For each piece of state in your application:

Identify every component that renders something based on that state.
Find a common owner component (a single component above all the components that need the state in the hierarchy).
Either the common owner or another component higher up in the hierarchy should own the state.
If you can’t find a component where it makes sense to own the state, create a new component simply for holding the state and add it
 somewhere in the hierarchy above the common owner component.

 Let’s run through this strategy for our application:

ProductTable needs to filter the product list based on state and SearchBar needs to display the search text and checked state.
The common owner component is FilterableProductTable.
It conceptually makes sense for the filter text and checked value to live in FilterableProductTable
*/

export class ProductTable extends React.Component {
  constructor(props){
    super(props);
    this.state = { text : "search a product", inStock : false}
  }

  render() {
  return (
    <div id="productTable">
    <SearchBar text={this.state.text} inStock={this.state.inStock}/>
    <Table text={this.state.text} inStock={this.state.inStock}/>
    </div>
  )
  }
}

function SearchBar(props){
  return (
    <div>
    <input type="text" value={props.text}/>
    <input type="checkbox" checked={props.inStock}/>
    </div>
  )
}

function Table(props){
  return (
    <table>
      <tr>
        <th>Name</th> <th>Price</th>
      </tr>
      <TableCategory category="Sporting Goods"/>
      <TableCategory category="Electronics"/>

    </table>
  )
}
function TableCategory(props){
  return (
    <div>
    <tr>
      <th>{props.category}</th>
    </tr>
    <TableItems/>
    </div>
  )
}

function TableItems(props){
  return (
    <div>
    <tr>
      <td>Football</td> <td>49.99</td>
    </tr>
    <tr>
      <td>Football</td> <td>49.99</td>
    </tr>
    <tr>
      <td>Football</td> <td>49.99</td>
    </tr>
    </div>
  )
}
