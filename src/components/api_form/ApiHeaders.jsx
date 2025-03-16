import React, { useState } from 'react';
import { DeleteOutline, AddOutlined, ExpandLess, ExpandMore } from '@mui/icons-material';
import { useToggle } from '../../hooks/useToggle';

const ApiHeaders = ({ setHeaders }) => {
    const [headers, setNewHeaders] = useState([{ key: '', value: '' }]);
    const [isOpen, toggle] = useToggle();

    function addHeader(e) {
        e.preventDefault();
        setNewHeaders([...headers, { key: '', value: '' }]);
    }

    function updateHeaders(newHeaders) {
        setNewHeaders(newHeaders);
        const requestHeaders = newHeaders.filter((header) => header.key.trim() !== '');
        setHeaders(requestHeaders);
    }

    function changeHeader(index, field, value) {
        const newHeaders = [...headers];
        newHeaders[index][field] = value;
        updateHeaders(newHeaders);
    }

    function removeHeader(index) {
        updateHeaders(headers.filter((_, i) => i !== index));
    }

    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        toggle();
                    }}
                    className="text-gray-300 flex justify-between w-full"
                >
                    <h3 className="text-gray-300 m-1 text-base">Headers</h3>
                    {isOpen ? <ExpandLess /> : <ExpandMore />}
                </button>
            </div>

            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'
                }`}
            >
                <div className="max-h-60 overflow-auto flex flex-col gap-2 w-full">
                    {headers.map((header, index) => (
                        <div key={index} className="flex flex-wrap items-center gap-2 w-full">
                            <input
                                className="border-2 border-blue-800 rounded-md p-1 bg-gray-800 flex-1"
                                placeholder="Key"
                                type="text"
                                value={header.key}
                                onChange={(e) => changeHeader(index, 'key', e.target.value)}
                            />
                            <input
                                className="border-2 border-blue-800 rounded-md p-1 bg-gray-800 flex-1"
                                placeholder="Value"
                                type="text"
                                value={header.value}
                                onChange={(e) => changeHeader(index, 'value', e.target.value)}
                            />
                            <button
                                className="bg-red-500/80 hover:bg-red-700 p-1 rounded-md"
                                onClick={(e) => {
                                    e.preventDefault();
                                    removeHeader(index);
                                }}
                            >
                                <DeleteOutline />
                            </button>
                        </div>
                    ))}
                </div>
                <button
                    className="w-full flex flex-row justify-center rounded-md my-2
                             border-2 border-blue-800 hover:bg-blue-600/30 p-1 "
                    onClick={addHeader}
                >
                    <AddOutlined />
                    Add Header
                </button>
            </div>
        </div>
    );
};

export default ApiHeaders;
