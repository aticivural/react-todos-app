import React, { Component } from 'react';
import TodosListHeader from "./TodosListHeader";
import TodosListItem from "./TodosListItem";
import * as _ from "lodash";


class TodosList extends Component {

    renderItems(){
        //let props = this.props;
        const props = _.omit(this.props, 'todos');
        return this.props.todos.map((todo, item) => <TodosListItem key={item} {...todo} {...props}/>)

        //buda olur yukarıdakinin yerine
        // return this.props.todos.map((todo, item) => <TodosListItem key={item} {...todo} toggleTask={this.props.toggleTask}/>)
    }


  render() {
    return (
      <table>
        <TodosListHeader/>
        <tbody>{this.renderItems()}</tbody>
      </table>
    );
  }
}

export default TodosList;
