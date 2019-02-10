import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@material-ui/core';
import { DoneAll, CheckBoxOutlineBlank } from '@material-ui/icons';

import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

const Main = ({ todoCount, completedCount, actions }) => (
  <div>
    {
      !!todoCount && 
      <div>
        <Checkbox 
          checked={completedCount === todoCount} 
          onChange={actions.completeAllTodos}
          color="primary" 
          icon={<CheckBoxOutlineBlank />} 
          checkedIcon={<DoneAll />} 
        />
        <label>Complete All</label>
      </div>
    }
    <VisibleTodoList />
    {
      !!todoCount &&
      <Footer completedCount={completedCount} activeCount={todoCount - completedCount} onClearCompleted={actions.clearCompleted} />
    }
  </div>
);

Main.propTypes = {
  todoCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

export default Main;
