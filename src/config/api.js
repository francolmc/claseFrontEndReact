import axios from "axios";

export const ApiWithoutToken = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_SERVER_URL
});

export const ApiWithToken = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_SERVER_URL,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    }
});