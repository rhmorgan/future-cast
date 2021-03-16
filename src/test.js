import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import MaterialUI from '@material-ui/core/'

const {
    Dialog,
    TextField,
    FlatButton,
    MuiThemeProvider,
    getMuiTheme,
  } = MaterialUI;
  
  class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = { open: true };
      this.handleClose = this._handleClose.bind(this);
    }
  
    _handleClose() {
      this.setState({ open: false });
    }
  
    render() {
      const actions = [
        <FlatButton
          type="reset"
          label="Reset"
          secondary={true}
          style={{ float: 'left' }}
          />,
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleClose}
          />,
        <FlatButton
          type="submit"
          label="Submit"
          primary={true}
          />,
      ];
  
      return (
        <Dialog
          title="Dialog With Custom Width"
          modal={true}
          open={this.state.open}
          >
          <form action="/" method="POST" onSubmit={(e) => { e.preventDefault(); alert('Submitted form!'); this.handleClose(); } }>
            This dialog spans the entire width of the screen.
            <TextField name="email" hintText="Email" />
            <TextField name="pwd" type="password" hintText="Password" />
            <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
              {actions}
            </div>
          </form>
        </Dialog>
      );
    }
  }
  
  const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme() }>
      <Example />
    </MuiThemeProvider>
  );
  
  ReactDOM.render(
    <App />,
    document.getElementById('container')
  );