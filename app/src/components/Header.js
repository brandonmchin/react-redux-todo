import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoTextInput from './TodoTextInput';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  title: {
    textAlign: 'center'
  }
};

class Header extends Component {
  handleSubmit = (text) => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography className={classes.title} variant='h3'>TODO LIST</Typography>
        <TodoTextInput newTodo onSubmit={this.handleSubmit} placeholder="What needs to be done?" />
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  addTodo: PropTypes.func.isRequired
}

export default withStyles(styles)(Header);