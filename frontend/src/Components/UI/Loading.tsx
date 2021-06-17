import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <>
            <div className="loading absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                <div className="backdrop bg-gray-800 bg-opacity-50 h-full w-full z-40"></div>
                <ReactLoading type='spokes' color='#fff' height="40px" width="40px" className="z-50 absolute" />
            </div>
        </>
    );
}

export default Loading;