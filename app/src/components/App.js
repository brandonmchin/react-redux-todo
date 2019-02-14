import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, Card, CardContent } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import { themes } from '../config';
import SettingsMenu from './SettingsMenu';
// import SettingsMenu from '../containers/SettingsMenu';
import Header from '../containers/Header';
import Main from '../containers/Main';

const styles = {
  container: {
    margin: '40px auto',
    width: 800,
    color: '#CCC'
  }
};

class App extends Component {
  state = {
    theme: 'dark'
  };

  handleChangeTheme = theme => {
    this.setState({
      theme
    });
  }

  render() {
    const { classes } = this.props;

    const themeBase = this.state.theme === 'dark' ? themes.dark : themes.light;
    const theme = createMuiTheme(themeBase);

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.container}>
          <Card>
            <CardContent>
              <SettingsMenu onChangeTheme={this.handleChangeTheme} theme={this.state.theme} />
              <Header />
              <Main />
            </CardContent>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
