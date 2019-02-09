import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core'

import TodoItem from './TodoItem';

const TodoList = ({ filteredTodos, actions }) => (
  <List>
    {filteredTodos.map(todo => 
      <TodoItem key={todo.id} todo={todo} {...actions} />
    )}
  </List>
);

TodoList.propTypes = {
  filteredTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired
}

export default TodoList;
