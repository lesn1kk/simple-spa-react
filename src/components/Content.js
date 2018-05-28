import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    margin: 'auto',
  },
  body: {
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
    justifyContent: 'center',
    whiteSpace: 'pre',
  },
});

class Content extends Component {
  render() {
    const {classes} = this.props;
    const pageContent = this.props.content;

    return(
      <div className={classes.root}>
        <Typography className={classes.title} variant='display1'>
          {pageContent.title}
        </Typography>
        <Typography className={classes.body} variant='subheading'>
          {pageContent.body.map((element) => (
            <div>
              {element}
              <br />
            </div>
          ))}
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(Content);
