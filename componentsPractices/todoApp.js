import React from 'react';

//stylesheets
import '../assets/sass/components/todoApp.scss';

export class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items : [], text : "", upid : 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleupdate = this.handleupdate.bind(this);

  }


  handleSubmit(e){
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const nuevoItem = {
      text : this.state.text,
      id: Date.now()
    };

    this.setState(prevState => ({
      items : prevState.items.concat(nuevoItem),
      text : ""
    })
    );

  }
  handleChange(e){
    this.setState({ text : e.target.value});
  }

  handleupdate(received){
    var theItems = this.state.items;
    for(var x in this.state.items ){
      if(this.state.items[x].id == received){
        //delete theItems[x];
        theItems.splice(x, 1);
      }
    }

    this.setState({
      items : theItems
    });


  }
  render(){
    return (
      <div id="todoApp">
      <h3>Below a TODO list </h3>
      <form onSubmit={this.handleSubmit}>
      <TodoList value={this.state.items} updateid={this.handleupdate} />
      <input value={this.text} onChange={this.handleChange}/>
      <button  >add todo item</button>
      </form><h1>{this.state.upid}</h1>
      </div>
    )
  }
}

class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.close = this.close.bind(this);
        this.state ={
      theId : 0
    };
  }

  close(e){
    this.setState({
      theId : e.target.parentNode.id
    });
    this.props.updateid(this.state.theId);
  }
  render(){

  return (
    <ul id="ul">
    {this.props.value.map((added, index) => (
      <li id={added.id}key={added.id}>{index + 1} - {added.text} <span onClick = {this.close} className="X" >&times;</span> </li>
     ))}
    </ul>
  );
  }
}
