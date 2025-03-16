import React from 'react';

const ApiUrl = ({ apiUrl, setUrl }) => {
    return (
        <div className="w-full">
            <input
                className="w-full border-2 border-blue-800 rounded-md p-1 bg-gray-800 pl-2"
                type="text"
                placeholder="URL (required)"
                value={apiUrl}
                onChange={(e) => setUrl(e)}
            />
        </div>
    );
};

export default ApiUrl;
