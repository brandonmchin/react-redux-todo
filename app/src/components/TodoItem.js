import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem, Checkbox, IconButton } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import TodoTextInput from './TodoTextInput';

const styles = () => ({
  item: {
    backgroundColor: '#555',
    '&:hover': {
      backgroundColor: '#666'
    }
  },
  delete: {
    margin: 0,
    position: 'absolute',
    right: '18px',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  completed: {
    textDecoration: 'line-through'
  }
});

class TodoItem extends Component {
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
    const { todo, completeTodo, deleteTodo, classes } = this.props;
    
    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text} editing={this.state.editing} onSubmit={(text) => this.handleSubmit(todo.id, text)} />
      );
    }
    else {
      element = (
        <div>
          <label className={!todo.isActive ? classes.completed : {}}>{todo.id}: {todo.text}</label>
          <IconButton className={classes.delete} onClick={() => deleteTodo(todo.id)}>
            <Clear />
          </IconButton>
        </div>
      );
    }

    return (
      <ListItem className={classes.item} onDoubleClick={this.handleDoubleClick} button disableRipple>
        <Checkbox checked={!todo.isActive} onChange={() => completeTodo(todo.id)} color="primary"/>
        {element}
      </ListItem>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
}

export default withStyles(styles)(TodoItem);