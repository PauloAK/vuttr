import React from 'react';
import { TiTimes } from 'react-icons/ti';

interface Props {
    title?: any,
    isOpen: boolean,
    setIsOpen: (open: boolean) => void
}

const Modal : React.FC<Props> = ({children, isOpen = true, setIsOpen, title}) => {
    return (
        <>
            {
                isOpen ?
                    <>
                        <div className="backdrop absolute top-0 bottom-0 right-0 left-0 bg-gray-900 bg-opacity-40 z-30"></div>
                        <div className="modal z-50 absolute top-0 flex h-full w-full justify-center items-center">
                            <div className="modal-content bg-white rounded w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                                <div className="w-full flex justify-between p-2 gap-2 items-center">
                                    <div className="title text-lg">
                                        { title ? title : '' }
                                    </div>
                                    <a className="text-gray-400 hover:text-red-400 cursor-pointer" onClick={() => { setIsOpen(false); }}>
                                        <TiTimes />
                                    </a>
                                </div>
                                <div className="w-full p-2 px-4">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </>
                : ''
            }
        </>
    )
}

export default Modal
