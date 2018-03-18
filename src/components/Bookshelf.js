import React, { Component } from 'react';
import { withStyles, Typography, Divider } from 'material-ui';
import '../App.css';

const styles = {
  title: {
    flex: 1
  }
}

class Bookshelf extends Component {
  render () {
    const { classes, title } = this.props

    return (
      <div>
        <Typography className={classes.title} variant="display2" color="secondary">
          {title}
        </Typography>
        <Divider />
      </div>
    );
  }
}

export default withStyles(styles)(Bookshelf);
