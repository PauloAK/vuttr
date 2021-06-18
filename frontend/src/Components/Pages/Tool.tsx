import React from 'react';
import ITool from '../../Interfaces/ITool';
import { TiTimes } from "react-icons/ti";

interface Props {
    data: ITool,
    deleteMethod: (tool: ITool) => void
}

const Tool: React.FC<Props> = ({ data, deleteMethod }) => {
    return (
        <>
            <div className="tool p-2 px-4 w-full bg-white rounded-sm shadow-md my-2">
                <div className="header flex justify-between">
                    <a className="text-lg font-medium text-blue-500 hover:text-blue-400" href={data.link} target="_blank">
                        <h3>{data.name}</h3>
                    </a>
                    <button className="btn btn-red btn-sm" onClick={() => { deleteMethod(data) }}>
                        <TiTimes /> Remove
                    </button>
                </div>
                <div className="content">{data.description}</div>
                <div className="tags font-medium flex gap-1 text-sm mt-2 text-gray-500">
                    {data.tags.map( (tag : string) => (
                        <span key={tag}>#{tag}</span>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Tool;