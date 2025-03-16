import { renderHook, act } from '@testing-library/react';
import { useApiRequest } from '../hooks/useApiRequest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mockAxios = new MockAdapter(axios);

describe('useApiRequest', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should make a successful GET request', async () => {
        mockAxios.onGet('/test').reply(200, { success: true });

        const { result } = renderHook(() => useApiRequest());

        await act(async () => {
            await result.current.sendRequest({ method: 'GET', url: '/test' });
        });

        expect(result.current.data).toEqual({ success: true });
        expect(result.current.error).toBeNull();
    });

    it('should handle a 404 error', async () => {
        mockAxios.onGet('/not-found').reply(404, { message: 'Not Found' });

        const { result } = renderHook(() => useApiRequest());

        await act(async () => {
            await result.current.sendRequest({ method: 'GET', url: '/not-found' });
        });

        expect(result.current.error).toEqual({
            status: 404,
            message: 'API endpoint not found.',
        });
        expect(result.current.data).toBeNull();
    });

    it('should handle a network error', async () => {
        mockAxios.onGet('/network-error').networkError();

        const { result } = renderHook(() => useApiRequest());

        await act(async () => {
            await result.current.sendRequest({ method: 'GET', url: '/network-error' });
        });

        expect(result.current.error).toEqual({
            status: 0,
            message: 'Network error. Please check your connection or your CORS policy',
        });
        expect(result.current.data).toBeNull();
    });
});
