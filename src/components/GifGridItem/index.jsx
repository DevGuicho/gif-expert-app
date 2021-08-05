import React from 'react';
import './styles.css';

const GifGridItem = ({ img }) => {
  return (
    <figure className="container__gif animate__animated animate__fadeInDown">
      <img className="gif" src={img.url} alt={img.title} />
      <figcaption className="gif__caption">{img.title}</figcaption>
    </figure>
  );
};

export default GifGridItem;
