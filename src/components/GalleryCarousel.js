import React, { Component } from 'react';
import photosData from '../assets/photosData';

const carouselMaxWidth = 800;

class GalleryCarousel extends Component {
  render() {
    const objectPhotos = photosData[this.props.objectName];

    return(
      <div id='photosCarousel' className='carousel slide' data-ride='carousel' style={{
        maxWidth: carouselMaxWidth,
        margin: 'auto',
        width: '100%',
        paddingTop: '50px',
      }}>
        <ol className="carousel-indicators">
          {objectPhotos.map((photo, index) => (
            <li data-target="#photosCarousel" data-slide-to={index} className={(index === 0 ? 'active' : '')} key={photo.img}></li>
          ))}
        </ol>
        <div className='carousel-inner d-flex align-items-end'>
          {objectPhotos.map((photo, index) => (
              <div className={'carousel-item ' + (index === 0 ? 'active' : '')} style={{ paddingLeft: 100, paddingRight: 100, paddingBottom: 100 }} key={photo.img}>
                <div style={{ height: '450px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                  <img className='d-block w-100' src={photo.img} alt={photo.title} />
                  <div className='carousel-caption d-md-block'>
                    <h5>{photo.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          <a className="carousel-control-prev" href="#photosCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" style={{ color: 'black' }}></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#photosCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
}

export default GalleryCarousel;
