import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoList from '../components/TodoList';
import * as actions from '../actions';
import { getVisibleTodos } from '../selectors';

const mapStateToProps = state => ({
  filteredTodos: getVisibleTodos(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
