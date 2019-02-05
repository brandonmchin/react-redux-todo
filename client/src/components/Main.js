import React, { Component } from 'react';
import PropTypes from 'prop-types';

import VisibleTodoList from '../containers/VisibleTodoList';
// import Footer from './Footer';

const Main = ({ todoCount, completedCount, actions }) => (
  <div>
    {
      !!todoCount && 
      <span>
        <input type='checkbox' checked={completedCount === todoCount} readOnly />
        <label onClick={actions.completeAllTodos} />
      </span>
    }
    <VisibleTodoList />
    {/* {
      !!todoCount &&
      <Footer completedCount={completedCount} activeCount={todoCount - completedCount} onClearCompleted={actions.clearCompleted} />
    } */}
  </div>
);

Main.propTypes = {
  todoCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

export default Main;
