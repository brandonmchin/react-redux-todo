// import React from 'react';
// import PropTypes from 'prop-types';

// import FilterLink from '../containers/FilterLink';
// import * as types from '../constants';

// const FILTER_TITLES = {
//   [types.SHOW_ALL]: 'All',
//   [types.SHOW_ACTIVE]: 'Active',
//   [types.SHOW_COMPLETED]: 'Completed'
// }

// const styles = {
//   footer: {
//     paddingTop: '36px',
//     width: '100%',
//     textAlign: 'center'
//   },
//   todoCount: {
//     float: 'left',
//     textAlign: 'left',
//     width: '200px'
//   },
//   filters: {
//     display: 'inline-block',
//     margin: '0',
//     width: '200px'
//   },
//   filterItem: {
//     display: 'inline',
//     // padding: '20px 20px',
//     // width: '20px'
//   },
//   clear: {
//     float: 'right',
//     width: '200px'
//   }
// };

// const Footer = (props) => {
//   const { activeCount, completedCount, onClearCompleted } = props;
//   const itemWord = activeCount === 1 ? 'item' : 'items';
  
//   return (
//     <footer style={styles.footer}>
//       <span style={styles.todoCount}>
//         <strong>{activeCount || 'No'}</strong> {itemWord} remaining
//       </span>
//       <ul style={styles.filters}>
//         {Object.keys(FILTER_TITLES).map(filter => (
//           <li key={filter} style={styles.filterItem}>
//             <FilterLink filter={filter}>
//               {FILTER_TITLES[filter]}
//             </FilterLink>
//           </li>
//         ))}
//       </ul>
//       <span style={styles.clear}>
//         &nbsp;
//         {
//           !!completedCount &&
//           <button onClick={onClearCompleted}>Clear Completed</button>
//         }
//       </span>
//     </footer>
//   );
// }

// Footer.propTypes = {
//   completedCount: PropTypes.number.isRequired,
//   activeCount: PropTypes.number.isRequired,
//   onClearCompleted: PropTypes.func.isRequired
// }

// export default Footer;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from '@material-ui/core';

import FilterLink from '../containers/FilterLink';
import * as types from '../constants';

const FILTER_TITLES = {
  [types.SHOW_ALL]: 'All',
  [types.SHOW_ACTIVE]: 'Active',
  [types.SHOW_COMPLETED]: 'Completed'
}

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
      <Tabs value={this.state.filterIndex} onChange={this.handleChange} indicatorColor='primary' centered>
        {
          Object.keys(FILTER_TITLES).map(filter => (
            <Tab label={FILTER_TITLES[filter]}>
              <FilterLink filter={filter}>
                {FILTER_TITLES[filter]} 
              </FilterLink>
            </Tab>
          ))
        }
      </Tabs>
    );
  }
}

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired
}

export default Footer;
