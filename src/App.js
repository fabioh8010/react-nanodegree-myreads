import React, { Component } from 'react';
import './App.css';
import { withStyles, CssBaseline, AppBar, Toolbar, Typography } from 'material-ui';
import Bookshelf from './components/Bookshelf'
import { getAll } from './BooksAPI'

const styles = {
  appBar: {
    flex: 1
  }
}

class App extends Component {
  state = {
    currentlyReadingBooks: [],
    wantToReadBooks: [],
    readBooks: []
  }

  filterByShelf = (books, shelf) => {
    return books.filter((book) => book.shelf === shelf)
  }

  componentDidMount () {
    getAll()
      .then((books) => {
        this.setState({
          currentlyReadingBooks: this.filterByShelf(books, "currentlyReading"),
          wantToReadBooks: this.filterByShelf(books, "wantToRead"),
          readBooks: this.filterByShelf(books, "read")
        })
      });
  }

  render () {
    const { classes } = this.props
    const { currentlyReadingBooks, wantToReadBooks, readBooks } = this.state

    return (
      <div>
        <CssBaseline />
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography className={classes.appBar} variant="title" color="inherit">
              My Reads
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="main-content">
          <Bookshelf title="Currently Reading" books={currentlyReadingBooks} />
          <Bookshelf title="Want to Read" books={wantToReadBooks} />
          <Bookshelf title="Read" books={readBooks} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
