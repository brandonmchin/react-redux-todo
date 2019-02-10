import React from 'react';
import { Card, CardContent } from '@material-ui/core';

import Header from '../containers/Header';
import Main from '../containers/Main';

const styles = {
  container: {
    margin: '40px auto',
    width: 800,
    color: '#CCC'
  }
};

const App = () => (
  <div style={styles.container}>
    <Card>
      <CardContent>
        <Header />
        <Main />
      </CardContent>
    </Card>
  </div>
);

export default App;
