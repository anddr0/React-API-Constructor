import { useState } from 'react';
import ApiForm from './components/api_form/ApiForm';
import Response from './components/Response';

function App() {
    const [response, setResponse] = useState(null);

    return (
        <div
            className="min-h-screen p-10 gap-5
            flex flex-col md:flex-row items-center justify-center
            bg-gray-900 text-white"
        >
            <ApiForm className="w-full max-w-2xl" response={response} setResponse={setResponse} />
            <Response className="w-full max-w-2xl" response={response} setResponse={setResponse} />
        </div>
    );
}

export default App;
