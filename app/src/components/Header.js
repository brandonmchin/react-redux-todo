import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoTextInput from './TodoTextInput';

const styles = {
  title: {
    textAlign: 'center',
    color:'#CCC'
  }
};

class Header extends Component {
  handleSubmit = (text) => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <div>
        <h1 style={styles.title}>TODO LIST</h1>
        <TodoTextInput newTodo onSubmit={this.handleSubmit} placeholder="What needs to be done?" />
      </div>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default (Header);