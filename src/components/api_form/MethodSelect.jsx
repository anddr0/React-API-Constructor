import React from 'react';

const MethodSelect = ({ setMethod }) => {
    return (
        <div>
            <select
                className="border-2 border-blue-800 rounded-md p-1 bg-gray-800"
                onChange={setMethod}
            >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
            </select>
        </div>
    );
};

export default MethodSelect;
