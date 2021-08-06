import getGifs from '../../utilities/getGifs';

describe('Pruebas con getGifs Fetch', () => {
  test('Debe de traer 10 elementos', async () => {
    const gifs = await getGifs('Dragon Ball');
    expect(gifs.length).toBe(20);
  });
});
