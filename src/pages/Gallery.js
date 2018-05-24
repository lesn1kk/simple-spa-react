import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import GalleryCarousel from '../components/GalleryCarousel';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'gray',
    minHeight: 500,
  }
})

class Gallery extends Component {
  render() {
    const {classes} = this.props;

    return(
      <div className={classes.root}>
        <GalleryCarousel />
      </div>
    )
  }
}

export default withStyles(styles)(Gallery);
