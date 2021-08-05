import { useEffect, useState } from 'react';
import getGifs from '../utilities/getGifs';

const useFetchGifs = ({ query = 'Dragon Ball Z' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ query: encodeURI(query) })
      .then((gifs) => {
        setGifs(gifs);
        setIsLoading(false);
      })
      .catch(() => setError(false));
  }, [query]);

  return { isLoading, error, gifs };
};

export default useFetchGifs;
