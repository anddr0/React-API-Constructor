import { handleApiError } from '../utils/handleApiError';

describe('handleApiError', () => {
    it('should return correct message for 400 error', () => {
        const error = { response: { status: 400 } };
        expect(handleApiError(error)).toEqual({
            status: 400,
            message: 'Bad Request. Please check the input data.',
        });
    });

    it('should return correct message for 401 error', () => {
        const error = { response: { status: 401 } };
        expect(handleApiError(error)).toEqual({ status: 401, message: 'Requires authentication' });
    });

    it('should retry request on 429', () => {
        jest.useFakeTimers();
        const retryMock = jest.fn();
        const error = { response: { status: 429 } };

        handleApiError(error, retryMock);

        jest.advanceTimersByTime(2000);
        expect(retryMock).toHaveBeenCalledTimes(1);
        jest.useRealTimers();
    });

    it('should return correct message for network error', () => {
        const error = {};
        expect(handleApiError(error)).toEqual({
            status: 0,
            message: 'Network error. Please check your connection or your CORS policy',
        });
    });
});
