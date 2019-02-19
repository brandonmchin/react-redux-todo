import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Typography } from '@material-ui/core';

const Link = (props) => {
  const { setFilter, ...rest } = props;

  return (
    <Typography variant='h6'>
      <Tab onClick={() => setFilter()} {...rest} />
    </Typography>
  );
}

Link.propTypes = {
  setFilter: PropTypes.func.isRequired
}

export default Link;
