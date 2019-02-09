import { connect } from 'react-redux';

import Header from '../components/Header';
import { addTodo } from '../actions';

const mapDispatchToProps = dispatch => ({
  addTodo: (text) => dispatch(addTodo(text))
});

export default connect(null, mapDispatchToProps)(Header);