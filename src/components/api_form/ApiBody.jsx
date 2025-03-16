import React, { useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useToggle } from '../../hooks/useToggle';

export default function ApiBody({ setBody }) {
    const [body, updateBody] = useState('');
    const [isOpen, toggle] = useToggle();
    const [error, setError] = useState(false);

    function handleChange(e) {
        const value = e.target.value.trim();
        updateBody(value);
        if (!value) {
            setBody(null);
            setError(false);
            return;
        }
        try {
            setBody(JSON.parse(e.target.value));
            setError(false);
        } catch {
            setBody(null);
            setError(true);
        }
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
                    <h3 className="text-gray-300 m-1 text-base">Request Body</h3>
                    {isOpen ? <ExpandLess /> : <ExpandMore />}
                </button>
            </div>

            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'
                }`}
            >
                <textarea
                    className={`
                        w-full border-2 border-blue-800 rounded-md bg-gray-800 p-2
                        ${error ? 'border-red-500' : ''}
                    `}
                    rows="6"
                    cols="50"
                    placeholder='{"name": "John"}'
                    value={body}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}
