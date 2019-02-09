import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

class TodoTextInput extends Component {
  state = {
    text: this.props.text || ''
  }

  handleSubmit = event => {
    const text = event.target.value.trim();
    if (event.which === 13) {  // 'enter' key
      this.props.onSubmit(text);
      if (this.props.newTodo) {
        this.setState({
          text: ''
        });
      }
    }
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  handleBlur = event => {
    if (!this.props.newTodo) {
      this.props.onSubmit(event.target.value);
    }
  }

  render() {
    return (
      <TextField 
        type='text' 
        placeholder={this.props.placeholder}
        margin='normal'
        fullWidth
        autoFocus
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

TodoTextInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool
}

export default TodoTextInput;
