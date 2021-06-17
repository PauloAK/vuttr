import { createContext, useContext, useState } from 'react';
import Loading from '../Components/UI/Loading';

export const LoadingContext = createContext({});

export const LoadingProvider : React.FC<{}> = ({ children }) => {
    const [loading, setLoading] = useState(false);
    
    const show = () => {
        setLoading(true);
    }

    const hide = () => {
        setLoading(false);
    }

    return (
        <LoadingContext.Provider value={{ hide, show }}>
            {children}
            { loading ? <Loading /> : '' }
        </LoadingContext.Provider>
    )
}

export const useLoading = () => useContext(LoadingContext)