import React, { Component } from 'react';
import { withStyles, Card, CardHeader, CardMedia, IconButton } from 'material-ui';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import '../App.css';

const styles = {
  container: {
    maxWidth: 250
  },
  media: {
    height: 300
  }
};

class Book extends Component {
  render () {
    const { classes, data } = this.props

    return (
      <Card className={classes.container}>
        <CardHeader
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={data.title}
          subheader={data.subtitle}
        />
        <CardMedia
          className={classes.media}
          image={data.imageLinks.thumbnail}
          title={data.title}
        />
      </Card>
    );
  }
}

export default withStyles(styles)(Book);