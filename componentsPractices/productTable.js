import React from 'React';

import "../assets/sass/components/productTable.scss";

var myObj = "";
var component;
var jsonItems = [];
var theCategories = [];
export class ProductTable extends React.Component {

  constructor(props){
    super(props);
    this.state = { text : "", inStock : false, price : "", items : []}
     component = this;

  }

    componentDidMount(){

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
          myObj = JSON.parse(this.responseText);
         //component.setState({ text : myObj.stock[1].name});
         jsonItems = Array.from(myObj.stock)
         component.setState({ items : jsonItems});

          }
        };
        /*the math random below is for avoiding to get a cache result*/
        xhttp0.open("GET", "serverFiles/stock.json?t=" + Math.random(), true);
        xhttp0.send();

    }

  render() {
  return (
    <div id="productTable">
    <SearchBar text={this.receiveText} inStock={this.receiveStock}/>
    <Table inStock={this.state.inStock} category={this.state.text} price={this.state.price} items={this.state.items} />
    </div>
  )
  }
}

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = { text : "", inStock : false}
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeStock = this.handleChangeStock.bind(this);
  }

  handleChange(e){
    this.setState({
      text : e.target.value
    });
    this.props.text(this.state.text);
  }
  handleChangeStock(){
    var stocked = this.state.inStock === false ? true : false;
    this.setState({ inStock : stocked});
    this.props.inStock(this.state.inStock);
  }

  render(){
  return (
    <div>
    <input type="text" value={this.state.text} placeholder="search" onChange={this.handleChange}/>
    <input type="checkbox" checked={this.state.inStock} onClick={this.handleChangeStock}/>
    </div>
  )
 }
}
function Table(props){
  if(props.items.length != 0){
    theCategories.unshift(props.items[0].category);
    for(var i = 0; i < props.items.length; i ++){
      if(props.items[i].category != theCategories[0]){
        theCategories.unshift(props.items[i].category);
      }
    }
  }
  return (
    <table>
    <tbody>
      <tr>
        <th>Name</th> <th>Price</th>
      </tr>
      {theCategories.map(cat => {
        return <TableCategory category={cat}/>

      })}
      </tbody>

    </table>
  )

}

function TableCategory(props){
  return (
    <div>
    <tr>
      <th>{props.category}</th>
    </tr>

    </div>
  )
}
/*
function TableItems(props){


  return (
    <div>
    <tr>
      <td>item1</td> <td>price</td>
    </tr>
    </div>
  )
}

{props.items.map((theitems, index) => {
  return  <tr key={Date.now() + index} >
      <td>{theitems.name}</td>
      <td>{theitems.price}</td>
    </tr>
  })}
*/
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
