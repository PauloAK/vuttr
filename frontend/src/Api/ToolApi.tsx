import IResponse from '../Interfaces/IResponse';
import ITool from '../Interfaces/ITool';
import Client from './Client';

interface IToolApi {
    list: (queryString?: string) => Promise<IResponse>,
    store: (formData: ITool) => Promise<IResponse>,
    destroy: (id: number) => Promise<IResponse>
}

export const ToolApi : IToolApi = {
    list: async (queryString?: string) => {
        return Client.get('/api/v1/tools' + (queryString || ''));
    },
    store: async (formData: ITool) => {
        return Client.post('/api/v1/tools', formData);
    },
    destroy: async (id: number) => {
        return Client.destroy(`/api/v1/tools/${id}`);
    }
};

export default ToolApi;