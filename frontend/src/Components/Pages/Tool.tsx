import React from 'react';
import ITool from '../../Interfaces/ITool';
import { TiTimes } from "react-icons/ti"
import { Link } from 'react-router-dom';

const Tool: React.FC<{data: ITool}> = ({ data }) => {
    return (
        <div className="tool p-2 px-4 w-full bg-white rounded-sm shadow-md">
            <div className="header flex justify-between">
                <Link className="text-lg font-medium text-blue-500 hover:text-blue-400" to={data.link}><h3>{data.name}</h3></Link>
                <button className="btn btn-red btn-sm">
                    <TiTimes />
                    Remove
                </button>
            </div>
            <div className="content">{data.description}</div>
            <div className="tags font-medium flex gap-1 text-sm mt-2">
                {data.tags.map( (tag : string) => (
                    <span>{tag}</span>
                ))}
            </div>
        </div>
    );
}

export default Tool;