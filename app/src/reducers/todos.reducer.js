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

    case types.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    
    case types.EDIT_TODO:
      return state.map(todo => todo.id === action.id ? { ...todo, text: action.text } : todo);
    
    case types.COMPLETE_TODO:
      return state.map(todo => todo.id === action.id ? { ...todo, isActive: !todo.isActive } : todo);

    case types.COMPLETE_ALL_TODOS:
      const areAllActive = state.every(todo => !todo.isActive);
      return state.map(todo => ({
        ...todo,
        isActive: areAllActive
      }));

    case types.CLEAR_COMPLETED:
      return state.filter(todo => todo.isActive === true);
    
    default:
      return state;
  }
}

export default todos;