import React, { Component } from 'react';
import './App.css';
import { CssBaseline, AppBar, Toolbar, Typography } from 'material-ui';

class App extends Component {
  render () {
    return (
      <div>
        <CssBaseline />
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography className="app-bar" variant="title" color="inherit">
              My Reads
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default App;
