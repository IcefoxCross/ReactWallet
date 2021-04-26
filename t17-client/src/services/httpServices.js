import axios from 'axios';
import { MAIN_URL } from '../constants/constants';

const getTokenLocalStorage = JSON.stringify(localStorage.getItem('token'));
const AUTH_TOKEN = JSON.parse(getTokenLocalStorage) || '';

const apiServices = axios.create({
    baseURL: MAIN_URL,
});

if (AUTH_TOKEN !== '') {
    apiServices.defaults.headers.common['authorization'] = `Bearer ${AUTH_TOKEN}`;
}

const config = {
    headers: {
        "Content-Type": "multipart/form-data",
    }
};

// GET All
export const httpGetAll = (path) => {
    return apiServices.get(path);
};

// GET One
export const httpGetOne = (path, id) => {
    return apiServices.get(`${path}/${id}`);
};

// POST (data formatted as form-data)
export const httpPost = (path, data) => {
    return apiServices.post(path, data, config);
};

// UPDATE (data formatted as form-data)
export const httpPatch = (path, id, data) => {
    return apiServices.patch(`${path}/${id}`, data, config);
};

// DELETE
export const httpDelete = (path, id) => {
    return apiServices.delete(`${path}/${id}`);
};

