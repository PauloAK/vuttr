import IUser from '../Interfaces/IUser';
import Client from './Client';

interface IAuthApi {
    login: (user: IUser) => {},
    me: () => {},
    refreshToken: () => {}
}

export const AuthApi : IAuthApi = {
    login: async (formData: IUser) => {
        return await Client.post('/api/v1/auth/login', formData);
    },
    me: async () => {
        return await Client.post('/api/v1/auth/me');
    },
    refreshToken: async () => {
        return await Client.post('/api/v1/auth/refresh');
    }
};

export default AuthApi;