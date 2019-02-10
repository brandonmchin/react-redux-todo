import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Divider, Button, Grid } from '@material-ui/core';

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
    const { activeCount, completedCount, onClearCompleted } = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <footer>
        <Grid style={styles.grid} container spacing={24}>
          <Grid style={styles.count} item xs={6}><strong>{activeCount || 'No'}</strong> {itemWord} remaining</Grid>
          <Grid style={styles.clear} item xs={6}>
            &nbsp;
            {
              !!completedCount &&
              <Button variant='contained' color='primary' onClick={onClearCompleted}>Clear Completed</Button>
            }
          </Grid>
        </Grid>
        <Divider />
        <Tabs value={this.state.filterIndex} onChange={this.handleChange} indicatorColor='primary' centered>
          {
            Object.keys(FILTER_TITLES).map(filter => (
              <FilterLink label={FILTER_TITLES[filter]} filter={filter} />
            ))
          }
        </Tabs>
      </footer>
    );
  }
}

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired
}

export default Footer;
