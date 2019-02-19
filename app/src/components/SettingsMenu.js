import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  IconButton, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  Slide,
  FormLabel,
  FormControlLabel, 
  Switch, 
  RadioGroup, 
  Radio 
} from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

const styles = () => ({
  icon: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  dialog: {
    top: '-50%'
  },
  title: {
    textAlign: 'center'
  },
  // CSS variables
  radio: {
    color: 'var(--radio-color)',
    '&$checked': {
      color: 'var(--radio-color)'
    }
  },
  checked: {}
});


const Transition = props => {
  return <Slide direction='down' {...props} />
}

class SettingsMenu extends Component {
  state = {
    open: false,
    radioColor: 'green'
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

  handleChangeColor = event => {
    this.props.onChangeTheme(createMuiTheme({
      palette: {
        ...this.props.theme.palette,
        primary: colors[event.target.value]
      },
      typography: {
        useNextVariants: true
      }
    }));
    this.setState({
      radioColor: event.target.value
    })
  }

  handleChangeTheme = event => {
    this.props.onChangeTheme(createMuiTheme({
      palette: {
        type: event.target.checked ? 'dark' : 'light',
        primary: colors[this.state.radioColor],
        background: {
          default: event.target.checked ? '#303030' : '#DDD',
          paper: event.target.checked ? '#424242' : '#FFF'
        }
      },
      typography: {
        useNextVariants: true
      }
    }));
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <IconButton className={classes.icon} onClick={this.openSettings}>
          <Settings />
        </IconButton>
        <Dialog className={classes.dialog} open={this.state.open} TransitionComponent={Transition} onClose={this.closeSettings} keepMounted>
          <DialogTitle className={classes.title}>Settings</DialogTitle>
          <DialogContent>
            <FormLabel>Light</FormLabel>
            <Switch checked={theme.palette.type === 'dark'} onChange={this.handleChangeTheme} color='primary' />
            <FormLabel>Dark</FormLabel>
          </DialogContent>
          <DialogContent>
            <FormLabel style={{margin: 'auto 0', marginRight: '16px'}}>Main Color</FormLabel>
            <RadioGroup value={this.state.radioColor} onChange={this.handleChangeColor} row>
              <FormControlLabel
                value='red'
                control={
                  <Radio style={{'--radio-color': colors.red[500]}} classes={{root: classes.radio, checked: classes.checked}} />
                }
              />
              <FormControlLabel
                value='green'
                control={
                  <Radio style={{'--radio-color': colors.green[500]}} classes={{root: classes.radio, checked: classes.checked}} />
                }
              />
              <FormControlLabel
                value='blue'
                control={
                  <Radio style={{'--radio-color': colors.blue[500]}} classes={{root: classes.radio, checked: classes.checked}} />
                }
              />
               <FormControlLabel
               value='purple'
                control={
                  <Radio style={{'--radio-color': colors.purple[500]}} classes={{root: classes.radio, checked: classes.checked}} />
                }
              />
              <FormControlLabel
                value='pink'
                control={
                  <Radio style={{'--radio-color': colors.pink[500]}} classes={{root: classes.radio, checked: classes.checked}} />
                }
              />
              
            </RadioGroup>
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
