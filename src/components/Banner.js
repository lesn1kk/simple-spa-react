import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return(
      <img src='http://via.placeholder.com/700x150' height={ this.props.height } width={ this.props.width } alt='Banner'/>
    )
  }
}

export default Banner;
