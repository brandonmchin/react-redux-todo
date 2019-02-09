import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import Main from '../components/Main';
import { getCompletedTodoCount } from '../selectors';

const mapStateToProps = state => ({
  todoCount: state.todos.length,
  completedCount: getCompletedTodoCount(state)
});

const MapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, MapDispatchToProps)(Main);
