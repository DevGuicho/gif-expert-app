import useFetchGifs from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
  test('debe de retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs());
    const { gifs, isLoading, error } = result.current;

    await waitForNextUpdate();

    expect(gifs).toEqual([]);
    expect(isLoading).toBe(true);
    expect(error).toBe(false);
  });

  test('debe tener un arreglo de gifs, isLoading igual a false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs());

    await waitForNextUpdate();

    const { gifs, isLoading, error } = result.current;
    expect(gifs.length).toBe(20);
    expect(isLoading).toBe(false);
    expect(error).toBe(false);
  });
});
