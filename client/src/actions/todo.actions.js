import * as types from '../constants';

export const addTodo = text => {
  return dispatch => {
    dispatch({
      type: types.ADD_TODO,
      text
    });
  }
}

// export const setVisibilityFilter = filter => {
//   return dispatch => {
//     dispatch({
//       type: types.SET_VISIBILITY_FILTER,
//       filter
//     });
//   }
// }
