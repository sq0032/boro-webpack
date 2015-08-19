require("./main.css");
var React = require('react');
var $ = require('jquery');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      items: [
        {id: 1, name: 'hello'},
        {id: 2, name: 'todo'},
        {id: 3, name: 'react'},
        {id: 4, name: 'lunch'},
      ]
    }; 
  },
  addNewTodo: function(name){
    console.log(`add ${name}`);
    var item = {name:name, id:this.state.items.length+1};
    var items = [...this.state.items, item];
    this.setState({items:ites});
  },
  render: function(){
    console.log(this.state.items);
    return (
      <div>
        <TodoInput addNewTodo={this.addNewTodo} />
        <TodoItems items={this.state.items} />
      </div>
    );
  }
});

var TodoInput = React.createClass({
  handleKeyUp( event ){
    var name = event.target.value;
    
    if(event.keyCode==13){
      this.props.addNewTodo(name);
    }
  },
  render: function(){
    return (
      <input type='text' onKeyUp={this.handleKeyUp}/>
    );
  }
});

var TodoItems = React.createClass({
  showItemName: function(name){
    console.log(`click on ${name}`);
  },
  render: function(){
    var Items = this.renderItems();
    console.log(Items);
    return (
      <div>
        {Items}
      </div>
    );
  },
  renderItems: function(){
    var that = this;
    var Items = this.props.items.map(function(item){
      return (
        <TodoItem showItemName={that.showItemName} item={item} key={item.id}/>
      );
    });
    return Items;
  }
});

var TodoItem = React.createClass({
  handleClick: function(){
    this.props.showItemName(this.props.item.name);
  },
  render: function(){
    return (
      <div onClick={this.handleClick} > {this.props.item.name}</div>
    );
  }
});
    
var renderApp = function(){
  React.render(
      <TodoApp />,
      $("#app")[0]
  );
}

renderApp();
