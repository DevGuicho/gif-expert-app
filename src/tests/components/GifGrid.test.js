import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import GifGrid from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  test('Debe mostrar correctamente el componente', () => {
    useFetchGifs.mockReturnValue({ isLoading: true, error: false, gifs: [] });

    const wrapper = shallow(<GifGrid category={'naruto'} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar items cuando se cargan imagenes con useFetchGif', () => {
    const gifs = [{ id: '12', title: 'Naruto', url: 'https://localhost' }];
    useFetchGifs.mockReturnValue({
      isLoading: false,
      error: false,
      gifs,
    });
    const wrapper = shallow(<GifGrid category={'naruto'} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
