import React from 'react';
import LazyLoad from 'react-lazyload';

const ImageComponent = ({ src, alt }) => (
  <LazyLoad height={200} offset={100}>
    <img src={src} alt={alt} />
  </LazyLoad>
);

export default ImageComponent;
