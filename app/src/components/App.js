import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, Card, CardContent } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import { themes } from '../config';
import SettingsMenu from './SettingsMenu';
import Header from '../containers/Header';
import Main from '../containers/Main';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background
  },
  container: {
    position: 'relative',
    margin: '40px auto',
    width: 800
  }
});

class App extends Component {
  state = {
    theme: createMuiTheme(themes.default)
  };

  handleChangeTheme = theme => {
    this.setState({
      theme
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={this.state.theme}>
        <CssBaseline />
        <Card className={classes.container}>
          <CardContent>
            <SettingsMenu onChangeTheme={this.handleChangeTheme} theme={this.state.theme} />
            <Header />
            <Main />
          </CardContent>
        </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
