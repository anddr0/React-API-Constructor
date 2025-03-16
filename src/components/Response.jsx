import React, { useState } from 'react';
import { ContentCopy, CheckCircle, DeleteOutline } from '@mui/icons-material';
import ReactJson from 'react-json-view';

const Response = ({ response, setResponse }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        if (response) {
            navigator.clipboard.writeText(
                typeof response === 'string' ? response : JSON.stringify(response, null, 2),
            );
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
        }
    };

    const clearResponse = () => {
        setResponse(null);
    };

    // Функция проверки: является ли response валидным JSON (объект или массив)
    const isValidJson = (data) => {
        return typeof data === 'object' && data !== null;
    };

    return (
        <div className="ease-in-out w-full max-w-2xl p-4 border border-gray-700 rounded-lg bg-gray-900 text-white">
            {/* Заголовок + кнопки */}
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold text-blue-400">Response</h2>

                {response && (
                    <div className="flex gap-2">
                        <button
                            onClick={copyToClipboard}
                            className={`flex items-center gap-1 px-3 py-1 text-sm rounded-md transition-all duration-300 ${
                                copied ? 'bg-green-600 text-white' : 'bg-gray-700 hover:bg-gray-600'
                            }`}
                        >
                            {copied ? (
                                <CheckCircle fontSize="small" />
                            ) : (
                                <ContentCopy fontSize="small" />
                            )}
                            {copied ? 'Copied!' : 'Copy'}
                        </button>

                        <button
                            onClick={clearResponse}
                            className="flex items-center gap-1 px-3 py-1 text-sm bg-red-600 hover:bg-red-500 text-white rounded-md"
                        >
                            <DeleteOutline fontSize="small" />
                            Clear
                        </button>
                    </div>
                )}
            </div>

            {/* Контейнер с прокруткой */}
            <div className="max-h-96 overflow-auto border border-gray-700 rounded-md bg-gray-800 p-3">
                {response ? (
                    isValidJson(response) ? (
                        <ReactJson
                            className="rounded-md"
                            src={response}
                            theme="ocean"
                            collapsed={1}
                            enableClipboard={false}
                            displayDataTypes={false}
                            indentWidth={2}
                        />
                    ) : (
                        <pre className="whitespace-pre-wrap break-words text-white text-sm">
                            {response}
                        </pre>
                    )
                ) : (
                    <p className="text-gray-400">No response yet</p>
                )}
            </div>
        </div>
    );
};

export default Response;
