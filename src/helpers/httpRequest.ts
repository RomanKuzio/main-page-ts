import axios from 'axios';

    const serverPrefix = 'https://ski-rent-api.herokuapp.com/api';

const getHeaders = () => ({
    'Content-Type': 'application/json',
    Authorization: `JWT ${localStorage.getItem('token')}`,
    'Access-Control-Allow-Origin': '*',
    accept: 'application/json',
});

const sendRequest = (url, options) =>
    axios({
        ...options,
        url: serverPrefix + url,
        headers: getHeaders(),
    });

export const crudBuilder = url => ({
    post: data => sendRequest(url, { method: 'POST', data }),
    get: () =>sendRequest(url,{method: 'GET'}),
    getList: params => sendRequest(url, { method: 'GET', params }),
});
