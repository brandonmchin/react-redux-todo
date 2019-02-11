import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@material-ui/core';

const Link = (props) => {
  const { setFilter, ...rest } = props;

  return (
    <Tab component='a' onClick={() => setFilter()} {...rest} />
  );
}

Link.propTypes = {
  setFilter: PropTypes.func.isRequired
}

export default Link;
