import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const GifGridItem = ({ url, title }) => {
  return (
    <figure className="container__gif animate__animated animate__fadeInDown">
      <img className="gif" src={url} alt={title} />
      <figcaption className="gif__caption">{title}</figcaption>
    </figure>
  );
};

GifGridItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GifGridItem;
