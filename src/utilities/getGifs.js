const getGifs = async ({
  limit = 20,
  offset = 0,
  query = 'trendings',
} = {}) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${query}&limit=${limit}&offset=${offset}&rating=r&api_key=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized.url,
    };
  });
  return gifs;
};
export default getGifs;
