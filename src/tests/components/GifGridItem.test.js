import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
  const title = 'Un titulo';
  const url = 'https://localhost/algo.jpg';
  const wrapper = shallow(<GifGridItem url={url} title={title} />);

  test('debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe tener un parrafo con el titulo', () => {
    const figcaption = wrapper.find('figcaption');
    expect(figcaption.text().trim()).toBe(title);
  });

  test('Debe de tener la imagan igual al url y alt de los props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('Debe tener animate__fadeInDown', () => {
    const figure = wrapper.find('figure');
    expect(figure.prop('className').includes('animate__fadeInDown')).toBe(true);
  });
});
