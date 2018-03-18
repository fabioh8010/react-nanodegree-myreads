import React, { Component } from 'react';
import './App.css';
import { CssBaseline, AppBar, Toolbar, Typography } from 'material-ui';
import Bookshelf from './components/Bookshelf'

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
        <div className="main-content">
          <Bookshelf title="Currently Reading" />
        </div>
      </div>
    );
  }
}

export default App;
