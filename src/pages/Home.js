import React, { Component } from "react";
import Content from '../components/Content';
import contentData from '../assets/contentData';

class Home extends Component {
  render() {
    return(
      <Content content={contentData.home} />
    )
  }
}

export default Home;
