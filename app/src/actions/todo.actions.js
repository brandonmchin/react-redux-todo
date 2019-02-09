import * as types from '../constants';

// export const addTodo = text => ({
//   type: types.ADD_TODO,
//   text
// });

export const addTodo = text => {
  return dispatch => {
    dispatch({
      type: types.ADD_TODO,
      text
    });
  }
}

export const deleteTodo = id => {
  return dispatch => {
    dispatch({
      type: types.DELETE_TODO,
      id
    });
  }
}

export const editTodo = (id, text) => {
  return dispatch => {
    dispatch({
      type: types.EDIT_TODO,
      id,
      text
    });
  }
}

export const completeTodo = id => {
  return dispatch => {
    dispatch({
      type: types.COMPLETE_TODO,
      id
    });
  }
}

export const completeAllTodos = () => {
  return dispatch => {
    dispatch({
      type: types.COMPLETE_ALL_TODOS
    });
  }
}

export const clearCompleted = () => {
  return dispatch => {
    dispatch({
      type: types.CLEAR_COMPLETED
    });
  }
}

export const setVisibilityFilter = filter => {
  return dispatch => {
    dispatch({
      type: types.SET_VISIBILITY_FILTER,
      filter
    });
  }
}
