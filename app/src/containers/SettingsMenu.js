import { connect } from 'react-redux';

import SettingsMenu from '../components/SettingsMenu';
// import { changeTheme } from '../actions';

// const mapStateToProps = state => ({
//   todoCount: state.todos.length,
//   completedCount: getCompletedTodoCount(state)
// });

const MapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(null, MapDispatchToProps)(SettingsMenu);
