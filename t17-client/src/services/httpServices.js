import axios from 'axios';
import { URL_MAIN } from '../constants/constants';

const getTokenLocalStorage = JSON.stringify(localStorage.getItem('token'));
const AUTH_TOKEN = JSON.parse(getTokenLocalStorage) || '';

const apiServices = axios.create({
    baseURL: URL_MAIN,
});
  
if (AUTH_TOKEN !== '') {
    apiServices.defaults.headers.common['authorization'] = `Bearer ${AUTH_TOKEN}`;
}

// GET All
export const httpGetAll = (path) => {
    return apiServices.get(path);
};

// GET One
export const httpGetOne = (path, id) => {
    return apiServices.get(`${path}/${id}`);
};

// POST
export const httpPost = (path, data) => {
    return apiServices.post(path, data);
};

// UPDATE
export const httpPatch = (path, id, data) => {
    return apiServices.patch(`${path}/${id}`, data);
};

// DELETE
export const httpDelete = (path, id) => {
    return apiServices.delete(`${path}/${id}`);
};