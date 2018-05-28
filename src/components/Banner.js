import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return(
      <img src={process.env.PUBLIC_URL + '/banner.jpg'} className='App-banner' alt='Banner'/>
    )
  }
}

export default Banner;
