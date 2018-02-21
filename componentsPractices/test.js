class Table extends React.Component {
  constructor(props){
    super(props);
  }
  if(this.props.items.length != 0){
    theCategories.unshift(this.props.items[0].category);
    for(var i = 0; i < this.props.items.length; i ++){
      if(this.props.items[i].category != theCategories[0]){
        theCategories.unshift(this.props.items[i].category);
      }
    }
    theCategories.reverse();
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps === this.props){
      return false;
    }
  }

  render(){
  return (
    <table>
    <thead>
      <tr>
        <th>Name</th> <th>Price</th>
      </tr>
      </thead>
      <tbody>
      {theCategories.map((cat, ind) => {
        return <TableCategory category={cat} items={this.props.items} number={ind}/>

      })}
      </tbody>
    </table>
  )
}
}
