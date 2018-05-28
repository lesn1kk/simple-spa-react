import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import GalleryCarousel from './GalleryCarousel';
import Content from './Content';

const styles = theme => ({
  root: {
    display: 'flex',
    WebkitBoxOrient: 'vertical!important',
    WebKitBoxDirection: 'normal!important',
    flexDirection: 'column!important',
    justifyContent: 'center',
    marginRight: 150,
  },
});

class ContentWithGallery extends Component {
  render() {
    const {classes} = this.props;

    return(
      <div className={classes.root}>
        <Content content={this.props.content} />
        <GalleryCarousel objectName={this.props.content.objectName} />
      </div>
    )
  }
}

export default withStyles(styles)(ContentWithGallery);
