import React from 'react';
import Storage from '../Storage';

const BASE_URL = process.env.REACT_APP_API_URL; 

interface IClient {
    _request: (endPoint: string, method: string, body?: object) => {},
    get: (endPoint: string) => {},
    post: (endPoint: string, body?: object) => {},
    destroy: (endPoint: string) => {},
}

interface IData {
    method: string,
    headers: {
        "Accept": string,
        "Content-Type": string,
        "Authorization"?: string
    },
    body: string|null
}

const Client : IClient = {
    _request : async (endPoint, method, body = {}) => {
        let data : IData = {
            method: method,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: method != 'GET' ? JSON.stringify(body) : null
        };

        if (Storage.exists('token'))
            data.headers.Authorization = `Bearer ${Storage.get('token')}`;
        let req = await fetch(`${BASE_URL}${endPoint}`, data);

        return {
            status: req.status,
            json: await req.json()
        };
    },
    get : async (endPoint) => {
        return Client._request(endPoint, 'GET');
    },

    post : async (endPoint, body) => {
        return Client._request(endPoint, 'POST', body);
    },

    destroy : async (endPoint) => { // Unable to name as delete
        return Client._request(endPoint, 'DELETE');
    }
};

export default Client;