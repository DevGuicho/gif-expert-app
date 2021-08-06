import React from 'react';
import PropTypes from 'prop-types';

import useFetchGifs from '../../hooks/useFetchGifs';
import GifGridItem from '../GifGridItem';
import './styles.css';

const GifGrid = ({ category }) => {
  const { gifs, isLoading, error } = useFetchGifs({ query: category });

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Hubo un error :(</h1>;

  return (
    <div>
      <h3 className="text__category">{category}</h3>
      <div className="grid__gifs">
        {gifs.map((gif) => (
          <GifGridItem key={gif.id} {...gif} />
        ))}
      </div>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
