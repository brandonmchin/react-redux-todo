import { connect } from 'react-redux';

import Link from '../components/Link';
import { setVisibilityFilter } from '../actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(null, mapDispatchToProps)(Link);
