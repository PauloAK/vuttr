import React from 'react';
import Box from '../../Components/UI/Box';
import { GoPlus } from "react-icons/go";
import { TiTimes } from "react-icons/ti"

const Tools: React.FC<{}> = () => {
    return (
        <>
            <div className="w-full flex h-full justify-center items-center overflow-y-auto">
                <div className="w-full md:w-2-3 lg:w-3/5 xl:w-2/5">
                    <h1 className="text-3xl font-semibold">VUTTR</h1>
                    <h2 className="text-lg font-medium">Very Useful Tools to Remember</h2>

                    <div className="w-full flex justify-between mt-6">
                        <div className="search flex items-center gap-1">
                            <input type="text" className="auto-size" placeholder="node"/>
                            <label htmlFor="tags" className="flex gap-1 items-center text-sm">
                                <input type="checkbox" name="tags" value="true" />
                                Search in tags only
                            </label>
                        </div>
                        <div className="add">
                            <button className="btn btn-blue">
                                <GoPlus/>
                                Add
                            </button>
                        </div>
                    </div>

                    <div id="tools-container" className="w-full mt-3">

                        <div className="tool p-2 px-4 w-full bg-white rounded-sm shadow-md">
                            <div className="header flex justify-between">
                                <h3 className="text-lg font-medium text-blue-500 hover:text-blue-400">Teste</h3>
                                <button className="btn btn-red btn-sm">
                                    <TiTimes />
                                    Remove
                                </button>
                            </div>
                            <div className="content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt atque, maiores officia eos ullam! Assumenda id nihil aliquid quas incidunt, quam possimus esse eveniet officiis dolorem commodi est harum.
                            </div>
                            <div className="tags font-medium flex gap-1 text-sm mt-2">
                                <span>#node</span>
                                <span className="bg-yellow-200 px-0.5">#restapi</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Tools;