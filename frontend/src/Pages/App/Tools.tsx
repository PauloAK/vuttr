import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { GoPlus } from "react-icons/go";
import Tool from '../../Components/Pages/Tool';
import ITool from '../../Interfaces/ITool';
import ToolApi from '../../Api/ToolApi';
import { useLoading } from '../../Providers/LoadingProvider';
import Swal from '../../Components/UI/Swal';
import Modal from '../../Components/UI/Modal';

const Tools: React.FC<{}> = () => {
    const [ tools, setTools ] = useState<ITool[]>([]);
    const loading = useLoading();

    useEffect( () => {
        listTools();
    }, []);

    const listTools = async () => {
        loading.show();
        let response = await ToolApi.list();
        if (response.status === 200) {
            setTools(response.json);
        } else {
            Swal.showToast('error', 'Error while getting tools list');
        }
        loading.hide();
    }

    return (
        <>
            <div className="w-full flex h-full justify-center items-center overflow-y-auto">
                <div className="w-full md:w-2-3 lg:w-3/5 xl:w-2/5">
                    <h1 className="text-3xl font-semibold">VUTTR</h1>
                    <h2 className="text-lg font-medium">Very Useful Tools to Remember</h2>

                    <div className="w-full flex justify-between mt-6">
                        <div className="search flex items-center gap-1">
                            <input type="text" className="input-style" placeholder="node"/>
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
                        { tools.length ?
                            tools.map(tool => (
                                <Tool data={tool} />
                            ))
                            : 
                            (
                                <div className="w-full text-center text-gray-600 italic font-normal">
                                    No tools found!
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            <Modal isOpen={true}>
                Teste
            </Modal>
        </>
    );
}

export default Tools;