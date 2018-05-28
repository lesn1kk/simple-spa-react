import React, { Component } from "react";
import ContentWithGallery from '../components/ContentWithGallery';
import contentData from '../assets/contentData';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  }
})

class MuzeumChleba extends Component {
  render() {
    const {classes} = this.props;

    return(
      <ContentWithGallery className={classes.root} content={contentData.muzeumChleba} />
    )
  }
}

export default withStyles(styles)(MuzeumChleba);
