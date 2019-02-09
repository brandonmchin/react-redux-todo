import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import TodoList from '../components/TodoList';
import { getVisibleTodos } from '../selectors';

const mapStateToProps = state => ({
  filteredTodos: getVisibleTodos(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;