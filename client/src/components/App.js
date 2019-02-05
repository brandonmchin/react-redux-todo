import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Header from '../containers/Header';
import Main from '../containers/Main';


const styles = () => ({
  card: {
    margin: 'auto',
    marginTop: '40px',
    textAlign: 'center',
    width: 800,
    color: '#CCC'
  },
  title: {
    color: '#CCC'
  }
});

const App = ({ classes }) => (
  <div>
    <Card className={classes.card}>
      <CardContent>
        <Header classes={classes}/>
        <Main />
      </CardContent>
    </Card>
  </div>
);

export default withStyles(styles)(App);
