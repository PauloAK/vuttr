import { createContext, useContext, useState } from 'react';
import Loading from '../Components/UI/Loading';

interface ILoading {
    show: () => void,
    hide: () => void
}

export const LoadingContext = createContext<ILoading>({
    show: () => {},
    hide: () => {}
});

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
            { loading ? <Loading /> : '' }
            {children}
        </LoadingContext.Provider>
    )
}

export const useLoading = () => useContext(LoadingContext)