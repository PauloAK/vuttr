import IResponse from '../Interfaces/IResponse';
import IUser from '../Interfaces/IUser';
import Client from './Client';

interface IAuthApi {
    login: (user: IUser) => Promise<IResponse>,
    me: () => Promise<IResponse>,
    refreshToken: () => Promise<IResponse>,
    register: (use: IUser) => Promise<IResponse>
}

export const AuthApi : IAuthApi = {
    login: async (formData: IUser) => {
        return Client.post('/api/v1/auth/login', formData);
    },
    me: async () => {
        return Client.post('/api/v1/auth/me');
    },
    refreshToken: async () => {
        return Client.post('/api/v1/auth/refresh');
    },
    register: async (formData: IUser) => {
        return Client.post('/api/v1/auth/register', formData);
    }
};

export default AuthApi;