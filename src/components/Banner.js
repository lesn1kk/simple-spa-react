import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return(
      <img src={process.env.PUBLIC_URL + '/banner.jpg'} style={{
        width: '100%',
        paddingBottom: '500px',
        minWidth: '935px' }} alt='Banner'/>
    )
  }
}

export default Banner;
