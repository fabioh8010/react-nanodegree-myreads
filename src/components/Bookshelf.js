import React, { Component } from 'react';
import { Typography, Divider } from 'material-ui';
import '../App.css';

class Bookshelf extends Component {
  render () {
    const { title } = this.props

    return (
      <div>
        <Typography className="bookshelf-title" variant="display2" color="secondary">
          {title}
        </Typography>
        <Divider />
      </div>
    );
  }
}

export default Bookshelf;
