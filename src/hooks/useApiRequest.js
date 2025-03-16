import { useState } from 'react';
import axios from 'axios';
import { handleApiError } from '../utils/handleApiError';

export function useApiRequest() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const sendRequest = async ({ method = 'GET', url, headers = {}, body = null }) => {
        setLoading(true);
        setError(null);
        setData(null);

        try {
            const response = await axios({
                method,
                url,
                headers,
                data: body,
                timeout: 10000,
            });

            setData(response.data);
        } catch (err) {
            const errorMessage = handleApiError(err, () =>
                sendRequest({ method, url, headers, body }),
            );
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return { sendRequest, data, error, loading };
}
