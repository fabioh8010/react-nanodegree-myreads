import React, { Component } from 'react';
import { withStyles, Grid } from 'material-ui';
import '../App.css';
import Book from './Book'

const styles = {
  container: {
    flexGrow: 1,
    padding: 24
  }
}

class Bookshelf extends Component {
  render () {
    const { classes, books } = this.props

    return (
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Grid container justify="flex-start" spacing={24}>
            {books.map((book, index) => (
              <Grid key={index} item>
                <Book data={book} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Bookshelf);