import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoTextInput from './TodoTextInput';

class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }

  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({
      editing: true
    });
  }

  handleSubmit = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    }
    else {
      this.props.editTodo(id, text)
    }
    this.setState({
      editing: false
    });
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props;
    
    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text} editing={this.state.editing} onSubmit={(text) => this.handleSubmit(todo.id, text)} />
      );
    }
    else {
      element = (
        <div>
          <input type='checkbox' checked={!todo.isActive} onChange={() => completeTodo(todo.id)} />
          <label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
          <button onClick={() => deleteTodo(todo.id)} />
        </div>
      );
    }

    return (
      <li>{element}</li>
    );
  }
}

export default TodoItem;