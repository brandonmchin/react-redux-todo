import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Divider, Button, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import FilterLink from '../containers/FilterLink';
import * as types from '../constants';

const FILTER_TITLES = {
  [types.SHOW_ALL]: 'All',
  [types.SHOW_ACTIVE]: 'Active',
  [types.SHOW_COMPLETED]: 'Completed'
}

const styles = {
  grid: {
    padding: '24px 0'
  },
  count: {
    textAlign: 'left'
  },
  clear: {
    textAlign: 'right'
  }
};

class Footer extends Component {
  state = {
    filterIndex: 0 
  }

  handleChange = (event, value) => {
    this.setState({
      filterIndex: value
    });
  }

  render() {
    const { classes, activeCount, completedCount, onClearCompleted } = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <footer>
        <Grid className={classes.grid} container spacing={24}>
          <Grid className={classes.count} item xs={6}>
            <Typography variant='h6'><strong>{activeCount || 'No'}</strong> {itemWord} remaining</Typography>
          </Grid>
          <Grid className={classes.clear} item xs={6}>
            &nbsp;
            {
              !!completedCount &&
              <Button variant='contained' color='primary' onClick={onClearCompleted}>
                <Typography>Clear Completed</Typography>
              </Button>
            }
          </Grid>
        </Grid>
        <Divider />
        <Tabs value={this.state.filterIndex} onChange={this.handleChange} indicatorColor='primary' centered>
          {
            Object.keys(FILTER_TITLES).map(filter => (
              <FilterLink key={filter} label={FILTER_TITLES[filter]} filter={filter} />
            ))
          }
        </Tabs>
      </footer>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired
}

export default withStyles(styles)(Footer);
