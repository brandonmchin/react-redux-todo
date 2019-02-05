import * as types from '../constants';

const initialState = [
  {
    id: 0,
    text: 'Make a todo app',
    isActive: true
  }
];

const todos = (state=initialState, action) => {
  switch(action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) +1,
          text: action.text,
          isActive: true
        }
      ];
    default:
      return state;
  }
}

export default todos;