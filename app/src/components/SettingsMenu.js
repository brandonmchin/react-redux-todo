import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  IconButton, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  Slide,
  FormControlLabel, 
  Switch, 
  RadioGroup, 
  Radio 
} from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';

import { themes } from '../config';

// const COLORS = {
//   blue: '#2196f3',
//   red: '#f44336',
//   green: '#4caf50'
// };

// const styles = {
//   icon: {
//     position: 'absolute',
//     top: 0,
//     right: 0
//   },
//   settings: {
//     height: '40%'
//   },
//   title: {
//     textAlign: 'center'
//   },
//   settingsItem: {
//     width: '100%'
//   },
//   blue: {
//     color: COLORS['blue'],
//     '&$checked': {
//       color: COLORS['blue']
//     }
//   },
//   red: {
//     color: COLORS['red'],
//     '&$checked': {
//       color: COLORS['red']
//     }
//   },
//   green: {
//     color: COLORS['green'],
//     '&$checked': {
//       color: COLORS['green']
//     }
//   },
//   checked: {}
// };

const styles = () => ({
  icon: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  title: {
    textAlign: 'center'
  }
});

const Transition = props => {
  return <Slide direction='down' {...props} />
}

class SettingsMenu extends Component {
  state = {
    open: false
  }

  openSettings = () => {
    this.setState({
      open: true
    });
  }

  closeSettings = () => {
    this.setState({
      open: false
    });
  }

  // handleChange = event => {
  //   // this.setState({
  //   //   [name]: name === 'darkTheme' ? event.target.checked : event.target.value
  //   // })
  //   this.props.onChangeTheme(event.target.checked ? 'dark' : 'light');
  // }

  handleChangeTheme = event => {
    const newtheme = event.target.checked ? themes.dark : themes.light;
    this.props.onChangeTheme(createMuiTheme(newtheme));
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <IconButton className={classes.icon} onClick={this.openSettings}>
          <Settings />
        </IconButton>
        <Dialog open={this.state.open} TransitionComponent={Transition} onClose={this.closeSettings} keepMounted fullWidth>
          <DialogTitle className={classes.title}>Settings</DialogTitle>
          <DialogContent>
            <FormControlLabel
              control={
                <Switch checked={theme.palette.type === 'dark'} onChange={this.handleChangeTheme} color='primary' />
              }
              label='Dark Theme'
            />
            <RadioGroup row>
              <FormControlLabel
                control={
                  <Radio />
                }
              />
              <FormControlLabel
                control={
                  <Radio />
                }
              />
              <FormControlLabel
                control={
                  <Radio />
                }
              />
            </RadioGroup>
            {/* <RadioGroup row className={classes.settingsItem} value={this.state.colorScheme} onChange={this.handleChange('colorScheme')}>
              <FormControlLabel 
                value={COLORS['blue']} 
                control={
                  <Radio classes={{root: classes.blue, checked: classes.checked}} />
                }
              />
              <FormControlLabel 
                value={COLORS['red']} 
                control={
                  <Radio classes={{root: classes.red, checked: classes.checked}} />
                }
              />
              <FormControlLabel 
                value={COLORS['green']} 
                control={
                  <Radio classes={{root: classes.green, checked: classes.checked}} />
                }
                label='Color Scheme'
              />
            </RadioGroup> */}
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

SettingsMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  onChangeTheme: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles)(SettingsMenu);
