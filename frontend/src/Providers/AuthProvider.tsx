import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthApi from '../Api/AuthApi';
import Swal from '../Components/UI/Swal';
import IUser from '../Interfaces/IUser';
import Storage from '../Storage';
import { useLoading } from './LoadingProvider';

interface IAuth {
    user?: {},
    check: () => boolean,
    getToken?: () => Promise<string>,
    login: (user: IUser) => void,
    logout?: () => void
}

export const AuthContext = createContext<IAuth>({
    check: () => false,
    login: (user: IUser) => {}
});

export const AuthProvider : React.FC<{}> = ({ children }) => {
    const [user, setUser] = useState({});
    const history = useHistory();
    const loading = useLoading();

    useEffect( () => {
        async function checkToken () {
            await checkForTokenRefresh();
            loading.hide();
        }
        if (Storage.exists('user')) {
            setUser(Storage.get('user'));
            loading.show();
            checkToken();
        }
    }, []);

    const check = () => {
        let tokenRefreshDate = Storage.get('token_refresh_date') as string;
        if ( !tokenRefreshDate || new Date(tokenRefreshDate) <= new Date )
            return false;
        return Storage.exists('user');
    };

    const getToken = async () => {
        if (!Storage.exists('token'))
            return '';
        await checkForTokenRefresh();
        return `Bearer ${Storage.get('token')}`;
    };

    const checkForTokenRefresh = async () => {
        if (Storage.exists('isRefreshingToken'))
            return;
        let tokenRefreshDate = Storage.get('token_refresh_date') as string;
        if ( !tokenRefreshDate || new Date(tokenRefreshDate) <= new Date ) {
            Storage.set('isRefreshingToken', true);
            let refresh = await AuthApi.refreshToken();

            if (refresh.status === 401) {
                Storage.clear();
                Swal.showToast('error', 'Sessão expirada, faça login novamente');
                history.push('/login');
            } else {
                Storage.set('token', refresh.json.access_token);
                setRefreshDate();
                Storage.remove('isRefreshingToken');
            }
        }
    }

    const login = (user: IUser) => {
        Storage.set('user', user);
        setRefreshDate();
    }

    const logout = () => {
        Storage.clear();
        history.push('/signin');
    }

    const setRefreshDate = () => {
        let newRefreshDate = new Date;
        newRefreshDate.setMinutes( newRefreshDate.getMinutes() + 20 );
        Storage.set('token_refresh_date', newRefreshDate);
    }

    return (
        <AuthContext.Provider value={{ user, check, getToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);