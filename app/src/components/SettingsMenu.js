import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  IconButton, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  Slide,
  FormControl, 
  FormControlLabel, 
  Switch, 
  RadioGroup, 
  Radio 
} from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const COLORS = {
  blue: '#2196f3',
  red: '#f44336',
  green: '#4caf50'
};

const styles = {
  settings: {
    height: '40%'
  },
  title: {
    textAlign: 'center'
  },
  settingsItem: {
    width: '100%'
  },
  blue: {
    color: COLORS['blue'],
    '&$checked': {
      color: COLORS['blue']
    }
  },
  red: {
    color: COLORS['red'],
    '&$checked': {
      color: COLORS['red']
    }
  },
  green: {
    color: COLORS['green'],
    '&$checked': {
      color: COLORS['green']
    }
  },
  checked: {}
};

const Transition = props => {
  return <Slide direction='down' {...props} />
}

class SettingsMenu extends Component {
  state = {
    open: false,
    // darkTheme: true,
    colorScheme: COLORS['blue']
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

  handleChange = event => {
    // this.setState({
    //   [name]: name === 'darkTheme' ? event.target.checked : event.target.value
    // })
    this.props.onChangeTheme(event.target.checked ? 'dark' : 'light');
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <IconButton className={classes.settings} onClick={this.openSettings}>
          <Settings />
        </IconButton>
        <Dialog className={classes.settings} open={this.state.open} TransitionComponent={Transition} onClose={this.closeSettings}>
          <DialogTitle className={classes.title}>Settings</DialogTitle>
          <DialogContent>
            <FormControlLabel
              className={classes.settingsItem}
              control={
                <Switch checked={theme === 'dark'} onChange={this.handleChange} color='primary' />
              }
              label='Dark Theme'
            />
            {/* <FormControl>
              <RadioGroup row className={classes.settingsItem} value={this.state.colorScheme} onChange={this.handleChange('colorScheme')}>
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
              </RadioGroup>
            </FormControl> */}
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

SettingsMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  onChangeTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
}

export default withStyles(styles)(SettingsMenu);
