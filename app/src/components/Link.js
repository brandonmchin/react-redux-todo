import React from 'react';
import PropTypes from 'prop-types';

const Link = (props) => {
  const { active, children, setFilter } = props;

  return (
    <a onClick={() => setFilter()}>{children}</a>
  );
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default Link;
