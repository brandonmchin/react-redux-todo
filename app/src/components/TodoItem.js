import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem, Checkbox, IconButton, Typography } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import TodoTextInput from './TodoTextInput';

const styles = theme => ({
  delete: {
    margin: 0,
    position: 'absolute',
    right: '18px',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  active: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  completed: {
    textDecoration: 'line-through',
    '&:hover': {
      cursor: 'pointer'
    }
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
          <Typography variant='body1' className={todo.isActive ? classes.active : classes.completed}>{todo.text}</Typography>
          <IconButton className={classes.delete} onClick={() => deleteTodo(todo.id)}>
            <Clear />
          </IconButton>
        </div>
      );
    }

    return (
      <ListItem onDoubleClick={this.handleDoubleClick} button disableRipple divider>
        <Checkbox checked={!todo.isActive} onChange={() => completeTodo(todo.id)} color="primary"/>
        {element}
      </ListItem>
    );
  }
}

TodoItem.propTypes = {
  classes: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
}

export default withStyles(styles)(TodoItem);