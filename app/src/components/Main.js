import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Typography } from '@material-ui/core';
import { DoneAll, CheckBoxOutlineBlank } from '@material-ui/icons';

import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

const Main = ({ todoCount, completedCount, actions }) => (
  <div>
    {
      !!todoCount && 
      <div>
        <Typography variant='h6'>
          <Checkbox 
            checked={completedCount === todoCount} 
            onChange={actions.completeAllTodos}
            color="primary" 
            icon={<CheckBoxOutlineBlank />} 
            checkedIcon={<DoneAll />}
          />
          <label>Complete All</label>
        </Typography>
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
