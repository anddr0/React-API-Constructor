export function handleApiError(error, retryFunction) {
    if (!error.response) {
        return {
            status: 0,
            message: 'Network error. Please check your connection or your CORS policy',
        };
    }

    const { status, data } = error.response;

    switch (status) {
        case 400:
            return { status, message: 'Bad Request. Please check the input data.' };

        case 401:
            return { status, message: 'Requires authentication' };

        case 403:
            return { status, message: 'Forbidden. You do not have access.' };

        case 404:
            return { status, message: 'API endpoint not found.' };

        case 429:
            console.warn('Too many requests. Retrying in 2 seconds...');
            if (retryFunction) {
                setTimeout(retryFunction, 2000);
            }
            return { status, message: 'Too many requests. Please wait a moment and try again.' };

        case 500:
            return { status, message: 'Internal server error. Try again later.' };

        case 503:
            return { status, message: 'Service unavailable. Please try again later.' };

        default:
            return { status, message: data?.message || 'Something went wrong. Please try again.' };
    }
}
