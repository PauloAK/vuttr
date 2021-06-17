import React from 'react'
import { useState } from 'react'

interface Props {
    isOpen: boolean
}

const Modal : React.FC<Props> = ({children, isOpen = true}) => {
    const [ opened, setOpened ] = useState(isOpen);
    return (
        <>
            {
                opened ?
                    <>
                        <div className="backdrop absolute top-0 bottom-0 right-0 left-0 bg-gray-900 bg-opacity-40 z-30"></div>
                        <div className="modal z-50 absolute top-0 flex h-full w-full justify-center items-center">
                            <div className="modal-content bg-white rounded w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                                <div className="w-full p-2">
                                    {children}
                                </div>
                                <div className="w-full border-t border-gray-200 flex justify-end p-2 gap-2">
                                    <button className="btn btn-red" onClick={() => { setOpened(!opened) }}>
                                        Close
                                    </button>
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
