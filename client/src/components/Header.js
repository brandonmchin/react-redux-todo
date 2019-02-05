import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoTextInput from './TodoTextInput';

class Header extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    addTodo: PropTypes.func.isRequired
  }

  handleSubmit = (text) => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1 className={classes.title}>TODO LIST</h1>
        <TodoTextInput newTodo onSubmit={this.handleSubmit} placeholder="What needs to be done?" />
      </div>
    );
  }
}

export default Header;