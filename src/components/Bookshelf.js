import React, { Component } from 'react';
import { withStyles, Typography, Divider } from 'material-ui';
import '../App.css';
import BookList from './BookList'

const styles = {
  container: {
    paddingBottom: 24
  },
  title: {
    flex: 1
  }
}

class Bookshelf extends Component {
  render () {
    const { classes, title, books } = this.props

    return (
      <div className={classes.container}>
        <Typography className={classes.title} variant="display2" color="secondary">
          {title}
        </Typography>
        <Divider />
        <BookList books={books} />
      </div>
    );
  }
}

export default withStyles(styles)(Bookshelf);