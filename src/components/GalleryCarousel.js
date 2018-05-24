import React, { Component } from 'react';
import photosData from '../assets/photosData';

const carouselInnerMinHeight = 450;
const carouselInnerMinWidth = 500;

class GalleryCarousel extends Component {
  render() {
    return(
      <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
        <ol className="carousel-indicators">
          {photosData.map((photo, index) => (
            <li data-target="#carouselExampleIndicators" data-slide-to={index} className={(index === 0 ? 'active' : '')} key={photo.img}></li>
          ))}
        </ol>
        <div className='carousel-inner' style={{ minHeight: carouselInnerMinHeight, width: carouselInnerMinWidth }}>
          {photosData.map((photo, index) => (
              <div className={'carousel-item ' + (index === 0 ? 'active' : '')} style={{ padding: (carouselInnerMinHeight - photo.height)/2 }} key={photo.img}>
                <img className='d-block w-100' src={photo.img} alt={photo.title} />
                <div className='carousel-caption d-md-block'>
                  <h5>{photo.title}</h5>
                </div>
              </div>
            ))}
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
}

export default GalleryCarousel;
