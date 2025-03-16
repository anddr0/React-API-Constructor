import React, { useState } from 'react';
import MethodSelect from './MethodSelect';
import ApiUrl from './ApiUrl';
import ApiHeaders from './ApiHeaders';
import ApiBody from './ApiBody';
import { SendOutlined, CheckCircle } from '@mui/icons-material';
import { useApiRequest } from '../../hooks/useApiRequest';

const ApiForm = ({ setResponse }) => {
    const { sendRequest, data, error, loading } = useApiRequest();
    const [apiMethod, setMethod] = useState('GET');
    const [apiUrl, setUrl] = useState('');
    const [apiHeaders, setHeaders] = useState({});
    const [body, setBody] = useState(null);

    const handleSendRequest = (e) => {
        e.preventDefault();

        try {
            new URL(apiUrl);
        } catch {
            setResponse({ error: 'Enter correct URL!' });
            return;
        }
        sendRequest({ method: apiMethod, url: apiUrl, headers: apiHeaders, body });
    };

    // Когда запрос завершился, передаем данные наверх
    React.useEffect(() => {
        if (data) setResponse(data);
        if (error) setResponse(error);
    }, [data, error, setResponse]);

    return (
        <div className="border-2 border-blue-800 rounded-md flex flex-col items-center justify-center gap-4 p-12">
            <h1 className="text-4xl font-bold m-5">API Constructor</h1>
            <form className="w-full max-w-2xl flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                    <MethodSelect setMethod={(e) => setMethod(e.target.value)} />
                    <ApiUrl apiUrl={apiUrl} setUrl={(e) => setUrl(e.target.value)} />
                </div>
                <ApiHeaders
                    setHeaders={(newHeaders) => {
                        setHeaders(Object.fromEntries(newHeaders.map((h) => [h.key, h.value])));
                    }}
                />
                <ApiBody setBody={setBody} />
                <button
                    className={`bg-blue-600/80 hover:bg-blue-700/30 p-1 rounded-md flex flex-row items-center justify-center gap-2 ${
                        loading || !apiUrl.trim()
                            ? 'bg-gray-600 cursor-not-allowed hover:bg-gray-600'
                            : ''
                    }`}
                    onClick={handleSendRequest}
                    disabled={loading || !apiUrl.trim()}
                >
                    {loading ? <CheckCircle className="m-1" /> : <SendOutlined className="m-1" />}
                    {loading ? 'Sending...' : 'Send API Request'}
                </button>
            </form>
        </div>
    );
};

export default ApiForm;
