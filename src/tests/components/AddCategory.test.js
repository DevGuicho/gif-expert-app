import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
  const setCategories = jest.fn();
  const categories = [];

  let wrapper = shallow(
    <AddCategory setCategories={setCategories} categories={categories} />
  );

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <AddCategory setCategories={setCategories} categories={categories} />
    );
  });

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';
    input.simulate('change', { target: { value } });
  });

  test('No debe de postear la información on submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Debe llamar el setCategories y limpiar la caja de texto', () => {
    const value = 'hola mundo';

    wrapper.find('input').simulate('change', { target: { value } });

    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(setCategories).toHaveBeenCalled();

    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
