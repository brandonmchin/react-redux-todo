import { createSelector } from 'reselect';
import * as types from '../constants';

const getVisibilityFilter = state => state.visibilityFilter;
const getTodos = state => state.todos;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case types.SHOW_ALL:
        return todos;
      case types.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed);
      case types.SHOW_ACTIVE:
        return todos.filter(todo => todo.completed);
      default:
        throw new Error('Unknown filter: ' + visibilityFilter);
    }
  }
);

export const getCompletedTodoCount = createSelector(
  [getTodos],
  todos => (
    todos.reduce((count, todo) => 
      todo.completed ? count + 1 : count,
      0
    )
  )
);