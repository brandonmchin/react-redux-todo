import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Header from '../containers/Header';
import Main from '../containers/Main';


const styles = () => ({
  container: {
    margin: 'auto',
    marginTop: '40px',
    width: 800,
    color: '#CCC'
  }
});

const App = (props) => (
  <div className={props.classes.container}>
    <Card>
      <CardContent>
        <Header />
        <Main />
      </CardContent>
    </Card>
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App);
