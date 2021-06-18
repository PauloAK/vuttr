import React, { useEffect, useState } from 'react';
import { GoPlus } from "react-icons/go";
import Tool from '../../Components/Pages/Tool';
import ITool from '../../Interfaces/ITool';
import ToolApi from '../../Api/ToolApi';
import { useLoading } from '../../Providers/LoadingProvider';
import Swal from '../../Components/UI/Swal';
import Modal from '../../Components/UI/Modal';
import Input from '../../Components/Form/Input';
import { default as DefaultSwal } from 'sweetalert2';

const Tools: React.FC<{}> = () => {
    const [ tools, setTools ] = useState<ITool[]>([]);
    const [ modal, setModal ] = useState(false);
    const [ currentTool, setCurrentTool ] = useState<ITool>({
        name: '',
        link: '',
        description: '',
        tags: ''
    });
    const [ toolFormErrors, setToolFormErrors ] = useState({});
    const loading = useLoading();
    const [ tagSearch, setTagSearch ] = useState<any>(false);
    const [ inputSearch, setInputSearch ] = useState<any>('');

    useEffect( () => {
        listTools();
    }, []);

    const listTools = async (queryString?: string) => {
        loading.show();
        let response = await ToolApi.list(queryString);
        if (response.status === 200) {
            setTools(response.json);
        } else {
            Swal.showToast('error', 'Error while getting tools list');
        }
        loading.hide();
    }

    const handleToolSubmit = async (e : React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        loading.show();
        setToolFormErrors({});
        let response = await ToolApi.store(currentTool);
        if (response.status !== 201) {
            if (response.status === 422) {
                setToolFormErrors(response.json.errors);
            } else {
                Swal.showToast('error', 'Error while creating your tool');
            }
        } else {
            Swal.showToast('success', 'Tool created succesfully!');
            setInputSearch('');
            setCurrentTool({
                name: '',
                link: '',
                description: '',
                tags: ''
            });
            setModal(false);
            listTools();
        }
        loading.hide();
    }

    const handleToolChange = (e: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentTool({
            ...currentTool,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const deleteTool = (tool: ITool) => {
        DefaultSwal.fire({
            html: `Do you want to remove <b>${tool.name}</b>?`,
            title: `Remove tool`,
            icon: 'info',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#EF4444',
            cancelButtonColor: '#3B82F6',
            focusCancel: true,
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Yes, remove'
        }).then(async (confirm) => {
            if (!confirm.isConfirmed)
                return;
            loading.show();
            let response = await ToolApi.destroy(tool.id as number);
            if (response.status !== 204) {
                Swal.showToast('error', 'Error while removing your tool');
            } else {
                Swal.showToast('success', 'Tool removed succesfully!');
                filterToolsList();
            }
            loading.hide();
        });
    }

    const filterToolsList = () => {
        let query = '';
        if (inputSearch) {
            query = '?' + new URLSearchParams({
                [tagSearch ? 'tag' : 'q']: inputSearch
            }).toString();
        }
        listTools(query);
    }

    useEffect( () => {
        filterToolsList();
    }, [ tagSearch ]);

    return (
        <>
            <div className="w-full flex h-full justify-center overflow-y-auto">
                <div className="w-full px-2 md:px-0 md:w-2/3 lg:w-3/5 xl:w-2/5">
                    <h1 className="text-3xl font-semibold">VUTTR</h1>
                    <h2 className="text-lg font-medium">Very Useful Tools to Remember</h2>

                    <div className="w-full flex justify-between mt-6">
                        <div className="search flex items-center gap-1">
                            <input type="text" className="input-style" placeholder="node" onBlur={() => { filterToolsList() }} value={inputSearch} onChange={(e: any) => { setInputSearch(e.target.value) }}/>
                            <label htmlFor="tags" className="flex gap-1 items-center text-sm">
                                <input type="checkbox" name="tags" id="tags" onClick={(e: any) => { setTagSearch(e.target.checked) }} checked={tagSearch}/>
                                Search in tags only
                            </label>
                        </div>
                        <div className="add">
                            <button className="btn btn-blue" onClick={() => { setModal(true) }}>
                                <GoPlus/>
                                Add
                            </button>
                        </div>
                    </div>

                    <div id="tools-container" className="w-full my-3">
                        { tools.length ?
                            tools.map((tool, index) => (
                                <Tool key={index} data={tool} deleteMethod={deleteTool} />
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

            <Modal isOpen={modal} setIsOpen={setModal} title={(
                <>
                    <div className="flex items-center text-gray-600 font-semibold gap-1">
                        <GoPlus/> Add new tool
                    </div>
                </>
            )}>
                <form onSubmit={handleToolSubmit}>
                    <Input
                        label="Tool Name"
                        type="text"
                        name="name"
                        placeholder="Insert the tool name"
                        onChange={handleToolChange}
                        value={currentTool.name}
                        required={true}
                        errors={toolFormErrors}
                    />
                    
                    <Input
                        label="Tool Link"
                        type="url"
                        name="link"
                        placeholder="Insert the tool link"
                        onChange={handleToolChange}
                        value={currentTool.link}
                        required={true}
                        errors={toolFormErrors}
                    />

                    <Input
                        label="Tool Description"
                        type="textarea"
                        name="description"
                        placeholder="Tool description"
                        onChange={handleToolChange}
                        value={currentTool.description}
                        required={true}
                        errors={toolFormErrors}
                    />

                    <Input
                        label="Tags (Separated by spaces)"
                        type="text"
                        name="tags"
                        placeholder="tag1 tag2"
                        onChange={handleToolChange}
                        value={currentTool.tags}
                        required={true}
                        errors={toolFormErrors}
                    />

                    <div className="mt-4 mb-2 flex justify-end w-full">
                        <button className="btn btn-blue">
                            Add Tool
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default Tools;