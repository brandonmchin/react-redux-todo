import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@material-ui/core';

const Link = (props) => {
  const { setFilter } = props;

  return (
    <Tab component='a' onClick={() => setFilter()} {...props} />
  );
}

Link.propTypes = {
  setFilter: PropTypes.func.isRequired
}

export default Link;
